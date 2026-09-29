import './style.css';
import { Game } from './game/game';
import type { Role } from './game/types';
import { Session, makeRoomCode, type NetMode } from './net/session';
import { CHAR_H, CHAR_W, makeCharacterSheet } from './render/pixelart';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

const params = new URLSearchParams(location.search);
const netMode: NetMode = params.get('net') === 'local' ? 'local' : 'p2p';

// 정식 배포 시 TURN 서버(직접 연결이 막힌 네트워크용)를 빌드 환경변수로 넣을 수 있어요.
const env = import.meta.env;
const turn: RTCIceServer[] | undefined = env.VITE_TURN_URLS
  ? [{ urls: String(env.VITE_TURN_URLS).split(','), username: env.VITE_TURN_USERNAME, credential: env.VITE_TURN_CREDENTIAL }]
  : undefined;

const game = new Game($<HTMLCanvasElement>('game'));
const lobby = $('lobby');

if (netMode === 'local') $('netMode').textContent = '· 같은 기기 탭 테스트 모드';

// 로비의 캐릭터 초상화 (도트 그대로 확대)
document.querySelectorAll<HTMLCanvasElement>('canvas.portrait').forEach((c) => {
  const role = Number(c.dataset.role) as Role;
  const sheet = makeCharacterSheet(role).image as HTMLCanvasElement;
  c.width = CHAR_W;
  c.height = CHAR_H;
  c.getContext('2d')!.drawImage(sheet, 0, 0, CHAR_W, CHAR_H, 0, 0, CHAR_W, CHAR_H);
});

function setUrl(q: Record<string, string>) {
  const u = new URL(location.href);
  u.search = '';
  for (const [k, v] of Object.entries(q)) u.searchParams.set(k, v);
  if (netMode === 'local') u.searchParams.set('net', 'local');
  history.replaceState(null, '', u.toString());
}

function begin(session: Session) {
  game.audio.start();
  game.audio.play('ui');
  lobby.classList.add('hidden');
  game.start(session);
  if (session.isHost && session.online) setTimeout(() => game.openInvite(), 900);
}

function showPanel(which: 'main' | 'role') {
  $('panelMain').classList.toggle('hidden', which !== 'main');
  $('panelRole').classList.toggle('hidden', which !== 'role');
}

$('btnSolo').addEventListener('click', () => {
  begin(new Session({ mode: 'solo', room: 'solo', isHost: true, role: 0 }));
});

$('btnCreate').addEventListener('click', () => {
  game.audio.start();
  game.audio.play('ui');
  showPanel('role');
});
$('btnBack').addEventListener('click', () => showPanel('main'));

document.querySelectorAll<HTMLButtonElement>('button.role').forEach((b) => {
  b.addEventListener('click', () => {
    const role = Number(b.dataset.role) as Role;
    const room = makeRoomCode();
    setUrl({ room, host: '1', role: String(role) });
    begin(new Session({ mode: netMode, room, isHost: true, role, turn }));
  });
});

function join(code: string) {
  const room = code.trim().toUpperCase();
  if (room.length < 4) {
    $('inpCode').focus();
    return;
  }
  setUrl({ room });
  begin(new Session({ mode: netMode, room, isHost: false, role: 1, turn }));
}

$('btnJoin').addEventListener('click', () => join(($('inpCode') as HTMLInputElement).value));
$('inpCode').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') join(($('inpCode') as HTMLInputElement).value);
});

// 초대 링크(?room=CODE)로 들어왔을 때
const invitedRoom = params.get('room');
if (invitedRoom) {
  const room = invitedRoom.toUpperCase();
  if (params.get('host') === '1') {
    const role = (Number(params.get('role')) === 1 ? 1 : 0) as Role;
    $('btnResume').classList.remove('hidden');
    $('btnResume').addEventListener('click', () => begin(new Session({ mode: netMode, room, isHost: true, role, turn })));
  } else {
    $('invited').classList.remove('hidden');
    $('invitedCode').textContent = room;
    $('btnJoinInvited').classList.remove('hidden');
    $('btnJoinInvited').addEventListener('click', () => join(room));
    ($('inpCode') as HTMLInputElement).value = room;
  }
}

game.onExit = () => {
  lobby.classList.remove('hidden');
  showPanel('main');
  $('btnResume').classList.add('hidden');
  $('invited').classList.add('hidden');
  $('btnJoinInvited').classList.add('hidden');
  const u = new URL(location.href);
  u.search = '';
  if (netMode === 'local') u.searchParams.set('net', 'local');
  history.replaceState(null, '', u.toString());
};

// 세로 화면 안내 (막지는 않아요)
const rotate = $('rotate');
let rotateTimer = 0;
function checkOrientation() {
  const portrait = window.innerHeight > window.innerWidth && matchMedia('(pointer: coarse)').matches;
  rotate.classList.toggle('hidden', !portrait);
  clearTimeout(rotateTimer);
  if (portrait) rotateTimer = window.setTimeout(() => rotate.classList.add('hidden'), 6000);
}
window.addEventListener('resize', checkOrientation);
checkOrientation();

// PWA: 서비스 워커 (빌드된 배포본에서만)
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((e) => console.warn('[yunseul] sw', e));
  });
}
