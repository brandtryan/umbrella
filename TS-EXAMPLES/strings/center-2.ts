// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/center.ts

import { comp } from "@thi.ng/compose";
import { center, wrap } from "@thi.ng/strings";

// compose formatting function
const fmt = comp(center(20,"<>"), wrap(" "));

console.log(fmt("thi.ng"));
// "<><><> thi.ng <><><>"