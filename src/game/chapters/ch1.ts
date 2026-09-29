import { meetScene } from '../scenes';
import { GROUND, L, flag, item, lit, near, pads } from './common';
import type { ChapterDef, SceneCtx, StoryCtx } from './types';

/**
 * 프롤로그 + 1장 「물속의 아이」 (튜토리얼)
 * 목표: 달맞이 다리 꼭대기에서 서로를 제대로 보기.
 * 배우는 규칙: 빛은 물 너머에서 길이 된다 · 말뚝은 두 세계에 하나 · 물에 빠뜨린 건 건너간다 · 서로에게만 보이는 것.
 */

const marbleUp = (c: StoryCtx) => {
  const m = item(c.st, 'marble');
  return !!m && m.world === 1 && m.mode !== 'held' && m.y > 3;
};

/** 두 사람이 물가(할머니 댁 앞 / 아리네 집 앞)에 함께 서면 */
export const atShore = (c: SceneCtx, x0 = -3.2, x1 = 5) => {
  const [a, b] = c.p;
  return !!a && !!b && !a.hidden && !b.hidden && a.x > x0 && a.x < x1 && b.x > x0 && b.x < x1;
};

const TIP_SOLO = '혼자 하기: Tab(오른쪽 위 버튼)으로 리아와 아리를 번갈아 조작해요.';
const TIP_DUO = '화면을 누르면 그 자리에 표시가 생겨요. 친구 화면에도 보여요.';

