import{_ as s,c as n,o as a,d as l}from"./app.b8b79069.js";const p="/kun.github.io/assets/useTransition1.79969639.gif",e="/kun.github.io/assets/useTransition2.615e6a8e.gif",d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"react18+ \u7ED3\u5408useTransition","slug":"react18-\u7ED3\u5408usetransition","link":"#react18-\u7ED3\u5408usetransition","children":[]}],"relativePath":"web/react/React.Suspense.md"}'),t={name:"web/react/React.Suspense.md"},o=l(`<h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import React, { Suspense, lazy } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const LazyComponent = lazy(() =&gt; import(&#39;./MyComponent&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;LazyComponent /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B50\u7EC4\u4EF6\u5FC5\u987B\u4F7F\u7528\u4E86 <strong>React \u652F\u6301\u7684\u5F02\u6B65\u5305\u88C5\u673A\u5236</strong>\uFF0C\u6BD4\u5982\uFF1A</p><ul><li><code>React.lazy()</code>\uFF08\u652F\u6301\u61D2\u52A0\u8F7D\u7EC4\u4EF6\uFF09</li><li>\u629B\u51FA Promise \u7684\u65B9\u5F0F\uFF08\u652F\u6301\u6570\u636E\u52A0\u8F7D\u6216\u81EA\u5B9A\u4E49 suspense\uFF09</li></ul><p>\u8FD9\u6837\uFF0CSuspense\u5C31\u80FD\u8BC6\u522B\u5230\u5B50\u7EC4\u4EF6\u662F\u5426\u8FD8\u672A\u51C6\u5907\u597D\uFF0C\u6CA1\u6709\u5C31\u5C55\u793A\u4E00\u4E2Afallback\u7684\u5360\u4F4D\u3002</p><h2 id="react18-\u7ED3\u5408usetransition" tabindex="-1">react18+ \u7ED3\u5408useTransition <a class="header-anchor" href="#react18-\u7ED3\u5408usetransition" aria-hidden="true">#</a></h2><p>useTransition \u53EF\u4EE5\u628A\u4E00\u4E9B\u66F4\u65B0\u8BBE\u7F6E\u4E3A\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u6BD4\u5982\u8BF4\u5927\u91CF\u6570\u636E\u6E32\u67D3\uFF0C\u4F1A\u963B\u585E\u5176\u4ED6\u64CD\u4F5C\uFF0C</p><p>\u4F8B\u5982\uFF0C\u6A21\u62DF\u5B9E\u73B0\u4E00\u4E2A\u8F93\u5165\u8FC7\u6EE4\u67E5\u8BE2\u7684\u4F8B\u5B50\uFF1A</p><p>\u65E7\u7248\u672C\u5B9E\u73B0\uFF0C\u4F1A\u51FA\u73B0\u963B\u585E\u8F93\u5165\u5361\u987F\u7684\u73B0\u8C61</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&#39;use client&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import React, { useState } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const items = Array.from({ length: 10000 }, (_, i) =&gt; \`Item \${i}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface FilteredListProps {</span></span>
<span class="line"><span style="color:#A6ACCD;">  query: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function FilteredList({ query }: FilteredListProps) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6A21\u62DF\u91CD\u8BA1\u7B97\u5EF6\u8FDF</span></span>
<span class="line"><span style="color:#A6ACCD;">  const now = performance.now();</span></span>
<span class="line"><span style="color:#A6ACCD;">  while (performance.now() - now &lt; 50); // \u963B\u585E 50ms</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const filtered = items.filter(item =&gt; item.includes(query));</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {filtered.slice(0, 100).map(item =&gt; &lt;li key={item}&gt;{item}&lt;/li&gt;)}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default function OldApp() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [query, setQuery] = useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  function handleChange(e: React.ChangeEvent&lt;HTMLInputElement&gt;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setQuery(e.target.value); // \u6BCF\u6B21\u8F93\u5165\u90FD\u4F1A\u7ACB\u5373\u91CD\u65B0\u6E32\u67D3 FilteredList</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h2&gt;\u65E7\u7248\u672C\uFF08\u65E0 useTransition\uFF09&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input value={query} onChange={handleChange} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;FilteredList query={query} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+p+`" alt="useTransition"></p><p>\u65B0\u7248\u672C\u7ED3\u5408useTransition\u5B9E\u73B0\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import React, { useState, useTransition, Suspense, FC } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u751F\u6210\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">const items = Array.from({ length: 10000 }, (_, i) =&gt; \`Item \${i}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6A21\u62DF\u91CD\u8BA1\u7B97\u7EC4\u4EF6\uFF08\u652F\u6301 Suspense\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">const FilteredList: FC&lt;{ query: string }&gt; = ({ query }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6A21\u62DF\u5EF6\u8FDF\uFF08\u8BA1\u7B97\u578B\u4EFB\u52A1\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">  const now = performance.now();</span></span>
<span class="line"><span style="color:#A6ACCD;">  while (performance.now() - now &lt; 50); // \u963B\u585E 50ms</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const filtered = items.filter((item) =&gt; item.includes(query));</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {filtered.slice(0, 100).map((item) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;li key={item}&gt;{item}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ))}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5EF6\u8FDF\u52A0\u8F7D\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">const SlowFilter: FC&lt;{ query: string }&gt; = ({ query }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Suspense fallback={&lt;div&gt;\u5217\u8868\u52A0\u8F7D\u4E2D...&lt;/div&gt;}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;FilteredList query={query} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E3B\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">const NewApp: FC = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [query, setQuery] = useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [search, setSearch] = useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [isPending, startTransition] = useTransition();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const val = e.target.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">    setQuery(val); // \u9AD8\u4F18\u5148\u7EA7\uFF1A\u7528\u6237\u8F93\u5165\u5B9E\u65F6\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">    startTransition(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setSearch(val); // \u4F4E\u4F18\u5148\u7EA7\uFF1A\u5217\u8868\u7B5B\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h2&gt;\u65B0\u7248\u672C\uFF08React 18+ useTransition + Suspense\uFF09&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input value={query} onChange={handleChange} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {isPending &amp;&amp; &lt;p style={{ color: &#39;gray&#39; }}&gt;\u7B5B\u9009\u4E2D...&lt;/p&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;SlowFilter query={search} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default NewApp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+e+'" alt="useTransition"></p>',14),c=[o];function i(r,C,A,y,D,u){return a(),n("div",null,c)}const m=s(t,[["render",i]]);export{d as __pageData,m as default};
