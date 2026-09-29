import './style.css';
import { allDiary, allKeepsakes } from './game/chapters';
import { Game } from './game/game';
import { ACCS, HAIRS, OUTFITS, loadSave, writeSave, type WardrobeOption } from './game/save';
import type { ChapterId, Look, Role } from './game/types';
import { Session, makeRoomCode, type NetMode } from './net/session';
import { drawPortrait } from './render/characters';

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

// ---------------------------------------------------------------------------
// 로비: 제목, 두 번째 여름, 이어하기

const CH_NAME: Record<ChapterId, string> = { ch1: '1장 물속의 아이', ch2: '2장 감나무 아래', ch3: '3장 칠석', epilogue: '에필로그' };

function refreshLobby() {
  const s = loadSave();
  const cleared = s.clears > 0;
  $('ngBadge').classList.toggle('hidden', !cleared);
  // 엔딩을 보면 제목의 물그림자가 다른 말로 읽혀요.
  const refl = $('titleReflect');
  refl.textContent = cleared ? '쉰 번의 여름을 기다렸어' : '다음 여름에 만나';
  refl.classList.toggle('revealed', cleared);
  $('subtitle').textContent = cleared ? '— 다음 여름에 만나 —' : '물에 비친 두 여름';
  const cont = s.soloChapter !== 'ch1';
  $('btnContinue').classList.toggle('hidden', !cont);
  $('continueLabel').textContent = cont ? `${CH_NAME[s.soloChapter]}부터` : '';
  document.querySelectorAll<HTMLCanvasElement>('canvas.portrait').forEach((c) => {
    const role = Number(c.dataset.role) as Role;
    drawPortrait(c, { role, look: s.looks[role], hairpin: role === 1 || s.reached !== 'ch1' });
  });
}
refreshLobby();

let titleTaps = 0;
$('titleWrap').addEventListener('click', () => {
  titleTaps++;
  if (titleTaps % 5 === 0 && loadSave().clears === 0) {
    // 끝까지 가기 전에는 조금만 비쳐요.
    const refl = $('titleReflect');
    refl.textContent = '쉰 번의 여름을 …렸어';
    refl.classList.add('peek');
    game.audio.start();
    game.audio.play('chime', 0.6);
    setTimeout(() => {
      refl.textContent = '다음 여름에 만나';
      refl.classList.remove('peek');
    }, 1400);
  }
});

function setUrl(q: Record<string, string>) {
  const u = new URL(location.href);
  u.search = '';
  for (const [k, v] of Object.entries(q)) u.searchParams.set(k, v);
  if (netMode === 'local') u.searchParams.set('net', 'local');
  history.replaceState(null, '', u.toString());
}

const ngOn = () => loadSave().clears > 0;

function begin(session: Session, chapter?: ChapterId) {
  game.audio.start();
  game.audio.play('ui');
  lobby.classList.add('hidden');
  game.start(session, { ng: session.isHost ? ngOn() : false, chapter });
  if (session.isHost && session.online && !params.get('auto')) setTimeout(() => game.openInvite(), 900);
}

function showPanel(which: 'main' | 'role') {
  $('panelMain').classList.toggle('hidden', which !== 'main');
  $('panelRole').classList.toggle('hidden', which !== 'role');
}

$('btnSolo').addEventListener('click', () => begin(new Session({ mode: 'solo', room: 'solo', isHost: true, role: 0 })));
$('btnContinue').addEventListener('click', () => begin(new Session({ mode: 'solo', room: 'solo', isHost: true, role: 0 }), loadSave().soloChapter));
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
  if (room === 'ARIRIA') {
    // 거꾸로 읽어도 아리리아 (이스터에그)
    writeSave((s) => {
      if (!s.eggs.includes('ariria')) s.eggs.push('ariria');
    });
    game.audio.start();
    game.audio.play('keep');
    const el = $('inpCode') as HTMLInputElement;
    el.value = '';
    el.placeholder = '거꾸로 읽어도 아리리아';
    $('invited').classList.remove('hidden');
    $('invited').innerHTML = '🐱 옷장에 <b>고양이 귀</b>가 생겼어요!';
    return;
  }
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

