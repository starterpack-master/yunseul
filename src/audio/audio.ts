import type { Role } from '../game/types';

/**
 * 음원 파일 없이 WebAudio로 직접 연주하는 BGM과 효과음.
 * 같은 코드 진행을 리아(오르골)와 아리(유리 종)가 다른 악기로 연주하고,
 * 두 사람이 가까워질수록 상대의 소리가 커져서 하나의 곡이 돼요.
 */

export type Sfx =
  | 'jump'
  | 'land'
  | 'splash'
  | 'pop'
  | 'pickup'
  | 'drop'
  | 'transfer'
  | 'light'
  | 'bridge'
  | 'buoy'
  | 'place'
  | 'ending'
  | 'emote'
  | 'ui'
  | 'swap'
  | 'shutter'
  | 'ping'
  | 'dig'
  | 'chirp'
  | 'chime'
  | 'radio'
  | 'page'
  | 'keep'
  | 'fish'
  | 'grow'
  | 'type'
  | 'rewind'
  | 'dawn';

const BPM = 76;
const EIGHTH = 60 / BPM / 2;
const midi = (n: number) => 440 * Math.pow(2, (n - 69) / 12);

// Fmaj7 → Em7 → Dm7 → Cmaj7
const CHORDS = [
  { root: 41, tones: [53, 57, 60, 64] },
  { root: 40, tones: [52, 55, 59, 62] },
  { root: 38, tones: [50, 53, 57, 60] },
  { root: 36, tones: [48, 52, 55, 59] },
];
const SCALE = [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84];

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private master!: GainNode;
  private music!: GainNode;
  private sfxBus!: GainNode;
  private reverb!: ConvolverNode;
  private reverbSend!: GainNode;
  private layer: [GainNode, GainNode] = [null!, null!];
  private padBus!: GainNode;
  private nextTime = 0;
  private step = 0;
  private melodyIdx = [6, 9];
  private muted = false;
  private endingBoost = 0;
  private humGain: GainNode | null = null;
  private humUntil = 0;
  private humStep = 0;
  private humNext = 0;
  humVol = 0;
  private amb: { cicada: GainNode; night: GainNode } | null = null;
  ambRole: Role = 0;
  ambTimer = 0;

  get started() {
    return !!this.ctx;
  }

  start() {
    if (this.ctx) {
      void this.ctx.resume();
      return;
    }
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    const ctx = new Ctor();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.8;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.ratio.value = 3;
    this.master.connect(comp).connect(ctx.destination);

    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.makeImpulse(3.2);
    this.reverbSend = ctx.createGain();
    this.reverbSend.gain.value = 0.55;
    this.reverbSend.connect(this.reverb).connect(this.master);

    this.music = ctx.createGain();
    this.music.gain.value = 0.5;
    this.music.connect(this.master);
    this.music.connect(this.reverbSend);
    this.sfxBus = ctx.createGain();
    this.sfxBus.gain.value = 0.7;
    this.sfxBus.connect(this.master);
    this.sfxBus.connect(this.reverbSend);

    for (const r of [0, 1] as Role[]) {
      const g = ctx.createGain();
      g.gain.value = r === 0 ? 1 : 0.3;
      g.connect(this.music);
      this.layer[r] = g;
    }
    this.padBus = ctx.createGain();
    this.padBus.gain.value = 1;
    const padLp = ctx.createBiquadFilter();
    padLp.type = 'lowpass';
    padLp.frequency.value = 1100;
    this.padBus.connect(padLp).connect(this.music);

    this.humGain = ctx.createGain();
    this.humGain.gain.value = 0;
    this.humGain.connect(this.master);
    this.humGain.connect(this.reverbSend);
    this.startAmbience();
    this.nextTime = ctx.currentTime + 0.2;
    window.setInterval(() => this.schedule(), 30);
    document.addEventListener('visibilitychange', () => {
      if (!this.ctx) return;
      if (document.hidden) void this.ctx.suspend();
      else void this.ctx.resume();
    });
  }

  setMuted(m: boolean) {
    this.muted = m;
    if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.8, this.ctx.currentTime, 0.1);
  }

  /** 극적인 순간엔 음악을 줄여요 (0 = 조용히, 1 = 평소) */
  setMusic(v: number) {
    if (!this.ctx) return;
    this.music.gain.setTargetAtTime(0.5 * Math.max(0, Math.min(1, v)), this.ctx.currentTime, v < 0.5 ? 0.35 : 0.8);
  }
  get isMuted() {
    return this.muted;
  }

  /** 내 악기는 늘 또렷하게, 상대 악기는 거리에 따라 */
  setMix(own: Role, closeness: number, ending: number) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const partner = Math.min(1, 0.22 + closeness * 0.85 + ending);
    this.layer[own].gain.setTargetAtTime(1, t, 0.5);
    this.layer[own === 0 ? 1 : 0].gain.setTargetAtTime(partner, t, 0.6);
    this.endingBoost = ending;
  }

  private makeImpulse(seconds: number): AudioBuffer {
    const ctx = this.ctx!;
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      let lp = 0;
      for (let i = 0; i < len; i++) {
        const white = Math.random() * 2 - 1;
        lp = lp * 0.6 + white * 0.4;
        d[i] = lp * Math.pow(1 - i / len, 2.6);
      }
    }
    return buf;
  }

  // ---------------------------------------------------------------------------
  // 악기

  private musicBox(freq: number, when: number, vel: number, dest: AudioNode) {
    const ctx = this.ctx!;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(0.16 * vel, when + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0008, when + 1.6);
    g.connect(dest);
    const o1 = ctx.createOscillator();
    o1.type = 'sine';
    o1.frequency.value = freq;
    o1.connect(g);
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.35 * vel * 0.16, when);
    g2.gain.exponentialRampToValueAtTime(0.0005, when + 0.35);
    g2.connect(dest);
    const o2 = ctx.createOscillator();
    o2.type = 'sine';
    o2.frequency.value = freq * 4.02;
    o2.connect(g2);
    for (const o of [o1, o2]) {
      o.start(when);
      o.stop(when + 1.7);
    }
  }

  private glassBell(freq: number, when: number, vel: number, dest: AudioNode) {
    const ctx = this.ctx!;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(0.12 * vel, when + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0006, when + 2.6);
    g.connect(dest);
    const car = ctx.createOscillator();
    car.type = 'sine';
    car.frequency.value = freq;
    const mod = ctx.createOscillator();
    mod.type = 'sine';
    mod.frequency.value = freq * 3.5;
    const mg = ctx.createGain();
    mg.gain.setValueAtTime(freq * 2.2, when);
    mg.gain.exponentialRampToValueAtTime(freq * 0.05, when + 1.2);
    mod.connect(mg).connect(car.frequency);
    car.connect(g);
    for (const o of [car, mod]) {
      o.start(when);
      o.stop(when + 2.7);
    }
  }

  private pad(freqs: number[], when: number, dur: number) {
    const ctx = this.ctx!;
    for (const f of freqs) {
      for (const det of [-4, 4]) {
        const o = ctx.createOscillator();
        o.type = 'triangle';
        o.frequency.value = f;
        o.detune.value = det;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0, when);
        g.gain.linearRampToValueAtTime(0.022 * (1 + this.endingBoost * 0.6), when + 1.4);
        g.gain.setValueAtTime(0.022 * (1 + this.endingBoost * 0.6), when + dur - 1.2);
        g.gain.linearRampToValueAtTime(0, when + dur + 0.6);
        o.connect(g).connect(this.padBus);
        o.start(when);
        o.stop(when + dur + 0.7);
      }
    }
  }

  private bass(freq: number, when: number) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(0.08, when + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, when + 1.4);
    o.connect(g).connect(this.music);
    o.start(when);
    o.stop(when + 1.5);
  }

  private schedule() {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    this.scheduleHum();
    while (this.nextTime < ctx.currentTime + 0.15) {
      this.playStep(this.step, this.nextTime);
      this.step++;
      this.nextTime += EIGHTH;
    }
  }

  private playStep(step: number, when: number) {
    const bar = Math.floor(step / 8) % CHORDS.length;
    const beat = step % 8;
    const chord = CHORDS[bar];
    if (beat === 0) {
      this.pad(chord.tones, when, EIGHTH * 8);
      this.bass(midi(chord.root), when);
    }
    if (beat === 4) this.bass(midi(chord.root + 7), when);

    // 리아: 오르골 8분음표 아르페지오
    if (Math.random() < (beat % 2 === 0 ? 0.85 : 0.55)) {
      const n = this.walk(0, chord.tones);
      this.musicBox(midi(n + 12), when + (Math.random() - 0.5) * 0.01, 0.7 + Math.random() * 0.3, this.layer[0]);
    }
    // 아리: 유리 종, 엇박에 대답하듯이
    if (beat % 2 === 1 && Math.random() < 0.5) {
      const n = this.walk(1, chord.tones);
      this.glassBell(midi(n + 12), when, 0.6 + Math.random() * 0.4, this.layer[1]);
    }
    if (beat === 0 && Math.random() < 0.6) this.glassBell(midi(chord.tones[3] + 24), when + EIGHTH * 0.5, 0.35, this.layer[1]);
  }

  /** 화음에 어울리는 음을 향해 천천히 걷는 멜로디 */
  private walk(voice: 0 | 1, tones: number[]): number {
    let i = this.melodyIdx[voice] + Math.round((Math.random() - 0.5) * 3.2);
    i = Math.max(0, Math.min(SCALE.length - 1, i));
    let n = SCALE[i];
    const pcs = tones.map((t) => t % 12);
    if (!pcs.includes(n % 12) && Math.random() < 0.7) {
      const up = SCALE[Math.min(SCALE.length - 1, i + 1)];
      n = pcs.includes(up % 12) ? up : SCALE[Math.max(0, i - 1)];
      i = SCALE.indexOf(n);
    }
    this.melodyIdx[voice] = i;
    return n;
  }

  // ---------------------------------------------------------------------------
  // 효과음

  // ---------------------------------------------------------------------------
  // 자장가 (아리의 노래 = 할머니의 흥얼거림)

  /** 자장가 선율 (F장조 5음계). 두 마디씩 BGM 화음과 어울려요. */
  private static LULLABY = [72, 69, 72, 74, 72, 69, 67, -1, 69, 72, 74, 77, 76, 74, 72, -1, 72, 74, 76, 74, 72, 69, 67, 69, 65, -1, 67, 69, 72, -1, -1, -1];

  /** 노래 부르기: sec초 동안 (계속 누르고 있으면 계속 불러요). vol은 거리에 따라 */
  hum(sec: number, vol = 1) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (now > this.humUntil) {
      this.humStep = 0;
      this.humNext = now + 0.05;
    }
    this.humUntil = Math.max(this.humUntil, now + sec);
    this.humVol = vol;
    this.humGain?.gain.setTargetAtTime(0.9 * vol, now, 0.08);
  }

  private scheduleHum() {
    const ctx = this.ctx!;
    if (!this.humGain) return;
    if (ctx.currentTime > this.humUntil) {
      this.humGain.gain.setTargetAtTime(0, ctx.currentTime, 0.25);
      return;
    }
    const beat = 60 / BPM / 2;
    while (this.humNext < ctx.currentTime + 0.15) {
      const n = AudioEngine.LULLABY[this.humStep % AudioEngine.LULLABY.length];
      if (n > 0) this.voice(midi(n), this.humNext, beat * 1.9);
      this.humStep++;
      this.humNext += beat;
    }
  }

  /** 부드러운 허밍 목소리 */
  private voice(freq: number, when: number, dur: number) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = freq;
    const vib = ctx.createOscillator();
    vib.frequency.value = 5.2;
    const vg = ctx.createGain();
    vg.gain.value = freq * 0.006;
    vib.connect(vg).connect(o.frequency);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1500;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(0.07, when + 0.08);
    g.gain.setValueAtTime(0.07, when + dur * 0.6);
    g.gain.linearRampToValueAtTime(0, when + dur);
    o.connect(lp).connect(g).connect(this.humGain!);
    o.start(when);
    vib.start(when);
    o.stop(when + dur + 0.05);
    vib.stop(when + dur + 0.05);
  }

  // ---------------------------------------------------------------------------
  // 환경음: 지금은 저녁 매미와 물결, 1973년 밤은 귀뚜라미와 개구리

  private startAmbience() {
    const ctx = this.ctx!;
    const cicada = ctx.createGain();
    const night = ctx.createGain();
    cicada.gain.value = 0;
    night.gain.value = 0;
    cicada.connect(this.master);
    night.connect(this.master);
    this.amb = { cicada, night };
    // 물결 소리 (둘 다)
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let lp = 0;
    for (let i = 0; i < len; i++) {
      lp = lp * 0.97 + (Math.random() * 2 - 1) * 0.03;
      d[i] = lp;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const wg = ctx.createGain();
    wg.gain.value = 0.35;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.12;
    const lg = ctx.createGain();
    lg.gain.value = 0.2;
    lfo.connect(lg).connect(wg.gain);
    src.connect(wg).connect(this.master);
    src.start();
    lfo.start();
    this.ambTimer = window.setInterval(() => this.ambienceTick(), 180);
  }

  setAmbience(role: Role) {
    this.ambRole = role;
    if (!this.ctx || !this.amb) return;
    const t = this.ctx.currentTime;
    this.amb.cicada.gain.setTargetAtTime(role === 0 ? 1 : 0.15, t, 0.8);
    this.amb.night.gain.setTargetAtTime(role === 1 ? 1 : 0.15, t, 0.8);
  }

  private ambienceTick() {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running' || !this.amb) return;
    const t = ctx.currentTime + 0.05;
    // 쓰르라미: "쓰르람~" 떨리는 높은 소리
    if (Math.random() < 0.09) {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = 5200 + Math.random() * 900;
      const am = ctx.createOscillator();
      am.frequency.value = 22 + Math.random() * 8;
      const amg = ctx.createGain();
      amg.gain.value = 0.5;
      const g = ctx.createGain();
      g.gain.value = 0;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 5600;
      bp.Q.value = 3;
      am.connect(amg).connect(g.gain);
      const dur = 1.6 + Math.random() * 1.6;
      const env = ctx.createGain();
      env.gain.setValueAtTime(0, t);
      env.gain.linearRampToValueAtTime(0.012, t + 0.4);
      env.gain.setValueAtTime(0.012, t + dur - 0.5);
      env.gain.linearRampToValueAtTime(0, t + dur);
      o.connect(bp).connect(g).connect(env).connect(this.amb.cicada);
      o.start(t);
      am.start(t);
      o.stop(t + dur);
      am.stop(t + dur);
    }
    // 귀뚜라미: 귀뚤귀뚤 (세 번씩)
    if (Math.random() < 0.28) {
      const f = 4300 + Math.random() * 500;
      for (let i = 0; i < 3; i++) {
        const o = ctx.createOscillator();
        o.type = 'sine';
        o.frequency.value = f;
        const g = ctx.createGain();
        const w = t + i * 0.07;
        g.gain.setValueAtTime(0, w);
        g.gain.linearRampToValueAtTime(0.02, w + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0005, w + 0.05);
        o.connect(g).connect(this.amb.night);
        o.start(w);
        o.stop(w + 0.06);
      }
    }
    // 개구리: 개굴
    if (Math.random() < 0.05) {
      for (let i = 0; i < 2; i++) {
        const o = ctx.createOscillator();
        o.type = 'square';
        o.frequency.setValueAtTime(190 + Math.random() * 40, t + i * 0.16);
        o.frequency.exponentialRampToValueAtTime(130, t + i * 0.16 + 0.12);
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 700;
        const g = ctx.createGain();
        const w = t + i * 0.16;
        g.gain.setValueAtTime(0, w);
        g.gain.linearRampToValueAtTime(0.03, w + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0005, w + 0.13);
        o.connect(lp).connect(g).connect(this.amb.night);
        o.start(w);
        o.stop(w + 0.14);
      }
    }
  }

  private tone(type: OscillatorType, f0: number, f1: number, dur: number, vol: number, when = 0) {
    const ctx = this.ctx!;
    const t = ctx.currentTime + when;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0005, t + dur);
    o.connect(g).connect(this.sfxBus);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  private noise(dur: number, vol: number, f0: number, f1: number, q = 1, when = 0) {
    const ctx = this.ctx!;
    const t = ctx.currentTime + when;
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = q;
    bp.frequency.setValueAtTime(f0, t);
    bp.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0005, t + dur);
    src.connect(bp).connect(g).connect(this.sfxBus);
    src.start(t);
  }

  private chime(notes: number[], gap: number, vel = 0.8, bell = false) {
    const ctx = this.ctx!;
    notes.forEach((n, i) => {
      const when = ctx.currentTime + i * gap;
      if (bell) this.glassBell(midi(n), when, vel, this.sfxBus);
      else this.musicBox(midi(n), when, vel, this.sfxBus);
    });
  }

  play(s: Sfx, vol = 1) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    switch (s) {
      case 'jump':
        this.tone('sine', 380, 720, 0.13, 0.07 * vol);
        break;
      case 'land':
        this.noise(0.06, 0.05 * vol, 900, 400, 0.8);
        break;
      case 'splash':
        this.noise(0.5, 0.14 * vol, 1600, 350, 0.7);
        this.tone('sine', 320, 140, 0.28, 0.1 * vol, 0.02);
        break;
      case 'pop':
        this.tone('sine', 520, 980, 0.12, 0.09 * vol);
        this.tone('sine', 780, 1300, 0.1, 0.05 * vol, 0.07);
        break;
      case 'pickup':
        this.chime([84, 88, 91], 0.07, 0.7 * vol);
        break;
      case 'drop':
        this.noise(0.18, 0.05 * vol, 2500, 800, 0.6);
        break;
      case 'transfer':
        this.chime([79, 86, 91, 98], 0.09, 0.6 * vol, true);
        this.noise(0.4, 0.08 * vol, 1400, 300, 0.7);
        break;
      case 'light':
        this.chime([81, 84, 88, 91, 93], 0.06, 0.6 * vol);
        break;
      case 'bridge':
        this.chime([72, 76, 79, 81, 84, 88, 91, 96], 0.085, 0.45 * vol, true);
        break;
      case 'buoy':
        this.tone('sine', 140, 90, 0.4, 0.07 * vol);
        this.noise(0.3, 0.03 * vol, 600, 200, 1.2);
        break;
      case 'place':
        this.chime([65, 72, 77, 81, 84], 0.12, 0.7 * vol, true);
        break;
      case 'ending':
        this.chime([65, 69, 72, 76, 77, 81, 84, 88, 89, 93, 96], 0.16, 0.6 * vol, true);
        break;
      case 'emote':
        this.tone('sine', 660, 990, 0.08, 0.06 * vol);
        break;
      case 'ui':
        this.tone('triangle', 880, 990, 0.05, 0.04 * vol);
        break;
      case 'type':
        this.tone('triangle', 1200 + Math.random() * 200, 1100, 0.025, 0.012 * vol);
        break;
      case 'swap':
        this.tone('sine', 300, 900, 0.35, 0.06 * vol);
        this.tone('sine', 900, 300, 0.35, 0.05 * vol, 0.25);
        break;
      case 'shutter':
        this.noise(0.04, 0.12 * vol, 4000, 2500, 0.9);
        this.noise(0.06, 0.08 * vol, 3000, 1800, 0.9, 0.09);
        this.chime([96], 0, 0.3 * vol, true);
        break;
      case 'ping':
        this.chime([91, 96], 0.05, 0.35 * vol, true);
        break;
      case 'dig':
        for (let i = 0; i < 3; i++) this.noise(0.12, 0.08 * vol, 900, 300, 0.8, i * 0.18);
        break;
      case 'chirp':
        for (let i = 0; i < 3; i++) this.tone('sine', 2400 + i * 200, 3400, 0.06, 0.05 * vol, i * 0.09);
        break;
      case 'chime':
        this.chime([91, 95, 98], 0.14, 0.6 * vol, true);
        break;
      case 'radio':
        // 지지직 + 옛날 가요풍 선율 (라디오 이스터에그)
        this.noise(0.5, 0.05 * vol, 3000, 2000, 0.5);
        this.chime([69, 72, 74, 76, 74, 72, 69, 67, 69], 0.22, 0.45 * vol);
        break;
      case 'page':
        this.noise(0.25, 0.06 * vol, 5000, 2500, 0.7);
        break;
      case 'keep':
        this.chime([84, 88, 91, 96, 100], 0.07, 0.55 * vol, true);
        break;
      case 'fish':
        this.tone('sine', 500, 220, 0.15, 0.08 * vol);
        this.tone('sine', 700, 300, 0.12, 0.06 * vol, 0.18);
        break;
      case 'grow':
        this.tone('sine', 220, 660, 0.9, 0.05 * vol);
        this.chime([72, 79, 84, 88], 0.12, 0.45 * vol);
        break;
      case 'rewind':
        // 되감기: 거꾸로 빨려 들어가는 소리 + 낮은 종
        this.noise(1.6, 0.12 * vol, 300, 5200, 0.6);
        this.tone('sine', 880, 110, 1.6, 0.07 * vol);
        this.chime([96, 91, 88, 84, 79, 76, 72, 67], 0.1, 0.5 * vol, true);
        break;
      case 'dawn':
        this.chime([65, 72, 77, 81, 84, 89], 0.22, 0.4 * vol, true);
        break;
    }
  }
}
