import{_ as s,c as e,o as n,Q as a}from"./chunks/framework.ef145a76.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/nextTick.md","filePath":"web/vue/nextTick.md"}'),l={name:"web/vue/nextTick.md"},p=a(`<p>定义: 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM</p><p>用法：</p><p>vue2</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Vue.nextTick(() =&gt; { ... }) // vue2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">this.$nextTice(() =&gt; {...}) // vue2组件中</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Vue.nextTick(() =&gt; { ... }) // vue2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">this.$nextTice(() =&gt; {...}) // vue2组件中</span></span></code></pre></div><p>vue3</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// vue3</span></span>
<span class="line"><span style="color:#e1e4e8;">import { nextTick } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">await nextTick()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 或者使用promise方法</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function update() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  message.value = &#39;Hello World&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  nextTick().then(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // DOM 已更新</span></span>
<span class="line"><span style="color:#e1e4e8;">    const el = document.querySelector(&#39;div&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;使用 Promise:&#39;, el.textContent) // &quot;Hello World&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// vue3</span></span>
<span class="line"><span style="color:#24292e;">import { nextTick } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">await nextTick()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 或者使用promise方法</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function update() {</span></span>
<span class="line"><span style="color:#24292e;">  message.value = &#39;Hello World&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  nextTick().then(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    // DOM 已更新</span></span>
<span class="line"><span style="color:#24292e;">    const el = document.querySelector(&#39;div&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;使用 Promise:&#39;, el.textContent) // &quot;Hello World&quot;</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>官方：当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。 而”tick“就是 <strong>JavaScript 事件循环中的“微任务（microtask）队列执行时机</strong> nexttick就是： 在本轮宏任务（如你的点击事件、数据变更）结束后，等到微任务执行阶段再 flush DOM 更新队列。</p><p><a href="https://cn.vuejs.org/api/general.html#nexttick" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/general.html#nexttick</a></p><p><a href="https://vue3js.cn/global/nextTick.html" target="_blank" rel="noreferrer">https://vue3js.cn/global/nextTick.html</a></p><p><a href="https://juejin.cn/post/7296016127552864297?searchId=202506111533126CAD796911B06A638F66" target="_blank" rel="noreferrer">https://juejin.cn/post/7296016127552864297?searchId=202506111533126CAD796911B06A638F66</a></p>`,10),t=[p];function o(c,i,r,u,d,y){return n(),e("div",null,t)}const v=s(l,[["render",o]]);export{g as __pageData,v as default};
