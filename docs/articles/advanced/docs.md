# 前端文档

> 以下图片失效，有兴趣打开原文阅读

[原文阅读](https://juejin.cn/post/6844904192792870919)

<!-- ![文档历史发展](https://imgkr.cn-bj.ufileos.com/ba1726ac-908a-4d3a-99f4-ff973ffef3c2.png) -->

- 文档桌面应用客户端 ------ word excel ppt wps ···
- 在线文档(类似) ------ [google 文档](https://docs.google.com)

## 前端文档浅思考

**如果你去开发你会怎么做**

- input?
- textarea?
- div?contenteditable?(富文本可编辑属性)

### 富文本编辑

以下 API 来自[JavaScript 高级程序设计第三版]

```js
// 文档执行预定义命令，接收三个参数
// 1. 要执行的命令名称
// 2. 浏览器是否应该为当前的命令用户界面提供一个布尔值（兼容性，始终为false)
// 3. 执行命令必须的一个值(无 => null)
document.execCommand(name, false, null);
```

#### 操作富文本

> document.execCommand()

| 命令                 | 值(第三个字符串)             | 解释                   |
| -------------------- | ---------------------------- | ---------------------- |
| backColor            | 颜色字符串                   | 设置文档的背景颜色     |
| bold                 | null                         | 加粗文字               |
| copy                 | null                         | 复制到剪贴板           |
| createLinkt          | url 字符串                   | 转换成一个链接         |
| cut                  | null                         | 剪切                   |
| delete               | null                         | 删除选择的文本         |
| fontname             | 字体名称                     | 修改字体               |
| fontsize             | 数字                         | 字体大小               |
| forecolor            | 颜色字符串                   | 字体颜色               |
| formatblock          | 要包围当前文本块的 html 标签 | h1 h2 ~                |
| indent               | null                         | 缩进文本               |
| inserthorizontalrule | null                         | 插入一个&lt;hr&gt;标签 |
| insertimage          | url 字符串                   | 插入一张图片           |
| insertorderedlist    | null                         | &lt;ol&gt;             |
| insertunorderedlist  | null                         | &lt;ul&gt;             |
| insertparagraph      | null                         | &lt;p&gt;              |
| italic               | null                         | 斜体                   |
| justifycenter        | null                         | 居中                   |
| justifyleft          | null                         | 左对齐                 |
| outdent              | null                         | 减少缩进               |
| paste                | null                         | 粘贴                   |
| removeformat         | null                         | 撤销 formatblock 操作  |
| selectall            | null                         | 选中所有文本           |
| underline            | null                         | 下划线                 |
| unlink               | null                         | 移除文本的链接         |

- document.queryCommandEnabled() 方法可以检测当前位置是否可以执行某个命令
- document.queryCommandState() 方法可以检测当前文本是否执行过某个命令

#### 富文本选区

获取选择文本

> (window || document).getSelection()

**1. Selection 对象属性**

- anchorNode：选区起点所在的节点
- anchorOffset：在到达选区起点位置之前跳过的 anchorNode 中的字符数量
- focusNode：选区终点所在的节点
- focusOffset：focusNode 中包含在选区之内的字符数量
- isCollapsed：布尔值，表示选区的起点和终点是否重合
- rangeCount：选区中包含的 DOM 范围的数量

**2. Selection 对象方法**

- addRange(range)：将指定的 DOM 范围添加到选区中
- collapse(node, offset)：将选区折叠到指定节点中的相应的文本偏移位置
- collapseToEnd()：将选区折叠到终点位置
- collapseToStart()：将选区折叠到起点位置
- containsNode(node)：确定指定的节点是否包含在选区中
- deleteFromDocument()：从文档中删除选区中的文本，与 document.execCommand("delete",
  false, null)命令的结果相同
- extend(node, offset)：通过将 focusNode 和 focusOffset 移动到指定的值来扩展选区
- getRangeAt(index)：返回索引对应的选区中的 DOM 范围
- removeAllRanges()：从选区中移除所有 DOM 范围。实际上，这样会移除选区，因为选区中
  至少要有一个范围
- reomveRange(range)：从选区中移除指定的 DOM 范围
- selectAllChildren(node)：清除选区并选择指定节点的所有子节点
- toString()：返回选区所包含的文本内容

**3. 示例：给选中的文本加上背景颜色**

```js
// 获取选区文本
var selection = document.getSelection();
// 获取选区范围
var range = selection.getRangeAt(0);
// 创建包围元素
var span = document.createElement('div');
span.style.backgroundColor = 'orange';
range.surroundContents(span);
```

#### 操作范围 DOM2

> document.createRange()

<!-- ![createRange属性和方法](https://imgkr.cn-bj.ufileos.com/fc662b60-f035-4cec-afc8-b73017975efe.png) -->

1. 简单选择 DOM 范围
2. 复杂选择 DOM 范围
3. 操作 DOM 范围中的内容
4. 插入 DOM 范围中的内容
5. 折叠 DOM 范围
6. 比较 DOM 范围

#### 复合事件

- compositionstart：在 IME 的文本复合系统打开时触发，表示要开始输入了
- compositionupdate：在向输入字段中插入新字符时触发
- compositionend：在 IME 的文本复合系统关闭时触发，表示返回正常键盘输入状态

## 前端文档深思考

> 前端文档的技术该如何选择以及采坑？

### 同构表VS异构表

<!-- ![](https://imgkr.cn-bj.ufileos.com/05cbe981-8528-42d4-a23e-cd085153ad1c.png) -->

### 文档技术

<!-- ![](https://imgkr.cn-bj.ufileos.com/25b465c4-d991-4143-af75-6f66c005147f.png) -->

<!-- ![](https://imgkr.cn-bj.ufileos.com/58c68c84-e576-4bfb-a5a0-8d70bdc38f9f.png) -->

### 在线协同

<!-- ![](https://imgkr.cn-bj.ufileos.com/1079f233-7876-42a7-befb-5ec510b82f36.png) -->

<!-- ![](https://imgkr.cn-bj.ufileos.com/12fbbb49-a574-4f86-9d65-528875ac4673.png) -->

## 前端文档应用

来看看一些用过的在线文档编辑设计思路以及架构模式

### 钉钉

**菜鸟业务WebExcel**

<!-- ![](https://imgkr.cn-bj.ufileos.com/cd8abfeb-732c-44f5-b30d-5740a7fe5503.png)

![](https://imgkr.cn-bj.ufileos.com/ae48accc-82af-4194-af8a-dccc25fd8204.png)

![](https://imgkr.cn-bj.ufileos.com/b0845395-c00c-489e-8add-5f00988fbd8b.png)

![](https://imgkr.cn-bj.ufileos.com/9bc9b0af-ac86-4b59-8f12-f28f1857516d.png)

![](https://imgkr.cn-bj.ufileos.com/5ebeb822-636a-41be-85b4-324bc79d77d5.png)

![](https://imgkr.cn-bj.ufileos.com/35c546f2-8bfc-48d3-91ce-d0d907bfa1ab.png)

![](https://imgkr.cn-bj.ufileos.com/f16ae9c4-c9cd-4c83-b574-554e3daac429.png)

![](https://imgkr.cn-bj.ufileos.com/3f681991-e0c5-4db4-b5cb-2c914f79dd26.png) -->

### 语雀

**语雀自研之路**

<!-- ![](https://imgkr.cn-bj.ufileos.com/015240d2-f705-43f5-86b2-a32caeb81b8b.png)

![](https://imgkr.cn-bj.ufileos.com/dac7451d-014d-4035-a97b-a274a55a6554.png)

![](https://imgkr.cn-bj.ufileos.com/863a6259-f626-458c-a7b9-26eeefad7852.png)

![](https://imgkr.cn-bj.ufileos.com/a252545e-4a9e-400d-b72e-a9fd7e693a82.png)

![](https://imgkr.cn-bj.ufileos.com/3aa30d2e-072b-4aa6-b3bf-091f89501817.png)

![](https://imgkr.cn-bj.ufileos.com/2af8a4e7-2447-46ff-b018-a799b1fdc9de.png)

![](https://imgkr.cn-bj.ufileos.com/b228cd95-1a3d-4395-8d31-02601b78e675.png) -->

## 前端文档性能

### 大数据

> 成千上百万的节点不可能一次性渲染出来，对于浏览器来说是一笔巨大的开销

<!-- ![](https://imgkr.cn-bj.ufileos.com/a68efd2a-88b0-4067-ac2b-8a523704188b.png)

![](https://imgkr.cn-bj.ufileos.com/21a6e256-65cf-427e-9e44-e43d4c75cdbb.png) -->

### 最大单元格数

> 在线文档如何缓存数据，这也是必须值得思考的地方

<!-- ![](https://imgkr.cn-bj.ufileos.com/69704a9e-a9c3-4e2d-8881-54986af0babe.png)

![](https://imgkr.cn-bj.ufileos.com/d25c7ad0-192a-4852-b2c9-090e3447ebec.png)

![](https://imgkr.cn-bj.ufileos.com/f2f8c20f-10c0-4d5c-b4fa-75b2d4ed6c51.png)

![](https://imgkr.cn-bj.ufileos.com/c2db9fef-efb3-4a03-b410-563ec80fea9b.png) -->

## 前端文档展望

### 复杂度

前端文档的复杂度很高，它的细腻程度非常之细，像语雀这种在线表格自研之路，考虑的问题很多；我作为一个普通开发者来说，开发的成本很大，但是前端文档非常值得思考，包括技术储备（数据结构性能优化）以及冷门的API学习都要串联起来

### 未来

前端文档是一个深耕并且值得投入的领域，用户的体验累积，会打造出越来越完美的前端文档

END