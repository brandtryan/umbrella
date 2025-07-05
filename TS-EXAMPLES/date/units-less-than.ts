// Tangled @ 2025-07-05T17:29:37-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/date/src/i18n.ts

import { unitsLessThan, withLocale, DE_LONG } from "@thi.ng/date";

console.log(
  withLocale(DE_LONG, () => unitsLessThan(1, "y"))
);
// "weniger als 1 Jahr"