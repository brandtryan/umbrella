// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/page.ts

import { page, range } from "@thi.ng/transducers";

console.log(
  [...page(0, 5, range(12))]
);
// [ 0, 1, 2, 3, 4 ]

console.log(
  [...page(1, 5, range(12))]
);
// [ 5, 6, 7, 8, 9 ]

console.log(
  [...page(2, 5, range(12))]
);
// [ 10, 11 ]

console.log(
  [...page(3, 5, range(12))]
);
// []