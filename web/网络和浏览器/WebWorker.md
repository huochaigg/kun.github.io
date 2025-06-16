如何避免阻塞主线程、提高用户体验

### 前提条件

- 耗时逻辑已最优（算法/数据结构无进一步优化空间）
- 问题在于**运行耗时长，会阻塞主线程**
- 目标是**提升响应性、不卡顿**

使用方式：

```
// main.js
const worker = new Worker('worker.js');
worker.postMessage(data); // 传数据
worker.onmessage = (e) => {
  const result = e.data;
  // 使用结果更新页面
};

// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};

```

## 比如使用canvas绘制一个鼠标滑动轨迹

```
<canvas id="canvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('canvas');
  const offscreen = canvas.transferControlToOffscreen();
  const worker = new Worker('worker.js');
  worker.postMessage({ type: 'init', canvas: offscreen }, [offscreen]);

  // 主线程仅监听鼠标移动
  canvas.addEventListener('mousemove', (e) => {
    worker.postMessage({
      type: 'draw',
      x: e.offsetX,
      y: e.offsetY
    });
  });
</script>
```

```
// worder.js
let ctx;

self.onmessage = function (e) {
  const { type, canvas, x, y } = e.data;

  if (type === 'init') {
    // 拿到 OffscreenCanvas 上下文
    ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
  }

  if (type === 'draw' && ctx) {
    ctx.beginPath();
    ctx.moveTo(x, y); // 简单示例：绘点，也可以保存 lastX、lastY 连线
    ctx.lineTo(x + 0.1, y + 0.1); // 避免空路径
    ctx.stroke();
  }
};

```