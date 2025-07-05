// Tangled @ 2025-07-05T17:30:28-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/object-utils/src/from-keys.ts

import { objectFromKeys } from "@thi.ng/object-utils";

console.log(
  objectFromKeys(["a", "b", "c"], 1)
);
// { a: 1, b: 1, c: 1 }

console.log(
  objectFromKeys(["a", "b", "c"], () => [])
);
// { a: [], b: [], c: [] }

console.log(
  objectFromKeys(["a", "b", "c"], (k) => `${k}-${(Math.random()*100)|0}`)
);
// { a: 'a-54', b: 'b-8', c: 'c-61' }