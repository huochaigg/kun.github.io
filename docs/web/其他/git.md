

## 设置

```
git remote -v
origin  git@github.com:huochaigg/something.git (fetch)

git remote set-url origin git@github.com:something/something.git
// 或
git remote set-url origin https://github.com/something/something.git
```

## 提交规范

### 标准格式

```
<type>(<scope>): <subject>

// 空一行

<body>

// 空一行（可选）

<footer>
```

例如：

```
feat(auth): 添加用户登录功能

实现了 JWT 登录验证，支持用户密码校验及 token 生成。

BREAKING CHANGE: 改动了 auth 模块的接口定义，旧接口已废弃。
```

### 类型（type）

| 类型         | 含义描述                              |
| ---------- | --------------------------------- |
| `feat`     | ✨ 新功能（feature）                    |
| `fix`      | 🐞 修复 bug                         |
| `docs`     | 📚 文档改动（如 README）                 |
| `style`    | 💅 代码格式调整，不影响功能（空格、缩进）            |
| `refactor` | 🔨 重构：既不是新增功能也不是修复 bug            |
| `perf`     | 🚀 性能优化                           |
| `test`     | 🧪 增加测试或测试相关改动                    |
| `build`    | 📦 构建系统（webpack、gulp）相关           |
| `ci`       | 🤖 持续集成配置（GitHub Actions、Jenkins） |
| `chore`    | 🔧 杂务：不属于以上类型的其它改动                |
| `revert`   | ⏪ 回滚之前的提交                         |

### 分支命名规范

#### 功能类分支（Feature 分支）

```
feature/<模块名>-<功能简述>
```

示例：

```
feature/login-page
feature/user-profile-edit
feature/dashboard-chart
```

### 修复类分支（Bugfix / Hotfix）

```
bugfix/<模块名>-<问题简述>
```

示例：

```
bugfix/user-info-undefined
bugfix/login-error-token
```

紧急线上修复（生产环境）：

```
hotfix/<描述>
```

示例：

```
hotfix/payment-timeout
```


```
release/pre // 体验服
release/prod // 正式服
release/test // 测试服
```

### 工作中操作


```
# 1. 确保你在 main 分支上
git checkout main

# 2. 拉取最新远程代码
git pull origin main

# 3. 新建一个分支
git checkout -b feature/login

# --- 开始开发、提交代码 ---
# 添加文件 → git add .
# 提交：git commit -m "feat: 添加登录页面"

# 4. 合并回主分支
git checkout main
git pull origin main  # 确保 main 是最新的
git merge feature/login  # 合并新分支

# 5. 推送合并后的代码
git push origin main

# 6. （可选）删除本地和远程分支
git branch -d feature/login           # 删除本地分支
git push origin --delete feature/login  # 删除远程分支
```