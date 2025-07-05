// Tangled @ 2025-07-05T17:31:03-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/text-analysis/src/tf-idf.ts

import { filterDocsIDF } from "@thi.ng/text-analysis";

const docs = [
  ["a", "b", "c"],
  ["a", "b", "d", "e"],
  ["b", "f", "g"],
  ["a", "b", "c", "f"],
  ["a", "g", "h"]
];

// remove common words, i.e. those with an IDF below given threshold
const filtered = filterDocsIDF(docs, (_, x) => x > 0.3);

// show before & after
for(let i = 0; i < docs.length; i++) console.log(docs[i], "=>", filtered[i]);

// [ "a", "b", "c" ] => [ "c" ]
// [ "a", "b", "d", "e" ] => [ "d", "e" ]
// [ "b", "f", "g" ] => [ "f", "g" ]
// [ "a", "b", "c", "f" ] => [ "c", "f" ]
// [ "a", "g", "h" ] => [ "g", "h" ]