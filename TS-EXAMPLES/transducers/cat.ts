// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/cat.ts

import {
  cat, comp, iterator, map, mapcat, mapIndexed, reduced
} from "@thi.ng/transducers";

console.log(
  [...iterator(comp(map((x) => [x, x]), cat()), [1, 2, 3, 4])]
);
// [ 1, 1, 2, 2, 3, 3, 4, 4 ]

console.log(
  [...iterator(
    comp(
      mapIndexed((i, x) => [[i], [x, x]]),
      cat<(number | string)[]>(),
      cat()
    ),
    "abc"
  )]
);
// [ 0, 'a', 'a', 1, 'b', 'b', 2, 'c', 'c' ]

console.log(
  [...mapcat((x)=>(x > 1 ? reduced([x, x]) : [x, x]), [1, 2, 3, 4])]
);
// [ 1, 1, 2, 2 ]