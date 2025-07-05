// Tangled @ 2025-07-05T17:30:47-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/rstream/src/debounce.ts

import { debounce, fromIterable, trace } from "@thi.ng/rstream";

const src = fromIterable([1, 2, 3], { delay: 10 })
src.subscribe(debounce(20)).subscribe(trace());
// 3
// done