// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/repeatedly3d.ts

import { repeatedly3d } from "@thi.ng/transducers";

console.log(
  [...repeatedly3d((x, y, z) => [(x+1)*10, (y+1)*100, (z+1)*1000], 2, 2, 2)]
);
// [
//   [ 10, 100, 1000 ], [ 20, 100, 1000 ], [ 10, 200, 1000 ], [ 20, 200, 1000 ],
//   [ 10, 100, 2000 ], [ 20, 100, 2000 ], [ 10, 200, 2000 ], [ 20, 200, 2000 ]
// ]