import * as THREE from 'three';
import { PARTICLE_FRAG, PARTICLE_VERT } from './shaders';

export type ParticleBehavior = 'drift' | 'petal' | 'firefly' | 'rise' | 'spark' | 'drop' | 'jelly';

export interface SpawnOpts {
  x: number;
  y: number;
  z: number;
  vx?: number;
  vy?: number;
  vz?: number;
  life: number;
  size: number;
  color: [number, number, number];
  behavior?: ParticleBehavior;
  alpha?: number;
}

/** CPU로 움직이는 가벼운 파티클 (월드 레이어별로 하나씩) */
export class ParticleField {
  readonly points: THREE.Points;
  readonly material: THREE.ShaderMaterial;
  private cap: number;
  private pos: Float32Array;
  private col: Float32Array;
  private size: Float32Array;
  private alpha: Float32Array;
  private vel: Float32Array;
  private life: Float32Array;
  private maxLife: Float32Array;
  private baseSize: Float32Array;
  private baseAlpha: Float32Array;
  private seed: Float32Array;
  private behavior: ParticleBehavior[];
  private cursor = 0;
  private geo: THREE.BufferGeometry;

  constructor(capacity: number) {
    this.cap = capacity;
    this.pos = new Float32Array(capacity * 3);
    this.col = new Float32Array(capacity * 3);
    this.size = new Float32Array(capacity);
    this.alpha = new Float32Array(capacity);
    this.vel = new Float32Array(capacity * 3);
    this.life = new Float32Array(capacity);
    this.maxLife = new Float32Array(capacity);
    this.baseSize = new Float32Array(capacity);
    this.baseAlpha = new Float32Array(capacity);
    this.seed = new Float32Array(capacity);
    this.behavior = new Array(capacity).fill('drift');
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('pcolor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.material = new THREE.ShaderMaterial({
      vertexShader: PARTICLE_VERT,
      fragmentShader: PARTICLE_FRAG,
      uniforms: { pxScale: { value: 400 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(this.geo, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 10;
  }

  spawn(o: SpawnOpts) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.cap;
    this.pos[i * 3] = o.x;
    this.pos[i * 3 + 1] = o.y;
    this.pos[i * 3 + 2] = o.z;
    this.vel[i * 3] = o.vx ?? 0;
    this.vel[i * 3 + 1] = o.vy ?? 0;
    this.vel[i * 3 + 2] = o.vz ?? 0;
    this.col[i * 3] = o.color[0];
    this.col[i * 3 + 1] = o.color[1];
    this.col[i * 3 + 2] = o.color[2];
    this.life[i] = o.life;
    this.maxLife[i] = o.life;
    this.baseSize[i] = o.size;
    this.baseAlpha[i] = o.alpha ?? 1;
    this.seed[i] = Math.random() * 100;
    this.behavior[i] = o.behavior ?? 'drift';
  }

  burst(x: number, y: number, z: number, color: [number, number, number], count: number, speed: number, opts: Partial<SpawnOpts> = {}) {
    for (let k = 0; k < count; k++) {
      const a = Math.random() * Math.PI * 2;
      const s = speed * (0.4 + Math.random() * 0.8);
      this.spawn({
        x: x + (Math.random() - 0.5) * 0.3,
        y: y + (Math.random() - 0.5) * 0.3,
        z: z + (Math.random() - 0.5) * 0.4,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s + speed * 0.3,
        vz: (Math.random() - 0.5) * s * 0.3,
        life: 0.8 + Math.random() * 0.8,
        size: 0.09 + Math.random() * 0.08,
        color,
        behavior: 'spark',
        ...opts,
      });
    }
  }

  update(dt: number, time: number, pxScale: number) {
    this.material.uniforms.pxScale.value = pxScale;
    for (let i = 0; i < this.cap; i++) {
      if (this.life[i] <= 0) {
        this.alpha[i] = 0;
        continue;
      }
      this.life[i] -= dt;
      const t = 1 - this.life[i] / this.maxLife[i];
      const sd = this.seed[i];
      const b = this.behavior[i];
      const ix = i * 3;
      let a = this.baseAlpha[i];
      switch (b) {
        case 'petal':
          this.vel[ix] = 0.35 + Math.sin(time * 1.3 + sd) * 0.4;
          this.vel[ix + 1] = -0.28 + Math.cos(time * 1.7 + sd) * 0.12;
          a *= Math.min(1, t * 4) * Math.min(1, (1 - t) * 4);
          break;
        case 'firefly':
          this.vel[ix] = Math.sin(time * 0.8 + sd) * 0.25;
          this.vel[ix + 1] = Math.cos(time * 0.6 + sd * 1.3) * 0.18;
          a *= (0.35 + 0.65 * Math.pow(0.5 + 0.5 * Math.sin(time * 2.2 + sd * 3), 2)) * Math.min(1, t * 3) * Math.min(1, (1 - t) * 3);
          break;
        case 'rise':
          this.vel[ix] = Math.sin(time * 0.9 + sd) * 0.12;
          a *= (0.5 + 0.5 * Math.sin(time * 3.1 + sd * 7)) * Math.min(1, t * 3) * Math.min(1, (1 - t) * 3);
          break;
        case 'jelly':
          this.vel[ix] = Math.sin(time * 0.3 + sd) * 0.15;
          this.vel[ix + 1] = 0.08 + Math.sin(time * 1.4 + sd) * 0.25;
          a *= Math.min(1, t * 2) * Math.min(1, (1 - t) * 2) * (0.7 + 0.3 * Math.sin(time * 1.4 + sd));
          break;
        case 'spark':
          this.vel[ix] *= 1 - dt * 2.2;
          this.vel[ix + 1] = this.vel[ix + 1] * (1 - dt * 2.2) - dt * 0.6;
          this.vel[ix + 2] *= 1 - dt * 2.2;
          a *= 1 - t * t;
          break;
        case 'drop':
          this.vel[ix + 1] -= dt * 9;
          a *= 1 - t;
          break;
        default:
          a *= Math.min(1, t * 3) * (1 - t);
      }
      this.pos[ix] += this.vel[ix] * dt;
      this.pos[ix + 1] += this.vel[ix + 1] * dt;
      this.pos[ix + 2] += this.vel[ix + 2] * dt;
      if (b === 'drop' && this.pos[ix + 1] < 0) this.life[i] = 0;
      this.alpha[i] = Math.max(0, a);
      this.size[i] = this.baseSize[i] * (b === 'spark' ? 1 - t * 0.5 : 1);
    }
    (this.geo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.attributes.pcolor as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.attributes.size as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.attributes.alpha as THREE.BufferAttribute).needsUpdate = true;
  }
}

export const hex3 = (hex: number): [number, number, number] => [((hex >> 16) & 255) / 255, ((hex >> 8) & 255) / 255, (hex & 255) / 255];
