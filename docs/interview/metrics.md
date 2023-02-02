# 性能指标

:::tip
PerformanceObserver & PerformanceEntry
:::

## LCP

Largest Contentful Paint（最大内容绘制）

> 最大内容绘制控制在 2.5s 之内

### 如何衡量

:::warning
真正计算的指标存在差异
:::

> Timing-Allow-Origin 资源指标是否允许跨域收集

```js
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP candidate:', entry.startTime, entry);
  }
}).observe({ type: 'largest-contentful-paint', buffered: true });
```

- API 会为在后台选项卡中加载的页面分发 largest-contentful-paint 条目，但在计算 LCP 时应忽略这些页面。
- API 在页面转移到后台后，会继续分发 largest-contentful-paint 条目，但在计算 LCP 时应忽略这些条目（只有当页面始终处于前台时才考虑元素）。
- 当页面通过往返缓存恢复时，API 不会报告 largest-contentful-paint 条目，但在这些情况下应该测量 LCP，因为这对用户来说是多次不同的页面访问体验。
- API 不考虑 iframe 中的元素，但要想正确测量 LCP，您应该考虑这些元素。子框架可以使用 API 将这些元素的 largest-contentful-paint 条目报告给父框架来进行聚合。

### 改进

> 因素

- 服务器响应速度
- JavaScript 和 CSS 渲染阻塞
- 资源加载时间
- 客户端渲染

> 优化 LCP

- PRPL
- 优化关键渲染路径
- 优化 CSS
- 图像
- 网页字体
- JavaScript

### 测量工具

> 实测工具

- web-vitals JavaScript 库
- PageSpeed Insights 网页速度测量工具
- Search Console

> 实验室工具

- chrome 开发者工具
- Lighthouse
- PageSpeed Insights
- WebPageTest

## FP

First Paint

## FCP

First Contentful Paint

## DCL

DomContentLoaded

## FMP

First Meaningful Paint

## L

onLoad

## TTI

Time to Interactive

## TBT

Total Blocking Time

## FID

First Input Delay

## CLS

Cumulative Layout Shift 累计布局偏移

## SI

Speed Index
