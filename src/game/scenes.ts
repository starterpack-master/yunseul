import type { ChapterId, Role } from './types';
import type { WorldState } from './world';

/** 카메라가 따라갈 대상 */
export type ShotTarget = 'ria' | 'ari' | 'grandma' | 'mom' | 'both' | number;

/** 컷신 한 단계 */
export type Step =
  | { t: 'title'; no: string; title: string }
  | { t: 'caption'; text: string }
  | { t: 'narr'; text: string }
  | { t: 'say'; who: string; text: string; think?: boolean }
  | { t: 'walk'; x: number; face?: 1 | -1; who?: 'ria' | 'ari' }
  /** 카메라: on(대상) · zoom(가까이) · y(시선 높이) · side(1 물 위 / -1 물 아래) · s(옮겨 가는 시간) · hold(다 옮길 때까지 기다림) */
  /** look: 화면 가운데에 둘 높이(각자 세계 기준) · mirror: 수면을 사이에 두고 두 사람을 한 화면에 */
  | { t: 'shot'; on?: ShotTarget; zoom?: number; look?: number; side?: 1 | -1; s?: number; hold?: boolean; mirror?: boolean }
  /** 대사마다 말하는 사람 쪽으로: close = 그 사람 얼굴을 가까이 / keep = 지금 구도 그대로 뒤집기만 */
  | { t: 'auto'; on: boolean; frame?: 'close' | 'keep' }
  | { t: 'touch' }
  | { t: 'shake'; a: number; s: number }
  | { t: 'music'; v: number }
  | { t: 'rewind' }
  | { t: 'wait'; s: number }
  | { t: 'fade'; to: number; s: number }
  | { t: 'sfx'; name: string }
  | { t: 'hum'; s: number }
  | { t: 'give'; what: 'hairpin' }
  | { t: 'clarity'; v: number }
  | { t: 'view'; s: 1 | -1 }
  | { t: 'npc'; id: string; pose?: 'sit' | 'stand' | 'sleep'; x?: number; face?: 1 | -1 }
  | { t: 'young'; on: boolean }
  | { t: 'dawn'; v: number }
  | { t: 'hide'; on: boolean };

const say = (who: string, text: string): Step => ({ t: 'say', who, text });
const think = (who: string, text: string): Step => ({ t: 'say', who, text, think: true });
const cap = (text: string): Step => ({ t: 'caption', text });
/** on을 zoom만큼 가까이, look 높이를 화면 가운데에 */
const shot = (on: ShotTarget, zoom: number, look = 2.2, side?: 1 | -1, s = 0.9, hold = false): Step => ({ t: 'shot', on, zoom, look, side, s, hold });
/** 수면을 사이에 두고 위(리아)와 아래(아리)를 한 화면에 */
const mirror = (on: ShotTarget, zoom: number, side?: 1 | -1, s = 1.2, hold = false): Step => ({ t: 'shot', on, zoom, side, s, hold, mirror: true });
const wait = (s: number): Step => ({ t: 'wait', s });
const music = (v: number): Step => ({ t: 'music', v });
const auto = (on: boolean, frame: 'close' | 'keep' = 'close'): Step => ({ t: 'auto', on, frame });
/** 두 번째 여름에만 보이는 속마음 */
const ng2 = (ng: boolean, who: string, text: string): Step[] => (ng ? [think(who, text)] : []);

const RIA = '리아';
const ARI = '아리';
const GMA = '할머니';
const MOM = '엄마';

const TITLES: Record<Exclude<ChapterId, 'epilogue'>, [string, string]> = {
  ch1: ['1장', '물속의 아이'],
  ch2: ['2장', '다시, 같은 밤'],
  ch3: ['3장', '칠석'],
};

// ---------------------------------------------------------------------------
// 장 시작: 각자 자기 집에서 (혼자 하기는 리아 → 아리 순서로 둘 다)

function riaOpening(day: string): Step[] {
  return [shot(-10.5, 1.15, 0.9, 1, 0), { t: 'fade', to: 0, s: 1.4 }, cap(day), { t: 'walk', x: -6.9, face: -1 }];
}

