import{_ as s,c as n,o as a,d as e}from"./app.b8b79069.js";const l="/kun.github.io/assets/useSyncExternalStore.5c516b99.gif",D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981 useSyncExternalStore\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981-usesyncexternalstore","link":"#\u4E3A\u4EC0\u4E48\u9700\u8981-usesyncexternalstore","children":[]},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879","link":"#\u6CE8\u610F\u4E8B\u9879","children":[{"level":3,"title":"\u4EE3\u7801\u95EE\u9898\uFF1A","slug":"\u4EE3\u7801\u95EE\u9898","link":"#\u4EE3\u7801\u95EE\u9898","children":[]},{"level":3,"title":"1. callback \u6CA1\u6709\u7A33\u5B9A\u89E6\u53D1\u5FEB\u7167\u53D8\u66F4\u7684\u901A\u77E5","slug":"_1-callback-\u6CA1\u6709\u7A33\u5B9A\u89E6\u53D1\u5FEB\u7167\u53D8\u66F4\u7684\u901A\u77E5","link":"#_1-callback-\u6CA1\u6709\u7A33\u5B9A\u89E6\u53D1\u5FEB\u7167\u53D8\u66F4\u7684\u901A\u77E5","children":[]},{"level":3,"title":"2. \u5982\u4E0B\u5199\u6CD5\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u95EE\u9898","slug":"_2-\u5982\u4E0B\u5199\u6CD5\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u95EE\u9898","link":"#_2-\u5982\u4E0B\u5199\u6CD5\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u95EE\u9898","children":[]},{"level":3,"title":"3.subscribe\u8981\u548C\u4E00\u4E2A\u8BA2\u9605\u51FD\u6570\u76F8\u5173\u8054","slug":"_3-subscribe\u8981\u548C\u4E00\u4E2A\u8BA2\u9605\u51FD\u6570\u76F8\u5173\u8054","link":"#_3-subscribe\u8981\u548C\u4E00\u4E2A\u8BA2\u9605\u51FD\u6570\u76F8\u5173\u8054","children":[]},{"level":3,"title":"\u6700\u7EC8\u5199\u6CD5\u6539\u4E3A","slug":"\u6700\u7EC8\u5199\u6CD5\u6539\u4E3A","link":"#\u6700\u7EC8\u5199\u6CD5\u6539\u4E3A","children":[]}]}],"relativePath":"web/react/useSyncExternalStore.md"}'),p={name:"web/react/useSyncExternalStore.md"},o=e(`<p>\u5B98\u65B9\uFF1A<a href="https://zh-hans.react.dev/reference/react/useSyncExternalStore" target="_blank" rel="noreferrer">https://zh-hans.react.dev/reference/react/useSyncExternalStore</a></p><h2 id="\u4E3A\u4EC0\u4E48\u9700\u8981-usesyncexternalstore" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981 <code>useSyncExternalStore</code>\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981-usesyncexternalstore" aria-hidden="true">#</a></h2><p>\u5728 React 18 \u5F15\u5165\u5E76\u53D1\u7279\u6027\uFF08Concurrent Mode\uFF09\u4E4B\u540E\uFF0C\u539F\u6709\u7684\u5916\u90E8\u8BA2\u9605\u903B\u8F91\uFF08\u6BD4\u5982\u76F4\u63A5\u5728 <code>useEffect</code> \u4E2D\u8BA2\u9605 store\uFF09\u4F1A\u51FA\u73B0 <strong>\u5FEB\u7167\u4E0D\u4E00\u81F4\u7684\u95EE\u9898</strong>\uFF1A</p><ul><li>React \u6E32\u67D3\u7684\u662F\u65E7\u503C\uFF1B</li><li>\u6E32\u67D3\u671F\u95F4\u72B6\u6001\u53D8\u5316\u4E86\uFF1B</li><li>\u6700\u7EC8\u663E\u793A\u7684 UI \u4E0E\u5B9E\u9645\u72B6\u6001\u4E0D\u540C\uFF0C\u5BFC\u81F4 \u201C\u6495\u88C2\u201D\u3002</li></ul><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><p><code>subscribe</code>\uFF1A\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u6536\u4E00\u4E2A\u5355\u72EC\u7684 <code>callback</code> \u53C2\u6570\u5E76\u628A\u5B83\u8BA2\u9605\u5230 store \u4E0A\u3002\u5F53 store \u53D1\u751F\u6539\u53D8\u65F6\u4F1A\u8C03\u7528\u63D0\u4F9B\u7684 <code>callback</code>\uFF0C\u8FD9\u5C06\u5BFC\u81F4 React \u91CD\u65B0\u8C03\u7528 <code>getSnapshot</code> \u5E76\u5728\u9700\u8981\u7684\u65F6\u5019\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6\u3002<code>subscribe</code> \u51FD\u6570\u4F1A\u8FD4\u56DE\u6E05\u9664\u8BA2\u9605\u7684\u51FD\u6570\u3002</p></li><li><p><code>getSnapshot</code>\uFF1A\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE\u7EC4\u4EF6\u9700\u8981\u7684 store \u4E2D\u7684\u6570\u636E\u5FEB\u7167\u3002\u5728 store \u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u91CD\u590D\u8C03\u7528 <code>getSnapshot</code> \u5FC5\u987B\u8FD4\u56DE\u540C\u4E00\u4E2A\u503C\u3002\u5982\u679C store \u6539\u53D8\uFF0C\u5E76\u4E14\u8FD4\u56DE\u503C\u4E5F\u4E0D\u540C\u4E86\uFF08\u7528 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is" target="_blank" rel="noreferrer"><code>Object.is</code></a> \u6BD4\u8F83\uFF09\uFF0CReact \u5C31\u4F1A\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6\u3002</p></li><li><p><strong>\u53EF\u9009</strong> <code>getServerSnapshot</code>\uFF1A\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE store \u4E2D\u6570\u636E\u7684\u521D\u59CB\u5FEB\u7167\u3002\u5B83\u53EA\u4F1A\u5728\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\uFF0C\u4EE5\u53CA\u5728\u5BA2\u6237\u7AEF\u8FDB\u884C\u670D\u52A1\u7AEF\u6E32\u67D3\u5185\u5BB9\u7684\u6FC0\u6D3B\u65F6\u88AB\u7528\u5230\u3002\u5FEB\u7167\u5728\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u4E4B\u95F4\u5FC5\u987B\u76F8\u540C\uFF0C\u5B83\u901A\u5E38\u662F\u4ECE\u670D\u52A1\u7AEF\u5E8F\u5217\u5316\u5E76\u4F20\u5230\u5BA2\u6237\u7AEF\u7684\u3002\u5982\u679C\u4F60\u5FFD\u7565\u6B64\u53C2\u6570\uFF0C\u5728\u670D\u52A1\u7AEF\u6E32\u67D3\u8FD9\u4E2A\u7EC4\u4EF6\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002</p></li></ul><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><ol><li><code>getSnapshot</code> \u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u4E0D\u53EF\u53D8\u7684\u6570\u636E</li><li>\u7B2C\u4E09\u4E2A\u53C2\u6570<code>getServerSnapshot</code>\u9700\u8981\u5728\u786E\u4FDD\u5BA2\u6237\u7AEF\u521D\u59CB\u6E32\u67D3\u4E0E\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\u8FD4\u56DE\u5B8C\u5168\u76F8\u540C\u7684\u6570\u636E</li><li><code>subscribe</code>\xA0\u51FD\u6570\u53EF\u4EE5\u5199\u5230\u7EC4\u4EF6\u5916\u90E8\uFF0C\u4EE5\u514D\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6\u90FD\u88AB\u8C03\u7528</li></ol><h3 id="\u4EE3\u7801\u95EE\u9898" tabindex="-1">\u4EE3\u7801\u95EE\u9898\uFF1A <a class="header-anchor" href="#\u4EE3\u7801\u95EE\u9898" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import { useSyncExternalStore } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8BA2\u9605\u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.addEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return () =&gt; window.removeEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u83B7\u53D6\u5F53\u524D\u9F20\u6807\u4F4D\u7F6E\u5FEB\u7167</span></span>
<span class="line"><span style="color:#A6ACCD;">let x = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">let y = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function getPosition() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {x, y};</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">window.addEventListener(&quot;mousemove&quot;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  x = event.clientX</span></span>
<span class="line"><span style="color:#A6ACCD;">  y = event.clientY</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u83B7\u53D6\u670D\u52A1\u5668\u7AEF\u7684\u521D\u59CB\u503C\uFF08\u5728 SSR \u4E2D\u4F7F\u7528\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">function getServerSnapshot() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return { x: 0, y: 0 }; // \u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default function useSyncMousePosition() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return useSyncExternalStore(subscribe, getPosition, getServerSnapshot);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6BB5\u4EE3\u7801\u6709\u51E0\u4E2A\u95EE\u9898\uFF1A</p><h3 id="_1-callback-\u6CA1\u6709\u7A33\u5B9A\u89E6\u53D1\u5FEB\u7167\u53D8\u66F4\u7684\u901A\u77E5" tabindex="-1">1. callback \u6CA1\u6709\u7A33\u5B9A\u89E6\u53D1\u5FEB\u7167\u53D8\u66F4\u7684\u901A\u77E5 <a class="header-anchor" href="#_1-callback-\u6CA1\u6709\u7A33\u5B9A\u89E6\u53D1\u5FEB\u7167\u53D8\u66F4\u7684\u901A\u77E5" aria-hidden="true">#</a></h3><p>\u5728react\u4E2D\u8BA2\u9605\u4E8B\u4EF6\uFF0C\u8981\u4FDD\u8BC1\u6BCF\u6B21\u8BA2\u9605\u6267\u884C\u65F6\uFF0Ccallback\u5F15\u7528\u7684\u662F\u6700\u65B0\u7684\u4E8B\u4EF6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u9519\u8BEF\u5199\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	window.addEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">	return () =&gt; window.removeEventListener(&quot;mousemove&quot;, callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6539\u4E3A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	const handle = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		callback()</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	window.addEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#A6ACCD;">	return () =&gt; window.removeEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-\u5982\u4E0B\u5199\u6CD5\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u95EE\u9898" tabindex="-1">2. \u5982\u4E0B\u5199\u6CD5\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u95EE\u9898 <a class="header-anchor" href="#_2-\u5982\u4E0B\u5199\u6CD5\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u95EE\u9898" aria-hidden="true">#</a></h3><p>&quot;The result of getSnapshot should be cached to avoid an infinite loop&quot;</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u83B7\u53D6\u5F53\u524D\u9F20\u6807\u4F4D\u7F6E\u5FEB\u7167</span></span>
<span class="line"><span style="color:#A6ACCD;">let x = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">let y = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// ......</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u83B7\u53D6\u670D\u52A1\u5668\u7AEF\u7684\u521D\u59CB\u503C\uFF08\u5728 SSR \u4E2D\u4F7F\u7528\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">function getServerSnapshot() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return { x: 0, y: 0 }; // \u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5E94\u8BE5\u6539\u4E3A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let state: Position = { x: 0, y: 0 }; // \u4FDD\u6301\u5BF9\u8C61\u5F15\u7528\u7A33\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;">// ......</span></span>
<span class="line"><span style="color:#A6ACCD;">const getPosition = (): Position =&gt; state;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-subscribe\u8981\u548C\u4E00\u4E2A\u8BA2\u9605\u51FD\u6570\u76F8\u5173\u8054" tabindex="-1">3.subscribe\u8981\u548C\u4E00\u4E2A\u8BA2\u9605\u51FD\u6570\u76F8\u5173\u8054 <a class="header-anchor" href="#_3-subscribe\u8981\u548C\u4E00\u4E2A\u8BA2\u9605\u51FD\u6570\u76F8\u5173\u8054" aria-hidden="true">#</a></h3><p>\u274C\u5982\u6B64\u662F\u9519\u8BEF\u7684\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function subscribe(callback: () =&gt; void) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handle = (e: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (state.x !== e.clientX || state.y !== e.clientY) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      callback()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.addEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return () =&gt; window.removeEventListener(&quot;mousemove&quot;, handle);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u2714\u9700\u8981\u6539\u4E3A\u4E00\u4E2A\u8BA2\u9605\u6A21\u5F0F\uFF0C\u6765\u901A\u77E5\u6240\u6709\u8BA2\u9605\u8005\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const listeners = new Set&lt;() =&gt; void&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const subscribe = (callback: () =&gt; void) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handle = (e: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (state.x !== e.clientX || state.y !== e.clientY) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state = { x: e.clientX, y: e.clientY }; </span></span>
<span class="line"><span style="color:#A6ACCD;">      listeners.forEach(fn =&gt; fn());</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  listeners.add(callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.addEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listeners.delete(callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.removeEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u6700\u7EC8\u5199\u6CD5\u6539\u4E3A" tabindex="-1">\u6700\u7EC8\u5199\u6CD5\u6539\u4E3A <a class="header-anchor" href="#\u6700\u7EC8\u5199\u6CD5\u6539\u4E3A" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&#39;use client&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { useSyncExternalStore } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface Position {</span></span>
<span class="line"><span style="color:#A6ACCD;">  x: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  y: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let state: Position = { x: 0, y: 0 }; // \u4FDD\u6301\u5BF9\u8C61\u5F15\u7528\u7A33\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const getPosition = (): Position =&gt; state;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const getServerSnapshot = (): Position =&gt; state;  // ssr \u6E32\u67D3\u65F6\u7684\u5FEB\u7167</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const listeners = new Set&lt;() =&gt; void&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const subscribe = (callback: () =&gt; void) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handle = (e: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (state.x !== e.clientX || state.y !== e.clientY) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state = { x: e.clientX, y: e.clientY }; </span></span>
<span class="line"><span style="color:#A6ACCD;">      listeners.forEach(fn =&gt; fn());</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  listeners.add(callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.addEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listeners.delete(callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.removeEventListener(&#39;mousemove&#39;, handle);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default function useSyncMousePosition() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return useSyncExternalStore(subscribe, getPosition, getServerSnapshot);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&#39;use client&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import useSyncMousePosition from &quot;@/hooks/useSyncMousePosition&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default function MousePosition() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const position = useSyncMousePosition();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;div&gt;useSyncExternalStore \u9875\u9762\u5185\u5BB9 </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;\u5750\u6807{position.x}, {position.y}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+l+'" alt="useSyncExternalStore"></p>',30),t=[o];function c(i,r,C,A,d,y){return a(),n("div",null,t)}const h=s(p,[["render",c]]);export{D as __pageData,h as default};
