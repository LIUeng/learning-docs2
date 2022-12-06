# DOM 类型

## DOM 链

::: tip JS & HTML
记录原生的 js 操作 dom 链
:::

`让我们从最熟悉的的 document 开始`

```js
document
document.__proto__ => HTMLDocument // type object
HTMLDocument.__proto__ => Document // type function => f Document({[native code]}) 源码

Document.prototype._proto__ => Node // type object
Node.__proto__ => EventTarget // type function => f EventTarget({[native code]})
EventTarget.prototype // type object => {addEventListener, removeEventListener, dispatchEvent}
```

::: warning document.documentElement
混杂模式

document.documentElement.**proto => HTMLHtmlElement.**proto => HTMLElement // 同下
:::

`来看看 document.head `

```js
document.head
document.head.__proto__ => HTMLHeadElement.__proto => HTMLElement
// 同下
```

`再来看看 document.body `

```js
document.body
document.body.__proto__ => HTMLBodyElement // type object
HTMLBodyElement.__proto__ => HTMLElement // type (native code)
HTMLElement.prototype.__proto__ => Element // type object
Element.__proto__ => Node
// ... 同上
```

`看完 body 再来看看一个具体的元素 div`

::: tip div
这里就拿 div 举例
:::

```js
// html => <div id="root"></div>
var root = document.getElementById('root');
root.__proto__ => HTMLDivElement
root.__proto__.__proto__ => HTMLElement
// ... 同上
```

## DOM 操作

::: warning NodeList NamedNodeMap HTMLCollection
有两个方法：item() nameItem()

文档结构发生变化时，它们会随时更新（减少访问的次数）
:::

<img src="/docs-page/assets/images/dom.png" alt="DOM图" />

**DOM API**

- createElement
- createTextNode
  `创建文本节点 normalize() 一个父元素下所有文本节点合并成一个节点`
- createComment
  `注释文本`
- createDocumentFragment
  `文档片段`

- appendChild
- removeChild
- replaceChild(target, source)
- insertBefore(target, source)
- cloneNode(bool)
  `true => 深复制 false => 浅复制`

- getAttribute
- setAttribute
  `dataset 标准`
- removeAttribute
- attributes[]
- attr

## DOM 扩展

- querySelector
- querySelectorAll
- matchesSelector

- Element Traversal API 为 DOM 元素添加了以下 5 个属性。

  -  childElementCount:返回子元素(不包括文本节点和注释)的个数。
  -  firstElementChild:指向第一个子元素;firstChild 的元素版。
  -  lastElementChild:指向最后一个子元素;lastChild 的元素版。
  -  previousElementSibling:指向前一个同辈元素;previousSibling 的元素版。
  -  nextElementSibling:指向后一个同辈元素;nextSibling 的元素版。

- classList

  - add
  - contains
  - remove
  - toggle

- 自定义数据属性

  ```js
  var div = document.getElementById('myDiv');
  //取得自定义属性的值
  var appId = div.dataset.appId;
  var myName = div.dataset.myname;
  //设置值
  div.dataset.appId = 23456;
  div.dataset.myname = 'Michael';
  ```

- innerHTML
  `设置HTML字符串，无作用域的元素，并不是所有元素都支持innerHTML`
  ```js
  div.innerHTML = "<script defer>alert('hi');</script>"; //无效
  // 有效如下
  div.innerHTML = "_<script defer>alert('hi');</script>";
  div.innerHTML = "<div>&nbsp;</div><script defer>alert('hi');</script>";
  div.innerHTML = '<input type="hidden"><script defer>alert(\'hi\');</script>';
  ```
- outerHTML
  `包含自身`

- scrollIntoView()
  `document.forms[0].scrollIntoView();`
- scrollTo()
- scrollBy()

- children 属性 && childNodes

- contains
  `IE 某个节点是不是另一个节点的后代`

- innerText(textContent) && outerText

## DOM2 DOM3

- style
  -  cssText
  -  length
  -  item(index)
  -  getPropertyCSSValue(propertyName):返回包含给定属性值的 CSSValue 对象(cssText 和 cssValueType)。
  -  getPropertyValue(propertyName):返回给定属性的字符串值。
  -  removeProperty(propertyName):从样式中删除给定属性。
  -  setProperty(propertyName,value,priority):将给定属性设置为相应的值，并加上优先权标志("important"或者一个空字符串)。
  - ...

