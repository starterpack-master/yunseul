import { meetScene } from '../scenes';
import { atShore } from './ch1';
import { GROUND, L, flag, hasMagpie, item, near } from './common';
import type { ChapterDef, StoryCtx } from './types';

/**
 * 3장 「칠석」
 * 목표: 까치 여섯 마리를 모아 오작교를 놓고, 다리 한가운데에서 진짜로 만나기.
 * 까치마다 필요한 방법이 달라요. 순서는 자유예요.
 *  1. 반짝이는 걸 좋아하는 까치: 리아가 백 원짜리를 물에 떨어뜨리면 1973년의 아리에게 가요.
 *  2. 높은 나무 둥지의 까치: 아리가 도랑 말뚝을 밟아야 리아가 올라가요.
 *  3. 캄캄한 늪 건너 까치: 리아가 물그림자로 징검돌을 알려 줘요.
 *  4. 서낭당에서 잠든 까치: 노래로는 안 깨요. 리아의 사진 플래시가 물 너머까지 닿아야 해요.
 *  5. 연못 바위 위 까치: 초롱은 하나, 걸이는 둘. 아리가 바위에서 기다리는 동안 옮겨 걸어요.
 *  6. 높은 바위 위 까치: 리아가 말뚝을 밟아야 아리가 올라가요.
 */

const MAGPIES = 6;
const allMagpies = (st: { magpies: string[] }) => st.magpies.length >= MAGPIES;
const tag = (c: StoryCtx) => ` (${c.st.magpies.length}/${MAGPIES})`;
const HIGH = 4.3;

