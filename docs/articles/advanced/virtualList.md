# PC虚拟列表如何处理

<img src="/assets/images/virtual_list.png" />

`针对场景`

> 页面需要渲染上千个上万个节点甚至更多，导致页面卡顿

## 常见解决方案

- 分页
- 滚动到底部加载（如果不对上一页数据节点处理，照样会造成页面节点太多卡顿的问题）

## IScroll 方案 (使用 transform 或者 top)

假设：固定渲染每页大小 10 条，每一项高度固定 100

```html
<div class="container" style="overflow: auto;">
  <div id="scroll-container" style="position: absolute; width: 100%;">
    <div class="row" style="position: absolute; top: 0px; height: 100px; width: 100%;">1</div>
    ...
    <div class="row" style="position: absolute; top: 900px; height: 100px; width: 100%;">10</div>
  </div>
</div>
```

`思考`

- 需要在容器滚动时，实时监听滚动的高度，对已有节点进行替换操作
- 如何通过时刻变化的滚动高度计算出替换的节点

**实现**

[演示地址](https://6r232.csb.app/)

[演示代码](https://codesandbox.io/s/intelligent-kowalevski-6r232)

```js
/* start */
// 这里只针对于计算部分的代码
/**
 * @param {Number} offset 滚动高度
 */
function render(offset) {
  let overscancount = 2; // 滚动预留 2 * 100 高度，才开始替换操作
  // 开始滚动计算
  // 页的大小10 每一项的高度100 目标元素
  let itemSize = 10, itemHeight = 100, elements = [];
  // 计算滚动之后的需要替换的节点个数（按顺序）
  let minorPhase = Math.max(0, Math.floor(offset / itemHeight) - overscancount);
  // 计算当前页数
  // minorPhase > 10 时，取整 + 总高度
  let majorPhase = Math.floor(minorPhase / itemSize);
  // 页数对应替换节点高度的基准 这里 phase < 10 等式要必须成立
  // > 10 高度计算有误
  let phase = minorPhase - majorPhase * itemSize;
  // 计算样式 top
  let i = 0;
  while(i < itemSize) {
    // top 初始的高度
    let top = i * itemHeight + majorPhase * itemSize * itemHeight;
    if(phase > i) {
      // 分页之后 加上总高度
      top += itemSize * itemHeight;
    }
    // 设置元素样式
    elements[i].style.top = top + 'px';
    i++;
  }
}
/* end */
```

`局限性`

- 高度固定

## react-window 解决方案

[演示地址](https://en33d.csb.app/)

[演示代码](https://codesandbox.io/s/inspiring-blackwell-en33d)

> react-window 通过实时滚动监听来对开始位置 start index 和结束位置 stop index 的计算，来渲染出数据

### 高度固定

- 高度固定 100
- 保证计算的开始位置和结束位置都在可视区域

```js
/* start */
// 只针对计算代码的书写
let itemCount = 10000; // 总数据条数
let itemHeight = 100; // 每一项高度
let height = 300; // 滚动高度
let overscancount = 2; // 预留 2 项 每次多展示两条数据
// 获取开始位置
function getStartIndexForOffset(offset) {
  let startIndex = Math.max(0, Math.min(Math.floor(offset / itemHeight), itemCount - 1);
  return startIndex;
}
// 获取结束位置
function getStopIndexForOffset(offset) {
  // 开始位置
  let startIndex = getStartIndexForOffset(offset);
  // 计算开始位置滚动条高度
  let offstart = startIndex * itemHeight;
  // 计算可视区域数据
  // 这里要保证可视区域必定要有数据展示，不能出现空白
  // 开始偏移高度 + 总的滚动高度 - 偏移高度
  let visibleItem = Math.ceil((offstart + height - offset) / itemHeight);
  // 返回结束位置
  return Math.max(0, Math.min(itemCount - 1, startIndex + visibleItem - 1));
}
// 渲染数据
[].slice.call(data, Math.max(0, startIndex - overscancount), Math.max(0, Math.min(stopIndex + overscancount, itemCount - 1)))
/* end */
```

### 高度改变

- 高度随机
- 保证计算的开始位置 start index 和结束位置 stop index，渲染数据必须在可视区域内

```js
/* start */
// 只针对计算代码的书写
// 假设数据格式为
/**
 * [
 *   { height: 100, ... },
 *   { height: 150, ... },
 *   ...,
 * ];
 */
let data = [...];
let itemCount = 10000; // 总的数据条数
let height = 300; // 滚动高度
let overscancount = 2; // 预留条数 多展示两条数据
// 获取每一项的偏移高度
function getItemMeta(index) {
  let offset = 0; // 偏移高度
  let size = data[index].height; // 每一项的高度
  for(let i = 0; i < index; i++) {
    offset += data[i].height;
  }
  return {
    offset,
    size,
  };
}
// 获取开始位置
function getStartIndexForOffset(offset) {
  let index = 0; // 初始位置
  while(index < itemCount && getItemMeta(index).offset < offset) {
    // 每次 +1 来确定初始位置
    index++;
  }
  return index;
}
// 获取结束位置
function getStopIndexForOffset(offset) {
  let startIndex = getStartIndexForOffset(offset);
  // 开始位置偏移信息 => { offset, size }
  let startmeta = getItemMeta(startIndex);
  // 最大偏移高度
  let maxOffset = offset + height;
  // 当前偏移高度
  let curOffset = startmeta.offset + startmeta.size;
  // 因为高度未固定，所以不能通过取整的方式来计算，而应该对开始位置 - 结束位置的每一项偏移高度进行预算，来确定结束位置
  let stopIndex = startIndex;
  while(stopIndex < itemCount && curOffset < offset) {
    stopIndex++;
    // ++ 之后再计算当前位置偏移高度
    curOffset += getItemMeta(stopIndex).size;
  }
}
// 渲染数据
[].slice.call(data, Math.max(0, startIndex - overscancount), Math.max(0, Math.min(stopIndex + overscancount, itemCount - 1)))
/* end */
```

**补充**

- 计算开始位置 react-window 采用的是二分查找的方式来确定偏移量最接近滚动偏移位置（有兴趣可以看看 react-window 源码）

## 写在最后

- 如果上述描述不对，还请多多指点

End