function ariOpening(): Step[] {
  return [shot(-10.5, 1.15, 0.9, -1, 0), { t: 'fade', to: 0, s: 1.4 }, cap('달못 마을 · 칠석 밤'), { t: 'walk', x: -10.2, face: -1 }];
}

function toLake(ch: Exclude<ChapterId, 'epilogue'>): Step[] {
  const [no, title] = TITLES[ch];
  return [mirror(2.5, 1.0, undefined, 2.2), { t: 'walk', x: -1.2, face: 1 }, { t: 'title', no, title }];
}

/** 아리네 집: 매번 똑같은 밤이라 엄마도 똑같은 말을 해요. */
function ariHome(ch: ChapterId, ng: boolean): Step[] {
  if (ch === 'ch3')
    return [
      shot('mom', 1.7, 0.9, -1, 1.1),
      say(MOM, '아리야, 짐 다 쌌…'),
      say(ARI, '다 쌌어. 달못 다녀올게.'),
      say(MOM, '어머. 엄마가 뭐라고 할 줄 알았니?'),
      shot('ari', 2.0, 0.9, -1, 0.8),
      say(ARI, '……'),
      shot('mom', 1.7, 0.9, -1, 0.6),
      say(MOM, '늦지 말고. 늪 쪽은…'),
      say(ARI, '캄캄하니까 조심할게.'),
    ];
  return [
    shot('mom', 1.7, 0.9, -1, 1.1),
    say(MOM, '아리야, 짐 다 쌌니? 새벽에 떠나야 해.'),
    say(ARI, '…다 쌌어.'),
    say(MOM, '마지막으로 동네 한 바퀴 돌고 올래?'),
    say(ARI, '달못에 다녀올게.'),
    say(MOM, '늦지 말고. 늪 쪽은 캄캄하니까 조심하고.'),
    ...(ch === 'ch1' ? ng2(ng, ARI, '(또 이 밤이다. 몇 번째인지 이제 세지도 않아.)') : ng2(ng, ARI, '(리아가 또 올까. …모르는 척해야지. 알면 끝내자고 할 테니까.)')),
  ];
}

export function introScript(ch: ChapterId, role: Role, ng: boolean): Step[] {
  if (ch === 'epilogue') return [];
  if (role === 1) return [...ariOpening(), ...ariHome(ch, ng), ...toLake(ch)];
  if (ch === 'ch1')
    return [
      ...riaOpening('첫째 날 · 해 질 녘'),
      shot('grandma', 1.7, 0.9, 1, 1.1),
      say(GMA, '…왔구나.'),
      say(RIA, '할머니! 나 리아야. 알아보겠어?'),
      say(GMA, '그럼. 기다렸단다.'),
      ...ng2(ng, GMA, '(쉰 번째 여름이구나.)'),
      say(RIA, '엄마가 오늘 간다고 전화했구나?'),
      say(GMA, '…이리 와 보렴.'),
      shot('ria', 2.2, 1.0, 1, 0.8),
      { t: 'give', what: 'hairpin' },
      { t: 'sfx', name: 'pickup' },
      say(RIA, '별 머리핀? 예쁘다. 할머니 거야?'),
      shot('grandma', 1.7, 0.9, 1, 0.8),
      say(GMA, '아주 옛날에 잃어버린 줄 알았는데, 올봄에 찾았어.'),
      say(GMA, '해 질 녘엔 호수를 잘 보렴.'),
      say(RIA, '호수를? 왜?'),
      say(GMA, '물에 비친 애가 너랑 다르게 움직이거든.'),
      say(GMA, '…그 애한테 인사해 주렴.'),
      { t: 'hum', s: 3 },
      shot('ria', 1.9, 0.9, 1, 0.8),
      think(RIA, '(엄마 말대로네. 할머니가 요즘 자꾸 깜빡하신다더니.)'),
      ...toLake('ch1'),
    ];
  if (ch === 'ch2')
    return [
      ...riaOpening('둘째 날 · 해 질 녘'),
      shot('grandma', 1.7, 0.9, 1, 1.1),
      say(GMA, '리아야. 어제 그 애는 만났니?'),
      shot('ria', 1.9, 0.9, 1, 0.5),
      say(RIA, '할머니, 어떻게 알았어?!'),
      shot('grandma', 1.9, 0.9, 1, 0.5),
      say(GMA, '…그 애, 울고 있진 않던?'),
      ...ng2(ng, GMA, '(그날 밤, 나는 참 많이 울었는데.)'),
      say(RIA, '아니? 웃던데. 오늘도 만나기로 했어.'),
      say(GMA, '그래… 그래. 잘해 주렴.'),
      { t: 'hum', s: 2.4 },
      shot('ria', 1.9, 0.9, 1, 0.8),
      think(RIA, '(할머니는 정말… 뭘 알고 계신 걸까?)'),
      ...toLake('ch2'),
    ];
  return [
    ...riaOpening('셋째 날 · 해 질 녘'),
    shot('grandma', 1.8, 0.8, 1, 1.1),
    say(RIA, '할머니, 주무셔?'),
    { t: 'hum', s: 2 },
    say(GMA, '…아침이… 와도 괜찮단다…'),
    wait(0.8),
    shot('ria', 2.1, 0.9, 1, 1.0),
    say(RIA, '……'),
    think(RIA, '(아침이 와도… 괜찮다고?)'),
    say(RIA, '다녀올게, 할머니.'),
    ...toLake('ch3'),
  ];
}

