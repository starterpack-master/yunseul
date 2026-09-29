import type { MoveInput } from './physics';

/** 키보드 + 터치(가상 조이스틱, 버튼) 입력을 하나로 모아요. */
export class Input {
  private keys = new Set<string>();
  private joyMove = 0;
  private jumpTouch = false;
  private jumpQueued = false;
  private interactQueued = false;
  private emoteQueued = false;
  private swapQueued = false;
  private joyId: number | null = null;
  private joyOrigin = { x: 0, y: 0 };
  enabled = true;
  onAnyInput: (() => void) | null = null;

  constructor() {
    window.addEventListener('keydown', (e) => {
      if (e.target instanceof HTMLInputElement) return;
      const k = e.key.toLowerCase();
      if (['arrowleft', 'arrowright', 'arrowup', ' ', 'tab'].includes(k)) e.preventDefault();
      if (e.repeat) return;
      this.keys.add(k);
      if (k === ' ' || k === 'arrowup' || k === 'w' || k === 'k') this.jumpQueued = true;
      if (k === 'e' || k === 'j' || k === 'enter') this.interactQueued = true;
      if (k === 'q' || k === 't') this.emoteQueued = true;
      if (k === 'tab') this.swapQueued = true;
      this.onAnyInput?.();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.joyMove = 0;
      this.jumpTouch = false;
    });
  }

  /** 화면 왼쪽 아래 조이스틱 영역 */
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

  bindButton(el: HTMLElement, kind: 'jump' | 'interact' | 'emote' | 'swap') {
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      el.classList.add('pressed');
      if (kind === 'jump') {
        this.jumpQueued = true;
        this.jumpTouch = true;
      }
      if (kind === 'interact') this.interactQueued = true;
      if (kind === 'emote') this.emoteQueued = true;
      if (kind === 'swap') this.swapQueued = true;
      this.onAnyInput?.();
    });
    const up = () => {
      el.classList.remove('pressed');
      if (kind === 'jump') this.jumpTouch = false;
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

  /** 고정 스텝 한 번에 소비되는 이동 입력 */
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
  clearQueued() {
    this.jumpQueued = false;
    this.interactQueued = false;
  }
}
