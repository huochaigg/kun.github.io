
## 先拉取git vue3源码，并构建

```
git clone https://github.com/vuejs/core.git vue3-source
cd vue3-source
pnpm install
pnpm dev
```


## 创建一个项目，和vue3源码在一个文件夹中

```
/core
/vue3Test
```

命令

```
pnpm create vite

// 选择vue typescript
```

## 修改vite配置

### 修改vite.config.ts

```
// vite.config.ts
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,  // 生成 source map，方便调试源码
  },
  optimizeDeps: {
    exclude: ['vue', '@vue/shared', '@vue/reactivity', '@vue/runtime-core', '@vue/runtime-dom']
  },
  resolve: {
    alias: {
      vue: path.resolve(__dirname, '../vue3-source/packages/vue/dist/vue.runtime.esm-bundler.js'),
      '@vue/runtime-core': path.resolve(__dirname, '../vue3-source/packages/runtime-core/src'),
      '@vue/reactivity': path.resolve(__dirname, '../vue3-source/packages/reactivity/src'),
      '@vue/shared': path.resolve(__dirname, '../vue3-source/packages/shared/src'),
      // 其他你要调试的包
    },
  },
})
```

optimizeDeps，alias 需要加上对应的vue模块，
alias的路径为自己下载vue3源码对应的路径
optimizeDeps 防止 Vite 自动扫描进 vue，要不然项目会引用到node_modules中的vue而不是自己源码中的

### 2. 修改package.json 配置
`
```
// package.json
dependencies: {
 "vue": "^3.5.3" // 删除掉
}

// —————————— 改为
dependencies: {}
```

### 3. 修改tsconfig.json 配置

tsconfig.json path中增加vue的这几个模块

```
// tsconfig.json

{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  // ......
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "vue": ["local-vue/vue/dist/vue.runtime.esm-bundler.js"],
      "@vue/runtime-dom": ["local-vue/runtime-dom/dist/runtime-dom.esm-bundler.js"],
      "@vue/runtime-core": ["local-vue/runtime-core/dist/runtime-core.esm-bundler.js"],
      "@vue/reactivity": ["local-vue/reactivity/dist/reactivity.esm-bundler.js"],
      "@vue/shared": ["local-vue/shared/dist/shared.esm-bundler.js"]
    }
  }
}

```

### 4. 删除node_modules文件夹，和pnpm-lock.yaml文件

### 5. 重新安装项目，并启动

```
pnpm install
pnpm dev
```

然后就可以在