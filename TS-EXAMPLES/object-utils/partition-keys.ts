// Tangled @ 2025-07-05T17:30:28-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/object-utils/src/partition-keys.ts

import { partitionKeysObj } from "@thi.ng/object-utils";

console.log(
  partitionKeysObj({ a: 1, b: 2, c: 3, d: 4 }, ["a", "c", "e"])
);
// [
//  { a: 1, c: 3 },
//  { b: 2, d: 4 }
// ]