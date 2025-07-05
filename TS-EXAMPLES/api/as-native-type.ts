// Tangled @ 2025-07-05T17:29:17-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/api/src/typedarray.ts

import { asNativeType, GLType } from "@thi.ng/api";

console.log(
  asNativeType(GLType.F32)
);
// "f32"

console.log(
  asNativeType("f32")
);
// "f32"