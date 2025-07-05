// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/flatten.ts

import { flatten } from "@thi.ng/transducers";

console.log(
  [...flatten([[1, [2, 3]], ["abc", "cde"]])]
);
// [1, 2, 3, "abc", "def"]

console.log(
  [...flatten("abc")]
);
// [ 'abc' ]