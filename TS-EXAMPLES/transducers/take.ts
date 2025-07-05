// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/take.ts

import { comp, iterator, map, range, take } from "@thi.ng/transducers";

// pre-compose transducer which only takes first N items and then
// transforms only those via map()...
// apply to infinite range() counter
console.log(
  [...iterator(comp(take(5), map((x) => x * 10)), range())]
);
// [ 0, 10, 20, 30, 40 ]