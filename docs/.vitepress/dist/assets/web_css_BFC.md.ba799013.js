import{_ as s,c as a,o as e,Q as n}from"./chunks/framework.ef145a76.js";const l="/kun.github.io/assets/20250610120917.86cd9ca2.png",p="/kun.github.io/assets/20250610122612.d1399cac.png",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/BFC.md","filePath":"web/css/BFC.md"}'),o={name:"web/css/BFC.md"},t=n(`<p>MDN：<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context</a> 官方：<strong>区块格式化上下文</strong>（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。</p><p>通俗说，就是浏览器创建了一片区域，这块区域和外部的布局环境互不影响</p><p>下列一些情况会创造BFC：</p><ul><li>文档的根元素<code>&lt;html&gt;&lt;/html&gt;</code></li><li>浮动元素<code>float不为none</code></li><li>绝对定位元素</li><li>行级块元素</li><li><code>display: tabel-cell</code></li><li><code>overflow</code>不为 <code>visible</code> 或 <code>clip</code> 的块级元素</li><li><code>display的值为grid或inline-grid</code></li><li>新方法<code>display: flow-root</code></li><li>其他......</li></ul><p>MDN: “格式化上下文影响布局，通常，我们会为定位和清除浮动创建新的 BFC，而不是更改布局，因为它将：”</p><ul><li>包含内部浮动。</li><li>排除外部浮动。</li><li>阻止<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing" target="_blank" rel="noreferrer">外边距重叠</a>。</li></ul><p>这三点这样理解：</p><h3 id="包含内部浮动" tabindex="-1">包含内部浮动 <a class="header-anchor" href="#包含内部浮动" aria-label="Permalink to &quot;包含内部浮动&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div class=&quot;float-child&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;float-child&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.container {</span></span>
<span class="line"><span style="color:#e1e4e8;">  overflow: hidden; /* 触发 BFC，包含内部浮动 */</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.float-child {</span></span>
<span class="line"><span style="color:#e1e4e8;">  float: left;</span></span>
<span class="line"><span style="color:#e1e4e8;">  height: 100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  width: 100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.container {</span></span>
<span class="line"><span style="color:#24292e;">  overflow: hidden; /* 触发 BFC，包含内部浮动 */</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.float-child {</span></span>
<span class="line"><span style="color:#24292e;">  float: left;</span></span>
<span class="line"><span style="color:#24292e;">  height: 100px;</span></span>
<span class="line"><span style="color:#24292e;">  width: 100px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>当container中只有浮动的子元素时，由于浮动子元素脱离了文档流，导致父元素无法计算浮动子元素的高度，因此会导致高度塌陷，解决方法就是将父元素变成BFC，可以设置为<code>overflow: hidden</code>, 或者是<code>display: flow-root</code>, 浏览器就会把container的内部浮动元素的高度计算进去，使其能正确包裹内部元素高度，高度就不再“塌陷”</p><h3 id="排除外部浮动" tabindex="-1">排除外部浮动 <a class="header-anchor" href="#排除外部浮动" aria-label="Permalink to &quot;排除外部浮动&quot;">​</a></h3><p>以下可以实现：左边元素宽度固定，右边元素宽度自适应</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;float-box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;content&quot;&gt;Some text...&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;float-box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;content&quot;&gt;Some text...&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.float-box {</span></span>
<span class="line"><span style="color:#e1e4e8;">  float: left;</span></span>
<span class="line"><span style="color:#e1e4e8;">  width: 200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  height: 200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background: red;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.content {</span></span>
<span class="line"><span style="color:#e1e4e8;">  overflow: hidden; /* 触发 BFC，避开左侧浮动，不被覆盖 */</span></span>
<span class="line"><span style="color:#e1e4e8;">  background: green;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.float-box {</span></span>
<span class="line"><span style="color:#24292e;">  float: left;</span></span>
<span class="line"><span style="color:#24292e;">  width: 200px;</span></span>
<span class="line"><span style="color:#24292e;">  height: 200px;</span></span>
<span class="line"><span style="color:#24292e;">  background: red;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.content {</span></span>
<span class="line"><span style="color:#24292e;">  overflow: hidden; /* 触发 BFC，避开左侧浮动，不被覆盖 */</span></span>
<span class="line"><span style="color:#24292e;">  background: green;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+l+`" alt="排除外部浮动"></p><h3 id="阻止外边距重叠" tabindex="-1">阻止外边距重叠 <a class="header-anchor" href="#阻止外边距重叠" aria-label="Permalink to &quot;阻止外边距重叠&quot;">​</a></h3><p>两个相邻的块级元素垂直 margin 会发生合并</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;parent&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div class=&quot;child&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;parent&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;child&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.parent {</span></span>
<span class="line"><span style="color:#e1e4e8;">	overflow: hidden; /* 触发 BFC，阻止 child 的 margin-top 与 parent 合并 */</span></span>
<span class="line"><span style="color:#e1e4e8;">	background: red;</span></span>
<span class="line"><span style="color:#e1e4e8;">	width: 100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">	height: 100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">	margin-top: 20px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.child {</span></span>
<span class="line"><span style="color:#e1e4e8;">	margin-top: 20px;</span></span>
<span class="line"><span style="color:#e1e4e8;">	height: 100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">	width: 100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">	background-color: green;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.parent {</span></span>
<span class="line"><span style="color:#24292e;">	overflow: hidden; /* 触发 BFC，阻止 child 的 margin-top 与 parent 合并 */</span></span>
<span class="line"><span style="color:#24292e;">	background: red;</span></span>
<span class="line"><span style="color:#24292e;">	width: 100px;</span></span>
<span class="line"><span style="color:#24292e;">	height: 100px;</span></span>
<span class="line"><span style="color:#24292e;">	margin-top: 20px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.child {</span></span>
<span class="line"><span style="color:#24292e;">	margin-top: 20px;</span></span>
<span class="line"><span style="color:#24292e;">	height: 100px;</span></span>
<span class="line"><span style="color:#24292e;">	width: 100px;</span></span>
<span class="line"><span style="color:#24292e;">	background-color: green;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+p+'" alt="阻止外边距重叠"></p><h2 id="新属性-display-flow-root" tabindex="-1">新属性 <code>display: flow-root</code> <a class="header-anchor" href="#新属性-display-flow-root" aria-label="Permalink to &quot;新属性 `display: flow-root`&quot;">​</a></h2><p>官方：“一个新的 <code>display</code> 属性的值，它可以创建无副作用的 BFC。在父级块中使用 <code>display: flow-root</code> 可以创建新的 BFC。</p><p>给 <code>&lt;div&gt;</code> 元素设置 <code>display: flow-root</code> 属性后，<code>&lt;div&gt;</code> 中的所有内容都会参与 BFC，浮动的内容不会从底部溢出。</p><p>你可以从 <code>flow-root</code> 这个值的名字上看出来，它创建一个新的用于流式布局的上下文，行为如同 <code>root</code>（在浏览器中是 <code>&lt;html&gt;</code>）元素。”</p><p><code>display: flow-root</code>是一个转为触发BFC的方法，并且无副作用， 如设置overflow: hidden, 父元素设置浮动，绝对定位等方法，都会影响布局，甚至造成一些难以发现的问题， 或者底部添加一个空标签 <code>&lt;p style=&quot;clear: both&quot;&gt;&lt;/p&gt;</code>, 或者使用伪元素等方法来避开浮动，相对麻烦点， 所以，新版本更推荐使用<code>display: flow-root</code>方法</p>',26),c=[t];function i(r,d,h,g,y,u){return e(),a("div",null,c)}const f=s(o,[["render",i]]);export{b as __pageData,f as default};
