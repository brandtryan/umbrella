import {
	add,
	defn,
	float,
	ret,
	sym,
	vec2,
	vec3,
	vec4,
} from "@thi.ng/shader-ast";
import {
	additive,
	aspectCorrectedUV,
	fit1101,
	snoise2,
} from "@thi.ng/shader-ast-stdlib";

const mainImage = defn(
	"vec4",
	"mainImage",
	["vec2", "vec2", "float"],
	(frag, res, time) => {
		let uv;
		let noise;
		return [
			// compute UV coords and assign to `uv`
			(uv = sym(aspectCorrectedUV(frag, res))),
			// dynamically create a multi-octave version of `snoise2`
			// computed over 4 octaves w/ given phase shift and decay
			// factor (both per octave)
			(noise = sym(
				additive("vec2", snoise2, 4)(add(uv, time), vec2(2), float(0.5))
			)),
			// `noise` is in [-1..1] interval, use fit1101 to fit to [0..1]
			ret(vec4(vec3(fit1101(noise)), 1)),
		];
	}
);
