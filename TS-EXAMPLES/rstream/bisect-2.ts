// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/bisect.ts

import { bisect, fromIterable, subscription, trace } from "@thi.ng/rstream";
import { map } from "@thi.ng/transducers";

const odd = subscription<number, number>();
const even = subscription<number, number>();
odd.subscribe(trace("odd"));
odd.subscribe(trace("odd x10"), { xform: map((x: number) => x * 10) });
even.subscribe(trace("even"));

fromIterable([1, 2, 3, 4]).subscribe(
    bisect((x) => !!(x & 1), odd, even)
);
// odd x10 10
// odd 1
// even 2
// odd x10 30
// odd 3
// even 4
// odd x10 done
// odd done
// even done