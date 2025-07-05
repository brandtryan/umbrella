// Tangled @ 2025-07-05T17:30:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/geom-resample/src/axis.ts

import { sampleUniformX } from "@thi.ng/geom-resample";

console.log(
  sampleUniformX([[0, 0], [3, 5], [5, 2]], 0, 5)
);
// [
//   [ 0, 0 ],
//   [ 1, 1.666... ],
//   [ 2, 3.333... ],
//   [ 3, 5 ],
//   [ 4, 3.5 ],
//   [ 5, 2 ]
// ]