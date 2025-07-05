// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/take-while.ts

import { range, takeWhile } from "@thi.ng/transducers";

console.log(
  [...takeWhile((x) => x < 5, range())]
);
// [ 0, 1, 2, 3, 4 ]