// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/quicksort.ts

import { quickSort, multiSwap } from "@thi.ng/arrays";

const a = [4, 3, 1, 8, 5]
const b = [40, 30, 10, 80, 50]
const c = [-4, -3, -1, -8, -5]

// use `multiSwap` to sort extra arrays based on sort order of `a`
console.log(
  quickSort(a, undefined, multiSwap(b, c))
);
// [ 1, 3, 4, 5, 8 ] (a)

console.log(b);
// [ 10, 30, 40, 50, 80 ]

console.log(c);
// [ -1, -3, -4, -5, -8 ]