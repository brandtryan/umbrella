// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/atom.ts

import { defAtom, defCursor } from "@thi.ng/atom";
import { fromAtom, trace } from "@thi.ng/rstream";

type DB = { a: number; b?: number };

const db = defAtom<DB>({ a: 23, b: 88 });
const cursor = defCursor(db, ["a"])

fromAtom(cursor).subscribe(trace("cursor val:"))
// cursor val: 23

cursor.reset(42);
// cursor val: 42

db.reset({a: 66})
// cursor val: 66