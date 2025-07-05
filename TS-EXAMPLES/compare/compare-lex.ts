// Tangled @ 2025-07-05T17:29:32-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/compare/src/string.ts

import { compareLex } from "@thi.ng/compare";

const sr = ["2d", "16bit", "base36", "8bit", "1d", "base8"];

console.log("native", [...src].sort());
// [ "16bit", "1d", "2d", "8bit", "base36", "base8" ]

console.log("compareLex", [...src].sort(compareLex));
// [ "1d", "2d", "8bit", "16bit", "base8", "base36" ]