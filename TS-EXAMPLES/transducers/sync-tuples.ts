// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/sync-tuples.ts

import { syncTuples } from "@thi.ng/transducers";

console.log(
  [...syncTuples(2, [[], [0], [0, 0], [1, 1], [, 2], []])]
);