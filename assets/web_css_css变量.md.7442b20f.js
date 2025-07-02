import{_ as s,c as e,o as a,Q as n}from"./chunks/framework.ef145a76.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/css变量.md","filePath":"web/css/css变量.md"}'),l={name:"web/css/css变量.md"},p=n(`<p>声明变量，一般写到root中，作用域最大 变量名必须以 <code>--</code> 开头</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">:root {</span></span>
<span class="line"><span style="color:#e1e4e8;">  --main-color: #ff6600;</span></span>
<span class="line"><span style="color:#e1e4e8;">  --font-size: 16px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">:root {</span></span>
<span class="line"><span style="color:#24292e;">  --main-color: #ff6600;</span></span>
<span class="line"><span style="color:#24292e;">  --font-size: 16px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">body {</span></span>
<span class="line"><span style="color:#e1e4e8;">  color: var(--main-color);</span></span>
<span class="line"><span style="color:#e1e4e8;">  font-size: var(--font-size);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">body {</span></span>
<span class="line"><span style="color:#24292e;">  color: var(--main-color);</span></span>
<span class="line"><span style="color:#24292e;">  font-size: var(--font-size);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="局部作用域" tabindex="-1">局部作用域 <a class="header-anchor" href="#局部作用域" aria-label="Permalink to &quot;局部作用域&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.box {</span></span>
<span class="line"><span style="color:#e1e4e8;">  --bg-color: blue;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.box-1 {</span></span>
<span class="line"><span style="color:#e1e4e8;">  color: var(--bg-color); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  --bg-color: blue;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.box-1 {</span></span>
<span class="line"><span style="color:#24292e;">  color: var(--bg-color); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="js操作" tabindex="-1">JS操作 <a class="header-anchor" href="#js操作" aria-label="Permalink to &quot;JS操作&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 修改</span></span>
<span class="line"><span style="color:#e1e4e8;">document.documentElement.style.setProperty(&#39;--bg-color&#39;, &#39;#00ff00&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 获取</span></span>
<span class="line"><span style="color:#e1e4e8;">getComputedStyle(document.documentElement).getPropertyValue(&#39;--bg-color&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 修改</span></span>
<span class="line"><span style="color:#24292e;">document.documentElement.style.setProperty(&#39;--bg-color&#39;, &#39;#00ff00&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 获取</span></span>
<span class="line"><span style="color:#24292e;">getComputedStyle(document.documentElement).getPropertyValue(&#39;--bg-color&#39;);</span></span></code></pre></div>`,8),o=[p];function c(t,r,i,d,y,h){return a(),e("div",null,o)}const b=s(l,[["render",c]]);export{g as __pageData,b as default};
