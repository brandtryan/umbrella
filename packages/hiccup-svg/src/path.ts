import { deref } from "@thi.ng/api/deref";
import type { AttribVal, PathSegment } from "./api.js";
import { fattribs, ff, fpoint, fpoints } from "./format.js";

const DEG = 180 / Math.PI;

export const path = (
	segments: AttribVal<Iterable<PathSegment>>,
	attribs?: any,
	...body: any[]
): any[] => {
	let res = [];
	for (let seg of deref(segments) ?? []) {
		res.push(seg[0]);
		switch (seg[0].toLowerCase()) {
			case "a":
				res.push(
					[
						// rx
						ff(<number>seg[1]),
						// ry
						ff(<number>seg[2]),
						// x-axis (theta)
						ff(<number>seg[3] * DEG),
						// xl
						seg[4] ? 1 : 0,
						// clockwise
						seg[5] ? 1 : 0,
						// target xy
						ff(<number>seg[6]![0]),
						ff(<number>seg[6]![1]),
					].join(",")
				);
				break;
			case "h":
			case "v":
				res.push(ff(<number>seg[1]));
				break;
			case "m":
			case "l":
				res.push(fpoint(<any>seg[1]));
				break;
			case "z":
				break;
			default:
				res.push(fpoints((<any>seg).slice(1), ","));
		}
	}
	return ["path", fattribs({ d: res.join(""), ...attribs }), ...body];
};
