// Tangled @ 2025-07-05T17:30:28-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/object-utils/src/common-keys.ts

import { commonKeysObj } from "@thi.ng/object-utils";

console.log(
  commonKeys({ a: 1, b: 2 }, { c: 10, b: 20, a: 30 })
);
// [ "a", "b" ]