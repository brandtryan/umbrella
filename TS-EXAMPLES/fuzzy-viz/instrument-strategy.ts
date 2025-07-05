// Tangled @ 2025-07-05T17:29:51-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/fuzzy-viz/src/strategy.ts

import { centroidStrategy, gaussian } from "@thi.ng/fuzzy";
import { instrumentStrategy, fuzzySetToAscii } from "@thi.ng/fuzzy-viz";

const strategy = instrumentStrategy(
  centroidStrategy({ samples: 1000 }),
  fuzzySetToAscii({ width: 40, height: 8 })
);

strategy(gaussian(5, 2), [0, 10]);
// 4.995

console.log(strategy.deref()[0])
// .................▄▆█|█▆▄.................
// ...............▅████|████▅...............
// .............▄██████|██████▄.............
// ...........▂▇███████|███████▇▂...........
// ..........▅█████████|█████████▅..........
// .......▁▅███████████|███████████▅▁.......
// .....▃▆█████████████|█████████████▆▃.....
// ▃▄▅▇████████████████|████████████████▇▅▄▃
//                     ^ 5.00

// cleanup (optional)
strategy.clear();