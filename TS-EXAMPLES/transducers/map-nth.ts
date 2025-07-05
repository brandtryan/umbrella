// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/map-nth.ts

import { mapNth, range } from "@thi.ng/transducers";

console.log(
  [...mapNth(3, (x) => `*${x}*`, range(1, 10))]
);
// [ "*1*", 2, 3, "*4*", 5, 6, "*7*", 8, 9 ]

// with offset
console.log(
  [...mapNth(3, 5, (x) => x * 100, range(1, 10))]
);
// [ 1, 2, 3, 4, 5, 600, 7, 8, 900 ]