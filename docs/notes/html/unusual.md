# 你不知道的 HTML 标签

## meta

- charset 指定编码集
- http-equiv 为 content 属性值提供 HTTP header
  - content-security-policy 定义内容策略，指定允许的服务器元和脚本端点，有助于跨站点脚本共计
  - content-type 内容格式 text/html
  - default-style 设置默认css样式表集的名称
  - refresh 过几秒刷新跳转 content="秒数;url=xxx"
  - x-ua-compatible 如果指定 content 属性值必须有 IE=edge
- name
  - application-name 页面应用名
  - author 页面作者
  - description 页面描述
  - generator
  - keywords 关键字
  - viewport 视口
- content 为 http-equiv 属性和 name 属性提供值