import { getChapter, nextChapter } from './chapters';
import type { BuoyDef, ChapterDef } from './chapters/types';
import { other, type ChapterId, type GroundKind, type PlayerNetState, type Role, type WorldId } from './types';

export type ItemMode = 'ground' | 'held' | 'falling' | 'floating' | 'placed' | 'used';

export interface ItemState {
  id: string;
  world: WorldId;
  mode: ItemMode;
  x: number;
  y: number;
  vx: number;
  vy: number;
  holder: Role | -1;
  /** 꽂혀 있는 자리 (socket id) */
  at?: string;
  /** 물에 떠 있은 시간 */
  ft?: number;
}

export type Phase = 'play' | 'outro' | 'done';

/** 호스트가 계산해서 상대에게 보내는 공유 상태 */
export interface WorldState {
  v: 3;
  round: number;
  chapter: ChapterId;
  phase: Phase;
  flags: Record<string, boolean>;
  buoys: Record<string, number>;
  items: ItemState[];
  ready: [boolean, boolean];
  /** 아리의 노래가 남은 시간(초)과 위치 */
  song: number;
  songX: number;
  /** 리아의 사진 플래시가 남은 시간(초) */
  flash: number;
  magpies: string[];
  /** 두 번째 여름(2회차) */
  ng: boolean;
  keeps: string[];
  diary: string[];
  splashes: [number, number];
  /** 장이 시작된 뒤 지난 시간 (호스트 기준) */
  t: number;
}

export type Action =
  | { k: 'light'; id: string; r: Role }
  | { k: 'pickup'; id: string; r: Role }
  | { k: 'drop'; id: string; r: Role; x: number; y: number; vx: number; vy: number }
  | { k: 'place'; id: string; r: Role }
  | { k: 'use'; id: string; r: Role }
  | { k: 'sing'; r: Role; x: number }
  | { k: 'flash'; r: Role; x: number }
  | { k: 'magpie'; id: string; r: Role }
  | { k: 'keep'; id: string; r: Role }
  | { k: 'diary'; id: string; r: Role }
  | { k: 'ready'; r: Role; chapter: ChapterId }
  | { k: 'splash'; r: Role }
  | { k: 'reset'; ng: boolean }
  | { k: 'goto'; chapter: ChapterId };

export function buoyTop(def: BuoyDef, sink: number, world: WorldId): number {
  const d = sink * def.travel;
  return world === def.owner ? def.top[world] - d : def.top[world] + d;
}

function chapterItems(ch: ChapterDef): ItemState[] {
  return ch.items.map((d) => ({ id: d.id, world: d.world, mode: 'ground', x: d.x, y: d.y, vx: 0, vy: 0, holder: -1 }));
}

export function createWorldState(opts: { chapter?: ChapterId; round?: number; ng?: boolean } = {}): WorldState {
  const ch = getChapter(opts.chapter ?? 'ch1');
  const buoys: Record<string, number> = {};
  for (const b of ch.buoys) buoys[b.id] = 0;
  return {
    v: 3,
    round: opts.round ?? 1,
    chapter: ch.id,
    phase: 'play',
    flags: {},
    buoys,
    items: chapterItems(ch),
    ready: [false, false],
    song: 0,
    songX: 0,
    flash: 0,
    magpies: [],
    ng: !!opts.ng,
    keeps: [],
    diary: [],
    splashes: [0, 0],
    t: 0,
  };
}

/** 다음 장으로. 추억·일기장·2회차 여부는 이어 가요. */
export function advanceChapter(st: WorldState): boolean {
  const next = nextChapter(st.chapter);
  if (!next) {
    st.phase = 'done';
    return false;
  }
  const fresh = createWorldState({ chapter: next, round: st.round, ng: st.ng });
  fresh.keeps = st.keeps;
  fresh.diary = st.diary;
  Object.assign(st, fresh);
  return true;
}

