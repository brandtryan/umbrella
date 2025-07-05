// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/map.ts

import { add2, mapVV, Vec2 } from "@thi.ng/vectors";

// each input buffer contains 2 2D vectors, but using
// different strided data layouts
const res = mapVV(
  // transformation function
  add2,
  // init output buffer view
  new Vec2(),
  // wrap 1st input buffer & configure offset & component stride
  new Vec2([1,0,2,0,0,0,0,0,3,0,4,0,0,0,0,0], 0, 2),
  // wrap 2nd input buffer
  new Vec2([0,10,0,0,20,0,0,30,0,0,40], 1, 3),
  2, // num vectors
  2, // output element stride
  8, // input #1 element stride
  6  // input #2 element stride
);

console.log(res);
// [ 11, 22, 33, 44 ]