// 초대 링크(?room=CODE)로 들어왔을 때. auto=1이면(끊겨서 새로고침) 바로 다시 들어가요.
const invitedRoom = params.get('room');
if (invitedRoom) {
  const room = invitedRoom.toUpperCase();
  const auto = params.get('auto') === '1';
  if (params.get('host') === '1') {
    const role = (Number(params.get('role')) === 1 ? 1 : 0) as Role;
    const go = () => begin(new Session({ mode: netMode, room, isHost: true, role, turn }));
    $('btnResume').classList.remove('hidden');
    $('btnResume').addEventListener('click', go);
    if (auto) setTimeout(go, 50);
  } else {
    $('invited').classList.remove('hidden');
    $('invitedCode').textContent = room;
    $('btnJoinInvited').classList.remove('hidden');
    $('btnJoinInvited').addEventListener('click', () => join(room));
    ($('inpCode') as HTMLInputElement).value = room;
    if (auto) setTimeout(() => join(room), 50);
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
  refreshLobby();
};

// ---------------------------------------------------------------------------
// 옷장

let wdRole: Role = 0;
function renderWardrobe() {
  const s = loadSave();
  const look = s.looks[wdRole];
  document.querySelectorAll<HTMLButtonElement>('#wardrobe .tab').forEach((t) => t.classList.toggle('on', Number(t.dataset.role) === wdRole));
  drawPortrait($<HTMLCanvasElement>('wdPreview'), { role: wdRole, look, hairpin: wdRole === 1 || s.reached !== 'ch1' });
  const list = (el: HTMLElement, opts: WardrobeOption[], key: keyof Look) => {
    el.innerHTML = '';
    for (const o of opts) {
      const b = document.createElement('button');
      const ok = o.unlocked(s);
      b.className = `wd-opt${look[key] === o.id ? ' on' : ''}${ok ? '' : ' locked'}`;
      b.textContent = ok ? o.name : `🔒 ${o.name}`;
      b.title = ok ? '' : o.hint;
      b.addEventListener('click', () => {
        if (!ok) {
          b.textContent = o.hint;
          return;
        }
        const next = { ...loadSave().looks[wdRole], [key]: o.id };
        game.setLook(wdRole, next);
        game.audio.play('ui');
        renderWardrobe();
        refreshLobby();
      });
      el.appendChild(b);
    }
  };
  list($('wdOutfit'), OUTFITS[wdRole], 'outfit');
  list($('wdHair'), HAIRS[wdRole], 'hair');
  list($('wdAcc'), ACCS, 'acc');
}
$('btnWardrobe').addEventListener('click', () => {
  game.audio.start();
  game.audio.play('ui');
  renderWardrobe();
  $('wardrobe').classList.remove('hidden');
});
document.querySelectorAll<HTMLButtonElement>('#wardrobe .tab').forEach((t) =>
  t.addEventListener('click', () => {
    wdRole = Number(t.dataset.role) as Role;
    renderWardrobe();
  }),
);
$('wdClose').addEventListener('click', () => $('wardrobe').classList.add('hidden'));

// ---------------------------------------------------------------------------
// 추억 앨범

function renderAlbum() {
  const s = loadSave();
  const keeps = allKeepsakes();
  const diary = allDiary();
  const found = keeps.filter((k) => s.keeps.includes(k.id)).length;
  $('alSum').textContent = `추억 ${found}/${keeps.length} · 일기장 ${s.diary.length}/${diary.length} · 숨은 요소 ${s.eggs.length}/3${s.trueEnd ? ' · 진엔딩 ✓' : ''}`;
  const grid = $('alGrid');
  grid.innerHTML = '';
  for (const k of keeps) {
    const got = s.keeps.includes(k.id);
    const cell = document.createElement('div');
    cell.className = `al-cell${got ? '' : ' locked'}`;
    const photo = got && k.how === 'photo' ? s.photos.find((p) => p.id === k.id)?.url : null;
    cell.innerHTML = `${photo ? `<img src="${photo}" alt="">` : `<div class="al-icon">${got ? (k.how === 'photo' ? '📷' : '✦') : '?'}</div>`}<b>${got ? k.name : '???'}</b><small>${got ? k.desc : k.by === 0 ? '리아만 찾을 수 있어요' : k.by === 1 ? '아리만 찾을 수 있어요' : ''}</small>`;
    grid.appendChild(cell);
  }
  $('alDiaryTitle').classList.toggle('hidden', s.clears === 0);
  const dl = $('alDiary');
  dl.innerHTML = '';
  if (s.clears > 0) {
    for (const d of diary) {
      const got = s.diary.includes(d.id);
      const row = document.createElement('div');
      row.className = `al-page${got ? '' : ' locked'}`;
      row.innerHTML = got ? `<b>${d.date}</b> ${d.text}` : '<b>????년</b> 두 번째 여름에 호숫가 어딘가에서…';
      dl.appendChild(row);
    }
  }
  const ph = $('alPhotos');
  ph.innerHTML = '';
  const plain = s.photos.slice().reverse();
  if (!plain.length) ph.innerHTML = '<small>리아의 사진이 여기에 모여요. (리아로 능력 버튼)</small>';
  for (const p of plain) {
    const im = document.createElement('img');
    im.src = p.url;
    im.title = p.label;
    ph.appendChild(im);
  }
}
$('btnAlbum').addEventListener('click', () => {
  game.audio.start();
  game.audio.play('ui');
  renderAlbum();
  $('album').classList.remove('hidden');
});
$('alClose').addEventListener('click', () => $('album').classList.add('hidden'));

// ---------------------------------------------------------------------------

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

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((e) => console.warn('[nsm] sw', e));
  });
}
