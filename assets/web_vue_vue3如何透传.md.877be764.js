import{_ as s,c as n,o as a,Q as e}from"./chunks/framework.ef145a76.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/vue3如何透传.md","filePath":"web/vue/vue3如何透传.md"}'),l={name:"web/vue/vue3如何透传.md"},p=e(`<h2 id="attrs" tabindex="-1">attrs <a class="header-anchor" href="#attrs" aria-label="Permalink to &quot;attrs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 祖父组件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;MyButton size=&quot;large&quot; color=&quot;red&quot; @click=&quot;handleClick&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 祖父组件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;MyButton size=&quot;large&quot; color=&quot;red&quot; @click=&quot;handleClick&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 父组件（二次封装）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;!-- 透传所有attrs给真正的按钮组件 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;BaseButton v-bind=&quot;$attrs&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">import BaseButton from &#39;./BaseButton.vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 父组件（二次封装）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;!-- 透传所有attrs给真正的按钮组件 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;BaseButton v-bind=&quot;$attrs&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292e;">import BaseButton from &#39;./BaseButton.vue&#39;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 孙组件（或使用elementUI等库）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;button :class=&quot;[&#39;btn&#39;, attrs.size, attrs.color]&quot; v-on=&quot;attrs&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">const attrs = useAttrs()</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 孙组件（或使用elementUI等库）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;button :class=&quot;[&#39;btn&#39;, attrs.size, attrs.color]&quot; v-on=&quot;attrs&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292e;">const attrs = useAttrs()</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><p>这样就可以把 size， color，@click 透传给孙组件</p><h2 id="provide-inject" tabindex="-1">Provide inject <a class="header-anchor" href="#provide-inject" aria-label="Permalink to &quot;Provide inject&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 祖组件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">import ButtonWrapper from &#39;./ButtonWrapper.vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { provide } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const size = &#39;small&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">provide(&#39;formSize&#39;, size)</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;ButtonWrapper /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 祖组件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292e;">import ButtonWrapper from &#39;./ButtonWrapper.vue&#39;</span></span>
<span class="line"><span style="color:#24292e;">import { provide } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const size = &#39;small&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">provide(&#39;formSize&#39;, size)</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;ButtonWrapper /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 孙组件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { inject } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const size = inject(&#39;formSize&#39;, &#39;default&#39;) // 获取祖组件提供的 size</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-button v-bind:size=&quot;size&quot;&gt;&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 孙组件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292e;">import { inject } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const size = inject(&#39;formSize&#39;, &#39;default&#39;) // 获取祖组件提供的 size</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-button v-bind:size=&quot;size&quot;&gt;&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span></code></pre></div>`,8),t=[p];function o(c,i,r,u,y,d){return a(),n("div",null,t)}const m=s(l,[["render",o]]);export{v as __pageData,m as default};
