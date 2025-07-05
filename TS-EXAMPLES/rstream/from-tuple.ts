// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/object.ts

import { fromTuple, subscription, trace } from "@thi.ng/rstream";

const tup = fromTuple([10, 20, 30]);

tup.streams[0].subscribe(trace("[0]:"));
tup.streams[1].subscribe(trace("[1]:"));
tup.streams[2].subscribe(trace("[2]:"));

// [0]: 10
// [1]: 20
// [2]: 30

tup.next([100,20,30]);

// [0]: 100
// (the two other streams didn't update since their values haven't changed)