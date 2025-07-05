// Tangled @ 2025-07-05T17:30:05-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/grid-iterators/src/flood-fill.ts

import { floodFill } from "@thi.ng/grid-iterators";

const img = [
  1,0,1,0,
  0,0,0,0,
  0,1,1,0,
  0,1,1,1,
];

// flood fill connected region from point (2,1)
console.log(
  [...floodFill((x, y) => img[y * 4 + x] === 0, 2, 1, 4, 4)]
);
// [
//   [2, 1], [1, 1], [0, 1], [3, 1], [3, 2],
//   [3, 0], [0, 2], [0, 3], [1, 0]
// ]