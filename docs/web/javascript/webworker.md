## 基本用法

```
// 主线程文件

const worker = new Worker('./worker.js'); // 加载 worker 脚本

worker.postMessage({ a: 5, b: 10 }); // 向 worker 发送数据

worker.onmessage = (event) => {
  console.log('主线程收到结果：', event.data); // 处理 worker 回传的结果
};
```

```
// worker.js

// 接收主线程的消息
onmessage = function (event) {
  const { a, b } = event.data;
  const result = a + b;
  postMessage(result); // 返回结果给主线程
};
```

## 如果一个 Worker 处理多个事件类型呢？

```
// worker.js
self.addEventListener('message', (e) => {
  const { type, payload } = e.data;

  if (type === 'sum') {
    const result = payload.numbers.reduce((a, b) => a + b, 0);
    self.postMessage({ type: 'sum-result', result });
  }

  else if (type === 'average') {
    const total = payload.numbers.reduce((a, b) => a + b, 0);
    const avg = total / payload.numbers.length;
    self.postMessage({ type: 'average-result', result: avg });
  }

  else {
    self.postMessage({ type: 'error', message: 'Unknown type' });
  }
});
```

```
const worker = new Worker('./worker.js');

// 监听返回的结果
worker.onmessage = (e) => {
  const { type, result, message } = e.data;

  if (type === 'sum-result') {
    console.log('总和:', result);
  } else if (type === 'average-result') {
    console.log('平均值:', result);
  } else if (type === 'error') {
    console.error('Worker 错误:', message);
  }
};

// 发送不同任务
worker.postMessage({ type: 'sum', payload: { numbers: [1, 2, 3, 4, 5] } });
worker.postMessage({ type: 'average', payload: { numbers: [10, 20, 30] } });

```