import{_ as s,c as e,o as n,Q as a}from"./chunks/framework.ef145a76.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/如何调试vue.md","filePath":"web/vue/如何调试vue.md"}'),p={name:"web/vue/如何调试vue.md"},l=a(`<h2 id="先拉取git-vue3源码-并构建" tabindex="-1">先拉取git vue3源码，并构建 <a class="header-anchor" href="#先拉取git-vue3源码-并构建" aria-label="Permalink to &quot;先拉取git vue3源码，并构建&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git clone https://github.com/vuejs/core.git vue3-source</span></span>
<span class="line"><span style="color:#e1e4e8;">cd vue3-source</span></span>
<span class="line"><span style="color:#e1e4e8;">pnpm install</span></span>
<span class="line"><span style="color:#e1e4e8;">pnpm dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git clone https://github.com/vuejs/core.git vue3-source</span></span>
<span class="line"><span style="color:#24292e;">cd vue3-source</span></span>
<span class="line"><span style="color:#24292e;">pnpm install</span></span>
<span class="line"><span style="color:#24292e;">pnpm dev</span></span></code></pre></div><h2 id="创建一个项目-和vue3源码在一个文件夹中" tabindex="-1">创建一个项目，和vue3源码在一个文件夹中 <a class="header-anchor" href="#创建一个项目-和vue3源码在一个文件夹中" aria-label="Permalink to &quot;创建一个项目，和vue3源码在一个文件夹中&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/core</span></span>
<span class="line"><span style="color:#e1e4e8;">/vue3Test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/core</span></span>
<span class="line"><span style="color:#24292e;">/vue3Test</span></span></code></pre></div><p>命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm create vite</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 选择vue typescript</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm create vite</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 选择vue typescript</span></span></code></pre></div><h2 id="修改vite配置" tabindex="-1">修改vite配置 <a class="header-anchor" href="#修改vite配置" aria-label="Permalink to &quot;修改vite配置&quot;">​</a></h2><h3 id="修改vite-config-ts" tabindex="-1">修改vite.config.ts <a class="header-anchor" href="#修改vite-config-ts" aria-label="Permalink to &quot;修改vite.config.ts&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// vite.config.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">import { fileURLToPath } from &#39;url&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import path from &#39;path&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [vue()],</span></span>
<span class="line"><span style="color:#e1e4e8;">  build: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    sourcemap: true,  // 生成 source map，方便调试源码</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  optimizeDeps: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    exclude: [&#39;vue&#39;, &#39;@vue/shared&#39;, &#39;@vue/reactivity&#39;, &#39;@vue/runtime-core&#39;, &#39;@vue/runtime-dom&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  resolve: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    alias: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      vue: path.resolve(__dirname, &#39;../vue3-source/packages/vue/dist/vue.runtime.esm-bundler.js&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;@vue/runtime-core&#39;: path.resolve(__dirname, &#39;../vue3-source/packages/runtime-core/src&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;@vue/reactivity&#39;: path.resolve(__dirname, &#39;../vue3-source/packages/reactivity/src&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;@vue/shared&#39;: path.resolve(__dirname, &#39;../vue3-source/packages/shared/src&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 其他你要调试的包</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// vite.config.ts</span></span>
<span class="line"><span style="color:#24292e;">import { fileURLToPath } from &#39;url&#39;</span></span>
<span class="line"><span style="color:#24292e;">import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span style="color:#24292e;">import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#24292e;">import path from &#39;path&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [vue()],</span></span>
<span class="line"><span style="color:#24292e;">  build: {</span></span>
<span class="line"><span style="color:#24292e;">    sourcemap: true,  // 生成 source map，方便调试源码</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  optimizeDeps: {</span></span>
<span class="line"><span style="color:#24292e;">    exclude: [&#39;vue&#39;, &#39;@vue/shared&#39;, &#39;@vue/reactivity&#39;, &#39;@vue/runtime-core&#39;, &#39;@vue/runtime-dom&#39;]</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  resolve: {</span></span>
<span class="line"><span style="color:#24292e;">    alias: {</span></span>
<span class="line"><span style="color:#24292e;">      vue: path.resolve(__dirname, &#39;../vue3-source/packages/vue/dist/vue.runtime.esm-bundler.js&#39;),</span></span>
<span class="line"><span style="color:#24292e;">      &#39;@vue/runtime-core&#39;: path.resolve(__dirname, &#39;../vue3-source/packages/runtime-core/src&#39;),</span></span>
<span class="line"><span style="color:#24292e;">      &#39;@vue/reactivity&#39;: path.resolve(__dirname, &#39;../vue3-source/packages/reactivity/src&#39;),</span></span>
<span class="line"><span style="color:#24292e;">      &#39;@vue/shared&#39;: path.resolve(__dirname, &#39;../vue3-source/packages/shared/src&#39;),</span></span>
<span class="line"><span style="color:#24292e;">      // 其他你要调试的包</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p>optimizeDeps，alias 需要加上对应的vue模块， alias的路径为自己下载vue3源码对应的路径 optimizeDeps 防止 Vite 自动扫描进 vue，要不然项目会引用到node_modules中的vue而不是自己源码中的</p><h3 id="_2-修改package-json-配置" tabindex="-1">2. 修改package.json 配置 <a class="header-anchor" href="#_2-修改package-json-配置" aria-label="Permalink to &quot;2. 修改package.json 配置&quot;">​</a></h3><p>\`</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// package.json</span></span>
<span class="line"><span style="color:#e1e4e8;">dependencies: {</span></span>
<span class="line"><span style="color:#e1e4e8;"> &quot;vue&quot;: &quot;^3.5.3&quot; // 删除掉</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// —————————— 改为</span></span>
<span class="line"><span style="color:#e1e4e8;">dependencies: {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// package.json</span></span>
<span class="line"><span style="color:#24292e;">dependencies: {</span></span>
<span class="line"><span style="color:#24292e;"> &quot;vue&quot;: &quot;^3.5.3&quot; // 删除掉</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// —————————— 改为</span></span>
<span class="line"><span style="color:#24292e;">dependencies: {}</span></span></code></pre></div><h3 id="_3-修改tsconfig-json-配置" tabindex="-1">3. 修改tsconfig.json 配置 <a class="header-anchor" href="#_3-修改tsconfig-json-配置" aria-label="Permalink to &quot;3. 修改tsconfig.json 配置&quot;">​</a></h3><p>tsconfig.json path中增加vue的这几个模块</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// tsconfig.json</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;files&quot;: [],</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;references&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    { &quot;path&quot;: &quot;./tsconfig.app.json&quot; },</span></span>
<span class="line"><span style="color:#e1e4e8;">    { &quot;path&quot;: &quot;./tsconfig.node.json&quot; }</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ......</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;vue&quot;: [&quot;local-vue/vue/dist/vue.runtime.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;@vue/runtime-dom&quot;: [&quot;local-vue/runtime-dom/dist/runtime-dom.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;@vue/runtime-core&quot;: [&quot;local-vue/runtime-core/dist/runtime-core.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;@vue/reactivity&quot;: [&quot;local-vue/reactivity/dist/reactivity.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;@vue/shared&quot;: [&quot;local-vue/shared/dist/shared.esm-bundler.js&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// tsconfig.json</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;files&quot;: [],</span></span>
<span class="line"><span style="color:#24292e;">  &quot;references&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">    { &quot;path&quot;: &quot;./tsconfig.app.json&quot; },</span></span>
<span class="line"><span style="color:#24292e;">    { &quot;path&quot;: &quot;./tsconfig.node.json&quot; }</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">  // ......</span></span>
<span class="line"><span style="color:#24292e;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;vue&quot;: [&quot;local-vue/vue/dist/vue.runtime.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#24292e;">      &quot;@vue/runtime-dom&quot;: [&quot;local-vue/runtime-dom/dist/runtime-dom.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#24292e;">      &quot;@vue/runtime-core&quot;: [&quot;local-vue/runtime-core/dist/runtime-core.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#24292e;">      &quot;@vue/reactivity&quot;: [&quot;local-vue/reactivity/dist/reactivity.esm-bundler.js&quot;],</span></span>
<span class="line"><span style="color:#24292e;">      &quot;@vue/shared&quot;: [&quot;local-vue/shared/dist/shared.esm-bundler.js&quot;]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_4-删除node-modules文件夹-和pnpm-lock-yaml文件" tabindex="-1">4. 删除node_modules文件夹，和pnpm-lock.yaml文件 <a class="header-anchor" href="#_4-删除node-modules文件夹-和pnpm-lock-yaml文件" aria-label="Permalink to &quot;4. 删除node_modules文件夹，和pnpm-lock.yaml文件&quot;">​</a></h3><h3 id="_5-重新安装项目-并启动" tabindex="-1">5. 重新安装项目，并启动 <a class="header-anchor" href="#_5-重新安装项目-并启动" aria-label="Permalink to &quot;5. 重新安装项目，并启动&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm install</span></span>
<span class="line"><span style="color:#e1e4e8;">pnpm dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm install</span></span>
<span class="line"><span style="color:#24292e;">pnpm dev</span></span></code></pre></div><p>然后就可以在</p>`,20),o=[l];function t(c,i,r,u,d,v){return n(),e("div",null,o)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};
