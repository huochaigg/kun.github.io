## 在react中，setState是同步还是异步的？

分两种情况，在react18+以后，因为react内部增加了批处理功能，几乎所有setState都是异步的

### react18+以前

```
setTimeout(() => {
  setState(1); // 同步执行一次 setState
  setState(2); // 再同步执行一次 setState
});
```

在setTimeout, setInterval, Promise, 或是一些微任务中是同步的

函数式 `setState` 解决异步依赖

```
this.setState((prevState) => ({ count: prevState.count + 1 }));

// hooks
setData(count => count + 1)
```

### react18+以后

默认启用自动批处理，即使是 `setTimeout`、Promise 等场景也会被批量处理

```
// React 18 中以下代码会批量更新
setTimeout(() => {
	setCount(c => c + 1);
	setName("New Name");
}, 1000);
```

#### 如何手动控制批处理

```
import { flushSync } from 'react-dom';

flushSync(() => {
  setCount(c => c + 1); // 立即更新
});
```

旧版本：

```
import { unstable_batchedUpdates } from 'react-dom';

setTimeout(() => {
  unstable_batchedUpdates(() => { // 批处理
    setCount(c => c + 1);
    setName("New Name");
  });
}, 1000);
```