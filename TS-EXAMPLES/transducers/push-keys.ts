// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/push-keys.ts

import { pushKeys } from "@thi.ng/transducers";

const data = [{id: "a", val: 1}, {id: "b", val: 2}, {id: "c", val: 3}];

console.log(pushKeys("id", data));
// ["a", "b", "c"]

console.log(pushKeys("val", data));
// [1, 2, 3]