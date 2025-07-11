import{_ as s,c as e,o as n,Q as a}from"./chunks/framework.ef145a76.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/javascript/webworker.md","filePath":"web/javascript/webworker.md"}'),l={name:"web/javascript/webworker.md"},p=a(`<h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 主线程文件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const worker = new Worker(&#39;./worker.js&#39;); // 加载 worker 脚本</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">worker.postMessage({ a: 5, b: 10 }); // 向 worker 发送数据</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">worker.onmessage = (event) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&#39;主线程收到结果：&#39;, event.data); // 处理 worker 回传的结果</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 主线程文件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const worker = new Worker(&#39;./worker.js&#39;); // 加载 worker 脚本</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">worker.postMessage({ a: 5, b: 10 }); // 向 worker 发送数据</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">worker.onmessage = (event) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;主线程收到结果：&#39;, event.data); // 处理 worker 回传的结果</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// worker.js</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 接收主线程的消息</span></span>
<span class="line"><span style="color:#e1e4e8;">onmessage = function (event) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const { a, b } = event.data;</span></span>
<span class="line"><span style="color:#e1e4e8;">  const result = a + b;</span></span>
<span class="line"><span style="color:#e1e4e8;">  postMessage(result); // 返回结果给主线程</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// worker.js</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 接收主线程的消息</span></span>
<span class="line"><span style="color:#24292e;">onmessage = function (event) {</span></span>
<span class="line"><span style="color:#24292e;">  const { a, b } = event.data;</span></span>
<span class="line"><span style="color:#24292e;">  const result = a + b;</span></span>
<span class="line"><span style="color:#24292e;">  postMessage(result); // 返回结果给主线程</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="如果一个-worker-处理多个事件类型呢" tabindex="-1">如果一个 Worker 处理多个事件类型呢？ <a class="header-anchor" href="#如果一个-worker-处理多个事件类型呢" aria-label="Permalink to &quot;如果一个 Worker 处理多个事件类型呢？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// worker.js</span></span>
<span class="line"><span style="color:#e1e4e8;">self.addEventListener(&#39;message&#39;, (e) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const { type, payload } = e.data;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  if (type === &#39;sum&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const result = payload.numbers.reduce((a, b) =&gt; a + b, 0);</span></span>
<span class="line"><span style="color:#e1e4e8;">    self.postMessage({ type: &#39;sum-result&#39;, result });</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  else if (type === &#39;average&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const total = payload.numbers.reduce((a, b) =&gt; a + b, 0);</span></span>
<span class="line"><span style="color:#e1e4e8;">    const avg = total / payload.numbers.length;</span></span>
<span class="line"><span style="color:#e1e4e8;">    self.postMessage({ type: &#39;average-result&#39;, result: avg });</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  else {</span></span>
<span class="line"><span style="color:#e1e4e8;">    self.postMessage({ type: &#39;error&#39;, message: &#39;Unknown type&#39; });</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// worker.js</span></span>
<span class="line"><span style="color:#24292e;">self.addEventListener(&#39;message&#39;, (e) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const { type, payload } = e.data;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  if (type === &#39;sum&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    const result = payload.numbers.reduce((a, b) =&gt; a + b, 0);</span></span>
<span class="line"><span style="color:#24292e;">    self.postMessage({ type: &#39;sum-result&#39;, result });</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  else if (type === &#39;average&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    const total = payload.numbers.reduce((a, b) =&gt; a + b, 0);</span></span>
<span class="line"><span style="color:#24292e;">    const avg = total / payload.numbers.length;</span></span>
<span class="line"><span style="color:#24292e;">    self.postMessage({ type: &#39;average-result&#39;, result: avg });</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  else {</span></span>
<span class="line"><span style="color:#24292e;">    self.postMessage({ type: &#39;error&#39;, message: &#39;Unknown type&#39; });</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const worker = new Worker(&#39;./worker.js&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 监听返回的结果</span></span>
<span class="line"><span style="color:#e1e4e8;">worker.onmessage = (e) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const { type, result, message } = e.data;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  if (type === &#39;sum-result&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;总和:&#39;, result);</span></span>
<span class="line"><span style="color:#e1e4e8;">  } else if (type === &#39;average-result&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;平均值:&#39;, result);</span></span>
<span class="line"><span style="color:#e1e4e8;">  } else if (type === &#39;error&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.error(&#39;Worker 错误:&#39;, message);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 发送不同任务</span></span>
<span class="line"><span style="color:#e1e4e8;">worker.postMessage({ type: &#39;sum&#39;, payload: { numbers: [1, 2, 3, 4, 5] } });</span></span>
<span class="line"><span style="color:#e1e4e8;">worker.postMessage({ type: &#39;average&#39;, payload: { numbers: [10, 20, 30] } });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const worker = new Worker(&#39;./worker.js&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 监听返回的结果</span></span>
<span class="line"><span style="color:#24292e;">worker.onmessage = (e) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const { type, result, message } = e.data;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  if (type === &#39;sum-result&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;总和:&#39;, result);</span></span>
<span class="line"><span style="color:#24292e;">  } else if (type === &#39;average-result&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;平均值:&#39;, result);</span></span>
<span class="line"><span style="color:#24292e;">  } else if (type === &#39;error&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    console.error(&#39;Worker 错误:&#39;, message);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 发送不同任务</span></span>
<span class="line"><span style="color:#24292e;">worker.postMessage({ type: &#39;sum&#39;, payload: { numbers: [1, 2, 3, 4, 5] } });</span></span>
<span class="line"><span style="color:#24292e;">worker.postMessage({ type: &#39;average&#39;, payload: { numbers: [10, 20, 30] } });</span></span></code></pre></div>`,6),o=[p];function t(c,r,i,y,d,g){return n(),e("div",null,o)}const b=s(l,[["render",t]]);export{k as __pageData,b as default};
