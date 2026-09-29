import { GROUND, L, hasMagpie, lit, near } from './common';
import type { ChapterDef } from './types';

/**
 * 3장 「칠석」
 * 칠석 밤에는 까치와 까마귀가 은하수에 다리(오작교)를 놓아 헤어진 두 사람을 만나게 해 준대요.
 * 두 세계의 까치 여섯 마리를 모으면 호수 위에 오작교가 놓이고, 둘은 다리 한가운데에서 만나요.
 */

const MAGPIES = 6;
const allMagpies = (st: { magpies: string[] }) => st.magpies.length >= MAGPIES;

export const ch3: ChapterDef = {
  id: 'ch3',
  no: '3장',
  title: '칠석',
  minX: -15.5,
  maxX: 79.5,
  start: { 0: { x: -15, y: GROUND }, 1: { x: -8.2, y: GROUND } },
  solids: {
    0: [
      { kind: 'ground', x0: -24, x1: 14, y0: 0, y1: GROUND },
      { kind: 'ledge', x0: 17.4, x1: 20.4, y0: 0, y1: 4.3 },
      { kind: 'ground', x0: 20.4, x1: 27, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 31, x1: 40, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 43, x1: 52, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 72, x1: 90, y0: 0, y1: GROUND },
    ],
    1: [
      { kind: 'ground', x0: -24, x1: 14, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 17.4, x1: 24.5, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 33.5, x1: 40, y0: 0, y1: GROUND },
      { kind: 'ledge', x0: 43, x1: 46, y0: 0, y1: 4.3 },
      { kind: 'ground', x0: 46, x1: 52, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 72, x1: 90, y0: 0, y1: GROUND },
    ],
  },
  lights: [{ id: 'chorong', world: 1, kind: 'chorong', x: 23.2, y: GROUND, label: '청사초롱 켜기' }],
  bridges: [{ id: 'starBridge', world: 0, kind: 'star', segs: [{ x0: 26.8, x1: 31.2, y0: GROUND - 0.25, y1: GROUND }], when: (st) => lit(st, 'chorong') }],
  buoys: [
    { id: 'postA', owner: 1, x: 15.7, w: 1.4, top: { 0: 1.0, 1: 2.2 }, travel: 2, look: 'wood' },
    { id: 'postB', owner: 0, x: 41.5, w: 1.4, top: { 0: 2.2, 1: 1.0 }, travel: 2, look: 'stone' },
  ],
  items: [],
  sockets: [],
  uses: [],
  arcs: [{ id: 'ojakgyo', kind: 'magpie', x0: 51.6, x1: 72.4, h: 4.4, when: allMagpies }],
  hidden: [
    { id: 'h1', world: 1, x: 25.8, w: 1.0, top: 0.35 },
    { id: 'h2', world: 1, x: 28.0, w: 1.0, top: 0.35 },
    { id: 'h3', world: 1, x: 30.2, w: 1.0, top: 0.35 },
    { id: 'h4', world: 1, x: 32.3, w: 1.0, top: 0.35 },
  ],
  dark: [{ world: 1, x0: 24.4, x1: 33.6 }],
  songZones: [],
  magpies: [
    { id: 'm1', world: 0, x: 6.6, y: GROUND, call: 'use' },
    { id: 'm2', world: 1, x: 4.8, y: GROUND, call: 'song' },
    { id: 'm3', world: 0, x: 19.1, y: 4.3, call: 'use' },
    { id: 'm4', world: 1, x: 35.6, y: GROUND, call: 'song' },
    { id: 'm5', world: 0, x: 36.4, y: GROUND, call: 'use' },
    { id: 'm6', world: 1, x: 44.6, y: 4.3, call: 'song' },
  ],
  props: [
    { kind: 'grandmaHouse', world: 0, x: -10.4, y: GROUND, z: -1.2 },
    { kind: 'mailbox', world: 0, x: -5.4, y: GROUND, z: -0.6 },
    { kind: 'bench', world: 0, x: 23.6, y: GROUND, z: -1.4 },
    { kind: 'ariHouse', world: 1, x: -10.4, y: GROUND, z: -1.2 },
    { kind: 'jars', world: 1, x: -6.2, y: GROUND, z: -0.5 },
    { kind: 'reeds', world: 1, x: 12.2, y: GROUND, z: 0.2 },
    { kind: 'shrine', world: 1, x: 21.6, y: GROUND, z: -1.6 },
    { kind: 'villageHouse', world: 1, x: 36.8, y: GROUND, z: -1.8 },
    { kind: 'windchime', world: 1, x: 38.4, y: GROUND, z: -0.4 },
    { kind: 'pole', world: 1, x: 48.4, y: GROUND, z: -1.8 },
  ],
  npcs: [
    {
      id: 'grandma',
      kind: 'grandma',
      world: 0,
      x: -8.4,
      y: GROUND + 0.45,
      pose: 'sleep',
      label: '할머니 살펴보기',
      talk: (st) => [L('할머니', '(잠결에) 약속… 약속했는데…'), ...(st.ng ? [{ who: '할머니', text: '(오늘이구나. 오늘이 그날이야.)' }] : [])],
    },
    { id: 'mom', kind: 'mom', world: 1, x: -12.2, y: GROUND, pose: 'stand', label: '엄마한테 말 걸기', talk: () => [L('엄마', '해 뜨기 전에는 꼭 돌아와야 한다. 약속해.')] },
  ],
  signs: [],
  keepsakes: [
    { id: 'photo:grandma', world: 0, x: -8.4, y: GROUND, by: 0, how: 'photo', label: '', name: '잠든 할머니', desc: '할머니는 자면서도 자장가를 흥얼거리셨다.' },
    { id: 'windchime', world: 1, x: 38.4, y: GROUND, by: 1, how: 'use', label: '풍경 울리기', name: '서낭당 풍경', desc: '바람이 불 때마다 딸랑. 마을에서 가장 맑은 소리.' },
    { id: 'photo:bridge', world: 0, x: 62, y: 4.4, by: 0, how: 'photo', label: '', name: '오작교 사진', desc: '까치들이 놓아 준 다리 위. 사진 속 물그림자에서 아리가 손을 흔든다.', when: allMagpies },
  ],
  diary: [
    { id: 'd4', world: 0, x: 34.2, y: GROUND, date: '2014년 5월', text: '손녀가 태어났다. 한눈에 알았다. 물속에서 보던 그 얼굴이다. 이름은 리아. 이상한 이름이라고들 해도 이것만은 양보 못 한다.' },
    { id: 'd5', world: 0, x: 47.6, y: GROUND, date: '2026년 7월', text: '요즘 자꾸 잊는다. 그래도 이것만은 적어 둔다. 올여름 리아가 온다. 약속한 여름이다. 별 머리핀을 꼭 줘야지.' },
  ],
  goal: { arc: 'ojakgyo', when: allMagpies, near: 1.2 },
  moon: 'half',
  dusk: 'late',
  triggers: [
    { id: 'm1', role: 0, when: (c) => near(c, 3, 9) && !hasMagpie(c.st, 'm1'), lines: () => [L('리아', '까치다! 칠석엔 까치가 다리를 놓아 준대.')] },
    { id: 'm2', role: 1, when: (c) => near(c, 2, 8) && !hasMagpie(c.st, 'm2'), lines: () => [L('아리', '까치야, 이리 와. 노래 불러 줄게.'), L('', '능력 버튼(F)을 누르고 있으면 노래해요. 까치가 노래를 들으면 날아와요.')] },
    { id: 'postA0', role: 0, when: (c) => near(c, 11, 14), lines: () => [L('리아', '저 높은 곳에도 까치가 있어. 말뚝을 타고 올라가 볼까?')] },
    { id: 'postA1', role: 1, when: (c) => near(c, 11, 14), lines: () => [L('아리', '리아가 말뚝에 서면… 내가 반대쪽을 눌러 주면 되겠다.')] },
    { id: 'chorong', role: 1, when: (c) => near(c, 20.5, 24.4) && !lit(c.st, 'chorong'), lines: () => [L('아리', '서낭당 청사초롱. 켜면 물 위에 길이 생기겠지?')] },
    { id: 'dark1', role: 1, when: (c) => near(c, 23.5, 24.5), lines: () => [L('아리', '또 캄캄한 늪이야. 리아가 알려 주면 건널 수 있어.')] },
    { id: 'dark0', role: 0, when: (c) => near(c, 21, 26), lines: () => [L('리아', '아리 쪽 늪이 또 캄캄해. 물그림자 속 징검돌을 눌러서 알려 주자.')] },
    { id: 'postB1', role: 1, when: (c) => near(c, 38.6, 40), lines: () => [L('아리', '돌 말뚝… 이번엔 리아가 눌러 줘야 해.')] },
    { id: 'short', role: 'both', when: (c) => near(c, 49, 52) && !allMagpies(c.st), lines: (c) => [L(c.role === 0 ? '리아' : '아리', `까치가 모자라. 다리가 다 이어지지 않았어. (${c.st.magpies.length}/${MAGPIES})`)] },
    { id: 'bridge', role: 'both', when: (c) => allMagpies(c.st), lines: (c) => [L(c.role === 0 ? '리아' : '아리', '까치들이 날아와서… 다리를 놓았어! 오작교야!')] },
  ],
  objective: (c) => {
    const { st } = c;
    const n = st.magpies.length;
    if (allMagpies(st)) return '오작교 한가운데에서 만나자';
    const tag = ` (${n}/${MAGPIES})`;
    if (c.role === 0) {
      if (!hasMagpie(st, 'm1')) return '마당의 까치를 불러 보자' + tag;
      if (!hasMagpie(st, 'm3')) return '말뚝을 타고 높은 곳의 까치에게 가자 (아리가 반대쪽을 눌러야 해)' + tag;
      if (!lit(st, 'chorong')) return '아리가 청사초롱을 켜 주길 기다리자' + tag;
      if (!hasMagpie(st, 'm5')) return '빛 다리를 건너 까치를 불러 보자' + tag;
      if (!hasMagpie(st, 'm4')) return '캄캄한 늪의 징검돌을 눌러서 아리에게 알려 주자' + tag;
      if (!hasMagpie(st, 'm6')) return '돌 말뚝에 올라서서 아리를 높이 올려 주자' + tag;
      return '아리 쪽 까치가 남았어' + tag;
    }
    if (!hasMagpie(st, 'm2')) return '장독대 옆 까치에게 노래를 불러 주자' + tag;
    if (!hasMagpie(st, 'm3')) return '리아가 말뚝에 서면, 내 쪽 말뚝을 눌러 올려 주자' + tag;
    if (!lit(st, 'chorong')) return '서낭당 청사초롱을 켜자' + tag;
    if (!hasMagpie(st, 'm4')) return '리아의 안내를 따라 늪을 건너, 까치에게 노래하자' + tag;
    if (!hasMagpie(st, 'm6')) return '돌 말뚝에 올라, 리아가 눌러 주길 기다리자 (높은 곳의 까치)' + tag;
    return '리아 쪽 까치가 남았어' + tag;
  },
};
