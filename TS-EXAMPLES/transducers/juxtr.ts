// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/juxtr.ts

import { add, juxtR, reduce, reductions, str } from "@thi.ng/transducers";

console.log(
  reduce(
    // use 3 reducers in parallel
    juxtR(add(), reductions(add()), str("-")),
    [1, 2, 3, 4]
  )
);
// [ 10, [ 0, 1, 3, 6, 10 ], '1-2-3-4' ]