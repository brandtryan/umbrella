// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/map-indexed.ts

import { mapIndexed } from "@thi.ng/transducers";

console.log(
  [...mapIndexed((i, x) => ["id" + i, x * 10], 42, [1, 2, 3])]
);
// [ [ "id42", 10 ], [ "id43", 20 ], [ "id44", 30 ] ]