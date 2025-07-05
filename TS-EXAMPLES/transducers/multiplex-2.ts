// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/multiplex.ts

import { iterator, map, mapcat, multiplex } from "@thi.ng/transducers";

const res = [...iterator(
  multiplex(
    // override default unwrap behavior for this transducer
    // (i.e. here to ensure results are always arrays)
    [mapcat((x) => x), false],
    // use default behavior for this
    map((x) => x),
  ),
  [[1, 2], [3]]
)];

console.log(res);
// [ [ [ 1, 2 ], [ 1, 2 ] ], [ [ 3 ], [ 3 ] ] ]

// to compare: using the default behavior would produce this instead
// (note the difference in the last result):

// [ [ [ 1, 2 ], [ 1, 2 ] ], [ 3, [ 3 ] ] ]