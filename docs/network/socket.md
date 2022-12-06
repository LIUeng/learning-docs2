# Socket

## Socket

套接字(Socket)，对网络中不同主机的应用进程之间进行双向通信的端点的抽象（应用程序访问通信协议的操作系统调用套接字）

- 套接字上联应用进程，下联网络协议栈
- 应用程序通过网络协议进行通信的接口
- 应用程序与网络协议栈进行交互的接口

### 表示方法

IP 地址:端口号

### 连接

一对套接字：Client Socket/Servre Socket

- 服务器监听

服务器端套接字并不定位具体的客户端套接字，处于等待连接的状态，试试监控网络状态

- 客户端请求

客户端的套接字提出连接请求，要连接的目标是服务器端的套接字

- 连接确认

服务端套接字接收到客户端套接字的连接请求，响应客户端套接字的请求，建立新的线程，并把服务器端套接字的描述发送给客户端。客户端确认了此描述，连接建立，服务器端套接字继续处于监听状态，接收其他客户端套接字的连接请求

## WebSocket

浏览器中用于双向通信的一种 TCP 传输协议，并复用 HTTP 的握手通道

### 优点

- 支持双向通信，实时性更强
- 更好的二进制支持
- 较少的控制开销（数据包+4 字节的掩码，而 HTTP 每次请求都要携带完整的头部）
- 支持扩展（WS 协议定义了扩展，自定义扩展协议、自协议）自定义压缩算法

### 建立连接

> 客户端：申请协议升级

```txt
GET / HTTP/1.1
Host: localhost:8080
Origin: http://127.0.0.1:3000
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Version: 13
Sec-WebSocket-Key: w4v7O6xFTi36lq3RNcgctw==
```

> 服务端：响应协议升级

状态代码 101 表示协议切换

```txt
HTTP/1.1 101 Switching Protocols
Connection:Upgrade
Upgrade: websocket
Sec-WebSocket-Accept: Oy4NRAQ13jhfONC7bP8dTKb4PTU=
```

### 连接保持+心跳

长时间没有数据往来的连接，长时间保持会浪费连接资源（采用心跳实现）

- 发送方 -> 接收方 ping
- 接收方 -> 发送方 pong

### 响应头/请求头

#### Sec-WebSocket-Key/Sec-Websocket-Accept

- 避免服务端收到非法的 websocket 连接
- 确保服务端理解 WebSocket 连接
- 请求设置 header 时是被禁止的
- 对于反向代理服务器来说，可以理解 WebSocket 握手不会产生无用的缓存

### 遇到的一些问题

> 如何计算响应头中 Sec-Websocket-Accept 的值

服务器获取握手请求中的 Sec-WebSocket-Key 的值，然后附加 GUID(Globally Unique Identifier 258EAFA5-E914-47DA-95CA-C5AB0DC85B11)，采用新的 SHA-1 值，进行 base64 编码

```js
const { createHash } = require('crypto');

const key = req.headers['sec-websocket-key'].tirm();
// 这里结果就是 Sec-Websocket-Accept 响应值
const digest = createHash('sha1')
  .update(key + GUID)
  .digest('base64');
```
