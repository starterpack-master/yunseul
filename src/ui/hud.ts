import { EMOTES, type EmoteKind, type Role } from '../game/types';
import { iconUrl } from '../render/icons';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const img = (src: string, cls: string) => `<img class="${cls}" src="${src}" alt="" draggable="false">`;

interface Bubble {
  el: HTMLDivElement;
  until: number;
}

export interface Line {
  who: string;
  text: string;
  think?: boolean;
}

interface MarkView {
  el: HTMLDivElement;
  w: Role;
  x: number;
  y: number;
  t: number;
  mine: boolean;
}

/** 화면 위 DOM UI (목표, 대화, 내레이션, 말풍선, 핑, 버튼, 카드) */
export class Hud {
  readonly root = $('hud');
  private objText = $('objText');
  private status = $('status');
  private statusText = $('statusText');
  private dialog = $('dialog');
  private dName = this.dialog.querySelector('.name') as HTMLDivElement;
  private dText = this.dialog.querySelector('.text') as HTMLDivElement;
  private narr = $('narration');
  private narrText = $('narrText');
  private card = $('titleCard');
  private wheel = $('emoteWheel');
  private prompt = $('prompt');
  private actLabel = $('actLabel');
  private actIcon = $('actIcon') as HTMLImageElement;
  private toastEl = $('toast');
  private marksLayer = $('marks');
  private bubbles: Record<Role, Bubble | null> = { 0: null, 1: null };
  private bubbleLayer = $('bubbles');
  private line: Line | null = null;
  private lineKind: 'say' | 'narr' | 'title' | null = null;
  private typed = 0;
  private hold = 0;
  private autoAdvance = true;
  private toastT = 0;
  private marks: MarkView[] = [];
  onEmote: ((k: EmoteKind) => void) | null = null;
  onType: (() => void) | null = null;
  /** 컷신 중엔 대사를 눌러야 넘어가요 */
  sceneMode = false;
  fast = false;

  constructor() {
    $('btnInvite').innerHTML = img(iconUrl('u', 'invite'), 'pi');
    $('btnSwap').innerHTML = img(iconUrl('u', 'swap'), 'pi');
    $('btnHome').innerHTML = img(iconUrl('u', 'home'), 'pi');
    this.setMuted(false);
    $('btnEmote').innerHTML = img(iconUrl('u', 'chat'), 'pi');
    $('btnJump').innerHTML = img(iconUrl('u', 'jump'), 'pi');
    this.actIcon.src = iconUrl('u', 'act');

    EMOTES.forEach((e, i) => {
      const b = document.createElement('button');
      b.className = 'emo';
      b.innerHTML = `${img(iconUrl('e', e.kind), 'i')}<span class="l">${e.label}</span><span class="k">${i + 1}</span>`;
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
    for (const el of [this.dialog, this.narr, this.card]) {
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.advance();
      });
    }
  }

  show(v: boolean) {
    this.root.classList.toggle('hidden', !v);
  }

  setObjective(t: string) {
    const box = this.objText.parentElement!;
    box.classList.toggle('hidden', !t);
    if (this.objText.textContent !== t) {
      this.objText.textContent = t;
      box.classList.remove('flash');
      void box.offsetWidth;
      box.classList.add('flash');
    }
  }

  setStatus(t: string, kind: 'wait' | 'ok' | 'warn' | '' = '', reload = false) {
    this.statusText.textContent = t;
    this.status.className = `pill ${kind}`;
    this.status.classList.toggle('hidden', !t);
    $('btnReload').classList.toggle('hidden', !reload);
  }

  setButtons(opts: { swap: boolean; invite: boolean }) {
    $('btnSwap').classList.toggle('hidden', !opts.swap);
    $('btnInvite').classList.toggle('hidden', !opts.invite);
  }

  setMuted(m: boolean) {
    $('btnMute').innerHTML = img(iconUrl('u', m ? 'mute' : 'sound'), 'pi');
  }

