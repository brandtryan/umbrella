import type { Fn4, IObjectOf } from "@thi.ng/api";
import type { Sym, Func } from "@thi.ng/shader-ast";
import type { GLSLTarget } from "@thi.ng/shader-ast-glsl";
import type { GLSL, GLVec, Texture } from "@thi.ng/webgl";

export interface OpSpec {
	// now set our main to be of type OpShaderFn that we made
	main: OpShaderFn;
	// unis - any GLSL type, number | GLVEC
	unis: IObjectOf<[GLSL, number | GLVec]>;
	// 'inputs" allows us to get textures from other shaders
	inputs: Texture[];
}

// grabbed this function sig by hovering over "fs"
export type OpShaderFn = Fn4<
	GLSLTarget,
	IObjectOf<Sym<any>>, // uni
	IObjectOf<Sym<any>>, // attribs
	IObjectOf<Sym<any>>, // vary
	(Sym<any> | Func<any>)[]
>;
