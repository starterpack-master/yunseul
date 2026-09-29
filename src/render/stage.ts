import * as THREE from 'three';
import {
  ALTAR,
  BRIDGES,
  BUOYS,
  GROUND,
  LIGHTS,
  MIST,
  MOON_BRIDGE,
  SHELLS,
  SHELL_WORLD,
  SOLIDS,
  TABLET,
  buoyTop,
  type SolidDef,
} from '../game/level';
import type { Player } from '../game/player';
import { SYMS, type Sym, type WorldId } from '../game/types';
import { bridgeActive, type WorldState } from '../game/world';
import * as art from './pixelart';
import { ParticleField, hex3 } from './particles';

export const WORLD_LAYER: Record<WorldId, number> = { 0: 1, 1: 2 };
const U = 1 / art.PX_PER_UNIT;
const Z_FRONT = 0.8;
const Z_BACK = -4.2;

function setLayer(obj: THREE.Object3D, layer: number) {
  obj.traverse((o) => o.layers.set(layer));
}

function spriteMat(tex: THREE.Texture, opts: { additive?: boolean; transparent?: boolean; opacity?: number; fog?: boolean; color?: number } = {}) {
  return new THREE.MeshBasicMaterial({
    map: tex,
    alphaTest: opts.additive || opts.transparent ? 0 : 0.5,
    transparent: !!(opts.additive || opts.transparent),
    depthWrite: !(opts.additive || opts.transparent),
    blending: opts.additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    opacity: opts.opacity ?? 1,
    fog: opts.fog ?? true,
    color: opts.color ?? 0xffffff,
  });
}

/** 아래 중앙이 원점인 스프라이트 평면 */
function spritePlane(wPx: number, hPx: number, pivot: 'bottom' | 'center' = 'bottom'): THREE.PlaneGeometry {
  const g = new THREE.PlaneGeometry(wPx * U, hPx * U);
  if (pivot === 'bottom') g.translate(0, (hPx * U) / 2, 0);
  return g;
}

class QuadBuilder {
  pos: number[] = [];
  uv: number[] = [];
  col: number[] = [];
  idx: number[] = [];
  quad(p: number[][], uvs: number[][], shade: number[]) {
    const base = this.pos.length / 3;
    for (let i = 0; i < 4; i++) {
      this.pos.push(p[i][0], p[i][1], p[i][2]);
      this.uv.push(uvs[i][0], uvs[i][1]);
      this.col.push(shade[i], shade[i], shade[i]);
    }
    this.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  build(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setIndex(this.idx);
    return g;
  }
}

/** 정적 장식 스프라이트를 텍스처별로 한 메시에 합쳐요 (드로우콜 절약). */
class SpriteBatch {
  private groups = new Map<THREE.Texture, { tex: THREE.Texture; q: QuadBuilder }>();
  add(tex: THREE.Texture, x: number, y: number, z: number, w: number, h: number, flip = false, shade = 1) {
    let g = this.groups.get(tex);
    if (!g) {
      g = { tex, q: new QuadBuilder() };
      this.groups.set(tex, g);
    }
    const u0 = flip ? 1 : 0;
    const u1 = flip ? 0 : 1;
    g.q.quad(
      [
        [x - w / 2, y, z],
        [x + w / 2, y, z],
        [x + w / 2, y + h, z],
        [x - w / 2, y + h, z],
      ],
      [
        [u0, 0],
        [u1, 0],
        [u1, 1],
        [u0, 1],
      ],
      [shade * 0.92, shade * 0.92, shade, shade],
    );
  }
  build(parent: THREE.Object3D) {
    for (const g of this.groups.values()) {
      const m = new THREE.Mesh(g.q.build(), new THREE.MeshBasicMaterial({ map: g.tex, alphaTest: 0.5, vertexColors: true }));
      parent.add(m);
    }
  }
}

interface CharacterView {
  mesh: THREE.Mesh;
  tex: THREE.CanvasTexture;
  shadow: THREE.Mesh;
  blinkT: number;
}

interface LightView {
  mesh: THREE.Mesh;
  on: THREE.Texture;
  off: THREE.Texture;
  glow: THREE.Mesh;
  glowY: number;
  litAt: number;
  lit: boolean;
}

interface BridgeView {
  id: string;
  world: WorldId;
  kind: 'star' | 'lily';
  parts: THREE.Mesh[];
  glow?: THREE.Mesh;
  activeAt: number;
  active: boolean;
}

interface BuoyView {
  id: string;
  parts: Record<WorldId, { pillar: THREE.Mesh; cap: THREE.Mesh; tex: THREE.Texture }>;
}

export interface StageFrame {
  st: WorldState;
  buoySink: Record<string, number>;
  players: [Player, Player];
  groundY: [number, number];
  time: number;
  dt: number;
  camX: number;
  pxScale: number;
}

export class Stage {
  readonly root = new THREE.Group();
  readonly worlds: [THREE.Group, THREE.Group] = [new THREE.Group(), new THREE.Group()];
  readonly particles: [ParticleField, ParticleField] = [new ParticleField(700), new ParticleField(700)];
  private skies: [THREE.Group, THREE.Group] = [new THREE.Group(), new THREE.Group()];
  private clouds: THREE.Mesh[] = [];
  private chars: CharacterView[] = [];
  private lights = new Map<string, LightView>();
  private bridges: BridgeView[] = [];
  private buoys: BuoyView[] = [];
  private items = new Map<string, { mesh: THREE.Mesh; glow: THREE.Mesh }>();
  private tablet!: THREE.Mesh;
  private tabletTex = new Map<Sym, THREE.Texture>();
  private shellMeshes: THREE.Mesh[] = [];
  private shellTex = new Map<string, THREE.Texture>();
  private mistPlanes: THREE.Mesh[] = [];
  private mistAlpha = 1;
  private altarGlow!: THREE.Mesh;
  private moonArch: [THREE.Mesh, THREE.Mesh] = [null!, null!];
  private moonGlow: [THREE.Mesh, THREE.Mesh] = [null!, null!];
  private moonAmt: [number, number] = [0, 0];
  private endingAmt = 0;
  private glowTex = art.makeGlowTexture();
  private ambientT = 0;

