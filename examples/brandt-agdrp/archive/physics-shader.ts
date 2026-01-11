import {
	// Structure
	program,
	defMain,
	sym,
	assign,
	ifThen,
	scope,

	// Inputs/Outputs
	uniform,
	input,
	output,

	// Math & Types
	add,
	sub,
	mul,
	gt,
	normalize,
	vec2,
	float,

	// Texture & Swizzle
	texture,
	$x,
	$ as swizzle, // Import generic swizzle function
} from "@thi.ng/shader-ast";

// ---------------------------------------------------------
// 1. SETUP: Inputs & Outputs
// ---------------------------------------------------------
const u_noiseTex = uniform("sampler2D", "u_noiseTex");
const u_time = uniform("float", "u_time");

// Physics Parameters
const u_stiffness = uniform("float", "u_stiffness");
const u_damping = uniform("float", "u_damping");
const u_explosiveForce = uniform("float", "u_explosiveForce");
const u_threshold = uniform("float", "u_threshold");

// Attributes
const a_position = input("vec2", "a_position");
const a_prevPos = input("vec2", "a_prevPos");
const a_anchor = input("vec2", "a_anchor");
const a_uv = input("vec2", "a_uv");

// Outputs
const v_nextPos = output("vec2", "v_nextPos");
const v_nextPrevPos = output("vec2", "v_nextPrevPos");
export const physicsShader = program([
	defMain(() => {
		// 1. Define Variables (Symbols)
		let velocity = sym(sub(a_position, a_prevPos));
		let ticForce = sym(vec2(0.0, 0.0));
		let neuroSample = sym(texture(u_noiseTex, a_uv));

		// 2. Logic Body
		return [
			// A. Apply Damping (Friction)
			assign(velocity, mul(velocity, u_damping)),

			// (Removed the broken incomplete assign block here)

			// B. Trigger Logic (The "Tic")
			ifThen(gt($x(neuroSample), u_threshold), [
				// If pressure > threshold, calculate explosion vector
				assign(
					ticForce,
					mul(
						// Direction: (G,B) channels - 0.5
						normalize(sub(swizzle(neuroSample, "yz"), vec2(0.5))),
						u_explosiveForce
					)
				),
			]),

			// C. Integration (Position Update)
			// nextPos = currentPos + velocity + springForce + ticForce
			assign(
				v_nextPos,
				add(
					add(a_position, velocity),
					add(
						// Inline Spring Calculation: (Anchor - Pos) * Stiffness
						mul(sub(a_anchor, a_position), u_stiffness),
						ticForce
					)
				)
			),

			// D. Update Previous Position (for next frame's velocity)
			assign(v_nextPrevPos, a_position),
		];
	}),
]);
