import * as THREE from 'three';
import type { Sym, WorldId } from '../game/types';

/**
 * 모든 도트 그래픽은 코드로 직접 찍어요(외부 이미지 없음).
 * 16px = 1 월드 단위 기준입니다.
 */

export const PX_PER_UNIT = 16;

type Ctx = CanvasRenderingContext2D;

export function makeCanvas(w: number, h: number): [HTMLCanvasElement, Ctx] {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.imageSmoothingEnabled = false;
  return [c, ctx];
}

export function toTexture(c: HTMLCanvasElement, repeat = false, smooth = false): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(c);
  t.magFilter = smooth ? THREE.LinearFilter : THREE.NearestFilter;
  t.minFilter = smooth ? THREE.LinearFilter : THREE.NearestFilter;
  t.generateMipmaps = false;
  if (repeat) {
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.RepeatWrapping;
  }
  t.needsUpdate = true;
  return t;
}

export function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function px(ctx: Ctx, x: number, y: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}

function rect(ctx: Ctx, x: number, y: number, w: number, h: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function ellipse(ctx: Ctx, cx: number, cy: number, rx: number, ry: number, color: string, clip?: (x: number, y: number) => boolean) {
  for (let y = Math.floor(cy - ry - 1); y <= Math.ceil(cy + ry + 1); y++) {
    for (let x = Math.floor(cx - rx - 1); x <= Math.ceil(cx + rx + 1); x++) {
      const dx = (x + 0.5 - cx) / rx;
      const dy = (y + 0.5 - cy) / ry;
      if (dx * dx + dy * dy <= 1 && (!clip || clip(x, y))) px(ctx, x, y, color);
    }
  }
}

/** 영역 안의 실루엣 둘레에 1px 외곽선을 그려요. */
function outline(ctx: Ctx, x0: number, y0: number, w: number, h: number, color: string) {
  const img = ctx.getImageData(x0, y0, w, h);
  const d = img.data;
  const solid = (x: number, y: number) => x >= 0 && y >= 0 && x < w && y < h && d[(y * w + x) * 4 + 3] > 0;
  const marks: [number, number][] = [];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (solid(x, y)) continue;
      if (solid(x - 1, y) || solid(x + 1, y) || solid(x, y - 1) || solid(x, y + 1)) marks.push([x, y]);
    }
  }
  for (const [x, y] of marks) px(ctx, x0 + x, y0 + y, color);
}

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

const BAYER4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

