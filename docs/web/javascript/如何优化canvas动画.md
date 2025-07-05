
假设做了两个可拖动的二维码，代码如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
  <!-- https://github.com/davidshimjs/qrcodejs -->
  <script src="../js/qrcode.js"></script>
</head>
<body>
  <canvas id="canvas" width="500" height="500"></canvas>
  <script>
    const dpr = window.devicePixelRatio || 1;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.scale(dpr, dpr);

    let currentZIndex = 1; // 用于动态调整 zIndex
    let offsetX = 0;
    let offsetY = 0;

    // 定义二维码对象
    const qrCodes = [
      { x: 50, y: 50, width: 150, height: 150, text: "https://example.com/1", color: "#ff0000", isDragging: false, zIndex: 1 },
      { x: 250, y: 250, width: 150, height: 150, text: "https://example.com/2", color: "#0000ff", isDragging: false, zIndex: 2 },
    ];

    // 绘制二维码到 canvas
    function drawQRCode(qrCode) {
      const tempDiv = document.createElement("div");
      const qrGenerator = new QRCode(tempDiv, {
        text: qrCode.text,
        width: qrCode.width,
        height: qrCode.height,
        colorDark: qrCode.color, // 设置二维码颜色
        colorLight: "#ffffff", // 背景颜色
      });
      const qrCanvas = tempDiv.querySelector("canvas");
      if (qrCanvas) {
        ctx.drawImage(qrCanvas, qrCode.x, qrCode.y, qrCode.width, qrCode.height);
      }
    }

    // 绘制所有二维码
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布

      // 按 zIndex 排序后绘制二维码
      qrCodes
        .sort((a, b) => a.zIndex - b.zIndex)
        .forEach(qrCode => {
          drawQRCode(qrCode);
        });
    }

    // 检查鼠标是否在二维码内
    function isMouseInQRCode(mouseX, mouseY, qrCode) {
      return (
        mouseX >= qrCode.x &&
        mouseX <= qrCode.x + qrCode.width &&
        mouseY >= qrCode.y &&
        mouseY <= qrCode.y + qrCode.height
      );
    }

    // 鼠标按下事件
    canvas.addEventListener("mousedown", (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      qrCodes.forEach(qrCode => {
        if (isMouseInQRCode(mouseX, mouseY, qrCode)) {
          qrCode.isDragging = true;
          offsetX = mouseX - qrCode.x;
          offsetY = mouseY - qrCode.y;

          // 更新 zIndex，使当前二维码显示在最上层
          currentZIndex++;
          qrCode.zIndex = currentZIndex;
        }
      });

      draw();
    });

    // 鼠标移动事件
    canvas.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      qrCodes.forEach(qrCode => {
        if (qrCode.isDragging) {
          qrCode.x = mouseX - offsetX;
          qrCode.y = mouseY - offsetY;
          draw();
        }
      });
    });

    // 鼠标释放事件
    canvas.addEventListener("mouseup", () => {
      qrCodes.forEach(qrCode => {
        qrCode.isDragging = false;
      });
    });

    // 初始绘制
    draw();
  </script>
</body>
</html>
```


![排除外部浮动](/assets/canvas.gif)


发现有轻微卡顿，于是我想在拖动上设置一个节流函数：

```
// 节流函数
function throttle(func, delay) {
  let lastTime = 0;
  return function (...args) {
	const now = Date.now();
	if (now - lastTime >= delay) {
	  lastTime = now;
	  func.apply(this, args);
	}
  };
}

// 鼠标拖动事件
canvas.addEventListener("mousemove", throttle((event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  qrCodes.forEach(qrCode => {
	if (qrCode.isDragging) {
	  qrCode.x = mouseX - offsetX;
	  qrCode.y = mouseY - offsetY;
	  draw();
	}
  });
}, 12)); // 16ms大概 60fps
```

![节流](/assets/canvas2.gif)

发现没什么用，甚至更卡了

于是，我又想到，使用离屏canvas是不是可以优化？

把之前生成的二维码缓存起来

```
// 生成二维码并缓存为离屏 Canvas
function generateQRCodeToOffCanvas(qrCode) {
  const tempDiv = document.createElement("div");
  const qrGenerator = new QRCode(tempDiv, {
	text: qrCode.text,
	width: qrCode.width,
	height: qrCode.height,
	colorDark: qrCode.color,
	colorLight: "#ffffff",
  });

  const qrCanvas = tempDiv.querySelector("canvas");
  if (qrCanvas) {
	const offCanvas = document.createElement("canvas");
	offCanvas.width = qrCode.width;
	offCanvas.height = qrCode.height;
	const offCtx = offCanvas.getContext("2d");
	offCtx.drawImage(qrCanvas, 0, 0);
	qrCode.offCanvas = offCanvas;
  }
}

// 初始化二维码缓存
qrCodes.forEach(generateQRCodeToOffCanvas);

