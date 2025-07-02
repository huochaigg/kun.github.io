import{_ as s,c as n,o as e,Q as a}from"./chunks/framework.ef145a76.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/如何自定义指令.md","filePath":"web/vue/如何自定义指令.md"}'),l={name:"web/vue/如何自定义指令.md"},p=a(`<h2 id="公式" tabindex="-1">公式 <a class="header-anchor" href="#公式" aria-label="Permalink to &quot;公式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mounted(el, binding, vnode, prevVnode)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 常用前两个参数：</span></span>
<span class="line"><span style="color:#e1e4e8;">// el: 被绑定指令的真实 DOM 元素</span></span>
<span class="line"><span style="color:#e1e4e8;">// binding: 指令相关的所有值、参数、修饰符信息</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mounted(el, binding, vnode, prevVnode)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 常用前两个参数：</span></span>
<span class="line"><span style="color:#24292e;">// el: 被绑定指令的真实 DOM 元素</span></span>
<span class="line"><span style="color:#24292e;">// binding: 指令相关的所有值、参数、修饰符信息</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// directives.ts</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export const directives = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 1. 表单提交节流</span></span>
<span class="line"><span style="color:#e1e4e8;">  throttleSubmit: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    mounted(el: HTMLFormElement, binding: DirectiveBinding) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      const delay = binding.arg ? parseInt(binding.arg) : 1000</span></span>
<span class="line"><span style="color:#e1e4e8;">      el.addEventListener(&#39;submit&#39;, throttle((e) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        binding.value?.(e)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }, delay))</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 2. Modal 自动 focus</span></span>
<span class="line"><span style="color:#e1e4e8;">  autoFocus: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    mounted(el: HTMLElement) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      requestAnimationFrame(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        el.focus()</span></span>
<span class="line"><span style="color:#e1e4e8;">      })</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// directives.ts</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export const directives = {</span></span>
<span class="line"><span style="color:#24292e;">  // 1. 表单提交节流</span></span>
<span class="line"><span style="color:#24292e;">  throttleSubmit: {</span></span>
<span class="line"><span style="color:#24292e;">    mounted(el: HTMLFormElement, binding: DirectiveBinding) {</span></span>
<span class="line"><span style="color:#24292e;">      const delay = binding.arg ? parseInt(binding.arg) : 1000</span></span>
<span class="line"><span style="color:#24292e;">      el.addEventListener(&#39;submit&#39;, throttle((e) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        binding.value?.(e)</span></span>
<span class="line"><span style="color:#24292e;">      }, delay))</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 2. Modal 自动 focus</span></span>
<span class="line"><span style="color:#24292e;">  autoFocus: {</span></span>
<span class="line"><span style="color:#24292e;">    mounted(el: HTMLElement) {</span></span>
<span class="line"><span style="color:#24292e;">      requestAnimationFrame(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        el.focus()</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="在全局注册" tabindex="-1">在全局注册 <a class="header-anchor" href="#在全局注册" aria-label="Permalink to &quot;在全局注册&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// main.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { directives } from &#39;./directives&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Object.entries(directives).forEach(([name, def]) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  app.directive(name, def)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">app.mount(&#39;#app&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// main.ts</span></span>
<span class="line"><span style="color:#24292e;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#24292e;">import { directives } from &#39;./directives&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Object.entries(directives).forEach(([name, def]) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  app.directive(name, def)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">app.mount(&#39;#app&#39;)</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;form v-throttle-submit:1000=&quot;onSubmit&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;button type=&quot;submit&quot;&gt;提交&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/form&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;input v-auto-focus /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">const onSubmit = (e: Event) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  e.preventDefault()</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&#39;表单提交&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;form v-throttle-submit:1000=&quot;onSubmit&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;button type=&quot;submit&quot;&gt;提交&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/form&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &lt;input v-auto-focus /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">const onSubmit = (e: Event) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  e.preventDefault()</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;表单提交&#39;)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><h2 id="常用指令库" tabindex="-1">常用指令库 <a class="header-anchor" href="#常用指令库" aria-label="Permalink to &quot;常用指令库&quot;">​</a></h2><table><thead><tr><th>指令名</th><th>功能说明</th></tr></thead><tbody><tr><td><code>v-copy</code></td><td>点击复制文本</td></tr><tr><td><code>v-lazy</code></td><td>图片懒加载</td></tr><tr><td><code>v-debounce</code></td><td>输入防抖、点击防抖</td></tr><tr><td><code>v-throttle</code></td><td>节流处理</td></tr><tr><td><code>v-click-outside</code></td><td>外部点击检测</td></tr><tr><td><code>v-longpress</code></td><td>长按触发</td></tr><tr><td><code>v-draggable</code></td><td>拖动元素</td></tr><tr><td><code>v-permission</code></td><td>按钮权限控制</td></tr><tr><td><code>v-auto-focus</code></td><td>自动聚焦输入框</td></tr><tr><td><code>v-format-datetime</code></td><td>失焦格式化日期时间</td></tr></tbody></table>`,9),t=[p];function o(c,i,r,d,y,u){return e(),n("div",null,t)}const v=s(l,[["render",o]]);export{m as __pageData,v as default};
