import{_ as s,c as a,o as e,Q as n}from"./chunks/framework.ef145a76.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/javascript/WeakMap.md","filePath":"web/javascript/WeakMap.md"}'),p={name:"web/javascript/WeakMap.md"},l=n(`<h2 id="weakmap的特点" tabindex="-1">WeakMap的特点 <a class="header-anchor" href="#weakmap的特点" aria-label="Permalink to &quot;WeakMap的特点&quot;">​</a></h2><ul><li>WeakMap的key必须是对象，不能用原始值作为 key</li><li>WeakMap的键是弱引用的，当这个键没有被其他强引用，就会被垃圾回收器（GC）回收</li><li>不可枚举</li><li>不可获取size</li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const wm = new WeakMap();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const obj = { id: 123 };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">wm.set(obj, &#39;some data&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">wm.get(obj); // &#39;some data&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">wm.has(obj); // true</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">wm.delete(obj); // 删除 key 对应的 entry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const wm = new WeakMap();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const obj = { id: 123 };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">wm.set(obj, &#39;some data&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">wm.get(obj); // &#39;some data&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">wm.has(obj); // true</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">wm.delete(obj); // 删除 key 对应的 entry</span></span></code></pre></div><h2 id="weakmap的设计" tabindex="-1">WeakMap的设计 <a class="header-anchor" href="#weakmap的设计" aria-label="Permalink to &quot;WeakMap的设计&quot;">​</a></h2><ul><li>防止内存泄漏</li><li>给对象绑定临时数据</li><li>适用设置私有属性</li><li>为对象绑定额外属性，但又不污染对象本身</li></ul><p>绑定私有属性的例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const wm = new WeakMap();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function trackUser(userObj) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  wm.set(userObj, { loginAt: Date.now() });</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function getLoginTime(userObj) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return wm.get(userObj)?.loginAt;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">let user = { name: &#39;Alice&#39; };</span></span>
<span class="line"><span style="color:#e1e4e8;">trackUser(user);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(getLoginTime(user)); // 输出时间戳</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">user = null; // user 不再使用，wm 中自动被 GC 清除</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const wm = new WeakMap();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function trackUser(userObj) {</span></span>
<span class="line"><span style="color:#24292e;">  wm.set(userObj, { loginAt: Date.now() });</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function getLoginTime(userObj) {</span></span>
<span class="line"><span style="color:#24292e;">  return wm.get(userObj)?.loginAt;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let user = { name: &#39;Alice&#39; };</span></span>
<span class="line"><span style="color:#24292e;">trackUser(user);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(getLoginTime(user)); // 输出时间戳</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">user = null; // user 不再使用，wm 中自动被 GC 清除</span></span></code></pre></div><p>缓存计算结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const expensiveCache = new WeakMap();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function compute(obj) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (!expensiveCache.has(obj)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const result = heavyComputation(obj);</span></span>
<span class="line"><span style="color:#e1e4e8;">    expensiveCache.set(obj, result);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return expensiveCache.get(obj);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function heavyComputation(obj) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return obj.value ** 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const obj = { value: 2 };</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(compute(obj)); // 1024</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const expensiveCache = new WeakMap();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function compute(obj) {</span></span>
<span class="line"><span style="color:#24292e;">  if (!expensiveCache.has(obj)) {</span></span>
<span class="line"><span style="color:#24292e;">    const result = heavyComputation(obj);</span></span>
<span class="line"><span style="color:#24292e;">    expensiveCache.set(obj, result);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return expensiveCache.get(obj);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function heavyComputation(obj) {</span></span>
<span class="line"><span style="color:#24292e;">  return obj.value ** 10;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const obj = { value: 2 };</span></span>
<span class="line"><span style="color:#24292e;">console.log(compute(obj)); // 1024</span></span></code></pre></div><h2 id="weakmap-和-map的区别" tabindex="-1">WeakMap 和 Map的区别 <a class="header-anchor" href="#weakmap-和-map的区别" aria-label="Permalink to &quot;WeakMap 和 Map的区别&quot;">​</a></h2><h3 id="_1-map的键可以是任意类型-weakmap的键只能是对象" tabindex="-1">1. Map的键可以是任意类型，WeakMap的键只能是对象 <a class="header-anchor" href="#_1-map的键可以是任意类型-weakmap的键只能是对象" aria-label="Permalink to &quot;1. Map的键可以是任意类型，WeakMap的键只能是对象&quot;">​</a></h3><h3 id="_2-map的键是强引用-weakmap的键是弱引用-未被其他引用会被垃圾回收机制回收" tabindex="-1">2.Map的键是强引用，WeakMap的键是弱引用，未被其他引用会被垃圾回收机制回收 <a class="header-anchor" href="#_2-map的键是强引用-weakmap的键是弱引用-未被其他引用会被垃圾回收机制回收" aria-label="Permalink to &quot;2.Map的键是强引用，WeakMap的键是弱引用，未被其他引用会被垃圾回收机制回收&quot;">​</a></h3><h3 id="_3-map可被遍历-支持-keys-、-values-、-entries-、foreach-weakmap不可被遍历-没有size属性-所以weakmap不适合做一些发布订阅" tabindex="-1">3. Map可被遍历，支持<code>.keys()</code>、<code>.values()</code>、<code>.entries()</code>、<code>forEach()</code>，WeakMap不可被遍历，没有size属性，所以WeakMap不适合做一些发布订阅 <a class="header-anchor" href="#_3-map可被遍历-支持-keys-、-values-、-entries-、foreach-weakmap不可被遍历-没有size属性-所以weakmap不适合做一些发布订阅" aria-label="Permalink to &quot;3. Map可被遍历，支持\`.keys()\`、\`.values()\`、\`.entries()\`、\`forEach()\`，WeakMap不可被遍历，没有size属性，所以WeakMap不适合做一些发布订阅&quot;">​</a></h3><h3 id="_4-map-普通键值对存储-可查可遍历-weakmap适用于私有数据绑定-缓存-隐藏数据等" tabindex="-1">4. Map 普通键值对存储，可查可遍历，WeakMap适用于私有数据绑定，缓存，隐藏数据等 <a class="header-anchor" href="#_4-map-普通键值对存储-可查可遍历-weakmap适用于私有数据绑定-缓存-隐藏数据等" aria-label="Permalink to &quot;4. Map 普通键值对存储，可查可遍历，WeakMap适用于私有数据绑定，缓存，隐藏数据等&quot;">​</a></h3><h3 id="_5-weakmap安全性更高一些" tabindex="-1">5. WeakMap安全性更高一些 <a class="header-anchor" href="#_5-weakmap安全性更高一些" aria-label="Permalink to &quot;5. WeakMap安全性更高一些&quot;">​</a></h3>`,16),o=[l];function c(t,i,r,y,u,d){return e(),a("div",null,o)}const k=s(p,[["render",c]]);export{m as __pageData,k as default};
