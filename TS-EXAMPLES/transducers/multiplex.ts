// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/multiplex.ts

import { iterator, map, multiplex } from "@thi.ng/transducers";

const res = [...iterator(
  multiplex(
    map(x => x.charAt(0)),
    map(x => x.toUpperCase()),
    map(x => x.length)
  ),
  ["Alice", "Bob", "Charlie"]
)];

console.log(res);
// [ [ "A", "ALICE", 5 ], [ "B", "BOB", 3 ], [ "C", "CHARLIE", 7 ] ]