```js
//设置背景颜色 myDiv.style.backgroundColor = "red";
//改变大小
myDiv.style.width = '100px';
myDiv.style.height = '200px';
//指定边框
myDiv.style.border = '1px solid black';

myDiv.style.cssText = 'width: 25px; height: 100px; background-color: green';
alert(myDiv.style.cssText);

myDiv.getComputedStyle(); // 返回所有的样式 行内样式 内联样式
```

**元素大小**

- 偏移量
  -  offsetHeight:元素在垂直方向上占用的空间大小，以像素计。包括元素的高度、(可见的) 水平滚动条的高度、上边框高度和下边框高度。
  -  offsetWidth:元素在水平方向上占用的空间大小，以像素计。包括元素的宽度、(可见的)垂 直滚动条的宽度、左边框宽度和右边框宽度。
  -  offsetLeft:元素的左外边框至包含元素的左内边框之间的像素距离。
  -  offsetTop:元素的上外边框至包含元素的上内边框之间的像素距离。

<img src="/docs-page/assets/images/tblr.png" alt="偏移量图" />

- 客户区大小

<img src="/docs-page/assets/images/clientBS.png" alt="客户区大小图" />

- 滚动大小
  -  scrollHeight:在没有滚动条的情况下，元素内容的总高度。
  -  scrollWidth:在没有滚动条的情况下，元素内容的总宽度。
  -  scrollLeft:被隐藏在内容区域左侧的像素数。通过设置这个属性可以改变元素的滚动位置。
  -  scrollTop:被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素的滚动位置。

<img src="/docs-page/assets/images/scrollBS.png" alt="滚动大小图">

::: warning 混杂模式
对于运行在混杂模式下的 IE，则需要用 document.body 代替 document.documentElement
:::

- 确定元素大小
  `getBoundingClientRect()`

  ```js
  function getBoundingClientRect(element) {
    if (typeof arguments.callee.offset != 'number') {
      var scrollTop = document.documentElement.scrollTop;
      var temp = document.createElement('div');

      temp.style.cssText = 'position:absolute;left:0;top:0;';
      document.body.appendChild(temp);
      arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;

      document.body.removeChild(temp);
      temp = null;
    }

    var rect = element.getBoundingClientRect();
    var offset = arguments.callee.offset;

    return {
      left: rect.left + offset,
      right: rect.right + offset,
      top: rect.top + offset,
      bottom: rect.bottom + offset,
    };
  }
  ```

**表单脚本**

- HTMLFormElement
  -  acceptCharset:服务器能够处理的字符集;等价于 HTML 中的 accept-charset 特性。
  -  action:接受请求的 URL;等价于 HTML 中的 action 特性。
  -  elements:表单中所有控件的集合(HTMLCollection)。
  -  enctype:请求的编码类型;等价于 HTML 中的 enctype 特性。
  -  length:表单中控件的数量。
  -  method:要发送的 HTTP 请求类型，通常是"get"或"post";等价于 HTML 的 method 特性。
  -  name:表单的名称;等价于 HTML 的 name 特性。
  -  reset():将所有表单域重置为默认值。
  -  submit():提交表单。
  -  target:用于发送请求和接收响应的窗口名称;等价于 HTML 的 target 特性。

**选择框脚本**

- HTMLSelectElement

  - add(newOption, relOption)
  - multiple
  - options
  - remove(index)
  - selectedIndex
  - size

- HTMLOptionElement
  - index
  - label
  - selected
  - text
  - value

**扩展**

- 操作剪贴板
  -  beforecopy:在发生复制操作前触发。
  -  copy:在发生复制操作时触发。
  -  beforecut:在发生剪切操作前触发。
  -  cut:在发生剪切操作时触发。
  -  beforepaste:在发生粘贴操作前触发。
  -  paste:在发生粘贴操作时触发。
    ::: tip clipboardData
    事件对象中（IE 是 window 对象的属性），getData()，setData()，clearData() => 两种数据格式 text 和 URL
    :::
  ```js
  var EventUtil = {
    getClipboardText: function (event) {
      var clipboardData = event.clipboardData || window.clipboardData;
      return clipboardData.getData('text');
    },
    setClipboardText: function (event, value) {
      if (event.clipboardData) {
        return event.clipboardData.setData('text/plain', value);
      } else if (window.clipboardData) {
        return window.clipboardData.setData('text', value);
      }
    },
  };
  ```
