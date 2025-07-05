// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/filter-fuzzy.ts

import { filterFuzzy } from "@thi.ng/transducers";

console.log(
  [...filterFuzzy("ho", ["hello", "hallo", "hey", "heyoka"])]
);
// ["hello", "hallo", "heyoka"]