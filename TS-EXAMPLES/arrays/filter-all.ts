// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/filter-all.ts

import { filterAll } from "@thi.ng/arrays";

const [a, b, c] = filterAll(
  (x) => x==="a",
  // the predicate is applied to this array
  ["a", "b", "a"],
  // any number of additional arrays...
  [1, 2, 3],
  [{ id: 123 }, { id: 456 }, { id: 789 }]
);

console.log("a", a);
// [ "a", "a" ]

console.log("b", b);
// [ 1, 3 ]

console.log("c", c);
// [{ id: 123 }, { id: 789 }]