/** 4x4 베이어 디더링으로 여러 색 사이를 이어요 (도트 감성 그라데이션). */
function ditherGradient(ctx: Ctx, w: number, h: number, stops: string[]) {
  const n = stops.length - 1;
  const cols = stops.map(hexToRgb);
  const img = ctx.createImageData(w, h);
  const d = img.data;
  for (let y = 0; y < h; y++) {
    const t = (y / (h - 1)) * n;
    const i = Math.min(n - 1, Math.floor(t));
    const f = t - i;
    const steps = 6;
    const q = f * steps;
    const base = Math.floor(q);
    const frac = q - base;
    for (let x = 0; x < w; x++) {
      const th = (BAYER4[y % 4][x % 4] + 0.5) / 16;
      const level = Math.min(steps, base + (frac > th ? 1 : 0)) / steps;
      const o = (y * w + x) * 4;
      for (let k = 0; k < 3; k++) d[o + k] = Math.round(cols[i][k] + (cols[i + 1][k] - cols[i][k]) * level);
      d[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

// ---------------------------------------------------------------------------
// 캐릭터

export const CHAR_W = 16;
export const CHAR_H = 20;
export const CHAR_FRAMES = ['idle0', 'idle1', 'walk0', 'walk1', 'walk2', 'walk3', 'jump', 'fall', 'blink'] as const;
export type CharFrame = (typeof CHAR_FRAMES)[number];

interface GirlPalette {
  outline: string;
  hair: string;
  hairShade: string;
  hairLight: string;
  skin: string;
  skinShade: string;
  eye: string;
  blush: string;
  accent: string;
  dress: string;
  dressShade: string;
  trim: string;
  shoe: string;
}

const RIA: GirlPalette = {
  outline: '#5a3a57',
  hair: '#ff9eb8',
  hairShade: '#e67b9d',
  hairLight: '#ffd4e0',
  skin: '#ffe8da',
  skinShade: '#f5c7b4',
  eye: '#4a2f4f',
  blush: '#ff9aab',
  accent: '#ff7fa0',
  dress: '#fff6ec',
  dressShade: '#f0d5c9',
  trim: '#ffbfa6',
  shoe: '#a0607a',
};

const ARI: GirlPalette = {
  outline: '#2a2350',
  hair: '#bfb0ff',
  hairShade: '#8f7fe0',
  hairLight: '#e9e3ff',
  skin: '#fbe9ea',
  skinShade: '#e3c6d4',
  eye: '#2a2350',
  blush: '#f5a3c3',
  accent: '#ffe98a',
  dress: '#46508f',
  dressShade: '#333a73',
  trim: '#ffe98a',
  shoe: '#262b5c',
};

interface Pose {
  bob: number;
  legs: 'stand' | 'stepA' | 'stepB' | 'tuck' | 'dangle';
  arms: 'down' | 'up' | 'out';
  blink: boolean;
  flare: number;
  hairLift: number;
}

const POSES: Record<CharFrame, Pose> = {
  idle0: { bob: 0, legs: 'stand', arms: 'down', blink: false, flare: 0, hairLift: 0 },
  idle1: { bob: 1, legs: 'stand', arms: 'down', blink: false, flare: 0, hairLift: 0 },
  walk0: { bob: 0, legs: 'stepA', arms: 'out', blink: false, flare: 0, hairLift: 0 },
  walk1: { bob: -1, legs: 'stand', arms: 'down', blink: false, flare: 0, hairLift: 1 },
  walk2: { bob: 0, legs: 'stepB', arms: 'out', blink: false, flare: 0, hairLift: 0 },
  walk3: { bob: -1, legs: 'stand', arms: 'down', blink: false, flare: 0, hairLift: 1 },
  jump: { bob: -1, legs: 'tuck', arms: 'up', blink: false, flare: 0, hairLift: 2 },
  fall: { bob: 0, legs: 'dangle', arms: 'out', blink: false, flare: 1, hairLift: -1 },
  blink: { bob: 0, legs: 'stand', arms: 'down', blink: true, flare: 0, hairLift: 0 },
};

/** 오른쪽을 보는 3/4 시점 치비 소녀를 그려요. */
function drawGirl(ctx: Ctx, ox: number, oy: number, pal: GirlPalette, style: 'pony' | 'long', pose: Pose) {
  const b = pose.bob;
  const P = (x: number, y: number, c: string) => px(ctx, ox + x, oy + y, c);

  // 다리 / 신발 (행 16~18)
  const legs: [number, number, number][] = [];
  if (pose.legs === 'stand') legs.push([6, 16, 3], [9, 16, 3]);
  if (pose.legs === 'stepA') legs.push([5, 16, 3], [10, 16, 2]);
  if (pose.legs === 'stepB') legs.push([6, 16, 2], [9, 16, 3]);
  if (pose.legs === 'tuck') legs.push([6, 15, 2], [9, 15, 2]);
  if (pose.legs === 'dangle') legs.push([6, 16, 3], [10, 16, 3]);
  for (const [lx, ly, len] of legs) {
    for (let i = 0; i < len - 1; i++) P(lx, ly + i + b, pal.skin);
    P(lx, ly + len - 1 + b, pal.shoe);
    P(lx + 1, ly + len - 1 + b, pal.shoe);
    for (let i = 0; i < len - 1; i++) P(lx + 1, ly + i + b, pal.skinShade);
  }

  // 원피스 (행 10~16)
  const top = 10 + b;
  for (let r = 0; r < 7; r++) {
    const spread = Math.floor(r / 2) + (r >= 5 ? pose.flare : 0);
    const x0 = 5 - spread;
    const x1 = 10 + spread;
    for (let x = x0; x <= x1; x++) {
      const shade = x === x0 || (r > 3 && x === x0 + 1);
      P(x, top + r, shade ? pal.dressShade : pal.dress);
    }
    if (r === 6) for (let x = x0; x <= x1; x++) if ((x + r) % 2 === 0) P(x, top + r, pal.trim);
  }
  // 옷깃
  P(7, top, pal.trim);
  P(8, top, pal.trim);
  if (style === 'long') {
    P(7, top + 3, pal.trim);
    P(9, top + 4, pal.trim);
  } else {
    P(8, top + 2, pal.accent);
  }

  // 팔
  if (pose.arms === 'down') {
    P(4, top + 1, pal.dressShade);
    P(4, top + 2, pal.skin);
    P(11, top + 1, pal.dress);
    P(11, top + 2, pal.skin);
  } else if (pose.arms === 'out') {
    P(4, top + 1, pal.dressShade);
    P(3, top + 2, pal.skin);
    P(11, top + 1, pal.dress);
    P(12, top + 2, pal.skin);
  } else {
    P(4, top, pal.dressShade);
    P(3, top - 1, pal.skin);
    P(11, top, pal.dress);
    P(12, top - 1, pal.skin);
  }

  // 머리 뒤쪽 장식 (포니테일 / 긴 머리)
  const hy = b;
  if (style === 'pony') {
    ellipse(ctx, ox + 2.6, oy + 8.2 + hy - pose.hairLift * 0.6, 2.1, 3.3, pal.hair);
    ellipse(ctx, ox + 2.2, oy + 9.2 + hy - pose.hairLift * 0.6, 1.2, 2.2, pal.hairShade);
  } else {
    for (let y = 6; y <= 14 - Math.max(0, pose.hairLift); y++) {
      for (let x = 2; x <= 5; x++) P(x, y + hy, x === 2 || y > 12 ? pal.hairShade : pal.hair);
    }
    P(3, 15 + hy - Math.max(0, pose.hairLift), pal.hairShade);
  }

  // 얼굴형 + 머리카락
  const cx = ox + 8;
  const cy = oy + 5.6 + hy;
  ellipse(ctx, cx, cy, 5.4, 5.0, pal.hair);
  // 얼굴 (오른쪽 아래)
  ellipse(ctx, cx + 0.8, cy + 1.3, 4.2, 3.4, pal.skin, (x, y) => x - ox >= 6 && y - oy >= 5 + hy);
  // 앞머리
  for (const x of [6, 7, 9, 12]) P(x, 5 + hy, pal.hair);
  P(8, 5 + hy, pal.hairShade);
  P(6, 6 + hy, pal.hair);
  // 하이라이트
  P(6, 2 + hy, pal.hairLight);
  P(7, 2 + hy, pal.hairLight);
  P(9, 1 + hy, pal.hairLight);
  // 뒷머리 그림자
  P(4, 5 + hy, pal.hairShade);
  P(4, 6 + hy, pal.hairShade);
  P(5, 8 + hy, pal.hairShade);

  // 눈, 볼
  if (pose.blink) {
    P(9, 7 + hy, pal.eye);
    P(12, 7 + hy, pal.eye);
  } else {
    P(9, 6 + hy, pal.eye);
    P(9, 7 + hy, pal.eye);
    P(12, 6 + hy, pal.eye);
    P(12, 7 + hy, pal.eye);
    P(10, 6 + hy, '#ffffff');
  }
  P(8, 8 + hy, pal.blush);
  P(12, 8 + hy, pal.blush);
  P(11, 8 + hy, pal.skinShade);

  // 액세서리
  if (style === 'pony') {
    P(4, 3 + hy, pal.accent);
    P(3, 4 + hy, pal.accent);
    P(4, 4 + hy, '#ffffff');
    P(5, 4 + hy, pal.accent);
  } else {
    P(6, 2 + hy, pal.accent);
    P(5, 3 + hy, pal.accent);
    P(6, 3 + hy, '#fffbe0');
    P(7, 3 + hy, pal.accent);
    P(6, 4 + hy, pal.accent);
  }

  outline(ctx, ox, oy, CHAR_W, CHAR_H, pal.outline);
}

export function makeCharacterSheet(role: WorldId): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(CHAR_W * CHAR_FRAMES.length, CHAR_H);
  CHAR_FRAMES.forEach((f, i) => {
    drawGirl(ctx, i * CHAR_W, 0, role === 0 ? RIA : ARI, role === 0 ? 'pony' : 'long', POSES[f]);
  });
  const t = toTexture(c);
  t.repeat.set(1 / CHAR_FRAMES.length, 1);
  return t;
}

// ---------------------------------------------------------------------------
// 지형

export interface TerrainTextures {
  front: THREE.CanvasTexture; // 윗줄(풀/이끼 테두리) 포함 1타일
  fill: THREE.CanvasTexture; // 아래쪽 흙/바위
  top: THREE.CanvasTexture; // 윗면
}

export function makeTerrain(world: WorldId): TerrainTextures {
  const r = rng(world === 0 ? 11 : 29);
  const P = world === 0
    ? { lip: '#a6e39f', lipLight: '#c9f5b9', lipDark: '#7fcb8e', fill: '#f3d2b3', fillDark: '#e5b995', fillLight: '#fbe3c8', speck: '#d9a383', top: '#b2e8a6', topDark: '#94d897', topLight: '#d3f7c2', flower: ['#ffb3c7', '#fff5f8', '#ffe39a'] }
    : { lip: '#8ee6d8', lipLight: '#c8fff4', lipDark: '#5fbfba', fill: '#8676c4', fillDark: '#6f60ae', fillLight: '#a193dc', speck: '#c4b6ff', top: '#7fd8cc', topDark: '#5bb8b5', topLight: '#b6f6ec', flower: ['#ffd6f5', '#fff3a8', '#b9f3ff'] };

  // 앞면 윗줄
  const [cf, fx] = makeCanvas(16, 16);
  rect(fx, 0, 0, 16, 16, P.fill);
  for (let i = 0; i < 26; i++) px(fx, Math.floor(r() * 16), 5 + Math.floor(r() * 11), r() < 0.5 ? P.fillDark : P.fillLight);
  for (let x = 0; x < 16; x++) {
    const d = 3 + (r() < 0.35 ? 1 : 0) + (x % 5 === 2 ? 1 : 0);
    for (let y = 0; y < d; y++) px(fx, x, y, y === 0 ? P.lipLight : y === d - 1 ? P.lipDark : P.lip);
  }
  px(fx, 3, 9, P.speck);
  px(fx, 11, 12, P.speck);
  px(fx, 12, 12, P.speck);

  // 앞면 채움
  const [cl, lx] = makeCanvas(16, 16);
  rect(lx, 0, 0, 16, 16, P.fill);
  for (let i = 0; i < 30; i++) px(lx, Math.floor(r() * 16), Math.floor(r() * 16), r() < 0.55 ? P.fillDark : P.fillLight);
  for (let i = 0; i < 3; i++) {
    const sx = Math.floor(r() * 14);
    const sy = Math.floor(r() * 14);
    px(lx, sx, sy, P.speck);
    px(lx, sx + 1, sy, P.speck);
    px(lx, sx, sy + 1, P.fillDark);
  }

  // 윗면
  const [ct, tx] = makeCanvas(16, 16);
  rect(tx, 0, 0, 16, 16, P.top);
  for (let i = 0; i < 40; i++) px(tx, Math.floor(r() * 16), Math.floor(r() * 16), r() < 0.5 ? P.topDark : P.topLight);
  for (let i = 0; i < 3; i++) {
    const fxp = Math.floor(r() * 15);
    const fyp = Math.floor(r() * 15);
    px(tx, fxp, fyp, P.flower[i % 3]);
  }

  return { front: toTexture(cf, true), fill: toTexture(cl, true), top: toTexture(ct, true) };
}

// ---------------------------------------------------------------------------
// 소품

export function makeGlowTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(64, 64);
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  g.addColorStop(0.6, 'rgba(255,255,255,0.14)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return toTexture(c, false, true);
}

export function makeLantern(lit: boolean): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(16, 32);
  const wood = '#b98a74';
  const woodDark = '#8d6457';
  rect(ctx, 7, 10, 2, 22, wood);
  rect(ctx, 8, 10, 1, 22, woodDark);
  rect(ctx, 5, 10, 7, 1, woodDark);
  // 갓
  rect(ctx, 4, 12, 8, 1, '#8e6f8a');
  rect(ctx, 5, 11, 6, 1, '#a986a4');
  // 유리
  const glass = lit ? '#fff3b8' : '#ddd5f0';
  const glassEdge = lit ? '#ffd27a' : '#bdb3dd';
  rect(ctx, 5, 13, 6, 7, glassEdge);
  rect(ctx, 6, 14, 4, 5, glass);
  if (lit) {
    rect(ctx, 7, 15, 2, 3, '#ffffff');
  } else {
    px(ctx, 7, 17, '#8e6f8a');
    px(ctx, 8, 17, '#8e6f8a');
  }
  rect(ctx, 5, 20, 6, 1, '#8e6f8a');
  // 받침
  rect(ctx, 5, 30, 6, 2, woodDark);
  // 꽃 장식
  px(ctx, 6, 27, '#ffb3c7');
  px(ctx, 10, 25, '#ffe39a');
  px(ctx, 9, 28, '#9fdc9c');
  outline(ctx, 0, 0, 16, 32, '#5a3a57');
  return toTexture(c);
}

export function makeMoonflower(bloom: boolean): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(16, 24);
  const stem = '#5fbfba';
  rect(ctx, 7, 11, 2, 13, stem);
  // 잎
  ellipse(ctx, 4.5, 18.5, 3, 1.4, '#6fd3c4');
  ellipse(ctx, 11.5, 16.5, 3, 1.4, '#6fd3c4');
  if (bloom) {
    for (const [dx, dy] of [
      [0, -4],
      [-4, -1],
      [4, -1],
      [-3, 3],
      [3, 3],
    ]) {
      ellipse(ctx, 8 + dx, 8 + dy, 2.6, 2.6, '#f4efff');
    }
    ellipse(ctx, 8, 8, 2.4, 2.4, '#fff6c8');
    rect(ctx, 7, 7, 2, 2, '#ffffff');
  } else {
    ellipse(ctx, 8, 8, 2.8, 4, '#b8a9ff');
    ellipse(ctx, 7, 8, 1.2, 3, '#9d8cf0');
    px(ctx, 8, 4, '#e9e3ff');
  }
  outline(ctx, 0, 0, 16, 24, '#2a2350');
  return toTexture(c);
}

export function makeStarTile(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(16, 8);
  rect(ctx, 0, 3, 16, 3, 'rgba(255,240,170,0.55)');
  rect(ctx, 0, 4, 16, 1, 'rgba(255,255,230,0.9)');
  const star = (x: number, y: number) => {
    px(ctx, x, y - 1, '#fff6c0');
    px(ctx, x - 1, y, '#fff6c0');
    px(ctx, x, y, '#ffffff');
    px(ctx, x + 1, y, '#fff6c0');
    px(ctx, x, y + 1, '#fff6c0');
  };
  star(3, 4);
  star(11, 3);
  px(ctx, 7, 6, '#ffe98a');
  px(ctx, 14, 6, '#ffe98a');
  return toTexture(c, true);
}

export function makeLilyPad(lotus: boolean): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(24, 12);
  ellipse(ctx, 12, 9, 11, 2.6, '#7fcf8e');
  ellipse(ctx, 12, 8.6, 9.5, 1.9, '#a6e39f');
  rect(ctx, 12, 7, 1, 3, '#7fcf8e');
  px(ctx, 6, 8, '#d3f7c2');
  px(ctx, 16, 9, '#d3f7c2');
  if (lotus) {
    ellipse(ctx, 15, 5.5, 2.2, 2.4, '#ffb3c7');
    ellipse(ctx, 13, 6.5, 1.6, 1.4, '#ffc9d6');
    ellipse(ctx, 17, 6.5, 1.6, 1.4, '#ffc9d6');
    px(ctx, 15, 5, '#fff5f8');
  }
  outline(ctx, 0, 0, 24, 12, '#4f7a64');
  return toTexture(c);
}

