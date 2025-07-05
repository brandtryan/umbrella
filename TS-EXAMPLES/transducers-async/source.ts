// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers-async/src/source.ts

import { source, map, run } from "@thi.ng/transducers-async";

// create empty source
const src = source();

// create an async consumer
// (consumer stops when we close the source)
run(
  map(async (x) => x * 10),
  (x) => console.log("result:", x),
  src
)

// set new value
src.write(23);
// result: 230

// update last value
// (delayed invocation here to avoid buffer overflow)
setTimeout(() => src.update((x) => x + 1), 0);
// result: 240

// close/terminate source
setTimeout(() => src.close(), 0);