// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/view.ts

import { defAtom } from "@thi.ng/atom";
import { fromView, trace } from "@thi.ng/rstream";

interface DB {
  a: number;
  b?: { c: number; }
}

const db = defAtom<DB>({ a: 1, b: { c: 2 }});

fromView(
  db,
  {
    path: ["b", "c"],
    tx: (x) => x != null ? String(x) : "n/a"
  }
).subscribe(trace("view:"))
// view: 2

db.swapIn(["b","c"], (x) => x! + 1);
// view: 3

db.reset({ a: 10 });
// view: n/a