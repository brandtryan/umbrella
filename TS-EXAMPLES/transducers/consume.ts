// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/consume.ts

import { consume, repeatedly2d } from "@thi.ng/transducers";

// iterators are lazy, no logging will actually be performed yet
const iter = repeatedly2d((x, y) => console.log("output:", [x, y]), 2, 3);

// force evaluation, discard any results
consume(iter);
// output: [ 0, 0 ]
// output: [ 1, 0 ]
// output: [ 0, 1 ]
// output: [ 1, 1 ]
// output: [ 0, 2 ]
// output: [ 1, 2 ]