// Tangled @ 2025-07-05T17:29:50-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/fibers/src/ops.ts

import { shuffle } from "@thi.ng/fibers";
import { repeatedly } from "@thi.ng/transducers";

// create & run fiber with 16 children, executing in random order
shuffle(
  repeatedly(
    (id) => function*() { while(true) { console.log(`worker #${id}`); yield; } },
    16
  )
).run()

// worker #0
// worker #1
// worker #3
// worker #3
// worker #2
// worker #0
// worker #2
// ...