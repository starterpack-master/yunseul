/** 0 = 현재(리아, 은하호), 1 = 1973년(아리, 달못 마을) */
export type WorldId = 0 | 1;
export type Role = WorldId;

export const other = (w: WorldId): WorldId => (w === 0 ? 1 : 0);

export interface Rect {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}

export type AnimName = 'idle' | 'walk' | 'jump' | 'fall' | 'sit' | 'act';

/** 무엇 위에 서 있는지 (부표 운반, 안전 지점, 목표 판정에 사용) */
export type GroundKind = 'none' | 'solid' | 'bridge' | 'buoy' | 'arc';

export interface PlayerNetState {
  r: Role;
  x: number;
  y: number;
  vx: number;
  vy: number;
  f: 1 | -1;
  a: AnimName;
  g: GroundKind;
  gid: string;
  hidden: boolean;
  /** 조는 중 / 노래 중 / 사진 찍는 중 */
  sleep?: boolean;
  sing?: boolean;
}

/** 자주 쓰는 퀵 메시지. 퍼즐 전용 메시지는 없고, 위치는 핑으로 알려요. */
export type EmoteKind = 'hi' | 'thanks' | 'ok' | 'nice' | 'wait' | 'come' | 'stand' | 'help';

export const EMOTES: { kind: EmoteKind; label: string }[] = [
  { kind: 'hi', label: '안녕!' },
  { kind: 'thanks', label: '고마워' },
  { kind: 'ok', label: '좋아' },
  { kind: 'nice', label: '잘했어!' },
  { kind: 'wait', label: '기다려' },
  { kind: 'come', label: '이리 와' },
  { kind: 'stand', label: '올라서 줘' },
  { kind: 'help', label: '어떡하지?' },
];

export const ROLE_NAME: Record<Role, string> = { 0: '리아', 1: '아리' };
export const WORLD_NAME: Record<WorldId, string> = { 0: '호숫가', 1: '물속 마을' };

export type ChapterId = 'ch1' | 'ch2' | 'ch3' | 'epilogue';
export const CHAPTER_ORDER: ChapterId[] = ['ch1', 'ch2', 'ch3', 'epilogue'];

/** 캐릭터 꾸미기 */
export interface Look {
  outfit: string;
  hair: string;
  acc: string;
}
