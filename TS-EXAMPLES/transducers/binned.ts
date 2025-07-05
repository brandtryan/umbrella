// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/binned.ts

import { binned, frequencies, pluck, repeatedly, transduce } from "@thi.ng/transducers";
import { normal } from "@thi.ng/random";
import { barChartVStr } from "@thi.ng/text-canvas";

// compute histogram of 1 million gaussian random samples (aka normal distribution)
// use binned values and discard those outside configured interval
const hist = transduce(
  binned({ prec: 0.1, min: -3, max: 3 }),
  frequencies(),
  repeatedly(normal(), 1e6)
);
// Map(61) { -3 => 223, ... 0 => 40212, ... 3 => 245 }

// sort by key (position)
const sorted = [...hist].sort((a,b) => a[0] - b[0]);

// draw as ANSI art diagram
console.log(barChartVStr(10, pluck(1, sorted)));

//                          ▁▄▇▇█▆▆▄
//                        ▂▇█████████▆▂
//                      ▁▆█████████████▆▁
//                     ▅█████████████████▅
//                   ▄█████████████████████▃
//                 ▂▇███████████████████████▇▂
//               ▁▆███████████████████████████▆▁
//             ▂▆███████████████████████████████▇▃
//         ▁▂▅█████████████████████████████████████▅▃
// ▁▁▂▃▄▅▆▇███████████████████████████████████████████▇▆▅▃▃▂▁▁