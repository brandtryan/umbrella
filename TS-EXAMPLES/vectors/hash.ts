// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/hash.ts

import { hash } from "@thi.ng/vectors";
import {
  conj, map, normRange, permutations, range2d, transduce
} from "@thi.ng/transducers";

// integer grid coords
let uniq = transduce(map(hash), conj(), range2d(0x1000, 0x1000)).size

console.log(uniq);
// 16744420

// collision rate
console.log((1 - uniq / (0x1000 ** 2)) * 100);
// 0.1955 %

// normalized grid coords
uniq = transduce(
  map(hash),
  conj(),
  permutations(normRange(1000), normRange(1000))
).size

console.log(uniq);
// 1001895

// collision rate
console.log((1 - uniq / (1001 ** 2)) * 100);
// 0.0106 %