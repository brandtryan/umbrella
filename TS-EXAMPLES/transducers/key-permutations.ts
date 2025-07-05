// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/key-permutations.ts

import { keyPermutations } from "@thi.ng/transducers";

console.log(
  [...keyPermutations({ a: [1, 2], b: [true, false], c: ["X", "Y"] })]
);
// [
//   { a: 1, b: true, c: 'X' },
//   { a: 1, b: true, c: 'Y' },
//   { a: 1, b: false, c: 'X' },
//   { a: 1, b: false, c: 'Y' },
//   { a: 2, b: true, c: 'X' },
//   { a: 2, b: true, c: 'Y' },
//   { a: 2, b: false, c: 'X' },
//   { a: 2, b: false, c: 'Y' }
// ]