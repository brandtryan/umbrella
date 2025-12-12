import { server } from "typescript";

export default {
	build: {
		target: "esnext",
		sourcemap: true,
	},
	server: {
		headers: {
			"Cross-Origin-Opener-Policy": "same-origin",
			"Cross-Origin-Embedder-Policy": "require-corp",
		},
	},
};
