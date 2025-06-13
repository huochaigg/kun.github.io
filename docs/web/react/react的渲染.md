
react的渲染主要分为两大阶段

| 阶段                     | 描述                                       | 特点                                     |
| ---------------------- | ---------------------------------------- | -------------------------------------- |
| **Render Phase（渲染阶段）** | 计算新的 UI 树，调用组件函数，返回虚拟 DOM（VNode/Fiber 树） | 可以被打断，**纯计算，不触发副作用**                   |
| **Commit Phase（提交阶段）** | 把变化应用到 DOM 上（副作用也在这阶段执行）                 | 不可中断，**执行副作用，如 DOM 更新、ref 设置、生命周期回调等** |

## 初始挂载流程：

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

#### Render Phase

1. **调用 `render()` 或函数组件，生成虚拟 DOM 树（React Element）**
2. **React 创建 Fiber 树结构**
3. **对每个组件调用**（函数组件调用函数，类组件调用 `render()`）构建每层子 Fiber
4. **协调（Reconciliation）**：确定哪些节点要插入、删除、更新

注：此阶段可以被中断（支持时间分片、优先级、并发等）

#### Commit Phase

1. 将变化应用到真实 DOM（如 `appendChild`）
2. 执行副作用：
    - `componentDidMount`
    - `useEffect`（在 Layout Effects 之后）
    - 设置 `ref`


## 更新流程：

当组件的 `state`、`props` 或 `context` 变化时，会触发更新。

####  Render Phase

1. 调用函数组件或 `render()` 方法重新生成新的虚拟 DOM 树
2. 与旧的 Fiber 树做 **Diff 对比**
3. 标记需要更新、移动或删除的节点（即：effectList）

####  Commit Phase

1. 应用真实 DOM 的更新（只更新变化的部分）
2. 执行副作用：

    - `componentDidUpdate`
    - `useEffect`
    - `ref` 更新
    - `useLayoutEffect`（同步执行）