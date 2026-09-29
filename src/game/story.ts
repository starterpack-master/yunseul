import { BUOYS, ITEMS, MOON_BRIDGE } from './level';
import type { Player } from './player';
import { ROLE_NAME, SYM_NAME, type Role } from './types';
import type { WorldState } from './world';

export interface Line {
  who: string; // 화자 이름 ('' 이면 안내문)
  text: string;
}

export interface StoryCtx {
  role: Role;
  st: WorldState;
  me: Player;
  partner: Player;
  partnerPresent: boolean;
  solo: boolean;
}

type Trigger = { id: string; role: Role | 'both'; when: (c: StoryCtx) => boolean; lines: (c: StoryCtx) => Line[] };

const near = (p: Player, x0: number, x1: number) => !p.hidden && p.body.x >= x0 && p.body.x <= x1;
const pearl = (st: WorldState) => st.items.find((i) => i.id === 'pearl')!;
const pearlLedge = ITEMS[0];

const TRIGGERS: Trigger[] = [
  {
    id: 'intro0',
    role: 0,
    when: () => true,
    lines: (c) => [
      { who: '리아', text: '오늘도 노을이 참 예쁘다. 호수에 윤슬이 반짝여.' },
      { who: '리아', text: '…어? 물에 비친 내가, 혼자서 움직였어?' },
      ...(c.solo ? [{ who: '', text: '혼자 둘러보는 중이에요. 오른쪽 위 전환 버튼(Tab)으로 물 아래 아리로 바꿀 수 있어요.' }] : []),
    ],
  },
  {
    id: 'intro1',
    role: 1,
    when: () => true,
    lines: () => [
      { who: '아리', text: '별빛 호수는 오늘도 고요해.' },
      { who: '아리', text: '…어? 물에 비친 내가, 나를 보고 있어?' },
    ],
  },
  {
    id: 'hello',
    role: 'both',
    when: (c) => c.partnerPresent && !c.solo,
    lines: () => [{ who: '', text: '수면 너머의 아이에게 인사해 보세요. 말풍선 버튼(Q)으로 마음을 전할 수 있어요.' }],
  },
  { id: 'lantern', role: 0, when: (c) => !c.st.lit.lantern && near(c.me, 6.5, 10.5), lines: () => [{ who: '리아', text: '나무 등불이다. 불을 켜 볼까?' }] },
  { id: 'moonflower', role: 1, when: (c) => !c.st.lit.moonflower && near(c.me, 4.5, 8.5), lines: () => [{ who: '아리', text: '잠든 달꽃이야. 살짝 깨워 볼까?' }] },
  {
    id: 'gap0',
    role: 0,
    when: (c) => !c.st.lit.moonflower && near(c.me, 9.8, 11),
    lines: () => [{ who: '리아', text: '물이 깊어서 건널 수 없어… 물속의 아이 쪽에서 뭔가 해 줄 수 있을까?' }],
  },
  {
    id: 'gap1',
    role: 1,
    when: (c) => !c.st.lit.lantern && near(c.me, 9.8, 11),
    lines: () => [{ who: '아리', text: '여기서 더는 못 가. 수면 너머의 아이가 도와줄 수 있을까?' }],
  },
  { id: 'wood0', role: 0, when: (c) => near(c.me, 19.5, 23), lines: () => [{ who: '리아', text: '나무 부표야. 내가 올라서면 가라앉을 것 같아.' }] },
  {
    id: 'pearlSeen',
    role: 1,
    when: (c) => near(c.me, 19.5, 25.5) && pearl(c.st).mode === 'ground' && pearl(c.st).world === 1,
    lines: () => [
      { who: '아리', text: '저 높은 바위 위에 달진주가 있어. 혼자서는 닿지 않아…' },
      { who: '아리', text: '나무 기둥이 물 위 세계까지 이어져 있네.' },
    ],
  },
  {
    id: 'lifted',
    role: 1,
    when: (c) => c.me.body.gk === 'buoy' && c.me.body.gid === BUOYS[0].id && c.st.buoys[BUOYS[0].id] > 0.85,
    lines: () => [{ who: '아리', text: '기둥이 솟아올랐어! 지금이야!' }],
  },
  {
    id: 'mist',
    role: 0,
    when: (c) => !c.st.solved && near(c.me, 38.5, 40.5),
    lines: () => [{ who: '리아', text: '안개 벽이 길을 막고 있어. 돌판에 뭔가 새겨져 있던데…' }],
  },
  {
    id: 'shells',
    role: 1,
    when: (c) => !c.st.solved && near(c.me, 33.5, 39.5),
    lines: () => [{ who: '아리', text: '조개 세 개… 무늬가 다 달라. 물 위 아이는 뭔가 알고 있을까?' }],
  },
  {
    id: 'altarSeen',
    role: 0,
    when: (c) => near(c.me, 44.5, 48),
    lines: () => [{ who: '리아', text: '저 높은 제단… 진주를 올려놓으라는 걸까?' }],
  },
  { id: 'crystal1', role: 1, when: (c) => near(c.me, 44.5, 47.5), lines: () => [{ who: '아리', text: '수정 기둥이야. 이번엔 내가 올라서면 가라앉을 것 같아.' }] },
  {
    id: 'moonBridge',
    role: 'both',
    when: (c) => near(c.me, 54.5, 57),
    lines: (c) => [
      { who: ROLE_NAME[c.role], text: '반달 다리… 물에 비치면 보름달처럼 보여.' },
      { who: ROLE_NAME[c.role], text: '다리 꼭대기에 함께 서 보자.' },
    ],
  },
  {
    id: 'moonNoPearl',
    role: 'both',
    when: (c) => !c.st.altar && c.me.body.gk === 'arc' && Math.abs(c.me.body.x - MOON_BRIDGE.cx) < 1,
    lines: (c) => [{ who: ROLE_NAME[c.role], text: c.role === 0 ? '달이 아직 잠들어 있어… 제단에 달진주를 올려야 할 것 같아.' : '아직 달이 잠들어 있어… 물 위 제단이 비어 있나 봐.' }],
  },
];

