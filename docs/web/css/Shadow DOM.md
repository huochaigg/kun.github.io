Shadow DOM 是浏览器原生支持的一种 DOM 隔离机制，它允许我们为一个元素创建一个**隐藏的 DOM 树**，这个 DOM 树与主文档的 DOM 相互独立。

## 创建 Shadow DOM

```
const host = document.querySelector('#my-element');
const shadowRoot = host.attachShadow({ mode: 'open' }); // or 'closed'
```

- `open` 模式：`element.shadowRoot` 可以访问到 shadowRoot。
- `closed` 模式：`element.shadowRoot === null`，外部无法访问 shadowRoot


## 在react中的应用

```
const ShadowBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shadowRoot = containerRef.current!.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        p { color: red; font-weight: bold; }
      </style>
      <p>Shadow DOM</p>
    `;
  }, []);

  return <div ref={containerRef}></div>;
};
```

## 在qiankun中的应用

```
registerMicroApps([
  {
    name: 'vue-app',
    entry: '//localhost:8081',
    container: '#subapp-container',
    activeRule: '/vue',
    props: { someData: 'hello' }
  }
], {
  sandbox: {
    strictStyleIsolation: true // 启用 Shadow DOM 隔离
  }
})

// 可以设置 `experimentalStyleIsolation: true`，开启“伪 Shadow DOM”隔离（通过添加 `data-qiankun` 属性选择器限制样式作用域
```