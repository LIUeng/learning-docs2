# HTTP 请求方法

[Wiki - HyperText Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)

9 种方法

## GET

向指定的资源发起请求

## HEAD

和 GET 一样，向服务器发出指定资源的请求，但是没有响应头

## POST

向指定资源提交数据，请求服务器进行处理（提交表单或者上传文件），可能会创建新的资源或者修改资源，或二者都可

### 请求 body 格式

- application/x-www-form-urlencoded
- application/json
- multipart/form-data

## PUT

向指定资源位置上传其最新内容（资源已创建，直接修改）

## DELETE

请求服务删除 Request-URI 所标识的资源

## TRACE

回显服务器收到的请求，用于测试或诊断（请求目标资源在响应正文中传输收到的请求）

## OPTIONS

向服务器发出预请求，判断服务器是否支持该请求方法以及响应

## CONNECT

- HTTP1.1 预留给能够将连接改为隧道方式的代理服务器（通常用于 SSL 加密服务器的链接）
- 请求中介建立到请求目标表示的源服务器的 TCP/IP 隧道（一个或多个带有 TLS 的 HTTP 代理来保护连接）

## PATCH

请求目标资源根据请求中包含的表示中定义的部分更新来修改其状态（更新文件或文档的一部分来节省带宽，而不必完全传输）

## 对比

<style>
  .warn {
    background-color: red;
    color: #ffffff;
  }
</style>

| 请求方法 | request(请求体)        | response(响应头)       | safe(安全)             | indempotent(幂等)      | cachcable(缓存)        |
| -------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| GET      | optional               | yes                    | yes                    | yes                    | yes                    |
| POST     | yes                    | yes                    | <i class="warn">no</i> | <i class="warn">no</i> | yes                    |
| HEAD     | optional               | <i class="warn">no</i> | yes                    | yes                    | yes                    |
| PUT      | yes                    | yes                    | <i class="warn">no</i> | yes                    | <i class="warn">no</i> |
| DELETE   | optional               | yes                    | <i class="warn">no</i> | yes                    | <i class="warn"></i>   |
| TRACE    | <i class="warn">no</i> | yes                    | yes                    | yes                    | <i class="warn">no</i> |
| CONNECT  | optional               | yes                    | yes                    | <i class="warn">no</i> | <i class="warn">no</i> |
| OPTIONS  | optional               | yes                    | yes                    | yes                    | <i class="warn">no</i> |
| PATCH    | yes                    | yes                    | <i class="warn">no</i> | <i class="warn">no</i> | <i class="warn">no</i> |

> 总结

- POST PUT PATCH 需要请求体(request)，其他请求方法可选
- 响应体(response)只有 HEAD 不返回，其他请求方法都可以有响应体
- POST PUT PATCH 涉及到资源的修改和创建都是不安全的，其他请求方法相对安全
- POST CONNCET PATCH 都不是幂等(idempotent)(请求多次，输出的结果都是一样的)，具有副作用
- GET POST HEAD 三种方法可以缓存，其他方法不可缓存
