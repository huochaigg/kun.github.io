import{_ as s,c as a,o as e,Q as n}from"./chunks/framework.ef145a76.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/其他/PM2.md","filePath":"web/其他/PM2.md"}'),p={name:"web/其他/PM2.md"},l=n(`<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install -g pm2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install -g pm2</span></span></code></pre></div><h2 id="启动一个应用" tabindex="-1">启动一个应用 <a class="header-anchor" href="#启动一个应用" aria-label="Permalink to &quot;启动一个应用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pm2 start app.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pm2 start app.js</span></span></code></pre></div><h2 id="启动带参数的命令" tabindex="-1">启动带参数的命令 <a class="header-anchor" href="#启动带参数的命令" aria-label="Permalink to &quot;启动带参数的命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pm2 start app.js --name my-app --watch</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pm2 start app.js --name my-app --watch</span></span></code></pre></div><ul><li><code>--name</code>：指定进程名称（默认用文件名）</li><li><code>--watch</code>：监听文件变动自动重启</li><li><code>--env production</code>：使用生产环境变量（需要配合 ecosystem 文件）</li></ul><h2 id="查看进程列表" tabindex="-1">查看进程列表 <a class="header-anchor" href="#查看进程列表" aria-label="Permalink to &quot;查看进程列表&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pm2 list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pm2 list</span></span></code></pre></div><h2 id="查看详细信息" tabindex="-1">查看详细信息 <a class="header-anchor" href="#查看详细信息" aria-label="Permalink to &quot;查看详细信息&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pm2 show &lt;app_name|id&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pm2 show &lt;app_name|id&gt;</span></span></code></pre></div><h2 id="停止某个进程" tabindex="-1">停止某个进程 <a class="header-anchor" href="#停止某个进程" aria-label="Permalink to &quot;停止某个进程&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pm2 stop &lt;app_name|id&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pm2 stop &lt;app_name|id&gt;</span></span></code></pre></div><h2 id="重启某个进程" tabindex="-1">重启某个进程 <a class="header-anchor" href="#重启某个进程" aria-label="Permalink to &quot;重启某个进程&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pm2 restart &lt;app_name|id&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pm2 restart &lt;app_name|id&gt;</span></span></code></pre></div><h2 id="删除进程" tabindex="-1">删除进程 <a class="header-anchor" href="#删除进程" aria-label="Permalink to &quot;删除进程&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pm2 delete &lt;app_name|id&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pm2 delete &lt;app_name|id&gt;</span></span></code></pre></div><h2 id="使用-json-配置文件-ecosystem-config-js" tabindex="-1">使用 JSON 配置文件（<code>ecosystem.config.js</code>） <a class="header-anchor" href="#使用-json-配置文件-ecosystem-config-js" aria-label="Permalink to &quot;使用 JSON 配置文件（\`ecosystem.config.js\`）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ecosystem.config.js</span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  apps: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">      name: &#39;api&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      script: &#39;./app.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      instances: 2,</span></span>
<span class="line"><span style="color:#e1e4e8;">      exec_mode: &#39;cluster&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      watch: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      env: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        NODE_ENV: &#39;development&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">      env_production: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        NODE_ENV: &#39;production&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 启动方式：</span></span>
<span class="line"><span style="color:#e1e4e8;">pm2 start ecosystem.config.js --env production</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ecosystem.config.js</span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  apps: [</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      name: &#39;api&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      script: &#39;./app.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      instances: 2,</span></span>
<span class="line"><span style="color:#24292e;">      exec_mode: &#39;cluster&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      watch: true,</span></span>
<span class="line"><span style="color:#24292e;">      env: {</span></span>
<span class="line"><span style="color:#24292e;">        NODE_ENV: &#39;development&#39;</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">      env_production: {</span></span>
<span class="line"><span style="color:#24292e;">        NODE_ENV: &#39;production&#39;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 启动方式：</span></span>
<span class="line"><span style="color:#24292e;">pm2 start ecosystem.config.js --env production</span></span></code></pre></div><h2 id="日志" tabindex="-1">日志 <a class="header-anchor" href="#日志" aria-label="Permalink to &quot;日志&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pm2 logs             # 所有日志</span></span>
<span class="line"><span style="color:#e1e4e8;">pm2 logs my-app      # 指定 app 日志</span></span>
<span class="line"><span style="color:#e1e4e8;">pm2 flush            # 清空日志</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pm2 logs             # 所有日志</span></span>
<span class="line"><span style="color:#24292e;">pm2 logs my-app      # 指定 app 日志</span></span>
<span class="line"><span style="color:#24292e;">pm2 flush            # 清空日志</span></span></code></pre></div><h2 id="保存当前进程列表" tabindex="-1">保存当前进程列表 <a class="header-anchor" href="#保存当前进程列表" aria-label="Permalink to &quot;保存当前进程列表&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pm2 save</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">pm2 startup           # 设置开机自启命令</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pm2 save</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">pm2 startup           # 设置开机自启命令</span></span></code></pre></div><h2 id="完整配置" tabindex="-1">完整配置 <a class="header-anchor" href="#完整配置" aria-label="Permalink to &quot;完整配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ecosystem.config.js</span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  apps: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">      name: &#39;my-app&#39;,            // 应用名称（PM2中的名称）</span></span>
<span class="line"><span style="color:#e1e4e8;">      script: &#39;./app.js&#39;,        // 启动文件（相对于 ecosystem 的位置）</span></span>
<span class="line"><span style="color:#e1e4e8;">      args: &#39;&#39;,                  // 启动参数</span></span>
<span class="line"><span style="color:#e1e4e8;">      instances: 2,              // 启动实例数（0 或 max 为根据 CPU 核数）</span></span>
<span class="line"><span style="color:#e1e4e8;">      exec_mode: &#39;cluster&#39;,      // 启动模式（fork 单实例 | cluster 多实例）</span></span>
<span class="line"><span style="color:#e1e4e8;">      watch: false,              // 是否监听文件变化自动重启</span></span>
<span class="line"><span style="color:#e1e4e8;">      ignore_watch: [&#39;node_modules&#39;, &#39;logs&#39;],  // 忽略监听的文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">      autorestart: true,         // 崩溃后自动重启</span></span>
<span class="line"><span style="color:#e1e4e8;">      max_memory_restart: &#39;500M&#39;,// 超过内存重启</span></span>
<span class="line"><span style="color:#e1e4e8;">      env: {                     // 默认环境变量</span></span>
<span class="line"><span style="color:#e1e4e8;">        NODE_ENV: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        PORT: 3000</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">      env_production: {          // 生产环境变量（--env production 会加载）</span></span>
<span class="line"><span style="color:#e1e4e8;">        NODE_ENV: &#39;production&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        PORT: 8080</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">      output: &#39;./logs/out.log&#39;,  // 标准输出日志</span></span>
<span class="line"><span style="color:#e1e4e8;">      error: &#39;./logs/error.log&#39;, // 错误日志</span></span>
<span class="line"><span style="color:#e1e4e8;">      merge_logs: true,          // 多实例日志合并</span></span>
<span class="line"><span style="color:#e1e4e8;">      time: true                 // 日志带时间戳</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ecosystem.config.js</span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  apps: [</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      name: &#39;my-app&#39;,            // 应用名称（PM2中的名称）</span></span>
<span class="line"><span style="color:#24292e;">      script: &#39;./app.js&#39;,        // 启动文件（相对于 ecosystem 的位置）</span></span>
<span class="line"><span style="color:#24292e;">      args: &#39;&#39;,                  // 启动参数</span></span>
<span class="line"><span style="color:#24292e;">      instances: 2,              // 启动实例数（0 或 max 为根据 CPU 核数）</span></span>
<span class="line"><span style="color:#24292e;">      exec_mode: &#39;cluster&#39;,      // 启动模式（fork 单实例 | cluster 多实例）</span></span>
<span class="line"><span style="color:#24292e;">      watch: false,              // 是否监听文件变化自动重启</span></span>
<span class="line"><span style="color:#24292e;">      ignore_watch: [&#39;node_modules&#39;, &#39;logs&#39;],  // 忽略监听的文件夹</span></span>
<span class="line"><span style="color:#24292e;">      autorestart: true,         // 崩溃后自动重启</span></span>
<span class="line"><span style="color:#24292e;">      max_memory_restart: &#39;500M&#39;,// 超过内存重启</span></span>
<span class="line"><span style="color:#24292e;">      env: {                     // 默认环境变量</span></span>
<span class="line"><span style="color:#24292e;">        NODE_ENV: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        PORT: 3000</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">      env_production: {          // 生产环境变量（--env production 会加载）</span></span>
<span class="line"><span style="color:#24292e;">        NODE_ENV: &#39;production&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        PORT: 8080</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">      output: &#39;./logs/out.log&#39;,  // 标准输出日志</span></span>
<span class="line"><span style="color:#24292e;">      error: &#39;./logs/error.log&#39;, // 错误日志</span></span>
<span class="line"><span style="color:#24292e;">      merge_logs: true,          // 多实例日志合并</span></span>
<span class="line"><span style="color:#24292e;">      time: true                 // 日志带时间戳</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="pm2守护进程的原理是什么" tabindex="-1">pm2守护进程的原理是什么? <a class="header-anchor" href="#pm2守护进程的原理是什么" aria-label="Permalink to &quot;pm2守护进程的原理是什么?&quot;">​</a></h2><p>PM2 是一个用于管理 Node.js 进程的工具，它可以在后台启动、守护和监控多个 Node.js 应用程序。PM2 的守护进程原理主要包括以下几个方面：</p><ol><li><p>启动应用：当用户使用 PM2 启动应用时，PM2 会创建一个子进程，并将应用程序作为子进程来启动。同时，PM2 会记录该应用程序的相关信息，如 PID（进程 ID）、状态、日志等，并且会将这些信息保存到 PM2 的数据库中。</p></li><li><p>监控应用：一旦应用程序被启动，PM2 就会监控它的运行情况。如果应用程序意外退出或发生异常，PM2 将会自动重启应用程序。同时，PM2 会定期检查应用程序的资源占用情况，并且可以根据需要调整进程数、CPU 使用率等参数。</p></li><li><p>守护进程：为了确保 PM2 能够长时间稳定运行，PM2 本身也需要一个守护进程来监控其运行情况。该守护进程会定期检查 PM2 的健康状态，并且在 PM2 出现异常情况时进行相应的处理，例如重启进程、发送警告通知等。</p></li><li><p>日志管理：PM2 还提供了丰富的日志管理功能，可以将应用程序的日志导出到文件或远程服务器，并且支持实时查看、过滤等操作。这些日志信息对于排查问题、分析业务数据等都非常有用。</p></li></ol>`,28),o=[l];function c(t,i,r,d,y,h){return e(),a("div",null,o)}const g=s(p,[["render",c]]);export{m as __pageData,g as default};
