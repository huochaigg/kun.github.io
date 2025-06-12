定义: 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

用法：

vue2

```
Vue.nextTick(() => { ... }) // vue2

this.$nextTice(() => {...}) // vue2组件中
```

vue3

```
// vue3
import { nextTick } from 'vue'

await nextTick()

// 或者使用promise方法

function update() {
  message.value = 'Hello World'

  nextTick().then(() => {
    // DOM 已更新
    const el = document.querySelector('div')
    console.log('使用 Promise:', el.textContent) // "Hello World"
  })
}
```


官方：当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。
而”tick“就是  **JavaScript 事件循环中的“微任务（microtask）队列执行时机**
nexttick就是： 在本轮宏任务（如你的点击事件、数据变更）结束后，等到微任务执行阶段再 flush DOM 更新队列。



[https://cn.vuejs.org/api/general.html#nexttick](https://cn.vuejs.org/api/general.html#nexttick)

[https://vue3js.cn/global/nextTick.html](https://vue3js.cn/global/nextTick.html)

[https://juejin.cn/post/7296016127552864297?searchId=202506111533126CAD796911B06A638F66](https://juejin.cn/post/7296016127552864297?searchId=202506111533126CAD796911B06A638F66)
