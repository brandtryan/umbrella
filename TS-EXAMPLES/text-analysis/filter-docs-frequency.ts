// Tangled @ 2025-07-05T17:31:03-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-analysis/src/frequencies.ts

import { filterDocsFrequency, frequencies } from "@thi.ng/text-analysis";

const docs = [
  ["a", "b", "c"],
  ["a", "b", "d", "e"],
  ["b", "f", "g"],
  ["a", "b", "c", "f"],
  ["a", "g", "h"]
];

// only keep words which occur more than once
const filtered = filterDocsFrequency(docs, frequencies, (_, x) => x > 1);

// show before & after
for(let i = 0; i < docs.length; i++) console.log(docs[i], "=>", filtered[i]);
// [ "a", "b", "c" ] => [ "a", "b", "c" ]
// [ "a", "b", "d", "e" ] => [ "a", "b" ]
// [ "b", "f", "g" ] => [ "b", "f", "g" ]
// [ "a", "b", "c", "f" ] => [ "a", "b", "c", "f" ]
// [ "a", "g", "h" ] => [ "a", "g" ]