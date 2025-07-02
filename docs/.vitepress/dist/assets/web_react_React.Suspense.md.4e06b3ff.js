import{_ as s,c as n,o as e,Q as a}from"./chunks/framework.ef145a76.js";const l="/kun.github.io/assets/useTransition1.79969639.gif",p="/kun.github.io/assets/useTransition2.615e6a8e.gif",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/react/React.Suspense.md","filePath":"web/react/React.Suspense.md"}'),t={name:"web/react/React.Suspense.md"},o=a(`<h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, { Suspense, lazy } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const LazyComponent = lazy(() =&gt; import(&#39;./MyComponent&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default function App() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return (</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;LazyComponent /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, { Suspense, lazy } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const LazyComponent = lazy(() =&gt; import(&#39;./MyComponent&#39;));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default function App() {</span></span>
<span class="line"><span style="color:#24292e;">  return (</span></span>
<span class="line"><span style="color:#24292e;">    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;LazyComponent /&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>子组件必须使用了 <strong>React 支持的异步包装机制</strong>，比如：</p><ul><li><code>React.lazy()</code>（支持懒加载组件）</li><li>抛出 Promise 的方式（支持数据加载或自定义 suspense）</li></ul><p>这样，Suspense就能识别到子组件是否还未准备好，没有就展示一个fallback的占位。</p><h2 id="react18-结合usetransition" tabindex="-1">react18+ 结合useTransition <a class="header-anchor" href="#react18-结合usetransition" aria-label="Permalink to &quot;react18+ 结合useTransition&quot;">​</a></h2><p>useTransition 可以把一些更新设置为低优先级的任务，比如说大量数据渲染，会阻塞其他操作，</p><p>例如，模拟实现一个输入过滤查询的例子：</p><p>旧版本实现，会出现阻塞输入卡顿的现象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&#39;use client&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import React, { useState } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const items = Array.from({ length: 10000 }, (_, i) =&gt; \`Item \${i}\`);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">interface FilteredListProps {</span></span>
<span class="line"><span style="color:#e1e4e8;">  query: string;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function FilteredList({ query }: FilteredListProps) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 模拟重计算延迟</span></span>
<span class="line"><span style="color:#e1e4e8;">  const now = performance.now();</span></span>
<span class="line"><span style="color:#e1e4e8;">  while (performance.now() - now &lt; 50); // 阻塞 50ms</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  const filtered = items.filter(item =&gt; item.includes(query));</span></span>
<span class="line"><span style="color:#e1e4e8;">  return (</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      {filtered.slice(0, 100).map(item =&gt; &lt;li key={item}&gt;{item}&lt;/li&gt;)}</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default function OldApp() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const [query, setQuery] = useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  function handleChange(e: React.ChangeEvent&lt;HTMLInputElement&gt;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    setQuery(e.target.value); // 每次输入都会立即重新渲染 FilteredList</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return (</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;h2&gt;旧版本（无 useTransition）&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;input value={query} onChange={handleChange} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;FilteredList query={query} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&#39;use client&#39;;</span></span>
<span class="line"><span style="color:#24292e;">import React, { useState } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const items = Array.from({ length: 10000 }, (_, i) =&gt; \`Item \${i}\`);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">interface FilteredListProps {</span></span>
<span class="line"><span style="color:#24292e;">  query: string;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function FilteredList({ query }: FilteredListProps) {</span></span>
<span class="line"><span style="color:#24292e;">  // 模拟重计算延迟</span></span>
<span class="line"><span style="color:#24292e;">  const now = performance.now();</span></span>
<span class="line"><span style="color:#24292e;">  while (performance.now() - now &lt; 50); // 阻塞 50ms</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  const filtered = items.filter(item =&gt; item.includes(query));</span></span>
<span class="line"><span style="color:#24292e;">  return (</span></span>
<span class="line"><span style="color:#24292e;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">      {filtered.slice(0, 100).map(item =&gt; &lt;li key={item}&gt;{item}&lt;/li&gt;)}</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default function OldApp() {</span></span>
<span class="line"><span style="color:#24292e;">  const [query, setQuery] = useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  function handleChange(e: React.ChangeEvent&lt;HTMLInputElement&gt;) {</span></span>
<span class="line"><span style="color:#24292e;">    setQuery(e.target.value); // 每次输入都会立即重新渲染 FilteredList</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return (</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;h2&gt;旧版本（无 useTransition）&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;input value={query} onChange={handleChange} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;FilteredList query={query} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+l+`" alt="useTransition"></p><p>新版本结合useTransition实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, { useState, useTransition, Suspense, FC } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 生成数据</span></span>
<span class="line"><span style="color:#e1e4e8;">const items = Array.from({ length: 10000 }, (_, i) =&gt; \`Item \${i}\`);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 模拟重计算组件（支持 Suspense）</span></span>
<span class="line"><span style="color:#e1e4e8;">const FilteredList: FC&lt;{ query: string }&gt; = ({ query }) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 模拟延迟（计算型任务）</span></span>
<span class="line"><span style="color:#e1e4e8;">  const now = performance.now();</span></span>
<span class="line"><span style="color:#e1e4e8;">  while (performance.now() - now &lt; 50); // 阻塞 50ms</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  const filtered = items.filter((item) =&gt; item.includes(query));</span></span>
<span class="line"><span style="color:#e1e4e8;">  return (</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      {filtered.slice(0, 100).map((item) =&gt; (</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;li key={item}&gt;{item}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      ))}</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 延迟加载组件</span></span>
<span class="line"><span style="color:#e1e4e8;">const SlowFilter: FC&lt;{ query: string }&gt; = ({ query }) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return (</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;Suspense fallback={&lt;div&gt;列表加载中...&lt;/div&gt;}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;FilteredList query={query} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 主组件</span></span>
<span class="line"><span style="color:#e1e4e8;">const NewApp: FC = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const [query, setQuery] = useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  const [search, setSearch] = useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  const [isPending, startTransition] = useTransition();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const val = e.target.value;</span></span>
<span class="line"><span style="color:#e1e4e8;">    setQuery(val); // 高优先级：用户输入实时更新</span></span>
<span class="line"><span style="color:#e1e4e8;">    startTransition(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      setSearch(val); // 低优先级：列表筛选</span></span>
<span class="line"><span style="color:#e1e4e8;">    });</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return (</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;h2&gt;新版本（React 18+ useTransition + Suspense）&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;input value={query} onChange={handleChange} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      {isPending &amp;&amp; &lt;p style={{ color: &#39;gray&#39; }}&gt;筛选中...&lt;/p&gt;}</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;SlowFilter query={search} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default NewApp;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, { useState, useTransition, Suspense, FC } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 生成数据</span></span>
<span class="line"><span style="color:#24292e;">const items = Array.from({ length: 10000 }, (_, i) =&gt; \`Item \${i}\`);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 模拟重计算组件（支持 Suspense）</span></span>
<span class="line"><span style="color:#24292e;">const FilteredList: FC&lt;{ query: string }&gt; = ({ query }) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  // 模拟延迟（计算型任务）</span></span>
<span class="line"><span style="color:#24292e;">  const now = performance.now();</span></span>
<span class="line"><span style="color:#24292e;">  while (performance.now() - now &lt; 50); // 阻塞 50ms</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  const filtered = items.filter((item) =&gt; item.includes(query));</span></span>
<span class="line"><span style="color:#24292e;">  return (</span></span>
<span class="line"><span style="color:#24292e;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">      {filtered.slice(0, 100).map((item) =&gt; (</span></span>
<span class="line"><span style="color:#24292e;">        &lt;li key={item}&gt;{item}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">      ))}</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 延迟加载组件</span></span>
<span class="line"><span style="color:#24292e;">const SlowFilter: FC&lt;{ query: string }&gt; = ({ query }) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return (</span></span>
<span class="line"><span style="color:#24292e;">    &lt;Suspense fallback={&lt;div&gt;列表加载中...&lt;/div&gt;}&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;FilteredList query={query} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 主组件</span></span>
<span class="line"><span style="color:#24292e;">const NewApp: FC = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const [query, setQuery] = useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  const [search, setSearch] = useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  const [isPending, startTransition] = useTransition();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    const val = e.target.value;</span></span>
<span class="line"><span style="color:#24292e;">    setQuery(val); // 高优先级：用户输入实时更新</span></span>
<span class="line"><span style="color:#24292e;">    startTransition(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">      setSearch(val); // 低优先级：列表筛选</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return (</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;h2&gt;新版本（React 18+ useTransition + Suspense）&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;input value={query} onChange={handleChange} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">      {isPending &amp;&amp; &lt;p style={{ color: &#39;gray&#39; }}&gt;筛选中...&lt;/p&gt;}</span></span>
<span class="line"><span style="color:#24292e;">      &lt;SlowFilter query={search} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default NewApp;</span></span></code></pre></div><p><img src="`+p+'" alt="useTransition"></p>',14),c=[o];function i(r,y,u,g,d,m){return e(),n("div",null,c)}const v=s(t,[["render",i]]);export{f as __pageData,v as default};
