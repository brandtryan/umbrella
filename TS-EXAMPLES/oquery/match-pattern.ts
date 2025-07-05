// Tangled @ 2025-07-05T17:30:29-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/oquery/src/match.ts

import { query, matchPattern } from "@thi.ng/oquery";

const DB = [
  { id: "aaa", score: 32 },
  { id: "bbbb", score: 60 },
  { id: "c", score: 15 },
];

console.log(
  query(DB, [matchPattern("id", /[a-z]{4,}/)])
);
// [{ id: "bbbb", score: 60 }]

console.log(
  query(DB, [matchPattern("id", ">= c")])
);
// [{ id: "c", score: 15 }]

console.log(
  query(DB, [matchPattern("score", "<50")])
);
// [{ id: "a", score: 32 }, { id: "c", score: 15 }]