  constructor() {
    this.worlds[1].scale.y = -1; // 물 아래 세계는 수면 기준으로 뒤집혀 있어요.
    this.root.add(this.worlds[0], this.worlds[1]);
    for (const w of [0, 1] as WorldId[]) {
      this.buildBackground(w);
      this.buildTerrain(w);
      this.buildDecor(w);
      this.worlds[w].add(this.particles[w].points);
    }
    this.buildLights();
    this.buildBridges();
    this.buildBuoys();
    this.buildPuzzle();
    this.buildMoonBridge();
    this.buildItems();
    this.buildCharacters();
    for (const w of [0, 1] as WorldId[]) setLayer(this.worlds[w], WORLD_LAYER[w]);
  }

  // -------------------------------------------------------------------------
  // 배경

  private buildBackground(w: WorldId) {
    const g = this.worlds[w];
    const sky = this.skies[w];
    g.add(sky);
    const skyMesh = new THREE.Mesh(new THREE.PlaneGeometry(320, 80), spriteMat(art.makeSkyTexture(w), { fog: false }));
    (skyMesh.material as THREE.MeshBasicMaterial).map!.repeat.set(16, 1);
    skyMesh.position.set(0, 40 - 0.5, -90);
    sky.add(skyMesh);

    if (w === 0) {
      const sun = new THREE.Mesh(spritePlane(64, 64, 'center'), spriteMat(art.makeSun(), { transparent: true, fog: false }));
      sun.scale.setScalar(4.2);
      sun.position.set(8, 3.6, -86);
      sky.add(sun);
      for (let i = 0; i < 6; i++) {
        const c = new THREE.Mesh(spritePlane(64, 24, 'center'), spriteMat(art.makeCloud(i), { transparent: true, fog: false, opacity: 0.92 }));
        c.scale.setScalar(2.2 + (i % 3) * 0.6);
        c.position.set(-60 + i * 24, 14 + (i % 3) * 5, -84 + i);
        sky.add(c);
        this.clouds.push(c);
      }
    } else {
      const moon = new THREE.Mesh(spritePlane(64, 64, 'center'), spriteMat(art.makeMoon(), { transparent: true, fog: false }));
      moon.scale.setScalar(4.0);
      moon.position.set(-14, 17, -86);
      sky.add(moon);
    }

    const far = w === 0
      ? art.makeRidge(1024, 112, 21, { base: '#c9b8f2', rim: '#e6dcff', shade: '#d9c6ee', peaks: 7, rough: 0.05, minH: 30, maxH: 104 })
      : art.makeRidge(1024, 112, 22, { base: '#4b3f8f', rim: '#8f7fe0', shade: '#5b4b9a', peaks: 16, rough: 0.08, spiky: true, minH: 20, maxH: 108 });
    const farMesh = new THREE.Mesh(new THREE.PlaneGeometry(200, 200 * (112 / 1024)), spriteMat(far));
    farMesh.position.set(32, (200 * (112 / 1024)) / 2 - 0.05, -58);
    g.add(farMesh);

    const mid = w === 0
      ? art.makeRidge(1024, 72, 31, { base: '#b6dcc8', rim: '#dff5e6', shade: '#a7cfc0', peaks: 12, rough: 0.12, minH: 18, maxH: 60 })
      : art.makeRidge(1024, 72, 32, { base: '#3f5a8a', rim: '#6fd3c4', shade: '#394d7c', peaks: 20, rough: 0.2, minH: 14, maxH: 64 });
    const midMesh = new THREE.Mesh(new THREE.PlaneGeometry(150, 150 * (72 / 1024)), spriteMat(mid));
    midMesh.position.set(32, (150 * (72 / 1024)) / 2 - 0.05, -34);
    g.add(midMesh);

    // 먼 물가 둑
    const bank = new QuadBuilder();
    const tex = art.makeTerrain(w);
    const x0 = -40;
    const x1 = 110;
    const zb0 = -20;
    const zb1 = -12;
    const h = 0.55;
    bank.quad(
      [
        [x0, 0, zb1],
        [x1, 0, zb1],
        [x1, h, zb1],
        [x0, h, zb1],
      ],
      [
        [x0, 0],
        [x1, 0],
        [x1, 1],
        [x0, 1],
      ],
      [0.8, 0.8, 0.9, 0.9],
    );
    const bankTop = new QuadBuilder();
    bankTop.quad(
      [
        [x0, h, zb1],
        [x1, h, zb1],
        [x1, h, zb0],
        [x0, h, zb0],
      ],
      [
        [x0, zb1],
        [x1, zb1],
        [x1, zb0],
        [x0, zb0],
      ],
      [0.95, 0.95, 0.85, 0.85],
    );
    g.add(new THREE.Mesh(bank.build(), new THREE.MeshBasicMaterial({ map: tex.front, vertexColors: true })));
    g.add(new THREE.Mesh(bankTop.build(), new THREE.MeshBasicMaterial({ map: tex.top, vertexColors: true })));

    const batch = new SpriteBatch();
    const r = art.rng(w === 0 ? 501 : 502);
    const trees = w === 0 ? [art.makeDecor('tree', 0), art.makeDecor('tree', 1), art.makeDecor('tree', 2)] : [art.makeDecor('coral', 0), art.makeDecor('coral', 1), art.makeDecor('crystal', 3)];
    for (let x = x0; x < x1; x += 2.2 + r() * 3.5) {
      const d = trees[Math.floor(r() * trees.length)];
      const s = 1.1 + r() * 0.6;
      batch.add(d.tex, x, h, zb1 - 1 - r() * 6, d.w * U * s, d.h * U * s, r() < 0.5, 0.9);
    }
    batch.build(g);
  }

