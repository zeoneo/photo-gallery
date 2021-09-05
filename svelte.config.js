import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import adapterStatic from "@sveltejs/adapter-static"
import sveltePreprocess from "svelte-preprocess"
import path from "path"
// comment
/** @type {import('@sveltejs/kit').Config} */
export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [mdsvex(mdsvexConfig), sveltePreprocess({})],
  kit: {
    adapter: adapterStatic(),
    target: "#svelte",
    vite: {
      resolve: {
        alias: [
          { find: "#/", replacement: path.join(import.meta.url, "./src") },
        ],
      },
    },
  },
}