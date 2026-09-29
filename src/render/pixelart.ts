import * as THREE from 'three';
import type { WorldId } from '../game/types';

/**
 * 모든 도트 그래픽은 코드로 직접 찍어요(외부 이미지 없음).
 * 16px = 1 월드 단위 기준입니다.
 */

export const PX_PER_UNIT = 16;

export type Ctx = CanvasRenderingContext2D;

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

export function px(ctx: Ctx, x: number, y: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}

export function rect(ctx: Ctx, x: number, y: number, w: number, h: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

export function ellipse(ctx: Ctx, cx: number, cy: number, rx: number, ry: number, color: string, clip?: (x: number, y: number) => boolean) {
  for (let y = Math.floor(cy - ry - 1); y <= Math.ceil(cy + ry + 1); y++) {
    for (let x = Math.floor(cx - rx - 1); x <= Math.ceil(cx + rx + 1); x++) {
      const dx = (x + 0.5 - cx) / rx;
      const dy = (y + 0.5 - cy) / ry;
      if (dx * dx + dy * dy <= 1 && (!clip || clip(x, y))) px(ctx, x, y, color);
    }
  }
}

/** 영역 안의 실루엣 둘레에 1px 외곽선을 그려요. */
export function outline(ctx: Ctx, x0: number, y0: number, w: number, h: number, color: string) {
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

export function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export const BAYER4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

/** 4x4 베이어 디더링으로 여러 색 사이를 이어요 (도트 감성 그라데이션). */
export function ditherGradient(ctx: Ctx, w: number, h: number, stops: string[]) {
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
// 지형

export interface TerrainTextures {
  front: THREE.CanvasTexture; // 윗줄(풀/이끼 테두리) 포함 1타일
  fill: THREE.CanvasTexture; // 아래쪽 흙/바위
  top: THREE.CanvasTexture; // 윗면
}

export function makeTerrain(world: WorldId, kind: 'ground' | 'deck' = 'ground'): TerrainTextures {
  const r = rng(world === 0 ? 11 : 29);
  const P = world === 0
    ? { lip: '#a6e39f', lipLight: '#c9f5b9', lipDark: '#7fcb8e', fill: '#f3d2b3', fillDark: '#e5b995', fillLight: '#fbe3c8', speck: '#d9a383', top: '#b2e8a6', topDark: '#94d897', topLight: '#d3f7c2', flower: ['#ffb3c7', '#fff5f8', '#ffe39a'] }
    : { lip: '#7fd0b4', lipLight: '#bff2df', lipDark: '#57a592', fill: '#6d5f9e', fillDark: '#594c8a', fillLight: '#8676b8', speck: '#a99ae0', top: '#6fc2aa', topDark: '#4fa08f', topLight: '#a6e8d2', flower: ['#fff3a8', '#f4efff', '#ffd6f5'] };

  if (kind === 'deck') {
    // 호숫가 나무 데크: 널빤지 앞면 + 널빤지 윗면
    const plank = ['#d9b08c', '#caa07e', '#e6c19f'];
    const [cf, fx] = makeCanvas(16, 16);
    rect(fx, 0, 0, 16, 16, '#b88d6e');
    rect(fx, 0, 0, 16, 3, '#ecd0b2');
    rect(fx, 0, 3, 16, 1, '#9c7359');
    for (let x = 1; x < 16; x += 5) rect(fx, x, 4, 2, 12, '#a47c62');
    px(fx, 3, 8, '#8a634d');
    px(fx, 12, 11, '#8a634d');
    const [cl, lx] = makeCanvas(16, 16);
    rect(lx, 0, 0, 16, 16, '#9c7a63');
    for (let x = 1; x < 16; x += 5) rect(lx, x, 0, 2, 16, '#8a6a55');
    for (let i = 0; i < 10; i++) px(lx, Math.floor(r() * 16), Math.floor(r() * 16), '#ad8a72');
    const [ct, tx] = makeCanvas(16, 16);
    for (let y = 0; y < 16; y++) rect(tx, 0, y, 16, 1, plank[Math.floor(y / 4) % 3]);
    for (let y = 3; y < 16; y += 4) rect(tx, 0, y, 16, 1, '#b48d70');
    px(tx, 5, 1, '#b48d70');
    px(tx, 11, 9, '#b48d70');
    return { front: toTexture(cf, true), fill: toTexture(cl, true), top: toTexture(ct, true) };
  }

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

export function makePillarTexture(kind: 'wood' | 'woodMoss' | 'crystal' | 'glass' | 'stone' | 'stoneMoss'): THREE.CanvasTexture {
  if (kind === 'stone' || kind === 'stoneMoss') {
    const [c, ctx] = makeCanvas(16, 16);
    rect(ctx, 0, 0, 16, 16, kind === 'stone' ? '#b9aec2' : '#a89fb5');
    for (let y = 0; y < 16; y += 5) rect(ctx, 0, y, 16, 1, '#8f84a3');
    for (let y = 0; y < 16; y += 5) rect(ctx, (y * 3) % 11, y + 1, 1, 4, '#8f84a3');
    rect(ctx, 0, 2, 16, 1, '#d8d0dc');
    if (kind === 'stoneMoss') {
      const r = rng(15);
      for (let i = 0; i < 18; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), r() < 0.5 ? '#a6d8a0' : '#86c08a');
    }
    return toTexture(c, true);
  }
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

/** 석등 (현재 쪽, 옛 마을의 돌 등). 구슬을 넣으면 불이 켜져요. */
export function makeSeokdeung(lit: boolean): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(16, 28);
  const stone = '#d8d0dc';
  const shade = '#b9aec2';
  const moss = '#a6d8a0';
  rect(ctx, 3, 24, 10, 4, shade);
  rect(ctx, 4, 23, 8, 1, stone);
  rect(ctx, 6, 14, 4, 9, stone);
  rect(ctx, 6, 14, 1, 9, shade);
  rect(ctx, 3, 12, 10, 2, stone);
  rect(ctx, 4, 6, 8, 6, stone);
  rect(ctx, 4, 6, 1, 6, shade);
  // 불 창
  rect(ctx, 6, 7, 4, 4, lit ? '#fff1b8' : '#8a7f95');
  if (lit) rect(ctx, 7, 8, 2, 2, '#ffffff');
  // 지붕
  rect(ctx, 2, 4, 12, 2, stone);
  rect(ctx, 3, 3, 10, 1, '#e8e2ec');
  rect(ctx, 6, 1, 4, 2, stone);
  rect(ctx, 7, 0, 2, 1, shade);
  px(ctx, 4, 25, moss);
  px(ctx, 11, 24, moss);
  px(ctx, 5, 13, moss);
  outline(ctx, 0, 0, 16, 28, '#5a3a57');
  return toTexture(c);
}

/** 아리의 유리구슬 (1973년). 현재로 건너오면 조금 뿌옇게 보여요. */
export function makeMarble(old = false): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(10, 10);
  ellipse(ctx, 5, 5, 4, 4, old ? '#dfe8ee' : '#cdf3ff');
  ellipse(ctx, 5.5, 5.5, 3, 3, old ? '#eef2f4' : '#e9fbff');
  // 속 무늬
  px(ctx, 4, 5, old ? '#e8b7c6' : '#ff8fb0');
  px(ctx, 5, 6, old ? '#e8b7c6' : '#ff8fb0');
  px(ctx, 6, 6, old ? '#c8d6a8' : '#8fdc7a');
  px(ctx, 6, 4, old ? '#d8cfa0' : '#ffd24a');
  px(ctx, 3, 3, '#ffffff');
  px(ctx, 4, 3, '#ffffff');
  outline(ctx, 0, 0, 10, 10, '#4b6a86');
  return toTexture(c);
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

export type DecorKind = 'flowers' | 'tuft' | 'bush' | 'tree' | 'pine' | 'primrose' | 'stones' | 'reed' | 'nightBush' | 'nightTuft';

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
  if (kind === 'primrose') {
    // 달맞이꽃 (밤에 피는 노란 꽃)
    const [c, ctx] = makeCanvas(16, 12);
    for (let i = 0; i < 3; i++) {
      const x = 3 + i * 4 + Math.floor(r() * 2);
      const h = 5 + Math.floor(r() * 5);
      rect(ctx, x, 12 - h, 1, h, '#4fa08f');
      ellipse(ctx, x + 0.5, 12 - h, 1.8, 1.4, '#fff08a');
      px(ctx, x, 12 - h, '#ffffff');
      px(ctx, x + 1, 13 - h + 2, '#6fc2aa');
    }
    return { tex: toTexture(c), w: 16, h: 12 };
  }
  if (kind === 'tuft' || kind === 'nightTuft') {
    const [c, ctx] = makeCanvas(8, 6);
    const a1 = kind === 'tuft' ? '#94d897' : '#4fa08f';
    const a2 = kind === 'tuft' ? '#b2e8a6' : '#6fc2aa';
    for (let x = 1; x < 7; x++) {
      const h = 2 + Math.floor(r() * 4);
      rect(ctx, x, 6 - h, 1, h, x % 2 ? a1 : a2);
    }
    return { tex: toTexture(c), w: 8, h: 6 };
  }
  if (kind === 'bush' || kind === 'nightBush') {
    const night = kind === 'nightBush';
    const [c, ctx] = makeCanvas(24, 16);
    ellipse(ctx, 8, 10, 7, 6, night ? '#4f8f86' : '#8fd6a0');
    ellipse(ctx, 15, 9, 8, 7, night ? '#5fa596' : '#a6e3ad');
    ellipse(ctx, 13, 7, 5, 4, night ? '#7fc2ad' : '#c3f0c4');
    for (let i = 0; i < 5; i++) px(ctx, 4 + Math.floor(r() * 16), 4 + Math.floor(r() * 9), night ? (r() < 0.5 ? '#fff3a8' : '#f4efff') : r() < 0.5 ? '#ffb3c7' : '#fff5f8');
    outline(ctx, 0, 0, 24, 16, night ? '#2e5a5a' : '#5d8f76');
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
  if (kind === 'pine') {
    // 달빛 소나무
    const [c, ctx] = makeCanvas(32, 48);
    rect(ctx, 15, 22, 3, 26, '#6e5a78');
    rect(ctx, 17, 22, 1, 26, '#54445f');
    rect(ctx, 11, 30, 5, 2, '#6e5a78');
    const tiers = [
      [16, 8, 9, 5],
      [12, 16, 8, 4],
      [20, 17, 9, 4],
      [16, 24, 12, 5],
    ];
    for (const [x, y, rx, ry] of tiers) {
      ellipse(ctx, x, y, rx, ry, '#3f7a74');
      ellipse(ctx, x - 1, y - 1, rx * 0.7, ry * 0.6, '#5a9c8f');
      px(ctx, x - 2, y - 2, '#a6e8d2');
    }
    outline(ctx, 0, 0, 32, 48, '#243f47');
    return { tex: toTexture(c), w: 32, h: 48 };
  }
  if (kind === 'stones') {
    const [c, ctx] = makeCanvas(16, 8);
    ellipse(ctx, 5, 5.5, 4, 2.6, '#8a7fb0');
    ellipse(ctx, 11, 6, 3.4, 2.2, '#9d92c2');
    px(ctx, 4, 4, '#c4bce6');
    px(ctx, 10, 5, '#c4bce6');
    outline(ctx, 0, 0, 16, 8, '#3b3363');
    return { tex: toTexture(c), w: 16, h: 8 };
  }
  // reed (갈대)
  const [c, ctx] = makeCanvas(12, 20);
  for (let i = 0; i < 4; i++) {
    const x = 2 + i * 2 + Math.floor(r() * 2);
    const h = 8 + Math.floor(r() * 11);
    for (let y = 0; y < h; y++) px(ctx, x + (y > h / 2 && i % 2 ? 1 : 0), 20 - y, i % 2 ? '#4fa08f' : '#7fd0b4');
    px(ctx, x, 20 - h, '#e8d8a8');
  }
  return { tex: toTexture(c), w: 12, h: 20 };
}

// ---------------------------------------------------------------------------
// 배경

export function makeSkyTexture(world: WorldId, late = false): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(64, 256);
  // 위(0)=하늘 꼭대기, 아래(255)=수평선
  const stops = world === 0
    ? late
      ? ['#5e62b8', '#7f78cc', '#b89ad8', '#eaa9c6', '#ffbfb0', '#ffd4b0']
      : ['#9fb4ff', '#b9c2ff', '#e7c6ff', '#ffc6d9', '#ffd9cf', '#ffe8c8']
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

export function makeMoon(phase: 'full' | 'half' = 'full', rabbit = false): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(64, 64);
  for (let y = 0; y < 64; y++) {
    for (let x = 0; x < 64; x++) {
      const d = Math.hypot(x + 0.5 - 32, y + 0.5 - 32);
      const th = (BAYER4[y % 4][x % 4] + 0.5) / 16;
      const lit = phase === 'full' || x + 0.5 >= 32;
      if (d < 12) px(ctx, x, y, lit ? '#fbf6ff' : '#4d4488');
      else if (d < 21 && (21 - d) / 9 > th + 0.3) px(ctx, x, y, 'rgba(220,210,255,0.45)');
      else if (d < 30 && (30 - d) / 9 > th + 0.6) px(ctx, x, y, 'rgba(180,170,240,0.3)');
    }
  }
  if (phase === 'full') {
    ellipse(ctx, 28, 29, 2.5, 2.5, '#e6def8');
    ellipse(ctx, 35, 35, 1.8, 1.8, '#e6def8');
    ellipse(ctx, 34, 26, 1.2, 1.2, '#ece6fb');
  } else {
    ellipse(ctx, 37, 29, 1.8, 1.8, '#e6def8');
    ellipse(ctx, 40, 36, 1.2, 1.2, '#ece6fb');
  }
  if (rabbit) {
    // 달토끼가 떡방아를 찧어요
    const r = '#d9cff5';
    rect(ctx, 33, 30, 4, 3, r);
    rect(ctx, 34, 26, 1, 4, r);
    rect(ctx, 36, 26, 1, 4, r);
    rect(ctx, 32, 33, 6, 2, r);
    rect(ctx, 38, 29, 1, 5, '#cbbfee');
    rect(ctx, 37, 34, 3, 2, '#cbbfee');
  }
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

