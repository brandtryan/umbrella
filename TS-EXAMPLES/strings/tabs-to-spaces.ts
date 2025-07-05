// Tangled @ 2025-07-05T17:31:00-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/strings/src/tabs.ts

import { tabsToSpaces } from "@thi.ng/strings";

console.log(
  tabsToSpaces("0\t1\t2", 10)
  + "\n" +
  tabsToSpaces("0\t45\t890\t\t6\t0")
  + "\n" +
  tabsToSpaces("^\t^\t^\t^\t^\t^")
);
// 0         1         2
// 0   45  890     6   0
// ^   ^   ^   ^   ^   ^