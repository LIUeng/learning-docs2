# 前端模块的演变

> UMD AMD CommonJS ESM

## UMD

浏览器中直接运行

```js
// 立即执行函数
(function(ctx, factory) {
  factory();
})(window, function(ctx) {
  // define module
});
```

## AMD

### define 函数

define(id?, dependencies?, factory);

- 接收三个参数
  - id 字符串（可选）
  - dependencies 数组（可选） == 为 factory 工厂函数提供参数(已经定义好的模块) 默认为 ['require', 'exports', 'module']
  - factory 执行函数

```js
// 1
define('library', function(require) {});

// 2
define(function(require, exports, module) {
  var a = require('a');
  exports.a = a;
});
```

### require 函数

- require(String)

```js
define(function(require) {
  var a = require('a');
});
```

- require(Array, Function)

```js
define(function(require) {
  require(['a', 'b'], function(a, b) {});
});
```

- require.toUrl(String)

```js
define(function(require) {
  var templatePath = require.toUrl('./templates/xx.html');
});
```

## CommonJS

> NodeJS

```js
// 引入
var a = require('./a');
var b = require('./b');

/// 多个导出
module.a = a;
module.b = b;

// 默认导出
module.exports = a;
```

## ESM

```js
// 引入
import a from './a';
import b from './b';

// 多个导出
export a;
export b;

//  默认导出
export default a;
```

## 扩展

### SystemJS

...

### require.context

> 引入一个文件夹匹配的所有文件，返回三个属性 resolve keys id

```js
const r = requrie.context('./a', false, /\.js$/);
// r.resolve() 一个函数返回解析的 module id
// r.keys 返回一个数组 模块名
// r.id 返回一个标识 id
```

requrie.context(dir, subDir, regExp, mode = 'sync');

- 接收四个参数
  - 文件夹 String
  - 子文件夹 Boolean
  - 匹配文件 正则表达式
  - 模式
