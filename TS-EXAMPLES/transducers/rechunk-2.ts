// Tangled @ 2025-07-05T17:31:06-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/transducers/src/rechunk.ts

import { fromNodeJS, trace } from "@thi.ng/rstream";
import { rechunk } from "@thi.ng/transducers";
import { spawn } from "node:child_process"

const cmd = spawn("ls", ["-la"]);

// (btw. also see linesFromNodeJS() for automatic rechunking)
fromNodeJS<string>(cmd.stdout, cmd.stderr)
  .transform(rechunk())
  .subscribe(trace("output"));

// output total 12760
// output drwxr-xr-x   37 foo  staff     1184 Nov 15 15:29 .
// output drwxr-xr-x  143 foo  staff     4576 Nov 11 21:08 ..
// output drwxr-xr-x   17 foo  staff      544 Nov 15 17:39 .git
// output -rw-r--r--    1 foo  staff      149 Aug  4 15:32 .gitattributes
// output drwxr-xr-x    5 foo  staff      160 Apr 12  2021 .github
// output -rw-r--r--    1 foo  staff      659 Sep 10 22:55 .gitignore
// ...
// output done