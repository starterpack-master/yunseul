import * as THREE from 'three';
import { AudioEngine, type Sfx } from '../audio/audio';
import { Session, type Hello, type MarkMsg } from '../net/session';
import type { LinkState } from '../net/transport';
import { Renderer, type Ripple } from '../render/renderer';
import { Hud } from '../ui/hud';
import { allKeepsakes, getChapter } from './chapters';
import type { ChapterDef, StoryCtx } from './chapters/types';
import { Director, type DirectorHost } from './director';
import { Input } from './input';
import { Player } from './player';
import { isLook, loadSave, reachChapter, sanitizeLook, writeSave } from './save';
import { epilogueScript, eventLines, introScript, outroScript } from './scenes';
import { EMOTES, ROLE_NAME, other, type ChapterId, type EmoteKind, type Look, type PlayerNetState, type Role, type WorldId } from './types';
import {
  applyAction,
  arcsFor,
  cloneState,
  collidersFor,
  createWorldState,
  litFlag,
  solidAt,
  stepWorld,
  buoyTop,
  type Action,
  type Collider,
  type SimPlayer,
  type WorldState,
} from './world';

const STEP = 1 / 60;
const FADE_COLOR = new THREE.Color(0xfff2f6);

type Interactable = {
  kind: 'pickup' | 'drop' | 'place' | 'light' | 'use' | 'magpie' | 'keep' | 'diary' | 'sign' | 'npc';
  id: string;
  x: number;
  y: number;
  label: string;
  song?: boolean;
};

type SceneKind = 'intro' | 'outro' | 'epilogue';

export interface StartOpts {
  ng?: boolean;
  chapter?: ChapterId;
}

