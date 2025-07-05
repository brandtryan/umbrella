// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/norm-frequencies.ts

import { normFrequencies } from "@thi.ng/transducers";

const items = [1, 2, 3, 1, 1, 4, 2, 5, 1, 2];

console.log(
  normFrequencies(10, items)
);
// Map(5) {
//   1 => 0.4,
//   2 => 0.3,
//   3 => 0.1,
//   4 => 0.1,
//   5 => 0.1,
// }