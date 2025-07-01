
## 安装 

```
yarn add typescript ts-node @types/node
```

## 配置tsconfig.json

```
"compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS", // Webpack 使用 Node.js 环境
    // ......
```


## webpack.config.ts

```
const config: Configuration = {
  // 其他配置...
};
```

```
{
  "scripts": {
    "build": "webpack --config webpack.config.ts"
  }
}
```


### webpack 默认不识别 .ts 配置文件，你需要通过 ts-node 注册运行时

方式一：

`--require ts-node/register`：告诉 Node.js 在运行之前加载 `ts-node` 的运行时注册模块；

```
webpack --config webpack.config.ts --require ts-node/register
```

方式二 使用 NODE_OPTIONS：

```
{
  "scripts": {
    "build": "NODE_OPTIONS='--require ts-node/register' webpack --config webpack.config.ts"
  }
}
```

Windows 环境需用 `cross-env` 跨平台设置