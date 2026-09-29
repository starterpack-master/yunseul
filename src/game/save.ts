import { CHAPTER_ORDER, type ChapterId, type Look, type Role } from './types';

/** 기기에 저장하는 진행 기록 (계정 없음) */
export interface SaveData {
  v: 1;
  clears: number;
  trueEnd: boolean;
  reached: ChapterId;
  keeps: string[];
  diary: string[];
  eggs: string[];
  photos: { id: string; url: string; t: number; label: string }[];
  looks: Record<Role, Look>;
  soloChapter: ChapterId;
}

const KEY = 'nsm:save:v1';

const DEFAULT: SaveData = {
  v: 1,
  clears: 0,
  trueEnd: false,
  reached: 'ch1',
  keeps: [],
  diary: [],
  eggs: [],
  photos: [],
  looks: { 0: { outfit: 'dress', hair: 'pink', acc: 'none' }, 1: { outfit: 'blouse', hair: 'lavender', acc: 'none' } },
  soloChapter: 'ch1',
};

let cache: SaveData | null = null;

export function loadSave(): SaveData {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(KEY);
    const d = raw ? (JSON.parse(raw) as Partial<SaveData>) : {};
    cache = { ...structuredClone(DEFAULT), ...d, looks: { ...DEFAULT.looks, ...(d.looks ?? {}) } } as SaveData;
  } catch {
    cache = structuredClone(DEFAULT);
  }
  return cache;
}

export function writeSave(mut?: (s: SaveData) => void) {
  const s = loadSave();
  mut?.(s);
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    // 사진이 너무 많으면 오래된 것부터 지우고 다시 시도해요.
    s.photos = s.photos.slice(-6);
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch {
      /* 저장 공간 없음 */
    }
  }
}

export function reachChapter(ch: ChapterId) {
  writeSave((s) => {
    if (CHAPTER_ORDER.indexOf(ch) > CHAPTER_ORDER.indexOf(s.reached)) s.reached = ch;
  });
}

const reachedAt = (s: SaveData, ch: ChapterId) => CHAPTER_ORDER.indexOf(s.reached) >= CHAPTER_ORDER.indexOf(ch) || s.clears > 0;

// ---------------------------------------------------------------------------
// 옷장

export interface WardrobeOption {
  id: string;
  name: string;
  unlocked: (s: SaveData) => boolean;
  hint: string;
}

const always = () => true;

export const OUTFITS: Record<Role, WardrobeOption[]> = {
  0: [
    { id: 'dress', name: '여름 원피스', unlocked: always, hint: '' },
    { id: 'overalls', name: '멜빵 반바지', unlocked: always, hint: '' },
    { id: 'raincoat', name: '노란 우비', unlocked: (s) => reachedAt(s, 'ch2'), hint: '1장을 끝내면 열려요' },
    { id: 'pajama', name: '줄무늬 잠옷', unlocked: (s) => reachedAt(s, 'ch3'), hint: '2장을 끝내면 열려요' },
    { id: 'hanbok', name: '여름 한복', unlocked: (s) => s.clears > 0, hint: '엔딩을 보면 열려요' },
  ],
  1: [
    { id: 'blouse', name: '블라우스와 멜빵치마', unlocked: always, hint: '' },
    { id: 'onepiece', name: '땡땡이 원피스', unlocked: always, hint: '' },
    { id: 'school', name: '옛날 교복', unlocked: (s) => reachedAt(s, 'ch2'), hint: '1장을 끝내면 열려요' },
    { id: 'pajama', name: '무명 잠옷', unlocked: (s) => reachedAt(s, 'ch3'), hint: '2장을 끝내면 열려요' },
    { id: 'hanbok', name: '여름 한복', unlocked: (s) => s.clears > 0, hint: '엔딩을 보면 열려요' },
  ],
};

export const HAIRS: Record<Role, WardrobeOption[]> = {
  0: [
    { id: 'pink', name: '벚꽃 분홍', unlocked: always, hint: '' },
    { id: 'brown', name: '코코아', unlocked: always, hint: '' },
    { id: 'sky', name: '하늘', unlocked: (s) => s.keeps.length >= 3, hint: '추억을 3개 모으면 열려요' },
    { id: 'mint', name: '민트', unlocked: (s) => s.clears > 0, hint: '엔딩을 보면 열려요' },
  ],
  1: [
    { id: 'lavender', name: '라벤더', unlocked: always, hint: '' },
    { id: 'black', name: '먹색', unlocked: always, hint: '' },
    { id: 'chestnut', name: '밤색', unlocked: (s) => s.keeps.length >= 3, hint: '추억을 3개 모으면 열려요' },
    { id: 'peach', name: '복숭아', unlocked: (s) => s.clears > 0, hint: '엔딩을 보면 열려요' },
  ],
};

export const ACCS: WardrobeOption[] = [
  { id: 'none', name: '없음', unlocked: always, hint: '' },
  { id: 'straw', name: '밀짚모자', unlocked: (s) => reachedAt(s, 'ch2'), hint: '1장을 끝내면 열려요' },
  { id: 'crown', name: '꽃 화관', unlocked: (s) => s.keeps.length >= 6, hint: '추억을 6개 모으면 열려요' },
  { id: 'cat', name: '고양이 귀', unlocked: (s) => s.eggs.includes('ariria'), hint: '방 코드 칸에 비밀 주문을 넣어 보세요' },
];

/** 잠긴 옷을 입고 있으면 기본으로 되돌려요 */
export function sanitizeLook(role: Role, look: Look, s = loadSave()): Look {
  const ok = (list: WardrobeOption[], id: string, fallback: string) => (list.find((o) => o.id === id)?.unlocked(s) ? id : fallback);
  return {
    outfit: ok(OUTFITS[role], look.outfit, OUTFITS[role][0].id),
    hair: ok(HAIRS[role], look.hair, HAIRS[role][0].id),
    acc: ok(ACCS, look.acc, 'none'),
  };
}

export function isLook(v: unknown): v is { r: Role; look: Look } {
  const o = v as { r?: unknown; look?: Partial<Look> };
  return !!o && (o.r === 0 || o.r === 1) && !!o.look && typeof o.look.outfit === 'string' && typeof o.look.hair === 'string' && typeof o.look.acc === 'string';
}