// ---------------------------------------------------------------------------
// 장 중간: 물가에서 만나는 장면 (둘이 함께 봐요)

export function meetScene(ch: ChapterId, ng: boolean): Step[] {
  if (ch === 'ch1')
    return [
      mirror('ria', 1.15, 1, 0.8),
      say(RIA, '…어?'),
      mirror('ria', 1.55, 1, 2.0),
      say(RIA, '물에 비친 내가… 나랑 다르게 움직여.'),
      auto(true, 'keep'),
      say(ARI, '…너, 누구야?'),
      { t: 'shake', a: 0.07, s: 0.3 },
      say(RIA, '말도 해?!'),
      say(ARI, '너야말로. 왜 물속에 거꾸로 서 있어?'),
      say(RIA, '거꾸로 서 있는 건 너거든?'),
      say(ARI, '…'),
      say(RIA, '…'),
      say(ARI, '물속 사람이랑 얘기하는 건 처음이야.'),
      say(RIA, '나도 처음이야. 할머니가 말한 게 너였구나.'),
      say(ARI, '달맞이 다리 알아? 저쪽 끝에 있는 돌다리.'),
      say(ARI, '거기 꼭대기에선 물이 거울처럼 맑아져.'),
      say(RIA, '거기서 제대로 보자는 거지? 좋아!'),
      say(RIA, '근데 가는 길이 온통 물이야.'),
      say(ARI, '같이 가면 돼. 넌 위에서, 난 아래에서.'),
      auto(false),
    ];
  if (ch === 'ch2')
    return [
      mirror('ria', 1.5, 1, 0.8),
      say(RIA, '아리! 나 왔어!'),
      shot('ari', 2.2, 0.8, -1, 0.3),
      say(ARI, '…누구야?'),
      music(0),
      shot('ria', 2.2, 0.8, 1, 0.3),
      say(RIA, '…뭐?'),
      mirror('ria', 1.6, 1, 0.9),
      auto(true, 'keep'),
      say(RIA, '나야, 리아. 어제 달맞이 다리에서 만났잖아.'),
      say(ARI, '달맞이 다리? 난 너 처음 보는데.'),
      ...ng2(ng, ARI, '(미안해, 리아.)'),
      say(RIA, '장난치지 마. 이름이 거꾸로라고 같이 웃었잖아.'),
      say(ARI, '…물속 사람이랑 얘기하는 건 처음이야.'),
      auto(false),
      shot('ria', 2.5, 0.9, 1, 1.6),
      think(RIA, '(어제랑… 똑같은 말이야.)'),
      mirror('both', 1.5, 1, 1.0),
      auto(true, 'keep'),
      say(RIA, '아리. 오늘 무슨 날이야?'),
      say(ARI, '칠석. 내일 새벽에 우리 마을이 물에 잠겨.'),
      say(RIA, '어제도 칠석이었어. 어제도 내일 새벽이라고 했어.'),
      say(ARI, '……'),
      say(RIA, '너한텐 어제가 없는 거야. 같은 밤이 계속 되풀이되고 있어.'),
      say(ARI, '무슨 소린지 모르겠어.'),
      music(1),
      say(RIA, '새벽이 오면 처음으로 돌아가는 거라면…'),
      say(RIA, '새벽이 오기 전에 마을을 벗어나면 되잖아!'),
      say(ARI, '마을을… 벗어나?'),
      say(RIA, '마을 밖으로 가는 길, 알아?'),
      say(ARI, '감나무 언덕을 넘으면 읍내 가는 길이야.'),
      say(ARI, '근데 개울 다리가 장마에 떠내려갔어.'),
      say(RIA, '내가 도와줄게. 새벽 전에 가자!'),
      auto(false),
    ];
  if (ch === 'ch3')
    return [
      mirror('ria', 1.5, 1, 0.8),
      auto(true, 'keep'),
      say(RIA, '아리.'),
      say(ARI, '…누구…'),
      say(RIA, '리아. 내 이름 알잖아.'),
      say(RIA, '어제 새벽에 불렀잖아. "미안해, 리아"라고.'),
      music(0),
      auto(false),
      shot('ari', 2.4, 0.9, -1, 1.2, true),
      wait(1.2),
      say(ARI, '……'),
      say(ARI, '…응. 알아.'),
      mirror('both', 1.6, -1, 1.2),
      auto(true, 'keep'),
      say(RIA, '전부 기억하고 있었어?'),
      say(ARI, '전부. 어제도, 그저께도. 너를 만나기 전의 밤들도.'),
      say(RIA, '만나기 전?'),
      say(ARI, '이 밤, 벌써 몇 번째인지 몰라. 백 번은 넘었을 거야.'),
      { t: 'shake', a: 0.06, s: 0.4 },
      say(RIA, '배, 백 번…?'),
      say(ARI, '처음 이 밤에, 서낭당 나무에 빌었어. 아침이 안 오게 해 달라고.'),
      say(ARI, '마을이 잠기는 게 싫었어. 떠나기 싫었어.'),
      say(ARI, '그랬더니 정말로 아침이 안 와. 새벽이 되면 다시 오늘 저녁이야.'),
      say(RIA, '그럼 왜 모르는 척했어?'),
      say(ARI, '…네가 알면, 끝내자고 할 것 같아서.'),
      say(ARI, '혼자인 밤이 너무 길었거든. 네가 와서… 좋았어.'),
      wait(0.8),
      music(0.6),
      say(RIA, '나도 좋아. 근데 이대로면, 넌 계속 여기 혼자잖아.'),
      say(RIA, '우리 할머니가 그러셨어. 아침이 와도 괜찮대.'),
      say(ARI, '……'),
      say(ARI, '칠석엔 까치들이 다리를 놓아 준대. 견우랑 직녀가 만나라고.'),
      say(ARI, '그 다리 위라면, 물 너머 말고… 진짜로 만날 수 있을지도 몰라.'),
      say(ARI, '딱 한 번만 진짜로 만나고 싶어. 그러면 아침이 와도 괜찮을 것 같아.'),
      music(1),
      say(RIA, '좋아. 까치 모으자. 한 마리도 빠짐없이!'),
      auto(false),
    ];
  return [];
}