  // -------------------------------------------------------------------------
  // 지형

  private buildTerrain(w: WorldId) {
    const tex = art.makeTerrain(w);
    const strip = new QuadBuilder();
    const fill = new QuadBuilder();
    const top = new QuadBuilder();
    for (const s of SOLIDS[w]) this.addBlock(s, strip, fill, top);
    const g = this.worlds[w];
    g.add(new THREE.Mesh(strip.build(), new THREE.MeshBasicMaterial({ map: tex.front, vertexColors: true })));
    g.add(new THREE.Mesh(fill.build(), new THREE.MeshBasicMaterial({ map: tex.fill, vertexColors: true })));
    g.add(new THREE.Mesh(top.build(), new THREE.MeshBasicMaterial({ map: tex.top, vertexColors: true })));
  }

  private addBlock(s: SolidDef, strip: QuadBuilder, fill: QuadBuilder, top: QuadBuilder) {
    const { x0, x1, y0, y1 } = s;
    const sy = Math.max(y0, y1 - 1);
    strip.quad(
      [
        [x0, sy, Z_FRONT],
        [x1, sy, Z_FRONT],
        [x1, y1, Z_FRONT],
        [x0, y1, Z_FRONT],
      ],
      [
        [x0, sy - y1 + 1],
        [x1, sy - y1 + 1],
        [x1, 1],
        [x0, 1],
      ],
      [0.9, 0.9, 1, 1],
    );
    if (sy > y0) {
      const k = (y: number) => 0.7 + 0.2 * Math.min(1, y / 3);
      fill.quad(
        [
          [x0, y0, Z_FRONT],
          [x1, y0, Z_FRONT],
          [x1, sy, Z_FRONT],
          [x0, sy, Z_FRONT],
        ],
        [
          [x0, y0],
          [x1, y0],
          [x1, sy],
          [x0, sy],
        ],
        [k(y0), k(y0), k(sy), k(sy)],
      );
    }
    top.quad(
      [
        [x0, y1, Z_FRONT],
        [x1, y1, Z_FRONT],
        [x1, y1, Z_BACK],
        [x0, y1, Z_BACK],
      ],
      [
        [x0, Z_FRONT],
        [x1, Z_FRONT],
        [x1, Z_BACK],
        [x0, Z_BACK],
      ],
      [1, 1, 0.9, 0.9],
    );
    // 옆면
    fill.quad(
      [
        [x0, y0, Z_BACK],
        [x0, y0, Z_FRONT],
        [x0, y1, Z_FRONT],
        [x0, y1, Z_BACK],
      ],
      [
        [Z_BACK, y0],
        [Z_FRONT, y0],
        [Z_FRONT, y1],
        [Z_BACK, y1],
      ],
      [0.62, 0.62, 0.75, 0.75],
    );
    fill.quad(
      [
        [x1, y0, Z_FRONT],
        [x1, y0, Z_BACK],
        [x1, y1, Z_BACK],
        [x1, y1, Z_FRONT],
      ],
      [
        [Z_FRONT, y0],
        [Z_BACK, y0],
        [Z_BACK, y1],
        [Z_FRONT, y1],
      ],
      [0.62, 0.62, 0.75, 0.75],
    );
  }

