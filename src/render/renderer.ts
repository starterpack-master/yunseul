import * as THREE from 'three';
import type { WorldId } from '../game/types';
import { BLUR_FRAG, COMPOSITE_FRAG, EXTRACT_FRAG, FINAL_FRAG, FULLSCREEN_VERT } from './shaders';
import { Stage, WORLD_LAYER } from './stage';

// 파스텔 색을 그대로 쓰기 위해 색 관리(선형 변환)를 끄고 감마 공간에서 작업해요.
THREE.ColorManagement.enabled = false;

const FOV = 28;
const PITCH = THREE.MathUtils.degToRad(8);
const TARGET_MIN_PX = 216;

export interface Ripple {
  x: number;
  z: number;
  t: number;
  s: number;
}

export interface RenderParams {
  /** 1 = 물 위 시점, -1 = 물 아래 시점(상하 반전), 그 사이는 뒤집기 전환 */
  sAmt: number;
  camX: number;
  time: number;
  ripples: Ripple[];
  partner: { x: number; y: number; world: WorldId; visible: boolean };
  clarity: number;
  fade: number;
  fadeColor: THREE.Color;
  glow: number;
  /** 사진 플래시 (0~1) */
  flash: number;
}

const PAL: Record<WorldId, { clear: number; fog: number; tintOther: [number, number, number]; sky: number; partner: number }> = {
  // 물 위(리아) 시점: 물속 별밤 세계를 조금 밝고 차갑게 비춰요.
  0: { clear: 0xffe3cf, fog: 0xffdcd6, tintOther: [1.12, 1.08, 1.1], sky: 0xffd2da, partner: 0xd9ccff },
  // 물 아래(아리) 시점: 수면 너머 노을 세계를 조금 어둡고 보랏빛으로 비춰요.
  1: { clear: 0x6b58a8, fog: 0x5d4e9c, tintOther: [0.78, 0.76, 0.92], sky: 0x8d78c8, partner: 0xffd6e2 },
};

export class Renderer {
  readonly gl: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(FOV, 1, 0.5, 400);
  readonly stage = new Stage();
  iw = 1;
  ih = 1;
  scale = 1;
  cssW = 1;
  cssH = 1;
  visH = 13;
  halfW = 12;
  pxScale = 400;
  waterFrac = 0.36;
  private rtOwn!: THREE.WebGLRenderTarget;
  private rtOther!: THREE.WebGLRenderTarget;
  private rtComp!: THREE.WebGLRenderTarget;
  private rtHalfA!: THREE.WebGLRenderTarget;
  private rtHalfB!: THREE.WebGLRenderTarget;
  private quadScene = new THREE.Scene();
  private quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private quad: THREE.Mesh;
  private compMat: THREE.ShaderMaterial;
  private extractMat: THREE.ShaderMaterial;
  private blurMat: THREE.ShaderMaterial;
  private finalMat: THREE.ShaderMaterial;
  private fogs: Record<WorldId, THREE.Fog> = {
    0: new THREE.Fog(PAL[0].fog, 34, 150),
    1: new THREE.Fog(PAL[1].fog, 34, 150),
  };
  private camRole: WorldId = 0;
  private curSAmt = 1;
  private texW = 0.36;
  private scrW = 0.36;
  private tmpV = new THREE.Vector3();

  constructor(canvas: HTMLCanvasElement) {
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
    this.gl.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.gl.autoClear = true;
    this.scene.add(this.stage.root);

    const ripples = Array.from({ length: 6 }, () => new THREE.Vector4(0, 0, -99, 0));
    this.compMat = new THREE.ShaderMaterial({
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: COMPOSITE_FRAG,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        tOwn: { value: null },
        tOwnDepth: { value: null },
        tOther: { value: null },
        projInv: { value: new THREE.Matrix4() },
        camWorld: { value: new THREE.Matrix4() },
        camPos: { value: new THREE.Vector3() },
        res: { value: new THREE.Vector2(1, 1) },
        time: { value: 0 },
        side: { value: 1 },
        waterTint: { value: new THREE.Vector3(1, 1, 1) },
        skyRefl: { value: new THREE.Color() },
        sparkleColor: { value: new THREE.Color(0xfff6e0) },
        foamColor: { value: new THREE.Color(0xffffff) },
        partnerColor: { value: new THREE.Color() },
        partner: { value: new THREE.Vector3() },
        ripples: { value: ripples },
        clarity: { value: 0 },
      },
    });
    this.extractMat = new THREE.ShaderMaterial({
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: EXTRACT_FRAG,
      depthTest: false,
      depthWrite: false,
      uniforms: { tInput: { value: null } },
    });
    this.blurMat = new THREE.ShaderMaterial({
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: BLUR_FRAG,
      depthTest: false,
      depthWrite: false,
      uniforms: { tInput: { value: null }, dir: { value: new THREE.Vector2() } },
    });
    this.finalMat = new THREE.ShaderMaterial({
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: FINAL_FRAG,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        tScene: { value: null },
        tBloom: { value: null },
        bloomAmt: { value: 0.55 },
        texW: { value: 0.36 },
        scrW: { value: 0.36 },
        sAmt: { value: 1 },
        fade: { value: 0 },
        fadeColor: { value: new THREE.Color(0xfff4f8) },
        vignette: { value: 0.55 },
        glow: { value: 0 },
      },
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.compMat);
    this.quad.frustumCulled = false;
    this.quadScene.add(this.quad);
    this.resize();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cssW = window.innerWidth;
    this.cssH = window.innerHeight;
    const W = Math.max(1, Math.round(this.cssW * dpr));
    const H = Math.max(1, Math.round(this.cssH * dpr));
    this.gl.setPixelRatio(dpr);
    this.gl.setSize(this.cssW, this.cssH, true);
    this.scale = Math.max(1, Math.round(Math.min(W, H) / TARGET_MIN_PX));
    this.iw = Math.ceil(W / this.scale);
    this.ih = Math.ceil(H / this.scale);
    this.waterFrac = H > W ? 0.44 : 0.36;
    this.visH = this.ih / 16;
    this.halfW = (this.visH * (this.iw / this.ih)) / 2;
    this.camera.aspect = this.iw / this.ih;
    this.camera.updateProjectionMatrix();
    this.pxScale = this.ih / (2 * Math.tan(THREE.MathUtils.degToRad(FOV / 2)));

