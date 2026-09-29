import type { ChapterId, Role } from './types';
import type { WorldState } from './world';

/** 컷신 한 단계 */
export type Step =
  | { t: 'title'; no: string; title: string }
  | { t: 'narr'; text: string }
  | { t: 'say'; who: string; text: string; think?: boolean }
  | { t: 'walk'; x: number; face?: 1 | -1 }
  | { t: 'cam'; x: number | null }
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
const narr = (text: string): Step => ({ t: 'narr', text });
/** 두 번째 여름에만 보이는 할머니의 속마음 */
const ngThink = (ng: boolean, text: string): Step[] => (ng ? [think('할머니', text)] : []);

// ---------------------------------------------------------------------------
// 장 시작 (각자 자기 이야기)

export function introScript(ch: ChapterId, role: Role, ng: boolean): Step[] {
  if (ch === 'ch1') {
    if (role === 0)
      return [
        { t: 'cam', x: -10 },
        { t: 'fade', to: 0, s: 1.4 },
        { t: 'title', no: '프롤로그', title: '호숫가 집' },
        narr('여름방학. 엄마는 일이 바빠서, 나 혼자 할머니 댁에 가게 됐다.'),
        narr('산을 두 번 넘고, 버스에서 내려 한참 걸으면 나오는 호숫가 집.'),
        { t: 'walk', x: -6.9, face: -1 },
        say('할머니', '…왔구나. 기다렸어.'),
        ...ngThink(ng, '(쉰 번째 여름이구나.)'),
        say('리아', '할머니! 나 리아야. 알아보겠어?'),
        say('할머니', '리아… 그래, 리아. 물속에서 보던 얼굴 그대로네.'),
        ...ngThink(ng, '(그 애야. 틀림없어.)'),
        think('리아', '(엄마 말대로네. 할머니가 요즘 자꾸 깜빡하신다더니…)'),
        { t: 'hum', s: 3.2 },
        say('할머니', '♪ 윤슬아 윤슬아, 물 건너 오너라…'),
        say('할머니', '이거, 네가 가지렴. 달못에 두고 온 줄 알았는데… 여기 있더라.'),
        { t: 'give', what: 'hairpin' },
        { t: 'sfx', name: 'pickup' },
        say('', '할머니가 별 머리핀을 꽂아 주셨다.'),
        say('할머니', '해 질 녘에 호수에 윤슬이 뜨거든, 물속을 잘 보렴.'),
        say('할머니', '그 애한테 전해 주렴. 나, 약속 잊지 않았다고.'),
        say('리아', '그 애가 누군데? …할머니?'),
        { t: 'hum', s: 2.4 },
        narr('할머니는 대답 대신 자장가만 흥얼거리셨다.'),
        { t: 'cam', x: null },
        { t: 'walk', x: -1.2, face: 1 },
        { t: 'title', no: '1장', title: '물속의 아이' },
      ];
    return [
      { t: 'cam', x: -10 },
      { t: 'fade', to: 0, s: 1.4 },
      { t: 'title', no: '프롤로그', title: '1973년, 달못 마을' },
      narr('칠석까지 이레 남은 밤.'),
      narr('칠석 이튿날 새벽, 은하댐이 수문을 닫으면 달못 마을은 물에 잠긴다.'),
      { t: 'walk', x: -10.4, face: -1 },
      say('엄마', '아리야, 네 짐도 싸 둬야지. 이제 곧 떠나야 해.'),
      say('아리', '…싫어. 난 여기가 좋아.'),
      say('엄마', '엄마도 그래. 그래도 어쩔 수 없잖니.'),
      think('아리', '(마을이 물에 잠기면… 별이는? 감나무는? 우리 달못은?)'),
      say('엄마', '옛날 얘기 알지? 칠석을 앞둔 이레 동안 달못에 윤슬이 뜨면, 물에 비친 사람이 다른 여름을 걷는대.'),
      say('아리', '다른 여름…?'),
      say('엄마', '외할머니한테 들은 얘기야. 외할머니 자장가 불러 주면 달맞이꽃도 핀다더라.'),
      say('아리', '…달못에 잠깐 다녀올게.'),
      { t: 'cam', x: null },
      { t: 'walk', x: -1.2, face: 1 },
      { t: 'title', no: '1장', title: '물속의 아이' },
    ];
  }
  if (ch === 'ch2') {
    if (role === 0)
      return [
        { t: 'cam', x: -10 },
        { t: 'fade', to: 0, s: 1.2 },
        { t: 'title', no: '2장', title: '감나무 아래' },
        narr('사흘 뒤. 할머니는 오늘도 호수만 바라보고 계셨다.'),
        { t: 'walk', x: -6.9, face: -1 },
        say('할머니', '리아야, 감나무는 잘 있더냐? 우리 아버지가 심으신…'),
        say('리아', '감나무? 호수 가운데 섬에 있는 큰 나무?'),
        say('할머니', '그 밑에 뭘 묻었는데… 생각이 안 나. 뭐였더라.'),
        ...ngThink(ng, '(물속 공주님께 줄 선물이었지.)'),
        think('리아', '(안내판에 호수 밑에 옛 마을이 잠겨 있다고 했어. 그럼 아리는… 물귀신? 아니야. 그렇게 안 보였어.)'),
        say('리아', '내가 가 보고 올게, 할머니!'),
        { t: 'cam', x: null },
        { t: 'walk', x: -0.5, face: 1 },
      ];
    return [
      { t: 'cam', x: -10 },
      { t: 'fade', to: 0, s: 1.2 },
      { t: 'title', no: '2장', title: '감나무 아래' },
      narr('사흘 뒤. 마을 사람 절반이 벌써 떠났다.'),
      { t: 'walk', x: -10.4, face: -1 },
      say('엄마', '아리야, 요즘 누구랑 그렇게 신나게 노니?'),
      say('아리', '물속 공주님이랑. 물속에도 서울이 있대.'),
      say('엄마', '용궁 공주님이 우리 아리 데리러 왔나 보다.'),
      think('아리', '(마을이 물에 잠기면 리아네 세상이 되는 거겠지? 그럼 감나무 밑에 보물 상자를 묻어 두자. 리아가 찾을 수 있게.)'),
      { t: 'sfx', name: 'pickup' },
      say('', '아리가 보물 상자를 품에 챙겼다.'),
      { t: 'cam', x: null },
      { t: 'walk', x: -0.5, face: 1 },
    ];
  }
  if (ch === 'ch3') {
    if (role === 0)
      return [
        { t: 'cam', x: -10 },
        { t: 'fade', to: 0, s: 1.2 },
        { t: 'title', no: '3장', title: '칠석' },
        narr('칠석. 할머니는 오늘 나를 알아보지 못하셨다.'),
        { t: 'walk', x: -6.9, face: -1 },
        say('할머니', '(잠결에) 약속… 약속했는데…'),
        ...ngThink(ng, '(오늘이구나. 오늘이 그날이야.)'),
        think('리아', '(할머니가 준 머리핀, 아리 머리핀이랑 똑같아. 상자 속 그림에서도. 정말 우연일까?)'),
        say('리아', '할머니, 다녀올게. 아리한테 꼭 물어볼 게 있어.'),
        { t: 'cam', x: null },
        { t: 'walk', x: -0.5, face: 1 },
      ];
    return [
      { t: 'cam', x: -10 },
      { t: 'fade', to: 0, s: 1.2 },
      { t: 'title', no: '3장', title: '칠석' },
      narr('칠석. 동이 트면 떠난다. 마을엔 우리 식구만 남았다.'),
      { t: 'walk', x: -10.4, face: -1 },
      say('엄마', '해 뜨기 전에 떠날 거야. 마지막으로 인사하고 오렴.'),
      say('아리', '엄마, 칠석엔 까치랑 까마귀가 은하수에 다리를 놓아 준다고 했지?'),
      say('엄마', '그래. 견우랑 직녀가 일 년에 한 번 만나라고.'),
      think('아리', '(그럼 오늘 밤엔… 리아를 진짜로 만날 수 있을지도 몰라.)'),
      { t: 'cam', x: null },
      { t: 'walk', x: -0.5, face: 1 },
    ];
  }
  return [];
}

