// Tangled @ 2025-07-05T17:30:29-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/parse/src/prims/skip.ts

import { defContext, litD, NL, noneOfP, seqD, skipWhile } from "@thi.ng/parse";

const comment = seqD([litD("#"), skipWhile(noneOfP("\n")), NL]);

const ctx = defContext("# ignore more!\n");

console.log(comment(ctx));
// true

console.log(ctx.state);
// { p: 15, l: 2, c: 1, done: true, last: '\n' }