// Tangled @ 2025-07-05T17:29:53-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom/src/warp-points.ts

import { rect, warpPoint } from "@thi.ng/geom";

const p = [1075, -1975];

// source rect [1000,-2000] .. [1100,-1900]
const src = rect([1000,-2000], 100);

// destination rect [0,0] .. [0.5,0.5]
const dest = rect(0.5);

// map `p` into the space of `dest` via `src`
console.log(warpPoint(p, dest, src));
// [ 0.375, 0.125 ]