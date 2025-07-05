// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/dist-jaccard.ts

import { jaccardSimilarity } from "@thi.ng/vectors";

console.log(jaccardSimilarity([0, 0, 0, 0], [1, 1, 1, 1]));
// 0

console.log(jaccardSimilarity([0, 1, 0, 0], [1, 1, 1, 1]));
// 0.25

console.log(jaccardSimilarity([0, 1, 1, 0], [0, 1, 1, 0]));
// 1