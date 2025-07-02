import{_ as s,c as e,o as a,Q as n}from"./chunks/framework.ef145a76.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/其他/git.md","filePath":"web/其他/git.md"}'),l={name:"web/其他/git.md"},p=n(`<h2 id="设置" tabindex="-1">设置 <a class="header-anchor" href="#设置" aria-label="Permalink to &quot;设置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git remote -v</span></span>
<span class="line"><span style="color:#e1e4e8;">origin  git@github.com:huochaigg/something.git (fetch)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">git remote set-url origin git@github.com:something/something.git</span></span>
<span class="line"><span style="color:#e1e4e8;">// 或</span></span>
<span class="line"><span style="color:#e1e4e8;">git remote set-url origin https://github.com/something/something.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git remote -v</span></span>
<span class="line"><span style="color:#24292e;">origin  git@github.com:huochaigg/something.git (fetch)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">git remote set-url origin git@github.com:something/something.git</span></span>
<span class="line"><span style="color:#24292e;">// 或</span></span>
<span class="line"><span style="color:#24292e;">git remote set-url origin https://github.com/something/something.git</span></span></code></pre></div><h2 id="提交规范" tabindex="-1">提交规范 <a class="header-anchor" href="#提交规范" aria-label="Permalink to &quot;提交规范&quot;">​</a></h2><h3 id="标准格式" tabindex="-1">标准格式 <a class="header-anchor" href="#标准格式" aria-label="Permalink to &quot;标准格式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 空一行</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 空一行（可选）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;footer&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 空一行</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 空一行（可选）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;footer&gt;</span></span></code></pre></div><p>例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">feat(auth): 添加用户登录功能</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">实现了 JWT 登录验证，支持用户密码校验及 token 生成。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">BREAKING CHANGE: 改动了 auth 模块的接口定义，旧接口已废弃。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">feat(auth): 添加用户登录功能</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">实现了 JWT 登录验证，支持用户密码校验及 token 生成。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">BREAKING CHANGE: 改动了 auth 模块的接口定义，旧接口已废弃。</span></span></code></pre></div><h3 id="类型-type" tabindex="-1">类型（type） <a class="header-anchor" href="#类型-type" aria-label="Permalink to &quot;类型（type）&quot;">​</a></h3><table><thead><tr><th>类型</th><th>含义描述</th></tr></thead><tbody><tr><td><code>feat</code></td><td>✨ 新功能（feature）</td></tr><tr><td><code>fix</code></td><td>🐞 修复 bug</td></tr><tr><td><code>docs</code></td><td>📚 文档改动（如 README）</td></tr><tr><td><code>style</code></td><td>💅 代码格式调整，不影响功能（空格、缩进）</td></tr><tr><td><code>refactor</code></td><td>🔨 重构：既不是新增功能也不是修复 bug</td></tr><tr><td><code>perf</code></td><td>🚀 性能优化</td></tr><tr><td><code>test</code></td><td>🧪 增加测试或测试相关改动</td></tr><tr><td><code>build</code></td><td>📦 构建系统（webpack、gulp）相关</td></tr><tr><td><code>ci</code></td><td>🤖 持续集成配置（GitHub Actions、Jenkins）</td></tr><tr><td><code>chore</code></td><td>🔧 杂务：不属于以上类型的其它改动</td></tr><tr><td><code>revert</code></td><td>⏪ 回滚之前的提交</td></tr></tbody></table><h3 id="分支命名规范" tabindex="-1">分支命名规范 <a class="header-anchor" href="#分支命名规范" aria-label="Permalink to &quot;分支命名规范&quot;">​</a></h3><h4 id="功能类分支-feature-分支" tabindex="-1">功能类分支（Feature 分支） <a class="header-anchor" href="#功能类分支-feature-分支" aria-label="Permalink to &quot;功能类分支（Feature 分支）&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">feature/&lt;模块名&gt;-&lt;功能简述&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">feature/&lt;模块名&gt;-&lt;功能简述&gt;</span></span></code></pre></div><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">feature/login-page</span></span>
<span class="line"><span style="color:#e1e4e8;">feature/user-profile-edit</span></span>
<span class="line"><span style="color:#e1e4e8;">feature/dashboard-chart</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">feature/login-page</span></span>
<span class="line"><span style="color:#24292e;">feature/user-profile-edit</span></span>
<span class="line"><span style="color:#24292e;">feature/dashboard-chart</span></span></code></pre></div><h3 id="修复类分支-bugfix-hotfix" tabindex="-1">修复类分支（Bugfix / Hotfix） <a class="header-anchor" href="#修复类分支-bugfix-hotfix" aria-label="Permalink to &quot;修复类分支（Bugfix / Hotfix）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">bugfix/&lt;模块名&gt;-&lt;问题简述&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">bugfix/&lt;模块名&gt;-&lt;问题简述&gt;</span></span></code></pre></div><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">bugfix/user-info-undefined</span></span>
<span class="line"><span style="color:#e1e4e8;">bugfix/login-error-token</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">bugfix/user-info-undefined</span></span>
<span class="line"><span style="color:#24292e;">bugfix/login-error-token</span></span></code></pre></div><p>紧急线上修复（生产环境）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">hotfix/&lt;描述&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">hotfix/&lt;描述&gt;</span></span></code></pre></div><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">hotfix/payment-timeout</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">hotfix/payment-timeout</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">release/pre // 体验服</span></span>
<span class="line"><span style="color:#e1e4e8;">release/prod // 正式服</span></span>
<span class="line"><span style="color:#e1e4e8;">release/test // 测试服</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">release/pre // 体验服</span></span>
<span class="line"><span style="color:#24292e;">release/prod // 正式服</span></span>
<span class="line"><span style="color:#24292e;">release/test // 测试服</span></span></code></pre></div><h3 id="工作中操作" tabindex="-1">工作中操作 <a class="header-anchor" href="#工作中操作" aria-label="Permalink to &quot;工作中操作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 1. 确保你在 main 分支上</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout main</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 2. 拉取最新远程代码</span></span>
<span class="line"><span style="color:#e1e4e8;">git pull origin main</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 3. 新建一个分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout -b feature/login</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># --- 开始开发、提交代码 ---</span></span>
<span class="line"><span style="color:#e1e4e8;"># 添加文件 → git add .</span></span>
<span class="line"><span style="color:#e1e4e8;"># 提交：git commit -m &quot;feat: 添加登录页面&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 4. 合并回主分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout main</span></span>
<span class="line"><span style="color:#e1e4e8;">git pull origin main  # 确保 main 是最新的</span></span>
<span class="line"><span style="color:#e1e4e8;">git merge feature/login  # 合并新分支</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 5. 推送合并后的代码</span></span>
<span class="line"><span style="color:#e1e4e8;">git push origin main</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 6. （可选）删除本地和远程分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git branch -d feature/login           # 删除本地分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git push origin --delete feature/login  # 删除远程分支</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 1. 确保你在 main 分支上</span></span>
<span class="line"><span style="color:#24292e;">git checkout main</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 2. 拉取最新远程代码</span></span>
<span class="line"><span style="color:#24292e;">git pull origin main</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 3. 新建一个分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout -b feature/login</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># --- 开始开发、提交代码 ---</span></span>
<span class="line"><span style="color:#24292e;"># 添加文件 → git add .</span></span>
<span class="line"><span style="color:#24292e;"># 提交：git commit -m &quot;feat: 添加登录页面&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 4. 合并回主分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout main</span></span>
<span class="line"><span style="color:#24292e;">git pull origin main  # 确保 main 是最新的</span></span>
<span class="line"><span style="color:#24292e;">git merge feature/login  # 合并新分支</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 5. 推送合并后的代码</span></span>
<span class="line"><span style="color:#24292e;">git push origin main</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 6. （可选）删除本地和远程分支</span></span>
<span class="line"><span style="color:#24292e;">git branch -d feature/login           # 删除本地分支</span></span>
<span class="line"><span style="color:#24292e;">git push origin --delete feature/login  # 删除远程分支</span></span></code></pre></div>`,25),t=[p];function o(c,i,r,d,g,h){return a(),e("div",null,t)}const b=s(l,[["render",o]]);export{y as __pageData,b as default};
