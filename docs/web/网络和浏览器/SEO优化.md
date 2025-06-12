## 前端方法：

## 基础结构优化

#### 1. HTML 语义化

- 使用合适的标签：如 `<article>`、`<section>`、`<header>`、`<nav>`、`<main>`、`<footer>`。
- 重要信息用 `<h1> ~ <h6>`、`<strong>`、`<em>` 等表达语义。
- 提高内容可读性和抓取可理解性。

#### 2. 规范化 URL（Canonical）

- 避免重复内容问题：如分页、筛选参数等使用 `<link rel="canonical">`。
- 确保 www/non-www、带/不带 slash、HTTP/HTTPS 不重复收录。

#### 3. meta 标签优化

- `title`：独特、简洁、含关键词。
- `meta description`：引导点击，提高 CTR。
- `robots`：控制索引与跟踪行为，如 `noindex, nofollow`。

## 页面性能优化

### 1. 页面加载速度
### 2.图片和资源优化

### 3.使用 HTTP/2 或 HTTP/3

### 4. 开启 GZIP 或 Brotli 压缩


## 移动端优化（Mobile First）

- 响应式布局（如媒体查询）。
- 合理设置 `<meta name="viewport" content="width=device-width, initial-scale=1">`
- 按钮可点击区域 ≥ 48px。
- 字体清晰可读，避免内容溢出。


## 安全与可访问性

- 强制 HTTPS。
- 有效的 SSL 证书。
- 可访问性（a11y）：为图片加 `alt`，为表单加 `label`，ARIA 支持等。

## 日志分析与索引跟踪

## 国际化 SEO（如多语言站）