  private buildDecor(w: WorldId) {
    const r = art.rng(w === 0 ? 900 : 901);
    const batch = new SpriteBatch();
    const kinds: art.DecorKind[] = w === 0 ? ['flowers', 'tuft', 'bush', 'tree', 'flowers', 'tuft'] : ['mushroom', 'reed', 'crystal', 'coral', 'mushroom', 'reed'];
    const decor = kinds.map((k, i) => art.makeDecor(k, i));
    const keepOut = [
      ...LIGHTS.filter((l) => l.world === w).map((l) => l.x),
      ...(w === TABLET.world ? [TABLET.x] : []),
      ...(w === SHELL_WORLD ? SHELLS.map((s) => s.x) : []),
      ...(w === ALTAR.world ? [ALTAR.x] : []),
    ];
    for (const s of SOLIDS[w]) {
      if (s.x1 - s.x0 < 1) continue;
      const lo = Math.max(s.x0 + 0.3, -8);
      const hi = Math.min(s.x1 - 0.3, 72);
      for (let x = lo; x < hi; x += 0.45 + r() * 0.9) {
        const i = Math.floor(r() * decor.length);
        const d = decor[i];
        const kind = kinds[i];
        const big = kind === 'tree' || kind === 'coral' || kind === 'bush';
        const z = big ? -2.2 - r() * 1.8 : -0.9 - r() * 3;
        if (!big && keepOut.some((k) => Math.abs(k - x) < 0.9) && z > -1.6) continue;
        const s2 = big ? 0.9 + r() * 0.4 : 1;
        batch.add(d.tex, x, s.y1, z, d.w * U * s2, d.h * U * s2, r() < 0.5, 0.95 + r() * 0.05);
      }
      // 앞쪽 작은 풀 (발 밑을 가리지 않게 낮게)
      const tuft = decor[1];
      for (let x = lo; x < hi; x += 1.3 + r() * 2.2) {
        batch.add(tuft.tex, x, s.y1, Z_FRONT - 0.03, tuft.w * U * 0.8, tuft.h * U * 0.4, r() < 0.5);
      }
    }
    batch.build(this.worlds[w]);
  }

  // -------------------------------------------------------------------------
  // 거울 소품

