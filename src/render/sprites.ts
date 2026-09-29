import * as THREE from 'three';
import type { NpcKind, PropKind } from '../game/chapters/types';
import { ellipse, makeCanvas, outline, px, rect, rng, toTexture, type Ctx } from './pixelart';

/** 등장인물(할머니·엄마·별이·까치…)과 소품(집·장독·우물…) 도트. 모두 코드로 찍어요. */

export interface SpriteArt {
  tex: THREE.CanvasTexture;
  w: number;
  h: number;
  frames: number;
}

const INK = '#5a3a57';
const NIGHT_INK = '#2a2350';

function sheet(w: number, h: number, frames: number, draw: (ctx: Ctx, ox: number, f: number) => void, ink: string): SpriteArt {
  const [c, ctx] = makeCanvas(w * frames, h);
  for (let f = 0; f < frames; f++) {
    draw(ctx, f * w, f);
    outline(ctx, f * w, 0, w, h, ink);
  }
  const tex = toTexture(c);
  tex.repeat.set(1 / frames, 1);
  return { tex, w, h, frames };
}

// ---------------------------------------------------------------------------
// 등장인물

function grandma(ctx: Ctx, ox: number, f: number, pose: 'sit' | 'stand' | 'sleep') {
  const P = (x: number, y: number, c: string) => px(ctx, ox + x, y, c);
  const hair = '#ece8f3';
  const hairS = '#c9c3d6';
  const skin = '#f7dccf';
  const skinS = '#e4bfae';
  const card = '#c9b3e6';
  const cardS = '#a88fcf';
  const skirt = '#7e6fa8';
  const breathe = f % 2;
  const sit = pose !== 'stand';
  const bodyTop = sit ? 11 : 9;
  // 치마 / 다리
  if (sit) {
    rect(ctx, ox + 4, 16, 9, 3, skirt);
    rect(ctx, ox + 12, 16, 3, 3, skirt);
    P(15, 18, '#6f5f92');
    rect(ctx, ox + 5, 19, 3, 1, '#7a6a8a');
  } else {
    rect(ctx, ox + 5, 15, 6, 4, skirt);
    P(6, 19, '#7a6a8a');
    P(9, 19, '#7a6a8a');
  }
  // 카디건
  for (let r = 0; r < 6; r++) {
    const x0 = 4 - Math.floor(r / 3);
    const x1 = 11 + Math.floor(r / 3);
    for (let x = x0; x <= x1; x++) P(x, bodyTop + r + breathe * (r > 3 ? 0 : 0), x === x0 ? cardS : card);
  }
  P(8, bodyTop + 1, '#fff6ec');
  P(8, bodyTop + 3, '#fff6ec');
  // 손
  P(12, bodyTop + 4, skin);
  P(11, bodyTop + 5, skin);
  // 머리
  const hy = (sit ? 3 : 1) + (pose === 'sleep' ? 1 : 0);
  ellipse(ctx, ox + 8, hy + 4.5, 4.4, 4.3, hair);
  ellipse(ctx, ox + 8.8, hy + 5.6, 3.4, 2.8, skin, (x, y) => x - ox >= 7 && y >= hy + 4);
  // 쪽머리
  ellipse(ctx, ox + 3.6, hy + 3.4, 1.8, 1.8, hair);
  P(3, hy + 3, hairS);
  P(5, hy + 2, hairS);
  P(6, hy + 1, '#ffffff');
  // 눈 (자는 중이면 감은 눈) + 안경
  if (pose === 'sleep' || f === 1) {
    P(9, hy + 6, '#6b4a5a');
    P(11, hy + 6, '#6b4a5a');
  } else {
    P(9, hy + 5, '#6b4a5a');
    P(9, hy + 6, '#6b4a5a');
    P(11, hy + 5, '#6b4a5a');
    P(11, hy + 6, '#6b4a5a');
  }
  P(10, hy + 5, '#d9cfe4');
  P(12, hy + 7, '#ff9aab');
  P(10, hy + 8, skinS);
  // 별 머리핀 대신 비녀
  P(2, hy + 3, '#ffe98a');
  P(1, hy + 3, '#ffe98a');
}

