// Tangled @ 2025-07-05T17:31:08-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers-patch/src/patch-array.ts

import { patchArray } from "@thi.ng/transducers-patch";

// direct invocation
const res = patchArray(
    true,
    [1, 2, 3],
    [
        ["set", 0, 42],
        ["update", 1, (x, n) => x * n, 10],
        ["insert", 2, [10, 11]],
        ["delete", 3]
    ]
);

console.log(res);
// [ 42, 20, 10, 3 ]