  private glowSprite(color: number, size: number, opacity = 1): THREE.Mesh {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), spriteMat(this.glowTex, { additive: true, fog: false, color, opacity }));
    m.renderOrder = 5;
    return m;
  }

  private buildLights() {
    for (const l of LIGHTS) {
      const on = l.kind === 'lantern' ? art.makeLantern(true) : art.makeMoonflower(true);
      const off = l.kind === 'lantern' ? art.makeLantern(false) : art.makeMoonflower(false);
      const [wPx, hPx] = l.kind === 'lantern' ? [16, 32] : [16, 24];
      const mesh = new THREE.Mesh(spritePlane(wPx, hPx), spriteMat(off));
      mesh.position.set(l.x, l.y, -0.25);
      const glowY = l.kind === 'lantern' ? l.y + 1.05 : l.y + 1.0;
      const glow = this.glowSprite(l.kind === 'lantern' ? 0xffd88a : 0xd6c8ff, 3.2, 0);
      glow.position.set(l.x, glowY, -0.2);
      this.worlds[l.world].add(mesh, glow);
      this.lights.set(l.id, { mesh, on, off, glow, glowY, litAt: -1, lit: false });
    }
  }

  private buildBridges() {
    const star = art.makeStarTile();
    const pad = art.makeLilyPad(false);
    const lotus = art.makeLilyPad(true);
    for (const b of BRIDGES) {
      const parts: THREE.Mesh[] = [];
      const view: BridgeView = { id: b.id, world: b.world, kind: b.kind, parts, activeAt: -1, active: false };
      if (b.kind === 'star') {
        const seg = b.segs[0];
        const n = Math.ceil(seg.x1 - seg.x0);
        const wSeg = (seg.x1 - seg.x0) / n;
        for (let i = 0; i < n; i++) {
          const m = new THREE.Mesh(new THREE.PlaneGeometry(wSeg, 0.5), spriteMat(star, { additive: true, fog: false }));
          m.position.set(seg.x0 + wSeg * (i + 0.5), seg.y1 - 0.2, 0.1);
          m.visible = false;
          parts.push(m);
          this.worlds[b.world].add(m);
        }
        const glow = new THREE.Mesh(new THREE.PlaneGeometry(seg.x1 - seg.x0 + 1, 1.6), spriteMat(this.glowTex, { additive: true, fog: false, color: 0xfff0a8, opacity: 0 }));
        glow.position.set((seg.x0 + seg.x1) / 2, seg.y1 - 0.2, -0.1);
        this.worlds[b.world].add(glow);
        view.glow = glow;
      } else {
        b.segs.forEach((seg, i) => {
          const m = new THREE.Mesh(spritePlane(24, 12), spriteMat(i === 2 ? lotus : pad));
          m.scale.x = (seg.x1 - seg.x0) / (24 * U);
          m.position.set((seg.x0 + seg.x1) / 2, seg.y1 - 0.34, 0.15);
          m.visible = false;
          parts.push(m);
          this.worlds[b.world].add(m);
        });
      }
      this.bridges.push(view);
    }
  }

  private buildBuoys() {
    for (const b of BUOYS) {
      const parts = {} as BuoyView['parts'];
      for (const w of [0, 1] as WorldId[]) {
        const kind = b.owner === 0 ? (w === 0 ? 'wood' : 'woodMoss') : w === 1 ? 'crystal' : 'glass';
        const tex = art.makePillarTexture(kind);
        const pillar = new THREE.Mesh(new THREE.BoxGeometry(b.w, 1, 1.3), new THREE.MeshBasicMaterial({ map: tex }));
        const capTex = art.makePillarTexture(kind);
        capTex.repeat.set(1.6, 0.2);
        const cap = new THREE.Mesh(
          new THREE.BoxGeometry(b.w + 0.2, 0.18, 1.5),
          new THREE.MeshBasicMaterial({ map: capTex, color: kind === 'crystal' || kind === 'glass' ? 0xffffff : 0xf2d9c4 }),
        );
        this.worlds[w].add(pillar, cap);
        parts[w] = { pillar, cap, tex };
      }
      this.buoys.push({ id: b.id, parts });
    }
  }

  private buildPuzzle() {
    for (const s of SYMS) this.tabletTex.set(s, art.makeTablet(s));
    this.tablet = new THREE.Mesh(spritePlane(20, 24), spriteMat(art.makeTablet(null)));
    this.tablet.scale.setScalar(1.45);
    this.tablet.position.set(TABLET.x, TABLET.y, -0.7);
    this.worlds[TABLET.world].add(this.tablet);

    for (const s of SYMS) {
      this.shellTex.set(`${s}:0`, art.makeShell(s, false));
      this.shellTex.set(`${s}:1`, art.makeShell(s, true));
    }
    for (const sh of SHELLS) {
      const m = new THREE.Mesh(spritePlane(20, 18), spriteMat(this.shellTex.get('moon:0')!));
      m.position.set(sh.x, GROUND, -0.2);
      this.worlds[SHELL_WORLD].add(m);
      this.shellMeshes.push(m);
    }

    const mistTex = art.makeMistTexture();
    for (let i = 0; i < 4; i++) {
      const t = mistTex.clone();
      t.needsUpdate = true;
      t.repeat.set(1, 1.6);
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(MIST.x1 - MIST.x0 + 1.4, MIST.y1 - MIST.y0),
        new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, opacity: 0.9, color: i % 2 ? 0xfff0fa : 0xf4eaff }),
      );
      m.position.set((MIST.x0 + MIST.x1) / 2 + (i - 1.5) * 0.25, (MIST.y0 + MIST.y1) / 2 - 0.2, -0.6 + i * 0.45);
      m.renderOrder = 6;
      this.worlds[MIST.world].add(m);
      this.mistPlanes.push(m);
    }

    const altar = new THREE.Mesh(spritePlane(20, 20), spriteMat(art.makeAltar()));
    altar.position.set(ALTAR.x, ALTAR.y, -0.3);
    this.altarGlow = this.glowSprite(0xfff0c0, 3.4, 0);
    this.altarGlow.position.set(ALTAR.x, ALTAR.y + 1.1, -0.2);
    this.worlds[ALTAR.world].add(altar, this.altarGlow);
  }

  private buildMoonBridge() {
    const { cx, r } = MOON_BRIDGE;
    const thick = 0.42;
    const shape = new THREE.Shape();
    shape.absarc(0, 0, r, 0, Math.PI, false);
    shape.absarc(0, 0, r - thick, Math.PI, 0, true);
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 1.5, bevelEnabled: false, curveSegments: 28 });
    geo.translate(0, 0, -0.75);
    for (const w of [0, 1] as WorldId[]) {
      const tex = art.makeBrickTexture(w);
      tex.repeat.set(1.2, 1.2);
      const arch = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, color: 0xffffff }));
      arch.position.set(cx, 0, 0);
      this.worlds[w].add(arch);
      this.moonArch[w] = arch;
      const glow = this.glowSprite(w === 0 ? 0xfff2c8 : 0xe0d8ff, r * 3.2, 0);
      glow.position.set(cx, 0, -0.9);
      this.worlds[w].add(glow);
      this.moonGlow[w] = glow;
    }
  }

  private buildItems() {
    const pearl = art.makePearl();
    const mesh = new THREE.Mesh(spritePlane(10, 10, 'center'), spriteMat(pearl));
    const glow = this.glowSprite(0xf2eaff, 1.8, 0.8);
    this.items.set('pearl', { mesh, glow });
  }

  private buildCharacters() {
    for (const w of [0, 1] as WorldId[]) {
      const tex = art.makeCharacterSheet(w);
      const mesh = new THREE.Mesh(spritePlane(art.CHAR_W, art.CHAR_H), spriteMat(tex, { fog: false }));
      mesh.position.z = 0.3;
      const shadow = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.45), spriteMat(art.makeShadowTexture(), { transparent: true, fog: false }));
      shadow.rotation.x = -Math.PI / 2;
      shadow.renderOrder = 2;
      this.worlds[w].add(mesh, shadow);
      this.chars.push({ mesh, tex, shadow, blinkT: 2 + Math.random() * 3 });
    }
  }

  // -------------------------------------------------------------------------
  // 연출

  splash(w: WorldId, x: number, big = false) {
    const pf = this.particles[w];
    const n = big ? 26 : 14;
    for (let i = 0; i < n; i++) {
      const a = Math.PI * (0.15 + Math.random() * 0.7);
      const s = (big ? 3.4 : 2.4) * (0.5 + Math.random() * 0.7);
      pf.spawn({ x: x + (Math.random() - 0.5) * 0.5, y: 0.05, z: 0.3 + (Math.random() - 0.5) * 0.6, vx: Math.cos(a) * s * 0.6, vy: Math.sin(a) * s, life: 0.9, size: 0.1 + Math.random() * 0.06, color: w === 0 ? [0.85, 0.95, 1] : [0.8, 0.85, 1], behavior: 'drop' });
    }
  }

  burst(w: WorldId, x: number, y: number, color: number, count = 24, speed = 2.2) {
    this.particles[w].burst(x, y, 0.4, hex3(color), count, speed);
  }

  // -------------------------------------------------------------------------

  update(f: StageFrame) {
    const { st, time, dt } = f;
    for (const w of [0, 1] as WorldId[]) this.skies[w].position.x = f.camX * 0.92;
    for (const c of this.clouds) {
      c.position.x += dt * 0.25;
      if (c.position.x > 90) c.position.x -= 150;
    }

    this.updateCharacters(f);
    this.updateLights(st, time);
    this.updateBridges(st, time);
    this.updateBuoys(f.buoySink);
    this.updatePuzzle(st, time, dt);
    this.updateItems(f);
    this.updateMoon(f);
    this.updateAmbient(f);
    this.particles[0].update(dt, time, f.pxScale);
    this.particles[1].update(dt, time, f.pxScale);
  }

  private updateCharacters(f: StageFrame) {
    f.players.forEach((p, i) => {
      const v = this.chars[i];
      const b = p.body;
      v.mesh.visible = !p.hidden && p.present;
      v.shadow.visible = v.mesh.visible;
      let frame: art.CharFrame = 'idle0';
      if (p.anim === 'walk') frame = (['walk0', 'walk1', 'walk2', 'walk3'] as const)[Math.floor(p.animTime * 9) % 4];
      else if (p.anim === 'jump') frame = 'jump';
      else if (p.anim === 'fall') frame = 'fall';
      else {
        v.blinkT -= f.dt;
        if (v.blinkT < 0.12) frame = 'blink';
        else frame = Math.floor(p.animTime * 1.6) % 2 === 0 ? 'idle0' : 'idle1';
        if (v.blinkT < 0) v.blinkT = 2.5 + Math.random() * 3;
      }
      v.tex.offset.x = art.CHAR_FRAMES.indexOf(frame) / art.CHAR_FRAMES.length;
      const sq = p.squash;
      v.mesh.scale.set(p.face * (1 + sq * 0.12), 1 - sq * 0.12, 1);
      v.mesh.position.set(b.x, b.y - 0.02, 0.3);
      const gy = f.groundY[i];
      const hgt = Math.max(0, b.y - gy);
      v.shadow.position.set(b.x, gy + 0.015, 0.3);
      const s = Math.max(0.35, 1 - hgt * 0.25);
      v.shadow.scale.set(s, s, 1);
      v.shadow.visible = v.mesh.visible && gy > -0.5;
    });
  }

  private updateLights(st: WorldState, time: number) {
    for (const l of LIGHTS) {
      const v = this.lights.get(l.id)!;
      const lit = !!st.lit[l.id];
      if (lit !== v.lit) {
        v.lit = lit;
        v.litAt = time;
        (v.mesh.material as THREE.MeshBasicMaterial).map = lit ? v.on : v.off;
        (v.mesh.material as THREE.MeshBasicMaterial).needsUpdate = true;
      }
      const target = lit ? 0.75 + 0.15 * Math.sin(time * 2.3 + l.x) : 0;
      const m = v.glow.material as THREE.MeshBasicMaterial;
      m.opacity += (target - m.opacity) * 0.08;
      v.glow.visible = m.opacity > 0.01;
    }
  }

  private updateBridges(st: WorldState, time: number) {
    for (const b of this.bridges) {
      const active = bridgeActive(st, b.id);
      if (active !== b.active) {
        b.active = active;
        b.activeAt = time;
      }
      const age = time - b.activeAt;
      b.parts.forEach((m, i) => {
        if (!active) {
          m.visible = false;
          return;
        }
        if (b.kind === 'star') {
          const t = Math.min(1, Math.max(0, (age - i * 0.07) * 4));
          m.visible = t > 0;
          m.scale.set(1, t, 1);
          (m.material as THREE.MeshBasicMaterial).opacity = 0.75 + 0.25 * Math.sin(time * 3 + i);
        } else {
          const t = Math.min(1, Math.max(0, (age - i * 0.15) * 1.5));
          m.visible = t > 0;
          const ease = 1 - Math.pow(1 - t, 3);
          const baseY = BRIDGES.find((d) => d.id === b.id)!.segs[i].y1 - 0.34;
          m.position.y = baseY - (1 - ease) * 0.7 + Math.sin(time * 1.6 + i * 1.7) * 0.025;
        }
      });
      if (b.glow) {
        const gm = b.glow.material as THREE.MeshBasicMaterial;
        const target = active ? 0.45 + 0.1 * Math.sin(time * 2) : 0;
        gm.opacity += (target - gm.opacity) * 0.06;
        b.glow.visible = gm.opacity > 0.01;
      }
    }
  }

  private updateBuoys(sink: Record<string, number>) {
    for (const bv of this.buoys) {
      const def = BUOYS.find((b) => b.id === bv.id)!;
      for (const w of [0, 1] as WorldId[]) {
        const top = buoyTop(def, sink[def.id] ?? 0, w);
        const bottom = -0.9;
        const h = top - bottom;
        const p = bv.parts[w];
        p.pillar.scale.y = h;
        p.pillar.position.set(def.x, bottom + h / 2, 0);
        p.tex.repeat.set(def.w, h);
        p.cap.position.set(def.x, top - 0.09, 0);
      }
    }
  }

  private updatePuzzle(st: WorldState, time: number, dt: number) {
    const tm = this.tablet.material as THREE.MeshBasicMaterial;
    const tt = this.tabletTex.get(st.symbol)!;
    if (tm.map !== tt) {
      tm.map = tt;
      tm.needsUpdate = true;
    }
    this.shellMeshes.forEach((m, i) => {
      const sym = st.shellSyms[i];
      const open = st.shellOpen === i;
      const tex = this.shellTex.get(`${sym}:${open ? 1 : 0}`)!;
      const mat = m.material as THREE.MeshBasicMaterial;
      if (mat.map !== tex) {
        mat.map = tex;
        mat.needsUpdate = true;
      }
      const wrong = open && !st.solved;
      m.position.x = SHELLS[i].x + (wrong ? Math.sin(time * 40) * 0.03 : 0);
    });
    const target = st.solved ? 0 : 1;
    this.mistAlpha += (target - this.mistAlpha) * Math.min(1, dt * 1.2);
    this.mistPlanes.forEach((m, i) => {
      const mat = m.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.85 * this.mistAlpha;
      mat.map!.offset.y = time * (0.03 + i * 0.012);
      mat.map!.offset.x = Math.sin(time * 0.3 + i) * 0.05;
      m.visible = this.mistAlpha > 0.01;
    });
    const ag = this.altarGlow.material as THREE.MeshBasicMaterial;
    const at = st.altar ? 0.8 + 0.2 * Math.sin(time * 2) : 0;
    ag.opacity += (at - ag.opacity) * 0.06;
    this.altarGlow.visible = ag.opacity > 0.01;
  }

  private updateItems(f: StageFrame) {
    for (const it of f.st.items) {
      const v = this.items.get(it.id);
      if (!v) continue;
      let world = it.world;
      let x = it.x;
      let y = it.y + 0.32;
      if (it.mode === 'held' && it.holder !== -1) {
        const p = f.players[it.holder as WorldId];
        world = p.role;
        x = p.body.x;
        y = p.body.y + 1.55 + Math.sin(f.time * 3) * 0.06;
        v.mesh.visible = !p.hidden;
      } else {
        v.mesh.visible = true;
        if (it.mode === 'floating') y = 0.18 + Math.sin(f.time * 2.2) * 0.05;
        if (it.mode === 'ground' || it.mode === 'placed') y += Math.sin(f.time * 2) * 0.04;
      }
      const parent = this.worlds[world];
      if (v.mesh.parent !== parent) {
        parent.add(v.mesh, v.glow);
        setLayer(v.mesh, WORLD_LAYER[world]);
        setLayer(v.glow, WORLD_LAYER[world]);
      }
      v.mesh.position.set(x, y, 0.45);
      v.glow.position.set(x, y, 0.4);
      v.glow.visible = v.mesh.visible;
      (v.glow.material as THREE.MeshBasicMaterial).opacity = 0.55 + 0.25 * Math.sin(f.time * 3);
    }
  }

  private updateMoon(f: StageFrame) {
    const { cx } = MOON_BRIDGE;
    for (const w of [0, 1] as WorldId[]) {
      const p = f.players[w];
      const on = p.present && !p.hidden && p.body.gk === 'arc' && Math.abs(p.body.x - cx) < 1.0;
      const target = f.st.ending ? 1 : on ? (f.st.altar ? 0.55 : 0.3) : f.st.altar && w === 0 ? 0.18 : 0;
      this.moonAmt[w] += (target - this.moonAmt[w]) * Math.min(1, f.dt * 2);
      const a = this.moonAmt[w];
      const mat = this.moonArch[w].material as THREE.MeshBasicMaterial;
      const base = new THREE.Color(0xffffff);
      const glowCol = new THREE.Color(w === 0 ? 0xfff6d8 : 0xf0ecff);
      mat.color.copy(base.lerp(glowCol, a)).multiplyScalar(1 + a * 0.25);
      const gm = this.moonGlow[w].material as THREE.MeshBasicMaterial;
      gm.opacity = a * (0.65 + 0.1 * Math.sin(f.time * 2.4));
      this.moonGlow[w].visible = gm.opacity > 0.01;
    }
    const e = f.st.ending ? 1 : 0;
    this.endingAmt += (e - this.endingAmt) * Math.min(1, f.dt * 0.8);
  }

  get ending(): number {
    return this.endingAmt;
  }

  private updateAmbient(f: StageFrame) {
    this.ambientT += f.dt;
    const cx = f.camX;
    while (this.ambientT > 0.05) {
      this.ambientT -= 0.05;
      const rx = () => cx + (Math.random() - 0.5) * 34;
      // 물 위: 꽃잎, 민들레 씨앗, 반딧불
      if (Math.random() < 0.35) {
        this.particles[0].spawn({ x: rx() - 6, y: 3 + Math.random() * 7, z: -3 + Math.random() * 4, life: 7, size: 0.1, color: [1, 0.72, 0.8], behavior: 'petal', alpha: 0.9 });
      }
      if (Math.random() < 0.25) {
        this.particles[0].spawn({ x: rx(), y: 1.7 + Math.random() * 2.5, z: -3 + Math.random() * 3.5, life: 5, size: 0.11, color: [1, 0.9, 0.55], behavior: 'firefly' });
      }
      // 물 아래: 떠오르는 별가루, 해파리 빛
      if (Math.random() < 0.45) {
        this.particles[1].spawn({ x: rx(), y: 0.3 + Math.random() * 3, z: -4 + Math.random() * 5, vy: 0.35 + Math.random() * 0.4, life: 6, size: 0.08 + Math.random() * 0.05, color: Math.random() < 0.5 ? [0.85, 0.95, 1] : [1, 0.95, 0.7], behavior: 'rise' });
      }
      if (Math.random() < 0.06) {
        this.particles[1].spawn({ x: rx(), y: 2 + Math.random() * 6, z: -8 + Math.random() * 6, life: 9, size: 0.45 + Math.random() * 0.3, color: Math.random() < 0.5 ? [1, 0.6, 0.9] : [0.55, 0.9, 1], behavior: 'jelly', alpha: 0.55 });
      }
    }
    // 안개 벽 주변 입자
    if (this.mistAlpha > 0.2 && Math.random() < 0.3) {
      this.particles[0].spawn({ x: MIST.x0 + Math.random() * (MIST.x1 - MIST.x0), y: MIST.y0 + Math.random() * 5, z: -0.5 + Math.random(), vy: 0.2, life: 3, size: 0.18, color: [1, 0.96, 1], behavior: 'rise', alpha: 0.5 * this.mistAlpha });
    }
  }
}
