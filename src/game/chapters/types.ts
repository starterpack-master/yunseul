import type { ChapterId, Rect, Role, WorldId } from '../types';
import type { WorldState } from '../world';

/** 조건: 공유 상태를 보고 참/거짓 */
export type Cond = (st: WorldState) => boolean;

export type SolidKind = 'ground' | 'ledge' | 'deck' | 'island';
export interface SolidDef extends Rect {
  kind: SolidKind;
}

/** 켜면 flag가 서요. 보통 반대 세계에 다리가 생겨요. */
export interface LightDef {
  id: string;
  world: WorldId;
  kind: 'lantern' | 'moonflower' | 'streetlamp' | 'chorong';
  x: number;
  y: number;
  label: string;
  /** 아리의 노래로만 켤 수 있어요 */
  bySong?: boolean;
}

export type BridgeKind = 'star' | 'lily' | 'firefly' | 'branch';
/** 조건이 참일 때만 밟을 수 있는(위에서만) 발판 묶음 */
export interface BridgeDef {
  id: string;
  world: WorldId;
  kind: BridgeKind;
  segs: Rect[];
  when: Cond;
}

/** 수면을 관통하는 나무 말뚝. owner가 올라서면 owner 쪽은 가라앉고 반대쪽은 솟아요. */
export interface BuoyDef {
  id: string;
  owner: WorldId;
  x: number;
  w: number;
  top: Record<WorldId, number>;
  travel: number;
  look: 'wood' | 'stone';
}

export type ItemKind = 'marble' | 'bucket';
export interface ItemDef {
  id: string;
  kind: ItemKind;
  world: WorldId;
  x: number;
  y: number;
  /** 물에 떨어지면 다른 여름으로 건너가요 (달빛 물건) */
  crosses: boolean;
  name: string;
}

/** 물건을 넣는 자리 (석등 등) */
export interface SocketDef {
  id: string;
  world: WorldId;
  x: number;
  y: number;
  accepts: ItemKind;
  flag: string;
  label: string;
  look: 'seokdeung' | 'sapling';
}

/** 누르면 flag를 세우는 일반 상호작용 (물 주기, 묻기, 파기, 라디오…) */
export interface UseDef {
  id: string;
  world: WorldId;
  x: number;
  y: number;
  range?: number;
  label: string;
  flag: string;
  when?: Cond;
  /** 이 물건을 들고 있어야 해요 (쓰고 나면 사라져요) */
  needs?: ItemKind;
  by?: Role;
  sfx?: string;
  /** 일어난 일을 알리는 이벤트 이름 (대사) */
  event?: string;
  keep?: string;
  /** 그림 (없으면 보이지 않는 자리) */
  look?: 'dig' | 'sapling';
}

/** 걸을 수 있는 곡선 다리 (달맞이 다리, 오작교) */
export interface ArcDef {
  id: string;
  kind: 'moon' | 'magpie';
  x0: number;
  x1: number;
  /** 가장 높은 곳 높이 */
  h: number;
  when?: Cond;
}

/** 어둠 속 징검돌: 1973년 쪽에서는 안 보이고, 현재 쪽 물그림자에는 보여요. */
export interface HiddenStoneDef {
  id: string;
  world: WorldId;
  x: number;
  w: number;
  top: number;
}

export interface DarkZoneDef {
  world: WorldId;
  x0: number;
  x1: number;
}

/** 이 구역에서 아리가 노래하면 flag가 켜져 있어요 */
export interface SongZoneDef {
  id: string;
  world: WorldId;
  x0: number;
  x1: number;
  flag: string;
}

export interface MagpieDef {
  id: string;
  world: WorldId;
  x: number;
  y: number;
  /** 리아: 다가가서 부르기 / 아리: 옆에서 노래 */
  call: 'use' | 'song';
}

export type PropKind =
  | 'grandmaHouse'
  | 'ariHouse'
  | 'villageHouse'
  | 'jars'
  | 'well'
  | 'shrine'
  | 'lakeSign'
  | 'noticeBoard'
  | 'mailbox'
  | 'bench'
  | 'bigTree'
  | 'pole'
  | 'reeds'
  | 'bundles'
  | 'radio'
  | 'windchime'
  | 'boat';
export interface PropDef {
  kind: PropKind;
  world: WorldId;
  x: number;
  y: number;
  z?: number;
  flip?: boolean;
  scale?: number;
  when?: Cond;
}

export type NpcKind = 'grandma' | 'mom' | 'turtle' | 'oldTurtle' | 'fish';
export interface NpcDef {
  id: string;
  kind: NpcKind;
  world: WorldId;
  x: number;
  y: number;
  flip?: boolean;
  pose?: 'sit' | 'stand' | 'sleep';
  /** 말 걸기 (없으면 말 못 걸어요) */
  talk?: (st: WorldState, role: Role) => { who: string; text: string }[];
  label?: string;
  when?: Cond;
}

export interface SignDef {
  id: string;
  world: WorldId;
  x: number;
  y: number;
  label: string;
  lines: { who: string; text: string }[];
  event?: string;
  /** 살펴볼 때 나는 소리 (기본은 UI 소리) */
  sfx?: 'radio' | 'chime';
}

/** 숨은 추억 (앨범에 모여요) */
export interface KeepDef {
  id: string;
  world: WorldId;
  x: number;
  y: number;
  by: Role | 'any';
  how: 'use' | 'photo';
  label: string;
  name: string;
  desc: string;
  when?: Cond;
}

/** 두 번째 여름에만 보이는 할머니의 일기장 */
export interface DiaryDef {
  id: string;
  world: WorldId;
  x: number;
  y: number;
  date: string;
  text: string;
}

/** 장을 끝내는 조건: 두 사람이 다리(arc) 꼭대기에 함께 서거나, when이 참이 되면 */
export interface GoalDef {
  arc?: string;
  when: Cond;
  near: number;
}

export interface TriggerDef {
  id: string;
  role: Role | 'both';
  when: (c: StoryCtx) => boolean;
  lines: (c: StoryCtx) => { who: string; text: string }[];
}

export interface StoryCtx {
  role: Role;
  st: WorldState;
  x: number;
  y: number;
  hidden: boolean;
  gk: string;
  gid: string;
  holding: string | null;
  partnerPresent: boolean;
  partnerX: number;
  solo: boolean;
  ng: boolean;
}

export interface ChapterDef {
  id: ChapterId;
  no: string;
  title: string;
  minX: number;
  maxX: number;
  /** 이야기(컷신)가 시작되는 자리 */
  start: Record<WorldId, { x: number; y: number }>;
  solids: Record<WorldId, SolidDef[]>;
  lights: LightDef[];
  bridges: BridgeDef[];
  buoys: BuoyDef[];
  items: ItemDef[];
  sockets: SocketDef[];
  uses: UseDef[];
  arcs: ArcDef[];
  hidden: HiddenStoneDef[];
  dark: DarkZoneDef[];
  songZones: SongZoneDef[];
  magpies: MagpieDef[];
  props: PropDef[];
  npcs: NpcDef[];
  signs: SignDef[];
  keepsakes: KeepDef[];
  diary: DiaryDef[];
  goal: GoalDef | null;
  triggers: TriggerDef[];
  objective: (c: StoryCtx) => string;
  /** 1973년의 달 모양 (칠석은 반달) */
  moon: 'full' | 'half';
  /** 현재 쪽 하늘 (해 질 녘 / 늦은 저녁) */
  dusk: 'sunset' | 'late';
}
