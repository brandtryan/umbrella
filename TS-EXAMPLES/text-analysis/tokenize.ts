// Tangled @ 2025-07-05T17:31:03-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-analysis/src/tokenize.ts

import * as ta from "@thi.ng/text-analysis";

const input = `Do not go gentle into that good night,
  Old age should burn and rave at close of day;
  Rage, rage against the dying of the light.

  Though wise men at their end know dark is right,
  Because their words had forked no lightning they
  Do not go gentle into that good night.`;

// tokenize input with given token transforms
// collect tokens into array
const tokens = [...ta.tokenize(
  input,
  [
    ta.lowercase,
    ta.removeNonAlphaNum,
    ta.removeStopWords()
  ]
)];

console.log(tokens);
// [
//   "do", "not", "go", "gentle", "good", "night", "old", "age",
//   "burn", "rave", "close", "day", "rage", "rage", "dying", "light",
//   ...
// ]

console.log(
  [...ta.tokenize(input, [ta.ngrams(2)])]
);