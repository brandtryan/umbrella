// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/symmetric.ts

import { symmetric } from "@thi.ng/transducers";

console.log(
  [...symmetric("abc")]
);
// [ "a", "b", "c", "c", "b", "a" ]

console.log(
  [...symmetric([1, 2, 3])]
);
// [ 1, 2, 3, 3, 2, 1 ]