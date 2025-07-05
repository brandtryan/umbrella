// Tangled @ 2025-07-05T17:31:03-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-analysis/src/vec.ts

import { defVocab, decodeDense, tokenize } from "@thi.ng/text-analysis";

const vocab = defVocab(
  tokenize("the quick brown fox jumps over the lazy dog")
);

console.log(decodeDense(vocab, [1, 0, 1, 0, 1, 0, 0, 1]));
// [ "the", "brown", "jumps", "dog" ]

console.log(decodeDense(vocab, [1, 0, 0, 1, 0, 0, 1, 0]));
// [ "the", "fox", "lazy" ]