import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的博客",
  base: '/kun.github.io/',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "前端学习", link: "/web/css/BFC", activeMatch: '/web' },
      { text: "关于我", link: "/about" },
    ],
    sidebar: {
      '/web/': [
        {
          text: '前端学习',
          items: [
            {
              text: "CSS",
              items: [
                { text: "BFC", link: "/web/css/BFC" },
                { text: "IFC", link: "/web/css/IFC" },
              ],
            },
            {
              text: "JavaScript",
              items: [
                { text: "快捷键", link: "/web/javascript/快捷键" },
              ],
            },
            {
              text: "React",
              items: [
                { text: "setState同步异步", link: "/web/react/setState同步异步" },
                { text: "useSyncExternalStore", link: "/web/react/useSyncExternalStore" },
              ],
            },
            {
              text: "Vue",
              items: [
                // 添加 Vue 相关内容
              ],
            },
            {
              text: "TypeScript",
              items: [
                // 添加 TypeScript 相关内容
              ],
            },
          ],
        }
      ]
    }
  },
})