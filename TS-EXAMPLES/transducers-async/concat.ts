// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers-async/src/concat.ts

import { concat, push, repeatedly } from "@thi.ng/transducers-async";

console.log(
  await push(
    concat(
      repeatedly(async (i) => i + 1, 3),
      // next 2 inputs will be ignored..
      undefined,
      null,
      [4, 5]
    )
  )
);
// [ 1, 2, 3, 4, 5 ]

console.log(
  await push(concat([1, 2, 3, undefined], null, [4, 5]))
);
// [ 1, 2, 3, undefined, 4, 5 ]