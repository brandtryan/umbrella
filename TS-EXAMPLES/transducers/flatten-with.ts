// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/flatten-with.ts

import { isPlainObject, isNotStringAndIterable } from "@thi.ng/checks";
import { flattenWith, pairs } from "@thi.ng/transducers";

// custom predicate which converts objects into key/val tuples,
// returns iterables as is and null for everything else
const pred = (x) =>
  isPlainObject(x)
    ? pairs(x)
    : isNotStringAndIterable(x)
      ? x
      : null;

console.log(
  [...flattenWith(pred, [{ a: 1, b: 2 }, [[{ c: 3 }]]])]
);
// [ 'a', 1, 'b', 2, 'c', 3 ]