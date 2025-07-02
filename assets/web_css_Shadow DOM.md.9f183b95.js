import{_ as s,c as n,o as a,Q as e}from"./chunks/framework.ef145a76.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/Shadow DOM.md","filePath":"web/css/Shadow DOM.md"}'),l={name:"web/css/Shadow DOM.md"},p=e(`<p>Shadow DOM 是浏览器原生支持的一种 DOM 隔离机制，它允许我们为一个元素创建一个<strong>隐藏的 DOM 树</strong>，这个 DOM 树与主文档的 DOM 相互独立。</p><h2 id="创建-shadow-dom" tabindex="-1">创建 Shadow DOM <a class="header-anchor" href="#创建-shadow-dom" aria-label="Permalink to &quot;创建 Shadow DOM&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const host = document.querySelector(&#39;#my-element&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const shadowRoot = host.attachShadow({ mode: &#39;open&#39; }); // or &#39;closed&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const host = document.querySelector(&#39;#my-element&#39;);</span></span>
<span class="line"><span style="color:#24292e;">const shadowRoot = host.attachShadow({ mode: &#39;open&#39; }); // or &#39;closed&#39;</span></span></code></pre></div><ul><li><code>open</code> 模式：<code>element.shadowRoot</code> 可以访问到 shadowRoot。</li><li><code>closed</code> 模式：<code>element.shadowRoot === null</code>，外部无法访问 shadowRoot</li></ul><h2 id="在react中的应用" tabindex="-1">在react中的应用 <a class="header-anchor" href="#在react中的应用" aria-label="Permalink to &quot;在react中的应用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const ShadowBox = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const containerRef = useRef&lt;HTMLDivElement&gt;(null);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const shadowRoot = containerRef.current!.attachShadow({ mode: &#39;open&#39; });</span></span>
<span class="line"><span style="color:#e1e4e8;">    shadowRoot.innerHTML = \`</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        p { color: red; font-weight: bold; }</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;/style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;p&gt;Shadow DOM&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    \`;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, []);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return &lt;div ref={containerRef}&gt;&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const ShadowBox = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const containerRef = useRef&lt;HTMLDivElement&gt;(null);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    const shadowRoot = containerRef.current!.attachShadow({ mode: &#39;open&#39; });</span></span>
<span class="line"><span style="color:#24292e;">    shadowRoot.innerHTML = \`</span></span>
<span class="line"><span style="color:#24292e;">      &lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">        p { color: red; font-weight: bold; }</span></span>
<span class="line"><span style="color:#24292e;">      &lt;/style&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;p&gt;Shadow DOM&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    \`;</span></span>
<span class="line"><span style="color:#24292e;">  }, []);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return &lt;div ref={containerRef}&gt;&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="在qiankun中的应用" tabindex="-1">在qiankun中的应用 <a class="header-anchor" href="#在qiankun中的应用" aria-label="Permalink to &quot;在qiankun中的应用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">registerMicroApps([</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;vue-app&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    entry: &#39;//localhost:8081&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    container: &#39;#subapp-container&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    activeRule: &#39;/vue&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    props: { someData: &#39;hello&#39; }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">], {</span></span>
<span class="line"><span style="color:#e1e4e8;">  sandbox: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    strictStyleIsolation: true // 启用 Shadow DOM 隔离</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 可以设置 \`experimentalStyleIsolation: true\`，开启“伪 Shadow DOM”隔离（通过添加 \`data-qiankun\` 属性选择器限制样式作用域</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">registerMicroApps([</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;vue-app&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    entry: &#39;//localhost:8081&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    container: &#39;#subapp-container&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    activeRule: &#39;/vue&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    props: { someData: &#39;hello&#39; }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">], {</span></span>
<span class="line"><span style="color:#24292e;">  sandbox: {</span></span>
<span class="line"><span style="color:#24292e;">    strictStyleIsolation: true // 启用 Shadow DOM 隔离</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 可以设置 \`experimentalStyleIsolation: true\`，开启“伪 Shadow DOM”隔离（通过添加 \`data-qiankun\` 属性选择器限制样式作用域</span></span></code></pre></div>`,8),o=[p];function t(c,r,i,d,h,y){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{g as __pageData,m as default};