export function makePillarTexture(kind: 'wood' | 'woodMoss' | 'crystal' | 'glass'): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(16, 16);
  if (kind === 'wood' || kind === 'woodMoss') {
    rect(ctx, 0, 0, 16, 16, '#c79a7f');
    for (let x = 0; x < 16; x += 4) rect(ctx, x, 0, 1, 16, '#a67c67');
    rect(ctx, 0, 6, 16, 2, '#e8c7a4');
    rect(ctx, 0, 7, 16, 1, '#b3876f');
    if (kind === 'woodMoss') {
      const r = rng(5);
      for (let i = 0; i < 22; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), r() < 0.5 ? '#8ee6d8' : '#5fbfba');
      px(ctx, 3, 3, '#e8fffb');
      px(ctx, 12, 11, '#e8fffb');
    } else {
      px(ctx, 2, 12, '#ffb3c7');
      px(ctx, 10, 2, '#a6e39f');
    }
  } else if (kind === 'crystal') {
    rect(ctx, 0, 0, 16, 16, '#a78bfa');
    for (let y = 0; y < 16; y++) {
      px(ctx, (y * 2) % 16, y, '#d8ccff');
      px(ctx, (y * 2 + 1) % 16, y, '#c4b5fd');
      px(ctx, (20 - y) % 16, y, '#7e6fd1');
    }
    px(ctx, 5, 5, '#ffffff');
  } else {
    rect(ctx, 0, 0, 16, 16, '#b7d3f0');
    for (let y = 0; y < 16; y++) px(ctx, (y * 3) % 16, y, '#dcecfb');
    for (let y = 0; y < 16; y++) px(ctx, (y * 3 + 7) % 16, y, '#98badf');
    px(ctx, 4, 4, '#ffffff');
  }
  return toTexture(c, true);
}

