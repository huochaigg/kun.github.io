import{_ as s,c as a,o as n,Q as e}from"./chunks/framework.ef145a76.js";const l="/kun.github.io/assets/20250715172715.75f249d1.png",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/网络和浏览器/前端优化相关.md","filePath":"web/网络和浏览器/前端优化相关.md"}'),p={name:"web/网络和浏览器/前端优化相关.md"},o=e(`<h2 id="资源加载优化" tabindex="-1">资源加载优化 <a class="header-anchor" href="#资源加载优化" aria-label="Permalink to &quot;资源加载优化&quot;">​</a></h2><h3 id="_1-减少资源体积" tabindex="-1">1.减少资源体积 <a class="header-anchor" href="#_1-减少资源体积" aria-label="Permalink to &quot;1.减少资源体积&quot;">​</a></h3><p>——————————</p><h4 id="使用图片压缩" tabindex="-1">使用图片压缩 <a class="header-anchor" href="#使用图片压缩" aria-label="Permalink to &quot;使用图片压缩&quot;">​</a></h4><p>熊猫压缩，ImageMagick</p><h4 id="使用svg-icon-font-代替图标" tabindex="-1">使用svg icon/font 代替图标 <a class="header-anchor" href="#使用svg-icon-font-代替图标" aria-label="Permalink to &quot;使用svg icon/font 代替图标&quot;">​</a></h4><p>传统方法，雪碧图</p><h4 id="压缩-js-css-terser、cssnano" tabindex="-1">压缩 JS/CSS（Terser、cssnano） <a class="header-anchor" href="#压缩-js-css-terser、cssnano" aria-label="Permalink to &quot;压缩 JS/CSS（Terser、cssnano）&quot;">​</a></h4><p>webpack5已经内置js的压缩：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mode: &#39;production&#39;, // 自动启用TerserPlugin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mode: &#39;production&#39;, // 自动启用TerserPlugin</span></span></code></pre></div><p>css需要配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const CssMinimizerPlugin = require(&#39;css-minimizer-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  mode: &#39;production&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  optimization: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    minimize: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    minimizer: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;...&#39;, // 继承默认的 TerserPlugin</span></span>
<span class="line"><span style="color:#e1e4e8;">      new CssMinimizerPlugin(),</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const CssMinimizerPlugin = require(&#39;css-minimizer-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  mode: &#39;production&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  optimization: {</span></span>
<span class="line"><span style="color:#24292e;">    minimize: true,</span></span>
<span class="line"><span style="color:#24292e;">    minimizer: [</span></span>
<span class="line"><span style="color:#24292e;">      &#39;...&#39;, // 继承默认的 TerserPlugin</span></span>
<span class="line"><span style="color:#24292e;">      new CssMinimizerPlugin(),</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h4 id="tree-shaking-移除未使用的代码" tabindex="-1">Tree Shaking（移除未使用的代码） <a class="header-anchor" href="#tree-shaking-移除未使用的代码" aria-label="Permalink to &quot;Tree Shaking（移除未使用的代码）&quot;">​</a></h4><p>webpack2+和vite自动支持</p><h4 id="按需引入第三方库-lodash、ant-design、elementui-等" tabindex="-1">按需引入第三方库（lodash、ant-design、elementUI 等） <a class="header-anchor" href="#按需引入第三方库-lodash、ant-design、elementui-等" aria-label="Permalink to &quot;按需引入第三方库（lodash、ant-design、elementUI 等）&quot;">​</a></h4><h4 id="使用-webp-格式替代-jpg-png" tabindex="-1">使用 WebP 格式替代 JPG/PNG <a class="header-anchor" href="#使用-webp-格式替代-jpg-png" aria-label="Permalink to &quot;使用 WebP 格式替代 JPG/PNG&quot;">​</a></h4><p>转换png，jpg格式图片成WebP</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn add image-webpack-loader webp-loader file-loader -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn add image-webpack-loader webp-loader file-loader -D</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// webpack.config.js</span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    rules: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        test: /\\.(jpe?g|png)$/i,</span></span>
<span class="line"><span style="color:#e1e4e8;">        use: [</span></span>
<span class="line"><span style="color:#e1e4e8;">          {</span></span>
<span class="line"><span style="color:#e1e4e8;">            loader: &#39;file-loader&#39;, // 输出 WebP 文件</span></span>
<span class="line"><span style="color:#e1e4e8;">            options: {</span></span>
<span class="line"><span style="color:#e1e4e8;">              name: &#39;[name].[hash].[ext]&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">              outputPath: &#39;images/&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">            },</span></span>
<span class="line"><span style="color:#e1e4e8;">          },</span></span>
<span class="line"><span style="color:#e1e4e8;">          {</span></span>
<span class="line"><span style="color:#e1e4e8;">            loader: &#39;webp-loader&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">            options: {</span></span>
<span class="line"><span style="color:#e1e4e8;">              quality: 85,</span></span>
<span class="line"><span style="color:#e1e4e8;">            },</span></span>
<span class="line"><span style="color:#e1e4e8;">          },</span></span>
<span class="line"><span style="color:#e1e4e8;">        ],</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// webpack.config.js</span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  module: {</span></span>
<span class="line"><span style="color:#24292e;">    rules: [</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        test: /\\.(jpe?g|png)$/i,</span></span>
<span class="line"><span style="color:#24292e;">        use: [</span></span>
<span class="line"><span style="color:#24292e;">          {</span></span>
<span class="line"><span style="color:#24292e;">            loader: &#39;file-loader&#39;, // 输出 WebP 文件</span></span>
<span class="line"><span style="color:#24292e;">            options: {</span></span>
<span class="line"><span style="color:#24292e;">              name: &#39;[name].[hash].[ext]&#39;,</span></span>
<span class="line"><span style="color:#24292e;">              outputPath: &#39;images/&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">          },</span></span>
<span class="line"><span style="color:#24292e;">          {</span></span>
<span class="line"><span style="color:#24292e;">            loader: &#39;webp-loader&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            options: {</span></span>
<span class="line"><span style="color:#24292e;">              quality: 85,</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">          },</span></span>
<span class="line"><span style="color:#24292e;">        ],</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>vite中使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn add vite-plugin-imagemin -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn add vite-plugin-imagemin -D</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import viteImagemin from &#39;vite-plugin-imagemin&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    viteImagemin({</span></span>
<span class="line"><span style="color:#e1e4e8;">      webp: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        quality: 80,</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    }),</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import viteImagemin from &#39;vite-plugin-imagemin&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [</span></span>
<span class="line"><span style="color:#24292e;">    viteImagemin({</span></span>
<span class="line"><span style="color:#24292e;">      webp: {</span></span>
<span class="line"><span style="color:#24292e;">        quality: 80,</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    }),</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>转换为 WebP 后，建议使用 <code>&lt;picture&gt;</code> 标签，以适配不同浏览器:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;picture&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;source srcset=&quot;/assets/image.webp&quot; type=&quot;image/webp&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;img src=&quot;/assets/image.jpg&quot; alt=&quot;示例图片&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/picture&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;picture&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;source srcset=&quot;/assets/image.webp&quot; type=&quot;image/webp&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;img src=&quot;/assets/image.jpg&quot; alt=&quot;示例图片&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/picture&gt;</span></span></code></pre></div><ul><li>Chrome、Firefox、Edge 会优先加载 WebP</li><li>Safari（旧）或 IE 等不支持 WebP 会加载 fallback 图</li></ul><h3 id="_2-减少资源请求数量" tabindex="-1">2. 减少资源请求数量 <a class="header-anchor" href="#_2-减少资源请求数量" aria-label="Permalink to &quot;2. 减少资源请求数量&quot;">​</a></h3><p>——————————————</p><h4 id="雪碧图" tabindex="-1">雪碧图 <a class="header-anchor" href="#雪碧图" aria-label="Permalink to &quot;雪碧图&quot;">​</a></h4><p>现在可以用SVG Icon + HTTP/2替代 放在阿里矢量图库中</p><h4 id="使用-http-2-多路复用" tabindex="-1">使用 HTTP/2 多路复用 <a class="header-anchor" href="#使用-http-2-多路复用" aria-label="Permalink to &quot;使用 HTTP/2 多路复用&quot;">​</a></h4><h4 id="使用-base64-编码嵌入小图标-2kb" tabindex="-1">使用 Base64 编码嵌入小图标（&lt; 2KB） <a class="header-anchor" href="#使用-base64-编码嵌入小图标-2kb" aria-label="Permalink to &quot;使用 Base64 编码嵌入小图标（&lt; 2KB）&quot;">​</a></h4><p>webpack：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  test: /\\.(png|jpg|gif)$/i,</span></span>
<span class="line"><span style="color:#e1e4e8;">  type: &#39;asset&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  parser: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    dataUrlCondition: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      maxSize: 2 * 1024 // 小于 2KB 自动转 base64</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// type: &#39;asset&#39; 是 Webpack 5 的通用资源类型，会自动判断是否转 base64</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  test: /\\.(png|jpg|gif)$/i,</span></span>
<span class="line"><span style="color:#24292e;">  type: &#39;asset&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  parser: {</span></span>
<span class="line"><span style="color:#24292e;">    dataUrlCondition: {</span></span>
<span class="line"><span style="color:#24292e;">      maxSize: 2 * 1024 // 小于 2KB 自动转 base64</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// type: &#39;asset&#39; 是 Webpack 5 的通用资源类型，会自动判断是否转 base64</span></span></code></pre></div><p>vite:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  build: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    assetsInlineLimit: 2048, // 2KB 以下 base64</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  build: {</span></span>
<span class="line"><span style="color:#24292e;">    assetsInlineLimit: 2048, // 2KB 以下 base64</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h3 id="_3-资源懒加载" tabindex="-1">3.资源懒加载 <a class="header-anchor" href="#_3-资源懒加载" aria-label="Permalink to &quot;3.资源懒加载&quot;">​</a></h3><p>————————————</p><h4 id="图片懒加载" tabindex="-1">图片懒加载 <a class="header-anchor" href="#图片懒加载" aria-label="Permalink to &quot;图片懒加载&quot;">​</a></h4><h4 id="路由懒加载" tabindex="-1">路由懒加载 <a class="header-anchor" href="#路由懒加载" aria-label="Permalink to &quot;路由懒加载&quot;">​</a></h4><h2 id="构建优化-工程化提速" tabindex="-1">构建优化（工程化提速） <a class="header-anchor" href="#构建优化-工程化提速" aria-label="Permalink to &quot;构建优化（工程化提速）&quot;">​</a></h2><h3 id="开启缓存" tabindex="-1">开启缓存 <a class="header-anchor" href="#开启缓存" aria-label="Permalink to &quot;开启缓存&quot;">​</a></h3><h3 id="使用多线程构建-如-thread-loader、swc-loader" tabindex="-1">使用多线程构建（如 <code>thread-loader</code>、<code>swc-loader</code>） <a class="header-anchor" href="#使用多线程构建-如-thread-loader、swc-loader" aria-label="Permalink to &quot;使用多线程构建（如 \`thread-loader\`、\`swc-loader\`）&quot;">​</a></h3><h3 id="编译目标配置为现代浏览器-targets-设置合理" tabindex="-1">编译目标配置为现代浏览器（<code>targets</code> 设置合理） <a class="header-anchor" href="#编译目标配置为现代浏览器-targets-设置合理" aria-label="Permalink to &quot;编译目标配置为现代浏览器（\`targets\` 设置合理）&quot;">​</a></h3><p>vite:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  build: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    target: &#39;es2018&#39;, // 默认 esmodules，可配置更高</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  build: {</span></span>
<span class="line"><span style="color:#24292e;">    target: &#39;es2018&#39;, // 默认 esmodules，可配置更高</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p>webpack:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  build: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    target: &#39;es2018&#39;, // 默认 esmodules，可配置更高</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  build: {</span></span>
<span class="line"><span style="color:#24292e;">    target: &#39;es2018&#39;, // 默认 esmodules，可配置更高</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h3 id="模块拆分" tabindex="-1">模块拆分 <a class="header-anchor" href="#模块拆分" aria-label="Permalink to &quot;模块拆分&quot;">​</a></h3><p>可以用路由懒加载的方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// react</span></span>
<span class="line"><span style="color:#e1e4e8;">const UserPage = lazy(() =&gt; import(&#39;./pages/User&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// vue</span></span>
<span class="line"><span style="color:#e1e4e8;">const Home = () =&gt; import(&#39;@/views/Home.vue&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// react</span></span>
<span class="line"><span style="color:#24292e;">const UserPage = lazy(() =&gt; import(&#39;./pages/User&#39;));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// vue</span></span>
<span class="line"><span style="color:#24292e;">const Home = () =&gt; import(&#39;@/views/Home.vue&#39;)</span></span></code></pre></div><h4 id="第三方库拆包-vendor-chunk" tabindex="-1">第三方库拆包（vendor chunk） <a class="header-anchor" href="#第三方库拆包-vendor-chunk" aria-label="Permalink to &quot;第三方库拆包（vendor chunk）&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">optimization: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  splitChunks: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    chunks: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    cacheGroups: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      vendor: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        test: /[\\\\/]node_modules[\\\\/]/,</span></span>
<span class="line"><span style="color:#e1e4e8;">        name: &#39;vendor&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        priority: -10,</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">optimization: {</span></span>
<span class="line"><span style="color:#24292e;">  splitChunks: {</span></span>
<span class="line"><span style="color:#24292e;">    chunks: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    cacheGroups: {</span></span>
<span class="line"><span style="color:#24292e;">      vendor: {</span></span>
<span class="line"><span style="color:#24292e;">        test: /[\\\\/]node_modules[\\\\/]/,</span></span>
<span class="line"><span style="color:#24292e;">        name: &#39;vendor&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        priority: -10,</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>将 React、Vue、lodash 等打到 <code>vendor.js</code></li><li>保持缓存友好性：业务代码更新不会影响 vendor</li></ul><h4 id="公共组件拆包-chunk-提取" tabindex="-1">公共组件拆包（chunk 提取） <a class="header-anchor" href="#公共组件拆包-chunk-提取" aria-label="Permalink to &quot;公共组件拆包（chunk 提取）&quot;">​</a></h4><p>Webpack 配置 cacheGroups：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">splitChunks: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  cacheGroups: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    common: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      name: &#39;common&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      chunks: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      minChunks: 2, // 出现两次就抽离</span></span>
<span class="line"><span style="color:#e1e4e8;">      priority: -20,</span></span>
<span class="line"><span style="color:#e1e4e8;">      reuseExistingChunk: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">splitChunks: {</span></span>
<span class="line"><span style="color:#24292e;">  cacheGroups: {</span></span>
<span class="line"><span style="color:#24292e;">    common: {</span></span>
<span class="line"><span style="color:#24292e;">      name: &#39;common&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      chunks: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      minChunks: 2, // 出现两次就抽离</span></span>
<span class="line"><span style="color:#24292e;">      priority: -20,</span></span>
<span class="line"><span style="color:#24292e;">      reuseExistingChunk: true,</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>Vite 使用的是 Rollup 的 <code>manualChunks</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  build: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    rollupOptions: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      output: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        manualChunks: {</span></span>
<span class="line"><span style="color:#e1e4e8;">          vendor: [&#39;vue&#39;, &#39;vue-router&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">          ui: [&#39;element-plus&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  build: {</span></span>
<span class="line"><span style="color:#24292e;">    rollupOptions: {</span></span>
<span class="line"><span style="color:#24292e;">      output: {</span></span>
<span class="line"><span style="color:#24292e;">        manualChunks: {</span></span>
<span class="line"><span style="color:#24292e;">          vendor: [&#39;vue&#39;, &#39;vue-router&#39;],</span></span>
<span class="line"><span style="color:#24292e;">          ui: [&#39;element-plus&#39;],</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h2 id="使用缓存" tabindex="-1">使用缓存 <a class="header-anchor" href="#使用缓存" aria-label="Permalink to &quot;使用缓存&quot;">​</a></h2><h3 id="http缓存" tabindex="-1">HTTP缓存 <a class="header-anchor" href="#http缓存" aria-label="Permalink to &quot;HTTP缓存&quot;">​</a></h3><h3 id="service-worker-pwa" tabindex="-1">Service Worker（PWA） <a class="header-anchor" href="#service-worker-pwa" aria-label="Permalink to &quot;Service Worker（PWA）&quot;">​</a></h3><h3 id="路由-组件级别的缓存" tabindex="-1">路由，组件级别的缓存 <a class="header-anchor" href="#路由-组件级别的缓存" aria-label="Permalink to &quot;路由，组件级别的缓存&quot;">​</a></h3><h2 id="使用cdn" tabindex="-1">使用CDN <a class="header-anchor" href="#使用cdn" aria-label="Permalink to &quot;使用CDN&quot;">​</a></h2><h2 id="预加载页面" tabindex="-1">预加载页面 <a class="header-anchor" href="#预加载页面" aria-label="Permalink to &quot;预加载页面&quot;">​</a></h2><p><img src="`+l+'" alt="用户体验指标"></p>',65),c=[o];function t(i,r,d,h,y,u){return n(),a("div",null,c)}const m=s(p,[["render",t]]);export{b as __pageData,m as default};
