// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/stream.ts

import { stream, subscription, trace } from "@thi.ng/rstream";

const a = stream((s) => {
    s.next(1);
    s.next(2);
    s.done()
});
a.subscribe(trace("a"))
// a 1
// a 2
// a done

// as reactive value mechanism
const b = stream();
// or alternatively
// b = subscription();

b.subscribe(trace("b1"));
b.subscribe(trace("b2"));

// external / manual trigger
b.next(42);
// b1 42
// b2 42