/** 이벤트(상태 변화)에 붙는 대사. 각자 자기 시점으로 봐요. */
export function eventLines(ev: string, role: Role, st: WorldState): Line[] {
  const R = ROLE_NAME[role];
  switch (ev) {
    case 'lit:lantern':
      return role === 0 ? [{ who: R, text: '물속에… 별빛이 다리처럼 이어졌어!' }] : [{ who: R, text: '하늘에서 별빛이 내려와 다리가 됐어! 물 위 아이가 해 준 걸까?' }];
    case 'lit:moonflower':
      return role === 0 ? [{ who: R, text: '연잎이 떠올랐어! 물속의 아이가 도와준 거야.' }] : [{ who: R, text: '달꽃이 피었어. 수면 너머에 연잎이 떠오르는 게 보여.' }];
    case 'pickup:1':
      return role === 1 ? [{ who: R, text: '달진주야! 이건 물을 건널 수 있을 것 같아. 물에 떨어뜨려 볼까?' }] : [];
    case 'transfer:0':
      return role === 0 ? [{ who: R, text: '물속에서 진주가 떠올랐어! 물속의 아이가 보내 준 거야.' }] : [{ who: R, text: '진주가 수면 너머로 건너갔어.' }];
    case 'transfer:1':
      return role === 1 ? [{ who: R, text: '물 위에서 진주가 내려왔어.' }] : [{ who: R, text: '진주가 물속으로 가라앉았어…' }];
    case 'tablet':
      return role === 0
        ? [
            { who: R, text: `돌판에 ${SYM_NAME[st.symbol]} 문양이 새겨져 있어.` },
            { who: '', text: `물속의 아이에게 알려 주세요. 말풍선 버튼(Q) → '${SYM_NAME[st.symbol]}'` },
          ]
        : [];
    case 'wrong':
      return role === 1 ? [{ who: R, text: '뽀글… 이 조개가 아닌가 봐.' }] : [{ who: R, text: '물속에서 조개가 닫히는 게 보여. 다른 무늬인가 봐.' }];
    case 'solved':
      return role === 0 ? [{ who: R, text: '안개가 걷혔어! 고마워.' }] : [{ who: R, text: '조개가 반짝여. 수면 너머 안개가 걷히는 게 보여!' }];
    case 'altar':
      return role === 0 ? [{ who: R, text: '진주를 올려놓았어. 반달 다리가 은은하게 빛나.' }] : [{ who: R, text: '물 위에서 은은한 빛이 번져.' }];
    case 'ending':
      return [
        { who: role === 0 ? '리아' : '아리', text: role === 0 ? '너는… 내 그림자가 아니었구나.' : '너도… 내 거울 속 모습이 아니었어.' },
        { who: role === 0 ? '아리' : '리아', text: role === 0 ? '너도… 내 거울 속 모습이 아니었어.' : '너는… 내 그림자가 아니었구나.' },
        { who: '리아 · 아리', text: '우리는 서로의 윤슬.' },
      ];
  }
  return [];
}

