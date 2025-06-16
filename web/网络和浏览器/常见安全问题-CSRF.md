
CSRF（跨站请求伪造）

- 攻击者诱导用户在**登录状态**下访问恶意页面
    
- 利用浏览器**自动携带身份凭证（如 Cookie）**的特性
    
- 向受信任网站发起请求，并伪装成用户

## 原理：

攻击者诱导用户点击一个链接、按钮、下载文件或触发下载动作，这会导致用户浏览器向目标网站发起请求，并带上身份 Cookie，从而完成敏感操作。

例子一：链接诱导下载触发操作

```
<a href="https://bank.com/export?delete=true" download="abc.csv">点击下载报表</a>
```

* 用户以为是下载报表，其实是 GET 请求带有危险参数：?delete=true

* 服务器如果误把这当作合法操作，比如“导出并删除数据”，用户数据就被删除了

例子二：构造 blob 下载诱导 POST

```
<form id="hack" action="https://bank.com/deleteAllData" method="POST" style="display:none">
  <input type="hidden" name="confirm" value="yes">
</form>
<a href="javascript:document.getElementById('hack').submit()">点击下载文件</a>
```

* 用户以为是下载操作，点了以后实际是偷偷发起了删除请求

例子三：通过恶意 zip / exe 等触发特殊行为

* 用户下载了一个 zip 文件

* 文件名链接中带了副作用参数（某些系统会自动解析）

* 少数老旧浏览器或服务会错误执行这些“点击下载”背后的请求


## 防御方法：

### CSRF token

- 服务器给每个用户生成一个 **一次性 token**
    
- 这个 token 不放在 Cookie 里，而是通过页面注入或接口返回给前端
    
- 前端每次提交请求时必须显式带上这个 token（如放在 header 或 body 中）
    
- 后端检查 token 是否正确，防止伪造请求

```
// 假设从 HTML 中获取的 token
const token = document.querySelector('meta[name="csrf-token"]').content

fetch("/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-Token": token
  },
  body: JSON.stringify({ to: "hacker", amount: 1000 })
})
```

这样攻击者拿不到token，（不同源、token 不在 cookie， 没法访问页面的 DOM）

注意：CSRF token前端不要存储在cookie或者localStorage中，可以存储在状态管理中，每次刷新重新请求数据拿CSRF token

或者服务端注入meta标签中

```
<head>
  <meta name="csrf-token" content="abc123xyz">
</head>
```
### SameSite Cookie

通过浏览器原生机制，阻止跨站请求时携带 Cookie。

```
Set-Cookie: session=abc123; SameSite=Strict; HttpOnly; Secure
```

| SameSite 值 | 作用                         |
| ---------- | -------------------------- |
| `Strict`   | 完全不允许跨站请求带上 Cookie（推荐）✅    |
| `Lax`      | 限制性允许 GET 请求带 Cookie（适中）⚠️ |
| `None`     | 不限制，但必须 `Secure` 才行（最弱）⚠️  |

### 限制 `Content-Type`

浏览器在跨站请求中只能伪造非常**有限的 Content-Type（称为“简单请求”）**

#### 浏览器允许的“简单请求”：

- `Content-Type: application/x-www-form-urlencoded`
- `Content-Type: multipart/form-data`
- `Content-Type: text/plain`

黑客构造 POST 表单就是用的 `application/x-www-form-urlencoded`

所以服务器可以只接受 JSON 请求（非简单请求）：

```
 Content-Type: application/json
```


### 检查 Referer / Origin 请求头

- 在请求头中，浏览器会带上 Referer 或 Origin，表明请求来源
- 后端检查是否来自本站

这种方式**可以做辅助判断**

