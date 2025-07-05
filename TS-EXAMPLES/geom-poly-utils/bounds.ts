// Tangled @ 2025-07-05T17:29:59-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-poly-utils/src/bounds.ts

import { bounds } from "@thi.ng/geom-poly-utils";
import { MAX2, MIN2 } from "@thi.ng/vectors";

const points = [[-1,-2], [5,-3], [0,4]];

console.log(
  bounds(points, [...MAX2], [...MIN2])
);
// [[-1, -3], [5, 4]]