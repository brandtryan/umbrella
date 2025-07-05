// Tangled @ 2025-07-05T17:31:13-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vclock/src/index.ts

import { compare } from "@thi.ng/vclock";

console.log(
  compare({ a: 1, b: 2 }, { a: 3, b: 2 }) // -1
);
console.log(
  compare({ a: 3, b: 2 }, { a: 3, b: 2 }) // 0 (equal)
);
console.log(
  compare({ a: 3, b: 2 }, { a: 2, b: 3 }) // 0 (conflict)
);
console.log(
  compare({ a: 3, b: 3 }, { a: 3, b: 2 }) // +1
);