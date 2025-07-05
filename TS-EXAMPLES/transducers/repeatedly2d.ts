// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/repeatedly2d.ts

import { repeatedly2d } from "@thi.ng/transducers";

console.log(
  [...repeatedly2d((x, y) => [(x + 1) * 10, (y + 1) * 100], 2, 3)]
);
// [
//   [ 10, 100 ], [ 20, 100 ],
//   [ 10, 200 ], [ 20, 200 ],
//   [ 10, 300 ], [ 20, 300 ]
// ]