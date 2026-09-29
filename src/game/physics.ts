import { LEVEL_MAX_X, LEVEL_MIN_X, arcTop } from './level';
import type { GroundKind } from './types';
import type { Collider } from './world';

export const PHYS = {
  speed: 4.3,
  accelGround: 40,
  accelAir: 24,
  gravity: 26,
  jumpV: 9.6,
  maxFall: 16,
  coyote: 0.1,
  buffer: 0.13,
  stepUp: 0.32,
  splashDepth: -0.45,
};

export interface Body {
  x: number;
  y: number; // 발 위치
  vx: number;
  vy: number;
  w: number;
  h: number;
  grounded: boolean;
  gk: GroundKind;
  gid: string;
  /** 발을 딛고 선 충돌체 위에 중심이 올라가 있는지 (안전 지점 기록용) */
  centered: boolean;
}

export interface MoveInput {
  move: number;
  jumpPressed: boolean;
  jumpHeld: boolean;
}

export interface StepResult {
  jumped: boolean;
  landed: boolean;
  splashed: boolean;
}

export function makeBody(x: number, y: number): Body {
  return { x, y, vx: 0, vy: 0, w: 0.56, h: 1.0, grounded: true, gk: 'solid', gid: '', centered: true };
}

function approach(v: number, target: number, delta: number): number {
  if (v < target) return Math.min(v + delta, target);
  if (v > target) return Math.max(v - delta, target);
  return v;
}

const overlapX = (b: Body, c: Collider) => b.x + b.w / 2 > c.x0 && b.x - b.w / 2 < c.x1;
const overlapY = (b: Body, c: Collider) => b.y + b.h > c.y0 && b.y < c.y1;

export interface Controller {
  coyote: number;
  jumpBuf: number;
  jumpCut: boolean;
}

export function makeController(): Controller {
  return { coyote: 0, jumpBuf: 0, jumpCut: false };
}

/**
 * 로컬 좌표(항상 똑바로 선 기준) 플랫포머 한 스텝.
 * 두 세계 모두 같은 물리를 쓰고, 물 아래 세계는 그릴 때만 뒤집어요.
 */
export function stepBody(
  b: Body,
  ctl: Controller,
  input: MoveInput,
  dt: number,
  colliders: Collider[],
  useArc: boolean,
): StepResult {
  const res: StepResult = { jumped: false, landed: false, splashed: false };
  const wasGrounded = b.grounded;

  // 가로 이동
  const target = input.move * PHYS.speed;
  b.vx = approach(b.vx, target, (wasGrounded ? PHYS.accelGround : PHYS.accelAir) * dt);

  // 점프 (코요테 타임 + 입력 버퍼)
  ctl.coyote = wasGrounded ? PHYS.coyote : Math.max(0, ctl.coyote - dt);
  ctl.jumpBuf = input.jumpPressed ? PHYS.buffer : Math.max(0, ctl.jumpBuf - dt);
  if (ctl.jumpBuf > 0 && ctl.coyote > 0) {
    b.vy = PHYS.jumpV;
    ctl.jumpBuf = 0;
    ctl.coyote = 0;
    ctl.jumpCut = false;
    b.grounded = false;
    res.jumped = true;
  }
  if (!input.jumpHeld && b.vy > 0 && !ctl.jumpCut && !wasGrounded) {
    b.vy *= 0.5;
    ctl.jumpCut = true;
  }

  b.vy = Math.max(b.vy - PHYS.gravity * dt, -PHYS.maxFall);

  // X 축
  const prevX = b.x;
  b.x += b.vx * dt;
  for (const c of colliders) {
    if (c.oneWay || !overlapX(b, c) || !overlapY(b, c)) continue;
    const rise = c.y1 - b.y;
    if (wasGrounded && rise > 0 && rise <= PHYS.stepUp) {
      b.y = c.y1;
      continue;
    }
    if (prevX <= c.x0 + (c.x1 - c.x0) / 2) b.x = c.x0 - b.w / 2 - 1e-4;
    else b.x = c.x1 + b.w / 2 + 1e-4;
    b.vx = 0;
  }
  if (b.x < LEVEL_MIN_X) {
    b.x = LEVEL_MIN_X;
    b.vx = 0;
  } else if (b.x > LEVEL_MAX_X) {
    b.x = LEVEL_MAX_X;
    b.vx = 0;
  }

  // Y 축
  const prevY = b.y;
  b.y += b.vy * dt;
  b.grounded = false;
  b.gk = 'none';
  b.gid = '';
  b.centered = false;
  for (const c of colliders) {
    if (!overlapX(b, c)) continue;
    if (c.oneWay) {
      if (b.vy <= 0 && prevY >= c.y1 - 0.06 && b.y <= c.y1) land(b, c);
      continue;
    }
    if (!overlapY(b, c)) continue;
    if (b.vy <= 0 && prevY >= c.y1 - 0.08) {
      land(b, c);
    } else if (b.vy > 0 && prevY + b.h <= c.y0 + 0.08) {
      b.y = c.y0 - b.h;
      b.vy = 0;
    } else if (b.y + b.h / 2 > (c.y0 + c.y1) / 2) {
      // 움직이는 발판에 끼었을 때는 위로 올려 줘요.
      land(b, c);
    }
  }

  // 반달 다리 (곡면 발판)
  if (useArc && b.vy <= 0) {
    const t = arcTop(b.x);
    if (t !== null) {
      const tPrev = arcTop(prevX) ?? 0;
      if (b.y <= t && prevY >= Math.min(t, tPrev) - 0.36 && (!b.grounded || t > b.y)) {
        b.y = t;
        b.vy = 0;
        b.grounded = true;
        b.gk = 'arc';
        b.gid = 'moonBridge';
        b.centered = false;
      }
    }
  }

  if (b.grounded && !wasGrounded) res.landed = true;
  if (b.y < PHYS.splashDepth) res.splashed = true;
  return res;
}

function land(b: Body, c: Collider) {
  b.y = c.y1;
  b.vy = 0;
  b.grounded = true;
  b.gk = c.kind;
  b.gid = c.id;
  b.centered = b.x >= c.x0 && b.x <= c.x1;
}
