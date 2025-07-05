// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/transduce.ts

import { fromIterable, transduce } from "@thi.ng/rstream";
import { add, map, range } from "@thi.ng/transducers";

transduce(
  fromIterable(range(10)),
  map((x) => x * 10),
  add()
).then((x) => console.log("result", x))

// result 450