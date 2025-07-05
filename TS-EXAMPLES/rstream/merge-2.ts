// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/merge.ts

import { fromIterable, merge, trace } from "@thi.ng/rstream";
import { labeled } from "@thi.ng/transducers";

merge({
    src: [
        fromIterable([1, 2, 3]).transform(labeled("a")),
        fromIterable([10, 20, 30]).transform(labeled("b")),
    ]
}).subscribe(trace());
// ["a", 1]
// ["b", 10]
// ["a", 2]
// ["b", 20]
// ["a", 3]
// ["b", 30]
// done