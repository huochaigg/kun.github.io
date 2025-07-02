import{_ as s,c as n,o as a,Q as e}from"./chunks/framework.ef145a76.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/react/useId.md","filePath":"web/react/useId.md"}'),l={name:"web/react/useId.md"},p=e(`<p>react18+新增的hook， 用于在客户端和服务器端渲染中生成<strong>稳定且唯一的 ID</strong>，以解决 SSR 和 hydration 时 ID 不一致的问题。</p><p>基础用法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { useId } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function MyComponent() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const id = useId();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return (</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;label htmlFor={\`\${id}-input\`}&gt;Name&lt;/label&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;input id={\`\${id}-input\`} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { useId } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function MyComponent() {</span></span>
<span class="line"><span style="color:#24292e;">  const id = useId();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return (</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;label htmlFor={\`\${id}-input\`}&gt;Name&lt;/label&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;input id={\`\${id}-input\`} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="传统做法在ssr中的问题" tabindex="-1">传统做法在SSR中的问题 <a class="header-anchor" href="#传统做法在ssr中的问题" aria-label="Permalink to &quot;传统做法在SSR中的问题&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const id = Math.random().toString(36).slice(2);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const id = Math.random().toString(36).slice(2);</span></span></code></pre></div><p>这种方式在 SSR 和 CSR 时生成的 ID 不一致，导致 hydration 报错</p><h2 id="为什么需要useid" tabindex="-1">为什么需要useId <a class="header-anchor" href="#为什么需要useid" aria-label="Permalink to &quot;为什么需要useId&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;label htmlFor={\`\${id}-input\`}&gt;Name&lt;/label&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;input id={\`\${id}-input\`} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 这里为什么需要设置一个id</span></span>
<span class="line"><span style="color:#e1e4e8;">// 而不要写死一个字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;label htmlFor=&#39;input&#39;&gt;Name&lt;/label&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;input id=&#39;input&#39; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 如果你在多个地方复用了这个组件，它们都会使用 \`id=&quot;input&quot;\`，造成 DOM 冲突</span></span>
<span class="line"><span style="color:#e1e4e8;">// 多个组件实例会共用一个id：input</span></span>
<span class="line"><span style="color:#e1e4e8;">// 而且必须手动去管理id的唯一性</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;label htmlFor={\`\${id}-input\`}&gt;Name&lt;/label&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;input id={\`\${id}-input\`} /&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 这里为什么需要设置一个id</span></span>
<span class="line"><span style="color:#24292e;">// 而不要写死一个字符串</span></span>
<span class="line"><span style="color:#24292e;">&lt;label htmlFor=&#39;input&#39;&gt;Name&lt;/label&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;input id=&#39;input&#39; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">// 如果你在多个地方复用了这个组件，它们都会使用 \`id=&quot;input&quot;\`，造成 DOM 冲突</span></span>
<span class="line"><span style="color:#24292e;">// 多个组件实例会共用一个id：input</span></span>
<span class="line"><span style="color:#24292e;">// 而且必须手动去管理id的唯一性</span></span></code></pre></div><ol><li>避免手写 ID 重名的问题</li><li>支持组件复用时，每个实例生成不同 ID，</li><li>这个关联 在所有环境下（CSR、SSR）都稳定且唯一</li></ol>`,9),t=[p];function o(i,c,r,d,u,y){return a(),n("div",null,t)}const m=s(l,[["render",o]]);export{h as __pageData,m as default};
