// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/select-keys.ts

import { selectKeys } from "@thi.ng/transducers";

const res = [...selectKeys(
  ["id", "age"],
  [
    {id: 1, age: 23, name: "alice"},
    {id: 2, age: 42, name: "bob"},
    {id: 3, name: "charlie"},
  ]
)];

console.log(res);
// [ { age: 23, id: 1 }, { age: 42, id: 2 }, { id: 3 } ]