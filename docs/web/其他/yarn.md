
## 初始化

```
yarn init       # 逐步填写信息初始化
yarn init -y    # 使用默认值快速初始化
```

## 安装依赖

### 安装全部依赖（读取 `package.json`）：

```
yarn
或
yarn install
```

### 安装一个依赖（添加到 `dependencies`）：

```
yarn add <package-name>
```

### 安装并添加到 `devDependencies`：

```
yarn add <package-name> --dev
```


### 安装特定版本：

```
yarn add <package-name>@1.2.3
```

### 全局安装：

```
yarn global add <package-name>
```


## 删除依赖

### 删除一个依赖

```
yarn remove <package-name>
```

### 删除全局包：

```
yarn global remove <package-name>
```


## 更新依赖

### 更新指定依赖

```
yarn upgrade <package-name>
```

### 更新到指定版本：

```
yarn upgrade <package-name>@x.y.z
```

### 更新所有依赖：

```
yarn upgrade
```


## 脚本命令

## 执行 `package.json` 中的脚本：

```
yarn run <script-name>

// 例如：
yarn run build
yarn dev 
```

## 其他常用命令

```
查看已安装的包：
yarn list

查看某个包的详细信息：
yarn info <package-name>

清除缓存：
yarn cache clean

查看当前 Yarn 版本：
yarn -v
```



