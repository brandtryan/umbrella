// Tangled @ 2025-07-05T17:29:31-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/color-palettes/src/filter.ts

import { compFilter, chroma, luma, cssThemes } from "@thi.ng/color-palettes";

// pre-compose combined query filter
const pastels = compFilter(
  // require all theme colors to have max 25% chroma
  chroma(0, 0.25),
  // require at least 3 theme colors to have min 50% luma
  luma(0.5, 1, 3)
);

console.log([...cssThemes(pastels)])
// [
//   [ '#453f38', '#746b5d', '#b39777', '#c1c2b2', '#e3dccf', '#f1ede7' ],
//   [ '#857b84', '#b1a7b0', '#d0c7d0', '#e7e0e8', '#faeceb', '#e4e9fa' ]
// ]