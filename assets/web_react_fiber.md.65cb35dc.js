import{_ as s,c as n,o as e,Q as a}from"./chunks/framework.ef145a76.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/react/fiber.md","filePath":"web/react/fiber.md"}'),l={name:"web/react/fiber.md"},p=a(`<p>推荐参考： <a href="https://zhuanlan.zhihu.com/p/525244896" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/525244896</a> // 这一篇讲的很详细</p><h2 id="react-15-以前" tabindex="-1">React 15（以前） <a class="header-anchor" href="#react-15-以前" aria-label="Permalink to &quot;React 15（以前）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function render(node) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  render(node.child);</span></span>
<span class="line"><span style="color:#e1e4e8;">  render(node.sibling);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function render(node) {</span></span>
<span class="line"><span style="color:#24292e;">  render(node.child);</span></span>
<span class="line"><span style="color:#24292e;">  render(node.sibling);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>渲染采用递归遍历组件树, 问题：<strong>递归调用不可中断，栈帧一层层压入，直到完成为止</strong>。如果组件树很深或更新太多，会卡死主线程。</p><p>React 16+ Fiber 架构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let nextUnitOfWork = fiberRoot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function workLoop(deadline) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  while (nextUnitOfWork &amp;&amp; deadline.timeRemaining() &gt; 1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  if (nextUnitOfWork) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    requestIdleCallback(workLoop); // 暂停：下次空闲再继续</span></span>
<span class="line"><span style="color:#e1e4e8;">  } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">    commitRoot(); // 所有完成后提交</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let nextUnitOfWork = fiberRoot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function workLoop(deadline) {</span></span>
<span class="line"><span style="color:#24292e;">  while (nextUnitOfWork &amp;&amp; deadline.timeRemaining() &gt; 1) {</span></span>
<span class="line"><span style="color:#24292e;">    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  if (nextUnitOfWork) {</span></span>
<span class="line"><span style="color:#24292e;">    requestIdleCallback(workLoop); // 暂停：下次空闲再继续</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">    commitRoot(); // 所有完成后提交</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>将递归「变成循环」+「每次执行一个小单元」</li><li>每个小单元就是一个 <code>FiberNode</code></li></ul><p>这就是 <strong>可以中断、恢复、调度控制的核心</strong>：递归 → 循环 + 可暂停调度器</p><h2 id="fiber-是为了解决哪些问题" tabindex="-1">Fiber 是为了解决哪些问题？ <a class="header-anchor" href="#fiber-是为了解决哪些问题" aria-label="Permalink to &quot;Fiber 是为了解决哪些问题？&quot;">​</a></h2><ul><li><strong>无法中断的渲染流程：</strong><ul><li>React 15 及以前版本一旦开始渲染组件树，必须一次性完成，容易卡顿。</li></ul></li><li><strong>不支持优先级调度：</strong><ul><li>所有更新一视同仁，无法先处理高优先级任务，比如用户输入、动画。</li></ul></li><li><strong>并发渲染难以实现：</strong><ul><li>之前架构不支持异步更新，无法适配现代需求。</li></ul></li></ul>`,10),o=[p];function t(i,r,c,d,h,f){return e(),n("div",null,o)}const b=s(l,[["render",t]]);export{y as __pageData,b as default};
