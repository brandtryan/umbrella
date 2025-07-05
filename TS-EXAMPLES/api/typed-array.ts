// Tangled @ 2025-07-05T17:29:17-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/api/src/typedarray.ts

import { typedArrayOfVec } from "@thi.ng/api";

// inferred stride=2 (2d vectors)
console.log(
  typedArrayOfVec("f32", [[1,2], [3,4], [-10,20]])
);
// Float32Array(6) [ 1, 2, 3, 4, -10, 20 ]

// with custom stride=4
console.log(
  typedArrayOfVec("f32", [[1,2], [3,4], [-10,20]], 4)
);
// Float32Array(12) [ 1, 2, 0, 0, 3,4, 0, 0, -10, 20, 0, 0 ]