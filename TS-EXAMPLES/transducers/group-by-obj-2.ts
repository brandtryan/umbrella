// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/group-by-obj.ts

import { conj, groupByObj, repeatedly } from "@thi.ng/transducers";

console.log(
  groupByObj(
    {
      // bin items by multiples of 10
      key: (x) => Math.floor(x / 10) * 10,
      // keep only uniques (using conj reducer)
      group: conj(),
    },
    repeatedly(() => Math.floor(Math.random() * 100), 20)
  )
);
// {
//   "0":  Set(1) { 8 },
//   "10": Set(1) { 13 },
//   "20": Set(2) { 24, 22 },
//   "30": Set(2) { 38, 36 },
//   "50": Set(5) { 54, 53, 52, 56, 59 },
//   "60": Set(2) { 63, 60 },
//   "70": Set(4) { 79, 71, 74, 78 },
//   "80": Set(2) { 85, 81 },
// }