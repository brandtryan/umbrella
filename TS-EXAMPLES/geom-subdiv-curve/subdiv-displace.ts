// Tangled @ 2025-07-05T17:30:02-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-subdiv-curve/src/kernels.ts

import { subdivide, SUBDIV_DISPLACE } from "@thi.ng/geom-subdiv-curve";

// define subdiv kernel w/ custom displacements
const kernel = SUBDIV_DISPLACE([[0.25, 0.25], [0.75, -0.25]]);

// subdivide polyline with the kernel
console.log(
  subdivide([[0,0], [100, 100], [200, 0]], kernel)
);
// [
//   [ 0, 0 ], [ 50, 0 ], [ 50, 100 ], [ 100, 100 ],
//   [100, 50 ], [ 200, 50 ], [ 200, 0 ]
// ]