// Tangled @ 2025-07-05T17:30:21-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/logger/src/root.ts

import { ROOT, ConsoleLogger } from "@thi.ng/logger";

const myLogger = ROOT.childLogger("custom");

// use console output for root logger
ROOT.set(new ConsoleLogger("root"));

// log message will be forwarded to root
myLogger.debug("hello");

// [DEBUG] custom: hello