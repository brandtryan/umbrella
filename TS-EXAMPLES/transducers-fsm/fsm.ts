// Tangled @ 2025-07-05T17:31:07-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers-fsm/src/index.ts

import { fsm } from "@thi.ng/transducers-fsm";
import { comp, iterator, map, range, takeNth } from "@thi.ng/transducers";

const testFSM = {
    states: {
        skip: (state, x) => {
            if (x < 20) {
                if (++state.count > 5) {
                    state.state = "take";
                    state.count = 1;
                    return [x];
                }
            } else {
                state.state = "done";
            }
        },
        take: (state, x) => {
            if (x < 20) {
                if (++state.count > 5) {
                    state.state = "skip";
                    state.count = 1;
                } else {
                    return [x];
                }
            } else {
                state.state = "done";
            }
        },
        done: () => { },
    },
    terminate: "done",
    init: () => ({ state: "skip", count: 0 })
};

console.log(
  [...iterator(fsm(testFSM), range(100))]
);
// [ 5, 6, 7, 8, 9, 15, 16, 17, 18, 19 ]

// as part of composed transducers...
console.log(
  [...iterator(comp(takeNth(2), fsm(testFSM)), range(100))]
);
// [ 10, 12, 14, 16, 18 ]

console.log(
  [...iterator(comp(fsm(testFSM), map((x) => x * 10)), range(100))]
);
// [ 50, 60, 70, 80, 90, 150, 160, 170, 180, 190 ]