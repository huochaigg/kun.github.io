import{_ as s,c as n,o as a,Q as e}from"./chunks/framework.ef145a76.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/微前端/qiankun如何使用.md","filePath":"web/微前端/qiankun如何使用.md"}'),p={name:"web/微前端/qiankun如何使用.md"},l=e(`<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn add qiankun</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn add qiankun</span></span></code></pre></div><h2 id="主应用" tabindex="-1">主应用 <a class="header-anchor" href="#主应用" aria-label="Permalink to &quot;主应用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { registerMicroApps, start } from &#39;qiankun&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">registerMicroApps([</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;react app&#39;, // app name registered</span></span>
<span class="line"><span style="color:#e1e4e8;">    entry: &#39;//localhost:3000&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    container: &#39;#container1&#39;, // 子应用挂载节点</span></span>
<span class="line"><span style="color:#e1e4e8;">    activeRule: &#39;/react_page&#39;, // 激活的路由</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;vue app&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    entry: { scripts: [&#39;//localhost:3001/main.js&#39;] },</span></span>
<span class="line"><span style="color:#e1e4e8;">    container: &#39;#container2&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    activeRule: &#39;/vue_page&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">]);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">start();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { registerMicroApps, start } from &#39;qiankun&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">registerMicroApps([</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;react app&#39;, // app name registered</span></span>
<span class="line"><span style="color:#24292e;">    entry: &#39;//localhost:3000&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    container: &#39;#container1&#39;, // 子应用挂载节点</span></span>
<span class="line"><span style="color:#24292e;">    activeRule: &#39;/react_page&#39;, // 激活的路由</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;vue app&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    entry: { scripts: [&#39;//localhost:3001/main.js&#39;] },</span></span>
<span class="line"><span style="color:#24292e;">    container: &#39;#container2&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    activeRule: &#39;/vue_page&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">]);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">start();</span></span></code></pre></div><p>动态激活子应用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 在 /b 页面某个组件中调用</span></span>
<span class="line"><span style="color:#e1e4e8;">import { loadMicroApp } from &#39;qiankun&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">loadMicroApp({</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;subAppA&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  entry: &#39;//localhost:7100&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  container: document.getElementById(&#39;subapp-a&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">loadMicroApp({</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;subAppB&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  entry: &#39;//localhost:7200&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  container: document.getElementById(&#39;subapp-b&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 在 /b 页面某个组件中调用</span></span>
<span class="line"><span style="color:#24292e;">import { loadMicroApp } from &#39;qiankun&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">loadMicroApp({</span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;subAppA&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  entry: &#39;//localhost:7100&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  container: document.getElementById(&#39;subapp-a&#39;),</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">loadMicroApp({</span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;subAppB&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  entry: &#39;//localhost:7200&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  container: document.getElementById(&#39;subapp-b&#39;),</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>主应用HTML中挂载节点：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!-- index.html --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div id=&quot;container1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div id=&quot;container2&quot;&gt;&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!-- index.html --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div id=&quot;container1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div id=&quot;container2&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><h2 id="子应用" tabindex="-1">子应用 <a class="header-anchor" href="#子应用" aria-label="Permalink to &quot;子应用&quot;">​</a></h2><h3 id="_1-安装-qiankun" tabindex="-1">1. 安装 qiankun <a class="header-anchor" href="#_1-安装-qiankun" aria-label="Permalink to &quot;1. 安装 qiankun&quot;">​</a></h3><h3 id="_2-配置webpack" tabindex="-1">2.配置webpack <a class="header-anchor" href="#_2-配置webpack" aria-label="Permalink to &quot;2.配置webpack&quot;">​</a></h3><p>使用webpack5的模块联邦</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">new ModuleFederationPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;react_page&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  filename: &#39;remoteEntry.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  exposes: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;./App&#39;: &#39;./src/App&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  shared: [&#39;react&#39;, &#39;react-dom&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">new ModuleFederationPlugin({</span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;react_page&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  filename: &#39;remoteEntry.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  exposes: {</span></span>
<span class="line"><span style="color:#24292e;">    &#39;./App&#39;: &#39;./src/App&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  shared: [&#39;react&#39;, &#39;react-dom&#39;],</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p>或者使用qiankun 自己的子应用加载方式(推荐)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// webpack 配置</span></span>
<span class="line"><span style="color:#e1e4e8;">output: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  library: &#39;react_page&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  libraryTarget: &#39;umd&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  chunkLoadingGlobal: &#39;webpackJsonp_react_page&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;">devServer: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  headers: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;, // 允许主应用加载</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// webpack 配置</span></span>
<span class="line"><span style="color:#24292e;">output: {</span></span>
<span class="line"><span style="color:#24292e;">  library: &#39;react_page&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  libraryTarget: &#39;umd&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  chunkLoadingGlobal: &#39;webpackJsonp_react_page&#39;,</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;">devServer: {</span></span>
<span class="line"><span style="color:#24292e;">  headers: {</span></span>
<span class="line"><span style="color:#24292e;">    &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;, // 允许主应用加载</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_3-子应用导出生命周期-react" tabindex="-1">3. 子应用导出生命周期（React） <a class="header-anchor" href="#_3-子应用导出生命周期-react" aria-label="Permalink to &quot;3. 子应用导出生命周期（React）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// src/main.tsx</span></span>
<span class="line"><span style="color:#e1e4e8;">import ReactDOM from &#39;react-dom/client&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import App from &#39;./App&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function render(props: any = {}) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const { container } = props;</span></span>
<span class="line"><span style="color:#e1e4e8;">  const root = ReactDOM.createRoot(</span></span>
<span class="line"><span style="color:#e1e4e8;">    container ? container.querySelector(&#39;#container1&#39;) : document.getElementById(&#39;container1&#39;)!</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">  root.render(&lt;App /&gt;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">if (!(window as any).__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 独立运行时</span></span>
<span class="line"><span style="color:#e1e4e8;">  render();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export async function bootstrap() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">export async function mount(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  render(props);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">export async function unmount(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const { container } = props;</span></span>
<span class="line"><span style="color:#e1e4e8;">  const rootEl = container ? container.querySelector(&#39;#root&#39;) : document.getElementById(&#39;root&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (rootEl) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    ReactDOM.createRoot(rootEl).unmount();</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// src/main.tsx</span></span>
<span class="line"><span style="color:#24292e;">import ReactDOM from &#39;react-dom/client&#39;;</span></span>
<span class="line"><span style="color:#24292e;">import App from &#39;./App&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function render(props: any = {}) {</span></span>
<span class="line"><span style="color:#24292e;">  const { container } = props;</span></span>
<span class="line"><span style="color:#24292e;">  const root = ReactDOM.createRoot(</span></span>
<span class="line"><span style="color:#24292e;">    container ? container.querySelector(&#39;#container1&#39;) : document.getElementById(&#39;container1&#39;)!</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">  root.render(&lt;App /&gt;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">if (!(window as any).__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span style="color:#24292e;">  // 独立运行时</span></span>
<span class="line"><span style="color:#24292e;">  render();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export async function bootstrap() {}</span></span>
<span class="line"><span style="color:#24292e;">export async function mount(props) {</span></span>
<span class="line"><span style="color:#24292e;">  render(props);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">export async function unmount(props) {</span></span>
<span class="line"><span style="color:#24292e;">  const { container } = props;</span></span>
<span class="line"><span style="color:#24292e;">  const rootEl = container ? container.querySelector(&#39;#root&#39;) : document.getElementById(&#39;root&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  if (rootEl) {</span></span>
<span class="line"><span style="color:#24292e;">    ReactDOM.createRoot(rootEl).unmount();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_4-子应用路由设置-react-router" tabindex="-1">4. 子应用路由设置（React Router） <a class="header-anchor" href="#_4-子应用路由设置-react-router" aria-label="Permalink to &quot;4. 子应用路由设置（React Router）&quot;">​</a></h3><p>使用 <code>BrowserRouter</code> 会有冲突, 可以这样修改</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { createBrowserHistory } from &#39;history&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const history = window.__POWERED_BY_QIANKUN__</span></span>
<span class="line"><span style="color:#e1e4e8;">  ? createBrowserHistory({ basename: &#39;/admin&#39; })</span></span>
<span class="line"><span style="color:#e1e4e8;">  : createBrowserHistory();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { createBrowserHistory } from &#39;history&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const history = window.__POWERED_BY_QIANKUN__</span></span>
<span class="line"><span style="color:#24292e;">  ? createBrowserHistory({ basename: &#39;/admin&#39; })</span></span>
<span class="line"><span style="color:#24292e;">  : createBrowserHistory();</span></span></code></pre></div><h2 id="主子应用通信方式" tabindex="-1">主子应用通信方式 <a class="header-anchor" href="#主子应用通信方式" aria-label="Permalink to &quot;主子应用通信方式&quot;">​</a></h2><p>主应用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">registerMicroApps([</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;subapp-admin&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    entry: &#39;//localhost:7100&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    container: &#39;#subapp-container&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    activeRule: &#39;/admin&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    props: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      userInfo: { name: &#39;kun&#39; },</span></span>
<span class="line"><span style="color:#e1e4e8;">      onGlobalStateChange: ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">registerMicroApps([</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;subapp-admin&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    entry: &#39;//localhost:7100&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    container: &#39;#subapp-container&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    activeRule: &#39;/admin&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    props: {</span></span>
<span class="line"><span style="color:#24292e;">      userInfo: { name: &#39;kun&#39; },</span></span>
<span class="line"><span style="color:#24292e;">      onGlobalStateChange: ...</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">]);</span></span></code></pre></div><p>子应用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export async function mount(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&#39;主应用传来数据&#39;, props.userInfo);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export async function mount(props) {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;主应用传来数据&#39;, props.userInfo);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>复杂通信：使用 <code>initGlobalState</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 主应用</span></span>
<span class="line"><span style="color:#e1e4e8;">const actions = initGlobalState({ user: &#39;kun&#39; });</span></span>
<span class="line"><span style="color:#e1e4e8;">actions.onGlobalStateChange((state, prev) =&gt; console.log(state));</span></span>
<span class="line"><span style="color:#e1e4e8;">actions.setGlobalState({ user: &#39;new_user&#39; });</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 子应用 mount(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">props.onGlobalStateChange((state) =&gt; {...});</span></span>
<span class="line"><span style="color:#e1e4e8;">props.setGlobalState({...});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 主应用</span></span>
<span class="line"><span style="color:#24292e;">const actions = initGlobalState({ user: &#39;kun&#39; });</span></span>
<span class="line"><span style="color:#24292e;">actions.onGlobalStateChange((state, prev) =&gt; console.log(state));</span></span>
<span class="line"><span style="color:#24292e;">actions.setGlobalState({ user: &#39;new_user&#39; });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 子应用 mount(props)</span></span>
<span class="line"><span style="color:#24292e;">props.onGlobalStateChange((state) =&gt; {...});</span></span>
<span class="line"><span style="color:#24292e;">props.setGlobalState({...});</span></span></code></pre></div><h2 id="qiankun沙箱隔离" tabindex="-1">Qiankun沙箱隔离 <a class="header-anchor" href="#qiankun沙箱隔离" aria-label="Permalink to &quot;Qiankun沙箱隔离&quot;">​</a></h2><p><a href="https://juejin.cn/post/7431455846150242354" target="_blank" rel="noreferrer">https://juejin.cn/post/7431455846150242354</a></p><h2 id="个人疑问" tabindex="-1">个人疑问： <a class="header-anchor" href="#个人疑问" aria-label="Permalink to &quot;个人疑问：&quot;">​</a></h2><ol><li>qiankun 主应用如何封装一些组件，供子应用使用？而不使用webpack5的模块联邦, 如何通过主应用传递一个组件的形式给子应用？还有没有别的方法？</li><li>qiankun跨webpack和vite使用</li><li>SSR应用和非SSR应用如何使用qiankun做成微前端形式，比如官网和后台</li></ol>`,31),o=[l];function c(t,r,i,y,d,u){return a(),n("div",null,o)}const b=s(p,[["render",c]]);export{g as __pageData,b as default};
