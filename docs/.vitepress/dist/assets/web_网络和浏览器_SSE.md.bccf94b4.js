import{_ as s,c as n,o as e,Q as a}from"./chunks/framework.ef145a76.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/网络和浏览器/SSE.md","filePath":"web/网络和浏览器/SSE.md"}'),l={name:"web/网络和浏览器/SSE.md"},p=a(`<h2 id="前端实现" tabindex="-1">前端实现 <a class="header-anchor" href="#前端实现" aria-label="Permalink to &quot;前端实现&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const source = new EventSource(&#39;/sse&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 接收普通消息（data 字段）</span></span>
<span class="line"><span style="color:#e1e4e8;">source.onmessage = function (event) {</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(&#39;收到消息:&#39;, event.data);</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 自定义事件</span></span>
<span class="line"><span style="color:#e1e4e8;">source.addEventListener(&#39;news&#39;, function (event) {</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(&#39;收到 news 事件:&#39;, event.data);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 错误处理</span></span>
<span class="line"><span style="color:#e1e4e8;">source.onerror = function (err) {</span></span>
<span class="line"><span style="color:#e1e4e8;">console.error(&#39;SSE 连接错误:&#39;, err);</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const source = new EventSource(&#39;/sse&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 接收普通消息（data 字段）</span></span>
<span class="line"><span style="color:#24292e;">source.onmessage = function (event) {</span></span>
<span class="line"><span style="color:#24292e;">console.log(&#39;收到消息:&#39;, event.data);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 自定义事件</span></span>
<span class="line"><span style="color:#24292e;">source.addEventListener(&#39;news&#39;, function (event) {</span></span>
<span class="line"><span style="color:#24292e;">console.log(&#39;收到 news 事件:&#39;, event.data);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 错误处理</span></span>
<span class="line"><span style="color:#24292e;">source.onerror = function (err) {</span></span>
<span class="line"><span style="color:#24292e;">console.error(&#39;SSE 连接错误:&#39;, err);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="sse的特点" tabindex="-1">SSE的特点 <a class="header-anchor" href="#sse的特点" aria-label="Permalink to &quot;SSE的特点&quot;">​</a></h2><ol><li>单向的</li><li>浏览器可以自动重连</li><li>可以自定义事件</li><li>Chrome、Firefox、Safari、Edge 都支持，IE不支持</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 服务端发送</span></span>
<span class="line"><span style="color:#e1e4e8;">res.write(\`event: news\\n\`);</span></span>
<span class="line"><span style="color:#e1e4e8;">res.write(\`data: {&quot;title&quot;:&quot;xx&quot;}\\n\\n\`);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// SSE 协议规定，每一条事件的结构可以是多行，每行是一个字段（如 \`event:\`、\`data:\`、\`id:\` 等），只要最后以两个换行 \`\\n\\n\` 结尾，就构成一条完整的事件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 前端自定义事件中的news 就可以接收到</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 服务端发送</span></span>
<span class="line"><span style="color:#24292e;">res.write(\`event: news\\n\`);</span></span>
<span class="line"><span style="color:#24292e;">res.write(\`data: {&quot;title&quot;:&quot;xx&quot;}\\n\\n\`);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// SSE 协议规定，每一条事件的结构可以是多行，每行是一个字段（如 \`event:\`、\`data:\`、\`id:\` 等），只要最后以两个换行 \`\\n\\n\` 结尾，就构成一条完整的事件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 前端自定义事件中的news 就可以接收到</span></span></code></pre></div><p>AI聊天为什么选择用SSE而不用websocket？ 个人理解，因为websocket是一个ws长连接，适用于双方通信，实时通信的场景，资源耗费高，操作起来比较复杂，还需要判断心跳重连，而SSE是单相通信的，并且实现简单，资源耗费少</p>`,6),o=[p];function c(t,r,i,d,y,u){return e(),n("div",null,o)}const v=s(l,[["render",c]]);export{h as __pageData,v as default};