export function cloneState(s: WorldState): WorldState {
  return {
    ...s,
    flags: { ...s.flags },
    buoys: { ...s.buoys },
    items: s.items.map((i) => ({ ...i })),
    ready: [s.ready[0], s.ready[1]],
    magpies: s.magpies.slice(),
    keeps: s.keeps.slice(),
    diary: s.diary.slice(),
    splashes: [s.splashes[0], s.splashes[1]],
  };
}

export const litFlag = (id: string) => `lit:${id}`;

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

export interface ArcShape {
  id: string;
  x0: number;
  x1: number;
  top: (x: number) => number | null;
}

export function arcTopFn(a: { kind: 'moon' | 'magpie'; x0: number; x1: number; h: number }): (x: number) => number | null {
  const cx = (a.x0 + a.x1) / 2;
  const half = (a.x1 - a.x0) / 2;
  if (a.kind === 'moon') {
    return (x) => {
      const dx = x - cx;
      if (Math.abs(dx) >= half) return null;
      return Math.sqrt(half * half - dx * dx) * (a.h / half);
    };
  }
  // 오작교: 양 끝은 물가 높이(1.5)에서 시작해 가운데가 가장 높아요.
  return (x) => {
    if (x <= a.x0 || x >= a.x1) return null;
    const t = (x - a.x0) / (a.x1 - a.x0);
    return 1.5 + (a.h - 1.5) * Math.sin(Math.PI * t);
  };
}

export function arcsFor(ch: ChapterDef, st: WorldState): ArcShape[] {
  return ch.arcs.filter((a) => !a.when || a.when(st)).map((a) => ({ id: a.id, x0: a.x0, x1: a.x1, top: arcTopFn(a) }));
}

/** 현재 상태 기준으로 한 세계의 충돌체 목록. buoySink는 화면에 보이는(보간된) 값이에요. */
/** 지금 밟을 수 있는 기둥(그루터기) */
export function activePillars(ch: ChapterDef, world: WorldId, st: WorldState) {
  return ch.pillars.filter((p) => p.world === world && p.solid && (!p.when || p.when(st)));
}

export function collidersFor(ch: ChapterDef, world: WorldId, st: WorldState, buoySink: Record<string, number>): Collider[] {
  const out: Collider[] = [];
  ch.solids[world].forEach((s, i) => out.push({ x0: s.x0, x1: s.x1, y0: s.y0, y1: s.y1, oneWay: false, kind: 'solid', id: `s${i}` }));
  for (const p of activePillars(ch, world, st)) out.push({ x0: p.x - p.w / 2, x1: p.x + p.w / 2, y0: -0.8, y1: p.top, oneWay: false, kind: 'solid', id: `p:${p.id}` });
  for (const b of ch.bridges) {
    if (b.world !== world || !b.when(st)) continue;
    b.segs.forEach((seg, i) => out.push({ ...seg, oneWay: true, kind: 'bridge', id: `${b.id}:${i}` }));
  }
  for (const h of ch.hidden) {
    if (h.world !== world) continue;
    out.push({ x0: h.x - h.w / 2, x1: h.x + h.w / 2, y0: h.top - 0.3, y1: h.top, oneWay: true, kind: 'bridge', id: `stone:${h.id}` });
  }
  for (const b of ch.buoys) {
    const top = buoyTop(b, buoySink[b.id] ?? 0, world);
    out.push({ x0: b.x - b.w / 2, x1: b.x + b.w / 2, y0: -0.8, y1: top, oneWay: false, kind: 'buoy', id: b.id });
  }
  return out;
}

