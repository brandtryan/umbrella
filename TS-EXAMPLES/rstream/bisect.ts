// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/bisect.ts

import { bisect, fromIterable, trace } from "@thi.ng/rstream";

fromIterable([1, 2, 3, 4]).subscribe(
  bisect(
    (x) => !!(x & 1),
    trace("odd"),
    trace("even")
  )
);
// odd 1
// even 2
// odd 3
// even 4
// odd done
// even done