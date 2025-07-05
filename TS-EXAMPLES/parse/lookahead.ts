// Tangled @ 2025-07-05T17:30:29-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/parse/src/combinators/lookahead.ts

import { defContext, join, lookahead, oneOf, stringD } from "@thi.ng/parse";

const ctx = defContext("ababaaabbabba");

// consume while 'a' or `b` and until 1st occurrence of "abba"...
// note the use of `stringD()` to discard lookahead result

// non-capturing lookahead
console.log(
  join(lookahead(oneOf("ab"), stringD("abba")))(ctx)
);
// true

console.log(ctx.result);
// "ababaa"

console.log(ctx.state);
// { p: 6, l: 1, c: 7, done: false, last: 'a' }