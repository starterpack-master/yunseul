import { meetScene } from '../scenes';
import { atShore } from './ch1';
import { GROUND, L, flag, item, near, pads } from './common';
import type { ChapterDef, StoryCtx } from './types';

/**
 * 2장 「다시, 같은 밤」
 * 목표: 새벽이 오기 전에 아리를 감나무 언덕(마을 끝) 너머로.
 *
 * 퍼즐 (서로 얽혀 있어요)
 * - 아리가 풀숲에서 노래하는 동안만 리아 쪽에 반딧불 징검다리가 떠요.
 * - 초롱은 하나, 초롱걸이는 셋. 건 자리 아래 개울에만 빛길이 생겨서, 아리가 섬에서 기다리는 동안 리아가 옮겨 걸어야 해요.
 * - 아리는 물건을 하나만 들 수 있어요 (물동이 / 말뚝).
 * - 1973년 울타리 빈자리에 말뚝을 박으면, 지금 호수 위 그루터기 줄에 하나가 더 생겨요.
 * - 리아가 말뚝을 밟으면 아리가 언덕 위로 솟아요.
 * - 어린 감나무에 물을 주면, 지금의 큰 감나무 가지가 섬까지 자라요.
 */

const HILL = 4.3;
const hooks = (c: StoryCtx) => ['hook1', 'hook2', 'hook3'].filter((h) => flag(c.st, h));
const ariAcross = (c: StoryCtx) => (c.role === 1 ? c.x : c.partnerX) > 46.4;
const ariOnHill = (c: StoryCtx) => (c.role === 1 ? c.x > 61 && c.y > 4 : c.partnerX > 61);

