/** 0 = 물 위(리아, 노을 마을), 1 = 물 아래(아리, 별그림자 마을) */
export type WorldId = 0 | 1;
export type Role = WorldId;

export const other = (w: WorldId): WorldId => (w === 0 ? 1 : 0);

export interface Rect {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}

export type Sym = 'moon' | 'star' | 'flower';
export const SYMS: Sym[] = ['moon', 'star', 'flower'];
export const SYM_EMOJI: Record<Sym, string> = { moon: '🌙', star: '⭐', flower: '🌸' };
export const SYM_NAME: Record<Sym, string> = { moon: '달', star: '별', flower: '꽃' };

export type AnimName = 'idle' | 'walk' | 'jump' | 'fall';

/** 무엇 위에 서 있는지 (부표 운반, 안전 지점 기록, 엔딩 판정에 사용) */
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
}

export type EmoteKind = 'hi' | 'heart' | 'here' | 'what' | 'wait' | 'moon' | 'star' | 'flower';

export const EMOTES: { kind: EmoteKind; icon: string; label: string }[] = [
  { kind: 'hi', icon: '👋', label: '안녕' },
  { kind: 'heart', icon: '💗', label: '고마워' },
  { kind: 'here', icon: '❗', label: '여기!' },
  { kind: 'what', icon: '❓', label: '뭐지?' },
  { kind: 'wait', icon: '⏳', label: '기다려' },
  { kind: 'moon', icon: '🌙', label: '달' },
  { kind: 'star', icon: '⭐', label: '별' },
  { kind: 'flower', icon: '🌸', label: '꽃' },
];

export const ROLE_NAME: Record<Role, string> = { 0: '리아', 1: '아리' };
export const WORLD_NAME: Record<WorldId, string> = { 0: '물 위', 1: '물 아래' };
