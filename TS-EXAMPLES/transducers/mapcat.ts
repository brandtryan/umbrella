// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/mapcat.ts

import { mapcat } from "@thi.ng/transducers";

console.log(
  [...mapcat((x) => [x, x], [1, 2, 3])]
);
// [ 1, 1, 2, 2, 3, 3 ]

console.log(
  [...mapcat((x) => x > 2 ? [x, x, x] : null, [1, 2, 3])]
);
// [ 3, 3, 3 ]