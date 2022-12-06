# DOM2 级绑定事件

## addEventListener

> addEventListener 绑定事件接收三个参数

### API

- event 事件名
- handler 事件处理函数
- boolean/object
  - 当为 bool 值时，false 表示冒泡阶段，true 表示捕获阶段
  - 当为对象时
    - once 是否执行一次即销毁
    - capture 是否优先其他事件执行
    - passive 默认行为是否立即执行（多用于移动端）

### 例子

```html
<div id="parent">
  <div id="child1"></div>
  <div id="child2"></div>
</div>
<!-- 绑定事件 -->
<script>
  const parent = document.getElementById('parent');
  const child1 = document.getElementById('child1');
  // 1
  parent.addEventListener('click', function() {
    console.log('parent');
  });
  child1.addEventListener('click', function() {
    console.log('child1');
  });
  /* result: child1 > parent */ 
  // 2
  parent.addEventListener('click', function() {
    console.log('parent');
  }, {
    once: true,
    capture: true,
  });
  child1.addEventListener('click', function() {
    console.log('child1');
  });
  /* result: parent > child1 并且执行一次 */
</script>
```