function drawSym(ctx: Ctx, cx: number, cy: number, sym: Exclude<Sym, 'moon'>, color: string) {
  if (sym === 'star') {
    px(ctx, cx, cy - 3, color);
    px(ctx, cx, cy - 2, color);
    for (let x = -3; x <= 3; x++) px(ctx, cx + x, cy - 1, color);
    for (let x = -2; x <= 2; x++) px(ctx, cx + x, cy, color);
    px(ctx, cx - 1, cy + 1, color);
    px(ctx, cx + 1, cy + 1, color);
    px(ctx, cx - 2, cy + 2, color);
    px(ctx, cx + 2, cy + 2, color);
  } else {
    for (const [dx, dy] of [
      [0, -2],
      [-2, 0],
      [2, 0],
      [0, 2],
    ]) {
      ellipse(ctx, cx + dx + 0.5, cy + dy + 0.5, 1.4, 1.4, color);
    }
    px(ctx, cx, cy, '#fff6c8');
  }
}

/** 초승달 모양은 두 원의 차집합으로 그려요. */
function drawMoonSym(ctx: Ctx, cx: number, cy: number, color: string) {
  for (let y = -4; y <= 4; y++) {
    for (let x = -4; x <= 4; x++) {
      const a = (x + 0.5) ** 2 + (y + 0.5) ** 2 <= 10;
      const b = (x + 0.5 - 1.8) ** 2 + (y + 0.5 + 1.0) ** 2 <= 7.5;
      if (a && !b) px(ctx, cx + x, cy + y, color);
    }
  }
}

function symbol(ctx: Ctx, cx: number, cy: number, sym: Sym, color: string) {
  if (sym === 'moon') drawMoonSym(ctx, cx, cy, color);
  else drawSym(ctx, cx, cy, sym, color);
}

