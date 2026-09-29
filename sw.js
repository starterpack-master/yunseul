/* 윤슬 서비스 워커 — 빌드할 때 vite.config.ts 플러그인이 사전 캐시 목록과 버전을 채워요. */
const CACHE = 'yunseul-mun0xcqc';
const PRECACHE = ["./","./assets/index-DxK2cjMl.js","./assets/dist-CaFpPFkC.js","./assets/index-B6iRYH-7.css","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./icons/apple-touch-icon.png","./fonts/Galmuri11.woff2","./fonts/Galmuri11-Bold.woff2"];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('yunseul-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // P2P 릴레이 등 다른 출처 요청은 건드리지 않아요.
  if (url.origin !== self.location.origin) return;

  // 페이지: 네트워크 우선(업데이트 반영), 오프라인이면 캐시
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./'))),
    );
    return;
  }

  // 정적 파일: 캐시 우선
  event.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
