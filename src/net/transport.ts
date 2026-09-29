/**
 * 두 사람만 연결하는 전송 계층.
 * - local: 같은 기기 두 탭 테스트용 (BroadcastChannel)
 * - p2p:   Trystero(WebRTC). 공용 Nostr 릴레이로 상대를 찾고, 데이터는 브라우저끼리 직접 주고받아요.
 *
 * 끊김 복구 (v0.2)
 * - 1초마다 하트비트를 보내고, 4초 동안 아무것도 안 오면 "끊김"으로 봐요 (WebRTC가 늦게 알아채도 바로 반응).
 * - 네트워크가 돌아오거나(online), 화면으로 돌아오거나(visible), 연결이 실패하면 방을 새로 만들어 다시 참가해요.
 *   Trystero는 한 번 포기한 릴레이 소켓을 다시 열지 않아서, 다시 참가할 때마다 주소 끝을 바꿔 새 소켓을 열어요.
 * - 오래 끊긴 연결은 직접 닫아서, 상대가 새 연결로 들어올 수 있게 해요.
 */

export type Channel = 'hello' | 'ps' | 'ws' | 'act' | 'emo' | 'mark' | 'look';
const CHANNELS: Channel[] = ['hello', 'ps', 'ws', 'act', 'emo', 'mark', 'look'];

export type LinkState = 'starting' | 'searching' | 'connected' | 'lost';

export interface Transport {
  readonly kind: 'local' | 'p2p';
  send(ch: Channel, data: unknown): void;
  onMessage: ((ch: Channel, data: any) => void) | null;
  onPeer: ((joined: boolean) => void) | null;
  onLink: ((state: LinkState, detail?: string) => void) | null;
  readonly hasPeer: boolean;
  /** 상대가 끊긴 뒤 지난 시간(초). 연결돼 있으면 0 */
  readonly lostFor: number;
  close(): void;
}

const APP_ID = 'yunseul-mirror-lake-proto-v1';
const HEARTBEAT_MS = 1000;
const STALE_MS = 4000;
const FORCE_CLOSE_MS = 9000;

/** 모든 사용자가 같은 릴레이를 써야 서로 찾을 수 있어요 (2026-09 기준 응답이 빠르고 인증이 필요 없는 곳). */
const RELAYS = [
  'wss://nos.lol',
  'wss://relay.mostro.network',
  'wss://nostr.data.haus',
  'wss://nostr.sathoarder.com',
  'wss://relay02.lnfi.network',
  'wss://nostr-relay.corb.net',
];

export class LocalTransport implements Transport {
  readonly kind = 'local' as const;
  onMessage: ((ch: Channel, data: any) => void) | null = null;
  onPeer: ((joined: boolean) => void) | null = null;
  onLink: ((state: LinkState, detail?: string) => void) | null = null;
  private bc: BroadcastChannel;
  private id = Math.random().toString(36).slice(2);
  private peer: string | null = null;
  private lastSeen = 0;
  private lostAt = 0;
  private timer: number;

  constructor(room: string) {
    this.bc = new BroadcastChannel(`yunseul:${room}`);
    this.bc.onmessage = (e) => {
      const m = e.data as { from: string; ch: Channel | 'hb' | 'bye'; data: unknown };
      if (!m || m.from === this.id) return;
      if (this.peer && m.from !== this.peer && performance.now() - this.lastSeen < STALE_MS) return; // 두 사람까지만
      if (m.ch === 'bye') {
        if (m.from === this.peer) this.drop();
        return;
      }
      if (this.peer !== m.from) {
        this.peer = m.from;
        this.lastSeen = performance.now();
        this.onLink?.('connected');
        this.onPeer?.(true);
      }
      this.lastSeen = performance.now();
      if (m.ch !== 'hb') this.onMessage?.(m.ch, m.data);
    };
    this.timer = window.setInterval(() => {
      this.bc.postMessage({ from: this.id, ch: 'hb', data: null });
      if (this.peer && performance.now() - this.lastSeen > STALE_MS) this.drop();
    }, 400);
    setTimeout(() => this.onLink?.('searching'), 0);
    this.bc.postMessage({ from: this.id, ch: 'hb', data: null });
  }

  private drop() {
    this.peer = null;
    this.lostAt = performance.now();
    this.onLink?.('lost');
    this.onPeer?.(false);
  }

  get hasPeer() {
    return !!this.peer;
  }

  get lostFor() {
    return this.peer || !this.lostAt ? 0 : (performance.now() - this.lostAt) / 1000;
  }

