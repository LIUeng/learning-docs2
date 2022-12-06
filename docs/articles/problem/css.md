# css 遇到的问题

## 问题一

> inline-block 元素包含多个 inline-block 元素显示成一行时，设置 overflow: hidden，元素向下偏移

```html
<!-- 会发现 span1 向下偏移一点了 -->
<span class="span">
  <span class="span1">1</span>
  <span class="span2">2</span>
</span>

<style>
  .span {
    white-space: nowrap;
  }

  span {
    display: inline-block;
  }

  .span2 {
    overflow: hidden;
  }
</style>
```

> 问题解答

W3 规定

```txt
The baseline of an 'inline-block' is the baseline of its last line box in the normal flow, unless it has either no in-flow line boxes or if its 'overflow' property has a computed value other than 'visible', in which case the baseline is the bottom margin edge.
```

- "inline-block" 的基线是正常流中最后一个线框的基线，除非没有流入流线框，或者如果 overflow 属性不为 visible 时，这种情况下，基线是底部边沿

```txt
Align the baseline of the box with the baseline of the parent box. If the box does not have a baseline, align the bottom margin edge with the parent's baseline.
```

- vertical-align: baseline 将框的基线与父框的基线对齐。如果该框没有基线，则将下边距边缘与父对象的基线对齐

> 总结

- 设置 inline-block 元素，基线自动设置为 bottom；
- 加上 overflow:hidden 属性后，没有基线，导致该元素与父元素之间的基线为底部边沿

> 问题解决方式

- 将 overflow: hidden inline-block 元素设置 vertical-align: 为 bottom/top

```css
.span2 {
  overflow: hidden;
  vertical-align: bottom;
}
```