function mom(ctx: Ctx, ox: number, f: number) {
  const P = (x: number, y: number, c: string) => px(ctx, ox + x, y, c);
  const skin = '#f7dccf';
  const hair = '#3c3452';
  const blouse = '#f7c9d6';
  const apron = '#ffffff';
  const skirt = '#6c78b8';
  const bob = f % 2;
  rect(ctx, ox + 5, 18, 2, 3, skin);
  rect(ctx, ox + 9, 18, 2, 3, skin);
  P(5, 21, '#3c3452');
  P(6, 21, '#3c3452');
  P(9, 21, '#3c3452');
  P(10, 21, '#3c3452');
  rect(ctx, ox + 4, 14, 8, 4, skirt);
  rect(ctx, ox + 4, 9 + bob, 8, 5, blouse);
  rect(ctx, ox + 5, 11 + bob, 6, 6, apron);
  P(6, 10 + bob, '#ff9eb8');
  P(10, 12 + bob, '#ff9eb8');
  P(3, 11 + bob, skin);
  P(12, 11 + bob, skin);
  ellipse(ctx, ox + 8, 5 + bob, 4.2, 4.2, hair);
  ellipse(ctx, ox + 8.8, 6 + bob, 3.2, 2.8, skin, (x, y) => x - ox >= 7 && y >= 5 + bob);
  // 파마머리 뽀글뽀글
  for (const [x, y] of [[4, 2], [6, 1], [9, 1], [11, 2], [3, 5], [12, 4]]) P(x, y + bob, '#524868');
  P(9, 6 + bob, '#3c3452');
  P(11, 6 + bob, '#3c3452');
  P(12, 7 + bob, '#ff9aab');
}

function turtle(ctx: Ctx, ox: number, f: number, big: boolean) {
  const P = (x: number, y: number, c: string) => px(ctx, ox + x, y, c);
  if (!big) {
    const skin = '#b8e0a0';
    P(1 + f, 5, skin);
    P(10, 4, skin);
    P(11, 4, skin);
    P(11, 3, skin);
    P(3, 6, skin);
    P(8, 6, skin);
    ellipse(ctx, ox + 6, 4, 4.5, 2.6, '#6fbf7f');
    ellipse(ctx, ox + 6, 3.4, 3.2, 1.6, '#8fd69a');
    // 별 무늬
    P(6, 2, '#ffe98a');
    P(5, 3, '#ffe98a');
    P(6, 3, '#fff6c8');
    P(7, 3, '#ffe98a');
    P(6, 4, '#ffe98a');
    P(11, 3, '#2a2350');
    return;
  }
  const skin = '#a8c090';
  rect(ctx, ox + 19, 6 + (f % 2), 3, 3, skin);
  P(21, 6 + (f % 2), '#2a2350');
  rect(ctx, ox + 4, 10, 3, 2, skin);
  rect(ctx, ox + 15, 10, 3, 2, skin);
  P(2, 8, skin);
  ellipse(ctx, ox + 11, 7, 9, 4.6, '#6f8f76');
  ellipse(ctx, ox + 11, 6, 7, 3, '#809f84');
  // 흐려진 별 무늬 + 이끼
  P(11, 4, '#e8d8a0');
  P(10, 5, '#e8d8a0');
  P(11, 5, '#f2e6be');
  P(12, 5, '#e8d8a0');
  P(11, 6, '#e8d8a0');
  P(6, 6, '#a6d8a0');
  P(15, 8, '#a6d8a0');
  P(7, 8, '#566f5c');
  P(14, 5, '#566f5c');
}

function magpie(ctx: Ctx, ox: number, f: number) {
  const P = (x: number, y: number, c: string) => px(ctx, ox + x, y, c);
  const body = '#2e2a44';
  const sheen = '#6b8fd8';
  const white = '#f4f0ff';
  // 꼬리
  for (let i = 0; i < 4; i++) P(1 + i, 6 + (i < 2 ? 1 : 0), i % 2 ? sheen : body);
  ellipse(ctx, ox + 7, 6, 3.4, 2.4, body);
  ellipse(ctx, ox + 7.4, 7, 2, 1.2, white);
  ellipse(ctx, ox + 10, 3.6, 1.8, 1.6, body);
  P(12, 3, '#ffd24a');
  P(10, 3, '#ffffff');
  if (f === 0) {
    P(6, 4, sheen);
    P(7, 4, white);
    P(7, 9, '#4b4468');
    P(8, 9, '#4b4468');
  } else {
    // 날갯짓
    P(5, 1, body);
    P(6, 2, sheen);
    P(7, 2, white);
    P(6, 3, body);
    P(8, 1, body);
  }
}

