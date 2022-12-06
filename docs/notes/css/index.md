# css 选择器

## 元素选择器

div

## id 选择器

#div

## 类选择器

.div

## 属性选择器

input[type="text"]

## 伪类选择器

伪类 伪元素

## 选择器组合

### \*

全体选择器

### 空格

后代选择器

### +

兄弟元素组合选择器

### >

父元素后第一代子元素选择器

### ~

兄弟选择器

### ||

列组合选择器（一般用于表格表示第几列中的元素指定的特殊样式）

```css
col.selected||td {
  background-color: #000;
}
```

## 带 @ 符号的选择器

### @namespace

命名空间

```css
/* 区分 svg 和 html 中的 a 标签 */

@namespace svg url(http://www.w3.org/2000/svg);
@namespace html url(http://www.w3.org/1999/xhtml);
svg|a {
  stroke: blue;
  stroke-width: 1;
}
html|a {
  font-size: 40px;
}
```

### @charset

字符编码

### @import

用于引入一个 css 文件

### @media

媒体响应式布局

### @page

分页媒体访问网页时的表现设置

### @counter-style

定义列表项的表现

### @key-frames

定义动画帧

### @fontface

定义字体

### @support

与 media 类似
