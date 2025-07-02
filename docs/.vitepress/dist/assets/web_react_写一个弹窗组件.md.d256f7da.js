import{_ as s,c as n,o as a,Q as e}from"./chunks/framework.ef145a76.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/react/写一个弹窗组件.md","filePath":"web/react/写一个弹窗组件.md"}'),l={name:"web/react/写一个弹窗组件.md"},p=e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, { useRef } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export class ModalManager {</span></span>
<span class="line"><span style="color:#e1e4e8;">  static modalInstance = null;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  static init() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (!ModalManager.modalInstance) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      const div = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">      document.body.appendChild(div);</span></span>
<span class="line"><span style="color:#e1e4e8;">      ModalManager.modalInstance = div;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  static open(content) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    ModalManager.init();</span></span>
<span class="line"><span style="color:#e1e4e8;">    ReactDOM.render(</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;ModalWrapper content={content} /&gt;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      ModalManager.modalInstance</span></span>
<span class="line"><span style="color:#e1e4e8;">    );</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  static close() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    ReactDOM.unmountComponentAtNode(ModalManager.modalInstance);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const ModalWrapper = ({ content }) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const closeModal = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    ModalManager.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return (</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div className=&quot;modal&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;div className=&quot;modal-content&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        {content}</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;button onClick={closeModal}&gt;关闭&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, { useRef } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export class ModalManager {</span></span>
<span class="line"><span style="color:#24292e;">  static modalInstance = null;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  static init() {</span></span>
<span class="line"><span style="color:#24292e;">    if (!ModalManager.modalInstance) {</span></span>
<span class="line"><span style="color:#24292e;">      const div = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span style="color:#24292e;">      document.body.appendChild(div);</span></span>
<span class="line"><span style="color:#24292e;">      ModalManager.modalInstance = div;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  static open(content) {</span></span>
<span class="line"><span style="color:#24292e;">    ModalManager.init();</span></span>
<span class="line"><span style="color:#24292e;">    ReactDOM.render(</span></span>
<span class="line"><span style="color:#24292e;">      &lt;ModalWrapper content={content} /&gt;,</span></span>
<span class="line"><span style="color:#24292e;">      ModalManager.modalInstance</span></span>
<span class="line"><span style="color:#24292e;">    );</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  static close() {</span></span>
<span class="line"><span style="color:#24292e;">    ReactDOM.unmountComponentAtNode(ModalManager.modalInstance);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const ModalWrapper = ({ content }) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const closeModal = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    ModalManager.close();</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return (</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div className=&quot;modal&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;div className=&quot;modal-content&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        {content}</span></span>
<span class="line"><span style="color:#24292e;">        &lt;button onClick={closeModal}&gt;关闭&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { ModalManager } from &#39;./ModalManager&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">const SomeComponent = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const openModal = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    ModalManager.open(&lt;h2&gt;这是弹窗的内容&lt;/h2&gt;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return (</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;button onClick={openModal}&gt;打开弹窗&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default SomeComponent;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { ModalManager } from &#39;./ModalManager&#39;</span></span>
<span class="line"><span style="color:#24292e;">const SomeComponent = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const openModal = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    ModalManager.open(&lt;h2&gt;这是弹窗的内容&lt;/h2&gt;);</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return (</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;button onClick={openModal}&gt;打开弹窗&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default SomeComponent;</span></span></code></pre></div>`,2),o=[p];function t(c,r,i,d,y,g){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{m as __pageData,u as default};
