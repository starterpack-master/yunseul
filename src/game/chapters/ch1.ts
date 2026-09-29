import { GROUND, L, flag, item, lit, near, pads } from './common';
import type { ChapterDef, StoryCtx } from './types';

/**
 * 프롤로그 + 1장 「물속의 아이」 (튜토리얼)
 * 현재: 할머니 댁 → 호숫가 → 달맞이 다리.  1973년: 아리네 집 → 달못 → 서낭당 → 달맞이 다리.
 */

const marbleUp = (c: StoryCtx) => {
  const m = item(c.st, 'marble');
  return !!m && m.world === 1 && m.mode !== 'held' && m.y > 3;
};

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
          ? [L('할머니', '♪ 윤슬아 윤슬아…')]
          : [L('할머니', '해 떨어지기 전에 다녀오렴. 물속을 잘 보고.'), ...(st.ng ? [{ who: '할머니', text: '(…그 애가 기다리고 있을 게다.)' }] : [])],
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
      talk: () => [L('엄마', '너무 늦지 말고. 늪 쪽은 캄캄하니까 조심해.')],
    },
    { id: 'byeoli', kind: 'turtle', world: 1, x: 10.1, y: GROUND },
  ],
  signs: [
    {
      // 2장 1973년 옆집 라디오와 같은 노래가 나와요 (이스터에그)
      id: 'oldRadio',
      world: 0,
      x: -6.6,
      y: GROUND,
      label: '라디오 켜기',
      sfx: 'radio',
      lines: [L('', '지지직… 낡은 라디오에서 아주 옛날 노래가 흘러나온다.'), L('리아', '할머니는 맨날 이 노래만 들으셔. 무슨 노래지?')],
    },
    {
      id: 'lakeSign',
      world: 0,
      x: -1.6,
      y: GROUND,
      label: '안내판 읽기',
      event: 'sign:lake',
      lines: [
        L('', '「은하호」 1973년 은하댐이 완공되며 생긴 호수입니다.'),
        L('', '호수 아래에는 달못 마을을 비롯한 여섯 마을이 잠겨 있습니다. 가뭄이 들면 옛 돌다리가 드러나기도 합니다.'),
        L('리아', '달못… 할머니가 말한 데가 여기야?'),
      ],
    },
    {
      id: 'notice',
      world: 1,
      x: -1.6,
      y: GROUND,
      label: '알림판 읽기',
      event: 'sign:notice',
      lines: [
        L('', '「알림」 은하댐 수몰 지구 주민께. 칠석 이튿날 새벽에 수문을 닫습니다.'),
        L('', '그 전까지 모두 이주하여 주시기 바랍니다. — 1973년 8월, 군청'),
        L('아리', '…이레 남았어.'),
      ],
    },
  ],
  keepsakes: [
    { id: 'byeoli', world: 1, x: 10.1, y: GROUND, by: 1, how: 'use', label: '별이 쓰다듬기', name: '별이', desc: '달못에 사는 작은 거북이. 등딱지에 별 무늬가 있다.' },
    { id: 'candy', world: 1, x: -6.2, y: GROUND, by: 1, how: 'use', label: '작은 장독 열어 보기', name: '장독 속 알사탕', desc: '엄마 몰래 숨겨 둔 알사탕 세 알. 이사 가기 전에 다 먹어야 한다.' },
    { id: 'photo:moon', world: 0, x: 59, y: 2.6, by: 0, how: 'photo', label: '', name: '보름달 사진', desc: '반달 다리와 물그림자가 만나 보름달이 되었다.', when: (st) => flag(st, 'seokdeung') },
  ],
  diary: [
    { id: 'd1', world: 0, x: 31.2, y: GROUND, date: '1974년 3월', text: '서울로 이사 왔다. 물속 그 아이 이름을 공책 맨 뒷장에 백 번 썼다. 리아. 거꾸로 하면 내 이름.' },
  ],
  goal: { arc: 'moon', when: (st) => flag(st, 'seokdeung'), near: 1.0 },
  moon: 'full',
  dusk: 'sunset',
  triggers: [
    { id: 'meet0', role: 0, when: (c) => near(c, -1, 11), lines: () => [L('리아', '…어? 물에 비친 내가, 혼자서 움직였어?')] },
    { id: 'meet1', role: 1, when: (c) => near(c, -1, 11), lines: () => [L('아리', '…어? 물에 비친 내가, 나를 보고 있어?')] },
    {
      id: 'howto',
      role: 'both',
      when: (c) => near(c, 0, 11),
      lines: (c) => [
        c.solo
          ? L('', '혼자 둘러보는 중이에요. 오른쪽 위 전환 버튼(Tab)으로 1973년의 아리로 바꿀 수 있어요.')
          : L('', '말풍선 버튼(Q)으로 인사해 보세요. 화면을 톡 누르면 그 자리에 빛 표시가 생기고, 상대에게도 보여요.'),
      ],
    },
    { id: 'lantern', role: 0, when: (c) => !lit(c.st, 'lantern') && near(c, 6.5, 10.5), lines: () => [L('리아', '할머니네 정원 등불이다. 켜 볼까?')] },
    { id: 'moonflower', role: 1, when: (c) => !lit(c.st, 'moonflower') && near(c, 4.5, 8.5), lines: () => [L('아리', '달맞이꽃이다. 외할머니 자장가를 불러 주면 핀다고 했는데.')] },
    { id: 'gap0', role: 0, when: (c) => !lit(c.st, 'moonflower') && near(c, 9.8, 11), lines: () => [L('리아', '물이 깊어서 못 건너겠어… 물속 아이 쪽에서 뭔가 해 줄 수 있을까?')] },
    { id: 'gap1', role: 1, when: (c) => !lit(c.st, 'lantern') && near(c, 9.8, 11), lines: () => [L('아리', '여기서 더는 못 가. 물 위 아이가 도와줄 수 있을까?')] },
    { id: 'post0', role: 0, when: (c) => near(c, 19.5, 23), lines: () => [L('리아', '오래된 나무 말뚝이야. 올라서면 가라앉을 것 같아.')] },
    {
      id: 'marbleSeen',
      role: 1,
      when: (c) => near(c, 19.5, 25.5) && marbleUp(c),
      lines: () => [L('아리', '내 유리구슬! 아까 구슬치기하다가 저 바위까지 튀었어. 혼자서는 안 닿아…'), L('아리', '이 말뚝, 물 위 세계까지 이어져 있네.')],
    },
    {
      id: 'lifted',
      role: 1,
      when: (c) => c.gk === 'buoy' && c.gid === 'woodPost' && (c.st.buoys.woodPost ?? 0) > 0.85,
      lines: () => [L('아리', '말뚝이 솟아올랐어! 지금이야!')],
    },
    { id: 'dark1', role: 1, when: (c) => near(c, 27.8, 29.5) && !lit(c.st, 'chorong'), lines: () => [L('아리', '밤이라 늪이 하나도 안 보여. 징검돌이 어디 있더라…')] },
    {
      id: 'dark0',
      role: 0,
      when: (c) => near(c, 26, 31) && !lit(c.st, 'chorong'),
      lines: () => [
        L('리아', '물속 늪에 징검돌이 비쳐 보여! 아리 쪽은 캄캄한가 봐.'),
        L('', '물그림자 속 징검돌을 톡 눌러 알려 주세요. 능력 버튼(F)으로 사진을 찍으면 플래시가 물속까지 닿아요.'),
      ],
    },
    { id: 'chorong', role: 1, when: (c) => near(c, 39.6, 42.5) && !lit(c.st, 'chorong'), lines: () => [L('아리', '서낭당 청사초롱이다. 불을 켜면 물 위 아이한테 길이 생길까?')] },
    { id: 'gap2', role: 0, when: (c) => near(c, 38, 40) && !lit(c.st, 'chorong'), lines: () => [L('리아', '여기도 물이야. 아리가 뭔가 켜 주면 좋겠는데.')] },
    { id: 'seokdeung', role: 0, when: (c) => near(c, 44, 47), lines: () => [L('리아', '저 높은 곳에 오래된 석등이 있어. 구슬이 쏙 들어갈 것 같은데.')] },
    { id: 'stone1', role: 1, when: (c) => near(c, 44, 47), lines: () => [L('아리', '돌 말뚝이야. 이번엔 내가 올라서면 가라앉겠지?')] },
    {
      id: 'arch',
      role: 'both',
      when: (c) => near(c, 54.5, 57),
      lines: (c) => [L(c.role === 0 ? '리아' : '아리', '달맞이 다리… 반달처럼 생겼어. 물에 비치면 보름달이 된대.'), L(c.role === 0 ? '리아' : '아리', '다리 꼭대기에 함께 서 보자.')],
    },
    {
      id: 'archDim',
      role: 'both',
      when: (c) => !flag(c.st, 'seokdeung') && c.gk === 'arc' && Math.abs(c.x - 59) < 1,
      lines: (c) => [L(c.role === 0 ? '리아' : '아리', c.role === 0 ? '석등이 꺼져 있어서 아직 흐릿해.' : '아직 흐릿해… 물 위 석등이 꺼져 있나 봐.')],
    },
  ],
  objective: (c) => {
    const { st } = c;
    const m = item(st, 'marble')!;
    if (c.role === 0) {
      if (!lit(st, 'lantern')) return '정원 등불을 켜서 물속 아이의 길을 열어 주자';
      if (!lit(st, 'moonflower')) return '물을 건너려면 물속 아이의 도움이 필요해';
      if (marbleUp(c)) return '나무 말뚝에 올라서서 물속 아이를 높이 올려 주자';
      if (m.world === 1 && m.mode !== 'placed') return '물속 아이가 뭔가 보내 주려나 봐';
      if (m.world === 0 && m.mode !== 'held' && m.mode !== 'placed') return '떠오른 유리구슬을 주워 오자';
      if (!lit(st, 'chorong')) return '물그림자 속 징검돌을 눌러서 아리에게 알려 주자';
      if (!flag(st, 'seokdeung')) return '돌 말뚝을 타고 올라가 석등에 구슬을 넣자';
      return '달맞이 다리 꼭대기에 함께 서자';
    }
    if (!lit(st, 'moonflower')) return '달맞이꽃에게 노래를 불러 주자';
    if (!lit(st, 'lantern')) return '물을 건너려면 물 위 아이의 도움이 필요해';
    if (marbleUp(c)) return '나무 말뚝에 올라, 물 위 아이가 반대쪽을 눌러 주길 기다리자';
    if (m.holder === 1) return '유리구슬을 물에 떨어뜨려 물 위 아이에게 보내자';
    if (m.world === 1 && m.mode !== 'placed') return '유리구슬을 다시 주워서 물에 떨어뜨리자';
    if (!lit(st, 'chorong')) return '물 위 아이가 알려 주는 곳을 밟아 늪을 건너, 청사초롱을 켜자';
    if (!flag(st, 'seokdeung')) return '돌 말뚝에 올라서서 물 위 아이를 높이 올려 주자';
    return '달맞이 다리 꼭대기에 함께 서자';
  },
};
