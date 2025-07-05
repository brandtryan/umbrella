// Tangled @ 2025-07-05T17:31:12-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/units/src/unit.ts

import { convert, div, mul, quantity, NONE } from "@thi.ng/units";

const speedOfLight = quantity(299792458, "m/s");

// compute wavelength of a WiFi signal in millimeters
console.log(
  convert(div(speedOfLight, quantity(2.4,"GHz")), "mm")
);
// 124.9135

// DIN A4 paper size
const A4 = quantity([210, 297], "mm");

// convert paper size to inches
console.log(
  convert(A4, "in")
);
// [ 8.2677, 11.6929 ]

// or calculate pixel dimensions @ 300 dpi
// the result of the product is dimensionless so we use NONE as target unit
console.log(
  convert(mul(A4, quantity(300, "dpi")), NONE)
);
// [ 2480.314960629921, 3507.8740157480315 ]

// alternatively dimensionless units can be deref'd directly
console.log(
  mul(A4, quantity(300, "dpi")).deref()
);
// [ 2480.314960629921, 3507.8740157480315 ]