# visibility

css 中控制显示隐藏的属性

## display

- none/block

* 控制元素的显隐，破坏渲染状态（代价比较高）；none 独立文档之外，不占空间大小

## visibility

- visible/hidden

* 隐藏元素并保持自身的渲染状态，dom 事件依然可行，空间大小依然占据（物理上显示空白）

## content-visibility

chrome85+ 兼容

- visible/hidden/auto

* 跳过屏幕之外的元素，不渲染以达到首次加载渲染速度
* 隐藏元素并保持自身的渲染状态，dom 操作、空间大小随着元素的显隐（显示即可操作，隐藏不可操作）

- contain-intrinsic-size 包含固有的大小（当隐藏时仍然保有设置的大小的空间，元素空间显示为空）

```css
.container {
  content-visibility: auto;
  contain-intrinsic-size: 0 100px;
}
```

## contain

Chrome 52+ Opera 40+ 兼容

* 允许限制元素的渲染范围

###  size

* 元素的子元素不会影响父元素的大小，推断和设置的尺寸是使用的尺寸（性能优化不是太多）

### layout

* 包含元素相对于布局来说是完全透明的，任何外部都不能影响内部布局
* 更改元素的布局，可能要检查整个DOM的元素，使用 contain: layout 可以减少检查元素的个数，达到优化效果

### style

* 样式更改不会传播回包含元素（e.g. css counters 计数器的使用）

### paint

* 包含元素的后代不会显示在其边界之外

> effects

1. 充当绝对定位和固定位置元素的包含块（任何子元素都基于元素定位）
2. 形成堆叠上下文（z-index 对元素产生了影响，子元素将根据新的上下文堆叠）
3. 形成一个新的格式化上下文

### 组合使用

contain: strict ==== contain: size layout paint

- 提前知道元素的尺寸，可以使用严格模式

contain: content ==== contain: layout paint

- content 默认行为
