// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/norm-range.ts

import { normRange } from "@thi.ng/transducers";

console.log(
  [...normRange(4)]
);
// [0, 0.25, 0.5, 0.75, 1.0]

console.log(
  [...normRange(4, false)]
);
// [0, 0.25, 0.5, 0.75]

console.log(
  [...normRange(4, true, true)]
);
// [1, 0.75, 0.5, 0.25, 0]

console.log(
  [...normRange(4, false, true)]
);
// [1, 0.75, 0.5, 0.25]