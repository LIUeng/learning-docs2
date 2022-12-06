# CSSJS 动画那些事

先来了解一下重绘与回流

## 回流与重绘

`回流必将引起重绘，重绘不一定回流`

**浏览器工作原理**

<img src="/docs-page/assets/images/browser-work.png" alt="浏览器工作原理图"/>

**浏览器用户界面**

<img src="/docs-page/assets/images/user-interface.png" alt="user interface"/>

- 重绘
  `外观发生变化，元素可见性，不会改变布局`
- 回流
  `重新计算元素的位置和几何形状`

## CSS 动画

先回顾一下 css 的 transition 和 animation 属性

- transition 属性

  - transition-property: string
  - transition-duration: number
  - transition-timing-function: cubic-bezier | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | steps | step-start | step-middle | step-end
  - transition-delay: number

- animation 属性
  - animation-duration: number
  - animation-timing-function: ^
  - animation-delay: number
  - animation-iteration-count: infinite
  - animation-direction: alternate | alternate-reverse | reverse
  - animation-fill-mode: backwards | forwards | both | none
  - animation-play-state: paused | running
  - animation-name: string

## JS 动画

接下来介绍一下 js 和 css 结合的动画

DOM 事件中有: `transitionstart, transitionend, animationstart, animationend` 事件

:::tip 思考
enter active leave 三种状态
:::

**抛出问题：**

1. 我们是否用过 display 切换 block 和 none 两种状态，想实现点动画过渡效果，但是 display 是立即消失立即隐藏？

2. 你可能会想到用 settimeout 设置一个时间来控制显示隐藏，而中间恰好利用这段时间来进行动画过渡的操作？

3. 那如何在中间这段时间加上动画呢？

`从以下一个例子中来讲：`

```html
<div id="container"></div>
<button>点我显示/隐藏</button>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  .container {
    width: 100px;
    height: 100px;
    background-color: orangered;
  }
  .enter {
    opacity: 0;
  }
  .active {
    transform: opacity 0.5s;
  }
  .leave {
    opacity: 1;
  }
</style>
<!-- js css -->
<script>
  const container = document.getElementById('container'),
    button = document.getElementsByTagName('button')[0];
</script>
```

```html
<!-- 片段一 -->
<script>
  // 我们一般控制显示隐藏的操作 1
  button.addEventListener('click', function(e) {
    if (container.style.display === 'none') {
      container.style.display = '';
    } else {
      container.style.display = 'none';
    }
  });
</script>
```

```html
<!-- 片段2 -->
<script>
  // 上述是不是没有看到过渡效果呢 没错
  // 接下来引入transitionend事件 （监听 transfom 的 duration 时间）
  // 1. 判断是否支持 transition
  let div = document.createElement('div'),
    isSupport;
  if (webkitTransition in div.style) isSupport = true;

  // 我们重新写一下 2
  // 我们介入三种状态 enter active leave
  button.addEventListener('click', function(e) {
    if (container.style.display === 'none') {
      container.style.display = '';
      enter(container);
    } else {
      // container.style.display = 'none';
      leave(container);
    }
  });

  function enter(node) {
    // enter
    node.classList.add('enter');
    // active
    node.classList.add('active');
    node.addEventListener('transitionend', function() {
      node.style.display = '';
    });
  }

  function leave(node) {
    // leave
    node.classList.add('leave');
    // active
    node.classList.add('active');
    node.addEventListener('transitionend', function() {
      node.style.display = 'none';
    });
  }
</script>
```

```html
<!-- 片段三 -->
<script>
  // 此时运行代码会发现还是没有过渡效果 难道就没有办法了吗？
  // 我们思考一下：当我们加入enter 和 active 类的时候 同时添加 我们并没有触发 transitionstart 事件
  // 接下来重新改一下代码 3
  function enter(node) {
    // enter
    node.classList.add('enter');
    // 这里强制触发一下回流 这时候你会发现效果大有不同
    window.requestAnimationFrame(function enterRaf() {
      // active
      node.classList.add('active');
      node.addEventListener('transitionend', function() {
        node.style.display = '';
      });
    });
  }

  function leave(node) {
    // leave
    node.classList.add('leave');
    // 同理
    window.requestAnimationFrame(function leaveRaf() {
      // active
      node.classList.add('active');
      node.addEventListener('transitionend', function() {
        node.style.display = 'none';
      });
    });
  }
</script>
```

:::danger 总结
其实上述代码的关键在于切换不同的状态类名，在重绘一次中是不能完成动画过渡的，需要强制引发回流

引发回流的方法有：requestAnimationFrame, dom 获取（scrollHeight, offsetHeight 等等)
:::

**提出问题**

1. :basketball:加入 transitionend 事件，其实会发现问题，多次点击之后事件会重复监听，这时就要移除事件绑定？该如何处理？

```js
// 把处理封装成一个函数
function end(node) {
  node.style.display = 'none';
  node.removeEventListener('transitionend');
}
node.addEventListener('transitionend', end.bind(null, node));
```

2. :basketball: 连续点击了多次，如何处理过渡或者动画？
3. :vs: transitionstart, transitionend, animationstart, animationend 使用场景？
