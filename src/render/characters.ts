import * as THREE from 'three';
import type { Look, Role } from '../game/types';
import { ellipse, makeCanvas, outline, px, toTexture, type Ctx } from './pixelart';

/** 주인공 두 사람. 옷·머리색·소품을 바꿀 수 있어요. 16x20 도트, 오른쪽을 보는 3/4 시점. */

export const CHAR_W = 16;
export const CHAR_H = 20;
export const CHAR_FRAMES = ['idle0', 'idle1', 'walk0', 'walk1', 'walk2', 'walk3', 'jump', 'fall', 'blink', 'sit', 'act'] as const;
export type CharFrame = (typeof CHAR_FRAMES)[number];

interface Base {
  outline: string;
  skin: string;
  skinShade: string;
  eye: string;
  blush: string;
  shoe: string;
}

const BASE: Record<Role, Base> = {
  0: { outline: '#5a3a57', skin: '#ffe8da', skinShade: '#f5c7b4', eye: '#4a2f4f', blush: '#ff9aab', shoe: '#a0607a' },
  1: { outline: '#2a2350', skin: '#fbe9ea', skinShade: '#e3c6d4', eye: '#2a2350', blush: '#f5a3c3', shoe: '#f4f0ff' },
};

const HAIR: Record<string, [string, string, string]> = {
  pink: ['#ff9eb8', '#e67b9d', '#ffd4e0'],
  brown: ['#b98068', '#94604f', '#d9a88f'],
  sky: ['#9fd4ff', '#74aee8', '#d6efff'],
  mint: ['#9ee8cf', '#6cc7ad', '#d6fbef'],
  lavender: ['#bfb0ff', '#8f7fe0', '#e9e3ff'],
  black: ['#4b4468', '#34304f', '#7a73a3'],
  chestnut: ['#a0705e', '#7d5446', '#c8958a'],
  peach: ['#ffc2a8', '#f09c80', '#ffe1d4'],
};

type Shape = 'dress' | 'shorts' | 'coat' | 'pj' | 'hanbok' | 'skirt';
interface Outfit {
  shape: Shape;
  top: string;
  topShade: string;
  bottom: string;
  bottomShade: string;
  trim: string;
  pattern?: 'stripes' | 'dots';
  collar?: string;
}

const OUTFIT: Record<string, Outfit> = {
  'r:dress': { shape: 'dress', top: '#fff6ec', topShade: '#f0d5c9', bottom: '#fff6ec', bottomShade: '#f0d5c9', trim: '#ffbfa6' },
  'r:overalls': { shape: 'shorts', top: '#ffffff', topShade: '#eadff0', bottom: '#8fb8ff', bottomShade: '#6f93dd', trim: '#ffe39a' },
  'r:raincoat': { shape: 'coat', top: '#ffe06a', topShade: '#e8b93c', bottom: '#ffe06a', bottomShade: '#e8b93c', trim: '#fff6c8' },
  'r:pajama': { shape: 'pj', top: '#cdeede', topShade: '#a9d6c4', bottom: '#cdeede', bottomShade: '#a9d6c4', trim: '#ffffff', pattern: 'stripes' },
  'r:hanbok': { shape: 'hanbok', top: '#ffb3c7', topShade: '#f08aa8', bottom: '#bfe3ff', bottomShade: '#98c4ec', trim: '#ff6f9a' },
  'a:blouse': { shape: 'skirt', top: '#fffaf0', topShade: '#e8dccd', bottom: '#46508f', bottomShade: '#333a73', trim: '#ffe98a' },
  'a:onepiece': { shape: 'dress', top: '#b8a9ff', topShade: '#9585d2', bottom: '#b8a9ff', bottomShade: '#9585d2', trim: '#ffffff', pattern: 'dots' },
  'a:school': { shape: 'dress', top: '#394a8a', topShade: '#2a3670', bottom: '#394a8a', bottomShade: '#2a3670', trim: '#e06a7a', collar: '#ffffff' },
  'a:pajama': { shape: 'pj', top: '#f4ead8', topShade: '#dccdb4', bottom: '#f4ead8', bottomShade: '#dccdb4', trim: '#c9b8e8' },
  'a:hanbok': { shape: 'hanbok', top: '#ffe98a', topShade: '#e8c85a', bottom: '#ff9ec0', bottomShade: '#e67ba0', trim: '#ff5f7e' },
};

interface Pose {
  bob: number;
  legs: 'stand' | 'stepA' | 'stepB' | 'tuck' | 'dangle' | 'sit';
  arms: 'down' | 'up' | 'out' | 'phone' | 'chest';
  eyes: 'open' | 'closed' | 'happy';
  mouth?: 'o';
  flare: number;
  hairLift: number;
}

