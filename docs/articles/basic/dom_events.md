# DOM BOM 事件流

兼容性：IE9、Opera、Firefox、Chrome 和 Safari 支持 DOM 事件流

## 事件冒泡

事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接收，逐级向上传播到较为不具体的节点（文档 document）

## 事件捕获

document 文档接收到事件，然后逐级向下传播的到最具体元素接收事件

## 事件处理程序

### HTML 事件处理程序

```html
<div onclick="alert('HELLO')"><div></div></div>
```

### DOM0 级事件处理程序

```js
// <div id="app"></div>
const app = document.getElementById('app');
app.onclick = function() {
  alert('HELLO');
};
```

### DOM2 级事件处理程序

兼容性：IE9、Firefox、Safari、Chrome 和 Opera

- addEventListener

绑定多个相同的事件，按先后顺序执行

接收三个参数：要处理的事件名、要处理的事件名函数、bool 值（true: 表示在捕获阶段调用事件处理程序；false: 表示在冒泡阶段调用事件处理程序）

```js
// <div id="app"></div>
const app = document.getElementById('app');
app.addEventListener('click', function() {}, false);
```

- removeEventListener

参数相同，三个参数必须一样（注意：事件名处理的函数参数必须一致，否则无效）

### IE 事件处理程序

- attachEvent & detachEvent

绑定多个相同的事件，倒序执行

接收两个参数，事件处理程序名称和事件处理程序函数

```js
// <div id="app"></div>
const app = document.getElementById('app');
// on + click
app.attachEvent('onclick', function() {
  // 事件处理程序会在全局作用域内执行
  alert(this === window); // true
});
```

## 事件对象

### DOM 事件对象

> 只有在事件处理程序执行期间，event 对象才会存在；一旦事件处理程序执行完成，event 对象就会被销毁

- 事件函数处理内部，对象 this 始终等于 currentTarget 的值，而 target 只包含事件的目标

| 属性/方法                | 类型         | 说明                                                       |
| ------------------------ | ------------ | ---------------------------------------------------------- |
| bubbles                  | Boolean      | 事件是否冒泡                                               |
| cancelable               | Boolean      | 是否可以取消事件的默认行为                                 |
| currentTarget            | Element      | 当前正在处理事件的元素                                     |
| defaultPrevented         | Boolean      | true: 表示已经调用了 preventDefault()                      |
| detail                   | Interger     | 与事件相关的细节信息                                       |
| eventPhase               | Interger     | 调用事件处理程序的阶段：1. 捕获 2. 目标 3. 冒泡            |
| preventDefault           | Function     | 取消事件的默认行为，cancelable 为 true 时可调用            |
| stopImmediatePropagation | Function     | 取消事件的进一步冒泡或捕获，同时阻止任何事件处理程序被调用 |
| stopPropagation          | Function     | 取消事件的冒泡行为                                         |
| target                   | Element      | 事件目标元素                                               |
| trusted                  | Boolean      | true 浏览器生成的事件；false 表示人为因素                  |
| type                     | String       | 事件类型                                                   |
| view                     | AbstractView | 与事件关联的抽象视图，window 对象                          |

### IE 事件对象

- IE 事件对象中，event = event || window.event
- IE 事件处理函数中 this 指向不能认为始终等于事件目标 event.srcElement,

| 属性/方法    | 类型    | 说明               |
| ------------ | ------- | ------------------ |
| cancelBubble | Boolean | 取消事件冒泡       |
| returnValue  | Boolean | 取消事件的默认行为 |
| srcElement   | Element | 事件的目标         |
| type         | String  | 事件的类型         |

## 事件对象

> 判断是否支持DOM2或者DOM3事件

```js
// HTMLEvents 2.0 | UIEvents 3.0 | FocusEvent 3.0 | MouseEvent 2.0 3.0
// DOM2
const isSupported = document.implementation.hasFeature('HTMLEvents', '2.0');
// DOM3
const isSupported = document.implementation.hasFeature('UIEvents', '3.0');
```

### UI事件

- DOMActivate 表示元素已经被用户操作（鼠标和键盘）激活；DOM3级事件中已经移除
- load 

1. 页面完全加载(包含图像文件，js文件，css文件等外部资源)触发: window/document
2. 图像下载完毕触发: img
3. 嵌入的内容触发：link(style) script

- unload 页面完全卸载或者嵌入的内容完全卸载 window/document
- abort 用户停止下载过程时，如果嵌入的内容没有加载完触发
- error 触发条件：window link script
- select 用户选择input或者textarea字符时触发
- resize 窗口或者框架的大小变化时触发（compatMode 混杂模式 document.documentElement)
- scroll 滚动元素触发

### 焦点事件

- blur 失去焦点时触发，不冒泡(支持捕获)
- DOMFocusIn 元素获得焦点时触发，冒泡，DOM3遗弃
- DOMFocusOut 元素失去焦点时触发，冒泡，DOM3遗弃
- focus 元素获取焦点时触发，不冒泡(支持捕获)
- focusin 元素获取焦点时触发，冒泡，兼容性：IE5.5+、Safari 5.1+、Opera 11.5+和 Chrome
- focusout 元素失去焦点时触发，冒泡，兼容性：IE5.5+、Safari 5.1+、Opera 11.5+和 Chrome

> 当焦点从页面中的一个元素移动到另一个元素，触发顺序

`focusout, focusin, blur, DOMFocusOut, focus, DOMFocusIn`

### 鼠标与滚轮事件

