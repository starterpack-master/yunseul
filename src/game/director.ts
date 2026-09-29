import type { Step } from './scenes';

/** 컷신을 실제로 움직이는 쪽 (게임이 구현해요) */
export interface DirectorHost {
  say(who: string, text: string, think: boolean): void;
  narrate(text: string): void;
  title(no: string, title: string): void;
  /** 대사·내레이션·제목 카드가 끝났는지 (눌러서 넘기거나 시간이 지나면) */
  textDone(): boolean;
  /** 이야기 주인공을 x까지 걷게 해요. 도착하면 true */
  walkTo(x: number, face?: 1 | -1, snap?: boolean): boolean;
  camera(x: number | null): void;
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
      case 'say':
        h.say(s.who, s.text, !!s.think);
        break;
      case 'cam':
        h.camera(s.x);
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
        if (this.fast || this.t > 9) return h.walkTo(s.x, s.face, true);
        return h.walkTo(s.x, s.face);
      case 'wait':
        return this.fast || this.t >= s.s;
      case 'fade':
        return this.fast || this.t >= s.s;
      default:
        return true;
    }
  }
}