export function makeTablet(sym: Sym | null): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(20, 24);
  ellipse(ctx, 10, 8, 8, 7, '#d8cce0');
  rect(ctx, 2, 8, 16, 14, '#d8cce0');
  rect(ctx, 2, 8, 2, 14, '#bfb0cc');
  rect(ctx, 16, 8, 2, 14, '#e8e0ee');
  rect(ctx, 1, 21, 18, 3, '#a9d7a3');
  px(ctx, 3, 20, '#ffb3c7');
  px(ctx, 16, 20, '#fff5f8');
  if (sym) {
    symbol(ctx, 10, 11, sym, '#7a5a8a');
    symbol(ctx, 10, 10, sym, '#ffd6e6');
  }
  outline(ctx, 0, 0, 20, 24, '#5a3a57');
  return toTexture(c);
}

export function makeShell(sym: Sym, open: boolean): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(20, 18);
  // 아래 껍데기
  ellipse(ctx, 10, 13.5, 8, 3.5, '#e7b9dc');
  ellipse(ctx, 10, 13, 6.5, 2.4, '#f6d2ea');
  if (open) {
    ellipse(ctx, 10, 12, 3, 2.2, '#fff6ff');
    rect(ctx, 9, 11, 2, 2, '#ffffff');
    // 윗 껍데기가 열린 모습
    ellipse(ctx, 10, 4.5, 8, 4, '#e7b9dc');
    for (let x = 4; x <= 16; x += 3) rect(ctx, x, 2, 1, 5, '#d49fcb');
    symbol(ctx, 10, 4, sym, '#fff6c8');
  } else {
    ellipse(ctx, 10, 10, 8, 5.5, '#e7b9dc');
    for (let x = 4; x <= 16; x += 3) rect(ctx, x, 6, 1, 7, '#d49fcb');
    ellipse(ctx, 10, 8, 4.6, 3.6, '#f6d2ea');
    symbol(ctx, 10, 9, sym, '#7b5fb8');
  }
  outline(ctx, 0, 0, 20, 18, '#2a2350');
  return toTexture(c);
}

export function makeAltar(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(20, 20);
  rect(ctx, 3, 3, 14, 3, '#efe3ea');
  rect(ctx, 2, 2, 16, 2, '#f8eef4');
  rect(ctx, 6, 6, 8, 11, '#d8cce0');
  rect(ctx, 6, 6, 2, 11, '#bfb0cc');
  rect(ctx, 4, 16, 12, 4, '#cdbfd8');
  px(ctx, 10, 9, '#ffb3c7');
  px(ctx, 9, 12, '#ffd6e6');
  px(ctx, 11, 12, '#ffd6e6');
  rect(ctx, 5, 1, 10, 1, '#c9a8d8');
  outline(ctx, 0, 0, 20, 20, '#5a3a57');
  return toTexture(c);
}

export function makePearl(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(10, 10);
  ellipse(ctx, 5, 5, 4, 4, '#efe7ff');
  ellipse(ctx, 5.5, 5.5, 3, 3, '#fdfbff');
  px(ctx, 3, 3, '#ffffff');
  px(ctx, 4, 3, '#ffffff');
  px(ctx, 6, 7, '#d9c9ff');
  outline(ctx, 0, 0, 10, 10, '#6c5aa8');
  return toTexture(c);
}

export function makeMistTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(32, 64);
  const r = rng(77);
  for (let i = 0; i < 70; i++) {
    const x = r() * 32;
    const y = r() * 64;
    const rad = 3 + r() * 7;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
    g.addColorStop(0, 'rgba(255,248,255,0.35)');
    g.addColorStop(1, 'rgba(255,248,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2);
    // 위아래로 이어지게 복제
    ctx.fillRect(x - rad, y - rad + 64, rad * 2, rad * 2);
    ctx.fillRect(x - rad, y - rad - 64, rad * 2, rad * 2);
  }
  return toTexture(c, true, true);
}

export function makeBrickTexture(world: WorldId): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(16, 16);
  const base = world === 0 ? '#f7e6dc' : '#b8a9ff';
  const line = world === 0 ? '#e0c3c0' : '#8f7fe0';
  const light = world === 0 ? '#fff6f0' : '#e2dbff';
  rect(ctx, 0, 0, 16, 16, base);
  for (let y = 0; y < 16; y += 4) {
    rect(ctx, 0, y, 16, 1, line);
    const off = (y / 4) % 2 === 0 ? 0 : 4;
    for (let x = off; x < 16; x += 8) rect(ctx, x, y, 1, 4, line);
    rect(ctx, 0, y + 1, 16, 1, light);
  }
  if (world === 0) {
    px(ctx, 5, 10, '#ffb3c7');
    px(ctx, 12, 2, '#a6e39f');
  } else {
    px(ctx, 5, 10, '#fff3a8');
    px(ctx, 12, 2, '#c8fff4');
  }
  return toTexture(c, true);
}

export function makeShadowTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(16, 8);
  ellipse(ctx, 8, 4, 7, 3, 'rgba(60,30,70,0.28)');
  ellipse(ctx, 8, 4, 5, 2, 'rgba(60,30,70,0.18)');
  return toTexture(c);
}

// ---------------------------------------------------------------------------
// 장식 (꽃, 풀, 나무, 버섯, 수정)

export type DecorKind = 'flowers' | 'tuft' | 'bush' | 'tree' | 'mushroom' | 'coral' | 'crystal' | 'reed';