function fish(ctx: Ctx, ox: number, f: number) {
  const P = (x: number, y: number, c: string) => px(ctx, ox + x, y, c);
  ellipse(ctx, ox + 6, 4, 4, 2.4, '#ffcf7a');
  ellipse(ctx, ox + 6.4, 3.4, 2.6, 1.2, '#ffe2a8');
  P(1, 2 + f, '#e8a94c');
  P(1, 5 - f, '#e8a94c');
  P(2, 3, '#e8a94c');
  P(2, 4, '#e8a94c');
  P(8, 3, '#2a2350');
  P(10, 4, '#e07a6a');
}

export function makeNpc(kind: NpcKind, pose: 'sit' | 'stand' | 'sleep' = 'stand'): SpriteArt {
  switch (kind) {
    case 'grandma':
      return sheet(16, 20, 2, (ctx, ox, f) => grandma(ctx, ox, f, pose), INK);
    case 'mom':
      return sheet(16, 22, 2, (ctx, ox, f) => mom(ctx, ox, f), NIGHT_INK);
    case 'turtle':
      return sheet(13, 8, 2, (ctx, ox, f) => turtle(ctx, ox, f, false), NIGHT_INK);
    case 'oldTurtle':
      return sheet(24, 13, 2, (ctx, ox, f) => turtle(ctx, ox, f, true), INK);
    case 'fish':
      return sheet(12, 8, 2, (ctx, ox, f) => fish(ctx, ox, f), INK);
  }
}

export function makeMagpie(): SpriteArt {
  return sheet(13, 10, 2, magpie, '#1d1a30');
}

// ---------------------------------------------------------------------------
// 소품

function one(w: number, h: number, draw: (ctx: Ctx) => void, ink = INK): SpriteArt {
  const [c, ctx] = makeCanvas(w, h);
  draw(ctx);
  outline(ctx, 0, 0, w, h, ink);
  return { tex: toTexture(c), w, h, frames: 1 };
}

function houseBody(ctx: Ctx, w: number, h: number, o: { roof: string; roofS: string; roofL: string; wall: string; wallS: string; wood: string; woodS: string; window: string; slate?: boolean; thatch?: boolean }) {
  const roofH = 16;
  const bodyTop = roofH;
  // 벽
  rect(ctx, 6, bodyTop, w - 12, h - bodyTop - 6, o.wall);
  rect(ctx, 6, bodyTop, 2, h - bodyTop - 6, o.wallS);
  // 기둥
  for (const x of [6, Math.floor(w / 2) - 1, w - 8]) rect(ctx, x, bodyTop, 2, h - bodyTop - 6, o.wood);
  // 문 (창호지)
  const doorW = 12;
  const dx = Math.floor(w / 2) - doorW - 2;
  rect(ctx, dx, bodyTop + 4, doorW, h - bodyTop - 12, o.window);
  for (let y = bodyTop + 6; y < h - 8; y += 3) rect(ctx, dx, y, doorW, 1, o.woodS);
  rect(ctx, dx + 5, bodyTop + 4, 1, h - bodyTop - 12, o.woodS);
  const wx = Math.floor(w / 2) + 4;
  rect(ctx, wx, bodyTop + 5, 10, 8, o.window);
  rect(ctx, wx + 4, bodyTop + 5, 1, 8, o.woodS);
  rect(ctx, wx, bodyTop + 9, 10, 1, o.woodS);
  // 마루
  rect(ctx, 2, h - 7, w - 4, 3, o.wood);
  rect(ctx, 2, h - 7, w - 4, 1, '#f2d8bc');
  for (let x = 4; x < w - 4; x += 6) rect(ctx, x, h - 4, 2, 4, o.woodS);
  rect(ctx, 0, h - 1, w, 1, o.woodS);
  // 지붕
  for (let y = 0; y < roofH; y++) {
    const inset = Math.max(0, 10 - Math.floor(y * 0.9));
    const x0 = inset;
    const x1 = w - inset;
    rect(ctx, x0, y, x1 - x0, 1, y < 2 ? o.roofL : o.roof);
    if (o.slate && y % 3 === 2) rect(ctx, x0, y, x1 - x0, 1, o.roofS);
    if (o.thatch && (y + x0) % 2 === 0) rect(ctx, x0 + (y % 4), y, 2, 1, o.roofS);
  }
  if (!o.slate && !o.thatch) for (let x = 2; x < w - 2; x += 4) rect(ctx, x, roofH - 2, 2, 2, o.roofS);
  rect(ctx, 0, roofH - 1, w, 1, o.roofS);
}

