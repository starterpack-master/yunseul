export const FULLSCREEN_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

/**
 * 수면 합성: 내 세계(선명) + 수면 너머 상대 세계(일렁이고 흐릿하게).
 * 카메라 광선과 y=0 평면의 교차를 직접 계산해서, 내 세계 지형보다 수면이 가까우면 물을 그려요.
 */
export const COMPOSITE_FRAG = /* glsl */ `
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
`;

/** 밝은 부분을 강조하며 절반 해상도로 줄여요. */
export const EXTRACT_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D tInput;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tInput, vUv).rgb;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  c *= smoothstep(0.55, 1.0, l);
  gl_FragColor = vec4(c, 1.0);
}
`;

export const BLUR_FRAG = /* glsl */ `
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
`;

/**
 * 최종 출력: 도트 확대 + 몽환적인 은은한 번짐 + 상하 반전(아리 시점) + 뒤집기 전환.
 * y' = texW + (y - scrW) / sAmt  (sAmt = 1 이면 그대로, -1 이면 수면 기준 상하 반전)
 */
export const FINAL_FRAG = /* glsl */ `
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
`;

export const PARTICLE_VERT = /* glsl */ `
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
`;

export const PARTICLE_FRAG = /* glsl */ `
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
`;
