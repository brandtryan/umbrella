// Tangled @ 2025-07-05T17:29:17-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/api/src/typedarray.ts

import { asGLType, GLType } from "@thi.ng/api";

console.log(
  asGLType("f32")
);
// 5126 (aka GLType.F32)

console.log(
  asGLType(GLType.F32)
);
// 5126 (aka GLType.F32)