export class Story {
  private fired = new Set<string>();
  private queue: Line[] = [];
  private startDelay = 1.2;

  reset() {
    this.fired.clear();
    this.queue = [];
    this.startDelay = 1.2;
  }

  /** 시점 전환(혼자 모드) 시 새 시점의 대사를 위해 */
  clearQueue() {
    this.queue = [];
  }

  push(lines: Line[]) {
    this.queue.push(...lines);
  }

  update(dt: number, c: StoryCtx) {
    if (this.startDelay > 0) {
      this.startDelay -= dt;
      return;
    }
    for (const t of TRIGGERS) {
      if (t.role !== 'both' && t.role !== c.role) continue;
      const key = `${t.id}:${c.role}`;
      if (this.fired.has(key)) continue;
      if (t.when(c)) {
        this.fired.add(key);
        this.queue.push(...t.lines(c));
      }
    }
  }

  next(): Line | undefined {
    return this.queue.shift();
  }

  get pending(): number {
    return this.queue.length;
  }
}

/** 지금 할 일 (목표 안내) */
export function objective(c: StoryCtx): string {
  const { st, role } = c;
  const p = pearl(st);
  if (st.ending) return '보름달이 떴어요';
  if (role === 0) {
    if (!st.lit.lantern) return '등불을 켜서 물속 아이의 길을 열어 주자';
    if (!st.lit.moonflower) return '건너편으로 가려면… 물속 아이에게 도움을 청해 보자';
    if (p.world === 1 && p.mode !== 'held' && Math.abs(p.x - pearlLedge.x) < 1.2 && p.y > 3) return '나무 부표에 올라서서 물속 아이를 높이 올려 주자';
    if (p.holder === 1 || (p.world === 1 && p.mode !== 'placed')) return '물속 아이가 진주를 보내 주길 기다리자';
    if (p.world === 0 && (p.mode === 'floating' || p.mode === 'ground' || p.mode === 'falling')) return '떠오른 달진주를 주워 오자';
    if (!st.solved) return '돌판의 문양을 물속 아이에게 알려 주자';
    if (!st.altar) return '수정 부표를 타고 높은 제단에 진주를 올리자';
    return '반달 다리 꼭대기에 함께 서자';
  }
  if (!st.lit.moonflower) return '달꽃을 깨워서 물 위 아이의 길을 열어 주자';
  if (!st.lit.lantern) return '건너편으로 가려면… 물 위 아이에게 도움을 청해 보자';
  if (p.world === 1 && p.mode !== 'held' && Math.abs(p.x - pearlLedge.x) < 1.2 && p.y > 3) return '나무 부표에 올라, 물 위 아이가 기둥을 눌러 주길 기다리자';
  if (p.holder === 1) return '달진주를 물에 떨어뜨려 물 위 아이에게 보내자';
  if (p.world === 1 && p.mode !== 'placed') return '달진주를 다시 주워서 물에 떨어뜨리자';
  if (!st.solved) return '물 위 아이가 알려 준 문양의 조개를 열자';
  if (!st.altar) return '수정 부표에 올라서서 물 위 아이를 제단까지 올려 주자';
  return '반달 다리 꼭대기에 함께 서자';
}
