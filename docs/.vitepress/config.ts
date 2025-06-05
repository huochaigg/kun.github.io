import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "我的博客",
  base: '/kun.github.io/',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "关于我", link: "/about" },
    ],
    sidebar: [
      {
        text: "javascript",
        items: [
          { text: "快捷键", link: "/obsidian/快捷键" },
        ],
      },
    ],
  },
}
)