// 绘制单个二维码
function drawQRCode(qrCode) {
  if (qrCode.offCanvas) {
	ctx.drawImage(qrCode.offCanvas, qrCode.x, qrCode.y, qrCode.width, qrCode.height);
  }
}
```

如果是现代浏览器不考虑兼容旧浏览器，还可以使用 `OffscreenCanvas`

```
function generateQRCodeToOffCanvas(qrCode) {
  // 1. 生成临时 DOM canvas 用于 QRCode.js 渲染
  const tempDiv = document.createElement("div");
  const qr = new QRCode(tempDiv, {
    text: qrCode.text,
    width: qrCode.width,
    height: qrCode.height,
    colorDark: qrCode.color,
    colorLight: "#ffffff"
  });

  const qrCanvas = tempDiv.querySelector("canvas");
  if (!qrCanvas) return;

  // 2. 创建真正的离屏 OffscreenCanvas 进行缓存
  const offCanvas = new OffscreenCanvas(qrCode.width, qrCode.height);
  const offCtx = offCanvas.getContext("2d");
  offCtx.drawImage(qrCanvas, 0, 0);
  qrCode.offCanvas = offCanvas;

  // 3. 清除 DOM 占用（可选）
  tempDiv.remove();
}
```

![离屏canvas缓存](/assets/canvas3.gif)

已经非常流畅了，（截屏工具表现不出来）

如果还想要更流畅呢，比如前端使用低代码等框架，往往有数十个甚至数百个组件，那么岂不是要很卡？

这时候可以使用Web Worker来优化代码（注意，webworker要启一个web服务，直接用 `file://` 协议打开 HTML 页面时，浏览器**出于安全考虑**，禁止加载本地 JavaScript Worker 文件）：

之前的qrcode不能用了，因为webworker中不能访问document，window，和操作DOM，
但是可以设置离屏canvas：OffscreenCanvas，所以二维码插件改为`qrcode-generator.js`

文件结构

```
--
 - 5_webworker.js
 - 5.html
 - qrcode-generator.js
```

```
// 5.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>二维码拖拽 + Worker</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>

<body>
  <canvas id="canvas" width="600" height="600"></canvas>

  <script>
    function getColor() {
      // 生成随机颜色
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    function getXById(id) {
      return ((id - 1) % 5) * 100; 
    }
    function getYById(id) {
      return Math.floor((id - 1) / 5) * 100;
    }

  </script>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.scale(dpr, dpr);

    const worker = new Worker('./5_webworker.js');

    let qrCodes = Array.from({ length: 24 }, (_, i) => {
      const id = i + 1;
      return {
        id,
        text: `https://${id}.com`,
        color: getColor(id), // 自定义颜色函数
        x: getXById(id),
        y: getYById(id),
        width: 150,
        height: 150,
        zIndex: id  // 初始 zIndex 按顺序
      };
    });

    let currentMaxZIndex = qrCodes.length;
    let dragging = null;
    let offsetX = 0;
    let offsetY = 0;

    function redraw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      qrCodes
        .sort((a, b) => a.zIndex - b.zIndex)
        .forEach(qr => {
          if (qr.bitmap) {
            ctx.drawImage(qr.bitmap, qr.x, qr.y, qr.width, qr.height);
          }
        });
    }

    worker.onmessage = function (e) {
      const { id, bitmap, x, y, width, height } = e.data;
      console.log('onmessage 收到消息:', e.data);
      const target = qrCodes.find(qr => qr.id === id);
      if (target) {
        target.bitmap = bitmap;
        redraw();
      }
    };

    qrCodes.forEach(qr => {
      worker.postMessage(qr);
    });

    canvas.addEventListener('mousedown', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const sorted = [...qrCodes].sort((a, b) => b.zIndex - a.zIndex);
      for (const qr of sorted) {
        if (
          mouseX >= qr.x && mouseX <= qr.x + qr.width &&
          mouseY >= qr.y && mouseY <= qr.y + qr.height
        ) {
          dragging = qr;
          offsetX = mouseX - qr.x;
          offsetY = mouseY - qr.y;

          // 放到最上层
          currentMaxZIndex++;
          qr.zIndex = currentMaxZIndex;
          break;
        }
      }

      redraw();
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      dragging.x = mouseX - offsetX;
      dragging.y = mouseY - offsetY;
      redraw();
    });

    canvas.addEventListener('mouseup', () => dragging = null);
    canvas.addEventListener('mouseleave', () => dragging = null);
  </script>
</body>

</html>

```


```
// 5_webworker

// worker线程中引入 qrcode-generator.js
importScripts('./qrcode-generator.js');

onmessage = async function (e) {
  const { id, x, y, width, height, text, color } = e.data;


  console.log('[Worker] 收到消息:', e.data);
  const qr = qrcode(0, 'L');
  qr.addData(text);
  qr.make();

  const modules = qr.getModuleCount();
  const cellSize = width / modules;

  const offscreen = new OffscreenCanvas(width, height);
  const ctx = offscreen.getContext('2d');

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  for (let row = 0; row < modules; row++) {
    for (let col = 0; col < modules; col++) {
      if (qr.isDark(row, col)) {
        ctx.fillStyle = color;
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  }

  const bitmap = await offscreen.transferToImageBitmap();
  postMessage({ id, bitmap, width, height, x, y });
};

```

![webworker](/assets/canvas4.gif)

20多个二维码同时渲染，仍然非常丝滑