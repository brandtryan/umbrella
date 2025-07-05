// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/resolve.ts

import { fromIterable, resolve, trace } from "@thi.ng/rstream";
import { delayed } from "@thi.ng/transducers";

fromIterable([1, 2, 3], 500)
  .transform(delayed(1000))
  .subscribe(resolve())
  .subscribe(trace("result"));
// result 1
// result 2
// result 3
// result done