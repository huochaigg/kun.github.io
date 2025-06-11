官方：[https://zh-hans.react.dev/reference/react/useSyncExternalStore](https://zh-hans.react.dev/reference/react/useSyncExternalStore)

## 为什么需要 `useSyncExternalStore`？

在 React 18 引入并发特性（Concurrent Mode）之后，原有的外部订阅逻辑（比如直接在 `useEffect` 中订阅 store）会出现 **快照不一致的问题**：

- React 渲染的是旧值；
- 渲染期间状态变化了；
- 最终显示的 UI 与实际状态不同，导致 “撕裂”。

#### 参数 

- `subscribe`：一个函数，接收一个单独的 `callback` 参数并把它订阅到 store 上。当 store 发生改变时会调用提供的 `callback`，这将导致 React 重新调用 `getSnapshot` 并在需要的时候重新渲染组件。`subscribe` 函数会返回清除订阅的函数。
 
- `getSnapshot`：一个函数，返回组件需要的 store 中的数据快照。在 store 不变的情况下，重复调用 `getSnapshot` 必须返回同一个值。如果 store 改变，并且返回值也不同了（用 [`Object.is`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 比较），React 就会重新渲染组件。

- **可选** `getServerSnapshot`：一个函数，返回 store 中数据的初始快照。它只会在服务端渲染时，以及在客户端进行服务端渲染内容的激活时被用到。快照在服务端与客户端之间必须相同，它通常是从服务端序列化并传到客户端的。如果你忽略此参数，在服务端渲染这个组件会抛出一个错误。

## 注意事项

1. `getSnapshot` 需要返回一个不可变的数据
2. 第三个参数`getServerSnapshot`需要在确保客户端初始渲染与服务端渲染时返回完全相同的数据
3. `subscribe` 函数可以写到组件外部，以免每次重新渲染组件都被调用

### 代码问题：

```
import { useSyncExternalStore } from 'react'

// 订阅鼠标移动事件
function subscribe(callback: () => void) {
  window.addEventListener("mousemove", callback);
  return () => window.removeEventListener("mousemove", callback);
}

// 获取当前鼠标位置快照
let x = 0
let y = 0

function getPosition() {
  return {x, y};
}

window.addEventListener("mousemove", (event) => {
  x = event.clientX
  y = event.clientY
});

// 获取服务器端的初始值（在 SSR 中使用）
function getServerSnapshot() {
  return { x: 0, y: 0 }; // 默认值
}

export default function useSyncMousePosition() {
  return useSyncExternalStore(subscribe, getPosition, getServerSnapshot);
}
```

这段代码有几个问题：
### 1. callback 没有稳定触发快照变更的通知

在react中订阅事件，要保证每次订阅执行时，callback引用的是最新的事件

```
// 错误写法
function subscribe(callback: () => void) {
	window.addEventListener("mousemove", callback);
	return () => window.removeEventListener("mousemove", callback);
}
```

改为

```
function subscribe(callback: () => void) {
	const handle = () => {
		callback()
	}
	window.addEventListener("mousemove", handle);
	return () => window.removeEventListener("mousemove", handle);
}
```

### 2. 如下写法会导致死循环问题

"The result of getSnapshot should be cached to avoid an infinite loop"

```
// 获取当前鼠标位置快照
let x = 0
let y = 0

// ......

// 获取服务器端的初始值（在 SSR 中使用）
function getServerSnapshot() {
  return { x: 0, y: 0 }; // 默认值
}
```

应该改为

```
let state: Position = { x: 0, y: 0 }; // 保持对象引用稳定
// ......
const getPosition = (): Position => state;
```

### 3.subscribe要和一个订阅函数相关联

❌如此是错误的：

```
function subscribe(callback: () => void) {
  const handle = (e: MouseEvent) => {
    if (state.x !== e.clientX || state.y !== e.clientY) {
      callback()
    }
  }
  window.addEventListener("mousemove", handle);
  return () => window.removeEventListener("mousemove", handle);
}
```

✔需要改为一个订阅模式，来通知所有订阅者：

```
const listeners = new Set<() => void>();

const subscribe = (callback: () => void) => {
  const handle = (e: MouseEvent) => {
    if (state.x !== e.clientX || state.y !== e.clientY) {
      state = { x: e.clientX, y: e.clientY }; 
      listeners.forEach(fn => fn());
    }
  }
  listeners.add(callback);
  window.addEventListener('mousemove', handle);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('mousemove', handle);
  }
}
```

### 最终写法改为

```
'use client';

import { useSyncExternalStore } from 'react';

interface Position {
  x: number;
  y: number;
}

let state: Position = { x: 0, y: 0 }; // 保持对象引用稳定

const getPosition = (): Position => state;

const getServerSnapshot = (): Position => state;  // ssr 渲染时的快照

const listeners = new Set<() => void>();

const subscribe = (callback: () => void) => {
  const handle = (e: MouseEvent) => {
    if (state.x !== e.clientX || state.y !== e.clientY) {
      state = { x: e.clientX, y: e.clientY }; 
      listeners.forEach(fn => fn());
    }
  }
  listeners.add(callback);
  window.addEventListener('mousemove', handle);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('mousemove', handle);
  }
}

export default function useSyncMousePosition() {
  return useSyncExternalStore(subscribe, getPosition, getServerSnapshot);
}
```

```
'use client';

import useSyncMousePosition from "@/hooks/useSyncMousePosition";

export default function MousePosition() {

  const position = useSyncMousePosition();

  return <div>useSyncExternalStore 页面内容 
    <div>坐标{position.x}, {position.y}</div>
  </div>;
}
```


![排除外部浮动](/assets/useSyncExternalStore.gif)

