# HTTP 状态码

五类状态码，状态码的第一个数字代表了响应的五种状态之一。

[Wiki - http status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## 1xx

消息类型，`请求已被接受，需要继续等待服务器处理`，临时响应，以空行结束，HTTP1.0 协议中没有定义任何 1xx 状态码。

### 100 Continue

服务器已经接收到请求头，并且客户端应继续发送请求体。

### 101 Switching Protocols

服务器已经理解客户端的请求，并将通过 Upgrade 消息头通知客户端采用不同的协议来完成这个请求。（Websocket）

### 102 Processing （WebDav）- RFC

WebDav 请求包含许多涉及文件操作的自请求，需要很长时间才能完成请求。服务器已经收到并正在处理请求，但无响应可用。

### 103 Early Hints - RFC

用来在最终的 HTTP 消息之前返回一些响应头。

## 2xx

成功类型，代表请求已成功被服务器接收、理解、并接受。

### 200 OK

请求已成功，请求所希望的响应头或数据体将随此响应返回。

### 201 Created

请求已经被实现，而且有一个新的资源已经依据请求的需要而创建，且其 URI 已经随 Location 头信息返回。

### 202 Accepted

服务器已经接受请求，单尚未处理。最终可能不会被执行，并且可能在处理发生时被禁止。

### 203 Non-Authroritative Information HTTP/1.1

服务器是一个转换代理服务器（网络加速器）

### 204 No Content

服务器成功处理了请求，没有返回任何内容。（Wi-Fi 接入，无需验证返回 204，需验证弹出网页浏览器界面）

### 205 Reset Content

与 204 不同的是，205 要求请求者重置文档视图。

### 206 Partial Content - RFC

服务器已经成功处理了部分 GET 请求（断点续传）

### 207 Multi-Status - RFC

XML 消息

### 208 Already Reported - RFC

多状态

### 226 IM Used - RFC

对实体请求的一个或多个实体操作的结果表示。

## 3xx

重定向类型，`需要客户端进一步的操作才能完成请求`，重定向目标在本次响应的 Location 域中指明。

### 300 Multiple Choices

被请求的资源有一系列可供选择的回馈信息，用户或浏览器自行选择一个首选的地址进行重定向。

### 301 Moved Permanently

被请求的资源已永久移动到新位置，并且将来对此资源的引用都应该使用本响应应返回的若干个 URI 之一。

### 302 Found - Moved Temporarily

要求客户端执行临时重定向

### 303 See Other

对应当前请求的响应可以在另一个 URI 上被找到，当响应于 POST（或 PUT/DELETE）接收到响应时，客户端应该假定服务器已经收到数据，并且应该使用单独的 GET 消息发出重定向。

### 304 Not Modified

资源在有请求头的 If-Modified-Since 或 If-None-Match 参数指定的这一版之后，未曾被修改。（资源不需要重新传输资源）

### 305 Use Proxy

被请求的资源必须通过指定的代理才能被访问。

### 306 Switch Proxy

后续请求应使用指定的代理。

### 307 Temporary Redirect

请求应该与另一个 URI 重复，单后续的请求应仍使用原始的 URI。

### 308 Permanent Redirect - RFC

请求和所有将来的请求应该使用另一个 URI 重复。

## 4xx

客户端错误

### 400 Bad Request

格式错误的请求语法，无效的请求消息或欺骗性路由请求，服务器不能或不会处理该请求

### 401 Unauthorized - RFC

未认证，用户没有必要的凭据（特定地址被拒绝访问网站）

### 402 Payment Required

将来的可能的需求而预留（在线支付、请求限制）

### 403 Forbidden

服务器已经理解请求，但是拒绝执行。身份验证并不能提供任何帮助，请求不应该被重复提交。

### 404 Not Found

请求失败，请求所希望得到的资源未被在服务器上发现，但允许用户的后续请求。

### 405 Method Not Allowed

请求行中指定的请求方法不能被用于请求相应的资源。

### 406 Not Acceptable

请求的资源的内容特性无法满足请求头中的条件，因此无法生成相应实体，该请求不可接受。

### 407 Proxy Authentication Required - RFC

客户端必须在代理服务器上进行身份验证

### 408 Request Timeout

请求超时

### 415 Unsupported Media Type

对于当前请求的方法和所请求的资源（请求中提交的媒体类型不支持）

## 5xx

`服务器错误`，表示服务器无法完成明显有效的请求

### 500 Internal Server Error

服务器出现问题，无法完成对请求的处理。

### 501 Not Implemented

服务器不支持当前请求所需要的某个功能。当服务器无法识别请求的方法，并且无法支持其对任何资源的请求。

### 502 Bad Gateway

作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。

### 503 Service Unavailable

暂时性的，服务器维护或者过载，服务器当前无法处理请求。

### 504 Gateway Timeout

作为网关或者代理工作的服务器尝试执行请求时，未能及时从上游服务器收到响应。

### 511 Network Authentication Required

客户端需要进行身份验证才能获得网络访问权限，旨在限制用户群访问特定网络（WiFi 热点）
