import {
	$xy,
	F,
	V2,
	V4,
	add,
	assign,
	defMain,
	defn,
	float,
	program,
	ret,
	sym,
	vec2,
	vec3,
	vec4,
	type FloatSym,
	type Vec2Sym,
} from "@thi.ng/shader-ast";
import { GLSLVersion, targetGLSL } from "@thi.ng/shader-ast-glsl";
import {
	additive,
	aspectCorrectedUV,
	fit1101,
	snoise2,
} from "@thi.ng/shader-ast-stdlib";
import { compileModel, defQuadModel, defShader, draw } from "@thi.ng/webgl";
