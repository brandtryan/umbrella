// Tangled @ 2025-07-05T17:30:11-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/hiccup-css/src/animation.ts

import { animation, css } from "@thi.ng/hiccup-css";

console.log(
  css(
    animation(
      "fadein",
      { delay: "0.5s" },
      { opacity: 0 },
      { opacity: 1 }
    )
  )
);