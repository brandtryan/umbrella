// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/peek.ts

import { peek } from "@thi.ng/transducers";

console.log(
  [...peek([ [1, 2, 3], [4, 5] ])]
);
// [ 3, 5 ]