  setScene(on: boolean) {
    this.sceneMode = on;
    this.root.classList.toggle('scene', on);
  }

  toggleWheel(v?: boolean) {
    const open = v ?? this.wheel.classList.contains('hidden');
    this.wheel.classList.toggle('hidden', !open);
  }

  get wheelOpen() {
    return !this.wheel.classList.contains('hidden');
  }

  // ---- 대사 · 내레이션 · 제목 카드 -----------------------------------------

  get textIdle(): boolean {
    return !this.line;
  }

  say(l: Line, auto = true) {
    this.clearText();
    this.line = l;
    this.lineKind = 'say';
    this.autoAdvance = auto;
    this.typed = 0;
    this.hold = Math.max(2.2, l.text.length * 0.07);
    this.dName.textContent = l.who;
    this.dName.classList.toggle('hidden', !l.who);
    this.dialog.classList.toggle('system', !l.who);
    this.dialog.classList.toggle('think', !!l.think);
    this.dialog.classList.toggle('grandma', l.who === '할머니');
    this.dialog.classList.toggle('ari', l.who === '아리');
    this.dText.textContent = '';
    this.dialog.classList.remove('hidden');
  }

  narrate(text: string) {
    this.clearText();
    this.line = { who: '', text };
    this.lineKind = 'narr';
    this.autoAdvance = false;
    this.typed = 0;
    this.hold = Math.max(2.8, text.length * 0.08);
    this.narrText.textContent = '';
    this.narr.classList.remove('hidden');
  }

  titleCard(no: string, title: string) {
    this.clearText();
    this.line = { who: no, text: title };
    this.lineKind = 'title';
    this.autoAdvance = true;
    this.typed = title.length;
    this.hold = 2.6;
    this.card.querySelector('.no')!.textContent = no;
    this.card.querySelector('.tt')!.textContent = title;
    this.card.classList.remove('hidden', 'out');
  }

  /** 누르면: 글자가 다 안 나왔으면 다 보여 주고, 다 나왔으면 넘겨요 */
  advance() {
    if (!this.line) return;
    if (this.typed < this.line.text.length) {
      this.typed = this.line.text.length;
      this.render();
    } else {
      this.hold = 0;
      this.autoAdvance = true;
    }
  }

  clearText() {
    this.line = null;
    this.lineKind = null;
    this.dialog.classList.add('hidden');
    this.narr.classList.add('hidden');
    this.card.classList.add('hidden');
  }

  private render() {
    if (!this.line) return;
    const s = this.line.text.slice(0, Math.floor(this.typed));
    if (this.lineKind === 'say') this.dText.textContent = s;
    else if (this.lineKind === 'narr') this.narrText.textContent = s;
  }