export function makeProp(kind: PropKind, variant = 0): SpriteArt {
  switch (kind) {
    case 'grandmaHouse':
      return one(96, 64, (ctx) => {
        houseBody(ctx, 96, 64, { roof: '#8fa6c9', roofS: '#6f85aa', roofL: '#b8c9e6', wall: '#fff3e6', wallS: '#ead8c6', wood: '#c9956f', woodS: '#a6765a', window: '#fffbe0' });
        // 화분, 빨랫줄, 라디오 자리
        ellipse(ctx, 88, 54, 4, 3, '#ffb3c7');
        rect(ctx, 85, 55, 7, 3, '#c97b5a');
        ellipse(ctx, 10, 54, 3, 3, '#a6e39f');
        rect(ctx, 8, 55, 5, 3, '#c97b5a');
      });
    case 'ariHouse':
      return one(96, 64, (ctx) => {
        houseBody(ctx, 96, 64, { roof: '#7fa7c9', roofS: '#5f86aa', roofL: '#a8c8e6', wall: '#c9a98a', wallS: '#a88a70', wood: '#8f6d5a', woodS: '#6f5344', window: '#fff1b8', slate: true });
        // 처마 밑 옥수수와 마늘
        rect(ctx, 20, 17, 2, 6, '#ffe06a');
        rect(ctx, 24, 17, 2, 5, '#ffe06a');
        rect(ctx, 70, 17, 3, 4, '#f4efff');
      }, NIGHT_INK);
    case 'villageHouse':
      return one(80, 56, (ctx) => {
        houseBody(ctx, 80, 56, { roof: '#c9b27a', roofS: '#a8925f', roofL: '#e6d29f', wall: '#b8998a', wallS: '#977a6e', wood: '#7f6252', woodS: '#624a3f', window: variant ? '#8a7fb0' : '#fff1b8', thatch: true });
      }, NIGHT_INK);
    case 'jars':
      return one(40, 22, (ctx) => {
        rect(ctx, 0, 18, 40, 4, '#8a7fb0');
        rect(ctx, 0, 18, 40, 1, '#a99ae0');
        const jar = (cx: number, rx: number, ry: number) => {
          ellipse(ctx, cx, 18 - ry, rx, ry, '#8a5a4f');
          ellipse(ctx, cx - 1, 17 - ry * 1.2, rx * 0.5, ry * 0.4, '#b07a6a');
          rect(ctx, cx - rx * 0.6, 18 - ry * 2, rx * 1.2, 2, '#6f463d');
        };
        jar(8, 6, 7);
        jar(21, 7, 8);
        jar(33, 4, 5);
      }, NIGHT_INK);
    case 'well':
      return one(26, 30, (ctx) => {
        rect(ctx, 3, 18, 20, 12, '#9d92c2');
        for (let x = 3; x < 23; x += 5) rect(ctx, x, 18, 1, 12, '#7f74a8');
        rect(ctx, 3, 22, 20, 1, '#7f74a8');
        rect(ctx, 2, 16, 22, 3, '#b8aee0');
        rect(ctx, 4, 2, 2, 15, '#8f6d5a');
        rect(ctx, 20, 2, 2, 15, '#8f6d5a');
        rect(ctx, 2, 1, 22, 2, '#7f6252');
        rect(ctx, 12, 3, 1, 8, '#e8d8a8');
      }, NIGHT_INK);
    case 'shrine':
      return one(56, 72, (ctx) => {
        // 서낭당 느티나무 + 오방색 천 + 돌무더기
        rect(ctx, 24, 36, 8, 36, '#6e5a78');
        rect(ctx, 30, 36, 2, 36, '#54445f');
        rect(ctx, 16, 44, 9, 3, '#6e5a78');
        ellipse(ctx, 28, 22, 26, 20, '#3f7a74');
        ellipse(ctx, 22, 18, 14, 11, '#5a9c8f');
        ellipse(ctx, 36, 26, 12, 9, '#4a8a80');
        const cloth = ['#ff9eb8', '#ffe98a', '#8fb8ff', '#f4f0ff', '#8fd6a0'];
        for (let i = 0; i < 5; i++) {
          rect(ctx, 22 + i * 3, 48, 2, 7 + (i % 2) * 2, cloth[i]);
        }
        rect(ctx, 22, 47, 14, 1, '#f4f0ff');
        ellipse(ctx, 12, 68, 9, 4, '#8a7fb0');
        ellipse(ctx, 12, 64, 6, 3, '#9d92c2');
        ellipse(ctx, 12, 61, 3, 2, '#b8aee0');
      }, NIGHT_INK);
    case 'lakeSign':
      return one(22, 24, (ctx) => {
        rect(ctx, 9, 12, 3, 12, '#b98a74');
        rect(ctx, 0, 0, 22, 13, '#e6c9a8');
        rect(ctx, 1, 1, 20, 11, '#fff6ec');
        for (let y = 3; y < 11; y += 2) rect(ctx, 3, y, 10 + ((y * 7) % 5), 1, '#a88fb8');
        rect(ctx, 16, 3, 3, 3, '#8fb8ff');
      });
    case 'noticeBoard':
      return one(22, 24, (ctx) => {
        rect(ctx, 2, 12, 2, 12, '#7f6252');
        rect(ctx, 18, 12, 2, 12, '#7f6252');
        rect(ctx, 0, 0, 22, 14, '#8f6d5a');
        rect(ctx, 2, 2, 8, 10, '#f4ead8');
        rect(ctx, 12, 3, 8, 8, '#e8dcc4');
        for (let y = 4; y < 11; y += 2) rect(ctx, 3, y, 6, 1, '#8a7fb0');
        rect(ctx, 13, 5, 6, 1, '#e06a7a');
      }, NIGHT_INK);
    case 'mailbox':
      return one(10, 18, (ctx) => {
        rect(ctx, 4, 8, 2, 10, '#b98a74');
        rect(ctx, 0, 1, 10, 8, '#ff8f8f');
        rect(ctx, 0, 1, 10, 2, '#ffb3b3');
        rect(ctx, 2, 5, 6, 1, '#c96a6a');
      });
    case 'bench':
      return one(26, 12, (ctx) => {
        rect(ctx, 0, 4, 26, 3, '#c9956f');
        rect(ctx, 0, 0, 26, 2, '#d9ab86');
        rect(ctx, 3, 7, 2, 5, '#8d6457');
        rect(ctx, 21, 7, 2, 5, '#8d6457');
      });
    case 'bigTree':
      return one(112, 128, (ctx) => {
        const r = rng(71);
        rect(ctx, 48, 60, 16, 68, '#9a6f5c');
        rect(ctx, 58, 60, 6, 68, '#7d5446');
        rect(ctx, 30, 72, 20, 5, '#9a6f5c');
        rect(ctx, 62, 66, 26, 5, '#9a6f5c');
        for (let i = 0; i < 6; i++) rect(ctx, 50 + i * 2, 118 + (i % 2), 3, 10, '#7d5446');
        const leaves = ['#8fd6a0', '#a6e3ad', '#c3f0c4', '#7fcb8e'];
        const blobs: [number, number, number, number][] = [
          [56, 40, 44, 30],
          [30, 52, 26, 18],
          [84, 50, 26, 18],
          [56, 22, 30, 18],
          [40, 32, 18, 12],
          [76, 30, 18, 12],
        ];
        blobs.forEach(([x, y, rx, ry], i) => ellipse(ctx, x, y, rx, ry, leaves[i % leaves.length]));
        for (let i = 0; i < 26; i++) {
          const x = 18 + Math.floor(r() * 76);
          const y = 12 + Math.floor(r() * 50);
          rect(ctx, x, y, 2, 2, r() < 0.6 ? '#ffb070' : '#ffcf7a');
        }
        for (let i = 0; i < 30; i++) px(ctx, 16 + Math.floor(r() * 80), 10 + Math.floor(r() * 56), '#e6fbe0');
      });
    case 'pole':
      return one(10, 70, (ctx) => {
        rect(ctx, 4, 4, 3, 66, '#7f6252');
        rect(ctx, 0, 8, 10, 2, '#7f6252');
        px(ctx, 1, 7, '#e8e2ec');
        px(ctx, 8, 7, '#e8e2ec');
      }, NIGHT_INK);
    case 'reeds':
      return one(14, 22, (ctx) => {
        const r = rng(9 + variant);
        for (let i = 0; i < 5; i++) {
          const x = 2 + i * 2;
          const h = 10 + Math.floor(r() * 11);
          for (let y = 0; y < h; y++) px(ctx, x + (y > h / 2 && i % 2 ? 1 : 0), 21 - y, i % 2 ? '#4fa08f' : '#7fd0b4');
          px(ctx, x, 21 - h, '#e8d8a8');
          px(ctx, x, 22 - h, '#e8d8a8');
        }
      }, NIGHT_INK);
    case 'bundles':
      return one(28, 16, (ctx) => {
        ellipse(ctx, 8, 11, 8, 5, '#ff9ec0');
        ellipse(ctx, 20, 12, 8, 4, '#8fb8ff');
        ellipse(ctx, 14, 6, 6, 4, '#ffe98a');
        px(ctx, 14, 2, '#f4f0ff');
        px(ctx, 7, 8, '#ffffff');
        px(ctx, 21, 9, '#ffffff');
      }, NIGHT_INK);
    case 'radio':
      return one(12, 9, (ctx) => {
        rect(ctx, 0, 2, 12, 7, '#c97b5a');
        rect(ctx, 1, 3, 5, 5, '#f4ead8');
        for (let y = 4; y < 8; y += 2) rect(ctx, 1, y, 5, 1, '#a88a70');
        rect(ctx, 8, 4, 2, 2, '#ffe98a');
        rect(ctx, 9, 0, 1, 2, '#8a7fb0');
      });
    case 'windchime':
      return one(12, 22, (ctx) => {
        rect(ctx, 5, 4, 2, 18, '#8f6d5a');
        rect(ctx, 1, 3, 10, 2, '#7f6252');
        rect(ctx, 2, 5, 1, 4, '#e8e2ec');
        ellipse(ctx, 2.5, 10, 1.6, 1.8, '#9fd4ff');
        px(ctx, 2, 13, '#ff9eb8');
      }, NIGHT_INK);
    case 'jangseung':
      // 마을 어귀 장승 한 쌍 (천하대장군 · 지하여장군)
      return one(30, 46, (ctx) => {
        const pole = (x: number, h: number, hat: string) => {
          rect(ctx, x, 46 - h, 9, h, '#9a7a62');
          rect(ctx, x + 6, 46 - h, 3, h, '#7d5f4c');
          rect(ctx, x - 1, 46 - h - 3, 11, 3, hat);
          rect(ctx, x + 1, 46 - h + 4, 2, 2, '#2a2350');
          rect(ctx, x + 5, 46 - h + 4, 2, 2, '#2a2350');
          rect(ctx, x + 3, 46 - h + 7, 2, 3, '#c97b5a');
          rect(ctx, x + 1, 46 - h + 12, 6, 1, '#e06a6a');
          for (let y = 46 - h + 16; y < 44; y += 3) rect(ctx, x + 2, y, 4, 1, '#5a4538');
        };
        pole(2, 40, '#4a4a6a');
        pole(18, 36, '#6f5a8a');
      }, NIGHT_INK);
    case 'boat':
      return one(44, 12, (ctx) => {
        for (let y = 0; y < 8; y++) {
          const inset = Math.floor(y * 0.8);
          rect(ctx, inset + (y < 2 ? 0 : 1), y + 2, 44 - inset * 2 - 2, 1, y < 2 ? '#e6c9a8' : y > 5 ? '#9c7359' : '#c9956f');
        }
        rect(ctx, 12, 1, 2, 3, '#8d6457');
        rect(ctx, 30, 1, 2, 3, '#8d6457');
      });
  }
}