// ---------------------------------------------------------------------------
// 장 끝 (둘이 함께 보는 대화)

export function outroScript(ch: ChapterId, ng: boolean): Step[] {
  if (ch === 'ch1')
    return [
      { t: 'sfx', name: 'ending' },
      { t: 'clarity', v: 1 },
      mirror('both', 1.3, 1, 1.6, true),
      wait(0.8),
      auto(true, 'keep'),
      say(RIA, '와… 이제 진짜 잘 보여.'),
      say(ARI, '너 머리핀, 나랑 똑같다.'),
      say(RIA, '어? 진짜네. 할머니가 준 건데.'),
      say(ARI, '이거, 우리 아빠가 깡통 뚜껑으로 만들어 준 거야.'),
      say(RIA, '신기하다… 아, 난 리아야.'),
      say(ARI, '난 아리. 한아리.'),
      say(RIA, '리아랑 아리? 거꾸로네!'),
      say(ARI, '진짜. 거꾸로다.'),
      say(RIA, '넌 어디 살아? 호수 밑에 마을이 있는 거야?'),
      say(ARI, '호수? 여긴 달못 마을이야. 이건 그냥 연못이고.'),
      music(0.2),
      auto(false),
      shot('ria', 2.2, 1.0, 1, 1.2),
      say(RIA, '…달못?'),
      say(RIA, '호숫가 안내판에 그 이름 있었어.'),
      say(RIA, '댐이 생기면서 물에 잠긴 마을이라고.'),
      mirror('both', 1.4, 1, 1.0),
      auto(true, 'keep'),
      say(ARI, '잠긴 게 아니라, 잠길 거야. 내일 새벽에.'),
      say(ARI, '댐 수문을 닫는대. 그래서 다들 이사 가.'),
      say(RIA, '…잠깐. 거기, 지금 몇 년이야?'),
      say(ARI, '1973년. 너는?'),
      say(RIA, '…2026년.'),
      wait(1.0),
      say(ARI, '……'),
      say(ARI, '그럼 우리 마을, 진짜로 물에 잠기는구나.'),
      say(RIA, '…미안. 괜히 말했나 봐.'),
      say(ARI, '아니. 알려 줘서 고마워.'),
      music(1),
      say(ARI, '리아. 내일도 와 줄 거야?'),
      say(RIA, '당연하지! 내일 또 올게.'),
      auto(false),
      shot('ari', 2.3, 1.0, -1, 1.0, true),
      say(ARI, '…응. 내일.'),
      ...ng2(ng, ARI, '(내일은 안 와. 또 오늘이야.)'),
      { t: 'clarity', v: 0 },
      { t: 'fade', to: 1, s: 1.8 },
    ];
  if (ch === 'ch2')
    return [
      mirror('both', 0.88, 1, 1.2),
      auto(true, 'keep'),
      say(RIA, '다 왔어! 저 장승만 지나면 마을 밖이지?'),
      say(ARI, '…응.'),
      { t: 'dawn', v: 0.35 },
      { t: 'sfx', name: 'dawn' },
      say(RIA, '하늘이 밝아 와. 빨리!'),
      wait(0.8),
      say(RIA, '아리?'),
      music(0),
      auto(false),
      shot('ari', 2.4, 1.0, -1, 1.2, true),
      wait(1.0),
      say(ARI, '…미안해, 리아.'),
      shot('ria', 2.5, 1.0, 1, 0.3),
      say(RIA, '…어?'),
      say(RIA, '방금… 내 이름…'),
      say(RIA, '나, 오늘은 이름 말 안 했는데.'),
      { t: 'dawn', v: 0.8 },
      { t: 'shake', a: 0.12, s: 1.2 },
      { t: 'rewind' },
    ];
  if (ch === 'ch3')
    return [
      { t: 'sfx', name: 'ending' },
      { t: 'clarity', v: 1 },
      mirror('both', 0.8, 1, 1.8, true),
      wait(0.8),
      auto(true, 'keep'),
      say(RIA, '아리.'),
      say(ARI, '리아.'),
      { t: 'touch' },
      wait(1.2),
      say(ARI, '…따뜻하다.'),
      say(RIA, '진짜로 만났네.'),
      say(ARI, '리아, 부탁 하나만 해도 돼?'),
      say(RIA, '뭔데?'),
      say(ARI, '나 잊지 마.'),
      say(RIA, '안 잊어. 절대.'),
      say(ARI, '나도. 네 이름 거꾸로 하면 내 이름이니까, 절대 안 잊을 거야.'),
      say(ARI, '…이제 아침 와도 돼.'),
      auto(false),
      { t: 'dawn', v: 1 },
      { t: 'sfx', name: 'dawn' },
      mirror('both', 0.74, 1, 3.0),
      auto(true, 'keep'),
      say(RIA, '아리, 또 만날 수 있지?'),
      say(ARI, '응. 다음 여름에.'),
      say(RIA, '다음 여름…? 너한텐 50년도 넘게 남았잖아.'),
      say(ARI, '그래도. 기다릴게.'),
      auto(false),
      shot('ari', 2.1, 1.0, -1, 1.0),
      say(ARI, '다음 여름에 만나, 리아.'),
      shot('ria', 2.1, 1.0, 1, 1.0),
      say(RIA, '…응. 다음 여름에 만나.'),
      { t: 'clarity', v: 0 },
      { t: 'fade', to: 1, s: 2.4 },
    ];
  return [];
}

