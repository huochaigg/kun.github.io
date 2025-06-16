import{_ as s,c as n,o as a,d as l}from"./app.b8b79069.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/react/\u5199\u4E00\u4E2A\u5F39\u7A97\u7EC4\u4EF6.md"}'),p={name:"web/react/\u5199\u4E00\u4E2A\u5F39\u7A97\u7EC4\u4EF6.md"},e=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import React, { useRef } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export class ModalManager {</span></span>
<span class="line"><span style="color:#A6ACCD;">  static modalInstance = null;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  static init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!ModalManager.modalInstance) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const div = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      document.body.appendChild(div);</span></span>
<span class="line"><span style="color:#A6ACCD;">      ModalManager.modalInstance = div;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  static open(content) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ModalManager.init();</span></span>
<span class="line"><span style="color:#A6ACCD;">    ReactDOM.render(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;ModalWrapper content={content} /&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      ModalManager.modalInstance</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  static close() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ReactDOM.unmountComponentAtNode(ModalManager.modalInstance);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const ModalWrapper = ({ content }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const closeModal = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ModalManager.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div className=&quot;modal&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div className=&quot;modal-content&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {content}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button onClick={closeModal}&gt;\u5173\u95ED&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import { ModalManager } from &#39;./ModalManager&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const SomeComponent = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const openModal = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ModalManager.open(&lt;h2&gt;\u8FD9\u662F\u5F39\u7A97\u7684\u5185\u5BB9&lt;/h2&gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={openModal}&gt;\u6253\u5F00\u5F39\u7A97&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default SomeComponent;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[e];function t(c,C,A,r,i,d){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{D as __pageData,g as default};
