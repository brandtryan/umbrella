// Tangled @ 2025-07-05T17:30:41-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/random/src/weighted-probability.ts

import { weightedProbability } from "@thi.ng/random";
import { barChartVStr } from "@thi.ng/text-canvas";
import {
    comp, filter, frequencies, map, repeatedly, transduce
} from "@thi.ng/transducers";

// custom weighting function
const weight = (x: number) => Math.sin(x * Math.PI);

// draw N samples (`[number, boolean]` tuples)
const samples = repeatedly(
    () => weightedProbability(weight),
    // number of samples
    1e6
);

// binning helper for histogram
const bin = (x: number, n: number) => Math.floor(x * n) / n;

// compute histogram, i.e. a Map of `bin => numSuccess` pairs
const histogram = transduce(
    // filter out failures, apply binning
    comp(filter(x => x[1]), map(x => bin(x[0], 40))),
    // collect histogram
    frequencies(),
    // input samples
    samples
);

// visualize as ASCII art bar chart
console.log(
    barChartVStr(10, [...histogram].sort().map(x => x[1]))
);

//               ▃▅▇████▇▅▃
//            ▂▆████████████▅▁
//          ▂▇████████████████▆▂
//         ▅████████████████████▆
//       ▃████████████████████████▃
//      ▆██████████████████████████▆
//    ▁██████████████████████████████▁
//   ▃████████████████████████████████▃
//  ▅██████████████████████████████████▅
// ▇████████████████████████████████████▇