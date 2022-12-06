# Cookies

基于 HTTP 协议：由一系列字符串组成，存储在客户端（不能超过 4kb），客户端和服务端建立安全通信验证

## 读取

带有 http-only 属性的 cookie 不能被读取

```js
alert(document.cookie);
```

## 写入

已经存在的 cookie 不会被删除

```js
document.cookie = 'user=name';
// 设置多个 cookie 使用分号空格（: ）隔开
```

## path

当前设置的 cookie 在 path 的匹配下才可携带，默认为当前的 url

```js
// path=/admin 匹配 /admin/anything
document.cookie = 'user=name;path=/admin';
```

## domain

设置哪些域名可以访问（一级域名、二级域名）

## 过期时间

### expires

接收 GMT 的时间格式（date.toUTCString）

```js
// 设置一天
const date = new Date(Date.now() + 86400e3).toUTCString();
document.cookie = 'user=name; expires=' + date;
```

### max-age

接收多少秒

```js
// 设置300s
document.cookie = 'user=name; max-age=300';
```

## secure

用于 HTTPS 传输携带

## samesite

设置 httpOnly 属性, 防止 XSRF（cross-site request forgery）跨站攻击

- Strict === samesite
- Lax 默认值

| 请求类型  | 示例                                       | 正常情况 | Lax  |
| --------- | ------------------------------------------ | -------- | ---- |
| 链接      | `<a href="..."></a>`                       | 发送     | 发送 |
| 预加载    | `<link rel="prerender" href="..."></a>`    | 发送     | 发送 |
| GET 表单  | `<a method="GET" action="..."></a>`        | 发送     | 发送 |
| POST 表单 | `<form method="POST" action="..."></form>` | 发送     | 不发送 |
| iframe    | `<iframe src="..."></iframe>`              | 发送     | 不发送 |
| AJAX      | `$.get()`                                  | 发送     | 不发送 |
| Image     | `<img src="..." /`                         | 发送     | 不发送 |

- None

### httpOnly

设置 httpOnly 的 cookie 不能被 Javascript 读取访问

## 第三方 cookie

是否允许第三方网站设置 cookie

> 注意

`如果一个脚本来自不同的域，设置的 cookie 仅属于当前域名和当前页`

- Safari 不被允许
- Firefox 黑名单不被允许
