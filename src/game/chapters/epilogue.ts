import { GROUND } from './common';
import type { ChapterDef } from './types';

/** 에필로그: 다음 날, 할머니 댁 마루. (컷신만 있어요) */
export const epilogue: ChapterDef = {
  id: 'epilogue',
  no: '에필로그',
  title: '다음 여름',
  minX: -15.5,
  maxX: 11.5,
  start: { 0: { x: -3.2, y: GROUND }, 1: { x: 9.6, y: GROUND } },
  solids: {
    0: [{ kind: 'ground', x0: -24, x1: 11.2, y0: 0, y1: GROUND }],
    1: [{ kind: 'ground', x0: -24, x1: 11.2, y0: 0, y1: GROUND }],
  },
  lights: [],
  bridges: [],
  buoys: [],
  items: [],
  sockets: [],
  uses: [],
  arcs: [],
  hidden: [],
  dark: [],
  songZones: [],
  magpies: [],
  props: [
    { kind: 'grandmaHouse', world: 0, x: -10.4, y: GROUND, z: -1.2 },
    { kind: 'mailbox', world: 0, x: -5.4, y: GROUND, z: -0.6 },
    { kind: 'lakeSign', world: 0, x: -1.6, y: GROUND, z: -0.5 },
    { kind: 'radio', world: 0, x: -7.1, y: GROUND + 0.45, z: -0.9 },
    { kind: 'reeds', world: 1, x: 7.8, y: GROUND, z: 0.2 },
    { kind: 'jars', world: 1, x: -6.2, y: GROUND, z: -0.5 },
  ],
  npcs: [{ id: 'grandma', kind: 'grandma', world: 0, x: -8.4, y: GROUND + 0.45, pose: 'sit' }],
  signs: [],
  keepsakes: [],
  diary: [],
  goal: null,
  moon: 'full',
  dusk: 'sunset',
  triggers: [],
  objective: () => '',
};
