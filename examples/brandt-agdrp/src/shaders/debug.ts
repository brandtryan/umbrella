import {
	defMain,
	assign,
	vec4,
	vec3,
	input,
	output,
	uniform,
	texture,
	type Vec4Sym,
	sym,
	program,
} from "@thi.ng/shader-ast";
const gl_Position = sym("vec4", "gl_Position");
// Reactor-managed symbols (Do not export in program)
const position = input("vec2", "position");
const uv = input("vec2", "uv");
const v_uv = output("vec2", "v_uv");
const u_state = uniform("sampler2D", "state");

// Self-managed symbol (Export this!)
const o_frag = output("vec4", "o_frag", { loc: 0 });
// Vertex Shader
const vs = defMain(() => [
	assign(v_uv, uv),
	assign(gl_Position, vec4(position, 0, 1)),
]);

// Fragment Shader
const fs = defMain(() => {
	const col: any = texture(u_state, v_uv);
	return [assign(o_frag, vec4(vec3(col), 1))];
});
export const debugShaderSpec = {
	vs: program([vs]),
	fs: program([o_frag, fs]),
};
