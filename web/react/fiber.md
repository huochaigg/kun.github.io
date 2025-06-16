
推荐参考：
https://zhuanlan.zhihu.com/p/525244896  // 这一篇讲的很详细

## React 15（以前）

```
function render(node) {
  render(node.child);
  render(node.sibling);
}
```

渲染采用递归遍历组件树, 
问题：**递归调用不可中断，栈帧一层层压入，直到完成为止**。如果组件树很深或更新太多，会卡死主线程。

React 16+ Fiber 架构：

```
let nextUnitOfWork = fiberRoot;

function workLoop(deadline) {
  while (nextUnitOfWork && deadline.timeRemaining() > 1) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }

  if (nextUnitOfWork) {
    requestIdleCallback(workLoop); // 暂停：下次空闲再继续
  } else {
    commitRoot(); // 所有完成后提交
  }
}
```

- 将递归「变成循环」+「每次执行一个小单元」
- 每个小单元就是一个 `FiberNode`

这就是 **可以中断、恢复、调度控制的核心**：递归 → 循环 + 可暂停调度器


## Fiber 是为了解决哪些问题？

- **无法中断的渲染流程：**
    - React 15 及以前版本一旦开始渲染组件树，必须一次性完成，容易卡顿。
- **不支持优先级调度：**
    - 所有更新一视同仁，无法先处理高优先级任务，比如用户输入、动画。
- **并发渲染难以实现：**
    - 之前架构不支持异步更新，无法适配现代需求。