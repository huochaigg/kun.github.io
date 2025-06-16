import{_ as s,c as n,o as a,d as e}from"./app.b8b79069.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u73B0","slug":"\u5B9E\u73B0","link":"#\u5B9E\u73B0","children":[]}],"relativePath":"web/typescript/ts\u5185\u7F6E\u5DE5\u5177\u7C7B.md"}'),l={name:"web/typescript/ts\u5185\u7F6E\u5DE5\u5177\u7C7B.md"},t=e(`<table><thead><tr><th>\u5DE5\u5177\u7C7B\u578B</th><th>\u529F\u80FD\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>Partial&lt;T&gt;</code></td><td>\u5C06\u7C7B\u578B <code>T</code> \u7684\u6240\u6709\u5C5E\u6027\u53D8\u6210\u53EF\u9009</td></tr><tr><td><code>Required&lt;T&gt;</code></td><td>\u5C06\u7C7B\u578B <code>T</code> \u7684\u6240\u6709\u5C5E\u6027\u53D8\u6210\u5FC5\u586B</td></tr><tr><td><code>Readonly&lt;T&gt;</code></td><td>\u5C06\u7C7B\u578B <code>T</code> \u7684\u6240\u6709\u5C5E\u6027\u53D8\u4E3A\u53EA\u8BFB</td></tr><tr><td><code>Pick&lt;T, K&gt;</code></td><td>\u4ECE\u7C7B\u578B <code>T</code> \u4E2D\u6311\u9009\u5C5E\u6027 <code>K</code> \u7EC4\u6210\u65B0\u7C7B\u578B</td></tr><tr><td><code>Omit&lt;T, K&gt;</code></td><td>\u4ECE\u7C7B\u578B <code>T</code> \u4E2D\u6392\u9664\u5C5E\u6027 <code>K</code> \u7EC4\u6210\u65B0\u7C7B\u578B</td></tr><tr><td><code>Record&lt;K, T&gt;</code></td><td>\u6784\u9020\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u952E\u4E3A <code>K</code>\uFF0C\u503C\u4E3A <code>T</code></td></tr><tr><td><code>Exclude&lt;T, U&gt;</code></td><td>\u4ECE\u7C7B\u578B <code>T</code> \u4E2D\u6392\u9664\u53EF\u4EE5\u8D4B\u503C\u7ED9\u7C7B\u578B <code>U</code> \u7684\u90E8\u5206</td></tr><tr><td><code>Extract&lt;T, U&gt;</code></td><td>\u63D0\u53D6 <code>T</code> \u4E2D\u53EF\u4EE5\u8D4B\u503C\u7ED9 <code>U</code> \u7684\u90E8\u5206</td></tr><tr><td><code>NonNullable&lt;T&gt;</code></td><td>\u79FB\u9664 <code>T</code> \u4E2D\u7684 <code>null</code> \u548C <code>undefined</code></td></tr><tr><td><code>ReturnType&lt;T&gt;</code></td><td>\u83B7\u53D6\u51FD\u6570\u7C7B\u578B <code>T</code> \u7684\u8FD4\u56DE\u503C\u7C7B\u578B</td></tr><tr><td><code>Parameters&lt;T&gt;</code></td><td>\u83B7\u53D6\u51FD\u6570\u7C7B\u578B <code>T</code> \u7684\u53C2\u6570\u7C7B\u578B\u7EC4\u6210\u7684\u5143\u7EC4\u7C7B\u578B</td></tr><tr><td><code>ConstructorParameters&lt;T&gt;</code></td><td>\u83B7\u53D6\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u7C7B\u578B\u5143\u7EC4</td></tr><tr><td><code>InstanceType&lt;T&gt;</code></td><td>\u83B7\u53D6\u6784\u9020\u51FD\u6570\u7684\u5B9E\u4F8B\u7C7B\u578B</td></tr><tr><td><code>ThisType&lt;T&gt;</code></td><td>\u8BBE\u7F6E\u5BF9\u8C61\u5B57\u9762\u91CF\u7684 <code>this</code> \u7C7B\u578B\uFF08\u7528\u4E8E\u4E0A\u4E0B\u6587\u7ED1\u5B9A\uFF09</td></tr><tr><td><code>Awaited&lt;T&gt;</code></td><td>\u83B7\u53D6 <code>Promise</code> \u7C7B\u578B\u7684\u89E3\u6790\u7ED3\u679C\uFF08\u9002\u7528\u4E8E async/await\uFF09</td></tr></tbody></table><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">interface User {</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  age?: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Partial: \u6240\u6709\u5C5E\u6027\u53D8\u4E3A\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">type UserPartial = Partial&lt;User&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// { id?: number; name?: string; age?: number }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Required: \u6240\u6709\u5C5E\u6027\u53D8\u4E3A\u5FC5\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">type UserRequired = Required&lt;User&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// { id: number; name: string; age: number }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Pick: \u53EA\u4FDD\u7559\u90E8\u5206\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">type UserName = Pick&lt;User, &#39;name&#39;&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// { name: string }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Omit: \u6392\u9664\u67D0\u4E9B\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">type UserWithoutAge = Omit&lt;User, &#39;age&#39;&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// { id: number; name: string }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Record: \u6784\u9020\u952E\u503C\u5BF9\u8C61\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">type RoleMap = Record&lt;&#39;admin&#39; | &#39;user&#39;, User&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// { admin: User; user: User }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Exclude: \u6392\u9664\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">type T = Exclude&lt;&#39;a&#39; | &#39;b&#39; | &#39;c&#39;, &#39;a&#39;&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// &quot;b&quot; | &quot;c&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Extract: \u63D0\u53D6\u516C\u5171\u90E8\u5206</span></span>
<span class="line"><span style="color:#A6ACCD;">type T2 = Extract&lt;&#39;a&#39; | &#39;b&#39; | &#39;c&#39;, &#39;a&#39; | &#39;d&#39;&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// &quot;a&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// NonNullable: \u79FB\u9664 null \u548C undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">type T3 = NonNullable&lt;string | null | undefined&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// string</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// ReturnType: \u83B7\u53D6\u51FD\u6570\u8FD4\u56DE\u503C\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">function getUser() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return { id: 1, name: &#39;Tom&#39; };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type GetUserReturn = ReturnType&lt;typeof getUser&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// { id: number; name: string }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Parameters: \u83B7\u53D6\u51FD\u6570\u53C2\u6570\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">type Params = Parameters&lt;typeof getUser&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// ThisType: \u8BBE\u7F6E this \u4E0A\u4E0B\u6587\u7C7B\u578B\uFF08\u591A\u7528\u4E8E\u8F85\u52A9\u5BF9\u8C61\u65B9\u6CD5\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5B9E\u73B0" tabindex="-1">\u5B9E\u73B0 <a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">type Partial&lt;T&gt; = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [P in keyof T]?: T[P];</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Required&lt;T&gt; = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [P in keyof T]-?: T[P];</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Readonly&lt;T&gt; = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    readonly [P in keyof T]: T[P];</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Pick&lt;T, K extends keyof T&gt; = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [P in K]: T[P];</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Record&lt;K extends keyof any, T&gt; = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [P in K]: T;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Exclude&lt;T, U&gt; = T extends U ? never : T;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Extract&lt;T, U&gt; = T extends U ? T : never;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Omit&lt;T, K extends keyof any&gt; = Pick&lt;T, Exclude&lt;keyof T, K&gt;&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type NonNullable&lt;T&gt; = T &amp; {};</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6216</span></span>
<span class="line"><span style="color:#A6ACCD;">type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Parameters&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: infer P) =&gt; any ? P : never;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type ReturnType&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: any) =&gt; infer R ? R : any;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type ConstructorParameters&lt;T extends abstract new (...args: any) =&gt; any&gt; = T extends abstract new (...args: infer P) =&gt; any ? P : never; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type InstanceType&lt;T extends abstract new (...args: any) =&gt; any&gt; = T extends abstract new (...args: any) =&gt; infer R ? R : any;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Uppercase&lt;S extends string&gt; = intrinsic;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Awaited&lt;T&gt; = T extends null | undefined ? T : </span></span>
<span class="line"><span style="color:#A6ACCD;">    T extends object &amp; { then(onfulfilled: infer F, ...args: infer _): any; } ? </span></span>
<span class="line"><span style="color:#A6ACCD;">        F extends ((value: infer V, ...args: infer _) =&gt; any) ?</span></span>
<span class="line"><span style="color:#A6ACCD;">            Awaited&lt;V&gt; :</span></span>
<span class="line"><span style="color:#A6ACCD;">        never :</span></span>
<span class="line"><span style="color:#A6ACCD;">    T;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\uFF1A</p><ol><li><p>K extends keyof any \u76F8\u5F53\u4E8E K extends string | number | symbol</p></li><li><p><code>type Lowercase&lt;S extends string&gt; = intrinsic</code>; intrinsic \u8FD9\u662F TypeScript \u5185\u90E8\u7C7B\u578B\u7CFB\u7EDF\u7684\u58F0\u660E\u65B9\u5F0F\uFF0Cintrinsic \u5E76\u4E0D\u662F\u4E00\u4E2A\u771F\u6B63\u7684\u7C7B\u578B\uFF0C\u800C\u662F\u4E00\u4E2A\u5173\u952E\u5B57 \u8FD9\u4E2A\u7C7B\u578B\u7684\u5B9E\u73B0\u662F\u5185\u5EFA\u7684\u3001\u7531\u7F16\u8BD1\u5668\u76F4\u63A5\u5904\u7406\u7684\uFF0C\u4E0D\u662F\u7528 TypeScript \u672C\u8EAB\u5B9E\u73B0\u7684\u3002</p></li></ol>`,6),p=[t];function o(c,r,d,i,C,A){return a(),n("div",null,p)}const g=s(l,[["render",o]]);export{D as __pageData,g as default};
