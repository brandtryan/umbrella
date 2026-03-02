import {
	defMain,
	assign,
	vec4,
	add,
	uniform,
	input,
	output,
	texture,
	type Vec4Sym,
	program,
	sym,
} from "@thi.ng/shader-ast";
const gl_Position = sym("vec4", "gl_Position");
// / 1. SYMBOLS (Defined for logic, but NOT exported for declaration)
// The Reactor will declare these for us based on the reactor config
const position = input("vec2", "position");
const uv = input("vec2", "uv");
const v_uv = output("vec2", "v_uv");
const u_time = uniform("float", "u_time");
const u_state = uniform("sampler2D", "input0");

// We DO want to declare this manually to ensure Location 0 binding
const o_frag = output("vec4", "o_frag", { loc: 0 });

// 2. VERTEX SHADER
const vs = defMain(() => [
	assign(v_uv, uv),
	assign(gl_Position, vec4(position, 0, 1)),
]);

// 3. FRAGMENT SHADER
const fs = defMain(() => {
	// Read previous state
	const prevState = texture(u_state, v_uv);

	// Physics Logic (Placeholder: simple color drift)
	const nextState = add(prevState, vec4(0.001, 0.001, 0.001, 0.01));

	return [assign(o_frag, nextState)];
});

// 4. EXPORT
// CRITICAL FIX: We only bundle [o_frag, fs].
// We DO NOT bundle [position, uv, u_time] because the Reactor adds them.
// We DO NOT bundle [vs] with variables, just the function.
export const updateShaderSpec = {
	vs: program([vs]),
	fs: program([o_frag, fs]),
};
