// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/view.ts

import { defAtom } from "@thi.ng/atom";
import { fromViewUnsafe, trace } from "@thi.ng/rstream";

const db = defAtom<any>({ a: 1, b: { c: 2 }});

// create stream of `c` value changes
fromViewUnsafe(
  db,
  {
    path: "b.c",
    tx: (x) => x != null ? String(x) : "n/a"
  }
).subscribe(trace("view:"))
// view: 2

// update `c` in state
db.swapInUnsafe("b.c", (x: number) => x + 1);
// view: 3

db.reset({ a: 10 });
// view: n/a