/** 어린 감나무: 0 = 목마름, 1 = 물 먹음, 2 = 상자를 묻은 뒤 */
export function makeSapling(stage: number): SpriteArt {
  return one(24, 34, (ctx) => {
    rect(ctx, 11, 14, 2, 20, '#8f6d5a');
    rect(ctx, 16, 16, 1, 18, '#b98a74');
    rect(ctx, 15, 18, 3, 1, '#e8d8a8');
    const leaf = stage === 0 ? '#9dbf86' : '#6fc2aa';
    const leafL = stage === 0 ? '#c2d9a0' : '#a6e8d2';
    ellipse(ctx, 12, 10, stage === 0 ? 6 : 9, stage === 0 ? 5 : 8, leaf);
    ellipse(ctx, 10, 8, stage === 0 ? 3 : 5, stage === 0 ? 2 : 4, leafL);
    if (stage >= 1) {
      px(ctx, 15, 12, '#ffcf7a');
      px(ctx, 8, 13, '#ffcf7a');
    }
    if (stage >= 2) {
      ellipse(ctx, 7, 32, 5, 2, '#8676b8');
      px(ctx, 6, 31, '#a99ae0');
    }
  }, NIGHT_INK);
}

/** 땅 파는 자리: 0 = 반짝임만, 1 = 파낸 구덩이 + 열린 양철 상자 */
export function makeDigSpot(dug: boolean): SpriteArt {
  return one(20, 12, (ctx) => {
    if (!dug) {
      ellipse(ctx, 10, 9, 7, 2.4, '#d9b08c');
      px(ctx, 9, 7, '#ffffff');
      px(ctx, 12, 8, '#fff6c0');
      return;
    }
    ellipse(ctx, 10, 9, 8, 3, '#8d6457');
    ellipse(ctx, 10, 9, 5, 1.6, '#6f463d');
    rect(ctx, 6, 3, 9, 5, '#b8c9d6');
    rect(ctx, 6, 3, 9, 1, '#d9e6ee');
    rect(ctx, 7, 4, 7, 3, '#fff6ec');
    rect(ctx, 8, 5, 3, 1, '#ff9eb8');
    px(ctx, 13, 5, '#8fb8ff');
  });
}

