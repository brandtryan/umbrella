// Tangled @ 2025-07-05T17:30:41-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/random/src/weighted-probability.ts

import { weightedProbability } from "@thi.ng/random";

const [param, success] = weightedProbability((x) => x** 2);

console.log(success ? "SUCCESS" : "FAIL", param);