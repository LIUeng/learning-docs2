# 前端监控体系

如何搭建一个前端监控体系

## 为什么

1. 如何及时发现问题
2. 如何快速定位并解决问题

## 监控内容

- 页面的整体访问情况，包括常见的 PV（page view）、UV（user view）、用户操作行为
- 页面的性能情况，包括页面加载耗时、接口耗时等各项数据统计

## 数据埋点与收集

页面访问速度、页面稳定性/异常、外部调用服务情况

1. 系统的生命周期数据，（页面性能、整体访问）
2. HTTP 测试数据（外部服务调用、页面性能优化）
3. 系统异常（系统稳定性、系统异常）
4. 用户行为数据（页面稳定性、整体访问）
5. 用户日志（反馈问题排查）

### 系统生命周期

`PerformanceTiming`

- navigationstart、unloadEventStart/unloadEventEnd
- domLoading、domInteractive、domContentLoadedEventStart/domContentLoadedEventEnd、loadEventStart/loadEventEnd

`document` 监听事件

- DOMContentLoaded
- readystatechange
- MutationObserver

`框架带有自身的生命周期`

### 系统异常

- window.onerror
- document.addEventListener('error')
- xhr status

### 用户日志

- 类装饰器
- 类方法劫持

### 数据上报

- 定期/定量上报
- 关键生命周期上报
- 用户主动提交

### 数据监控

- 错误告警是否有新增错误，可通过报错内容找到报错位置修复
- 全版本监控观察：整体的功能点覆盖曲线是否正常，已否有异常涨跌
- 分版本监控观察：新版本是否所有功都能正常访问、灰度占比是否正常、新旧版本的转化率是否一致

