// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/pad-sides.ts

import { padSides, range } from "@thi.ng/transducers";

// pad both sides with 10
console.log(
  [...padSides(range(3), 10)]
);

// pad both sides 3x
console.log(
  [...padSides(range(3), 10, 3)]
);

// left/start only
console.log(
  [...padSides(range(3), 10, 3, 0)]
);

// right/end only
console.log(
  [...padSides(range(3), 10, 0, 3)]
);

// padSides() is syntax sugar for:

// default
// concat(repeat(x, numLeft), src, repeat(x, numRight))

// left only
// concat(repeat(x, numLeft), src)

// right only
// concat(src, repeat(x, numRight))