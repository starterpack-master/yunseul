import { makeBody, makeController, stepBody, type Body, type Bounds, type Controller, type MoveInput, type StepResult } from './physics';
import type { AnimName, PlayerNetState, Role } from './types';
import type { ArcShape, Collider } from './world';

const NO_INPUT: MoveInput = { move: 0, jumpPressed: false, jumpHeld: false };
/** 이만큼 가만히 있으면 꾸벅꾸벅 졸아요 (이스터에그) */
const SLEEP_AFTER = 20;

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
  squash = 0;
  remote = false;
  present = true;
  idleT = 0;
  sleeping = false;
  singing = false;
  /** 사진 찍는 동작(초) */
  actT = 0;
  private target: PlayerNetState | null = null;
  private targetAge = 0;

  constructor(role: Role, x = 0, y = 1.5) {
    this.role = role;
    this.body = makeBody(x, y);
    this.lastSafe = { x, y };
  }

  place(x: number, y: number, face: 1 | -1 = 1) {
    this.body = makeBody(x, y);
    this.ctl = makeController();
    this.lastSafe = { x, y };
    this.hidden = false;
    this.respawnT = 0;
    this.face = face;
    this.target = null;
    this.idleT = 0;
    this.sleeping = false;
  }

  step(dt: number, input: MoveInput | null, colliders: Collider[], arcs: ArcShape[], bounds: Bounds): StepResult | null {
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
    const r = stepBody(this.body, this.ctl, inp, dt, colliders, arcs, bounds);
    if (inp.move > 0.1) this.face = 1;
    else if (inp.move < -0.1) this.face = -1;
    if (r.landed) this.squash = 1;
    if (this.body.grounded && this.body.centered && (this.body.gk === 'solid' || this.body.gk === 'bridge') && !this.body.gid.startsWith('stone:')) {
      this.lastSafe = { x: this.body.x, y: this.body.y };
    }
    if (r.splashed) {
      this.hidden = true;
      this.respawnT = 0.75;
    }
    const busy = Math.abs(inp.move) > 0.05 || inp.jumpPressed || !this.body.grounded || this.singing || this.actT > 0;
    this.idleT = busy ? 0 : this.idleT + dt;
    this.sleeping = this.idleT > SLEEP_AFTER;
    if (this.actT > 0) this.actT = Math.max(0, this.actT - dt);
    this.updateAnim(dt);
    return r;
  }

  carry(dy: number) {
    this.body.y += dy;
  }

  /** 컷신에서 조용히 서 있게 */
  settle(dt: number) {
    this.body.vx = 0;
    this.updateAnim(dt);
  }

  private updateAnim(dt: number) {
    const b = this.body;
    let next: AnimName;
    if (!b.grounded) next = b.vy > 0.5 ? 'jump' : 'fall';
    else if (this.sleeping) next = 'sit';
    else if (this.actT > 0) next = 'act';
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
      sleep: this.sleeping || undefined,
      sing: this.singing || undefined,
    };
  }

  receive(s: PlayerNetState) {
    const wasHidden = this.hidden;
    this.target = s;
    this.targetAge = 0;
    this.face = s.f;
    this.hidden = s.hidden;
    this.sleeping = !!s.sleep;
    this.singing = !!s.sing;
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
