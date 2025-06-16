
react18+新增的hook， 用于在客户端和服务器端渲染中生成**稳定且唯一的 ID**，以解决 SSR 和 hydration 时 ID 不一致的问题。

基础用法：

```
import { useId } from 'react';

function MyComponent() {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-input`}>Name</label>
      <input id={`${id}-input`} />
    </div>
  );
}
```

## 传统做法在SSR中的问题

```
const id = Math.random().toString(36).slice(2);
```

这种方式在 SSR 和 CSR 时生成的 ID 不一致，导致 hydration 报错


## 为什么需要useId

```
<label htmlFor={`${id}-input`}>Name</label>
<input id={`${id}-input`} />

// 这里为什么需要设置一个id
// 而不要写死一个字符串
<label htmlFor='input'>Name</label>
<input id='input' />
// 如果你在多个地方复用了这个组件，它们都会使用 `id="input"`，造成 DOM 冲突
// 多个组件实例会共用一个id：input
// 而且必须手动去管理id的唯一性
```

1. 避免手写 ID 重名的问题
2. 支持组件复用时，每个实例生成不同 ID，
3. 这个关联 在所有环境下（CSR、SSR）都稳定且唯一