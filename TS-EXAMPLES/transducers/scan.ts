// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/scan.ts

import * as tx from "@thi.ng/transducers";

console.log(
  [...tx.iterator(tx.scan(tx.add()), tx.range(10))]
);
// [ 0, 1, 3, 6, 10, 15, 21, 28, 36, 45 ]

// directly as iterator and with initial result
console.log(
  [...tx.scan(tx.add(), 100, tx.range(10))]
);
// [ 100, 101, 103, 106, 110, 115, 121, 128, 136, 145 ]

// as transducer
const res = tx.transduce(
  // parallel processing lanes for each input
  tx.multiplex(
    // first lane: join strings
    tx.scan(tx.str(" ")),
    // second lane: compute total length (+1)
    tx.comp(tx.length(1), tx.scan(tx.add()))
  ),
  // use last() reducer to only keep final value
  tx.last(),
  // inputs
  ["alpha", "beta", "gamma", "delta"]
);

console.log(res);
// [ 'alpha beta gamma delta', 123 ]