export function makeDecor(kind: DecorKind, variant: number): { tex: THREE.CanvasTexture; w: number; h: number } {
  const r = rng(100 + variant * 13 + kind.length * 7);
  if (kind === 'flowers') {
    const [c, ctx] = makeCanvas(16, 10);
    const cols = ['#ffb3c7', '#fff5f8', '#ffe39a', '#d7c4ff'];
    for (let i = 0; i < 4; i++) {
      const x = 2 + Math.floor(r() * 12);
      const h = 3 + Math.floor(r() * 5);
      rect(ctx, x, 10 - h, 1, h, '#7fcb8e');
      const col = cols[(variant + i) % cols.length];
      px(ctx, x, 9 - h, col);
      px(ctx, x - 1, 10 - h, col);
      px(ctx, x + 1, 10 - h, col);
      px(ctx, x, 11 - h, col);
      px(ctx, x, 10 - h, '#fff6c8');
    }
    return { tex: toTexture(c), w: 16, h: 10 };
  }
  if (kind === 'tuft') {
    const [c, ctx] = makeCanvas(8, 6);
    for (let x = 1; x < 7; x++) {
      const h = 2 + Math.floor(r() * 4);
      rect(ctx, x, 6 - h, 1, h, x % 2 ? '#94d897' : '#b2e8a6');
    }
    return { tex: toTexture(c), w: 8, h: 6 };
  }
  if (kind === 'bush') {
    const [c, ctx] = makeCanvas(24, 16);
    ellipse(ctx, 8, 10, 7, 6, '#8fd6a0');
    ellipse(ctx, 15, 9, 8, 7, '#a6e3ad');
    ellipse(ctx, 13, 7, 5, 4, '#c3f0c4');
    for (let i = 0; i < 5; i++) px(ctx, 4 + Math.floor(r() * 16), 4 + Math.floor(r() * 9), r() < 0.5 ? '#ffb3c7' : '#fff5f8');
    outline(ctx, 0, 0, 24, 16, '#5d8f76');
    return { tex: toTexture(c), w: 24, h: 16 };
  }
  if (kind === 'tree') {
    const [c, ctx] = makeCanvas(40, 48);
    rect(ctx, 18, 24, 4, 24, '#b98a74');
    rect(ctx, 21, 24, 1, 24, '#8d6457');
    rect(ctx, 14, 30, 5, 2, '#b98a74');
    const pink = variant % 2 === 0;
    const c1 = pink ? '#ffc4d4' : '#bfe8c8';
    const c2 = pink ? '#ffa9c0' : '#9fdcb0';
    const c3 = pink ? '#ffe3ea' : '#dcf7df';
    ellipse(ctx, 20, 16, 15, 12, c2);
    ellipse(ctx, 13, 19, 9, 8, c1);
    ellipse(ctx, 27, 18, 10, 8, c1);
    ellipse(ctx, 19, 11, 9, 7, c3);
    for (let i = 0; i < 14; i++) px(ctx, 7 + Math.floor(r() * 26), 6 + Math.floor(r() * 20), r() < 0.5 ? '#ffffff' : c2);
    outline(ctx, 0, 0, 40, 48, pink ? '#b0667e' : '#5d8f76');
    return { tex: toTexture(c), w: 40, h: 48 };
  }
  if (kind === 'mushroom') {
    const [c, ctx] = makeCanvas(16, 16);
    const cap = variant % 2 === 0 ? '#ff9ed8' : '#8ee6f0';
    const capL = variant % 2 === 0 ? '#ffd2ef' : '#d2fbff';
    rect(ctx, 7, 8, 2, 8, '#e9e3ff');
    ellipse(ctx, 8, 7, 6, 3.6, cap);
    ellipse(ctx, 7, 6, 3, 1.6, capL);
    px(ctx, 5, 7, '#ffffff');
    px(ctx, 10, 6, '#ffffff');
    rect(ctx, 12, 12, 1, 4, '#e9e3ff');
    ellipse(ctx, 12.5, 11.5, 2.4, 1.6, cap);
    outline(ctx, 0, 0, 16, 16, '#2a2350');
    return { tex: toTexture(c), w: 16, h: 16 };
  }
  if (kind === 'coral') {
    const [c, ctx] = makeCanvas(32, 40);
    const col = variant % 2 === 0 ? '#c4a8ff' : '#ffb0d9';
    const colL = variant % 2 === 0 ? '#e6dcff' : '#ffd9ee';
    const branch = (x: number, y: number, len: number, dir: number) => {
      let cx = x;
      for (let i = 0; i < len; i++) {
        rect(ctx, cx, y - i, 2, 1, i % 4 === 0 ? colL : col);
        if (i % 5 === 4) cx += dir;
      }
      ellipse(ctx, cx + 1, y - len, 2, 2, colL);
    };
    branch(15, 39, 30, 0);
    branch(14, 30, 16, -1);
    branch(17, 28, 18, 1);
    branch(12, 22, 9, -1);
    branch(19, 20, 10, 1);
    outline(ctx, 0, 0, 32, 40, '#2a2350');
    return { tex: toTexture(c), w: 32, h: 40 };
  }
  if (kind === 'crystal') {
    const [c, ctx] = makeCanvas(16, 20);
    const shard = (x: number, w: number, h: number, col: string, light: string) => {
      for (let y = 0; y < h; y++) {
        const ww = Math.max(1, Math.round(w * Math.min(1, (y + 1) / (w + 1))));
        rect(ctx, x - Math.floor(ww / 2), 20 - h + y, ww, 1, col);
        px(ctx, x - Math.floor(ww / 2), 20 - h + y, light);
      }
    };
    shard(8, 5, 18, '#a78bfa', '#e2dbff');
    shard(4, 3, 10, '#8ee6f0', '#e8fffb');
    shard(12, 3, 12, '#c4b5fd', '#ffffff');
    outline(ctx, 0, 0, 16, 20, '#2a2350');
    return { tex: toTexture(c), w: 16, h: 20 };
  }
  // reed (수초)
  const [c, ctx] = makeCanvas(12, 20);
  for (let i = 0; i < 4; i++) {
    const x = 2 + i * 2 + Math.floor(r() * 2);
    const h = 8 + Math.floor(r() * 11);
    for (let y = 0; y < h; y++) px(ctx, x + (y > h / 2 && i % 2 ? 1 : 0), 20 - y, i % 2 ? '#5fbfba' : '#8ee6d8');
    px(ctx, x, 20 - h, '#e8fffb');
  }
  return { tex: toTexture(c), w: 12, h: 20 };
}

// ---------------------------------------------------------------------------
// 배경