export function makeStreetlamp(lit: boolean): SpriteArt {
  return one(12, 42, (ctx) => {
    rect(ctx, 5, 8, 2, 34, '#8a93a8');
    rect(ctx, 3, 40, 6, 2, '#6f788c');
    rect(ctx, 1, 2, 10, 2, '#6f788c');
    rect(ctx, 2, 4, 8, 4, lit ? '#fff3b8' : '#d7dbe6');
    if (lit) rect(ctx, 4, 5, 4, 2, '#ffffff');
    rect(ctx, 5, 0, 2, 2, '#8a93a8');
  });
}

export function makeChorong(lit: boolean): SpriteArt {
  return one(14, 38, (ctx) => {
    rect(ctx, 6, 10, 2, 28, '#7f6252');
    rect(ctx, 2, 9, 10, 1, '#7f6252');
    // 청사초롱: 위는 붉고 아래는 푸른 비단
    rect(ctx, 2, 12, 10, 4, lit ? '#ff8f9f' : '#b86a7a');
    rect(ctx, 2, 16, 10, 5, lit ? '#8fb8ff' : '#5a6f9a');
    if (lit) rect(ctx, 5, 14, 4, 5, '#fff6c8');
    rect(ctx, 3, 11, 8, 1, '#ffe98a');
    rect(ctx, 3, 21, 8, 1, '#ffe98a');
    rect(ctx, 6, 22, 2, 3, lit ? '#ff8f9f' : '#b86a7a');
  }, NIGHT_INK);
}