const POSES: Record<CharFrame, Pose> = {
  idle0: { bob: 0, legs: 'stand', arms: 'down', eyes: 'open', flare: 0, hairLift: 0 },
  idle1: { bob: 1, legs: 'stand', arms: 'down', eyes: 'open', flare: 0, hairLift: 0 },
  walk0: { bob: 0, legs: 'stepA', arms: 'out', eyes: 'open', flare: 0, hairLift: 0 },
  walk1: { bob: -1, legs: 'stand', arms: 'down', eyes: 'open', flare: 0, hairLift: 1 },
  walk2: { bob: 0, legs: 'stepB', arms: 'out', eyes: 'open', flare: 0, hairLift: 0 },
  walk3: { bob: -1, legs: 'stand', arms: 'down', eyes: 'open', flare: 0, hairLift: 1 },
  jump: { bob: -1, legs: 'tuck', arms: 'up', eyes: 'open', flare: 0, hairLift: 2 },
  fall: { bob: 0, legs: 'dangle', arms: 'out', eyes: 'open', flare: 1, hairLift: -1 },
  blink: { bob: 0, legs: 'stand', arms: 'down', eyes: 'closed', flare: 0, hairLift: 0 },
  sit: { bob: 3, legs: 'sit', arms: 'down', eyes: 'closed', flare: 0, hairLift: 0 },
  act: { bob: 0, legs: 'stand', arms: 'phone', eyes: 'happy', flare: 0, hairLift: 0 },
};

export interface CharOpts {
  role: Role;
  look: Look;
  /** 별 머리핀 (리아는 프롤로그에서 받아요) */
  hairpin: boolean;
}

