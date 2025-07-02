import{_ as e,c as s,o as t,Q as n}from"./chunks/framework.ef145a76.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/javascript/Reflect.md","filePath":"web/javascript/Reflect.md"}'),a={name:"web/javascript/Reflect.md"},c=n(`<p><code>Reflect</code> 对象是 ES6（ES2015）新增的一个对象，专门用来 <strong>操作对象的底层行为</strong>，比如 <code>get</code>、<code>set</code>、<code>deleteProperty</code> 等。可以理解为，它把很多以前散落在各种地方的方法（比如 <code>Object.defineProperty</code>、属性访问、函数调用等）都统一收拢到了一个地方，让这些操作更加标准化、函数化。</p><h3 id="基本内容" tabindex="-1">基本内容 <a class="header-anchor" href="#基本内容" aria-label="Permalink to &quot;基本内容&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>功能</th><th>类似的语法或函数</th></tr></thead><tbody><tr><td><code>Reflect.get</code></td><td>获取属性值</td><td><code>obj[prop]</code></td></tr><tr><td><code>Reflect.set</code></td><td>设置属性值</td><td><code>obj[prop] = value</code></td></tr><tr><td><code>Reflect.has</code></td><td>判断属性是否存在</td><td><code>&#39;prop&#39; in obj</code></td></tr><tr><td><code>Reflect.deleteProperty</code></td><td>删除属性</td><td><code>delete obj[prop]</code></td></tr><tr><td><code>Reflect.defineProperty</code></td><td>定义属性</td><td><code>Object.defineProperty(obj, prop, desc)</code></td></tr><tr><td><code>Reflect.getOwnPropertyDescriptor</code></td><td>获取属性描述符</td><td><code>Object.getOwnPropertyDescriptor(obj, prop)</code></td></tr><tr><td><code>Reflect.ownKeys</code></td><td>获取对象自身所有属性（包括 symbol）</td><td><code>Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj))</code></td></tr><tr><td><code>Reflect.isExtensible</code></td><td>是否可扩展</td><td><code>Object.isExtensible(obj)</code></td></tr><tr><td><code>Reflect.preventExtensions</code></td><td>阻止扩展</td><td><code>Object.preventExtensions(obj)</code></td></tr><tr><td><code>Reflect.getPrototypeOf</code></td><td>获取原型</td><td><code>Object.getPrototypeOf(obj)</code></td></tr><tr><td><code>Reflect.setPrototypeOf</code></td><td>设置原型</td><td><code>Object.setPrototypeOf(obj, proto)</code></td></tr><tr><td><code>Reflect.apply</code></td><td>调用函数</td><td><code>func.apply(thisArg, args)</code></td></tr><tr><td><code>Reflect.construct</code></td><td>构造实例</td><td><code>new target(...args)</code></td></tr></tbody></table><h3 id="reflect-construct-构造实例" tabindex="-1">Reflect.construct 构造实例 <a class="header-anchor" href="#reflect-construct-构造实例" aria-label="Permalink to &quot;Reflect.construct 构造实例&quot;">​</a></h3><p>Reflect.construct(Parent, [name], new.target);\` new.target 是什么意思？</p><p><code>new.target</code> 是 ES6 引入的一个<strong>元属性</strong>，只能在构造函数或 class 中使用。 它表示当前被 <code>new</code> 调用的构造函数本身，而不是被调用的父类。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function A() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(new.target);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">new A(); // 打印 A</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function A() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(new.target);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">new A(); // 打印 A</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Parent(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function Child(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return Reflect.construct(Parent, [name], new.target);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Child.prototype = Object.create(Parent.prototype);</span></span>
<span class="line"><span style="color:#e1e4e8;">Child.prototype.constructor = Child;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Parent(name) {</span></span>
<span class="line"><span style="color:#24292e;">  this.name = name;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function Child(name) {</span></span>
<span class="line"><span style="color:#24292e;">  return Reflect.construct(Parent, [name], new.target);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Child.prototype = Object.create(Parent.prototype);</span></span>
<span class="line"><span style="color:#24292e;">Child.prototype.constructor = Child;</span></span></code></pre></div><p>相当于</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Parent {</span></span>
<span class="line"><span style="color:#e1e4e8;">  constructor(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.name = name;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">class Child extends Parent {</span></span>
<span class="line"><span style="color:#e1e4e8;">  constructor(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    super(name);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Parent {</span></span>
<span class="line"><span style="color:#24292e;">  constructor(name) {</span></span>
<span class="line"><span style="color:#24292e;">    this.name = name;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">class Child extends Parent {</span></span>
<span class="line"><span style="color:#24292e;">  constructor(name) {</span></span>
<span class="line"><span style="color:#24292e;">    super(name);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="reflect-construct和-reflect-apply的区别是" tabindex="-1">Reflect.construct和 Reflect.apply的区别是： <a class="header-anchor" href="#reflect-construct和-reflect-apply的区别是" aria-label="Permalink to &quot;Reflect.construct和 Reflect.apply的区别是：&quot;">​</a></h4><ul><li>Reflect.apply把 <code>Parent</code> 作为普通函数调用，并指定 <code>this</code></li><li>不会创建新对象</li><li>不会设置原型链</li><li><code>this</code> 必须是现成的对象</li></ul>`,12),o=[c];function l(p,r,d,i,y,h){return t(),s("div",null,o)}const b=e(a,[["render",l]]);export{u as __pageData,b as default};