export function makeSkyTexture(world: WorldId): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(64, 256);
  // 위(0)=하늘 꼭대기, 아래(255)=수평선
  const stops = world === 0
    ? ['#9fb4ff', '#b9c2ff', '#e7c6ff', '#ffc6d9', '#ffd9cf', '#ffe8c8']
    : ['#1f1d4a', '#2b2a5a', '#40397a', '#5b4b9a', '#8a74c4', '#b39ddb'];
  ditherGradient(ctx, 64, 256, stops);
  if (world === 1) {
    const r = rng(3);
    for (let i = 0; i < 70; i++) {
      const x = Math.floor(r() * 64);
      const y = Math.floor(r() * 200);
      px(ctx, x, y, r() < 0.2 ? '#fff3a8' : '#f4f0ff');
    }
  } else {
    const r = rng(8);
    for (let i = 0; i < 6; i++) px(ctx, Math.floor(r() * 64), Math.floor(r() * 60), '#ffffff');
  }
  return toTexture(c, true);
}

export function makeSun(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(64, 64);
  for (let y = 0; y < 64; y++) {
    for (let x = 0; x < 64; x++) {
      const d = Math.hypot(x + 0.5 - 32, y + 0.5 - 32);
      const th = (BAYER4[y % 4][x % 4] + 0.5) / 16;
      if (d < 13) px(ctx, x, y, d < 10 ? '#fff4d6' : '#ffe2b8');
      else if (d < 22 && (22 - d) / 9 > th + 0.25) px(ctx, x, y, 'rgba(255,226,196,0.55)');
      else if (d < 31 && (31 - d) / 9 > th + 0.55) px(ctx, x, y, 'rgba(255,214,214,0.35)');
    }
  }
  return toTexture(c);
}

export function makeMoon(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(64, 64);
  for (let y = 0; y < 64; y++) {
    for (let x = 0; x < 64; x++) {
      const d = Math.hypot(x + 0.5 - 32, y + 0.5 - 32);
      const th = (BAYER4[y % 4][x % 4] + 0.5) / 16;
      if (d < 12) px(ctx, x, y, '#fbf6ff');
      else if (d < 21 && (21 - d) / 9 > th + 0.3) px(ctx, x, y, 'rgba(220,210,255,0.45)');
      else if (d < 30 && (30 - d) / 9 > th + 0.6) px(ctx, x, y, 'rgba(180,170,240,0.3)');
    }
  }
  ellipse(ctx, 28, 29, 2.5, 2.5, '#e6def8');
  ellipse(ctx, 35, 35, 1.8, 1.8, '#e6def8');
  ellipse(ctx, 34, 26, 1.2, 1.2, '#ece6fb');
  return toTexture(c);
}

export function makeCloud(variant: number): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(64, 24);
  const r = rng(40 + variant);
  const blobs = 5 + Math.floor(r() * 3);
  for (let i = 0; i < blobs; i++) {
    const x = 10 + r() * 44;
    const y = 12 + (r() - 0.5) * 6;
    const rad = 5 + r() * 6;
    ellipse(ctx, x, y + 1, rad, rad * 0.62, '#ffe0ea');
  }
  for (let i = 0; i < blobs; i++) {
    const x = 12 + r() * 40;
    const y = 10 + (r() - 0.5) * 5;
    const rad = 4 + r() * 5;
    ellipse(ctx, x, y, rad, rad * 0.6, '#fff7fa');
  }
  return toTexture(c);
}

