// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/merge.ts

import { fromIterable, merge, trace } from "@thi.ng/rstream";

merge({
    // input streams w/ different frequencies
    src: [
        fromIterable([1, 2, 3], { delay: 10 }),
        fromIterable([10, 20, 30], { delay: 21 }),
        fromIterable([100, 200, 300], { delay: 7 })
    ]
}).subscribe(trace());
// 100
// 1
// 200
// 10
// 2
// 300
// 3
// 20
// 30
// done