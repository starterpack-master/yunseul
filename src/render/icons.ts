import { ellipse, makeCanvas, outline, px, rect } from './pixelart';

/** UI에 쓰는 도트 아이콘 (이모지 대신: 기기마다 모양이 달라지지 않게) */

const INK = '#5a3a57';

export function makeEmoteIcon(kind: string): HTMLCanvasElement {
  const [c, ctx] = makeCanvas(16, 16);
  switch (kind) {
    case 'hi': {
      ellipse(ctx, 8, 8.5, 6, 5.6, '#ffe8da');
      px(ctx, 5, 8, INK);
      px(ctx, 5, 7, INK);
      rect(ctx, 9, 8, 3, 1, INK);
      px(ctx, 4, 10, '#ff9aab');
      px(ctx, 12, 10, '#ff9aab');
      rect(ctx, 7, 11, 3, 1, '#c0707f');
      px(ctx, 13, 2, '#ff9eb8');
      px(ctx, 12, 3, '#ff9eb8');
      px(ctx, 14, 3, '#ff9eb8');
      px(ctx, 13, 4, '#ff9eb8');
      break;
    }
    case 'thanks': {
      ellipse(ctx, 5.5, 6, 3.6, 3.6, '#ff8fb0');
      ellipse(ctx, 10.5, 6, 3.6, 3.6, '#ff8fb0');
      for (let y = 7; y < 14; y++) {
        const half = 7 - (y - 7);
        rect(ctx, 8 - half, y, half * 2, 1, '#ff8fb0');
      }
      px(ctx, 4, 4, '#ffffff');
      px(ctx, 5, 4, '#ffffff');
      px(ctx, 4, 5, '#ffffff');
      break;
    }
    case 'ok': {
      ellipse(ctx, 8, 8, 6.5, 6.5, '#b8f0c0');
      for (let i = 0; i < 3; i++) px(ctx, 4 + i, 8 + i, INK);
      for (let i = 0; i < 6; i++) px(ctx, 7 + i, 10 - i, INK);
      break;
    }
    case 'nice': {
      const star = '#ffe06a';
      px(ctx, 8, 1, star);
      rect(ctx, 7, 2, 3, 3, star);
      rect(ctx, 2, 5, 13, 2, star);
      rect(ctx, 4, 7, 9, 2, star);
      rect(ctx, 4, 9, 3, 3, star);
      rect(ctx, 10, 9, 3, 3, star);
      px(ctx, 3, 12, star);
      px(ctx, 13, 12, star);
      px(ctx, 7, 6, '#fff6c8');
      break;
    }
    case 'wait': {
      rect(ctx, 2, 4, 12, 8, '#fff6ec');
      rect(ctx, 3, 3, 10, 10, '#fff6ec');
      rect(ctx, 4, 8, 2, 2, INK);
      rect(ctx, 7, 8, 2, 2, INK);
      rect(ctx, 10, 8, 2, 2, INK);
      break;
    }
    case 'come': {
      ellipse(ctx, 8, 8, 6.5, 6.5, '#d9ccff');
      rect(ctx, 4, 7, 7, 2, INK);
      px(ctx, 9, 5, INK);
      px(ctx, 10, 6, INK);
      px(ctx, 11, 7, INK);
      px(ctx, 11, 8, INK);
      px(ctx, 10, 9, INK);
      px(ctx, 9, 10, INK);
      break;
    }
    case 'stand': {
      rect(ctx, 3, 10, 10, 4, '#c9956f');
      rect(ctx, 3, 10, 10, 1, '#e6c19f');
      rect(ctx, 7, 2, 2, 6, '#ff8fb0');
      px(ctx, 6, 6, '#ff8fb0');
      px(ctx, 9, 6, '#ff8fb0');
      px(ctx, 5, 5, '#ff8fb0');
      px(ctx, 10, 5, '#ff8fb0');
      break;
    }
    case 'help': {
      ellipse(ctx, 8, 8, 6.5, 6.5, '#ffe29a');
      rect(ctx, 6, 3, 4, 1, INK);
      px(ctx, 5, 4, INK);
      px(ctx, 10, 4, INK);
      px(ctx, 10, 5, INK);
      px(ctx, 9, 6, INK);
      px(ctx, 8, 7, INK);
      px(ctx, 8, 8, INK);
      px(ctx, 8, 11, INK);
      px(ctx, 8, 12, INK);
      break;
    }
  }
  outline(ctx, 0, 0, 16, 16, INK);
  return c;
}

