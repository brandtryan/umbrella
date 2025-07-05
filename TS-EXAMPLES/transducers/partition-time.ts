// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/partition-time.ts

import { fromInterval, trace } from "@thi.ng/rstream";
import { partitionTime } from "@thi.ng/transducers";

// stream emits counter value every 250ms
// callect & partition into tuples every 1000ms
fromInterval(250)
  .transform(partitionTime(1000))
  .subscribe(trace())
// [ 0, 1, 2, 3 ]
// [ 4, 5, 6, 7 ]
// [ 8, 9, 10, 11 ]
// [ 12, 13, 14, 15 ]
// ...