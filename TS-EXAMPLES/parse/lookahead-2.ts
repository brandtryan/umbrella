// Tangled @ 2025-07-05T17:30:29-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/parse/src/combinators/lookahead.ts

import { defContext, join, lookahead, oneOf, string } from "@thi.ng/parse";

const ctx = defContext("ababaaabbabba");

// capturing lookahead
console.log(
  join(lookahead(oneOf("ab"), string("abba"), true))(ctx)
);
// true

console.log(ctx.result);
// "ababaaabba"

console.log(ctx.state);
// { p: 10, l: 1, c: 11, done: false, last: 'a' }