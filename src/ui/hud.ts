import { EMOTES, type EmoteKind, type Role } from '../game/types';
import type { Line } from '../game/story';
import { makeEmoteIcon, makeUiIcon } from '../render/pixelart';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

const iconUrls = new Map<string, string>();
function emoteIcon(kind: string): string {
  let u = iconUrls.get(`e:${kind}`);
  if (!u) {
    u = makeEmoteIcon(kind).toDataURL();
    iconUrls.set(`e:${kind}`, u);
  }
  return u;
}
function uiIcon(name: string): string {
  let u = iconUrls.get(`u:${name}`);
  if (!u) {
    u = makeUiIcon(name).toDataURL();
    iconUrls.set(`u:${name}`, u);
  }
  return u;
}
const img = (src: string, cls: string) => `<img class="${cls}" src="${src}" alt="" draggable="false">`;

interface Bubble {
  el: HTMLDivElement;
  until: number;
}

/** 화면 위 DOM UI (목표, 대화, 말풍선, 버튼, 엔딩 카드) */
export class Hud {
  readonly root = $('hud');
  private objText = $('objText');
  private status = $('status');
  private dialog = $('dialog');
  private dName = this.dialog.querySelector('.name') as HTMLDivElement;
  private dText = this.dialog.querySelector('.text') as HTMLDivElement;
  private wheel = $('emoteWheel');
  private prompt = $('prompt');
  private actLabel = $('actLabel');
  private toastEl = $('toast');
  private bubbles: Record<Role, Bubble | null> = { 0: null, 1: null };
  private bubbleLayer = $('bubbles');
  private line: Line | null = null;
  private typed = 0;
  private hold = 0;
  private toastT = 0;
  onEmote: ((k: EmoteKind) => void) | null = null;
  onDialogTap: (() => void) | null = null;