function drawGirl(ctx: Ctx, ox: number, oy: number, o: CharOpts, pose: Pose) {
  const role = o.role;
  const base = BASE[role];
  const [hair, hairShade, hairLight] = HAIR[o.look.hair] ?? HAIR[role === 0 ? 'pink' : 'lavender'];
  const fit = OUTFIT[`${role === 0 ? 'r' : 'a'}:${o.look.outfit}`] ?? OUTFIT[role === 0 ? 'r:dress' : 'a:blouse'];
  const b = pose.bob;
  const P = (x: number, y: number, c: string) => px(ctx, ox + x, oy + y, c);
  const long = fit.shape === 'hanbok' || fit.shape === 'coat';

  // 다리 / 신발 (행 16~18)
  const legs: [number, number, number][] = [];
  if (pose.legs === 'stand') legs.push([6, 16, 3], [9, 16, 3]);
  if (pose.legs === 'stepA') legs.push([5, 16, 3], [10, 16, 2]);
  if (pose.legs === 'stepB') legs.push([6, 16, 2], [9, 16, 3]);
  if (pose.legs === 'tuck') legs.push([6, 15, 2], [9, 15, 2]);
  if (pose.legs === 'dangle') legs.push([6, 16, 3], [10, 16, 3]);
  if (pose.legs === 'sit') {
    // 앉아서 다리를 앞으로 쭉
    for (let x = 8; x <= 13; x++) {
      P(x, 18, fit.shape === 'pj' ? fit.bottom : base.skin);
      P(x, 19, fit.shape === 'pj' ? fit.bottomShade : base.skinShade);
    }
    P(14, 18, base.shoe);
    P(14, 19, base.shoe);
  }
  for (const [lx, ly, len] of legs) {
    const legCol = fit.shape === 'pj' ? fit.bottom : base.skin;
    const legShade = fit.shape === 'pj' ? fit.bottomShade : base.skinShade;
    for (let i = 0; i < len - 1; i++) P(lx, ly + i + b, legCol);
    P(lx, ly + len - 1 + b, base.shoe);
    P(lx + 1, ly + len - 1 + b, base.shoe);
    for (let i = 0; i < len - 1; i++) P(lx + 1, ly + i + b, legShade);
  }

  // 옷 (행 10~16)
  const top = 10 + b;
  const rows = fit.shape === 'shorts' ? 6 : long ? 8 : 7;
  for (let r = 0; r < rows; r++) {
    const isTop = r < (fit.shape === 'dress' || fit.shape === 'coat' ? 99 : fit.shape === 'hanbok' ? 2 : 3);
    const spread = fit.shape === 'pj' ? Math.min(1, Math.floor(r / 3)) : Math.floor(r / 2) + (r >= 5 ? pose.flare : 0) - (fit.shape === 'shorts' && r >= 4 ? 1 : 0);
    const x0 = 5 - spread;
    const x1 = 10 + spread;
    for (let x = x0; x <= x1; x++) {
      const shade = x === x0 || (r > 3 && x === x0 + 1);
      let col = isTop ? (shade ? fit.topShade : fit.top) : shade ? fit.bottomShade : fit.bottom;
      if (fit.pattern === 'stripes' && r % 2 === 1) col = fit.trim;
      if (fit.pattern === 'dots' && (x + r * 2) % 4 === 0 && r > 1) col = fit.trim;
      P(x, top + r, col);
    }
    if (r === rows - 1 && fit.shape !== 'pj' && fit.shape !== 'shorts') for (let x = x0; x <= x1; x++) if ((x + r) % 2 === 0) P(x, top + r, fit.trim);
  }
  // 옷깃 / 장식
  if (fit.collar) {
    for (let x = 6; x <= 10; x++) P(x, top, fit.collar);
    P(8, top + 1, fit.trim);
  } else {
    P(7, top, fit.trim);
    P(8, top, fit.trim);
  }
  if (fit.shape === 'shorts' || fit.shape === 'skirt') {
    // 멜빵
    P(6, top + 1, fit.bottom);
    P(6, top + 2, fit.bottom);
    P(9, top + 1, fit.bottom);
    P(9, top + 2, fit.bottom);
  }
  if (fit.shape === 'coat') {
    P(8, top + 2, fit.trim);
    P(8, top + 4, fit.trim);
    P(8, top + 6, fit.trim);
  }
  if (fit.shape === 'hanbok') {
    // 고름
    P(8, top + 1, fit.trim);
    P(8, top + 2, fit.trim);
    P(9, top + 3, fit.trim);
  }

  // 팔
  const sleeve = fit.top;
  const sleeveShade = fit.topShade;
  if (pose.arms === 'down') {
    P(4, top + 1, sleeveShade);
    P(4, top + 2, base.skin);
    P(11, top + 1, sleeve);
    P(11, top + 2, base.skin);
  } else if (pose.arms === 'out') {
    P(4, top + 1, sleeveShade);
    P(3, top + 2, base.skin);
    P(11, top + 1, sleeve);
    P(12, top + 2, base.skin);
  } else if (pose.arms === 'up') {
    P(4, top, sleeveShade);
    P(3, top - 1, base.skin);
    P(11, top, sleeve);
    P(12, top - 1, base.skin);
  } else if (pose.arms === 'phone') {
    P(4, top + 1, sleeveShade);
    P(4, top + 2, base.skin);
    P(11, top, sleeve);
    P(12, top - 1, base.skin);
    if (role === 0) {
      // 휴대폰
      P(13, top - 3, '#4b4468');
      P(13, top - 2, '#6f93dd');
      P(14, top - 3, '#4b4468');
      P(14, top - 2, '#4b4468');
    }
  }

  // 머리 뒤쪽 (리아: 옆으로 묶은 머리 / 아리: 긴 머리)
  const hy = b;
  if (role === 0) {
    ellipse(ctx, ox + 2.6, oy + 8.2 + hy - pose.hairLift * 0.6, 2.1, 3.3, hair);
    ellipse(ctx, ox + 2.2, oy + 9.2 + hy - pose.hairLift * 0.6, 1.2, 2.2, hairShade);
  } else {
    for (let y = 6; y <= 14 - Math.max(0, pose.hairLift); y++) {
      for (let x = 2; x <= 5; x++) P(x, y + hy, x === 2 || y > 12 ? hairShade : hair);
    }
    P(3, 15 + hy - Math.max(0, pose.hairLift), hairShade);
  }

  // 얼굴 + 머리카락
  const cx = ox + 8;
  const cy = oy + 5.6 + hy;
  ellipse(ctx, cx, cy, 5.4, 5.0, hair);
  ellipse(ctx, cx + 0.8, cy + 1.3, 4.2, 3.4, base.skin, (x, y) => x - ox >= 6 && y - oy >= 5 + hy);
  for (const x of [6, 7, 9, 12]) P(x, 5 + hy, hair);
  P(8, 5 + hy, hairShade);
  P(6, 6 + hy, hair);
  P(6, 2 + hy, hairLight);
  P(7, 2 + hy, hairLight);
  P(9, 1 + hy, hairLight);
  P(4, 5 + hy, hairShade);
  P(4, 6 + hy, hairShade);
  P(5, 8 + hy, hairShade);

  // 눈, 입, 볼
  if (pose.eyes === 'closed') {
    P(9, 7 + hy, base.eye);
    P(12, 7 + hy, base.eye);
  } else if (pose.eyes === 'happy') {
    P(9, 6 + hy, base.eye);
    P(12, 6 + hy, base.eye);
    P(8, 7 + hy, base.eye);
    P(13, 7 + hy, base.eye);
  } else {
    P(9, 6 + hy, base.eye);
    P(9, 7 + hy, base.eye);
    P(12, 6 + hy, base.eye);
    P(12, 7 + hy, base.eye);
    P(10, 6 + hy, '#ffffff');
  }
  if (pose.arms === 'phone' && role === 1) {
    // 노래하는 입
    P(11, 9 + hy, '#c0607a');
  }
  P(8, 8 + hy, base.blush);
  P(12, 8 + hy, base.blush);
  P(11, 8 + hy, base.skinShade);

  // 머리 장식: 리아의 리본(기본), 별 머리핀
  if (role === 0 && o.look.acc !== 'straw') {
    P(4, 3 + hy, '#ff7fa0');
    P(3, 4 + hy, '#ff7fa0');
    P(4, 4 + hy, '#ffffff');
    P(5, 4 + hy, '#ff7fa0');
  }
  if (o.hairpin) {
    const sx = role === 0 ? 11 : 6;
    const sy = role === 0 ? 2 : 3;
    P(sx, sy - 1 + hy, '#ffe98a');
    P(sx - 1, sy + hy, '#ffe98a');
    P(sx, sy + hy, '#fffbe0');
    P(sx + 1, sy + hy, '#ffe98a');
    P(sx, sy + 1 + hy, '#ffe98a');
  }
  if (o.look.acc === 'straw') {
    ellipse(ctx, ox + 8, oy + 3.2 + hy, 7.2, 1.6, '#f2d48a');
    ellipse(ctx, ox + 8, oy + 1.8 + hy, 4.2, 2.2, '#f2d48a');
    for (let x = 4; x <= 12; x++) P(x, 3 + hy, '#ff9eb8');
    P(6, 1 + hy, '#fff2c0');
  } else if (o.look.acc === 'crown') {
    const cols = ['#ffb3c7', '#fff5f8', '#ffe39a', '#c9b8ff'];
    for (let i = 0; i < 5; i++) {
      P(4 + i * 2, 1 + hy - (i % 2), cols[i % cols.length]);
      P(5 + i * 2, 2 + hy, '#8fd6a0');
    }
  } else if (o.look.acc === 'cat') {
    P(4, 0 + hy, hair);
    P(4, 1 + hy, hair);
    P(5, 1 + hy, '#ffb3c7');
    P(11, 0 + hy, hair);
    P(11, 1 + hy, hair);
    P(12, 0 + hy, hair);
    P(10, 1 + hy, '#ffb3c7');
  }

  outline(ctx, ox, oy, CHAR_W, CHAR_H, base.outline);
}

