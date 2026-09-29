import * as THREE from 'three';
import { AudioEngine, type Sfx } from '../audio/audio';
import { Session, type Hello } from '../net/session';
import { Renderer, type Ripple } from '../render/renderer';
import { Hud } from '../ui/hud';
import { Input } from './input';
import { ALTAR, BRIDGES, BUOYS, ITEMS, LIGHTS, MOON_BRIDGE, SHELLS, SHELL_WORLD, TABLET, buoyTop, solidAt } from './level';
import { Player } from './player';
import { Story, eventLines, objective, type StoryCtx } from './story';
import { EMOTES, ROLE_NAME, other, type EmoteKind, type PlayerNetState, type Role, type WorldId } from './types';
import {
  applyAction,
  cloneState,
  collidersFor,
  createWorldState,
  stepWorld,
  type Action,
  type Collider,
  type SimPlayer,
  type WorldState,
} from './world';

const STEP = 1 / 60;
const FADE_COLOR = new THREE.Color(0xfff2f6);

type Interactable =
  | { kind: 'pickup'; id: string; x: number; y: number; label: string }
  | { kind: 'drop'; id: string; x: number; y: number; label: string }
  | { kind: 'altar'; x: number; y: number; label: string }
  | { kind: 'light'; id: string; x: number; y: number; label: string }
  | { kind: 'shell'; idx: number; x: number; y: number; label: string }
  | { kind: 'tablet'; x: number; y: number; label: string };

