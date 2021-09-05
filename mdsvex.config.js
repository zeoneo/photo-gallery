import remarkTOC from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";
import * as shiki from "shiki";
// comment
// fix whitespace weirdness
const escape = code => {
  return code
    .replace(/[{}`]/g, c => ({ "{": "&#123;", "}": "&#125;", "`": "&#96;" }[c]))
    .replace(/\\([trn])/g, "&#92;$1");
};

const highlighter = async (code, lang) => {
  const highlighter = await shiki.getHighlighter({ theme: "dark-plus" });
  const highlightedCode = highlighter.codeToHtml(code, lang || "text");
  return `<div class="codeblock"> {@html \`${escape(highlightedCode)}\` } </div>`;
};

/**

<div class="codeblock">
const highlighter = async (code, lang) => {
  <pre class="shiki" style="background-color: #31324e;color: #c9cdd7;" data-language="${lang}">
  {@html \`${escape(highlightedCode)}\` }
  </pre>
  </div>

 */

export default {
//   layout: {
//     _: "./src/lib/layouts/post.svelte",
//     project: "./src/lib/layouts/project.svelte",
//     about: "./src/lib/layouts/about.svelte",
//   },
  extensions: [".svx", ".md"],
  smartypants: {
    dashes: "oldschool",
  },
  remarkPlugins: [remarkTOC],
  rehypePlugins: [rehypeSlug, [rehypeAutolink, { behavior: "wrap" }]],
  highlight: {
    highlighter,
  },
};
