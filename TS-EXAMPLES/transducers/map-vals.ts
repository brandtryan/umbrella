// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/map-vals.ts

import { mapVals } from "@thi.ng/transducers";

console.log(
  [...mapVals((x)=> x * 10, [{a: 1, b: 2}, {c: 3, d: 4}])]
);
// [ { a: 10, b: 20 }, { c: 30, d: 40 } ]