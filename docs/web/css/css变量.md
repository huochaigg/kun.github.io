
声明变量，一般写到root中，作用域最大
变量名必须以 `--` 开头

```
:root {
  --main-color: #ff6600;
  --font-size: 16px;
}
```

使用：

```
body {
  color: var(--main-color);
  font-size: var(--font-size);
}
```


## 局部作用域

```
.box {
  --bg-color: blue;
}

.box-1 {
  color: var(--bg-color); 
}
```


## JS操作

```
// 修改
document.documentElement.style.setProperty('--bg-color', '#00ff00');

// 获取
getComputedStyle(document.documentElement).getPropertyValue('--bg-color');
```