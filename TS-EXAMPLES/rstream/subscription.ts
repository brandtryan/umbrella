// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/subscription.ts

import { subscription, trace } from "@thi.ng/rstream";
import { filter } from "@thi.ng/transducers";

// as reactive value mechanism (same as with stream() above)
const s = subscription<number, number>();

// attach child subscriptions
s.subscribe(trace("s1"));
// this child sub will receive filtered values only
s.subscribe(trace("s2"), { xform: filter((x: number) => x > 25) });

// external trigger
s.next(23);
// s1 23
s.next(42);
// s1 42
// s2 42