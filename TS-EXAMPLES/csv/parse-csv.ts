// Tangled @ 2025-07-05T17:29:35-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/csv/src/parse.ts

import { parseCSV, upper, float } from "@thi.ng/csv";

console.log(
  [...parseCSV(
    {
      all: false,
      cols: {
        "country": { tx: upper },
        "latitude": { alias: "lat", tx: float() },
        "longitude": { alias: "lon", tx: float() },
      }
    },
    [
       `"country","country group","name (en)","latitude","longitude"`,
       `"at","eu","Austria","47.6965545","13.34598005"`,
       `"be","eu","Belgium","50.501045","4.47667405"`,
       `"bg","eu","Bulgaria","42.72567375","25.4823218"`,
    ]
  )]
);
// [
//   { country: 'AT', lat: 47.6965545, lon: 13.34598005 },
//   { country: 'BE', lat: 50.501045, lon: 4.47667405 },
//   { country: 'BG', lat: 42.72567375, lon: 25.4823218 }
// ]