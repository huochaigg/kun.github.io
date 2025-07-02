import{_ as s,c as e,o as a,Q as n}from"./chunks/framework.ef145a76.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/javascript/WeakSet.md","filePath":"web/javascript/WeakSet.md"}'),l={name:"web/javascript/WeakSet.md"},o=n(`<h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li>只能存储对象</li><li>弱引用</li><li>不可遍历</li></ul><h2 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const ws = new WeakSet();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const obj1 = { name: &#39;obj1&#39; };</span></span>
<span class="line"><span style="color:#e1e4e8;">const obj2 = { name: &#39;obj2&#39; };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ws.add(obj1);</span></span>
<span class="line"><span style="color:#e1e4e8;">ws.add(obj2);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ws.has(obj1); // true</span></span>
<span class="line"><span style="color:#e1e4e8;">ws.delete(obj1); // true</span></span>
<span class="line"><span style="color:#e1e4e8;">ws.has(obj1); // false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const ws = new WeakSet();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const obj1 = { name: &#39;obj1&#39; };</span></span>
<span class="line"><span style="color:#24292e;">const obj2 = { name: &#39;obj2&#39; };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ws.add(obj1);</span></span>
<span class="line"><span style="color:#24292e;">ws.add(obj2);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ws.has(obj1); // true</span></span>
<span class="line"><span style="color:#24292e;">ws.delete(obj1); // true</span></span>
<span class="line"><span style="color:#24292e;">ws.has(obj1); // false</span></span></code></pre></div><h2 id="和-set的区别" tabindex="-1">和 Set的区别 <a class="header-anchor" href="#和-set的区别" aria-label="Permalink to &quot;和 Set的区别&quot;">​</a></h2><h3 id="set可以添加任意值-而weakset只能添加对象" tabindex="-1">Set可以添加任意值，而WeakSet只能添加对象 <a class="header-anchor" href="#set可以添加任意值-而weakset只能添加对象" aria-label="Permalink to &quot;Set可以添加任意值，而WeakSet只能添加对象&quot;">​</a></h3><h3 id="set强引用-weakset弱引用" tabindex="-1">Set强引用，WeakSet弱引用 <a class="header-anchor" href="#set强引用-weakset弱引用" aria-label="Permalink to &quot;Set强引用，WeakSet弱引用&quot;">​</a></h3><h3 id="set可遍历-for-of、foreach、entries-weakset不可遍历" tabindex="-1">Set可遍历：<code>for...of</code>、<code>forEach</code>、<code>entries()</code>，WeakSet不可遍历 <a class="header-anchor" href="#set可遍历-for-of、foreach、entries-weakset不可遍历" aria-label="Permalink to &quot;Set可遍历：\`for...of\`、\`forEach\`、\`entries()\`，WeakSet不可遍历&quot;">​</a></h3><h3 id="set有size-支持clear-weakset无size-不支持clear" tabindex="-1">Set有size，支持clear，WeakSet无size,不支持clear <a class="header-anchor" href="#set有size-支持clear-weakset无size-不支持clear" aria-label="Permalink to &quot;Set有size，支持clear，WeakSet无size,不支持clear&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const animatingNodes = new WeakSet();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function animate(node) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (animatingNodes.has(node)) return;</span></span>
<span class="line"><span style="color:#e1e4e8;">  animatingNodes.add(node);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 动画执行</span></span>
<span class="line"><span style="color:#e1e4e8;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    animatingNodes.delete(node);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, 1000);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const animatingNodes = new WeakSet();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function animate(node) {</span></span>
<span class="line"><span style="color:#24292e;">  if (animatingNodes.has(node)) return;</span></span>
<span class="line"><span style="color:#24292e;">  animatingNodes.add(node);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 动画执行</span></span>
<span class="line"><span style="color:#24292e;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    animatingNodes.delete(node);</span></span>
<span class="line"><span style="color:#24292e;">  }, 1000);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>类似“状态池”，但只存对象，自动释放</p>`,11),p=[o];function t(c,i,r,d,h,y){return a(),e("div",null,p)}const u=s(l,[["render",t]]);export{k as __pageData,u as default};
