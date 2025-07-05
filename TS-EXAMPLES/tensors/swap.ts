// Tangled @ 2025-07-05T17:31:02-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/tensors/src/swap.ts

import { swap, range, print } from "@thi.ng/tensors";

const a = range(12).reshape([3,4]);
print(a);

// swap data from 1st & 3rd column
swap(a.pick([-1,0]), a.pick([-1,2]));

print(a);