import type { Fn2, NumOrString } from "@thi.ng/api";
import { isArray } from "@thi.ng/checks/is-array";
import { isAsyncIterable } from "@thi.ng/checks/is-async-iterable";
import { isPlainObject } from "@thi.ng/checks/is-plain-object";
import { isSubscribable } from "@thi.ng/rstream/checks";
import type { CompiledComponent, IComponent, NumOrElement } from "./api.js";
import { $async, $asyncA } from "./async.js";
import { isComponent, isElement } from "./checks.js";
import { $el, $remove, $tree } from "./dom.js";
import { $SubA, $sub } from "./sub.js";
import { $wrapEl, $wrapText } from "./wrap.js";

/**
 * Compiles a tree of components given in any supported format incl. reactive
 * state values into a single, nested {@link IComponent}.
 *
 * @remarks
 * Supported formats/values:
 *
 * - hiccup component trees, i.e. `["tag#id.class", attribs, [...]]`
 * - {@link IComponent} instances
 * - pre-existing DOM elements
 * - [`ISubscribable`](https://docs.thi.ng/umbrella/rstream/interfaces/ISubscribable.html)
 *   instances
 * - [`IDeref`](https://docs.thi.ng/umbrella/api/interfaces/IDeref.html)
 *   instances
 *
 * Any other value type will be wrapped in a `<span>` element. Reactive
 * `ISubscribable` values can be used as element attributes or element
 * body/children. For the former, a subscription will be added to update the
 * target attribute. If used as element body, the reactive value will be wrapped
 * using a {@link $sub} `<span>` with the value as its reactive body.
 *
 * **Important:** Use {@link $replace}, {@link $refresh} or {@link $switch} to
 * wrap any reactive values/subscriptions which produce actual HTML
 * elements/components/subtrees (in hiccup format). See docs for these functions
 * for details & examples. Not using any of these wrappers will result in
 * unexpected outcomes.
 *
 * Also see {@link $wrapText}, {@link $wrapHtml} or {@link $wrapEl} for DOM
 * element related component wrappers.
 *
 * @param tree -
 */
export const $compile = (tree: any): IComponent =>
	isArray(tree)
		? isComplexComponent(tree)
			? complexComponent(tree)
			: basicComponent(tree)
		: isComponent(tree)
		? tree
		: isSubscribable(tree)
		? $sub(tree, "span")
		: isAsyncIterable(tree)
		? $async(tree, "span")
		: tree instanceof Element
		? $wrapEl(tree)
		: $wrapText("span", null, tree);

const walk = (
	f: Fn2<any, NumOrString[], void>,
	x: any,
	path: NumOrString[] = []
) => {
	if (isPlainObject(x)) {
		for (const k in x) {
			walk(f, (<any>x)[k], [...path, k]);
		}
	}
	f(x, path);
};

const isComplexComponent = (x: any) => {
	if (isPlainObject(x)) {
		for (const k in x) {
			if (isComplexComponent((<any>x)[k])) return true;
		}
	} else if (isArray(x)) {
		for (let i = 0, n = x.length; i < n; i++) {
			if (isComplexComponent(x[i])) return true;
		}
	}
	return (
		isSubscribable(x) ||
		isAsyncIterable(x) ||
		isComponent(x) ||
		isElement(x)
	);
};

const complexComponent = (tree: any[]): CompiledComponent => ({
	async mount(parent: ParentNode, index: NumOrElement = -1) {
		this.subs = [];
		const attribs = { ...tree[1] };
		walk((x, path) => {
			if (isSubscribable(x)) {
				this.subs!.push(x.subscribe(new $SubA(this, path)));
			} else if (isAsyncIterable(x)) {
				$asyncA(x, this, path);
				if (path.length === 1) delete attribs[path[0]];
			}
		}, attribs);
		this.children = [];
		this.el = $el(tree[0], attribs, null, parent, index);
		for (let i = 2; i < tree.length; i++) {
			const child = $compile(tree[i]);
			child.mount(this.el, i - 2);
			this.children.push(child);
		}
		return this.el;
	},
	async unmount() {
		if (this.children) {
			for (let c of this.children) {
				await c.unmount();
			}
		}
		this.subs && this.subs.forEach((s) => s.unsubscribe());
		this.el && $remove(this.el);
		this.el = this.children = this.subs = undefined;
	},
	update() {},
});

const basicComponent = (tree: any): CompiledComponent => ({
	async mount(parent: ParentNode, index: NumOrElement = -1) {
		return (this.el = await $tree(tree, parent, index));
	},
	async unmount() {
		this.el && $remove(this.el);
		this.el = undefined;
	},
	update() {},
});
