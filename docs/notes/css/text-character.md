# 文字特性

**文字特性的 html 标签元素：a, li, img, span, ~~~**

:::tip 扩展
html 标签设置成 display: inline-block; 元素存在间隙

1. display: inline; 行内元素，设置高度无效；
2. display: block; 块级元素，设置高度有效；
3. display: inline-block; 行内块级元素，设置高度有效
:::

## 例子

<style>
    .tc-ul {
        list-style: none;
    }
    .tc-ul .tc-item {
        display: inline-block;
        width: 100px;
        border: 1px solid orange;
    }
</style>

<ul class="tc-ul">
    <li class="tc-item">1</li>
    <li class="tc-item">2</li>
    <li class="tc-item">3</li>
</ul>

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <ul></ul>
</ul>
```

```css
ul li {
  display: inline-block;
  width: 100px;
  border: 1px solid orange;
}
```

- 间隙存在

## 解决方式

### 压缩方式

- 压缩代码

<ul class="tc-ul">
    <li class="tc-item">1</li><li class="tc-item">2</li><li class="tc-item">3</li>
</ul>

<ul class="tc-ul">
    <li class="tc-item">
    1</li><li class="tc-item">
    2</li><li class="tc-item">
    3</li>
</ul>

<ul class="tc-ul">
    <li class="tc-item">1</li
    ><li class="tc-item">2</li
    ><li class="tc-item">3</li>
</ul>

<ul class="tc-ul">
    <li class="tc-item">1</li><!--
    --><li class="tc-item">2</li><!--
    --><li class="tc-item">3</li>
</ul>

```html
<!-- 第一种 -->
<ul class="tc-ul">
  <li class="tc-item">1</li>
  <li class="tc-item">2</li>
  <li class="tc-item">3</li>
</ul>
<!-- 第二种 -->
<ul class="tc-ul">
  <li class="tc-item">
    1
  </li>
  <li class="tc-item">
    2
  </li>
  <li class="tc-item">
    3
  </li>
</ul>
<!-- 第三种 -->
<ul class="tc-ul">
  <li class="tc-item">1</li>
  <li class="tc-item">2</li>
  <li class="tc-item">3</li>
</ul>
<!-- 第四种 -->
<ul class="tc-ul">
  <li class="tc-item">1</li>
  <!--
    -->
  <li class="tc-item">2</li>
  <!--
    -->
  <li class="tc-item">3</li>
</ul>
```

### margin 方式

`(display: inline-block;) 存在文字特性，间隙间距为4px（不同浏览器可能间距不一）`

<style>
    .tc-ul-margin {
        list-style: none;
    }
    .tc-ul-margin .tc-item-margin {
        display: inline-block;
        width: 100px;
        border: 1px solid orange;
        margin-right: -4px;
    }
</style>

<ul class="tc-ul-margin">
    <li class="tc-item-margin">1</li>
    <li class="tc-item-margin">2</li>
    <li class="tc-item-margin">3</li>
</ul>

```css
ul li {
  display: inline-block;
  width: 100px;
  border: 1px solid orange;
  margin-right: -4px;
}
```

### 忽略闭合标签

`此方式为了规范不推荐`

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

### font-size 方式

`父元素设置font-size: 0; 子元素`

```css
ul {
  font-size: 0;
}
ul li {
  font-size: initial;
}
```

### float 方式

```css
ul li {
  display: float;
}
```

:::warning 说明
以上方式如果不指定高度，加入边框，元素高度不一致，会导致对不齐（只适用 li 标签元素设置高度或者单行）
:::

### flex 布局方式

`浏览器支持flex布局，推荐使用flex布局，使子元素自动成为flex盒子，设置flex布局后，子元素的float, clear, vertical无效`

```css
ul {
  display: flex;
}
```

END
