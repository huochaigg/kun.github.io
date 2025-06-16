import{_ as s,c as n,o as a,d as e}from"./app.b8b79069.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5148\u62C9\u53D6git vue3\u6E90\u7801\uFF0C\u5E76\u6784\u5EFA","slug":"\u5148\u62C9\u53D6git-vue3\u6E90\u7801-\u5E76\u6784\u5EFA","link":"#\u5148\u62C9\u53D6git-vue3\u6E90\u7801-\u5E76\u6784\u5EFA","children":[]},{"level":2,"title":"\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF0C\u548Cvue3\u6E90\u7801\u5728\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D","slug":"\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE-\u548Cvue3\u6E90\u7801\u5728\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D","link":"#\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE-\u548Cvue3\u6E90\u7801\u5728\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D","children":[]},{"level":2,"title":"\u4FEE\u6539vite\u914D\u7F6E","slug":"\u4FEE\u6539vite\u914D\u7F6E","link":"#\u4FEE\u6539vite\u914D\u7F6E","children":[{"level":3,"title":"\u4FEE\u6539vite.config.ts","slug":"\u4FEE\u6539vite-config-ts","link":"#\u4FEE\u6539vite-config-ts","children":[]},{"level":3,"title":"2. \u4FEE\u6539package.json \u914D\u7F6E","slug":"_2-\u4FEE\u6539package-json-\u914D\u7F6E","link":"#_2-\u4FEE\u6539package-json-\u914D\u7F6E","children":[]},{"level":3,"title":"3. \u4FEE\u6539tsconfig.json \u914D\u7F6E","slug":"_3-\u4FEE\u6539tsconfig-json-\u914D\u7F6E","link":"#_3-\u4FEE\u6539tsconfig-json-\u914D\u7F6E","children":[]},{"level":3,"title":"4. \u5220\u9664node_modules\u6587\u4EF6\u5939\uFF0C\u548Cpnpm-lock.yaml\u6587\u4EF6","slug":"_4-\u5220\u9664node-modules\u6587\u4EF6\u5939-\u548Cpnpm-lock-yaml\u6587\u4EF6","link":"#_4-\u5220\u9664node-modules\u6587\u4EF6\u5939-\u548Cpnpm-lock-yaml\u6587\u4EF6","children":[]},{"level":3,"title":"5. \u91CD\u65B0\u5B89\u88C5\u9879\u76EE\uFF0C\u5E76\u542F\u52A8","slug":"_5-\u91CD\u65B0\u5B89\u88C5\u9879\u76EE-\u5E76\u542F\u52A8","link":"#_5-\u91CD\u65B0\u5B89\u88C5\u9879\u76EE-\u5E76\u542F\u52A8","children":[]}]}],"relativePath":"web/vue/\u5982\u4F55\u8C03\u8BD5vue.md"}'),l={name:"web/vue/\u5982\u4F55\u8C03\u8BD5vue.md"},p=e(`<h2 id="\u5148\u62C9\u53D6git-vue3\u6E90\u7801-\u5E76\u6784\u5EFA" tabindex="-1">\u5148\u62C9\u53D6git vue3\u6E90\u7801\uFF0C\u5E76\u6784\u5EFA <a class="header-anchor" href="#\u5148\u62C9\u53D6git-vue3\u6E90\u7801-\u5E76\u6784\u5EFA" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/vuejs/core.git vue3-source</span></span>
<span class="line"><span style="color:#A6ACCD;">cd vue3-source</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm install</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE-\u548Cvue3\u6E90\u7801\u5728\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D" tabindex="-1">\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF0C\u548Cvue3\u6E90\u7801\u5728\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D <a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE-\u548Cvue3\u6E90\u7801\u5728\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/core</span></span>
<span class="line"><span style="color:#A6ACCD;">/vue3Test</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u547D\u4EE4</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm create vite</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u9009\u62E9vue typescript</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4FEE\u6539vite\u914D\u7F6E" tabindex="-1">\u4FEE\u6539vite\u914D\u7F6E <a class="header-anchor" href="#\u4FEE\u6539vite\u914D\u7F6E" aria-hidden="true">#</a></h2><h3 id="\u4FEE\u6539vite-config-ts" tabindex="-1">\u4FEE\u6539vite.config.ts <a class="header-anchor" href="#\u4FEE\u6539vite-config-ts" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// vite.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">import { fileURLToPath } from &#39;url&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import path from &#39;path&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [vue()],</span></span>
<span class="line"><span style="color:#A6ACCD;">  build: {</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0 \xA0 sourcemap: true, \xA0// \u751F\u6210 source map\uFF0C\u65B9\u4FBF\u8C03\u8BD5\u6E90\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0 },</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0 optimizeDeps: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    exclude: [&#39;vue&#39;, &#39;@vue/shared&#39;, &#39;@vue/reactivity&#39;, &#39;@vue/runtime-core&#39;, &#39;@vue/runtime-dom&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alias: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      vue: path.resolve(__dirname, &#39;../vue3-source/packages/vue/dist/vue.runtime.esm-bundler.js&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;@vue/runtime-core&#39;: path.resolve(__dirname, &#39;../vue3-source/packages/runtime-core/src&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;@vue/reactivity&#39;: path.resolve(__dirname, &#39;../vue3-source/packages/reactivity/src&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;@vue/shared&#39;: path.resolve(__dirname, &#39;../vue3-source/packages/shared/src&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5176\u4ED6\u4F60\u8981\u8C03\u8BD5\u7684\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>optimizeDeps\uFF0Calias \u9700\u8981\u52A0\u4E0A\u5BF9\u5E94\u7684vue\u6A21\u5757\uFF0C alias\u7684\u8DEF\u5F84\u4E3A\u81EA\u5DF1\u4E0B\u8F7Dvue3\u6E90\u7801\u5BF9\u5E94\u7684\u8DEF\u5F84 optimizeDeps \u9632\u6B62 Vite \u81EA\u52A8\u626B\u63CF\u8FDB vue\uFF0C\u8981\u4E0D\u7136\u9879\u76EE\u4F1A\u5F15\u7528\u5230node_modules\u4E2D\u7684vue\u800C\u4E0D\u662F\u81EA\u5DF1\u6E90\u7801\u4E2D\u7684</p><h3 id="_2-\u4FEE\u6539package-json-\u914D\u7F6E" tabindex="-1">2. \u4FEE\u6539package.json \u914D\u7F6E <a class="header-anchor" href="#_2-\u4FEE\u6539package-json-\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\`</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">dependencies: {</span></span>
<span class="line"><span style="color:#A6ACCD;"> &quot;vue&quot;: &quot;^3.5.3&quot; // \u5220\u9664\u6389</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 \u6539\u4E3A</span></span>
<span class="line"><span style="color:#A6ACCD;">dependencies: {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-\u4FEE\u6539tsconfig-json-\u914D\u7F6E" tabindex="-1">3. \u4FEE\u6539tsconfig.json \u914D\u7F6E <a class="header-anchor" href="#_3-\u4FEE\u6539tsconfig-json-\u914D\u7F6E" aria-hidden="true">#</a></h3><p>tsconfig.json path\u4E2D\u589E\u52A0vue\u7684\u8FD9\u51E0\u4E2A\u6A21\u5757</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;files&quot;: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;references&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    { &quot;path&quot;: &quot;./tsconfig.app.json&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { &quot;path&quot;: &quot;./tsconfig.node.json&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ......</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;vue&quot;: [&quot;local-vue/vue/dist/vue.runtime.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;@vue/runtime-dom&quot;: [&quot;local-vue/runtime-dom/dist/runtime-dom.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;@vue/runtime-core&quot;: [&quot;local-vue/runtime-core/dist/runtime-core.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;@vue/reactivity&quot;: [&quot;local-vue/reactivity/dist/reactivity.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;@vue/shared&quot;: [&quot;local-vue/shared/dist/shared.esm-bundler.js&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_4-\u5220\u9664node-modules\u6587\u4EF6\u5939-\u548Cpnpm-lock-yaml\u6587\u4EF6" tabindex="-1">4. \u5220\u9664node_modules\u6587\u4EF6\u5939\uFF0C\u548Cpnpm-lock.yaml\u6587\u4EF6 <a class="header-anchor" href="#_4-\u5220\u9664node-modules\u6587\u4EF6\u5939-\u548Cpnpm-lock-yaml\u6587\u4EF6" aria-hidden="true">#</a></h3><h3 id="_5-\u91CD\u65B0\u5B89\u88C5\u9879\u76EE-\u5E76\u542F\u52A8" tabindex="-1">5. \u91CD\u65B0\u5B89\u88C5\u9879\u76EE\uFF0C\u5E76\u542F\u52A8 <a class="header-anchor" href="#_5-\u91CD\u65B0\u5B89\u88C5\u9879\u76EE-\u5E76\u542F\u52A8" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm install</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u5728</p>`,20),o=[p];function t(c,i,r,u,C,d){return a(),n("div",null,o)}const y=s(l,[["render",t]]);export{v as __pageData,y as default};
