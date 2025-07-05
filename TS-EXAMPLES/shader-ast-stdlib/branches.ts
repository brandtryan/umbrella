// Tangled @ 2025-07-05T17:30:57-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/shader-ast-stdlib/src/controlflow/branches.ts

import { float, sym, vec3 } from "@thi.ng/shader-ast";
import { branches } from "@thi.ng/shader-ast-stdlib";
import { targetGLSL } from "@thi.ng/shader-ast-glsl";

// dummy "position" symbol (would be gl_FragCoord.x or similar)
const pos = sym(float(0.11));

// serialize expression to GLSL for better legibility
console.log(
  targetGLSL()(
    branches(
      pos,
      // branch terms/options...
      // branch thresholds are automatically computed
      // making it trivial to add/remove terms
      vec3(1,0,0),
      vec3(1,1,0),
      vec3(0,1,0),
      vec3(0,0,1),
    )
  )
);

// re-formatted result:
// ((_sf5 < 0.25)
//   ? vec3(1.0, 0.0, 0.0)
//   : ((_sf5 < 0.5)
//   ? vec3(1.0, 1.0, 0.0)
//   : ((_sf5 < 0.75)
//   ? vec3(0.0, 1.0, 0.0)
//   : vec3(0.0, 0.0, 1.0))))