// ---------------------------------------------------------------------------
// 에필로그 (둘 다 지금의 호숫가를 봐요)

export function epilogueScript(role: Role, _ng: boolean, trueEnd: boolean): Step[] {
  return [
    { t: 'view', s: 1 },
    { t: 'hide', on: true },
    shot(-8, 1.2, 0.9, 1, 0),
    { t: 'fade', to: 0, s: 1.6 },
    cap(role === 1 ? '그리고, 쉰 번의 여름이 지났다' : '넷째 날 · 아침'),
    { t: 'walk', x: -6.9, face: -1, who: 'ria' },
    shot('grandma', 1.8, 0.9, 1, 1.2),
    say(GMA, '리아야.'),
    say(RIA, '할머니…'),
    say(GMA, '아침이 왔구나.'),
    say(RIA, '…할머니. 혹시…'),
    say(GMA, '달못은 잘 있더냐?'),
    wait(0.8),
    shot('ria', 2.3, 1.0, 1, 0.8),
    say(RIA, '…아리?'),
    shot('grandma', 2.2, 0.9, 1, 1.0),
    say(GMA, '그래. 오랜만이구나, 리아.'),
    say(GMA, '네가 태어나던 날, 한눈에 알아봤단다. 그 밤 물속의 그 아이구나.'),
    say(GMA, '그래서 네 이름을 리아라고 지었지. 거꾸로 하면 내 이름이니까.'),
    say(RIA, '할머니가… 내 이름을…'),
    say(GMA, '그날 아침에 이사를 갔어. 그리고 여름마다 생각했지. 이번 여름엔 올까.'),
    { t: 'hum', s: 3 },
    say(GMA, '약속 지켰지? 다음 여름에 만나자고 했잖아.'),
    shot('ria', 2.2, 1.0, 1, 0.8),
    say(RIA, '…50년이나 걸렸잖아.'),
    shot('grandma', 2.0, 0.9, 1, 0.8),
    say(GMA, '쉰 번째 여름이란다. 기다린 보람이 있구나.'),
    ...(trueEnd
      ? ([
          { t: 'npc', id: 'grandma', pose: 'stand', x: 9.6, face: 1 },
          shot(8, 1.4, 0.4, 1, 2.4),
          { t: 'walk', x: 8.4, face: 1, who: 'ria' },
          { t: 'young', on: true },
          { t: 'clarity', v: 1 },
          shot(9.6, 1.9, -0.4, 1, 1.6),
          say('', '할머니가 호수를 들여다보셨다. 물그림자 속에서 열두 살 아리가 손을 흔들었다.'),
          say(GMA, '…안녕, 아리야. 약속 지켰어.'),
          wait(1.5),
        ] as Step[])
      : []),
    shot(-2, 1.0, 1.2, 1, 2.4),
    { t: 'fade', to: 1, s: 2.4 },
  ];
}

