// Tangled @ 2025-07-05T17:31:03-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-analysis/src/cluster.ts

import { centralTerms, encodeAllDense } from "@thi.ng/text-analysis";

const inputs = [
  ["a", "b", "c"],
  ["a", "b", "d", "e"],
  ["b", "f", "g"],
  ["a", "b", "c", "f"],
  ["a", "g", "h"]
];

// create vocab & encode documents into multi-hot vectors
const { vocab, docs } = encodeAllDense(inputs);

// extract top-4 common terms
console.log(centralTerms(vocab, 4, docs));
// [ "b", "a", "g", "f" ]