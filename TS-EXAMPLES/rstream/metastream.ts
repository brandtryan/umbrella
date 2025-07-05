// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/metastream.ts

import { fromIterable, metaStream, trace } from "@thi.ng/rstream";
import { repeat } from "@thi.ng/transducers";

// transform each received odd number into a stream
// producing 3 copies of that number in the metastream
// even numbers are ignored
const a = metaStream<number, number>(
  (x) => (x & 1)
    ? fromIterable(repeat(x, 3), { delay: 100 })
    : null
);

a.subscribe(trace())
a.next(23)

// 23
// 23
// 23

setTimeout(() => a.next(42), 500); // value 42 ignored by metastream

setTimeout(() => a.next(43), 1000);
// 43
// 43
// 43