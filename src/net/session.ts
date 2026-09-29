import type { PlayerNetState, Role } from '../game/types';
import type { Action, WorldState } from '../game/world';
import { LocalTransport, P2PTransport, type Channel, type LinkState, type Transport } from './transport';

export type NetMode = 'solo' | 'local' | 'p2p';

export interface Hello {
  v: 2;
  hostRole: Role;
  guestRole: Role;
  state: WorldState;
  host: PlayerNetState | null;
  guest: PlayerNetState | null;
}

export interface EmoteMsg {
  r: Role;
  k: string;
}

/** 화면을 톡 눌러 남기는 표시 (상대 세계에도 보여요) */
export interface MarkMsg {
  r: Role;
  w: Role;
  x: number;
  y: number;
}

export interface SessionHandlers {
  onPeer(joined: boolean): void;
  onHello(h: Hello): void;
  onPlayer(s: PlayerNetState): void;
  onWorld(s: WorldState): void;
  onAction(a: Action): void;
  onEmote(e: EmoteMsg): void;
  onMark(m: MarkMsg): void;
  onLook(look: unknown): void;
  onLink(state: LinkState, detail?: string): void;
}

/**
 * 방을 만든 쪽이 호스트예요. 호스트가 공유 상태(장, 장치, 물건, 이야기 진행)를 계산해서 보내고,
 * 각자 자기 캐릭터는 직접 움직여서 위치만 보내요.
 */
export class Session {
  readonly mode: NetMode;
  readonly room: string;
  readonly isHost: boolean;
  myRole: Role;
  ready: boolean;
  private t: Transport | null = null;

  constructor(opts: { mode: NetMode; room: string; isHost: boolean; role: Role; turn?: RTCIceServer[] }) {
    this.mode = opts.mode;
    this.room = opts.room;
    this.isHost = opts.isHost || opts.mode === 'solo';
    this.myRole = opts.role;
    this.ready = this.isHost;
    if (opts.mode === 'local') this.t = new LocalTransport(opts.room);
    if (opts.mode === 'p2p') this.t = new P2PTransport(opts.room, opts.turn);
  }

  attach(h: SessionHandlers) {
    if (!this.t) return;
    this.t.onLink = (s, d) => h.onLink(s, d);
    this.t.onPeer = (joined) => h.onPeer(joined);
    this.t.onMessage = (ch: Channel, data) => {
      switch (ch) {
        case 'hello':
          if (!this.isHost) {
            const hello = data as Hello;
            if (hello?.v !== 2) return;
            this.myRole = hello.guestRole;
            this.ready = true;
            h.onHello(hello);
          }
          break;
        case 'ps':
          h.onPlayer(data as PlayerNetState);
          break;
        case 'ws':
          if (!this.isHost) h.onWorld(data as WorldState);
          break;
        case 'act':
          if (this.isHost) h.onAction(data as Action);
          break;
        case 'emo':
          h.onEmote(data as EmoteMsg);
          break;
        case 'mark':
          h.onMark(data as MarkMsg);
          break;
        case 'look':
          h.onLook(data);
          break;
      }
    };
  }

  get online(): boolean {
    return this.mode !== 'solo';
  }

  get connected(): boolean {
    return !!this.t?.hasPeer;
  }

  get lostFor(): number {
    return this.t?.lostFor ?? 0;
  }

  sendHello(hello: Hello) {
    this.t?.send('hello', hello);
  }
  sendPlayer(s: PlayerNetState) {
    this.t?.send('ps', s);
  }
  sendWorld(s: WorldState) {
    this.t?.send('ws', s);
  }
  sendAction(a: Action) {
    this.t?.send('act', a);
  }
  sendEmote(e: EmoteMsg) {
    this.t?.send('emo', e);
  }
  sendMark(m: MarkMsg) {
    this.t?.send('mark', m);
  }
  sendLook(look: unknown) {
    this.t?.send('look', look);
  }

  close() {
    this.t?.close();
    this.t = null;
  }
}

export function makeRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  const buf = new Uint32Array(6);
  crypto.getRandomValues(buf);
  for (const n of buf) s += chars[n % chars.length];
  return s;
}
