import{_ as s,c as a,o as n,Q as e}from"./chunks/framework.ef145a76.js";const g=JSON.parse('{"title":"主要模块","description":"","frontmatter":{},"headers":[],"relativePath":"web/配置/webpack/基本配置.md","filePath":"web/配置/webpack/基本配置.md"}'),l={name:"web/配置/webpack/基本配置.md"},p=e(`<h1 id="主要模块" tabindex="-1">主要模块 <a class="header-anchor" href="#主要模块" aria-label="Permalink to &quot;主要模块&quot;">​</a></h1><ul><li>[[##1.entry]]</li><li>[[#2.output]]</li><li>3.loader</li><li>4.plugin</li><li>5.mode(模式)</li></ul><p>Webpack 支持所有符合 <a href="https://kangax.github.io/compat-table/es5/" target="_blank" rel="noreferrer">ES5 标准</a> 的浏览器（不支持 IE8 及以下版本）。webpack 的 <code>import()</code> 和 <code>require.ensure()</code> 需要 <code>Promise</code>。如果你想要支持旧版本浏览器，在使用这些表达式之前，还需要 <a href="https://www.webpackjs.com/guides/shimming/" target="_blank" rel="noreferrer">提前加载 polyfill</a>。</p><h1 id="基本配置文件" tabindex="-1">基本配置文件 <a class="header-anchor" href="#基本配置文件" aria-label="Permalink to &quot;基本配置文件&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// webpack.config.js</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 入口</span></span>
<span class="line"><span style="color:#e1e4e8;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 输出</span></span>
<span class="line"><span style="color:#e1e4e8;">  output: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">    filename: &#39;bundle.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    clean: true, // 每次构建清空 dist</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 模式: &#39;development&#39; 或 &#39;production&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  mode: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 模块加载规则</span></span>
<span class="line"><span style="color:#e1e4e8;">  module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    rules: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        test: /\\.css$/, // 处理 CSS 文件</span></span>
<span class="line"><span style="color:#e1e4e8;">        use: [&#39;style-loader&#39;, &#39;css-loader&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        test: /\\.(png|jpe?g|gif|svg)$/i, // 处理图片资源</span></span>
<span class="line"><span style="color:#e1e4e8;">        type: &#39;asset/resource&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 插件</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">      template: &#39;./public/index.html&#39;, // 使用自定义模板</span></span>
<span class="line"><span style="color:#e1e4e8;">    }),</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 开发服务器配置</span></span>
<span class="line"><span style="color:#e1e4e8;">  devServer: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    static: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">    port: 8080,</span></span>
<span class="line"><span style="color:#e1e4e8;">    open: true, // 自动打开浏览器</span></span>
<span class="line"><span style="color:#e1e4e8;">    hot: true,  // 热更新</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 模块解析配置</span></span>
<span class="line"><span style="color:#e1e4e8;">  resolve: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    extensions: [&#39;.js&#39;, &#39;.json&#39;], // 自动解析扩展名</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// webpack.config.js</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#24292e;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  // 入口</span></span>
<span class="line"><span style="color:#24292e;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 输出</span></span>
<span class="line"><span style="color:#24292e;">  output: {</span></span>
<span class="line"><span style="color:#24292e;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#24292e;">    filename: &#39;bundle.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    clean: true, // 每次构建清空 dist</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 模式: &#39;development&#39; 或 &#39;production&#39;</span></span>
<span class="line"><span style="color:#24292e;">  mode: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 模块加载规则</span></span>
<span class="line"><span style="color:#24292e;">  module: {</span></span>
<span class="line"><span style="color:#24292e;">    rules: [</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        test: /\\.css$/, // 处理 CSS 文件</span></span>
<span class="line"><span style="color:#24292e;">        use: [&#39;style-loader&#39;, &#39;css-loader&#39;],</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        test: /\\.(png|jpe?g|gif|svg)$/i, // 处理图片资源</span></span>
<span class="line"><span style="color:#24292e;">        type: &#39;asset/resource&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 插件</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [</span></span>
<span class="line"><span style="color:#24292e;">    new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#24292e;">      template: &#39;./public/index.html&#39;, // 使用自定义模板</span></span>
<span class="line"><span style="color:#24292e;">    }),</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 开发服务器配置</span></span>
<span class="line"><span style="color:#24292e;">  devServer: {</span></span>
<span class="line"><span style="color:#24292e;">    static: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#24292e;">    port: 8080,</span></span>
<span class="line"><span style="color:#24292e;">    open: true, // 自动打开浏览器</span></span>
<span class="line"><span style="color:#24292e;">    hot: true,  // 热更新</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 模块解析配置</span></span>
<span class="line"><span style="color:#24292e;">  resolve: {</span></span>
<span class="line"><span style="color:#24292e;">    extensions: [&#39;.js&#39;, &#39;.json&#39;], // 自动解析扩展名</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_1-entry" tabindex="-1">1.entry <a class="header-anchor" href="#_1-entry" aria-label="Permalink to &quot;1.entry&quot;">​</a></h2><p><strong>入口起点(entry point)</strong> 指示 webpack 应该使用哪个模块，来作为构建其内部 <a href="https://www.webpackjs.com/concepts/dependency-graph/" target="_blank" rel="noreferrer">依赖图(dependency graph)</a> 的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。 ———— 官网</p><h3 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>等价于</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">entry: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  main: &#39;./src/index.js&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">entry: {</span></span>
<span class="line"><span style="color:#24292e;">  main: &#39;./src/index.js&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="支持的类型" tabindex="-1">支持的类型 <a class="header-anchor" href="#支持的类型" aria-label="Permalink to &quot;支持的类型&quot;">​</a></h3><ol><li><strong>字符串</strong>（单入口）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">entry: &#39;./src/index.js&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">entry: &#39;./src/index.js&#39;</span></span></code></pre></div><p>Webpack 默认将输出文件命名为 <code>main.js</code></p><ol start="2"><li><strong>字符串数组</strong>（单入口 + 多文件）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">entry: [&#39;./src/polyfill.js&#39;, &#39;./src/index.js&#39;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">entry: [&#39;./src/polyfill.js&#39;, &#39;./src/index.js&#39;]</span></span></code></pre></div><p>多个文件合并打包为一个输出文件（按顺序依赖处理，适合引入 polyfill、初始化脚本等）。</p><ol start="3"><li><strong>对象</strong>（多入口）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">entry: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  home: &#39;./src/home.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  about: &#39;./src/about.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  contact: &#39;./src/contact.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">entry: {</span></span>
<span class="line"><span style="color:#24292e;">  home: &#39;./src/home.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  about: &#39;./src/about.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  contact: &#39;./src/contact.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>适用于多页面应用（MPA），每个入口会生成一个对应的 <code>chunk</code>（如 <code>home.js</code>、<code>about.js</code>）。</p><ol start="4"><li><strong>函数</strong>（动态返回 entry）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">entry: () =&gt; &#39;./src/index.js&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">entry: () =&gt; &#39;./src/index.js&#39;</span></span></code></pre></div><p>适用于需要根据条件动态生成入口路径的场景，如自动扫描目录生成入口。</p><ol start="5"><li>高级配置：每个入口额外指定依赖（<code>import</code>）或使用 <code>dependOn</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">entry: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  main: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    import: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    dependOn: &#39;shared&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  admin: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    import: &#39;./src/admin.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    dependOn: &#39;shared&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  shared: &#39;lodash&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">entry: {</span></span>
<span class="line"><span style="color:#24292e;">  main: {</span></span>
<span class="line"><span style="color:#24292e;">    import: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    dependOn: &#39;shared&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  admin: {</span></span>
<span class="line"><span style="color:#24292e;">    import: &#39;./src/admin.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    dependOn: &#39;shared&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  shared: &#39;lodash&#39;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">配合 HtmlWebpackPlugin 多页面输出</span></span>
<span class="line"><span style="color:#e1e4e8;">entry: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  pageA: &#39;./src/pageA.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  pageB: &#39;./src/pageB.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;">plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">  new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">    filename: &#39;a.html&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    chunks: [&#39;pageA&#39;], // 入口 pageA</span></span>
<span class="line"><span style="color:#e1e4e8;">  }),</span></span>
<span class="line"><span style="color:#e1e4e8;">  new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">    filename: &#39;b.html&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    chunks: [&#39;pageB&#39;], // 入口 pageA</span></span>
<span class="line"><span style="color:#e1e4e8;">  }),</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">配合 HtmlWebpackPlugin 多页面输出</span></span>
<span class="line"><span style="color:#24292e;">entry: {</span></span>
<span class="line"><span style="color:#24292e;">  pageA: &#39;./src/pageA.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  pageB: &#39;./src/pageB.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;">plugins: [</span></span>
<span class="line"><span style="color:#24292e;">  new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#24292e;">    filename: &#39;a.html&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    chunks: [&#39;pageA&#39;], // 入口 pageA</span></span>
<span class="line"><span style="color:#24292e;">  }),</span></span>
<span class="line"><span style="color:#24292e;">  new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#24292e;">    filename: &#39;b.html&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    chunks: [&#39;pageB&#39;], // 入口 pageA</span></span>
<span class="line"><span style="color:#24292e;">  }),</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><p>最终注入脚本文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// a.html</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script src=&quot;pageA.js&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// b.html</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script src=&quot;pageB.js&quot;&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// a.html</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;pageA.js&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// b.html</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;pageB.js&quot;&gt;</span></span></code></pre></div><h2 id="_2-output" tabindex="-1">2.output <a class="header-anchor" href="#_2-output" aria-label="Permalink to &quot;2.output&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">output: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">  filename: &#39;[name].[contenthash].js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  assetModuleFilename: &#39;assets/[hash][ext][query]&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  clean: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  publicPath: &#39;/&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">output: {</span></span>
<span class="line"><span style="color:#24292e;">  path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#24292e;">  filename: &#39;[name].[contenthash].js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  assetModuleFilename: &#39;assets/[hash][ext][query]&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  clean: true,</span></span>
<span class="line"><span style="color:#24292e;">  publicPath: &#39;/&#39;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ol><li><p>path 打包后文件的输出目录，必须是绝对路径</p></li><li><p>filename</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">filename: &#39;bundle.js&#39;              // 所有入口文件合并成一个 bundle.js</span></span>
<span class="line"><span style="color:#e1e4e8;">filename: &#39;[name].js&#39;              // 多入口时使用 entry 名作为文件名（如 pageA.js）</span></span>
<span class="line"><span style="color:#e1e4e8;">filename: &#39;[name].[contenthash].js&#39; // 用于生产环境，防缓存</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">filename: &#39;bundle.js&#39;              // 所有入口文件合并成一个 bundle.js</span></span>
<span class="line"><span style="color:#24292e;">filename: &#39;[name].js&#39;              // 多入口时使用 entry 名作为文件名（如 pageA.js）</span></span>
<span class="line"><span style="color:#24292e;">filename: &#39;[name].[contenthash].js&#39; // 用于生产环境，防缓存</span></span></code></pre></div><ol start="3"><li>publicPath 设置打包后资源的<strong>公共访问路径前缀</strong>（影响 HTML 中资源的引用路径）。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">publicPath: &#39;/&#39;           // 默认根路径</span></span>
<span class="line"><span style="color:#e1e4e8;">publicPath: &#39;./&#39;          // 相对路径（用于本地打开 HTML）</span></span>
<span class="line"><span style="color:#e1e4e8;">publicPath: &#39;https://cdn.example.com/assets/&#39; // CDN 路径</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">publicPath: &#39;/&#39;           // 默认根路径</span></span>
<span class="line"><span style="color:#24292e;">publicPath: &#39;./&#39;          // 相对路径（用于本地打开 HTML）</span></span>
<span class="line"><span style="color:#24292e;">publicPath: &#39;https://cdn.example.com/assets/&#39; // CDN 路径</span></span></code></pre></div><p>通常配合 <code>HtmlWebpackPlugin</code> 或动态加载资源用（如懒加载）</p><ol start="4"><li>clean 自动清理输出目录（Webpack 5 新增）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">clean: true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">clean: true</span></span></code></pre></div><ol start="5"><li>assetModuleFilename 设置通过 <code>asset/resource</code> 模式输出的文件名格式。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">assetModuleFilename: &#39;images/[name].[hash][ext]&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">assetModuleFilename: &#39;images/[name].[hash][ext]&#39;</span></span></code></pre></div><ol start="6"><li>chunkFilename 用于动态导入（<code>import()</code>）或代码分割输出的文件名。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">chunkFilename: &#39;[name].[chunkhash].js&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">chunkFilename: &#39;[name].[chunkhash].js&#39;</span></span></code></pre></div><p>7.pathinfo</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pathinfo: true</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 添加模块注释（用于调试）</span></span>
<span class="line"><span style="color:#e1e4e8;">//（默认生产环境为 false）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pathinfo: true</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 添加模块注释（用于调试）</span></span>
<span class="line"><span style="color:#24292e;">//（默认生产环境为 false）</span></span></code></pre></div><h2 id="module使用" tabindex="-1">module使用 <a class="header-anchor" href="#module使用" aria-label="Permalink to &quot;module使用&quot;">​</a></h2><p>module.rule 完整使用，每个规则是一个对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  test: /\\.xxx$/,           // 匹配规则（正则表达式）</span></span>
<span class="line"><span style="color:#e1e4e8;">  use: &#39;loader-name&#39;,       // 使用的 loader（简写）</span></span>
<span class="line"><span style="color:#e1e4e8;">  // or</span></span>
<span class="line"><span style="color:#e1e4e8;">  use: [                    // 多个 loader（从后往前执行）</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;loaderA&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">      loader: &#39;loaderB&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      options: { /* 配置项 */ }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  include: /src/,           // 只处理 src 目录</span></span>
<span class="line"><span style="color:#e1e4e8;">  exclude: /node_modules/,  // 排除 node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">  type: &#39;asset&#39;             // Webpack 5 静态资源模块类型</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  test: /\\.xxx$/,           // 匹配规则（正则表达式）</span></span>
<span class="line"><span style="color:#24292e;">  use: &#39;loader-name&#39;,       // 使用的 loader（简写）</span></span>
<span class="line"><span style="color:#24292e;">  // or</span></span>
<span class="line"><span style="color:#24292e;">  use: [                    // 多个 loader（从后往前执行）</span></span>
<span class="line"><span style="color:#24292e;">    &#39;loaderA&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      loader: &#39;loaderB&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      options: { /* 配置项 */ }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">  include: /src/,           // 只处理 src 目录</span></span>
<span class="line"><span style="color:#24292e;">  exclude: /node_modules/,  // 排除 node_modules</span></span>
<span class="line"><span style="color:#24292e;">  type: &#39;asset&#39;             // Webpack 5 静态资源模块类型</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>处理js/ts/jsx/tsx</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  test: /\\.[jt]sx?$/,</span></span>
<span class="line"><span style="color:#e1e4e8;">  exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#e1e4e8;">  use: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  test: /\\.[jt]sx?$/,</span></span>
<span class="line"><span style="color:#24292e;">  exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#24292e;">  use: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  test: /\\.scss$/,</span></span>
<span class="line"><span style="color:#e1e4e8;">  use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;sass-loader&#39;] // 从后往前执行：先 \`sass-loader\` 编译 SCSS → \`css-loader\` 解析 → \`style-loader\` 插入页面。</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  test: /\\.scss$/,</span></span>
<span class="line"><span style="color:#24292e;">  use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;sass-loader&#39;] // 从后往前执行：先 \`sass-loader\` 编译 SCSS → \`css-loader\` 解析 → \`style-loader\` 插入页面。</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>处理图片/字体（Webpack 5） Webpack 5 引入了原生的资源模块（无需 file-loader/url-loader）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  test: /\\.(png|jpe?g|gif|svg)$/i,</span></span>
<span class="line"><span style="color:#e1e4e8;">  type: &#39;asset&#39;, // 自动在 asset/resource 和 asset/inline 之间选择</span></span>
<span class="line"><span style="color:#e1e4e8;">  parser: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    dataUrlCondition: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      maxSize: 8 * 1024 // 小于 8kb 转 base64</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  test: /\\.(png|jpe?g|gif|svg)$/i,</span></span>
<span class="line"><span style="color:#24292e;">  type: &#39;asset&#39;, // 自动在 asset/resource 和 asset/inline 之间选择</span></span>
<span class="line"><span style="color:#24292e;">  parser: {</span></span>
<span class="line"><span style="color:#24292e;">    dataUrlCondition: {</span></span>
<span class="line"><span style="color:#24292e;">      maxSize: 8 * 1024 // 小于 8kb 转 base64</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li><p><code>asset/resource</code>: 输出文件</p></li><li><p><code>asset/inline</code>: base64</p></li><li><p><code>asset/source</code>: 原始内容（如源码）</p></li><li><p><code>asset</code>: 自动判断</p></li></ul>`,53),o=[p];function c(t,i,r,d,y,h){return n(),a("div",null,o)}const b=s(l,[["render",c]]);export{g as __pageData,b as default};
