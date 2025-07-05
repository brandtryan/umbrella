// Tangled @ 2025-07-05T17:29:37-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/date/src/i18n.ts

import { units, withLocale, FR_LONG, DE_LONG } from "@thi.ng/date";

console.log(
  withLocale(FR_LONG, () => units(1, "y"))
);
// "1 année"

console.log(
  withLocale(FR_LONG, () => units(1, "y", true))
);
// "1 an"

console.log(
  withLocale(FR_LONG, () => units(2, "y"))
);
// "2 ans"

console.log(
  withLocale(FR_LONG, () => units(2, "y", true))
);
// "2 ans"

console.log(
  withLocale(DE_LONG, () => units(2, "y"))
);
// "2 Jahre"

console.log(
  withLocale(DE_LONG, () => units(2, "y", true))
);
// "2 Jahren"