# HTML 格式化上下文

## BFC

BFC - block formatting context 块级格式化上下文

:::tip BFC 概念
文档最外层元素使用块布局规则称为初始块格式上下文
:::

### CSS 属性创建 BFC

适用以下的方法可以创建一个新的 BFC

- 使用 float 时其浮动的元素
- 绝对定位的元素 （position: absolute/fixed/sticky）
- display: inline-block
- 表格单元格 display: table-cell，包括使用所有 table-\* 属性的所有表格单元格
- 块级元素的 overflow 属性不为 visible
- 元素属性为 display: flow-root/list-item
- 元素属性为 contain: layout/content/strict
- flex items（display: flex 容器布局下的子元素）
- gird 布局（display: grid 容器布局下的子元素）
- multicol containers 多列容器（column-count: 1 或 column-width 不为 auto）
- 元素属性 column-span: all

> 创建新的 BFC 的行为与最外层的文档非常相似，主布局中创造了一个小布局，包含了其内部所有的内容

> float & clear

1. float(脱离文档流) 和 clear 仅适用于同一格式上下文中的项目，页边距仅在同一格式上下文中的元素之间折叠
2. 浮动不会影响其他 BFC 中元素的布局，而清除浮动只能清除同一 BFC 在它前面的元素的浮动

### 解决了什么问题

> 高度塌陷问题

- 子元素设置 float 父容器高度塌陷

> 外边距重叠问题

- 创建新的 BFC 避免两个块元素之间的外边距合并问题

## IFC

IFC - inline formatting context 行内格式化上下文

:::tip IFC 概念
一个块元素内存在内联元素，一次排列；内联格式上下文存在于其他格式上下文中，可以将其视为段落的上下文
:::

### 说明

- 行内元素设置水平间距可以适用
- 行内元素设置垂直间距不适用（可能会在内容的上方和下方重叠）
- 行内格式化上下文填充和边框不会将行框撑开

## Flow Layout

流式布局(正常流)

- CSS2.1 水平写入模式

## Writing Mode

书写模式（书写模式、方向、文本方向属性决定）

- css => writing-mode: verticla-lr, horizontal-tb, vertical-rl

### 说明

- 图像不会改变方向
- 块元素应用书写模式，改变文字方向，块元素不发生旋转

## 外边距重叠

:::tip 概念
块的上外边距和下外边距有时合并（折叠）为单个边距，其大小为单个边距的最大值（如果相等，取其中一个）
:::

- 有设定 float 和 position:absolute 的元素不产生外边距重叠问题

### 情形

> 同一层相邻元素

相邻的两个元素之间的外边距重叠，除非后一个元素加上 clearfix 清除浮动

> 没有内容将父元素和后代元素分开

1. 父级 margin-top(没有边框、内边距、行内内容、BFC、清除浮动 clearfix)，子元素的 margin-top 会与父元素重叠，并且溢出；
2. 父级 margin-bottom(没有边框、内边距、行内内容、高度 height min-height max-height)，子元素的 margin-bottom 会与父元素重叠，并且溢出。

> 空的块级元素

块元素（没有边框、内边距、行内内容、高度 height min-height max-height、inline、clearfix)，margin-top 和 margin-bottom 会发生重叠

> 外边距为负值

1. 参与折叠的外边距包含负值，折叠后的外边距的最大的正边距与最小的负边距（绝对值最大的负边距）；
2. 所有参与折叠的元素外边距都为负值，折叠后的外边距的值为最小的负边距的值。