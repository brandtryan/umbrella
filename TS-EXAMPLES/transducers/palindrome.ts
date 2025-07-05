// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/palindrome.ts

import { palindrome, range } from "@thi.ng/transducers";

console.log(
  palindrome("hello")
);
// "helloolleh"

console.log(
  palindrome([1, 2, 3])
);
// [1, 2, 3, 3, 2, 1]

console.log(
  [...palindrome(range(3))]
);
// [ 0, 1, 2, 2, 1, 0 ]