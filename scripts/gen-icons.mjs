// 앱 아이콘을 32x32 도트로 찍은 뒤 정수배로 키워 PNG로 저장해요. (외부 의존성 없음)
// 실행: npm run icons
import { mkdirSync, writeFileSync } from 'node:fs';
import { deflateSync } from 'node:zlib';

const N = 32;

const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16), 255];
const lerp = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

function grad(stops, t, x, y) {
  const n = stops.length - 1;
  const f = Math.min(0.9999, Math.max(0, t)) * n;
  const i = Math.floor(f);
  const q = (f - i) * 4;
  const lv = Math.floor(q) + ((q % 1) > (BAYER[y % 4][x % 4] + 0.5) / 16 ? 1 : 0);
  return lerp(hex(stops[i]), hex(stops[i + 1]), Math.min(4, lv) / 4);
}

function draw(maskable) {
  const px = Array.from({ length: N * N }, () => [0, 0, 0, 255]);
  const set = (x, y, c) => {
    if (x >= 0 && y >= 0 && x < N && y < N) px[y * N + x] = c;
  };
  const top = ['#9fb4ff', '#e7c6ff', '#ffc6d9', '#ffe8c8'];
  const bot = ['#b39ddb', '#6d5bb0', '#40397a', '#2b2a5a'];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      set(x, y, y < 16 ? grad(top, y / 15, x, y) : grad(bot, (y - 16) / 15, x, y));
    }
  }
  // 별
  for (const [x, y] of [[4, 26], [27, 22], [8, 20], [24, 29], [14, 30], [29, 27]]) set(x, y, hex('#fff3a8'));
  // 반달(위) + 반영(아래) = 보름달
  const r = maskable ? 6.6 : 8.6;
  const cx = 16;
  const cy = 16;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
      if (d < r) {
        const upper = y < 16;
        let c = upper ? hex('#fff1c9') : hex('#dcd3ff');
        if (d > r - 1.2) c = upper ? hex('#ffd9a8') : hex('#b8a9ff');
        if (upper && Math.hypot(x + 0.5 - (cx - 2.5), y + 0.5 - (cy - 3)) < 1.6) c = hex('#ffffff');
        set(x, y, c);
      } else if (d < r + 1) {
        set(x, y, hex('#5a3a57'));
      }
    }
  }
  // 수면과 윤슬
  for (let x = 0; x < N; x++) {
    const onMoon = Math.abs(x + 0.5 - cx) < r;
    if (!onMoon) set(x, 16, hex('#fff6e0'));
  }
  for (const [x, y] of [[3, 17], [6, 15], [26, 17], [29, 15], [21, 18], [11, 18]]) set(x, y, hex('#ffffff'));
  return px;
}

const crcTable = new Uint32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 255] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}

function png(pixels, scale) {
  const size = N * scale;
  const raw = Buffer.alloc(size * (size * 4 + 1));
  let o = 0;
  for (let y = 0; y < size; y++) {
    raw[o++] = 0;
    for (let x = 0; x < size; x++) {
      const c = pixels[Math.floor(y / scale) * N + Math.floor(x / scale)];
      raw[o++] = c[0];
      raw[o++] = c[1];
      raw[o++] = c[2];
      raw[o++] = c[3];
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}

const out = new URL('../public/icons/', import.meta.url);
mkdirSync(out, { recursive: true });
const normal = draw(false);
const mask = draw(true);
writeFileSync(new URL('icon-192.png', out), png(normal, 6));
writeFileSync(new URL('icon-512.png', out), png(normal, 16));
writeFileSync(new URL('apple-touch-icon.png', out), png(normal, 6));
writeFileSync(new URL('maskable-512.png', out), png(mask, 16));
console.log('icons written to public/icons');