// ---------------------------------------------------------------------------
// 장 끝 (둘이 함께 보는 대화)

export function outroScript(ch: ChapterId, ng: boolean): Step[] {
  if (ch === 'ch1')
    return [
      { t: 'sfx', name: 'ending' },
      { t: 'clarity', v: 1 },
      { t: 'wait', s: 1.4 },
      say('리아', '…보인다. 이제 똑똑히 보여.'),
      say('아리', '너… 용궁에서 왔어? 물속 공주님이야?'),
      say('리아', '용궁? 아니, 난 서울에서 왔는데? 할머니 댁에 놀러 왔어.'),
      say('아리', '서울? 물속에도 서울이 있어?'),
      say('리아', '물속은 너잖아! 넌 누구야?'),
      say('아리', '난 아리. 달못 마을 사는 한아리.'),
      say('리아', '난 리아. …어? 우리 이름 거꾸로네.'),
      say('아리', '진짜네, 거꾸로다! 그리고 너도 별 머리핀 했네. 나랑 똑같아.'),
      say('리아', '이거? 할머니가 줬어. 흔한 건가 봐.'),
      ...(ng ? [think('아리', '(…왜일까. 너를 아주 오래전부터 알았던 것 같아.)')] : []),
      say('아리', '여기가 달못이야. 우리 마을 연못.'),
      say('리아', '여긴 은하호인데…? 엄청 큰 호수야.'),
      say('아리', '호수? 우리 마을엔 그런 거 없어.'),
      think('리아', '(할머니가 말한 달못… 여기였어?)'),
      { t: 'clarity', v: 0.3 },
      say('아리', '윤슬이 옅어진다. 사흘 뒤에 또 와! 보여 줄 게 있어.'),
      say('리아', '응, 꼭!'),
      { t: 'clarity', v: 0 },
      { t: 'fade', to: 1, s: 1.6 },
    ];
  if (ch === 'ch2')
    return [
      { t: 'sfx', name: 'dig' },
      { t: 'clarity', v: 0.8 },
      narr('녹슨 양철 상자. 안에는 크레파스 그림 한 장과 접힌 편지가 들어 있었다.'),
      say('리아', '"물속 공주님께. 우리 마을이 물에 잠기면, 이제 너희 마을이 되는 거지? 감나무를 잘 부탁해."'),
      say('리아', '"— 1973년 여름, 한아리"'),
      say('리아', '1973년…? 이거, 50년도 더 전이야.'),
      say('아리', '무슨 소리야? 지금이 1973년인데.'),
      say('리아', '아리야… 난 2026년에 살아.'),
      say('아리', '……'),
      say('아리', '그럼 우리 마을은 정말로… 물에 잠기는구나.'),
      say('리아', '응. 호수가 됐어. 근데 진짜 예뻐. 윤슬이 반짝이고, 네 감나무는 섬에서 제일 큰 나무가 됐어.'),
      say('아리', '…다행이다. 감나무는 살아 있구나.'),
      say('아리', '그 그림은 너야. 물속 공주님.'),
      think('리아', '(그림 속 아이는 별 머리핀을 꽂고 있었다. 아리 머리핀이랑 똑같은.)'),
      ...(ng ? [think('리아', '(할머니 댁 벽에 걸린 그림도, 크레파스였지.)')] : []),
      say('아리', '칠석 밤에 꼭 와. 그날이 마지막이래.'),
      say('리아', '…응. 꼭 갈게.'),
      { t: 'clarity', v: 0 },
      { t: 'fade', to: 1, s: 1.6 },
    ];
  if (ch === 'ch3')
    return [
      { t: 'sfx', name: 'ending' },
      { t: 'clarity', v: 1 },
      { t: 'wait', s: 1.2 },
      say('리아', '아리야, 물어볼 게 있어. 그 별 머리핀, 누가 만들어 줬어?'),
      say('아리', '우리 아빠가. 깡통 뚜껑을 오려서. 세상에 하나뿐이야.'),
      say('리아', '…나도 똑같은 거 있어. 할머니가 줬어. "달못에 두고 온 줄 알았는데"라면서.'),
      say('아리', '달못…?'),
      say('리아', '우리 할머니 이름은… 한아리야.'),
      say('아리', '……!'),
      { t: 'sfx', name: 'transfer' },
      say('아리', '그럼… 너네 할머니가… 나야?'),
      say('리아', '할머니가 매일 부르는 자장가도, 네 노래랑 똑같아.'),
      say('아리', '나… 이사 가서도 잘 살았구나. 할머니가 됐구나. 그래서 네가 있는 거구나.'),
      say('리아', '할머니가 요즘 자꾸 잊어버려. 오늘은 나도 못 알아봤어. 그래도 그 노래는 기억해.'),
      say('아리', '그럼 내가 기억할게. 오늘을. 너를. 절대 안 잊을게.'),
      say('리아', '할머니가 전해 달랬어. "약속 잊지 않았다"고.'),
      say('아리', '약속…? 난 아직 아무 약속도 안 했는데.'),
      say('아리', '…아, 그럼 지금 하면 되겠다.'),
      say('아리', '우리, 다음 여름에 꼭 다시 만나.'),
      say('리아', '다음 여름…? 너한텐 50년 뒤잖아.'),
      say('아리', '응. 그래도 기다릴게. 리아. 네 이름 거꾸로 하면 내 이름이니까, 절대 안 까먹어.'),
      { t: 'dawn', v: 1 },
      narr('동쪽 하늘이 밝아 온다. 멀리서 수문 닫히는 소리가 들렸다.'),
      { t: 'clarity', v: 0.4 },
      say('아리', '다음 여름에 만나!'),
      say('리아', '…응. 다음 여름에.'),
      { t: 'clarity', v: 0 },
      { t: 'fade', to: 1, s: 2.2 },
    ];
  return [];
}

