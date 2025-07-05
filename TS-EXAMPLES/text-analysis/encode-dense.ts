// Tangled @ 2025-07-05T17:31:03-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-analysis/src/vec.ts

import { defVocab, encodeDense, tokenize } from "@thi.ng/text-analysis";

const vocab = defVocab(
  tokenize("the quick brown fox jumps over the lazy dog")
);

console.log(encodeDense(vocab, tokenize("the brown dog jumps")));
// [ 1, 0, 1, 0, 1, 0, 0, 1 ]

console.log(encodeDense(vocab, tokenize("the lazy fox")));
// [ 1, 0, 0, 1, 0, 0, 1, 0 ]