export const ch2: ChapterDef = {
  id: 'ch2',
  no: '2장',
  title: '다시, 같은 밤',
  minX: -15.5,
  maxX: 79.5,
  start: { 0: { x: -15, y: GROUND }, 1: { x: -8.2, y: GROUND } },
  solids: {
    0: [
      { kind: 'ground', x0: -24, x1: 11, y0: 0, y1: GROUND },
      { kind: 'deck', x0: 22, x1: 46, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 54.2, x1: 58.2, y0: 0, y1: GROUND },
      { kind: 'island', x0: 66, x1: 90, y0: 0, y1: GROUND },
    ],
    1: [
      { kind: 'ground', x0: -24, x1: 30, y0: 0, y1: GROUND },
      { kind: 'island', x0: 34.8, x1: 35.8, y0: 0, y1: GROUND },
      { kind: 'island', x0: 40.6, x1: 41.6, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 46.4, x1: 58.4, y0: 0, y1: GROUND },
      { kind: 'ledge', x0: 61, x1: 90, y0: 0, y1: HILL },
    ],
  },
  lights: [],
  bridges: [
    { id: 'fireflies', world: 0, kind: 'firefly', segs: pads([12.6, 14.4, 16.2, 18.0, 19.8], 1.2, 0.3), when: (st) => flag(st, 'fireflies') },
    { id: 'stream1', world: 1, kind: 'star', segs: [{ x0: 30, x1: 34.8, y0: GROUND - 0.25, y1: GROUND }], when: (st) => flag(st, 'hook1') },
    { id: 'stream2', world: 1, kind: 'star', segs: [{ x0: 35.8, x1: 40.6, y0: GROUND - 0.25, y1: GROUND }], when: (st) => flag(st, 'hook2') },
    { id: 'stream3', world: 1, kind: 'star', segs: [{ x0: 41.6, x1: 46.4, y0: GROUND - 0.25, y1: GROUND }], when: (st) => flag(st, 'hook3') },
    { id: 'branch', world: 0, kind: 'branch', segs: [{ x0: 57.8, x1: 66.4, y0: 2.6, y1: 2.9 }], when: (st) => flag(st, 'watered') },
  ],
  buoys: [{ id: 'hillPost', owner: 0, x: 59.4, w: 1.4, top: { 0: 2.2, 1: 1.0 }, travel: 2, look: 'wood' }],
  items: [
    { id: 'lamp', kind: 'lamp', world: 0, x: 23.4, y: GROUND, crosses: false, name: '초롱' },
    { id: 'bucket', kind: 'bucket', world: 1, x: 26.6, y: GROUND, crosses: false, name: '물동이' },
    { id: 'stake', kind: 'stake', world: 1, x: 56.2, y: GROUND, crosses: false, name: '말뚝' },
  ],
  sockets: [
    { id: 'hook1', world: 0, x: 32.4, y: GROUND, accepts: 'lamp', flag: 'hook1', label: '초롱 걸기', look: 'hook', removable: true, pickLabel: '초롱 떼기' },
    { id: 'hook2', world: 0, x: 38.2, y: GROUND, accepts: 'lamp', flag: 'hook2', label: '초롱 걸기', look: 'hook', removable: true, pickLabel: '초롱 떼기' },
    { id: 'hook3', world: 0, x: 44.0, y: GROUND, accepts: 'lamp', flag: 'hook3', label: '초롱 걸기', look: 'hook', removable: true, pickLabel: '초롱 떼기' },
    { id: 'fenceGap', world: 1, x: 50.25, y: GROUND, accepts: 'stake', flag: 'fence', label: '울타리에 말뚝 박기', look: 'fence' },
  ],
  uses: [{ id: 'water', world: 1, x: 68.4, y: HILL, label: '감나무에 물 주기', flag: 'watered', needs: 'bucket', by: 1, event: 'watered', look: 'sapling' }],
  arcs: [],
  pillars: [
    // 지금: 호수 위로 삐죽 나온 옛 울타리 그루터기
    { id: 'st1', world: 0, x: 47.5, w: 0.7, top: 1.3, look: 'stump', solid: true },
    { id: 'st2', world: 0, x: 50.25, w: 0.7, top: 1.3, look: 'stump', solid: true, when: (st) => flag(st, 'fence') },
    { id: 'st3', world: 0, x: 53.0, w: 0.7, top: 1.3, look: 'stump', solid: true },
    // 1973년: 아리네 마을 울타리 말뚝 (하나가 빠져 있어요)
    { id: 'f1', world: 1, x: 47.5, w: 0.36, top: 2.7, look: 'fencePost', solid: false },
    { id: 'f2', world: 1, x: 50.25, w: 0.36, top: 2.7, look: 'fencePost', solid: false, when: (st) => flag(st, 'fence') },
    { id: 'f3', world: 1, x: 53.0, w: 0.36, top: 2.7, look: 'fencePost', solid: false },
  ],
  hidden: [],
  dark: [],
  songZones: [{ id: 'reeds', world: 1, x0: 11.4, x1: 15.4, flag: 'fireflies' }],
  magpies: [],
  props: [
    { kind: 'grandmaHouse', world: 0, x: -10.4, y: GROUND, z: -1.2 },
    { kind: 'mailbox', world: 0, x: -5.4, y: GROUND, z: -0.6 },
    { kind: 'lakeSign', world: 0, x: -1.6, y: GROUND, z: -0.5 },
    { kind: 'bench', world: 0, x: 27.2, y: GROUND, z: -1.4 },
    { kind: 'bigTree', world: 0, x: 68.4, y: GROUND, z: -1.0 },
    { kind: 'ariHouse', world: 1, x: -10.4, y: GROUND, z: -1.2 },
    { kind: 'bundles', world: 1, x: -13.3, y: GROUND, z: -0.4 },
    { kind: 'jars', world: 1, x: -6.2, y: GROUND, z: -0.5 },
    { kind: 'reeds', world: 1, x: 12.3, y: GROUND, z: 0.2 },
    { kind: 'reeds', world: 1, x: 14.5, y: GROUND, z: -0.3, flip: true },
    { kind: 'villageHouse', world: 1, x: 19.2, y: GROUND, z: -1.6 },
    { kind: 'radio', world: 1, x: 20.8, y: GROUND, z: -0.3 },
    { kind: 'well', world: 1, x: 25.2, y: GROUND, z: -0.6 },
    { kind: 'pole', world: 1, x: 28.8, y: GROUND, z: -1.8 },
    { kind: 'villageHouse', world: 1, x: 51, y: GROUND, z: -2.2, flip: true },
    { kind: 'shrine', world: 1, x: 57.2, y: GROUND, z: -1.6 },
    { kind: 'jangseung', world: 1, x: 75.2, y: HILL, z: -0.5 },
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
      talk: (st) => [L('할머니', '섬에 큰 감나무 있지? 우리 아버지가 심으신 나무란다.'), ...(st.ng ? [{ who: '할머니', text: '(내가 매일 밤 물을 줬지.)', think: true }] : [])],
    },
    { id: 'mom', kind: 'mom', world: 1, x: -12.2, y: GROUND, pose: 'stand', label: '엄마한테 말 걸기', talk: () => [L('엄마', '감나무 물 주러 가니? 가뭄이라 걔도 목마르겠다.')] },
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
    { id: 'radio', world: 1, x: 20.8, y: GROUND, by: 1, how: 'use', label: '라디오 켜기', name: '옆집 라디오', desc: '옆집 할아버지의 트랜지스터 라디오. 할머니 댁 라디오와 같은 노래가 지지직 흘러나온다.' },
    { id: 'photo:village', world: 0, x: 30, y: GROUND, by: 0, how: 'photo', label: '', name: '물속 마을 사진', desc: '플래시가 닿자 물 아래 마을의 불빛이 또렷하게 찍혔다.' },
  ],
  diary: [
    { id: 'd2', world: 0, x: 28.6, y: GROUND, date: '1989년 4월', text: '딸을 낳았다. 이름은 어머니가 지어 주셨다. 그 애 이름은 아껴 두기로 했다. 언젠가 꼭 쓸 데가 있다.' },
    { id: 'd3', world: 0, x: 76.5, y: GROUND, date: '2003년 여름', text: '은하호가 보이는 집으로 이사 왔다. 가뭄이 들면 감나무 섬이 조금 더 드러난다. 저 아래에 우리 마을이 있다.' },
  ],
  goal: { zone: { x0: 72, x1: 78.5 }, when: (st) => flag(st, 'watered'), near: 0 },
  moon: 'full',
  dusk: 'sunset',
  scenes: [{ id: 'meet', when: (c) => atShore(c), steps: (ng) => meetScene('ch2', ng) }],
  triggers: [
    { id: 'reeds1', role: 1, when: (c) => near(c, 10.5, 15.5) && !!c.st.flags['scene:meet'], lines: () => [L('아리', '풀숲에 반딧불이 잔뜩이야. 노래하면 모여들어.'), L('', 'F를 누르고 있으면 아리가 노래해요.')] },
    { id: 'wide0', role: 0, when: (c) => near(c, 9.5, 11) && !flag(c.st, 'fireflies'), lines: () => [L('리아', '호수가 넓어… 아리 쪽에 뭔가 있을까?')] },
    { id: 'well1', role: 1, when: (c) => near(c, 23.5, 28) && !flag(c.st, 'watered') && c.holding !== 'bucket', lines: () => [L('아리', '우물이다. 매일 밤 감나무한테 물을 떠다 줘.')] },
    { id: 'stream1', role: 1, when: (c) => near(c, 27.5, 30) && hooks(c).length === 0, lines: () => [L('아리', '개울 다리가 떠내려갔어. 너무 넓어서 못 건너.')] },
    { id: 'pier0', role: 0, when: (c) => near(c, 22, 26), lines: () => [L('리아', '부두에 초롱이 하나 놓여 있어.')] },
    { id: 'hooks0', role: 0, when: (c) => near(c, 30, 34) && c.holding === 'lamp' && hooks(c).length === 0, lines: () => [L('리아', '초롱걸이가 셋이네. 초롱은 하나뿐인데.')] },
    { id: 'end0', role: 0, when: (c) => near(c, 44, 46.2) && !flag(c.st, 'fence'), lines: () => [L('리아', '앞은 물이야. 그루터기가 드문드문 있는데… 하나가 빠졌어.')] },
    { id: 'fence1', role: 1, when: (c) => near(c, 46.4, 52) && !flag(c.st, 'fence'), lines: () => [L('아리', '울타리 말뚝 하나가 빠져 있네.')] },
    { id: 'stake1', role: 1, when: (c) => near(c, 54.5, 58) && !flag(c.st, 'fence') && c.holding !== 'stake', lines: () => [L('아리', '서낭당 옆에 말뚝이 쓰러져 있어.')] },
    { id: 'hill1', role: 1, when: (c) => near(c, 55.5, 58.4) && !ariOnHill(c), lines: () => [L('아리', '감나무 언덕이야. 근데 너무 높아.')] },
    { id: 'post0', role: 0, when: (c) => near(c, 54.2, 58.2), lines: () => [L('리아', '여기에도 말뚝이 있네. 아리 쪽이랑 이어져 있을까?')] },
    { id: 'tree1', role: 1, when: (c) => ariOnHill(c) && near(c, 62, 70), lines: () => [L('아리', '우리 감나무. 아빠가 나 태어난 해에 심었어. 나랑 동갑이야.')] },
    { id: 'island0', role: 0, when: (c) => near(c, 55, 58.2) && !flag(c.st, 'watered') && ariOnHill(c), lines: () => [L('리아', '섬까지 조금만 더… 저 큰 감나무 가지가 조금만 길었으면.')] },
    { id: 'exit', role: 'both', when: (c) => flag(c.st, 'watered') && near(c, 68, 72), lines: (c) => [L(c.role === 1 ? '아리' : '리아', c.role === 1 ? '저기 장승 보이지? 저기가 마을 끝이야.' : '섬 끝이 아리네 마을 끝이랑 같은 자리야.')] },
  ],
  hints: [
    { id: 'h-sing', role: 1, after: 12, when: (c) => !!c.st.flags['scene:meet'] && c.partnerX < 21.5 && !flag(c.st, 'fireflies') && near(c, 8, 17), lines: () => [L('아리', '리아가 호수를 못 건너고 있어. 반딧불을 불러 줄까?')] },
    { id: 'h-pads', role: 0, after: 14, when: (c) => near(c, 8, 11) && !flag(c.st, 'fireflies'), lines: () => [L('리아', '아리가 풀숲 반딧불 얘기를 했었지. 노래하면 모인다고.')] },
    { id: 'h-lamp', role: 0, after: 12, when: (c) => near(c, 22, 32) && c.holding !== 'lamp' && hooks(c).length === 0, lines: () => [L('리아', '저 초롱, 들고 다닐 수 있을 것 같아.')] },
    { id: 'h-hook', role: 0, after: 12, when: (c) => c.holding === 'lamp' && near(c, 28, 46), lines: () => [L('리아', '초롱걸이에 초롱을 걸어 볼까? 아리 쪽 개울이 바로 아래야.')] },
    { id: 'h-wait1', role: 1, after: 10, when: (c) => near(c, 34.8, 35.8) && !flag(c.st, 'hook2'), lines: () => [L('아리', '리아! 초롱을 다음 걸이로 옮겨 줘. 나 여기서 기다릴게.')] },
    { id: 'h-wait2', role: 1, after: 10, when: (c) => near(c, 40.6, 41.6) && !flag(c.st, 'hook3'), lines: () => [L('아리', '하나만 더! 마지막 걸이로 옮겨 줘.')] },
    { id: 'h-move', role: 0, after: 16, when: (c) => hooks(c).length === 1 && !ariAcross(c) && c.partnerX > 34, lines: () => [L('', '초롱은 다시 뗄 수 있어요. 아리가 섬에 있을 때 다음 걸이로 옮겨 보세요.')] },
    { id: 'h-bucket', role: 1, after: 18, when: (c) => ariAcross(c) && !flag(c.st, 'watered') && item(c.st, 'bucket')?.holder !== 1 && (item(c.st, 'bucket')?.x ?? 0) < 30, lines: () => [L('아리', '앗, 물동이를 우물가에 두고 왔다…')] },
    { id: 'h-hands', role: 1, after: 6, when: (c) => c.holding === 'bucket' && near(c, 54, 58) && !flag(c.st, 'fence'), lines: () => [L('아리', '손이 모자라. 물동이는 잠깐 내려놓자.')] },
    { id: 'h-fence0', role: 0, after: 16, when: (c) => near(c, 43, 48) && !flag(c.st, 'fence'), lines: () => [L('리아', '물그림자로 아리네 울타리가 보여. 말뚝 자리가 이 그루터기들이랑 똑같아!')] },
    { id: 'h-fence1', role: 1, after: 16, when: (c) => near(c, 46.4, 58) && !flag(c.st, 'fence'), lines: () => [L('아리', '빈자리에 말뚝을 박아 두면… 50년 뒤 리아 쪽에도 남아 있을까?')] },
    { id: 'h-post1', role: 1, after: 14, when: (c) => near(c, 56, 60.2) && !ariOnHill(c), lines: () => [L('아리', '이 말뚝, 리아 쪽이랑 이어져 있겠지? 리아가 밟아 주면 올라갈 텐데.')] },
    { id: 'h-post0', role: 0, after: 14, when: (c) => near(c, 54.2, 60.2) && !ariOnHill(c) && ariAcross(c), lines: () => [L('리아', '이 말뚝을 밟으면 아리 쪽이 솟아오를지도 몰라.')] },
    { id: 'h-water', role: 1, after: 8, when: (c) => ariOnHill(c) && c.holding === 'bucket' && near(c, 64, 72), lines: () => [L('아리', '감나무한테 물부터 주자.')] },
    { id: 'h-nowater', role: 1, after: 12, when: (c) => ariOnHill(c) && !flag(c.st, 'watered') && c.holding !== 'bucket', lines: () => [L('아리', '물동이를 두고 왔네. 감나무가 목말라 보이는데.')] },
    { id: 'h-branch', role: 0, after: 16, when: (c) => near(c, 54.2, 60.2) && !flag(c.st, 'watered') && ariOnHill(c), lines: () => [L('리아', '아리네 어린 감나무랑 이 큰 감나무… 설마 같은 나무야?')] },
  ],
  objective: (c) => {
    const { st } = c;
    if (!st.flags['scene:meet']) return c.role === 0 ? '호숫가로 가 보자' : '달못으로 가 보자';
    if (flag(st, 'watered')) return '마을 끝(섬 끝)에서 만나자';
    if (c.role === 0) {
      if (c.x < 22) return '호수 건너 부두로 가자';
      if (!ariAcross(c)) return '아리가 개울을 건널 수 있게 도와주자';
      if (!flag(st, 'fence') && c.x < 54) return '부두 끝에서 더 나아갈 길을 찾자';
      if (!ariOnHill(c)) return '아리가 감나무 언덕에 오를 수 있게 도와주자';
      return '섬으로 건너갈 길을 찾자';
    }
    if (c.partnerX < 22 && c.x < 17) return '리아가 호수를 건널 수 있게 도와주자';
    if (!ariAcross(c)) return '개울 건너 감나무 언덕으로 · 새벽 전에';
    if (!ariOnHill(c)) return '감나무 언덕 위로 올라갈 방법을 찾자';
    return '감나무를 돌보고 마을 끝 장승으로';
  },
};
