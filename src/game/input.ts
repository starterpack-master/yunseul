import type { MoveInput } from './physics';

/** 키보드 + 터치(가상 조이스틱, 버튼) + 화면 탭(핑) 입력을 하나로 모아요. */
export class Input {
  private keys = new Set<string>();
  private joyMove = 0;
  private jumpTouch = false;
  private jumpQueued = false;
  private interactQueued = false;
  private abilityQueued = false;
  private actDown = false;
  private emoteQueued = false;
  private swapQueued = false;
  private advanceQueued = false;
  private taps: { x: number; y: number }[] = [];
  private joyId: number | null = null;
  private joyOrigin = { x: 0, y: 0 };
  enabled = true;
  onAnyInput: (() => void) | null = null;

  constructor(canvas: HTMLCanvasElement) {
    window.addEventListener('keydown', (e) => {
      if (e.target instanceof HTMLInputElement) return;
      const k = e.key.toLowerCase();
      if (['arrowleft', 'arrowright', 'arrowup', ' ', 'tab'].includes(k)) e.preventDefault();
      if (e.repeat) return;
      this.keys.add(k);
      if (k === ' ' || k === 'arrowup' || k === 'w' || k === 'k') this.jumpQueued = true;
      if (k === 'e' || k === 'j' || k === 'enter') this.interactQueued = true;
      if (k === 'f' || k === 'l') this.abilityQueued = true;
      if (k === 'q' || k === 't') this.emoteQueued = true;
      if (k === 'tab') this.swapQueued = true;
      if (k === ' ' || k === 'e' || k === 'enter' || k === 'j') this.advanceQueued = true;
      this.onAnyInput?.();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.joyMove = 0;
      this.jumpTouch = false;
      this.actDown = false;
    });
    canvas.addEventListener('pointerdown', (e) => {
      this.taps.push({ x: e.clientX, y: e.clientY });
      this.onAnyInput?.();
    });
  }

  bindJoystick(zone: HTMLElement, knob: HTMLElement) {
    const radius = 46;
    const update = (x: number, y: number) => {
      const dx = x - this.joyOrigin.x;
      const dy = y - this.joyOrigin.y;
      const len = Math.hypot(dx, dy);
      const k = len > radius ? radius / len : 1;
      knob.style.transform = `translate(${dx * k}px, ${dy * k}px)`;
      const v = (dx * k) / radius;
      this.joyMove = Math.abs(v) < 0.18 ? 0 : Math.max(-1, Math.min(1, v * 1.25));
    };
    zone.addEventListener('pointerdown', (e) => {
      if (this.joyId !== null) return;
      this.joyId = e.pointerId;
      zone.setPointerCapture(e.pointerId);
      const r = zone.getBoundingClientRect();
      this.joyOrigin = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      update(e.clientX, e.clientY);
      zone.classList.add('active');
      this.onAnyInput?.();
    });
    zone.addEventListener('pointermove', (e) => {
      if (e.pointerId === this.joyId) update(e.clientX, e.clientY);
    });
    const end = (e: PointerEvent) => {
      if (e.pointerId !== this.joyId) return;
      this.joyId = null;
      this.joyMove = 0;
      knob.style.transform = '';
      zone.classList.remove('active');
    };
    zone.addEventListener('pointerup', end);
    zone.addEventListener('pointercancel', end);
  }

  bindButton(el: HTMLElement, kind: 'jump' | 'act' | 'emote' | 'swap') {
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      el.classList.add('pressed');
      if (kind === 'jump') {
        this.jumpQueued = true;
        this.jumpTouch = true;
        this.advanceQueued = true;
      }
      if (kind === 'act') {
        this.interactQueued = true;
        this.abilityQueued = true;
        this.actDown = true;
        this.advanceQueued = true;
      }
      if (kind === 'emote') this.emoteQueued = true;
      if (kind === 'swap') this.swapQueued = true;
      this.onAnyInput?.();
    });
    const up = () => {
      el.classList.remove('pressed');
      if (kind === 'jump') this.jumpTouch = false;
      if (kind === 'act') this.actDown = false;
    };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('pointerleave', up);
  }

  get move(): number {
    if (!this.enabled) return 0;
    let m = this.joyMove;
    if (this.keys.has('arrowleft') || this.keys.has('a')) m -= 1;
    if (this.keys.has('arrowright') || this.keys.has('d')) m += 1;
    return Math.max(-1, Math.min(1, m));
  }

  get jumpHeld(): boolean {
    return this.enabled && (this.jumpTouch || this.keys.has(' ') || this.keys.has('arrowup') || this.keys.has('w') || this.keys.has('k'));
  }

  /** 능력(노래)을 누르고 있는지 */
  get abilityHeld(): boolean {
    return this.enabled && (this.actDown || this.keys.has('f') || this.keys.has('l'));
  }

  take(): MoveInput {
    const jumpPressed = this.enabled && this.jumpQueued;
    this.jumpQueued = false;
    return { move: this.move, jumpPressed, jumpHeld: this.jumpHeld };
  }

  consumeInteract(): boolean {
    const v = this.interactQueued && this.enabled;
    this.interactQueued = false;
    return v;
  }
  consumeAbility(): boolean {
    const v = this.abilityQueued && this.enabled;
    this.abilityQueued = false;
    return v;
  }
  /** 터치 버튼(✋)이 동작 대신 능력으로 쓰였을 때 같은 누름을 두 번 쓰지 않게 */
  dropAbility() {
    this.abilityQueued = false;
  }
  dropInteract() {
    this.interactQueued = false;
  }
  consumeEmote(): boolean {
    const v = this.emoteQueued;
    this.emoteQueued = false;
    return v;
  }
  consumeSwap(): boolean {
    const v = this.swapQueued;
    this.swapQueued = false;
    return v;
  }
  consumeAdvance(): boolean {
    const v = this.advanceQueued;
    this.advanceQueued = false;
    return v;
  }
  consumeTaps(): { x: number; y: number }[] {
    const t = this.taps;
    this.taps = [];
    return t;
  }
  clearQueued() {
    this.jumpQueued = false;
    this.interactQueued = false;
    this.abilityQueued = false;
    this.advanceQueued = false;
  }
}
