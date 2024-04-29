import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/',
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  title: 'LEARNING DOCS',
  description: 'Learning Docs by LIUeng',
  themeConfig: {
    nav: [
      { text: '基础', link: '/notes/' },
      { text: '文章', link: '/articles/' },
      { text: '网络', link: '/network/' },
      { text: '算法', link: '/alogrithm/' },
      {
        text: '源码',
        link: '/source-code/',
      },
      { text: '架构', link: '/architecture/' },
      { text: '面试', link: '/interview/' },
      { text: '文档/编辑器', link: '/editor/' },
    ],
    sidebar: {
      '/notes/': [
        {
          text: '笔记',
          items: [{ text: 'README.md', link: '/notes/' }],
        },
        {
          text: 'HTML',
          collapsed: true,
          items: [
            { text: 'SEO', link: '/notes/html/seo' },
            { text: 'ES Module', link: '/notes/html/esmodule' },
            { text: '扩展', link: '/notes/html/unusual' },
          ],
        },
        {
          text: 'CSS',
          collapsed: true,
          items: [
            { text: 'CSS 知识', link: '/notes/css/' },
            { text: 'BFC', link: '/notes/css/bfc' },
            { text: '盒模型', link: '/notes/css/box' },
            { text: 'Flex 扩展', link: '/notes/css/flex' },
            { text: 'Float 注意', link: '/notes/css/float' },
            { text: '行内元素', link: '/notes/css/inline' },
            { text: '伪元素伪类', link: '/notes/css/pseudo' },
            { text: '可替换元素', link: '/notes/css/replaced' },
            { text: '文字特性', link: '/notes/css/text-character' },
            { text: 'Visibility 属性', link: '/notes/css/visibility' },
          ],
        },
        {
          text: 'JavaScript',
          collapsed: true,
          items: [
            { text: '事件监听', link: '/notes/javascript/addEventListener' },
            { text: 'DOM 类型', link: '/notes/javascript/dom' },
            { text: '相等性检查', link: '/notes/javascript/equal' },
            { text: '事件循环', link: '/notes/javascript/event-loop' },
            { text: '运算符', link: '/notes/javascript/jsop' },
            { text: 'MutationObserver', link: '/notes/javascript/mutationObserver' },
            { text: '原型 原型链', link: '/notes/javascript/prototype' },
            { text: '作用域', link: '/notes/javascript/scope' },
            { text: '存储结构', link: '/notes/javascript/storage-struct' },
            { text: 'This 作用域', link: '/notes/javascript/this' },
            { text: '编码', link: '/notes/javascript/URI' },
          ],
        },
        {
          text: '正则表达式',
          collapsed: true,
          items: [
            { text: '基础', link: '/notes/regexp/base' },
            { text: '扩展', link: '/notes/regexp/unknown' },
          ],
        },
        {
          text: 'ES Features',
          collapsed: true,
          items: [{ text: 'ES6+', link: '/notes/es/es6' }],
        },
        {
          text: 'NodeJS',
          collapsed: true,
          items: [
            { text: 'ANSI', link: '/notes/nodejs/ansi' },
            { text: '事件循环', link: '/notes/nodejs/event-loop' },
            { text: 'Npm', link: '/notes/nodejs/npm' },
          ],
        },
        {
          text: 'TypeScript',
          collapsed: true,
          items: [
            { text: '基础', link: '/notes/typescript/basic' },
            { text: '高级基础', link: '/notes/typescript/advanced' },
            { text: '包结构', link: '/notes/typescript/lib-struct' },
          ],
        },
      ],
      '/articles/': [
        { text: '文章', items: [{ text: '阅读前瞻', link: '/articles/' }] },
        {
          text: '基础型',
          collapsed: true,
          items: [
            { text: '复制粘贴', link: '/articles/basic/clipboard' },
            { text: '颜色转换', link: '/articles/basic/color_convert' },
            { text: 'DOM 事件流', link: '/articles/basic/dom_events' },
            { text: 'ESlint 配置', link: '/articles/basic/eslint' },
            { text: 'Git 操作', link: '/articles/basic/git' },
            { text: 'History 路由', link: '/articles/basic/history' },
            { text: 'IEEE 标准', link: '/articles/basic/ieee' },
            { text: '模块化演变', link: '/articles/basic/module' },
            { text: 'Script 标签', link: '/articles/basic/script_link' },
            { text: 'Soft/Hard Links', link: '/articles/basic/syslink' },
          ],
        },
        {
          text: '进阶型',
          collapsed: true,
          items: [
            { text: '防抖节流', link: '/articles/advanced/debounce' },
            { text: '热重载', link: '/articles/advanced/devServer' },
            { text: '前端文档', link: '/articles/advanced/docs' },
            { text: 'HtmlWebpackPlugin 解析', link: '/articles/advanced/htmlWebpackPlugin' },
            { text: '前端不知道的扩展', link: '/articles/advanced/knowledge.js' },
            { text: 'MutationObserver', link: '/articles/advanced/mutationObserver' },
            { text: 'V8 解析', link: '/articles/advanced/v8-code' },
            { text: '虚拟列表', link: '/articles/advanced/virtualList' },
          ],
        },
        {
          text: '服务器型',
          collapsed: true,
          items: [{ text: 'ECS', link: '/articles/servers/ecs' }],
        },
        {
          text: '问题型',
          collapsed: true,
          items: [
            { text: 'Css 问题', link: '/articles/problem/css' },
            { text: 'Yarn 问题', link: '/articles/problem/yarn' },
          ],
        },
      ],
      '/network/': [
        {
          text: '认识网络',
          items: [{ text: '基础', link: '/network/' }],
        },
        {
          text: '网络相关',
          collapsed: true,
          items: [
            { text: 'Cookie', link: '/network/cookie' },
            { text: 'Cors', link: '/network/cors' },
            { text: 'DHCP', link: '/network/dhcp' },
            { text: 'IP 地址', link: '/network/ip_addr' },
            { text: '网络分层', link: '/network/layer' },
            { text: 'HTTP 请求方式', link: '/network/methods' },
            { text: '网络名词', link: '/network/noun' },
            { text: 'OSI 模型', link: '/network/osi' },
            { text: 'Socket', link: '/network/socket' },
            { text: '特殊地址', link: '/network/special_addr' },
            { text: 'HTTP 状态码', link: '/network/status_code' },
            { text: '子网掩码', link: '/network/subnet_mask' },
            { text: 'TLS SSL', link: '/network/tls_ssl' },
            { text: 'WebRTC', link: '/network/webrtc' },
          ],
        },
      ],
      '/alogrithm/': [
        {
          text: '算法篇',
          items: [{ text: '前言', link: '/alogrithm/' }],
        },
        {
          text: '基础',
          collapsed: true,
          items: [
            { text: '大(O)表示法', link: '/alogrithm/basic/O' },
            { text: '位运算', link: '/alogrithm/basic/bit' },
            { text: '红黑树', link: '/alogrithm/basic/red_black_tree' },
          ],
        },
        {
          text: '面试算法',
          collapsed: true,
          items: [{ text: '数据结构辅助记忆', link: '/alogrithm/interview/self' }],
        },
      ],
      '/source-code/': [
        // {
        //   text: '导航',
        //   // items: [{ text: '目录', link: '/source-code/' }],
        // },
        {
          text: 'React',
          collapsed: true,
          items: [
            { text: 'Before Read', link: '/source-code/react/' },
            {
              text: 'API',
              collapsed: true,
              items: [
                { text: 'Context', link: '/source-code/react/api/context' },
                { text: 'Ref', link: '/source-code/react/api/ref' },
              ],
            },
          ],
        },
        {
          text: 'Vue',
          collapsed: true,
          items: [{ text: 'Before Read', link: '/source-code/vue/' }],
        },
      ],
      '/architecture/': [
        {
          text: '架构',
          items: [{ text: '思考', link: '/architecture/' }],
        },
        {
          text: '业界标准',
          collapsed: true,
          items: [
            { text: '标准 - 模板1', link: '/architecture/standard/A-YZ' },
            { text: '组件化与模块化', link: '/architecture/standard/comp-mod' },
            { text: '前端监控', link: '/architecture/standard/monitor' },
            { text: '前端性能', link: '/architecture/standard/performance' },
            { text: '项目设计', link: '/architecture/standard/project-design' },
          ],
        },
        {
          text: '网页安全',
          collapsed: true,
          items: [{ text: 'XSS', link: '/architecture/websecure/xss' }],
        },
      ],
      '/interview/': [
        {
          text: '面试指南',
          items: [{ text: '写在前面', link: '/interview/' }],
        },
        {
          text: '面试相关',
          items: [
            { text: '浏览器渲染流水线', link: '/interview/browser' },
            {
              text: '性能指标',
              link: '/interview/metrics',
            },
            {
              text: '关键路径渲染 CRP',
              link: '/interview/crp',
            },
          ],
        },
      ],
      '/editor/': [
        {
          text: '文档/编辑器',
          items: [{ text: '说明', link: '/editor/' }],
        },
        {
          text: 'Markdown',
          collapsed: true,
          items: [{ text: 'Vue/VitePress', link: '/editor/markdown/vuepress' }],
        },
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present LIUeng',
    },
    search: {
      provider: 'local',
    },
  },
  lastUpdated: true,
});
