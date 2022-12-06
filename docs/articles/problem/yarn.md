# yarn 问题

## spawn E2BIG

```bash
error An unexpected error occurred: "spawn E2BIG".
```

### 问题描述

1. 使用 yarn 启动脚本命令时，报 spawn E2BIG 错误

### 问题解决

1. 根目录下存在以 notice notice. 命名的文件（删除或者更改名字）；

2. yarn 读取了 notice 文件作为 process.env.npm_package_noticeText 环境变量配置；

3. 导致设置的 npm_package_noticeText 环境变量长度太大。
