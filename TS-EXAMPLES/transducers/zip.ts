// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/zip.ts

import { zip } from "@thi.ng/transducers";

console.log(
  [...zip([1, 2, 3], [3, 4, 5, 0, 9])]
);
// [ [ 1, 3 ] [ 2, 4 ] [ 3, 5 ] ]

console.log(
  [...zip([1, 2, 3])]
);
// [ [ 1 ] [ 2 ] [ 3 ] ]