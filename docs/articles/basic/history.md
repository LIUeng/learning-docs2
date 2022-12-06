# History API

## window.history

- back Function 后退一页
- forward Function 前进一页
- go Function(Number) | String)

1. 负数 history.go(-1) 后退一页
2. 正数 history.go(2) 前进两页
3. 参数为字符串时，跳到最近的页面（可能后退也可能前进）history.go('google.com');

- pushState Function

1. 接收三个参数：状态对象、新状态的标题（浏览器暂未实现）、相对地址 url
2. 会创建新的历史状态

- replaceState Function

1. 接收三个参数：状态对象、新状态的标题（浏览器暂未实现）、相对地址 url
2. 更新当前页面的历史状态，不会计入历史状态

> 手动调用 pushState，window history 对象每切换不同的页面长度(前进后退) length + 1，replaceState 则不会

- state

`页面的 history 状态，可以使用 history.state 获取，设置 state 为调用 pushState, replaceState 的第一个参数状态对象`

- scrollRestoration

1. 允许 web 应用在历史记录导航上设置默认滚动行为
2. 取值：auto manual 默认值为 auto

## Browser 浏览器路由

`单页应用，浏览器路由需要配合服务端配置`

- nginx

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

- popstate 事件

浏览器后退前进按钮会触发 popstate 事件，进行路由的处理

```js
window.addEventListener('popstate', function() {}, false);
```

## Hash 哈希路由

`无需服务端配置，路由url加上 # 标志符`

- hashchange 事件

监听路由 hash 变化触发事件

```js
window.addEventListener('hashchange', function() {});
```

## window.location

- hash 返回 url 的 hash（#后接 0 个或者多个字符），如果不包括散列，则返回空字符串
- host 返回服务器域名 + 端口号（if has)
- hostname 服务器域名
- href 当前页面完整 url，location 对象的 toString()方法也返回完整 url
- pathname 返回 url 中的目录和文件名
- port 端口号
- protocol 协议 http: | https:
- search 返回 url 的查询字符串 ?开头
- reload Function

`location.reload() 重新加载页面`

- replace Function

`location.replace() 不会在历史记录中生成新的记录，history对象中长度length属性保持不变`

- assign Function(String)

打开新的 url 地址并生成一条新的历史记录，history 对象 length 属性 + 1

1. location.href = 'google.com'
2. window.location = 'google.com'
3. location.assign('google.com')

> 以上三种方式同样效果

- URL 重新加载方式

1. location.search = ''
2. location.hostname = ''
3. location.pathname = ''
4. location.port = ''

> 以上方式都会生成浏览器新的历史记录

- URL 改变不会重载

`location.hash = '' 这种方式不会重新加载，但仍会生成新的历史记录`

END
