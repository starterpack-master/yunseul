(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=e=>+(e===0),t=[{kind:`hi`,label:`안녕!`},{kind:`thanks`,label:`고마워`},{kind:`ok`,label:`좋아`},{kind:`nice`,label:`잘했어!`},{kind:`wait`,label:`기다려`},{kind:`come`,label:`이리 와`},{kind:`stand`,label:`올라서 줘`},{kind:`help`,label:`어떡하지?`}],n={0:`리아`,1:`아리`},r=[`ch1`,`ch2`,`ch3`,`epilogue`],i=1.5,a=(e,t)=>!!e.flags[`lit:${t}`],o=(e,t)=>!!e.flags[t],s=(e,t,n)=>!e.hidden&&e.x>=t&&e.x<=n,c=(e,t)=>({who:e,text:t}),l=(e,t)=>e.magpies.includes(t);function u(e,t,n){return e.map(e=>({x0:e-t/2,x1:e+t/2,y0:n-.22,y1:n}))}var d=(e,t)=>e.items.find(e=>e.id===t),f=e=>{let t=d(e.st,`marble`);return!!t&&t.world===1&&t.mode!==`held`&&t.y>3},p={id:`ch1`,no:`1장`,title:`물속의 아이`,minX:-15.5,maxX:63.6,start:{0:{x:-15,y:i},1:{x:-8.2,y:i}},solids:{0:[{kind:`ground`,x0:-24,x1:11,y0:0,y1:i},{kind:`ground`,x0:19,x1:22.5,y0:0,y1:i},{kind:`ground`,x0:25.5,x1:40,y0:0,y1:i},{kind:`ground`,x0:43.5,x1:46.5,y0:0,y1:i},{kind:`ledge`,x0:49.5,x1:52.5,y0:0,y1:4.3},{kind:`ground`,x0:52.5,x1:56.9,y0:0,y1:i},{kind:`ground`,x0:61.1,x1:86,y0:0,y1:i}],1:[{kind:`ground`,x0:-24,x1:11,y0:0,y1:i},{kind:`ground`,x0:19,x1:22.5,y0:0,y1:i},{kind:`ledge`,x0:25.5,x1:28,y0:0,y1:4.3},{kind:`ground`,x0:28,x1:29.5,y0:0,y1:i},{kind:`ground`,x0:39.5,x1:46.5,y0:0,y1:i},{kind:`ground`,x0:49.5,x1:56.9,y0:0,y1:i},{kind:`ground`,x0:61.1,x1:86,y0:0,y1:i}]},lights:[{id:`lantern`,world:0,kind:`lantern`,x:8.6,y:i,label:`정원 등불 켜기`},{id:`moonflower`,world:1,kind:`moonflower`,x:6.4,y:i,label:`노래 불러 주기`,bySong:!0},{id:`chorong`,world:1,kind:`chorong`,x:41.4,y:i,label:`청사초롱 켜기`}],bridges:[{id:`starBridge`,world:1,kind:`star`,segs:[{x0:10.9,x1:19.1,y0:i-.25,y1:i}],when:e=>a(e,`lantern`)},{id:`lilyBridge`,world:0,kind:`lily`,segs:u([12.1,14.1,16.1,18.1],1.3,.3),when:e=>a(e,`moonflower`)},{id:`starBridge2`,world:0,kind:`star`,segs:[{x0:39.8,x1:43.7,y0:i-.25,y1:i}],when:e=>a(e,`chorong`)}],buoys:[{id:`woodPost`,owner:0,x:24,w:1.4,top:{0:2.2,1:1},travel:2,look:`wood`},{id:`stonePost`,owner:1,x:48,w:1.4,top:{0:1,1:2.2},travel:2,look:`stone`}],items:[{id:`marble`,kind:`marble`,world:1,x:26.9,y:4.3,crosses:!0,name:`유리구슬`}],sockets:[{id:`seokdeung`,world:0,x:51.2,y:4.3,accepts:`marble`,flag:`seokdeung`,label:`석등에 구슬 넣기`,look:`seokdeung`}],uses:[],arcs:[{id:`moon`,kind:`moon`,x0:56.4,x1:61.6,h:2.6}],hidden:[{id:`h1`,world:1,x:30.9,w:1,top:.35},{id:`h2`,world:1,x:33.2,w:1,top:.35},{id:`h3`,world:1,x:35.6,w:1,top:.35},{id:`h4`,world:1,x:37.9,w:1,top:.35}],dark:[{world:1,x0:29.4,x1:39.6}],songZones:[],magpies:[],props:[{kind:`grandmaHouse`,world:0,x:-10.4,y:i,z:-1.2},{kind:`radio`,world:0,x:-7.1,y:i+.45,z:-.9},{kind:`mailbox`,world:0,x:-5.4,y:i,z:-.6},{kind:`lakeSign`,world:0,x:-1.6,y:i,z:-.5},{kind:`bench`,world:0,x:33.5,y:i,z:-1.4},{kind:`ariHouse`,world:1,x:-10.4,y:i,z:-1.2},{kind:`bundles`,world:1,x:-13.3,y:i,z:-.4},{kind:`jars`,world:1,x:-6.2,y:i,z:-.5},{kind:`noticeBoard`,world:1,x:-1.6,y:i,z:-.5},{kind:`reeds`,world:1,x:9.8,y:i,z:.2},{kind:`shrine`,world:1,x:43.6,y:i,z:-1.6},{kind:`pole`,world:1,x:20.8,y:i,z:-1.8}],npcs:[{id:`grandma`,kind:`grandma`,world:0,x:-8.4,y:i+.45,pose:`sit`,label:`할머니께 말 걸기`,talk:e=>o(e,`seokdeung`)?[c(`할머니`,`♪ 윤슬아 윤슬아…`)]:[c(`할머니`,`해 떨어지기 전에 다녀오렴. 물속을 잘 보고.`),...e.ng?[{who:`할머니`,text:`(…그 애가 기다리고 있을 게다.)`}]:[]]},{id:`mom`,kind:`mom`,world:1,x:-12.2,y:i,pose:`stand`,flip:!1,label:`엄마한테 말 걸기`,talk:()=>[c(`엄마`,`너무 늦지 말고. 늪 쪽은 캄캄하니까 조심해.`)]},{id:`byeoli`,kind:`turtle`,world:1,x:10.1,y:i}],signs:[{id:`oldRadio`,world:0,x:-6.6,y:i,label:`라디오 켜기`,sfx:`radio`,lines:[c(``,`지지직… 낡은 라디오에서 아주 옛날 노래가 흘러나온다.`),c(`리아`,`할머니는 맨날 이 노래만 들으셔. 무슨 노래지?`)]},{id:`lakeSign`,world:0,x:-1.6,y:i,label:`안내판 읽기`,event:`sign:lake`,lines:[c(``,`「은하호」 1973년 은하댐이 완공되며 생긴 호수입니다.`),c(``,`호수 아래에는 달못 마을을 비롯한 여섯 마을이 잠겨 있습니다. 가뭄이 들면 옛 돌다리가 드러나기도 합니다.`),c(`리아`,`달못… 할머니가 말한 데가 여기야?`)]},{id:`notice`,world:1,x:-1.6,y:i,label:`알림판 읽기`,event:`sign:notice`,lines:[c(``,`「알림」 은하댐 수몰 지구 주민께. 칠석 이튿날 새벽에 수문을 닫습니다.`),c(``,`그 전까지 모두 이주하여 주시기 바랍니다. — 1973년 8월, 군청`),c(`아리`,`…이레 남았어.`)]}],keepsakes:[{id:`byeoli`,world:1,x:10.1,y:i,by:1,how:`use`,label:`별이 쓰다듬기`,name:`별이`,desc:`달못에 사는 작은 거북이. 등딱지에 별 무늬가 있다.`},{id:`candy`,world:1,x:-6.2,y:i,by:1,how:`use`,label:`작은 장독 열어 보기`,name:`장독 속 알사탕`,desc:`엄마 몰래 숨겨 둔 알사탕 세 알. 이사 가기 전에 다 먹어야 한다.`},{id:`photo:moon`,world:0,x:59,y:2.6,by:0,how:`photo`,label:``,name:`보름달 사진`,desc:`반달 다리와 물그림자가 만나 보름달이 되었다.`,when:e=>o(e,`seokdeung`)}],diary:[{id:`d1`,world:0,x:31.2,y:i,date:`1974년 3월`,text:`서울로 이사 왔다. 물속 그 아이 이름을 공책 맨 뒷장에 백 번 썼다. 리아. 거꾸로 하면 내 이름.`}],goal:{arc:`moon`,when:e=>o(e,`seokdeung`),near:1},moon:`full`,dusk:`sunset`,triggers:[{id:`meet0`,role:0,when:e=>s(e,-1,11),lines:()=>[c(`리아`,`…어? 물에 비친 내가, 혼자서 움직였어?`)]},{id:`meet1`,role:1,when:e=>s(e,-1,11),lines:()=>[c(`아리`,`…어? 물에 비친 내가, 나를 보고 있어?`)]},{id:`howto`,role:`both`,when:e=>s(e,0,11),lines:e=>[e.solo?c(``,`혼자 둘러보는 중이에요. 오른쪽 위 전환 버튼(Tab)으로 1973년의 아리로 바꿀 수 있어요.`):c(``,`말풍선 버튼(Q)으로 인사해 보세요. 화면을 톡 누르면 그 자리에 빛 표시가 생기고, 상대에게도 보여요.`)]},{id:`lantern`,role:0,when:e=>!a(e.st,`lantern`)&&s(e,6.5,10.5),lines:()=>[c(`리아`,`할머니네 정원 등불이다. 켜 볼까?`)]},{id:`moonflower`,role:1,when:e=>!a(e.st,`moonflower`)&&s(e,4.5,8.5),lines:()=>[c(`아리`,`달맞이꽃이다. 외할머니 자장가를 불러 주면 핀다고 했는데.`)]},{id:`gap0`,role:0,when:e=>!a(e.st,`moonflower`)&&s(e,9.8,11),lines:()=>[c(`리아`,`물이 깊어서 못 건너겠어… 물속 아이 쪽에서 뭔가 해 줄 수 있을까?`)]},{id:`gap1`,role:1,when:e=>!a(e.st,`lantern`)&&s(e,9.8,11),lines:()=>[c(`아리`,`여기서 더는 못 가. 물 위 아이가 도와줄 수 있을까?`)]},{id:`post0`,role:0,when:e=>s(e,19.5,23),lines:()=>[c(`리아`,`오래된 나무 말뚝이야. 올라서면 가라앉을 것 같아.`)]},{id:`marbleSeen`,role:1,when:e=>s(e,19.5,25.5)&&f(e),lines:()=>[c(`아리`,`내 유리구슬! 아까 구슬치기하다가 저 바위까지 튀었어. 혼자서는 안 닿아…`),c(`아리`,`이 말뚝, 물 위 세계까지 이어져 있네.`)]},{id:`lifted`,role:1,when:e=>e.gk===`buoy`&&e.gid===`woodPost`&&(e.st.buoys.woodPost??0)>.85,lines:()=>[c(`아리`,`말뚝이 솟아올랐어! 지금이야!`)]},{id:`dark1`,role:1,when:e=>s(e,27.8,29.5)&&!a(e.st,`chorong`),lines:()=>[c(`아리`,`밤이라 늪이 하나도 안 보여. 징검돌이 어디 있더라…`)]},{id:`dark0`,role:0,when:e=>s(e,26,31)&&!a(e.st,`chorong`),lines:()=>[c(`리아`,`물속 늪에 징검돌이 비쳐 보여! 아리 쪽은 캄캄한가 봐.`),c(``,`물그림자 속 징검돌을 톡 눌러 알려 주세요. 능력 버튼(F)으로 사진을 찍으면 플래시가 물속까지 닿아요.`)]},{id:`chorong`,role:1,when:e=>s(e,39.6,42.5)&&!a(e.st,`chorong`),lines:()=>[c(`아리`,`서낭당 청사초롱이다. 불을 켜면 물 위 아이한테 길이 생길까?`)]},{id:`gap2`,role:0,when:e=>s(e,38,40)&&!a(e.st,`chorong`),lines:()=>[c(`리아`,`여기도 물이야. 아리가 뭔가 켜 주면 좋겠는데.`)]},{id:`seokdeung`,role:0,when:e=>s(e,44,47),lines:()=>[c(`리아`,`저 높은 곳에 오래된 석등이 있어. 구슬이 쏙 들어갈 것 같은데.`)]},{id:`stone1`,role:1,when:e=>s(e,44,47),lines:()=>[c(`아리`,`돌 말뚝이야. 이번엔 내가 올라서면 가라앉겠지?`)]},{id:`arch`,role:`both`,when:e=>s(e,54.5,57),lines:e=>[c(e.role===0?`리아`:`아리`,`달맞이 다리… 반달처럼 생겼어. 물에 비치면 보름달이 된대.`),c(e.role===0?`리아`:`아리`,`다리 꼭대기에 함께 서 보자.`)]},{id:`archDim`,role:`both`,when:e=>!o(e.st,`seokdeung`)&&e.gk===`arc`&&Math.abs(e.x-59)<1,lines:e=>[c(e.role===0?`리아`:`아리`,e.role===0?`석등이 꺼져 있어서 아직 흐릿해.`:`아직 흐릿해… 물 위 석등이 꺼져 있나 봐.`)]}],objective:e=>{let{st:t}=e,n=d(t,`marble`);return e.role===0?a(t,`lantern`)?a(t,`moonflower`)?f(e)?`나무 말뚝에 올라서서 물속 아이를 높이 올려 주자`:n.world===1&&n.mode!==`placed`?`물속 아이가 뭔가 보내 주려나 봐`:n.world===0&&n.mode!==`held`&&n.mode!==`placed`?`떠오른 유리구슬을 주워 오자`:a(t,`chorong`)?o(t,`seokdeung`)?`달맞이 다리 꼭대기에 함께 서자`:`돌 말뚝을 타고 올라가 석등에 구슬을 넣자`:`물그림자 속 징검돌을 눌러서 아리에게 알려 주자`:`물을 건너려면 물속 아이의 도움이 필요해`:`정원 등불을 켜서 물속 아이의 길을 열어 주자`:a(t,`moonflower`)?a(t,`lantern`)?f(e)?`나무 말뚝에 올라, 물 위 아이가 반대쪽을 눌러 주길 기다리자`:n.holder===1?`유리구슬을 물에 떨어뜨려 물 위 아이에게 보내자`:n.world===1&&n.mode!==`placed`?`유리구슬을 다시 주워서 물에 떨어뜨리자`:a(t,`chorong`)?o(t,`seokdeung`)?`달맞이 다리 꼭대기에 함께 서자`:`돌 말뚝에 올라서서 물 위 아이를 높이 올려 주자`:`물 위 아이가 알려 주는 곳을 밟아 늪을 건너, 청사초롱을 켜자`:`물을 건너려면 물 위 아이의 도움이 필요해`:`달맞이꽃에게 노래를 불러 주자`}},m=2.6,h={id:`ch2`,no:`2장`,title:`감나무 아래`,minX:-15.5,maxX:79.5,start:{0:{x:-15,y:i},1:{x:-8.2,y:i}},solids:{0:[{kind:`ground`,x0:-24,x1:12,y0:0,y1:i},{kind:`deck`,x0:22,x1:57.4,y0:0,y1:i},{kind:`island`,x0:64.2,x1:90,y0:0,y1:i}],1:[{kind:`ground`,x0:-24,x1:36,y0:0,y1:i},{kind:`ground`,x0:40.5,x1:64,y0:0,y1:i},{kind:`ledge`,x0:64,x1:90,y0:0,y1:m}]},lights:[{id:`streetlamp`,world:0,kind:`streetlamp`,x:34.2,y:i,label:`가로등 켜기`}],bridges:[{id:`fireflies`,world:0,kind:`firefly`,segs:u([13.3,15.1,16.9,18.7,20.5],1.1,.3),when:e=>o(e,`fireflies`)},{id:`starStream`,world:1,kind:`star`,segs:[{x0:35.8,x1:40.7,y0:i-.25,y1:i}],when:e=>a(e,`streetlamp`)},{id:`branch`,world:0,kind:`branch`,segs:[{x0:56.6,x1:64.8,y0:2.6,y1:2.9}],when:e=>o(e,`watered`)}],buoys:[],items:[{id:`bucket`,kind:`bucket`,world:1,x:26.6,y:i,crosses:!1,name:`물동이`}],sockets:[],uses:[{id:`water`,world:1,x:68.4,y:m,label:`감나무에 물 주기`,flag:`watered`,needs:`bucket`,by:1,event:`watered`,look:`sapling`},{id:`bury`,world:1,x:68.4,y:m,label:`보물 상자 묻기`,flag:`buried`,when:e=>o(e,`watered`),by:1,event:`buried`},{id:`dig`,world:0,x:68.4,y:i,label:`반짝이는 곳 파 보기`,flag:`dug`,when:e=>o(e,`buried`),by:0,event:`dug`,look:`dig`}],arcs:[],hidden:[],dark:[],songZones:[{id:`reeds`,world:1,x0:11.4,x1:15.4,flag:`fireflies`}],magpies:[],props:[{kind:`grandmaHouse`,world:0,x:-10.4,y:i,z:-1.2},{kind:`mailbox`,world:0,x:-5.4,y:i,z:-.6},{kind:`bench`,world:0,x:27.5,y:i,z:-1.4},{kind:`boat`,world:0,x:60.2,y:.05,z:-1.2},{kind:`bigTree`,world:0,x:68.4,y:i,z:-1},{kind:`ariHouse`,world:1,x:-10.4,y:i,z:-1.2},{kind:`bundles`,world:1,x:-13.3,y:i,z:-.4},{kind:`jars`,world:1,x:-6.2,y:i,z:-.5},{kind:`reeds`,world:1,x:12.3,y:i,z:.2},{kind:`reeds`,world:1,x:14.5,y:i,z:-.3,flip:!0},{kind:`pole`,world:1,x:19.6,y:i,z:-1.8},{kind:`well`,world:1,x:25.4,y:i,z:-.6},{kind:`villageHouse`,world:1,x:31.2,y:i,z:-1.6},{kind:`radio`,world:1,x:32.6,y:i,z:-.3},{kind:`villageHouse`,world:1,x:47.5,y:i,z:-1.8,flip:!0},{kind:`shrine`,world:1,x:55.2,y:i,z:-1.6},{kind:`pole`,world:1,x:44.6,y:i,z:-1.8}],npcs:[{id:`grandma`,kind:`grandma`,world:0,x:-8.4,y:i+.45,pose:`sit`,label:`할머니께 말 걸기`,talk:e=>[c(`할머니`,`감나무… 우리 아버지가 심으셨지. 딸 낳은 해에.`),...e.ng?[{who:`할머니`,text:`(나랑 동갑인 나무란다.)`}]:[]]},{id:`mom`,kind:`mom`,world:1,x:-12.2,y:i,pose:`stand`,label:`엄마한테 말 걸기`,talk:()=>[c(`엄마`,`우물가 물동이는 두고 가도 돼. 이사 가면 수돗물 나온대.`)]},{id:`oldByeoli`,kind:`oldTurtle`,world:0,x:9.4,y:i},{id:`byeoli`,kind:`turtle`,world:1,x:9.8,y:i}],signs:[],keepsakes:[{id:`oldByeoli`,world:0,x:9.4,y:i,by:0,how:`use`,label:`큰 거북이 살펴보기`,name:`별 무늬 큰 거북이`,desc:`호숫가 바위에서 볕을 쬐는 큰 거북이. 등딱지에 흐린 별 무늬가 있다. …별이?`},{id:`radio`,world:1,x:32.6,y:i,by:1,how:`use`,label:`라디오 켜기`,name:`1973년 라디오`,desc:`옆집 할아버지의 트랜지스터 라디오. "오늘의 노래"가 지지직거리며 흘러나온다.`},{id:`photo:village`,world:0,x:46,y:i,by:0,how:`photo`,label:``,name:`물속 마을 사진`,desc:`플래시가 닿자 물 아래 마을의 불빛이 또렷하게 찍혔다.`}],diary:[{id:`d2`,world:0,x:41,y:i,date:`1989년 4월`,text:`딸을 낳았다. 이름은 어머니가 지어 주셨다. 그 애 이름은 아껴 두기로 했다. 언젠가 꼭 쓸 데가 있다.`},{id:`d3`,world:0,x:74.5,y:i,date:`2003년 여름`,text:`은하호가 보이는 집으로 이사 왔다. 가뭄이 들면 감나무 섬이 조금 더 드러난다. 저 아래에 우리 마을이 있다.`}],goal:{when:e=>o(e,`dug`),near:0},moon:`full`,dusk:`sunset`,triggers:[{id:`wide0`,role:0,when:e=>s(e,9.5,12)&&!o(e.st,`fireflies`),lines:()=>[c(`리아`,`물이 넓어서 못 건너겠어… 아리 쪽에 뭔가 있을까?`)]},{id:`reeds1`,role:1,when:e=>s(e,10.5,15.5),lines:()=>[c(`아리`,`풀숲에 반딧불이 잔뜩이야. 노래를 부르면 모여들어.`),c(``,`능력 버튼(F)을 누르고 있는 동안 아리가 노래해요.`)]},{id:`pads0`,role:0,when:e=>o(e.st,`fireflies`)&&e.x<22,lines:()=>[c(`리아`,`물 위에 반딧불 징검다리가 생겼어! 아리가 노래하는 동안 건너자!`)]},{id:`well1`,role:1,when:e=>s(e,23.5,28)&&!o(e.st,`watered`),lines:()=>[c(`아리`,`우물이다. 물동이에 물을 떠 가자. 감나무한테 줄 거야.`)]},{id:`stream1`,role:1,when:e=>s(e,32.5,36)&&!a(e.st,`streetlamp`),lines:()=>[c(`아리`,`개울 다리가 장마에 떠내려갔어… 물동이를 들고는 못 건너.`)]},{id:`lamp0`,role:0,when:e=>s(e,30,36.5)&&!a(e.st,`streetlamp`),lines:()=>[c(`리아`,`가로등이 있네. 켜면 아리 쪽 개울에도 빛이 닿을까?`)]},{id:`photoHint`,role:0,when:e=>s(e,43,49)&&!e.st.keeps.includes(`photo:village`),lines:()=>[c(`리아`,`여기서 보면 물속 마을 불빛이 제일 잘 보여. 사진 찍어 둘까?`)]},{id:`island0`,role:0,when:e=>s(e,53,57.4)&&!o(e.st,`watered`),lines:()=>[c(`리아`,`섬까지는 물이야. 저 큰 감나무 가지가 조금만 더 길었으면…`)]},{id:`tree1`,role:1,when:e=>s(e,62,70),lines:()=>[c(`아리`,`우리 감나무! 아빠가 나 태어난 해에 심었어. 나랑 동갑이야.`)]},{id:`dig0`,role:0,when:e=>s(e,65,71)&&o(e.st,`buried`)&&!o(e.st,`dug`),lines:()=>[c(`리아`,`나무뿌리 밑에서 뭔가 반짝여.`)]}],objective:e=>{let{st:t}=e,n=d(t,`bucket`);return e.role===0?e.x<22?o(t,`fireflies`)?`반딧불 징검다리를 건너자`:`물을 건너려면 아리의 노래가 필요해`:a(t,`streetlamp`)?o(t,`watered`)?e.x<64?`자라난 감나무 가지를 타고 섬으로 건너가자`:o(t,`buried`)?`뿌리 밑에서 반짝이는 곳을 파 보자`:`큰 감나무 아래에서 아리를 기다리자`:`섬으로 가는 길을 찾아보자 (아리가 감나무를 돌보는 중)`:`가로등을 켜서 아리 쪽 개울에 빛 다리를 놓아 주자`:e.partnerX<22&&e.x<17?`반딧불 풀숲에서 노래를 불러 물 위 아이의 길을 열어 주자`:!o(t,`watered`)&&n.holder!==1&&n.mode!==`used`?`우물가에서 물동이를 들자`:!a(t,`streetlamp`)&&e.x<40.5?`개울을 건너야 해. 물 위 아이에게 도움을 청해 보자`:o(t,`watered`)?o(t,`buried`)?`물 위 아이가 상자를 찾을 수 있을까?`:`감나무 아래에 보물 상자를 묻자`:`언덕 위 어린 감나무에 물을 주자`}},g=6,_=e=>e.magpies.length>=g,v={ch1:p,ch2:h,ch3:{id:`ch3`,no:`3장`,title:`칠석`,minX:-15.5,maxX:79.5,start:{0:{x:-15,y:i},1:{x:-8.2,y:i}},solids:{0:[{kind:`ground`,x0:-24,x1:14,y0:0,y1:i},{kind:`ledge`,x0:17.4,x1:20.4,y0:0,y1:4.3},{kind:`ground`,x0:20.4,x1:27,y0:0,y1:i},{kind:`ground`,x0:31,x1:40,y0:0,y1:i},{kind:`ground`,x0:43,x1:52,y0:0,y1:i},{kind:`ground`,x0:72,x1:90,y0:0,y1:i}],1:[{kind:`ground`,x0:-24,x1:14,y0:0,y1:i},{kind:`ground`,x0:17.4,x1:24.5,y0:0,y1:i},{kind:`ground`,x0:33.5,x1:40,y0:0,y1:i},{kind:`ledge`,x0:43,x1:46,y0:0,y1:4.3},{kind:`ground`,x0:46,x1:52,y0:0,y1:i},{kind:`ground`,x0:72,x1:90,y0:0,y1:i}]},lights:[{id:`chorong`,world:1,kind:`chorong`,x:23.2,y:i,label:`청사초롱 켜기`}],bridges:[{id:`starBridge`,world:0,kind:`star`,segs:[{x0:26.8,x1:31.2,y0:i-.25,y1:i}],when:e=>a(e,`chorong`)}],buoys:[{id:`postA`,owner:1,x:15.7,w:1.4,top:{0:1,1:2.2},travel:2,look:`wood`},{id:`postB`,owner:0,x:41.5,w:1.4,top:{0:2.2,1:1},travel:2,look:`stone`}],items:[],sockets:[],uses:[],arcs:[{id:`ojakgyo`,kind:`magpie`,x0:51.6,x1:72.4,h:4.4,when:_}],hidden:[{id:`h1`,world:1,x:25.8,w:1,top:.35},{id:`h2`,world:1,x:28,w:1,top:.35},{id:`h3`,world:1,x:30.2,w:1,top:.35},{id:`h4`,world:1,x:32.3,w:1,top:.35}],dark:[{world:1,x0:24.4,x1:33.6}],songZones:[],magpies:[{id:`m1`,world:0,x:6.6,y:i,call:`use`},{id:`m2`,world:1,x:4.8,y:i,call:`song`},{id:`m3`,world:0,x:19.1,y:4.3,call:`use`},{id:`m4`,world:1,x:35.6,y:i,call:`song`},{id:`m5`,world:0,x:36.4,y:i,call:`use`},{id:`m6`,world:1,x:44.6,y:4.3,call:`song`}],props:[{kind:`grandmaHouse`,world:0,x:-10.4,y:i,z:-1.2},{kind:`mailbox`,world:0,x:-5.4,y:i,z:-.6},{kind:`bench`,world:0,x:23.6,y:i,z:-1.4},{kind:`ariHouse`,world:1,x:-10.4,y:i,z:-1.2},{kind:`jars`,world:1,x:-6.2,y:i,z:-.5},{kind:`reeds`,world:1,x:12.2,y:i,z:.2},{kind:`shrine`,world:1,x:21.6,y:i,z:-1.6},{kind:`villageHouse`,world:1,x:36.8,y:i,z:-1.8},{kind:`windchime`,world:1,x:38.4,y:i,z:-.4},{kind:`pole`,world:1,x:48.4,y:i,z:-1.8}],npcs:[{id:`grandma`,kind:`grandma`,world:0,x:-8.4,y:i+.45,pose:`sleep`,label:`할머니 살펴보기`,talk:e=>[c(`할머니`,`(잠결에) 약속… 약속했는데…`),...e.ng?[{who:`할머니`,text:`(오늘이구나. 오늘이 그날이야.)`}]:[]]},{id:`mom`,kind:`mom`,world:1,x:-12.2,y:i,pose:`stand`,label:`엄마한테 말 걸기`,talk:()=>[c(`엄마`,`해 뜨기 전에는 꼭 돌아와야 한다. 약속해.`)]}],signs:[],keepsakes:[{id:`photo:grandma`,world:0,x:-8.4,y:i,by:0,how:`photo`,label:``,name:`잠든 할머니`,desc:`할머니는 자면서도 자장가를 흥얼거리셨다.`},{id:`windchime`,world:1,x:38.4,y:i,by:1,how:`use`,label:`풍경 울리기`,name:`서낭당 풍경`,desc:`바람이 불 때마다 딸랑. 마을에서 가장 맑은 소리.`},{id:`photo:bridge`,world:0,x:62,y:4.4,by:0,how:`photo`,label:``,name:`오작교 사진`,desc:`까치들이 놓아 준 다리 위. 사진 속 물그림자에서 아리가 손을 흔든다.`,when:_}],diary:[{id:`d4`,world:0,x:34.2,y:i,date:`2014년 5월`,text:`손녀가 태어났다. 한눈에 알았다. 물속에서 보던 그 얼굴이다. 이름은 리아. 이상한 이름이라고들 해도 이것만은 양보 못 한다.`},{id:`d5`,world:0,x:47.6,y:i,date:`2026년 7월`,text:`요즘 자꾸 잊는다. 그래도 이것만은 적어 둔다. 올여름 리아가 온다. 약속한 여름이다. 별 머리핀을 꼭 줘야지.`}],goal:{arc:`ojakgyo`,when:_,near:1.2},moon:`half`,dusk:`late`,triggers:[{id:`m1`,role:0,when:e=>s(e,3,9)&&!l(e.st,`m1`),lines:()=>[c(`리아`,`까치다! 칠석엔 까치가 다리를 놓아 준대.`)]},{id:`m2`,role:1,when:e=>s(e,2,8)&&!l(e.st,`m2`),lines:()=>[c(`아리`,`까치야, 이리 와. 노래 불러 줄게.`),c(``,`능력 버튼(F)을 누르고 있으면 노래해요. 까치가 노래를 들으면 날아와요.`)]},{id:`postA0`,role:0,when:e=>s(e,11,14),lines:()=>[c(`리아`,`저 높은 곳에도 까치가 있어. 말뚝을 타고 올라가 볼까?`)]},{id:`postA1`,role:1,when:e=>s(e,11,14),lines:()=>[c(`아리`,`리아가 말뚝에 서면… 내가 반대쪽을 눌러 주면 되겠다.`)]},{id:`chorong`,role:1,when:e=>s(e,20.5,24.4)&&!a(e.st,`chorong`),lines:()=>[c(`아리`,`서낭당 청사초롱. 켜면 물 위에 길이 생기겠지?`)]},{id:`dark1`,role:1,when:e=>s(e,23.5,24.5),lines:()=>[c(`아리`,`또 캄캄한 늪이야. 리아가 알려 주면 건널 수 있어.`)]},{id:`dark0`,role:0,when:e=>s(e,21,26),lines:()=>[c(`리아`,`아리 쪽 늪이 또 캄캄해. 물그림자 속 징검돌을 눌러서 알려 주자.`)]},{id:`postB1`,role:1,when:e=>s(e,38.6,40),lines:()=>[c(`아리`,`돌 말뚝… 이번엔 리아가 눌러 줘야 해.`)]},{id:`short`,role:`both`,when:e=>s(e,49,52)&&!_(e.st),lines:e=>[c(e.role===0?`리아`:`아리`,`까치가 모자라. 다리가 다 이어지지 않았어. (${e.st.magpies.length}/${g})`)]},{id:`bridge`,role:`both`,when:e=>_(e.st),lines:e=>[c(e.role===0?`리아`:`아리`,`까치들이 날아와서… 다리를 놓았어! 오작교야!`)]}],objective:e=>{let{st:t}=e,n=t.magpies.length;if(_(t))return`오작교 한가운데에서 만나자`;let r=` (${n}/${g})`;return e.role===0?l(t,`m1`)?l(t,`m3`)?a(t,`chorong`)?l(t,`m5`)?l(t,`m4`)?l(t,`m6`)?`아리 쪽 까치가 남았어`+r:`돌 말뚝에 올라서서 아리를 높이 올려 주자`+r:`캄캄한 늪의 징검돌을 눌러서 아리에게 알려 주자`+r:`빛 다리를 건너 까치를 불러 보자`+r:`아리가 청사초롱을 켜 주길 기다리자`+r:`말뚝을 타고 높은 곳의 까치에게 가자 (아리가 반대쪽을 눌러야 해)`+r:`마당의 까치를 불러 보자`+r:l(t,`m2`)?l(t,`m3`)?a(t,`chorong`)?l(t,`m4`)?l(t,`m6`)?`리아 쪽 까치가 남았어`+r:`돌 말뚝에 올라, 리아가 눌러 주길 기다리자 (높은 곳의 까치)`+r:`리아의 안내를 따라 늪을 건너, 까치에게 노래하자`+r:`서낭당 청사초롱을 켜자`+r:`리아가 말뚝에 서면, 내 쪽 말뚝을 눌러 올려 주자`+r:`장독대 옆 까치에게 노래를 불러 주자`+r}},epilogue:{id:`epilogue`,no:`에필로그`,title:`다음 여름`,minX:-15.5,maxX:11.5,start:{0:{x:-3.2,y:i},1:{x:9.6,y:i}},solids:{0:[{kind:`ground`,x0:-24,x1:11.2,y0:0,y1:i}],1:[{kind:`ground`,x0:-24,x1:11.2,y0:0,y1:i}]},lights:[],bridges:[],buoys:[],items:[],sockets:[],uses:[],arcs:[],hidden:[],dark:[],songZones:[],magpies:[],props:[{kind:`grandmaHouse`,world:0,x:-10.4,y:i,z:-1.2},{kind:`mailbox`,world:0,x:-5.4,y:i,z:-.6},{kind:`lakeSign`,world:0,x:-1.6,y:i,z:-.5},{kind:`radio`,world:0,x:-7.1,y:i+.45,z:-.9},{kind:`reeds`,world:1,x:7.8,y:i,z:.2},{kind:`jars`,world:1,x:-6.2,y:i,z:-.5}],npcs:[{id:`grandma`,kind:`grandma`,world:0,x:-8.4,y:i+.45,pose:`sit`}],signs:[],keepsakes:[],diary:[],goal:null,moon:`full`,dusk:`sunset`,triggers:[],objective:()=>``}};function y(e){return v[e]??p}function b(e){let t=r.indexOf(e);return t>=0&&t<r.length-1?r[t+1]:null}function x(){return r.flatMap(e=>v[e].keepsakes.map(t=>({...t,chapter:e})))}function S(){return r.flatMap(e=>v[e].diary.map(t=>({...t,chapter:e})))}var C=1e3,w=1001,T=1002,E=1003,D=1004,O=1005,k=1006,A=1007,j=1008,ee=1009,te=1010,ne=1011,re=1012,M=1013,ie=1014,ae=1015,oe=1016,se=1017,ce=1018,le=1020,ue=35902,N=35899,de=1021,fe=1022,pe=1023,me=1026,he=1027,ge=1028,_e=1029,ve=1030,ye=1031,be=1033,xe=33776,Se=33777,Ce=33778,we=33779,Te=35840,Ee=35841,De=35842,Oe=35843,ke=36196,Ae=37492,je=37496,Me=37488,Ne=37489,Pe=37490,P=37491,Fe=37808,Ie=37809,Le=37810,F=37811,Re=37812,I=37813,ze=37814,Be=37815,Ve=37816,He=37817,Ue=37818,We=37819,Ge=37820,Ke=37821,qe=36492,Je=36494,Ye=36495,Xe=36283,Ze=36284,Qe=36285,$e=36286,et=2300,tt=2301,nt=2302,rt=2303,it=2400,at=2401,ot=2402,st=3200,ct=`srgb`,lt=`srgb-linear`,ut=`linear`,dt=`srgb`,ft=7680,pt=35044,mt=35048,ht=2e3;function gt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function _t(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function vt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function yt(){let e=vt(`canvas`);return e.style.display=`block`,e}var bt={};function xt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function St(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=St(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=St(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ct(...e){let t=e.join(` `);t in bt||(bt[t]=!0,L(...e))}function wt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Tt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Et=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Dt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ot=1234567,kt=Math.PI/180,At=180/Math.PI;function jt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dt[e&255]+Dt[e>>8&255]+Dt[e>>16&255]+Dt[e>>24&255]+`-`+Dt[t&255]+Dt[t>>8&255]+`-`+Dt[t>>16&15|64]+Dt[t>>24&255]+`-`+Dt[n&63|128]+Dt[n>>8&255]+`-`+Dt[n>>16&255]+Dt[n>>24&255]+Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function Mt(e,t){return(e%t+t)%t}function Nt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Pt(e,t,n){return e===t?0:(n-e)/(t-e)}function Ft(e,t,n){return(1-n)*e+n*t}function It(e,t,n,r){return Ft(e,t,1-Math.exp(-n*r))}function Lt(e,t=1){return t-Math.abs(Mt(e,t*2)-t)}function Rt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function zt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Bt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Vt(e,t){return e+Math.random()*(t-e)}function Ht(e){return e*(.5-Math.random())}function Ut(e){e!==void 0&&(Ot=e);let t=Ot+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wt(e){return e*kt}function Gt(e){return e*At}function Kt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function qt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Jt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Yt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Xt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Qt={DEG2RAD:kt,RAD2DEG:At,generateUUID:jt,clamp:z,euclideanModulo:Mt,mapLinear:Nt,inverseLerp:Pt,lerp:Ft,damp:It,pingpong:Lt,smoothstep:Rt,smootherstep:zt,randInt:Bt,randFloat:Vt,randFloatSpread:Ht,seededRandom:Ut,degToRad:Wt,radToDeg:Gt,isPowerOfTwo:Kt,ceilPowerOfTwo:qt,floorPowerOfTwo:Jt,setQuaternionFromProperEuler:Yt,normalize:Zt,denormalize:Xt},B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return en.copy(this).projectOnVector(e),this.sub(en)}reflect(e){return this.sub(en.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},en=new V,tn=new $t,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ct(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(nn.makeScale(e,t)),this}rotate(e){return Ct(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(nn.makeRotation(-e)),this}translate(e,t){return Ct(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(nn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nn=new H,rn=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),an=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function on(){let e={enabled:!0,workingColorSpace:lt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=cn(e.r),e.g=cn(e.g),e.b=cn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ln(e.r),e.g=ln(e.g),e.b=ln(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ut:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ct(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ct(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[lt]:{primaries:t,whitePoint:r,transfer:ut,toXYZ:rn,fromXYZ:an,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:t,whitePoint:r,transfer:dt,toXYZ:rn,fromXYZ:an,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}}),e}var sn=on();function cn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ln(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var un,dn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{un===void 0&&(un=vt(`canvas`)),un.width=e.width,un.height=e.height;let t=un.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=un}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=vt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=cn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(cn(t[e]/255)*255):t[e]=cn(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},fn=0,pn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=jt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(mn(r[t].image)):e.push(mn(r[t]))}else e=mn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function mn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?dn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var hn=0,gn=new V,_n=class e extends Et{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=w,i=w,a=k,o=j,s=pe,c=ee,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=jt(),this.name=``,this.source=new pn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gn).x}get height(){return this.source.getSize(gn).y}get depth(){return this.source.getSize(gn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case C:e.x-=Math.floor(e.x);break;case w:e.x=e.x<0?0:1;break;case T:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case C:e.y-=Math.floor(e.y);break;case w:e.y=e.y<0?0:1;break;case T:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null,_n.DEFAULT_MAPPING=300,_n.DEFAULT_ANISOTROPY=1;var vn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yn=class extends Et{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:k,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t),this.textures=[];let r=new _n({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:k,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new pn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},bn=class extends yn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xn=class extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=E,this.minFilter=E,this.wrapR=w,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Sn=class extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=E,this.minFilter=E,this.wrapR=w,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Cn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/wn.setFromMatrixColumn(e,0).length(),i=1/wn.setFromMatrixColumn(e,1).length(),a=1/wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(En,e,Dn)}lookAt(e,t,n){let r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),On.crossVectors(n,An),On.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),On.crossVectors(n,An)),On.normalize(),kn.crossVectors(An,On),r[0]=On.x,r[4]=kn.x,r[8]=An.x,r[1]=On.y,r[5]=kn.y,r[9]=An.y,r[2]=On.z,r[6]=kn.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],te=r[3],ne=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*ne,i[8]=a*C+o*D+s*j+c*re,i[12]=a*w+o*O+s*ee+c*M,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*ne,i[9]=l*C+u*D+d*j+f*re,i[13]=l*w+u*O+d*ee+f*M,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*ne,i[10]=p*C+m*D+h*j+g*re,i[14]=p*w+m*O+h*ee+g*M,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*ne,i[11]=_*C+v*D+y*j+b*re,i[15]=_*w+v*O+y*ee+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=wn.set(r[0],r[1],r[2]).length(),o=wn.set(r[4],r[5],r[6]).length(),s=wn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Tn.copy(this);let c=1/a,l=1/o,u=1/s;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=l,Tn.elements[5]*=l,Tn.elements[6]*=l,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=ht,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ht,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wn=new V,Tn=new Cn,En=new V(0,0,0),Dn=new V(1,1,1),On=new V,kn=new V,An=new V,jn=new Cn,Mn=new $t,Nn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mn.setFromEuler(this),this.setFromQuaternion(Mn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER=`XYZ`;var Pn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Fn=0,In=new V,Ln=new $t,Rn=new Cn,zn=new V,Bn=new V,Vn=new V,Hn=new $t,Un=new V(1,0,0),Wn=new V(0,1,0),Gn=new V(0,0,1),Kn={type:`added`},qn={type:`removed`},Jn={type:`childadded`,child:null},Yn={type:`childremoved`,child:null},Xn=class e extends Et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fn++}),this.uuid=jt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Nn,r=new $t,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Cn},normalMatrix:{value:new H}}),this.matrix=new Cn,this.matrixWorld=new Cn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.premultiply(Ln),this}rotateX(e){return this.rotateOnAxis(Un,e)}rotateY(e){return this.rotateOnAxis(Wn,e)}rotateZ(e){return this.rotateOnAxis(Gn,e)}translateOnAxis(e,t){return In.copy(e).applyQuaternion(this.quaternion),this.position.add(In.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Un,e)}translateY(e){return this.translateOnAxis(Wn,e)}translateZ(e){return this.translateOnAxis(Gn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zn.copy(e):zn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Bn,zn,this.up):Rn.lookAt(zn,Bn,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),Ln.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ln.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kn),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qn),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kn),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,e,Vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,Hn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Xn.DEFAULT_UP=new V(0,1,0),Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=class extends Xn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Qn={type:`move`},$n=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},er={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},nr={h:0,s:0,l:0};function rr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=sn.workingColorSpace){return this.r=e,this.g=t,this.b=n,sn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=sn.workingColorSpace){if(e=Mt(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=rr(i,r,e+1/3),this.g=rr(i,r,e),this.b=rr(i,r,e-1/3)}return sn.colorSpaceToWorking(this,r),this}setStyle(e,t=ct){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let n=er[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}copyLinearToSRGB(e){return this.r=ln(e.r),this.g=ln(e.g),this.b=ln(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return sn.workingToColorSpace(ir.copy(this),e),Math.round(z(ir.r*255,0,255))*65536+Math.round(z(ir.g*255,0,255))*256+Math.round(z(ir.b*255,0,255))}getHexString(e=ct){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sn.workingColorSpace){sn.workingToColorSpace(ir.copy(this),t);let n=ir.r,r=ir.g,i=ir.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=sn.workingColorSpace){return sn.workingToColorSpace(ir.copy(this),t),e.r=ir.r,e.g=ir.g,e.b=ir.b,e}getStyle(e=ct){sn.workingToColorSpace(ir.copy(this),e);let t=ir.r,n=ir.g,r=ir.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(nr);let n=Ft(tr.h,nr.h,t),r=Ft(tr.s,nr.s,t),i=Ft(tr.l,nr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ir=new U;U.NAMES=er;var ar=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new U(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},or=class extends Xn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},sr=new V,cr=new V,lr=new V,ur=new V,dr=new V,fr=new V,pr=new V,mr=new V,hr=new V,gr=new V,_r=new vn,vr=new vn,yr=new vn,br=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),sr.subVectors(e,t),r.cross(sr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){sr.subVectors(r,t),cr.subVectors(n,t),lr.subVectors(e,t);let a=sr.dot(sr),o=sr.dot(cr),s=sr.dot(lr),c=cr.dot(cr),l=cr.dot(lr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ur)!==null&&ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ur)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ur.x),s.addScaledVector(a,ur.y),s.addScaledVector(o,ur.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return _r.setScalar(0),vr.setScalar(0),yr.setScalar(0),_r.fromBufferAttribute(e,t),vr.fromBufferAttribute(e,n),yr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(_r,i.x),a.addScaledVector(vr,i.y),a.addScaledVector(yr,i.z),a}static isFrontFacing(e,t,n,r){return sr.subVectors(n,t),cr.subVectors(e,t),sr.cross(cr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),sr.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;dr.subVectors(r,n),fr.subVectors(i,n),mr.subVectors(e,n);let s=dr.dot(mr),c=fr.dot(mr);if(s<=0&&c<=0)return t.copy(n);hr.subVectors(e,r);let l=dr.dot(hr),u=fr.dot(hr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(dr,a);gr.subVectors(e,i);let f=dr.dot(gr),p=fr.dot(gr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(fr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return pr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(pr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(dr,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xr=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Cr):Cr.fromBufferAttribute(r,t),Cr.applyMatrix4(e.matrixWorld),this.expandByPoint(Cr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cr),Cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Mr.subVectors(this.max,jr),Tr.subVectors(e.a,jr),Er.subVectors(e.b,jr),Dr.subVectors(e.c,jr),Or.subVectors(Er,Tr),kr.subVectors(Dr,Er),Ar.subVectors(Tr,Dr);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-Ar.z,Ar.y,Or.z,0,-Or.x,kr.z,0,-kr.x,Ar.z,0,-Ar.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-Ar.y,Ar.x,0];return!Fr(t,Tr,Er,Dr,Mr)||(t=[1,0,0,0,1,0,0,0,1],!Fr(t,Tr,Er,Dr,Mr))?!1:(Nr.crossVectors(Or,kr),t=[Nr.x,Nr.y,Nr.z],Fr(t,Tr,Er,Dr,Mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Sr=[new V,new V,new V,new V,new V,new V,new V,new V],Cr=new V,wr=new xr,Tr=new V,Er=new V,Dr=new V,Or=new V,kr=new V,Ar=new V,jr=new V,Mr=new V,Nr=new V,Pr=new V;function Fr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Pr.fromArray(e,a);let o=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),s=t.dot(Pr),c=n.dot(Pr),l=r.dot(Pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ir=new V,Lr=new B,Rr=0,zr=class extends Et{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=pt,this.updateRanges=[],this.gpuType=ae,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXYZ(t,Ir.x,Ir.y,Ir.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix4(e),this.setXYZ(t,Ir.x,Ir.y,Ir.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyNormalMatrix(e),this.setXYZ(t,Ir.x,Ir.y,Ir.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.transformDirection(e),this.setXYZ(t,Ir.x,Ir.y,Ir.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Br=class extends zr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Vr=class extends zr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Hr=class extends zr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ur=new xr,Wr=new V,Gr=new V,Kr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ur.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);let t=Wr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Wr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(Gr)),this.expandByPoint(Wr.copy(e.center).sub(Gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qr=0,Jr=new Cn,Yr=new Xn,Xr=new V,Zr=new xr,Qr=new xr,$r=new V,ei=class e extends Et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qr++}),this.uuid=jt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(gt(e)?Vr:Br)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jr.makeRotationFromQuaternion(e),this.applyMatrix4(Jr),this}rotateX(e){return Jr.makeRotationX(e),this.applyMatrix4(Jr),this}rotateY(e){return Jr.makeRotationY(e),this.applyMatrix4(Jr),this}rotateZ(e){return Jr.makeRotationZ(e),this.applyMatrix4(Jr),this}translate(e,t,n){return Jr.makeTranslation(e,t,n),this.applyMatrix4(Jr),this}scale(e,t,n){return Jr.makeScale(e,t,n),this.applyMatrix4(Jr),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Hr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Zr.setFromBufferAttribute(n),this.morphTargetsRelative?($r.addVectors(this.boundingBox.min,Zr.min),this.boundingBox.expandByPoint($r),$r.addVectors(this.boundingBox.max,Zr.max),this.boundingBox.expandByPoint($r)):(this.boundingBox.expandByPoint(Zr.min),this.boundingBox.expandByPoint(Zr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Zr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Qr.setFromBufferAttribute(n),this.morphTargetsRelative?($r.addVectors(Zr.min,Qr.min),Zr.expandByPoint($r),$r.addVectors(Zr.max,Qr.max),Zr.expandByPoint($r)):(Zr.expandByPoint(Qr.min),Zr.expandByPoint(Qr.max))}Zr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)$r.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared($r));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)$r.fromBufferAttribute(a,t),o&&(Xr.fromBufferAttribute(e,t),$r.add(Xr)),r=Math.max(r,n.distanceToSquared($r))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new zr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new zr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$r.fromBufferAttribute(e,t),$r.normalize(),e.setXYZ(t,$r.x,$r.y,$r.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new zr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ti=new V,ni=new V,ri=new H,ii=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ti.subVectors(n,t).cross(ni.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ti),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ri.getNormalMatrix(e),r=this.coplanarPoint(ti).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ai=0,oi=class extends Et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ai++}),this.uuid=jt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ft,this.stencilZFail=ft,this.stencilZPass=ft,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ii().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},si=new V,ci=new V,li=new V,ui=new V,di=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ci.copy(e).add(t).multiplyScalar(.5),li.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(ci);let i=e.distanceTo(t)*.5,a=-this.direction.dot(li),o=ui.dot(this.direction),s=-ui.dot(li),c=ui.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ci).addScaledVector(li,d),f}intersectSphere(e,t){if(e.radius<0)return null;si.subVectors(e.center,this.origin);let n=si.dot(this.direction),r=si.dot(si)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let ne=S/w,re=C/w,M=1/w,ie=T-ne*D,ae=E-re*D,oe=O-ne*A,se=k-re*A,ce=j-ne*te,le=ee-re*te,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=M*(ue*D+N*A+de*te);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pi=new Cn,mi=new di,hi=new Kr,gi=new V,_i=new V,vi=new V,yi=new V,bi=new V,xi=new V,Si=new V,Ci=new V,W=class extends Xn{constructor(e=new ei,t=new fi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){xi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(bi.fromBufferAttribute(s,e),a?xi.addScaledVector(bi,r):xi.addScaledVector(bi.sub(t),r))}t.add(xi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hi.copy(n.boundingSphere),hi.applyMatrix4(i),mi.copy(e.ray).recast(e.near),!(hi.containsPoint(mi.origin)===!1&&(mi.intersectSphere(hi,gi)===null||mi.origin.distanceToSquared(gi)>(e.far-e.near)**2))&&(pi.copy(i).invert(),mi.copy(e.ray).applyMatrix4(pi),(n.boundingBox===null||mi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ti(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ti(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ti(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ti(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function wi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ci.copy(s),Ci.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ci);return l<n.near||l>n.far?null:{distance:l,point:Ci.clone(),object:e}}function Ti(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,_i),e.getVertexPosition(c,vi),e.getVertexPosition(l,yi);let u=wi(e,t,n,r,_i,vi,yi,Si);if(u){let e=new V;br.getBarycoord(Si,_i,vi,yi,e),i&&(u.uv=br.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=br.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=br.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};br.getNormal(_i,vi,yi,t.normal),u.face=t,u.barycoord=e}return u}var Ei=class extends _n{constructor(e=null,t=1,n=1,r,i,a,o,s,c=E,l=E,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Di=new Kr,Oi=new B(.5,.5),ki=new V,Ai=class{constructor(e=new ii,t=new ii,n=new ii,r=new ii,i=new ii,a=new ii){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ht,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476+Oi.distanceTo(e.center),Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ki.x=r.normal.x>0?e.max.x:e.min.x,ki.y=r.normal.y>0?e.max.y:e.min.y,ki.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ki)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ji=class extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mi=new Cn,Ni=new di,Pi=new Kr,Fi=new V,Ii=class extends Xn{constructor(e=new ei,t=new ji){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pi.copy(n.boundingSphere),Pi.applyMatrix4(r),Pi.radius+=i,e.ray.intersectsSphere(Pi)===!1)return;Mi.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Mi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Fi.fromBufferAttribute(l,n),Li(Fi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Fi.fromBufferAttribute(l,a),Li(Fi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Li(e,t,n,r,i,a,o){let s=Ni.distanceSqToPoint(e);if(s<n){let n=new V;Ni.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ri=class extends _n{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zi=class extends _n{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bi=class extends _n{constructor(e,t,n=ie,r,i,a,o=E,s=E,c,l=me,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Vi=class extends Bi{constructor(e,t=ie,n=301,r,i,a=E,o=E,s,c=me){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hi=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ui=class e extends ei{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Hr(c,3)),this.setAttribute(`normal`,new Hr(l,3)),this.setAttribute(`uv`,new Hr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Wi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new Cn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(z(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(z(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gi=class extends Wi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ki=class extends Gi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function qi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ji=new V,Yi=new V,Xi=new qi,Zi=new qi,Qi=new qi,$i=class extends Wi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Yi.subVectors(r[0],r[1]).add(r[0]),c=Yi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ji.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ji),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Xi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Zi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Qi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Xi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Zi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Qi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Xi.calc(s),Zi.calc(s),Qi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ea(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ta(e,t){let n=1-e;return n*n*t}function na(e,t){return 2*(1-e)*e*t}function ra(e,t){return e*e*t}function ia(e,t,n,r){return ta(e,t)+na(e,n)+ra(e,r)}function aa(e,t){let n=1-e;return n*n*n*t}function oa(e,t){let n=1-e;return 3*n*n*e*t}function sa(e,t){return 3*(1-e)*e*e*t}function ca(e,t){return e*e*e*t}function la(e,t,n,r,i){return aa(e,t)+oa(e,n)+sa(e,r)+ca(e,i)}var ua=class extends Wi{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(la(e,r.x,i.x,a.x,o.x),la(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},da=class extends Wi{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(la(e,r.x,i.x,a.x,o.x),la(e,r.y,i.y,a.y,o.y),la(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fa=class extends Wi{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Wi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Wi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ia(e,r.x,i.x,a.x),ia(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Wi{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ia(e,r.x,i.x,a.x),ia(e,r.y,i.y,a.y),ia(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends Wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ea(o,s.x,c.x,l.x,u.x),ea(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}},_a=Object.freeze({__proto__:null,ArcCurve:Ki,CatmullRomCurve3:$i,CubicBezierCurve:ua,CubicBezierCurve3:da,EllipseCurve:Gi,LineCurve:fa,LineCurve3:pa,QuadraticBezierCurve:ma,QuadraticBezierCurve3:ha,SplineCurve:ga}),va=class extends Wi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new _a[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new _a[n.type]().fromJSON(n))}return this}},ya=class extends va{constructor(e){super(),this.type=`Path`,this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new fa(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ma(this.currentPoint.clone(),new B(e,t),new B(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ua(this.currentPoint.clone(),new B(e,t),new B(n,r),new B(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ga([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Gi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ba=class extends ya{constructor(e){super(e),this.uuid=jt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ya().fromJSON(n))}return this}};function xa(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Sa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=ka(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return wa(a,o,n,s,c,l,0),o}function Sa(e,t,n,r,i){let a;if(i===$a(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Xa(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Xa(i/r|0,e[i],e[i+1],a);return a&&Ha(a,a.next)&&(Za(a),a=a.next),a}function Ca(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ha(n,n.next)||Va(n.prev,n,n.next)===0)){if(Za(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function wa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Pa(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ea(e,r,i,a):Ta(e)){t.push(c.i,e.i,l.i),Za(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Da(Ca(e),t),wa(e,t,n,r,i,a,2)):o===2&&Oa(e,t,n,r,i,a):wa(Ca(e),t,n,r,i,a,1);break}}}function Ta(e){let t=e.prev,n=e,r=e.next;if(Va(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&za(i,s,a,c,o,l,m.x,m.y)&&Va(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ea(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Va(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ia(p,m,t,n,r),v=Ia(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&za(s,u,c,d,l,f,y.x,y.y)&&Va(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&za(s,u,c,d,l,f,b.x,b.y)&&Va(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&za(s,u,c,d,l,f,y.x,y.y)&&Va(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&za(s,u,c,d,l,f,b.x,b.y)&&Va(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Da(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ha(r,i)&&Ua(r,n,n.next,i)&&qa(r,i)&&qa(i,r)&&(t.push(r.i,n.i,i.i),Za(n),Za(n.next),n=e=i),n=n.next}while(n!==e);return Ca(n)}function Oa(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ba(o,e)){let s=Ya(o,e);o=Ca(o,o.next),s=Ca(s,s.next),wa(o,t,n,r,i,a,0),wa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function ka(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Sa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(La(o))}i.sort(Aa);for(let e=0;e<i.length;e++)n=ja(i[e],n);return n}function Aa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ja(e,t){let n=Ma(e,t);if(!n)return t;let r=Ya(n,e);return Ca(r,r.next),Ca(n,n.next)}function Ma(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ha(e,n))return n;do{if(Ha(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Ra(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);qa(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Na(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Na(e,t){return Va(e.prev,e,t.prev)<0&&Va(t.next,e,e.next)<0}function Pa(e,t,n,r){let i=e;do i.z===0&&(i.z=Ia(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Fa(i)}function Fa(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ia(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function La(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ra(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function za(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Ra(e,t,n,r,i,a,o,s)}function Ba(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ka(e,t)&&(qa(e,t)&&qa(t,e)&&Ja(e,t)&&(Va(e.prev,e,t.prev)||Va(e,t.prev,t))||Ha(e,t)&&Va(e.prev,e,e.next)>0&&Va(t.prev,t,t.next)>0)}function Va(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ha(e,t){return e.x===t.x&&e.y===t.y}function Ua(e,t,n,r){let i=Ga(Va(e,t,n)),a=Ga(Va(e,t,r)),o=Ga(Va(n,r,e)),s=Ga(Va(n,r,t));return!!(i!==a&&o!==s||i===0&&Wa(e,n,t)||a===0&&Wa(e,r,t)||o===0&&Wa(n,e,r)||s===0&&Wa(n,t,r))}function Wa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ga(e){return e>0?1:e<0?-1:0}function Ka(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ua(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function qa(e,t){return Va(e.prev,e,e.next)<0?Va(e,t,e.next)>=0&&Va(e,e.prev,t)>=0:Va(e,t,e.prev)<0||Va(e,e.next,t)<0}function Ja(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ya(e,t){let n=Qa(e.i,e.x,e.y),r=Qa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Xa(e,t,n,r){let i=Qa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Za(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Qa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $a(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var eo=class{static triangulate(e,t,n=2){return xa(e,t,n)}},to=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];no(e),ro(n,e);let a=e.length;t.forEach(no);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,ro(n,t[e]);let o=eo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function no(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function ro(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var io=class e extends ei{constructor(e=new ba([new B(.5,.5),new B(-.5,.5),new B(-.5,-.5),new B(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Hr(r,3)),this.setAttribute(`uv`,new Hr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?ao:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new V,b=new V,x=new V}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!to.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];to.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||R(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new B(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new B(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let ee=[],te,ne=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];te=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),te[e]=A(t[e],t[r],t[i]);ee.push(te),ne=ne.concat(te)}let re;if(p===0)re=to.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ce(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];te=ee[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],te[e],a);ce(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}re=to.triangulateShape(e,t)}let M=re.length,ie=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ne[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ce(x.x,x.y,x.z)):ce(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ne[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ce(x.x,x.y,x.z)):ce(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ce(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];te=ee[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],te[e],r);_?ce(i.x,i.y+g[s-1].y,g[s-1].x+n):ce(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<M;e++){let n=re[e];le(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<M;e++){let n=re[e];le(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<M;e++){let t=re[e];le(t[2],t[1],t[0])}for(let e=0;e<M;e++){let t=re[e];le(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ue(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ce(e,t,n){a.push(e),a.push(t),a.push(n)}function le(e,t,i){N(e),N(t),N(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);de(o[0]),de(o[1]),de(o[2])}function ue(e,t,i,a){N(e),N(t),N(a),N(t),N(i),N(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);de(s[0]),de(s[1]),de(s[3]),de(s[1]),de(s[2]),de(s[3])}function N(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function de(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return oo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new _a[i.type]().fromJSON(i)),new e(r,t.options)}},ao={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new B(a,o),new B(s,c),new B(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new B(o,1-c),new B(l,1-d),new B(f,1-m),new B(h,1-_)]:[new B(s,1-c),new B(u,1-d),new B(p,1-m),new B(g,1-_)]}};function oo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var so=class e extends ei{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Hr(p,3)),this.setAttribute(`normal`,new Hr(m,3)),this.setAttribute(`uv`,new Hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function co(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(uo(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(uo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function lo(e){let t={};for(let n=0;n<e.length;n++){let r=co(e[n]);for(let e in r)t[e]=r[e]}return t}function uo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function fo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function po(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:sn.workingColorSpace}var mo={clone:co,merge:lo},ho=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,go=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_o=class extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ho,this.fragmentShader=go,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=fo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new vn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Cn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},vo=class extends _o{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},yo=class extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=st,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bo=class extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function So(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Co=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},wo=class extends Co{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:it,endingEnd:it}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case at:i=e,o=2*t-n;break;case ot:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case at:a=e,s=2*n-t;break;case ot:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},To=class extends Co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Eo=class extends Co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Do=class extends Co{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ao(n,t,g,y,r);i[p]=Oo(x,o,_,b,m)}return i}};function Oo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ko(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ao(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Oo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ko(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var jo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=xo(t,this.TimeBufferType),this.values=xo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xo(e.times,Array),values:xo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),So(e.settings)&&(n.settings={inTangents:xo(e.settings.inTangents,Array),outTangents:xo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Do(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case et:t=this.InterpolantFactoryMethodDiscrete;break;case tt:t=this.InterpolantFactoryMethodLinear;break;case nt:t=this.InterpolantFactoryMethodSmooth;break;case rt:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return et;case this.InterpolantFactoryMethodLinear:return tt;case this.InterpolantFactoryMethodSmooth:return nt;case this.InterpolantFactoryMethodBezier:return rt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;So(this.settings)&&(Mo(this.settings.inTangents,e),Mo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&_t(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===nt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,So(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Mo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}jo.prototype.ValueTypeName=``,jo.prototype.TimeBufferType=Float32Array,jo.prototype.ValueBufferType=Float32Array,jo.prototype.DefaultInterpolation=tt;var No=class extends jo{constructor(e,t,n){super(e,t,n)}};No.prototype.ValueTypeName=`bool`,No.prototype.ValueBufferType=Array,No.prototype.DefaultInterpolation=et,No.prototype.InterpolantFactoryMethodLinear=void 0,No.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends jo{constructor(e,t,n,r){super(e,t,n,r)}};Po.prototype.ValueTypeName=`color`;var Fo=class extends jo{constructor(e,t,n,r){super(e,t,n,r)}};Fo.prototype.ValueTypeName=`number`;var Io=class extends Co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)$t.slerpFlat(i,0,a,c-o,a,c,s);return i}},Lo=class extends jo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}};Lo.prototype.ValueTypeName=`quaternion`,Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends jo{constructor(e,t,n){super(e,t,n)}};Ro.prototype.ValueTypeName=`string`,Ro.prototype.ValueBufferType=Array,Ro.prototype.DefaultInterpolation=et,Ro.prototype.InterpolantFactoryMethodLinear=void 0,Ro.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends jo{constructor(e,t,n,r){super(e,t,n,r)}};zo.prototype.ValueTypeName=`vector`;var Bo=new V,Vo=new $t,Ho=new V,Uo=class extends Xn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Cn,this.projectionMatrix=new Cn,this.projectionMatrixInverse=new Cn,this.coordinateSystem=ht,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bo,Vo,Ho),Ho.x===1&&Ho.y===1&&Ho.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Vo,Ho.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Bo,Vo,Ho),Ho.x===1&&Ho.y===1&&Ho.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Vo,Ho.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wo=new V,Go=new B,Ko=new B,qo=class extends Uo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=At*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return At*2*Math.atan(Math.tan(kt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wo.x,Wo.y).multiplyScalar(-e/Wo.z),Wo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wo.x,Wo.y).multiplyScalar(-e/Wo.z)}getViewSize(e,t){return this.getViewBounds(e,Go,Ko),t.subVectors(Ko,Go)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jo=class extends Uo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yo=-90,Xo=1,Zo=class extends Xn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qo(Yo,Xo,e,t);r.layers=this.layers,this.add(r);let i=new qo(Yo,Xo,e,t);i.layers=this.layers,this.add(i);let a=new qo(Yo,Xo,e,t);a.layers=this.layers,this.add(a);let o=new qo(Yo,Xo,e,t);o.layers=this.layers,this.add(o);let s=new qo(Yo,Xo,e,t);s.layers=this.layers,this.add(s);let c=new qo(Yo,Xo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Qo=class extends qo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},$o=`\\[\\]\\.:\\/`,es=RegExp(`[\\[\\]\\.:\\/]`,`g`),ts=`[^\\[\\]\\.:\\/]`,ns=`[^`+$o.replace(`\\.`,``)+`]`,rs=`((?:WC+[\\/:])*)`.replace(`WC`,ts),is=`(WCOD+)?`.replace(`WCOD`,ns),as=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ts),os=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ts),ss=RegExp(`^`+rs+is+as+os+`$`),cs=[`material`,`materials`,`bones`,`map`],ls=class{constructor(e,t,n){let r=n||us.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},us=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(es,``)}static parseTrackName(e){let t=ss.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);cs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};us.Composite=ls,us.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},us.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},us.prototype.GetterByBindingType=[us.prototype._getValue_direct,us.prototype._getValue_array,us.prototype._getValue_arrayElement,us.prototype._getValue_toArray],us.prototype.SetterByBindingTypeAndVersioning=[[us.prototype._setValue_direct,us.prototype._setValue_direct_setNeedsUpdate,us.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[us.prototype._setValue_array,us.prototype._setValue_array_setNeedsUpdate,us.prototype._setValue_array_setMatrixWorldNeedsUpdate],[us.prototype._setValue_arrayElement,us.prototype._setValue_arrayElement_setNeedsUpdate,us.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[us.prototype._setValue_fromArray,us.prototype._setValue_fromArray_setNeedsUpdate,us.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function ds(e,t,n,r){let i=fs(r);switch(n){case de:return e*t;case ge:return e*t/i.components*i.byteLength;case _e:return e*t/i.components*i.byteLength;case ve:return e*t*2/i.components*i.byteLength;case ye:return e*t*2/i.components*i.byteLength;case fe:return e*t*3/i.components*i.byteLength;case pe:return e*t*4/i.components*i.byteLength;case be:return e*t*4/i.components*i.byteLength;case xe:case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ce:case we:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ee:case Oe:return Math.max(e,16)*Math.max(t,8)/4;case Te:case De:return Math.max(e,8)*Math.max(t,8)/2;case ke:case Ae:case Me:case Ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case je:case Pe:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ie:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Le:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case F:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Re:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case I:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ze:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ve:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case He:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ue:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case We:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ge:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ke:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case qe:case Je:case Ye:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Xe:case Ze:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Qe:case $e:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function fs(e){switch(e){case ee:case te:return{byteLength:1,components:1};case re:case ne:case oe:return{byteLength:2,components:1};case se:case ce:return{byteLength:2,components:4};case ie:case M:case ae:return{byteLength:4,components:1};case ue:case N:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function ps(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ms(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var G={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},hs={basic:{uniforms:lo([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:lo([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:lo([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:lo([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:lo([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new U(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:lo([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:lo([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:lo([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:lo([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:lo([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:lo([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distance:{uniforms:lo([K.common,K.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distance_vert,fragmentShader:G.distance_frag},shadow:{uniforms:lo([K.lights,K.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};hs.physical={uniforms:lo([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var gs={r:0,b:0,g:0},_s=new Cn,vs=new H;vs.set(-1,0,0,0,1,0,0,0,1);function ys(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new Ui(1,1,1),new _o({name:`BackgroundCubeMaterial`,uniforms:co(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_s.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(vs),l.material.toneMapped=sn.getTransfer(i.colorSpace)!==dt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new so(2,2),new _o({name:`BackgroundMaterial`,uniforms:co(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=sn.getTransfer(i.colorSpace)!==dt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(gs,po(e)),n.buffers.color.setClear(gs.r,gs.g,gs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function bs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function xs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ss(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Cs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ii,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ws=4,Ts=6,Es=20,Ds=256,Os=new Jo,ks=new U,As=null,js=0,Ms=0,Ns=!1,Ps=new V,Fs=new V,Is=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ps}=i;As=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Us(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(As,js,Ms),this._renderer.xr.enabled=Ns,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),As=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:k,minFilter:k,generateMipmaps:!1,type:oe,format:pe,colorSpace:lt,depthBuffer:!1},r=Rs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ls(r)),this._blurMaterial=Vs(r,e,t),this._ggxMaterial=Bs(r,e,t)}return r}_compileMaterial(e){let t=new W(new ei,e);this._renderer.compile(t,Os)}_sceneToCubeUV(e,t,n,r,i){let a=new qo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ks),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Ui,new fi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ks),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;zs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Us()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;zs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Os)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ws?n-d+ws:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,zs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Os),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,zs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Os)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];zs(t,3*l*(r>this._lodMax-ws?r-this._lodMax+ws:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Os)}};function Ls(e){let t=[],n=[],r=e,i=e-ws+1+Ts;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Fs.set(1,r,n):e===1?Fs.set(-n,1,-r):e===2?Fs.set(-n,r,1):e===3?Fs.set(-1,r,-n):e===4?Fs.set(-n,-1,r):Fs.set(n,r,-1),Fs.toArray(l,(e*6+t)*3)}}let u=new ei;u.setAttribute(`position`,new zr(c,3)),u.setAttribute(`outputDirection`,new zr(l,3)),n.push(new W(u,null)),r>ws&&r--}return{lodMeshes:n,sizeLods:t}}function Rs(e,t,n){let r=new bn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function zs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Bs(e,t,n){return new _o({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ws(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vs(e,t,n){return new _o({name:`SphericalGaussianBlur`,defines:{SAMPLES:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ws(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hs(){return new _o({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Us(){return new _o({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ws(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gs=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ri(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ui(5,5,5),i=new _o({name:`CubemapFromEquirect`,uniforms:co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=k),new Zo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ks(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Gs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Is(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Is(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function qs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ct(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Js(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Vr:Br)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ys(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Xs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Zs(e,t,n){let r=new WeakMap,i=new vn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new xn(h,p,m,u);g.type=ae,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Qs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var $s={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ec(e,t,n,r,i,a){let o=new bn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new ei;l.setAttribute(`position`,new Hr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Hr([0,2,0,0,2,0],2));let u=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new Jo(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new bn(t,n,{type:oe,depthBuffer:!1,stencilBuffer:!1}),c=new bn(t,n,{type:oe,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},sn.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=$s[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var tc=new _n,nc=new Bi(1,1),rc=new xn,ic=new Sn,ac=new Ri,oc=[],sc=[],cc=new Float32Array(16),lc=new Float32Array(9),uc=new Float32Array(4);function dc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=oc[i];if(a===void 0&&(a=new Float32Array(i),oc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function fc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function pc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function mc(e,t){let n=sc[t];n===void 0&&(n=new Int32Array(t),sc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function hc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fc(n,t))return;e.uniform2fv(this.addr,t),pc(n,t)}}function _c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(fc(n,t))return;e.uniform3fv(this.addr,t),pc(n,t)}}function vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fc(n,t))return;e.uniform4fv(this.addr,t),pc(n,t)}}function yc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),pc(n,t)}else{if(fc(n,r))return;uc.set(r),e.uniformMatrix2fv(this.addr,!1,uc),pc(n,r)}}function bc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),pc(n,t)}else{if(fc(n,r))return;lc.set(r),e.uniformMatrix3fv(this.addr,!1,lc),pc(n,r)}}function xc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),pc(n,t)}else{if(fc(n,r))return;cc.set(r),e.uniformMatrix4fv(this.addr,!1,cc),pc(n,r)}}function Sc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fc(n,t))return;e.uniform2iv(this.addr,t),pc(n,t)}}function wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fc(n,t))return;e.uniform3iv(this.addr,t),pc(n,t)}}function Tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fc(n,t))return;e.uniform4iv(this.addr,t),pc(n,t)}}function Ec(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fc(n,t))return;e.uniform2uiv(this.addr,t),pc(n,t)}}function Oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fc(n,t))return;e.uniform3uiv(this.addr,t),pc(n,t)}}function kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fc(n,t))return;e.uniform4uiv(this.addr,t),pc(n,t)}}function Ac(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(nc.compareFunction=n.isReversedDepthBuffer()?518:515,a=nc):a=tc,n.setTexture2D(t||a,i)}function jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ic,i)}function Mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ac,i)}function Nc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||rc,i)}function Pc(e){switch(e){case 5126:return hc;case 35664:return gc;case 35665:return _c;case 35666:return vc;case 35674:return yc;case 35675:return bc;case 35676:return xc;case 5124:case 35670:return Sc;case 35667:case 35671:return Cc;case 35668:case 35672:return wc;case 35669:case 35673:return Tc;case 5125:return Ec;case 36294:return Dc;case 36295:return Oc;case 36296:return kc;case 35678:case 36198:case 36298:case 36306:case 35682:return Ac;case 35679:case 36299:case 36307:return jc;case 35680:case 36300:case 36308:case 36293:return Mc;case 36289:case 36303:case 36311:case 36292:return Nc}}function Fc(e,t){e.uniform1fv(this.addr,t)}function Ic(e,t){let n=dc(t,this.size,2);e.uniform2fv(this.addr,n)}function Lc(e,t){let n=dc(t,this.size,3);e.uniform3fv(this.addr,n)}function Rc(e,t){let n=dc(t,this.size,4);e.uniform4fv(this.addr,n)}function zc(e,t){let n=dc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Bc(e,t){let n=dc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Vc(e,t){let n=dc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Hc(e,t){e.uniform1iv(this.addr,t)}function Uc(e,t){e.uniform2iv(this.addr,t)}function Wc(e,t){e.uniform3iv(this.addr,t)}function Gc(e,t){e.uniform4iv(this.addr,t)}function Kc(e,t){e.uniform1uiv(this.addr,t)}function qc(e,t){e.uniform2uiv(this.addr,t)}function Jc(e,t){e.uniform3uiv(this.addr,t)}function Yc(e,t){e.uniform4uiv(this.addr,t)}function Xc(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?nc:tc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Zc(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ic,a[e])}function Qc(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ac,a[e])}function $c(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||rc,a[e])}function el(e){switch(e){case 5126:return Fc;case 35664:return Ic;case 35665:return Lc;case 35666:return Rc;case 35674:return zc;case 35675:return Bc;case 35676:return Vc;case 5124:case 35670:return Hc;case 35667:case 35671:return Uc;case 35668:case 35672:return Wc;case 35669:case 35673:return Gc;case 5125:return Kc;case 36294:return qc;case 36295:return Jc;case 36296:return Yc;case 35678:case 36198:case 36298:case 36306:case 35682:return Xc;case 35679:case 36299:case 36307:return Zc;case 35680:case 36300:case 36308:case 36293:return Qc;case 36289:case 36303:case 36311:case 36292:return $c}}var tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pc(t.type)}},nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=el(t.type)}},rl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function al(e,t){e.seq.push(t),e.map[t.id]=t}function ol(e,t,n){let r=e.name,i=r.length;for(il.lastIndex=0;;){let a=il.exec(r),o=il.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){al(n,l===void 0?new tl(s,e,t):new nl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new rl(s),al(n,e)),n=e}}}var sl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ol(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function cl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ll=37297,ul=0;function dl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var fl=new H;function pl(e){sn._getMatrix(fl,sn.workingColorSpace,e);let t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(sn.getTransfer(e)){case ut:return[t,`LinearTransferOETF`];case dt:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ml(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+dl(e.getShaderSource(t),r)}return i}function hl(e,t){let n=pl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var gl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function _l(e,t){let n=gl[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var vl=new V;function yl(){return sn.getLuminanceCoefficients(vl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${vl.x.toFixed(4)}, ${vl.y.toFixed(4)}, ${vl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function bl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Cl).join(`
`)}function xl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Sl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Cl(e){return e!==``}function wl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var El=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(e){return e.replace(El,kl)}var Ol=new Map;function kl(e,t){let n=G[t];if(n===void 0){let e=Ol.get(t);if(e!==void 0)n=G[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Dl(n)}var Al=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(e){return e.replace(Al,Ml)}function Ml(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Nl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Pl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Fl(e){return Pl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Il={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ll(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Il[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Rl={302:`ENVMAP_MODE_REFRACTION`};function zl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Rl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Bl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Vl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Bl[e.combine]||`ENVMAP_BLENDING_NONE`}function Hl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ul(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Fl(n),l=Ll(n),u=zl(n),d=Vl(n),f=Hl(n),p=bl(n),m=xl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Cl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Cl).join(`
`),_.length>0&&(_+=`
`)):(g=[Nl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Cl).join(`
`),_=[Nl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:_l(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,hl(`linearToOutputTexel`,n.outputColorSpace),yl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Cl).join(`
`)),o=Dl(o),o=wl(o,n),o=Tl(o,n),s=Dl(s),s=wl(s,n),s=Tl(s,n),o=jl(o),s=jl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=cl(i,i.VERTEX_SHADER,y),S=cl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ml(i,x,`vertex`),n=ml(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new sl(i,h),T=Sl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,ll)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ul++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Wl=0,Gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kl(e),t.set(e,n)),n}},Kl=class{constructor(e){this.id=Wl++,this.code=e,this.usedTimes=0}};function ql(e){return e===1030||e===37490||e===36285}function Jl(e,t,n,r,i,a){let o=new Pn,s=new Gl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=hs[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,re=!!i.map,M=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,P=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:sn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:M,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&ql(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:P,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&sn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&sn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=hs[t];n=mo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ul(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Yl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Xl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Zl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ql(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Xl),r.length>1&&r.sort(t||Zl),i.length>1&&i.sort(t||Zl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function $l(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ql,e.set(t,[i])):n>=r.length?(i=new Ql,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function eu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new U};break;case`SpotLight`:n={position:new V,direction:new V,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function tu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var nu=0;function ru(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function iu(e){let t=new eu,n=tu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new Cn,o=new Cn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(ru);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=nu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function au(e){let t=new iu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ou(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new au(e),t.set(n,[a])):r>=i.length?(a=new au(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var su=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lu=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],uu=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],du=new Cn,fu=new V,pu=new V;function mu(e,t,n){let r=new Ai,i=new B,a=new B,o=new vn,s=new yo,c=new bo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new _o({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:su,fragmentShader:cu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ei;m.setAttribute(`position`,new zr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new W(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new bn(i.x,i.y,{format:ve,type:oe,minFilter:k,magFilter:k,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Bi(i.x,i.y,ae),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=me,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=E,d.map.depthTexture.magFilter=E}else l.isPointLight?(d.map=new Gs(i.x),d.map.depthTexture=new Vi(i.x,ie)):(d.map=new bn(i.x,i.y),d.map.depthTexture=new Bi(i.x,i.y,ie)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=me,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=k,d.map.depthTexture.magFilter=k):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=E,d.map.depthTexture.magFilter=E);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),fu.setFromMatrixPosition(l.matrixWorld),e.position.copy(fu),pu.copy(e.position),pu.add(lu[t]),e.up.copy(uu[t]),e.lookAt(pu),e.updateMatrixWorld(),n.makeTranslation(-fu.x,-fu.y,-fu.z),du.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(du,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new bn(i.x,i.y,{format:ve,type:oe}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function hu(e,t){function n(){let t=!1,n=new vn,r=null,i=new vn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Tt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),te=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),te=ne>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new vn().fromArray(ae),ce=new vn().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(de(e.BLEND),g=!1);return}if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(te&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+ee-1),M!==t&&(e.activeTexture(t),M=t)}function Te(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+ee-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:Be}}function gu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):vt(`canvas`)}function g(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ut:sn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),ne(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),M(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&re(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function re(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function M(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ie=0;function ae(){ie=0}function oe(){return ie}function se(e){ie=e}function ce(){let e=ie;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ie+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ue(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){Se(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let pe={[C]:e.REPEAT,[w]:e.CLAMP_TO_EDGE,[T]:e.MIRRORED_REPEAT},me={[E]:e.NEAREST,[D]:e.NEAREST_MIPMAP_NEAREST,[O]:e.NEAREST_MIPMAP_LINEAR,[k]:e.LINEAR,[A]:e.LINEAR_MIPMAP_NEAREST,[j]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,pe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ee));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=le(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&re(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ve(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=sn.getPrimaries(sn.workingColorSpace),r=o.colorSpace===``?null:sn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Fe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);_e(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===he,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&be(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=ds(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=ds(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Ie(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,o,s){if(o.image.length!==6)return;let c=ve(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=sn.getPrimaries(sn.workingColorSpace),r=o.colorSpace===``?null:sn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Fe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);_e(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Ie(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ne(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,ee)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ue(i.depthTexture,0);let u=l.__webglTexture,d=Ne(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function Oe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,te);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Pe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),we(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),_e(c,a),Ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),_e(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Ee(t)}function ke(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let Ae=[],je=[];function Me(t){if(t.samples>0){if(Pe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ae.length=0,je.length=0,Ae.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ae.push(l),je.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(i.maxSamples,e.samples)}function Pe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(sn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=ue,this.setTexture2DArray=N,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function _u(e,t){function n(n,r=``){let i,a=sn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var vu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _o({vertexShader:vu,fragmentShader:yu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new so(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xu=class extends Et{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new bu,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new B,C=null,w=null,T=new qo;T.viewport=new vn;let E=new qo;E.viewport=new vn;let D=[T,E],O=new Qo,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new $n,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new $n,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new $n,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?he:me,a=_.stencil?le:ie);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new bn(d.textureWidth,d.textureHeight,{format:pe,type:ee,depthTexture:new Bi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new bn(f.framebufferWidth,f.framebufferHeight,{format:pe,type:ee,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let re=new V,M=new V;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),M.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(M),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;oe(O,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ae(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),se(e,O,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=At*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ce=null;function ue(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new qo,o.layers.enable(n),o.viewport=new vn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Hi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let N=new ps;N.setAnimationLoop(ue),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},Su=new Cn,Cu=new H;Cu.set(-1,0,0,0,1,0,0,0,1);function wu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,po(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Su.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Cu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Tu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Eu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Du=null;function Ou(){return Du===null&&(Du=new Ei(Eu,16,16,ve,oe),Du.name=`DFG_LUT`,Du.minFilter=k,Du.magFilter=k,Du.wrapS=w,Du.wrapT=w,Du.generateMipmaps=!1,Du.needsUpdate=!0),Du}var ku=class{constructor(e={}){let{canvas:t=yt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ee}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([be,ye,_e]),g=new Set([ee,ie,re,le,se,ce]),_=new Uint32Array(4),v=new Int32Array(4),y=new V,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=ct;let te=0,ne=0,M=null,ae=-1,ue=null,N=new vn,de=new vn,fe=null,pe=new U(0),me=0,he=t.width,ge=t.height,ve=1,xe=null,Se=null,Ce=new vn(0,0,he,ge),we=new vn(0,0,he,ge),Te=!1,Ee=new Ai,De=!1,Oe=!1,ke=new Cn,Ae=new V,je=new vn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return M===null?ve:1}let P=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,F,Re,I,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),R(`WebGLRenderer: `+e.message),e}function rt(){Ie=new qs(P),Ie.init(),et=new _u(P,Ie),Le=new Ss(P,Ie,e,et),F=new hu(P,Ie),Le.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),k=P.createFramebuffer(),A=P.createFramebuffer(),Re=new Xs(P),I=new Yl,ze=new gu(P,Ie,F,I,Le,et,Re),Be=new Ks(T),Ve=new ms(P),tt=new bs(P,Ve),He=new Js(P,Ve,Re,tt),Ue=new Qs(P,He,Ve,tt,Re),Ze=new Zs(P,Le,ze),Je=new Cs(I),We=new Jl(T,Be,Ie,Le,tt,Je),Ge=new wu(T,I),Ke=new $l,qe=new ou(Ie),Xe=new ys(T,Be,F,Ue,p,s),Ye=new mu(T,Ue,Le),nt=new Tu(P,Re,Le,F),Qe=new xs(P,Ie,Re),$e=new Ys(P,Ie,Re),Re.programs=We.programs,T.capabilities=Le,T.extensions=Ie,T.properties=I,T.renderLists=Ke,T.shadowMap=Ye,T.state=F,T.info=Re}m!==1009&&(w=new ec(m,t.width,t.height,o,r,i));let it=new xu(T,P);this.xr=it,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){if(it.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}he=e,ge=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(he*ve,ge*ve).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(N)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(N.copy(Ce).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(de.copy(we).multiplyScalar(ve).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Xe.dispose(),Ke.dispose(),qe.dispose(),I.dispose(),Be.dispose(),Ue.dispose(),tt.dispose(),nt.dispose(),We.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,gt),it.removeEventListener(`sessionend`,_t),vt.stop()};function at(e){e.preventDefault(),xt(`WebGLRenderer: Context Lost.`),E=!0}function ot(){xt(`WebGLRenderer: Context Restored.`),E=!1;let e=Re.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;rt(),Re.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function st(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function lt(e){let t=e.target;t.removeEventListener(`dispose`,lt),ut(t)}function ut(e){dt(e),I.remove(e)}function dt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Ve.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ft(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),De===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=qe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),Oe=this.localClippingEnabled,De=Je.init(this.clippingPlanes,Oe),De===!0&&Je.setGlobalState(this.clippingPlanes,t),D!==null&&Ye.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ft(o,n,t,e),r.add(o)}else ft(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let pt=null;function mt(e){pt&&pt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new ps;vt.setAnimationLoop(mt),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){pt=e,it.setAnimationLoop(e),e===null?vt.stop():vt.start()},it.addEventListener(`sessionstart`,gt),it.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=qe.get(e,C.length),x.init(t),x.state.textureUnits=ze.getTextureUnits(),C.push(x),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,ht,t.reversedDepth),Oe=this.localClippingEnabled,De=Je.init(this.clippingPlanes,Oe),b=Ke.get(e,S.length),b.init(),S.push(b),it.enabled===!0&&it.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,T.sortObjects)}bt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(xe,Se),Ne=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ne&&Xe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Je.beginShadows();let i=x.state.shadowsArray;if(Ye.render(i,e,t),De===!0&&Je.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Ne&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(b,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Ne&&Xe.render(e),St(b,e,t)}M!==null&&ne===0&&(ze.updateMultisampleRenderTarget(M),ze.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),tt.resetDefaultState(),ae=-1,ue=null,C.pop(),C.length>0?(x=C[C.length-1],ze.setTextureUnits(x.state.textureUnits),De===!0&&Je.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ee)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=Ue.update(e),a=e.material;a.visible&&b.push(e,i,a,n,je.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ee))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,je.z,s,t)}}else a.visible&&b.push(e,i,a,n,je.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),De===!0&&Je.setGlobalState(T.clippingPlanes,n),r&&F.viewport(N.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new bn(1,1,{generateMipmaps:!0,type:e?oe:ee,minFilter:j,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:sn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||N;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(pe),me=T.getClearAlpha(),me<1&&T.setClearColor(16777215,.5),T.clear(),Ne&&Xe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),De===!0&&Je.setGlobalState(T.clippingPlanes,r),Tt(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(pe,me),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=Me);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,lt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=We.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),kt(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=sl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Me),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:sn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=x.state.lights;if(De===!0&&(Oe===!0||e!==ue)){let t=e===ue&&r.id===ae;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Dt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ae&&(ae=r.id,w=!0),v.needsLights){let e=At(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ue!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(P,`projectionMatrix`,e.projectionMatrix),O.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&O.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(P,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&O.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&O.setValue(P,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&O.setValue(P,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){O.setOptional(P,i,`bindMatrix`),O.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(P,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(O.setOptional(P,i,`batchingTexture`),O.setValue(P,`batchingTexture`,i._matricesTexture,ze),O.setOptional(P,i,`batchingIdTexture`),O.setValue(P,`batchingIdTexture`,i._indirectTexture,ze),O.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(P,`batchingColorTexture`,i._colorsTexture,ze));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ze.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Ou()),w){if(O.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&z(k,E),a&&r.fog===!0&&Ge.refreshFogUniforms(k,a),Ge.refreshMaterialUniforms(k,r,ve,ge,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}sl.upload(P,Ot(v),k,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(sl.upload(P,Ot(v),k,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(P,`center`,i.center),O.setValue(P,`modelViewMatrix`,i.modelViewMatrix),O.setValue(P,`normalMatrix`,i.normalMatrix),O.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,S),nt.bind(n,S)}}return S}function z(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,te=t,ne=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),N.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,F.viewport(N),F.scissor(de),F.setScissorTest(fe),ae=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,N.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else N.copy(Ce).multiplyScalar(ve).floor(),de.copy(we).multiplyScalar(ve).floor(),fe=Te;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(N),F.scissor(de),F.setScissorTest(fe),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}ae=-1};function Nt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await wt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,k),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){te=0,ne=0,M=null,F.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ht}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=sn._getDrawingBufferColorSpace(e),t.unpackColorSpace=sn._getUnpackColorSpace()}},Au=76,ju=60/Au/2,Mu=e=>440*2**((e-69)/12),Nu=[{root:41,tones:[53,57,60,64]},{root:40,tones:[52,55,59,62]},{root:38,tones:[50,53,57,60]},{root:36,tones:[48,52,55,59]}],Pu=[60,62,64,65,67,69,71,72,74,76,77,79,81,83,84],Fu=class e{ctx=null;master;music;sfxBus;reverb;reverbSend;layer=[null,null];padBus;nextTime=0;step=0;melodyIdx=[6,9];muted=!1;endingBoost=0;humGain=null;humUntil=0;humStep=0;humNext=0;humVol=0;amb=null;ambRole=0;ambTimer=0;get started(){return!!this.ctx}start(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=this.muted?0:.8;let n=t.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=3,this.master.connect(n).connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(3.2),this.reverbSend=t.createGain(),this.reverbSend.gain.value=.55,this.reverbSend.connect(this.reverb).connect(this.master),this.music=t.createGain(),this.music.gain.value=.5,this.music.connect(this.master),this.music.connect(this.reverbSend),this.sfxBus=t.createGain(),this.sfxBus.gain.value=.7,this.sfxBus.connect(this.master),this.sfxBus.connect(this.reverbSend);for(let e of[0,1]){let n=t.createGain();n.gain.value=e===0?1:.3,n.connect(this.music),this.layer[e]=n}this.padBus=t.createGain(),this.padBus.gain.value=1;let r=t.createBiquadFilter();r.type=`lowpass`,r.frequency.value=1100,this.padBus.connect(r).connect(this.music),this.humGain=t.createGain(),this.humGain.gain.value=0,this.humGain.connect(this.master),this.humGain.connect(this.reverbSend),this.startAmbience(),this.nextTime=t.currentTime+.2,window.setInterval(()=>this.schedule(),30),document.addEventListener(`visibilitychange`,()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.ctx.resume())})}setMuted(e){this.muted=e,this.ctx&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.1)}get isMuted(){return this.muted}setMix(e,t,n){if(!this.ctx)return;let r=this.ctx.currentTime,i=Math.min(1,.22+t*.85+n);this.layer[e].gain.setTargetAtTime(1,r,.5),this.layer[+(e===0)].gain.setTargetAtTime(i,r,.6),this.endingBoost=n}makeImpulse(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),r=t.createBuffer(2,n,t.sampleRate);for(let e=0;e<2;e++){let t=r.getChannelData(e),i=0;for(let e=0;e<n;e++){let r=Math.random()*2-1;i=i*.6+r*.4,t[e]=i*(1-e/n)**2.6}}return r}musicBox(e,t,n,r){let i=this.ctx,a=i.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.16*n,t+.004),a.gain.exponentialRampToValueAtTime(8e-4,t+1.6),a.connect(r);let o=i.createOscillator();o.type=`sine`,o.frequency.value=e,o.connect(a);let s=i.createGain();s.gain.setValueAtTime(.35*n*.16,t),s.gain.exponentialRampToValueAtTime(5e-4,t+.35),s.connect(r);let c=i.createOscillator();c.type=`sine`,c.frequency.value=e*4.02,c.connect(s);for(let e of[o,c])e.start(t),e.stop(t+1.7)}glassBell(e,t,n,r){let i=this.ctx,a=i.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.12*n,t+.01),a.gain.exponentialRampToValueAtTime(6e-4,t+2.6),a.connect(r);let o=i.createOscillator();o.type=`sine`,o.frequency.value=e;let s=i.createOscillator();s.type=`sine`,s.frequency.value=e*3.5;let c=i.createGain();c.gain.setValueAtTime(e*2.2,t),c.gain.exponentialRampToValueAtTime(e*.05,t+1.2),s.connect(c).connect(o.frequency),o.connect(a);for(let e of[o,s])e.start(t),e.stop(t+2.7)}pad(e,t,n){let r=this.ctx;for(let i of e)for(let e of[-4,4]){let a=r.createOscillator();a.type=`triangle`,a.frequency.value=i,a.detune.value=e;let o=r.createGain();o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.022*(1+this.endingBoost*.6),t+1.4),o.gain.setValueAtTime(.022*(1+this.endingBoost*.6),t+n-1.2),o.gain.linearRampToValueAtTime(0,t+n+.6),a.connect(o).connect(this.padBus),a.start(t),a.stop(t+n+.7)}}bass(e,t){let n=this.ctx,r=n.createOscillator();r.type=`sine`,r.frequency.value=e;let i=n.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.08,t+.05),i.gain.exponentialRampToValueAtTime(.001,t+1.4),r.connect(i).connect(this.music),r.start(t),r.stop(t+1.5)}schedule(){let e=this.ctx;if(e&&e.state===`running`)for(this.scheduleHum();this.nextTime<e.currentTime+.15;)this.playStep(this.step,this.nextTime),this.step++,this.nextTime+=ju}playStep(e,t){let n=Math.floor(e/8)%Nu.length,r=e%8,i=Nu[n];if(r===0&&(this.pad(i.tones,t,ju*8),this.bass(Mu(i.root),t)),r===4&&this.bass(Mu(i.root+7),t),Math.random()<(r%2==0?.85:.55)){let e=this.walk(0,i.tones);this.musicBox(Mu(e+12),t+(Math.random()-.5)*.01,.7+Math.random()*.3,this.layer[0])}if(r%2==1&&Math.random()<.5){let e=this.walk(1,i.tones);this.glassBell(Mu(e+12),t,.6+Math.random()*.4,this.layer[1])}r===0&&Math.random()<.6&&this.glassBell(Mu(i.tones[3]+24),t+ju*.5,.35,this.layer[1])}walk(e,t){let n=this.melodyIdx[e]+Math.round((Math.random()-.5)*3.2);n=Math.max(0,Math.min(Pu.length-1,n));let r=Pu[n],i=t.map(e=>e%12);if(!i.includes(r%12)&&Math.random()<.7){let e=Pu[Math.min(Pu.length-1,n+1)];r=i.includes(e%12)?e:Pu[Math.max(0,n-1)],n=Pu.indexOf(r)}return this.melodyIdx[e]=n,r}static LULLABY=[72,69,72,74,72,69,67,-1,69,72,74,77,76,74,72,-1,72,74,76,74,72,69,67,69,65,-1,67,69,72,-1,-1,-1];hum(e,t=1){if(!this.ctx)return;let n=this.ctx.currentTime;n>this.humUntil&&(this.humStep=0,this.humNext=n+.05),this.humUntil=Math.max(this.humUntil,n+e),this.humVol=t,this.humGain?.gain.setTargetAtTime(.9*t,n,.08)}scheduleHum(){let t=this.ctx;if(!this.humGain)return;if(t.currentTime>this.humUntil){this.humGain.gain.setTargetAtTime(0,t.currentTime,.25);return}let n=60/Au/2;for(;this.humNext<t.currentTime+.15;){let t=e.LULLABY[this.humStep%e.LULLABY.length];t>0&&this.voice(Mu(t),this.humNext,n*1.9),this.humStep++,this.humNext+=n}}voice(e,t,n){let r=this.ctx,i=r.createOscillator();i.type=`triangle`,i.frequency.value=e;let a=r.createOscillator();a.frequency.value=5.2;let o=r.createGain();o.gain.value=e*.006,a.connect(o).connect(i.frequency);let s=r.createBiquadFilter();s.type=`lowpass`,s.frequency.value=1500;let c=r.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.07,t+.08),c.gain.setValueAtTime(.07,t+n*.6),c.gain.linearRampToValueAtTime(0,t+n),i.connect(s).connect(c).connect(this.humGain),i.start(t),a.start(t),i.stop(t+n+.05),a.stop(t+n+.05)}startAmbience(){let e=this.ctx,t=e.createGain(),n=e.createGain();t.gain.value=0,n.gain.value=0,t.connect(this.master),n.connect(this.master),this.amb={cicada:t,night:n};let r=e.sampleRate*2,i=e.createBuffer(1,r,e.sampleRate),a=i.getChannelData(0),o=0;for(let e=0;e<r;e++)o=o*.97+(Math.random()*2-1)*.03,a[e]=o;let s=e.createBufferSource();s.buffer=i,s.loop=!0;let c=e.createGain();c.gain.value=.35;let l=e.createOscillator();l.frequency.value=.12;let u=e.createGain();u.gain.value=.2,l.connect(u).connect(c.gain),s.connect(c).connect(this.master),s.start(),l.start(),this.ambTimer=window.setInterval(()=>this.ambienceTick(),180)}setAmbience(e){if(this.ambRole=e,!this.ctx||!this.amb)return;let t=this.ctx.currentTime;this.amb.cicada.gain.setTargetAtTime(e===0?1:.15,t,.8),this.amb.night.gain.setTargetAtTime(e===1?1:.15,t,.8)}ambienceTick(){let e=this.ctx;if(!e||e.state!==`running`||!this.amb)return;let t=e.currentTime+.05;if(Math.random()<.09){let n=e.createOscillator();n.type=`sawtooth`,n.frequency.value=5200+Math.random()*900;let r=e.createOscillator();r.frequency.value=22+Math.random()*8;let i=e.createGain();i.gain.value=.5;let a=e.createGain();a.gain.value=0;let o=e.createBiquadFilter();o.type=`bandpass`,o.frequency.value=5600,o.Q.value=3,r.connect(i).connect(a.gain);let s=1.6+Math.random()*1.6,c=e.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.012,t+.4),c.gain.setValueAtTime(.012,t+s-.5),c.gain.linearRampToValueAtTime(0,t+s),n.connect(o).connect(a).connect(c).connect(this.amb.cicada),n.start(t),r.start(t),n.stop(t+s),r.stop(t+s)}if(Math.random()<.28){let n=4300+Math.random()*500;for(let r=0;r<3;r++){let i=e.createOscillator();i.type=`sine`,i.frequency.value=n;let a=e.createGain(),o=t+r*.07;a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.02,o+.01),a.gain.exponentialRampToValueAtTime(5e-4,o+.05),i.connect(a).connect(this.amb.night),i.start(o),i.stop(o+.06)}}if(Math.random()<.05)for(let n=0;n<2;n++){let r=e.createOscillator();r.type=`square`,r.frequency.setValueAtTime(190+Math.random()*40,t+n*.16),r.frequency.exponentialRampToValueAtTime(130,t+n*.16+.12);let i=e.createBiquadFilter();i.type=`lowpass`,i.frequency.value=700;let a=e.createGain(),o=t+n*.16;a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.03,o+.02),a.gain.exponentialRampToValueAtTime(5e-4,o+.13),r.connect(i).connect(a).connect(this.amb.night),r.start(o),r.stop(o+.14)}}tone(e,t,n,r,i,a=0){let o=this.ctx,s=o.currentTime+a,c=o.createOscillator();c.type=e,c.frequency.setValueAtTime(t,s),c.frequency.exponentialRampToValueAtTime(Math.max(20,n),s+r);let l=o.createGain();l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(i,s+.008),l.gain.exponentialRampToValueAtTime(5e-4,s+r),c.connect(l).connect(this.sfxBus),c.start(s),c.stop(s+r+.05)}noise(e,t,n,r,i=1,a=0){let o=this.ctx,s=o.currentTime+a,c=Math.floor(o.sampleRate*e),l=o.createBuffer(1,c,o.sampleRate),u=l.getChannelData(0);for(let e=0;e<c;e++)u[e]=Math.random()*2-1;let d=o.createBufferSource();d.buffer=l;let f=o.createBiquadFilter();f.type=`bandpass`,f.Q.value=i,f.frequency.setValueAtTime(n,s),f.frequency.exponentialRampToValueAtTime(r,s+e);let p=o.createGain();p.gain.setValueAtTime(t,s),p.gain.exponentialRampToValueAtTime(5e-4,s+e),d.connect(f).connect(p).connect(this.sfxBus),d.start(s)}chime(e,t,n=.8,r=!1){let i=this.ctx;e.forEach((e,a)=>{let o=i.currentTime+a*t;r?this.glassBell(Mu(e),o,n,this.sfxBus):this.musicBox(Mu(e),o,n,this.sfxBus)})}play(e,t=1){if(this.ctx&&this.ctx.state===`running`)switch(e){case`jump`:this.tone(`sine`,380,720,.13,.07*t);break;case`land`:this.noise(.06,.05*t,900,400,.8);break;case`splash`:this.noise(.5,.14*t,1600,350,.7),this.tone(`sine`,320,140,.28,.1*t,.02);break;case`pop`:this.tone(`sine`,520,980,.12,.09*t),this.tone(`sine`,780,1300,.1,.05*t,.07);break;case`pickup`:this.chime([84,88,91],.07,.7*t);break;case`drop`:this.noise(.18,.05*t,2500,800,.6);break;case`transfer`:this.chime([79,86,91,98],.09,.6*t,!0),this.noise(.4,.08*t,1400,300,.7);break;case`light`:this.chime([81,84,88,91,93],.06,.6*t);break;case`bridge`:this.chime([72,76,79,81,84,88,91,96],.085,.45*t,!0);break;case`buoy`:this.tone(`sine`,140,90,.4,.07*t),this.noise(.3,.03*t,600,200,1.2);break;case`place`:this.chime([65,72,77,81,84],.12,.7*t,!0);break;case`ending`:this.chime([65,69,72,76,77,81,84,88,89,93,96],.16,.6*t,!0);break;case`emote`:this.tone(`sine`,660,990,.08,.06*t);break;case`ui`:this.tone(`triangle`,880,990,.05,.04*t);break;case`type`:this.tone(`triangle`,1200+Math.random()*200,1100,.025,.012*t);break;case`swap`:this.tone(`sine`,300,900,.35,.06*t),this.tone(`sine`,900,300,.35,.05*t,.25);break;case`shutter`:this.noise(.04,.12*t,4e3,2500,.9),this.noise(.06,.08*t,3e3,1800,.9,.09),this.chime([96],0,.3*t,!0);break;case`ping`:this.chime([91,96],.05,.35*t,!0);break;case`dig`:for(let e=0;e<3;e++)this.noise(.12,.08*t,900,300,.8,e*.18);break;case`chirp`:for(let e=0;e<3;e++)this.tone(`sine`,2400+e*200,3400,.06,.05*t,e*.09);break;case`chime`:this.chime([91,95,98],.14,.6*t,!0);break;case`radio`:this.noise(.5,.05*t,3e3,2e3,.5),this.chime([69,72,74,76,74,72,69,67,69],.22,.45*t);break;case`page`:this.noise(.25,.06*t,5e3,2500,.7);break;case`keep`:this.chime([84,88,91,96,100],.07,.55*t,!0);break;case`fish`:this.tone(`sine`,500,220,.15,.08*t),this.tone(`sine`,700,300,.12,.06*t,.18);break;case`grow`:this.tone(`sine`,220,660,.9,.05*t),this.chime([72,79,84,88],.12,.45*t)}}},Iu=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Lu=`
precision highp float;
uniform sampler2D tOwn;
uniform sampler2D tOwnDepth;
uniform sampler2D tOther;
uniform mat4 projInv;
uniform mat4 camWorld;
uniform vec3 camPos;
uniform vec2 res;
uniform float time;
uniform float side;
uniform vec3 waterTint;
uniform vec3 skyRefl;
uniform vec3 sparkleColor;
uniform vec3 foamColor;
uniform vec3 partnerColor;
uniform vec3 partner;
uniform vec4 ripples[6];
uniform float clarity;
varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 viewPos(vec2 uv, float depth) {
  vec4 ndc = vec4(uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
  vec4 v = projInv * ndc;
  return v.xyz / v.w;
}

vec3 sampleOther(vec2 uv, float blur) {
  vec2 px = 1.0 / res;
  vec3 c = texture2D(tOther, uv).rgb * 0.4;
  c += texture2D(tOther, uv + vec2(blur, 0.0) * px).rgb * 0.15;
  c += texture2D(tOther, uv - vec2(blur, 0.0) * px).rgb * 0.15;
  c += texture2D(tOther, uv + vec2(0.0, blur) * px).rgb * 0.15;
  c += texture2D(tOther, uv - vec2(0.0, blur) * px).rgb * 0.15;
  return c;
}

void main() {
  vec3 own = texture2D(tOwn, vUv).rgb;
  float depth = texture2D(tOwnDepth, vUv).x;
  float tOwnD = depth >= 0.99999 ? 1e6 : length(viewPos(vUv, depth));

  vec3 dirV = normalize(viewPos(vUv, 1.0));
  vec3 dir = normalize((camWorld * vec4(dirV, 0.0)).xyz);
  float tPlane = 1e6;
  if (dir.y * side < -1e-4) tPlane = -camPos.y / dir.y;

  vec3 col = own;
  float foam = 0.0;
  if (tPlane < tOwnD) {
    vec3 hit = camPos + dir * tPlane;
    float nearK = clamp(16.0 / tPlane, 0.2, 1.0);
    vec2 off = vec2(
      sin(hit.x * 2.1 + time * 1.5) + 0.6 * sin(hit.z * 3.3 - time * 1.1 + hit.x),
      0.5 * cos(hit.x * 1.6 - time * 1.2) + sin(hit.z * 2.4 + time * 0.8)
    );
    float ringGlow = 0.0;
    for (int i = 0; i < 6; i++) {
      vec4 rp = ripples[i];
      float age = time - rp.z;
      if (rp.w > 0.0 && age > 0.0 && age < 2.4) {
        float dist = length(hit.xz - rp.xy);
        float front = age * 2.6;
        float band = exp(-pow((dist - front) * 3.2, 2.0));
        float fade = (1.0 - age / 2.4) * rp.w;
        off += vec2(1.0, 1.4) * sin((dist - front) * 10.0) * band * fade * 2.6;
        ringGlow += band * fade;
      }
    }
    float wob = mix(1.25, 0.15, clarity) * nearK;
    vec2 uv2 = clamp(vUv + off * wob / res, vec2(0.001), vec2(0.999));
    vec3 o = sampleOther(uv2, mix(1.6, 0.0, clarity));

    float cosT = abs(dir.y);
    float fres = (0.06 + 0.5 * pow(1.0 - cosT, 5.0)) * (1.0 - clarity * 0.8);
    vec3 water = mix(o * waterTint, skyRefl, fres);

    // 윤슬: 월드 공간 격자마다 작은 반짝임 하나. 가까울수록 점을 작게 해서 화면에서는 1~2px로 보여요.
    vec2 gp = vec2(hit.x * 4.0 + sin(hit.z * 0.7 + time * 0.3) * 1.2, hit.z * 2.0 + time * 0.25);
    vec2 cell = floor(gp);
    vec2 fc = fract(gp) - 0.5;
    float h = hash(cell);
    float tw = pow(0.5 + 0.5 * sin(time * 2.4 + h * 60.0), 6.0);
    float rad = clamp(tPlane / 90.0, 0.07, 0.5);
    float dotm = step(length(fc * vec2(1.0, 2.2)), rad);
    float sparkle = step(0.85, h) * tw * dotm * (0.5 + 0.8 * (1.0 - cosT));
    water += sparkleColor * sparkle;
    water += sparkleColor * ringGlow * 0.3;

    foam = 1.0 - smoothstep(0.0, 0.45, tOwnD - tPlane);
    col = water;
  } else if (tPlane < 1e5) {
    foam = (1.0 - smoothstep(0.0, 0.22, tPlane - tOwnD)) * 0.8;
  }
  float foamWave = 0.6 + 0.4 * sin(time * 2.0 + vUv.x * 60.0);
  col = mix(col, foamColor, clamp(foam * foamWave, 0.0, 1.0) * 0.55);

  // 마음빛: 수면 너머 상대의 위치
  vec2 pd = (vUv - partner.xy) * vec2(res.x / res.y, 1.0);
  float g = exp(-dot(pd, pd) * 700.0) * partner.z;
  col += partnerColor * g * 0.32;

  gl_FragColor = vec4(col, 1.0);
}
`,Ru=`
precision highp float;
uniform sampler2D tInput;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tInput, vUv).rgb;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  c *= smoothstep(0.55, 1.0, l);
  gl_FragColor = vec4(c, 1.0);
}
`,zu=`
precision highp float;
uniform sampler2D tInput;
uniform vec2 dir;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tInput, vUv).rgb * 0.2270270270;
  c += texture2D(tInput, vUv + dir * 1.3846153846).rgb * 0.3162162162;
  c += texture2D(tInput, vUv - dir * 1.3846153846).rgb * 0.3162162162;
  c += texture2D(tInput, vUv + dir * 3.2307692308).rgb * 0.0702702703;
  c += texture2D(tInput, vUv - dir * 3.2307692308).rgb * 0.0702702703;
  gl_FragColor = vec4(c, 1.0);
}
`,Bu=`
precision highp float;
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform float bloomAmt;
uniform float texW;
uniform float scrW;
uniform float sAmt;
uniform float fade;
uniform vec3 fadeColor;
uniform float vignette;
uniform float glow;
varying vec2 vUv;
void main() {
  float s = sign(sAmt) * max(abs(sAmt), 0.002);
  float y = texW + (vUv.y - scrW) / s;
  vec3 col;
  if (y < 0.0 || y > 1.0) {
    col = fadeColor;
  } else {
    vec2 suv = vec2(vUv.x, y);
    col = texture2D(tScene, suv).rgb;
    vec3 bl = texture2D(tBloom, suv).rgb;
    col = 1.0 - (1.0 - col) * (1.0 - clamp(bl * bloomAmt, 0.0, 1.0));
  }
  vec2 d = vUv - 0.5;
  col *= 1.0 - dot(d, d) * vignette;
  col += vec3(1.0, 0.95, 0.85) * glow;
  col = mix(col, fadeColor, fade);
  gl_FragColor = vec4(col, 1.0);
}
`,Vu=`
attribute float size;
attribute float alpha;
attribute vec3 pcolor;
uniform float pxScale;
varying float vAlpha;
varying vec3 vColor;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = max(1.0, size * pxScale / -mv.z);
  vAlpha = alpha;
  vColor = pcolor;
}
`,Hu=`
precision highp float;
varying float vAlpha;
varying vec3 vColor;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p);
  float a = smoothstep(0.5, 0.15, d) * vAlpha;
  if (a < 0.02) discard;
  gl_FragColor = vec4(vColor, a);
}
`;function Uu(e,t,n){let r=t*e.travel;return n===e.owner?e.top[n]-r:e.top[n]+r}function Wu(e){return e.items.map(e=>({id:e.id,world:e.world,mode:`ground`,x:e.x,y:e.y,vx:0,vy:0,holder:-1}))}function Gu(e={}){let t=y(e.chapter??`ch1`),n={};for(let e of t.buoys)n[e.id]=0;return{v:2,round:e.round??1,chapter:t.id,phase:`play`,flags:{},buoys:n,items:Wu(t),ready:[!1,!1],song:0,songX:0,flash:0,magpies:[],ng:!!e.ng,keeps:[],diary:[],splashes:[0,0],t:0}}function Ku(e){let t=b(e.chapter);if(!t)return e.phase=`done`,!1;let n=Gu({chapter:t,round:e.round,ng:e.ng});return n.keeps=e.keeps,n.diary=e.diary,Object.assign(e,n),!0}function qu(e){return{...e,flags:{...e.flags},buoys:{...e.buoys},items:e.items.map(e=>({...e})),ready:[e.ready[0],e.ready[1]],magpies:e.magpies.slice(),keeps:e.keeps.slice(),diary:e.diary.slice(),splashes:[e.splashes[0],e.splashes[1]]}}var Ju=e=>`lit:${e}`;function Yu(e){let t=(e.x0+e.x1)/2,n=(e.x1-e.x0)/2;return e.kind===`moon`?r=>{let i=r-t;return Math.abs(i)>=n?null:Math.sqrt(n*n-i*i)*(e.h/n)}:t=>{if(t<=e.x0||t>=e.x1)return null;let n=(t-e.x0)/(e.x1-e.x0);return 1.5+(e.h-1.5)*Math.sin(Math.PI*n)}}function Xu(e,t){return e.arcs.filter(e=>!e.when||e.when(t)).map(e=>({id:e.id,x0:e.x0,x1:e.x1,top:Yu(e)}))}function Zu(e,t,n,r){let i=[];e.solids[t].forEach((e,t)=>i.push({x0:e.x0,x1:e.x1,y0:e.y0,y1:e.y1,oneWay:!1,kind:`solid`,id:`s${t}`}));for(let r of e.bridges)r.world===t&&r.when(n)&&r.segs.forEach((e,t)=>i.push({...e,oneWay:!0,kind:`bridge`,id:`${r.id}:${t}`}));for(let n of e.hidden)n.world===t&&i.push({x0:n.x-n.w/2,x1:n.x+n.w/2,y0:n.top-.3,y1:n.top,oneWay:!0,kind:`bridge`,id:`stone:${n.id}`});for(let n of e.buoys){let e=Uu(n,r[n.id]??0,t);i.push({x0:n.x-n.w/2,x1:n.x+n.w/2,y0:-.8,y1:e,oneWay:!1,kind:`buoy`,id:n.id})}return i}function Qu(e,t,n,r){for(let i of e.solids[t])if(n>=i.x0&&n<=i.x1&&r>=i.y0&&r<=i.y1)return i;return null}var $u=16;function ed(t,n,r,i){let a=y(t.chapter),o=[];t.t+=n;let s=e=>r.find(t=>t.role===e);for(let e of a.buoys){let r=s(e.owner),i=!!r?.present&&r.state?.g===`buoy`&&r.state.gid===e.id&&!r.state.hidden,a=+!!i,o=t.buoys[e.id]??0,c=1-Math.exp(-n*(i?2.4:1.8)),l=o+(a-o)*c;Math.abs(l-a)<.002&&(l=a),t.buoys[e.id]=l}for(let r of t.items){if(r.mode!==`falling`)continue;let i=a.items.find(e=>e.id===r.id),s=r.y;r.vy=Math.max(r.vy-$u*n,-14);let c=r.x+r.vx*n;Qu(a,r.world,c,r.y+.05)&&!Qu(a,r.world,r.x,r.y+.05)?r.vx=0:r.x=c,r.x=Math.min(a.maxX-.5,Math.max(a.minX+.5,r.x)),r.y+=r.vy*n;for(let e of a.buoys){let n=Uu(e,t.buoys[e.id]??0,r.world);if(Math.abs(r.x-e.x)<e.w/2+.1&&r.y<=n+.05&&s>=n-.15){let t=r.x>=e.x?1:-1;r.x=e.x+t*(e.w/2+.25),r.vx=t*1.2,r.y=Math.min(r.y,n)}}for(let e of a.solids[r.world])if(r.x>=e.x0&&r.x<=e.x1&&r.y<=e.y1&&s>=e.y1-.08){r.y=e.y1,r.mode=`ground`,r.vx=0,r.vy=0,o.push({e:`land`,id:r.id});break}if(r.mode===`falling`&&r.y<0){if(i&&!i.crosses){r.world=i.world,r.x=i.x,r.y=i.y,r.vx=0,r.vy=0,r.mode=`ground`,o.push({e:`respawn`,id:r.id});continue}let t=e(r.world);r.world=t,r.vx=0,r.vy=0;for(let e of a.buoys)Math.abs(r.x-e.x)<e.w/2+.2&&(r.x=e.x+(r.x>=e.x?1:-1)*(e.w/2+.3));let n=Qu(a,t,r.x,.1);n?(r.y=n.y1,r.mode=`ground`):(r.y=.04,r.mode=`floating`),o.push({e:`transfer`,id:r.id,to:t,x:r.x})}}t.song>0&&(t.song=Math.max(0,t.song-n));let c=s(1)?.state,l=t.song>0&&!!c&&!c.hidden;for(let e of a.songZones){let n=l&&c.x>=e.x0&&c.x<=e.x1;t.flags[e.flag]=n}if(l){for(let e of a.lights)e.bySong&&e.world===1&&!t.flags[Ju(e.id)]&&Math.abs(c.x-e.x)<1.6&&Math.abs(c.y-e.y)<1.6&&(t.flags[Ju(e.id)]=!0);for(let e of a.magpies)e.call===`song`&&e.world===1&&!t.magpies.includes(e.id)&&Math.abs(c.x-e.x)<2.4&&Math.abs(c.y-e.y)<3&&t.magpies.push(e.id)}if(t.flash>0&&(t.flash=Math.max(0,t.flash-n)),t.phase===`play`&&a.goal&&a.goal.when(t)){let e=a.goal.arc?a.arcs.find(e=>e.id===a.goal.arc):void 0;if(!a.goal.arc)t.phase=`outro`,t.ready=[!1,!1],o.push({e:`goal`});else if(e){let n=(e.x0+e.x1)/2,r=t=>{let r=s(t)?.state;return!!s(t)?.present&&!!r&&!r.hidden&&r.g===`arc`&&r.gid===e.id&&Math.abs(r.x-n)<a.goal.near};r(0)&&r(1)&&(t.phase=`outro`,t.ready=[!1,!1],o.push({e:`goal`}))}}return t.phase===`outro`&&(i?t.ready[0]||t.ready[1]:t.ready[0]&&t.ready[1])&&Ku(t)&&o.push({e:`advance`,chapter:t.chapter}),o}function td(e,t){let n=y(e.chapter);switch(t.k){case`light`:{let r=n.lights.find(e=>e.id===t.id);return!r||r.world!==t.r||e.flags[Ju(r.id)]?!1:(e.flags[Ju(r.id)]=!0,!0)}case`pickup`:{let n=e.items.find(e=>e.id===t.id);return!n||n.mode===`held`||n.mode===`placed`||n.mode===`used`||e.items.some(e=>e.holder===t.r&&e.mode===`held`)?!1:(n.mode=`held`,n.holder=t.r,n.world=t.r,n.vx=0,n.vy=0,!0)}case`drop`:{let n=e.items.find(e=>e.id===t.id);return!n||n.holder!==t.r||n.mode!==`held`?!1:(n.mode=`falling`,n.holder=-1,n.world=t.r,n.x=t.x,n.y=t.y,n.vx=t.vx,n.vy=t.vy,!0)}case`place`:{let r=n.sockets.find(e=>e.id===t.id);if(!r||r.world!==t.r||e.flags[r.flag])return!1;let i=e.items.find(e=>e.holder===t.r&&e.mode===`held`&&n.items.find(t=>t.id===e.id)?.kind===r.accepts);return i?(i.mode=`placed`,i.holder=-1,i.world=r.world,i.x=r.x,i.y=r.y,e.flags[r.flag]=!0,!0):!1}case`use`:{let r=n.uses.find(e=>e.id===t.id);if(!r||r.world!==t.r||e.flags[r.flag]||r.when&&!r.when(e))return!1;if(r.needs){let i=e.items.find(e=>e.holder===t.r&&e.mode===`held`&&n.items.find(t=>t.id===e.id)?.kind===r.needs);if(!i)return!1;i.mode=`used`,i.holder=-1}return e.flags[r.flag]=!0,r.keep&&!e.keeps.includes(r.keep)&&e.keeps.push(r.keep),!0}case`sing`:return t.r===1&&(e.song=.45,e.songX=t.x,!0);case`flash`:return t.r!==0||e.flash>.4?!1:(e.flash=1.6,!0);case`magpie`:{let r=n.magpies.find(e=>e.id===t.id);return!r||r.world!==t.r||e.magpies.includes(r.id)?!1:(e.magpies.push(r.id),!0)}case`keep`:return!e.keeps.includes(t.id)&&(e.keeps.push(t.id),!0);case`diary`:return!e.ng||e.diary.includes(t.id)?!1:(e.diary.push(t.id),!0);case`ready`:return e.phase!==`outro`||t.chapter!==e.chapter?!1:(e.ready[t.r]=!0,!0);case`splash`:return e.splashes[t.r]++,!0;case`reset`:{let n=e.round+1;return Object.assign(e,Gu({chapter:`ch1`,round:n,ng:t.ng})),!0}case`goto`:{let n=e.round+1,r=e.keeps,i=e.diary;return Object.assign(e,Gu({chapter:t.chapter,round:n,ng:e.ng})),e.keeps=r,e.diary=i,!0}}}function q(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`,{willReadFrequently:!0});return r.imageSmoothingEnabled=!1,[n,r]}function J(e,t=!1,n=!1){let r=new zi(e);return r.magFilter=n?k:E,r.minFilter=n?k:E,r.generateMipmaps=!1,t&&(r.wrapS=C,r.wrapT=C),r.needsUpdate=!0,r}function nd(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Y(e,t,n,r){e.fillStyle=r,e.fillRect(t,n,1,1)}function X(e,t,n,r,i,a){e.fillStyle=a,e.fillRect(t,n,r,i)}function Z(e,t,n,r,i,a,o){for(let s=Math.floor(n-i-1);s<=Math.ceil(n+i+1);s++)for(let c=Math.floor(t-r-1);c<=Math.ceil(t+r+1);c++){let l=(c+.5-t)/r,u=(s+.5-n)/i;l*l+u*u<=1&&(!o||o(c,s))&&Y(e,c,s,a)}}function rd(e,t,n,r,i,a){let o=e.getImageData(t,n,r,i).data,s=(e,t)=>e>=0&&t>=0&&e<r&&t<i&&o[(t*r+e)*4+3]>0,c=[];for(let e=0;e<i;e++)for(let t=0;t<r;t++)s(t,e)||(s(t-1,e)||s(t+1,e)||s(t,e-1)||s(t,e+1))&&c.push([t,e]);for(let[r,i]of c)Y(e,t+r,n+i,a)}function id(e){let t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]}var ad=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]];function od(e,t,n,r){let i=r.length-1,a=r.map(id),o=e.createImageData(t,n),s=o.data;for(let e=0;e<n;e++){let r=e/(n-1)*i,o=Math.min(i-1,Math.floor(r)),c=(r-o)*6,l=Math.floor(c),u=c-l;for(let n=0;n<t;n++){let r=(ad[e%4][n%4]+.5)/16,i=Math.min(6,l+ +(u>r))/6,c=(e*t+n)*4;for(let e=0;e<3;e++)s[c+e]=Math.round(a[o][e]+(a[o+1][e]-a[o][e])*i);s[c+3]=255}}e.putImageData(o,0,0)}function sd(e,t=`ground`){let n=nd(e===0?11:29),r=e===0?{lip:`#a6e39f`,lipLight:`#c9f5b9`,lipDark:`#7fcb8e`,fill:`#f3d2b3`,fillDark:`#e5b995`,fillLight:`#fbe3c8`,speck:`#d9a383`,top:`#b2e8a6`,topDark:`#94d897`,topLight:`#d3f7c2`,flower:[`#ffb3c7`,`#fff5f8`,`#ffe39a`]}:{lip:`#7fd0b4`,lipLight:`#bff2df`,lipDark:`#57a592`,fill:`#6d5f9e`,fillDark:`#594c8a`,fillLight:`#8676b8`,speck:`#a99ae0`,top:`#6fc2aa`,topDark:`#4fa08f`,topLight:`#a6e8d2`,flower:[`#fff3a8`,`#f4efff`,`#ffd6f5`]};if(t===`deck`){let e=[`#d9b08c`,`#caa07e`,`#e6c19f`],[t,r]=q(16,16);X(r,0,0,16,16,`#b88d6e`),X(r,0,0,16,3,`#ecd0b2`),X(r,0,3,16,1,`#9c7359`);for(let e=1;e<16;e+=5)X(r,e,4,2,12,`#a47c62`);Y(r,3,8,`#8a634d`),Y(r,12,11,`#8a634d`);let[i,a]=q(16,16);X(a,0,0,16,16,`#9c7a63`);for(let e=1;e<16;e+=5)X(a,e,0,2,16,`#8a6a55`);for(let e=0;e<10;e++)Y(a,Math.floor(n()*16),Math.floor(n()*16),`#ad8a72`);let[o,s]=q(16,16);for(let t=0;t<16;t++)X(s,0,t,16,1,e[Math.floor(t/4)%3]);for(let e=3;e<16;e+=4)X(s,0,e,16,1,`#b48d70`);return Y(s,5,1,`#b48d70`),Y(s,11,9,`#b48d70`),{front:J(t,!0),fill:J(i,!0),top:J(o,!0)}}let[i,a]=q(16,16);X(a,0,0,16,16,r.fill);for(let e=0;e<26;e++)Y(a,Math.floor(n()*16),5+Math.floor(n()*11),n()<.5?r.fillDark:r.fillLight);for(let e=0;e<16;e++){let t=3+ +(n()<.35)+ +(e%5==2);for(let n=0;n<t;n++)Y(a,e,n,n===0?r.lipLight:n===t-1?r.lipDark:r.lip)}Y(a,3,9,r.speck),Y(a,11,12,r.speck),Y(a,12,12,r.speck);let[o,s]=q(16,16);X(s,0,0,16,16,r.fill);for(let e=0;e<30;e++)Y(s,Math.floor(n()*16),Math.floor(n()*16),n()<.55?r.fillDark:r.fillLight);for(let e=0;e<3;e++){let e=Math.floor(n()*14),t=Math.floor(n()*14);Y(s,e,t,r.speck),Y(s,e+1,t,r.speck),Y(s,e,t+1,r.fillDark)}let[c,l]=q(16,16);X(l,0,0,16,16,r.top);for(let e=0;e<40;e++)Y(l,Math.floor(n()*16),Math.floor(n()*16),n()<.5?r.topDark:r.topLight);for(let e=0;e<3;e++)Y(l,Math.floor(n()*15),Math.floor(n()*15),r.flower[e%3]);return{front:J(i,!0),fill:J(o,!0),top:J(c,!0)}}function cd(){let[e,t]=q(64,64),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.25,`rgba(255,255,255,0.55)`),n.addColorStop(.6,`rgba(255,255,255,0.14)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),J(e,!1,!0)}function ld(e){let[t,n]=q(16,32),r=`#8d6457`;X(n,7,10,2,22,`#b98a74`),X(n,8,10,1,22,r),X(n,5,10,7,1,r),X(n,4,12,8,1,`#8e6f8a`),X(n,5,11,6,1,`#a986a4`);let i=e?`#fff3b8`:`#ddd5f0`;return X(n,5,13,6,7,e?`#ffd27a`:`#bdb3dd`),X(n,6,14,4,5,i),e?X(n,7,15,2,3,`#ffffff`):(Y(n,7,17,`#8e6f8a`),Y(n,8,17,`#8e6f8a`)),X(n,5,20,6,1,`#8e6f8a`),X(n,5,30,6,2,r),Y(n,6,27,`#ffb3c7`),Y(n,10,25,`#ffe39a`),Y(n,9,28,`#9fdc9c`),rd(n,0,0,16,32,`#5a3a57`),J(t)}function ud(e){let[t,n]=q(16,24);if(X(n,7,11,2,13,`#5fbfba`),Z(n,4.5,18.5,3,1.4,`#6fd3c4`),Z(n,11.5,16.5,3,1.4,`#6fd3c4`),e){for(let[e,t]of[[0,-4],[-4,-1],[4,-1],[-3,3],[3,3]])Z(n,8+e,8+t,2.6,2.6,`#f4efff`);Z(n,8,8,2.4,2.4,`#fff6c8`),X(n,7,7,2,2,`#ffffff`)}else Z(n,8,8,2.8,4,`#b8a9ff`),Z(n,7,8,1.2,3,`#9d8cf0`),Y(n,8,4,`#e9e3ff`);return rd(n,0,0,16,24,`#2a2350`),J(t)}function dd(){let[e,t]=q(16,8);X(t,0,3,16,3,`rgba(255,240,170,0.55)`),X(t,0,4,16,1,`rgba(255,255,230,0.9)`);let n=(e,n)=>{Y(t,e,n-1,`#fff6c0`),Y(t,e-1,n,`#fff6c0`),Y(t,e,n,`#ffffff`),Y(t,e+1,n,`#fff6c0`),Y(t,e,n+1,`#fff6c0`)};return n(3,4),n(11,3),Y(t,7,6,`#ffe98a`),Y(t,14,6,`#ffe98a`),J(e,!0)}function fd(e){let[t,n]=q(24,12);return Z(n,12,9,11,2.6,`#7fcf8e`),Z(n,12,8.6,9.5,1.9,`#a6e39f`),X(n,12,7,1,3,`#7fcf8e`),Y(n,6,8,`#d3f7c2`),Y(n,16,9,`#d3f7c2`),e&&(Z(n,15,5.5,2.2,2.4,`#ffb3c7`),Z(n,13,6.5,1.6,1.4,`#ffc9d6`),Z(n,17,6.5,1.6,1.4,`#ffc9d6`),Y(n,15,5,`#fff5f8`)),rd(n,0,0,24,12,`#4f7a64`),J(t)}function pd(e){if(e===`stone`||e===`stoneMoss`){let[t,n]=q(16,16);X(n,0,0,16,16,e===`stone`?`#b9aec2`:`#a89fb5`);for(let e=0;e<16;e+=5)X(n,0,e,16,1,`#8f84a3`);for(let e=0;e<16;e+=5)X(n,e*3%11,e+1,1,4,`#8f84a3`);if(X(n,0,2,16,1,`#d8d0dc`),e===`stoneMoss`){let e=nd(15);for(let t=0;t<18;t++)Y(n,Math.floor(e()*16),Math.floor(e()*16),e()<.5?`#a6d8a0`:`#86c08a`)}return J(t,!0)}let[t,n]=q(16,16);if(e===`wood`||e===`woodMoss`){X(n,0,0,16,16,`#c79a7f`);for(let e=0;e<16;e+=4)X(n,e,0,1,16,`#a67c67`);if(X(n,0,6,16,2,`#e8c7a4`),X(n,0,7,16,1,`#b3876f`),e===`woodMoss`){let e=nd(5);for(let t=0;t<22;t++)Y(n,Math.floor(e()*16),Math.floor(e()*16),e()<.5?`#8ee6d8`:`#5fbfba`);Y(n,3,3,`#e8fffb`),Y(n,12,11,`#e8fffb`)}else Y(n,2,12,`#ffb3c7`),Y(n,10,2,`#a6e39f`)}else if(e===`crystal`){X(n,0,0,16,16,`#a78bfa`);for(let e=0;e<16;e++)Y(n,e*2%16,e,`#d8ccff`),Y(n,(e*2+1)%16,e,`#c4b5fd`),Y(n,(20-e)%16,e,`#7e6fd1`);Y(n,5,5,`#ffffff`)}else{X(n,0,0,16,16,`#b7d3f0`);for(let e=0;e<16;e++)Y(n,e*3%16,e,`#dcecfb`);for(let e=0;e<16;e++)Y(n,(e*3+7)%16,e,`#98badf`);Y(n,4,4,`#ffffff`)}return J(t,!0)}function md(e){let[t,n]=q(16,28),r=`#d8d0dc`,i=`#b9aec2`,a=`#a6d8a0`;return X(n,3,24,10,4,i),X(n,4,23,8,1,r),X(n,6,14,4,9,r),X(n,6,14,1,9,i),X(n,3,12,10,2,r),X(n,4,6,8,6,r),X(n,4,6,1,6,i),X(n,6,7,4,4,e?`#fff1b8`:`#8a7f95`),e&&X(n,7,8,2,2,`#ffffff`),X(n,2,4,12,2,r),X(n,3,3,10,1,`#e8e2ec`),X(n,6,1,4,2,r),X(n,7,0,2,1,i),Y(n,4,25,a),Y(n,11,24,a),Y(n,5,13,a),rd(n,0,0,16,28,`#5a3a57`),J(t)}function hd(e=!1){let[t,n]=q(10,10);return Z(n,5,5,4,4,e?`#dfe8ee`:`#cdf3ff`),Z(n,5.5,5.5,3,3,e?`#eef2f4`:`#e9fbff`),Y(n,4,5,e?`#e8b7c6`:`#ff8fb0`),Y(n,5,6,e?`#e8b7c6`:`#ff8fb0`),Y(n,6,6,e?`#c8d6a8`:`#8fdc7a`),Y(n,6,4,e?`#d8cfa0`:`#ffd24a`),Y(n,3,3,`#ffffff`),Y(n,4,3,`#ffffff`),rd(n,0,0,10,10,`#4b6a86`),J(t)}function gd(e){let[t,n]=q(16,16),r=e===0?`#f7e6dc`:`#b8a9ff`,i=e===0?`#e0c3c0`:`#8f7fe0`,a=e===0?`#fff6f0`:`#e2dbff`;X(n,0,0,16,16,r);for(let e=0;e<16;e+=4){X(n,0,e,16,1,i);let t=e/4%2==0?0:4;for(let r=t;r<16;r+=8)X(n,r,e,1,4,i);X(n,0,e+1,16,1,a)}return e===0?(Y(n,5,10,`#ffb3c7`),Y(n,12,2,`#a6e39f`)):(Y(n,5,10,`#fff3a8`),Y(n,12,2,`#c8fff4`)),J(t,!0)}function _d(){let[e,t]=q(16,8);return Z(t,8,4,7,3,`rgba(60,30,70,0.28)`),Z(t,8,4,5,2,`rgba(60,30,70,0.18)`),J(e)}function vd(e,t){let n=nd(100+t*13+e.length*7);if(e===`flowers`){let[e,r]=q(16,10),i=[`#ffb3c7`,`#fff5f8`,`#ffe39a`,`#d7c4ff`];for(let e=0;e<4;e++){let a=2+Math.floor(n()*12),o=3+Math.floor(n()*5);X(r,a,10-o,1,o,`#7fcb8e`);let s=i[(t+e)%i.length];Y(r,a,9-o,s),Y(r,a-1,10-o,s),Y(r,a+1,10-o,s),Y(r,a,11-o,s),Y(r,a,10-o,`#fff6c8`)}return{tex:J(e),w:16,h:10}}if(e===`primrose`){let[e,t]=q(16,12);for(let e=0;e<3;e++){let r=3+e*4+Math.floor(n()*2),i=5+Math.floor(n()*5);X(t,r,12-i,1,i,`#4fa08f`),Z(t,r+.5,12-i,1.8,1.4,`#fff08a`),Y(t,r,12-i,`#ffffff`),Y(t,r+1,13-i+2,`#6fc2aa`)}return{tex:J(e),w:16,h:12}}if(e===`tuft`||e===`nightTuft`){let[t,r]=q(8,6),i=e===`tuft`?`#94d897`:`#4fa08f`,a=e===`tuft`?`#b2e8a6`:`#6fc2aa`;for(let e=1;e<7;e++){let t=2+Math.floor(n()*4);X(r,e,6-t,1,t,e%2?i:a)}return{tex:J(t),w:8,h:6}}if(e===`bush`||e===`nightBush`){let t=e===`nightBush`,[r,i]=q(24,16);Z(i,8,10,7,6,t?`#4f8f86`:`#8fd6a0`),Z(i,15,9,8,7,t?`#5fa596`:`#a6e3ad`),Z(i,13,7,5,4,t?`#7fc2ad`:`#c3f0c4`);for(let e=0;e<5;e++)Y(i,4+Math.floor(n()*16),4+Math.floor(n()*9),t?n()<.5?`#fff3a8`:`#f4efff`:n()<.5?`#ffb3c7`:`#fff5f8`);return rd(i,0,0,24,16,t?`#2e5a5a`:`#5d8f76`),{tex:J(r),w:24,h:16}}if(e===`tree`){let[e,r]=q(40,48);X(r,18,24,4,24,`#b98a74`),X(r,21,24,1,24,`#8d6457`),X(r,14,30,5,2,`#b98a74`);let i=t%2==0,a=i?`#ffc4d4`:`#bfe8c8`,o=i?`#ffa9c0`:`#9fdcb0`,s=i?`#ffe3ea`:`#dcf7df`;Z(r,20,16,15,12,o),Z(r,13,19,9,8,a),Z(r,27,18,10,8,a),Z(r,19,11,9,7,s);for(let e=0;e<14;e++)Y(r,7+Math.floor(n()*26),6+Math.floor(n()*20),n()<.5?`#ffffff`:o);return rd(r,0,0,40,48,i?`#b0667e`:`#5d8f76`),{tex:J(e),w:40,h:48}}if(e===`pine`){let[e,t]=q(32,48);X(t,15,22,3,26,`#6e5a78`),X(t,17,22,1,26,`#54445f`),X(t,11,30,5,2,`#6e5a78`);for(let[e,n,r,i]of[[16,8,9,5],[12,16,8,4],[20,17,9,4],[16,24,12,5]])Z(t,e,n,r,i,`#3f7a74`),Z(t,e-1,n-1,r*.7,i*.6,`#5a9c8f`),Y(t,e-2,n-2,`#a6e8d2`);return rd(t,0,0,32,48,`#243f47`),{tex:J(e),w:32,h:48}}if(e===`stones`){let[e,t]=q(16,8);return Z(t,5,5.5,4,2.6,`#8a7fb0`),Z(t,11,6,3.4,2.2,`#9d92c2`),Y(t,4,4,`#c4bce6`),Y(t,10,5,`#c4bce6`),rd(t,0,0,16,8,`#3b3363`),{tex:J(e),w:16,h:8}}let[r,i]=q(12,20);for(let e=0;e<4;e++){let t=2+e*2+Math.floor(n()*2),r=8+Math.floor(n()*11);for(let n=0;n<r;n++)Y(i,t+(n>r/2&&e%2?1:0),20-n,e%2?`#4fa08f`:`#7fd0b4`);Y(i,t,20-r,`#e8d8a8`)}return{tex:J(r),w:12,h:20}}function yd(e,t=!1){let[n,r]=q(64,256);if(od(r,64,256,e===0?t?[`#5e62b8`,`#7f78cc`,`#b89ad8`,`#eaa9c6`,`#ffbfb0`,`#ffd4b0`]:[`#9fb4ff`,`#b9c2ff`,`#e7c6ff`,`#ffc6d9`,`#ffd9cf`,`#ffe8c8`]:[`#1f1d4a`,`#2b2a5a`,`#40397a`,`#5b4b9a`,`#8a74c4`,`#b39ddb`]),e===1){let e=nd(3);for(let t=0;t<70;t++)Y(r,Math.floor(e()*64),Math.floor(e()*200),e()<.2?`#fff3a8`:`#f4f0ff`)}else{let e=nd(8);for(let t=0;t<6;t++)Y(r,Math.floor(e()*64),Math.floor(e()*60),`#ffffff`)}return J(n,!0)}function bd(){let[e,t]=q(64,64);for(let e=0;e<64;e++)for(let n=0;n<64;n++){let r=Math.hypot(n+.5-32,e+.5-32),i=(ad[e%4][n%4]+.5)/16;r<13?Y(t,n,e,r<10?`#fff4d6`:`#ffe2b8`):r<22&&(22-r)/9>i+.25?Y(t,n,e,`rgba(255,226,196,0.55)`):r<31&&(31-r)/9>i+.55&&Y(t,n,e,`rgba(255,214,214,0.35)`)}return J(e)}function xd(e=`full`,t=!1){let[n,r]=q(64,64);for(let t=0;t<64;t++)for(let n=0;n<64;n++){let i=Math.hypot(n+.5-32,t+.5-32),a=(ad[t%4][n%4]+.5)/16,o=e===`full`||n+.5>=32;i<12?Y(r,n,t,o?`#fbf6ff`:`#4d4488`):i<21&&(21-i)/9>a+.3?Y(r,n,t,`rgba(220,210,255,0.45)`):i<30&&(30-i)/9>a+.6&&Y(r,n,t,`rgba(180,170,240,0.3)`)}if(e===`full`?(Z(r,28,29,2.5,2.5,`#e6def8`),Z(r,35,35,1.8,1.8,`#e6def8`),Z(r,34,26,1.2,1.2,`#ece6fb`)):(Z(r,37,29,1.8,1.8,`#e6def8`),Z(r,40,36,1.2,1.2,`#ece6fb`)),t){let e=`#d9cff5`;X(r,33,30,4,3,e),X(r,34,26,1,4,e),X(r,36,26,1,4,e),X(r,32,33,6,2,e),X(r,38,29,1,5,`#cbbfee`),X(r,37,34,3,2,`#cbbfee`)}return J(n)}function Sd(e){let[t,n]=q(64,24),r=nd(40+e),i=5+Math.floor(r()*3);for(let e=0;e<i;e++){let e=10+r()*44,t=12+(r()-.5)*6,i=5+r()*6;Z(n,e,t+1,i,i*.62,`#ffe0ea`)}for(let e=0;e<i;e++){let e=12+r()*40,t=10+(r()-.5)*5,i=4+r()*5;Z(n,e,t,i,i*.6,`#fff7fa`)}return J(t)}function Cd(e,t,n,r){let[i,a]=q(e,t),o=nd(n),s=Array.from({length:4},(t,n)=>({f:r.peaks*(n+1)*(.6+o()*.8)/e,p:o()*Math.PI*2,a:1/(n+1)})),c=[];for(let t=0;t<e;t++){let n=0;for(let e of s)n+=Math.sin(t*e.f*Math.PI*2+e.p)*e.a;n=n/2.1+.5,r.spiky&&(n=Math.abs(Math.sin(t*(r.peaks/e)*Math.PI+s[0].p))**3*.7+n*.3),n+=(o()-.5)*r.rough,c.push(Math.round(r.minH+n*(r.maxH-r.minH)))}let l=id(r.base),u=id(r.rim),d=id(r.shade),f=a.createImageData(e,t),p=f.data;for(let n=0;n<e;n++){let r=t-c[n];for(let i=Math.max(0,r);i<t;i++){let a=i-r,o=(ad[i%4][n%4]+.5)/16,s=l;a<1?s=u:a>t*.35&&(a-t*.35)/(t*.5)>o&&(s=d);let c=(i*e+n)*4;p[c]=s[0],p[c+1]=s[1],p[c+2]=s[2],p[c+3]=255}}return a.putImageData(f,0,0),J(i,!0)}var wd=[`idle0`,`idle1`,`walk0`,`walk1`,`walk2`,`walk3`,`jump`,`fall`,`blink`,`sit`,`act`],Td={0:{outline:`#5a3a57`,skin:`#ffe8da`,skinShade:`#f5c7b4`,eye:`#4a2f4f`,blush:`#ff9aab`,shoe:`#a0607a`},1:{outline:`#2a2350`,skin:`#fbe9ea`,skinShade:`#e3c6d4`,eye:`#2a2350`,blush:`#f5a3c3`,shoe:`#f4f0ff`}},Ed={pink:[`#ff9eb8`,`#e67b9d`,`#ffd4e0`],brown:[`#b98068`,`#94604f`,`#d9a88f`],sky:[`#9fd4ff`,`#74aee8`,`#d6efff`],mint:[`#9ee8cf`,`#6cc7ad`,`#d6fbef`],lavender:[`#bfb0ff`,`#8f7fe0`,`#e9e3ff`],black:[`#4b4468`,`#34304f`,`#7a73a3`],chestnut:[`#a0705e`,`#7d5446`,`#c8958a`],peach:[`#ffc2a8`,`#f09c80`,`#ffe1d4`]},Dd={"r:dress":{shape:`dress`,top:`#fff6ec`,topShade:`#f0d5c9`,bottom:`#fff6ec`,bottomShade:`#f0d5c9`,trim:`#ffbfa6`},"r:overalls":{shape:`shorts`,top:`#ffffff`,topShade:`#eadff0`,bottom:`#8fb8ff`,bottomShade:`#6f93dd`,trim:`#ffe39a`},"r:raincoat":{shape:`coat`,top:`#ffe06a`,topShade:`#e8b93c`,bottom:`#ffe06a`,bottomShade:`#e8b93c`,trim:`#fff6c8`},"r:pajama":{shape:`pj`,top:`#cdeede`,topShade:`#a9d6c4`,bottom:`#cdeede`,bottomShade:`#a9d6c4`,trim:`#ffffff`,pattern:`stripes`},"r:hanbok":{shape:`hanbok`,top:`#ffb3c7`,topShade:`#f08aa8`,bottom:`#bfe3ff`,bottomShade:`#98c4ec`,trim:`#ff6f9a`},"a:blouse":{shape:`skirt`,top:`#fffaf0`,topShade:`#e8dccd`,bottom:`#46508f`,bottomShade:`#333a73`,trim:`#ffe98a`},"a:onepiece":{shape:`dress`,top:`#b8a9ff`,topShade:`#9585d2`,bottom:`#b8a9ff`,bottomShade:`#9585d2`,trim:`#ffffff`,pattern:`dots`},"a:school":{shape:`dress`,top:`#394a8a`,topShade:`#2a3670`,bottom:`#394a8a`,bottomShade:`#2a3670`,trim:`#e06a7a`,collar:`#ffffff`},"a:pajama":{shape:`pj`,top:`#f4ead8`,topShade:`#dccdb4`,bottom:`#f4ead8`,bottomShade:`#dccdb4`,trim:`#c9b8e8`},"a:hanbok":{shape:`hanbok`,top:`#ffe98a`,topShade:`#e8c85a`,bottom:`#ff9ec0`,bottomShade:`#e67ba0`,trim:`#ff5f7e`}},Od={idle0:{bob:0,legs:`stand`,arms:`down`,eyes:`open`,flare:0,hairLift:0},idle1:{bob:1,legs:`stand`,arms:`down`,eyes:`open`,flare:0,hairLift:0},walk0:{bob:0,legs:`stepA`,arms:`out`,eyes:`open`,flare:0,hairLift:0},walk1:{bob:-1,legs:`stand`,arms:`down`,eyes:`open`,flare:0,hairLift:1},walk2:{bob:0,legs:`stepB`,arms:`out`,eyes:`open`,flare:0,hairLift:0},walk3:{bob:-1,legs:`stand`,arms:`down`,eyes:`open`,flare:0,hairLift:1},jump:{bob:-1,legs:`tuck`,arms:`up`,eyes:`open`,flare:0,hairLift:2},fall:{bob:0,legs:`dangle`,arms:`out`,eyes:`open`,flare:1,hairLift:-1},blink:{bob:0,legs:`stand`,arms:`down`,eyes:`closed`,flare:0,hairLift:0},sit:{bob:3,legs:`sit`,arms:`down`,eyes:`closed`,flare:0,hairLift:0},act:{bob:0,legs:`stand`,arms:`phone`,eyes:`happy`,flare:0,hairLift:0}};function kd(e,t,n,r,i){let a=r.role,o=Td[a],[s,c,l]=Ed[r.look.hair]??Ed[a===0?`pink`:`lavender`],u=Dd[`${a===0?`r`:`a`}:${r.look.outfit}`]??Dd[a===0?`r:dress`:`a:blouse`],d=i.bob,f=(r,i,a)=>Y(e,t+r,n+i,a),p=u.shape===`hanbok`||u.shape===`coat`,m=[];if(i.legs===`stand`&&m.push([6,16,3],[9,16,3]),i.legs===`stepA`&&m.push([5,16,3],[10,16,2]),i.legs===`stepB`&&m.push([6,16,2],[9,16,3]),i.legs===`tuck`&&m.push([6,15,2],[9,15,2]),i.legs===`dangle`&&m.push([6,16,3],[10,16,3]),i.legs===`sit`){for(let e=8;e<=13;e++)f(e,18,u.shape===`pj`?u.bottom:o.skin),f(e,19,u.shape===`pj`?u.bottomShade:o.skinShade);f(14,18,o.shoe),f(14,19,o.shoe)}for(let[e,t,n]of m){let r=u.shape===`pj`?u.bottom:o.skin,i=u.shape===`pj`?u.bottomShade:o.skinShade;for(let i=0;i<n-1;i++)f(e,t+i+d,r);f(e,t+n-1+d,o.shoe),f(e+1,t+n-1+d,o.shoe);for(let r=0;r<n-1;r++)f(e+1,t+r+d,i)}let h=10+d,g=u.shape===`shorts`?6:p?8:7;for(let e=0;e<g;e++){let t=e<(u.shape===`dress`||u.shape===`coat`?99:u.shape===`hanbok`?2:3),n=u.shape===`pj`?Math.min(1,Math.floor(e/3)):Math.floor(e/2)+(e>=5?i.flare:0)-+(u.shape===`shorts`&&e>=4),r=5-n,a=10+n;for(let n=r;n<=a;n++){let i=n===r||e>3&&n===r+1,a=t?i?u.topShade:u.top:i?u.bottomShade:u.bottom;u.pattern===`stripes`&&e%2==1&&(a=u.trim),u.pattern===`dots`&&(n+e*2)%4==0&&e>1&&(a=u.trim),f(n,h+e,a)}if(e===g-1&&u.shape!==`pj`&&u.shape!==`shorts`)for(let t=r;t<=a;t++)(t+e)%2==0&&f(t,h+e,u.trim)}if(u.collar){for(let e=6;e<=10;e++)f(e,h,u.collar);f(8,h+1,u.trim)}else f(7,h,u.trim),f(8,h,u.trim);(u.shape===`shorts`||u.shape===`skirt`)&&(f(6,h+1,u.bottom),f(6,h+2,u.bottom),f(9,h+1,u.bottom),f(9,h+2,u.bottom)),u.shape===`coat`&&(f(8,h+2,u.trim),f(8,h+4,u.trim),f(8,h+6,u.trim)),u.shape===`hanbok`&&(f(8,h+1,u.trim),f(8,h+2,u.trim),f(9,h+3,u.trim));let _=u.top,v=u.topShade;i.arms===`down`?(f(4,h+1,v),f(4,h+2,o.skin),f(11,h+1,_),f(11,h+2,o.skin)):i.arms===`out`?(f(4,h+1,v),f(3,h+2,o.skin),f(11,h+1,_),f(12,h+2,o.skin)):i.arms===`up`?(f(4,h,v),f(3,h-1,o.skin),f(11,h,_),f(12,h-1,o.skin)):i.arms===`phone`&&(f(4,h+1,v),f(4,h+2,o.skin),f(11,h,_),f(12,h-1,o.skin),a===0&&(f(13,h-3,`#4b4468`),f(13,h-2,`#6f93dd`),f(14,h-3,`#4b4468`),f(14,h-2,`#4b4468`)));let y=d;if(a===0)Z(e,t+2.6,n+8.2+y-i.hairLift*.6,2.1,3.3,s),Z(e,t+2.2,n+9.2+y-i.hairLift*.6,1.2,2.2,c);else{for(let e=6;e<=14-Math.max(0,i.hairLift);e++)for(let t=2;t<=5;t++)f(t,e+y,t===2||e>12?c:s);f(3,15+y-Math.max(0,i.hairLift),c)}let b=t+8,x=n+5.6+y;Z(e,b,x,5.4,5,s),Z(e,b+.8,x+1.3,4.2,3.4,o.skin,(e,r)=>e-t>=6&&r-n>=5+y);for(let e of[6,7,9,12])f(e,5+y,s);if(f(8,5+y,c),f(6,6+y,s),f(6,2+y,l),f(7,2+y,l),f(9,1+y,l),f(4,5+y,c),f(4,6+y,c),f(5,8+y,c),i.eyes===`closed`?(f(9,7+y,o.eye),f(12,7+y,o.eye)):i.eyes===`happy`?(f(9,6+y,o.eye),f(12,6+y,o.eye),f(8,7+y,o.eye),f(13,7+y,o.eye)):(f(9,6+y,o.eye),f(9,7+y,o.eye),f(12,6+y,o.eye),f(12,7+y,o.eye),f(10,6+y,`#ffffff`)),i.arms===`phone`&&a===1&&f(11,9+y,`#c0607a`),f(8,8+y,o.blush),f(12,8+y,o.blush),f(11,8+y,o.skinShade),a===0&&r.look.acc!==`straw`&&(f(4,3+y,`#ff7fa0`),f(3,4+y,`#ff7fa0`),f(4,4+y,`#ffffff`),f(5,4+y,`#ff7fa0`)),r.hairpin){let e=a===0?11:6,t=a===0?2:3;f(e,t-1+y,`#ffe98a`),f(e-1,t+y,`#ffe98a`),f(e,t+y,`#fffbe0`),f(e+1,t+y,`#ffe98a`),f(e,t+1+y,`#ffe98a`)}if(r.look.acc===`straw`){Z(e,t+8,n+3.2+y,7.2,1.6,`#f2d48a`),Z(e,t+8,n+1.8+y,4.2,2.2,`#f2d48a`);for(let e=4;e<=12;e++)f(e,3+y,`#ff9eb8`);f(6,1+y,`#fff2c0`)}else if(r.look.acc===`crown`){let e=[`#ffb3c7`,`#fff5f8`,`#ffe39a`,`#c9b8ff`];for(let t=0;t<5;t++)f(4+t*2,1+y-t%2,e[t%e.length]),f(5+t*2,2+y,`#8fd6a0`)}else r.look.acc===`cat`&&(f(4,0+y,s),f(4,1+y,s),f(5,1+y,`#ffb3c7`),f(11,0+y,s),f(11,1+y,s),f(12,0+y,s),f(10,1+y,`#ffb3c7`));rd(e,t,n,16,20,o.outline)}var Ad=new Map;function jd(e){return`${e.role}:${e.look.outfit}:${e.look.hair}:${e.look.acc}:${+!!e.hairpin}`}function Md(e){let t=jd(e),n=Ad.get(t);if(n)return n;let[r,i]=q(16*wd.length,20);return wd.forEach((t,n)=>kd(i,n*16,0,e,Od[t])),Ad.set(t,r),r}function Nd(e){let t=J(Md(e));return t.repeat.set(1/wd.length,1),t}function Pd(e,t,n=`idle0`){let r=Md(t);e.width=16,e.height=20;let i=e.getContext(`2d`);i.clearRect(0,0,16,20),i.drawImage(r,wd.indexOf(n)*16,0,16,20,0,0,16,20)}var Fd=class{points;material;cap;pos;col;size;alpha;vel;life;maxLife;baseSize;baseAlpha;seed;behavior;cursor=0;geo;constructor(e){this.cap=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.baseSize=new Float32Array(e),this.baseAlpha=new Float32Array(e),this.seed=new Float32Array(e),this.behavior=Array(e).fill(`drift`),this.geo=new ei,this.geo.setAttribute(`position`,new zr(this.pos,3).setUsage(mt)),this.geo.setAttribute(`pcolor`,new zr(this.col,3).setUsage(mt)),this.geo.setAttribute(`size`,new zr(this.size,1).setUsage(mt)),this.geo.setAttribute(`alpha`,new zr(this.alpha,1).setUsage(mt)),this.material=new _o({vertexShader:Vu,fragmentShader:Hu,uniforms:{pxScale:{value:400}},transparent:!0,depthWrite:!1,blending:2}),this.points=new Ii(this.geo,this.material),this.points.frustumCulled=!1,this.points.renderOrder=10}spawn(e){let t=this.cursor;this.cursor=(this.cursor+1)%this.cap,this.pos[t*3]=e.x,this.pos[t*3+1]=e.y,this.pos[t*3+2]=e.z,this.vel[t*3]=e.vx??0,this.vel[t*3+1]=e.vy??0,this.vel[t*3+2]=e.vz??0,this.col[t*3]=e.color[0],this.col[t*3+1]=e.color[1],this.col[t*3+2]=e.color[2],this.life[t]=e.life,this.maxLife[t]=e.life,this.baseSize[t]=e.size,this.baseAlpha[t]=e.alpha??1,this.seed[t]=Math.random()*100,this.behavior[t]=e.behavior??`drift`}burst(e,t,n,r,i,a,o={}){for(let s=0;s<i;s++){let i=Math.random()*Math.PI*2,s=a*(.4+Math.random()*.8);this.spawn({x:e+(Math.random()-.5)*.3,y:t+(Math.random()-.5)*.3,z:n+(Math.random()-.5)*.4,vx:Math.cos(i)*s,vy:Math.sin(i)*s+a*.3,vz:(Math.random()-.5)*s*.3,life:.8+Math.random()*.8,size:.09+Math.random()*.08,color:r,behavior:`spark`,...o})}}update(e,t,n){this.material.uniforms.pxScale.value=n;for(let n=0;n<this.cap;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=e;let r=1-this.life[n]/this.maxLife[n],i=this.seed[n],a=this.behavior[n],o=n*3,s=this.baseAlpha[n];switch(a){case`petal`:this.vel[o]=.35+Math.sin(t*1.3+i)*.4,this.vel[o+1]=-.28+Math.cos(t*1.7+i)*.12,s*=Math.min(1,r*4)*Math.min(1,(1-r)*4);break;case`firefly`:this.vel[o]=Math.sin(t*.8+i)*.25,this.vel[o+1]=Math.cos(t*.6+i*1.3)*.18,s*=(.35+.65*(.5+.5*Math.sin(t*2.2+i*3))**2)*Math.min(1,r*3)*Math.min(1,(1-r)*3);break;case`rise`:this.vel[o]=Math.sin(t*.9+i)*.12,s*=(.5+.5*Math.sin(t*3.1+i*7))*Math.min(1,r*3)*Math.min(1,(1-r)*3);break;case`jelly`:this.vel[o]=Math.sin(t*.3+i)*.15,this.vel[o+1]=.08+Math.sin(t*1.4+i)*.25,s*=Math.min(1,r*2)*Math.min(1,(1-r)*2)*(.7+.3*Math.sin(t*1.4+i));break;case`spark`:this.vel[o]*=1-e*2.2,this.vel[o+1]=this.vel[o+1]*(1-e*2.2)-e*.6,this.vel[o+2]*=1-e*2.2,s*=1-r*r;break;case`drop`:this.vel[o+1]-=e*9,s*=1-r;break;default:s*=Math.min(1,r*3)*(1-r)}this.pos[o]+=this.vel[o]*e,this.pos[o+1]+=this.vel[o+1]*e,this.pos[o+2]+=this.vel[o+2]*e,a===`drop`&&this.pos[o+1]<0&&(this.life[n]=0),this.alpha[n]=Math.max(0,s),this.size[n]=this.baseSize[n]*(a===`spark`?1-r*.5:1)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}},Id=e=>[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255],Ld=`#5a3a57`,Rd=`#2a2350`;function zd(e,t,n,r,i){let[a,o]=q(e*n,t);for(let a=0;a<n;a++)r(o,a*e,a),rd(o,a*e,0,e,t,i);let s=J(a);return s.repeat.set(1/n,1),{tex:s,w:e,h:t,frames:n}}function Bd(e,t,n,r){let i=(n,r,i)=>Y(e,t+n,r,i),a=`#ece8f3`,o=`#c9c3d6`,s=`#f7dccf`,c=`#7e6fa8`,l=n%2,u=r!==`stand`,d=u?11:9;u?(X(e,t+4,16,9,3,c),X(e,t+12,16,3,3,c),i(15,18,`#6f5f92`),X(e,t+5,19,3,1,`#7a6a8a`)):(X(e,t+5,15,6,4,c),i(6,19,`#7a6a8a`),i(9,19,`#7a6a8a`));for(let e=0;e<6;e++){let t=4-Math.floor(e/3),n=11+Math.floor(e/3);for(let r=t;r<=n;r++)i(r,d+e+l*0,r===t?`#a88fcf`:`#c9b3e6`)}i(8,d+1,`#fff6ec`),i(8,d+3,`#fff6ec`),i(12,d+4,s),i(11,d+5,s);let f=(u?3:1)+ +(r===`sleep`);Z(e,t+8,f+4.5,4.4,4.3,a),Z(e,t+8.8,f+5.6,3.4,2.8,s,(e,n)=>e-t>=7&&n>=f+4),Z(e,t+3.6,f+3.4,1.8,1.8,a),i(3,f+3,o),i(5,f+2,o),i(6,f+1,`#ffffff`),r===`sleep`||n===1?(i(9,f+6,`#6b4a5a`),i(11,f+6,`#6b4a5a`)):(i(9,f+5,`#6b4a5a`),i(9,f+6,`#6b4a5a`),i(11,f+5,`#6b4a5a`),i(11,f+6,`#6b4a5a`)),i(10,f+5,`#d9cfe4`),i(12,f+7,`#ff9aab`),i(10,f+8,`#e4bfae`),i(2,f+3,`#ffe98a`),i(1,f+3,`#ffe98a`)}function Vd(e,t,n){let r=(n,r,i)=>Y(e,t+n,r,i),i=`#f7dccf`,a=n%2;X(e,t+5,18,2,3,i),X(e,t+9,18,2,3,i),r(5,21,`#3c3452`),r(6,21,`#3c3452`),r(9,21,`#3c3452`),r(10,21,`#3c3452`),X(e,t+4,14,8,4,`#6c78b8`),X(e,t+4,9+a,8,5,`#f7c9d6`),X(e,t+5,11+a,6,6,`#ffffff`),r(6,10+a,`#ff9eb8`),r(10,12+a,`#ff9eb8`),r(3,11+a,i),r(12,11+a,i),Z(e,t+8,5+a,4.2,4.2,`#3c3452`),Z(e,t+8.8,6+a,3.2,2.8,i,(e,n)=>e-t>=7&&n>=5+a);for(let[e,t]of[[4,2],[6,1],[9,1],[11,2],[3,5],[12,4]])r(e,t+a,`#524868`);r(9,6+a,`#3c3452`),r(11,6+a,`#3c3452`),r(12,7+a,`#ff9aab`)}function Hd(e,t,n,r){let i=(n,r,i)=>Y(e,t+n,r,i);if(!r){let r=`#b8e0a0`;i(1+n,5,r),i(10,4,r),i(11,4,r),i(11,3,r),i(3,6,r),i(8,6,r),Z(e,t+6,4,4.5,2.6,`#6fbf7f`),Z(e,t+6,3.4,3.2,1.6,`#8fd69a`),i(6,2,`#ffe98a`),i(5,3,`#ffe98a`),i(6,3,`#fff6c8`),i(7,3,`#ffe98a`),i(6,4,`#ffe98a`),i(11,3,`#2a2350`);return}let a=`#a8c090`;X(e,t+19,6+n%2,3,3,a),i(21,6+n%2,`#2a2350`),X(e,t+4,10,3,2,a),X(e,t+15,10,3,2,a),i(2,8,a),Z(e,t+11,7,9,4.6,`#6f8f76`),Z(e,t+11,6,7,3,`#809f84`),i(11,4,`#e8d8a0`),i(10,5,`#e8d8a0`),i(11,5,`#f2e6be`),i(12,5,`#e8d8a0`),i(11,6,`#e8d8a0`),i(6,6,`#a6d8a0`),i(15,8,`#a6d8a0`),i(7,8,`#566f5c`),i(14,5,`#566f5c`)}function Ud(e,t,n){let r=(n,r,i)=>Y(e,t+n,r,i),i=`#2e2a44`,a=`#6b8fd8`,o=`#f4f0ff`;for(let e=0;e<4;e++)r(1+e,6+ +(e<2),e%2?a:i);Z(e,t+7,6,3.4,2.4,i),Z(e,t+7.4,7,2,1.2,o),Z(e,t+10,3.6,1.8,1.6,i),r(12,3,`#ffd24a`),r(10,3,`#ffffff`),n===0?(r(6,4,a),r(7,4,o),r(7,9,`#4b4468`),r(8,9,`#4b4468`)):(r(5,1,i),r(6,2,a),r(7,2,o),r(6,3,i),r(8,1,i))}function Wd(e,t,n){let r=(n,r,i)=>Y(e,t+n,r,i);Z(e,t+6,4,4,2.4,`#ffcf7a`),Z(e,t+6.4,3.4,2.6,1.2,`#ffe2a8`),r(1,2+n,`#e8a94c`),r(1,5-n,`#e8a94c`),r(2,3,`#e8a94c`),r(2,4,`#e8a94c`),r(8,3,`#2a2350`),r(10,4,`#e07a6a`)}function Gd(e,t=`stand`){switch(e){case`grandma`:return zd(16,20,2,(e,n,r)=>Bd(e,n,r,t),Ld);case`mom`:return zd(16,22,2,(e,t,n)=>Vd(e,t,n),Rd);case`turtle`:return zd(13,8,2,(e,t,n)=>Hd(e,t,n,!1),Rd);case`oldTurtle`:return zd(24,13,2,(e,t,n)=>Hd(e,t,n,!0),Ld);case`fish`:return zd(12,8,2,(e,t,n)=>Wd(e,t,n),Ld)}}function Kd(){return zd(13,10,2,Ud,`#1d1a30`)}function qd(e,t,n,r=Ld){let[i,a]=q(e,t);return n(a),rd(a,0,0,e,t,r),{tex:J(i),w:e,h:t,frames:1}}function Jd(e,t,n,r){X(e,6,16,t-12,n-16-6,r.wall),X(e,6,16,2,n-16-6,r.wallS);for(let i of[6,Math.floor(t/2)-1,t-8])X(e,i,16,2,n-16-6,r.wood);let i=Math.floor(t/2)-12-2;X(e,i,20,12,n-16-12,r.window);for(let t=22;t<n-8;t+=3)X(e,i,t,12,1,r.woodS);X(e,i+5,20,1,n-16-12,r.woodS);let a=Math.floor(t/2)+4;X(e,a,21,10,8,r.window),X(e,a+4,21,1,8,r.woodS),X(e,a,25,10,1,r.woodS),X(e,2,n-7,t-4,3,r.wood),X(e,2,n-7,t-4,1,`#f2d8bc`);for(let i=4;i<t-4;i+=6)X(e,i,n-4,2,4,r.woodS);X(e,0,n-1,t,1,r.woodS);for(let n=0;n<16;n++){let i=Math.max(0,10-Math.floor(n*.9)),a=i,o=t-i;X(e,a,n,o-a,1,n<2?r.roofL:r.roof),r.slate&&n%3==2&&X(e,a,n,o-a,1,r.roofS),r.thatch&&(n+a)%2==0&&X(e,a+n%4,n,2,1,r.roofS)}if(!r.slate&&!r.thatch)for(let n=2;n<t-2;n+=4)X(e,n,14,2,2,r.roofS);X(e,0,15,t,1,r.roofS)}function Yd(e,t=0){switch(e){case`grandmaHouse`:return qd(96,64,e=>{Jd(e,96,64,{roof:`#8fa6c9`,roofS:`#6f85aa`,roofL:`#b8c9e6`,wall:`#fff3e6`,wallS:`#ead8c6`,wood:`#c9956f`,woodS:`#a6765a`,window:`#fffbe0`}),Z(e,88,54,4,3,`#ffb3c7`),X(e,85,55,7,3,`#c97b5a`),Z(e,10,54,3,3,`#a6e39f`),X(e,8,55,5,3,`#c97b5a`)});case`ariHouse`:return qd(96,64,e=>{Jd(e,96,64,{roof:`#7fa7c9`,roofS:`#5f86aa`,roofL:`#a8c8e6`,wall:`#c9a98a`,wallS:`#a88a70`,wood:`#8f6d5a`,woodS:`#6f5344`,window:`#fff1b8`,slate:!0}),X(e,20,17,2,6,`#ffe06a`),X(e,24,17,2,5,`#ffe06a`),X(e,70,17,3,4,`#f4efff`)},Rd);case`villageHouse`:return qd(80,56,e=>{Jd(e,80,56,{roof:`#c9b27a`,roofS:`#a8925f`,roofL:`#e6d29f`,wall:`#b8998a`,wallS:`#977a6e`,wood:`#7f6252`,woodS:`#624a3f`,window:t?`#8a7fb0`:`#fff1b8`,thatch:!0})},Rd);case`jars`:return qd(40,22,e=>{X(e,0,18,40,4,`#8a7fb0`),X(e,0,18,40,1,`#a99ae0`);let t=(t,n,r)=>{Z(e,t,18-r,n,r,`#8a5a4f`),Z(e,t-1,17-r*1.2,n*.5,r*.4,`#b07a6a`),X(e,t-n*.6,18-r*2,n*1.2,2,`#6f463d`)};t(8,6,7),t(21,7,8),t(33,4,5)},Rd);case`well`:return qd(26,30,e=>{X(e,3,18,20,12,`#9d92c2`);for(let t=3;t<23;t+=5)X(e,t,18,1,12,`#7f74a8`);X(e,3,22,20,1,`#7f74a8`),X(e,2,16,22,3,`#b8aee0`),X(e,4,2,2,15,`#8f6d5a`),X(e,20,2,2,15,`#8f6d5a`),X(e,2,1,22,2,`#7f6252`),X(e,12,3,1,8,`#e8d8a8`)},Rd);case`shrine`:return qd(56,72,e=>{X(e,24,36,8,36,`#6e5a78`),X(e,30,36,2,36,`#54445f`),X(e,16,44,9,3,`#6e5a78`),Z(e,28,22,26,20,`#3f7a74`),Z(e,22,18,14,11,`#5a9c8f`),Z(e,36,26,12,9,`#4a8a80`);let t=[`#ff9eb8`,`#ffe98a`,`#8fb8ff`,`#f4f0ff`,`#8fd6a0`];for(let n=0;n<5;n++)X(e,22+n*3,48,2,7+n%2*2,t[n]);X(e,22,47,14,1,`#f4f0ff`),Z(e,12,68,9,4,`#8a7fb0`),Z(e,12,64,6,3,`#9d92c2`),Z(e,12,61,3,2,`#b8aee0`)},Rd);case`lakeSign`:return qd(22,24,e=>{X(e,9,12,3,12,`#b98a74`),X(e,0,0,22,13,`#e6c9a8`),X(e,1,1,20,11,`#fff6ec`);for(let t=3;t<11;t+=2)X(e,3,t,10+t*7%5,1,`#a88fb8`);X(e,16,3,3,3,`#8fb8ff`)});case`noticeBoard`:return qd(22,24,e=>{X(e,2,12,2,12,`#7f6252`),X(e,18,12,2,12,`#7f6252`),X(e,0,0,22,14,`#8f6d5a`),X(e,2,2,8,10,`#f4ead8`),X(e,12,3,8,8,`#e8dcc4`);for(let t=4;t<11;t+=2)X(e,3,t,6,1,`#8a7fb0`);X(e,13,5,6,1,`#e06a7a`)},Rd);case`mailbox`:return qd(10,18,e=>{X(e,4,8,2,10,`#b98a74`),X(e,0,1,10,8,`#ff8f8f`),X(e,0,1,10,2,`#ffb3b3`),X(e,2,5,6,1,`#c96a6a`)});case`bench`:return qd(26,12,e=>{X(e,0,4,26,3,`#c9956f`),X(e,0,0,26,2,`#d9ab86`),X(e,3,7,2,5,`#8d6457`),X(e,21,7,2,5,`#8d6457`)});case`bigTree`:return qd(112,128,e=>{let t=nd(71);X(e,48,60,16,68,`#9a6f5c`),X(e,58,60,6,68,`#7d5446`),X(e,30,72,20,5,`#9a6f5c`),X(e,62,66,26,5,`#9a6f5c`);for(let t=0;t<6;t++)X(e,50+t*2,118+t%2,3,10,`#7d5446`);let n=[`#8fd6a0`,`#a6e3ad`,`#c3f0c4`,`#7fcb8e`];[[56,40,44,30],[30,52,26,18],[84,50,26,18],[56,22,30,18],[40,32,18,12],[76,30,18,12]].forEach(([t,r,i,a],o)=>Z(e,t,r,i,a,n[o%n.length]));for(let n=0;n<26;n++)X(e,18+Math.floor(t()*76),12+Math.floor(t()*50),2,2,t()<.6?`#ffb070`:`#ffcf7a`);for(let n=0;n<30;n++)Y(e,16+Math.floor(t()*80),10+Math.floor(t()*56),`#e6fbe0`)});case`pole`:return qd(10,70,e=>{X(e,4,4,3,66,`#7f6252`),X(e,0,8,10,2,`#7f6252`),Y(e,1,7,`#e8e2ec`),Y(e,8,7,`#e8e2ec`)},Rd);case`reeds`:return qd(14,22,e=>{let n=nd(9+t);for(let t=0;t<5;t++){let r=2+t*2,i=10+Math.floor(n()*11);for(let n=0;n<i;n++)Y(e,r+(n>i/2&&t%2?1:0),21-n,t%2?`#4fa08f`:`#7fd0b4`);Y(e,r,21-i,`#e8d8a8`),Y(e,r,22-i,`#e8d8a8`)}},Rd);case`bundles`:return qd(28,16,e=>{Z(e,8,11,8,5,`#ff9ec0`),Z(e,20,12,8,4,`#8fb8ff`),Z(e,14,6,6,4,`#ffe98a`),Y(e,14,2,`#f4f0ff`),Y(e,7,8,`#ffffff`),Y(e,21,9,`#ffffff`)},Rd);case`radio`:return qd(12,9,e=>{X(e,0,2,12,7,`#c97b5a`),X(e,1,3,5,5,`#f4ead8`);for(let t=4;t<8;t+=2)X(e,1,t,5,1,`#a88a70`);X(e,8,4,2,2,`#ffe98a`),X(e,9,0,1,2,`#8a7fb0`)});case`windchime`:return qd(12,22,e=>{X(e,5,4,2,18,`#8f6d5a`),X(e,1,3,10,2,`#7f6252`),X(e,2,5,1,4,`#e8e2ec`),Z(e,2.5,10,1.6,1.8,`#9fd4ff`),Y(e,2,13,`#ff9eb8`)},Rd);case`boat`:return qd(44,12,e=>{for(let t=0;t<8;t++){let n=Math.floor(t*.8);X(e,n+(t<2?0:1),t+2,44-n*2-2,1,t<2?`#e6c9a8`:t>5?`#9c7359`:`#c9956f`)}X(e,12,1,2,3,`#8d6457`),X(e,30,1,2,3,`#8d6457`)})}}function Xd(e){return qd(24,34,t=>{X(t,11,14,2,20,`#8f6d5a`),X(t,16,16,1,18,`#b98a74`),X(t,15,18,3,1,`#e8d8a8`);let n=e===0?`#9dbf86`:`#6fc2aa`,r=e===0?`#c2d9a0`:`#a6e8d2`;Z(t,12,10,e===0?6:9,e===0?5:8,n),Z(t,10,8,e===0?3:5,e===0?2:4,r),e>=1&&(Y(t,15,12,`#ffcf7a`),Y(t,8,13,`#ffcf7a`)),e>=2&&(Z(t,7,32,5,2,`#8676b8`),Y(t,6,31,`#a99ae0`))},Rd)}function Zd(e){return qd(20,12,t=>{if(!e){Z(t,10,9,7,2.4,`#d9b08c`),Y(t,9,7,`#ffffff`),Y(t,12,8,`#fff6c0`);return}Z(t,10,9,8,3,`#8d6457`),Z(t,10,9,5,1.6,`#6f463d`),X(t,6,3,9,5,`#b8c9d6`),X(t,6,3,9,1,`#d9e6ee`),X(t,7,4,7,3,`#fff6ec`),X(t,8,5,3,1,`#ff9eb8`),Y(t,13,5,`#8fb8ff`)})}function Qd(e){return qd(12,42,t=>{X(t,5,8,2,34,`#8a93a8`),X(t,3,40,6,2,`#6f788c`),X(t,1,2,10,2,`#6f788c`),X(t,2,4,8,4,e?`#fff3b8`:`#d7dbe6`),e&&X(t,4,5,4,2,`#ffffff`),X(t,5,0,2,2,`#8a93a8`)})}function $d(e){return qd(14,38,t=>{X(t,6,10,2,28,`#7f6252`),X(t,2,9,10,1,`#7f6252`),X(t,2,12,10,4,e?`#ff8f9f`:`#b86a7a`),X(t,2,16,10,5,e?`#8fb8ff`:`#5a6f9a`),e&&X(t,5,14,4,5,`#fff6c8`),X(t,3,11,8,1,`#ffe98a`),X(t,3,21,8,1,`#ffe98a`),X(t,6,22,2,3,e?`#ff8f9f`:`#b86a7a`)},Rd)}function ef(){return qd(12,12,e=>{X(e,1,4,10,8,`#b98a74`);for(let t=1;t<11;t+=3)X(e,t,4,1,8,`#9a6f5c`);X(e,1,6,10,1,`#7f6252`),X(e,1,10,10,1,`#7f6252`),X(e,2,4,8,2,`#8fb8ff`),Y(e,3,4,`#d6efff`),X(e,5,0,2,1,`#7f6252`),Y(e,3,1,`#7f6252`),Y(e,8,1,`#7f6252`),Y(e,2,2,`#7f6252`),Y(e,9,2,`#7f6252`)},Rd)}function tf(){return qd(10,12,e=>{X(e,0,0,10,12,`#fffbe8`),X(e,0,0,2,12,`#ffcfd8`);for(let t=3;t<11;t+=2)X(e,3,t,5,1,`#b8a9d8`)})}function nf(){let[e,t]=q(12,12),n=(e,n,r)=>{X(t,e,n,r,1,`#ffffff`);for(let i=0;i<r;i++)Y(t,e+r-1-i,n+i,`#ffffff`);X(t,e,n+r-1,r,1,`#ffffff`)};return n(1,6,4),n(6,1,5),J(e)}function rf(){let[e,t]=q(8,10);return X(t,5,0,1,7,`#fff6c8`),X(t,5,0,3,2,`#fff6c8`),Z(t,3.5,7.5,2.4,1.8,`#fff6c8`),J(e)}var af={0:1,1:2},of=1/16,sf=.8,cf=-4.2;function lf(e,t){e.traverse(e=>e.layers.set(t))}function uf(e,t={}){return new fi({map:e,alphaTest:t.additive||t.transparent?0:.5,transparent:!!(t.additive||t.transparent),depthWrite:!(t.additive||t.transparent),blending:t.additive?2:1,opacity:t.opacity??1,fog:t.fog??!0,color:t.color??16777215})}function df(e,t,n=`bottom`){let r=new so(e*of,t*of);return n===`bottom`&&r.translate(0,t*of/2,0),r}function ff(e,t={}){return new W(df(e.w,e.h),uf(e.tex,t))}var pf=class{pos=[];uv=[];col=[];idx=[];quad(e,t,n){let r=this.pos.length/3;for(let r=0;r<4;r++)this.pos.push(e[r][0],e[r][1],e[r][2]),this.uv.push(t[r][0],t[r][1]),this.col.push(n[r],n[r],n[r]);this.idx.push(r,r+1,r+2,r,r+2,r+3)}get empty(){return this.pos.length===0}build(){let e=new ei;return e.setAttribute(`position`,new Hr(this.pos,3)),e.setAttribute(`uv`,new Hr(this.uv,2)),e.setAttribute(`color`,new Hr(this.col,3)),e.setIndex(this.idx),e}},mf=class{groups=new Map;add(e,t,n,r,i,a,o=!1,s=1){let c=this.groups.get(e);c||(c=new pf,this.groups.set(e,c));let l=+!!o,u=+!o;c.quad([[t-i/2,n,r],[t+i/2,n,r],[t+i/2,n+a,r],[t-i/2,n+a,r]],[[l,0],[u,0],[u,1],[l,1]],[s*.92,s*.92,s,s])}build(e){for(let[t,n]of this.groups)e.add(new W(n.build(),new fi({map:t,alphaTest:.5,vertexColors:!0})))}},hf=class{root=new Zn;worlds=[new Zn,new Zn];particles=[new Fd(800),new Fd(800)];level=[new Zn,new Zn];ch=null;chars=[];swaps=[];bridges=[];buoys=[];items=new Map;npcs=[];magpies=[];stones=[];darkPlanes=[];arcViews=[];diaryViews=[];keepHints=[];clouds=[];skies=[new Zn,new Zn];moonMesh=null;moonTex=null;glowTex=cd();noteTex=rf();ambientT=0;endingAmt=0;rabbit=!1;dawn=0;constructor(){this.worlds[1].scale.y=-1,this.root.add(this.worlds[0],this.worlds[1]);for(let e of[0,1])this.worlds[e].add(this.level[e],this.skies[e],this.particles[e].points);this.buildCharacters();for(let e of[0,1])lf(this.worlds[e],af[e])}load(e,t){this.clearLevel(),this.ch=e;for(let t of[0,1])this.buildBackground(t,e),this.buildTerrain(t,e),this.buildDecor(t,e);this.buildProps(e),this.buildLights(e),this.buildBridges(e),this.buildBuoys(e),this.buildItems(e),this.buildSockets(e),this.buildUses(e),this.buildArcs(e),this.buildHidden(e),this.buildNpcs(e),this.buildMagpies(e,t),this.buildDiary(e),this.keepHints=e.keepsakes.filter(e=>e.how===`use`).map(e=>({id:e.id,world:e.world,x:e.x,y:e.y}));for(let e of[0,1])lf(this.level[e],af[e]);for(let e of[0,1])lf(this.skies[e],af[e])}clearLevel(){for(let e of[0,1])for(let t of[this.level[e],this.skies[e]])t.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose();let n=t.material;n&&!Array.isArray(n)&&n.dispose()}),t.clear();this.swaps=[],this.bridges=[],this.buoys=[],this.items.clear(),this.npcs=[],this.magpies=[],this.stones=[],this.darkPlanes=[],this.arcViews=[],this.diaryViews=[],this.clouds=[],this.moonMesh=null}buildBackground(e,t){let n=this.skies[e],r=this.level[e],i=t.dusk===`late`,a=new W(new so(320,80),uf(yd(e,i),{fog:!1}));if(a.material.map.repeat.set(16,1),a.position.set(0,39.5,-90),n.add(a),e===0){let e=new W(df(64,64,`center`),uf(bd(),{transparent:!0,fog:!1}));e.scale.setScalar(4.2),e.position.set(8,i?1.6:3.6,-86),n.add(e);for(let e=0;e<6;e++){let t=new W(df(64,24,`center`),uf(Sd(e),{transparent:!0,fog:!1,opacity:i?.7:.92}));t.scale.setScalar(2.2+e%3*.6),t.position.set(-60+e*24,14+e%3*5,-84+e),n.add(t),this.clouds.push(t)}}else{this.moonTex=[xd(t.moon,!1),xd(t.moon,!0)];let e=new W(df(64,64,`center`),uf(this.moonTex[0],{transparent:!0,fog:!1}));e.scale.setScalar(4),e.position.set(-14,17,-86),n.add(e),this.moonMesh=e}let o=e===0?Cd(1024,112,21,{base:i?`#a99be0`:`#c9b8f2`,rim:`#e6dcff`,shade:i?`#9a8ad0`:`#d9c6ee`,peaks:7,rough:.05,minH:30,maxH:104}):Cd(1024,112,22,{base:`#433b7e`,rim:`#7f74c8`,shade:`#3a3370`,peaks:6,rough:.06,minH:34,maxH:106}),s=new W(new so(200,21.875),uf(o));s.position.set(32,21.875/2-.05,-58),r.add(s);let c=e===0?Cd(1024,72,31,{base:`#b6dcc8`,rim:`#dff5e6`,shade:`#a7cfc0`,peaks:12,rough:.12,minH:18,maxH:60}):Cd(1024,72,32,{base:`#35577a`,rim:`#6fb8a8`,shade:`#2f4c6c`,peaks:10,rough:.16,minH:16,maxH:62}),l=new W(new so(150,10.546875),uf(c));l.position.set(32,10.546875/2-.05,-34),r.add(l);let u=sd(e),d=.55,f=new pf;f.quad([[-40,0,-12],[110,0,-12],[110,d,-12],[-40,d,-12]],[[-40,0],[110,0],[110,1],[-40,1]],[.8,.8,.9,.9]);let p=new pf;p.quad([[-40,d,-12],[110,d,-12],[110,d,-20],[-40,d,-20]],[[-40,-12],[110,-12],[110,-20],[-40,-20]],[.95,.95,.85,.85]),r.add(new W(f.build(),new fi({map:u.front,vertexColors:!0}))),r.add(new W(p.build(),new fi({map:u.top,vertexColors:!0})));let m=new mf,h=nd(e===0?501:502),g=e===0?[vd(`tree`,0),vd(`tree`,1),vd(`tree`,2)]:[vd(`pine`,0),vd(`pine`,1),vd(`nightBush`,3)];for(let e=-40;e<110;e+=2.2+h()*3.5){let t=g[Math.floor(h()*g.length)],n=1.1+h()*.6;m.add(t.tex,e,d,-13-h()*6,t.w*of*n,t.h*of*n,h()<.5,.9)}m.build(r)}buildTerrain(e,t){let n=sd(e),r=sd(e,`deck`),i={ground:[new pf,new pf,new pf],deck:[new pf,new pf,new pf]};for(let n of t.solids[e]){let e=n.kind===`deck`?i.deck:i.ground;this.addBlock(n,e[0],e[1],e[2])}let a=this.level[e];for(let[e,t]of[[`ground`,n],[`deck`,r]]){let[n,r,o]=i[e];n.empty||(a.add(new W(n.build(),new fi({map:t.front,vertexColors:!0}))),a.add(new W(r.build(),new fi({map:t.fill,vertexColors:!0}))),a.add(new W(o.build(),new fi({map:t.top,vertexColors:!0}))))}}addBlock(e,t,n,r){let{x0:i,x1:a,y0:o,y1:s}=e,c=Math.max(o,s-1);if(t.quad([[i,c,sf],[a,c,sf],[a,s,sf],[i,s,sf]],[[i,c-s+1],[a,c-s+1],[a,1],[i,1]],[.9,.9,1,1]),c>o){let e=e=>.7+.2*Math.min(1,e/3);n.quad([[i,o,sf],[a,o,sf],[a,c,sf],[i,c,sf]],[[i,o],[a,o],[a,c],[i,c]],[e(o),e(o),e(c),e(c)])}r.quad([[i,s,sf],[a,s,sf],[a,s,cf],[i,s,cf]],[[i,sf],[a,sf],[a,cf],[i,cf]],[1,1,.9,.9]),n.quad([[i,o,cf],[i,o,sf],[i,s,sf],[i,s,cf]],[[cf,o],[sf,o],[sf,s],[cf,s]],[.62,.62,.75,.75]),n.quad([[a,o,sf],[a,o,cf],[a,s,cf],[a,s,sf]],[[sf,o],[cf,o],[cf,s],[sf,s]],[.62,.62,.75,.75])}buildDecor(e,t){let n=nd((e===0?900:901)+t.id.length*17+t.title.length),r=new mf,i=e===0?[`flowers`,`tuft`,`bush`,`tree`,`flowers`,`tuft`]:[`primrose`,`nightTuft`,`nightBush`,`pine`,`stones`,`reed`],a=i.map((e,t)=>vd(e,t)),o=[...t.lights.filter(t=>t.world===e).map(e=>e.x),...t.props.filter(t=>t.world===e).map(e=>e.x),...t.npcs.filter(t=>t.world===e).map(e=>e.x),...t.uses.filter(t=>t.world===e).map(e=>e.x),...t.sockets.filter(t=>t.world===e).map(e=>e.x),...t.magpies.filter(t=>t.world===e).map(e=>e.x)],s=t.props.filter(t=>t.world===e&&(t.kind===`grandmaHouse`||t.kind===`ariHouse`));for(let c of t.solids[e]){if(c.x1-c.x0<1||c.kind===`deck`)continue;let e=Math.max(c.x0+.3,t.minX-8),l=Math.min(c.x1-.3,t.maxX+8);for(let t=e;t<l;t+=.45+n()*.9){let e=Math.floor(n()*a.length),l=a[e],u=i[e],d=u===`tree`||u===`pine`||u===`bush`||u===`nightBush`;if(d&&s.some(e=>Math.abs(e.x-t)<4))continue;let f=d?-2.2-n()*1.8:-.9-n()*3;if(!d&&o.some(e=>Math.abs(e-t)<.9)&&f>-1.6)continue;let p=d?.9+n()*.4:1;r.add(l.tex,t,c.y1,f,l.w*of*p,l.h*of*p,n()<.5,.95+n()*.05)}let u=a[1];for(let t=e;t<l;t+=1.3+n()*2.2)r.add(u.tex,t,c.y1,.77,u.w*of*.8,u.h*of*.4,n()<.5)}r.build(this.level[e])}glowSprite(e,t,n=1){let r=new W(new so(t,t),uf(this.glowTex,{additive:!0,fog:!1,color:e,opacity:n}));return r.renderOrder=5,r}buildProps(e){for(let t of e.props){let e=ff(Yd(t.kind,Math.round(t.x)%2));if(e.position.set(t.x,t.y,t.z??-.5),t.flip&&(e.scale.x=-1),t.scale&&e.scale.multiplyScalar(t.scale),this.level[t.world].add(e),t.kind===`grandmaHouse`||t.kind===`ariHouse`||t.kind===`villageHouse`){let e=this.glowSprite(t.world===0?16769712:16773288,3.2,t.world===0?.35:.5);e.position.set(t.x+1.2,t.y+1.6,(t.z??-.5)+.05),this.level[t.world].add(e)}}}buildLights(e){for(let t of e.lights){let e,n;t.kind===`lantern`?(e={tex:ld(!0),w:16,h:32,frames:1},n={tex:ld(!1),w:16,h:32,frames:1}):t.kind===`moonflower`?(e={tex:ud(!0),w:16,h:24,frames:1},n={tex:ud(!1),w:16,h:24,frames:1}):t.kind===`streetlamp`?(e=Qd(!0),n=Qd(!1)):(e=$d(!0),n=$d(!1));let r=ff(n);r.position.set(t.x,t.y,-.25);let i=t.y+n.h*of*.62,a=this.glowSprite(t.kind===`moonflower`?14076159:16767114,3.4,0);a.position.set(t.x,i,-.2),this.level[t.world].add(r,a),this.swaps.push({mesh:r,a:n.tex,b:e.tex,when:e=>!!e.flags[Ju(t.id)],glow:a,glowBase:.8})}}buildBridges(e){let t=dd(),n=fd(!1),r=fd(!0);for(let i of e.bridges){let a={id:i.id,kind:i.kind,world:i.world,parts:[],baseY:[],when:i.when,active:!1,activeAt:-1},o=this.level[i.world];if(i.kind===`star`){let e=i.segs[0],n=Math.ceil(e.x1-e.x0),r=(e.x1-e.x0)/n;for(let i=0;i<n;i++){let n=new W(new so(r,.5),uf(t,{additive:!0,fog:!1}));n.position.set(e.x0+r*(i+.5),e.y1-.2,.1),n.visible=!1,a.parts.push(n),a.baseY.push(n.position.y),o.add(n)}let s=new W(new so(e.x1-e.x0+1,1.6),uf(this.glowTex,{additive:!0,fog:!1,color:16773288,opacity:0}));s.position.set((e.x0+e.x1)/2,e.y1-.2,-.1),o.add(s),a.glow=s}else if(i.kind===`lily`)i.segs.forEach((e,t)=>{let i=new W(df(24,12),uf(t===2?r:n));i.scale.x=(e.x1-e.x0)/(24*of),i.position.set((e.x0+e.x1)/2,e.y1-.34,.15),i.visible=!1,a.parts.push(i),a.baseY.push(e.y1-.34),o.add(i)});else if(i.kind===`firefly`){let e=vf();i.segs.forEach(t=>{let n=new W(new so(t.x1-t.x0+.2,.52),uf(e,{fog:!1}));n.position.set((t.x0+t.x1)/2,t.y1-.17,.22),n.visible=!1,n.userData.pad=!0,n.userData.amt=0,a.parts.push(n),a.baseY.push(n.position.y),o.add(n);let r=new W(new so(t.x1-t.x0+1,1.1),uf(this.glowTex,{additive:!0,fog:!1,color:14679962,opacity:0}));r.position.set((t.x0+t.x1)/2,t.y1-.05,.18),a.parts.push(r),a.baseY.push(r.position.y),o.add(r)})}else{let t=i.segs[0],n=e.props.find(e=>e.kind===`bigTree`&&e.world===i.world),r=(n?n.x-.4:t.x1)-t.x0,s=new W(new Ui(r,.34,.7),new fi({color:10121052}));s.geometry.translate(r/2,0,0),s.position.set(t.x0,t.y1-.17,-.1),o.add(s),a.parts.push(s),a.baseY.push(s.position.y);let c=vd(`bush`,5);for(let e=t.x0+.8;e<t.x1;e+=1.6){let n=new W(df(c.w,c.h),uf(c.tex));n.scale.setScalar(.8),n.position.set(e,t.y1-.05,-.35),o.add(n),a.parts.push(n),a.baseY.push(n.position.y)}}this.bridges.push(a)}}buildBuoys(e){for(let t of e.buoys){let e={};for(let n of[0,1]){let r=t.look===`wood`?n===0?`woodMoss`:`wood`:n===0?`stoneMoss`:`stone`,i=pd(r),a=new W(new Ui(t.w,1,1.3),new fi({map:i})),o=pd(r);o.repeat.set(1.6,.2);let s=new W(new Ui(t.w+.2,.18,1.5),new fi({map:o,color:t.look===`wood`?15915460:16777215}));this.level[n].add(a,s),e[n]={pillar:a,cap:s,tex:i}}this.buoys.push({id:t.id,parts:e})}}buildItems(e){for(let t of e.items)if(t.kind===`marble`){let e=hd(!1),n=hd(!0),r=new W(df(10,10,`center`),uf(e));this.items.set(t.id,{mesh:r,glow:this.glowSprite(15919871,1.8,.8),kind:t.kind,texNew:e,texOld:n})}else{let e=ef(),n=new W(df(e.w,e.h,`center`),uf(e.tex));this.items.set(t.id,{mesh:n,glow:this.glowSprite(10474751,1.2,.3),kind:t.kind,texNew:e.tex,texOld:e.tex})}}buildSockets(e){for(let t of e.sockets){let e=md(!1),n=md(!0),r=new W(df(16,28),uf(e));r.position.set(t.x,t.y,-.3);let i=this.glowSprite(16773312,3.6,0);i.position.set(t.x,t.y+1.2,-.2),this.level[t.world].add(r,i),this.swaps.push({mesh:r,a:e,b:n,when:e=>!!e.flags[t.flag],glow:i,glowBase:.85})}}buildUses(e){for(let t of e.uses)if(t.look===`sapling`){let n=[Xd(0),Xd(1),Xd(2)],r=ff(n[0]);r.position.set(t.x,t.y,-.4),this.level[t.world].add(r);let i=e.uses.find(e=>e.id===`bury`);this.swaps.push({mesh:r,a:n[0].tex,b:n[1].tex,when:e=>!!e.flags[t.flag]}),i&&this.swaps.push({mesh:r,a:n[1].tex,b:n[2].tex,when:e=>!!e.flags[i.flag]})}else if(t.look===`dig`){let e=Zd(!1),n=Zd(!0),r=ff(e);r.position.set(t.x,t.y,.2),r.visible=!1,this.level[t.world].add(r);let i=this.glowSprite(16774848,1.6,0);i.position.set(t.x,t.y+.3,.25),this.level[t.world].add(i),this.swaps.push({mesh:r,a:e.tex,b:n.tex,when:e=>!!e.flags[t.flag],glow:i,glowBase:0}),r.userData.showWhen=t.when,i.userData.pulseWhen=e=>!!t.when?.(e)&&!e.flags[t.flag]}}buildArcs(e){for(let t of e.arcs){let e=(t.x0+t.x1)/2,n=(t.x1-t.x0)/2,r={id:t.id,kind:t.kind,meshes:[],glow:[],amt:0,birds:void 0};if(t.kind===`moon`){let i=new ba;i.absarc(0,0,n,0,Math.PI,!1),i.absarc(0,0,n-.42,Math.PI,0,!0),i.closePath();let a=new io(i,{depth:1.5,bevelEnabled:!1,curveSegments:28});a.translate(0,0,-.75),a.scale(1,t.h/n,1);for(let t of[0,1]){let i=gd(t);i.repeat.set(1.2,1.2);let o=new W(a,new fi({map:i,color:16777215}));o.position.set(e,0,0),this.level[t].add(o),r.meshes.push(o);let s=this.glowSprite(t===0?16773832:14735615,n*3.2,0);s.position.set(e,0,-.9),this.level[t].add(s),r.glow.push(s)}}else{let n=Kd();r.birds=[];for(let i of[0,1]){for(let e=0;e<30;e++){let a=(e+.5)/30,o=t.x0+(t.x1-t.x0)*a,s=1.5+(t.h-1.5)*Math.sin(Math.PI*a),c=n.tex.clone();c.needsUpdate=!0,c.repeat.set(1/n.frames,1);let l=new W(df(n.w,n.h,`center`),uf(c));l.scale.set(e%2?-1.1:1.1,1.1,1),l.position.set(o,s-.25,.05+(e%3-1)*.3),l.visible=!1,l.userData.t=a,l.userData.i=e,this.level[i].add(l),r.birds.push(l)}let a=new W(new so(t.x1-t.x0+2,5),uf(this.glowTex,{additive:!0,fog:!1,color:i===0?16773832:14735615,opacity:0}));a.position.set(e,t.h-.6,-.8),this.level[i].add(a),r.glow.push(a)}}this.arcViews.push(r)}}buildHidden(e){let t=pd(`stone`);for(let n of e.hidden){let e=new W(new Ui(n.w,.3,1.1),new fi({map:t,color:14209264}));e.position.set(n.x,n.top-.15,.1);let r=this.glowSprite(16774084,2.4,0);r.position.set(n.x,n.top+.05,.2),this.level[n.world].add(e,r),this.stones.push({mesh:e,glow:r,x:n.x,top:n.top,seenUntil:-1})}for(let t of e.dark){let e=new W(new so(t.x1-t.x0+4,9),new fi({map:this.darkTex(),color:789030,transparent:!0,opacity:.93,depthWrite:!1,fog:!1}));e.position.set((t.x0+t.x1)/2,3.2,.05),e.renderOrder=7,this.level[t.world].add(e),this.darkPlanes.push(e)}}darkTexCache=null;darkTex(){if(this.darkTexCache)return this.darkTexCache;let[e,t]=q(64,64),n=t.createImageData(64,64);for(let e=0;e<64;e++)for(let t=0;t<64;t++){let r=Math.min(t,63-t)/12,i=e/40,a=Math.max(0,Math.min(1,r))*Math.max(0,Math.min(1,i)),o=(ad[e%4][t%4]+.5)/16,s=(e*64+t)*4;n.data[s]=n.data[s+1]=n.data[s+2]=255,n.data[s+3]=a>o*.9+.05?Math.round(255*Math.min(1,a+.15)):0}return t.putImageData(n,0,0),this.darkTexCache=J(e),this.darkTexCache}npcArt(e,t){return Gd(e,t)}buildNpcs(e){for(let t of e.npcs){let e=t.pose??`stand`,n=this.npcArt(t.kind,e),r={[e]:n},i=new W(df(n.w,n.h),uf(n.tex));i.position.set(t.x,t.y,t.kind===`grandma`?-.75:.1),t.flip&&(i.scale.x=-1),this.level[t.world].add(i),this.npcs.push({id:t.id,mesh:i,art:n,world:t.world,kind:t.kind,baseX:t.x,x:t.x,face:t.flip?-1:1,pose:e,arts:r})}}buildMagpies(e,t){let n=Kd(),r=e.arcs.find(e=>e.kind===`magpie`);e.magpies.forEach((i,a)=>{let o=n.tex.clone();o.needsUpdate=!0,o.repeat.set(1/n.frames,1);let s=new W(df(n.w,n.h),uf(o));s.position.set(i.x,i.y,.05),this.level[i.world].add(s);let c=r?r.x0+(r.x1-r.x0)*(a+.5)/e.magpies.length:i.x,l=r?(c-r.x0)/(r.x1-r.x0):0,u=r?1.5+(r.h-1.5)*Math.sin(Math.PI*l)+1.2:i.y+3,d=t.magpies.includes(i.id);s.visible=!d,this.magpies.push({id:i.id,world:i.world,mesh:s,home:new V(i.x,i.y,.05),target:new V(c,u,.05),gone:d,goneAt:d?-99:-1})})}buildDiary(e){let t=tf();for(let n of e.diary){let e=ff(t);e.position.set(n.x,n.y+.05,.35),e.rotation.z=.15;let r=this.glowSprite(16774856,1.6,.5);r.position.set(n.x,n.y+.4,.3),this.level[n.world].add(e,r),this.diaryViews.push({id:n.id,mesh:e,glow:r})}}buildCharacters(){for(let e of[0,1]){let t={role:e,look:e===0?{outfit:`dress`,hair:`pink`,acc:`none`}:{outfit:`blouse`,hair:`lavender`,acc:`none`},hairpin:e===1},n=Nd(t),r=new W(df(16,20),uf(n,{fog:!1}));r.position.z=.3;let i=new W(new so(.9,.45),uf(_d(),{transparent:!0,fog:!1}));i.rotation.x=-Math.PI/2,i.renderOrder=2;let a=new W(new so(.75,.75),uf(nf(),{transparent:!0,fog:!1}));a.visible=!1,this.worlds[e].add(r,i,a),this.chars.push({mesh:r,tex:n,key:jd(t),shadow:i,zzz:a,blinkT:2+Math.random()*3})}}setLook(e,t,n){let r={role:e,look:t,hairpin:n},i=jd(r),a=this.chars[e];if(a.key===i)return;let o=Nd(r);o.offset.x=a.tex.offset.x,a.mesh.material.map=o,a.mesh.material.needsUpdate=!0,a.tex.dispose(),a.tex=o,a.key=i}splash(e,t,n=!1){let r=this.particles[e],i=n?26:14;for(let a=0;a<i;a++){let i=Math.PI*(.15+Math.random()*.7),a=(n?3.4:2.4)*(.5+Math.random()*.7);r.spawn({x:t+(Math.random()-.5)*.5,y:.05,z:.3+(Math.random()-.5)*.6,vx:Math.cos(i)*a*.6,vy:Math.sin(i)*a,life:.9,size:.1+Math.random()*.06,color:e===0?[.85,.95,1]:[.8,.85,1],behavior:`drop`})}}burst(e,t,n,r,i=24,a=2.2){this.particles[e].burst(t,n,.4,Id(r),i,a)}markBurst(e,t,n,r){this.particles[e].burst(t,n+.2,.5,Id(r?16766690:14273791),10,1.1)}prePass(e,t){let n=e===1&&t===1;for(let e of this.darkPlanes)e.visible=n;for(let e of this.stones)e.mesh.visible=!n||e.seenUntil>this.timeNow,e.glow.material.opacity=n?e.seenUntil>this.timeNow?.8:0:.62+.18*Math.sin(this.timeNow*3+e.x),e.glow.visible=e.glow.material.opacity>.01}timeNow=0;update(e){let{st:t,time:n,dt:r}=e;this.timeNow=n;for(let t of[0,1])this.skies[t].position.x=e.camX*.92;for(let e of this.clouds)e.position.x+=r*.25,e.position.x>90&&(e.position.x-=150);if(this.moonMesh&&this.moonTex){let e=this.rabbit?this.moonTex[1]:this.moonTex[0],t=this.moonMesh.material;t.map!==e&&(t.map=e,t.needsUpdate=!0)}this.updateCharacters(e),this.updateSwaps(t,n),this.updateBridges(t,n),this.updateBuoys(e.buoySink),this.updateItems(e),this.updateArcs(e),this.updateStones(e),this.updateNpcs(e),this.updateMagpies(e),this.updateDiary(e),this.updateAmbient(e),this.particles[0].update(r,n,e.pxScale),this.particles[1].update(r,n,e.pxScale)}frameOf(e,t,n){return e.anim===`walk`?[`walk0`,`walk1`,`walk2`,`walk3`][Math.floor(e.animTime*9)%4]:e.anim===`jump`?`jump`:e.anim===`fall`?`fall`:e.anim===`sit`||e.sleeping?`sit`:e.anim===`act`||e.singing?`act`:(t.blinkT-=n,t.blinkT<0&&(t.blinkT=2.5+Math.random()*3),t.blinkT<.12?`blink`:Math.floor(e.animTime*1.6)%2==0?`idle0`:`idle1`)}updateCharacters(e){e.players.forEach((t,n)=>{let r=this.chars[n],i=t.body;r.mesh.visible=!t.hidden&&t.present&&!e.hideChar[n],r.tex.offset.x=wd.indexOf(this.frameOf(t,r,e.dt))/wd.length;let a=t.squash;r.mesh.scale.set(t.face*(1+a*.12),1-a*.12,1),r.mesh.position.set(i.x,i.y-.02,.3);let o=e.groundY[n],s=Math.max(0,i.y-o);r.shadow.position.set(i.x,o+.015,.3);let c=Math.max(.35,1-s*.25);r.shadow.scale.set(c,c,1),r.shadow.visible=r.mesh.visible&&o>-.5,r.zzz.visible=r.mesh.visible&&t.sleeping,r.zzz.position.set(i.x+.5*t.face,i.y+1.35+Math.sin(e.time*2)*.08,.4),t.singing&&r.mesh.visible&&Math.random()<.12&&this.particles[t.role].spawn({x:i.x+t.face*.3,y:i.y+1.2,z:.5,vx:(Math.random()-.3)*.6*t.face,vy:.6,life:1.6,size:.16,color:[1,.96,.75],behavior:`rise`})})}updateSwaps(e,t){for(let n of this.swaps){let r=n.when(e),i=n.mesh.material,a=r?n.b:n.a;i.map!==a&&(r||i.map===n.b)&&(i.map=a,i.needsUpdate=!0),r!==n.on&&(n.on=r,n.onAt=t);let o=n.mesh.userData.showWhen;if(o&&(n.mesh.visible=o(e)),n.glow){let i=n.glow.userData.pulseWhen,a=i?i(e)?.6+.3*Math.sin(t*4):0:r?(n.glowBase??.8)*(.9+.1*Math.sin(t*2.3+n.mesh.position.x)):0,o=n.glow.material;o.opacity+=(a-o.opacity)*.08,n.glow.visible=o.opacity>.01}}}updateBridges(e,t){for(let n of this.bridges){let r=n.when(e);r!==n.active&&(n.active=r,n.activeAt=t);let i=t-n.activeAt;if(n.parts.forEach((e,a)=>{if(n.kind===`firefly`){let i=e.userData,o=e.material;if(i.pad){let n=(i.amt??0)+(+!!r-(i.amt??0))*.18;i.amt=n;let s=n<.03?0:n;e.visible=s>0,e.scale.set(Math.max(.001,s),Math.max(.001,s),1),o.color.setScalar(.9+.1*Math.sin(t*6+a))}else{let n=r?.85+.15*Math.sin(t*6+a):0;o.opacity+=(n-o.opacity)*.2,e.visible=o.opacity>.02}e.position.y=n.baseY[a]+Math.sin(t*3+a*1.3)*.03,r&&Math.random()<.08&&this.particles[n.world].spawn({x:e.position.x+(Math.random()-.5),y:e.position.y+.1,z:.3,life:1.2,size:.1,color:[.9,1,.6],behavior:`firefly`});return}if(!r){e.visible=!1;return}if(n.kind===`star`){let n=Math.min(1,Math.max(0,(i-a*.07)*4));e.visible=n>0,e.scale.set(1,n,1),e.material.opacity=.75+.25*Math.sin(t*3+a)}else if(n.kind===`lily`){let r=Math.min(1,Math.max(0,(i-a*.15)*1.5));e.visible=r>0;let o=1-(1-r)**3;e.position.y=n.baseY[a]-(1-o)*.7+Math.sin(t*1.6+a*1.7)*.025}else{let t=Math.min(1,Math.max(0,(i-(a===0?0:.4+a*.12))*1.4));e.visible=t>0,a===0?e.scale.set(Math.max(.001,1-(1-t)**3),1,1):e.scale.setScalar(.8*(1-(1-t)**3))}}),n.glow){let e=n.glow.material,i=r?.45+.1*Math.sin(t*2):0;e.opacity+=(i-e.opacity)*.06,n.glow.visible=e.opacity>.01}}}updateBuoys(e){if(this.ch)for(let t of this.buoys){let n=this.ch.buoys.find(e=>e.id===t.id);for(let r of[0,1]){let i=Uu(n,e[n.id]??0,r),a=-.9,o=i-a,s=t.parts[r];s.pillar.scale.y=o,s.pillar.position.set(n.x,a+o/2,0),s.tex.repeat.set(n.w,o),s.cap.position.set(n.x,i-.09,0)}}}updateItems(e){for(let t of e.st.items){let n=this.items.get(t.id);if(!n)continue;let r=t.world,i=t.x,a=t.y+.32;if(t.mode===`used`){n.mesh.visible=!1,n.glow.visible=!1;continue}if(t.mode===`held`&&t.holder!==-1){let o=e.players[t.holder];r=o.role,i=o.body.x,a=o.body.y+1.55+Math.sin(e.time*3)*.06,n.mesh.visible=!o.hidden&&!e.hideChar[o.role]}else n.mesh.visible=!0,t.mode===`floating`&&(a=.18+Math.sin(e.time*2.2)*.05),(t.mode===`ground`||t.mode===`placed`)&&(a+=Math.sin(e.time*2)*.04),t.mode===`placed`&&(a=t.y+1.35);let o=this.level[r];n.mesh.parent!==o&&(o.add(n.mesh,n.glow),lf(n.mesh,af[r]),lf(n.glow,af[r]));let s=n.mesh.material,c=r===0?n.texOld:n.texNew;s.map!==c&&(s.map=c,s.needsUpdate=!0),n.mesh.position.set(i,a,.45),n.glow.position.set(i,a,.4),n.glow.visible=n.mesh.visible,n.glow.material.opacity=(n.kind===`marble`?.55:.2)+.25*Math.sin(e.time*3)}}updateArcs(e){if(!this.ch)return;for(let t of this.arcViews){let n=this.ch.arcs.find(e=>e.id===t.id),r=(n.x0+n.x1)/2,i=!!this.ch.goal&&this.ch.goal.arc===t.id&&this.ch.goal.when(e.st);if(t.kind===`moon`)e.players.forEach((n,a)=>{let o=n.present&&!n.hidden&&n.body.gk===`arc`&&n.body.gid===t.id&&Math.abs(n.body.x-r)<1,s=e.st.phase!==`play`&&i?1:o?i?.55:.3:i&&a===0?.18:0,c=t.meshes[a],l=(c.userData.amt??0)+(s-(c.userData.amt??0))*Math.min(1,e.dt*2);c.userData.amt=l,c.material.color.setRGB(1,1,1).lerp(new U(a===0?16774872:15789311),l).multiplyScalar(1+l*.25);let u=t.glow[a].material;u.opacity=l*(.65+.1*Math.sin(e.time*2.4)),t.glow[a].visible=u.opacity>.01});else if(t.birds){let r=Math.min(1,e.st.magpies.length/Math.max(1,this.ch.magpies.length)),i=t.birds.length/2;t.birds.forEach((t,a)=>{let o=a%i,s=t.userData,c=s.t<=r+1e-6||r>=1;if(t.visible=c,!c)return;let l=t.material.map;l.offset.x=Math.floor(e.time*6+o*.7)%2*.5,t.position.y=1.5+(n.h-1.5)*Math.sin(Math.PI*s.t)-.25+Math.sin(e.time*5+o)*.05}),t.amt+=(+(r>=1)-t.amt)*Math.min(1,e.dt*1.5);for(let n of t.glow){let r=n.material;r.opacity=t.amt*(.45+.1*Math.sin(e.time*2)),n.visible=r.opacity>.01}}}let t=e.st.phase===`play`?0:1;this.endingAmt+=(t-this.endingAmt)*Math.min(1,e.dt*.8)}updateStones(e){let t=e.players[1];for(let n of this.stones){e.st.flash>0&&(n.seenUntil=Math.max(n.seenUntil,e.time+.2));for(let t of e.marks)t.w===1&&Math.abs(t.x-n.x)<1&&e.time-t.t<3&&(n.seenUntil=Math.max(n.seenUntil,e.time+.15));t.body.gk===`bridge`&&t.body.gid.startsWith(`stone:`)&&Math.abs(t.body.x-n.x)<.8&&(n.seenUntil=Math.max(n.seenUntil,e.time+1.6))}}updateNpcs(e){for(let t of this.npcs){let n=t.pose,r=t.baseX,i=t.face;if(t.kind===`grandma`&&e.grandma&&(n=e.grandma.pose??n,r=e.grandma.x??r,i=e.grandma.face??i),n!==t.pose||!t.arts[n]){t.arts[n]??=this.npcArt(t.kind,n);let e=t.arts[n],r=t.mesh.material;r.map=e.tex,r.needsUpdate=!0,t.art=e}let a=Math.abs(r-t.x)>.02;t.x+=Math.sign(r-t.x)*Math.min(Math.abs(r-t.x),e.dt*1.4),t.mesh.position.x=t.x,t.kind===`grandma`&&(t.mesh.position.y=n===`stand`?1.5:1.95),t.mesh.scale.x=i;let o=t.art.frames,s=t.kind===`turtle`||t.kind===`oldTurtle`?.8:a?4:.7;t.mesh.material.map.offset.x=o>1?Math.floor(e.time*s+t.baseX)%o/o:0,t.pose=n,(t.kind===`turtle`||t.kind===`oldTurtle`)&&(t.mesh.position.x=t.baseX+Math.sin(e.time*.3+t.baseX)*.4)}}updateMagpies(e){for(let t of this.magpies){e.st.magpies.includes(t.id)&&!t.gone&&(t.gone=!0,t.goneAt=e.time,this.burst(t.world,t.home.x,t.home.y+.5,14739711,14,1.8));let n=t.mesh.material.map;if(!t.gone){t.mesh.visible=!0;let r=Math.max(0,Math.sin(e.time*3+t.home.x))*.12;t.mesh.position.set(t.home.x+Math.sin(e.time*.7+t.home.x)*.2,t.home.y+r,.05),t.mesh.scale.x=Math.sin(e.time*.35+t.home.x)>0?1:-1,n.offset.x=r>.06?.5:0;continue}let r=t.goneAt<0?1:Math.min(1,(e.time-t.goneAt)/1.8);t.mesh.visible=r<1;let i=r*r*(3-2*r);t.mesh.position.lerpVectors(t.home,t.target,i),t.mesh.position.y+=Math.sin(i*Math.PI)*2.2,t.mesh.scale.x=t.target.x>=t.home.x?1:-1,n.offset.x=Math.floor(e.time*10)%2?.5:0}}updateDiary(e){for(let t of this.diaryViews){let n=e.st.ng&&!e.st.diary.includes(t.id);t.mesh.visible=n,t.glow.visible=n,t.glow.material.opacity=.4+.25*Math.sin(e.time*3+t.mesh.position.x),t.mesh.position.y=1.55+Math.sin(e.time*2+t.mesh.position.x)*.05}}get ending(){return this.endingAmt}updateAmbient(e){this.ambientT+=e.dt;let t=e.camX;for(;this.ambientT>.05;){this.ambientT-=.05;let e=()=>t+(Math.random()-.5)*34;Math.random()<.3&&this.particles[0].spawn({x:e()-6,y:3+Math.random()*7,z:-3+Math.random()*4,life:7,size:.1,color:[1,.72,.8],behavior:`petal`,alpha:.9}),Math.random()<.2&&this.particles[0].spawn({x:e(),y:1.7+Math.random()*2.5,z:-3+Math.random()*3.5,life:5,size:.11,color:[1,.9,.55],behavior:`firefly`}),Math.random()<.4&&this.particles[1].spawn({x:e(),y:1.6+Math.random()*3,z:-4+Math.random()*5,life:5,size:.1+Math.random()*.05,color:Math.random()<.6?[.85,1,.55]:[1,.95,.7],behavior:`firefly`}),Math.random()<.15&&this.particles[1].spawn({x:e(),y:.3+Math.random()*2,z:-4+Math.random()*5,vy:.3+Math.random()*.3,life:6,size:.07,color:[.85,.95,1],behavior:`rise`})}for(let n of this.keepHints)e.st.keeps.includes(n.id)||Math.abs(n.x-t)>18||Math.random()>.05||this.particles[n.world].spawn({x:n.x+(Math.random()-.5)*.6,y:n.y+.5+Math.random()*.8,z:.4,vy:.25,life:1.2,size:.09,color:[1,.95,.8],behavior:`rise`});this.dawn>0&&Math.random()<.4*this.dawn&&this.particles[1].spawn({x:gf(t),y:.2,z:-2+Math.random()*3,vy:.6+Math.random(),life:4,size:.12,color:[1,.9,.75],behavior:`rise`})}get noteTexture(){return this.noteTex}},gf=e=>e+(Math.random()-.5)*30,_f=null;function vf(){if(_f)return _f;let[e,t]=q(24,10);Z(t,12,6.2,11.5,3.2,`#4a7a62`),Z(t,12,5.2,10.5,2.7,`#b8e67e`),Z(t,12,4.3,8,1.5,`#ecffbc`);let n=nd(44);for(let e=0;e<18;e++)Y(t,2+Math.floor(n()*20),3+Math.floor(n()*4),n()<.5?`#fffbd0`:`#e4ff8a`);return Y(t,7,3,`#ffffff`),Y(t,12,5,`#ffffff`),Y(t,17,4,`#ffffff`),_f=J(e),_f}sn.enabled=!1;var yf=28,bf=Qt.degToRad(8),xf=216,Sf={0:{clear:16769999,fog:16768214,tintOther:[1.12,1.08,1.1],sky:16765658,partner:14273791},1:{clear:7035048,fog:6114972,tintOther:[.78,.76,.92],sky:9271496,partner:16766690}},Cf=class{gl;scene=new or;camera=new qo(yf,1,.5,400);stage=new hf;iw=1;ih=1;scale=1;cssW=1;cssH=1;visH=13;halfW=12;pxScale=400;waterFrac=.36;rtOwn;rtOther;rtComp;rtHalfA;rtHalfB;quadScene=new or;quadCam=new Jo(-1,1,1,-1,0,1);quad;compMat;extractMat;blurMat;finalMat;fogs={0:new ar(Sf[0].fog,34,150),1:new ar(Sf[1].fog,34,150)};camRole=0;curSAmt=1;texW=.36;scrW=.36;tmpV=new V;constructor(e){this.gl=new ku({canvas:e,antialias:!1,alpha:!1,powerPreference:`high-performance`}),this.gl.outputColorSpace=lt,this.gl.autoClear=!0,this.scene.add(this.stage.root);let t=Array.from({length:6},()=>new vn(0,0,-99,0));this.compMat=new _o({vertexShader:Iu,fragmentShader:Lu,depthTest:!1,depthWrite:!1,uniforms:{tOwn:{value:null},tOwnDepth:{value:null},tOther:{value:null},projInv:{value:new Cn},camWorld:{value:new Cn},camPos:{value:new V},res:{value:new B(1,1)},time:{value:0},side:{value:1},waterTint:{value:new V(1,1,1)},skyRefl:{value:new U},sparkleColor:{value:new U(16774880)},foamColor:{value:new U(16777215)},partnerColor:{value:new U},partner:{value:new V},ripples:{value:t},clarity:{value:0}}}),this.extractMat=new _o({vertexShader:Iu,fragmentShader:Ru,depthTest:!1,depthWrite:!1,uniforms:{tInput:{value:null}}}),this.blurMat=new _o({vertexShader:Iu,fragmentShader:zu,depthTest:!1,depthWrite:!1,uniforms:{tInput:{value:null},dir:{value:new B}}}),this.finalMat=new _o({vertexShader:Iu,fragmentShader:Bu,depthTest:!1,depthWrite:!1,uniforms:{tScene:{value:null},tBloom:{value:null},bloomAmt:{value:.55},texW:{value:.36},scrW:{value:.36},sAmt:{value:1},fade:{value:0},fadeColor:{value:new U(16774392)},vignette:{value:.55},glow:{value:0}}}),this.quad=new W(new so(2,2),this.compMat),this.quad.frustumCulled=!1,this.quadScene.add(this.quad),this.resize()}resize(){let e=Math.min(window.devicePixelRatio||1,2);this.cssW=window.innerWidth,this.cssH=window.innerHeight;let t=Math.max(1,Math.round(this.cssW*e)),n=Math.max(1,Math.round(this.cssH*e));this.gl.setPixelRatio(e),this.gl.setSize(this.cssW,this.cssH,!0),this.scale=Math.max(1,Math.round(Math.min(t,n)/xf)),this.iw=Math.ceil(t/this.scale),this.ih=Math.ceil(n/this.scale),this.waterFrac=n>t?.44:.36,this.visH=this.ih/16,this.halfW=this.visH*(this.iw/this.ih)/2,this.camera.aspect=this.iw/this.ih,this.camera.updateProjectionMatrix(),this.pxScale=this.ih/(2*Math.tan(Qt.degToRad(yf/2)));for(let e of[this.rtOwn,this.rtOther,this.rtComp,this.rtHalfA,this.rtHalfB])e?.dispose();let r={minFilter:E,magFilter:E,generateMipmaps:!1};this.rtOwn=new bn(this.iw,this.ih,{...r,depthBuffer:!0,depthTexture:new Bi(this.iw,this.ih)}),this.rtOther=new bn(this.iw,this.ih,{...r,depthBuffer:!0}),this.rtComp=new bn(this.iw,this.ih,{...r,depthBuffer:!1});let i=Math.max(1,Math.ceil(this.iw/2)),a=Math.max(1,Math.ceil(this.ih/2)),o={minFilter:k,magFilter:k,generateMipmaps:!1,depthBuffer:!1};this.rtHalfA=new bn(i,a,o),this.rtHalfB=new bn(i,a,o),this.compMat.uniforms.res.value.set(this.iw,this.ih)}clampCamX(e,t){let n=t.minX-1+this.halfW,r=t.maxX+1-this.halfW;return n>r?(t.minX+t.maxX)/2:Math.min(r,Math.max(n,e))}placeCamera(e,t){let n=this.visH/2/Math.tan(Qt.degToRad(yf/2)),r=this.visH*(.5-this.waterFrac),i=e===0?1:-1;this.camera.position.set(t,i*(r+n*Math.sin(bf)),n*Math.cos(bf)),this.camera.up.set(0,1,0),this.camera.lookAt(t,i*r,0),this.camera.updateMatrixWorld(!0)}pass(e,t){this.quad.material=e,this.gl.setRenderTarget(t),this.gl.render(this.quadScene,this.quadCam)}render(e){let t=e.sAmt>=0?0:1,n=+(t===0);this.camRole=t,this.curSAmt=e.sAmt,this.placeCamera(0,e.camX),this.scrW=this.projectTex(e.camX,0,0).y,this.placeCamera(t,e.camX),this.texW=this.projectTex(e.camX,0,0).y;let r=this.gl;this.stage.prePass(t,t),this.camera.layers.set(af[t]),this.scene.fog=this.fogs[t],r.setClearColor(Sf[t].clear,1),r.setRenderTarget(this.rtOwn),r.render(this.scene,this.camera),this.stage.prePass(t,n),this.camera.layers.set(af[n]),this.scene.fog=this.fogs[n],r.setClearColor(Sf[n].clear,1),r.setRenderTarget(this.rtOther),r.render(this.scene,this.camera);let i=this.compMat.uniforms;if(i.tOwn.value=this.rtOwn.texture,i.tOwnDepth.value=this.rtOwn.depthTexture,i.tOther.value=this.rtOther.texture,i.projInv.value.copy(this.camera.projectionMatrixInverse),i.camWorld.value.copy(this.camera.matrixWorld),i.camPos.value.copy(this.camera.position),i.time.value=e.time,i.side.value=t===0?1:-1,i.waterTint.value.set(...Sf[t].tintOther),i.skyRefl.value.setHex(Sf[t].sky),i.partnerColor.value.setHex(Sf[t].partner),i.clarity.value=e.clarity,e.partner.visible&&e.partner.world!==t){let t=e.partner.world===0?e.partner.y:-e.partner.y,n=this.projectTex(e.partner.x,t,.3);i.partner.value.set(n.x,n.y,1)}else i.partner.value.set(0,0,0);let a=i.ripples.value;for(let t=0;t<a.length;t++){let n=e.ripples[t];n?a[t].set(n.x,n.z,n.t,n.s):a[t].set(0,0,-99,0)}this.pass(this.compMat,this.rtComp),this.extractMat.uniforms.tInput.value=this.rtComp.texture,this.pass(this.extractMat,this.rtHalfA),this.blurMat.uniforms.tInput.value=this.rtHalfA.texture,this.blurMat.uniforms.dir.value.set(1/this.rtHalfA.width,0),this.pass(this.blurMat,this.rtHalfB),this.blurMat.uniforms.tInput.value=this.rtHalfB.texture,this.blurMat.uniforms.dir.value.set(0,1/this.rtHalfB.height),this.pass(this.blurMat,this.rtHalfA);let o=this.finalMat.uniforms;o.tScene.value=this.rtComp.texture,o.tBloom.value=this.rtHalfA.texture,o.texW.value=this.texW,o.scrW.value=this.scrW,o.sAmt.value=e.sAmt,o.fade.value=e.fade,o.fadeColor.value.copy(e.fadeColor),o.glow.value=e.glow+e.flash*.9,o.bloomAmt.value=.55+e.glow*.8+e.flash,this.pass(this.finalMat,null)}projectTex(e,t,n){let r=this.tmpV.set(e,t,n).project(this.camera);return{x:r.x*.5+.5,y:r.y*.5+.5}}project(e,t,n,r=.3){let i=e===0?n:-n,a=this.projectTex(t,i,r),o=Math.sign(this.curSAmt)*Math.max(Math.abs(this.curSAmt),.002),s=this.scrW+(a.y-this.texW)*o;return{x:a.x*this.cssW,y:(1-s)*this.cssH}}get viewCameraRole(){return this.camRole}unproject(e,t){let n=Math.sign(this.curSAmt)*Math.max(Math.abs(this.curSAmt),.002),r=e/this.cssW,i=1-t/this.cssH,a=this.texW+(i-this.scrW)/n;if(a<0||a>1)return null;let o=new V(r*2-1,a*2-1,.5).unproject(this.camera).sub(this.camera.position).normalize();if(Math.abs(o.z)<1e-5)return null;let s=(.3-this.camera.position.z)/o.z;if(s<=0)return null;let c=this.camera.position.clone().addScaledVector(o,s);return c.y>=0?{world:0,x:c.x,y:c.y}:{world:1,x:c.x,y:-c.y}}snapshot(e=320){try{let t=this.gl.domElement,n=Math.min(1,e/t.width),r=document.createElement(`canvas`);return r.width=Math.round(t.width*n),r.height=Math.round(t.height*n),r.getContext(`2d`).drawImage(t,0,0,r.width,r.height),r.toDataURL(`image/jpeg`,.72)}catch{return null}}},wf=`#5a3a57`;function Tf(e){let[t,n]=q(16,16);switch(e){case`hi`:Z(n,8,8.5,6,5.6,`#ffe8da`),Y(n,5,8,wf),Y(n,5,7,wf),X(n,9,8,3,1,wf),Y(n,4,10,`#ff9aab`),Y(n,12,10,`#ff9aab`),X(n,7,11,3,1,`#c0707f`),Y(n,13,2,`#ff9eb8`),Y(n,12,3,`#ff9eb8`),Y(n,14,3,`#ff9eb8`),Y(n,13,4,`#ff9eb8`);break;case`thanks`:Z(n,5.5,6,3.6,3.6,`#ff8fb0`),Z(n,10.5,6,3.6,3.6,`#ff8fb0`);for(let e=7;e<14;e++){let t=7-(e-7);X(n,8-t,e,t*2,1,`#ff8fb0`)}Y(n,4,4,`#ffffff`),Y(n,5,4,`#ffffff`),Y(n,4,5,`#ffffff`);break;case`ok`:Z(n,8,8,6.5,6.5,`#b8f0c0`);for(let e=0;e<3;e++)Y(n,4+e,8+e,wf);for(let e=0;e<6;e++)Y(n,7+e,10-e,wf);break;case`nice`:{let e=`#ffe06a`;Y(n,8,1,e),X(n,7,2,3,3,e),X(n,2,5,13,2,e),X(n,4,7,9,2,e),X(n,4,9,3,3,e),X(n,10,9,3,3,e),Y(n,3,12,e),Y(n,13,12,e),Y(n,7,6,`#fff6c8`);break}case`wait`:X(n,2,4,12,8,`#fff6ec`),X(n,3,3,10,10,`#fff6ec`),X(n,4,8,2,2,wf),X(n,7,8,2,2,wf),X(n,10,8,2,2,wf);break;case`come`:Z(n,8,8,6.5,6.5,`#d9ccff`),X(n,4,7,7,2,wf),Y(n,9,5,wf),Y(n,10,6,wf),Y(n,11,7,wf),Y(n,11,8,wf),Y(n,10,9,wf),Y(n,9,10,wf);break;case`stand`:X(n,3,10,10,4,`#c9956f`),X(n,3,10,10,1,`#e6c19f`),X(n,7,2,2,6,`#ff8fb0`),Y(n,6,6,`#ff8fb0`),Y(n,9,6,`#ff8fb0`),Y(n,5,5,`#ff8fb0`),Y(n,10,5,`#ff8fb0`);break;case`help`:Z(n,8,8,6.5,6.5,`#ffe29a`),X(n,6,3,4,1,wf),Y(n,5,4,wf),Y(n,10,4,wf),Y(n,10,5,wf),Y(n,9,6,wf),Y(n,8,7,wf),Y(n,8,8,wf),Y(n,8,11,wf),Y(n,8,12,wf)}return rd(n,0,0,16,16,wf),t}var Ef={sound:[`............`,`....o.......`,`...oo...o...`,`.oooo....o..`,`.owwo..o..o.`,`.owwo...o.o.`,`.owwo...o.o.`,`.owwo..o..o.`,`.oooo....o..`,`...oo...o...`,`....o.......`,`............`],mute:[`............`,`....o.......`,`...oo.......`,`.oooo.p...p.`,`.owwo..p.p..`,`.owwo...p...`,`.owwo..p.p..`,`.owwo.p...p.`,`.oooo.......`,`...oo.......`,`....o.......`,`............`],home:[`............`,`.....oo.....`,`....owwo....`,`...owwwwo...`,`..owwwwwwo..`,`.owwwwwwwwo.`,`..owwooowo..`,`..owwoyowo..`,`..owwoyowo..`,`..oooooooo..`,`............`,`............`],swap:[`............`,`..o.........`,`.ooo....l...`,`ooooo...l...`,`..o.....l...`,`..o.....l...`,`..p.....l...`,`..p.....l...`,`..p...lllll.`,`..p....lll..`,`........l...`,`............`],invite:[`............`,`............`,`oooooooooooo`,`oowwwwwwwwoo`,`owowwwwwwowo`,`owwowwwwowwo`,`owwwowwowwwo`,`owwwwoowwwwo`,`owwwwwwwwwwo`,`oooooooooooo`,`............`,`............`],chat:[`............`,`..oooooooo..`,`.owwwwwwwwo.`,`owwwwwwwwwwo`,`owwowwowwowo`,`owwwwwwwwwwo`,`.owwwwwwwwo.`,`..ooowoooo..`,`....owo.....`,`....oo......`,`............`,`............`],act:[`.....o......`,`.....o......`,`....oyo.....`,`..oooyooo...`,`oooyyyyyooo.`,`..oooyooo...`,`....oyo.....`,`.....o...o..`,`.....o..oyo.`,`.........o..`,`............`,`............`],jump:[`.....oo.....`,`....owwo....`,`...owwwwo...`,`..owwwwwwo..`,`.oooowwoooo.`,`....owwo....`,`....owwo....`,`....owwo....`,`....oooo....`,`............`,`pppppppppppp`,`............`],camera:[`............`,`....oooo....`,`.oooowwoooo.`,`owwwwwwwwwwo`,`owwwooowwpwo`,`owwolllowwwo`,`owwolwlowwwo`,`owwolllowwwo`,`owwwooowwwwo`,`owwwwwwwwwwo`,`.oooooooooo.`,`............`],note:[`............`,`.....ooooo..`,`.....oyyyo..`,`.....oo..o..`,`.....o...o..`,`.....o...o..`,`..ooo..ooo..`,`.oyyyo.oyyo.`,`.oyyyo.oyyo.`,`..ooo...oo..`,`............`,`............`],album:[`............`,`.oooooooooo.`,`.opppppwwwo.`,`.opooopwwwo.`,`.opppppwwwo.`,`.opppppwllo.`,`.opppppwlwo.`,`.opppppwwwo.`,`.opppppwwwo.`,`.oooooooooo.`,`............`,`............`],wardrobe:[`............`,`....oooo....`,`...o....o...`,`......oo....`,`.....o......`,`...oooooo...`,`..owwwwwwo..`,`.owwwwwwwwo.`,`owwwwwwwwwwo`,`oooooooooooo`,`............`,`............`]},Df={o:wf,w:`#ffffff`,y:`#f2b84b`,p:`#e67b9d`,l:`#8f7fe0`};function Of(e){let t=Ef[e]??Ef.act,[n,r]=q(12,12);return t.forEach((e,t)=>{for(let n=0;n<e.length;n++){let i=Df[e[n]];i&&Y(r,n,t,i)}}),n}var kf=new Map;function Af(e,t){let n=`${e}:${t}`,r=kf.get(n);return r||(r=(e===`e`?Tf(t):Of(t)).toDataURL(),kf.set(n,r)),r}var jf=e=>document.getElementById(e),Mf=(e,t)=>`<img class="${t}" src="${e}" alt="" draggable="false">`,Nf=class{root=jf(`hud`);objText=jf(`objText`);status=jf(`status`);statusText=jf(`statusText`);dialog=jf(`dialog`);dName=this.dialog.querySelector(`.name`);dText=this.dialog.querySelector(`.text`);narr=jf(`narration`);narrText=jf(`narrText`);card=jf(`titleCard`);wheel=jf(`emoteWheel`);prompt=jf(`prompt`);actLabel=jf(`actLabel`);actIcon=jf(`actIcon`);toastEl=jf(`toast`);marksLayer=jf(`marks`);bubbles={0:null,1:null};bubbleLayer=jf(`bubbles`);line=null;lineKind=null;typed=0;hold=0;autoAdvance=!0;toastT=0;marks=[];onEmote=null;onType=null;sceneMode=!1;fast=!1;constructor(){jf(`btnInvite`).innerHTML=Mf(Af(`u`,`invite`),`pi`),jf(`btnSwap`).innerHTML=Mf(Af(`u`,`swap`),`pi`),jf(`btnHome`).innerHTML=Mf(Af(`u`,`home`),`pi`),this.setMuted(!1),jf(`btnEmote`).innerHTML=Mf(Af(`u`,`chat`),`pi`),jf(`btnJump`).innerHTML=Mf(Af(`u`,`jump`),`pi`),this.actIcon.src=Af(`u`,`act`),t.forEach((e,t)=>{let n=document.createElement(`button`);n.className=`emo`,n.innerHTML=`${Mf(Af(`e`,e.kind),`i`)}<span class="l">${e.label}</span><span class="k">${t+1}</span>`,n.addEventListener(`pointerdown`,t=>{t.preventDefault(),t.stopPropagation(),this.onEmote?.(e.kind),this.toggleWheel(!1)}),this.wheel.appendChild(n)}),this.wheel.addEventListener(`pointerdown`,e=>{e.target===this.wheel&&this.toggleWheel(!1)});for(let e of[this.dialog,this.narr,this.card])e.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),this.advance()})}show(e){this.root.classList.toggle(`hidden`,!e)}setObjective(e){let t=this.objText.parentElement;t.classList.toggle(`hidden`,!e),this.objText.textContent!==e&&(this.objText.textContent=e,t.classList.remove(`flash`),t.offsetWidth,t.classList.add(`flash`))}setStatus(e,t=``,n=!1){this.statusText.textContent=e,this.status.className=`pill ${t}`,this.status.classList.toggle(`hidden`,!e),jf(`btnReload`).classList.toggle(`hidden`,!n)}setButtons(e){jf(`btnSwap`).classList.toggle(`hidden`,!e.swap),jf(`btnInvite`).classList.toggle(`hidden`,!e.invite)}setMuted(e){jf(`btnMute`).innerHTML=Mf(Af(`u`,e?`mute`:`sound`),`pi`)}setScene(e){this.sceneMode=e,this.root.classList.toggle(`scene`,e)}toggleWheel(e){let t=e??this.wheel.classList.contains(`hidden`);this.wheel.classList.toggle(`hidden`,!t)}get wheelOpen(){return!this.wheel.classList.contains(`hidden`)}get textIdle(){return!this.line}say(e,t=!0){this.clearText(),this.line=e,this.lineKind=`say`,this.autoAdvance=t,this.typed=0,this.hold=Math.max(2.2,e.text.length*.07),this.dName.textContent=e.who,this.dName.classList.toggle(`hidden`,!e.who),this.dialog.classList.toggle(`system`,!e.who),this.dialog.classList.toggle(`think`,!!e.think),this.dialog.classList.toggle(`grandma`,e.who===`할머니`),this.dialog.classList.toggle(`ari`,e.who===`아리`),this.dText.textContent=``,this.dialog.classList.remove(`hidden`)}narrate(e){this.clearText(),this.line={who:``,text:e},this.lineKind=`narr`,this.autoAdvance=!1,this.typed=0,this.hold=Math.max(2.8,e.length*.08),this.narrText.textContent=``,this.narr.classList.remove(`hidden`)}titleCard(e,t){this.clearText(),this.line={who:e,text:t},this.lineKind=`title`,this.autoAdvance=!0,this.typed=t.length,this.hold=2.6,this.card.querySelector(`.no`).textContent=e,this.card.querySelector(`.tt`).textContent=t,this.card.classList.remove(`hidden`,`out`)}advance(){this.line&&(this.typed<this.line.text.length?(this.typed=this.line.text.length,this.render()):(this.hold=0,this.autoAdvance=!0))}clearText(){this.line=null,this.lineKind=null,this.dialog.classList.add(`hidden`),this.narr.classList.add(`hidden`),this.card.classList.add(`hidden`)}render(){if(!this.line)return;let e=this.line.text.slice(0,Math.floor(this.typed));this.lineKind===`say`?this.dText.textContent=e:this.lineKind===`narr`&&(this.narrText.textContent=e)}update(e,t){if(this.line){let t=this.fast?400:this.lineKind===`narr`?26:36;if(this.typed<this.line.text.length){let n=Math.floor(this.typed);this.typed=Math.min(this.line.text.length,this.typed+e*t),Math.floor(this.typed)!==n&&n%3==0&&this.onType?.(),this.render()}else{let t=this.fast?.02:this.sceneMode&&!this.autoAdvance?6:1;this.hold-=e/t,this.lineKind===`title`&&this.hold<.6&&this.card.classList.add(`out`),this.hold<=0&&this.clearText()}}for(let e of[0,1]){let n=this.bubbles[e];n&&t>n.until&&(n.el.remove(),this.bubbles[e]=null)}this.toastT>0&&(this.toastT-=e,this.toastT<=0&&this.toastEl.classList.remove(`show`))}emote(e,n,r,i){let a=t.find(e=>e.kind===n);if(!a)return;this.bubbles[e]?.el.remove();let o=document.createElement(`div`);o.className=`bubble ${i?`mine`:`theirs`}`,o.innerHTML=`${Mf(Af(`e`,a.kind),`i`)}<span class="l">${a.label}</span>`,this.bubbleLayer.appendChild(o),this.bubbles[e]={el:o,until:r+2.8}}placeBubble(e,t,n,r){let i=this.bubbles[e];i&&(i.el.style.transform=`translate(${t}px, ${n}px) translate(-50%, -100%)`,i.el.style.opacity=r?`1`:`0`)}setPrompt(e,t=0,n=0){if(!e){this.prompt.classList.add(`hidden`);return}this.prompt.textContent=e,this.prompt.classList.remove(`hidden`),this.prompt.style.transform=`translate(${t}px, ${n}px) translate(-50%, -100%)`}setAction(e,t,n){this.actLabel.textContent!==e&&(this.actLabel.textContent=e);let r=Af(`u`,t);this.actIcon.getAttribute(`src`)!==r&&(this.actIcon.src=r),jf(`btnAct`).classList.toggle(`ready`,n)}toast(e,t=2.4){this.toastEl.textContent=e,this.toastEl.classList.add(`show`),this.toastT=t}addMark(e,t,n,r,i){let a=this.marks.filter(e=>e.mine===i);if(a.length>=3){let e=a[0];e.el.remove(),this.marks.splice(this.marks.indexOf(e),1)}let o=document.createElement(`div`);o.className=`mark ${i?`mine`:`theirs`}`,o.innerHTML=`<i></i><b></b>`,this.marksLayer.appendChild(o),this.marks.push({el:o,w:e,x:t,y:n,t:r,mine:i})}get markList(){return this.marks}updateMarks(e,t,n,r=3.2){for(let i=this.marks.length-1;i>=0;i--){let a=this.marks[i],o=e-a.t;if(o>r){a.el.remove(),this.marks.splice(i,1);continue}let s=t(a.w,a.x,a.y);a.el.style.transform=`translate(${s.x}px, ${s.y}px)`,a.el.style.opacity=n?`0`:String(Math.min(1,(r-o)/.8))}}clearMarks(){for(let e of this.marks)e.el.remove();this.marks=[]}showEnding(e,t,n=!0){let r=jf(`ending`);t&&(r.querySelector(`.etitle`).textContent=t.title,r.querySelector(`.ebody`).textContent=t.body,r.querySelector(`.esub`).textContent=t.sub??``),jf(`btnNewSummer`).classList.toggle(`hidden`,!n),r.classList.toggle(`hidden`,!e)}showInvite(e,t=``,n=``){jf(`invite`).classList.toggle(`hidden`,!e),e&&(jf(`inviteCode`).textContent=n,jf(`inviteLink`).value=t)}showPage(e,t=``,n=``){let r=jf(`diaryPage`);r.classList.toggle(`hidden`,!e),e&&(r.querySelector(`.date`).textContent=t,r.querySelector(`.body`).textContent=n)}get pageOpen(){return!jf(`diaryPage`).classList.contains(`hidden`)}showKeep(e,t,n){let r=jf(`keepPop`);r.querySelector(`.kname`).textContent=e,r.querySelector(`.kdesc`).textContent=t;let i=r.querySelector(`img`);i.classList.toggle(`hidden`,!n),n&&(i.src=n),r.classList.remove(`hidden`),r.classList.remove(`show`),r.offsetWidth,r.classList.add(`show`),clearTimeout(r._t),r._t=window.setTimeout(()=>r.classList.add(`hidden`),4200)}flashScreen(){let e=jf(`flashFx`);e.classList.remove(`go`),e.offsetWidth,e.classList.add(`go`)}},Pf=class{steps=[];i=0;t=0;started=!1;done=null;host;running=!1;fast=!1;constructor(e){this.host=e}run(e,t){this.steps=e,this.i=0,this.t=0,this.started=!1,this.done=t,this.running=e.length>0,this.running||t()}stop(){this.running=!1,this.steps=[],this.done=null}update(e){if(!this.running)return;let t=0;for(;this.running&&t++<50;){let t=this.steps[this.i];if(!t){this.finish();return}if(this.started||(this.started=!0,this.t=0,this.begin(t)),this.t+=e,e=0,!this.isDone(t))return;this.i++,this.started=!1}}finish(){this.running=!1;let e=this.done;this.done=null,e?.()}begin(e){let t=this.host;switch(e.t){case`title`:t.title(e.no,e.title);break;case`narr`:t.narrate(e.text);break;case`say`:t.say(e.who,e.text,!!e.think);break;case`cam`:t.camera(e.x);break;case`fade`:t.fade(e.to,this.fast?.05:e.s);break;case`sfx`:t.sfx(e.name);break;case`hum`:t.hum(e.s);break;case`give`:t.give(e.what);break;case`clarity`:t.clarity(e.v);break;case`view`:t.view(e.s);break;case`npc`:t.npc(e.id,e.pose,e.x,e.face);break;case`young`:t.young(e.on);break;case`dawn`:t.dawn(e.v);break;case`hide`:t.hide(e.on)}}isDone(e){let t=this.host;switch(e.t){case`title`:case`narr`:case`say`:return t.textDone();case`walk`:return this.fast||this.t>9?t.walkTo(e.x,e.face,!0):t.walkTo(e.x,e.face);case`wait`:return this.fast||this.t>=e.s;case`fade`:return this.fast||this.t>=e.s;default:return!0}}},Ff=class{keys=new Set;joyMove=0;jumpTouch=!1;jumpQueued=!1;interactQueued=!1;abilityQueued=!1;actDown=!1;emoteQueued=!1;swapQueued=!1;advanceQueued=!1;taps=[];joyId=null;joyOrigin={x:0,y:0};enabled=!0;onAnyInput=null;constructor(e){window.addEventListener(`keydown`,e=>{if(e.target instanceof HTMLInputElement)return;let t=e.key.toLowerCase();[`arrowleft`,`arrowright`,`arrowup`,` `,`tab`].includes(t)&&e.preventDefault(),!e.repeat&&(this.keys.add(t),(t===` `||t===`arrowup`||t===`w`||t===`k`)&&(this.jumpQueued=!0),(t===`e`||t===`j`||t===`enter`)&&(this.interactQueued=!0),(t===`f`||t===`l`)&&(this.abilityQueued=!0),(t===`q`||t===`t`)&&(this.emoteQueued=!0),t===`tab`&&(this.swapQueued=!0),(t===` `||t===`e`||t===`enter`||t===`j`)&&(this.advanceQueued=!0),this.onAnyInput?.())}),window.addEventListener(`keyup`,e=>this.keys.delete(e.key.toLowerCase())),window.addEventListener(`blur`,()=>{this.keys.clear(),this.joyMove=0,this.jumpTouch=!1,this.actDown=!1}),e.addEventListener(`pointerdown`,e=>{this.taps.push({x:e.clientX,y:e.clientY}),this.onAnyInput?.()})}bindJoystick(e,t){let n=(e,n)=>{let r=e-this.joyOrigin.x,i=n-this.joyOrigin.y,a=Math.hypot(r,i),o=a>46?46/a:1;t.style.transform=`translate(${r*o}px, ${i*o}px)`;let s=r*o/46;this.joyMove=Math.abs(s)<.18?0:Math.max(-1,Math.min(1,s*1.25))};e.addEventListener(`pointerdown`,t=>{if(this.joyId!==null)return;this.joyId=t.pointerId,e.setPointerCapture(t.pointerId);let r=e.getBoundingClientRect();this.joyOrigin={x:r.left+r.width/2,y:r.top+r.height/2},n(t.clientX,t.clientY),e.classList.add(`active`),this.onAnyInput?.()}),e.addEventListener(`pointermove`,e=>{e.pointerId===this.joyId&&n(e.clientX,e.clientY)});let r=n=>{n.pointerId===this.joyId&&(this.joyId=null,this.joyMove=0,t.style.transform=``,e.classList.remove(`active`))};e.addEventListener(`pointerup`,r),e.addEventListener(`pointercancel`,r)}bindButton(e,t){e.addEventListener(`pointerdown`,n=>{n.preventDefault(),e.classList.add(`pressed`),t===`jump`&&(this.jumpQueued=!0,this.jumpTouch=!0,this.advanceQueued=!0),t===`act`&&(this.interactQueued=!0,this.abilityQueued=!0,this.actDown=!0,this.advanceQueued=!0),t===`emote`&&(this.emoteQueued=!0),t===`swap`&&(this.swapQueued=!0),this.onAnyInput?.()});let n=()=>{e.classList.remove(`pressed`),t===`jump`&&(this.jumpTouch=!1),t===`act`&&(this.actDown=!1)};e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n),e.addEventListener(`pointerleave`,n)}get move(){if(!this.enabled)return 0;let e=this.joyMove;return(this.keys.has(`arrowleft`)||this.keys.has(`a`))&&--e,(this.keys.has(`arrowright`)||this.keys.has(`d`))&&(e+=1),Math.max(-1,Math.min(1,e))}get jumpHeld(){return this.enabled&&(this.jumpTouch||this.keys.has(` `)||this.keys.has(`arrowup`)||this.keys.has(`w`)||this.keys.has(`k`))}get abilityHeld(){return this.enabled&&(this.actDown||this.keys.has(`f`)||this.keys.has(`l`))}take(){let e=this.enabled&&this.jumpQueued;return this.jumpQueued=!1,{move:this.move,jumpPressed:e,jumpHeld:this.jumpHeld}}consumeInteract(){let e=this.interactQueued&&this.enabled;return this.interactQueued=!1,e}consumeAbility(){let e=this.abilityQueued&&this.enabled;return this.abilityQueued=!1,e}dropAbility(){this.abilityQueued=!1}dropInteract(){this.interactQueued=!1}consumeEmote(){let e=this.emoteQueued;return this.emoteQueued=!1,e}consumeSwap(){let e=this.swapQueued;return this.swapQueued=!1,e}consumeAdvance(){let e=this.advanceQueued;return this.advanceQueued=!1,e}consumeTaps(){let e=this.taps;return this.taps=[],e}clearQueued(){this.jumpQueued=!1,this.interactQueued=!1,this.abilityQueued=!1,this.advanceQueued=!1}},If={speed:4.3,accelGround:40,accelAir:24,gravity:26,jumpV:9.6,maxFall:16,coyote:.1,buffer:.13,stepUp:.32,splashDepth:-.45};function Lf(e,t){return{x:e,y:t,vx:0,vy:0,w:.56,h:1,grounded:!0,gk:`solid`,gid:``,centered:!0}}function Rf(e,t,n){return e<t?Math.min(e+n,t):e>t?Math.max(e-n,t):e}var zf=(e,t)=>e.x+e.w/2>t.x0&&e.x-e.w/2<t.x1,Bf=(e,t)=>e.y+e.h>t.y0&&e.y<t.y1;function Vf(){return{coyote:0,jumpBuf:0,jumpCut:!1}}function Hf(e,t,n,r,i,a,o){let s={jumped:!1,landed:!1,splashed:!1},c=e.grounded,l=n.move*If.speed;e.vx=Rf(e.vx,l,(c?If.accelGround:If.accelAir)*r),t.coyote=c?If.coyote:Math.max(0,t.coyote-r),t.jumpBuf=n.jumpPressed?If.buffer:Math.max(0,t.jumpBuf-r),t.jumpBuf>0&&t.coyote>0&&(e.vy=If.jumpV,t.jumpBuf=0,t.coyote=0,t.jumpCut=!1,e.grounded=!1,s.jumped=!0),!n.jumpHeld&&e.vy>0&&!t.jumpCut&&!c&&(e.vy*=.5,t.jumpCut=!0),e.vy=Math.max(e.vy-If.gravity*r,-If.maxFall);let u=e.x;e.x+=e.vx*r;for(let t of i){if(t.oneWay||!zf(e,t)||!Bf(e,t))continue;let n=t.y1-e.y;if(c&&n>0&&n<=If.stepUp){e.y=t.y1;continue}e.x=u<=t.x0+(t.x1-t.x0)/2?t.x0-e.w/2-1e-4:t.x1+e.w/2+1e-4,e.vx=0}e.x<o.minX?(e.x=o.minX,e.vx=0):e.x>o.maxX&&(e.x=o.maxX,e.vx=0);let d=e.y;e.y+=e.vy*r,e.grounded=!1,e.gk=`none`,e.gid=``,e.centered=!1;for(let t of i)if(zf(e,t)){if(t.oneWay){e.vy<=0&&d>=t.y1-.06&&e.y<=t.y1&&Uf(e,t);continue}Bf(e,t)&&(e.vy<=0&&d>=t.y1-.08?Uf(e,t):e.vy>0&&d+e.h<=t.y0+.08?(e.y=t.y0-e.h,e.vy=0):e.y+e.h/2>(t.y0+t.y1)/2&&Uf(e,t))}if(e.vy<=0)for(let t of a){let n=t.top(e.x);if(n===null)continue;let r=t.top(u)??0;e.y<=n&&d>=Math.min(n,r)-.36&&(!e.grounded||n>e.y)&&(e.y=n,e.vy=0,e.grounded=!0,e.gk=`arc`,e.gid=t.id,e.centered=!1)}return e.grounded&&!c&&(s.landed=!0),e.y<If.splashDepth&&(s.splashed=!0),s}function Uf(e,t){e.y=t.y1,e.vy=0,e.grounded=!0,e.gk=t.kind,e.gid=t.id,e.centered=e.x>=t.x0&&e.x<=t.x1}var Wf={move:0,jumpPressed:!1,jumpHeld:!1},Gf=20,Kf=class{role;body;ctl=Vf();face=1;anim=`idle`;animTime=0;lastSafe;hidden=!1;respawnT=0;squash=0;remote=!1;present=!0;idleT=0;sleeping=!1;singing=!1;actT=0;target=null;targetAge=0;constructor(e,t=0,n=1.5){this.role=e,this.body=Lf(t,n),this.lastSafe={x:t,y:n}}place(e,t,n=1){this.body=Lf(e,t),this.ctl=Vf(),this.lastSafe={x:e,y:t},this.hidden=!1,this.respawnT=0,this.face=n,this.target=null,this.idleT=0,this.sleeping=!1}step(e,t,n,r,i){if(this.hidden)return this.respawnT-=e,this.respawnT<=0?(this.hidden=!1,this.body=Lf(this.lastSafe.x,this.lastSafe.y),this.ctl=Vf(),this.squash=1,{jumped:!1,landed:!0,splashed:!1}):null;let a=t??Wf,o=Hf(this.body,this.ctl,a,e,n,r,i);a.move>.1?this.face=1:a.move<-.1&&(this.face=-1),o.landed&&(this.squash=1),this.body.grounded&&this.body.centered&&(this.body.gk===`solid`||this.body.gk===`bridge`)&&!this.body.gid.startsWith(`stone:`)&&(this.lastSafe={x:this.body.x,y:this.body.y}),o.splashed&&(this.hidden=!0,this.respawnT=.75);let s=Math.abs(a.move)>.05||a.jumpPressed||!this.body.grounded||this.singing||this.actT>0;return this.idleT=s?0:this.idleT+e,this.sleeping=this.idleT>Gf,this.actT>0&&(this.actT=Math.max(0,this.actT-e)),this.updateAnim(e),o}carry(e){this.body.y+=e}settle(e){this.body.vx=0,this.updateAnim(e)}updateAnim(e){let t=this.body,n;n=t.grounded?this.sleeping?`sit`:this.actT>0?`act`:Math.abs(t.vx)>.4?`walk`:`idle`:t.vy>.5?`jump`:`fall`,n===this.anim?this.animTime+=e:(this.anim=n,this.animTime=0),this.squash=Math.max(0,this.squash-e*5)}netState(){let e=this.body;return{r:this.role,x:+e.x.toFixed(3),y:+e.y.toFixed(3),vx:+e.vx.toFixed(2),vy:+e.vy.toFixed(2),f:this.face,a:this.anim,g:this.hidden?`none`:e.gk,gid:e.gid,hidden:this.hidden,sleep:this.sleeping||void 0,sing:this.singing||void 0}}receive(e){let t=this.hidden;this.target=e,this.targetAge=0,this.face=e.f,this.hidden=e.hidden,this.sleeping=!!e.sleep,this.singing=!!e.sing,this.body.gk=e.g,this.body.gid=e.gid,this.body.grounded=e.g!==`none`;let n=e.x-this.body.x,r=e.y-this.body.y;(n*n+r*r>9||t&&!e.hidden)&&(this.body.x=e.x,this.body.y=e.y,t&&!e.hidden&&(this.squash=1))}smoothRemote(e){let t=this.target;if(!t)return;this.targetAge+=e;let n=Math.min(this.targetAge,.12),r=t.x+t.vx*n,i=t.g===`none`?t.y+t.vy*n:t.y,a=1-Math.exp(-e*14);this.body.x+=(r-this.body.x)*a,this.body.y+=(i-this.body.y)*a,this.body.vx=t.vx,this.body.vy=t.vy;let o=this.anim;this.anim=t.a,o===this.anim?this.animTime+=e:(this.animTime=0,(o===`fall`||o===`jump`)&&(t.a===`idle`||t.a===`walk`)&&(this.squash=1)),this.squash=Math.max(0,this.squash-e*5)}},qf=`nsm:save:v1`,Jf={v:1,clears:0,trueEnd:!1,reached:`ch1`,keeps:[],diary:[],eggs:[],photos:[],looks:{0:{outfit:`dress`,hair:`pink`,acc:`none`},1:{outfit:`blouse`,hair:`lavender`,acc:`none`}},soloChapter:`ch1`},Yf=null;function Xf(){if(Yf)return Yf;try{let e=localStorage.getItem(qf),t=e?JSON.parse(e):{};Yf={...structuredClone(Jf),...t,looks:{...Jf.looks,...t.looks??{}}}}catch{Yf=structuredClone(Jf)}return Yf}function Zf(e){let t=Xf();e?.(t);try{localStorage.setItem(qf,JSON.stringify(t))}catch{t.photos=t.photos.slice(-6);try{localStorage.setItem(qf,JSON.stringify(t))}catch{}}}function Qf(e){Zf(t=>{r.indexOf(e)>r.indexOf(t.reached)&&(t.reached=e)})}var $f=(e,t)=>r.indexOf(e.reached)>=r.indexOf(t)||e.clears>0,ep=()=>!0,tp={0:[{id:`dress`,name:`여름 원피스`,unlocked:ep,hint:``},{id:`overalls`,name:`멜빵 반바지`,unlocked:ep,hint:``},{id:`raincoat`,name:`노란 우비`,unlocked:e=>$f(e,`ch2`),hint:`1장을 끝내면 열려요`},{id:`pajama`,name:`줄무늬 잠옷`,unlocked:e=>$f(e,`ch3`),hint:`2장을 끝내면 열려요`},{id:`hanbok`,name:`여름 한복`,unlocked:e=>e.clears>0,hint:`엔딩을 보면 열려요`}],1:[{id:`blouse`,name:`블라우스와 멜빵치마`,unlocked:ep,hint:``},{id:`onepiece`,name:`땡땡이 원피스`,unlocked:ep,hint:``},{id:`school`,name:`1973년 교복`,unlocked:e=>$f(e,`ch2`),hint:`1장을 끝내면 열려요`},{id:`pajama`,name:`무명 잠옷`,unlocked:e=>$f(e,`ch3`),hint:`2장을 끝내면 열려요`},{id:`hanbok`,name:`여름 한복`,unlocked:e=>e.clears>0,hint:`엔딩을 보면 열려요`}]},np={0:[{id:`pink`,name:`벚꽃 분홍`,unlocked:ep,hint:``},{id:`brown`,name:`코코아`,unlocked:ep,hint:``},{id:`sky`,name:`하늘`,unlocked:e=>e.keeps.length>=3,hint:`추억을 3개 모으면 열려요`},{id:`mint`,name:`민트`,unlocked:e=>e.clears>0,hint:`엔딩을 보면 열려요`}],1:[{id:`lavender`,name:`라벤더`,unlocked:ep,hint:``},{id:`black`,name:`먹색`,unlocked:ep,hint:``},{id:`chestnut`,name:`밤색`,unlocked:e=>e.keeps.length>=3,hint:`추억을 3개 모으면 열려요`},{id:`peach`,name:`복숭아`,unlocked:e=>e.clears>0,hint:`엔딩을 보면 열려요`}]},rp=[{id:`none`,name:`없음`,unlocked:ep,hint:``},{id:`straw`,name:`밀짚모자`,unlocked:e=>$f(e,`ch2`),hint:`1장을 끝내면 열려요`},{id:`crown`,name:`꽃 화관`,unlocked:e=>e.keeps.length>=6,hint:`추억을 6개 모으면 열려요`},{id:`cat`,name:`고양이 귀`,unlocked:e=>e.eggs.includes(`ariria`),hint:`방 코드 칸에 비밀 주문을 넣어 보세요`}];function ip(e,t,n=Xf()){let r=(e,t,r)=>e.find(e=>e.id===t)?.unlocked(n)?t:r;return{outfit:r(tp[e],t.outfit,tp[e][0].id),hair:r(np[e],t.hair,np[e][0].id),acc:r(rp,t.acc,`none`)}}function ap(e){let t=e;return!!t&&(t.r===0||t.r===1)&&!!t.look&&typeof t.look.outfit==`string`&&typeof t.look.hair==`string`&&typeof t.look.acc==`string`}var Q=(e,t)=>({t:`say`,who:e,text:t}),op=(e,t)=>({t:`say`,who:e,text:t,think:!0}),sp=e=>({t:`narr`,text:e}),cp=(e,t)=>e?[op(`할머니`,t)]:[];function lp(e,t,n){return e===`ch1`?t===0?[{t:`cam`,x:-10},{t:`fade`,to:0,s:1.4},{t:`title`,no:`프롤로그`,title:`호숫가 집`},sp(`여름방학. 엄마는 일이 바빠서, 나 혼자 할머니 댁에 가게 됐다.`),sp(`산을 두 번 넘고, 버스에서 내려 한참 걸으면 나오는 호숫가 집.`),{t:`walk`,x:-6.9,face:-1},Q(`할머니`,`…왔구나. 기다렸어.`),...cp(n,`(쉰 번째 여름이구나.)`),Q(`리아`,`할머니! 나 리아야. 알아보겠어?`),Q(`할머니`,`리아… 그래, 리아. 물속에서 보던 얼굴 그대로네.`),...cp(n,`(그 애야. 틀림없어.)`),op(`리아`,`(엄마 말대로네. 할머니가 요즘 자꾸 깜빡하신다더니…)`),{t:`hum`,s:3.2},Q(`할머니`,`♪ 윤슬아 윤슬아, 물 건너 오너라…`),Q(`할머니`,`이거, 네가 가지렴. 달못에 두고 온 줄 알았는데… 여기 있더라.`),{t:`give`,what:`hairpin`},{t:`sfx`,name:`pickup`},Q(``,`할머니가 별 머리핀을 꽂아 주셨다.`),Q(`할머니`,`해 질 녘에 호수에 윤슬이 뜨거든, 물속을 잘 보렴.`),Q(`할머니`,`그 애한테 전해 주렴. 나, 약속 잊지 않았다고.`),Q(`리아`,`그 애가 누군데? …할머니?`),{t:`hum`,s:2.4},sp(`할머니는 대답 대신 자장가만 흥얼거리셨다.`),{t:`cam`,x:null},{t:`walk`,x:-1.2,face:1},{t:`title`,no:`1장`,title:`물속의 아이`}]:[{t:`cam`,x:-10},{t:`fade`,to:0,s:1.4},{t:`title`,no:`프롤로그`,title:`1973년, 달못 마을`},sp(`칠석까지 이레 남은 밤.`),sp(`칠석 이튿날 새벽, 은하댐이 수문을 닫으면 달못 마을은 물에 잠긴다.`),{t:`walk`,x:-10.4,face:-1},Q(`엄마`,`아리야, 네 짐도 싸 둬야지. 이제 곧 떠나야 해.`),Q(`아리`,`…싫어. 난 여기가 좋아.`),Q(`엄마`,`엄마도 그래. 그래도 어쩔 수 없잖니.`),op(`아리`,`(마을이 물에 잠기면… 별이는? 감나무는? 우리 달못은?)`),Q(`엄마`,`옛날 얘기 알지? 칠석을 앞둔 이레 동안 달못에 윤슬이 뜨면, 물에 비친 사람이 다른 여름을 걷는대.`),Q(`아리`,`다른 여름…?`),Q(`엄마`,`외할머니한테 들은 얘기야. 외할머니 자장가 불러 주면 달맞이꽃도 핀다더라.`),Q(`아리`,`…달못에 잠깐 다녀올게.`),{t:`cam`,x:null},{t:`walk`,x:-1.2,face:1},{t:`title`,no:`1장`,title:`물속의 아이`}]:e===`ch2`?t===0?[{t:`cam`,x:-10},{t:`fade`,to:0,s:1.2},{t:`title`,no:`2장`,title:`감나무 아래`},sp(`사흘 뒤. 할머니는 오늘도 호수만 바라보고 계셨다.`),{t:`walk`,x:-6.9,face:-1},Q(`할머니`,`리아야, 감나무는 잘 있더냐? 우리 아버지가 심으신…`),Q(`리아`,`감나무? 호수 가운데 섬에 있는 큰 나무?`),Q(`할머니`,`그 밑에 뭘 묻었는데… 생각이 안 나. 뭐였더라.`),...cp(n,`(물속 공주님께 줄 선물이었지.)`),op(`리아`,`(안내판에 호수 밑에 옛 마을이 잠겨 있다고 했어. 그럼 아리는… 물귀신? 아니야. 그렇게 안 보였어.)`),Q(`리아`,`내가 가 보고 올게, 할머니!`),{t:`cam`,x:null},{t:`walk`,x:-.5,face:1}]:[{t:`cam`,x:-10},{t:`fade`,to:0,s:1.2},{t:`title`,no:`2장`,title:`감나무 아래`},sp(`사흘 뒤. 마을 사람 절반이 벌써 떠났다.`),{t:`walk`,x:-10.4,face:-1},Q(`엄마`,`아리야, 요즘 누구랑 그렇게 신나게 노니?`),Q(`아리`,`물속 공주님이랑. 물속에도 서울이 있대.`),Q(`엄마`,`용궁 공주님이 우리 아리 데리러 왔나 보다.`),op(`아리`,`(마을이 물에 잠기면 리아네 세상이 되는 거겠지? 그럼 감나무 밑에 보물 상자를 묻어 두자. 리아가 찾을 수 있게.)`),{t:`sfx`,name:`pickup`},Q(``,`아리가 보물 상자를 품에 챙겼다.`),{t:`cam`,x:null},{t:`walk`,x:-.5,face:1}]:e===`ch3`?t===0?[{t:`cam`,x:-10},{t:`fade`,to:0,s:1.2},{t:`title`,no:`3장`,title:`칠석`},sp(`칠석. 할머니는 오늘 나를 알아보지 못하셨다.`),{t:`walk`,x:-6.9,face:-1},Q(`할머니`,`(잠결에) 약속… 약속했는데…`),...cp(n,`(오늘이구나. 오늘이 그날이야.)`),op(`리아`,`(할머니가 준 머리핀, 아리 머리핀이랑 똑같아. 상자 속 그림에서도. 정말 우연일까?)`),Q(`리아`,`할머니, 다녀올게. 아리한테 꼭 물어볼 게 있어.`),{t:`cam`,x:null},{t:`walk`,x:-.5,face:1}]:[{t:`cam`,x:-10},{t:`fade`,to:0,s:1.2},{t:`title`,no:`3장`,title:`칠석`},sp(`칠석. 동이 트면 떠난다. 마을엔 우리 식구만 남았다.`),{t:`walk`,x:-10.4,face:-1},Q(`엄마`,`해 뜨기 전에 떠날 거야. 마지막으로 인사하고 오렴.`),Q(`아리`,`엄마, 칠석엔 까치랑 까마귀가 은하수에 다리를 놓아 준다고 했지?`),Q(`엄마`,`그래. 견우랑 직녀가 일 년에 한 번 만나라고.`),op(`아리`,`(그럼 오늘 밤엔… 리아를 진짜로 만날 수 있을지도 몰라.)`),{t:`cam`,x:null},{t:`walk`,x:-.5,face:1}]:[]}function up(e,t){return e===`ch1`?[{t:`sfx`,name:`ending`},{t:`clarity`,v:1},{t:`wait`,s:1.4},Q(`리아`,`…보인다. 이제 똑똑히 보여.`),Q(`아리`,`너… 용궁에서 왔어? 물속 공주님이야?`),Q(`리아`,`용궁? 아니, 난 서울에서 왔는데? 할머니 댁에 놀러 왔어.`),Q(`아리`,`서울? 물속에도 서울이 있어?`),Q(`리아`,`물속은 너잖아! 넌 누구야?`),Q(`아리`,`난 아리. 달못 마을 사는 한아리.`),Q(`리아`,`난 리아. …어? 우리 이름 거꾸로네.`),Q(`아리`,`진짜네, 거꾸로다! 그리고 너도 별 머리핀 했네. 나랑 똑같아.`),Q(`리아`,`이거? 할머니가 줬어. 흔한 건가 봐.`),...t?[op(`아리`,`(…왜일까. 너를 아주 오래전부터 알았던 것 같아.)`)]:[],Q(`아리`,`여기가 달못이야. 우리 마을 연못.`),Q(`리아`,`여긴 은하호인데…? 엄청 큰 호수야.`),Q(`아리`,`호수? 우리 마을엔 그런 거 없어.`),op(`리아`,`(할머니가 말한 달못… 여기였어?)`),{t:`clarity`,v:.3},Q(`아리`,`윤슬이 옅어진다. 사흘 뒤에 또 와! 보여 줄 게 있어.`),Q(`리아`,`응, 꼭!`),{t:`clarity`,v:0},{t:`fade`,to:1,s:1.6}]:e===`ch2`?[{t:`sfx`,name:`dig`},{t:`clarity`,v:.8},sp(`녹슨 양철 상자. 안에는 크레파스 그림 한 장과 접힌 편지가 들어 있었다.`),Q(`리아`,`"물속 공주님께. 우리 마을이 물에 잠기면, 이제 너희 마을이 되는 거지? 감나무를 잘 부탁해."`),Q(`리아`,`"— 1973년 여름, 한아리"`),Q(`리아`,`1973년…? 이거, 50년도 더 전이야.`),Q(`아리`,`무슨 소리야? 지금이 1973년인데.`),Q(`리아`,`아리야… 난 2026년에 살아.`),Q(`아리`,`……`),Q(`아리`,`그럼 우리 마을은 정말로… 물에 잠기는구나.`),Q(`리아`,`응. 호수가 됐어. 근데 진짜 예뻐. 윤슬이 반짝이고, 네 감나무는 섬에서 제일 큰 나무가 됐어.`),Q(`아리`,`…다행이다. 감나무는 살아 있구나.`),Q(`아리`,`그 그림은 너야. 물속 공주님.`),op(`리아`,`(그림 속 아이는 별 머리핀을 꽂고 있었다. 아리 머리핀이랑 똑같은.)`),...t?[op(`리아`,`(할머니 댁 벽에 걸린 그림도, 크레파스였지.)`)]:[],Q(`아리`,`칠석 밤에 꼭 와. 그날이 마지막이래.`),Q(`리아`,`…응. 꼭 갈게.`),{t:`clarity`,v:0},{t:`fade`,to:1,s:1.6}]:e===`ch3`?[{t:`sfx`,name:`ending`},{t:`clarity`,v:1},{t:`wait`,s:1.2},Q(`리아`,`아리야, 물어볼 게 있어. 그 별 머리핀, 누가 만들어 줬어?`),Q(`아리`,`우리 아빠가. 깡통 뚜껑을 오려서. 세상에 하나뿐이야.`),Q(`리아`,`…나도 똑같은 거 있어. 할머니가 줬어. "달못에 두고 온 줄 알았는데"라면서.`),Q(`아리`,`달못…?`),Q(`리아`,`우리 할머니 이름은… 한아리야.`),Q(`아리`,`……!`),{t:`sfx`,name:`transfer`},Q(`아리`,`그럼… 너네 할머니가… 나야?`),Q(`리아`,`할머니가 매일 부르는 자장가도, 네 노래랑 똑같아.`),Q(`아리`,`나… 이사 가서도 잘 살았구나. 할머니가 됐구나. 그래서 네가 있는 거구나.`),Q(`리아`,`할머니가 요즘 자꾸 잊어버려. 오늘은 나도 못 알아봤어. 그래도 그 노래는 기억해.`),Q(`아리`,`그럼 내가 기억할게. 오늘을. 너를. 절대 안 잊을게.`),Q(`리아`,`할머니가 전해 달랬어. "약속 잊지 않았다"고.`),Q(`아리`,`약속…? 난 아직 아무 약속도 안 했는데.`),Q(`아리`,`…아, 그럼 지금 하면 되겠다.`),Q(`아리`,`우리, 다음 여름에 꼭 다시 만나.`),Q(`리아`,`다음 여름…? 너한텐 50년 뒤잖아.`),Q(`아리`,`응. 그래도 기다릴게. 리아. 네 이름 거꾸로 하면 내 이름이니까, 절대 안 까먹어.`),{t:`dawn`,v:1},sp(`동쪽 하늘이 밝아 온다. 멀리서 수문 닫히는 소리가 들렸다.`),{t:`clarity`,v:.4},Q(`아리`,`다음 여름에 만나!`),Q(`리아`,`…응. 다음 여름에.`),{t:`clarity`,v:0},{t:`fade`,to:1,s:2.2}]:[]}function dp(e,t,n){return[{t:`view`,s:1},{t:`hide`,on:e===1},{t:`cam`,x:-7},{t:`fade`,to:0,s:1.6},...e===1?[sp(`그 뒤로 쉰 번의 여름이 지났다.`)]:[sp(`다음 날 아침. 할머니가 마루에 앉아 계셨다.`)],{t:`title`,no:`에필로그`,title:`다음 여름`},{t:`walk`,x:-6.9,face:-1},Q(`할머니`,`리아야. 달못은 잘 있더냐?`),Q(`리아`,`할머니… 기억나?`),Q(`할머니`,`그럼. 쉰 해를 기다렸는걸.`),Q(`할머니`,`네가 태어나던 날, 얼굴을 보고 알았지. 물속에서 보던 그 아이구나.`),Q(`할머니`,`그래서 리아라고 지었단다. 거꾸로 하면 내 이름이니까. 절대 안 까먹으려고.`),Q(`리아`,`……`),{t:`hum`,s:3.2},Q(`할머니`,`♪ 윤슬아 윤슬아, 물 건너 오너라…`),Q(`할머니`,`약속 지켰지?`),Q(`할머니`,`다음 여름에 만나자고 했잖아.`),...n?[{t:`npc`,id:`grandma`,pose:`stand`,x:9.6,face:1},{t:`cam`,x:7},{t:`walk`,x:8.4,face:1},{t:`young`,on:!0},{t:`clarity`,v:1},sp(`할머니가 호수를 들여다보셨다. 물그림자 속에서 열두 살 아리가 웃으며 손을 흔들었다.`),Q(`할머니`,`…안녕, 아리야. 약속 지켰어.`),{t:`wait`,s:1.5}]:[],{t:`fade`,to:1,s:2.4}]}function fp(e,t,n){let r=t===0?`리아`:`아리`;switch(e){case`lit:lantern`:return t===0?[{who:r,text:`물속에… 별빛이 다리처럼 이어졌어!`}]:[{who:r,text:`하늘에서 별빛이 내려와 다리가 됐어! 물 위 아이가 해 준 걸까?`}];case`lit:moonflower`:return t===0?[{who:r,text:`연잎이 떠올랐어! 물속 아이가 노래를 불러 준 거야.`}]:[{who:r,text:`달맞이꽃이 폈어. 물 위에 연잎이 떠오르는 게 보여.`}];case`lit:chorong`:return t===0?[{who:r,text:`물속에서 초롱불이 켜지더니… 내 앞에 빛 다리가 생겼어!`}]:[{who:r,text:`청사초롱을 켰어. 물 위에 빛 다리가 놓였어!`}];case`lit:streetlamp`:return t===0?[{who:r,text:`가로등 빛이 물속 개울까지 닿았어!`}]:[{who:r,text:`물 위에서 빛이 내려와 개울에 다리가 생겼어!`}];case`pickup:marble:1`:return t===1?[{who:r,text:`찾았다! …이거, 물 위 아이한테 주고 싶어. 물에 떨어뜨리면 닿을까?`}]:[];case`transfer:marble:0`:return t===0?[{who:r,text:`물속에서 구슬이 떠올랐어! …근데 엄청 오래된 것처럼 뿌옇네.`}]:[{who:r,text:`구슬이 물 위로 건너갔어!`}];case`transfer:marble:1`:return t===1?[{who:r,text:`물 위에서 구슬이 내려왔어.`}]:[{who:r,text:`구슬이 물속으로 가라앉았어…`}];case`place:seokdeung`:return t===0?[{who:r,text:`석등에 구슬을 넣었더니 불이 켜졌어. 달맞이 다리가 빛나!`}]:[{who:r,text:`물 위에서 은은한 빛이 번져.`}];case`fireflies`:return t===1?[{who:r,text:`반딧불이 물 위로 날아올라! 계속 불러야지.`}]:[];case`pickup:bucket:1`:return t===1?[{who:r,text:`물동이 가득. 감나무한테 가자.`}]:[];case`respawn:bucket`:return t===1?[{who:r,text:`앗, 물동이가 떠내려갔다… 우물가에 하나 더 있어.`}]:[];case`watered`:return t===0?[{who:r,text:`어? 감나무 가지가… 쑥 자랐어! 섬까지 닿았어!`}]:[{who:r,text:`물을 줬더니 물 위의 큰 나무가 움직였어. …저건 설마, 우리 감나무야?`}];case`buried`:return t===1?[{who:r,text:`보물 상자를 묻었어. 리아가 꼭 찾아야 할 텐데.`}]:[{who:r,text:`물속에서 아리가 뭔가를 묻고 있어.`}];case`magpie`:return[{who:``,text:`까치가 날아올라 다리가 되었어요. (${n.magpies.length}/6)`}];case`splash10`:return[{who:`붕어`,text:`뻐끔. (물놀이 좋아하는구나?)`}]}return e.startsWith(`keep:`),[]}var pp=1/60,mp=new U(16773878),hp=class{renderer;input;audio=new Fu;hud=new Nf;director;session=null;st=Gu();prev=qu(this.st);ch=y(`ch1`);loadedKey=``;buoySink={};players=[new Kf(0),new Kf(1)];viewRole=0;running=!1;acc=0;time=0;camX=0;camOverride=null;sAmt=1;flip=null;ripples=[];sendT=0;worldSendT=0;saveT=0;worldDirty=!1;fade=1;fadeTarget=0;fadeSpeed=1;clarity=0;clarityTarget=0;glow=0;dawn=0;flashFx=0;hiddenPrev=[!1,!1];interactable=null;buoyRippleT=0;attractT=0;lastFrame=performance.now();exiting=!1;lastPartner=null;helloCount=0;fired=new Set;queue=[];scene=null;actor=0;hideChar=[!1,!1];grandma={};looks;partnerLook=null;gotPin=!1;singT=0;echoT=0;autoSing=0;photoPending=null;splashLocal=0;moonTaps=0;linkState=`starting`;linkDetail=``;endingShown=!1;onExit=null;constructor(e){this.renderer=new Cf(e),this.input=new Ff(e);let t=Xf();this.looks={0:ip(0,t.looks[0]),1:ip(1,t.looks[1])},this.director=new Pf(this.directorHost()),window.addEventListener(`resize`,()=>this.renderer.resize()),window.addEventListener(`orientationchange`,()=>setTimeout(()=>this.renderer.resize(),200)),this.bindUi(),this.players.forEach(e=>e.present=!1),this.renderer.stage.load(this.ch,this.st),this.loadedKey=`attract`,this.hud.onType=()=>this.audio.play(`type`,.5),requestAnimationFrame(e=>this.loop(e)),window.__yunseul=this.debugApi()}start(e,t={}){this.session=e,this.running=!0,this.exiting=!1,this.endingShown=!1,this.viewRole=e.myRole,this.lastPartner=null,this.helloCount=0,this.partnerLook=null,this.linkState=e.online?`starting`:`connected`;let n=e.mode===`solo`;this.st=Gu({chapter:t.chapter??`ch1`,ng:!!t.ng}),this.prev=qu(this.st);for(let t of this.players)t.remote=!n&&t.role!==e.myRole,t.present=n||t.role===e.myRole;e.isHost&&!n&&this.restoreHost(),this.hud.show(!0),this.hud.setButtons({swap:n,invite:!n&&e.isHost}),this.hud.showEnding(!1),this.hud.clearText(),this.hud.clearMarks(),this.sAmt=this.viewRole===0?1:-1,this.flip=null,this.applyLooks(),this.updateStatus(),e.attach({onLink:(e,t)=>{this.linkState=e,this.linkDetail=t??``,this.updateStatus()},onPeer:e=>this.onPeer(e),onHello:e=>this.onHello(e),onPlayer:e=>this.onPlayer(e),onWorld:e=>this.onWorld(e),onAction:e=>this.applyHostAction(e),onEmote:e=>this.showEmote(e.r,e.k,!1),onMark:e=>this.showMark(e,!1),onLook:e=>this.onLook(e)}),e.isHost?this.ensureChapter(!0):(this.fade=1,this.fadeTarget=.35)}exit(){this.exiting||(this.exiting=!0,this.fadeTarget=1,this.fadeSpeed=3,setTimeout(()=>{this.session?.close(),this.session=null,this.running=!1,this.director.stop(),this.scene=null,this.hud.setScene(!1),this.hud.show(!1),this.hud.showEnding(!1),this.hud.showInvite(!1),this.hud.showPage(!1),this.hud.toggleWheel(!1),this.hud.clearText(),this.hud.clearMarks(),this.hud.setPrompt(null),this.players.forEach(e=>{e.place(0,1.5),e.present=!1,e.singing=!1}),this.st=Gu(),this.prev=qu(this.st),this.ch=y(`ch1`),this.renderer.stage.load(this.ch,this.st),this.loadedKey=`attract`,this.hideChar=[!1,!1],this.grandma={},this.camOverride=null,this.clarity=this.clarityTarget=0,this.dawn=0,this.renderer.stage.dawn=0,this.fadeTarget=0,this.sAmt=1,this.onExit?.()},650))}get solo(){return this.session?.mode===`solo`}get isHost(){return!!this.session?.isHost}get myRole(){return this.session?.myRole??0}get controlled(){return this.solo?this.viewRole:this.myRole}ensureChapter(e){let t=`${this.st.round}:${this.st.chapter}`;if(t!==this.loadedKey){this.loadedKey=t,this.ch=y(this.st.chapter),this.renderer.stage.load(this.ch,this.st),this.prev=qu(this.st);for(let e of this.ch.buoys)this.buoySink[e.id]=this.st.buoys[e.id]??0;for(let e of this.players){let t=this.ch.start[e.role];e.place(t.x,t.y,1),e.singing=!1}this.fired.clear(),this.queue=[],this.hud.clearText(),this.hud.clearMarks(),this.ripples=[],this.splashLocal=0,this.clarity=this.clarityTarget=0,this.dawn=0,this.renderer.stage.dawn=0,this.hideChar=[!1,!1],this.grandma={},this.camOverride=null,this.gotPin=this.st.chapter!==`ch1`,this.applyLooks(),Qf(this.st.chapter),this.solo&&Zf(e=>e.soloChapter=this.st.chapter===`epilogue`?`ch3`:this.st.chapter),this.camX=this.renderer.clampCamX(this.players[this.viewRole].body.x,this.ch),this.fade=1,this.fadeTarget=0,this.fadeSpeed=1,this.st.chapter===`epilogue`?this.startScene(`epilogue`):e&&!this.seenIntro()?this.startScene(`intro`):this.skipIntroPlacement(),this.st.phase===`outro`&&this.startScene(`outro`)}}introKey(e){return`nsm:intro:${this.session?.room??`solo`}:${this.st.round}:${this.st.chapter}:${e}`}seenIntro(){if(this.solo)return!1;try{return sessionStorage.getItem(this.introKey(this.myRole))===`1`}catch{return!1}}markIntroSeen(){try{sessionStorage.setItem(this.introKey(this.myRole),`1`)}catch{}}skipIntroPlacement(){for(let e of this.players)e.remote||e.place(-.5,1.5,1);this.gotPin=!0,this.applyLooks()}startScene(e){if(this.scene===e&&this.director.running)return;let t=this.st.ng;this.scene=e,this.hud.setScene(!0),this.hud.toggleWheel(!1),this.queue=[],this.hud.clearText();for(let e of this.players)e.singing=!1;let n=()=>{this.scene=null,this.hud.setScene(!1),this.camOverride=null,this.hud.clearText(),e===`intro`&&this.markIntroSeen(),e===`outro`&&this.act({k:`ready`,r:this.myRole,chapter:this.st.chapter}),e===`epilogue`&&this.showEndingCard()};if(e===`intro`){let e=this.solo?[0,1]:[this.myRole],r=i=>{let a=e[i];if(a===void 0){n();return}this.solo&&a!==this.viewRole&&this.setView(a,!1),this.actor=a,this.director.run(lp(this.st.chapter,a,t),()=>r(i+1))};r(0);return}if(e===`outro`){this.actor=this.controlled,this.director.run(up(this.st.chapter,t),n);return}let r=Xf().diary.length>=5||this.st.diary.length>=5,i=t&&r;this.actor=0,this.solo&&this.viewRole!==0&&this.setView(0,!1),this.director.run(dp(this.solo?0:this.myRole,t,i),()=>{i&&Zf(e=>e.trueEnd=!0),n()})}directorHost(){return{say:(e,t,n)=>this.hud.say({who:e,text:t,think:n},!1),narrate:e=>this.hud.narrate(e),title:(e,t)=>this.hud.titleCard(e,t),textDone:()=>this.hud.textIdle,walkTo:(e,t,n)=>{let r=this.players[this.actor];if(r.remote)return!0;if(n)return r.body.x=e,r.body.vx=0,t&&(r.face=t),r.sceneTarget=void 0,!0;r.sceneTarget=e,r.sceneFace=t;let i=Math.abs(r.body.x-e)<.12;return i&&(r.sceneTarget=void 0,t&&(r.face=t)),i},camera:e=>this.camOverride=e,fade:(e,t)=>{this.fadeTarget=e,this.fadeSpeed=1/Math.max(.05,t)*2.2},sfx:e=>this.audio.play(e),hum:e=>this.audio.hum(e,.8),give:()=>{this.gotPin=!0,this.applyLooks(),this.renderer.stage.burst(0,this.players[0].body.x,this.players[0].body.y+1.3,16771466,18,1.6)},clarity:e=>this.clarityTarget=e,view:e=>{let t=e>0?0:1;(this.viewRole!==t||Math.sign(this.sAmt)!==e)&&(this.viewRole=this.solo?t:this.viewRole,this.sAmt=e,this.flip=null)},npc:(e,t,n,r)=>{e===`grandma`&&(this.grandma={pose:t,x:n,face:r})},young:e=>{if(this.hideChar[1]=!e,e){let e=this.players[1];e.remote||e.place(9.6,1.5,-1),this.renderer.stage.burst(1,9.6,2.2,14735615,24,1.8)}},dawn:e=>{this.dawn=e,this.renderer.stage.dawn=e},hide:e=>{this.hideChar[1]=e,this.hideChar[0]=!1}}}showEndingCard(){if(this.endingShown)return;this.endingShown=!0;let e=Xf().trueEnd&&this.st.ng;Zf(e=>{e.clears+=1;for(let t of this.st.keeps)e.keeps.includes(t)||e.keeps.push(t);e.soloChapter=`ch1`}),this.fadeTarget=.25,this.hud.showEnding(!0,{title:`다음 여름에 만나`,body:e?`— 진짜 끝 —

할머니의 일기장을 모두 읽었어요.
쉰 번의 여름, 기다려 줘서 고마워요.`:`— 끝 —

로비의 제목 물그림자를 다시 보세요.
두 번째 여름에는 할머니의 마음이 조금 더 보여요.`,sub:`쉰 번의 여름을 기다렸어`},this.isHost),this.audio.play(`ending`)}onPeer(t){let n=this.session;if(!n)return;let r=this.players[e(n.myRole)];if(t){if(n.isHost){let t={v:2,hostRole:n.myRole,guestRole:e(n.myRole),state:this.st,host:this.players[n.myRole].netState(),guest:this.lastPartner};n.sendHello(t)}this.sendLook(),this.audio.play(`pop`),this.hud.toast(this.helloCount>0||this.lastPartner?`다시 연결됐어요 ♥`:`수면 너머에 누군가 나타났어요 ♥`)}else r.present=!1,r.singing=!1,this.hud.toast(`연결이 끊겼어요. 다시 연결하는 중이에요…`,3);this.updateStatus()}onHello(e){let t=this.session,n=this.players[e.guestRole],r=this.helloCount>0&&this.loadedKey===`${e.state.round}:${e.state.chapter}`,i=r&&n.present&&!n.hidden?{x:n.body.x,y:n.body.y}:null;this.helloCount++,this.viewRole=e.guestRole,this.sAmt=this.viewRole===0?1:-1,this.st=e.state;for(let e of this.players)e.remote=e.role!==t.myRole,e.present=e.role===t.myRole;r||(this.loadedKey=``,this.ensureChapter(!0));let a=i??(e.guest&&!e.guest.hidden&&this.scene!==`intro`?{x:e.guest.x,y:e.guest.y}:null);a&&this.scene!==`intro`&&(n.body.x=a.x,n.body.y=a.y,Qu(this.ch,n.role,a.x,a.y-.05)&&(n.lastSafe={x:a.x,y:a.y})),e.host&&this.onPlayer(e.host),this.camX=this.renderer.clampCamX(this.players[this.viewRole].body.x,this.ch),this.hud.setButtons({swap:!1,invite:!1}),this.applyLooks(),this.sendLook(),this.updateStatus()}onPlayer(e){if(!this.session||e.r===this.session.myRole)return;this.lastPartner=e;let t=this.players[e.r];t.present||(t.present=!0,t.body.x=e.x,t.body.y=e.y,this.updateStatus()),t.receive(e)}onWorld(e){e.v===2&&(this.st=e,this.ensureChapter(!0))}onLook(e){let t=e;ap(t)&&this.session&&t.r!==this.session.myRole&&(this.partnerLook={look:t.look,pin:!!t.pin},this.applyLooks())}sendLook(){let e=this.session;if(!e||!e.online)return;let t=e.myRole;e.sendLook({r:t,look:this.looks[t],pin:t===1||this.gotPin})}applyLooks(){let e=this.renderer.stage,t=this.session,n=!t||t.mode===`solo`;for(let r of[0,1]){let i=n||r===t?.myRole,a=i?this.looks[r]:this.partnerLook?.look??this.looks[r],o=r===1?!0:i?this.gotPin:this.partnerLook?.pin??this.st.chapter!==`ch1`;e.setLook(r,a,o)}}setLook(e,t){this.looks[e]=ip(e,t),Zf(t=>t.looks[e]=this.looks[e]),this.applyLooks(),this.sendLook()}act(e){this.session&&(this.isHost?this.applyHostAction(e):this.session.sendAction(e))}applyHostAction(e){td(this.st,e)&&(this.worldDirty=!0),(e.k===`reset`||e.k===`goto`)&&(this.loadedKey=``,this.endingShown=!1,this.hud.showEnding(!1),this.ensureChapter(!0))}updateStatus(){let t=this.session;if(!t||t.mode===`solo`){this.hud.setStatus(``);return}let r=this.players[e(t.myRole)];if(t.connected&&r.present&&t.ready){this.hud.setStatus(`${n[r.role]}와 함께 ♥`,`ok`);return}let i=this.linkState===`lost`||this.helloCount>0||!!this.lastPartner;if(!t.ready){this.hud.setStatus(this.linkState===`lost`?`연결을 다시 찾는 중…`:`방을 찾는 중…`,`wait`,t.lostFor>25);return}if(i&&(this.lastPartner||this.linkState===`lost`)){let e=this.linkDetail||`다시 연결하는 중…`;this.hud.setStatus(`연결이 끊겼어요 · ${e}`,`warn`,t.lostFor>25);return}this.hud.setStatus(`친구를 기다리는 중 · 코드 ${t.room}`,`wait`)}saveHost(){let e=this.session;if(e&&e.isHost&&e.mode!==`solo`)try{localStorage.setItem(`nsm:host:${e.room}`,JSON.stringify({t:Date.now(),st:this.st,me:this.players[e.myRole].netState(),partner:this.lastPartner}))}catch{}}restoreHost(){let e=this.session;try{let t=localStorage.getItem(`nsm:host:${e.room}`);if(!t)return;let n=JSON.parse(t);if(Date.now()-n.t>216e5||n.st?.v!==2)return;this.st=n.st,this.lastPartner=n.partner??null,this.pendingMe=n.me,this.hud.toast(`지난 여행을 이어서 해요`)}catch{}}pendingMe=null;bindUi(){let e=e=>document.getElementById(e);this.input.bindJoystick(e(`joy`),e(`joyKnob`)),this.input.bindButton(e(`btnJump`),`jump`),this.input.bindButton(e(`btnAct`),`act`),this.input.bindButton(e(`btnEmote`),`emote`),this.input.bindButton(e(`btnSwap`),`swap`),e(`btnMute`).addEventListener(`click`,()=>{this.audio.setMuted(!this.audio.isMuted),this.hud.setMuted(this.audio.isMuted)}),e(`btnHome`).addEventListener(`click`,()=>this.exit()),e(`btnInvite`).addEventListener(`click`,()=>this.openInvite()),e(`btnReload`).addEventListener(`click`,()=>this.reloadRejoin()),e(`inviteClose`).addEventListener(`click`,()=>this.hud.showInvite(!1)),e(`inviteCopy`).addEventListener(`click`,async()=>{let t=e(`inviteLink`).value;try{await navigator.clipboard.writeText(t),this.hud.toast(`링크를 복사했어요`)}catch{e(`inviteLink`).select(),this.hud.toast(`링크를 길게 눌러 복사해 주세요`)}}),e(`inviteShare`).addEventListener(`click`,async()=>{let t=e(`inviteLink`).value;if(navigator.share)try{await navigator.share({title:`다음 여름에 만나`,text:`수면 너머에서 만나요`,url:t})}catch{}else this.hud.toast(`이 브라우저는 공유하기를 지원하지 않아요. 복사해 주세요.`)}),e(`btnNewSummer`).addEventListener(`click`,()=>{this.audio.play(`ui`),this.hud.showEnding(!1),this.act({k:`reset`,ng:!0})}),e(`btnEndHome`).addEventListener(`click`,()=>this.exit()),e(`diaryPage`).addEventListener(`pointerdown`,e=>{e.preventDefault(),this.hud.showPage(!1)}),this.hud.onEmote=e=>this.sendEmote(e),window.addEventListener(`keydown`,e=>{if(!this.running||e.repeat||e.target instanceof HTMLInputElement)return;let n=parseInt(e.key,10);n>=1&&n<=t.length&&!this.scene&&this.sendEmote(t[n-1].kind),e.key===`Escape`&&(this.hud.toggleWheel(!1),this.hud.showPage(!1))})}reloadRejoin(){let e=this.session;if(!e)return;this.saveHost();let t=new URL(location.href);t.search=``,t.searchParams.set(`room`,e.room),e.isHost&&(t.searchParams.set(`host`,`1`),t.searchParams.set(`role`,String(e.myRole))),e.mode===`local`&&t.searchParams.set(`net`,`local`),t.searchParams.set(`auto`,`1`),location.replace(t.toString())}openInvite(){let e=this.session;if(!e)return;let t=new URL(location.href);t.search=``,t.hash=``,t.searchParams.set(`room`,e.room),e.mode===`local`&&t.searchParams.set(`net`,`local`),this.hud.showInvite(!0,t.toString(),e.room)}sendEmote(e){if(!this.session)return;let t=this.controlled;this.showEmote(t,e,!0),this.solo||this.session.sendEmote({r:t,k:e})}showEmote(e,t,n){this.hud.emote(e,t,this.time,n||!!this.solo),this.audio.play(`emote`,n?1:.8);let r=this.players[e];this.renderer.stage.burst(e,r.body.x,r.body.y+1.4,e===0?16761558:14077183,8,1.2)}showMark(e,t){this.hud.addMark(e.w,e.x,e.y,this.time,t),this.renderer.stage.markBurst(e.w,e.x,e.y,t),this.audio.play(`ping`,t?.9:.7)}handleTaps(){let e=this.input.consumeTaps();if(e.length&&this.session){if(this.hud.textIdle===!1&&this.scene){this.hud.advance();return}if(!(this.scene||this.hud.wheelOpen))for(let t of e){if(this.checkMoonTap(t.x,t.y))continue;let e=this.renderer.unproject(t.x,t.y);if(!e)continue;let n=Math.max(this.ch.minX,Math.min(this.ch.maxX,e.x)),r=Math.max(.2,Math.min(9,e.y)),i={r:this.controlled,w:e.world,x:n,y:r};this.showMark(i,!0),this.solo||this.session.sendMark(i)}}}checkMoonTap(e,t){let n=-14+this.camX*.92,r=this.renderer.project(1,n,17,-86);return Math.hypot(r.x-e,r.y-t)>60?!1:(this.moonTaps++,this.audio.play(`chime`,.6),this.moonTaps>=3&&!this.renderer.stage.rabbit&&(this.renderer.stage.rabbit=!0,this.hud.toast(`달에서 토끼가 떡방아를 찧고 있어요 🐇`,3),this.foundEgg(`rabbit`)),!0)}foundEgg(e){Zf(t=>{t.eggs.includes(e)||t.eggs.push(e)})}loop(e){let t=Math.min(.1,Math.max(0,(e-this.lastFrame)/1e3));this.lastFrame=e,this.time+=t,this.running?this.frameGame(t):this.frameAttract(t),requestAnimationFrame(e=>this.loop(e))}frameAttract(e){this.attractT+=e;let t=30+Math.sin(this.attractT*.045)*22;this.camX=this.renderer.clampCamX(this.camX+(t-this.camX)*Math.min(1,e*.8),this.ch);let n=this.attractT%24/24,r=Qt.smoothstep(n,.46,.54)-Qt.smoothstep(n,.96,1);this.sAmt=Math.cos(Math.PI*r),this.fade+=(this.fadeTarget-this.fade)*Math.min(1,e*3),this.renderFrame(e)}frameGame(t){let n=this.session;if(this.pendingMe&&this.loadedKey){let e=this.players[n.myRole];!this.pendingMe.hidden&&this.scene!==`intro`&&(e.body.x=this.pendingMe.x,e.body.y=this.pendingMe.y),this.pendingMe=null}this.input.consumeEmote()&&!this.scene&&(this.hud.toggleWheel(),this.audio.play(`ui`,.6)),this.input.consumeSwap()&&this.solo&&!this.scene&&this.setView(e(this.viewRole),!0),this.handleTaps();let r=n.ready,i=!!this.scene;this.input.enabled=r&&!this.hud.wheelOpen&&!this.exiting&&!i&&!this.hud.pageOpen,i?(this.input.consumeAdvance()&&this.hud.advance(),this.input.clearQueued(),this.director.update(t)):this.input.consumeAdvance(),this.acc+=t;let a=0;for(;this.acc>=pp&&a<6;)this.fixedStep(pp),this.acc-=pp,a++;a===6&&(this.acc=0);for(let e of this.players)e.remote&&e.smoothRemote(t);this.interactable=r&&!i?this.findInteractable():null,this.handleAbilityAndInteract(t),n.online&&r&&(this.sendT-=t,this.sendT<=0&&(this.sendT=1/20,n.sendPlayer(this.players[n.myRole].netState())),n.isHost&&(this.worldSendT-=t,(this.worldDirty||this.worldSendT<=0)&&(this.worldSendT=.1,this.worldDirty=!1,n.sendWorld(this.st)),this.saveT-=t,this.saveT<=0&&(this.saveT=2,this.saveHost()))),n.online&&this.statusTick(t),this.ensureChapter(!0),this.diffEffects(),this.prev=qu(this.st),this.st.phase===`outro`&&this.scene!==`outro`&&!this.director.running&&!this.st.ready[this.myRole]&&!(this.solo&&(this.st.ready[0]||this.st.ready[1]))&&this.startScene(`outro`);let o=this.storyCtx();if(!i&&this.st.phase===`play`&&(this.updateTriggers(o),this.hud.textIdle)){let e=this.queue.shift();e&&this.hud.say(e)}if(this.hud.setObjective(r?i||this.st.phase!==`play`?``:this.ch.objective(o):`수면 너머의 친구를 기다리는 중`),this.flip){this.flip.t=Math.min(1,this.flip.t+t/.9);let e=Qt.smoothstep(this.flip.t,0,1);this.sAmt=Math.cos(Math.PI*(this.flip.from>0?e:1-e)),this.flip.t>=1&&(this.sAmt=this.flip.to,this.flip=null)}let s=this.players[this.viewRole],c=s.body.x+s.face*1.1;if(this.camOverride!==null)c=this.camOverride;else if(this.st.phase!==`play`&&this.ch.goal?.arc){let e=this.ch.arcs.find(e=>e.id===this.ch.goal.arc);e&&(c=(e.x0+e.x1)/2)}this.camX=this.renderer.clampCamX(this.camX+(c-this.camX)*(1-Math.exp(-t*(this.flip?5:3))),this.ch);let l=this.players[e(this.viewRole)],u=l.present&&!l.hidden?Math.max(0,1-Math.abs(l.body.x-s.body.x)/14):0;this.audio.setMix(this.viewRole,u,+(this.scene===`outro`||this.scene===`epilogue`)),this.audio.setAmbience(this.viewRole);let d=this.players[1];if(d.singing&&d.present){let e=d.remote||this.viewRole!==1?.35+u*.65:1;this.audio.hum(.3,e)}this.clarity+=(Math.max(this.clarityTarget,this.st.flash>0?.85:0)-this.clarity)*Math.min(1,t*(this.st.flash>0?10:2)),this.glow=this.scene===`outro`||this.scene===`epilogue`?.12+this.dawn*.18:this.dawn*.15,this.flashFx=Math.max(0,this.flashFx-t*3.2),this.fade+=(this.fadeTarget-this.fade)*Math.min(1,t*this.fadeSpeed),this.renderFrame(t),this.photoPending&&this.capturePhoto(),this.updateOverlays(t)}statusTick(e){this.statusT-=e,!(this.statusT>0)&&(this.statusT=1,this.updateStatus())}statusT=0;fixedStep(e){let t=this.session,n={...this.buoySink};if(t.isHost){let t=this.players.map(e=>({role:e.role,present:e.present,state:e.present?e.netState():null}));for(let n of ed(this.st,e,t,!!this.solo))n.e!==`land`&&(this.worldDirty=!0);for(let e of this.ch.buoys)this.buoySink[e.id]=this.st.buoys[e.id]??0}else{let t=1-Math.exp(-e*12);for(let e of this.ch.buoys)this.buoySink[e.id]=(this.buoySink[e.id]??0)+((this.st.buoys[e.id]??0)-(this.buoySink[e.id]??0))*t}let r=0;for(let e of this.ch.buoys){let t=Math.abs((this.buoySink[e.id]??0)-(n[e.id]??0));r=Math.max(r,t);for(let t of this.players)t.remote||t.hidden||t.body.gk!==`buoy`||t.body.gid!==e.id||t.carry(Uu(e,this.buoySink[e.id]??0,t.role)-Uu(e,n[e.id]??0,t.role))}if(this.buoyRippleT-=e,r>.002&&this.buoyRippleT<=0){this.buoyRippleT=.45;for(let e of this.ch.buoys)Math.abs((this.buoySink[e.id]??0)-(n[e.id]??0))>.002&&this.addRipple(e.x,.5);this.audio.play(`buoy`,.5)}let i={0:Zu(this.ch,0,this.st,this.buoySink),1:Zu(this.ch,1,this.st,this.buoySink)},a=Xu(this.ch,this.st),o={minX:this.ch.minX,maxX:this.ch.maxX};for(let n of this.players){if(n.remote||!n.present)continue;let r=this.scene&&n.role===this.actor?n.sceneTarget:void 0,s=!this.scene&&n.role===this.controlled&&t.ready,c=s?this.input.take():null;if(r!==void 0){let e=r-n.body.x;c={move:Math.abs(e)<.1?0:Math.sign(e)*Math.min(1,Math.abs(e)*1.6+.35)*.72,jumpPressed:!1,jumpHeld:!1}}let l=n.step(e,c,i[n.role],a,o);if(!l)continue;let u=s||r!==void 0?1:.4;l.jumped&&this.audio.play(`jump`,u),l.landed&&!l.splashed&&(this.audio.play(`land`,u*.8),n.body.gk===`bridge`&&n.role===0&&this.addRipple(n.body.x,.4))}}findInteractable(){let e=this.players[this.controlled];if(e.hidden||!e.present||this.st.phase!==`play`)return null;let t=e.role,{x:n,y:r}=e.body,i=this.st,a=this.ch,o=i.items.find(e=>e.mode===`held`&&e.holder===t),s=o?a.items.find(e=>e.id===o.id)?.kind:void 0,c=(e,t,i=1.1,a=1.4)=>Math.abs(e-n)<i&&Math.abs(t-r)<a;if(o){for(let e of a.sockets)if(e.world===t&&!i.flags[e.flag]&&e.accepts===s&&c(e.x,e.y,1.3,.9))return{kind:`place`,id:e.id,x:e.x,y:e.y+2,label:e.label};for(let e of a.uses)if(e.world===t&&e.needs===s&&!i.flags[e.flag]&&(!e.when||e.when(i))&&c(e.x,e.y,e.range??1.2))return{kind:`use`,id:e.id,x:e.x,y:e.y+2,label:e.label};let l=this.findFixture(t,n,r,!0);if(l)return l;let u=n+e.face*.6,d=!Qu(a,t,u,.2)&&!(r>.8&&Qu(a,t,u,r-.3));return{kind:`drop`,id:o.id,x:n,y:r+2,label:d?s===`marble`?`물에 떨어뜨리기`:`물에 넣기`:`내려놓기`}}for(let e of i.items)if(!(e.world!==t||e.mode!==`ground`&&e.mode!==`floating`)&&Math.abs(e.x-n)<.95&&e.y>r-2.4&&e.y<r+1.4){let t=a.items.find(t=>t.id===e.id);return{kind:`pickup`,id:e.id,x:e.x,y:e.y+1,label:`${t?.name??`물건`} 들기`}}return this.findFixture(t,n,r,!1)}findFixture(e,t,n,r){let i=this.st,a=this.ch,o=(e,r,i=1.1,a=1.5)=>Math.abs(e-t)<i&&Math.abs(r-n)<a;for(let t of a.lights)if(!(t.world!==e||i.flags[Ju(t.id)])&&o(t.x,t.y))return{kind:`light`,id:t.id,x:t.x,y:t.y+2.3,label:t.label,song:t.bySong};for(let t of a.uses)if(!(t.world!==e||t.needs||i.flags[t.flag]||t.by!==void 0&&t.by!==e||t.when&&!t.when(i))&&o(t.x,t.y,t.range??1.2))return{kind:`use`,id:t.id,x:t.x,y:t.y+1.8,label:t.label};for(let t of a.magpies)if(!(t.world!==e||t.call!==`use`||i.magpies.includes(t.id))&&o(t.x,t.y,1.3,1.6))return{kind:`magpie`,id:t.id,x:t.x,y:t.y+1.4,label:`까치 부르기`};for(let t of a.keepsakes)if(!(t.world!==e||t.how!==`use`||i.keeps.includes(t.id)||t.by!==`any`&&t.by!==e||t.when&&!t.when(i))&&o(t.x,t.y))return{kind:`keep`,id:t.id,x:t.x,y:t.y+1.6,label:t.label};if(i.ng){for(let t of a.diary)if(!(t.world!==e||i.diary.includes(t.id))&&o(t.x,t.y))return{kind:`diary`,id:t.id,x:t.x,y:t.y+1.4,label:`일기장 줍기`}}if(r)return null;for(let t of a.signs)if(t.world===e&&o(t.x,t.y))return{kind:`sign`,id:t.id,x:t.x,y:t.y+2.2,label:t.label};for(let t of a.npcs)if(t.world===e&&t.talk&&t.label&&o(t.x,t.y,1.4,1.8))return{kind:`npc`,id:t.id,x:t.x,y:t.y+1.8,label:t.label};return null}handleAbilityAndInteract(e){let t=this.players[this.controlled],n=this.interactable,r=this.input.consumeInteract(),i=this.input.consumeAbility(),a=t.role===0?`사진 찍기`:`흥얼거리기`;if(this.hud.setAction(n?n.label:a,n?`act`:t.role===0?`camera`:`note`,!!n),this.scene||!this.session?.ready||this.st.phase!==`play`){t.remote||(t.singing=!1);return}if(r&&n?(this.input.dropAbility(),this.doInteract(n)):i&&t.role===0&&this.takePhoto(),this.echoT>0&&this.solo&&t.role!==1){this.echoT-=e;let t=this.players[1];t.singing=this.echoT>0&&!t.hidden,t.singing&&(this.singT-=e,this.singT<=0&&(this.singT=.22,this.act({k:`sing`,r:1,x:t.body.x})))}if(t.role===1&&!t.remote){this.echoT>0&&(this.echoT=0);let r=this.input.abilityHeld&&!n;this.autoSing>0&&(this.autoSing-=e),t.singing=(r||this.autoSing>0)&&!t.hidden,t.singing&&(this.singT-=e,this.singT<=0&&(this.singT=.22,this.act({k:`sing`,r:1,x:t.body.x})))}}doInteract(e){let t=this.players[this.controlled],n=t.role;switch(e.kind){case`pickup`:this.act({k:`pickup`,id:e.id,r:n});break;case`drop`:this.act({k:`drop`,id:e.id,r:n,x:t.body.x+t.face*.35,y:t.body.y+1.25,vx:t.face*2.3+t.body.vx*.3,vy:2.8});break;case`place`:this.act({k:`place`,id:e.id,r:n});break;case`light`:e.song?(this.autoSing=1.8,this.hud.toast(`♪ 흥얼흥얼…`,1.4)):this.act({k:`light`,id:e.id,r:n});break;case`use`:this.act({k:`use`,id:e.id,r:n});break;case`magpie`:this.audio.play(`chirp`),this.act({k:`magpie`,id:e.id,r:n});break;case`keep`:this.act({k:`keep`,id:e.id,r:n});break;case`diary`:{this.act({k:`diary`,id:e.id,r:n});let t=this.ch.diary.find(t=>t.id===e.id);t&&(this.audio.play(`page`),this.hud.showPage(!0,t.date,t.text),Zf(e=>{e.diary.includes(t.id)||e.diary.push(t.id)}));break}case`sign`:{let t=this.ch.signs.find(t=>t.id===e.id);t&&(this.audio.play(t.sfx??`ui`),this.queue=[...t.lines,...this.queue],this.hud.clearText());break}case`npc`:{let t=this.ch.npcs.find(t=>t.id===e.id);t?.talk&&(this.audio.play(`ui`),this.queue=[...t.talk(this.st,n),...this.queue],this.hud.clearText());break}}}takePhoto(){let e=this.players[0];if(e.hidden||this.st.flash>.4)return;e.actT=.5,this.audio.play(`shutter`),this.flashFx=1,this.hud.flashScreen(),this.act({k:`flash`,r:0,x:e.body.x});let t=this.ch.keepsakes.filter(t=>t.how===`photo`&&!this.st.keeps.includes(t.id)&&(!t.when||t.when(this.st))&&Math.abs(t.x-e.body.x)<5.5&&Math.abs(t.y-e.body.y)<4).map(e=>e.id);this.photoPending={spots:t}}capturePhoto(){let e=this.photoPending;this.photoPending=null;let t=this.renderer.snapshot(320);if(!t)return;let n=e.spots[0],r=n?x().find(e=>e.id===n):void 0;Zf(e=>{e.photos.push({id:n??`p${Date.now()}`,url:t,t:Date.now(),label:r?.name??`사진`});let i=e.photos.filter(e=>!x().some(t=>t.id===e.id));i.length>8&&e.photos.splice(e.photos.indexOf(i[0]),1)}),n?this.act({k:`keep`,id:n,r:0}):this.hud.toast(`사진을 찍었어요 (앨범에 저장)`,1.6)}setView(e,t){if(this.viewRole===e&&!this.flip)return;this.solo&&this.viewRole===1&&this.players[1].singing&&(this.echoT=10,this.hud.toast(`♪ 아리의 노래가 잠시 이어져요`,2));let n=e===0?1:-1;this.viewRole=e,this.hud.toggleWheel(!1),this.input.clearQueued(),t?(this.flip={from:this.sAmt,to:n,t:0},this.audio.play(`swap`),this.queue=[],this.hud.clearText()):(this.flip=null,this.sAmt=n)}addRipple(e,t){this.ripples.push({x:e,z:.35,t:this.time,s:t}),this.ripples.length>6&&this.ripples.shift()}say(e){if(this.scene)return;let t=this.solo?this.viewRole:this.myRole;this.queue.push(...fp(e,t,this.st))}diffEffects(){let e=this.prev,t=this.st,n=this.renderer.stage,r=this.ch;if(e.round===t.round&&e.chapter===t.chapter){for(let i of r.lights)if(!e.flags[Ju(i.id)]&&t.flags[Ju(i.id)]){this.audio.play(`light`),n.burst(i.world,i.x,i.y+1.1,i.kind===`moonflower`?14735103:16769690,30,2.4);let a=r.bridges.find(n=>n.when(t)&&!n.when(e));if(a){setTimeout(()=>this.audio.play(`bridge`,.8),350);for(let e of a.segs){for(let t=e.x0;t<e.x1;t+=.8)n.burst(a.world,t,e.y1,a.kind===`star`?16774064:13235641,3,1.2);a.kind===`lily`&&this.addRipple((e.x0+e.x1)/2,.6)}}this.say(`lit:${i.id}`)}for(let n of r.songZones)!e.flags[n.flag]&&t.flags[n.flag]&&!this.fired.has(`ev:${n.flag}`)&&(this.fired.add(`ev:${n.flag}`),this.audio.play(`bridge`,.5),this.say(n.flag));for(let i of t.items){let a=e.items.find(e=>e.id===i.id);if(a){if(a.mode!==`held`&&i.mode===`held`){this.audio.play(`pickup`);let e=this.players[i.holder];n.burst(e.role,e.body.x,e.body.y+1.5,15919871,16,1.6),this.say(`pickup:${i.id}:${i.holder}`)}if(a.mode===`held`&&i.mode===`falling`&&this.audio.play(`drop`),a.world!==i.world&&a.mode!==`held`&&i.mode!==`held`&&(this.audio.play(`transfer`),this.addRipple(i.x,1),n.splash(a.world,i.x,!0),n.splash(i.world,i.x,!0),n.burst(i.world,i.x,.3,15919871,20,2),this.say(`transfer:${i.id}:${i.world}`)),a.mode===`falling`&&i.mode===`ground`&&a.world===i.world){let e=r.items.find(e=>e.id===i.id);e&&Math.abs(i.x-e.x)<.01&&Math.abs(i.y-e.y)<.01&&!e.crosses?(this.audio.play(`splash`,.6),this.say(`respawn:${i.id}`)):this.audio.play(`land`,.5)}if(a.mode!==`placed`&&i.mode===`placed`){let i=r.sockets.find(n=>t.flags[n.flag]&&!e.flags[n.flag]);this.audio.play(`place`),i&&(n.burst(i.world,i.x,i.y+1.2,16773312,40,2.6),this.say(`place:${i.id}`))}}}for(let i of r.uses)if(!e.flags[i.flag]&&t.flags[i.flag]){if(this.audio.play(i.flag===`dug`?`dig`:i.flag===`watered`?`grow`:`pickup`),n.burst(i.world,i.x,i.y+1,16774084,26,2),i.flag===`watered`){let e=r.bridges.find(e=>e.kind===`branch`);if(e)for(let t=e.segs[0].x0;t<e.segs[0].x1;t+=1)n.burst(e.world,t,e.segs[0].y1+.3,13235641,4,1.4)}i.event&&this.say(i.event)}t.magpies.length>e.magpies.length&&(this.audio.play(`chirp`),setTimeout(()=>this.audio.play(`bridge`,.5),500),this.say(`magpie`));for(let n of t.keeps){if(e.keeps.includes(n))continue;let t=x().find(e=>e.id===n);if(!t)continue;this.audio.play(`keep`);let r=t.how===`photo`?Xf().photos.find(e=>e.id===n)?.url:null;this.hud.showKeep(`추억을 찾았어요 · ${t.name}`,t.desc,r),Zf(e=>{e.keeps.includes(n)||e.keeps.push(n)}),t.id===`windchime`&&this.audio.play(`chime`),t.id===`radio`&&this.audio.play(`radio`)}if(t.flash>0&&e.flash<=0)for(let e of r.hidden)n.burst(e.world,e.x,e.top+.2,16774084,4,1);this.players.forEach((e,t)=>{e.present&&(!this.hiddenPrev[t]&&e.hidden&&(this.audio.play(`splash`,e.role===this.viewRole?1:.6),n.splash(e.role,e.body.x),this.addRipple(e.body.x,1),e.remote||this.onSplash(e.role)),this.hiddenPrev[t]&&!e.hidden&&(this.audio.play(`pop`,e.role===this.viewRole?1:.6),n.burst(e.role,e.body.x,e.body.y+.6,e.role===0?16766690:14273791,14,1.6)),this.hiddenPrev[t]=e.hidden)})}}onSplash(e){if(this.splashLocal++,this.splashLocal===10){let t=this.players[e];this.audio.play(`fish`),this.renderer.stage.burst(e,t.body.x+1,.3,16764794,20,2),this.queue.push(...fp(`splash10`,e,this.st)),this.hud.toast(`붕어가 뻐끔 인사했어요 🐟`,2.6),this.foundEgg(`fish`)}}storyCtx(){let t=this.solo?this.viewRole:this.myRole,n=this.players[t],r=this.players[e(t)],i=this.st.items.find(e=>e.mode===`held`&&e.holder===t);return{role:t,st:this.st,x:n.body.x,y:n.body.y,hidden:n.hidden,gk:n.body.gk,gid:n.body.gid,holding:i?i.id:null,partnerPresent:r.present,partnerX:r.body.x,solo:!!this.solo,ng:this.st.ng}}updateTriggers(e){for(let t of this.ch.triggers){if(t.role!==`both`&&t.role!==e.role)continue;let n=`${t.id}:${e.role}`;this.fired.has(n)||t.when(e)&&(this.fired.add(n),this.queue.push(...t.lines(e)))}}groundBelow(e){let t=Zu(this.ch,e.role,this.st,this.buoySink),n=-1,{x:r,y:i,w:a}=e.body;for(let e of t)r+a/2<=e.x0||r-a/2>=e.x1||e.y1<=i+.05&&e.y1>n&&(n=e.y1);for(let e of Xu(this.ch,this.st)){let t=e.top(r);t!==null&&t<=i+.05&&t>n&&(n=t)}return n}renderFrame(t){let n=e(this.sAmt>=0?0:1),r=this.players[n],i=this.solo?8:3.2,a=this.hud.markList.map(e=>({w:e.w,x:e.x,y:e.y,t:e.t+(i-3.2)}));this.renderer.stage.update({st:this.st,buoySink:this.buoySink,players:this.players,groundY:[this.groundBelow(this.players[0]),this.groundBelow(this.players[1])],time:this.time,dt:t,camX:this.camX,pxScale:this.renderer.pxScale,hideChar:this.hideChar,grandma:this.grandma,marks:a}),this.renderer.render({sAmt:this.sAmt,camX:this.camX,time:this.time,ripples:this.ripples,partner:{x:r.body.x,y:r.body.y+.6,world:r.role,visible:this.running&&r.present&&!r.hidden&&!this.hideChar[n]},clarity:this.clarity,fade:this.fade,fadeColor:mp,glow:this.glow,flash:this.flashFx})}updateOverlays(e){this.hud.update(e,this.time);let t=!!this.flip;for(let e of this.players){let n=this.renderer.project(e.role,e.body.x,e.body.y+1.75);this.hud.placeBubble(e.role,n.x,n.y,e.present&&!e.hidden&&!t)}this.hud.updateMarks(this.time,(e,t,n)=>this.renderer.project(e,t,n,.3),t,this.solo?8:3.2);let n=this.interactable;if(n&&!t&&!this.hud.wheelOpen&&!this.scene){let e=this.renderer.project(this.controlled,n.x,n.y);this.hud.setPrompt(n.label,e.x,e.y)}else this.hud.setPrompt(null)}debugApi(){return{game:this,state:()=>this.st,chapter:()=>this.st.chapter,scene:()=>this.scene,players:()=>this.players.map(e=>({role:e.role,x:e.body.x,y:e.body.y,gk:e.body.gk,gid:e.body.gid,hidden:e.hidden,present:e.present,singing:e.singing,sleeping:e.sleeping})),teleport:(e,t,n)=>{let r=this.players[e];r.body.x=t,r.body.y=n,r.body.vx=0,r.body.vy=0,r.idleT=0},view:e=>{this.viewRole!==e&&this.solo&&this.setView(e,!0)},interact:()=>{let e=this.findInteractable();return e&&this.doInteract(e),e?.kind??null},target:()=>this.findInteractable()?.label??null,photo:()=>this.takePhoto(),sing:e=>this.autoSing=e,emote:e=>this.sendEmote(e),camera:()=>({camX:this.camX,sAmt:this.sAmt,viewRole:this.viewRole}),fast:e=>{this.director.fast=e,this.hud.fast=e},goto:e=>this.act({k:`goto`,chapter:e}),text:()=>({idle:this.hud.textIdle}),queue:()=>this.queue.length,save:()=>Xf(),mark:(e,t,n)=>this.showMark({r:this.controlled,w:e,x:t,y:n},!0),ending:()=>!document.getElementById(`ending`).classList.contains(`hidden`)}}},gp=`modulepreload`,_p=function(e,t){return new URL(e,t).href},vp={},yp=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=_p(t,n),t=s(t),t in vp)return;vp[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:gp,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},bp=[`hello`,`ps`,`ws`,`act`,`emo`,`mark`,`look`],xp=`yunseul-mirror-lake-proto-v1`,Sp=1e3,Cp=4e3,wp=9e3,Tp=[`wss://nos.lol`,`wss://relay.mostro.network`,`wss://nostr.data.haus`,`wss://nostr.sathoarder.com`,`wss://relay02.lnfi.network`,`wss://nostr-relay.corb.net`],Ep=class{kind=`local`;onMessage=null;onPeer=null;onLink=null;bc;id=Math.random().toString(36).slice(2);peer=null;lastSeen=0;lostAt=0;timer;constructor(e){this.bc=new BroadcastChannel(`yunseul:${e}`),this.bc.onmessage=e=>{let t=e.data;if(t&&t.from!==this.id&&!(this.peer&&t.from!==this.peer&&performance.now()-this.lastSeen<Cp)){if(t.ch===`bye`){t.from===this.peer&&this.drop();return}this.peer!==t.from&&(this.peer=t.from,this.lastSeen=performance.now(),this.onLink?.(`connected`),this.onPeer?.(!0)),this.lastSeen=performance.now(),t.ch!==`hb`&&this.onMessage?.(t.ch,t.data)}},this.timer=window.setInterval(()=>{this.bc.postMessage({from:this.id,ch:`hb`,data:null}),this.peer&&performance.now()-this.lastSeen>Cp&&this.drop()},400),setTimeout(()=>this.onLink?.(`searching`),0),this.bc.postMessage({from:this.id,ch:`hb`,data:null})}drop(){this.peer=null,this.lostAt=performance.now(),this.onLink?.(`lost`),this.onPeer?.(!1)}get hasPeer(){return!!this.peer}get lostFor(){return this.peer||!this.lostAt?0:(performance.now()-this.lostAt)/1e3}send(e,t){this.peer&&this.bc.postMessage({from:this.id,ch:e,data:t})}close(){try{this.bc.postMessage({from:this.id,ch:`bye`,data:null})}catch{}clearInterval(this.timer),this.bc.close()}},Dp=class{kind=`p2p`;onMessage=null;onPeer=null;onLink=null;roomCode;turn;joinRoom=null;room=null;hb=null;actions=new Map;peer=null;stalePeer=null;lastRecv=0;lostAt=0;everConnected=!1;generation=0;rebuildTimer=0;rebuilding=!1;attempts=0;tick=0;closed=!1;hiddenAt=0;listeners=[];constructor(e,t){this.roomCode=e,this.turn=t,this.listen(window,`online`,()=>this.scheduleRebuild(800,`online`)),this.listen(window,`offline`,()=>this.onLink?.(`lost`,`인터넷 연결이 끊겼어요`)),this.listen(window,`pageshow`,e=>{e.persisted&&this.scheduleRebuild(300,`pageshow`)}),this.listen(document,`visibilitychange`,()=>{if(document.hidden){this.hiddenAt=performance.now();return}let e=this.hiddenAt?performance.now()-this.hiddenAt:0;this.hiddenAt=0,e>2500&&setTimeout(()=>this.ensureAlive(`visible`),2500)}),this.tick=window.setInterval(()=>this.onTick(),Sp),this.start()}listen(e,t,n){e.addEventListener(t,n),this.listeners.push([e,t,n])}async start(){this.onLink?.(`starting`);try{let e=await yp(()=>import(`./dist-CaFpPFkC.js`),[],import.meta.url);if(this.closed)return;this.joinRoom=e.joinRoom,this.build()}catch(e){console.error(`[yunseul] p2p init failed`,e),this.onLink?.(`lost`,`온라인 연결을 시작하지 못했어요`)}}relayUrls(){return this.generation===0?Tp:Tp.map(e=>`${e}/?g=${this.generation}`)}build(){if(!this.joinRoom||this.closed)return;let e={appId:xp,relayConfig:{urls:this.relayUrls(),warnOnRelayFailure:!1}};this.turn?.length&&(e.turnConfig=this.turn);let t=this.joinRoom(e,`room-${this.roomCode}`,{onJoinError:e=>{console.warn(`[yunseul] join error`,e?.error),this.peer||this.scheduleRebuild(2500,`join-error`)}});this.room=t,this.actions.clear();for(let e of bp){let n=t.makeAction(e);n.onMessage=(t,n)=>{this.accept(n.peerId)&&this.onMessage?.(e,t)},this.actions.set(e,n)}this.hb=t.makeAction(`hb`),this.hb.onMessage=(e,t)=>{this.accept(t.peerId)},t.onPeerJoin=e=>{this.accept(e)},t.onPeerLeave=e=>{e===this.peer&&this.markLost(`peer-left`),e===this.stalePeer&&(this.stalePeer=null)},this.onLink?.(this.peer?`connected`:this.everConnected?`lost`:`searching`)}accept(e){let t=performance.now();return this.peer===e?(this.lastRecv=t,!0):this.peer&&t-this.lastRecv<Cp?!1:(this.peer=e,this.stalePeer=null,this.lastRecv=t,this.lostAt=0,this.everConnected=!0,this.attempts=0,clearTimeout(this.rebuildTimer),this.onLink?.(`connected`),this.onPeer?.(!0),!0)}markLost(e){this.peer&&(this.stalePeer=this.peer,this.peer=null,this.lostAt=performance.now(),console.info(`[yunseul] partner lost:`,e),this.onLink?.(`lost`),this.onPeer?.(!1),this.scheduleRebuild(6e3,`lost`))}onTick(){if(this.closed||!this.room)return;let e=performance.now();if(this.peer)this.hb?.send(0,{target:this.peer}).catch(()=>{}),e-this.lastRecv>Cp&&this.markLost(`heartbeat`);else if(this.stalePeer&&this.lostAt&&e-this.lostAt>wp){let e=this.room.getPeers()[this.stalePeer];this.stalePeer=null;try{e?.close()}catch{}}}ensureAlive(e){this.closed||this.peer&&performance.now()-this.lastRecv<Cp||this.scheduleRebuild(0,e)}scheduleRebuild(e,t){this.closed||this.rebuilding||this.peer&&performance.now()-this.lastRecv<Cp||(clearTimeout(this.rebuildTimer),this.rebuildTimer=window.setTimeout(()=>void this.rebuild(t),e))}async rebuild(e){if(this.closed||this.rebuilding||!this.joinRoom||this.peer&&performance.now()-this.lastRecv<Cp)return;if(!navigator.onLine){this.onLink?.(`lost`,`인터넷 연결을 기다리는 중`);return}this.rebuilding=!0,this.attempts++,console.info(`[yunseul] rejoining room (${e}, try ${this.attempts})`);let t=this.room;this.room=null,this.hb=null;try{await Promise.race([t?.leave(),new Promise(e=>setTimeout(e,1500))])}catch{}if(this.generation++,this.rebuilding=!1,this.closed)return;this.build();let n=Math.min(3e4,9e3+this.attempts*4e3);this.rebuildTimer=window.setTimeout(()=>{this.peer||this.rebuild(`retry`)},n)}get hasPeer(){return!!this.peer}get lostFor(){return this.peer||!this.lostAt?0:(performance.now()-this.lostAt)/1e3}send(e,t){if(!this.peer)return;let n=this.actions.get(e);n&&n.send(t,{target:this.peer}).catch(()=>{})}close(){this.closed=!0,clearTimeout(this.rebuildTimer),clearInterval(this.tick);for(let[e,t,n]of this.listeners)e.removeEventListener(t,n);this.room?.leave(),this.room=null}},Op=class{mode;room;isHost;myRole;ready;t=null;constructor(e){this.mode=e.mode,this.room=e.room,this.isHost=e.isHost||e.mode===`solo`,this.myRole=e.role,this.ready=this.isHost,e.mode===`local`&&(this.t=new Ep(e.room)),e.mode===`p2p`&&(this.t=new Dp(e.room,e.turn))}attach(e){this.t&&(this.t.onLink=(t,n)=>e.onLink(t,n),this.t.onPeer=t=>e.onPeer(t),this.t.onMessage=(t,n)=>{switch(t){case`hello`:if(!this.isHost){let t=n;if(t?.v!==2)return;this.myRole=t.guestRole,this.ready=!0,e.onHello(t)}break;case`ps`:e.onPlayer(n);break;case`ws`:this.isHost||e.onWorld(n);break;case`act`:this.isHost&&e.onAction(n);break;case`emo`:e.onEmote(n);break;case`mark`:e.onMark(n);break;case`look`:e.onLook(n)}})}get online(){return this.mode!==`solo`}get connected(){return!!this.t?.hasPeer}get lostFor(){return this.t?.lostFor??0}sendHello(e){this.t?.send(`hello`,e)}sendPlayer(e){this.t?.send(`ps`,e)}sendWorld(e){this.t?.send(`ws`,e)}sendAction(e){this.t?.send(`act`,e)}sendEmote(e){this.t?.send(`emo`,e)}sendMark(e){this.t?.send(`mark`,e)}sendLook(e){this.t?.send(`look`,e)}close(){this.t?.close(),this.t=null}};function kp(){let e=``,t=new Uint32Array(6);crypto.getRandomValues(t);for(let n of t)e+=`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`[n%32];return e}var $=e=>document.getElementById(e),Ap=new URLSearchParams(location.search),jp=Ap.get(`net`)===`local`?`local`:`p2p`,Mp={BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1},Np=Mp.VITE_TURN_URLS?[{urls:String(Mp.VITE_TURN_URLS).split(`,`),username:Mp.VITE_TURN_USERNAME,credential:Mp.VITE_TURN_CREDENTIAL}]:void 0,Pp=new hp($(`game`)),Fp=$(`lobby`);jp===`local`&&($(`netMode`).textContent=`· 같은 기기 탭 테스트 모드`);var Ip={ch1:`1장 물속의 아이`,ch2:`2장 감나무 아래`,ch3:`3장 칠석`,epilogue:`에필로그`};function Lp(){let e=Xf(),t=e.clears>0;$(`ngBadge`).classList.toggle(`hidden`,!t);let n=$(`titleReflect`);n.textContent=t?`쉰 번의 여름을 기다렸어`:`다음 여름에 만나`,n.classList.toggle(`revealed`,t),$(`subtitle`).textContent=t?`— 다음 여름에 만나 —`:`물에 비친 두 여름`;let r=e.soloChapter!==`ch1`;$(`btnContinue`).classList.toggle(`hidden`,!r),$(`continueLabel`).textContent=r?`${Ip[e.soloChapter]}부터`:``,document.querySelectorAll(`canvas.portrait`).forEach(t=>{let n=Number(t.dataset.role);Pd(t,{role:n,look:e.looks[n],hairpin:n===1||e.reached!==`ch1`})})}Lp();var Rp=0;$(`titleWrap`).addEventListener(`click`,()=>{if(Rp++,Rp%5==0&&Xf().clears===0){let e=$(`titleReflect`);e.textContent=`쉰 번의 여름을 …렸어`,e.classList.add(`peek`),Pp.audio.start(),Pp.audio.play(`chime`,.6),setTimeout(()=>{e.textContent=`다음 여름에 만나`,e.classList.remove(`peek`)},1400)}});function zp(e){let t=new URL(location.href);t.search=``;for(let[n,r]of Object.entries(e))t.searchParams.set(n,r);jp===`local`&&t.searchParams.set(`net`,`local`),history.replaceState(null,``,t.toString())}var Bp=()=>Xf().clears>0;function Vp(e,t){Pp.audio.start(),Pp.audio.play(`ui`),Fp.classList.add(`hidden`),Pp.start(e,{ng:e.isHost?Bp():!1,chapter:t}),e.isHost&&e.online&&!Ap.get(`auto`)&&setTimeout(()=>Pp.openInvite(),900)}function Hp(e){$(`panelMain`).classList.toggle(`hidden`,e!==`main`),$(`panelRole`).classList.toggle(`hidden`,e!==`role`)}$(`btnSolo`).addEventListener(`click`,()=>Vp(new Op({mode:`solo`,room:`solo`,isHost:!0,role:0}))),$(`btnContinue`).addEventListener(`click`,()=>Vp(new Op({mode:`solo`,room:`solo`,isHost:!0,role:0}),Xf().soloChapter)),$(`btnCreate`).addEventListener(`click`,()=>{Pp.audio.start(),Pp.audio.play(`ui`),Hp(`role`)}),$(`btnBack`).addEventListener(`click`,()=>Hp(`main`)),document.querySelectorAll(`button.role`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Number(e.dataset.role),n=kp();zp({room:n,host:`1`,role:String(t)}),Vp(new Op({mode:jp,room:n,isHost:!0,role:t,turn:Np}))})});function Up(e){let t=e.trim().toUpperCase();if(t===`ARIRIA`){Zf(e=>{e.eggs.includes(`ariria`)||e.eggs.push(`ariria`)}),Pp.audio.start(),Pp.audio.play(`keep`);let e=$(`inpCode`);e.value=``,e.placeholder=`거꾸로 읽어도 아리리아`,$(`invited`).classList.remove(`hidden`),$(`invited`).innerHTML=`🐱 옷장에 <b>고양이 귀</b>가 생겼어요!`;return}if(t.length<4){$(`inpCode`).focus();return}zp({room:t}),Vp(new Op({mode:jp,room:t,isHost:!1,role:1,turn:Np}))}$(`btnJoin`).addEventListener(`click`,()=>Up($(`inpCode`).value)),$(`inpCode`).addEventListener(`keydown`,e=>{e.key===`Enter`&&Up($(`inpCode`).value)});var Wp=Ap.get(`room`);if(Wp){let e=Wp.toUpperCase(),t=Ap.get(`auto`)===`1`;if(Ap.get(`host`)===`1`){let n=+(Number(Ap.get(`role`))===1),r=()=>Vp(new Op({mode:jp,room:e,isHost:!0,role:n,turn:Np}));$(`btnResume`).classList.remove(`hidden`),$(`btnResume`).addEventListener(`click`,r),t&&setTimeout(r,50)}else $(`invited`).classList.remove(`hidden`),$(`invitedCode`).textContent=e,$(`btnJoinInvited`).classList.remove(`hidden`),$(`btnJoinInvited`).addEventListener(`click`,()=>Up(e)),$(`inpCode`).value=e,t&&setTimeout(()=>Up(e),50)}Pp.onExit=()=>{Fp.classList.remove(`hidden`),Hp(`main`),$(`btnResume`).classList.add(`hidden`),$(`invited`).classList.add(`hidden`),$(`btnJoinInvited`).classList.add(`hidden`);let e=new URL(location.href);e.search=``,jp===`local`&&e.searchParams.set(`net`,`local`),history.replaceState(null,``,e.toString()),Lp()};var Gp=0;function Kp(){let e=Xf(),t=e.looks[Gp];document.querySelectorAll(`#wardrobe .tab`).forEach(e=>e.classList.toggle(`on`,Number(e.dataset.role)===Gp)),Pd($(`wdPreview`),{role:Gp,look:t,hairpin:Gp===1||e.reached!==`ch1`});let n=(n,r,i)=>{n.innerHTML=``;for(let a of r){let r=document.createElement(`button`),o=a.unlocked(e);r.className=`wd-opt${t[i]===a.id?` on`:``}${o?``:` locked`}`,r.textContent=o?a.name:`🔒 ${a.name}`,r.title=o?``:a.hint,r.addEventListener(`click`,()=>{if(!o){r.textContent=a.hint;return}let e={...Xf().looks[Gp],[i]:a.id};Pp.setLook(Gp,e),Pp.audio.play(`ui`),Kp(),Lp()}),n.appendChild(r)}};n($(`wdOutfit`),tp[Gp],`outfit`),n($(`wdHair`),np[Gp],`hair`),n($(`wdAcc`),rp,`acc`)}$(`btnWardrobe`).addEventListener(`click`,()=>{Pp.audio.start(),Pp.audio.play(`ui`),Kp(),$(`wardrobe`).classList.remove(`hidden`)}),document.querySelectorAll(`#wardrobe .tab`).forEach(e=>e.addEventListener(`click`,()=>{Gp=Number(e.dataset.role),Kp()})),$(`wdClose`).addEventListener(`click`,()=>$(`wardrobe`).classList.add(`hidden`));function qp(){let e=Xf(),t=x(),n=S(),r=t.filter(t=>e.keeps.includes(t.id)).length;$(`alSum`).textContent=`추억 ${r}/${t.length} · 일기장 ${e.diary.length}/${n.length} · 숨은 요소 ${e.eggs.length}/3${e.trueEnd?` · 진엔딩 ✓`:``}`;let i=$(`alGrid`);i.innerHTML=``;for(let n of t){let t=e.keeps.includes(n.id),r=document.createElement(`div`);r.className=`al-cell${t?``:` locked`}`;let a=t&&n.how===`photo`?e.photos.find(e=>e.id===n.id)?.url:null;r.innerHTML=`${a?`<img src="${a}" alt="">`:`<div class="al-icon">${t?n.how===`photo`?`📷`:`✦`:`?`}</div>`}<b>${t?n.name:`???`}</b><small>${t?n.desc:n.by===0?`리아만 찾을 수 있어요`:n.by===1?`아리만 찾을 수 있어요`:``}</small>`,i.appendChild(r)}$(`alDiaryTitle`).classList.toggle(`hidden`,e.clears===0);let a=$(`alDiary`);if(a.innerHTML=``,e.clears>0)for(let t of n){let n=e.diary.includes(t.id),r=document.createElement(`div`);r.className=`al-page${n?``:` locked`}`,r.innerHTML=n?`<b>${t.date}</b> ${t.text}`:`<b>????년</b> 두 번째 여름에 호숫가 어딘가에서…`,a.appendChild(r)}let o=$(`alPhotos`);o.innerHTML=``;let s=e.photos.slice().reverse();s.length||(o.innerHTML=`<small>리아의 사진이 여기에 모여요. (리아로 능력 버튼)</small>`);for(let e of s){let t=document.createElement(`img`);t.src=e.url,t.title=e.label,o.appendChild(t)}}$(`btnAlbum`).addEventListener(`click`,()=>{Pp.audio.start(),Pp.audio.play(`ui`),qp(),$(`album`).classList.remove(`hidden`)}),$(`alClose`).addEventListener(`click`,()=>$(`album`).classList.add(`hidden`));var Jp=$(`rotate`),Yp=0;function Xp(){let e=window.innerHeight>window.innerWidth&&matchMedia(`(pointer: coarse)`).matches;Jp.classList.toggle(`hidden`,!e),clearTimeout(Yp),e&&(Yp=window.setTimeout(()=>Jp.classList.add(`hidden`),6e3))}window.addEventListener(`resize`,Xp),Xp(),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(e=>console.warn(`[nsm] sw`,e))});