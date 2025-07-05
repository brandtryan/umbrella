// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers-async/src/mult.ts

import { map, mult, run, wait } from "@thi.ng/transducers-async";

const root = mult(
  (async function* () {
    yield "hello";
    await wait(1000);
    yield "world";
    await wait(1000);
    yield "good bye";
  })()
);

// 1st subscriber (vanilla JS)
(async () => {
  for await (let x of root.subscribe()) console.log("vanilla:", x);
})();

// 2nd subscriber (transducer), attached with delay
setTimeout(
  () =>
    run(
      map(async (x) => {
        console.log("tx", x);
        await wait(1500);
      }),
      root.subscribe()
    ),
  900
);

// vanilla: hello
// vanilla: world
// tx world
// vanilla: good bye
// tx good bye