// ---------------------------------------------------------------------------
// 에필로그 (둘 다 지금의 호숫가를 봐요)

export function epilogueScript(role: Role, _ng: boolean, trueEnd: boolean): Step[] {
  return [
    { t: 'view', s: 1 },
    { t: 'hide', on: role === 1 },
    { t: 'cam', x: -7 },
    { t: 'fade', to: 0, s: 1.6 },
    ...(role === 1 ? [narr('그 뒤로 쉰 번의 여름이 지났다.')] : [narr('다음 날 아침. 할머니가 마루에 앉아 계셨다.')]),
    { t: 'title', no: '에필로그', title: '다음 여름' },
    { t: 'walk', x: -6.9, face: -1 },
    say('할머니', '리아야. 달못은 잘 있더냐?'),
    say('리아', '할머니… 기억나?'),
    say('할머니', '그럼. 쉰 해를 기다렸는걸.'),
    say('할머니', '네가 태어나던 날, 얼굴을 보고 알았지. 물속에서 보던 그 아이구나.'),
    say('할머니', '그래서 리아라고 지었단다. 거꾸로 하면 내 이름이니까. 절대 안 까먹으려고.'),
    say('리아', '……'),
    { t: 'hum', s: 3.2 },
    say('할머니', '♪ 윤슬아 윤슬아, 물 건너 오너라…'),
    say('할머니', '약속 지켰지?'),
    say('할머니', '다음 여름에 만나자고 했잖아.'),
    ...(trueEnd
      ? ([
          { t: 'npc', id: 'grandma', pose: 'stand', x: 9.6, face: 1 },
          { t: 'cam', x: 7 },
          { t: 'walk', x: 8.4, face: 1 },
          { t: 'young', on: true },
          { t: 'clarity', v: 1 },
          narr('할머니가 호수를 들여다보셨다. 물그림자 속에서 열두 살 아리가 웃으며 손을 흔들었다.'),
          say('할머니', '…안녕, 아리야. 약속 지켰어.'),
          { t: 'wait', s: 1.5 },
        ] as Step[])
      : []),
    { t: 'fade', to: 1, s: 2.4 },
  ];
}

