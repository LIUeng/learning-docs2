# JS 如何实现复制

## document.execCommand <Badge text="Deprecated" type="warn"/>

Web 规范中表示 `document.exceCommand` 不会再支持了，但是有些浏览器还是可以继续支持

- w3c
- whatwg
- mdn

### 实现

```html
<button id="btn" date-text="copy me">复制<button></button></button>
```

```js
// 这是一种实现方式
// 还可以采用 textarea 元素选中的方式
let btn = document.getElementById('btn');

btn.onclick = function onclick() {
  let data = btn.getAttribute('data-text');

  // copy 事件
  function copybind(e) {
    e = e || window.event;
    // 阻止默认行为 如果文档中有选择的文字会优先复制该选择的文字 selection
    e.preventDefault();
    // copy 事件中含有 ClipboardEvent 事件对象 datatransfer 可以对文档进行操作
    // mime type + 复制的文字
    e.clipboardData.setData('text/plain', data);
    // 移除绑定事件
    document.removeEventListener('copy', copybind);
  }

  // 全局绑定事件
  document.addEventListener('copy', copybind);
  // 执行复制命令 这里会触发文档的 copy 事件，从而复制文字到剪切板中
  document.execCommand('copy');
};
```

## Clipboard API

```warning 注意
一些浏览器在不安全模式下，访问不到有关安全的 API，如 HTTP 域名下访问不到 ClipboardItem，可以使用 window.isSecureContext 进行查看（localhost 回环地址除外）是否可以访问
```

> 兼容性

chrome58+ Edge12+ Firefox4+ Opera45+ Safari10.1+

一些浏览器可以支持 Clipboard 相关 API，Web 规范中建议使用 `Clipboard API` 代替 `document.execCommand` 相关的操作

### ClipboardEvent

剪切板事件对象，dataTransfer 相关操作（setData, getData)

### ClipboardItem

提供给 navigator.clipboard 使用异步 API 操作的实例对象（复制的类型）

> 实例对象属性

- types 返回 mime type 数组
- presentationStyle 取值 'unspecified' | 'inline' | 'attachment'

> 实例对象方法

- getType 返回一个 Promise resolve 态的 blob 对象类型

```warning 注意
Clipboard 相关的 API 必须在一个文档事件（I/O）内触发，单独使用无效，相关的读取权限操作可以查看 window.Permissions API
```

[window.Permissions](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API)

### navigator.clipboard

异步操作 API

#### write

`ClipboardItem Blob 类型的数据`

```js
// 此代码在全局无法运行
// 必须在事件内进行操作
let text = 'copy me';
let data = new ClipboardItem({
  'text/plain': new Blob([text], { type: 'text/plain' })
});
if (!navigator.clipboard || !window.isSecureContext) {
  return console.warn('非安全模式下不支持');
}
navigator.clipboard
  .write([data])
  .then(() => {
    console.log('复制成功');
  })
  .catch(() => {
    console.warn('复制失败');
  });
```

#### writeText

`string 类型`

```js
let text = 'copy me';
navigator.clipboard
  .writeText(text)
  .then(() => {
    console.log('复制成功');
  })
  .catch(() => {
    console.warn('复制失败');
  });
```

#### read

`ClipboardItem Blob 对象类型`

```js
navigator.clipboard
  .read()
  .then(result => {
    // result 这里返回的是 ClipboardItem 对象
    console.log('读取成功');
  })
  .catch(() => {
    console.warn('读取失败');
  });
```

#### readText

`string 类型`

```js
navigator.clipboard
  .read()
  .then(result => {
    // result 这里返回的是 string
    console.log('读取成功');
  })
  .catch(() => {
    console.warn('读取失败');
  });
```

## 扩展

### mime type

[MIME TYPE 媒体类型](https://www.iana.org/assignments/media-types/media-types.xhtml)

- text/plain
- application/json
- image/png
- ...

### Blob

[Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)

创建 Blob 对象是一个不可变的原始数据的类文件对象，可以作为文本或二进制数据读取，也可以转换位 ReadableStream 以便其方法可以可用于处理数据

> 实例属性

- size
- type === mime type 类型

> 实例方法

- arrayBuffer 返回一个数组 buffer 二进制数据
- slice 返回一个新的 Blob 对象包含指定的范围的字节调用
- stream 返回一个可以被 ReadableStream 读取的流
- text 返回一个 Promise resolve UTF-8 类型的文本数据