export function solidAt(ch: ChapterDef, world: WorldId, x: number, y: number, st?: WorldState): { x0: number; x1: number; y0: number; y1: number } | null {
  for (const s of ch.solids[world]) if (x >= s.x0 && x <= s.x1 && y >= s.y0 && y <= s.y1) return s;
  if (st) {
    for (const p of activePillars(ch, world, st)) {
      const x0 = p.x - p.w / 2;
      const x1 = p.x + p.w / 2;
      if (x >= x0 && x <= x1 && y >= -0.8 && y <= p.top) return { x0, x1, y0: -0.8, y1: p.top };
    }
  }
  return null;
}

/** 물에 빠졌을 때 돌아갈 자리: x에서 가장 가까운, 지금 밟을 수 있는 땅 위 */
export function nearestSafe(ch: ChapterDef, world: WorldId, st: WorldState, x: number, preferY?: number): { x: number; y: number } {
  const cands: { x0: number; x1: number; y1: number }[] = [...ch.solids[world], ...activePillars(ch, world, st).map((p) => ({ x0: p.x - p.w / 2, x1: p.x + p.w / 2, y1: p.top }))];
  let best: { x: number; y: number } | null = null;
  let bestD = Infinity;
  for (const s of cands) {
    if (s.x1 - s.x0 < 0.5) continue;
    const cx = Math.min(s.x1 - 0.3, Math.max(s.x0 + 0.3, x));
    // 높이가 비슷한 곳을 조금 더 좋아해요 (언덕 위에서 빠지면 언덕으로)
    const d = Math.abs(cx - x) + (preferY !== undefined ? Math.abs(s.y1 - preferY) * 0.3 : 0);
    if (d < bestD) {
      bestD = d;
      best = { x: cx, y: s.y1 };
    }
  }
  return best ?? { x: ch.start[world].x, y: ch.start[world].y };
}

/** 물에 뜬 물건이 떠밀려 갈 자리: 같은 물길의 양 끝 중 걸어서 닿는 낮은 물가 */
function shoreTarget(ch: ChapterDef, world: WorldId, x: number, st: WorldState): number | null {
  const solids = [...ch.solids[world], ...activePillars(ch, world, st).map((p) => ({ x0: p.x - p.w / 2, x1: p.x + p.w / 2, y1: p.top }))];
  let left: { x1: number; y1: number } | null = null;
  let right: { x0: number; y1: number } | null = null;
  for (const s of solids) {
    if (s.x1 <= x + 0.01 && (!left || s.x1 > left.x1)) left = s;
    if (s.x0 >= x - 0.01 && (!right || s.x0 < right.x0)) right = s;
  }
  const low = (y: number) => y <= 1.6;
  const lt = left && low(left.y1) ? left.x1 + 0.35 : null;
  const rt = right && low(right.y1) ? right.x0 - 0.35 : null;
  if (lt !== null && rt !== null) return Math.abs(lt - x) <= Math.abs(rt - x) ? lt : rt;
  return lt ?? rt;
}