  send(ch: Channel, data: unknown) {
    if (!this.peer) return;
    this.bc.postMessage({ from: this.id, ch, data });
  }

  close() {
    try {
      this.bc.postMessage({ from: this.id, ch: 'bye', data: null });
    } catch {
      /* noop */
    }
    clearInterval(this.timer);
    this.bc.close();
  }
}

type TrysteroRoom = import('trystero').Room;
type MessageAction = import('trystero').MessageAction;
type JoinRoom = (cfg: any, id: string, cb?: any) => TrysteroRoom;

export class P2PTransport implements Transport {
  readonly kind = 'p2p' as const;
  onMessage: ((ch: Channel, data: any) => void) | null = null;
  onPeer: ((joined: boolean) => void) | null = null;
  onLink: ((state: LinkState, detail?: string) => void) | null = null;
  private roomCode: string;
  private turn?: RTCIceServer[];
  private joinRoom: JoinRoom | null = null;
  private room: TrysteroRoom | null = null;
  private hb: MessageAction | null = null;
  private actions = new Map<Channel, MessageAction>();
  private peer: string | null = null;
  /** 앱 수준에서 끊겼다고 본 상대 (같은 id로 다시 메시지가 오면 바로 되살려요) */
  private stalePeer: string | null = null;
  private lastRecv = 0;
  private lostAt = 0;
  private everConnected = false;
  private generation = 0;
  private rebuildTimer = 0;
  private rebuilding = false;
  private attempts = 0;
  private tick = 0;
  private closed = false;
  private hiddenAt = 0;
  private listeners: [EventTarget, string, EventListener][] = [];

  constructor(roomCode: string, turn?: RTCIceServer[]) {
    this.roomCode = roomCode;
    this.turn = turn;
    this.listen(window, 'online', () => this.scheduleRebuild(800, 'online'));
    this.listen(window, 'offline', () => this.onLink?.('lost', '인터넷 연결이 끊겼어요'));
    this.listen(window, 'pageshow', (e) => {
      if ((e as PageTransitionEvent).persisted) this.scheduleRebuild(300, 'pageshow');
    });
    this.listen(document, 'visibilitychange', () => {
      if (document.hidden) {
        this.hiddenAt = performance.now();
        return;
      }
      const away = this.hiddenAt ? performance.now() - this.hiddenAt : 0;
      this.hiddenAt = 0;
      // 잠깐 다녀왔으면 연결이 살아 있는지 먼저 보고, 없으면 다시 참가해요.
      if (away > 2500) setTimeout(() => this.ensureAlive('visible'), 2500);
    });
    this.tick = window.setInterval(() => this.onTick(), HEARTBEAT_MS);
    void this.start();
  }

  private listen(t: EventTarget, type: string, fn: EventListener) {
    t.addEventListener(type, fn);
    this.listeners.push([t, type, fn]);
  }

  private async start() {
    this.onLink?.('starting');
    try {
      const mod = await import('trystero');
      if (this.closed) return;
      this.joinRoom = mod.joinRoom as JoinRoom;
      this.build();
    } catch (err) {
      console.error('[yunseul] p2p init failed', err);
      this.onLink?.('lost', '온라인 연결을 시작하지 못했어요');
    }
  }

  private relayUrls(): string[] {
    // 0세대는 원래 주소, 다시 참가할 때마다 ?g=N 을 붙여 새 소켓을 열어요 (서버는 같아요).
    return this.generation === 0 ? RELAYS : RELAYS.map((u) => `${u}/?g=${this.generation}`);
  }

  private build() {
    if (!this.joinRoom || this.closed) return;
    const config: Record<string, unknown> = { appId: APP_ID, relayConfig: { urls: this.relayUrls(), warnOnRelayFailure: false } };
    if (this.turn?.length) config.turnConfig = this.turn;
    const room = this.joinRoom(config, `room-${this.roomCode}`, {
      onJoinError: (d: { error?: unknown; peerId?: string }) => {
        console.warn('[yunseul] join error', d?.error);
        if (!this.peer) this.scheduleRebuild(2500, 'join-error');
      },
    });
    this.room = room;
    this.actions.clear();
    for (const ch of CHANNELS) {
      const a = room.makeAction(ch) as MessageAction;
      a.onMessage = (data, ctx) => {
        if (!this.accept(ctx.peerId)) return;
        this.onMessage?.(ch, data);
      };
      this.actions.set(ch, a);
    }
    this.hb = room.makeAction('hb') as MessageAction;
    this.hb.onMessage = (_d, ctx) => {
      this.accept(ctx.peerId);
    };
    room.onPeerJoin = (id) => {
      this.accept(id);
    };
    room.onPeerLeave = (id) => {
      if (id === this.peer) this.markLost('peer-left');
      if (id === this.stalePeer) this.stalePeer = null;
    };
    this.onLink?.(this.peer ? 'connected' : this.everConnected ? 'lost' : 'searching');
  }