- click 单击鼠标按钮（左边按钮）或者enter
- dbclick 双击鼠标按钮
- mousedown 任意鼠标按钮
- mouseenter 鼠标移动从元素外部首次移动到元素范围之内触发（后代子元素不会触发），不冒泡
- mouseleave 鼠标从元素内部移动到外部触发（后代元素不会触发），不冒泡
- mousemove 鼠标在元素内部移动触发
- mouseout 元素移入另一个元素触发
- mouseover 元素外部移入元素边界之内
- mouseup 释放鼠标

> 点击两次触发顺序

`mousedown, mouseup, click, mousedown, mouseup, click, dblclick`

`客户区坐标位置`

clientX, clientY 不包含滚动距离（视口中x, y距离）

pageX, pageY 包含滚动距离（鼠标光标在页面中的位置）

screenX, screenY 相对屏幕（电脑桌面）位置

`热键`

shiftKey、ctrlKey、altKey 和 metaKey（IE8及之前版本都不支持）

`鼠标按钮`

button => 0 没按下 | 1 主鼠标按钮 | 2 次鼠标按钮 | 3 同时主次 | 4 中间 | 5 主中 | 6 中次 | 7 主中次

`detail信息`

event.detail 计数（事件在某一个元素触发多少次 1开始）

`鼠标滚轮事件`

mousewheel, DOMMouseScroll（firefox)

### 键盘与文本事件

DOM3级（所有元素都支持，文本框输入文本时最长用到，支持热键）

- keydown 用户按下任意键触发，按住不放时，重复触发
- keypress用户按下任意键触发，按住不放时，重复触发
- keyup 释放键触发

> 按下字符键触发顺序: keypress keydown keyup
> 按下非字符键触发顺序：keydown keyup

`键码`

keypress 时间获取键码 => event => charCode || keyCode(ASCII码) => String.fromCharCode 转为实际字符

`event.location(什么位置上的键)`

0表示默认键盘 | 1表示左侧键盘 | 2表示右侧键盘 | 3表示数字小键盘 | 4表示移动设备键盘 | 5表示手柄

- textInput

`textInput VS keypress（两大区别）`

> 1. 任何获得焦点的元素都能触发keypress事件，但只有编辑区域才能触发textInput事件
> 2. textInput输入实际字符的键时会触发，keypress按下能够影响文本显示的键

`event.inputMethod`

0不确定输入 | 1键盘输入 | 2粘贴进来 | 3拖放进来 | 4使用IME输入 | 5表单中选择某一项输入 | 6手写输入 | 7语音输入 | 8组合输入 | 9脚本输入

### 复合事件

DOM3级 用于处理IME的输入序列

- compositionstart 开始输入
- compositionupdate 输入字段中插入新字符
- compositionend 关闭时触发

### 变动事件

DOM发生变化时给出提示 => mutation

- DOMSubtreeModified DOM结构发生任何变化
- DOMNodeInserted 一个结点作为子节点插入到另一节点时触发
- DOMNodeRemoved 在节点从其父节点移除时触发
- DOMNodeInsertedIntoDocument 插入文档或之后触发（DOMNodeInserted之后触发）
- DOMNodeRemovedFromDocument 从文档中移除之后触发（DOMNodeRemoved之后触发）
- DOMAttrModified 属性修改之后触发
- DOMCharacterDataModified 在文本节点的值改变之后触发

1. `删除节点` => replaceChild | removeChild
2. `插入节点` => appendChild | replaceChild | insertBefore

### HTML5事件

- contextmenu 单击鼠标右键调出上下文菜单

事件是冒泡的 => 阻止默认行为 event.preventDefault() | event.returnValue = false;

- beforeunload 页面卸载前阻止这一操作

显示的窗口的值：event.returnValue = 'message';

- DOMContentLoaded 形成完整的DOM树之后触发（document | window）

不用等图像、JavaScript文件、CSS文件下载完毕

- readystatechange

提供与文档或者元素加载状态有关的信息（5个状态）(event.target.readyState)

1. uninitialized(对象存在单尚未初始化)
2. loading(对象正在加载数据)
3. loaded(对象加载数据完毕)
4. interactive(可以操作对象，还没完全加载)
5. complete(对象已经加载完毕)

### pageshow 和 pagehide 事件

Firefox Opera => bfcache(back-forward cache)

1. 保存页面的状态
2. 不会触发load事件
3. event对象上有个persist属性 => true
4. 指定了unload事件处理程序的页面会被排除在bfcache之外

### hashchange

**判断兼容性 稳妥**
```js
// IE8 文档在 IE7 下运行
var isSupported = 'onhashchange' in windwo && (document.documentMode === undefined || document.documentMode > 7)
```

URL 的参数列表（及 URL 中“#”号后面的所有字符串）(window 对象)

1. event包含两个属性 oldURL newURL
2. 使用location.hash获取url hash字符串（#后面的字符串）

### 设备事件

- orientationchange

window.orientation => 0肖像模式 90左旋转的横向模式 -90右旋转的横向模式

- MozOrientation 检测到方向变化触发此事件（加速计支持）
- deviceorientation window对象触发（加速计支持）
- devicemotion 不仅仅是设备方向改变，告诉开发人员设备什么时候开始移动（行走 掉下）

### 触摸与手势事件

1. 触摸事件

- touchstart
- touchmove
- touchend
- touchcancel

顺序（包括鼠标）=> touchstart mouseover mousemove（一次） mousedown mouseup click touchend

2. 手势事件

- gensturestart 
- gensturechange
- genstureend

event 对象 => 标准的鼠标事件 + rotation(0开始 负值表示逆时针旋转 正值表示顺时针旋转) + scale(1开始 两个手指距离变化)