const UI_ICONS: Record<string, string[]> = {
  sound: ['............', '....o.......', '...oo...o...', '.oooo....o..', '.owwo..o..o.', '.owwo...o.o.', '.owwo...o.o.', '.owwo..o..o.', '.oooo....o..', '...oo...o...', '....o.......', '............'],
  mute: ['............', '....o.......', '...oo.......', '.oooo.p...p.', '.owwo..p.p..', '.owwo...p...', '.owwo..p.p..', '.owwo.p...p.', '.oooo.......', '...oo.......', '....o.......', '............'],
  home: ['............', '.....oo.....', '....owwo....', '...owwwwo...', '..owwwwwwo..', '.owwwwwwwwo.', '..owwooowo..', '..owwoyowo..', '..owwoyowo..', '..oooooooo..', '............', '............'],
  swap: ['............', '..o.........', '.ooo....l...', 'ooooo...l...', '..o.....l...', '..o.....l...', '..p.....l...', '..p.....l...', '..p...lllll.', '..p....lll..', '........l...', '............'],
  invite: ['............', '............', 'oooooooooooo', 'oowwwwwwwwoo', 'owowwwwwwowo', 'owwowwwwowwo', 'owwwowwowwwo', 'owwwwoowwwwo', 'owwwwwwwwwwo', 'oooooooooooo', '............', '............'],
  chat: ['............', '..oooooooo..', '.owwwwwwwwo.', 'owwwwwwwwwwo', 'owwowwowwowo', 'owwwwwwwwwwo', '.owwwwwwwwo.', '..ooowoooo..', '....owo.....', '....oo......', '............', '............'],
  act: ['.....o......', '.....o......', '....oyo.....', '..oooyooo...', 'oooyyyyyooo.', '..oooyooo...', '....oyo.....', '.....o...o..', '.....o..oyo.', '.........o..', '............', '............'],
  jump: ['.....oo.....', '....owwo....', '...owwwwo...', '..owwwwwwo..', '.oooowwoooo.', '....owwo....', '....owwo....', '....owwo....', '....oooo....', '............', 'pppppppppppp', '............'],
  camera: ['............', '....oooo....', '.oooowwoooo.', 'owwwwwwwwwwo', 'owwwooowwpwo', 'owwolllowwwo', 'owwolwlowwwo', 'owwolllowwwo', 'owwwooowwwwo', 'owwwwwwwwwwo', '.oooooooooo.', '............'],
  note: ['............', '.....ooooo..', '.....oyyyo..', '.....oo..o..', '.....o...o..', '.....o...o..', '..ooo..ooo..', '.oyyyo.oyyo.', '.oyyyo.oyyo.', '..ooo...oo..', '............', '............'],
  album: ['............', '.oooooooooo.', '.opppppwwwo.', '.opooopwwwo.', '.opppppwwwo.', '.opppppwllo.', '.opppppwlwo.', '.opppppwwwo.', '.opppppwwwo.', '.oooooooooo.', '............', '............'],
  wardrobe: ['............', '....oooo....', '...o....o...', '......oo....', '.....o......', '...oooooo...', '..owwwwwwo..', '.owwwwwwwwo.', 'owwwwwwwwwwo', 'oooooooooooo', '............', '............'],
};

const UI_PAL: Record<string, string> = { o: INK, w: '#ffffff', y: '#f2b84b', p: '#e67b9d', l: '#8f7fe0' };

export function makeUiIcon(name: string): HTMLCanvasElement {
  const map = UI_ICONS[name] ?? UI_ICONS.act;
  const [c, ctx] = makeCanvas(12, 12);
  map.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const col = UI_PAL[row[x]];
      if (col) px(ctx, x, y, col);
    }
  });
  return c;
}

const urls = new Map<string, string>();
export function iconUrl(kind: 'e' | 'u', name: string): string {
  const key = `${kind}:${name}`;
  let u = urls.get(key);
  if (!u) {
    u = (kind === 'e' ? makeEmoteIcon(name) : makeUiIcon(name)).toDataURL();
    urls.set(key, u);
  }
  return u;
}