  update(dt: number, now: number) {
    if (this.line) {
      const speed = this.fast ? 400 : this.lineKind === 'narr' ? 26 : 36;
      if (this.typed < this.line.text.length) {
        const before = Math.floor(this.typed);
        this.typed = Math.min(this.line.text.length, this.typed + dt * speed);
        if (Math.floor(this.typed) !== before && before % 3 === 0) this.onType?.();
        this.render();
      } else {
        // 컷신 중에는 오래 기다려 주고(눌러서 넘기기), 플레이 중엔 알아서 사라져요.
        const holdScale = this.fast ? 0.02 : this.sceneMode && !this.autoAdvance ? 6 : 1;
        this.hold -= dt / holdScale;
        if (this.lineKind === 'title' && this.hold < 0.6) this.card.classList.add('out');
        if (this.hold <= 0) this.clearText();
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

  // ---- 말풍선 / 안내 --------------------------------------------------------

  emote(r: Role, kind: EmoteKind, now: number, mine: boolean) {
    const e = EMOTES.find((x) => x.kind === kind);
    if (!e) return;
    this.bubbles[r]?.el.remove();
    const el = document.createElement('div');
    el.className = `bubble ${mine ? 'mine' : 'theirs'}`;
    el.innerHTML = `${img(iconUrl('e', e.kind), 'i')}<span class="l">${e.label}</span>`;
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
      return;
    }
    this.prompt.textContent = text;
    this.prompt.classList.remove('hidden');
    this.prompt.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`;
  }

  /** 오른쪽 아래 버튼: 할 수 있는 동작이 있으면 그 이름, 없으면 캐릭터 능력 */
  setAction(label: string, icon: string, ready: boolean) {
    if (this.actLabel.textContent !== label) this.actLabel.textContent = label;
    const src = iconUrl('u', icon);
    if (this.actIcon.getAttribute('src') !== src) this.actIcon.src = src;
    $('btnAct').classList.toggle('ready', ready);
  }

  toast(t: string, sec = 2.4) {
    this.toastEl.textContent = t;
    this.toastEl.classList.add('show');
    this.toastT = sec;
  }

  // ---- 핑 -----------------------------------------------------------------

  addMark(w: Role, x: number, y: number, t: number, mine: boolean) {
    // 한 사람당 최근 3개까지만
    const same = this.marks.filter((m) => m.mine === mine);
    if (same.length >= 3) {
      const old = same[0];
      old.el.remove();
      this.marks.splice(this.marks.indexOf(old), 1);
    }
    const el = document.createElement('div');
    el.className = `mark ${mine ? 'mine' : 'theirs'}`;
    el.innerHTML = '<i></i><b></b>';
    this.marksLayer.appendChild(el);
    this.marks.push({ el, w, x, y, t, mine });
  }

  get markList() {
    return this.marks;
  }

  updateMarks(now: number, project: (w: Role, x: number, y: number) => { x: number; y: number }, hidden: boolean, life = 3.2) {
    for (let i = this.marks.length - 1; i >= 0; i--) {
      const m = this.marks[i];
      const age = now - m.t;
      if (age > life) {
        m.el.remove();
        this.marks.splice(i, 1);
        continue;
      }
      const p = project(m.w, m.x, m.y);
      m.el.style.transform = `translate(${p.x}px, ${p.y}px)`;
      m.el.style.opacity = hidden ? '0' : String(Math.min(1, (life - age) / 0.8));
    }
  }

  clearMarks() {
    for (const m of this.marks) m.el.remove();
    this.marks = [];
  }

  // ---- 카드 -----------------------------------------------------------------

  showEnding(v: boolean, text?: { title: string; body: string; sub?: string }, ngButton = true) {
    const el = $('ending');
    if (text) {
      el.querySelector('.etitle')!.textContent = text.title;
      el.querySelector('.ebody')!.textContent = text.body;
      el.querySelector('.esub')!.textContent = text.sub ?? '';
    }
    $('btnNewSummer').classList.toggle('hidden', !ngButton);
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

  showPage(v: boolean, date = '', text = '') {
    const el = $('diaryPage');
    el.classList.toggle('hidden', !v);
    if (v) {
      el.querySelector('.date')!.textContent = date;
      el.querySelector('.body')!.textContent = text;
    }
  }

  get pageOpen() {
    return !$('diaryPage').classList.contains('hidden');
  }

  showKeep(name: string, desc: string, photo?: string | null) {
    const el = $('keepPop');
    el.querySelector('.kname')!.textContent = name;
    el.querySelector('.kdesc')!.textContent = desc;
    const im = el.querySelector('img') as HTMLImageElement;
    im.classList.toggle('hidden', !photo);
    if (photo) im.src = photo;
    el.classList.remove('hidden');
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    clearTimeout((el as unknown as { _t?: number })._t);
    (el as unknown as { _t?: number })._t = window.setTimeout(() => el.classList.add('hidden'), 4200);
  }

  flashScreen() {
    const el = $('flashFx');
    el.classList.remove('go');
    void el.offsetWidth;
    el.classList.add('go');
  }
}
