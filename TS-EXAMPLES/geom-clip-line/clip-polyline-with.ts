// Tangled @ 2025-07-05T17:29:55-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-clip-line/src/clip-with.ts

import { clipPolylineWith } from "@thi.ng/geom-clip-line";

const pts = [[0, 0], [1, 0], [1, 1], [2, 1], [3, 1], [4, 0], [5, 0]];

// isolate horizontal chunks
console.log(
  clipPolylineWith((a, b) => a[1] == b[1], pts)
);
// [
//   [[0, 0], [1, 0]],
//   [[1, 1], [2, 1], [3, 1]],
//   [[4, 0], [5, 0]]
// ]

// isolate sloped chunks
console.log(
  clipPolylineWith((a, b) => a[1] != b[1], pts)
);
// [
//   [[1, 0], [1, 1]],
//   [[3, 1], [4, 0]]
// ]