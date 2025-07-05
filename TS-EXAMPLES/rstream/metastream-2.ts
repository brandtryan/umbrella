// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/metastream.ts

import { fromIterable, metaStream, trace } from "@thi.ng/rstream";
import { cycle, repeat } from "@thi.ng/transducers";

// infinite inputs (important: closeOut mode = "never"!)
const a = fromIterable(
  repeat("a"),
  { delay: 100, closeOut: "never" }
);
const b = fromIterable(
  repeat("b"),
  { delay: 100, closeOut: "never" }
);

// stream selector / switch
const m = metaStream<boolean, string>((x) => (x ? a : b));
m.subscribe(trace("meta from: "));

// create infinite stream of true/false and pipe into
// the metastream and switch which source to use
fromIterable(cycle([true, false]), { delay: 500 })
  .subscribe({ next(x) { m.next(x); } });

// a
// a
// a
// a
// a
// b
// b
// b
// b
// b
// a
// a
// ...