export function makeBucket(): SpriteArt {
  return one(12, 12, (ctx) => {
    rect(ctx, 1, 4, 10, 8, '#b98a74');
    for (let x = 1; x < 11; x += 3) rect(ctx, x, 4, 1, 8, '#9a6f5c');
    rect(ctx, 1, 6, 10, 1, '#7f6252');
    rect(ctx, 1, 10, 10, 1, '#7f6252');
    rect(ctx, 2, 4, 8, 2, '#8fb8ff');
    px(ctx, 3, 4, '#d6efff');
    rect(ctx, 5, 0, 2, 1, '#7f6252');
    px(ctx, 3, 1, '#7f6252');
    px(ctx, 8, 1, '#7f6252');
    px(ctx, 2, 2, '#7f6252');
    px(ctx, 9, 2, '#7f6252');
  }, NIGHT_INK);
}

/** 들고 다니는 초롱 (할머니 댁 부두에 걸려 있던 것) */
export function makeLamp(lit = true): SpriteArt {
  return one(10, 14, (ctx) => {
    rect(ctx, 4, 0, 2, 2, '#8d6457');
    rect(ctx, 2, 2, 6, 1, '#8d6457');
    rect(ctx, 1, 3, 8, 8, lit ? '#ffcf8a' : '#e6d6c4');
    rect(ctx, 2, 4, 6, 6, lit ? '#fff3c4' : '#f4ece4');
    if (lit) rect(ctx, 4, 5, 2, 3, '#ffffff');
    for (let y = 4; y < 11; y += 3) rect(ctx, 1, y, 8, 1, lit ? '#f2a86a' : '#c9b6a6');
    rect(ctx, 2, 11, 6, 1, '#8d6457');
    rect(ctx, 4, 12, 2, 2, '#ff9eb8');
  });
}

