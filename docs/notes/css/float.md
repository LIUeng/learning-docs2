# float & clear

浮动元素 清除浮动

## float

- 浮动元素表示使用块布局
- 文本和行内元素围绕着浮动元素

### float 属性取值

left | right | none | inline-start | inline-end

### 是否设置宽度

> 行内元素

```html
<!-- css -->
<style>
  div {
    /* 不设置宽度 */
    float: left;
    /* 设置宽度 */
    width: 200px;
  }

  p {
    width: 200px;
  }
</style>

<!-- html -->
<div>我是浮动元素</div>
<p>我会飘在哪里</p>
```

- 浮动区间元素依次排列

* 不设置宽度的情况
* 设置宽度的情况

- 浮动元素与非浮动元素可视（内容不存在遮盖）

### 是否设置 margin-top

- 非浮动元素设置 margin-top 元素位置如何变化

* 浮动元素的实际 marin-top = margin-top - 浮动元素的高度
* 浮动区间内的元素，非浮动元素与非浮动元素之间正常定位(相对上一个非浮动元素的位置)

## clear

- 清除浮动元素或非浮动元素

* 清除浮动让文档布局正常化

### clearfix

- 一个容器全部为浮动元素时，不清除浮动会使得容器的高度为 0
- 可以使用伪元素清除容器的浮动

```css
.wrapper::after {
  content: '';
  display: block;
  clear: both;
}
```

### clear 属性取值

left | right | both | none
