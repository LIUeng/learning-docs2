# package.json

package.json 中的配置

## json 配置

- name 包名
- version 版本号
- description 描述
- keywords 关键词
- homepage 主页
- bugs 发布包 bug 日志

  - {url: 'xxx', email: 'xxx'} or [] or string

- license 凭证

  - {type: 'ISC', url: 'xxx'} or [] or string

- people fields: author contributors

  - name, email, url

- funding 更新日志信息

  - {type: 'xxx', url: 'xxx'} or []

- files 指定哪些文件需要上传到包中（include files)

  - exclude files === .gitignore .npmignore

- main 入口文件
- browser 指定运行环境

- bin 可执行命令
  - {myapp: './cli.js'} 默认命令为包名 npm 安装时会在 node_modules/.bin/myapp
  - cli.js 文件开头加入以下代码 !#/usr/bin/env node 指定运行环境变量

- man 手册帮助
