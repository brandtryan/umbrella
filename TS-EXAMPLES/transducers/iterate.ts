// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/iterate.ts

import { iterate } from "@thi.ng/transducers";

console.log(
  [...iterate((x) => x * 2, 1, 5)]
);
// [ 1, 2, 4, 8, 16 ]

console.log(
  [...iterate((x, i) => x * 10 + i, 0, 8)]
);
// [ 0, 1, 12, 123, 1234, 12345, 123456, 1234567 ]