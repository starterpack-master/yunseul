import {
  ALTAR,
  BRIDGES,
  BUOYS,
  ITEMS,
  LIGHTS,
  MIST,
  MOON_BRIDGE,
  SOLIDS,
  buoyTop,
  solidAt,
} from './level';
import { SYMS, other, type GroundKind, type PlayerNetState, type Role, type Sym, type WorldId } from './types';

export type ItemMode = 'ground' | 'held' | 'falling' | 'floating' | 'placed';

export interface ItemState {
  id: string;
  world: WorldId;
  mode: ItemMode;
  x: number;
  y: number;
  vx: number;
  vy: number;
  holder: Role | -1;
}

/** 호스트가 계산해서 상대에게 보내는 공유 상태 */
export interface WorldState {
  round: number;
  lit: Record<string, boolean>;
  buoys: Record<string, number>;
  items: ItemState[];
  symbol: Sym;
  shellSyms: Sym[];
  shellOpen: number;
  shellTimer: number;
  solved: boolean;
  altar: boolean;
  ending: boolean;
}

export type Action =
  | { k: 'light'; id: string }
  | { k: 'pickup'; id: string; r: Role }
  | { k: 'drop'; id: string; r: Role; x: number; y: number; vx: number; vy: number }
  | { k: 'shell'; idx: number }
  | { k: 'altar'; r: Role }
  | { k: 'reset' };

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function createWorldState(round = 1): WorldState {
  const lit: Record<string, boolean> = {};
  for (const l of LIGHTS) lit[l.id] = false;
  const buoys: Record<string, number> = {};
  for (const b of BUOYS) buoys[b.id] = 0;
  return {
    round,
    lit,
    buoys,
    items: ITEMS.map((d) => ({ id: d.id, world: d.world, mode: 'ground', x: d.x, y: d.y, vx: 0, vy: 0, holder: -1 })),
    symbol: SYMS[Math.floor(Math.random() * SYMS.length)],
    shellSyms: shuffle(SYMS),
    shellOpen: -1,
    shellTimer: 0,
    solved: false,
    altar: false,
    ending: false,
  };
}

export function cloneState(s: WorldState): WorldState {
  return {
    ...s,
    lit: { ...s.lit },
    buoys: { ...s.buoys },
    items: s.items.map((i) => ({ ...i })),
    shellSyms: s.shellSyms.slice(),
  };
}

export function bridgeActive(st: WorldState, bridgeId: string): boolean {
  const light = LIGHTS.find((l) => l.bridge === bridgeId);
  return !!light && !!st.lit[light.id];
}

// ---------------------------------------------------------------------------
// 충돌체

export interface Collider {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  oneWay: boolean;
  kind: GroundKind;
  id: string;
}

/** 현재 상태 기준으로 한 세계의 충돌체 목록을 만들어요. buoySink는 화면에 보이는(보간된) 값. */
export function collidersFor(world: WorldId, st: WorldState, buoySink: Record<string, number>): Collider[] {
  const out: Collider[] = [];
  SOLIDS[world].forEach((s, i) => out.push({ ...s, oneWay: false, kind: 'solid', id: `s${i}` }));
  if (world === MIST.world && !st.solved) {
    out.push({ x0: MIST.x0, x1: MIST.x1, y0: MIST.y0, y1: MIST.y1, oneWay: false, kind: 'solid', id: 'mist' });
  }
  for (const b of BRIDGES) {
    if (b.world !== world || !bridgeActive(st, b.id)) continue;
    b.segs.forEach((seg, i) => out.push({ ...seg, oneWay: true, kind: 'bridge', id: `${b.id}:${i}` }));
  }
  for (const b of BUOYS) {
    const top = buoyTop(b, buoySink[b.id] ?? 0, world);
    out.push({ x0: b.x - b.w / 2, x1: b.x + b.w / 2, y0: -0.8, y1: top, oneWay: false, kind: 'buoy', id: b.id });
  }
  return out;
}

// ---------------------------------------------------------------------------
// 호스트 시뮬레이션

export interface SimPlayer {
  role: Role;
  state: PlayerNetState | null;
  present: boolean;
}

export type WorldEvent =
  | { e: 'transfer'; id: string; to: WorldId; x: number }
  | { e: 'land'; id: string };

const ITEM_GRAVITY = 16;

