// Tangled @ 2025-07-05T17:30:28-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/object-utils/src/rename-keys.ts

import { renameTransformedKeys } from "@thi.ng/object-utils";

console.log(
  renameTransformedKeys(
    // source object
    { a: 1, b: 2, c: null },
    // mappings
    {
      // rename a => aa
      a: "aa",
      // rename & transform
      b: ["bb", (x, src) => x * 10 + src.a]
      // ignored, since original c is null
      c: "cc"
    }
  )
);
// { aa: 1, bb: 21 }