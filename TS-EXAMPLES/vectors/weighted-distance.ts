// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/dist-weighted.ts

import { dist3, weightedDistance, ONE3, ZERO3 } from "@thi.ng/vectors";

// custom distance function, ignoring Y-component
const distXZ = weightedDistance(dist3, [1, 0, 1]);

// distance in XZ plane only
console.log(
  distXZ(ONE3, ZERO3)
);
// 1.4142135623730951

// compare with full Eucledian distance
console.log(
  dist3(ONE3, ZERO3)
);
// 1.7320508075688772