// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/threshold.ts

import { selectThresholdMin } from "@thi.ng/arrays";

const numColumns = selectThresholdMin({ 480: 1, 640: 2, 960: 3 }, 4);

console.log(numColumns(320));
// 1

console.log(numColumns(481));
// 2

console.log(numColumns(768));
// 3

console.log(numColumns(1024));
// 4