// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/gvec.ts

import { gvec, add, copy, eqDelta } from "@thi.ng/vectors";

// 3D vector w/ component stride length of 4
let a = gvec([1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0], 3, 0, 4);

console.log(a[0], a[1], a[2]);
// 1 2 3

console.log(a.stride);
// 4

console.log([...a]);
// [1, 2, 3]

console.log(a.toString());
// "[1.000, 2.000, 3.000]"

console.log(add([], a, a));
// [2, 4, 6]

console.log(copy(a));
// [1, 2, 3]

console.log(a.copyView());
// Proxy [ [ 1, 0, 2, 0, 3, 0 ], ... }

console.log(eqDelta(a, [1, 2, 3]));
// true