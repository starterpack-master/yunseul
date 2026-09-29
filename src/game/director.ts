import type { ShotTarget, Step } from './scenes';

/** 컷신을 실제로 움직이는 쪽 (게임이 구현해요) */
export interface DirectorHost {
  say(who: string, text: string, think: boolean): void;
  narrate(text: string): void;
  caption(text: string): void;
  title(no: string, title: string): void;
  /** 대사·내레이션·제목 카드가 끝났는지 (눌러서 넘기거나 시간이 지나면) */
  textDone(): boolean;
  /** 이야기 주인공(또는 who)을 x까지 걷게 해요. 도착하면 true */
  walkTo(x: number, face?: 1 | -1, snap?: boolean, who?: 'ria' | 'ari'): boolean;
  /** 카메라: 누구를(또는 어디를) 얼마나 가까이, 어느 쪽 세계에서 볼지 */
  shot(on: ShotTarget | undefined, zoom: number | undefined, look: number | undefined, side: 1 | -1 | undefined, sec: number, mirror: boolean): void;
  /** 대사마다 말하는 사람 쪽으로 카메라를 돌릴지 */
  autoShot(on: boolean, frame: 'close' | 'keep'): void;
  /** 두 사람 사이로 빛이 이어져요 (수면에서 손이 닿는 순간) */
  touch(): void;
  shake(amp: number, sec: number): void;
  music(v: number): void;
  rewind(): void;
  fade(to: number, sec: number): void;
  sfx(name: string): void;
  hum(sec: number): void;
  give(what: 'hairpin'): void;
  clarity(v: number): void;
  view(s: 1 | -1): void;
  npc(id: string, pose?: 'sit' | 'stand' | 'sleep', x?: number, face?: 1 | -1): void;
  young(on: boolean): void;
  dawn(v: number): void;
  hide(on: boolean): void;
}

export class Director {
  private steps: Step[] = [];
  private i = 0;
  private t = 0;
  private started = false;
  private done: (() => void) | null = null;
  private host: DirectorHost;
  running = false;
  /** 빨리 넘기기 (테스트·다시 보기용) */
  fast = false;

  constructor(host: DirectorHost) {
    this.host = host;
  }

  run(steps: Step[], onDone: () => void) {
    this.steps = steps;
    this.i = 0;
    this.t = 0;
    this.started = false;
    this.done = onDone;
    this.running = steps.length > 0;
    if (!this.running) onDone();
  }

  stop() {
    this.running = false;
    this.steps = [];
    this.done = null;
  }

  update(dt: number) {
    if (!this.running) return;
    let guard = 0;
    while (this.running && guard++ < 50) {
      const s = this.steps[this.i];
      if (!s) {
        this.finish();
        return;
      }
      if (!this.started) {
        this.started = true;
        this.t = 0;
        this.begin(s);
      }
      this.t += dt;
      dt = 0;
      if (!this.isDone(s)) return;
      this.i++;
      this.started = false;
    }
  }

  private finish() {
    this.running = false;
    const cb = this.done;
    this.done = null;
    cb?.();
  }

  private begin(s: Step) {
    const h = this.host;
    switch (s.t) {
      case 'title':
        h.title(s.no, s.title);
        break;
      case 'narr':
        h.narrate(s.text);
        break;
      case 'caption':
        h.caption(s.text);
        break;
      case 'say':
        h.say(s.who, s.text, !!s.think);
        break;
      case 'shot':
        h.shot(s.on, s.zoom, s.look, s.side, this.fast ? 0 : s.s ?? 0.9, !!s.mirror);
        break;
      case 'auto':
        h.autoShot(s.on, s.frame ?? 'close');
        break;
      case 'touch':
        h.touch();
        break;
      case 'shake':
        h.shake(s.a, this.fast ? 0.05 : s.s);
        break;
      case 'music':
        h.music(s.v);
        break;
      case 'rewind':
        h.rewind();
        break;
      case 'fade':
        h.fade(s.to, this.fast ? 0.05 : s.s);
        break;
      case 'sfx':
        h.sfx(s.name);
        break;
      case 'hum':
        h.hum(s.s);
        break;
      case 'give':
        h.give(s.what);
        break;
      case 'clarity':
        h.clarity(s.v);
        break;
      case 'view':
        h.view(s.s);
        break;
      case 'npc':
        h.npc(s.id, s.pose, s.x, s.face);
        break;
      case 'young':
        h.young(s.on);
        break;
      case 'dawn':
        h.dawn(s.v);
        break;
      case 'hide':
        h.hide(s.on);
        break;
      case 'walk':
      case 'wait':
        break;
    }
  }

  private isDone(s: Step): boolean {
    const h = this.host;
    switch (s.t) {
      case 'title':
      case 'narr':
      case 'say':
        return h.textDone();
      case 'walk':
        if (this.fast || this.t > 9) return h.walkTo(s.x, s.face, true, s.who);
        return h.walkTo(s.x, s.face, false, s.who);
      case 'wait':
        return this.fast || this.t >= s.s;
      case 'fade':
        return this.fast || this.t >= s.s;
      case 'shot':
        return !s.hold || this.fast || this.t >= (s.s ?? 0.9);
      case 'rewind':
        return this.fast || this.t >= 1.8;
      default:
        return true;
    }
  }
}
