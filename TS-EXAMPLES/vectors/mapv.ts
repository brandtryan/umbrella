// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/map.ts

import { mapV, swapXY, Vec2 } from "@thi.ng/vectors";

// 4x 2D vectors in SOA layout
// i.e. [x1, x2, x3, x4, y1, y2, y3, y4]
const buf = [1, 3, 5, 7, 2, 4, 6, 8];

// use `swapXY` to swizzle each vector and use AOS for output
const res = mapV(swapXY, new Vec2(), new Vec2(buf, 0, 4), 4, 2, 1);

console.log(res);
// [ 2, 1, 4, 3, 6, 5, 8, 7 ]

// unpack result for demonstration purposes
console.log(
  [...Vec2.iterator(res, 4)].map(v => [...v])
);
// [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ], [ 8, 7 ] ]