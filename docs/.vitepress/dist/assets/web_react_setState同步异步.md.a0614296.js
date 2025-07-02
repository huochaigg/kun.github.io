import{_ as s,c as e,o as a,Q as n}from"./chunks/framework.ef145a76.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/react/setState同步异步.md","filePath":"web/react/setState同步异步.md"}'),t={name:"web/react/setState同步异步.md"},p=n(`<h2 id="在react中-setstate是同步还是异步的" tabindex="-1">在react中，setState是同步还是异步的？ <a class="header-anchor" href="#在react中-setstate是同步还是异步的" aria-label="Permalink to &quot;在react中，setState是同步还是异步的？&quot;">​</a></h2><p>分两种情况，在react18+以后，因为react内部增加了批处理功能，几乎所有setState都是异步的</p><h3 id="react18-以前" tabindex="-1">react18+以前 <a class="header-anchor" href="#react18-以前" aria-label="Permalink to &quot;react18+以前&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  setState(1); // 同步执行一次 setState</span></span>
<span class="line"><span style="color:#e1e4e8;">  setState(2); // 再同步执行一次 setState</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  setState(1); // 同步执行一次 setState</span></span>
<span class="line"><span style="color:#24292e;">  setState(2); // 再同步执行一次 setState</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>在setTimeout, setInterval, Promise, 或是一些微任务中是同步的</p><p>函数式 <code>setState</code> 解决异步依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">this.setState((prevState) =&gt; ({ count: prevState.count + 1 }));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// hooks</span></span>
<span class="line"><span style="color:#e1e4e8;">setData(count =&gt; count + 1)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">this.setState((prevState) =&gt; ({ count: prevState.count + 1 }));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// hooks</span></span>
<span class="line"><span style="color:#24292e;">setData(count =&gt; count + 1)</span></span></code></pre></div><h3 id="react18-以后" tabindex="-1">react18+以后 <a class="header-anchor" href="#react18-以后" aria-label="Permalink to &quot;react18+以后&quot;">​</a></h3><p>默认启用自动批处理，即使是 <code>setTimeout</code>、Promise 等场景也会被批量处理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// React 18 中以下代码会批量更新</span></span>
<span class="line"><span style="color:#e1e4e8;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">	setCount(c =&gt; c + 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">	setName(&quot;New Name&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}, 1000);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// React 18 中以下代码会批量更新</span></span>
<span class="line"><span style="color:#24292e;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	setCount(c =&gt; c + 1);</span></span>
<span class="line"><span style="color:#24292e;">	setName(&quot;New Name&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}, 1000);</span></span></code></pre></div><h4 id="如何手动控制批处理" tabindex="-1">如何手动控制批处理 <a class="header-anchor" href="#如何手动控制批处理" aria-label="Permalink to &quot;如何手动控制批处理&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { flushSync } from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">flushSync(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  setCount(c =&gt; c + 1); // 立即更新</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { flushSync } from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">flushSync(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  setCount(c =&gt; c + 1); // 立即更新</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>旧版本：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { unstable_batchedUpdates } from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  unstable_batchedUpdates(() =&gt; { // 批处理</span></span>
<span class="line"><span style="color:#e1e4e8;">    setCount(c =&gt; c + 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    setName(&quot;New Name&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  });</span></span>
<span class="line"><span style="color:#e1e4e8;">}, 1000);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { unstable_batchedUpdates } from &#39;react-dom&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  unstable_batchedUpdates(() =&gt; { // 批处理</span></span>
<span class="line"><span style="color:#24292e;">    setCount(c =&gt; c + 1);</span></span>
<span class="line"><span style="color:#24292e;">    setName(&quot;New Name&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;">}, 1000);</span></span></code></pre></div>`,14),l=[p];function o(c,i,r,d,u,h){return a(),e("div",null,l)}const m=s(t,[["render",o]]);export{g as __pageData,m as default};
