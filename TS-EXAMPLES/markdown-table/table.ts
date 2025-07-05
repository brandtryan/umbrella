// Tangled @ 2025-07-05T17:30:23-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/markdown-table/src/table.ts

import { table } from "@thi.ng/markdown-table";

const res = table(
  ["ID", "Actor", "Comment"],
  [
    [1, "Alice"],
    [201, "Bob", "(foe)"],
    [3003, "Charlie", null],
    [44, "Dora", "(recipient)"],
  ],
  { bold: true, align: ["r", "c", "l"] }
);

console.log(res);
// | **ID** | **Actor** | **Comment** |
// |-------:|:---------:|:------------|
// |      1 |   Alice   |             |
// |    201 |    Bob    | (foe)       |
// |   3003 |  Charlie  |             |
// |     44 |   Dora    | (recipient) |