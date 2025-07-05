// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/fill.ts

import { fill, Vec2 } from "@thi.ng/vectors";

const buf = fill(
  new Vec2(new Float32Array(12)),
  new Vec2([1, 2]),
  3, // num elements
  4  // stride
);

console.log(buf);
// Float32Array [1, 2, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0]