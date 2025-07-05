// Tangled @ 2025-07-05T17:30:30-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/paths/src/mut-in.ts

import { mutInUnsafe } from "@thi.ng/paths";

console.log(
  mutInUnsafe({ a: { b: [10, 20] } }, "a.b.1", 23)
);
// { a: { b: [ 10, 23 ] } }

// fails (see `defMutator()` docs)
console.log(
  mutInUnsafe({}, "a.b.c", 23)
);
// undefined