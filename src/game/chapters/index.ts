import { CHAPTER_ORDER, type ChapterId } from '../types';
import { ch1 } from './ch1';
import { ch2 } from './ch2';
import { ch3 } from './ch3';
import { epilogue } from './epilogue';
import type { ChapterDef } from './types';

const CHAPTERS: Record<ChapterId, ChapterDef> = { ch1, ch2, ch3, epilogue };

export function getChapter(id: ChapterId): ChapterDef {
  return CHAPTERS[id] ?? ch1;
}

export function nextChapter(id: ChapterId): ChapterId | null {
  const i = CHAPTER_ORDER.indexOf(id);
  return i >= 0 && i < CHAPTER_ORDER.length - 1 ? CHAPTER_ORDER[i + 1] : null;
}

/** 모든 장의 추억 목록 (앨범용) */
export function allKeepsakes() {
  return CHAPTER_ORDER.flatMap((id) => CHAPTERS[id].keepsakes.map((k) => ({ ...k, chapter: id })));
}

export function allDiary() {
  return CHAPTER_ORDER.flatMap((id) => CHAPTERS[id].diary.map((d) => ({ ...d, chapter: id })));
}
