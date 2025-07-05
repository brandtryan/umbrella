// Tangled @ 2025-07-05T17:29:17-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/adjacency/src/mst.ts

import { mst } from "@thi.ng/adjacency";
import { distSq } from "@thi.ng/vectors";

// 2D vectors
verts = [[0,0], [0,1], [1,1], [1,2], [4,2]]

// connections (vertex ID pairs)
edges = [[0,1], [0,4], [1,2], [1,3], [2,3], [2,4]]

console.log(
  mst(
    edges,
    // max vertex ID
    4,
    // cost function (cartesian distance)
    ([a, b]) => distSq(verts[a], verts[b]),
    // edge vertex IDs
    (e) => e
  )
);
// [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ] ]