import{_ as s,c as n,o as a,Q as e}from"./chunks/framework.ef145a76.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/typescript/is.md","filePath":"web/typescript/is.md"}'),p={name:"web/typescript/is.md"},l=e(`<p>在 TypeScript 中，<code>is</code> 关键字用于 <strong>类型谓词（Type Predicate）</strong>，通常用于自定义类型保护函数，使 TypeScript 能在条件判断中自动缩小变量的类型。</p><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function isString(value: unknown): value is string {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return typeof value === &#39;string&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function handle(val: unknown) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (isString(val)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 这里 val 自动变成 string 类型</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(val.toUpperCase());</span></span>
<span class="line"><span style="color:#e1e4e8;">  } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;不是字符串&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function isString(value: unknown): value is string {</span></span>
<span class="line"><span style="color:#24292e;">  return typeof value === &#39;string&#39;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function handle(val: unknown) {</span></span>
<span class="line"><span style="color:#24292e;">  if (isString(val)) {</span></span>
<span class="line"><span style="color:#24292e;">    // 这里 val 自动变成 string 类型</span></span>
<span class="line"><span style="color:#24292e;">    console.log(val.toUpperCase());</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;不是字符串&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="注意" tabindex="-1">注意： <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意：&quot;">​</a></h3><h4 id="is-只能用于返回值" tabindex="-1">is 只能用于返回值 <a class="header-anchor" href="#is-只能用于返回值" aria-label="Permalink to &quot;is 只能用于返回值&quot;">​</a></h4><h4 id="is-不能用于多个参数" tabindex="-1">is 不能用于多个参数 <a class="header-anchor" href="#is-不能用于多个参数" aria-label="Permalink to &quot;is 不能用于多个参数&quot;">​</a></h4><p>举例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function isStringAndNumber(x: unknown, y: unknown): x is string, y is number {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ❌ 错误语法，不允许多个 is 谓词</span></span>
<span class="line"><span style="color:#e1e4e8;">  return typeof x === &#39;string&#39; &amp;&amp; typeof y === &#39;number&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 正确替代方法</span></span>
<span class="line"><span style="color:#e1e4e8;">function isString(x: unknown): x is string {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return typeof x === &#39;string&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function isNumber(y: unknown): y is number {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return typeof y === &#39;number&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 在调用处组合使用</span></span>
<span class="line"><span style="color:#e1e4e8;">function example(x: unknown, y: unknown) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (isString(x) &amp;&amp; isNumber(y)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // x: string, y: number ✅ 类型已缩小</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(x.toUpperCase(), y.toFixed(2));</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function isStringAndNumber(x: unknown, y: unknown): x is string, y is number {</span></span>
<span class="line"><span style="color:#24292e;">  // ❌ 错误语法，不允许多个 is 谓词</span></span>
<span class="line"><span style="color:#24292e;">  return typeof x === &#39;string&#39; &amp;&amp; typeof y === &#39;number&#39;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 正确替代方法</span></span>
<span class="line"><span style="color:#24292e;">function isString(x: unknown): x is string {</span></span>
<span class="line"><span style="color:#24292e;">  return typeof x === &#39;string&#39;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function isNumber(y: unknown): y is number {</span></span>
<span class="line"><span style="color:#24292e;">  return typeof y === &#39;number&#39;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 在调用处组合使用</span></span>
<span class="line"><span style="color:#24292e;">function example(x: unknown, y: unknown) {</span></span>
<span class="line"><span style="color:#24292e;">  if (isString(x) &amp;&amp; isNumber(y)) {</span></span>
<span class="line"><span style="color:#24292e;">    // x: string, y: number ✅ 类型已缩小</span></span>
<span class="line"><span style="color:#24292e;">    console.log(x.toUpperCase(), y.toFixed(2));</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,8),o=[l];function c(t,i,r,y,u,d){return a(),n("div",null,o)}const f=s(p,[["render",c]]);export{m as __pageData,f as default};
