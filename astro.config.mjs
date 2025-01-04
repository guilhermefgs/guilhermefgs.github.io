import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import rehypeKatex from 'rehype-katex'; // relevant
import remarkMath from 'remark-math';   // relevant

export default defineConfig({
  site: "https://guilhermefgs.github.io",
  integrations: [
    mdx({
      remarkPlugins: [remarkMath], // relevant
      rehypePlugins: [rehypeKatex] // relevant
    }), 
    sitemap(), 
    tailwind(),
  ],
});
