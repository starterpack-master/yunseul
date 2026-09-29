import * as THREE from 'three';
import type { ChapterDef, SolidDef } from '../game/chapters/types';
import type { Player } from '../game/player';
import type { Look, Role, WorldId } from '../game/types';
import { buoyTop, litFlag, type WorldState } from '../game/world';
import { CHAR_FRAMES, CHAR_H, CHAR_W, charKey, makeCharacterSheet, type CharFrame, type CharOpts } from './characters';
import * as art from './pixelart';
import { ParticleField, hex3 } from './particles';
import * as spr from './sprites';

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

function spritePlane(wPx: number, hPx: number, pivot: 'bottom' | 'center' = 'bottom'): THREE.PlaneGeometry {
  const g = new THREE.PlaneGeometry(wPx * U, hPx * U);
  if (pivot === 'bottom') g.translate(0, (hPx * U) / 2, 0);
  return g;
}

function artMesh(a: spr.SpriteArt, opts: Parameters<typeof spriteMat>[1] = {}): THREE.Mesh {
  return new THREE.Mesh(spritePlane(a.w, a.h), spriteMat(a.tex, opts));
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
  get empty() {
    return this.pos.length === 0;
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
  private groups = new Map<THREE.Texture, QuadBuilder>();
  add(tex: THREE.Texture, x: number, y: number, z: number, w: number, h: number, flip = false, shade = 1) {
    let q = this.groups.get(tex);
    if (!q) {
      q = new QuadBuilder();
      this.groups.set(tex, q);
    }
    const u0 = flip ? 1 : 0;
    const u1 = flip ? 0 : 1;
    q.quad(
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
    for (const [tex, q] of this.groups) parent.add(new THREE.Mesh(q.build(), new THREE.MeshBasicMaterial({ map: tex, alphaTest: 0.5, vertexColors: true })));
  }
}

interface CharacterView {
  mesh: THREE.Mesh;
  tex: THREE.CanvasTexture;
  key: string;
  shadow: THREE.Mesh;
  zzz: THREE.Mesh;
  blinkT: number;
}

interface Swap {
  mesh: THREE.Mesh;
  a: THREE.Texture;
  b: THREE.Texture;
  when: (st: WorldState) => boolean;
  glow?: THREE.Mesh;
  glowBase?: number;
  on?: boolean;
  onAt?: number;
}

interface BridgeView {
  id: string;
  kind: string;
  world: WorldId;
  parts: THREE.Mesh[];
  baseY: number[];
  glow?: THREE.Mesh;
  when: (st: WorldState) => boolean;
  active: boolean;
  activeAt: number;
}

interface NpcView {
  id: string;
  mesh: THREE.Mesh;
  art: spr.SpriteArt;
  world: WorldId;
  kind: string;
  baseX: number;
  x: number;
  face: 1 | -1;
  pose: string;
  arts: Record<string, spr.SpriteArt>;
}

interface MagpieView {
  id: string;
  world: WorldId;
  mesh: THREE.Mesh;
  home: THREE.Vector3;
  target: THREE.Vector3;
  gone: boolean;
  goneAt: number;
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
  /** 컷신이 정해 주는 연출 */
  hideChar: [boolean, boolean];
  grandma?: { pose?: 'sit' | 'stand' | 'sleep'; x?: number; face?: 1 | -1 };
  /** 핑이 놓인 자리 (어둠 속 징검돌을 비춰요) */
  marks: { w: WorldId; x: number; y: number; t: number }[];
}

export class Stage {
  readonly root = new THREE.Group();
  readonly worlds: [THREE.Group, THREE.Group] = [new THREE.Group(), new THREE.Group()];
  readonly particles: [ParticleField, ParticleField] = [new ParticleField(800), new ParticleField(800)];
  private level: [THREE.Group, THREE.Group] = [new THREE.Group(), new THREE.Group()];
  private ch: ChapterDef | null = null;
  private chars: CharacterView[] = [];
  private swaps: Swap[] = [];
  private bridges: BridgeView[] = [];
  private buoys: { id: string; parts: Record<WorldId, { pillar: THREE.Mesh; cap: THREE.Mesh; tex: THREE.Texture }> }[] = [];
  private items = new Map<string, { mesh: THREE.Mesh; glow: THREE.Mesh; kind: string; texNew: THREE.Texture; texOld: THREE.Texture }>();
  private npcs: NpcView[] = [];
  private magpies: MagpieView[] = [];
  private stones: { mesh: THREE.Mesh; glow: THREE.Mesh; x: number; top: number; seenUntil: number }[] = [];
  private darkPlanes: THREE.Mesh[] = [];
  private arcViews: { id: string; kind: string; meshes: THREE.Mesh[]; glow: THREE.Mesh[]; amt: number; birds?: THREE.Mesh[] }[] = [];
  private diaryViews: { id: string; mesh: THREE.Mesh; glow: THREE.Mesh }[] = [];
  private keepHints: { id: string; world: WorldId; x: number; y: number }[] = [];
  private clouds: THREE.Mesh[] = [];
  private skies: [THREE.Group, THREE.Group] = [new THREE.Group(), new THREE.Group()];
  private moonMesh: THREE.Mesh | null = null;
  private moonTex: [THREE.Texture, THREE.Texture] | null = null;
  private glowTex = art.makeGlowTexture();
  private noteTex = spr.makeNote();
  private ambientT = 0;
  private endingAmt = 0;
  rabbit = false;
  dawn = 0;

  constructor() {
    this.worlds[1].scale.y = -1; // 1973년 세계는 수면 기준으로 뒤집혀 있어요.
    this.root.add(this.worlds[0], this.worlds[1]);
    for (const w of [0, 1] as WorldId[]) {
      this.worlds[w].add(this.level[w], this.skies[w], this.particles[w].points);
    }
    this.buildCharacters();
    for (const w of [0, 1] as WorldId[]) setLayer(this.worlds[w], WORLD_LAYER[w]);
  }

  // -------------------------------------------------------------------------
  // 장 만들기

  load(ch: ChapterDef, st: WorldState) {
    this.clearLevel();
    this.ch = ch;
    for (const w of [0, 1] as WorldId[]) {
      this.buildBackground(w, ch);
      this.buildTerrain(w, ch);
      this.buildDecor(w, ch);
    }
    this.buildProps(ch);
    this.buildLights(ch);
    this.buildBridges(ch);
    this.buildBuoys(ch);
    this.buildItems(ch);
    this.buildSockets(ch);
    this.buildUses(ch);
    this.buildArcs(ch);
    this.buildHidden(ch);
    this.buildNpcs(ch);
    this.buildMagpies(ch, st);
    this.buildDiary(ch);
    this.keepHints = ch.keepsakes.filter((k) => k.how === 'use').map((k) => ({ id: k.id, world: k.world, x: k.x, y: k.y }));
    for (const w of [0, 1] as WorldId[]) setLayer(this.level[w], WORLD_LAYER[w]);
    for (const w of [0, 1] as WorldId[]) setLayer(this.skies[w], WORLD_LAYER[w]);
  }

  private clearLevel() {
    for (const w of [0, 1] as WorldId[]) {
      for (const g of [this.level[w], this.skies[w]]) {
        g.traverse((o) => {
          const m = o as THREE.Mesh;
          if (m.geometry) m.geometry.dispose();
          const mat = m.material as THREE.MeshBasicMaterial | undefined;
          if (mat && !Array.isArray(mat)) mat.dispose();
        });
        g.clear();
      }
    }
    this.swaps = [];
    this.bridges = [];
    this.buoys = [];
    this.items.clear();
    this.npcs = [];
    this.magpies = [];
    this.stones = [];
    this.darkPlanes = [];
    this.arcViews = [];
    this.diaryViews = [];
    this.clouds = [];
    this.moonMesh = null;
  }

  private buildBackground(w: WorldId, ch: ChapterDef) {
    const sky = this.skies[w];
    const g = this.level[w];
    const late = ch.dusk === 'late';
    const skyMesh = new THREE.Mesh(new THREE.PlaneGeometry(320, 80), spriteMat(art.makeSkyTexture(w, late), { fog: false }));
    (skyMesh.material as THREE.MeshBasicMaterial).map!.repeat.set(16, 1);
    skyMesh.position.set(0, 40 - 0.5, -90);
    sky.add(skyMesh);
    if (w === 0) {
      const sun = new THREE.Mesh(spritePlane(64, 64, 'center'), spriteMat(art.makeSun(), { transparent: true, fog: false }));
      sun.scale.setScalar(4.2);
      sun.position.set(8, late ? 1.6 : 3.6, -86);
      sky.add(sun);
      for (let i = 0; i < 6; i++) {
        const c = new THREE.Mesh(spritePlane(64, 24, 'center'), spriteMat(art.makeCloud(i), { transparent: true, fog: false, opacity: late ? 0.7 : 0.92 }));
        c.scale.setScalar(2.2 + (i % 3) * 0.6);
        c.position.set(-60 + i * 24, 14 + (i % 3) * 5, -84 + i);
        sky.add(c);
        this.clouds.push(c);
      }
    } else {
      this.moonTex = [art.makeMoon(ch.moon, false), art.makeMoon(ch.moon, true)];
      const moon = new THREE.Mesh(spritePlane(64, 64, 'center'), spriteMat(this.moonTex[0], { transparent: true, fog: false }));
      moon.scale.setScalar(4.0);
      moon.position.set(-14, 17, -86);
      sky.add(moon);
      this.moonMesh = moon;
    }
    const far = w === 0
      ? art.makeRidge(1024, 112, 21, { base: late ? '#a99be0' : '#c9b8f2', rim: '#e6dcff', shade: late ? '#9a8ad0' : '#d9c6ee', peaks: 7, rough: 0.05, minH: 30, maxH: 104 })
      : art.makeRidge(1024, 112, 22, { base: '#433b7e', rim: '#7f74c8', shade: '#3a3370', peaks: 6, rough: 0.06, minH: 34, maxH: 106 });
    const farMesh = new THREE.Mesh(new THREE.PlaneGeometry(200, 200 * (112 / 1024)), spriteMat(far));
    farMesh.position.set(32, (200 * (112 / 1024)) / 2 - 0.05, -58);
    g.add(farMesh);
    const mid = w === 0
      ? art.makeRidge(1024, 72, 31, { base: '#b6dcc8', rim: '#dff5e6', shade: '#a7cfc0', peaks: 12, rough: 0.12, minH: 18, maxH: 60 })
      : art.makeRidge(1024, 72, 32, { base: '#35577a', rim: '#6fb8a8', shade: '#2f4c6c', peaks: 10, rough: 0.16, minH: 16, maxH: 62 });
    const midMesh = new THREE.Mesh(new THREE.PlaneGeometry(150, 150 * (72 / 1024)), spriteMat(mid));
    midMesh.position.set(32, (150 * (72 / 1024)) / 2 - 0.05, -34);
    g.add(midMesh);

    // 먼 물가 둑
    const tex = art.makeTerrain(w);
    const x0 = -40;
    const x1 = 110;
    const zb0 = -20;
    const zb1 = -12;
    const h = 0.55;
    const bank = new QuadBuilder();
    bank.quad([[x0, 0, zb1], [x1, 0, zb1], [x1, h, zb1], [x0, h, zb1]], [[x0, 0], [x1, 0], [x1, 1], [x0, 1]], [0.8, 0.8, 0.9, 0.9]);
    const bankTop = new QuadBuilder();
    bankTop.quad([[x0, h, zb1], [x1, h, zb1], [x1, h, zb0], [x0, h, zb0]], [[x0, zb1], [x1, zb1], [x1, zb0], [x0, zb0]], [0.95, 0.95, 0.85, 0.85]);
    g.add(new THREE.Mesh(bank.build(), new THREE.MeshBasicMaterial({ map: tex.front, vertexColors: true })));
    g.add(new THREE.Mesh(bankTop.build(), new THREE.MeshBasicMaterial({ map: tex.top, vertexColors: true })));
    const batch = new SpriteBatch();
    const r = art.rng(w === 0 ? 501 : 502);
    const trees = w === 0 ? [art.makeDecor('tree', 0), art.makeDecor('tree', 1), art.makeDecor('tree', 2)] : [art.makeDecor('pine', 0), art.makeDecor('pine', 1), art.makeDecor('nightBush', 3)];
    for (let x = x0; x < x1; x += 2.2 + r() * 3.5) {
      const d = trees[Math.floor(r() * trees.length)];
      const s = 1.1 + r() * 0.6;
      batch.add(d.tex, x, h, zb1 - 1 - r() * 6, d.w * U * s, d.h * U * s, r() < 0.5, 0.9);
    }
    batch.build(g);
  }

  private buildTerrain(w: WorldId, ch: ChapterDef) {
    const ground = art.makeTerrain(w);
    const deck = art.makeTerrain(w, 'deck');
    const qs = { ground: [new QuadBuilder(), new QuadBuilder(), new QuadBuilder()], deck: [new QuadBuilder(), new QuadBuilder(), new QuadBuilder()] };
    for (const s of ch.solids[w]) {
      const q = s.kind === 'deck' ? qs.deck : qs.ground;
      this.addBlock(s, q[0], q[1], q[2]);
    }
    const g = this.level[w];
    for (const [key, t] of [['ground', ground], ['deck', deck]] as const) {
      const [strip, fill, top] = qs[key];
      if (strip.empty) continue;
      g.add(new THREE.Mesh(strip.build(), new THREE.MeshBasicMaterial({ map: t.front, vertexColors: true })));
      g.add(new THREE.Mesh(fill.build(), new THREE.MeshBasicMaterial({ map: t.fill, vertexColors: true })));
      g.add(new THREE.Mesh(top.build(), new THREE.MeshBasicMaterial({ map: t.top, vertexColors: true })));
    }
  }

  private addBlock(s: SolidDef, strip: QuadBuilder, fill: QuadBuilder, top: QuadBuilder) {
    const { x0, x1, y0, y1 } = s;
    const sy = Math.max(y0, y1 - 1);
    strip.quad([[x0, sy, Z_FRONT], [x1, sy, Z_FRONT], [x1, y1, Z_FRONT], [x0, y1, Z_FRONT]], [[x0, sy - y1 + 1], [x1, sy - y1 + 1], [x1, 1], [x0, 1]], [0.9, 0.9, 1, 1]);
    if (sy > y0) {
      const k = (y: number) => 0.7 + 0.2 * Math.min(1, y / 3);
      fill.quad([[x0, y0, Z_FRONT], [x1, y0, Z_FRONT], [x1, sy, Z_FRONT], [x0, sy, Z_FRONT]], [[x0, y0], [x1, y0], [x1, sy], [x0, sy]], [k(y0), k(y0), k(sy), k(sy)]);
    }
    top.quad([[x0, y1, Z_FRONT], [x1, y1, Z_FRONT], [x1, y1, Z_BACK], [x0, y1, Z_BACK]], [[x0, Z_FRONT], [x1, Z_FRONT], [x1, Z_BACK], [x0, Z_BACK]], [1, 1, 0.9, 0.9]);
    fill.quad([[x0, y0, Z_BACK], [x0, y0, Z_FRONT], [x0, y1, Z_FRONT], [x0, y1, Z_BACK]], [[Z_BACK, y0], [Z_FRONT, y0], [Z_FRONT, y1], [Z_BACK, y1]], [0.62, 0.62, 0.75, 0.75]);
    fill.quad([[x1, y0, Z_FRONT], [x1, y0, Z_BACK], [x1, y1, Z_BACK], [x1, y1, Z_FRONT]], [[Z_FRONT, y0], [Z_BACK, y0], [Z_BACK, y1], [Z_FRONT, y1]], [0.62, 0.62, 0.75, 0.75]);
  }

  private buildDecor(w: WorldId, ch: ChapterDef) {
    const r = art.rng((w === 0 ? 900 : 901) + ch.id.length * 17 + ch.title.length);
    const batch = new SpriteBatch();
    const kinds: art.DecorKind[] = w === 0 ? ['flowers', 'tuft', 'bush', 'tree', 'flowers', 'tuft'] : ['primrose', 'nightTuft', 'nightBush', 'pine', 'stones', 'reed'];
    const decor = kinds.map((k, i) => art.makeDecor(k, i));
    // 장치와 겹치지 않게
    const keepOut: number[] = [
      ...ch.lights.filter((l) => l.world === w).map((l) => l.x),
      ...ch.props.filter((p) => p.world === w).map((p) => p.x),
      ...ch.npcs.filter((n) => n.world === w).map((n) => n.x),
      ...ch.uses.filter((u) => u.world === w).map((u) => u.x),
      ...ch.sockets.filter((u) => u.world === w).map((u) => u.x),
      ...ch.magpies.filter((m) => m.world === w).map((m) => m.x),
    ];
    const houses = ch.props.filter((p) => p.world === w && (p.kind === 'grandmaHouse' || p.kind === 'ariHouse'));
    for (const s of ch.solids[w]) {
      if (s.x1 - s.x0 < 1 || s.kind === 'deck') continue;
      const lo = Math.max(s.x0 + 0.3, ch.minX - 8);
      const hi = Math.min(s.x1 - 0.3, ch.maxX + 8);
      for (let x = lo; x < hi; x += 0.45 + r() * 0.9) {
        const i = Math.floor(r() * decor.length);
        const d = decor[i];
        const kind = kinds[i];
        const big = kind === 'tree' || kind === 'pine' || kind === 'bush' || kind === 'nightBush';
        if (big && houses.some((h) => Math.abs(h.x - x) < 4)) continue;
        const z = big ? -2.2 - r() * 1.8 : -0.9 - r() * 3;
        if (!big && keepOut.some((k) => Math.abs(k - x) < 0.9) && z > -1.6) continue;
        const s2 = big ? 0.9 + r() * 0.4 : 1;
        batch.add(d.tex, x, s.y1, z, d.w * U * s2, d.h * U * s2, r() < 0.5, 0.95 + r() * 0.05);
      }
      const tuft = decor[1];
      for (let x = lo; x < hi; x += 1.3 + r() * 2.2) batch.add(tuft.tex, x, s.y1, Z_FRONT - 0.03, tuft.w * U * 0.8, tuft.h * U * 0.4, r() < 0.5);
    }
    batch.build(this.level[w]);
  }

  private glowSprite(color: number, size: number, opacity = 1): THREE.Mesh {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), spriteMat(this.glowTex, { additive: true, fog: false, color, opacity }));
    m.renderOrder = 5;
    return m;
  }

  private buildProps(ch: ChapterDef) {
    for (const p of ch.props) {
      const a = spr.makeProp(p.kind, Math.round(p.x) % 2);
      const m = artMesh(a);
      m.position.set(p.x, p.y, p.z ?? -0.5);
      if (p.flip) m.scale.x = -1;
      if (p.scale) m.scale.multiplyScalar(p.scale);
      this.level[p.world].add(m);
      if (p.kind === 'grandmaHouse' || p.kind === 'ariHouse' || p.kind === 'villageHouse') {
        // 창문 불빛
        const glow = this.glowSprite(p.world === 0 ? 0xffe2b0 : 0xfff0a8, 3.2, p.world === 0 ? 0.35 : 0.5);
        glow.position.set(p.x + 1.2, p.y + 1.6, (p.z ?? -0.5) + 0.05);
        this.level[p.world].add(glow);
      }
    }
  }

  private buildLights(ch: ChapterDef) {
    for (const l of ch.lights) {
      let on: spr.SpriteArt;
      let off: spr.SpriteArt;
      if (l.kind === 'lantern') {
        on = { tex: art.makeLantern(true), w: 16, h: 32, frames: 1 };
        off = { tex: art.makeLantern(false), w: 16, h: 32, frames: 1 };
      } else if (l.kind === 'moonflower') {
        on = { tex: art.makeMoonflower(true), w: 16, h: 24, frames: 1 };
        off = { tex: art.makeMoonflower(false), w: 16, h: 24, frames: 1 };
      } else if (l.kind === 'streetlamp') {
        on = spr.makeStreetlamp(true);
        off = spr.makeStreetlamp(false);
      } else {
        on = spr.makeChorong(true);
        off = spr.makeChorong(false);
      }
      const mesh = artMesh(off);
      mesh.position.set(l.x, l.y, -0.25);
      const glowY = l.y + (off.h * U) * 0.62;
      const glow = this.glowSprite(l.kind === 'moonflower' ? 0xd6c8ff : 0xffd88a, 3.4, 0);
      glow.position.set(l.x, glowY, -0.2);
      this.level[l.world].add(mesh, glow);
      this.swaps.push({ mesh, a: off.tex, b: on.tex, when: (st) => !!st.flags[litFlag(l.id)], glow, glowBase: 0.8 });
    }
  }

  private buildBridges(ch: ChapterDef) {
    const star = art.makeStarTile();
    const pad = art.makeLilyPad(false);
    const lotus = art.makeLilyPad(true);
    for (const b of ch.bridges) {
      const view: BridgeView = { id: b.id, kind: b.kind, world: b.world, parts: [], baseY: [], when: b.when, active: false, activeAt: -1 };
      const g = this.level[b.world];
      if (b.kind === 'star') {
        const seg = b.segs[0];
        const n = Math.ceil(seg.x1 - seg.x0);
        const wSeg = (seg.x1 - seg.x0) / n;
        for (let i = 0; i < n; i++) {
          const m = new THREE.Mesh(new THREE.PlaneGeometry(wSeg, 0.5), spriteMat(star, { additive: true, fog: false }));
          m.position.set(seg.x0 + wSeg * (i + 0.5), seg.y1 - 0.2, 0.1);
          m.visible = false;
          view.parts.push(m);
          view.baseY.push(m.position.y);
          g.add(m);
        }
        const glow = new THREE.Mesh(new THREE.PlaneGeometry(seg.x1 - seg.x0 + 1, 1.6), spriteMat(this.glowTex, { additive: true, fog: false, color: 0xfff0a8, opacity: 0 }));
        glow.position.set((seg.x0 + seg.x1) / 2, seg.y1 - 0.2, -0.1);
        g.add(glow);
        view.glow = glow;
      } else if (b.kind === 'lily') {
        b.segs.forEach((seg, i) => {
          const m = new THREE.Mesh(spritePlane(24, 12), spriteMat(i === 2 ? lotus : pad));
          m.scale.x = (seg.x1 - seg.x0) / (24 * U);
          m.position.set((seg.x0 + seg.x1) / 2, seg.y1 - 0.34, 0.15);
          m.visible = false;
          view.parts.push(m);
          view.baseY.push(seg.y1 - 0.34);
          g.add(m);
        });
      } else if (b.kind === 'firefly') {
        const padTex = fireflyPadTexture();
        b.segs.forEach((seg) => {
          // 수면 합성은 깊이값으로 '물속'을 가려내요. 반투명(깊이 안 씀)으로 두면 뒤쪽 개울 바닥 깊이가 남아서
          // 발판이 통째로 물에 덮여 버려요. 그래서 불투명 도트로 깊이를 쓰고, 나타나고 사라질 땐 크기로 연출해요.
          const m = new THREE.Mesh(new THREE.PlaneGeometry(seg.x1 - seg.x0 + 0.2, 0.52), spriteMat(padTex, { fog: false }));
          m.position.set((seg.x0 + seg.x1) / 2, seg.y1 - 0.17, 0.22);
          m.visible = false;
          (m.userData as { pad?: boolean; amt?: number }).pad = true;
          (m.userData as { pad?: boolean; amt?: number }).amt = 0;
          view.parts.push(m);
          view.baseY.push(m.position.y);
          g.add(m);
          const glow = new THREE.Mesh(new THREE.PlaneGeometry(seg.x1 - seg.x0 + 1, 1.1), spriteMat(this.glowTex, { additive: true, fog: false, color: 0xdfff9a, opacity: 0 }));
          glow.position.set((seg.x0 + seg.x1) / 2, seg.y1 - 0.05, 0.18);
          view.parts.push(glow);
          view.baseY.push(glow.position.y);
          g.add(glow);
        });
      } else {
        // 감나무 가지 (자라나는 연출)
        const seg = b.segs[0];
        const tree = ch.props.find((p) => p.kind === 'bigTree' && p.world === b.world);
        const len = (tree ? tree.x - 0.4 : seg.x1) - seg.x0;
        const bark = new THREE.Mesh(new THREE.BoxGeometry(len, 0.34, 0.7), new THREE.MeshBasicMaterial({ color: 0x9a6f5c }));
        bark.geometry.translate(len / 2, 0, 0);
        bark.position.set(seg.x0, seg.y1 - 0.17, -0.1);
        g.add(bark);
        view.parts.push(bark);
        view.baseY.push(bark.position.y);
        const leaves = art.makeDecor('bush', 5);
        for (let x = seg.x0 + 0.8; x < seg.x1; x += 1.6) {
          const lm = new THREE.Mesh(spritePlane(leaves.w, leaves.h), spriteMat(leaves.tex));
          lm.scale.setScalar(0.8);
          lm.position.set(x, seg.y1 - 0.05, -0.35);
          g.add(lm);
          view.parts.push(lm);
          view.baseY.push(lm.position.y);
        }
      }
      this.bridges.push(view);
    }
  }

  private buildBuoys(ch: ChapterDef) {
    for (const b of ch.buoys) {
      const parts = {} as Record<WorldId, { pillar: THREE.Mesh; cap: THREE.Mesh; tex: THREE.Texture }>;
      for (const w of [0, 1] as WorldId[]) {
        // 지금 쪽은 50년 된 이끼 낀 말뚝, 1973년 쪽은 새 말뚝
        const kind = b.look === 'wood' ? (w === 0 ? 'woodMoss' : 'wood') : w === 0 ? 'stoneMoss' : 'stone';
        const tex = art.makePillarTexture(kind);
        const pillar = new THREE.Mesh(new THREE.BoxGeometry(b.w, 1, 1.3), new THREE.MeshBasicMaterial({ map: tex }));
        const capTex = art.makePillarTexture(kind);
        capTex.repeat.set(1.6, 0.2);
        const cap = new THREE.Mesh(new THREE.BoxGeometry(b.w + 0.2, 0.18, 1.5), new THREE.MeshBasicMaterial({ map: capTex, color: b.look === 'wood' ? 0xf2d9c4 : 0xffffff }));
        this.level[w].add(pillar, cap);
        parts[w] = { pillar, cap, tex };
      }
      this.buoys.push({ id: b.id, parts });
    }
  }

  private buildItems(ch: ChapterDef) {
    for (const d of ch.items) {
      if (d.kind === 'marble') {
        const texNew = art.makeMarble(false);
        const texOld = art.makeMarble(true);
        const mesh = new THREE.Mesh(spritePlane(10, 10, 'center'), spriteMat(texNew));
        this.items.set(d.id, { mesh, glow: this.glowSprite(0xf2eaff, 1.8, 0.8), kind: d.kind, texNew, texOld });
      } else {
        const a = spr.makeBucket();
        const mesh = new THREE.Mesh(spritePlane(a.w, a.h, 'center'), spriteMat(a.tex));
        this.items.set(d.id, { mesh, glow: this.glowSprite(0x9fd4ff, 1.2, 0.3), kind: d.kind, texNew: a.tex, texOld: a.tex });
      }
    }
  }

  private buildSockets(ch: ChapterDef) {
    for (const s of ch.sockets) {
      const off = art.makeSeokdeung(false);
      const on = art.makeSeokdeung(true);
      const mesh = new THREE.Mesh(spritePlane(16, 28), spriteMat(off));
      mesh.position.set(s.x, s.y, -0.3);
      const glow = this.glowSprite(0xfff0c0, 3.6, 0);
      glow.position.set(s.x, s.y + 1.2, -0.2);
      this.level[s.world].add(mesh, glow);
      this.swaps.push({ mesh, a: off, b: on, when: (st) => !!st.flags[s.flag], glow, glowBase: 0.85 });
    }
  }

  private buildUses(ch: ChapterDef) {
    for (const u of ch.uses) {
      if (u.look === 'sapling') {
        const stages = [spr.makeSapling(0), spr.makeSapling(1), spr.makeSapling(2)];
        const mesh = artMesh(stages[0]);
        mesh.position.set(u.x, u.y, -0.4);
        this.level[u.world].add(mesh);
        const buried = ch.uses.find((x) => x.id === 'bury');
        this.swaps.push({ mesh, a: stages[0].tex, b: stages[1].tex, when: (st) => !!st.flags[u.flag] });
        if (buried) this.swaps.push({ mesh, a: stages[1].tex, b: stages[2].tex, when: (st) => !!st.flags[buried.flag] });
      } else if (u.look === 'dig') {
        const a = spr.makeDigSpot(false);
        const b = spr.makeDigSpot(true);
        const mesh = artMesh(a);
        mesh.position.set(u.x, u.y, 0.2);
        mesh.visible = false;
        this.level[u.world].add(mesh);
        const glow = this.glowSprite(0xfff6c0, 1.6, 0);
        glow.position.set(u.x, u.y + 0.3, 0.25);
        this.level[u.world].add(glow);
        this.swaps.push({ mesh, a: a.tex, b: b.tex, when: (st) => !!st.flags[u.flag], glow, glowBase: 0 });
        (mesh.userData as { showWhen?: (st: WorldState) => boolean }).showWhen = u.when;
        (glow.userData as { pulseWhen?: (st: WorldState) => boolean }).pulseWhen = (st) => !!u.when?.(st) && !st.flags[u.flag];
      }
    }
  }

  private buildArcs(ch: ChapterDef) {
    for (const a of ch.arcs) {
      const cx = (a.x0 + a.x1) / 2;
      const half = (a.x1 - a.x0) / 2;
      const view = { id: a.id, kind: a.kind, meshes: [] as THREE.Mesh[], glow: [] as THREE.Mesh[], amt: 0, birds: undefined as THREE.Mesh[] | undefined };
      if (a.kind === 'moon') {
        const thick = 0.42;
        const shape = new THREE.Shape();
        shape.absarc(0, 0, half, 0, Math.PI, false);
        shape.absarc(0, 0, half - thick, Math.PI, 0, true);
        shape.closePath();
        const geo = new THREE.ExtrudeGeometry(shape, { depth: 1.5, bevelEnabled: false, curveSegments: 28 });
        geo.translate(0, 0, -0.75);
        geo.scale(1, a.h / half, 1);
        for (const w of [0, 1] as WorldId[]) {
          const tex = art.makeBrickTexture(w);
          tex.repeat.set(1.2, 1.2);
          const arch = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, color: 0xffffff }));
          arch.position.set(cx, 0, 0);
          this.level[w].add(arch);
          view.meshes.push(arch);
          const glow = this.glowSprite(w === 0 ? 0xfff2c8 : 0xe0d8ff, half * 3.2, 0);
          glow.position.set(cx, 0, -0.9);
          this.level[w].add(glow);
          view.glow.push(glow);
        }
      } else {
        // 오작교: 까치 여섯 무리가 줄지어 다리가 돼요.
        const bird = spr.makeMagpie();
        view.birds = [];
        const n = 30;
        for (const w of [0, 1] as WorldId[]) {
          for (let i = 0; i < n; i++) {
            const t = (i + 0.5) / n;
            const x = a.x0 + (a.x1 - a.x0) * t;
            const y = 1.5 + (a.h - 1.5) * Math.sin(Math.PI * t);
            const tex = bird.tex.clone();
            tex.needsUpdate = true;
            tex.repeat.set(1 / bird.frames, 1);
            const m = new THREE.Mesh(spritePlane(bird.w, bird.h, 'center'), spriteMat(tex));
            m.scale.set(i % 2 ? -1.1 : 1.1, 1.1, 1);
            m.position.set(x, y - 0.25, 0.05 + ((i % 3) - 1) * 0.3);
            m.visible = false;
            (m.userData as { t: number; i: number }).t = t;
            (m.userData as { t: number; i: number }).i = i;
            this.level[w].add(m);
            view.birds.push(m);
          }
          const glow = new THREE.Mesh(new THREE.PlaneGeometry(a.x1 - a.x0 + 2, 5), spriteMat(this.glowTex, { additive: true, fog: false, color: w === 0 ? 0xfff2c8 : 0xe0d8ff, opacity: 0 }));
          glow.position.set(cx, a.h - 0.6, -0.8);
          this.level[w].add(glow);
          view.glow.push(glow);
        }
      }
      this.arcViews.push(view);
    }
  }

  private buildHidden(ch: ChapterDef) {
    const tex = art.makePillarTexture('stone');
    for (const h of ch.hidden) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(h.w, 0.3, 1.1), new THREE.MeshBasicMaterial({ map: tex, color: 0xd8d0f0 }));
      mesh.position.set(h.x, h.top - 0.15, 0.1);
      const glow = this.glowSprite(0xfff3c4, 2.4, 0);
      glow.position.set(h.x, h.top + 0.05, 0.2);
      this.level[h.world].add(mesh, glow);
      this.stones.push({ mesh, glow, x: h.x, top: h.top, seenUntil: -1 });
    }
    for (const d of ch.dark) {
      // 1973년 쪽에서만 보이는 어둠 (현재 쪽 물그림자에는 안 보여요).
      // 캐릭터와 드러난 징검돌보다 뒤에 두어서, 밤 늪처럼 배경만 가라앉혀요.
      const w = d.x1 - d.x0 + 4;
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(w, 9),
        new THREE.MeshBasicMaterial({ map: this.darkTex(), color: 0x0c0a26, transparent: true, opacity: 0.93, depthWrite: false, fog: false }),
      );
      m.position.set((d.x0 + d.x1) / 2, 3.2, 0.05);
      m.renderOrder = 7;
      this.level[d.world].add(m);
      this.darkPlanes.push(m);
    }
  }

  private darkTexCache: THREE.Texture | null = null;
  /** 가장자리가 부드럽게 옅어지는 어둠 */
  private darkTex(): THREE.Texture {
    if (this.darkTexCache) return this.darkTexCache;
    const [c, ctx] = art.makeCanvas(64, 64);
    const img = ctx.createImageData(64, 64);
    for (let y = 0; y < 64; y++) {
      for (let x = 0; x < 64; x++) {
        const ex = Math.min(x, 63 - x) / 12;
        const ey = y / 40; // 위로 갈수록 옅어져요 (y=0이 위)
        const a = Math.max(0, Math.min(1, ex)) * Math.max(0, Math.min(1, ey));
        const th = (art.BAYER4[y % 4][x % 4] + 0.5) / 16;
        const o = (y * 64 + x) * 4;
        img.data[o] = img.data[o + 1] = img.data[o + 2] = 255;
        img.data[o + 3] = a > th * 0.9 + 0.05 ? Math.round(255 * Math.min(1, a + 0.15)) : 0;
      }
    }
    ctx.putImageData(img, 0, 0);
    this.darkTexCache = art.toTexture(c);
    return this.darkTexCache;
  }

  private npcArt(kind: string, pose: 'sit' | 'stand' | 'sleep'): spr.SpriteArt {
    return spr.makeNpc(kind as never, pose);
  }

  private buildNpcs(ch: ChapterDef) {
    for (const n of ch.npcs) {
      const pose = n.pose ?? 'stand';
      const a = this.npcArt(n.kind, pose);
      const arts: Record<string, spr.SpriteArt> = { [pose]: a };
      const mesh = new THREE.Mesh(spritePlane(a.w, a.h), spriteMat(a.tex));
      mesh.position.set(n.x, n.y, n.kind === 'grandma' ? -0.75 : 0.1);
      if (n.flip) mesh.scale.x = -1;
      this.level[n.world].add(mesh);
      this.npcs.push({ id: n.id, mesh, art: a, world: n.world, kind: n.kind, baseX: n.x, x: n.x, face: n.flip ? -1 : 1, pose, arts });
    }
  }

  private buildMagpies(ch: ChapterDef, st: WorldState) {
    const bird = spr.makeMagpie();
    const arc = ch.arcs.find((a) => a.kind === 'magpie');
    ch.magpies.forEach((m, i) => {
      const tex = bird.tex.clone();
      tex.needsUpdate = true;
      tex.repeat.set(1 / bird.frames, 1);
      const mesh = new THREE.Mesh(spritePlane(bird.w, bird.h), spriteMat(tex));
      mesh.position.set(m.x, m.y, 0.05);
      this.level[m.world].add(mesh);
      const tx = arc ? arc.x0 + ((arc.x1 - arc.x0) * (i + 0.5)) / ch.magpies.length : m.x;
      const t = arc ? (tx - arc.x0) / (arc.x1 - arc.x0) : 0;
      const ty = arc ? 1.5 + (arc.h - 1.5) * Math.sin(Math.PI * t) + 1.2 : m.y + 3;
      const gone = st.magpies.includes(m.id);
      mesh.visible = !gone;
      this.magpies.push({ id: m.id, world: m.world, mesh, home: new THREE.Vector3(m.x, m.y, 0.05), target: new THREE.Vector3(tx, ty, 0.05), gone, goneAt: gone ? -99 : -1 });
    });
  }

  private buildDiary(ch: ChapterDef) {
    const a = spr.makeDiaryPage();
    for (const d of ch.diary) {
      const mesh = artMesh(a);
      mesh.position.set(d.x, d.y + 0.05, 0.35);
      mesh.rotation.z = 0.15;
      const glow = this.glowSprite(0xfff6c8, 1.6, 0.5);
      glow.position.set(d.x, d.y + 0.4, 0.3);
      this.level[d.world].add(mesh, glow);
      this.diaryViews.push({ id: d.id, mesh, glow });
    }
  }

  private buildCharacters() {
    for (const w of [0, 1] as WorldId[]) {
      const opts: CharOpts = { role: w, look: w === 0 ? { outfit: 'dress', hair: 'pink', acc: 'none' } : { outfit: 'blouse', hair: 'lavender', acc: 'none' }, hairpin: w === 1 };
      const tex = makeCharacterSheet(opts);
      const mesh = new THREE.Mesh(spritePlane(CHAR_W, CHAR_H), spriteMat(tex, { fog: false }));
      mesh.position.z = 0.3;
      const shadow = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.45), spriteMat(art.makeShadowTexture(), { transparent: true, fog: false }));
      shadow.rotation.x = -Math.PI / 2;
      shadow.renderOrder = 2;
      const zzz = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.75), spriteMat(spr.makeZzz(), { transparent: true, fog: false }));
      zzz.visible = false;
      this.worlds[w].add(mesh, shadow, zzz);
      this.chars.push({ mesh, tex, key: charKey(opts), shadow, zzz, blinkT: 2 + Math.random() * 3 });
    }
  }

  /** 옷·머리색·소품·머리핀이 바뀌면 캐릭터 도트를 다시 찍어요 */
  setLook(role: Role, look: Look, hairpin: boolean) {
    const opts: CharOpts = { role, look, hairpin };
    const key = charKey(opts);
    const v = this.chars[role];
    if (v.key === key) return;
    const tex = makeCharacterSheet(opts);
    tex.offset.x = v.tex.offset.x;
    (v.mesh.material as THREE.MeshBasicMaterial).map = tex;
    (v.mesh.material as THREE.MeshBasicMaterial).needsUpdate = true;
    v.tex.dispose();
    v.tex = tex;
    v.key = key;
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

  /** 핑: 그 자리에 빛 고리 */
  markBurst(w: WorldId, x: number, y: number, mine: boolean) {
    this.particles[w].burst(x, y + 0.2, 0.5, hex3(mine ? 0xffd6e2 : 0xd9ccff), 10, 1.1);
  }

  /** 렌더링 직전: 어느 쪽 시점이냐에 따라 어둠과 숨은 징검돌을 보여 주거나 숨겨요. */
  prePass(viewRole: WorldId, layerWorld: WorldId) {
    const ownDarkView = viewRole === 1 && layerWorld === 1;
    for (const d of this.darkPlanes) d.visible = ownDarkView;
    for (const s of this.stones) {
      // 아리 시점: 보이는 때만 / 리아 시점(물그림자): 항상 보여요
      s.mesh.visible = !ownDarkView || s.seenUntil > this.timeNow;
      (s.glow.material as THREE.MeshBasicMaterial).opacity = ownDarkView ? (s.seenUntil > this.timeNow ? 0.8 : 0) : 0.62 + 0.18 * Math.sin(this.timeNow * 3 + s.x);
      s.glow.visible = (s.glow.material as THREE.MeshBasicMaterial).opacity > 0.01;
    }
  }

  private timeNow = 0;

  update(f: StageFrame) {
    const { st, time, dt } = f;
    this.timeNow = time;
    for (const w of [0, 1] as WorldId[]) this.skies[w].position.x = f.camX * 0.92;
    for (const c of this.clouds) {
      c.position.x += dt * 0.25;
      if (c.position.x > 90) c.position.x -= 150;
    }
    if (this.moonMesh && this.moonTex) {
      const want = this.rabbit ? this.moonTex[1] : this.moonTex[0];
      const mat = this.moonMesh.material as THREE.MeshBasicMaterial;
      if (mat.map !== want) {
        mat.map = want;
        mat.needsUpdate = true;
      }
    }
    this.updateCharacters(f);
    this.updateSwaps(st, time);
    this.updateBridges(st, time);
    this.updateBuoys(f.buoySink);
    this.updateItems(f);
    this.updateArcs(f);
    this.updateStones(f);
    this.updateNpcs(f);
    this.updateMagpies(f);
    this.updateDiary(f);
    this.updateAmbient(f);
    this.particles[0].update(dt, time, f.pxScale);
    this.particles[1].update(dt, time, f.pxScale);
  }

  private frameOf(p: Player, v: CharacterView, dt: number): CharFrame {
    if (p.anim === 'walk') return (['walk0', 'walk1', 'walk2', 'walk3'] as const)[Math.floor(p.animTime * 9) % 4];
    if (p.anim === 'jump') return 'jump';
    if (p.anim === 'fall') return 'fall';
    if (p.anim === 'sit' || p.sleeping) return 'sit';
    if (p.anim === 'act' || p.singing) return 'act';
    v.blinkT -= dt;
    if (v.blinkT < 0) v.blinkT = 2.5 + Math.random() * 3;
    if (v.blinkT < 0.12) return 'blink';
    return Math.floor(p.animTime * 1.6) % 2 === 0 ? 'idle0' : 'idle1';
  }

  private updateCharacters(f: StageFrame) {
    f.players.forEach((p, i) => {
      const v = this.chars[i];
      const b = p.body;
      v.mesh.visible = !p.hidden && p.present && !f.hideChar[i];
      v.tex.offset.x = CHAR_FRAMES.indexOf(this.frameOf(p, v, f.dt)) / CHAR_FRAMES.length;
      const sq = p.squash;
      v.mesh.scale.set(p.face * (1 + sq * 0.12), 1 - sq * 0.12, 1);
      v.mesh.position.set(b.x, b.y - 0.02, 0.3);
      const gy = f.groundY[i];
      const hgt = Math.max(0, b.y - gy);
      v.shadow.position.set(b.x, gy + 0.015, 0.3);
      const s = Math.max(0.35, 1 - hgt * 0.25);
      v.shadow.scale.set(s, s, 1);
      v.shadow.visible = v.mesh.visible && gy > -0.5;
      v.zzz.visible = v.mesh.visible && p.sleeping;
      v.zzz.position.set(b.x + 0.5 * p.face, b.y + 1.35 + Math.sin(f.time * 2) * 0.08, 0.4);
      if (p.singing && v.mesh.visible && Math.random() < 0.12) {
        this.particles[p.role].spawn({ x: b.x + p.face * 0.3, y: b.y + 1.2, z: 0.5, vx: (Math.random() - 0.3) * 0.6 * p.face, vy: 0.6, life: 1.6, size: 0.16, color: [1, 0.96, 0.75], behavior: 'rise' });
      }
    });
  }

  private updateSwaps(st: WorldState, time: number) {
    for (const s of this.swaps) {
      const on = s.when(st);
      const mat = s.mesh.material as THREE.MeshBasicMaterial;
      const want = on ? s.b : s.a;
      if (mat.map !== want && (on || mat.map === s.b)) {
        mat.map = want;
        mat.needsUpdate = true;
      }
      if (on !== s.on) {
        s.on = on;
        s.onAt = time;
      }
      const show = (s.mesh.userData as { showWhen?: (st: WorldState) => boolean }).showWhen;
      if (show) s.mesh.visible = show(st);
      if (s.glow) {
        const pulse = (s.glow.userData as { pulseWhen?: (st: WorldState) => boolean }).pulseWhen;
        const target = pulse ? (pulse(st) ? 0.6 + 0.3 * Math.sin(time * 4) : 0) : on ? (s.glowBase ?? 0.8) * (0.9 + 0.1 * Math.sin(time * 2.3 + s.mesh.position.x)) : 0;
        const gm = s.glow.material as THREE.MeshBasicMaterial;
        gm.opacity += (target - gm.opacity) * 0.08;
        s.glow.visible = gm.opacity > 0.01;
      }
    }
  }

  private updateBridges(st: WorldState, time: number) {
    for (const b of this.bridges) {
      const active = b.when(st);
      if (active !== b.active) {
        b.active = active;
        b.activeAt = time;
      }
      const age = time - b.activeAt;
      b.parts.forEach((m, i) => {
        if (b.kind === 'firefly') {
          const ud = m.userData as { pad?: boolean; amt?: number };
          const mat = m.material as THREE.MeshBasicMaterial;
          if (ud.pad) {
            // 반딧불이 모여들듯 커지고, 노래가 끝나면 흩어지듯 작아져요.
            const amt = (ud.amt ?? 0) + ((active ? 1 : 0) - (ud.amt ?? 0)) * 0.18;
            ud.amt = amt;
            const s = amt < 0.03 ? 0 : amt;
            m.visible = s > 0;
            m.scale.set(Math.max(0.001, s), Math.max(0.001, s), 1);
            mat.color.setScalar(0.9 + 0.1 * Math.sin(time * 6 + i));
          } else {
            const target = active ? 0.85 + 0.15 * Math.sin(time * 6 + i) : 0;
            mat.opacity += (target - mat.opacity) * 0.2;
            m.visible = mat.opacity > 0.02;
          }
          m.position.y = b.baseY[i] + Math.sin(time * 3 + i * 1.3) * 0.03;
          if (active && Math.random() < 0.08) this.particles[b.world].spawn({ x: m.position.x + (Math.random() - 0.5), y: m.position.y + 0.1, z: 0.3, life: 1.2, size: 0.1, color: [0.9, 1, 0.6], behavior: 'firefly' });
          return;
        }
        if (!active) {
          m.visible = false;
          return;
        }
        if (b.kind === 'star') {
          const t = Math.min(1, Math.max(0, (age - i * 0.07) * 4));
          m.visible = t > 0;
          m.scale.set(1, t, 1);
          (m.material as THREE.MeshBasicMaterial).opacity = 0.75 + 0.25 * Math.sin(time * 3 + i);
        } else if (b.kind === 'lily') {
          const t = Math.min(1, Math.max(0, (age - i * 0.15) * 1.5));
          m.visible = t > 0;
          const ease = 1 - Math.pow(1 - t, 3);
          m.position.y = b.baseY[i] - (1 - ease) * 0.7 + Math.sin(time * 1.6 + i * 1.7) * 0.025;
        } else {
          // 가지: 줄기부터 잎 순서로 자라요
          const t = Math.min(1, Math.max(0, (age - (i === 0 ? 0 : 0.4 + i * 0.12)) * 1.4));
          m.visible = t > 0;
          if (i === 0) m.scale.set(Math.max(0.001, 1 - Math.pow(1 - t, 3)), 1, 1);
          else m.scale.setScalar(0.8 * (1 - Math.pow(1 - t, 3)));
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
    if (!this.ch) return;
    for (const bv of this.buoys) {
      const def = this.ch.buoys.find((b) => b.id === bv.id)!;
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

  private updateItems(f: StageFrame) {
    for (const it of f.st.items) {
      const v = this.items.get(it.id);
      if (!v) continue;
      let world = it.world;
      let x = it.x;
      let y = it.y + 0.32;
      if (it.mode === 'used') {
        v.mesh.visible = false;
        v.glow.visible = false;
        continue;
      }
      if (it.mode === 'held' && it.holder !== -1) {
        const p = f.players[it.holder as WorldId];
        world = p.role;
        x = p.body.x;
        y = p.body.y + 1.55 + Math.sin(f.time * 3) * 0.06;
        v.mesh.visible = !p.hidden && !f.hideChar[p.role];
      } else {
        v.mesh.visible = true;
        if (it.mode === 'floating') y = 0.18 + Math.sin(f.time * 2.2) * 0.05;
        if (it.mode === 'ground' || it.mode === 'placed') y += Math.sin(f.time * 2) * 0.04;
        if (it.mode === 'placed') y = it.y + 1.35;
      }
      const parent = this.level[world];
      if (v.mesh.parent !== parent) {
        parent.add(v.mesh, v.glow);
        setLayer(v.mesh, WORLD_LAYER[world]);
        setLayer(v.glow, WORLD_LAYER[world]);
      }
      // 50년 뒤로 건너온 구슬은 뿌옇게
      const mat = v.mesh.material as THREE.MeshBasicMaterial;
      const want = world === 0 ? v.texOld : v.texNew;
      if (mat.map !== want) {
        mat.map = want;
        mat.needsUpdate = true;
      }
      v.mesh.position.set(x, y, 0.45);
      v.glow.position.set(x, y, 0.4);
      v.glow.visible = v.mesh.visible;
      (v.glow.material as THREE.MeshBasicMaterial).opacity = (v.kind === 'marble' ? 0.55 : 0.2) + 0.25 * Math.sin(f.time * 3);
    }
  }

  private updateArcs(f: StageFrame) {
    if (!this.ch) return;
    for (const v of this.arcViews) {
      const def = this.ch.arcs.find((a) => a.id === v.id)!;
      const cx = (def.x0 + def.x1) / 2;
      const goalOk = !!this.ch.goal && this.ch.goal.arc === v.id && this.ch.goal.when(f.st);
      if (v.kind === 'moon') {
        f.players.forEach((p, w) => {
          const on = p.present && !p.hidden && p.body.gk === 'arc' && p.body.gid === v.id && Math.abs(p.body.x - cx) < 1.0;
          const target = f.st.phase !== 'play' && goalOk ? 1 : on ? (goalOk ? 0.55 : 0.3) : goalOk && w === 0 ? 0.18 : 0;
          const mesh = v.meshes[w];
          const amt = ((mesh.userData as { amt?: number }).amt ?? 0) + (target - ((mesh.userData as { amt?: number }).amt ?? 0)) * Math.min(1, f.dt * 2);
          (mesh.userData as { amt?: number }).amt = amt;
          const mat = mesh.material as THREE.MeshBasicMaterial;
          mat.color.setRGB(1, 1, 1).lerp(new THREE.Color(w === 0 ? 0xfff6d8 : 0xf0ecff), amt).multiplyScalar(1 + amt * 0.25);
          const gm = v.glow[w].material as THREE.MeshBasicMaterial;
          gm.opacity = amt * (0.65 + 0.1 * Math.sin(f.time * 2.4));
          v.glow[w].visible = gm.opacity > 0.01;
        });
      } else if (v.birds) {
        // 모인 까치 수만큼 다리가 이어져요
        const frac = Math.min(1, f.st.magpies.length / Math.max(1, this.ch.magpies.length));
        const n = v.birds.length / 2;
        v.birds.forEach((m, k) => {
          const i = k % n;
          const ud = m.userData as { t: number; i: number };
          const shown = ud.t <= frac + 1e-6 || frac >= 1;
          m.visible = shown;
          if (!shown) return;
          const tex = (m.material as THREE.MeshBasicMaterial).map!;
          tex.offset.x = (Math.floor(f.time * 6 + i * 0.7) % 2) * 0.5;
          m.position.y = 1.5 + (def.h - 1.5) * Math.sin(Math.PI * ud.t) - 0.25 + Math.sin(f.time * 5 + i) * 0.05;
        });
        const full = frac >= 1;
        v.amt += ((full ? 1 : 0) - v.amt) * Math.min(1, f.dt * 1.5);
        for (const g of v.glow) {
          const gm = g.material as THREE.MeshBasicMaterial;
          gm.opacity = v.amt * (0.45 + 0.1 * Math.sin(f.time * 2));
          g.visible = gm.opacity > 0.01;
        }
      }
    }
    const e = f.st.phase !== 'play' ? 1 : 0;
    this.endingAmt += (e - this.endingAmt) * Math.min(1, f.dt * 0.8);
  }

  private updateStones(f: StageFrame) {
    const ari = f.players[1];
    for (const s of this.stones) {
      if (f.st.flash > 0) s.seenUntil = Math.max(s.seenUntil, f.time + 0.2);
      for (const m of f.marks) if (m.w === 1 && Math.abs(m.x - s.x) < 1.0 && f.time - m.t < 3) s.seenUntil = Math.max(s.seenUntil, f.time + 0.15);
      if (ari.body.gk === 'bridge' && ari.body.gid.startsWith('stone:') && Math.abs(ari.body.x - s.x) < 0.8) s.seenUntil = Math.max(s.seenUntil, f.time + 1.6);
    }
  }

  private updateNpcs(f: StageFrame) {
    for (const n of this.npcs) {
      let pose = n.pose;
      let x = n.baseX;
      let face = n.face;
      if (n.kind === 'grandma' && f.grandma) {
        pose = f.grandma.pose ?? pose;
        x = f.grandma.x ?? x;
        face = f.grandma.face ?? face;
      }
      if (pose !== n.pose || !n.arts[pose]) {
        n.arts[pose] ??= this.npcArt(n.kind, pose as 'sit' | 'stand' | 'sleep');
        const a = n.arts[pose];
        const mat = n.mesh.material as THREE.MeshBasicMaterial;
        mat.map = a.tex;
        mat.needsUpdate = true;
        n.art = a;
      }
      const moving = Math.abs(x - n.x) > 0.02;
      n.x += Math.sign(x - n.x) * Math.min(Math.abs(x - n.x), f.dt * 1.4);
      n.mesh.position.x = n.x;
      if (n.kind === 'grandma') n.mesh.position.y = pose === 'stand' ? 1.5 : 1.95;
      n.mesh.scale.x = face;
      const frames = n.art.frames;
      const speed = n.kind === 'turtle' || n.kind === 'oldTurtle' ? 0.8 : moving ? 4 : 0.7;
      (n.mesh.material as THREE.MeshBasicMaterial).map!.offset.x = frames > 1 ? (Math.floor(f.time * speed + n.baseX) % frames) / frames : 0;
      n.pose = pose;
      if (n.kind === 'turtle' || n.kind === 'oldTurtle') n.mesh.position.x = n.baseX + Math.sin(f.time * 0.3 + n.baseX) * 0.4;
    }
  }

  private updateMagpies(f: StageFrame) {
    for (const m of this.magpies) {
      const gone = f.st.magpies.includes(m.id);
      if (gone && !m.gone) {
        m.gone = true;
        m.goneAt = f.time;
        this.burst(m.world, m.home.x, m.home.y + 0.5, 0xe0e8ff, 14, 1.8);
      }
      const tex = (m.mesh.material as THREE.MeshBasicMaterial).map!;
      if (!m.gone) {
        m.mesh.visible = true;
        const hop = Math.max(0, Math.sin(f.time * 3 + m.home.x)) * 0.12;
        m.mesh.position.set(m.home.x + Math.sin(f.time * 0.7 + m.home.x) * 0.2, m.home.y + hop, 0.05);
        m.mesh.scale.x = Math.sin(f.time * 0.35 + m.home.x) > 0 ? 1 : -1;
        tex.offset.x = hop > 0.06 ? 0.5 : 0;
        continue;
      }
      const t = m.goneAt < 0 ? 1 : Math.min(1, (f.time - m.goneAt) / 1.8);
      m.mesh.visible = t < 1;
      const e = t * t * (3 - 2 * t);
      m.mesh.position.lerpVectors(m.home, m.target, e);
      m.mesh.position.y += Math.sin(e * Math.PI) * 2.2;
      m.mesh.scale.x = m.target.x >= m.home.x ? 1 : -1;
      tex.offset.x = Math.floor(f.time * 10) % 2 ? 0.5 : 0;
    }
  }

  private updateDiary(f: StageFrame) {
    for (const d of this.diaryViews) {
      const show = f.st.ng && !f.st.diary.includes(d.id);
      d.mesh.visible = show;
      d.glow.visible = show;
      (d.glow.material as THREE.MeshBasicMaterial).opacity = 0.4 + 0.25 * Math.sin(f.time * 3 + d.mesh.position.x);
      d.mesh.position.y = 1.55 + Math.sin(f.time * 2 + d.mesh.position.x) * 0.05;
    }
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
      if (Math.random() < 0.3) this.particles[0].spawn({ x: rx() - 6, y: 3 + Math.random() * 7, z: -3 + Math.random() * 4, life: 7, size: 0.1, color: [1, 0.72, 0.8], behavior: 'petal', alpha: 0.9 });
      if (Math.random() < 0.2) this.particles[0].spawn({ x: rx(), y: 1.7 + Math.random() * 2.5, z: -3 + Math.random() * 3.5, life: 5, size: 0.11, color: [1, 0.9, 0.55], behavior: 'firefly' });
      // 1973년 밤: 반딧불과 별빛
      if (Math.random() < 0.4) this.particles[1].spawn({ x: rx(), y: 1.6 + Math.random() * 3, z: -4 + Math.random() * 5, life: 5, size: 0.1 + Math.random() * 0.05, color: Math.random() < 0.6 ? [0.85, 1, 0.55] : [1, 0.95, 0.7], behavior: 'firefly' });
      if (Math.random() < 0.15) this.particles[1].spawn({ x: rx(), y: 0.3 + Math.random() * 2, z: -4 + Math.random() * 5, vy: 0.3 + Math.random() * 0.3, life: 6, size: 0.07, color: [0.85, 0.95, 1], behavior: 'rise' });
    }
    // 숨은 추억 근처에 작은 반짝임
    for (const k of this.keepHints) {
      if (f.st.keeps.includes(k.id)) continue;
      if (Math.abs(k.x - cx) > 18 || Math.random() > 0.05) continue;
      this.particles[k.world].spawn({ x: k.x + (Math.random() - 0.5) * 0.6, y: k.y + 0.5 + Math.random() * 0.8, z: 0.4, vy: 0.25, life: 1.2, size: 0.09, color: [1, 0.95, 0.8], behavior: 'rise' });
    }
    // 새벽 (3장 끝)
    if (this.dawn > 0 && Math.random() < 0.4 * this.dawn) this.particles[1].spawn({ x: rx0(cx), y: 0.2, z: -2 + Math.random() * 3, vy: 0.6 + Math.random(), life: 4, size: 0.12, color: [1, 0.9, 0.75], behavior: 'rise' });
  }

  get noteTexture() {
    return this.noteTex;
  }
}

const rx0 = (cx: number) => cx + (Math.random() - 0.5) * 30;

let padTexCache: THREE.Texture | null = null;
/** 반딧불이 모여 만든 징검돌 (밝은 배경에서도 보이게 도트로) */
function fireflyPadTexture(): THREE.Texture {
  if (padTexCache) return padTexCache;
  const [c, ctx] = art.makeCanvas(24, 10);
  // 옅은 물빛 위에서도 발판으로 읽히도록: 어두운 받침 → 연둣빛 몸통 → 밝은 윗면 순서로 쌓아요.
  // 깊이를 쓰는 재질이라 픽셀은 모두 불투명하게 칠해요 (뒤가 비쳐 보이지 않게).
  art.ellipse(ctx, 12, 6.2, 11.5, 3.2, '#4a7a62');
  art.ellipse(ctx, 12, 5.2, 10.5, 2.7, '#b8e67e');
  art.ellipse(ctx, 12, 4.3, 8, 1.5, '#ecffbc');
  const r = art.rng(44);
  for (let i = 0; i < 18; i++) {
    const x = 2 + Math.floor(r() * 20);
    const y = 3 + Math.floor(r() * 4);
    art.px(ctx, x, y, r() < 0.5 ? '#fffbd0' : '#e4ff8a');
  }
  art.px(ctx, 7, 3, '#ffffff');
  art.px(ctx, 12, 5, '#ffffff');
  art.px(ctx, 17, 4, '#ffffff');
  padTexCache = art.toTexture(c);
  return padTexCache;
}
