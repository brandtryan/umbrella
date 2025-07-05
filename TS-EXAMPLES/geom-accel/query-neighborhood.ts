// Tangled @ 2025-07-05T17:29:52-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-accel/src/hash-grid.ts

import { knearest2 } from "@thi.ng/distance";
import { HashGrid2 } from "@thi.ng/geom-accel";
import { repeatedly } from "@thi.ng/transducers";
import { random2, type ReadonlyVec } from "@thi.ng/vectors";

// generate 1000 random points in [-500..500) interval
const pts = [...repeatedly(() => random2([], -500, 500), 1000)];

// create hash grid with cell size 16 and index all points
// (since indexed items are just points key function is identity)
const grid = new HashGrid2<ReadonlyVec>((p) => p, 16, pts.length, pts);

// perform k-nearest neighbor search around origin (k=5, radius=200)
console.log(
  grid.queryNeighborhood(knearest2([0, 0], 5, 200)).values()
);
// [
//   [-12.65, 26.19]
//   [1.94, 28.09]
//   [-17.49, -8.76]
//   [-14.55, 8.17]
//   [8.09, 17.47]
// ]