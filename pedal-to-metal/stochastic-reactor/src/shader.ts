export const transformFeedbackVertexShader = `#version 300 es
precision highp float;

// --- INPUTS ---
in vec2 a_pos;

// --- UNIFORMS ---
uniform float u_time;
uniform int u_active_word;
uniform float u_flow_speed;
uniform float u_noise_roughness;
uniform float u_focus_radius;
uniform float u_tic_multiplier;
uniform float u_base_tremble;

// --- OUTPUTS ---
out vec4 v_state;

// --- NOISE FUNCTIONS ---
// (Feel free to paste a classic Simplex Noise or Hash function here later)
float dummy_fbm(vec2 pos) {
    return sin(pos.x * 10.0 + u_time) * cos(pos.y * 10.0 + u_time);
}

void main() {
    float dist = abs(float(gl_VertexID - u_active_word));
    float urge = 1.0 - smoothstep(0.0, u_focus_radius, dist);

    float raw_chaos = dummy_fbm(a_pos * 10.0);
    float current_intensity = u_base_tremble + (urge * u_tic_multiplier);
    float final_displacement = raw_chaos * current_intensity;

    float wght = 400.0 + (final_displacement * 400.0);
    float wdth = 100.0 + (final_displacement * 50.0);
    float ital = urge > 0.85 ? 1.0 : 0.0;

    // Output to the Transform Feedback buffer
    v_state = vec4(wght, wdth, ital, urge);

	// 1. Map 0.0 -> 1.0 to -1.0 -> 1.0 and set the position
    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);

    // 2. Make the points 4 pixels wide so we can actually see them!
    gl_PointSize = 1.0;
}
`;
