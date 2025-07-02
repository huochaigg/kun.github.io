import{_ as s,c as n,o as e,Q as a}from"./chunks/framework.ef145a76.js";const l="/kun.github.io/assets/useSyncExternalStore.5c516b99.gif",g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/react/useSyncExternalStore.md","filePath":"web/react/useSyncExternalStore.md"}'),p={name:"web/react/useSyncExternalStore.md"},o=a(`<p>官方：<a href="https://zh-hans.react.dev/reference/react/useSyncExternalStore" target="_blank" rel="noreferrer">https://zh-hans.react.dev/reference/react/useSyncExternalStore</a></p><h2 id="为什么需要-usesyncexternalstore" tabindex="-1">为什么需要 <code>useSyncExternalStore</code>？ <a class="header-anchor" href="#为什么需要-usesyncexternalstore" aria-label="Permalink to &quot;为什么需要 \`useSyncExternalStore\`？&quot;">​</a></h2><p>在 React 18 引入并发特性（Concurrent Mode）之后，原有的外部订阅逻辑（比如直接在 <code>useEffect</code> 中订阅 store）会出现 <strong>快照不一致的问题</strong>：</p><ul><li>React 渲染的是旧值；</li><li>渲染期间状态变化了；</li><li>最终显示的 UI 与实际状态不同，导致 “撕裂”。</li></ul><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><ul><li><p><code>subscribe</code>：一个函数，接收一个单独的 <code>callback</code> 参数并把它订阅到 store 上。当 store 发生改变时会调用提供的 <code>callback</code>，这将导致 React 重新调用 <code>getSnapshot</code> 并在需要的时候重新渲染组件。<code>subscribe</code> 函数会返回清除订阅的函数。</p></li><li><p><code>getSnapshot</code>：一个函数，返回组件需要的 store 中的数据快照。在 store 不变的情况下，重复调用 <code>getSnapshot</code> 必须返回同一个值。如果 store 改变，并且返回值也不同了（用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is" target="_blank" rel="noreferrer"><code>Object.is</code></a> 比较），React 就会重新渲染组件。</p></li><li><p><strong>可选</strong> <code>getServerSnapshot</code>：一个函数，返回 store 中数据的初始快照。它只会在服务端渲染时，以及在客户端进行服务端渲染内容的激活时被用到。快照在服务端与客户端之间必须相同，它通常是从服务端序列化并传到客户端的。如果你忽略此参数，在服务端渲染这个组件会抛出一个错误。</p></li></ul><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><code>getSnapshot</code> 需要返回一个不可变的数据</li><li>第三个参数<code>getServerSnapshot</code>需要在确保客户端初始渲染与服务端渲染时返回完全相同的数据</li><li><code>subscribe</code> 函数可以写到组件外部，以免每次重新渲染组件都被调用</li></ol><h3 id="代码问题" tabindex="-1">代码问题： <a class="header-anchor" href="#代码问题" aria-label="Permalink to &quot;代码问题：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { useSyncExternalStore } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 订阅鼠标移动事件</span></span>
<span class="line"><span style="color:#e1e4e8;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  window.addEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#e1e4e8;">  return () =&gt; window.removeEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 获取当前鼠标位置快照</span></span>
<span class="line"><span style="color:#e1e4e8;">let x = 0</span></span>
<span class="line"><span style="color:#e1e4e8;">let y = 0</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function getPosition() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return {x, y};</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">window.addEventListener(&quot;mousemove&quot;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  x = event.clientX</span></span>
<span class="line"><span style="color:#e1e4e8;">  y = event.clientY</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 获取服务器端的初始值（在 SSR 中使用）</span></span>
<span class="line"><span style="color:#e1e4e8;">function getServerSnapshot() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return { x: 0, y: 0 }; // 默认值</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default function useSyncMousePosition() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return useSyncExternalStore(subscribe, getPosition, getServerSnapshot);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { useSyncExternalStore } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 订阅鼠标移动事件</span></span>
<span class="line"><span style="color:#24292e;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#24292e;">  window.addEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#24292e;">  return () =&gt; window.removeEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 获取当前鼠标位置快照</span></span>
<span class="line"><span style="color:#24292e;">let x = 0</span></span>
<span class="line"><span style="color:#24292e;">let y = 0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function getPosition() {</span></span>
<span class="line"><span style="color:#24292e;">  return {x, y};</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">window.addEventListener(&quot;mousemove&quot;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  x = event.clientX</span></span>
<span class="line"><span style="color:#24292e;">  y = event.clientY</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 获取服务器端的初始值（在 SSR 中使用）</span></span>
<span class="line"><span style="color:#24292e;">function getServerSnapshot() {</span></span>
<span class="line"><span style="color:#24292e;">  return { x: 0, y: 0 }; // 默认值</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default function useSyncMousePosition() {</span></span>
<span class="line"><span style="color:#24292e;">  return useSyncExternalStore(subscribe, getPosition, getServerSnapshot);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这段代码有几个问题：</p><h3 id="_1-callback-没有稳定触发快照变更的通知" tabindex="-1">1. callback 没有稳定触发快照变更的通知 <a class="header-anchor" href="#_1-callback-没有稳定触发快照变更的通知" aria-label="Permalink to &quot;1. callback 没有稳定触发快照变更的通知&quot;">​</a></h3><p>在react中订阅事件，要保证每次订阅执行时，callback引用的是最新的事件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 错误写法</span></span>
<span class="line"><span style="color:#e1e4e8;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	window.addEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#e1e4e8;">	return () =&gt; window.removeEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 错误写法</span></span>
<span class="line"><span style="color:#24292e;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#24292e;">	window.addEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#24292e;">	return () =&gt; window.removeEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>改为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	const handle = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		callback()</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	window.addEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#e1e4e8;">	return () =&gt; window.removeEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#24292e;">	const handle = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		callback()</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	window.addEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#24292e;">	return () =&gt; window.removeEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_2-如下写法会导致死循环问题" tabindex="-1">2. 如下写法会导致死循环问题 <a class="header-anchor" href="#_2-如下写法会导致死循环问题" aria-label="Permalink to &quot;2. 如下写法会导致死循环问题&quot;">​</a></h3><p>&quot;The result of getSnapshot should be cached to avoid an infinite loop&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 获取当前鼠标位置快照</span></span>
<span class="line"><span style="color:#e1e4e8;">let x = 0</span></span>
<span class="line"><span style="color:#e1e4e8;">let y = 0</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// ......</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 获取服务器端的初始值（在 SSR 中使用）</span></span>
<span class="line"><span style="color:#e1e4e8;">function getServerSnapshot() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return { x: 0, y: 0 }; // 默认值</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 获取当前鼠标位置快照</span></span>
<span class="line"><span style="color:#24292e;">let x = 0</span></span>
<span class="line"><span style="color:#24292e;">let y = 0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// ......</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 获取服务器端的初始值（在 SSR 中使用）</span></span>
<span class="line"><span style="color:#24292e;">function getServerSnapshot() {</span></span>
<span class="line"><span style="color:#24292e;">  return { x: 0, y: 0 }; // 默认值</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>应该改为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let state: Position = { x: 0, y: 0 }; // 保持对象引用稳定</span></span>
<span class="line"><span style="color:#e1e4e8;">// ......</span></span>
<span class="line"><span style="color:#e1e4e8;">const getPosition = (): Position =&gt; state;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let state: Position = { x: 0, y: 0 }; // 保持对象引用稳定</span></span>
<span class="line"><span style="color:#24292e;">// ......</span></span>
<span class="line"><span style="color:#24292e;">const getPosition = (): Position =&gt; state;</span></span></code></pre></div><h3 id="_3-subscribe要和一个订阅函数相关联" tabindex="-1">3.subscribe要和一个订阅函数相关联 <a class="header-anchor" href="#_3-subscribe要和一个订阅函数相关联" aria-label="Permalink to &quot;3.subscribe要和一个订阅函数相关联&quot;">​</a></h3><p>❌如此是错误的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const handle = (e: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (state.x !== e.clientX || state.y !== e.clientY) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      callback()</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  window.addEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#e1e4e8;">  return () =&gt; window.removeEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#24292e;">  const handle = (e: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    if (state.x !== e.clientX || state.y !== e.clientY) {</span></span>
<span class="line"><span style="color:#24292e;">      callback()</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  window.addEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#24292e;">  return () =&gt; window.removeEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>✔需要改为一个订阅模式，来通知所有订阅者：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const listeners = new Set&lt;() =&gt; void&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const subscribe = (callback: () =&gt; void) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const handle = (e: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (state.x !== e.clientX || state.y !== e.clientY) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      state = { x: e.clientX, y: e.clientY }; </span></span>
<span class="line"><span style="color:#e1e4e8;">      listeners.forEach(fn =&gt; fn());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  listeners.add(callback);</span></span>
<span class="line"><span style="color:#e1e4e8;">  window.addEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#e1e4e8;">  return () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    listeners.delete(callback);</span></span>
<span class="line"><span style="color:#e1e4e8;">    window.removeEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const listeners = new Set&lt;() =&gt; void&gt;();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const subscribe = (callback: () =&gt; void) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const handle = (e: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    if (state.x !== e.clientX || state.y !== e.clientY) {</span></span>
<span class="line"><span style="color:#24292e;">      state = { x: e.clientX, y: e.clientY }; </span></span>
<span class="line"><span style="color:#24292e;">      listeners.forEach(fn =&gt; fn());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  listeners.add(callback);</span></span>
<span class="line"><span style="color:#24292e;">  window.addEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#24292e;">  return () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    listeners.delete(callback);</span></span>
<span class="line"><span style="color:#24292e;">    window.removeEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="最终写法改为" tabindex="-1">最终写法改为 <a class="header-anchor" href="#最终写法改为" aria-label="Permalink to &quot;最终写法改为&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&#39;use client&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import { useSyncExternalStore } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">interface Position {</span></span>
<span class="line"><span style="color:#e1e4e8;">  x: number;</span></span>
<span class="line"><span style="color:#e1e4e8;">  y: number;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">let state: Position = { x: 0, y: 0 }; // 保持对象引用稳定</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const getPosition = (): Position =&gt; state;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const getServerSnapshot = (): Position =&gt; state;  // ssr 渲染时的快照</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const listeners = new Set&lt;() =&gt; void&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const subscribe = (callback: () =&gt; void) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const handle = (e: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (state.x !== e.clientX || state.y !== e.clientY) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      state = { x: e.clientX, y: e.clientY }; </span></span>
<span class="line"><span style="color:#e1e4e8;">      listeners.forEach(fn =&gt; fn());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  listeners.add(callback);</span></span>
<span class="line"><span style="color:#e1e4e8;">  window.addEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#e1e4e8;">  return () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    listeners.delete(callback);</span></span>
<span class="line"><span style="color:#e1e4e8;">    window.removeEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default function useSyncMousePosition() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return useSyncExternalStore(subscribe, getPosition, getServerSnapshot);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&#39;use client&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import { useSyncExternalStore } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">interface Position {</span></span>
<span class="line"><span style="color:#24292e;">  x: number;</span></span>
<span class="line"><span style="color:#24292e;">  y: number;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let state: Position = { x: 0, y: 0 }; // 保持对象引用稳定</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const getPosition = (): Position =&gt; state;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const getServerSnapshot = (): Position =&gt; state;  // ssr 渲染时的快照</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const listeners = new Set&lt;() =&gt; void&gt;();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const subscribe = (callback: () =&gt; void) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const handle = (e: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    if (state.x !== e.clientX || state.y !== e.clientY) {</span></span>
<span class="line"><span style="color:#24292e;">      state = { x: e.clientX, y: e.clientY }; </span></span>
<span class="line"><span style="color:#24292e;">      listeners.forEach(fn =&gt; fn());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  listeners.add(callback);</span></span>
<span class="line"><span style="color:#24292e;">  window.addEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#24292e;">  return () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    listeners.delete(callback);</span></span>
<span class="line"><span style="color:#24292e;">    window.removeEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default function useSyncMousePosition() {</span></span>
<span class="line"><span style="color:#24292e;">  return useSyncExternalStore(subscribe, getPosition, getServerSnapshot);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&#39;use client&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import useSyncMousePosition from &quot;@/hooks/useSyncMousePosition&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default function MousePosition() {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  const position = useSyncMousePosition();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return &lt;div&gt;useSyncExternalStore 页面内容 </span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div&gt;坐标{position.x}, {position.y}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/div&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&#39;use client&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import useSyncMousePosition from &quot;@/hooks/useSyncMousePosition&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default function MousePosition() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  const position = useSyncMousePosition();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return &lt;div&gt;useSyncExternalStore 页面内容 </span></span>
<span class="line"><span style="color:#24292e;">    &lt;div&gt;坐标{position.x}, {position.y}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+l+'" alt="useSyncExternalStore"></p>',30),t=[o];function c(i,r,y,d,u,v){return e(),n("div",null,t)}const b=s(p,[["render",c]]);export{g as __pageData,b as default};
