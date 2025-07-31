
## attrs

```
// 祖父组件

<template>
  <MyButton size="large" color="red" @click="handleClick" />
</template>
```

```
// 父组件（二次封装）

<template>
  <!-- 透传所有attrs给真正的按钮组件 -->
  <BaseButton v-bind="$attrs" />
</template>

<script setup>
import BaseButton from './BaseButton.vue'
</script>
```

```
// 孙组件（或使用elementUI等库）

<template>
  <button :class="['btn', attrs.size, attrs.color]" v-on="attrs">按钮</button>
</template>

<script setup>
const attrs = useAttrs()
</script>
```

这样就可以把 size， color，@click 透传给孙组件


## Provide inject

```
// 祖组件

<script setup>
import ButtonWrapper from './ButtonWrapper.vue'
import { provide } from 'vue'

const size = 'small'

provide('formSize', size)
</script>

<template>
  <ButtonWrapper />
</template>

```

```
// 孙组件

<script setup>
import { inject } from 'vue'

const size = inject('formSize', 'default') // 获取祖组件提供的 size
</script>

<template>
  <el-button v-bind:size="size"></el-button>
</template>
```

