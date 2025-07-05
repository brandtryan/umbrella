// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/map.ts

import { map } from "@thi.ng/transducers";

console.log(
  [...map((x) => x * 10, [1, 2, 3])]
);
// [ 10, 20, 30 ]