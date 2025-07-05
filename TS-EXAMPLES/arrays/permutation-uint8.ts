// Tangled @ 2025-07-05T17:29:19-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/arrays/src/permutation.ts

import { permutation } from "@thi.ng/arrays";

const buf = new Uint8Array(16);

// permute entire buffer
console.log(permutation(buf));
// Uint8Array(16) [ 6, 3, 2, 8, 10, 1, 15, 11, 9, 5, 0, 13, 7, 4, 14, 12 ]

// apply to only a sub-ranges of the buffer
for (let i = 0; i < buf.length; i += 4) {
	console.log(permutation(buf.subarray(i, i + 4)));
}
// Uint8Array(4) [ 1, 3, 2, 0 ]
// Uint8Array(4) [ 2, 0, 3, 1 ]
// Uint8Array(4) [ 1, 3, 2, 0 ]
// Uint8Array(4) [ 3, 2, 1, 0 ]

// show full buffer
console.log(buf);
// Uint8Array(16) [ 1, 3, 2, 0, 2, 0, 3, 1, 1, 3, 2, 0, 3, 2, 1, 0 ]