**IFC 是由内联元素组成的上下文环境**，主要控制文本和行内元素的排版规则

- 文本节点
- `<span>`, `<a>`, `<strong>` 等内联元素
- `display: inline` 的元素


## IFC的布局特点

- **水平排列**：元素按 **从左到右** 的方向水平排列，直到一行排不下才会换行。
- **垂直对齐**：使用 `vertical-align` 控制（如 `top`, `middle`, `baseline`）。
- **不支持宽高**：内联元素的 `width` 和 `height` 通常无效（除非 `display` 被改为块或 inline-block）。
- **可以在 BFC 中嵌套**：IFC 通常嵌套在块级元素（如 `div`）的 BFC 中。