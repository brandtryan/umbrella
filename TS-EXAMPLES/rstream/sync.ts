// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/sync.ts

import { stream, sync, trace } from "@thi.ng/rstream";

const a = stream<number>();
const b = stream<number>();

const main = sync({ src: { a, b } }).subscribe(trace("result: "));

a.next(1);
// main received value, but does not yet emit...

b.next(2);
// now that `b` has delivered a value, `main` will produce its 1st result tuple
// result: { a: 1, b: 2 }

// any further input changes will trigger new results
// (with cached values from other inputs)
b.next(3);
// result: { a: 1, b: 3 }