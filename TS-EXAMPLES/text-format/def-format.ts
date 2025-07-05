// Tangled @ 2025-07-05T17:31:04-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-format/src/format.ts

import { defFormat, FMT_ANSI16, FG_RED } from "@thi.ng/text-format";

const red = defFormat(FMT_ANSI16, FG_RED);

console.log(red("hello"));
// hello (shown in red in ANSI-supporting terminals)

console.log(escape(red("hello")));
// "%1B%5B31mhello%1B%5B0m"