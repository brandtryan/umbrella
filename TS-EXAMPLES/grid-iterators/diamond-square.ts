// Tangled @ 2025-07-05T17:30:05-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/grid-iterators/src/diamond-square.ts

import { diamondSquare } from "@thi.ng/grid-iterators";

// generate coords for a 17x17 grid
console.log(
  [...diamondSquare(4)]
);
// [
//   [0, 0],  [16, 0], [16, 16], [0, 16], [8, 0],  [8, 16],
//   [16, 8], [0, 8],  [8, 8],   [4, 0],  [12, 0], [12, 16],
//   [4, 16], [8, 4],  [8, 12],  [4, 8],  [12, 8], [0, 4],
//   ...
// ]