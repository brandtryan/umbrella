// Tangled @ 2025-07-05T17:30:26-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/memoize/src/delay.ts

import { delay } from "@thi.ng/memoize";

const a = delay(() => {
  console.log("calculating answer...");
  return 42;
});

// the function will only be called now (and once)
console.log("first:", a.deref());
// calculating answer...
// first: 42

// now only returns cached result
console.log("second:", a.deref());
// second: 42