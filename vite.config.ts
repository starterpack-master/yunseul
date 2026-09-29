import { readFileSync } from 'node:fs';
import { defineConfig, type Plugin } from 'vite';

/** 빌드 결과물 목록으로 서비스 워커의 사전 캐시 목록을 만들어요 (첫 방문 후 바로 오프라인 실행). */
function pwaServiceWorker(): Plugin {
  const publicFiles = [
    'index.html',
    'manifest.webmanifest',
    'icons/icon-192.png',
    'icons/icon-512.png',
    'icons/maskable-512.png',
    'icons/apple-touch-icon.png',
    'fonts/Galmuri11.woff2',
    'fonts/Galmuri11-Bold.woff2',
  ];
  return {
    name: 'yunseul-service-worker',
    apply: 'build',
    generateBundle(_, bundle) {
      const built = Object.keys(bundle).filter((f) => !f.endsWith('.map'));
      const list = ['./', ...new Set([...built, ...publicFiles])].map((f) => (f === './' ? f : `./${f}`));
      const src = readFileSync(new URL('./pwa/sw-template.js', import.meta.url), 'utf8')
        .replaceAll('__PRECACHE__', JSON.stringify(list))
        .replaceAll('__VERSION__', Date.now().toString(36));
      this.emitFile({ type: 'asset', fileName: 'sw.js', source: src });
    },
  };
}

// GitHub Pages 같은 하위 경로 배포를 위해 상대 경로로 빌드합니다.
export default defineConfig({
  base: './',
  plugins: [pwaServiceWorker()],
  build: {
    target: 'es2022',
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1200,
  },
  server: {
    host: true,
  },
  preview: {
    host: true,
  },
});
