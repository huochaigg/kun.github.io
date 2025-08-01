import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
  title: "学习笔记",
  base: '/kun.github.io/',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "前端学习", link: "/web/css/BFC", activeMatch: '/web/' },
      { text: "关于我", link: "/about/学习计划", activeMatch: '/about/' },
    ],
    sidebar: {
      '/web/': sidebarWeb(),
      '/about/': aboutSidebarWeb()
    }
  },
})

function sidebarWeb(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'CSS',
      collapsed: true,
      items: [
        { text: "BFC", link: "/web/css/BFC" },
        { text: "IFC", link: "/web/css/IFC" },
        { text: "css变量", link: "/web/css/css变量" },
        { text: "Shadow DOM", link: "/web/css/Shadow DOM" },
      ]
    },
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        { text: "事件循环", link: "/web/javascript/事件循环" },
        { text: "垃圾回收机制", link: "/web/javascript/垃圾回收机制" },
        { text: "WeakMap", link: "/web/javascript/WeakMap" },
        { text: "WeakSet", link: "/web/javascript/WeakSet" },
        { text: "Reflect", link: "/web/javascript/Reflect" },
        { text: "canvas", link: "/web/javascript/canvas" },
        { text: "如何优化canvas动画", link: "/web/javascript/如何优化canvas动画" },
        { text: "webworker", link: "/web/javascript/webworker" },
        { text: "正则表达式", link: "/web/javascript/正则表达式" },
        { text: "var,let,const区别", link: "/web/javascript/var,let,const区别" },
      ]
    },
    {
      text: 'React',
      collapsed: false,
      items: [
        { text: "setState同步异步", link: "/web/react/setState同步异步" },
        { text: "useSyncExternalStore", link: "/web/react/useSyncExternalStore" },
        { text: "React.Suspense", link: "/web/react/React.Suspense" },
        { text: "useId", link: "/web/react/useId" },
        { text: "react的渲染", link: "/web/react/react的渲染" },
        { text: "fiber", link: "/web/react/fiber" },
        { text: "写一个弹窗组件", link: "/web/react/写一个弹窗组件" },
      ]
    },
    {
      text: 'Vue',
      collapsed: false,
      items: [
        { text: "如何自定义指令", link: "/web/vue/如何自定义指令" },
        { text: "双向绑定的原理", link: "/web/vue/双向绑定的原理" },
        { text: "nextTick", link: "/web/vue/nextTick" },
        { text: "vue3渲染流程", link: "/web/vue/vue3渲染流程" },
        { text: "如何调试vue", link: "/web/vue/如何调试vue" },
        { text: "vue3如何透传", link: "/web/vue/vue3如何透传" },
      ]
    },
    {
      text: 'TypeScript',
      collapsed: false,
      items: [
        { text: "ts内置工具类", link: "/web/typescript/ts内置工具类" },
        { text: "as", link: "/web/typescript/as" },
        { text: "is", link: "/web/typescript/is" },
        { text: "extends", link: "/web/typescript/extends" },
      ]
    },
    {
      text: '网络和浏览器',
      collapsed: false,
      items: [
        { text: "常见安全问题-XSS", link: "/web/网络和浏览器/常见安全问题-XSS" },
        { text: "常见安全问题-CSRF", link: "/web/网络和浏览器/常见安全问题-CSRF" },
        { text: "常见安全问题-SSRF", link: "/web/网络和浏览器/常见安全问题-SSRF" },
        { text: "常见安全问题-点击劫持", link: "/web/网络和浏览器/常见安全问题-点击劫持" },
        { text: "HTTP", link: "/web/网络和浏览器/HTTP" },
        { text: "SEO优化", link: "/web/网络和浏览器/SEO优化" },
        { text: "SSE", link: "/web/网络和浏览器/SSE" },
        { text: "CDN", link: "/web/网络和浏览器/CDN" },
        { text: "浏览器进程", link: "/web/网络和浏览器/浏览器进程" },
        { text: "浏览器执行顺序", link: "/web/网络和浏览器/浏览器执行顺序" },
        { text: "前端优化相关", link: "/web/网络和浏览器/前端优化相关" },
      ]
    },
    {
      text: '微前端',
      collapsed: false,
      items: [
        { text: "qiankun如何使用", link: "/web/微前端/qiankun如何使用" },
        { text: "微前端的应用", link: "/web/微前端/微前端的应用" },
      ]
    },
    {
      text: '配置',
      collapsed: false,
      items: [
        {
          text: "webpack",
          items: [
            { text: "基本配置", link: "/web/配置/webpack/基本配置" },
            // { text: "常用Loader", link: "/web/配置/webpack/常用Loader" },
            // { text: "常用Plugin", link: "/web/配置/webpack/常用Plugin" },
            { text: "模块联邦", link: "/web/配置/webpack/模块联邦" },
            { text: "如何把配置文件改为TS", link: "/web/配置/webpack/如何把配置文件改为TS" },
            { text: "Electron配置", link: "/web/配置/webpack/Electron配置" },
            { text: "配置笔记", link: "/web/配置/webpack/配置笔记" },
          ]
        },
        {
          text: "vite",
          items: [
            { text: "基本配置", link: "/web/配置/vite/基本配置" },
            { text: "vite和webpack的区别", link: "/web/配置/vite/vite和webpack的区别" },
          ]
        },
      ]
    },
    {
      text: '跨平台',
      collapsed: false,
      items: [
        { text: "鸿蒙", link: "/web/跨平台/鸿蒙" },
      ]
    },
    {
      text: '其他',
      collapsed: false,
      items: [
        { text: "git", link: "/web/其他/git" },
        { text: "yarn", link: "/web/其他/yarn" },
        { text: "TSPL指令", link: "/web/其他/TSPL指令" },
        { text: "打印机相关", link: "/web/其他/打印机相关" },
        { text: "PM2", link: "/web/其他/PM2" },
      ]
    }
  ];
}


function aboutSidebarWeb(): DefaultTheme.SidebarItem[] {
  return [
    { text: "学习计划", link: "/about/学习计划" },
    // { text: "游戏", link: "/about/游戏" },
  ];
}