**IFC 是由内联元素组成的上下文环境**，主要控制文本和行内元素的排版规则

- 文本节点
- `<span>`, `<a>`, `<strong>` 等内联元素
- `display: inline` 的元素


## IFC的布局特点

- **水平排列**：元素按 **从左到右** 的方向水平排列，直到一行排不下才会换行。
- **垂直对齐**：使用 `vertical-align` 控制（如 `top`, `middle`, `baseline`）。
- **不支持宽高**：内联元素的 `width` 和 `height` 通常无效（除非 `display` 被改为块或 inline-block）。
- **可以在 BFC 中嵌套**：IFC 通常嵌套在块级元素（如 `div`）的 BFC 中。

## IFC应用场景
### 控制文本对齐、图片垂直居中

```
<div>
	这是一段文字<img src="../pic/delete.png" />
</div>
```

```
div {
	font-size: 40px;
	background-color: lightblue;;
}

img {
	width: 30px;
	height: 30px;
	vertical-align: middle;
}
```

`vertical-align: middle` 会将图片与文本中线对齐。

![排除外部浮动](/assets/20250610162859.png)


```
 <button>
	删除
	<img src="../pic/delete.png" width="16" height="16" />
</button>
```

```
button {
	padding: 0 20px;
	height: 50px;
	border-radius: 10px;
	font-size: 16px;
	border: none;
}

img {
	width: 16px;
	height: 16px;
	vertical-align: text-bottom; // 看起来会更齐
}
```

![排除外部浮动](/assets/20250610164412.png)


#### 完美垂直居中,使用`inline-flex` `align-items: center`, 不使用IFC的方式

```
<button class="btn">
  <span class="btn-content">
    删除
    <img src="../pic/delete.png" />
  </span>
</button>
```

```
button {
  padding: 0 20px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
}

.btn-content {
  display: inline-flex;
  align-items: center;
  gap: 6px; /* 文字和图标间距 */
}

img {
  width: 16px;
  height: 16px;
}
```