const sheetCache = new Map<string, HTMLCanvasElement>();

export function charKey(o: CharOpts): string {
  return `${o.role}:${o.look.outfit}:${o.look.hair}:${o.look.acc}:${o.hairpin ? 1 : 0}`;
}

export function makeCharacterCanvas(o: CharOpts): HTMLCanvasElement {
  const key = charKey(o);
  const hit = sheetCache.get(key);
  if (hit) return hit;
  const [c, ctx] = makeCanvas(CHAR_W * CHAR_FRAMES.length, CHAR_H);
  CHAR_FRAMES.forEach((f, i) => drawGirl(ctx, i * CHAR_W, 0, o, POSES[f]));
  sheetCache.set(key, c);
  return c;
}

export function makeCharacterSheet(o: CharOpts): THREE.CanvasTexture {
  const t = toTexture(makeCharacterCanvas(o));
  t.repeat.set(1 / CHAR_FRAMES.length, 1);
  return t;
}

/** 로비·옷장에 쓰는 한 장짜리 초상 */
export function drawPortrait(target: HTMLCanvasElement, o: CharOpts, frame: CharFrame = 'idle0') {
  const sheet = makeCharacterCanvas(o);
  target.width = CHAR_W;
  target.height = CHAR_H;
  const ctx = target.getContext('2d')!;
  ctx.clearRect(0, 0, CHAR_W, CHAR_H);
  ctx.drawImage(sheet, CHAR_FRAMES.indexOf(frame) * CHAR_W, 0, CHAR_W, CHAR_H, 0, 0, CHAR_W, CHAR_H);
}

