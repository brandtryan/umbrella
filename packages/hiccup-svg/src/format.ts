import { deref } from "@thi.ng/api/deref";
import { isArrayLike } from "@thi.ng/checks/is-arraylike";
import { isString } from "@thi.ng/checks/is-string";
import { css } from "@thi.ng/color/css/css";
import type { Vec2Like } from "./api.js";

export let PRECISION = 3;

/**
 * Sets the number of fractional digits used for formatting various floating
 * point values in the serialized SVG. The current value can be read via
 * {@link PRECISION}.
 *
 * @param n
 */
export const setPrecision = (n: number) => (PRECISION = n);

/** @internal */
export const ff = (x: number) =>
	x === (x | 0) ? String(x) : x.toFixed(PRECISION);

/** @internal */
export const fpoint = (p: Vec2Like) => ff(p[0]) + "," + ff(p[1]);

/** @internal */
export const fpoints = (pts: Vec2Like[], sep = " ") =>
	pts ? pts.map(fpoint).join(sep) : "";

const DEFAULT_NUMERIC_IDS = [
	"font-size",
	"opacity",
	"stroke-width",
	"stroke-miterlimit",
];

/**
 * Takes an attributes object and a number of attrib IDs whose values should be
 * formatted using {@link ff}. Mutates and returns `attribs` object.
 *
 * @param attribs -
 * @param ids -
 *
 * @internal
 */
const numericAttribs = (attribs: any, ids: string[]) => {
	let v: any;
	for (let id of DEFAULT_NUMERIC_IDS.concat(ids)) {
		typeof (v = deref(attribs[id])) === "number" && (attribs[id] = ff(v));
	}
	return attribs;
};

/**
 * Takes an attributes object and converts any `fill`, `stroke` or
 * transformation attributes, i.e. `transform`, `rotate`, `scale`, `translate`.
 *
 * @remarks
 * If the element has a `transform` attrib, conversion of the other attribs will
 * be skipped, else the values are assumed to be either strings or:
 *
 * - `transform`: 6-element numeric array (mat23)
 * - `translate`: 2-element array
 * - `rotate`: number (angle in radians)
 * - `scale`: number (uniform scale) or 2-elem array
 *
 * If no `transform` is given, the resulting transformation order will always be
 * TRS. Any string values given will be used as-is and therefore need to be
 * complete, e.g. `{ rotate: "rotate(60)" }`
 *
 * For color related attribs (`fill`, `stroke`), if given value is array-like, a
 * number or an
 * [`IColor`](https://docs.thi.ng/umbrella/color/interfaces/IColor.html)
 * instance, it will be converted into a CSS color string using
 * [`css()`](https://docs.thi.ng/umbrella/color/functions/css.html).
 *
 * String color attribs prefixed with `$` are replaced with `url(#...)` refs
 * (used for referencing gradients).
 *
 * Additional attribute names given (via rest args) will be formatted as numeric
 * values (using configured precision, see {@link setPrecision}). Formatting is
 * done via {@link numericAttribs}.
 *
 * Returns updated attribs or `undefined` if `attribs` itself is null-ish.
 *
 * @param attribs - attributes object
 * @param numericIDs - numeric attribute names
 *
 * @internal
 */
export const fattribs = (attribs: any, ...numericIDs: string[]) => {
	if (!attribs) return;
	const res: any = ftransforms(attribs);
	let v: any;
	(v = attribs.fill) && (res.fill = fcolor(v));
	(v = attribs.stroke) && (res.stroke = fcolor(v));
	return numericAttribs(attribs, numericIDs);
};

/**
 * Converts any transformation related attribs.
 *
 * {@link fattribs}
 *
 * @param attribs - attributes object
 *
 * @internal
 */
const ftransforms = (attribs: any) => {
	let v: any;
	if (
		(v = deref(attribs.transform)) ||
		attribs.translate ||
		attribs.scale != null ||
		attribs.rotate
	) {
		if (v) {
			attribs.transform = !isString(v)
				? `matrix(${[...v].map(ff).join(" ")})`
				: v;
			delete attribs.translate;
			delete attribs.rotate;
			delete attribs.scale;
		} else {
			attribs.transform = buildTransform(attribs);
		}
	}
	return attribs;
};

/**
 * @internal
 */
const buildTransform = (attribs: any) => {
	const tx: string[] = [];
	let v: any;
	if ((v = deref(attribs.translate))) {
		tx.push(isString(v) ? v : `translate(${ff(v[0])} ${ff(v[1])})`);
		delete attribs.translate;
	}
	if ((v = deref(attribs.rotate))) {
		tx.push(isString(v) ? v : `rotate(${ff((v * 180) / Math.PI)})`);
		delete attribs.rotate;
	}
	if ((v = deref(attribs.scale)) != null) {
		tx.push(
			isString(v)
				? v
				: isArrayLike(v)
				? `scale(${ff(v[0])} ${ff(v[1])})`
				: `scale(${ff(v)})`
		);
		delete attribs.scale;
	}
	return tx.join(" ");
};

/**
 * Attempts to convert a single color attrib value. If `col` is prefixed with
 * `$`, the value will be converted into a `url(#...)` reference. If not a
 * string already, it will be converted into a CSS color string using
 * [`css()`](https://docs.thi.ng/umbrella/color/functions/css.html)
 *
 * {@link fattribs}
 *
 * @param col - color value
 *
 * @internal
 */
export const fcolor = (col: any) => {
	const $col = deref(col);
	return isString($col)
		? $col[0] === "$"
			? `url(#${$col.substring(1)})`
			: $col
		: css(col);
};

/** @internal */
export const withoutKeys = (src: any, keys: Set<PropertyKey>) => {
	const dest: any = {};
	for (let k in src) {
		src.hasOwnProperty(k) && !keys.has(k) && (dest[k] = src[<any>k]);
	}
	return dest;
};