export const ch1: ChapterDef = {
  id: 'ch1',
  no: '1장',
  title: '물속의 아이',
  minX: -15.5,
  maxX: 63.6,
  start: { 0: { x: -15, y: GROUND }, 1: { x: -8.2, y: GROUND } },
  solids: {
    0: [
      { kind: 'ground', x0: -24, x1: 11, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 19, x1: 22.5, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 25.5, x1: 40, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 43.5, x1: 46.5, y0: 0, y1: GROUND },
      { kind: 'ledge', x0: 49.5, x1: 52.5, y0: 0, y1: 4.3 },
      { kind: 'ground', x0: 52.5, x1: 56.9, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 61.1, x1: 86, y0: 0, y1: GROUND },
    ],
    1: [
      { kind: 'ground', x0: -24, x1: 11, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 19, x1: 22.5, y0: 0, y1: GROUND },
      { kind: 'ledge', x0: 25.5, x1: 28, y0: 0, y1: 4.3 },
      { kind: 'ground', x0: 28, x1: 29.5, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 39.5, x1: 46.5, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 49.5, x1: 56.9, y0: 0, y1: GROUND },
      { kind: 'ground', x0: 61.1, x1: 86, y0: 0, y1: GROUND },
    ],
  },
  lights: [
    { id: 'lantern', world: 0, kind: 'lantern', x: 8.6, y: GROUND, label: '정원 등불 켜기' },
    { id: 'moonflower', world: 1, kind: 'moonflower', x: 6.4, y: GROUND, label: '노래 불러 주기', bySong: true },
    { id: 'chorong', world: 1, kind: 'chorong', x: 41.4, y: GROUND, label: '청사초롱 켜기' },
  ],
  bridges: [
    { id: 'starBridge', world: 1, kind: 'star', segs: [{ x0: 10.9, x1: 19.1, y0: GROUND - 0.25, y1: GROUND }], when: (st) => lit(st, 'lantern') },
    { id: 'lilyBridge', world: 0, kind: 'lily', segs: pads([12.1, 14.1, 16.1, 18.1], 1.3, 0.3), when: (st) => lit(st, 'moonflower') },
    { id: 'starBridge2', world: 0, kind: 'star', segs: [{ x0: 39.8, x1: 43.7, y0: GROUND - 0.25, y1: GROUND }], when: (st) => lit(st, 'chorong') },
  ],
  buoys: [
    { id: 'woodPost', owner: 0, x: 24, w: 1.4, top: { 0: 2.2, 1: 1.0 }, travel: 2, look: 'wood' },
    { id: 'stonePost', owner: 1, x: 48, w: 1.4, top: { 0: 1.0, 1: 2.2 }, travel: 2, look: 'stone' },
  ],
  items: [{ id: 'marble', kind: 'marble', world: 1, x: 26.9, y: 4.3, crosses: true, name: '유리구슬' }],
  sockets: [{ id: 'seokdeung', world: 0, x: 51.2, y: 4.3, accepts: 'marble', flag: 'seokdeung', label: '석등에 구슬 넣기', look: 'seokdeung' }],
  uses: [],
  arcs: [{ id: 'moon', kind: 'moon', x0: 56.4, x1: 61.6, h: 2.6 }],
  pillars: [],
  hidden: [
    { id: 'h1', world: 1, x: 30.9, w: 1.0, top: 0.35 },
    { id: 'h2', world: 1, x: 33.2, w: 1.0, top: 0.35 },
    { id: 'h3', world: 1, x: 35.6, w: 1.0, top: 0.35 },
    { id: 'h4', world: 1, x: 37.9, w: 1.0, top: 0.35 },
  ],
  dark: [{ world: 1, x0: 29.4, x1: 39.6 }],
  songZones: [],
  magpies: [],
  props: [
    { kind: 'grandmaHouse', world: 0, x: -10.4, y: GROUND, z: -1.2 },
    { kind: 'radio', world: 0, x: -7.1, y: GROUND + 0.45, z: -0.9 },
    { kind: 'mailbox', world: 0, x: -5.4, y: GROUND, z: -0.6 },
    { kind: 'lakeSign', world: 0, x: -1.6, y: GROUND, z: -0.5 },
    { kind: 'bench', world: 0, x: 33.5, y: GROUND, z: -1.4 },
    { kind: 'ariHouse', world: 1, x: -10.4, y: GROUND, z: -1.2 },
    { kind: 'bundles', world: 1, x: -13.3, y: GROUND, z: -0.4 },
    { kind: 'jars', world: 1, x: -6.2, y: GROUND, z: -0.5 },
    { kind: 'noticeBoard', world: 1, x: -1.6, y: GROUND, z: -0.5 },
    { kind: 'reeds', world: 1, x: 9.8, y: GROUND, z: 0.2 },
    { kind: 'shrine', world: 1, x: 43.6, y: GROUND, z: -1.6 },
    { kind: 'pole', world: 1, x: 20.8, y: GROUND, z: -1.8 },
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
      talk: (st) =>
        flag(st, 'seokdeung')
          ? [L('할머니', '…달맞이 다리가 환하구나.')]
          : [L('할머니', '해 떨어지기 전에 다녀오렴. 물속을 잘 보고.'), ...(st.ng ? [{ who: '할머니', text: '(…그 애가 기다리고 있을 게다.)', think: true }] : [])],
    },
    {
      id: 'mom',
      kind: 'mom',
      world: 1,
      x: -12.2,
      y: GROUND,
      pose: 'stand',
      flip: false,
      label: '엄마한테 말 걸기',
      talk: () => [L('엄마', '늪 쪽은 캄캄하니까 조심해. 징검돌 자리 잊지 말고.')],
    },
    { id: 'byeoli', kind: 'turtle', world: 1, x: 10.1, y: GROUND },
  ],
  signs: [
    {
      // 2장 옆집 라디오와 같은 노래가 나와요 (이스터에그)
      id: 'oldRadio',
      world: 0,
      x: -6.6,
      y: GROUND,
      label: '라디오 켜기',
      sfx: 'radio',
      lines: [L('', '지지직… 낡은 라디오에서 아주 옛날 노래가 흘러나온다.'), L('리아', '할머니는 맨날 이 노래만 들으셔.')],
    },
    {
      id: 'lakeSign',
      world: 0,
      x: -1.6,
      y: GROUND,
      label: '안내판 읽기',
      event: 'sign:lake',
      lines: [L('', '「은하호」 은하댐이 생기며 만들어진 호수입니다. 호수 아래에는 달못 마을을 비롯한 여섯 마을이 잠겨 있습니다.'), L('리아', '호수 밑에 마을이 있다고…?')],
    },
    {
      id: 'notice',
      world: 1,
      x: -1.6,
      y: GROUND,
      label: '알림판 읽기',
      event: 'sign:notice',
      lines: [L('', '「알림」 수몰 지구 주민께. 칠석 이튿날 새벽에 댐 수문을 닫습니다. 그 전까지 모두 떠나 주십시오. — 군청'), L('아리', '…오늘 밤이 마지막이야.')],
    },
  ],
  keepsakes: [
    { id: 'byeoli', world: 1, x: 10.1, y: GROUND, by: 1, how: 'use', label: '별이 쓰다듬기', name: '별이', desc: '달못에 사는 작은 거북이. 등딱지에 별 무늬가 있다.' },
    { id: 'candy', world: 1, x: -6.2, y: GROUND, by: 1, how: 'use', label: '작은 장독 열어 보기', name: '장독 속 알사탕', desc: '엄마 몰래 숨겨 둔 알사탕 세 알. 이사 가기 전에 다 먹어야 한다.' },
    { id: 'photo:moon', world: 0, x: 59, y: 2.6, by: 0, how: 'photo', label: '', name: '보름달 사진', desc: '반달 다리와 물그림자가 만나 보름달이 되었다.', when: (st) => flag(st, 'seokdeung') },
  ],
  diary: [
    { id: 'd1', world: 0, x: 31.2, y: GROUND, date: '1973년 8월', text: '드디어 아침이 왔다. 몇 번째 밤 끝에 온 아침인지 모르겠다. 물속의 그 애가 아침을 데려다줬다.' },
  ],
  goal: { arc: 'moon', when: (st) => flag(st, 'seokdeung'), near: 1.0 },
  moon: 'full',
  dusk: 'sunset',
  scenes: [{ id: 'meet', when: (c) => atShore(c), steps: (ng) => meetScene('ch1', ng) }],
  triggers: [
    { id: 'howto', role: 'both', when: (c) => !!c.st.flags['scene:meet'] && near(c, -4, 12), lines: (c) => [L('', c.solo ? TIP_SOLO : TIP_DUO)] },
    { id: 'lantern', role: 0, when: (c) => !lit(c.st, 'lantern') && near(c, 6.5, 10.5), lines: () => [L('리아', '할머니네 정원 등불이다.')] },
    { id: 'moonflower', role: 1, when: (c) => !lit(c.st, 'moonflower') && near(c, 4.5, 8.5), lines: () => [L('아리', '달맞이꽃. 외할머니 자장가를 불러 주면 핀댔는데.')] },
    { id: 'gap1', role: 1, when: (c) => !lit(c.st, 'lantern') && near(c, 9.8, 11), lines: () => [L('아리', '여기서부턴 물이야. 리아 쪽에서 뭔가 해 줄 수 있을까?')] },
    { id: 'gap0', role: 0, when: (c) => !lit(c.st, 'moonflower') && near(c, 9.8, 11), lines: () => [L('리아', '물이 깊어… 아리 쪽에 뭔가 없나?')] },
    { id: 'marbleSeen', role: 1, when: (c) => near(c, 19.5, 25.5) && marbleUp(c), lines: () => [L('아리', '내 유리구슬! 구슬치기하다 저 바위 위로 튀었어.'), L('아리', '혼자서는 안 닿는데…')] },
    { id: 'post0', role: 0, when: (c) => near(c, 19.5, 23), lines: () => [L('리아', '오래된 나무 말뚝이야. 밟으면 쑥 가라앉을 것 같아.')] },
    { id: 'lifted', role: 1, when: (c) => c.gk === 'buoy' && c.gid === 'woodPost' && (c.st.buoys.woodPost ?? 0) > 0.85, lines: () => [L('아리', '말뚝이 솟아올랐어! 리아가 반대쪽을 밟았구나.')] },
    { id: 'dark1', role: 1, when: (c) => near(c, 27.8, 29.5) && !lit(c.st, 'chorong'), lines: () => [L('아리', '캄캄해서 징검돌이 하나도 안 보여.')] },
    {
      id: 'dark0',
      role: 0,
      when: (c) => near(c, 26, 31) && !lit(c.st, 'chorong'),
      lines: () => [L('리아', '아리 쪽 늪, 물그림자로는 징검돌이 다 보여!'), L('', '물그림자 속 징검돌을 누르면 아리 화면에도 표시돼요. F(능력): 사진 플래시')],
    },
    { id: 'chorong', role: 1, when: (c) => near(c, 39.6, 42.5) && !lit(c.st, 'chorong'), lines: () => [L('아리', '서낭당 청사초롱이다.')] },
    { id: 'seokdeung', role: 0, when: (c) => near(c, 44, 47), lines: () => [L('리아', '저 높은 곳에 오래된 석등이 있어. 구슬이 쏙 들어가겠는데?')] },
    { id: 'stone1', role: 1, when: (c) => near(c, 44, 47), lines: () => [L('아리', '돌 말뚝이다. 이번엔 내가 밟아 줄 차례야.')] },
    {
      id: 'arch',
      role: 'both',
      when: (c) => near(c, 54.5, 57),
      lines: (c) => [L(c.role === 0 ? '리아' : '아리', '달맞이 다리다. 반달 모양이라 물에 비치면 보름달이 된대.')],
    },
    {
      id: 'archDim',
      role: 'both',
      when: (c) => !flag(c.st, 'seokdeung') && c.gk === 'arc' && Math.abs(c.x - 59) < 1,
      lines: (c) => [L(c.role === 0 ? '리아' : '아리', '아직 물이 흐려. 석등에 불이 들어와야 하나 봐.')],
    },
  ],
  hints: [
    { id: 'h-lantern', role: 1, after: 14, when: (c) => !lit(c.st, 'lantern') && near(c, 8, 11), lines: () => [L('아리', '리아, 네 쪽에 불 켤 만한 거 없어?')] },
    { id: 'h-flower', role: 0, after: 14, when: (c) => !lit(c.st, 'moonflower') && near(c, 7, 11), lines: () => [L('리아', '아까 아리 쪽에 꽃이 있었지. 노래하면 핀다고 했나?')] },
    { id: 'h-song', role: 1, after: 10, when: (c) => !lit(c.st, 'moonflower') && near(c, 4.5, 8.5), lines: () => [L('', 'E: 노래 불러 주기 · F를 누르고 있어도 노래해요')] },
    { id: 'h-lift1', role: 1, after: 16, when: (c) => marbleUp(c) && near(c, 19.5, 25.5), lines: () => [L('아리', '저 말뚝, 물 위로 이어져 있어. 리아가 반대쪽을 밟아 주면 올라갈 수 있을 텐데.')] },
    { id: 'h-lift0', role: 0, after: 16, when: (c) => marbleUp(c) && near(c, 19, 25.5), lines: () => [L('리아', '아리가 저 위를 보고 있어. 이 말뚝을 밟아 볼까?')] },
    { id: 'h-drop', role: 1, after: 12, when: (c) => c.holding === 'marble', lines: () => [L('아리', '물에 떨어뜨리면… 리아 쪽으로 건너갈지도 몰라.')] },
    { id: 'h-dark', role: 0, after: 16, when: (c) => !lit(c.st, 'chorong') && near(c, 25.5, 40), lines: () => [L('', '아리가 밟을 징검돌을 눌러서 알려 주세요. 사진(F)을 찍으면 잠깐 다 보여요.')] },
    { id: 'h-stone', role: 0, after: 16, when: (c) => !flag(c.st, 'seokdeung') && near(c, 43.5, 49), lines: () => [L('리아', '아리한테 돌 말뚝을 밟아 달라고 해야겠다.')] },
    { id: 'h-marble', role: 0, after: 14, when: (c) => !flag(c.st, 'seokdeung') && c.holding !== 'marble' && near(c, 49, 53), lines: () => [L('리아', '석등에 넣을 구슬… 아까 물에서 떠오른 구슬 있었지?')] },
  ],
  objective: (c) => {
    if (!c.st.flags['scene:meet']) return '호숫가로 가 보자';
    if (flag(c.st, 'seokdeung')) return '달맞이 다리 꼭대기에 함께 서자';
    return '달맞이 다리로 가자 · 서로 도와서';
  },
};