/** 초롱걸이: 부두의 나무 기둥과 고리 */
export function makeHookPost(): SpriteArt {
  return one(14, 42, (ctx) => {
    rect(ctx, 2, 4, 3, 38, '#b98a74');
    rect(ctx, 4, 4, 1, 38, '#8d6457');
    rect(ctx, 2, 3, 11, 2, '#8d6457');
    rect(ctx, 11, 5, 1, 3, '#6f788c');
    px(ctx, 10, 8, '#6f788c');
    px(ctx, 12, 8, '#6f788c');
    rect(ctx, 1, 39, 5, 3, '#8d6457');
  });
}

/** 울타리 말뚝 (아리가 들고 다니는 것) */
export function makeStake(): SpriteArt {
  return one(6, 16, (ctx) => {
    rect(ctx, 1, 0, 4, 13, '#b98a74');
    rect(ctx, 4, 0, 1, 13, '#8d6457');
    rect(ctx, 2, 13, 2, 2, '#b98a74');
    px(ctx, 2, 15, '#8d6457');
    rect(ctx, 1, 3, 4, 1, '#8d6457');
  }, NIGHT_INK);
}

/** 백 원짜리 동전 (2026년) */
export function makeCoin(): SpriteArt {
  return one(8, 8, (ctx) => {
    ellipse(ctx, 4, 4, 3.4, 3.4, '#d8dde6');
    ellipse(ctx, 3.6, 3.6, 2.2, 2.2, '#f4f6fa');
    px(ctx, 3, 3, '#ffffff');
    rect(ctx, 3, 4, 2, 1, '#aab2c0');
  });
}

export function makeDiaryPage(): SpriteArt {
  return one(10, 12, (ctx) => {
    rect(ctx, 0, 0, 10, 12, '#fffbe8');
    rect(ctx, 0, 0, 2, 12, '#ffcfd8');
    for (let y = 3; y < 11; y += 2) rect(ctx, 3, y, 5, 1, '#b8a9d8');
  });
}

export function makeZzz(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(12, 12);
  const z = (x: number, y: number, s: number) => {
    rect(ctx, x, y, s, 1, '#ffffff');
    for (let i = 0; i < s; i++) px(ctx, x + s - 1 - i, y + i, '#ffffff');
    rect(ctx, x, y + s - 1, s, 1, '#ffffff');
  };
  z(1, 6, 4);
  z(6, 1, 5);
  return toTexture(c);
}

export function makeNote(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(8, 10);
  rect(ctx, 5, 0, 1, 7, '#fff6c8');
  rect(ctx, 5, 0, 3, 2, '#fff6c8');
  ellipse(ctx, 3.5, 7.5, 2.4, 1.8, '#fff6c8');
  return toTexture(c);
}
