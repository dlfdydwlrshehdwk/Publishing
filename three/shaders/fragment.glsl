uniform vec3 u_color;
varying vec2 v_uv;
varying float v_elevation;

void main() {
    // 파동의 높이(v_elevation)를 기반으로 빛의 세기를 결정합니다.
    // pow를 사용하여 파동의 가장 높은 지점에서만 빛이 강하게 나타나도록 합니다.
    float glow = pow(abs(v_elevation) * 2.0, 5.0);

    // 수직 방향으로 가장자리를 부드럽게 처리합니다.
    float vertical_fade = pow(sin(v_uv.y * 3.14159), 2.0);

    // 최종 투명도는 빛의 세기와 가장자리 페이드 효과를 곱하여 결정합니다.
    // 이 값이 높을수록 더 밝고 선명한 빛이 됩니다.
    float alpha = glow * vertical_fade;

    // 최종 색상은 u_color를 그대로 사용하고, alpha 값으로 밝기를 조절합니다.
    // Additive Blending 덕분에 alpha가 높을수록 흰색에 가까운 밝은 빛이 됩니다.
    gl_FragColor = vec4(u_color, alpha);
}
