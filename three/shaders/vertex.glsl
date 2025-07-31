uniform float u_time;
uniform float u_frequency;
uniform float u_amplitude;

varying vec2 v_uv;
varying float v_elevation;

void main() {
    v_uv = uv;
    vec3 pos = position;

    // 여러 사인 함수를 중첩하여 훨씬 더 자연스럽고 예측 불가능한 파동을 만듭니다.
    float wave1 = sin(pos.x * u_frequency * 0.5 + u_time * 0.6) * u_amplitude;
    float wave2 = sin(pos.x * u_frequency * 1.5 + u_time * 1.0) * (u_amplitude * 0.4);
    float wave3 = sin(pos.y * u_frequency * 1.2 + u_time * 0.8) * (u_amplitude * 0.3);

    pos.y += wave1 + wave2 + wave3;
    v_elevation = pos.y;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
