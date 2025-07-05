// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/pad-last.ts

import { padLast } from "@thi.ng/transducers";

console.log(
  [...padLast(8, 0, [1, 2, 3, 4, 5])]
);
// [ 1, 2, 3, 4, 5, 0, 0, 0 ]

console.log(
  [...padLast(8, 0, [1])]
);
// [ 1, 0, 0, 0, 0, 0, 0, 0 ]

console.log(
  [...padLast(8, 0, [])]
);
// []

console.log(
  [...padLast(4, 0, [1, 2])]
);
// [ 1, 2, 0, 0 ]

console.log(
  [...padLast(4, 0, [1, 2, 3, 4, 5])]
);
// [ 1, 2, 3, 4, 5, 0, 0, 0 ]