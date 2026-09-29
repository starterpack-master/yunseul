import { SPAWN } from './level';
import { makeBody, makeController, stepBody, type Body, type Controller, type MoveInput, type StepResult } from './physics';
import type { AnimName, PlayerNetState, Role } from './types';
import type { Collider } from './world';

const NO_INPUT: MoveInput = { move: 0, jumpPressed: false, jumpHeld: false };

export class Player {
  readonly role: Role;
  body: Body;
  ctl: Controller = makeController();
  face: 1 | -1 = 1;
  anim: AnimName = 'idle';
  animTime = 0;
  lastSafe: { x: number; y: number };
  hidden = false;
  respawnT = 0;
  /** 착지 찌그러짐 연출 (0~1) */
  squash = 0;
  /** 원격 플레이어라면 네트워크 상태를 보간해서 따라가요. */
  remote = false;
  present = true;
  private target: PlayerNetState | null = null;
  private targetAge = 0;

  constructor(role: Role) {
    this.role = role;
    const s = SPAWN[role];
    this.body = makeBody(s.x, s.y);
    this.lastSafe = { ...s };
  }

  reset() {
    const s = SPAWN[this.role];
    this.body = makeBody(s.x, s.y);
    this.ctl = makeController();
    this.lastSafe = { ...s };
    this.hidden = false;
    this.respawnT = 0;
    this.face = 1;
    this.target = null;
  }

  /** 로컬 물리 스텝. 물에 빠지면 잠깐 숨었다가 안전 지점에서 "퐁" 하고 나타나요. */
  step(dt: number, input: MoveInput | null, colliders: Collider[], useArc: boolean): StepResult | null {
    if (this.hidden) {
      this.respawnT -= dt;
      if (this.respawnT <= 0) {
        this.hidden = false;
        this.body = makeBody(this.lastSafe.x, this.lastSafe.y);
        this.ctl = makeController();
        this.squash = 1;
        return { jumped: false, landed: true, splashed: false };
      }
      return null;
    }
    const inp = input ?? NO_INPUT;
    const r = stepBody(this.body, this.ctl, inp, dt, colliders, useArc);
    if (inp.move > 0.1) this.face = 1;
    else if (inp.move < -0.1) this.face = -1;
    if (r.landed) this.squash = 1;
    if (this.body.grounded && this.body.centered && (this.body.gk === 'solid' || this.body.gk === 'bridge')) {
      this.lastSafe = { x: this.body.x, y: this.body.y };
    }
    if (r.splashed) {
      this.hidden = true;
      this.respawnT = 0.75;
    }
    this.updateAnim(dt);
    return r;
  }

  /** 부표처럼 움직이는 발판 위에 서 있으면 같이 움직여요. */
  carry(dy: number) {
    this.body.y += dy;
  }

  private updateAnim(dt: number) {
    const b = this.body;
    let next: AnimName;
    if (!b.grounded) next = b.vy > 0.5 ? 'jump' : 'fall';
    else next = Math.abs(b.vx) > 0.4 ? 'walk' : 'idle';
    if (next !== this.anim) {
      this.anim = next;
      this.animTime = 0;
    } else {
      this.animTime += dt;
    }
    this.squash = Math.max(0, this.squash - dt * 5);
  }

  netState(): PlayerNetState {
    const b = this.body;
    return {
      r: this.role,
      x: +b.x.toFixed(3),
      y: +b.y.toFixed(3),
      vx: +b.vx.toFixed(2),
      vy: +b.vy.toFixed(2),
      f: this.face,
      a: this.anim,
      g: this.hidden ? 'none' : b.gk,
      gid: b.gid,
      hidden: this.hidden,
    };
  }

  /** 상대에게서 받은 최신 상태 */
  receive(s: PlayerNetState) {
    const wasHidden = this.hidden;
    this.target = s;
    this.targetAge = 0;
    this.face = s.f;
    this.hidden = s.hidden;
    this.body.gk = s.g;
    this.body.gid = s.gid;
    this.body.grounded = s.g !== 'none';
    const dx = s.x - this.body.x;
    const dy = s.y - this.body.y;
    if (dx * dx + dy * dy > 9 || (wasHidden && !s.hidden)) {
      this.body.x = s.x;
      this.body.y = s.y;
      if (wasHidden && !s.hidden) this.squash = 1;
    }
  }

  /** 원격 플레이어 보간 */
  smoothRemote(dt: number) {
    const t = this.target;
    if (!t) return;
    this.targetAge += dt;
    const lead = Math.min(this.targetAge, 0.12);
    const tx = t.x + t.vx * lead;
    const ty = t.g !== 'none' ? t.y : t.y + t.vy * lead;
    const k = 1 - Math.exp(-dt * 14);
    this.body.x += (tx - this.body.x) * k;
    this.body.y += (ty - this.body.y) * k;
    this.body.vx = t.vx;
    this.body.vy = t.vy;
    const prevAnim = this.anim;
    this.anim = t.a;
    if (prevAnim !== this.anim) {
      this.animTime = 0;
      if ((prevAnim === 'fall' || prevAnim === 'jump') && (t.a === 'idle' || t.a === 'walk')) this.squash = 1;
    } else this.animTime += dt;
    this.squash = Math.max(0, this.squash - dt * 5);
  }
}
