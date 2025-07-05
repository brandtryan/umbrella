// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/initials.ts

import { initials } from "@thi.ng/strings";

console.log(
  initials(["alicia", "bella", "carerra"])
);
// "ABC"

console.log(
  initials("shader-ast-GLSL".split("-"))
);
// "SAG"

console.log(
  initials("Ludwig van Beethoven".split(" "), null)
);
// "LvB"