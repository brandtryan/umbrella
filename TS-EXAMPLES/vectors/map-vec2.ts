// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/map.ts

import { add2, Vec2 } from "@thi.ng/vectors";
import { map, run, zip } from "@thi.ng/transducers";

// output buffer
const out = new Array(4);

run(
  map(([o, a, b]) => add2(o, a, b)),
  zip(
    Vec2.iterator(out, 2),
    Vec2.iterator([1,0,2,0,0,0,0,0,3,0,4,0,0,0,0,0], 2, 0, 2, 8),
    Vec2.iterator([0,10,0,0,20,0,0,30,0,0,40], 2, 1, 3, 6),
  )
);

console.log(out);
// [ 11, 22, 33, 44 ]