export function stepWorld(st: WorldState, dt: number, players: SimPlayer[]): WorldEvent[] {
  const events: WorldEvent[] = [];

  // 부표: 주인 세계 사람이 올라서 있으면 가라앉아요.
  for (const b of BUOYS) {
    const owner = players.find((p) => p.role === b.owner);
    const standing = !!owner?.present && owner.state?.g === 'buoy' && owner.state.gid === b.id && !owner.state.hidden;
    const target = standing ? 1 : 0;
    const cur = st.buoys[b.id];
    const k = 1 - Math.exp(-dt * (standing ? 2.4 : 1.8));
    let next = cur + (target - cur) * k;
    if (Math.abs(next - target) < 0.002) next = target;
    st.buoys[b.id] = next;
  }

  // 떨어지는 물건
  for (const it of st.items) {
    if (it.mode !== 'falling') continue;
    const prevY = it.y;
    it.vy = Math.max(it.vy - ITEM_GRAVITY * dt, -14);
    const nx = it.x + it.vx * dt;
    if (solidAt(it.world, nx, it.y + 0.05) && !solidAt(it.world, it.x, it.y + 0.05)) {
      it.vx = 0;
    } else {
      it.x = nx;
    }
    it.x = Math.min(63.5, Math.max(0.5, it.x));
    it.y += it.vy * dt;
    // 부표 윗면에 떨어지면 옆으로 미끄러져 물에 빠져요.
    for (const b of BUOYS) {
      const top = buoyTop(b, st.buoys[b.id] ?? 0, it.world);
      const half = b.w / 2 + 0.1;
      if (Math.abs(it.x - b.x) < half && it.y <= top + 0.05 && prevY >= top - 0.15) {
        const dir = it.x >= b.x ? 1 : -1;
        it.x = b.x + dir * (b.w / 2 + 0.25);
        it.vx = dir * 1.2;
        it.y = Math.min(it.y, top);
      }
    }
    for (const s of SOLIDS[it.world]) {
      if (it.x >= s.x0 && it.x <= s.x1 && it.y <= s.y1 && prevY >= s.y1 - 0.08) {
        it.y = s.y1;
        it.mode = 'ground';
        it.vx = 0;
        it.vy = 0;
        events.push({ e: 'land', id: it.id });
        break;
      }
    }
    if (it.mode === 'falling' && it.y < 0) {
      // 달빛 물건은 수면을 건너 반대 세계에 떠올라요.
      const to = other(it.world);
      it.world = to;
      it.vx = 0;
      it.vy = 0;
      // 반대편에서 부표 기둥 속에 갇히지 않게 옆으로 비켜 떠올라요.
      for (const b of BUOYS) {
        if (Math.abs(it.x - b.x) < b.w / 2 + 0.2) it.x = b.x + (it.x >= b.x ? 1 : -1) * (b.w / 2 + 0.3);
      }
      const s = solidAt(to, it.x, 0.1);
      if (s) {
        it.y = s.y1;
        it.mode = 'ground';
      } else {
        it.y = 0.04;
        it.mode = 'floating';
      }
      events.push({ e: 'transfer', id: it.id, to, x: it.x });
    }
  }

  // 틀린 조개는 잠시 뒤 다시 닫혀요.
  if (st.shellTimer > 0) {
    st.shellTimer -= dt;
    if (st.shellTimer <= 0) {
      st.shellTimer = 0;
      if (!st.solved) st.shellOpen = -1;
    }
  }

  // 보름달: 제단에 진주가 있고, 두 사람이 반달 다리 꼭대기에 함께 서면.
  if (!st.ending && st.altar) {
    const onTop = (r: Role) => {
      const p = players.find((q) => q.role === r);
      const s = p?.state;
      return !!p?.present && !!s && !s.hidden && s.g === 'arc' && Math.abs(s.x - MOON_BRIDGE.cx) < 1.0;
    };
    if (onTop(0) && onTop(1)) st.ending = true;
  }

  return events;
}

/** 호스트에서 액션을 적용해요. 적용되면 true */
export function applyAction(st: WorldState, a: Action): boolean {
  switch (a.k) {
    case 'light': {
      if (st.lit[a.id] === undefined || st.lit[a.id]) return false;
      st.lit[a.id] = true;
      return true;
    }
    case 'pickup': {
      const it = st.items.find((i) => i.id === a.id);
      if (!it || it.mode === 'held' || it.mode === 'placed') return false;
      if (st.items.some((i) => i.holder === a.r)) return false;
      it.mode = 'held';
      it.holder = a.r;
      it.world = a.r;
      it.vx = 0;
      it.vy = 0;
      return true;
    }
    case 'drop': {
      const it = st.items.find((i) => i.id === a.id);
      if (!it || it.holder !== a.r) return false;
      it.mode = 'falling';
      it.holder = -1;
      it.world = a.r;
      it.x = a.x;
      it.y = a.y;
      it.vx = a.vx;
      it.vy = a.vy;
      return true;
    }
    case 'shell': {
      if (st.solved || st.shellTimer > 0 || a.idx < 0 || a.idx > 2) return false;
      st.shellOpen = a.idx;
      if (st.shellSyms[a.idx] === st.symbol) {
        st.solved = true;
      } else {
        st.shellTimer = 1.8;
      }
      return true;
    }
    case 'altar': {
      const it = st.items.find((i) => i.id === 'pearl');
      if (!it || it.holder !== a.r || a.r !== ALTAR.world) return false;
      it.mode = 'placed';
      it.holder = -1;
      it.world = ALTAR.world;
      it.x = ALTAR.x;
      it.y = ALTAR.y + 0.95;
      st.altar = true;
      return true;
    }
    case 'reset': {
      Object.assign(st, createWorldState(st.round + 1));
      return true;
    }
  }
}