/** 사인파를 겹친 능선 실루엣 (산, 수정 첨탑, 숲 등) */
export function makeRidge(
  w: number,
  h: number,
  seed: number,
  opts: { base: string; rim: string; shade: string; peaks: number; rough: number; spiky?: boolean; minH: number; maxH: number },
): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(w, h);
  const r = rng(seed);
  const waves = Array.from({ length: 4 }, (_, i) => ({ f: (opts.peaks * (i + 1) * (0.6 + r() * 0.8)) / w, p: r() * Math.PI * 2, a: 1 / (i + 1) }));
  const heights: number[] = [];
  for (let x = 0; x < w; x++) {
    let v = 0;
    for (const wv of waves) v += Math.sin(x * wv.f * Math.PI * 2 + wv.p) * wv.a;
    v = v / 2.1 + 0.5;
    if (opts.spiky) v = Math.pow(Math.abs(Math.sin(x * (opts.peaks / w) * Math.PI + waves[0].p)), 3) * 0.7 + v * 0.3;
    v += (r() - 0.5) * opts.rough;
    heights.push(Math.round(opts.minH + v * (opts.maxH - opts.minH)));
  }
  const base = hexToRgb(opts.base);
  const rim = hexToRgb(opts.rim);
  const shade = hexToRgb(opts.shade);
  const img = ctx.createImageData(w, h);
  const d = img.data;
  for (let x = 0; x < w; x++) {
    const top = h - heights[x];
    for (let y = Math.max(0, top); y < h; y++) {
      const depth = y - top;
      const th = (BAYER4[y % 4][x % 4] + 0.5) / 16;
      let col = base;
      if (depth < 1) col = rim;
      else if (depth > h * 0.35 && (depth - h * 0.35) / (h * 0.5) > th) col = shade;
      const o = (y * w + x) * 4;
      d[o] = col[0];
      d[o + 1] = col[1];
      d[o + 2] = col[2];
      d[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return toTexture(c, true);
}

// ---------------------------------------------------------------------------
// UI 아이콘 (이모지 대신 도트 아이콘: 기기마다 모양이 달라지지 않게)

const INK = '#5a3a57';

/** 마음 전하기 아이콘. 달·별·꽃은 돌판/조개 문양과 똑같은 모양이에요. */
export function makeEmoteIcon(kind: string): HTMLCanvasElement {
  const [c, ctx] = makeCanvas(16, 16);
  switch (kind) {
    case 'hi': {
      ellipse(ctx, 8, 8.5, 6, 5.6, '#ffe8da');
      px(ctx, 5, 8, INK);
      px(ctx, 5, 7, INK);
      rect(ctx, 9, 8, 3, 1, INK);
      px(ctx, 4, 10, '#ff9aab');
      px(ctx, 12, 10, '#ff9aab');
      rect(ctx, 7, 11, 3, 1, '#c0707f');
      px(ctx, 13, 2, '#ff9eb8');
      px(ctx, 12, 3, '#ff9eb8');
      px(ctx, 14, 3, '#ff9eb8');
      px(ctx, 13, 4, '#ff9eb8');
      break;
    }
    case 'heart': {
      ellipse(ctx, 5.5, 6, 3.6, 3.6, '#ff8fb0');
      ellipse(ctx, 10.5, 6, 3.6, 3.6, '#ff8fb0');
      for (let y = 7; y < 14; y++) {
        const half = 7 - (y - 7);
        rect(ctx, 8 - half, y, half * 2, 1, '#ff8fb0');
      }
      px(ctx, 4, 4, '#ffffff');
      px(ctx, 5, 4, '#ffffff');
      px(ctx, 4, 5, '#ffffff');
      break;
    }
    case 'here': {
      ellipse(ctx, 8, 8, 6.5, 6.5, '#ffe29a');
      rect(ctx, 7, 3, 2, 7, INK);
      rect(ctx, 7, 11, 2, 2, INK);
      break;
    }
    case 'what': {
      ellipse(ctx, 8, 8, 6.5, 6.5, '#d9ccff');
      rect(ctx, 6, 3, 4, 1, INK);
      px(ctx, 5, 4, INK);
      px(ctx, 10, 4, INK);
      px(ctx, 10, 5, INK);
      px(ctx, 9, 6, INK);
      px(ctx, 8, 7, INK);
      px(ctx, 8, 8, INK);
      px(ctx, 8, 11, INK);
      px(ctx, 8, 12, INK);
      break;
    }
    case 'wait': {
      rect(ctx, 2, 4, 12, 8, '#fff6ec');
      rect(ctx, 3, 3, 10, 10, '#fff6ec');
      rect(ctx, 4, 8, 2, 2, INK);
      rect(ctx, 7, 8, 2, 2, INK);
      rect(ctx, 10, 8, 2, 2, INK);
      px(ctx, 4, 13, '#fff6ec');
      break;
    }
    case 'moon':
      ellipse(ctx, 8, 8, 7, 7, '#3f3a7a');
      drawMoonSym(ctx, 8, 8, '#ffe98a');
      break;
    case 'star':
      ellipse(ctx, 8, 8, 7, 7, '#3f3a7a');
      drawSym(ctx, 8, 8, 'star', '#fff3a8');
      break;
    case 'flower':
      ellipse(ctx, 8, 8, 7, 7, '#3f3a7a');
      drawSym(ctx, 8, 8, 'flower', '#ffb3c7');
      break;
  }
  outline(ctx, 0, 0, 16, 16, INK);
  return c;
}

const UI_ICONS: Record<string, string[]> = {
  sound: [
    '............',
    '....o.......',
    '...oo...o...',
    '.oooo....o..',
    '.owwo..o..o.',
    '.owwo...o.o.',
    '.owwo...o.o.',
    '.owwo..o..o.',
    '.oooo....o..',
    '...oo...o...',
    '....o.......',
    '............',
  ],
  mute: [
    '............',
    '....o.......',
    '...oo.......',
    '.oooo.p...p.',
    '.owwo..p.p..',
    '.owwo...p...',
    '.owwo..p.p..',
    '.owwo.p...p.',
    '.oooo.......',
    '...oo.......',
    '....o.......',
    '............',
  ],
  home: [
    '............',
    '.....oo.....',
    '....owwo....',
    '...owwwwo...',
    '..owwwwwwo..',
    '.owwwwwwwwo.',
    '..owwooowo..',
    '..owwoyowo..',
    '..owwoyowo..',
    '..oooooooo..',
    '............',
    '............',
  ],
  swap: [
    '............',
    '..o.........',
    '.ooo....l...',
    'ooooo...l...',
    '..o.....l...',
    '..o.....l...',
    '..p.....l...',
    '..p.....l...',
    '..p...lllll.',
    '..p....lll..',
    '........l...',
    '............',
  ],
  invite: [
    '............',
    '............',
    'oooooooooooo',
    'oowwwwwwwwoo',
    'owowwwwwwowo',
    'owwowwwwowwo',
    'owwwowwowwwo',
    'owwwwoowwwwo',
    'owwwwwwwwwwo',
    'oooooooooooo',
    '............',
    '............',
  ],
  chat: [
    '............',
    '..oooooooo..',
    '.owwwwwwwwo.',
    'owwwwwwwwwwo',
    'owwowwowwowo',
    'owwwwwwwwwwo',
    '.owwwwwwwwo.',
    '..ooowoooo..',
    '....owo.....',
    '....oo......',
    '............',
    '............',
  ],
  act: [
    '.....o......',
    '.....o......',
    '....oyo.....',
    '..oooyooo...',
    'oooyyyyyooo.',
    '..oooyooo...',
    '....oyo.....',
    '.....o...o..',
    '.....o..oyo.',
    '.........o..',
    '............',
    '............',
  ],
  jump: [
    '.....oo.....',
    '....owwo....',
    '...owwwwo...',
    '..owwwwwwo..',
    '.oooowwoooo.',
    '....owwo....',
    '....owwo....',
    '....owwo....',
    '....oooo....',
    '............',
    'pppppppppppp',
    '............',
  ],
};

const UI_PAL: Record<string, string> = { o: INK, w: '#ffffff', y: '#f2b84b', p: '#e67b9d', l: '#8f7fe0' };

export function makeUiIcon(name: keyof typeof UI_ICONS | string): HTMLCanvasElement {
  const map = UI_ICONS[name] ?? UI_ICONS.act;
  const [c, ctx] = makeCanvas(12, 12);
  map.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const col = UI_PAL[row[x]];
      if (col) px(ctx, x, y, col);
    }
  });
  return c;
}
