import{_ as s,c as n,o as e,Q as a}from"./chunks/framework.ef145a76.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/typescript/extends.md","filePath":"web/typescript/extends.md"}'),l={name:"web/typescript/extends.md"},p=a(`<p>在 TypeScript 中，<code>extends</code> 有三种常见用法，分别出现在 <strong>泛型约束</strong>、<strong>条件类型</strong> 和 <strong>类继承/接口继承</strong> 中。</p><h2 id="_1-泛型约束中的-extends" tabindex="-1">1. 泛型约束中的 extends <a class="header-anchor" href="#_1-泛型约束中的-extends" aria-label="Permalink to &quot;1.  泛型约束中的 extends&quot;">​</a></h2><p>用于限制泛型类型的范围。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function printLength&lt;T extends { length: number }&gt;(arg: T): void {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(arg.length);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">printLength([1, 2, 3]);         // OK，数组有 length</span></span>
<span class="line"><span style="color:#e1e4e8;">printLength(&quot;hello&quot;);          // OK，字符串有 length</span></span>
<span class="line"><span style="color:#e1e4e8;">// printLength(123);           // ❌ Error: number 没有 length 属性</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function printLength&lt;T extends { length: number }&gt;(arg: T): void {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(arg.length);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">printLength([1, 2, 3]);         // OK，数组有 length</span></span>
<span class="line"><span style="color:#24292e;">printLength(&quot;hello&quot;);          // OK，字符串有 length</span></span>
<span class="line"><span style="color:#24292e;">// printLength(123);           // ❌ Error: number 没有 length 属性</span></span></code></pre></div><h2 id="_2-条件类型中的-extends" tabindex="-1">2. 条件类型中的 extends <a class="header-anchor" href="#_2-条件类型中的-extends" aria-label="Permalink to &quot;2.  条件类型中的 extends&quot;">​</a></h2><p>用于实现类型的条件判断（类似 <code>if...else</code>）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">type IsString&lt;T&gt; = T extends string ? true : false;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type A = IsString&lt;&quot;hello&quot;&gt;;   // true</span></span>
<span class="line"><span style="color:#e1e4e8;">type B = IsString&lt;123&gt;;       // false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">type IsString&lt;T&gt; = T extends string ? true : false;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type A = IsString&lt;&quot;hello&quot;&gt;;   // true</span></span>
<span class="line"><span style="color:#24292e;">type B = IsString&lt;123&gt;;       // false</span></span></code></pre></div><p>配合 <code>infer</code> 可以提取类型的一部分：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">type ElementType&lt;T&gt; = T extends (infer U)[] ? U : T;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type A = ElementType&lt;number[]&gt;; // number</span></span>
<span class="line"><span style="color:#e1e4e8;">type B = ElementType&lt;string&gt;;   // string</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">type ElementType&lt;T&gt; = T extends (infer U)[] ? U : T;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type A = ElementType&lt;number[]&gt;; // number</span></span>
<span class="line"><span style="color:#24292e;">type B = ElementType&lt;string&gt;;   // string</span></span></code></pre></div><h2 id="_3-类或接口继承中的-extends" tabindex="-1">3. 类或接口继承中的 extends <a class="header-anchor" href="#_3-类或接口继承中的-extends" aria-label="Permalink to &quot;3.  类或接口继承中的 extends&quot;">​</a></h2><p>用于类继承父类、接口继承接口、类实现接口：</p><h4 id="接口继承" tabindex="-1">接口继承 <a class="header-anchor" href="#接口继承" aria-label="Permalink to &quot;接口继承&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">interface Animal {</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: string;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">interface Dog extends Animal {</span></span>
<span class="line"><span style="color:#e1e4e8;">  bark(): void;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">interface Animal {</span></span>
<span class="line"><span style="color:#24292e;">  name: string;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">interface Dog extends Animal {</span></span>
<span class="line"><span style="color:#24292e;">  bark(): void;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="类继承" tabindex="-1">类继承 <a class="header-anchor" href="#类继承" aria-label="Permalink to &quot;类继承&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Animal {</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: string = &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  move() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&quot;Moving...&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Dog extends Animal {</span></span>
<span class="line"><span style="color:#e1e4e8;">  bark() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&quot;Woof!&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Animal {</span></span>
<span class="line"><span style="color:#24292e;">  name: string = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  move() {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&quot;Moving...&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Dog extends Animal {</span></span>
<span class="line"><span style="color:#24292e;">  bark() {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&quot;Woof!&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,15),t=[p];function o(c,i,r,d,g,y){return e(),n("div",null,t)}const m=s(l,[["render",o]]);export{u as __pageData,m as default};
