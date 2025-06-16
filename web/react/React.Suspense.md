
## 基础用法

```
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./MyComponent'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```


子组件必须使用了 **React 支持的异步包装机制**，比如：

- `React.lazy()`（支持懒加载组件）
- 抛出 Promise 的方式（支持数据加载或自定义 suspense）

这样，Suspense就能识别到子组件是否还未准备好，没有就展示一个fallback的占位。


## react18+ 结合useTransition

useTransition 可以把一些更新设置为低优先级的任务，比如说大量数据渲染，会阻塞其他操作，



例如，模拟实现一个输入过滤查询的例子：

旧版本实现，会出现阻塞输入卡顿的现象

```
'use client';
import React, { useState } from 'react';

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

interface FilteredListProps {
  query: string;
}

function FilteredList({ query }: FilteredListProps) {
  // 模拟重计算延迟
  const now = performance.now();
  while (performance.now() - now < 50); // 阻塞 50ms

  const filtered = items.filter(item => item.includes(query));
  return (
    <ul>
      {filtered.slice(0, 100).map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function OldApp() {
  const [query, setQuery] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value); // 每次输入都会立即重新渲染 FilteredList
  }

  return (
    <div>
      <h2>旧版本（无 useTransition）</h2>
      <input value={query} onChange={handleChange} />
      <FilteredList query={query} />
    </div>
  );
}
```

![useTransition](/assets/useTransition1.gif)

新版本结合useTransition实现：

```
import React, { useState, useTransition, Suspense, FC } from 'react';

// 生成数据
const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

// 模拟重计算组件（支持 Suspense）
const FilteredList: FC<{ query: string }> = ({ query }) => {
  // 模拟延迟（计算型任务）
  const now = performance.now();
  while (performance.now() - now < 50); // 阻塞 50ms

  const filtered = items.filter((item) => item.includes(query));
  return (
    <ul>
      {filtered.slice(0, 100).map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

// 延迟加载组件
const SlowFilter: FC<{ query: string }> = ({ query }) => {
  return (
    <Suspense fallback={<div>列表加载中...</div>}>
      <FilteredList query={query} />
    </Suspense>
  );
};

// 主组件
const NewApp: FC = () => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val); // 高优先级：用户输入实时更新
    startTransition(() => {
      setSearch(val); // 低优先级：列表筛选
    });
  };

  return (
    <div>
      <h2>新版本（React 18+ useTransition + Suspense）</h2>
      <input value={query} onChange={handleChange} />
      {isPending && <p style={{ color: 'gray' }}>筛选中...</p>}
      <SlowFilter query={search} />
    </div>
  );
};

export default NewApp;
```


![useTransition](/assets/useTransition2.gif)