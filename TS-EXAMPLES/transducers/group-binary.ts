// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/group-binary.ts

import { groupBinary, reduce } from "@thi.ng/transducers";

const tree = reduce(
  groupBinary<{ id: number }>(4, x => x.id & 0xf),
  [{ id: 3 }, { id: 8 }, { id: 15 }, { id: 0 }]
);

console.log(tree.l.l.l.l);
// [ { id: 0 } ]

console.log(tree.r.r.r.r);
// [ { id: 15 } ]

console.log(tree.l.l.r.r);
// [ { id: 3 } ]