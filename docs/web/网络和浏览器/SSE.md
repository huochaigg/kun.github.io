
## 前端实现

```
const source = new EventSource('/sse');

// 接收普通消息（data 字段）
source.onmessage = function (event) {
console.log('收到消息:', event.data);
};

// 自定义事件
source.addEventListener('news', function (event) {
console.log('收到 news 事件:', event.data);
});

// 错误处理
source.onerror = function (err) {
console.error('SSE 连接错误:', err);
};
```


## SSE的特点

1. 单向的
2. 浏览器可以自动重连
3. 可以自定义事件
4. Chrome、Firefox、Safari、Edge 都支持，IE不支持

```
// 服务端发送
res.write(`event: news\n`);
res.write(`data: {"title":"xx"}\n\n`);

// SSE 协议规定，每一条事件的结构可以是多行，每行是一个字段（如 `event:`、`data:`、`id:` 等），只要最后以两个换行 `\n\n` 结尾，就构成一条完整的事件

// 前端自定义事件中的news 就可以接收到
```

AI聊天为什么选择用SSE而不用websocket？
个人理解，因为websocket是一个ws长连接，适用于双方通信，实时通信的场景，资源耗费高，操作起来比较复杂，还需要判断心跳重连，而SSE是单相通信的，并且实现简单，资源耗费少