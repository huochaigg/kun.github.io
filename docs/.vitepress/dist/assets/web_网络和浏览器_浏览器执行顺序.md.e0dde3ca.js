import{_ as s,c as n,o as a,Q as e}from"./chunks/framework.ef145a76.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/网络和浏览器/浏览器执行顺序.md","filePath":"web/网络和浏览器/浏览器执行顺序.md"}'),l={name:"web/网络和浏览器/浏览器执行顺序.md"},p=e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">用户输入 URL</span></span>
<span class="line"><span style="color:#e1e4e8;">    ↓</span></span>
<span class="line"><span style="color:#e1e4e8;">浏览器发起网络请求（DNS解析 → TCP连接 → 发送HTTP请求）</span></span>
<span class="line"><span style="color:#e1e4e8;">    ↓</span></span>
<span class="line"><span style="color:#e1e4e8;">服务器返回 HTML 文档</span></span>
<span class="line"><span style="color:#e1e4e8;">    ↓</span></span>
<span class="line"><span style="color:#e1e4e8;">浏览器解析 HTML（构建 DOM）</span></span>
<span class="line"><span style="color:#e1e4e8;">    ↓</span></span>
<span class="line"><span style="color:#e1e4e8;">遇到 &lt;link&gt; / &lt;style&gt; 标签 → 构建 CSSOM</span></span>
<span class="line"><span style="color:#e1e4e8;">遇到 &lt;script&gt; 标签 → 阻塞解析（如果未加 async/defer）</span></span>
<span class="line"><span style="color:#e1e4e8;">    ↓</span></span>
<span class="line"><span style="color:#e1e4e8;">DOM + CSSOM 构建完成 → 生成 Render Tree</span></span>
<span class="line"><span style="color:#e1e4e8;">    ↓</span></span>
<span class="line"><span style="color:#e1e4e8;">布局（Layout）→ 计算每个元素的大小和位置</span></span>
<span class="line"><span style="color:#e1e4e8;">    ↓</span></span>
<span class="line"><span style="color:#e1e4e8;">绘制（Painting）→ 把元素绘制成图层</span></span>
<span class="line"><span style="color:#e1e4e8;">    ↓</span></span>
<span class="line"><span style="color:#e1e4e8;">合成（Compositing）→ GPU 合成图层并显示</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">用户输入 URL</span></span>
<span class="line"><span style="color:#24292e;">    ↓</span></span>
<span class="line"><span style="color:#24292e;">浏览器发起网络请求（DNS解析 → TCP连接 → 发送HTTP请求）</span></span>
<span class="line"><span style="color:#24292e;">    ↓</span></span>
<span class="line"><span style="color:#24292e;">服务器返回 HTML 文档</span></span>
<span class="line"><span style="color:#24292e;">    ↓</span></span>
<span class="line"><span style="color:#24292e;">浏览器解析 HTML（构建 DOM）</span></span>
<span class="line"><span style="color:#24292e;">    ↓</span></span>
<span class="line"><span style="color:#24292e;">遇到 &lt;link&gt; / &lt;style&gt; 标签 → 构建 CSSOM</span></span>
<span class="line"><span style="color:#24292e;">遇到 &lt;script&gt; 标签 → 阻塞解析（如果未加 async/defer）</span></span>
<span class="line"><span style="color:#24292e;">    ↓</span></span>
<span class="line"><span style="color:#24292e;">DOM + CSSOM 构建完成 → 生成 Render Tree</span></span>
<span class="line"><span style="color:#24292e;">    ↓</span></span>
<span class="line"><span style="color:#24292e;">布局（Layout）→ 计算每个元素的大小和位置</span></span>
<span class="line"><span style="color:#24292e;">    ↓</span></span>
<span class="line"><span style="color:#24292e;">绘制（Painting）→ 把元素绘制成图层</span></span>
<span class="line"><span style="color:#24292e;">    ↓</span></span>
<span class="line"><span style="color:#24292e;">合成（Compositing）→ GPU 合成图层并显示</span></span></code></pre></div><h2 id="浏览器一帧都做了什么" tabindex="-1">浏览器一帧都做了什么 <a class="header-anchor" href="#浏览器一帧都做了什么" aria-label="Permalink to &quot;浏览器一帧都做了什么&quot;">​</a></h2><ul><li>接受输入事件</li><li>执行事件回调</li><li>开始一帧</li><li>执行 RAF (RequestAnimationFrame)</li><li>页面布局，样式计算</li><li>绘制渲染</li><li>执行 RIC (RequestIdelCallback)</li></ul>`,3),o=[p];function c(t,i,r,y,_,d){return a(),n("div",null,o)}const u=s(l,[["render",c]]);export{h as __pageData,u as default};
