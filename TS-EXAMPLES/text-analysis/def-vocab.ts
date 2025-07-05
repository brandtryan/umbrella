// Tangled @ 2025-07-05T17:31:03-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-analysis/src/vocab.ts

import { defVocab, tokenize } from "@thi.ng/text-analysis";

const vocab = defVocab(
  tokenize("the quick brown fox jumps over the lazy dog")
);

console.log([...vocab.entries()]);
// [
//   [ "the", 0 ],
//   [ "quick", 1 ],
//   [ "brown", 2 ],
//   [ "fox", 3 ],
//   [ "jumps", 4 ],
//   [ "over", 5 ],
//   [ "lazy", 6 ],
//   [ "dog", 7 ]
// ]

console.log(vocab.get("fox"))
// 3

console.log(vocab.getID(3))
// "fox"