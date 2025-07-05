// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/multiplex-obj.ts

import { multiplexObj, map } from "@thi.ng/transducers";

const res = [...multiplexObj(
  {
    initial: map(x => x.charAt(0)),
    upper:   map(x => x.toUpperCase()),
    length:  map(x => x.length)
  },
  ["Alice", "Bob", "Charlie"]
)];

console.log(res);
// [
//   { length: 5, upper: 'ALICE', initial: 'A' },
//   { length: 3, upper: 'BOB', initial: 'B' },
//   { length: 7, upper: 'CHARLIE', initial: 'C' }
// ]