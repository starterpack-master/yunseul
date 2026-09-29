import type { WorldState } from '../world';
import type { StoryCtx } from './types';

export const GROUND = 1.5;

export const lit = (st: WorldState, id: string) => !!st.flags[`lit:${id}`];
export const flag = (st: WorldState, f: string) => !!st.flags[f];
export const near = (c: StoryCtx, x0: number, x1: number) => !c.hidden && c.x >= x0 && c.x <= x1;
export const L = (who: string, text: string) => ({ who, text });
export const hasMagpie = (st: WorldState, id: string) => st.magpies.includes(id);

/** 연잎이나 반딧불처럼 간격을 두고 놓인 발판 */
export function pads(xs: number[], w: number, top: number) {
  return xs.map((x) => ({ x0: x - w / 2, x1: x + w / 2, y0: top - 0.22, y1: top }));
}

export const item = (st: WorldState, id: string) => st.items.find((i) => i.id === id);
