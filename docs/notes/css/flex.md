# flex 扩展

## flex & margin

> flex 布局容器下的项目使用 margin 属性，有些情况会得到 flex 布局中项目属性的同等效果

### margin: auto

- 块元素在确定宽度元素下，使用 margin:auto 可以实现水平居中，无法实现垂直居中，CSS 规定 margin-top, margin-bottom 默认为 0，margin-left, margin-right 为 auto
- flex 布局容器下的项目属性，margin:auto 可以实现水平垂直居中（flex 布局下的元素 margin-top, margin-bottom, margin-left, margin-right 属性值默认为 auto）

### justify-content/align-items

```html
<div class="container">
  <div class="item"></div>
</div>
<!-- 水平垂直居中 -->
<style>
  .container {
    display: flex;
  }
  .item {
    margin: auto;
  }
</style>
```

### space-between

```html
<div class="container">
  <div class="item1"></div>
  <div class="item2"></div>
  <div class="item3"></div>
</div>
<!-- 使用 margin 代替 space-between -->
<style>
  .container {
    display: flex;
  }
  .item1 {
    margin-left: 0;
  }
  .item2 {
    margin: auto;
  }
  .item3 {
    margin-right: 0;
  }
</style>
```

### space-around

```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
<!-- 使用 margin 代替 space-around -->
<style>
  .container {
    display: flex;
  }
  .item {
    margin: auto;
  }
</style>
```

### align-self: flex-start/flex-end/center

```html
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
</div>
<!-- 水平方向 item1 居左 item2 item3 居右依次布局 -->
<style>
  .container {
    display: flex;
    flex-direction: row;
  }
  .item2 {
    margin-left: auto;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
</div>
<!-- 垂直方向 item2 item3 占满剩余空间  -->
<style>
  .container {
    display: flex;
    flex-direction: column;
  }
  .item2 {
    margin-top: auto;
  }
  .item3 {
    margin-bottom: auto;
  }
</style>
```

### 粘性布局

```html
<div class="container">
  <div class="content"></div>
  <div class="footer"></div>
</div>
<!-- content 高度不超出可视区域时 footer 位于底部 -->
<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .footer {
    margin-top: auto;
  }
</style>
```
