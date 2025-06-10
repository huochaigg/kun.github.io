import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "我的博客",
  base: '/kun.github.io/',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "前端学习", link: "/web" },
      { text: "关于我", link: "/about" },
    ],
    sidebar: {
      "/web/": [
        {
          text: "javascript",
          items: [
            { text: "快捷键", link: "/obsidian/快捷键" },
          ],
        },
        {
          text: "css",
          items: [
            { text: "BFC", link: "/css/BFC" },
            { text: "IFC", link: "/css/IFC" },
          ],
        },
        {
          text: "react",
          items: [
            { text: "setState同步异步", link: "/react/setState同步异步" },
          ],
        },
        {
          text: "vue",
          items: [
            
          ],
        },
        {
          text: "typescript",
          items: [
            
          ],
        },
        {
          text: "其他文件夹",
          items: [
            { text: "文件名", link: "/文件夹/文件名" },
          ],
        },
      ]
    },
  },
}
)
