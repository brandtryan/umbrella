// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/sorted-frequencies.ts

import { filter, sortedFrequencies, transduce } from "@thi.ng/transducers";

const input = "hello, world! this transducers-stuff is pretty awesome! :)";

const freqs = transduce(
  filter(x => /[a-z0-9]/.test(x)),
  sortedFrequencies(),
  input
);

console.log(freqs);
// [
//   [ 's', 6 ], [ 'e', 5 ], [ 't', 5 ], [ 'r', 4 ],
//   [ 'l', 3 ], [ 'o', 3 ], [ 'h', 2 ], [ 'w', 2 ],
//   [ 'd', 2 ], [ 'i', 2 ], [ 'a', 2 ], [ 'u', 2 ],
//   [ 'f', 2 ], [ 'n', 1 ], [ 'c', 1 ], [ 'p', 1 ],
//   [ 'y', 1 ], [ 'm', 1 ]
// ]