// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/repeatedly.ts

import { repeatedly } from "@thi.ng/transducers";

console.log(
  [...repeatedly(() => Math.floor(Math.random() * 10), 5)]
);
// [7, 0, 9, 3, 1]

// same result as range(5)
console.log(
  [...repeatedly((i) => i, 5)]
);
// [0, 1, 2, 3, 4]