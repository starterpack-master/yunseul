import type { Rect, WorldId } from './types';

/**
 * 1장 "윤슬" 레벨 데이터.
 * 모든 좌표는 "로컬 좌표"예요. 두 세계 모두 똑바로 선 기준으로, 수면이 y=0, 위쪽이 +y 입니다.
 * (물 아래 세계는 렌더링할 때만 y축으로 뒤집어요.)
 */

export const GROUND = 1.5;
export const LEVEL_MIN_X = 0.4;
export const LEVEL_MAX_X = 63.6;
export const LEVEL_WIDTH = 64;

export type SolidKind = 'ground' | 'ledge';
export interface SolidDef extends Rect {
  kind: SolidKind;
}

export const SOLIDS: Record<WorldId, SolidDef[]> = {
  0: [
    { kind: 'ground', x0: -20, x1: 11, y0: 0, y1: GROUND },
    { kind: 'ground', x0: 19, x1: 22.5, y0: 0, y1: GROUND },
    { kind: 'ground', x0: 25.5, x1: 46.5, y0: 0, y1: GROUND },
    { kind: 'ledge', x0: 49.5, x1: 52.5, y0: 0, y1: 4.3 },
    { kind: 'ground', x0: 52.5, x1: 56.9, y0: 0, y1: GROUND },
    { kind: 'ground', x0: 61.1, x1: 84, y0: 0, y1: GROUND },
  ],
  1: [
    { kind: 'ground', x0: -20, x1: 11, y0: 0, y1: GROUND },
    { kind: 'ground', x0: 19, x1: 22.5, y0: 0, y1: GROUND },
    { kind: 'ledge', x0: 25.5, x1: 28, y0: 0, y1: 4.3 },
    { kind: 'ground', x0: 28, x1: 46.5, y0: 0, y1: GROUND },
    { kind: 'ground', x0: 49.5, x1: 56.9, y0: 0, y1: GROUND },
    { kind: 'ground', x0: 61.1, x1: 84, y0: 0, y1: GROUND },
  ],
};

export const SPAWN: Record<WorldId, { x: number; y: number }> = {
  0: { x: 2.6, y: GROUND },
  1: { x: 2.6, y: GROUND },
};

/** 거울 등불/달꽃: 켜면 반대 세계 같은 자리에 다리가 생겨요. */
export interface LightDef {
  id: string;
  world: WorldId;
  kind: 'lantern' | 'moonflower';
  x: number;
  y: number;
  bridge: string;
}
export const LIGHTS: LightDef[] = [
  { id: 'lantern', world: 0, kind: 'lantern', x: 8.6, y: GROUND, bridge: 'starBridge' },
  { id: 'moonflower', world: 1, kind: 'moonflower', x: 6.4, y: GROUND, bridge: 'lilyBridge' },
];

/** 다리는 위에서만 밟을 수 있는(one-way) 발판 묶음이에요. */
export interface BridgeDef {
  id: string;
  world: WorldId;
  kind: 'star' | 'lily';
  segs: Rect[];
}
const lilyPads: Rect[] = [11.45, 13.45, 15.45, 17.45].map((x) => ({ x0: x, x1: x + 1.3, y0: 0.08, y1: 0.3 }));
export const BRIDGES: BridgeDef[] = [
  { id: 'starBridge', world: 1, kind: 'star', segs: [{ x0: 10.9, x1: 19.1, y0: GROUND - 0.25, y1: GROUND }] },
  { id: 'lilyBridge', world: 0, kind: 'lily', segs: lilyPads },
];

/**
 * 부표 기둥: 수면을 관통하는 하나의 기둥이에요.
 * owner 세계 사람이 올라서면 owner 쪽 윗면은 travel만큼 가라앉고, 반대 세계 쪽 윗면은 travel만큼 솟아요.
 */
export interface BuoyDef {
  id: string;
  owner: WorldId;
  x: number;
  w: number;
  /** 중립 상태의 윗면 높이 (세계별 로컬 좌표) */
  top: Record<WorldId, number>;
  travel: number;
}
export const BUOYS: BuoyDef[] = [
  { id: 'woodBuoy', owner: 0, x: 24, w: 1.4, top: { 0: 2.2, 1: 1.0 }, travel: 2.0 },
  { id: 'crystalBuoy', owner: 1, x: 48, w: 1.4, top: { 0: 1.0, 1: 2.2 }, travel: 2.0 },
];

export function buoyTop(def: BuoyDef, sink: number, world: WorldId): number {
  const d = sink * def.travel;
  return world === def.owner ? def.top[world] - d : def.top[world] + d;
}

export interface ItemDef {
  id: string;
  world: WorldId;
  x: number;
  y: number;
}
export const ITEMS: ItemDef[] = [{ id: 'pearl', world: 1, x: 26.9, y: 4.3 }];

export const TABLET = { world: 0 as WorldId, x: 33, y: GROUND };
export const SHELLS = [
  { idx: 0, x: 34.6 },
  { idx: 1, x: 36.6 },
  { idx: 2, x: 38.6 },
];
export const SHELL_WORLD: WorldId = 1;
export const MIST: Rect & { world: WorldId } = { world: 0, x0: 40.7, x1: 41.5, y0: GROUND, y1: 12 };
export const ALTAR = { world: 0 as WorldId, x: 51.2, y: 4.3 };
export const MOON_BRIDGE = { cx: 59, r: 2.6 };

export function arcTop(x: number): number | null {
  const dx = x - MOON_BRIDGE.cx;
  if (Math.abs(dx) >= MOON_BRIDGE.r) return null;
  return Math.sqrt(MOON_BRIDGE.r * MOON_BRIDGE.r - dx * dx);
}

/** 해당 세계의 (x, y) 지점이 정적 지형 안인지 */
export function solidAt(world: WorldId, x: number, y: number): SolidDef | null {
  for (const s of SOLIDS[world]) {
    if (x >= s.x0 && x <= s.x1 && y >= s.y0 && y <= s.y1) return s;
  }
  return null;
}
