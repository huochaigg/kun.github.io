
## 特点

* 只能存储对象
* 弱引用
* 不可遍历

## 基本语法

```
const ws = new WeakSet();

const obj1 = { name: 'obj1' };
const obj2 = { name: 'obj2' };

ws.add(obj1);
ws.add(obj2);

ws.has(obj1); // true
ws.delete(obj1); // true
ws.has(obj1); // false
```


## 和 Set的区别

### Set可以添加任意值，而WeakSet只能添加对象

### Set强引用，WeakSet弱引用

### Set可遍历：`for...of`、`forEach`、`entries()`，WeakSet不可遍历

### Set有size，支持clear，WeakSet无size,不支持clear


```
const animatingNodes = new WeakSet();

function animate(node) {
  if (animatingNodes.has(node)) return;
  animatingNodes.add(node);

  // 动画执行
  setTimeout(() => {
    animatingNodes.delete(node);
  }, 1000);
}
```

类似“状态池”，但只存对象，自动释放