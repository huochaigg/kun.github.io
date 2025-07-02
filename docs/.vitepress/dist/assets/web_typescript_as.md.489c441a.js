import{_ as s,c as n,o as e,Q as a}from"./chunks/framework.ef145a76.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/typescript/as.md","filePath":"web/typescript/as.md"}'),l={name:"web/typescript/as.md"},p=a(`<p>在 TypeScript 中，<code>as</code> 是 <strong>类型断言（Type Assertion）</strong> 的关键字，用于告诉编译器，你很确定这个值是某个类型，它不会做任何 <strong>类型转换</strong>，只是用来 <strong>辅助编译器理解类型</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let str = &quot;123&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">let num = str as unknown as number;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let str = &quot;123&quot;;</span></span>
<span class="line"><span style="color:#24292e;">let num = str as unknown as number;</span></span></code></pre></div><p>这 <strong>不是把字符串转换成数字</strong>，只是编译器认为 <code>num</code> 是 <code>number</code> 类型。但运行时它仍然是 <code>&quot;123&quot;</code> 字符串</p><h2 id="类型断言的常见用法" tabindex="-1">类型断言的常见用法 <a class="header-anchor" href="#类型断言的常见用法" aria-label="Permalink to &quot;类型断言的常见用法&quot;">​</a></h2><h3 id="缩小类型范围-类型收窄" tabindex="-1">缩小类型范围（类型收窄） <a class="header-anchor" href="#缩小类型范围-类型收窄" aria-label="Permalink to &quot;缩小类型范围（类型收窄）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function handle(value: string | number) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if ((value as string).toUpperCase) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log((value as string).toUpperCase());</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function handle(value: string | number) {</span></span>
<span class="line"><span style="color:#24292e;">  if ((value as string).toUpperCase) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log((value as string).toUpperCase());</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="将-dom-类型断言为具体元素类型" tabindex="-1">将 DOM 类型断言为具体元素类型 <a class="header-anchor" href="#将-dom-类型断言为具体元素类型" aria-label="Permalink to &quot;将 DOM 类型断言为具体元素类型&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const input = document.querySelector(&#39;input&#39;) as HTMLInputElement;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(input.value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const input = document.querySelector(&#39;input&#39;) as HTMLInputElement;</span></span>
<span class="line"><span style="color:#24292e;">console.log(input.value);</span></span></code></pre></div><p>不加 <code>as</code>，<code>querySelector</code> 只能推断为 <code>Element | null</code>，没有 <code>.value</code> 属性</p><h3 id="和-unknown-联合使用" tabindex="-1">和 <code>unknown</code> 联合使用 <a class="header-anchor" href="#和-unknown-联合使用" aria-label="Permalink to &quot;和 \`unknown\` 联合使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function parseData(data: string): unknown {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return JSON.parse(data);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const result = parseData(&#39;{&quot;name&quot;: &quot;Tom&quot;}&#39;) as { name: string };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function parseData(data: string): unknown {</span></span>
<span class="line"><span style="color:#24292e;">  return JSON.parse(data);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const result = parseData(&#39;{&quot;name&quot;: &quot;Tom&quot;}&#39;) as { name: string };</span></span></code></pre></div><h2 id="as-const-是-as-的特殊形式" tabindex="-1"><code>as const</code> 是 <code>as</code> 的特殊形式 <a class="header-anchor" href="#as-const-是-as-的特殊形式" aria-label="Permalink to &quot;\`as const\` 是 \`as\` 的特殊形式&quot;">​</a></h2><p><code>as const</code> 是断言为最窄字面量类型 + readonly 的语法糖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const arr = [1, 2, 3] as const;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 类型是 readonly [1, 2, 3]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const arr = [1, 2, 3] as const;</span></span>
<span class="line"><span style="color:#24292e;">// 类型是 readonly [1, 2, 3]</span></span></code></pre></div><h2 id="注意" tabindex="-1">注意： <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意：&quot;">​</a></h2><p>滥用断言引起的问题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const el = document.querySelector(&#39;input&#39;) as HTMLDivElement; // 错误但编译器不报错，这样不安全</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const el = document.querySelector(&#39;input&#39;) as HTMLDivElement; // 错误但编译器不报错，这样不安全</span></span></code></pre></div><p>解决方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const el = document.querySelector(&#39;input&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">if (el instanceof HTMLInputElement) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 现在 el 的类型会自动缩小为 HTMLInputElement</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(el.value);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 或封装成类型方法</span></span>
<span class="line"><span style="color:#e1e4e8;">function queryInput(selector: string): HTMLInputElement | null {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const el = document.querySelector(selector);</span></span>
<span class="line"><span style="color:#e1e4e8;">  return el instanceof HTMLInputElement ? el : null;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const input = queryInput(&#39;input&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">if (input) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(input.value);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const el = document.querySelector(&#39;input&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">if (el instanceof HTMLInputElement) {</span></span>
<span class="line"><span style="color:#24292e;">  // 现在 el 的类型会自动缩小为 HTMLInputElement</span></span>
<span class="line"><span style="color:#24292e;">  console.log(el.value);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 或封装成类型方法</span></span>
<span class="line"><span style="color:#24292e;">function queryInput(selector: string): HTMLInputElement | null {</span></span>
<span class="line"><span style="color:#24292e;">  const el = document.querySelector(selector);</span></span>
<span class="line"><span style="color:#24292e;">  return el instanceof HTMLInputElement ? el : null;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const input = queryInput(&#39;input&#39;);</span></span>
<span class="line"><span style="color:#24292e;">if (input) {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(input.value);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="as重映射键名" tabindex="-1">as重映射键名 <a class="header-anchor" href="#as重映射键名" aria-label="Permalink to &quot;as重映射键名&quot;">​</a></h2><p>语法：<code>as</code> + <code>keyof</code> + 模板字面量类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">type RenameKeys&lt;T&gt; = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  [K in keyof T as \`new_\${string &amp; K}\`]: T[K];</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">type RenameKeys&lt;T&gt; = {</span></span>
<span class="line"><span style="color:#24292e;">  [K in keyof T as \`new_\${string &amp; K}\`]: T[K];</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>删除某些键，注意这里extends的用法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">type Original = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  id: number;</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: string;</span></span>
<span class="line"><span style="color:#e1e4e8;">  password: string;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 只保留非 password 的字段</span></span>
<span class="line"><span style="color:#e1e4e8;">type WithoutPassword = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  [K in keyof Original as K extends &quot;password&quot; ? never : K]: Original[K];</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 得到：</span></span>
<span class="line"><span style="color:#e1e4e8;">/*</span></span>
<span class="line"><span style="color:#e1e4e8;">type WithoutPassword = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  id: number;</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: string;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">type Original = {</span></span>
<span class="line"><span style="color:#24292e;">  id: number;</span></span>
<span class="line"><span style="color:#24292e;">  name: string;</span></span>
<span class="line"><span style="color:#24292e;">  password: string;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 只保留非 password 的字段</span></span>
<span class="line"><span style="color:#24292e;">type WithoutPassword = {</span></span>
<span class="line"><span style="color:#24292e;">  [K in keyof Original as K extends &quot;password&quot; ? never : K]: Original[K];</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 得到：</span></span>
<span class="line"><span style="color:#24292e;">/*</span></span>
<span class="line"><span style="color:#24292e;">type WithoutPassword = {</span></span>
<span class="line"><span style="color:#24292e;">  id: number;</span></span>
<span class="line"><span style="color:#24292e;">  name: string;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span></code></pre></div><h3 id="将所有字段变为大写键名" tabindex="-1">将所有字段变为大写键名 <a class="header-anchor" href="#将所有字段变为大写键名" aria-label="Permalink to &quot;将所有字段变为大写键名&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">type Original = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  foo: number;</span></span>
<span class="line"><span style="color:#e1e4e8;">  barBaz: string;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type UppercaseKeys = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  [K in keyof Original as Uppercase&lt;string &amp; K&gt;]: Original[K];</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 得到：</span></span>
<span class="line"><span style="color:#e1e4e8;">/*</span></span>
<span class="line"><span style="color:#e1e4e8;">type UppercaseKeys = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  FOO: number;</span></span>
<span class="line"><span style="color:#e1e4e8;">  BARBAZ: string;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">type Original = {</span></span>
<span class="line"><span style="color:#24292e;">  foo: number;</span></span>
<span class="line"><span style="color:#24292e;">  barBaz: string;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type UppercaseKeys = {</span></span>
<span class="line"><span style="color:#24292e;">  [K in keyof Original as Uppercase&lt;string &amp; K&gt;]: Original[K];</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 得到：</span></span>
<span class="line"><span style="color:#24292e;">/*</span></span>
<span class="line"><span style="color:#24292e;">type UppercaseKeys = {</span></span>
<span class="line"><span style="color:#24292e;">  FOO: number;</span></span>
<span class="line"><span style="color:#24292e;">  BARBAZ: string;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span></code></pre></div><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><p>as 改名技巧表</p><table><thead><tr><th>操作</th><th>示例语法</th><th>示例结果 (输入: <code>{ name: string; age: number }</code>)</th></tr></thead><tbody><tr><td>加前缀</td><td><code>[K in keyof T as</code> prefix_\${string &amp; K}<code>]</code></td><td><code>{ prefix_name: string; prefix_age: number }</code></td></tr><tr><td>加后缀</td><td><code>[K in keyof T as</code> \${string &amp; K}_suffix<code>]</code></td><td><code>{ name_suffix: string; age_suffix: number }</code></td></tr><tr><td>大写字段名</td><td><code>[K in keyof T as Uppercase&lt;string &amp; K&gt;]</code></td><td><code>{ NAME: string; AGE: number }</code></td></tr><tr><td>小写字段名</td><td><code>[K in keyof T as Lowercase&lt;string &amp; K&gt;]</code></td><td><code>{ name: string; age: number }</code>（原样，除非有大写）</td></tr><tr><td>驼峰转下划线名</td><td><code>[K in keyof T as K extends string ? SnakeCase&lt;K&gt; : never]</code> <em>(需工具类型)</em></td><td><code>{ name: string; age: number }</code> → <code>{ name: string; age: number }</code></td></tr><tr><td>过滤字段</td><td><code>[K in keyof T as K extends &#39;age&#39; ? never : K]</code></td><td><code>{ name: string }</code></td></tr><tr><td>只保留字符串值</td><td><code>[K in keyof T as T[K] extends string ? K : never]</code></td><td><code>{ name: string }</code>（假设 <code>age</code> 是 <code>number</code>）</td></tr><tr><td>映射为常量字段</td><td><code>[K in keyof T as</code> \${K &amp; string}_CONST<code>]: &quot;CONST&quot;</code></td><td><code>{ name_CONST: &quot;CONST&quot;; age_CONST: &quot;CONST&quot; }</code></td></tr></tbody></table>`,29),o=[p];function t(c,r,i,d,y,u){return e(),n("div",null,o)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};
