// Tangled @ 2025-07-05T17:29:50-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/fibers/src/ops.ts

import { timeSliceIterable } from "@thi.ng/fibers";
import { range } from "@thi.ng/transducers";

// consume & batch process iterable in 16ms time slices
timeSliceIterable(
  range(1_000_000),
  (chunk) => console.log("items:", chunk.length),
  16
).run();