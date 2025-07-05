// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/toggle.ts

import { toggle } from "@thi.ng/transducers";

console.log(
  [...toggle(1, 0, false, [1, 2, 3, 4])]
);
// [ 1, 0, 1, 0 ]

console.log(
  [...toggle("on", "off", true, [1, 2, 3, 4])]
);
// [ 'off', 'on', 'off', 'on' ]