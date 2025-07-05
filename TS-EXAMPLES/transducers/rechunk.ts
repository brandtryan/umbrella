// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/rechunk.ts

import { rechunk } from "@thi.ng/transducers";

console.log(
  [...rechunk(/-/, ["abc-d", "ef-g-", "hij", "-k-lm"])]
);
// [ "abc", "def", "g", "hij", "k", "lm" ]