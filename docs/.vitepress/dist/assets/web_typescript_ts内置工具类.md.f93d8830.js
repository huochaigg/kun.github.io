import{_ as s,c as n,o as e,Q as a}from"./chunks/framework.ef145a76.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/typescript/ts内置工具类.md","filePath":"web/typescript/ts内置工具类.md"}'),l={name:"web/typescript/ts内置工具类.md"},p=a(`<table><thead><tr><th>工具类型</th><th>功能描述</th></tr></thead><tbody><tr><td><code>Partial&lt;T&gt;</code></td><td>将类型 <code>T</code> 的所有属性变成可选</td></tr><tr><td><code>Required&lt;T&gt;</code></td><td>将类型 <code>T</code> 的所有属性变成必填</td></tr><tr><td><code>Readonly&lt;T&gt;</code></td><td>将类型 <code>T</code> 的所有属性变为只读</td></tr><tr><td><code>Pick&lt;T, K&gt;</code></td><td>从类型 <code>T</code> 中挑选属性 <code>K</code> 组成新类型</td></tr><tr><td><code>Omit&lt;T, K&gt;</code></td><td>从类型 <code>T</code> 中排除属性 <code>K</code> 组成新类型</td></tr><tr><td><code>Record&lt;K, T&gt;</code></td><td>构造一个对象类型，键为 <code>K</code>，值为 <code>T</code></td></tr><tr><td><code>Exclude&lt;T, U&gt;</code></td><td>从类型 <code>T</code> 中排除可以赋值给类型 <code>U</code> 的部分</td></tr><tr><td><code>Extract&lt;T, U&gt;</code></td><td>提取 <code>T</code> 中可以赋值给 <code>U</code> 的部分</td></tr><tr><td><code>NonNullable&lt;T&gt;</code></td><td>移除 <code>T</code> 中的 <code>null</code> 和 <code>undefined</code></td></tr><tr><td><code>ReturnType&lt;T&gt;</code></td><td>获取函数类型 <code>T</code> 的返回值类型</td></tr><tr><td><code>Parameters&lt;T&gt;</code></td><td>获取函数类型 <code>T</code> 的参数类型组成的元组类型</td></tr><tr><td><code>ConstructorParameters&lt;T&gt;</code></td><td>获取构造函数的参数类型元组</td></tr><tr><td><code>InstanceType&lt;T&gt;</code></td><td>获取构造函数的实例类型</td></tr><tr><td><code>ThisType&lt;T&gt;</code></td><td>设置对象字面量的 <code>this</code> 类型（用于上下文绑定）</td></tr><tr><td><code>Awaited&lt;T&gt;</code></td><td>获取 <code>Promise</code> 类型的解析结果（适用于 async/await）</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">interface User {</span></span>
<span class="line"><span style="color:#e1e4e8;">  id: number;</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: string;</span></span>
<span class="line"><span style="color:#e1e4e8;">  age?: number;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// Partial: 所有属性变为可选</span></span>
<span class="line"><span style="color:#e1e4e8;">type UserPartial = Partial&lt;User&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// { id?: number; name?: string; age?: number }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// Required: 所有属性变为必选</span></span>
<span class="line"><span style="color:#e1e4e8;">type UserRequired = Required&lt;User&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// { id: number; name: string; age: number }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// Pick: 只保留部分属性</span></span>
<span class="line"><span style="color:#e1e4e8;">type UserName = Pick&lt;User, &#39;name&#39;&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// { name: string }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// Omit: 排除某些属性</span></span>
<span class="line"><span style="color:#e1e4e8;">type UserWithoutAge = Omit&lt;User, &#39;age&#39;&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// { id: number; name: string }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// Record: 构造键值对象类型</span></span>
<span class="line"><span style="color:#e1e4e8;">type RoleMap = Record&lt;&#39;admin&#39; | &#39;user&#39;, User&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// { admin: User; user: User }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// Exclude: 排除类型</span></span>
<span class="line"><span style="color:#e1e4e8;">type T = Exclude&lt;&#39;a&#39; | &#39;b&#39; | &#39;c&#39;, &#39;a&#39;&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// &quot;b&quot; | &quot;c&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// Extract: 提取公共部分</span></span>
<span class="line"><span style="color:#e1e4e8;">type T2 = Extract&lt;&#39;a&#39; | &#39;b&#39; | &#39;c&#39;, &#39;a&#39; | &#39;d&#39;&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// &quot;a&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// NonNullable: 移除 null 和 undefined</span></span>
<span class="line"><span style="color:#e1e4e8;">type T3 = NonNullable&lt;string | null | undefined&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// string</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// ReturnType: 获取函数返回值类型</span></span>
<span class="line"><span style="color:#e1e4e8;">function getUser() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return { id: 1, name: &#39;Tom&#39; };</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">type GetUserReturn = ReturnType&lt;typeof getUser&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// { id: number; name: string }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// Parameters: 获取函数参数类型</span></span>
<span class="line"><span style="color:#e1e4e8;">type Params = Parameters&lt;typeof getUser&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// []</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// ThisType: 设置 this 上下文类型（多用于辅助对象方法）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">interface User {</span></span>
<span class="line"><span style="color:#24292e;">  id: number;</span></span>
<span class="line"><span style="color:#24292e;">  name: string;</span></span>
<span class="line"><span style="color:#24292e;">  age?: number;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// Partial: 所有属性变为可选</span></span>
<span class="line"><span style="color:#24292e;">type UserPartial = Partial&lt;User&gt;;</span></span>
<span class="line"><span style="color:#24292e;">// { id?: number; name?: string; age?: number }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// Required: 所有属性变为必选</span></span>
<span class="line"><span style="color:#24292e;">type UserRequired = Required&lt;User&gt;;</span></span>
<span class="line"><span style="color:#24292e;">// { id: number; name: string; age: number }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// Pick: 只保留部分属性</span></span>
<span class="line"><span style="color:#24292e;">type UserName = Pick&lt;User, &#39;name&#39;&gt;;</span></span>
<span class="line"><span style="color:#24292e;">// { name: string }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// Omit: 排除某些属性</span></span>
<span class="line"><span style="color:#24292e;">type UserWithoutAge = Omit&lt;User, &#39;age&#39;&gt;;</span></span>
<span class="line"><span style="color:#24292e;">// { id: number; name: string }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// Record: 构造键值对象类型</span></span>
<span class="line"><span style="color:#24292e;">type RoleMap = Record&lt;&#39;admin&#39; | &#39;user&#39;, User&gt;;</span></span>
<span class="line"><span style="color:#24292e;">// { admin: User; user: User }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// Exclude: 排除类型</span></span>
<span class="line"><span style="color:#24292e;">type T = Exclude&lt;&#39;a&#39; | &#39;b&#39; | &#39;c&#39;, &#39;a&#39;&gt;;</span></span>
<span class="line"><span style="color:#24292e;">// &quot;b&quot; | &quot;c&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// Extract: 提取公共部分</span></span>
<span class="line"><span style="color:#24292e;">type T2 = Extract&lt;&#39;a&#39; | &#39;b&#39; | &#39;c&#39;, &#39;a&#39; | &#39;d&#39;&gt;;</span></span>
<span class="line"><span style="color:#24292e;">// &quot;a&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// NonNullable: 移除 null 和 undefined</span></span>
<span class="line"><span style="color:#24292e;">type T3 = NonNullable&lt;string | null | undefined&gt;;</span></span>
<span class="line"><span style="color:#24292e;">// string</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// ReturnType: 获取函数返回值类型</span></span>
<span class="line"><span style="color:#24292e;">function getUser() {</span></span>
<span class="line"><span style="color:#24292e;">  return { id: 1, name: &#39;Tom&#39; };</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">type GetUserReturn = ReturnType&lt;typeof getUser&gt;;</span></span>
<span class="line"><span style="color:#24292e;">// { id: number; name: string }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// Parameters: 获取函数参数类型</span></span>
<span class="line"><span style="color:#24292e;">type Params = Parameters&lt;typeof getUser&gt;;</span></span>
<span class="line"><span style="color:#24292e;">// []</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// ThisType: 设置 this 上下文类型（多用于辅助对象方法）</span></span></code></pre></div><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">type Partial&lt;T&gt; = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    [P in keyof T]?: T[P];</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type Required&lt;T&gt; = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    [P in keyof T]-?: T[P];</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type Readonly&lt;T&gt; = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    readonly [P in keyof T]: T[P];</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type Pick&lt;T, K extends keyof T&gt; = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    [P in K]: T[P];</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type Record&lt;K extends keyof any, T&gt; = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    [P in K]: T;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type Exclude&lt;T, U&gt; = T extends U ? never : T;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type Extract&lt;T, U&gt; = T extends U ? T : never;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type Omit&lt;T, K extends keyof any&gt; = Pick&lt;T, Exclude&lt;keyof T, K&gt;&gt;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type NonNullable&lt;T&gt; = T &amp; {};</span></span>
<span class="line"><span style="color:#e1e4e8;">// 或</span></span>
<span class="line"><span style="color:#e1e4e8;">type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type Parameters&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: infer P) =&gt; any ? P : never;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type ReturnType&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: any) =&gt; infer R ? R : any;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type ConstructorParameters&lt;T extends abstract new (...args: any) =&gt; any&gt; = T extends abstract new (...args: infer P) =&gt; any ? P : never; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type InstanceType&lt;T extends abstract new (...args: any) =&gt; any&gt; = T extends abstract new (...args: any) =&gt; infer R ? R : any;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type Uppercase&lt;S extends string&gt; = intrinsic;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type Awaited&lt;T&gt; = T extends null | undefined ? T : </span></span>
<span class="line"><span style="color:#e1e4e8;">    T extends object &amp; { then(onfulfilled: infer F, ...args: infer _): any; } ? </span></span>
<span class="line"><span style="color:#e1e4e8;">        F extends ((value: infer V, ...args: infer _) =&gt; any) ?</span></span>
<span class="line"><span style="color:#e1e4e8;">            Awaited&lt;V&gt; :</span></span>
<span class="line"><span style="color:#e1e4e8;">        never :</span></span>
<span class="line"><span style="color:#e1e4e8;">    T;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">type Partial&lt;T&gt; = {</span></span>
<span class="line"><span style="color:#24292e;">    [P in keyof T]?: T[P];</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type Required&lt;T&gt; = {</span></span>
<span class="line"><span style="color:#24292e;">    [P in keyof T]-?: T[P];</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type Readonly&lt;T&gt; = {</span></span>
<span class="line"><span style="color:#24292e;">    readonly [P in keyof T]: T[P];</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type Pick&lt;T, K extends keyof T&gt; = {</span></span>
<span class="line"><span style="color:#24292e;">    [P in K]: T[P];</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type Record&lt;K extends keyof any, T&gt; = {</span></span>
<span class="line"><span style="color:#24292e;">    [P in K]: T;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type Exclude&lt;T, U&gt; = T extends U ? never : T;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type Extract&lt;T, U&gt; = T extends U ? T : never;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type Omit&lt;T, K extends keyof any&gt; = Pick&lt;T, Exclude&lt;keyof T, K&gt;&gt;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type NonNullable&lt;T&gt; = T &amp; {};</span></span>
<span class="line"><span style="color:#24292e;">// 或</span></span>
<span class="line"><span style="color:#24292e;">type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type Parameters&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: infer P) =&gt; any ? P : never;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type ReturnType&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: any) =&gt; infer R ? R : any;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type ConstructorParameters&lt;T extends abstract new (...args: any) =&gt; any&gt; = T extends abstract new (...args: infer P) =&gt; any ? P : never; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type InstanceType&lt;T extends abstract new (...args: any) =&gt; any&gt; = T extends abstract new (...args: any) =&gt; infer R ? R : any;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type Uppercase&lt;S extends string&gt; = intrinsic;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type Awaited&lt;T&gt; = T extends null | undefined ? T : </span></span>
<span class="line"><span style="color:#24292e;">    T extends object &amp; { then(onfulfilled: infer F, ...args: infer _): any; } ? </span></span>
<span class="line"><span style="color:#24292e;">        F extends ((value: infer V, ...args: infer _) =&gt; any) ?</span></span>
<span class="line"><span style="color:#24292e;">            Awaited&lt;V&gt; :</span></span>
<span class="line"><span style="color:#24292e;">        never :</span></span>
<span class="line"><span style="color:#24292e;">    T;</span></span></code></pre></div><p>注：</p><ol><li><p>K extends keyof any 相当于 K extends string | number | symbol</p></li><li><p><code>type Lowercase&lt;S extends string&gt; = intrinsic</code>; intrinsic 这是 TypeScript 内部类型系统的声明方式，intrinsic 并不是一个真正的类型，而是一个关键字 这个类型的实现是内建的、由编译器直接处理的，不是用 TypeScript 本身实现的。</p></li></ol>`,6),t=[p];function o(c,r,i,y,d,g){return e(),n("div",null,t)}const m=s(l,[["render",o]]);export{u as __pageData,m as default};