// ---------------------------------------------------------------------------
// 플레이 중에 일어난 일에 붙는 대사 (각자 자기 시점)

export function eventLines(ev: string, role: Role, st: WorldState): { who: string; text: string; think?: boolean }[] {
  const me = role === 0 ? '리아' : '아리';
  switch (ev) {
    case 'lit:lantern':
      return role === 0 ? [{ who: me, text: '물속에… 별빛이 다리처럼 이어졌어!' }] : [{ who: me, text: '하늘에서 별빛이 내려와 다리가 됐어! 물 위 아이가 해 준 걸까?' }];
    case 'lit:moonflower':
      return role === 0 ? [{ who: me, text: '연잎이 떠올랐어! 물속 아이가 노래를 불러 준 거야.' }] : [{ who: me, text: '달맞이꽃이 폈어. 물 위에 연잎이 떠오르는 게 보여.' }];
    case 'lit:chorong':
      return role === 0 ? [{ who: me, text: '물속에서 초롱불이 켜지더니… 내 앞에 빛 다리가 생겼어!' }] : [{ who: me, text: '청사초롱을 켰어. 물 위에 빛 다리가 놓였어!' }];
    case 'lit:streetlamp':
      return role === 0 ? [{ who: me, text: '가로등 빛이 물속 개울까지 닿았어!' }] : [{ who: me, text: '물 위에서 빛이 내려와 개울에 다리가 생겼어!' }];
    case 'pickup:marble:1':
      return role === 1 ? [{ who: me, text: '찾았다! …이거, 물 위 아이한테 주고 싶어. 물에 떨어뜨리면 닿을까?' }] : [];
    case 'transfer:marble:0':
      return role === 0 ? [{ who: me, text: '물속에서 구슬이 떠올랐어! …근데 엄청 오래된 것처럼 뿌옇네.' }] : [{ who: me, text: '구슬이 물 위로 건너갔어!' }];
    case 'transfer:marble:1':
      return role === 1 ? [{ who: me, text: '물 위에서 구슬이 내려왔어.' }] : [{ who: me, text: '구슬이 물속으로 가라앉았어…' }];
    case 'place:seokdeung':
      return role === 0 ? [{ who: me, text: '석등에 구슬을 넣었더니 불이 켜졌어. 달맞이 다리가 빛나!' }] : [{ who: me, text: '물 위에서 은은한 빛이 번져.' }];
    case 'fireflies':
      return role === 1 ? [{ who: me, text: '반딧불이 물 위로 날아올라! 계속 불러야지.' }] : [];
    case 'pickup:bucket:1':
      return role === 1 ? [{ who: me, text: '물동이 가득. 감나무한테 가자.' }] : [];
    case 'respawn:bucket':
      return role === 1 ? [{ who: me, text: '앗, 물동이가 떠내려갔다… 우물가에 하나 더 있어.' }] : [];
    case 'watered':
      return role === 0 ? [{ who: me, text: '어? 감나무 가지가… 쑥 자랐어! 섬까지 닿았어!' }] : [{ who: me, text: '물을 줬더니 물 위의 큰 나무가 움직였어. …저건 설마, 우리 감나무야?' }];
    case 'buried':
      return role === 1 ? [{ who: me, text: '보물 상자를 묻었어. 리아가 꼭 찾아야 할 텐데.' }] : [{ who: me, text: '물속에서 아리가 뭔가를 묻고 있어.' }];
    case 'magpie':
      return [{ who: '', text: `까치가 날아올라 다리가 되었어요. (${st.magpies.length}/6)` }];
    case 'splash10':
      return [{ who: '붕어', text: '뻐끔. (물놀이 좋아하는구나?)' }];
  }
  if (ev.startsWith('keep:')) return [];
  return [];
}
