// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/benchmark.ts

import { fromInterval, trace } from "@thi.ng/rstream";
import { benchmark, comp, movingAverage } from "@thi.ng/transducers";

fromInterval(16).subscribe(
  trace(),
  { xform: comp(benchmark(), movingAverage(60)) }
);
// 16.766666666666666
// 17.05
// 17.033333333333335
// 17.033333333333335
// ...