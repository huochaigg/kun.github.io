
## 安装

```
yarn add qiankun
```

## 主应用

```
import { registerMicroApps, start } from 'qiankun';


registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:3000',
    container: '#container1', // 子应用挂载节点
    activeRule: '/react_page', // 激活的路由
  },
  {
    name: 'vue app',
    entry: { scripts: ['//localhost:3001/main.js'] },
    container: '#container2',
    activeRule: '/vue_page',
  },
]);


start();
```

动态激活子应用：

```
// 在 /b 页面某个组件中调用
import { loadMicroApp } from 'qiankun';

loadMicroApp({
  name: 'subAppA',
  entry: '//localhost:7100',
  container: document.getElementById('subapp-a'),
});

loadMicroApp({
  name: 'subAppB',
  entry: '//localhost:7200',
  container: document.getElementById('subapp-b'),
});
```

主应用HTML中挂载节点：

```
<!-- index.html -->
<div id="container1"></div>
<div id="container2"></div>
```

## 子应用

### 1. 安装 qiankun

### 2.配置webpack

使用webpack5的模块联邦

```
new ModuleFederationPlugin({
  name: 'react_page',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App',
  },
  shared: ['react', 'react-dom'],
})

```

或者使用qiankun 自己的子应用加载方式(推荐)

```
// webpack 配置
output: {
  library: 'react_page',
  libraryTarget: 'umd',
  chunkLoadingGlobal: 'webpackJsonp_react_page',
},
devServer: {
  headers: {
    'Access-Control-Allow-Origin': '*', // 允许主应用加载
  },
}
```

### 3. 子应用导出生命周期（React）

```
// src/main.tsx
import ReactDOM from 'react-dom/client';
import App from './App';

function render(props: any = {}) {
  const { container } = props;
  const root = ReactDOM.createRoot(
    container ? container.querySelector('#container1') : document.getElementById('container1')!
  );
  root.render(<App />);
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  // 独立运行时
  render();
}

export async function bootstrap() {}
export async function mount(props) {
  render(props);
}
export async function unmount(props) {
  const { container } = props;
  const rootEl = container ? container.querySelector('#root') : document.getElementById('root');
  if (rootEl) {
    ReactDOM.createRoot(rootEl).unmount();
  }
}
```


### 4. 子应用路由设置（React Router）

使用 `BrowserRouter` 会有冲突, 可以这样修改

```
import { createBrowserHistory } from 'history';

const history = window.__POWERED_BY_QIANKUN__
  ? createBrowserHistory({ basename: '/admin' })
  : createBrowserHistory();
```


## 主子应用通信方式

主应用：

```
registerMicroApps([
  {
    name: 'subapp-admin',
    entry: '//localhost:7100',
    container: '#subapp-container',
    activeRule: '/admin',
    props: {
      userInfo: { name: 'kun' },
      onGlobalStateChange: ...
    }
  }
]);
```

子应用：

```
export async function mount(props) {
  console.log('主应用传来数据', props.userInfo);
}
```

复杂通信：使用 `initGlobalState`

```
// 主应用
const actions = initGlobalState({ user: 'kun' });
actions.onGlobalStateChange((state, prev) => console.log(state));
actions.setGlobalState({ user: 'new_user' });

// 子应用 mount(props)
props.onGlobalStateChange((state) => {...});
props.setGlobalState({...});
```


## Qiankun沙箱隔离

https://juejin.cn/post/7431455846150242354

## 个人疑问：

1. qiankun 主应用如何封装一些组件，供子应用使用？而不使用webpack5的模块联邦,
   如何通过主应用传递一个组件的形式给子应用？还有没有别的方法？
2. qiankun跨webpack和vite使用
3. SSR应用和非SSR应用如何使用qiankun做成微前端形式，比如官网和后台