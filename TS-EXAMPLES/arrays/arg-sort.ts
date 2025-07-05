// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/arg-sort.ts

import { argSort, swizzle } from "@thi.ng/arrays";

const src = ["a", "c", "d", "b"];

console.log(
  argSort(src)
);
// [ 0, 3, 1, 2 ]

// src[0] => "a"
// src[3] => "b"
// src[1] => "c"
// src[2] => "d"

console.log(
  swizzle(argSort(src))(src)
);
// [ 'a', 'b', 'c', 'd' ]