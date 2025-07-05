// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/permutations.ts

import { map, permutations, range } from "@thi.ng/transducers";

console.log(
  [...permutations("ab", range(3))]
);
// [ ['a', 0], ['a', 1], ['a', 2],
//   ['b', 0], ['b', 1], ['b', 2] ]

console.log(
  [...map((x: any[]) => x.join(""), permutations("ab", "-", range(3)))]
);
// ['a-0', 'a-1', 'a-2', 'b-0', 'b-1', 'b-2']

console.log(
  [...permutations([], "", range(0))]
);
// []