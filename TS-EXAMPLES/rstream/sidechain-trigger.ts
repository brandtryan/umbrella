// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/sidechain-trigger.ts

import { reactive, stream, sidechainTrigger, trace } from "@thi.ng/rstream";

const src = reactive("payload");

const side = stream();

sidechainTrigger(src, side).subscribe(trace("data:"));

side.next(1);
// data: payload

side.next(1);
// data: payload

// only newest value will be buffered
src.next("update #1");
src.next("update #2");

// ...until side chain triggers again
side.next(1);
// data: update #2