# 浏览器[type="module"]

## 兼容性

- Safari 10.1.
- Chrome 61.
- Firefox 60.
- Edge 16.

## 基本使用
```html
<script type="module">
  import { sayHello } from './utils.mjs';
  sayHello('Let us do it!');
</script>
```
```js
// utils.mjs
export function sayHello(text) {
  const div = document.createElement('div');
  div.textContent = text;
  document.body.appendChild(div);
}
```

## 路径支持

- 完整路径
- 以 / 开头
- 以 ./ 开头
- 以 ../ 开头

## nomodule && noscript

- nomodule
```html
<script type="module" src="module.mjs"></script>
<script nomodule src="fallback.js"></script>
```
- noscript
```html
<noscript>Your broswers are not support JavaScript</noscript>
```

## 加载顺序默认为 defer
```html
<script type="module" src="1.mjs"></script>
<script src="2.js"></script>
<script defer src="3.js"></script>
```

`Result: 2.js 1.mjs 3.js`

## module 行内执行顺序 defer
```html
<script type="module">
  sayHello("inline module");
</script>

<script src="1.js"></script>

<script defer>
  sayHello("inline script");
</script>

<script defer src="2.js"></script>
```

`Result: 1.js, inline script, inline module, 2.js`

## async && inline module
```html
<script async type="module">
  import { sayHello } from './utils.mjs';
  sayHello('inline module.');
</script>

<script async type="module" src="1.mjs"></script>
```

`Result: 谁先下载完谁就执行，顺序不绝对先后`

## 多次加载只加载一次
```html
<!-- 1.mjs 只执行一次 -->
<script type="module" src="1.mjs"></script>
<script type="module" src="1.mjs"></script>
<script type="module">
  import "./1.mjs";
</script>

<!-- 执行多次 -->
<script src="2.js"></script>
<script src="2.js"></script>
```

`Result: module 模块只加载一次，而传统的引入会执行多次`

## 跨域问题
```html
<!-- 不允许跨域 不能执行 -->
<script type="module" src="https://.../no-cors"></script>

<!-- 不允许跨域引入 不能执行 -->
<script type="module">
  import 'https://.../no-cors';
  sayHello("This will not execute.");
</script>

<!-- 允许跨域 能执行 -->
<script type="module" src="https://.../cors"></script>
```

`Result: 允许跨域就可以访问，不允许跨域就访问不到`

## 自带凭证 crossorigin

```html
<!-- 携带凭证 cookies 等信息 -->
<script src="1.js"></script>

<!-- 携带凭证（旧浏览器除外） -->
<script type="module" src="1.mjs"></script>

<!-- 携带凭证 -->
<script type="module" crossorigin src="1.mjs"></script>

<!-- 不携带凭证 -->
<script type="module" crossorigin src="https://other-origin/1.mjs"></script>

<!-- 携带凭证 -->
<script type="module" crossorigin="use-credentials" src="https://other-origin/1.mjs"></script>
```

- 默认情况下，旧浏览器违反当时的规范，将凭据发送到同源URL。
- 当时遵循规范的浏览器，默认情况下不将凭据发送到同源URL。
- 遵循新规范的新浏览器，默认情况下会将凭据发送到同源URL。

`Sum: 加入crossorigin，允许同源访问，而不是跨域访问`

## MIME TYPE

**默认为text/javascript，否则不会执行**

```html
<script>
  function sayHello() {console.log('hello');}
</script>
<script type="module" src="hello.mjs"></script>
```
```js
// hello.mjs
sayHello(); // hello
```



