// Tangled @ 2025-07-05T17:31:14-04:00 - DO NOT EDIT!
// Source: /home/brandt/Projects/Repos/umbrella/packages/vectors/src/api.ts

import { VEC2, VEC3, type Vec, type VecAPI } from "@thi.ng/vectors";

interface Particle {
  pos: Vec;
  dir: Vec;
  targetDir: Vec;
  speed: number;
  turnSpeed: number;
}

const updateParticle = (p: Particle, api: VecAPI) => {
  // interpolate current direction toward target dir
  api.mixN(null, p.dir, p.targetDir, p.turnSpeed);
  // normalize direction
  api.normalize(null, p.dir);
  // add scaled direction to position (and store as new position)
  return api.maddN(p.pos, p.dir, p.speed, p.pos);
};

// 2d version

let p2d: Particle = {
  pos: [10,20], dir: [0,1], targetDir: [1,0], speed: 5, turnSpeed: 0.1
};

console.log(
  updateParticle(p2d, VEC2)
);
// [ 10.552, 24.969 ]

// 3d version

let p3d: Particle = {
  pos: [10,20,30], dir: [0,1,0], targetDir: [0,0,1], speed: 5, turnSpeed: 0.1
};

console.log(
  updateParticle(p3d, VEC3)
);
// [ 10, 24.969, 30.552 ]