# CORS

Cross-Origin Resource Sharing 跨域资源共享

:::tip 定义
由一系列传输的 Http Headers 头组成，这些 Http 头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应。
:::

## Cors Headers

cors headers 给 web 服务器权限，允许跨域请求访问到它们的资源

### Access-Control-Allow-Origin

指示请求的资源能共享给哪些域

### Access-Control-Allow-Credentials

指示当请求的凭证标记为 true 时，是否响应该请求

### Access-Control-Allow-Headers

用在对预请求的响应中，指示实际的请求中可以使用哪些 HTTP 头

### Access-Control-Allow-Methods

指定对预请求的响应中，哪些 HTTP 方法允许访问请求的资源

### Access-Control-Expose-Headers

指示哪些 HTTP 头的名称能在响应中列出

### Access-Control-Max-Age

指示预请求的结果能被缓存多久

### Access-Control-Request-Headers

用于发起一个预请求，告知服务器正式请求会使用哪些 HTTP 头

### Access-Control-Request-Method

用于发起一个预请求，告知服务器正式请求会使用哪一种 HTTP 请求方法

### Origin

指示获取资源的请求是从什么域发起的

## 同源策略

same-origin 如果两个 URL 的 protocol、port 和 host 都相同的话，则这两个 URL 同源。

### document.domain

允许获取当前页面的域名以及设置域名下的子域名（同源）

## 跨域访问的几种方式

### window.postMessage

```js
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

- otherWindow 对象

其他窗口的一个引用，如：iframe.contentWindow、window.open(...) 返回的窗口对象、或者是命名过或数值索引的 window.frames

- message

将要发送到其他 window 的数据。

- targetOrigin

哪些域名可以被允许发送消息

- transfer

Transferable 对象

```js
// http://test.com
// 发送方
let popup = window.open('http://test.com:8080');
popup.postMessage('hello', 'http://test.com');
window.addEventListener('message', receiveMessage, false);
function receiveMessage(event) {
  if (event.origin !== 'http://test.com:8080') {
    return;
  }
}

// http://test.com:8080
// 接收方
function receiveMessage(event) {
  if (event.origin !== 'http:test.com:8080') {
    return;
  }
  event.source.postMessage('world' + event.origin);
}
window.addEventListener('message', receiveMessage, false);
```