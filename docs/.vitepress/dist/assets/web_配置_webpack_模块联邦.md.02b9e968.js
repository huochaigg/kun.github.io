import{_ as s,c as e,o as n,Q as a}from"./chunks/framework.ef145a76.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/配置/webpack/模块联邦.md","filePath":"web/配置/webpack/模块联邦.md"}'),l={name:"web/配置/webpack/模块联邦.md"},p=a(`<h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><p>远程应用暴露出模块：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">new ModuleFederationPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">	name: &#39;remote_app&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	filename: &#39;remoteEntry.js&#39;, // 暴露的远程模块入口文件</span></span>
<span class="line"><span style="color:#e1e4e8;">	exposes: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		&#39;./Button&#39;: &#39;./src/components/Button&#39;, // 暴露模块</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">	shared: [&#39;react&#39;, &#39;react-dom&#39;], // 共享依赖</span></span>
<span class="line"><span style="color:#e1e4e8;">}),</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">new ModuleFederationPlugin({</span></span>
<span class="line"><span style="color:#24292e;">	name: &#39;remote_app&#39;,</span></span>
<span class="line"><span style="color:#24292e;">	filename: &#39;remoteEntry.js&#39;, // 暴露的远程模块入口文件</span></span>
<span class="line"><span style="color:#24292e;">	exposes: {</span></span>
<span class="line"><span style="color:#24292e;">		&#39;./Button&#39;: &#39;./src/components/Button&#39;, // 暴露模块</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">	shared: [&#39;react&#39;, &#39;react-dom&#39;], // 共享依赖</span></span>
<span class="line"><span style="color:#24292e;">}),</span></span></code></pre></div><p>主应用加载</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const { ModuleFederationPlugin } = require(&#39;webpack&#39;).container;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">new ModuleFederationPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">	name: &#39;host_app&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	remotes: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		remote_app: &#39;remote_app@http://localhost:3001/remoteEntry.js&#39;, // 加载远程模块</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">	shared: [&#39;react&#39;, &#39;react-dom&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">}),</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const { ModuleFederationPlugin } = require(&#39;webpack&#39;).container;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">new ModuleFederationPlugin({</span></span>
<span class="line"><span style="color:#24292e;">	name: &#39;host_app&#39;,</span></span>
<span class="line"><span style="color:#24292e;">	remotes: {</span></span>
<span class="line"><span style="color:#24292e;">		remote_app: &#39;remote_app@http://localhost:3001/remoteEntry.js&#39;, // 加载远程模块</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">	shared: [&#39;react&#39;, &#39;react-dom&#39;],</span></span>
<span class="line"><span style="color:#24292e;">}),</span></span></code></pre></div><p>使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const RemoteButton = React.lazy(() =&gt; import(&#39;remote_app/Button&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default function App() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return (</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;React.Suspense fallback=&quot;Loading...&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;RemoteButton /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/React.Suspense&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const RemoteButton = React.lazy(() =&gt; import(&#39;remote_app/Button&#39;));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default function App() {</span></span>
<span class="line"><span style="color:#24292e;">  return (</span></span>
<span class="line"><span style="color:#24292e;">    &lt;React.Suspense fallback=&quot;Loading...&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;RemoteButton /&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/React.Suspense&gt;</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="shared" tabindex="-1">shared <a class="header-anchor" href="#shared" aria-label="Permalink to &quot;shared&quot;">​</a></h2><ul><li><code>singleton</code>: 布尔值，设为 true 时确保只加载一个版本</li><li><code>requiredVersion</code>: 指定所需的版本范围</li><li><code>strictVersion</code>: 布尔值，设为 true 时如果版本不匹配会警告或报错</li><li><code>shareScope</code>: 指定共享作用域的名称</li><li><code>eager</code>: 布尔值，是否立即加载而不是异步加载</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">new ModuleFederationPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;app1&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  shared: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    react: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      singleton: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      requiredVersion: &#39;^17.0.0&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;react-dom&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      singleton: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      requiredVersion: &#39;^17.0.0&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">new ModuleFederationPlugin({</span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;app1&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  shared: {</span></span>
<span class="line"><span style="color:#24292e;">    react: {</span></span>
<span class="line"><span style="color:#24292e;">      singleton: true,</span></span>
<span class="line"><span style="color:#24292e;">      requiredVersion: &#39;^17.0.0&#39;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &#39;react-dom&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">      singleton: true,</span></span>
<span class="line"><span style="color:#24292e;">      requiredVersion: &#39;^17.0.0&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="主要作用" tabindex="-1">主要作用 <a class="header-anchor" href="#主要作用" aria-label="Permalink to &quot;主要作用&quot;">​</a></h2><ol><li><p><strong>共享依赖管理</strong>：</p><ul><li>允许不同的联邦模块(微前端应用)共享相同的依赖库</li><li>避免同一个库被多次加载，减少包体积</li></ul></li><li><p><strong>版本控制</strong>：</p><ul><li>可以指定共享依赖的版本范围</li><li>当版本不匹配时，可以配置降级策略</li></ul></li><li><p><strong>单例模式</strong>：</p><ul><li>确保整个应用中只加载一个库的实例</li><li>避免因多个实例导致的全局状态冲突等问题</li></ul></li></ol>`,12),o=[p];function t(c,r,i,d,u,y){return n(),e("div",null,o)}const m=s(l,[["render",t]]);export{g as __pageData,m as default};
