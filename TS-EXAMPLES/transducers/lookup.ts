// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/lookup.ts

import { lookup1d, map } from "@thi.ng/transducers";

console.log(
  [...map(lookup1d([10, 20, 30]), [2,0,1])]
);
// [ 30, 10, 20 ]