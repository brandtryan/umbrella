// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/map-vectors.ts

import { add2, addN2, mapVectors, mixN2 } from "@thi.ng/vectors";

console.log(
  mapVectors(addN2, [], [[1, 2], [10, 20]], 100)
);
// [ [ 101, 102 ], [ 110, 120 ] ]

console.log(
  mapVectors(add2, [], [[1, 2], [10, 20]], [[100, 200], [1000, 2000]])
);
// [ [ 101, 202 ], [ 1010, 2020 ] ]

console.log(
  mapVectors(mixN2, null, [[1, 2], [100, 200]], [[10, 20], [1000, 2000]], 0.5)
);
// [ [ 5.5, 11 ], [ 550, 1100 ] ]