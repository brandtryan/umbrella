// Tangled @ 2025-07-05T17:30:29-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/parse/src/xform/print.ts

import { ALPHA, defContext, lit, oneOrMore, print, seq } from "@thi.ng/parse";

print(seq([lit("["), oneOrMore(ALPHA), lit("]")]))(defContext("[abc]"));
// seq: null
//   lit: "["
//   repeat1: null
//     oneOf: "a"
//     oneOf: "b"
//     oneOf: "c"
//   lit: "]"