// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/group-by-obj.ts

import { groupByObj } from "@thi.ng/transducers";

console.log(
  groupByObj(
    // group items by first char
    { key: (x) => x[0] },
    ["alma", "charlie", "brontë", "anna", "cora", "aurora"]
  )
);
// {
//   a: [ "alma", "anna", "aurora" ],
//   c: [ "charlie", "cora" ],
//   b: [ "brontë" ],
// }