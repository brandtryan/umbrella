// Tangled @ 2025-07-05T17:29:51-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/fuzzy/src/var.ts

import { evaluate, variable, invSigmoid, sigmoid, trapezoid } from "@thi.ng/fuzzy";

// temperature sets (in celsius)
const temp = variable([-20, 40], {
  freezing: invSigmoid(0, 2),
  cold: trapezoid(0, 4, 16, 20),
  warm: trapezoid(15, 20, 25, 30),
  hot: sigmoid(30, 2)
});

console.log(evaluate(temp, 28));
// { freezing: 0, cold: 0, warm: 0.4, hot: 0.01798620996209156 }