// ---------------------------------------------------------------------------
// 플레이 중에 일어난 일에 붙는 짧은 대화 (둘 다 같은 대화를 봐요)

type L = { who: string; text: string; think?: boolean };
const l = (who: string, text: string): L => ({ who, text });

export function eventLines(ev: string, st: WorldState): L[] {
  switch (ev) {
    case 'lit:lantern':
      return [l(ARI, '어, 내 쪽에 별빛 다리가 생겼어!'), l(RIA, '진짜? 내가 등불 켜서?'), l(ARI, '응. 네 쪽 불빛이 여기선 길이 되나 봐.')];
    case 'lit:moonflower':
      return [l(RIA, '연잎이 떠올랐어!'), l(ARI, '달맞이꽃이 폈을 뿐인데… 신기하다.')];
    case 'lit:chorong':
      return [l(RIA, '내 앞에 빛 다리가 생겼어!'), l(ARI, '청사초롱 켰어. 건너와!')];
    case 'pickup:marble:1':
      return [l(ARI, '찾았다, 내 유리구슬! 이거… 리아한테 보내 볼까?')];
    case 'transfer:marble:0':
      return [l(RIA, '물속에서 구슬이 떠올랐어! 근데… 엄청 낡았네?'), l(ARI, '이상하다. 방금까지 새 거였는데.')];
    case 'transfer:marble:1':
      return [l(ARI, '구슬이 다시 내려왔어.')];
    case 'place:seokdeung':
      return [l(RIA, '석등에 불이 들어왔어!'), l(ARI, '달맞이 다리가 빛나. 꼭대기에서 만나!')];
    case 'fireflies':
      return [l(RIA, '반딧불 징검다리다!'), l(ARI, '노래하는 동안만 떠 있어. 빨리 건너!')];
    case 'pickup:bucket:1':
      return [l(ARI, '감나무 줄 물. 가뭄이라 매일 밤 떠다 줘.')];
    case 'respawn:bucket':
      return [l(ARI, '앗, 물동이… 우물가로 다시 가야겠다.')];
    case 'respawn:lamp':
      return [l(RIA, '초롱이 물에 빠졌어… 다행히 부두 끝으로 떠밀려 왔네.')];
    case 'respawn:stake':
      return [l(ARI, '말뚝이 떠내려갔다가 제자리로 왔어.')];
    case 'hook:first':
      return [l(ARI, '개울 위에 빛길이 생겼어!'), l(RIA, '초롱을 옮겨 걸면 빛길도 옮겨 가나 봐.')];
    case 'fence':
      return [l(RIA, '어? 물 위로 그루터기가 하나 더 솟았어!'), l(ARI, '울타리 빈자리에 말뚝을 박았을 뿐인데?'), l(RIA, '그 말뚝이 50년 뒤까지 남아 있었나 봐!')];
    case 'watered':
      return [l(RIA, '감나무 가지가… 쑥 자라서 섬까지 닿았어!'), l(ARI, '우리 감나무가? 그렇게 크게 자라?'), l(RIA, '응. 섬에서 제일 큰 나무야.')];
    case 'transfer:coin:1':
      return [l(ARI, '이게 뭐야? 반짝반짝… 백 원?'), l(RIA, '우리 동네 동전이야. 2026년 거.'), l(ARI, '처음 보는 돈이다.')];
    case 'magpie:m1':
      return [l(ARI, '옛다, 반짝이. …좋아한다!')];
    case 'magpie:m4':
      return [l(RIA, '찰칵! …어, 까치가 깼어!'), l(ARI, '네 불빛이 여기까지 왔어!')];
    case 'splash10':
      return [l('붕어', '뻐끔. (물놀이 좋아하는구나?)')];
  }
  if (ev === 'magpie') return [l('', `까치가 다리를 놓으러 날아갔어요 (${st.magpies.length}/6)`)];
  return [];
}