/** 이 자리에 발 딛을 땅이 아직 있는지 (사라지는 발판 위에서는 되살아나지 않게) */
export function supported(ch: ChapterDef, world: WorldId, st: WorldState, x: number, y: number): boolean {
  const s = solidAt(ch, world, x, y - 0.05, st);
  return !!s && Math.abs(s.y1 - y) < 0.12;
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
  | { e: 'land'; id: string }
  | { e: 'respawn'; id: string }
  | { e: 'goal' }
  | { e: 'advance'; chapter: ChapterId };

const ITEM_GRAVITY = 16;

export function stepWorld(st: WorldState, dt: number, players: SimPlayer[], solo: boolean): WorldEvent[] {
  const ch = getChapter(st.chapter);
  const events: WorldEvent[] = [];
  st.t += dt;
  const pl = (r: Role) => players.find((p) => p.role === r);

  // 나무 말뚝: 주인 세계 사람이 올라서 있으면 가라앉아요.
  for (const b of ch.buoys) {
    const owner = pl(b.owner);
    const standing = !!owner?.present && owner.state?.g === 'buoy' && owner.state.gid === b.id && !owner.state.hidden;
    const target = standing ? 1 : 0;
    const cur = st.buoys[b.id] ?? 0;
    const k = 1 - Math.exp(-dt * (standing ? 2.4 : 1.8));
    let next = cur + (target - cur) * k;
    if (Math.abs(next - target) < 0.002) next = target;
    st.buoys[b.id] = next;
  }

  // 물에 뜬 물건: 걸어서 닿는 물가 쪽으로 천천히 떠밀려 가요. 오래 아무도 못 주우면 처음 자리로 돌아가요.
  for (const it of st.items) {
    if (it.mode !== 'floating') {
      if (it.ft) it.ft = 0;
      continue;
    }
    it.ft = (it.ft ?? 0) + dt;
    const def = ch.items.find((d) => d.id === it.id);
    if (it.ft > 14 && def) {
      Object.assign(it, { world: def.world, x: def.x, y: def.y, vx: 0, vy: 0, mode: 'ground', ft: 0 });
      events.push({ e: 'respawn', id: it.id });
      continue;
    }
    const target = shoreTarget(ch, it.world, it.x, st);
    if (target !== null && Math.abs(target - it.x) > 0.02) it.x += Math.sign(target - it.x) * Math.min(Math.abs(target - it.x), dt * 1.2);
  }

  // 떨어지는 물건
  for (const it of st.items) {
    if (it.mode !== 'falling') continue;
    const def = ch.items.find((d) => d.id === it.id);
    const prevY = it.y;
    it.vy = Math.max(it.vy - ITEM_GRAVITY * dt, -14);
    const nx = it.x + it.vx * dt;
    if (solidAt(ch, it.world, nx, it.y + 0.05) && !solidAt(ch, it.world, it.x, it.y + 0.05)) it.vx = 0;
    else it.x = nx;
    it.x = Math.min(ch.maxX - 0.5, Math.max(ch.minX + 0.5, it.x));
    it.y += it.vy * dt;
    for (const b of ch.buoys) {
      const top = buoyTop(b, st.buoys[b.id] ?? 0, it.world);
      if (Math.abs(it.x - b.x) < b.w / 2 + 0.1 && it.y <= top + 0.05 && prevY >= top - 0.15) {
        const dir = it.x >= b.x ? 1 : -1;
        it.x = b.x + dir * (b.w / 2 + 0.25);
        it.vx = dir * 1.2;
        it.y = Math.min(it.y, top);
      }
    }
    const landOn = [...ch.solids[it.world], ...activePillars(ch, it.world, st).map((p) => ({ x0: p.x - p.w / 2, x1: p.x + p.w / 2, y1: p.top }))];
    for (const s of landOn) {
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
      if (def && !def.crosses) {
        // 달빛 물건이 아니면 건너가지 못하고 제자리로 돌아와요.
        it.world = def.world;
        it.x = def.x;
        it.y = def.y;
        it.vx = 0;
        it.vy = 0;
        it.mode = 'ground';
        events.push({ e: 'respawn', id: it.id });
        continue;
      }
      const to = other(it.world);
      it.world = to;
      it.vx = 0;
      it.vy = 0;
      for (const b of ch.buoys) {
        if (Math.abs(it.x - b.x) < b.w / 2 + 0.2) it.x = b.x + (it.x >= b.x ? 1 : -1) * (b.w / 2 + 0.3);
      }
      const s = solidAt(ch, to, it.x, 0.1, st);
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

  // 아리의 노래
  if (st.song > 0) st.song = Math.max(0, st.song - dt);
  const ari = pl(1)?.state;
  const singing = st.song > 0 && !!ari && !ari.hidden;
  for (const z of ch.songZones) {
    const inZone = singing && ari!.x >= z.x0 && ari!.x <= z.x1;
    st.flags[z.flag] = inZone;
  }
  if (singing) {
    for (const l of ch.lights) {
      if (l.bySong && l.world === 1 && !st.flags[litFlag(l.id)] && Math.abs(ari!.x - l.x) < 1.6 && Math.abs(ari!.y - l.y) < 1.6) st.flags[litFlag(l.id)] = true;
    }
    for (const m of ch.magpies) {
      if (m.call === 'song' && m.world === 1 && !st.magpies.includes(m.id) && Math.abs(ari!.x - m.x) < 2.4 && Math.abs(ari!.y - m.y) < 3) st.magpies.push(m.id);
    }
  }
  // 잠든 까치: 리아의 사진 플래시가 물 너머까지 닿으면 깨요.
  if (st.flash > 0) {
    const ria = pl(0);
    if (ria?.present && ria.state && !ria.state.hidden) {
      for (const m of ch.magpies) {
        if (m.call === 'flash' && !st.magpies.includes(m.id) && Math.abs(ria.state.x - m.x) < 4.5) st.magpies.push(m.id);
      }
    }
  }
  if (st.flash > 0) st.flash = Math.max(0, st.flash - dt);

  // 두 사람이 함께 보는 장면 (조건이 맞으면 한 번)
  if (st.phase === 'play') {
    const ctx = { st, p: [pl(0)?.present ? pl(0)!.state : null, pl(1)?.present ? pl(1)!.state : null] as [PlayerNetState | null, PlayerNetState | null] };
    for (const sc of ch.scenes) {
      const key = `scene:${sc.id}`;
      if (!st.flags[key] && sc.when(ctx)) st.flags[key] = true;
    }
  }

  // 목표: 두 사람이 다리 꼭대기에 함께 서면 (다리가 없는 장은 조건만)
  if (st.phase === 'play' && ch.goal && ch.goal.when(st)) {
    const arc = ch.goal.arc ? ch.arcs.find((a) => a.id === ch.goal!.arc) : undefined;
    const zone = ch.goal.zone;
    const inZone = (r: Role) => {
      const s = pl(r)?.state;
      return !!zone && !!pl(r)?.present && !!s && !s.hidden && s.x >= zone.x0 && s.x <= zone.x1 && s.g !== 'none';
    };
    if (zone) {
      if (inZone(0) && inZone(1)) {
        st.phase = 'outro';
        st.ready = [false, false];
        events.push({ e: 'goal' });
      }
    } else if (!ch.goal.arc) {
      st.phase = 'outro';
      st.ready = [false, false];
      events.push({ e: 'goal' });
    } else if (arc) {
      const cx = (arc.x0 + arc.x1) / 2;
      const onTop = (r: Role) => {
        const s = pl(r)?.state;
        return !!pl(r)?.present && !!s && !s.hidden && s.g === 'arc' && s.gid === arc.id && Math.abs(s.x - cx) < ch.goal!.near;
      };
      if (onTop(0) && onTop(1)) {
        st.phase = 'outro';
        st.ready = [false, false];
        events.push({ e: 'goal' });
      }
    }
  }

  // 두 사람이 다 읽으면 다음 장으로
  if (st.phase === 'outro' && (solo ? st.ready[0] || st.ready[1] : st.ready[0] && st.ready[1])) {
    if (advanceChapter(st)) events.push({ e: 'advance', chapter: st.chapter });
  }
  return events;
}

/** 호스트에서 액션을 적용해요. 적용되면 true */
export function applyAction(st: WorldState, a: Action): boolean {
  const ch = getChapter(st.chapter);
  switch (a.k) {
    case 'light': {
      const l = ch.lights.find((x) => x.id === a.id);
      if (!l || l.world !== a.r || st.flags[litFlag(l.id)]) return false;
      st.flags[litFlag(l.id)] = true;
      return true;
    }
    case 'pickup': {
      const it = st.items.find((i) => i.id === a.id);
      if (!it || it.mode === 'held' || it.mode === 'used') return false;
      if (st.items.some((i) => i.holder === a.r && i.mode === 'held')) return false;
      if (it.mode === 'placed') {
        // 뗄 수 있는 자리(초롱걸이)에서만 다시 들 수 있어요.
        const s = ch.sockets.find((x) => x.id === it.at);
        if (!s || !s.removable || s.world !== a.r) return false;
        st.flags[s.flag] = false;
        it.at = undefined;
      }
      it.mode = 'held';
      it.holder = a.r;
      it.world = a.r;
      it.vx = 0;
      it.vy = 0;
      return true;
    }
    case 'drop': {
      const it = st.items.find((i) => i.id === a.id);
      if (!it || it.holder !== a.r || it.mode !== 'held') return false;
      it.mode = 'falling';
      it.holder = -1;
      it.world = a.r;
      it.x = a.x;
      it.y = a.y;
      it.vx = a.vx;
      it.vy = a.vy;
      return true;
    }
    case 'place': {
      const s = ch.sockets.find((x) => x.id === a.id);
      if (!s || s.world !== a.r || st.flags[s.flag]) return false;
      const it = st.items.find((i) => i.holder === a.r && i.mode === 'held' && ch.items.find((d) => d.id === i.id)?.kind === s.accepts);
      if (!it) return false;
      it.mode = 'placed';
      it.holder = -1;
      it.world = s.world;
      it.x = s.x;
      it.y = s.y;
      it.at = s.id;
      st.flags[s.flag] = true;
      return true;
    }
    case 'use': {
      const u = ch.uses.find((x) => x.id === a.id);
      if (!u || u.world !== a.r || st.flags[u.flag]) return false;
      if (u.when && !u.when(st)) return false;
      if (u.needs) {
        const it = st.items.find((i) => i.holder === a.r && i.mode === 'held' && ch.items.find((d) => d.id === i.id)?.kind === u.needs);
        if (!it) return false;
        it.mode = 'used';
        it.holder = -1;
      }
      st.flags[u.flag] = true;
      if (u.keep && !st.keeps.includes(u.keep)) st.keeps.push(u.keep);
      return true;
    }
    case 'sing': {
      if (a.r !== 1) return false;
      st.song = 0.45;
      st.songX = a.x;
      return true;
    }
    case 'flash': {
      if (a.r !== 0 || st.flash > 0.4) return false;
      st.flash = 1.6;
      return true;
    }
    case 'magpie': {
      const m = ch.magpies.find((x) => x.id === a.id);
      if (!m || m.world !== a.r || st.magpies.includes(m.id)) return false;
      if (m.call !== 'use' && m.call !== 'give') return false;
      if (m.call === 'give') {
        const it = st.items.find((i) => i.holder === a.r && i.mode === 'held' && ch.items.find((d) => d.id === i.id)?.kind === m.needs);
        if (!it) return false;
        it.mode = 'used';
        it.holder = -1;
      }
      st.magpies.push(m.id);
      return true;
    }
    case 'keep': {
      if (st.keeps.includes(a.id)) return false;
      st.keeps.push(a.id);
      return true;
    }
    case 'diary': {
      if (!st.ng || st.diary.includes(a.id)) return false;
      st.diary.push(a.id);
      return true;
    }
    case 'ready': {
      if (st.phase !== 'outro' || a.chapter !== st.chapter) return false;
      st.ready[a.r] = true;
      return true;
    }
    case 'splash': {
      st.splashes[a.r]++;
      return true;
    }
    case 'reset': {
      const round = st.round + 1;
      Object.assign(st, createWorldState({ chapter: 'ch1', round, ng: a.ng }));
      return true;
    }
    case 'goto': {
      const round = st.round + 1;
      const keeps = st.keeps;
      const diary = st.diary;
      Object.assign(st, createWorldState({ chapter: a.chapter, round, ng: st.ng }));
      st.keeps = keeps;
      st.diary = diary;
      return true;
    }
  }
}