export const ch3: ChapterDef = {
  id: 'ch3',
  no: '3장',
  title: '칠석',
  minX: -15.5,
  maxX: 86,
  start: { 0: { x: -15, y: GROUND }, 1: { x: -8.2, y: GROUND } },
  solids: {
    0: [
      { kind: 'ground', x0: -24, x1: 10.8, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 12.8, x1: 46.2, y0: 0, y1: GROUND },
      { kind: 'deck', x0: 46.2, x1: 57.2, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 60.6, x1: 62.6, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 82.6, x1: 95, y0: 0, y1: GROUND },
    ],
    1: [
      { kind: 'ground', x0: -24, x1: 14.9, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 16.5, x1: 24.4, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 33.6, x1: 46.2, y0: 0, y1: GROUND },
      { kind: 'island', x0: 51.2, x1: 52.2, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 57.2, x1: 59.6, y0: 0, y1: GROUND },
      { kind: 'ledge', x0: 59.6, x1: 62.6, y0: 0, y1: HIGH },
      { kind: 'ground', x0: 82.6, x1: 95, y0: 0, y1: GROUND },
    ],
  },
  lights: [],
  bridges: [
    // 느티나무 가지 위 까치 둥지 (늘 있어요, 아래로는 지나다닐 수 있어요)
    { id: 'nest', world: 0, kind: 'branch', segs: [{ x0: 17.4, x1: 20.6, y0: HIGH - 0.3, y1: HIGH }], when: () => true },
    { id: 'pond1', world: 1, kind: 'star', segs: [{ x0: 46.2, x1: 51.2, y0: GROUND - 0.25, y1: GROUND }], when: (st) => flag(st, 'hookA') },
    { id: 'pond2', world: 1, kind: 'star', segs: [{ x0: 52.2, x1: 57.2, y0: GROUND - 0.25, y1: GROUND }], when: (st) => flag(st, 'hookB') },
  ],
  buoys: [
    { id: 'ditchPost', owner: 1, x: 15.7, w: 1.4, top: { 0: 1.0, 1: 2.2 }, travel: 2, look: 'wood' },
    { id: 'rockPost', owner: 0, x: 58.9, w: 1.4, top: { 0: 2.2, 1: 1.0 }, travel: 2, look: 'stone' },
  ],
  items: [
    { id: 'coin', kind: 'coin', world: 0, x: -4.4, y: GROUND, crosses: true, name: '백 원짜리 동전' },
    { id: 'lamp', kind: 'lamp', world: 0, x: 44.6, y: GROUND, crosses: false, name: '초롱' },
  ],
  sockets: [
    { id: 'hookA', world: 0, x: 48.7, y: GROUND, accepts: 'lamp', flag: 'hookA', label: '초롱 걸기', look: 'hook', removable: true, pickLabel: '초롱 떼기' },
    { id: 'hookB', world: 0, x: 54.7, y: GROUND, accepts: 'lamp', flag: 'hookB', label: '초롱 걸기', look: 'hook', removable: true, pickLabel: '초롱 떼기' },
  ],
  uses: [],
  arcs: [{ id: 'ojakgyo', kind: 'magpie', x0: 62.6, x1: 82.6, h: 4.6, when: allMagpies }],
  pillars: [],
  hidden: [
    { id: 'h1', world: 1, x: 25.8, w: 1.0, top: 0.35 },
    { id: 'h2', world: 1, x: 28.0, w: 1.0, top: 0.35 },
    { id: 'h3', world: 1, x: 30.2, w: 1.0, top: 0.35 },
    { id: 'h4', world: 1, x: 32.3, w: 1.0, top: 0.35 },
  ],
  dark: [{ world: 1, x0: 24.4, x1: 33.6 }],
  songZones: [],
  magpies: [
    { id: 'm1', world: 1, x: 5.6, y: GROUND, call: 'give', needs: 'coin', label: '반짝이는 동전 주기' },
    { id: 'm2', world: 0, x: 19.3, y: HIGH, call: 'use' },
    { id: 'm3', world: 1, x: 34.8, y: GROUND, call: 'song' },
    { id: 'm4', world: 1, x: 39.6, y: 5.05, call: 'flash' },
    { id: 'm5', world: 1, x: 51.7, y: GROUND, call: 'song' },
    { id: 'm6', world: 1, x: 61.4, y: HIGH, call: 'song' },
  ],
  props: [
    { kind: 'grandmaHouse', world: 0, x: -10.4, y: GROUND, z: -1.2 },
    { kind: 'mailbox', world: 0, x: -5.4, y: GROUND, z: -0.6 },
    { kind: 'bigTree', world: 0, x: 21.6, y: GROUND, z: -1.1 },
    { kind: 'bench', world: 0, x: 36.2, y: GROUND, z: -1.4 },
    { kind: 'ariHouse', world: 1, x: -10.4, y: GROUND, z: -1.2 },
    { kind: 'jars', world: 1, x: -6.2, y: GROUND, z: -0.5 },
    { kind: 'reeds', world: 1, x: 12.2, y: GROUND, z: 0.2 },
    { kind: 'villageHouse', world: 1, x: 20.4, y: GROUND, z: -1.8 },
    { kind: 'shrine', world: 1, x: 39.6, y: GROUND, z: -1.2 },
    { kind: 'windchime', world: 1, x: 42.6, y: GROUND, z: -0.4 },
    { kind: 'pole', world: 1, x: 45.4, y: GROUND, z: -1.8 },
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
      talk: (st) => [L('할머니', '(새근새근… 자장가를 흥얼거리신다)'), ...(st.ng ? [{ who: '할머니', text: '(오늘이구나. 그날 밤이야.)', think: true }] : [])],
    },
    { id: 'mom', kind: 'mom', world: 1, x: -12.2, y: GROUND, pose: 'stand', label: '엄마한테 말 걸기', talk: () => [L('엄마', '까치가 반짝이는 걸 물어 가는 거 알지? 엄마 비녀도 가져갔잖니.')] },
  ],
  signs: [],
  keepsakes: [
    { id: 'photo:grandma', world: 0, x: -8.4, y: GROUND, by: 0, how: 'photo', label: '', name: '잠든 할머니', desc: '할머니는 자면서도 자장가를 흥얼거리셨다.' },
    { id: 'windchime', world: 1, x: 42.6, y: GROUND, by: 1, how: 'use', label: '풍경 울리기', name: '서낭당 풍경', desc: '바람이 불 때마다 딸랑. 마을에서 가장 맑은 소리.' },
    { id: 'photo:bridge', world: 0, x: 72.6, y: 4.6, by: 0, how: 'photo', label: '', name: '오작교 사진', desc: '까치들이 놓아 준 다리 위. 사진 속 물그림자에서 아리가 손을 흔든다.', when: allMagpies },
  ],
  diary: [
    { id: 'd4', world: 0, x: 30.4, y: GROUND, date: '2014년 5월', text: '손녀가 태어났다. 한눈에 알았다. 물속에서 보던 그 얼굴이다. 이름은 리아. 거꾸로 하면 내 이름.' },
    { id: 'd5', world: 0, x: 51.8, y: GROUND, date: '2026년 7월', text: '요즘 자꾸 잊는다. 그래도 이것만은 적어 둔다. 올여름, 리아에게 별 머리핀을 줄 것. 호수를 잘 보라고 할 것.' },
  ],
  goal: { arc: 'ojakgyo', when: allMagpies, near: 1.3 },
  moon: 'half',
  dusk: 'late',
  scenes: [{ id: 'meet', when: (c) => atShore(c, -3.2, 5.4), steps: (ng) => meetScene('ch3', ng) }],
  triggers: [
    { id: 'coin0', role: 0, when: (c) => near(c, -6, -3) && !!c.st.flags['scene:meet'] && item(c.st, 'coin')?.world === 0, lines: () => [L('리아', '우체통 옆에 백 원짜리가 떨어져 있네. 반짝반짝해.')] },
    { id: 'm1a', role: 1, when: (c) => near(c, 3.5, 8) && !hasMagpie(c.st, 'm1'), lines: () => [L('아리', '이 까치는 반짝이는 걸 엄청 좋아해. 노래론 안 와.')] },
    { id: 'm2a', role: 0, when: (c) => near(c, 16.5, 21) && !hasMagpie(c.st, 'm2'), lines: () => [L('리아', '저 높은 둥지에 까치가 있어!')] },
    { id: 'm2b', role: 1, when: (c) => near(c, 13.5, 17.5) && !hasMagpie(c.st, 'm2'), lines: () => [L('아리', '도랑에 말뚝이 하나 박혀 있네.')] },
    { id: 'dark1', role: 1, when: (c) => near(c, 22.5, 24.4), lines: () => [L('아리', '또 캄캄한 늪이야. 리아가 알려 주면 건널 수 있어.')] },
    { id: 'dark0', role: 0, when: (c) => near(c, 22, 26) && (c.partnerX < 33.6), lines: () => [L('리아', '늪 징검돌, 물그림자로는 보여. 눌러서 알려 주자.')] },
    { id: 'm4a', role: 1, when: (c) => near(c, 37, 42) && !hasMagpie(c.st, 'm4'), lines: () => [L('아리', '서낭당 나무 위에서 까치가 곤히 자. 노래로는 안 깨더라.'), L('아리', '환한 빛이라도 비추면 모를까.')] },
    { id: 'm4b', role: 0, when: (c) => near(c, 37, 42) && !hasMagpie(c.st, 'm4'), lines: () => [L('리아', '물그림자 속 큰 나무 위에… 까치가 자고 있어.')] },
    { id: 'pond1', role: 1, when: (c) => near(c, 44, 46.2), lines: () => [L('아리', '연못 가운데 바위에도 까치가 있어. 건너편까지 가야 하는데.')] },
    { id: 'pond0', role: 0, when: (c) => near(c, 44, 48), lines: () => [L('리아', '또 초롱이다. 이번엔 걸이가 둘이네.')] },
    { id: 'rock1', role: 1, when: (c) => near(c, 57.2, 59.6), lines: () => [L('아리', '저 바위 꼭대기에도 까치! 여기 말뚝, 리아 쪽이랑 이어져 있겠지?')] },
    { id: 'short', role: 'both', when: (c) => near(c, 60, 62.6) && !allMagpies(c.st), lines: (c) => [L(c.role === 0 ? '리아' : '아리', `까치가 모자라. 다리가 다 이어지지 않았어.${tag(c)}`)] },
    { id: 'bridge', role: 'both', when: (c) => allMagpies(c.st), lines: (c) => [L(c.role === 0 ? '리아' : '아리', '까치들이 날아와서… 다리를 놓았어! 오작교야!')] },
  ],
  hints: [
    { id: 'h-coin0', role: 0, after: 20, when: (c) => item(c.st, 'coin')?.world === 0 && c.holding !== 'coin' && c.partnerX < 9 && !hasMagpie(c.st, 'm1'), lines: () => [L('리아', '반짝이는 거라면… 아까 그 백 원?')] },
    { id: 'h-coin1', role: 0, after: 10, when: (c) => c.holding === 'coin' && near(c, 6, 13), lines: () => [L('리아', '물에 떨어뜨린 건 아리 쪽으로 건너가잖아.')] },
    { id: 'h-coin2', role: 1, after: 16, when: (c) => near(c, 3, 9) && !hasMagpie(c.st, 'm1') && item(c.st, 'coin')?.world === 0, lines: () => [L('아리', '리아 쪽엔 반짝이는 거 없을까? 물에 떨어뜨리면 여기로 오잖아.')] },
    { id: 'h-nest1', role: 1, after: 14, when: (c) => !hasMagpie(c.st, 'm2') && near(c, 13, 18) && Math.abs(c.partnerX - 15.7) < 3, lines: () => [L('아리', '이 말뚝을 밟으면 리아 쪽이 솟아오르겠지?')] },
    { id: 'h-nest0', role: 0, after: 16, when: (c) => !hasMagpie(c.st, 'm2') && near(c, 14, 21), lines: () => [L('리아', '둥지가 너무 높아. 아리 쪽 말뚝이 발판이 돼 주면 좋을 텐데.')] },
    { id: 'h-dark', role: 0, after: 16, when: (c) => c.partnerX > 23 && c.partnerX < 33.6 && near(c, 22, 36), lines: () => [L('', '물그림자 속 징검돌을 누르면 아리 화면에 표시돼요. 사진(F)을 찍으면 잠깐 다 보여요.')] },
    { id: 'h-flash', role: 0, after: 14, when: (c) => !hasMagpie(c.st, 'm4') && near(c, 36, 43), lines: () => [L('리아', '사진 찍을 때 플래시… 물 너머까지 닿았었지?')] },
    { id: 'h-pondA', role: 0, after: 14, when: (c) => c.holding === 'lamp' && near(c, 44, 57), lines: () => [L('리아', '초롱걸이 아래가 바로 아리네 연못이야.')] },
    { id: 'h-pondB', role: 1, after: 10, when: (c) => near(c, 51.2, 52.2) && !flag(c.st, 'hookB'), lines: () => [L('아리', '리아, 초롱을 다음 걸이로 옮겨 줘!')] },
    { id: 'h-rock0', role: 0, after: 14, when: (c) => near(c, 56, 61) && !hasMagpie(c.st, 'm6'), lines: () => [L('리아', '이 돌 말뚝을 밟으면 아리가 올라갈 수 있을 것 같아.')] },
    { id: 'h-count', role: 'both', after: 30, when: (c) => !allMagpies(c.st), lines: (c) => [L('', `아직 못 부른 까치가 있어요.${tag(c)} 까치마다 부르는 방법이 달라요.`)] },
  ],
  objective: (c) => {
    if (!c.st.flags['scene:meet']) return c.role === 0 ? '호숫가로 가 보자' : '달못으로 가 보자';
    if (allMagpies(c.st)) return '오작교 한가운데에서 만나자';
    return '까치 여섯 마리를 모아 오작교를 놓자' + tag(c);
  },
};