export class Game {
  readonly renderer: Renderer;
  readonly input: Input;
  readonly audio = new AudioEngine();
  readonly hud = new Hud();
  private director: Director;
  session: Session | null = null;
  st: WorldState = createWorldState();
  private prev: WorldState = cloneState(this.st);
  private ch: ChapterDef = getChapter('ch1');
  private loadedKey = '';
  private buoySink: Record<string, number> = {};
  players: [Player, Player] = [new Player(0), new Player(1)];
  viewRole: Role = 0;
  running = false;
  private acc = 0;
  time = 0;
  private camX = 0;
  private camOverride: number | null = null;
  private sAmt = 1;
  private flip: { from: number; to: number; t: number } | null = null;
  private ripples: Ripple[] = [];
  private sendT = 0;
  private worldSendT = 0;
  private saveT = 0;
  private worldDirty = false;
  private fade = 1;
  private fadeTarget = 0;
  private fadeSpeed = 1;
  private clarity = 0;
  private clarityTarget = 0;
  private glow = 0;
  private dawn = 0;
  private flashFx = 0;
  private hiddenPrev: [boolean, boolean] = [false, false];
  private interactable: Interactable | null = null;
  private buoyRippleT = 0;
  private attractT = 0;
  private lastFrame = performance.now();
  private exiting = false;
  private lastPartner: PlayerNetState | null = null;
  private helloCount = 0;
  private fired = new Set<string>();
  private queue: { who: string; text: string; think?: boolean }[] = [];
  private scene: SceneKind | null = null;
  /** 컷신에서 걷는 사람 (혼자 모드에선 번갈아) */
  private actor: Role = 0;
  private hideChar: [boolean, boolean] = [false, false];
  private grandma: { pose?: 'sit' | 'stand' | 'sleep'; x?: number; face?: 1 | -1 } = {};
  private looks: Record<Role, Look>;
  private partnerLook: { look: Look; pin: boolean } | null = null;
  private gotPin = false;
  private singT = 0;
  private echoT = 0;
  private autoSing = 0;
  private photoPending: { spots: string[] } | null = null;
  private splashLocal = 0;
  private moonTaps = 0;
  private linkState: LinkState = 'starting';
  private linkDetail = '';
  private endingShown = false;
  onExit: (() => void) | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new Renderer(canvas);
    this.input = new Input(canvas);
    const save = loadSave();
    this.looks = { 0: sanitizeLook(0, save.looks[0]), 1: sanitizeLook(1, save.looks[1]) };
    this.director = new Director(this.directorHost());
    window.addEventListener('resize', () => this.renderer.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.renderer.resize(), 200));
    this.bindUi();
    this.players.forEach((p) => (p.present = false));
    this.renderer.stage.load(this.ch, this.st);
    this.loadedKey = 'attract';
    this.hud.onType = () => this.audio.play('type', 0.5);
    requestAnimationFrame((t) => this.loop(t));
    (window as unknown as { __yunseul: unknown }).__yunseul = this.debugApi();
  }

  // -------------------------------------------------------------------------
  // 시작 / 종료

  start(session: Session, opts: StartOpts = {}) {
    this.session = session;
    this.running = true;
    this.exiting = false;
    this.endingShown = false;
    this.viewRole = session.myRole;
    this.lastPartner = null;
    this.helloCount = 0;
    this.partnerLook = null;
    this.linkState = session.online ? 'starting' : 'connected';
    const solo = session.mode === 'solo';
    this.st = createWorldState({ chapter: opts.chapter ?? 'ch1', ng: !!opts.ng });
    this.prev = cloneState(this.st);
    for (const p of this.players) {
      p.remote = !solo && p.role !== session.myRole;
      p.present = solo || p.role === session.myRole;
    }
    if (session.isHost && !solo) this.restoreHost();
    this.hud.show(true);
    this.hud.setButtons({ swap: solo, invite: !solo && session.isHost });
    this.hud.showEnding(false);
    this.hud.clearText();
    this.hud.clearMarks();
    this.sAmt = this.viewRole === 0 ? 1 : -1;
    this.flip = null;
    this.applyLooks();
    this.updateStatus();
    session.attach({
      onLink: (state, detail) => {
        this.linkState = state;
        this.linkDetail = detail ?? '';
        this.updateStatus();
      },
      onPeer: (joined) => this.onPeer(joined),
      onHello: (h) => this.onHello(h),
      onPlayer: (s) => this.onPlayer(s),
      onWorld: (s) => this.onWorld(s),
      onAction: (a) => this.applyHostAction(a),
      onEmote: (e) => this.showEmote(e.r, e.k as EmoteKind, false),
      onMark: (m) => this.showMark(m, false),
      onLook: (l) => this.onLook(l),
    });
    // 호스트(혼자 포함)는 바로 장을 열어요. 손님은 hello를 받은 뒤에 열어요.
    if (session.isHost) this.ensureChapter(true);
    else {
      this.fade = 1;
      this.fadeTarget = 0.35;
    }
  }

  exit() {
    if (this.exiting) return;
    this.exiting = true;
    this.fadeTarget = 1;
    this.fadeSpeed = 3;
    setTimeout(() => {
      this.session?.close();
      this.session = null;
      this.running = false;
      this.director.stop();
      this.scene = null;
      this.hud.setScene(false);
      this.hud.show(false);
      this.hud.showEnding(false);
      this.hud.showInvite(false);
      this.hud.showPage(false);
      this.hud.toggleWheel(false);
      this.hud.clearText();
      this.hud.clearMarks();
      this.hud.setPrompt(null);
      this.players.forEach((p) => {
        p.place(0, 1.5);
        p.present = false;
        p.singing = false;
      });
      this.st = createWorldState();
      this.prev = cloneState(this.st);
      this.ch = getChapter('ch1');
      this.renderer.stage.load(this.ch, this.st);
      this.loadedKey = 'attract';
      this.hideChar = [false, false];
      this.grandma = {};
      this.camOverride = null;
      this.clarity = this.clarityTarget = 0;
      this.dawn = 0;
      this.renderer.stage.dawn = 0;
      this.fadeTarget = 0;
      this.sAmt = 1;
      this.onExit?.();
    }, 650);
  }

  private get solo() {
    return this.session?.mode === 'solo';
  }

  private get isHost() {
    return !!this.session?.isHost;
  }

  private get myRole(): Role {
    return this.session?.myRole ?? 0;
  }

  /** 지금 조작하는 캐릭터 */
  private get controlled(): Role {
    return this.solo ? this.viewRole : this.myRole;
  }

  // -------------------------------------------------------------------------
  // 장 불러오기

  private ensureChapter(allowIntro: boolean) {
    const key = `${this.st.round}:${this.st.chapter}`;
    if (key === this.loadedKey) return;
    this.loadedKey = key;
    this.ch = getChapter(this.st.chapter);
    this.renderer.stage.load(this.ch, this.st);
    this.prev = cloneState(this.st);
    for (const b of this.ch.buoys) this.buoySink[b.id] = this.st.buoys[b.id] ?? 0;
    for (const p of this.players) {
      const s = this.ch.start[p.role];
      p.place(s.x, s.y, 1);
      p.singing = false;
    }
    this.fired.clear();
    this.queue = [];
    this.hud.clearText();
    this.hud.clearMarks();
    this.ripples = [];
    this.splashLocal = 0;
    this.clarity = this.clarityTarget = 0;
    this.dawn = 0;
    this.renderer.stage.dawn = 0;
    this.hideChar = [false, false];
    this.grandma = {};
    this.camOverride = null;
    this.gotPin = this.st.chapter !== 'ch1';
    this.applyLooks();
    reachChapter(this.st.chapter);
    if (this.solo) writeSave((s) => (s.soloChapter = this.st.chapter === 'epilogue' ? 'ch3' : this.st.chapter));
    this.camX = this.renderer.clampCamX(this.players[this.viewRole].body.x, this.ch);
    this.fade = 1;
    this.fadeTarget = 0;
    this.fadeSpeed = 1;
    if (this.st.chapter === 'epilogue') {
      this.startScene('epilogue');
    } else if (allowIntro && !this.seenIntro()) {
      this.startScene('intro');
    } else {
      this.skipIntroPlacement();
    }
    if (this.st.phase === 'outro') this.startScene('outro');
  }

  private introKey(role: Role) {
    return `nsm:intro:${this.session?.room ?? 'solo'}:${this.st.round}:${this.st.chapter}:${role}`;
  }

  private seenIntro(): boolean {
    if (this.solo) return false;
    try {
      return sessionStorage.getItem(this.introKey(this.myRole)) === '1';
    } catch {
      return false;
    }
  }

  private markIntroSeen() {
    try {
      sessionStorage.setItem(this.introKey(this.myRole), '1');
    } catch {
      /* noop */
    }
  }

  /** 이야기를 이미 봤으면 물가에서 바로 시작 */
  private skipIntroPlacement() {
    for (const p of this.players) {
      if (p.remote) continue;
      p.place(-0.5, 1.5, 1);
    }
    this.gotPin = true;
    this.applyLooks();
  }

  // -------------------------------------------------------------------------
  // 컷신

  private startScene(kind: SceneKind) {
    if (this.scene === kind && this.director.running) return;
    const ng = this.st.ng;
    this.scene = kind;
    this.hud.setScene(true);
    this.hud.toggleWheel(false);
    this.queue = [];
    this.hud.clearText();
    for (const p of this.players) p.singing = false;
    const done = () => {
      this.scene = null;
      this.hud.setScene(false);
      this.camOverride = null;
      this.hud.clearText();
      if (kind === 'intro') this.markIntroSeen();
      if (kind === 'outro') this.act({ k: 'ready', r: this.myRole, chapter: this.st.chapter });
      if (kind === 'epilogue') this.showEndingCard();
    };
    if (kind === 'intro') {
      const roles: Role[] = this.solo ? [0, 1] : [this.myRole];
      const run = (i: number) => {
        const r = roles[i];
        if (r === undefined) {
          done();
          return;
        }
        if (this.solo && r !== this.viewRole) this.setView(r, false);
        this.actor = r;
        this.director.run(introScript(this.st.chapter, r, ng), () => run(i + 1));
      };
      run(0);
      return;
    }
    if (kind === 'outro') {
      this.actor = this.controlled;
      this.director.run(outroScript(this.st.chapter, ng), done);
      return;
    }
    const save = loadSave();
    const allDiary = save.diary.length >= 5 || this.st.diary.length >= 5;
    const trueEnd = ng && allDiary;
    this.actor = 0;
    if (this.solo && this.viewRole !== 0) this.setView(0, false);
    this.director.run(epilogueScript(this.solo ? 0 : this.myRole, ng, trueEnd), () => {
      if (trueEnd) writeSave((s) => (s.trueEnd = true));
      done();
    });
  }

  private directorHost(): DirectorHost {
    return {
      say: (who, text, think) => this.hud.say({ who, text, think }, false),
      narrate: (text) => this.hud.narrate(text),
      title: (no, title) => this.hud.titleCard(no, title),
      textDone: () => this.hud.textIdle,
      walkTo: (x, face, snap) => {
        const p = this.players[this.actor];
        if (p.remote) return true;
        if (snap) {
          p.body.x = x;
          p.body.vx = 0;
          if (face) p.face = face;
          (p as Player & { sceneTarget?: number }).sceneTarget = undefined;
          return true;
        }
        (p as Player & { sceneTarget?: number; sceneFace?: 1 | -1 }).sceneTarget = x;
        (p as Player & { sceneTarget?: number; sceneFace?: 1 | -1 }).sceneFace = face;
        const arrived = Math.abs(p.body.x - x) < 0.12;
        if (arrived) {
          (p as Player & { sceneTarget?: number }).sceneTarget = undefined;
          if (face) p.face = face;
        }
        return arrived;
      },
      camera: (x) => (this.camOverride = x),
      fade: (to, sec) => {
        this.fadeTarget = to;
        this.fadeSpeed = 1 / Math.max(0.05, sec) * 2.2;
      },
      sfx: (name) => this.audio.play(name as Sfx),
      hum: (sec) => this.audio.hum(sec, 0.8),
      give: () => {
        this.gotPin = true;
        this.applyLooks();
        this.renderer.stage.burst(0, this.players[0].body.x, this.players[0].body.y + 1.3, 0xffe98a, 18, 1.6);
      },
      clarity: (v) => (this.clarityTarget = v),
      view: (s) => {
        const r: Role = s > 0 ? 0 : 1;
        if (this.viewRole !== r || Math.sign(this.sAmt) !== s) {
          this.viewRole = this.solo ? r : this.viewRole;
          this.sAmt = s;
          this.flip = null;
        }
      },
      npc: (id, pose, x, face) => {
        if (id === 'grandma') this.grandma = { pose, x, face };
      },
      young: (on) => {
        this.hideChar[1] = !on;
        if (on) {
          const a = this.players[1];
          if (!a.remote) a.place(9.6, 1.5, -1);
          this.renderer.stage.burst(1, 9.6, 2.2, 0xe0d8ff, 24, 1.8);
        }
      },
      dawn: (v) => {
        this.dawn = v;
        this.renderer.stage.dawn = v;
      },
      hide: (on) => {
        this.hideChar[1] = on;
        this.hideChar[0] = false;
      },
    };
  }

  private showEndingCard() {
    if (this.endingShown) return;
    this.endingShown = true;
    const trueEnd = loadSave().trueEnd && this.st.ng;
    writeSave((s) => {
      s.clears += 1;
      for (const k of this.st.keeps) if (!s.keeps.includes(k)) s.keeps.push(k);
      s.soloChapter = 'ch1';
    });
    this.fadeTarget = 0.25;
    this.hud.showEnding(true, {
      title: '다음 여름에 만나',
      body: trueEnd ? '— 진짜 끝 —\n\n할머니의 일기장을 모두 읽었어요.\n쉰 번의 여름, 기다려 줘서 고마워요.' : '— 끝 —\n\n로비의 제목 물그림자를 다시 보세요.\n두 번째 여름에는 할머니의 마음이 조금 더 보여요.',
      sub: '쉰 번의 여름을 기다렸어',
    }, this.isHost);
    this.audio.play('ending');
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
          v: 2,
          hostRole: s.myRole,
          guestRole: other(s.myRole),
          state: this.st,
          host: this.players[s.myRole].netState(),
          guest: this.lastPartner,
        };
        s.sendHello(hello);
      }
      this.sendLook();
      this.audio.play('pop');
      this.hud.toast(this.helloCount > 0 || this.lastPartner ? '다시 연결됐어요 ♥' : '수면 너머에 누군가 나타났어요 ♥');
    } else {
      partner.present = false;
      partner.singing = false;
      this.hud.toast('연결이 끊겼어요. 다시 연결하는 중이에요…', 3);
    }
    this.updateStatus();
  }

  private onHello(h: Hello) {
    const s = this.session!;
    const me = this.players[h.guestRole];
    const sameRun = this.helloCount > 0 && this.loadedKey === `${h.state.round}:${h.state.chapter}`;
    const keep = sameRun && me.present && !me.hidden ? { x: me.body.x, y: me.body.y } : null;
    this.helloCount++;
    this.viewRole = h.guestRole;
    this.sAmt = this.viewRole === 0 ? 1 : -1;
    this.st = h.state;
    for (const p of this.players) {
      p.remote = p.role !== s.myRole;
      p.present = p.role === s.myRole;
    }
    const firstLoad = !sameRun;
    if (firstLoad) {
      this.loadedKey = '';
      this.ensureChapter(true);
    }
    const pos = keep ?? (h.guest && !h.guest.hidden && this.scene !== 'intro' ? { x: h.guest.x, y: h.guest.y } : null);
    if (pos && this.scene !== 'intro') {
      me.body.x = pos.x;
      me.body.y = pos.y;
      if (solidAt(this.ch, me.role, pos.x, pos.y - 0.05)) me.lastSafe = { x: pos.x, y: pos.y };
    }
    if (h.host) this.onPlayer(h.host);
    this.camX = this.renderer.clampCamX(this.players[this.viewRole].body.x, this.ch);
    this.hud.setButtons({ swap: false, invite: false });
    this.applyLooks();
    this.sendLook();
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
      this.updateStatus();
    }
    p.receive(s);
  }

  private onWorld(s: WorldState) {
    if (s.v !== 2) return;
    this.st = s;
    this.ensureChapter(true);
  }

  private onLook(l: unknown) {
    const v = l as { r: Role; look: Look; pin?: boolean };
    if (!isLook(v) || !this.session || v.r === this.session.myRole) return;
    this.partnerLook = { look: v.look, pin: !!v.pin };
    this.applyLooks();
  }

  private sendLook() {
    const s = this.session;
    if (!s || !s.online) return;
    const r = s.myRole;
    s.sendLook({ r, look: this.looks[r], pin: r === 1 || this.gotPin });
  }

  private applyLooks() {
    const stage = this.renderer.stage;
    const s = this.session;
    const solo = !s || s.mode === 'solo';
    for (const r of [0, 1] as Role[]) {
      const mine = solo || r === s?.myRole;
      const look = mine ? this.looks[r] : this.partnerLook?.look ?? this.looks[r];
      const pin = r === 1 ? true : mine ? this.gotPin : this.partnerLook?.pin ?? this.st.chapter !== 'ch1';
      stage.setLook(r, look, pin);
    }
  }

  setLook(role: Role, look: Look) {
    this.looks[role] = sanitizeLook(role, look);
    writeSave((s) => (s.looks[role] = this.looks[role]));
    this.applyLooks();
    this.sendLook();
  }

  private act(a: Action) {
    if (!this.session) return;
    if (this.isHost) this.applyHostAction(a);
    else this.session.sendAction(a);
  }

  private applyHostAction(a: Action) {
    if (applyAction(this.st, a)) this.worldDirty = true;
    if (a.k === 'reset' || a.k === 'goto') {
      this.loadedKey = '';
      this.endingShown = false;
      this.hud.showEnding(false);
      this.ensureChapter(true);
    }
  }

  private updateStatus() {
    const s = this.session;
    if (!s || s.mode === 'solo') {
      this.hud.setStatus('');
      return;
    }
    const partner = this.players[other(s.myRole)];
    if (s.connected && partner.present && s.ready) {
      this.hud.setStatus(`${ROLE_NAME[partner.role]}와 함께 ♥`, 'ok');
      return;
    }
    const lost = this.linkState === 'lost' || (this.helloCount > 0 || !!this.lastPartner);
    if (!s.ready) {
      this.hud.setStatus(this.linkState === 'lost' ? '연결을 다시 찾는 중…' : '방을 찾는 중…', 'wait', s.lostFor > 25);
      return;
    }
    if (lost && (this.lastPartner || this.linkState === 'lost')) {
      const detail = this.linkDetail || '다시 연결하는 중…';
      this.hud.setStatus(`연결이 끊겼어요 · ${detail}`, 'warn', s.lostFor > 25);
      return;
    }
    this.hud.setStatus(`친구를 기다리는 중 · 코드 ${s.room}`, 'wait');
  }

  // -------------------------------------------------------------------------
  // 호스트 상태 저장 (새로고침해도 이어서)

  private saveHost() {
    const s = this.session;
    if (!s || !s.isHost || s.mode === 'solo') return;
    try {
      localStorage.setItem(`nsm:host:${s.room}`, JSON.stringify({ t: Date.now(), st: this.st, me: this.players[s.myRole].netState(), partner: this.lastPartner }));
    } catch {
      /* 저장 공간이 없으면 무시 */
    }
  }

  private restoreHost() {
    const s = this.session!;
    try {
      const raw = localStorage.getItem(`nsm:host:${s.room}`);
      if (!raw) return;
      const d = JSON.parse(raw) as { t: number; st: WorldState; me: PlayerNetState; partner?: PlayerNetState | null };
      if (Date.now() - d.t > 6 * 3600 * 1000 || d.st?.v !== 2) return;
      this.st = d.st;
      this.lastPartner = d.partner ?? null;
      this.pendingMe = d.me;
      this.hud.toast('지난 여행을 이어서 해요');
    } catch {
      /* 무시 */
    }
  }

  private pendingMe: PlayerNetState | null = null;

  // -------------------------------------------------------------------------
  // UI

  private bindUi() {
    const $ = (id: string) => document.getElementById(id)!;
    this.input.bindJoystick($('joy'), $('joyKnob'));
    this.input.bindButton($('btnJump'), 'jump');
    this.input.bindButton($('btnAct'), 'act');
    this.input.bindButton($('btnEmote'), 'emote');
    this.input.bindButton($('btnSwap'), 'swap');
    $('btnMute').addEventListener('click', () => {
      this.audio.setMuted(!this.audio.isMuted);
      this.hud.setMuted(this.audio.isMuted);
    });
    $('btnHome').addEventListener('click', () => this.exit());
    $('btnInvite').addEventListener('click', () => this.openInvite());
    $('btnReload').addEventListener('click', () => this.reloadRejoin());
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
          await navigator.share({ title: '다음 여름에 만나', text: '수면 너머에서 만나요', url: link });
        } catch {
          /* 취소 */
        }
      } else this.hud.toast('이 브라우저는 공유하기를 지원하지 않아요. 복사해 주세요.');
    });
    $('btnNewSummer').addEventListener('click', () => {
      this.audio.play('ui');
      this.hud.showEnding(false);
      this.act({ k: 'reset', ng: true });
    });
    $('btnEndHome').addEventListener('click', () => this.exit());
    $('diaryPage').addEventListener('pointerdown', (e) => {
      e.preventDefault();
      this.hud.showPage(false);
    });
    this.hud.onEmote = (k) => this.sendEmote(k);
    window.addEventListener('keydown', (e) => {
      if (!this.running || e.repeat || e.target instanceof HTMLInputElement) return;
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= EMOTES.length && !this.scene) this.sendEmote(EMOTES[n - 1].kind);
      if (e.key === 'Escape') {
        this.hud.toggleWheel(false);
        this.hud.showPage(false);
      }
    });
  }

  /** 오래 끊기면: 새로고침해서 같은 방으로 자동으로 다시 들어가요 */
  private reloadRejoin() {
    const s = this.session;
    if (!s) return;
    this.saveHost();
    const url = new URL(location.href);
    url.search = '';
    url.searchParams.set('room', s.room);
    if (s.isHost) {
      url.searchParams.set('host', '1');
      url.searchParams.set('role', String(s.myRole));
    }
    if (s.mode === 'local') url.searchParams.set('net', 'local');
    url.searchParams.set('auto', '1');
    location.replace(url.toString());
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
    const r = this.controlled;
    this.showEmote(r, k, true);
    if (!this.solo) this.session.sendEmote({ r, k });
  }

  private showEmote(r: Role, k: EmoteKind, mine: boolean) {
    this.hud.emote(r, k, this.time, mine || !!this.solo);
    this.audio.play('emote', mine ? 1 : 0.8);
    const p = this.players[r];
    this.renderer.stage.burst(r, p.body.x, p.body.y + 1.4, r === 0 ? 0xffc2d6 : 0xd6ccff, 8, 1.2);
  }

  private showMark(m: MarkMsg, mine: boolean) {
    this.hud.addMark(m.w, m.x, m.y, this.time, mine);
    this.renderer.stage.markBurst(m.w, m.x, m.y, mine);
    this.audio.play('ping', mine ? 0.9 : 0.7);
    // 어둠 속 징검돌은 stage가 표시(marks) 근처를 잠깐 보여 줘요.
  }

  private handleTaps() {
    const taps = this.input.consumeTaps();
    if (!taps.length || !this.session) return;
    if (this.hud.textIdle === false && this.scene) {
      this.hud.advance();
      return;
    }
    if (this.scene || this.hud.wheelOpen) return;
    for (const t of taps) {
      if (this.checkMoonTap(t.x, t.y)) continue;
      const hit = this.renderer.unproject(t.x, t.y);
      if (!hit) continue;
      const x = Math.max(this.ch.minX, Math.min(this.ch.maxX, hit.x));
      const y = Math.max(0.2, Math.min(9, hit.y));
      const m: MarkMsg = { r: this.controlled, w: hit.world, x, y };
      this.showMark(m, true);
      if (!this.solo) this.session.sendMark(m);
    }
  }

  /** 1973년 하늘의 달을 세 번 누르면 달토끼 (이스터에그) */
  private checkMoonTap(x: number, y: number): boolean {
    const moonX = -14 + this.camX * 0.92;
    const p = this.renderer.project(1, moonX, 17, -86);
    if (Math.hypot(p.x - x, p.y - y) > 60) return false;
    this.moonTaps++;
    this.audio.play('chime', 0.6);
    if (this.moonTaps >= 3 && !this.renderer.stage.rabbit) {
      this.renderer.stage.rabbit = true;
      this.hud.toast('달에서 토끼가 떡방아를 찧고 있어요 🐇', 3);
      this.foundEgg('rabbit');
    }
    return true;
  }

  private foundEgg(id: string) {
    writeSave((s) => {
      if (!s.eggs.includes(id)) s.eggs.push(id);
    });
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

  private frameAttract(dt: number) {
    this.attractT += dt;
    const target = 30 + Math.sin(this.attractT * 0.045) * 22;
    this.camX = this.renderer.clampCamX(this.camX + (target - this.camX) * Math.min(1, dt * 0.8), this.ch);
    const cycle = (this.attractT % 24) / 24;
    const flipT = THREE.MathUtils.smoothstep(cycle, 0.46, 0.54) - THREE.MathUtils.smoothstep(cycle, 0.96, 1.0);
    this.sAmt = Math.cos(Math.PI * flipT);
    this.fade += (this.fadeTarget - this.fade) * Math.min(1, dt * 3);
    this.renderFrame(dt);
  }

  private frameGame(dt: number) {
    const s = this.session!;
    if (this.pendingMe && this.loadedKey) {
      const me = this.players[s.myRole];
      if (!this.pendingMe.hidden && this.scene !== 'intro') {
        me.body.x = this.pendingMe.x;
        me.body.y = this.pendingMe.y;
      }
      this.pendingMe = null;
    }
    // 입력
    if (this.input.consumeEmote() && !this.scene) {
      this.hud.toggleWheel();
      this.audio.play('ui', 0.6);
    }
    if (this.input.consumeSwap() && this.solo && !this.scene) this.setView(other(this.viewRole), true);
    this.handleTaps();
    const ready = s.ready;
    const inScene = !!this.scene;
    this.input.enabled = ready && !this.hud.wheelOpen && !this.exiting && !inScene && !this.hud.pageOpen;
    if (inScene) {
      if (this.input.consumeAdvance()) this.hud.advance();
      this.input.clearQueued();
      this.director.update(dt);
    } else {
      this.input.consumeAdvance();
    }

    // 고정 스텝 물리
    this.acc += dt;
    let steps = 0;
    while (this.acc >= STEP && steps < 6) {
      this.fixedStep(STEP);
      this.acc -= STEP;
      steps++;
    }
    if (steps === 6) this.acc = 0;
    for (const p of this.players) if (p.remote) p.smoothRemote(dt);

    // 상호작용 / 능력
    this.interactable = ready && !inScene ? this.findInteractable() : null;
    this.handleAbilityAndInteract(dt);

    // 네트워크
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
    if (s.online) this.statusTick(dt);

    // 상태 변화 연출
    this.ensureChapter(true);
    this.diffEffects();
    this.prev = cloneState(this.st);
    if (this.st.phase === 'outro' && this.scene !== 'outro' && !this.director.running && !this.st.ready[this.myRole] && !(this.solo && (this.st.ready[0] || this.st.ready[1]))) this.startScene('outro');

    // 이야기 / 목표
    const ctx = this.storyCtx();
    if (!inScene && this.st.phase === 'play') {
      this.updateTriggers(ctx);
      if (this.hud.textIdle) {
        const l = this.queue.shift();
        if (l) this.hud.say(l);
      }
    }
    this.hud.setObjective(!ready ? '수면 너머의 친구를 기다리는 중' : inScene || this.st.phase !== 'play' ? '' : this.ch.objective(ctx));

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

    // 카메라
    const me = this.players[this.viewRole];
    let tx = me.body.x + me.face * 1.1;
    if (this.camOverride !== null) tx = this.camOverride;
    else if (this.st.phase !== 'play' && this.ch.goal?.arc) {
      const a = this.ch.arcs.find((x) => x.id === this.ch.goal!.arc);
      if (a) tx = (a.x0 + a.x1) / 2;
    }
    this.camX = this.renderer.clampCamX(this.camX + (tx - this.camX) * (1 - Math.exp(-dt * (this.flip ? 5 : 3))), this.ch);

    // 소리
    const partner = this.players[other(this.viewRole)];
    const closeness = partner.present && !partner.hidden ? Math.max(0, 1 - Math.abs(partner.body.x - me.body.x) / 14) : 0;
    this.audio.setMix(this.viewRole, closeness, this.scene === 'outro' || this.scene === 'epilogue' ? 1 : 0);
    this.audio.setAmbience(this.viewRole);
    const ari = this.players[1];
    if (ari.singing && ari.present) {
      const near = ari.remote || this.viewRole !== 1 ? 0.35 + closeness * 0.65 : 1;
      this.audio.hum(0.3, near);
    }

    // 연출 값
    this.clarity += (Math.max(this.clarityTarget, this.st.flash > 0 ? 0.85 : 0) - this.clarity) * Math.min(1, dt * (this.st.flash > 0 ? 10 : 2));
    this.glow = this.scene === 'outro' || this.scene === 'epilogue' ? 0.12 + this.dawn * 0.18 : this.dawn * 0.15;
    this.flashFx = Math.max(0, this.flashFx - dt * 3.2);
    this.fade += (this.fadeTarget - this.fade) * Math.min(1, dt * this.fadeSpeed);
    this.renderFrame(dt);
    if (this.photoPending) this.capturePhoto();
    this.updateOverlays(dt);
  }

  private statusTick(dt: number) {
    this.statusT -= dt;
    if (this.statusT > 0) return;
    this.statusT = 1;
    this.updateStatus();
  }

  private statusT = 0;

  private fixedStep(h: number) {
    const s = this.session!;
    const oldSink = { ...this.buoySink };
    if (s.isHost) {
      const sims: SimPlayer[] = this.players.map((p) => ({ role: p.role, present: p.present, state: p.present ? p.netState() : null }));
      for (const e of stepWorld(this.st, h, sims, !!this.solo)) {
        if (e.e !== 'land') this.worldDirty = true;
      }
      for (const b of this.ch.buoys) this.buoySink[b.id] = this.st.buoys[b.id] ?? 0;
    } else {
      const k = 1 - Math.exp(-h * 12);
      for (const b of this.ch.buoys) this.buoySink[b.id] = (this.buoySink[b.id] ?? 0) + ((this.st.buoys[b.id] ?? 0) - (this.buoySink[b.id] ?? 0)) * k;
    }
    let moving = 0;
    for (const b of this.ch.buoys) {
      const d = Math.abs((this.buoySink[b.id] ?? 0) - (oldSink[b.id] ?? 0));
      moving = Math.max(moving, d);
      for (const p of this.players) {
        if (p.remote || p.hidden || p.body.gk !== 'buoy' || p.body.gid !== b.id) continue;
        p.carry(buoyTop(b, this.buoySink[b.id] ?? 0, p.role) - buoyTop(b, oldSink[b.id] ?? 0, p.role));
      }
    }
    this.buoyRippleT -= h;
    if (moving > 0.002 && this.buoyRippleT <= 0) {
      this.buoyRippleT = 0.45;
      for (const b of this.ch.buoys) if (Math.abs((this.buoySink[b.id] ?? 0) - (oldSink[b.id] ?? 0)) > 0.002) this.addRipple(b.x, 0.5);
      this.audio.play('buoy', 0.5);
    }
    const colliders: Record<WorldId, Collider[]> = {
      0: collidersFor(this.ch, 0, this.st, this.buoySink),
      1: collidersFor(this.ch, 1, this.st, this.buoySink),
    };
    const arcs = arcsFor(this.ch, this.st);
    const bounds = { minX: this.ch.minX, maxX: this.ch.maxX };
    for (const p of this.players) {
      if (p.remote || !p.present) continue;
      const scripted = this.scene && p.role === this.actor ? (p as Player & { sceneTarget?: number }).sceneTarget : undefined;
      const controlled = !this.scene && p.role === this.controlled && s.ready;
      let input = controlled ? this.input.take() : null;
      if (scripted !== undefined) {
        const dx = scripted - p.body.x;
        input = { move: Math.abs(dx) < 0.1 ? 0 : Math.sign(dx) * Math.min(1, Math.abs(dx) * 1.6 + 0.35) * 0.72, jumpPressed: false, jumpHeld: false };
      }
      const r = p.step(h, input, colliders[p.role], arcs, bounds);
      if (!r) continue;
      const loud = controlled || scripted !== undefined ? 1 : 0.4;
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
    const me = this.players[this.controlled];
    if (me.hidden || !me.present || this.st.phase !== 'play') return null;
    const r = me.role;
    const { x, y } = me.body;
    const st = this.st;
    const ch = this.ch;
    const held = st.items.find((i) => i.mode === 'held' && i.holder === r);
    const heldKind = held ? ch.items.find((d) => d.id === held.id)?.kind : undefined;
    const near = (px: number, py: number, rx = 1.1, ry = 1.4) => Math.abs(px - x) < rx && Math.abs(py - y) < ry;
    if (held) {
      for (const s of ch.sockets) if (s.world === r && !st.flags[s.flag] && s.accepts === heldKind && near(s.x, s.y, 1.3, 0.9)) return { kind: 'place', id: s.id, x: s.x, y: s.y + 2, label: s.label };
      for (const u of ch.uses) if (u.world === r && u.needs === heldKind && !st.flags[u.flag] && (!u.when || u.when(st)) && near(u.x, u.y, u.range ?? 1.2)) return { kind: 'use', id: u.id, x: u.x, y: u.y + 2, label: u.label };
      const fx = this.findFixture(r, x, y, true);
      if (fx) return fx;
      const dx = x + me.face * 0.6;
      const overWater = !solidAt(ch, r, dx, 0.2) && !(y > 0.8 && solidAt(ch, r, dx, y - 0.3));
      return { kind: 'drop', id: held.id, x, y: y + 2.0, label: overWater ? (heldKind === 'marble' ? '물에 떨어뜨리기' : '물에 넣기') : '내려놓기' };
    }
    for (const it of st.items) {
      if (it.world !== r || (it.mode !== 'ground' && it.mode !== 'floating')) continue;
      if (Math.abs(it.x - x) < 0.95 && it.y > y - 2.4 && it.y < y + 1.4) {
        const d = ch.items.find((q) => q.id === it.id);
        return { kind: 'pickup', id: it.id, x: it.x, y: it.y + 1.0, label: `${d?.name ?? '물건'} 들기` };
      }
    }
    return this.findFixture(r, x, y, false);
  }

  private findFixture(r: Role, x: number, y: number, holding: boolean): Interactable | null {
    const st = this.st;
    const ch = this.ch;
    const near = (px: number, py: number, rx = 1.1, ry = 1.5) => Math.abs(px - x) < rx && Math.abs(py - y) < ry;
    for (const l of ch.lights) {
      if (l.world !== r || st.flags[litFlag(l.id)]) continue;
      if (near(l.x, l.y)) return { kind: 'light', id: l.id, x: l.x, y: l.y + 2.3, label: l.label, song: l.bySong };
    }
    for (const u of ch.uses) {
      if (u.world !== r || u.needs || st.flags[u.flag] || (u.by !== undefined && u.by !== r) || (u.when && !u.when(st))) continue;
      if (near(u.x, u.y, u.range ?? 1.2)) return { kind: 'use', id: u.id, x: u.x, y: u.y + 1.8, label: u.label };
    }
    for (const m of ch.magpies) {
      if (m.world !== r || m.call !== 'use' || st.magpies.includes(m.id)) continue;
      if (near(m.x, m.y, 1.3, 1.6)) return { kind: 'magpie', id: m.id, x: m.x, y: m.y + 1.4, label: '까치 부르기' };
    }
    for (const k of ch.keepsakes) {
      if (k.world !== r || k.how !== 'use' || st.keeps.includes(k.id) || (k.by !== 'any' && k.by !== r) || (k.when && !k.when(st))) continue;
      if (near(k.x, k.y)) return { kind: 'keep', id: k.id, x: k.x, y: k.y + 1.6, label: k.label };
    }
    if (st.ng) {
      for (const d of ch.diary) {
        if (d.world !== r || st.diary.includes(d.id)) continue;
        if (near(d.x, d.y)) return { kind: 'diary', id: d.id, x: d.x, y: d.y + 1.4, label: '일기장 줍기' };
      }
    }
    if (holding) return null;
    for (const s of ch.signs) {
      if (s.world !== r) continue;
      if (near(s.x, s.y)) return { kind: 'sign', id: s.id, x: s.x, y: s.y + 2.2, label: s.label };
    }
    for (const n of ch.npcs) {
      if (n.world !== r || !n.talk || !n.label) continue;
      if (near(n.x, n.y, 1.4, 1.8)) return { kind: 'npc', id: n.id, x: n.x, y: n.y + 1.8, label: n.label };
    }
    return null;
  }

  private handleAbilityAndInteract(dt: number) {
    const me = this.players[this.controlled];
    const it = this.interactable;
    const pressInteract = this.input.consumeInteract();
    const pressAbility = this.input.consumeAbility();
    // 오른쪽 아래 버튼 표시
    const abilityLabel = me.role === 0 ? '사진 찍기' : '흥얼거리기';
    this.hud.setAction(it ? it.label : abilityLabel, it ? 'act' : me.role === 0 ? 'camera' : 'note', !!it);

    if (this.scene || !this.session?.ready || this.st.phase !== 'play') {
      if (!me.remote) me.singing = false;
      return;
    }
    // 동작 우선: 터치 버튼(✋)은 동작과 능력을 같이 누르니, 동작이 있으면 능력은 버려요.
    if (pressInteract && it) {
      this.input.dropAbility();
      this.doInteract(it);
    } else if (pressAbility && me.role === 0) {
      this.takePhoto();
    }
    // 혼자 하기의 메아리 노래
    if (this.echoT > 0 && this.solo && me.role !== 1) {
      this.echoT -= dt;
      const ari = this.players[1];
      ari.singing = this.echoT > 0 && !ari.hidden;
      if (ari.singing) {
        this.singT -= dt;
        if (this.singT <= 0) {
          this.singT = 0.22;
          this.act({ k: 'sing', r: 1, x: ari.body.x });
        }
      }
    }
    // 아리의 노래: 누르고 있는 동안 (동작 대상 없이)
    if (me.role === 1 && !me.remote) {
      if (this.echoT > 0) this.echoT = 0;
      const holding = this.input.abilityHeld && !it;
      if (this.autoSing > 0) this.autoSing -= dt;
      const sing = holding || this.autoSing > 0;
      me.singing = sing && !me.hidden;
      if (me.singing) {
        this.singT -= dt;
        if (this.singT <= 0) {
          this.singT = 0.22;
          this.act({ k: 'sing', r: 1, x: me.body.x });
        }
      }
    }
  }

  private doInteract(it: Interactable) {
    const me = this.players[this.controlled];
    const r = me.role;
    switch (it.kind) {
      case 'pickup':
        this.act({ k: 'pickup', id: it.id, r });
        break;
      case 'drop':
        this.act({ k: 'drop', id: it.id, r, x: me.body.x + me.face * 0.35, y: me.body.y + 1.25, vx: me.face * 2.3 + me.body.vx * 0.3, vy: 2.8 });
        break;
      case 'place':
        this.act({ k: 'place', id: it.id, r });
        break;
      case 'light':
        if (it.song) {
          // 달맞이꽃: 노래를 불러 줘야 피어요
          this.autoSing = 1.8;
          this.hud.toast('♪ 흥얼흥얼…', 1.4);
        } else this.act({ k: 'light', id: it.id, r });
        break;
      case 'use':
        this.act({ k: 'use', id: it.id, r });
        break;
      case 'magpie':
        this.audio.play('chirp');
        this.act({ k: 'magpie', id: it.id, r });
        break;
      case 'keep':
        this.act({ k: 'keep', id: it.id, r });
        break;
      case 'diary': {
        this.act({ k: 'diary', id: it.id, r });
        const d = this.ch.diary.find((x) => x.id === it.id);
        if (d) {
          this.audio.play('page');
          this.hud.showPage(true, d.date, d.text);
          writeSave((s) => {
            if (!s.diary.includes(d.id)) s.diary.push(d.id);
          });
        }
        break;
      }
      case 'sign': {
        const s = this.ch.signs.find((x) => x.id === it.id);
        if (s) {
          this.audio.play(s.sfx ?? 'ui');
          this.queue = [...s.lines, ...this.queue];
          this.hud.clearText();
        }
        break;
      }
      case 'npc': {
        const n = this.ch.npcs.find((x) => x.id === it.id);
        if (n?.talk) {
          this.audio.play('ui');
          this.queue = [...n.talk(this.st, r), ...this.queue];
          this.hud.clearText();
        }
        break;
      }
    }
  }

  private takePhoto() {
    const me = this.players[0];
    if (me.hidden || this.st.flash > 0.4) return;
    me.actT = 0.5;
    this.audio.play('shutter');
    this.flashFx = 1;
    this.hud.flashScreen();
    this.act({ k: 'flash', r: 0, x: me.body.x });
    const spots = this.ch.keepsakes
      .filter((k) => k.how === 'photo' && !this.st.keeps.includes(k.id) && (!k.when || k.when(this.st)) && Math.abs(k.x - me.body.x) < 5.5 && Math.abs(k.y - me.body.y) < 4)
      .map((k) => k.id);
    this.photoPending = { spots };
  }

  private capturePhoto() {
    const p = this.photoPending!;
    this.photoPending = null;
    const url = this.renderer.snapshot(320);
    if (!url) return;
    const spot = p.spots[0];
    const k = spot ? allKeepsakes().find((x) => x.id === spot) : undefined;
    writeSave((s) => {
      s.photos.push({ id: spot ?? `p${Date.now()}`, url, t: Date.now(), label: k?.name ?? '사진' });
      // 추억 사진은 모두 남기고, 그냥 사진은 최근 8장만
      const plain = s.photos.filter((x) => !allKeepsakes().some((q) => q.id === x.id));
      if (plain.length > 8) s.photos.splice(s.photos.indexOf(plain[0]), 1);
    });
    if (spot) this.act({ k: 'keep', id: spot, r: 0 });
    else this.hud.toast('사진을 찍었어요 (앨범에 저장)', 1.6);
  }

  private setView(r: Role, animate: boolean) {
    if (this.viewRole === r && !this.flip) return;
    // 혼자 하기: 아리가 노래하다가 리아로 바꾸면 노래가 10초 동안 이어져요.
    if (this.solo && this.viewRole === 1 && this.players[1].singing) {
      this.echoT = 10;
      this.hud.toast('♪ 아리의 노래가 잠시 이어져요', 2);
    }
    const to = r === 0 ? 1 : -1;
    this.viewRole = r;
    this.hud.toggleWheel(false);
    this.input.clearQueued();
    if (animate) {
      this.flip = { from: this.sAmt, to, t: 0 };
      this.audio.play('swap');
      this.queue = [];
      this.hud.clearText();
    } else {
      this.flip = null;
      this.sAmt = to;
    }
  }

  // -------------------------------------------------------------------------
  // 연출

  private addRipple(x: number, s: number) {
    this.ripples.push({ x, z: 0.35, t: this.time, s });
    if (this.ripples.length > 6) this.ripples.shift();
  }

  private say(ev: string) {
    if (this.scene) return;
    const role = this.solo ? this.viewRole : this.myRole;
    this.queue.push(...eventLines(ev, role, this.st));
  }

  private diffEffects() {
    const prev = this.prev;
    const cur = this.st;
    const stage = this.renderer.stage;
    const ch = this.ch;
    if (prev.round !== cur.round || prev.chapter !== cur.chapter) return;

    for (const l of ch.lights) {
      if (!prev.flags[litFlag(l.id)] && cur.flags[litFlag(l.id)]) {
        this.audio.play('light');
        stage.burst(l.world, l.x, l.y + 1.1, l.kind === 'moonflower' ? 0xe0d6ff : 0xffe29a, 30, 2.4);
        const br = ch.bridges.find((b) => b.when(cur) && !b.when(prev));
        if (br) {
          setTimeout(() => this.audio.play('bridge', 0.8), 350);
          for (const seg of br.segs) {
            for (let x = seg.x0; x < seg.x1; x += 0.8) stage.burst(br.world, x, seg.y1, br.kind === 'star' ? 0xfff3b0 : 0xc9f5b9, 3, 1.2);
            if (br.kind === 'lily') this.addRipple((seg.x0 + seg.x1) / 2, 0.6);
          }
        }
        this.say(`lit:${l.id}`);
      }
    }
    for (const z of ch.songZones) {
      if (!prev.flags[z.flag] && cur.flags[z.flag] && !this.fired.has(`ev:${z.flag}`)) {
        this.fired.add(`ev:${z.flag}`);
        this.audio.play('bridge', 0.5);
        this.say(z.flag);
      }
    }
    for (const it of cur.items) {
      const p = prev.items.find((i) => i.id === it.id);
      if (!p) continue;
      if (p.mode !== 'held' && it.mode === 'held') {
        this.audio.play('pickup');
        const holder = this.players[it.holder as Role];
        stage.burst(holder.role, holder.body.x, holder.body.y + 1.5, 0xf2eaff, 16, 1.6);
        this.say(`pickup:${it.id}:${it.holder}`);
      }
      if (p.mode === 'held' && it.mode === 'falling') this.audio.play('drop');
      if (p.world !== it.world && p.mode !== 'held' && it.mode !== 'held') {
        this.audio.play('transfer');
        this.addRipple(it.x, 1);
        stage.splash(p.world, it.x, true);
        stage.splash(it.world, it.x, true);
        stage.burst(it.world, it.x, 0.3, 0xf2eaff, 20, 2);
        this.say(`transfer:${it.id}:${it.world}`);
      }
      if (p.mode === 'falling' && it.mode === 'ground' && p.world === it.world) {
        const d = ch.items.find((q) => q.id === it.id);
        if (d && Math.abs(it.x - d.x) < 0.01 && Math.abs(it.y - d.y) < 0.01 && !d.crosses) {
          this.audio.play('splash', 0.6);
          this.say(`respawn:${it.id}`);
        } else this.audio.play('land', 0.5);
      }
      if (p.mode !== 'placed' && it.mode === 'placed') {
        const s = ch.sockets.find((q) => cur.flags[q.flag] && !prev.flags[q.flag]);
        this.audio.play('place');
        if (s) {
          stage.burst(s.world, s.x, s.y + 1.2, 0xfff0c0, 40, 2.6);
          this.say(`place:${s.id}`);
        }
      }
    }
    for (const u of ch.uses) {
      if (!prev.flags[u.flag] && cur.flags[u.flag]) {
        this.audio.play(u.flag === 'dug' ? 'dig' : u.flag === 'watered' ? 'grow' : 'pickup');
        stage.burst(u.world, u.x, u.y + 1, 0xfff3c4, 26, 2);
        if (u.flag === 'watered') {
          const br = ch.bridges.find((b) => b.kind === 'branch');
          if (br) for (let x = br.segs[0].x0; x < br.segs[0].x1; x += 1) stage.burst(br.world, x, br.segs[0].y1 + 0.3, 0xc9f5b9, 4, 1.4);
        }
        if (u.event) this.say(u.event);
      }
    }
    if (cur.magpies.length > prev.magpies.length) {
      this.audio.play('chirp');
      setTimeout(() => this.audio.play('bridge', 0.5), 500);
      this.say('magpie');
    }
    for (const k of cur.keeps) {
      if (prev.keeps.includes(k)) continue;
      const def = allKeepsakes().find((x) => x.id === k);
      if (!def) continue;
      this.audio.play('keep');
      const photo = def.how === 'photo' ? loadSave().photos.find((p) => p.id === k)?.url : null;
      this.hud.showKeep(`추억을 찾았어요 · ${def.name}`, def.desc, photo);
      writeSave((s) => {
        if (!s.keeps.includes(k)) s.keeps.push(k);
      });
      if (def.id === 'windchime') this.audio.play('chime');
      if (def.id === 'radio') this.audio.play('radio');
    }
    if (cur.flash > 0 && prev.flash <= 0) {
      for (const h of ch.hidden) stage.burst(h.world, h.x, h.top + 0.2, 0xfff3c4, 4, 1);
    }
    // 물에 빠지고 나올 때
    this.players.forEach((p, i) => {
      if (!p.present) return;
      if (!this.hiddenPrev[i] && p.hidden) {
        this.audio.play('splash', p.role === this.viewRole ? 1 : 0.6);
        stage.splash(p.role, p.body.x);
        this.addRipple(p.body.x, 1);
        if (!p.remote) this.onSplash(p.role);
      }
      if (this.hiddenPrev[i] && !p.hidden) {
        this.audio.play('pop', p.role === this.viewRole ? 1 : 0.6);
        stage.burst(p.role, p.body.x, p.body.y + 0.6, p.role === 0 ? 0xffd6e2 : 0xd9ccff, 14, 1.6);
      }
      this.hiddenPrev[i] = p.hidden;
    });
  }

  /** 한 장에서 물에 열 번 빠지면 붕어가 인사해요 (이스터에그) */
  private onSplash(role: Role) {
    this.splashLocal++;
    if (this.splashLocal === 10) {
      const p = this.players[role];
      this.audio.play('fish');
      this.renderer.stage.burst(role, p.body.x + 1, 0.3, 0xffcf7a, 20, 2);
      this.queue.push(...eventLines('splash10', role, this.st));
      this.hud.toast('붕어가 뻐끔 인사했어요 🐟', 2.6);
      this.foundEgg('fish');
    }
  }

  private storyCtx(): StoryCtx {
    const role = this.solo ? this.viewRole : this.myRole;
    const me = this.players[role];
    const partner = this.players[other(role)];
    const held = this.st.items.find((i) => i.mode === 'held' && i.holder === role);
    return {
      role,
      st: this.st,
      x: me.body.x,
      y: me.body.y,
      hidden: me.hidden,
      gk: me.body.gk,
      gid: me.body.gid,
      holding: held ? held.id : null,
      partnerPresent: partner.present,
      partnerX: partner.body.x,
      solo: !!this.solo,
      ng: this.st.ng,
    };
  }

  private updateTriggers(c: StoryCtx) {
    for (const t of this.ch.triggers) {
      if (t.role !== 'both' && t.role !== c.role) continue;
      const key = `${t.id}:${c.role}`;
      if (this.fired.has(key)) continue;
      if (t.when(c)) {
        this.fired.add(key);
        this.queue.push(...t.lines(c));
      }
    }
  }

  // -------------------------------------------------------------------------
  // 렌더

  private groundBelow(p: Player): number {
    const cols = collidersFor(this.ch, p.role, this.st, this.buoySink);
    let best = -1;
    const { x, y, w } = p.body;
    for (const c of cols) {
      if (x + w / 2 <= c.x0 || x - w / 2 >= c.x1) continue;
      if (c.y1 <= y + 0.05 && c.y1 > best) best = c.y1;
    }
    for (const a of arcsFor(this.ch, this.st)) {
      const t = a.top(x);
      if (t !== null && t <= y + 0.05 && t > best) best = t;
    }
    return best;
  }

  private renderFrame(dt: number) {
    const partnerRole = other(this.sAmt >= 0 ? 0 : 1);
    const partner = this.players[partnerRole];
    const life = this.solo ? 8 : 3.2;
    const marks = this.hud.markList.map((m) => ({ w: m.w, x: m.x, y: m.y, t: m.t + (life - 3.2) }));
    this.renderer.stage.update({
      st: this.st,
      buoySink: this.buoySink,
      players: this.players,
      groundY: [this.groundBelow(this.players[0]), this.groundBelow(this.players[1])],
      time: this.time,
      dt,
      camX: this.camX,
      pxScale: this.renderer.pxScale,
      hideChar: this.hideChar,
      grandma: this.grandma,
      marks,
    });
    this.renderer.render({
      sAmt: this.sAmt,
      camX: this.camX,
      time: this.time,
      ripples: this.ripples,
      partner: { x: partner.body.x, y: partner.body.y + 0.6, world: partner.role, visible: this.running && partner.present && !partner.hidden && !this.hideChar[partnerRole] },
      clarity: this.clarity,
      fade: this.fade,
      fadeColor: FADE_COLOR,
      glow: this.glow,
      flash: this.flashFx,
    });
  }

  private updateOverlays(dt: number) {
    this.hud.update(dt, this.time);
    const flipping = !!this.flip;
    for (const p of this.players) {
      const pos = this.renderer.project(p.role, p.body.x, p.body.y + 1.75);
      this.hud.placeBubble(p.role, pos.x, pos.y, p.present && !p.hidden && !flipping);
    }
    this.hud.updateMarks(this.time, (w, x, y) => this.renderer.project(w, x, y, 0.3), flipping, this.solo ? 8 : 3.2);
    const it = this.interactable;
    if (it && !flipping && !this.hud.wheelOpen && !this.scene) {
      const pos = this.renderer.project(this.controlled, it.x, it.y);
      this.hud.setPrompt(it.label, pos.x, pos.y);
    } else this.hud.setPrompt(null);
  }

  // -------------------------------------------------------------------------
  // 자동 테스트용

  private debugApi() {
    return {
      game: this,
      state: () => this.st,
      chapter: () => this.st.chapter,
      scene: () => this.scene,
      players: () => this.players.map((p) => ({ role: p.role, x: p.body.x, y: p.body.y, gk: p.body.gk, gid: p.body.gid, hidden: p.hidden, present: p.present, singing: p.singing, sleeping: p.sleeping })),
      teleport: (r: Role, x: number, y: number) => {
        const p = this.players[r];
        p.body.x = x;
        p.body.y = y;
        p.body.vx = 0;
        p.body.vy = 0;
        p.idleT = 0;
      },
      view: (r: Role) => {
        if (this.viewRole !== r && this.solo) this.setView(r, true);
      },
      interact: () => {
        const it = this.findInteractable();
        if (it) this.doInteract(it);
        return it?.kind ?? null;
      },
      target: () => this.findInteractable()?.label ?? null,
      photo: () => this.takePhoto(),
      sing: (sec: number) => (this.autoSing = sec),
      emote: (k: EmoteKind) => this.sendEmote(k),
      camera: () => ({ camX: this.camX, sAmt: this.sAmt, viewRole: this.viewRole }),
      /** 컷신 빨리 넘기기 */
      fast: (on: boolean) => {
        this.director.fast = on;
        this.hud.fast = on;
      },
      goto: (chapter: ChapterId) => this.act({ k: 'goto', chapter }),
      text: () => ({ idle: this.hud.textIdle }),
      queue: () => this.queue.length,
      save: () => loadSave(),
      mark: (w: WorldId, x: number, y: number) => this.showMark({ r: this.controlled, w, x, y }, true),
      ending: () => !document.getElementById('ending')!.classList.contains('hidden'),
    };
  }
}
