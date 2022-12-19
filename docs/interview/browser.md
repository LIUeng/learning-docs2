# Chromium 渲染流水线

[本文引用地址](https://zhuanlan.zhihu.com/p/574069391)

## 浏览器架构

> 浏览器 = 浏览器内核 + 服务

- Safari = WebKit + 其他组件、库、服务
- Chrome = Chromium + Google 服务集成
- Microsoft Edge (Chromium) = Chromium + Microsoft 服务集成
- Yandex Browser = Chromium + Yandex 服务集成
- 360 安全浏览器 = Trident + Chromium + 360 服务集成
- Chromium = Blink + V8 + 其他组件、库、服务

> 浏览器 = 渲染引擎 + JavaScript 引擎 + 其他

| Browser        | Rendering Engine                  | JavaScript Engine |
| -------------- | --------------------------------- | ----------------- |
| Internet       | Explorer Trident (MSHTML)         | JScript/Chakra    |
| Microsoft Edge | EdgeHTML → Blink                  | Chakra → V8       |
| Firefox        | Gecko                             | SpiderMonkey      |
| Safari         | KHTML → WebKit                    | JavaScriptCore    |
| Chrome         | WebKit → Blink                    | V8                |
| Opera          | Presto → WebKit → Blink Carakan → | V8                |

## Chromium 进程

- 浏览器进程 1 个
- Utility 进程 1 个
- Viz 进程 1 个（Visuals Process）
- 插件进程 1 个
- 渲染进程 多个

### 浏览器进程

> 负责 Browser UI （不包含 WebContent 的 UI）的全部能力，包括渲染、动画、路由、Input 事件等

- Render & Compositing Thread
- Render & Compositing Thread Helpers

### 渲染进程

> 负责单个 Tab 内单个站点（注意跨站点 iframe 的情况）的渲染、动画、滚动、Input 事件等

- 线程
  - 主线程
  - 合成线程（compositor）
  - 光栅化线程
  - worker 线程

#### 主线程

- 执行 JavaScript
- Event Loop
- Document 生命周期
- Hit Testing
- 事件调度
- HTML CSS 数据格式的解析

#### 合成线程

- Input Handler & Hit Tester
- Web Content 中的滚动与动画
- 计算 Web Content 的最优分层
- 协调图片解码、绘制、光栅化任务（helpers)

### Viz 进程

> 接受 Render Process 和 Browser Process 产生的 viz::CompositorFrame，并将其合成 (Aggregate)，最后使用 GPU 将合成结果上屏 (Display)

- GPU main thread
- Display Compositor Thread

## 进程模式

- Process-per-site-instance：老版本的默认策略，如果从一个页面打开了另一个新页面，而新页面和当前页面属于同一站点（根域名与协议相同）的话，那么这两个页面会共用一个 Render Process
- Process-per-site
- Process-per-tab：如今版本的默认策略，每个 Tab 起一个 Render Process。但注意站点内部的跨站 iframe 也会启动一个新的 Render Process
- Single Process：单进程模式，启动参数可控，用于 Debug

## 渲染流水线

<img src="/assets/images/rendering-pipeline.webp" />

### Parsing

- 进程：渲染进程
- 线程：主线程
- 职责：解析浏览器进程传送的字节，转成 DOM TREE
- 流程：bytes → characters → token → nodes → object model (DOM Tree)

### Style

- 进程：渲染进程
- 线程：主线程
- 职责：遍历 DOM TREE，通过 CSSOM 进行样式分析（ComputeStyle 样式信息）和样式重算，生成 Render Tree

### Layout

- 进程：渲染进程
- 线程：主线程
- 职责：处理元素的几何属性，即位置与尺寸

### Pre-paint

- 进程：渲染进程
- 线程：主线程
- 职责：生成 Property trees（transform clip effect scroll），供 Compositor thrread 使用，避免某些资源重复 Raster

### Paint

- 进程：渲染进程
- 线程：主线程
- 职责：开始绘制

### Commit

- 进程：渲染进程
- 线程：合成（Compositor）线程
- 职责：将绘制的产物数据提交给 Compositor 线程

### Compositing

- 进程：渲染进程
- 线程：合成（Compositor）线程
- 职责：将整个页面按照一定规则，分成多个独立的图层，便于隔离更新

### Tiling

- 进程：渲染进程
- 线程：合成（Compositor）线程
- 职责：根据图层不同的范围级别，不同的大小拆分成多个图块给到 Raster 线程处理

### Raster

::: tips 光栅化
光栅化（Rasterization）是把顶点数据转换为片元的过程，具有将图转化为一个个栅格组成的图象的作用，特点是每个元素对应帧缓冲区中的一像素。
:::

- 进程：渲染进程
- 线程：Raster 线程
- 职责：生成位图

### Activate

- 进程：渲染进程
- 线程：合成（Compositor）线程
- 职责：实现一个缓冲机制，确保 Draw 阶段操作前 Raster 的数据已经准备好

### Draw

- 进程：渲染进程
- 线程：合成（Compositor）线程
- 职责：将光栅化之后的图块生成 draw quads 的过程

### Aggregate

- 进程：Viz 进程
- 线程：Display Compositor thread
- 职责：接受多个进程传递过来的（CompositorFrame）并进行合成

### Display

- 进程：Viz 进程
- 线程：GUP 主线程
- 职责：生成 CompositorFrame 之后，调用 GL 指令把 draw quads 最终输出到屏幕上
