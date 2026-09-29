import type { Step } from '../scenes';
import type { ChapterId, PlayerNetState, Rect, Role, WorldId } from '../types';
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

export type ItemKind = 'marble' | 'bucket' | 'lamp' | 'stake' | 'coin';
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

/** 물건을 넣는 자리 (석등, 초롱걸이, 울타리 빈자리) */
export interface SocketDef {
  id: string;
  world: WorldId;
  x: number;
  y: number;
  accepts: ItemKind;
  flag: string;
  label: string;
  look: 'seokdeung' | 'hook' | 'fence';
  /** 다시 뗄 수 있어요 (초롱걸이) */
  removable?: boolean;
  /** 뗄 때 버튼 이름 */
  pickLabel?: string;
}

/**
 * 움직이지 않는 기둥: 지금 호수 위로 삐죽 나온 그루터기, 1973년의 울타리 말뚝.
 * solid면 밟을 수 있고, when이 있으면 조건이 참일 때만 있어요 (아리가 말뚝을 박으면 50년 뒤에도 남아요).
 */
export interface PillarDef {
  id: string;
  world: WorldId;
  x: number;
  w: number;
  top: number;
  look: 'stump' | 'fencePost';
  solid: boolean;
  when?: Cond;
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
  /**
   * use: 다가가서 부르기 / song: 옆에서 노래 / give: 물건을 건네면 와요 / flash: 잠든 까치를 리아의 플래시로 깨워요
   */
  call: 'use' | 'song' | 'give' | 'flash';
  needs?: ItemKind;
  label?: string;
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
  | 'boat'
  | 'jangseung';
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
  talk?: (st: WorldState, role: Role) => Line[];
  label?: string;
  when?: Cond;
}

export interface SignDef {
  id: string;
  world: WorldId;
  x: number;
  y: number;
  label: string;
  lines: Line[];
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

/**
 * 장을 끝내는 조건 (when이 참이고)
 * - arc: 두 사람이 다리 꼭대기에 함께 서면
 * - zone: 두 사람이 이 구역 안에 함께 있으면
 * - 둘 다 없으면 when만으로
 */
export interface GoalDef {
  arc?: string;
  zone?: { x0: number; x1: number };
  when: Cond;
  near: number;
}

export interface Line {
  who: string;
  text: string;
  think?: boolean;
}

export interface TriggerDef {
  id: string;
  role: Role | 'both';
  when: (c: StoryCtx) => boolean;
  lines: (c: StoryCtx) => Line[];
}

/** 막혔을 때 도와주는 말: 한동안(after초) 아무 진전이 없고 when이 참이면 한 번 */
export interface HintDef {
  id: string;
  role: Role | 'both';
  after: number;
  when: (c: StoryCtx) => boolean;
  lines: (c: StoryCtx) => Line[];
}

export interface SceneCtx {
  st: WorldState;
  p: [PlayerNetState | null, PlayerNetState | null];
}

/** 장 중간에 두 사람이 함께 보는 장면 (호스트가 조건을 보고 열어요) */
export interface SceneDef {
  id: string;
  when: (c: SceneCtx) => boolean;
  steps: (ng: boolean) => Step[];
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
  pillars: PillarDef[];
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
  hints: HintDef[];
  scenes: SceneDef[];
  objective: (c: StoryCtx) => string;
  /** 1973년의 달 모양 (칠석은 반달) */
  moon: 'full' | 'half';
  /** 현재 쪽 하늘 (해 질 녘 / 늦은 저녁) */
  dusk: 'sunset' | 'late';
}
