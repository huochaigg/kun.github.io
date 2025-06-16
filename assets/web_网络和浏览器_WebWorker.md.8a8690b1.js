import{_ as s,c as n,o as a,d as l}from"./app.b8b79069.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u524D\u63D0\u6761\u4EF6","slug":"\u524D\u63D0\u6761\u4EF6","link":"#\u524D\u63D0\u6761\u4EF6","children":[]},{"level":2,"title":"\u6BD4\u5982\u4F7F\u7528canvas\u7ED8\u5236\u4E00\u4E2A\u9F20\u6807\u6ED1\u52A8\u8F68\u8FF9","slug":"\u6BD4\u5982\u4F7F\u7528canvas\u7ED8\u5236\u4E00\u4E2A\u9F20\u6807\u6ED1\u52A8\u8F68\u8FF9","link":"#\u6BD4\u5982\u4F7F\u7528canvas\u7ED8\u5236\u4E00\u4E2A\u9F20\u6807\u6ED1\u52A8\u8F68\u8FF9","children":[]}],"relativePath":"web/\u7F51\u7EDC\u548C\u6D4F\u89C8\u5668/WebWorker.md"}'),e={name:"web/\u7F51\u7EDC\u548C\u6D4F\u89C8\u5668/WebWorker.md"},p=l(`<p>\u5982\u4F55\u907F\u514D\u963B\u585E\u4E3B\u7EBF\u7A0B\u3001\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C</p><h3 id="\u524D\u63D0\u6761\u4EF6" tabindex="-1">\u524D\u63D0\u6761\u4EF6 <a class="header-anchor" href="#\u524D\u63D0\u6761\u4EF6" aria-hidden="true">#</a></h3><ul><li>\u8017\u65F6\u903B\u8F91\u5DF2\u6700\u4F18\uFF08\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u65E0\u8FDB\u4E00\u6B65\u4F18\u5316\u7A7A\u95F4\uFF09</li><li>\u95EE\u9898\u5728\u4E8E<strong>\u8FD0\u884C\u8017\u65F6\u957F\uFF0C\u4F1A\u963B\u585E\u4E3B\u7EBF\u7A0B</strong></li><li>\u76EE\u6807\u662F<strong>\u63D0\u5347\u54CD\u5E94\u6027\u3001\u4E0D\u5361\u987F</strong></li></ul><p>\u4F7F\u7528\u65B9\u5F0F\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// main.js</span></span>
<span class="line"><span style="color:#A6ACCD;">const worker = new Worker(&#39;worker.js&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">worker.postMessage(data); // \u4F20\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">worker.onmessage = (e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const result = e.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4F7F\u7528\u7ED3\u679C\u66F4\u65B0\u9875\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// worker.js</span></span>
<span class="line"><span style="color:#A6ACCD;">self.onmessage = (e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const result = heavyComputation(e.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">  self.postMessage(result);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6BD4\u5982\u4F7F\u7528canvas\u7ED8\u5236\u4E00\u4E2A\u9F20\u6807\u6ED1\u52A8\u8F68\u8FF9" tabindex="-1">\u6BD4\u5982\u4F7F\u7528canvas\u7ED8\u5236\u4E00\u4E2A\u9F20\u6807\u6ED1\u52A8\u8F68\u8FF9 <a class="header-anchor" href="#\u6BD4\u5982\u4F7F\u7528canvas\u7ED8\u5236\u4E00\u4E2A\u9F20\u6807\u6ED1\u52A8\u8F68\u8FF9" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;canvas id=&quot;canvas&quot; width=&quot;800&quot; height=&quot;600&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const canvas = document.getElementById(&#39;canvas&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const offscreen = canvas.transferControlToOffscreen();</span></span>
<span class="line"><span style="color:#A6ACCD;">  const worker = new Worker(&#39;worker.js&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  worker.postMessage({ type: &#39;init&#39;, canvas: offscreen }, [offscreen]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4E3B\u7EBF\u7A0B\u4EC5\u76D1\u542C\u9F20\u6807\u79FB\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">  canvas.addEventListener(&#39;mousemove&#39;, (e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker.postMessage({</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: &#39;draw&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      x: e.offsetX,</span></span>
<span class="line"><span style="color:#A6ACCD;">      y: e.offsetY</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// worder.js</span></span>
<span class="line"><span style="color:#A6ACCD;">let ctx;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">self.onmessage = function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { type, canvas, x, y } = e.data;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (type === &#39;init&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u62FF\u5230 OffscreenCanvas \u4E0A\u4E0B\u6587</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx = canvas.getContext(&#39;2d&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.strokeStyle = &#39;blue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.lineWidth = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.lineCap = &#39;round&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (type === &#39;draw&#39; &amp;&amp; ctx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.beginPath();</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.moveTo(x, y); // \u7B80\u5355\u793A\u4F8B\uFF1A\u7ED8\u70B9\uFF0C\u4E5F\u53EF\u4EE5\u4FDD\u5B58 lastX\u3001lastY \u8FDE\u7EBF</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.lineTo(x + 0.1, y + 0.1); // \u907F\u514D\u7A7A\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.stroke();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[p];function c(t,r,C,i,A,y){return a(),n("div",null,o)}const u=s(e,[["render",c]]);export{d as __pageData,u as default};
