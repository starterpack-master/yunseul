import { GROUND, L, flag, item, lit, near, pads } from './common';
import type { ChapterDef } from './types';

/**
 * 2장 「감나무 아래」
 * 과거에 한 일이 현재에 남아요: 아리가 어린 감나무에 물을 주면, 지금의 큰 감나무 가지가 섬까지 자라요.
 * 아리가 묻은 보물 상자를 리아가 50년 뒤에 파내면서, 둘은 서로 다른 시대에 산다는 걸 알게 돼요.
 */

const HILL = 2.6;

export const ch2: ChapterDef = {
  id: 'ch2',
  no: '2장',
  title: '감나무 아래',
  minX: -15.5,
  maxX: 79.5,
  start: { 0: { x: -15, y: GROUND }, 1: { x: -8.2, y: GROUND } },
  solids: {
    0: [
      { kind: 'ground', x0: -24, x1: 12, y0: 0, y1: GROUND },
      { kind: 'deck', x0: 22, x1: 57.4, y0: 0, y1: GROUND },
      { kind: 'island', x0: 64.2, x1: 90, y0: 0, y1: GROUND },
    ],
    1: [
      { kind: 'ground', x0: -24, x1: 36, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 40.5, x1: 64, y0: 0, y1: GROUND },
      { kind: 'ledge', x0: 64, x1: 90, y0: 0, y1: HILL },
    ],
  },
  lights: [{ id: 'streetlamp', world: 0, kind: 'streetlamp', x: 34.2, y: GROUND, label: '가로등 켜기' }],
  bridges: [
    { id: 'fireflies', world: 0, kind: 'firefly', segs: pads([13.3, 15.1, 16.9, 18.7, 20.5], 1.1, 0.3), when: (st) => flag(st, 'fireflies') },
    { id: 'starStream', world: 1, kind: 'star', segs: [{ x0: 35.8, x1: 40.7, y0: GROUND - 0.25, y1: GROUND }], when: (st) => lit(st, 'streetlamp') },
    { id: 'branch', world: 0, kind: 'branch', segs: [{ x0: 56.6, x1: 64.8, y0: 2.6, y1: 2.9 }], when: (st) => flag(st, 'watered') },
  ],
  buoys: [],
  items: [{ id: 'bucket', kind: 'bucket', world: 1, x: 26.6, y: GROUND, crosses: false, name: '물동이' }],
  sockets: [],
  uses: [
    { id: 'water', world: 1, x: 68.4, y: HILL, label: '감나무에 물 주기', flag: 'watered', needs: 'bucket', by: 1, event: 'watered', look: 'sapling' },
    { id: 'bury', world: 1, x: 68.4, y: HILL, label: '보물 상자 묻기', flag: 'buried', when: (st) => flag(st, 'watered'), by: 1, event: 'buried' },
    { id: 'dig', world: 0, x: 68.4, y: GROUND, label: '반짝이는 곳 파 보기', flag: 'dug', when: (st) => flag(st, 'buried'), by: 0, event: 'dug', look: 'dig' },
  ],
  arcs: [],
  hidden: [],
  dark: [],
  songZones: [{ id: 'reeds', world: 1, x0: 11.4, x1: 15.4, flag: 'fireflies' }],
  magpies: [],
  props: [
    { kind: 'grandmaHouse', world: 0, x: -10.4, y: GROUND, z: -1.2 },
    { kind: 'mailbox', world: 0, x: -5.4, y: GROUND, z: -0.6 },
    { kind: 'bench', world: 0, x: 27.5, y: GROUND, z: -1.4 },
    { kind: 'boat', world: 0, x: 60.2, y: 0.05, z: -1.2 },
    { kind: 'bigTree', world: 0, x: 68.4, y: GROUND, z: -1.0 },
    { kind: 'ariHouse', world: 1, x: -10.4, y: GROUND, z: -1.2 },
    { kind: 'bundles', world: 1, x: -13.3, y: GROUND, z: -0.4 },
    { kind: 'jars', world: 1, x: -6.2, y: GROUND, z: -0.5 },
    { kind: 'reeds', world: 1, x: 12.3, y: GROUND, z: 0.2 },
    { kind: 'reeds', world: 1, x: 14.5, y: GROUND, z: -0.3, flip: true },
    { kind: 'pole', world: 1, x: 19.6, y: GROUND, z: -1.8 },
    { kind: 'well', world: 1, x: 25.4, y: GROUND, z: -0.6 },
    { kind: 'villageHouse', world: 1, x: 31.2, y: GROUND, z: -1.6 },
    { kind: 'radio', world: 1, x: 32.6, y: GROUND, z: -0.3 },
    { kind: 'villageHouse', world: 1, x: 47.5, y: GROUND, z: -1.8, flip: true },
    { kind: 'shrine', world: 1, x: 55.2, y: GROUND, z: -1.6 },
    { kind: 'pole', world: 1, x: 44.6, y: GROUND, z: -1.8 },
  ],
  npcs: [
    {
      id: 'grandma',
      kind: 'grandma',
      world: 0,
      x: -8.4,
      y: GROUND + 0.45,
      pose: 'sit',
      label: '할머니께 말 걸기',
      talk: (st) => [L('할머니', '감나무… 우리 아버지가 심으셨지. 딸 낳은 해에.'), ...(st.ng ? [{ who: '할머니', text: '(나랑 동갑인 나무란다.)' }] : [])],
    },
    { id: 'mom', kind: 'mom', world: 1, x: -12.2, y: GROUND, pose: 'stand', label: '엄마한테 말 걸기', talk: () => [L('엄마', '우물가 물동이는 두고 가도 돼. 이사 가면 수돗물 나온대.')] },
    { id: 'oldByeoli', kind: 'oldTurtle', world: 0, x: 9.4, y: GROUND },
    { id: 'byeoli', kind: 'turtle', world: 1, x: 9.8, y: GROUND },
  ],
  signs: [],
  keepsakes: [
    {
      id: 'oldByeoli',
      world: 0,
      x: 9.4,
      y: GROUND,
      by: 0,
      how: 'use',
      label: '큰 거북이 살펴보기',
      name: '별 무늬 큰 거북이',
      desc: '호숫가 바위에서 볕을 쬐는 큰 거북이. 등딱지에 흐린 별 무늬가 있다. …별이?',
    },
    { id: 'radio', world: 1, x: 32.6, y: GROUND, by: 1, how: 'use', label: '라디오 켜기', name: '1973년 라디오', desc: '옆집 할아버지의 트랜지스터 라디오. "오늘의 노래"가 지지직거리며 흘러나온다.' },
    { id: 'photo:village', world: 0, x: 46, y: GROUND, by: 0, how: 'photo', label: '', name: '물속 마을 사진', desc: '플래시가 닿자 물 아래 마을의 불빛이 또렷하게 찍혔다.' },
  ],
  diary: [
    { id: 'd2', world: 0, x: 41, y: GROUND, date: '1989년 4월', text: '딸을 낳았다. 이름은 어머니가 지어 주셨다. 그 애 이름은 아껴 두기로 했다. 언젠가 꼭 쓸 데가 있다.' },
    { id: 'd3', world: 0, x: 74.5, y: GROUND, date: '2003년 여름', text: '은하호가 보이는 집으로 이사 왔다. 가뭄이 들면 감나무 섬이 조금 더 드러난다. 저 아래에 우리 마을이 있다.' },
  ],
  goal: { when: (st) => flag(st, 'dug'), near: 0 },
  moon: 'full',
  dusk: 'sunset',
  triggers: [
    { id: 'wide0', role: 0, when: (c) => near(c, 9.5, 12) && !flag(c.st, 'fireflies'), lines: () => [L('리아', '물이 넓어서 못 건너겠어… 아리 쪽에 뭔가 있을까?')] },
    { id: 'reeds1', role: 1, when: (c) => near(c, 10.5, 15.5), lines: () => [L('아리', '풀숲에 반딧불이 잔뜩이야. 노래를 부르면 모여들어.'), L('', '능력 버튼(F)을 누르고 있는 동안 아리가 노래해요.')] },
    { id: 'pads0', role: 0, when: (c) => flag(c.st, 'fireflies') && c.x < 22, lines: () => [L('리아', '물 위에 반딧불 징검다리가 생겼어! 아리가 노래하는 동안 건너자!')] },
    { id: 'well1', role: 1, when: (c) => near(c, 23.5, 28) && !flag(c.st, 'watered'), lines: () => [L('아리', '우물이다. 물동이에 물을 떠 가자. 감나무한테 줄 거야.')] },
    { id: 'stream1', role: 1, when: (c) => near(c, 32.5, 36) && !lit(c.st, 'streetlamp'), lines: () => [L('아리', '개울 다리가 장마에 떠내려갔어… 물동이를 들고는 못 건너.')] },
    { id: 'lamp0', role: 0, when: (c) => near(c, 30, 36.5) && !lit(c.st, 'streetlamp'), lines: () => [L('리아', '가로등이 있네. 켜면 아리 쪽 개울에도 빛이 닿을까?')] },
    { id: 'photoHint', role: 0, when: (c) => near(c, 43, 49) && !c.st.keeps.includes('photo:village'), lines: () => [L('리아', '여기서 보면 물속 마을 불빛이 제일 잘 보여. 사진 찍어 둘까?')] },
    { id: 'island0', role: 0, when: (c) => near(c, 53, 57.4) && !flag(c.st, 'watered'), lines: () => [L('리아', '섬까지는 물이야. 저 큰 감나무 가지가 조금만 더 길었으면…')] },
    { id: 'tree1', role: 1, when: (c) => near(c, 62, 70), lines: () => [L('아리', '우리 감나무! 아빠가 나 태어난 해에 심었어. 나랑 동갑이야.')] },
    { id: 'dig0', role: 0, when: (c) => near(c, 65, 71) && flag(c.st, 'buried') && !flag(c.st, 'dug'), lines: () => [L('리아', '나무뿌리 밑에서 뭔가 반짝여.')] },
  ],
  objective: (c) => {
    const { st } = c;
    const b = item(st, 'bucket')!;
    if (c.role === 0) {
      if (c.x < 22) return flag(st, 'fireflies') ? '반딧불 징검다리를 건너자' : '물을 건너려면 아리의 노래가 필요해';
      if (!lit(st, 'streetlamp')) return '가로등을 켜서 아리 쪽 개울에 빛 다리를 놓아 주자';
      if (!flag(st, 'watered')) return '섬으로 가는 길을 찾아보자 (아리가 감나무를 돌보는 중)';
      if (c.x < 64) return '자라난 감나무 가지를 타고 섬으로 건너가자';
      if (!flag(st, 'buried')) return '큰 감나무 아래에서 아리를 기다리자';
      return '뿌리 밑에서 반짝이는 곳을 파 보자';
    }
    if (c.partnerX < 22 && c.x < 17) return '반딧불 풀숲에서 노래를 불러 물 위 아이의 길을 열어 주자';
    if (!flag(st, 'watered') && b.holder !== 1 && b.mode !== 'used') return '우물가에서 물동이를 들자';
    if (!lit(st, 'streetlamp') && c.x < 40.5) return '개울을 건너야 해. 물 위 아이에게 도움을 청해 보자';
    if (!flag(st, 'watered')) return '언덕 위 어린 감나무에 물을 주자';
    if (!flag(st, 'buried')) return '감나무 아래에 보물 상자를 묻자';
    return '물 위 아이가 상자를 찾을 수 있을까?';
  },
};
