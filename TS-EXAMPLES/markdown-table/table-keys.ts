// Tangled @ 2025-07-05T17:30:23-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/markdown-table/src/table.ts

import { tableKeys } from "@thi.ng/markdown-table";

const res = tableKeys(
  ["ID", "Actor", "Comment"],
  ["id", "name", (x) => x.hint],
  [
      { id: 1, name: "Alice" },
      { id: 201, name: "Bob", hint: "(foe)" },
      { id: 3003, name: "Charlie" },
      { id: 44, name: "Dora", hint: "(recipient)" },
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