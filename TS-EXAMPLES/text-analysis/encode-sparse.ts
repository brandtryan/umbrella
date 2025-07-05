// Tangled @ 2025-07-05T17:31:03-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-analysis/src/vec.ts

import { defVocab, encodeSparse, tokenize } from "@thi.ng/text-analysis";

const vocab = defVocab(
  tokenize("the quick brown fox jumps over the lazy dog")
);

console.log(encodeSparse(vocab, tokenize("the brown dog jumps")));
// [ 0, 2, 4, 7 ]

console.log(encodeSparse(vocab, tokenize("the lazy fox")));
// [ 0, 3, 6 ]