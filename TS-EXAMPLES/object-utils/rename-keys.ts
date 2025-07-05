// Tangled @ 2025-07-05T17:30:28-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/object-utils/src/rename-keys.ts

import { renameKeysObj } from "@thi.ng/object-utils";

// swap a & b, rename c
console.log(
  renameKeysObj({a: 1, b: 2, c: 3}, {a: "b", b: "a", c: "cc"})
);
// {b: 1, a: 2, cc: 3}