export class Game {
  readonly renderer: Renderer;
  readonly input = new Input();
  readonly audio = new AudioEngine();
  readonly hud = new Hud();
  private story = new Story();
  session: Session | null = null;
  st: WorldState = createWorldState();
  private prev: WorldState = cloneState(this.st);
  private buoySink: Record<string, number> = {};
  players: [Player, Player] = [new Player(0), new Player(1)];
  viewRole: Role = 0;
  running = false;
  private acc = 0;
  time = 0;
  private camX = 20;
  private sAmt = 1;
  private flip: { from: number; to: number; t: number } | null = null;
  private ripples: Ripple[] = [];
  private sendT = 0;
  private worldSendT = 0;
  private saveT = 0;
  private worldDirty = false;
  private fade = 1;
  private fadeTarget = 0;
  private endingT = -1;
  private clarity = 0;
  private glow = 0;
  private partnerSeen = false;
  private hiddenPrev: [boolean, boolean] = [false, false];
  /** 상대의 마지막 위치 (다시 들어왔을 때 그 자리에서 이어서) */
  private lastPartner: PlayerNetState | null = null;
  private helloCount = 0;
  private interactable: Interactable | null = null;
  private buoyRippleT = 0;
  private attractT = 0;
  private lastFrame = performance.now();
  private exiting = false;
  onExit: (() => void) | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new Renderer(canvas);
    for (const b of BUOYS) this.buoySink[b.id] = 0;
    window.addEventListener('resize', () => this.renderer.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.renderer.resize(), 200));
    this.bindUi();
    this.players.forEach((p) => (p.present = false));
    requestAnimationFrame((t) => this.loop(t));
    (window as unknown as { __yunseul: unknown }).__yunseul = this.debugApi();
  }

  // -------------------------------------------------------------------------
  // 시작 / 종료

  start(session: Session) {
    this.session = session;
    this.running = true;
    this.exiting = false;
    this.viewRole = session.myRole;
    this.resetRound(createWorldState());
    this.sAmt = this.viewRole === 0 ? 1 : -1;
    this.flip = null;
    this.fade = 1;
    this.fadeTarget = 0;
    const solo = session.mode === 'solo';
    for (const p of this.players) {
      p.remote = !solo && p.role !== session.myRole;
      p.present = solo || p.role === session.myRole;
    }
    this.partnerSeen = solo;
    this.lastPartner = null;
    this.helloCount = 0;
    if (session.isHost && !solo) this.restoreHost();
    this.camX = this.renderer.clampCamX(this.players[this.viewRole].body.x);
    this.hud.show(true);
    this.hud.setButtons({ swap: solo, invite: !solo && session.isHost });
    this.hud.showEnding(false);
    this.hud.clearDialog();
    this.updateStatus();

    session.attach({
      onStatus: (t) => this.updateStatus(t),
      onPeer: (joined) => this.onPeer(joined),
      onHello: (h) => this.onHello(h),
      onPlayer: (s) => this.onPlayer(s),
      onWorld: (s) => this.onWorld(s),
      onAction: (a) => this.applyHostAction(a),
      onEmote: (e) => this.showEmote(e.r, e.k, false),
    });
  }

  exit() {
    if (this.exiting) return;
    this.exiting = true;
    this.fadeTarget = 1;
    setTimeout(() => {
      this.session?.close();
      this.session = null;
      this.running = false;
      this.hud.show(false);
      this.hud.showEnding(false);
      this.hud.showInvite(false);
      this.hud.toggleWheel(false);
      this.hud.clearDialog();
      this.hud.setPrompt(null);
      this.players.forEach((p) => {
        p.reset();
        p.present = false;
      });
      this.st = createWorldState();
      this.prev = cloneState(this.st);
      this.fadeTarget = 0;
      this.sAmt = 1;
      this.onExit?.();
    }, 650);
  }

  private resetRound(st: WorldState) {
    this.st = st;
    this.prev = cloneState(st);
    for (const b of BUOYS) this.buoySink[b.id] = st.buoys[b.id] ?? 0;
    this.players.forEach((p) => p.reset());
    this.story.reset();
    this.hud.clearDialog();
    this.hud.showEnding(false);
    this.endingT = -1;
    this.clarity = 0;
    this.glow = 0;
    this.ripples = [];
  }

  private get solo() {
    return this.session?.mode === 'solo';
  }

  private get isHost() {
    return !!this.session?.isHost;
  }

  // -------------------------------------------------------------------------
  // 네트워크

  private onPeer(joined: boolean) {
    const s = this.session;
    if (!s) return;
    const partner = this.players[other(s.myRole)];
    if (joined) {
      if (s.isHost) {
        const hello: Hello = {
          v: 1,
          hostRole: s.myRole,
          guestRole: other(s.myRole),
          state: this.st,
          host: this.players[s.myRole].netState(),
          guest: this.lastPartner,
        };
        s.sendHello(hello);
      }
      this.audio.play('pop');
      this.hud.toast('수면 너머에 누군가 나타났어요 ♥');
    } else {
      partner.present = false;
      this.hud.toast('상대가 잠시 떠났어요. 같은 링크로 다시 들어오면 이어서 할 수 있어요.', 4);
    }
    this.updateStatus();
  }

  private onHello(h: Hello) {
    const s = this.session!;
    const mePrev = this.players[h.guestRole];
    // 호스트가 새로고침한 경우: 같은 판이면 지금 서 있던 자리를 그대로 유지해요.
    const keep = this.helloCount > 0 && this.st.round === h.state.round && mePrev.present && !mePrev.hidden ? { x: mePrev.body.x, y: mePrev.body.y } : null;
    this.helloCount++;
    this.viewRole = h.guestRole;
    this.sAmt = this.viewRole === 0 ? 1 : -1;
    this.resetRound(h.state);
    for (const p of this.players) {
      p.remote = p.role !== s.myRole;
      p.present = p.role === s.myRole;
    }
    const me = this.players[s.myRole];
    const pos = keep ?? (h.guest && !h.guest.hidden ? { x: h.guest.x, y: h.guest.y } : null);
    if (pos) {
      me.body.x = pos.x;
      me.body.y = pos.y;
      // 물에 빠졌을 때 돌아올 자리는 단단한 땅 위일 때만 바꿔요.
      if (solidAt(me.role, pos.x, pos.y - 0.05)) me.lastSafe = { x: pos.x, y: pos.y };
    }
    if (h.host) this.onPlayer(h.host);
    this.camX = this.renderer.clampCamX(this.players[this.viewRole].body.x);
    this.hud.setButtons({ swap: false, invite: false });
    this.updateStatus();
  }

  private onPlayer(s: PlayerNetState) {
    if (!this.session || s.r === this.session.myRole) return;
    this.lastPartner = s;
    const p = this.players[s.r];
    if (!p.present) {
      p.present = true;
      p.body.x = s.x;
      p.body.y = s.y;
      if (!this.partnerSeen) this.partnerSeen = true;
      this.updateStatus();
    }
    p.receive(s);
  }

  private onWorld(s: WorldState) {
    if (s.round !== this.st.round) {
      this.resetRound(s);
      return;
    }
    this.st = s;
  }

  private act(a: Action) {
    if (!this.session) return;
    if (this.isHost) this.applyHostAction(a);
    else this.session.sendAction(a);
  }

  private applyHostAction(a: Action) {
    if (a.k === 'reset') {
      const next = createWorldState(this.st.round + 1);
      this.resetRound(next);
      this.worldDirty = true;
      return;
    }
    if (applyAction(this.st, a)) this.worldDirty = true;
  }

  private updateStatus(extra?: string) {
    const s = this.session;
    if (!s || s.mode === 'solo') {
      this.hud.setStatus('');
      return;
    }
    if (!s.ready) {
      this.hud.setStatus(extra ?? '방을 찾는 중…', 'wait');
      return;
    }
    const partner = this.players[other(s.myRole)];
    if (s.connected && partner.present) this.hud.setStatus(`${ROLE_NAME[partner.role]}와 함께 ♥`, 'ok');
    else if (s.isHost) this.hud.setStatus(`친구를 기다리는 중 · 코드 ${s.room}`, 'wait');
    else this.hud.setStatus(extra ?? '다시 연결하는 중…', 'warn');
  }

  // -------------------------------------------------------------------------
  // 호스트 상태 저장 (새로고침해도 이어서)

  private saveHost() {
    const s = this.session;
    if (!s || !s.isHost || s.mode === 'solo') return;
    try {
      localStorage.setItem(`yunseul:host:${s.room}`, JSON.stringify({ t: Date.now(), st: this.st, me: this.players[s.myRole].netState(), partner: this.lastPartner }));
    } catch {
      /* 저장 공간이 없으면 무시 */
    }
  }

  private restoreHost() {
    const s = this.session!;
    try {
      const raw = localStorage.getItem(`yunseul:host:${s.room}`);
      if (!raw) return;
      const d = JSON.parse(raw) as { t: number; st: WorldState; me: PlayerNetState; partner?: PlayerNetState | null };
      if (Date.now() - d.t > 6 * 3600 * 1000) return;
      this.resetRound(d.st);
      this.lastPartner = d.partner ?? null;
      if (!d.me.hidden) {
        this.players[s.myRole].body.x = d.me.x;
        this.players[s.myRole].body.y = d.me.y;
      }
      this.hud.toast('지난 여행을 이어서 해요');
    } catch {
      /* 무시 */
    }
  }

  // -------------------------------------------------------------------------
  // UI

  private bindUi() {
    const $ = (id: string) => document.getElementById(id)!;
    this.input.bindJoystick($('joy'), $('joyKnob'));
    this.input.bindButton($('btnJump'), 'jump');
    this.input.bindButton($('btnAct'), 'interact');
    this.input.bindButton($('btnEmote'), 'emote');
    this.input.bindButton($('btnSwap'), 'swap');
    $('btnMute').addEventListener('click', () => {
      this.audio.setMuted(!this.audio.isMuted);
      this.hud.setMuted(this.audio.isMuted);
    });
    $('btnHome').addEventListener('click', () => this.exit());
    $('btnInvite').addEventListener('click', () => this.openInvite());
    $('inviteClose').addEventListener('click', () => this.hud.showInvite(false));
    $('inviteCopy').addEventListener('click', async () => {
      const link = ($('inviteLink') as HTMLInputElement).value;
      try {
        await navigator.clipboard.writeText(link);
        this.hud.toast('링크를 복사했어요');
      } catch {
        ($('inviteLink') as HTMLInputElement).select();
        this.hud.toast('링크를 길게 눌러 복사해 주세요');
      }
    });
    $('inviteShare').addEventListener('click', async () => {
      const link = ($('inviteLink') as HTMLInputElement).value;
      if (navigator.share) {
        try {
          await navigator.share({ title: '윤슬: 물 위의 나, 물 아래의 너', text: '수면 너머에서 만나요', url: link });
        } catch {
          /* 취소 */
        }
      } else {
        this.hud.toast('이 브라우저는 공유하기를 지원하지 않아요. 복사해 주세요.');
      }
    });
    $('btnReplay').addEventListener('click', () => {
      this.audio.play('ui');
      this.act({ k: 'reset' });
      this.hud.showEnding(false);
    });
    $('btnEndHome').addEventListener('click', () => this.exit());
    this.hud.onEmote = (k) => this.sendEmote(k);
    window.addEventListener('keydown', (e) => {
      if (!this.running || e.repeat) return;
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= EMOTES.length) this.sendEmote(EMOTES[n - 1].kind);
      if (e.key === 'Escape') this.hud.toggleWheel(false);
    });
  }

  openInvite() {
    const s = this.session;
    if (!s) return;
    const url = new URL(location.href);
    url.search = '';
    url.hash = '';
    url.searchParams.set('room', s.room);
    if (s.mode === 'local') url.searchParams.set('net', 'local');
    this.hud.showInvite(true, url.toString(), s.room);
  }

  private sendEmote(k: EmoteKind) {
    if (!this.session) return;
    const r = this.solo ? this.viewRole : this.session.myRole;
    this.showEmote(r, k, true);
    if (!this.solo) this.session.sendEmote({ r, k });
  }

  private showEmote(r: Role, k: EmoteKind, mine: boolean) {
    this.hud.emote(r, k, this.time, mine || this.solo);
    this.audio.play('emote', mine ? 1 : 0.8);
    const p = this.players[r];
    this.renderer.stage.burst(r, p.body.x, p.body.y + 1.4, r === 0 ? 0xffc2d6 : 0xd6ccff, 8, 1.2);
  }

  // -------------------------------------------------------------------------
  // 루프

  private loop(t: number) {
    const dt = Math.min(0.1, Math.max(0, (t - this.lastFrame) / 1000));
    this.lastFrame = t;
    this.time += dt;
    if (this.running) this.frameGame(dt);
    else this.frameAttract(dt);
    requestAnimationFrame((tt) => this.loop(tt));
  }

  /** 로비 뒤에서 천천히 흐르는 배경 화면 */
  private frameAttract(dt: number) {
    this.attractT += dt;
    const target = 30 + Math.sin(this.attractT * 0.045) * 22;
    this.camX = this.renderer.clampCamX(this.camX + (target - this.camX) * Math.min(1, dt * 0.8));
    const cycle = (this.attractT % 24) / 24;
    const flipT = THREE.MathUtils.smoothstep(cycle, 0.46, 0.54) - THREE.MathUtils.smoothstep(cycle, 0.96, 1.0);
    this.sAmt = Math.cos(Math.PI * flipT);
    this.fade += (this.fadeTarget - this.fade) * Math.min(1, dt * 3);
    this.renderFrame(dt);
  }

  private frameGame(dt: number) {
    const s = this.session!;
    // 입력
    if (this.input.consumeEmote()) {
      this.hud.toggleWheel();
      this.audio.play('ui', 0.6);
    }
    if (this.input.consumeSwap() && this.solo) this.swapView();
    const ready = s.ready;
    this.input.enabled = ready && !this.hud.wheelOpen && !this.exiting;

    // 고정 스텝 물리
    this.acc += dt;
    let steps = 0;
    while (this.acc >= STEP && steps < 6) {
      this.fixedStep(STEP);
      this.acc -= STEP;
      steps++;
    }
    if (steps === 6) this.acc = 0;

    // 원격 플레이어 보간
    for (const p of this.players) if (p.remote) p.smoothRemote(dt);

    // 상호작용
    this.interactable = ready ? this.findInteractable() : null;
    if (this.input.consumeInteract() && this.interactable) this.doInteract(this.interactable);

    // 네트워크 전송
    if (s.online && ready) {
      this.sendT -= dt;
      if (this.sendT <= 0) {
        this.sendT = 1 / 20;
        s.sendPlayer(this.players[s.myRole].netState());
      }
      if (s.isHost) {
        this.worldSendT -= dt;
        if (this.worldDirty || this.worldSendT <= 0) {
          this.worldSendT = 0.1;
          this.worldDirty = false;
          s.sendWorld(this.st);
        }
        this.saveT -= dt;
        if (this.saveT <= 0) {
          this.saveT = 2;
          this.saveHost();
        }
      }
    }

    // 상태 변화 연출
    this.diffEffects();
    this.prev = cloneState(this.st);

    // 스토리 / 목표
    const ctx = this.storyCtx();
    this.story.update(dt, ctx);
    if (this.hud.dialogIdle) {
      const l = this.story.next();
      if (l) this.hud.say(l);
    }
    this.hud.setObjective(ready ? objective(ctx) : '수면 너머의 친구를 기다리는 중');

    // 뒤집기 전환
    if (this.flip) {
      this.flip.t = Math.min(1, this.flip.t + dt / 0.9);
      const e = THREE.MathUtils.smoothstep(this.flip.t, 0, 1);
      this.sAmt = Math.cos(Math.PI * (this.flip.from > 0 ? e : 1 - e));
      if (this.flip.t >= 1) {
        this.sAmt = this.flip.to;
        this.flip = null;
      }
    }

    // 엔딩
    this.updateEnding(dt);

    // 카메라
    const me = this.players[this.viewRole];
    let tx = me.body.x + me.face * 1.1;
    if (this.endingT >= 0) tx = MOON_BRIDGE.cx;
    this.camX = this.renderer.clampCamX(this.camX + (tx - this.camX) * (1 - Math.exp(-dt * (this.flip ? 5 : 3))));

    // 음악 섞기
    const partner = this.players[other(this.viewRole)];
    const closeness = partner.present && !partner.hidden ? Math.max(0, 1 - Math.abs(partner.body.x - me.body.x) / 14) : 0;
    this.audio.setMix(this.viewRole, closeness, this.endingT >= 0 ? Math.min(1, this.endingT / 3) : 0);

    this.fade += (this.fadeTarget - this.fade) * Math.min(1, dt * 3);
    this.renderFrame(dt);
    this.updateOverlays(dt);
  }

  private fixedStep(h: number) {
    const s = this.session!;
    const oldSink = { ...this.buoySink };

    if (s.isHost) {
      const sims: SimPlayer[] = this.players.map((p) => ({ role: p.role, present: p.present, state: p.present ? p.netState() : null }));
      for (const e of stepWorld(this.st, h, sims)) {
        if (e.e === 'transfer') this.worldDirty = true;
      }
      for (const b of BUOYS) this.buoySink[b.id] = this.st.buoys[b.id];
    } else {
      const k = 1 - Math.exp(-h * 12);
      for (const b of BUOYS) this.buoySink[b.id] += ((this.st.buoys[b.id] ?? 0) - this.buoySink[b.id]) * k;
    }

    // 부표 운반 + 물결
    let moving = 0;
    for (const b of BUOYS) {
      const d = Math.abs(this.buoySink[b.id] - oldSink[b.id]);
      moving = Math.max(moving, d);
      for (const p of this.players) {
        if (p.remote || p.hidden || p.body.gk !== 'buoy' || p.body.gid !== b.id) continue;
        p.carry(buoyTop(b, this.buoySink[b.id], p.role) - buoyTop(b, oldSink[b.id], p.role));
      }
    }
    this.buoyRippleT -= h;
    if (moving > 0.002 && this.buoyRippleT <= 0) {
      this.buoyRippleT = 0.45;
      for (const b of BUOYS) if (Math.abs(this.buoySink[b.id] - oldSink[b.id]) > 0.002) this.addRipple(b.x, 0.5);
      this.audio.play('buoy', 0.5);
    }

    const colliders: Record<WorldId, Collider[]> = {
      0: collidersFor(0, this.st, this.buoySink),
      1: collidersFor(1, this.st, this.buoySink),
    };
    for (const p of this.players) {
      if (p.remote || !p.present) continue;
      const controlled = this.solo ? p.role === this.viewRole : p.role === s.myRole;
      const input = controlled && s.ready ? this.input.take() : null;
      const r = p.step(h, input, colliders[p.role], true);
      if (!r) continue;
      const loud = controlled ? 1 : 0.4;
      if (r.jumped) this.audio.play('jump', loud);
      if (r.landed && !r.splashed) {
        this.audio.play('land', loud * 0.8);
        if (p.body.gk === 'bridge' && p.role === 0) this.addRipple(p.body.x, 0.4);
      }
    }
  }

  // -------------------------------------------------------------------------
  // 상호작용

  private findInteractable(): Interactable | null {
    const me = this.players[this.viewRole];
    if (me.hidden || !me.present || this.endingT >= 0) return null;
    const r = me.role;
    const { x, y } = me.body;
    const st = this.st;
    const held = st.items.find((i) => i.mode === 'held' && i.holder === r);
    if (held) {
      if (r === ALTAR.world && Math.abs(x - ALTAR.x) < 1.3 && Math.abs(y - ALTAR.y) < 0.8) {
        return { kind: 'altar', x: ALTAR.x, y: ALTAR.y + 1.4, label: '제단에 진주 올리기' };
      }
      // 들고 있어도 등불·조개·돌판은 그대로 쓸 수 있어요. 그 외에는 내려놓기.
      const ctx = this.findFixture(r, x, y);
      if (ctx) return ctx;
      const dx = x + me.face * 0.6;
      const overWater = !solidAt(r, dx, 0.2) && !(y > 0.8 && solidAt(r, dx, y - 0.3));
      return { kind: 'drop', id: held.id, x, y: y + 2.0, label: overWater ? '물에 떨어뜨리기' : '내려놓기' };
    }
    for (const it of st.items) {
      if (it.world !== r || (it.mode !== 'ground' && it.mode !== 'floating')) continue;
      if (Math.abs(it.x - x) < 0.95 && it.y > y - 2.4 && it.y < y + 1.4) return { kind: 'pickup', id: it.id, x: it.x, y: it.y + 1.0, label: '달진주 줍기' };
    }
    return this.findFixture(r, x, y);
  }

  /** 등불·달꽃·조개·돌판처럼 제자리에 있는 것들 */
  private findFixture(r: Role, x: number, y: number): Interactable | null {
    const st = this.st;
    for (const l of LIGHTS) {
      if (l.world !== r || st.lit[l.id]) continue;
      if (Math.abs(l.x - x) < 1.1 && Math.abs(l.y - y) < 1.5) return { kind: 'light', id: l.id, x: l.x, y: l.y + 2.2, label: l.kind === 'lantern' ? '등불 켜기' : '달꽃 깨우기' };
    }
    if (r === SHELL_WORLD && !st.solved && st.shellTimer <= 0) {
      for (const sh of SHELLS) {
        if (Math.abs(sh.x - x) < 0.9 && Math.abs(y - 1.5) < 1.0) return { kind: 'shell', idx: sh.idx, x: sh.x, y: 1.5 + 1.4, label: '조개 열기' };
      }
    }
    if (r === TABLET.world && Math.abs(TABLET.x - x) < 1.1 && Math.abs(y - TABLET.y) < 1.0) {
      return { kind: 'tablet', x: TABLET.x, y: TABLET.y + 1.9, label: '돌판 살펴보기' };
    }
    return null;
  }

  private doInteract(it: Interactable) {
    const me = this.players[this.viewRole];
    const r = me.role;
    switch (it.kind) {
      case 'pickup':
        this.act({ k: 'pickup', id: it.id, r });
        break;
      case 'drop':
        this.act({
          k: 'drop',
          id: it.id,
          r,
          x: me.body.x + me.face * 0.35,
          y: me.body.y + 1.25,
          vx: me.face * 2.3 + me.body.vx * 0.3,
          vy: 2.8,
        });
        break;
      case 'altar':
        this.act({ k: 'altar', r });
        break;
      case 'light':
        this.act({ k: 'light', id: it.id });
        break;
      case 'shell':
        this.act({ k: 'shell', idx: it.idx });
        break;
      case 'tablet':
        this.audio.play('ui');
        this.story.push(eventLines('tablet', r, this.st));
        this.hud.clearDialog();
        break;
    }
  }

  private swapView() {
    if (this.flip) return;
    const to = this.viewRole === 0 ? -1 : 1;
    this.flip = { from: this.sAmt, to, t: 0 };
    this.viewRole = other(this.viewRole);
    this.story.clearQueue();
    this.hud.clearDialog();
    this.hud.toggleWheel(false);
    this.audio.play('swap');
    this.input.clearQueued();
  }

  // -------------------------------------------------------------------------
  // 연출

  private addRipple(x: number, s: number) {
    this.ripples.push({ x, z: 0.35, t: this.time, s });
    if (this.ripples.length > 6) this.ripples.shift();
  }

  private say(ev: string) {
    this.story.push(eventLines(ev, this.viewRole, this.st));
  }

  private diffEffects() {
    const prev = this.prev;
    const cur = this.st;
    const stage = this.renderer.stage;
    if (prev.round !== cur.round) return;

    for (const l of LIGHTS) {
      if (!prev.lit[l.id] && cur.lit[l.id]) {
        this.audio.play('light');
        stage.burst(l.world, l.x, l.y + 1.1, l.kind === 'lantern' ? 0xffe29a : 0xe0d6ff, 30, 2.4);
        const br = BRIDGES.find((b) => b.id === l.bridge)!;
        setTimeout(() => this.audio.play('bridge', 0.8), 350);
        for (const seg of br.segs) {
          for (let x = seg.x0; x < seg.x1; x += 0.8) stage.burst(br.world, x, seg.y1, br.kind === 'star' ? 0xfff3b0 : 0xc9f5b9, 3, 1.2);
          if (br.kind === 'lily') this.addRipple((seg.x0 + seg.x1) / 2, 0.6);
        }
        this.say(`lit:${l.id}`);
      }
    }

    for (const it of cur.items) {
      const p = prev.items.find((i) => i.id === it.id);
      if (!p) continue;
      if (p.mode !== 'held' && it.mode === 'held') {
        this.audio.play('pickup');
        const holder = this.players[it.holder as Role];
        stage.burst(holder.role, holder.body.x, holder.body.y + 1.5, 0xf2eaff, 16, 1.6);
        this.say(`pickup:${it.holder}`);
      }
      if (p.mode === 'held' && it.mode === 'falling') this.audio.play('drop');
      if (p.world !== it.world && p.mode !== 'held' && it.mode !== 'held') {
        this.audio.play('transfer');
        this.addRipple(it.x, 1);
        stage.splash(p.world, it.x, true);
        stage.splash(it.world, it.x, true);
        stage.burst(it.world, it.x, 0.3, 0xf2eaff, 20, 2);
        this.say(`transfer:${it.world}`);
      }
      if (p.mode === 'falling' && it.mode === 'ground' && p.world === it.world) this.audio.play('land', 0.5);
      if (p.mode !== 'placed' && it.mode === 'placed') {
        this.audio.play('altar');
        stage.burst(0, ALTAR.x, ALTAR.y + 1.2, 0xfff0c0, 40, 2.6);
        this.say('altar');
      }
    }

    if (prev.shellOpen !== cur.shellOpen && cur.shellOpen >= 0) {
      this.audio.play('shell');
      const sh = SHELLS[cur.shellOpen];
      stage.burst(SHELL_WORLD, sh.x, 1.9, 0xffd6f0, 12, 1.4);
      if (!cur.solved) {
        setTimeout(() => this.audio.play('wrong'), 250);
        this.say('wrong');
      }
    }
    if (!prev.solved && cur.solved) {
      this.audio.play('solve');
      for (let y = 2; y < 9; y += 1) stage.burst(0, 41.1, y, 0xffffff, 6, 1.6);
      this.say('solved');
    }
    if (!prev.ending && cur.ending) {
      this.endingT = 0;
      this.audio.play('ending');
      this.hud.clearDialog();
      this.story.clearQueue();
      this.say('ending');
    }

    // 플레이어가 물에 빠졌다가 돌아올 때
    this.players.forEach((p, i) => {
      if (!p.present) return;
      if (!this.hiddenPrev[i] && p.hidden) {
        this.audio.play('splash', p.role === this.viewRole ? 1 : 0.6);
        stage.splash(p.role, p.body.x);
        this.addRipple(p.body.x, 1);
      }
      if (this.hiddenPrev[i] && !p.hidden) {
        this.audio.play('pop', p.role === this.viewRole ? 1 : 0.6);
        stage.burst(p.role, p.body.x, p.body.y + 0.6, p.role === 0 ? 0xffd6e2 : 0xd9ccff, 14, 1.6);
      }
      this.hiddenPrev[i] = p.hidden;
    });
  }

  private updateEnding(dt: number) {
    if (this.endingT < 0) return;
    this.endingT += dt;
    this.clarity = Math.min(1, this.endingT / 3);
    this.glow = Math.max(0, Math.sin(Math.min(1, this.endingT / 6) * Math.PI)) * 0.22;
    if (Math.random() < 0.5) {
      for (const w of [0, 1] as WorldId[]) {
        this.renderer.stage.particles[w].spawn({
          x: MOON_BRIDGE.cx + (Math.random() - 0.5) * 14,
          y: 0.1,
          z: -2 + Math.random() * 3,
          vy: 0.8 + Math.random() * 1.2,
          life: 4,
          size: 0.12,
          color: w === 0 ? [1, 0.93, 0.75] : [0.85, 0.85, 1],
          behavior: 'rise',
        });
      }
    }
    if (this.endingT > 10 && this.endingT - dt <= 10) {
      this.hud.showEnding(true, {
        title: 'Chapter 1. 윤슬 — 완료',
        body: '리아, 아리. 거꾸로 읽어도 같은 이름.\n둘 중 누가 먼저 꿈을 꾸었을까?\n\n— 2장 「물그림자 우체국」에서 계속',
      });
    }
  }

  private storyCtx(): StoryCtx {
    const me = this.players[this.viewRole];
    const partner = this.players[other(this.viewRole)];
    return { role: this.viewRole, st: this.st, me, partner, partnerPresent: partner.present, solo: this.solo };
  }

  // -------------------------------------------------------------------------
  // 렌더

  private groundBelow(p: Player): number {
    const cols = collidersFor(p.role, this.st, this.buoySink);
    let best = -1;
    const { x, y, w } = p.body;
    for (const c of cols) {
      if (x + w / 2 <= c.x0 || x - w / 2 >= c.x1) continue;
      if (c.y1 <= y + 0.05 && c.y1 > best) best = c.y1;
    }
    const dx = x - MOON_BRIDGE.cx;
    if (Math.abs(dx) < MOON_BRIDGE.r) {
      const t = Math.sqrt(MOON_BRIDGE.r ** 2 - dx * dx);
      if (t <= y + 0.05 && t > best) best = t;
    }
    return best;
  }

  private renderFrame(dt: number) {
    const partnerRole = other(this.sAmt >= 0 ? 0 : 1);
    const partner = this.players[partnerRole];
    this.renderer.stage.update({
      st: this.st,
      buoySink: this.buoySink,
      players: this.players,
      groundY: [this.groundBelow(this.players[0]), this.groundBelow(this.players[1])],
      time: this.time,
      dt,
      camX: this.camX,
      pxScale: this.renderer.pxScale,
    });
    this.renderer.render({
      sAmt: this.sAmt,
      camX: this.camX,
      time: this.time,
      ripples: this.ripples,
      partner: { x: partner.body.x, y: partner.body.y + 0.6, world: partner.role, visible: this.running && partner.present && !partner.hidden },
      clarity: this.clarity,
      fade: this.fade,
      fadeColor: FADE_COLOR,
      glow: this.glow,
    });
  }

  private updateOverlays(dt: number) {
    this.hud.update(dt, this.time);
    const flipping = !!this.flip;
    for (const p of this.players) {
      const pos = this.renderer.project(p.role, p.body.x, p.body.y + 1.75);
      this.hud.placeBubble(p.role, pos.x, pos.y, p.present && !p.hidden && !flipping);
    }
    const it = this.interactable;
    if (it && !flipping && !this.hud.wheelOpen) {
      const pos = this.renderer.project(this.viewRole, it.x, it.y);
      this.hud.setPrompt(it.label, pos.x, pos.y);
    } else {
      this.hud.setPrompt(null);
    }
  }

  // -------------------------------------------------------------------------
  // 자동 테스트용 디버그 핸들

  private debugApi() {
    return {
      game: this,
      state: () => this.st,
      players: () => this.players.map((p) => ({ role: p.role, x: p.body.x, y: p.body.y, gk: p.body.gk, gid: p.body.gid, hidden: p.hidden, present: p.present })),
      teleport: (r: Role, x: number, y: number) => {
        const p = this.players[r];
        p.body.x = x;
        p.body.y = y;
        p.body.vx = 0;
        p.body.vy = 0;
      },
      view: (r: Role) => {
        if (this.viewRole !== r && this.solo) this.swapView();
      },
      interact: () => {
        const it = this.findInteractable();
        if (it) this.doInteract(it);
        return it?.kind ?? null;
      },
      target: () => this.findInteractable()?.label ?? null,
      emote: (k: EmoteKind) => this.sendEmote(k),
      camera: () => ({ camX: this.camX, sAmt: this.sAmt, viewRole: this.viewRole }),
      items: ITEMS,
      sfx: (s: Sfx) => this.audio.play(s),
    };
  }
}
