// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/dup.ts

import { dup, range } from "@thi.ng/transducers";

console.log(dup("hello"));
// "hellohello"

console.log(dup([1, 2, 3]));
// [ 1, 2, 3, 1, 2, 3 ]

console.log([...dup(range(3))]);
// [ 0, 1, 2, 0, 1, 2 ]