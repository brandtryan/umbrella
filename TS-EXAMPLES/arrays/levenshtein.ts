// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/levenshtein.ts

import { levenshtein } from "@thi.ng/arrays";

console.log(
  levenshtein([1, 2, 3, 4, 5], [1, 2, 4, 3, 5])
);
// 2

console.log(
  levenshtein(
    [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    [{ id: 4 }, { id: 5 }, { id: 3 }, { id: 1 }, { id: 2 }],
    // max dist
    2,
    // predicate
    (a, b) => a.id === b.id
  )
);
// Infinity