  constructor() {
    // 도트 아이콘으로 버튼 채우기 (기기마다 이모지 모양이 달라지지 않게)
    $('btnInvite').innerHTML = img(uiIcon('invite'), 'pi');
    $('btnSwap').innerHTML = img(uiIcon('swap'), 'pi');
    $('btnHome').innerHTML = img(uiIcon('home'), 'pi');
    this.setMuted(false);
    $('btnEmote').innerHTML = img(uiIcon('chat'), 'pi');
    $('btnJump').innerHTML = img(uiIcon('jump'), 'pi');
    $('btnAct').insertAdjacentHTML('afterbegin', img(uiIcon('act'), 'pi'));

    EMOTES.forEach((e, i) => {
      const b = document.createElement('button');
      b.className = 'emo';
      b.innerHTML = `${img(emoteIcon(e.kind), 'i')}<span class="l">${e.label}</span><span class="k">${i + 1}</span>`;
      b.addEventListener('pointerdown', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.onEmote?.(e.kind);
        this.toggleWheel(false);
      });
      this.wheel.appendChild(b);
    });
    this.wheel.addEventListener('pointerdown', (e) => {
      if (e.target === this.wheel) this.toggleWheel(false);
    });
    this.dialog.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      this.skip();
      this.onDialogTap?.();
    });
  }

  show(v: boolean) {
    this.root.classList.toggle('hidden', !v);
  }

  setObjective(t: string) {
    if (this.objText.textContent !== t) {
      this.objText.textContent = t;
      const box = this.objText.parentElement!;
      box.classList.remove('flash');
      void box.offsetWidth;
      box.classList.add('flash');
    }
  }

  setStatus(t: string, kind: 'wait' | 'ok' | 'warn' | '' = '') {
    this.status.textContent = t;
    this.status.className = `pill ${kind}`;
    this.status.classList.toggle('hidden', !t);
  }

  setButtons(opts: { swap: boolean; invite: boolean }) {
    $('btnSwap').classList.toggle('hidden', !opts.swap);
    $('btnInvite').classList.toggle('hidden', !opts.invite);
  }

  setMuted(m: boolean) {
    $('btnMute').innerHTML = img(uiIcon(m ? 'mute' : 'sound'), 'pi');
  }

  toggleWheel(v?: boolean) {
    const open = v ?? this.wheel.classList.contains('hidden');
    this.wheel.classList.toggle('hidden', !open);
  }

  get wheelOpen() {
    return !this.wheel.classList.contains('hidden');
  }

  // ---- 대화 --------------------------------------------------------------

  get dialogIdle(): boolean {
    return !this.line;
  }

  say(l: Line) {
    this.line = l;
    this.typed = 0;
    this.hold = Math.max(2.4, l.text.length * 0.075);
    this.dName.textContent = l.who;
    this.dName.classList.toggle('hidden', !l.who);
    this.dialog.classList.toggle('system', !l.who);
    this.dText.textContent = '';
    this.dialog.classList.remove('hidden');
  }

  skip() {
    if (!this.line) return;
    if (this.typed < this.line.text.length) {
      this.typed = this.line.text.length;
      this.dText.textContent = this.line.text;
    } else {
      this.hold = 0;
    }
  }

  clearDialog() {
    this.line = null;
    this.dialog.classList.add('hidden');
  }

  update(dt: number, now: number) {
    if (this.line) {
      if (this.typed < this.line.text.length) {
        this.typed = Math.min(this.line.text.length, this.typed + dt * 38);
        this.dText.textContent = this.line.text.slice(0, Math.floor(this.typed));
      } else {
        this.hold -= dt;
        if (this.hold <= 0) this.clearDialog();
      }
    }
    for (const r of [0, 1] as Role[]) {
      const b = this.bubbles[r];
      if (b && now > b.until) {
        b.el.remove();
        this.bubbles[r] = null;
      }
    }
    if (this.toastT > 0) {
      this.toastT -= dt;
      if (this.toastT <= 0) this.toastEl.classList.remove('show');
    }
  }

  // ---- 말풍선 / 안내 ------------------------------------------------------

  emote(r: Role, kind: EmoteKind, now: number, mine: boolean) {
    const e = EMOTES.find((x) => x.kind === kind)!;
    this.bubbles[r]?.el.remove();
    const el = document.createElement('div');
    el.className = `bubble ${mine ? 'mine' : 'theirs'}`;
    el.innerHTML = `${img(emoteIcon(e.kind), 'i')}<span class="l">${e.label}</span>`;
    this.bubbleLayer.appendChild(el);
    this.bubbles[r] = { el, until: now + 2.8 };
  }

  placeBubble(r: Role, x: number, y: number, visible: boolean) {
    const b = this.bubbles[r];
    if (!b) return;
    b.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`;
    b.el.style.opacity = visible ? '1' : '0';
  }

  setPrompt(text: string | null, x = 0, y = 0) {
    if (!text) {
      this.prompt.classList.add('hidden');
      this.actLabel.textContent = '';
      $('btnAct').classList.remove('ready');
      return;
    }
    this.prompt.textContent = text;
    this.prompt.classList.remove('hidden');
    this.prompt.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`;
    this.actLabel.textContent = text;
    $('btnAct').classList.add('ready');
  }

  toast(t: string, sec = 2.4) {
    this.toastEl.textContent = t;
    this.toastEl.classList.add('show');
    this.toastT = sec;
  }

  showEnding(v: boolean, text?: { title: string; body: string }) {
    const el = $('ending');
    if (text) {
      el.querySelector('.etitle')!.textContent = text.title;
      el.querySelector('.ebody')!.textContent = text.body;
    }
    el.classList.toggle('hidden', !v);
  }

  showInvite(v: boolean, link = '', code = '') {
    const el = $('invite');
    el.classList.toggle('hidden', !v);
    if (v) {
      $('inviteCode').textContent = code;
      ($('inviteLink') as HTMLInputElement).value = link;
    }
  }
}
