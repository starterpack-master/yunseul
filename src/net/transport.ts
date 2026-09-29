/**
 * 두 사람만 연결하는 전송 계층.
 * - local: 같은 기기 두 탭 테스트용 (BroadcastChannel)
 * - p2p:   Trystero(WebRTC). 공용 Nostr 릴레이로 상대를 찾고, 데이터는 브라우저끼리 직접 주고받아요.
 */

export type Channel = 'hello' | 'ps' | 'ws' | 'act' | 'emo' | 'bye';
const CHANNELS: Channel[] = ['hello', 'ps', 'ws', 'act', 'emo', 'bye'];

export interface Transport {
  readonly kind: 'local' | 'p2p';
  send(ch: Channel, data: unknown): void;
  onMessage: ((ch: Channel, data: any) => void) | null;
  onPeer: ((joined: boolean) => void) | null;
  onStatus: ((text: string) => void) | null;
  readonly hasPeer: boolean;
  close(): void;
}

const APP_ID = 'yunseul-mirror-lake-proto-v1';

export class LocalTransport implements Transport {
  readonly kind = 'local' as const;
  onMessage: ((ch: Channel, data: any) => void) | null = null;
  onPeer: ((joined: boolean) => void) | null = null;
  onStatus: ((text: string) => void) | null = null;
  private bc: BroadcastChannel;
  private id = Math.random().toString(36).slice(2);
  private peer: string | null = null;
  private lastSeen = 0;
  private timer: number;

  constructor(room: string) {
    this.bc = new BroadcastChannel(`yunseul:${room}`);
    this.bc.onmessage = (e) => {
      const m = e.data as { from: string; ch: Channel | 'ping'; data: unknown };
      if (!m || m.from === this.id) return;
      if (this.peer && m.from !== this.peer) return; // 두 사람까지만
      if (!this.peer) {
        this.peer = m.from;
        this.onPeer?.(true);
      }
      this.lastSeen = performance.now();
      if (m.ch === 'bye') {
        this.peer = null;
        this.onPeer?.(false);
        return;
      }
      if (m.ch !== 'ping') this.onMessage?.(m.ch, m.data);
    };
    this.timer = window.setInterval(() => {
      this.bc.postMessage({ from: this.id, ch: 'ping', data: null });
      if (this.peer && performance.now() - this.lastSeen > 3000) {
        this.peer = null;
        this.onPeer?.(false);
      }
    }, 400);
    setTimeout(() => this.onStatus?.('같은 기기 탭 연결 대기 중'), 0);
    this.bc.postMessage({ from: this.id, ch: 'ping', data: null });
  }

  get hasPeer() {
    return !!this.peer;
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

export class P2PTransport implements Transport {
  readonly kind = 'p2p' as const;
  onMessage: ((ch: Channel, data: any) => void) | null = null;
  onPeer: ((joined: boolean) => void) | null = null;
  onStatus: ((text: string) => void) | null = null;
  private room: TrysteroRoom | null = null;
  private actions = new Map<Channel, MessageAction>();
  private peer: string | null = null;
  private closed = false;

  constructor(roomCode: string, turn?: RTCIceServer[]) {
    void this.init(roomCode, turn);
  }

  private async init(roomCode: string, turn?: RTCIceServer[]) {
    this.onStatus?.('온라인 릴레이에 연결하는 중…');
    try {
      const mod = await import('trystero');
      if (this.closed) return;
      const config: Record<string, unknown> = { appId: APP_ID };
      if (turn?.length) config.turnConfig = turn;
      const joinRoom = mod.joinRoom as (cfg: any, id: string, cb?: any) => TrysteroRoom;
      const room = joinRoom(config, `room-${roomCode}`, {
        onJoinError: (d: { error?: unknown }) => {
          console.warn('[yunseul] join error', d);
          this.onStatus?.('직접 연결에 실패했어요. 네트워크를 바꿔 보거나 TURN 설정이 필요할 수 있어요.');
        },
      });
      this.room = room;
      for (const ch of CHANNELS) {
        const a = room.makeAction(ch) as MessageAction;
        a.onMessage = (data, ctx) => {
          if (this.peer && ctx.peerId !== this.peer) return;
          if (ch === 'bye') return;
          this.onMessage?.(ch, data);
        };
        this.actions.set(ch, a);
      }
      room.onPeerJoin = (id) => {
        if (this.peer) return;
        this.peer = id;
        this.onPeer?.(true);
      };
      room.onPeerLeave = (id) => {
        if (id !== this.peer) return;
        this.peer = null;
        this.onPeer?.(false);
      };
      this.onStatus?.('친구를 찾는 중…');
    } catch (err) {
      console.error('[yunseul] p2p init failed', err);
      this.onStatus?.('온라인 연결을 시작하지 못했어요.');
    }
  }

  get hasPeer() {
    return !!this.peer;
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
    void this.room?.leave();
    this.room = null;
  }
}
