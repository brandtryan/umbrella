// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/map-keys.ts

import { mapKeys } from "@thi.ng/transducers";

const res = [...mapKeys(
  {
    a: (x) => x != null ? x * 10 : x,
    b: (x) => x != null ? x * 100: "n/a"
  },
  [{a: 1, b: 2}, {c: 3, d: 4}]
)];

console.log(res);
// [ { a: 10, b: 200 }, { c: 3, d: 4, b: 'n/a', a: undefined } ]