    for (const rt of [this.rtOwn, this.rtOther, this.rtComp, this.rtHalfA, this.rtHalfB]) rt?.dispose();
    const nearest = { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, generateMipmaps: false };
    this.rtOwn = new THREE.WebGLRenderTarget(this.iw, this.ih, { ...nearest, depthBuffer: true, depthTexture: new THREE.DepthTexture(this.iw, this.ih) });
    this.rtOther = new THREE.WebGLRenderTarget(this.iw, this.ih, { ...nearest, depthBuffer: true });
    this.rtComp = new THREE.WebGLRenderTarget(this.iw, this.ih, { ...nearest, depthBuffer: false });
    const hw = Math.max(1, Math.ceil(this.iw / 2));
    const hh = Math.max(1, Math.ceil(this.ih / 2));
    const linear = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false, depthBuffer: false };
    this.rtHalfA = new THREE.WebGLRenderTarget(hw, hh, linear);
    this.rtHalfB = new THREE.WebGLRenderTarget(hw, hh, linear);
    this.compMat.uniforms.res.value.set(this.iw, this.ih);
  }

  clampCamX(x: number, bounds: { minX: number; maxX: number }): number {
    const lo = bounds.minX - 1 + this.halfW;
    const hi = bounds.maxX + 1 - this.halfW;
    if (lo > hi) return (bounds.minX + bounds.maxX) / 2;
    return Math.min(hi, Math.max(lo, x));
  }

  private placeCamera(role: WorldId, camX: number) {
    const D = this.visH / 2 / Math.tan(THREE.MathUtils.degToRad(FOV / 2));
    const lookY = this.visH * (0.5 - this.waterFrac);
    const sgn = role === 0 ? 1 : -1;
    this.camera.position.set(camX, sgn * (lookY + D * Math.sin(PITCH)), D * Math.cos(PITCH));
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(camX, sgn * lookY, 0);
    this.camera.updateMatrixWorld(true);
  }

  private pass(mat: THREE.ShaderMaterial, target: THREE.WebGLRenderTarget | null) {
    this.quad.material = mat;
    this.gl.setRenderTarget(target);
    this.gl.render(this.quadScene, this.quadCam);
  }

  render(p: RenderParams) {
    const role: WorldId = p.sAmt >= 0 ? 0 : 1;
    const oth: WorldId = role === 0 ? 1 : 0;
    this.camRole = role;
    this.curSAmt = p.sAmt;

    // 화면상의 수면 위치는 항상 물 위 시점과 같게 맞춰요.
    this.placeCamera(0, p.camX);
    this.scrW = this.projectTex(p.camX, 0, 0).y;
    this.placeCamera(role, p.camX);
    this.texW = this.projectTex(p.camX, 0, 0).y;

    const gl = this.gl;
    // 1) 내 세계
    this.stage.prePass(role, role);
    this.camera.layers.set(WORLD_LAYER[role]);
    this.scene.fog = this.fogs[role];
    gl.setClearColor(PAL[role].clear, 1);
    gl.setRenderTarget(this.rtOwn);
    gl.render(this.scene, this.camera);
    // 2) 수면 너머 세계
    this.stage.prePass(role, oth);
    this.camera.layers.set(WORLD_LAYER[oth]);
    this.scene.fog = this.fogs[oth];
    gl.setClearColor(PAL[oth].clear, 1);
    gl.setRenderTarget(this.rtOther);
    gl.render(this.scene, this.camera);

    // 3) 수면 합성
    const u = this.compMat.uniforms;
    u.tOwn.value = this.rtOwn.texture;
    u.tOwnDepth.value = this.rtOwn.depthTexture;
    u.tOther.value = this.rtOther.texture;
    u.projInv.value.copy(this.camera.projectionMatrixInverse);
    u.camWorld.value.copy(this.camera.matrixWorld);
    u.camPos.value.copy(this.camera.position);
    u.time.value = p.time;
    u.side.value = role === 0 ? 1 : -1;
    u.waterTint.value.set(...PAL[role].tintOther);
    u.skyRefl.value.setHex(PAL[role].sky);
    u.partnerColor.value.setHex(PAL[role].partner);
    u.clarity.value = p.clarity;
    if (p.partner.visible && p.partner.world !== role) {
      const wy = p.partner.world === 0 ? p.partner.y : -p.partner.y;
      const t = this.projectTex(p.partner.x, wy, 0.3);
      u.partner.value.set(t.x, t.y, 1);
    } else {
      u.partner.value.set(0, 0, 0);
    }
    const rp = u.ripples.value as THREE.Vector4[];
    for (let i = 0; i < rp.length; i++) {
      const r = p.ripples[i];
      if (r) rp[i].set(r.x, r.z, r.t, r.s);
      else rp[i].set(0, 0, -99, 0);
    }
    this.pass(this.compMat, this.rtComp);

    // 4) 은은한 번짐 (몽환 효과)
    this.extractMat.uniforms.tInput.value = this.rtComp.texture;
    this.pass(this.extractMat, this.rtHalfA);
    this.blurMat.uniforms.tInput.value = this.rtHalfA.texture;
    this.blurMat.uniforms.dir.value.set(1 / this.rtHalfA.width, 0);
    this.pass(this.blurMat, this.rtHalfB);
    this.blurMat.uniforms.tInput.value = this.rtHalfB.texture;
    this.blurMat.uniforms.dir.value.set(0, 1 / this.rtHalfB.height);
    this.pass(this.blurMat, this.rtHalfA);

    // 5) 최종 출력
    const f = this.finalMat.uniforms;
    f.tScene.value = this.rtComp.texture;
    f.tBloom.value = this.rtHalfA.texture;
    f.texW.value = this.texW;
    f.scrW.value = this.scrW;
    f.sAmt.value = p.sAmt;
    f.fade.value = p.fade;
    f.fadeColor.value.copy(p.fadeColor);
    f.glow.value = p.glow + p.flash * 0.9;
    f.bloomAmt.value = 0.55 + p.glow * 0.8 + p.flash;
    this.pass(this.finalMat, null);
  }

  /** 현재 카메라 기준 텍스처 좌표(0~1) */
  private projectTex(x: number, y: number, z: number): { x: number; y: number } {
    const v = this.tmpV.set(x, y, z).project(this.camera);
    return { x: v.x * 0.5 + 0.5, y: v.y * 0.5 + 0.5 };
  }

  /** 월드 좌표 → 화면(CSS px). DOM 말풍선 배치에 써요. */
  project(world: WorldId, x: number, yLocal: number, z = 0.3): { x: number; y: number } {
    const wy = world === 0 ? yLocal : -yLocal;
    const t = this.projectTex(x, wy, z);
    const s = Math.sign(this.curSAmt) * Math.max(Math.abs(this.curSAmt), 0.002);
    const sy = this.scrW + (t.y - this.texW) * s;
    return { x: t.x * this.cssW, y: (1 - sy) * this.cssH };
  }

  get viewCameraRole(): WorldId {
    return this.camRole;
  }

  /** 화면(CSS px) → 세계 좌표. 수면 아래를 누르면 상대 세계 자리를 돌려줘요. */
  unproject(cssX: number, cssY: number): { world: WorldId; x: number; y: number } | null {
    const s = Math.sign(this.curSAmt) * Math.max(Math.abs(this.curSAmt), 0.002);
    const u = cssX / this.cssW;
    const vScreen = 1 - cssY / this.cssH;
    const v = this.texW + (vScreen - this.scrW) / s;
    if (v < 0 || v > 1) return null;
    const ndc = new THREE.Vector3(u * 2 - 1, v * 2 - 1, 0.5).unproject(this.camera);
    const dir = ndc.sub(this.camera.position).normalize();
    if (Math.abs(dir.z) < 1e-5) return null;
    const t = (0.3 - this.camera.position.z) / dir.z;
    if (t <= 0) return null;
    const hit = this.camera.position.clone().addScaledVector(dir, t);
    return hit.y >= 0 ? { world: 0, x: hit.x, y: hit.y } : { world: 1, x: hit.x, y: -hit.y };
  }

  /** 지금 화면을 작은 사진으로 (렌더 직후에 불러야 해요) */
  snapshot(maxW = 320): string | null {
    try {
      const src = this.gl.domElement;
      const scale = Math.min(1, maxW / src.width);
      const c = document.createElement('canvas');
      c.width = Math.round(src.width * scale);
      c.height = Math.round(src.height * scale);
      const ctx = c.getContext('2d')!;
      ctx.drawImage(src, 0, 0, c.width, c.height);
      return c.toDataURL('image/jpeg', 0.72);
    } catch {
      return null;
    }
  }
}
