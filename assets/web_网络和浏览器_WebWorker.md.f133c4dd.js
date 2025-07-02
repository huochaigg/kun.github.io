import{_ as s,c as n,o as a,Q as e}from"./chunks/framework.ef145a76.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/网络和浏览器/WebWorker.md","filePath":"web/网络和浏览器/WebWorker.md"}'),l={name:"web/网络和浏览器/WebWorker.md"},p=e(`<p>如何避免阻塞主线程、提高用户体验</p><h3 id="前提条件" tabindex="-1">前提条件 <a class="header-anchor" href="#前提条件" aria-label="Permalink to &quot;前提条件&quot;">​</a></h3><ul><li>耗时逻辑已最优（算法/数据结构无进一步优化空间）</li><li>问题在于<strong>运行耗时长，会阻塞主线程</strong></li><li>目标是<strong>提升响应性、不卡顿</strong></li></ul><p>使用方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// main.js</span></span>
<span class="line"><span style="color:#e1e4e8;">const worker = new Worker(&#39;worker.js&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">worker.postMessage(data); // 传数据</span></span>
<span class="line"><span style="color:#e1e4e8;">worker.onmessage = (e) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const result = e.data;</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 使用结果更新页面</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// worker.js</span></span>
<span class="line"><span style="color:#e1e4e8;">self.onmessage = (e) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const result = heavyComputation(e.data);</span></span>
<span class="line"><span style="color:#e1e4e8;">  self.postMessage(result);</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// main.js</span></span>
<span class="line"><span style="color:#24292e;">const worker = new Worker(&#39;worker.js&#39;);</span></span>
<span class="line"><span style="color:#24292e;">worker.postMessage(data); // 传数据</span></span>
<span class="line"><span style="color:#24292e;">worker.onmessage = (e) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const result = e.data;</span></span>
<span class="line"><span style="color:#24292e;">  // 使用结果更新页面</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// worker.js</span></span>
<span class="line"><span style="color:#24292e;">self.onmessage = (e) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const result = heavyComputation(e.data);</span></span>
<span class="line"><span style="color:#24292e;">  self.postMessage(result);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="比如使用canvas绘制一个鼠标滑动轨迹" tabindex="-1">比如使用canvas绘制一个鼠标滑动轨迹 <a class="header-anchor" href="#比如使用canvas绘制一个鼠标滑动轨迹" aria-label="Permalink to &quot;比如使用canvas绘制一个鼠标滑动轨迹&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;canvas id=&quot;canvas&quot; width=&quot;800&quot; height=&quot;600&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  const canvas = document.getElementById(&#39;canvas&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  const offscreen = canvas.transferControlToOffscreen();</span></span>
<span class="line"><span style="color:#e1e4e8;">  const worker = new Worker(&#39;worker.js&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  worker.postMessage({ type: &#39;init&#39;, canvas: offscreen }, [offscreen]);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 主线程仅监听鼠标移动</span></span>
<span class="line"><span style="color:#e1e4e8;">  canvas.addEventListener(&#39;mousemove&#39;, (e) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    worker.postMessage({</span></span>
<span class="line"><span style="color:#e1e4e8;">      type: &#39;draw&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      x: e.offsetX,</span></span>
<span class="line"><span style="color:#e1e4e8;">      y: e.offsetY</span></span>
<span class="line"><span style="color:#e1e4e8;">    });</span></span>
<span class="line"><span style="color:#e1e4e8;">  });</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;canvas id=&quot;canvas&quot; width=&quot;800&quot; height=&quot;600&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">  const canvas = document.getElementById(&#39;canvas&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  const offscreen = canvas.transferControlToOffscreen();</span></span>
<span class="line"><span style="color:#24292e;">  const worker = new Worker(&#39;worker.js&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  worker.postMessage({ type: &#39;init&#39;, canvas: offscreen }, [offscreen]);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 主线程仅监听鼠标移动</span></span>
<span class="line"><span style="color:#24292e;">  canvas.addEventListener(&#39;mousemove&#39;, (e) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    worker.postMessage({</span></span>
<span class="line"><span style="color:#24292e;">      type: &#39;draw&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      x: e.offsetX,</span></span>
<span class="line"><span style="color:#24292e;">      y: e.offsetY</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// worder.js</span></span>
<span class="line"><span style="color:#e1e4e8;">let ctx;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">self.onmessage = function (e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const { type, canvas, x, y } = e.data;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  if (type === &#39;init&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 拿到 OffscreenCanvas 上下文</span></span>
<span class="line"><span style="color:#e1e4e8;">    ctx = canvas.getContext(&#39;2d&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    ctx.strokeStyle = &#39;blue&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ctx.lineWidth = 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ctx.lineCap = &#39;round&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  if (type === &#39;draw&#39; &amp;&amp; ctx) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    ctx.beginPath();</span></span>
<span class="line"><span style="color:#e1e4e8;">    ctx.moveTo(x, y); // 简单示例：绘点，也可以保存 lastX、lastY 连线</span></span>
<span class="line"><span style="color:#e1e4e8;">    ctx.lineTo(x + 0.1, y + 0.1); // 避免空路径</span></span>
<span class="line"><span style="color:#e1e4e8;">    ctx.stroke();</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// worder.js</span></span>
<span class="line"><span style="color:#24292e;">let ctx;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">self.onmessage = function (e) {</span></span>
<span class="line"><span style="color:#24292e;">  const { type, canvas, x, y } = e.data;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  if (type === &#39;init&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    // 拿到 OffscreenCanvas 上下文</span></span>
<span class="line"><span style="color:#24292e;">    ctx = canvas.getContext(&#39;2d&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    ctx.strokeStyle = &#39;blue&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    ctx.lineWidth = 2;</span></span>
<span class="line"><span style="color:#24292e;">    ctx.lineCap = &#39;round&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  if (type === &#39;draw&#39; &amp;&amp; ctx) {</span></span>
<span class="line"><span style="color:#24292e;">    ctx.beginPath();</span></span>
<span class="line"><span style="color:#24292e;">    ctx.moveTo(x, y); // 简单示例：绘点，也可以保存 lastX、lastY 连线</span></span>
<span class="line"><span style="color:#24292e;">    ctx.lineTo(x + 0.1, y + 0.1); // 避免空路径</span></span>
<span class="line"><span style="color:#24292e;">    ctx.stroke();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div>`,8),o=[p];function t(c,r,i,y,d,g){return a(),n("div",null,o)}const f=s(l,[["render",t]]);export{v as __pageData,f as default};
