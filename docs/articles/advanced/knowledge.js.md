# 你不知道的 JS

## matchMedia

- 匹配媒体属性相关的信息

> 比如

```js
// 获取系统主题
let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

/**
 * mediaQueryList
 * {
 * matches: boolean,
 * media: 查询属性
 * addListener
 * removeListener
 * onchange: null
 * }
 */
```
