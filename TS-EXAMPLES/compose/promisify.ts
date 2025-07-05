// Tangled @ 2025-07-05T17:29:33-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/compose/src/promisify.ts

import { promisify } from "@thi.ng/compose";

(async () => {
   const body = await promisify(partial(fs.readFile, "foo.txt"));
   console.log(body.toString());
})();