  /** 이 상대의 메시지를 받아도 되는지. 새 상대(또는 되살아난 상대)면 연결로 처리해요. */
  private accept(id: string): boolean {
    const now = performance.now();
    if (this.peer === id) {
      this.lastRecv = now;
      return true;
    }
    // 이미 다른 상대와 잘 연결돼 있으면 세 번째 사람은 받지 않아요.
    if (this.peer && now - this.lastRecv < STALE_MS) return false;
    this.peer = id;
    this.stalePeer = null;
    this.lastRecv = now;
    this.lostAt = 0;
    this.everConnected = true;
    this.attempts = 0;
    clearTimeout(this.rebuildTimer);
    this.onLink?.('connected');
    this.onPeer?.(true);
    return true;
  }

  private markLost(reason: string) {
    if (!this.peer) return;
    this.stalePeer = this.peer;
    this.peer = null;
    this.lostAt = performance.now();
    console.info('[yunseul] partner lost:', reason);
    this.onLink?.('lost');
    this.onPeer?.(false);
    // 곧바로 돌아오지 않으면 새 연결을 시도해요.
    this.scheduleRebuild(6000, 'lost');
  }

  private onTick() {
    if (this.closed || !this.room) return;
    const now = performance.now();
    if (this.peer) {
      this.hb?.send(0, { target: this.peer }).catch(() => {});
      if (now - this.lastRecv > STALE_MS) this.markLost('heartbeat');
    } else if (this.stalePeer && this.lostAt && now - this.lostAt > FORCE_CLOSE_MS) {
      // 오래 멈춘 WebRTC 연결은 직접 닫아야 Trystero가 정리하고 새 연결을 받아요.
      const pc = this.room.getPeers()[this.stalePeer];
      this.stalePeer = null;
      try {
        pc?.close();
      } catch {
        /* noop */
      }
    }
  }

  private ensureAlive(reason: string) {
    if (this.closed) return;
    if (this.peer && performance.now() - this.lastRecv < STALE_MS) return;
    this.scheduleRebuild(0, reason);
  }

  private scheduleRebuild(delayMs: number, reason: string) {
    if (this.closed || this.rebuilding) return;
    if (this.peer && performance.now() - this.lastRecv < STALE_MS) return;
    clearTimeout(this.rebuildTimer);
    this.rebuildTimer = window.setTimeout(() => void this.rebuild(reason), delayMs);
  }

  private async rebuild(reason: string) {
    if (this.closed || this.rebuilding || !this.joinRoom) return;
    if (this.peer && performance.now() - this.lastRecv < STALE_MS) return;
    if (!navigator.onLine) {
      this.onLink?.('lost', '인터넷 연결을 기다리는 중');
      return; // online 이벤트가 오면 다시 불려요.
    }
    this.rebuilding = true;
    this.attempts++;
    console.info(`[yunseul] rejoining room (${reason}, try ${this.attempts})`);
    const old = this.room;
    this.room = null;
    this.hb = null;
    try {
      await Promise.race([old?.leave(), new Promise((r) => setTimeout(r, 1500))]);
    } catch {
      /* 이미 끊긴 방이면 무시 */
    }
    this.generation++;
    this.rebuilding = false;
    if (this.closed) return;
    this.build();
    // 그래도 안 되면 간격을 늘려 가며 계속 시도해요.
    const next = Math.min(30000, 9000 + this.attempts * 4000);
    this.rebuildTimer = window.setTimeout(() => {
      if (!this.peer) void this.rebuild('retry');
    }, next);
  }

  get hasPeer() {
    return !!this.peer;
  }

  get lostFor() {
    return this.peer || !this.lostAt ? 0 : (performance.now() - this.lostAt) / 1000;
  }

  send(ch: Channel, data: unknown) {
    if (!this.peer) return;
    const a = this.actions.get(ch);
    if (!a) return;
    a.send(data as any, { target: this.peer }).catch(() => {
      /* 연결이 끊기는 중이면 무시 */
    });
  }

  close() {
    this.closed = true;
    clearTimeout(this.rebuildTimer);
    clearInterval(this.tick);
    for (const [t, type, fn] of this.listeners) t.removeEventListener(type, fn);
    void this.room?.leave();
    this.room = null;
  }
}
