# 防抖节流

结合 lodash 的防抖节流，实现多种完整版的防抖节流。

## 防抖

你知道的防抖是怎样呢？

### 正常防抖

> 每次输入完毕，两秒之后执行

#### 演示

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/217374a2074b48118a4dcd72a5c781f7~tplv-k3u1fbpfcp-watermark.image)

#### 代码实现

```js
function debounce(fn, delay = 2000) {
  let timerId = null;
  return function (...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.call(null, ...args);
    }, delay);
  };
}
```

#### lodash 类似实现用法

```js
_.debounce(fn, wait, {
  leading: false,
  trailing: true,
});
```

### 立即执行防抖函数I

> 1. 输入直接执行
> 2. 两秒之后，再次触发执行

#### 演示

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b6c4e3aa3051409499e2547e23c3b15a~tplv-k3u1fbpfcp-watermark.image)

#### 代码执行

```js
function immediate_debounceI(fn, delay = 2000) {
  let timerId = null;

  return function (...args) {
    if (!timerId) {
      // 立即执行
      fn.apply(null, args);
    }

    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }

    timerId = setTimeout(() => {
      timerId = null;
    }, delay);
  };
}
```

#### lodash 类似实现用法

见下 立即执行防抖函数II

### 立即执行防抖函数II

> 1. 输入立即执行
> 2. 一直触发事件大于定时时间，最后定时器再执行一次

#### 演示

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2f45d3716dbb40698664ce19f4daf2ad~tplv-k3u1fbpfcp-watermark.image)

#### 代码实现

```js
function immediate_debounceII(fn, delay) {
  let timerId = null,
    start = Date.now();

  return function (...args) {
    if (!timerId) {
      // 立即执行
      fn.apply(null, args);
      start = Date.now();
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    let now = Date.now();
    timerId = setTimeout(() => {
      if (now - start > delay) {
        fn.apply(null, args);
      }
      timerId = null;
      start = now;
    }, delay);
  };
}
```

#### lodash 类似实现用法

```js
_.debounce(fn, wait, {
  leading: true,
  trailing: true,
})
```

## 节流

你知道的节流又是怎样呢？

### 节流非定时器版

> 1. 立即执行
> 2. 一直触发事件大于设置的时间，立即执行

#### 演示

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a5163458769040b59340fe5fcd9801bf~tplv-k3u1fbpfcp-watermark.image)

#### 代码实现

```js
function throttle(fn, delay = 1000) {
  let start;

  return function (...args) {
    let now = Date.now();

    if (!start) {
      fn.apply(null, args);
      start = now;
    }

    if (now - start > delay) {
      fn.apply(null, args);
      start = now;
    }
  };
}
```

#### lodash 类似实现用法

```js
_.throttle(fn, wait, {
  leading: false,
  trailing: true,
  maxWait: wait,
})
```

### 节流定时器版

> 1. 立即执行
> 2. 一直触发事件大于设置的时间，立即执行

#### 演示

同上

#### 代码实现

```js
function throttle_timeout(fn, delay = 1000) {
  let timerId = null;

  return function (...args) {
    if (!timerId) {
      fn.apply(null, args);

      if (timerId) {
        clearTimeout(timerId);
      }

      timerId = setTimeout(() => {
        timerId = null;
      }, delay);
    }
  };
}
```

#### lodash 类似实现用法

同上

### 节流最终执行

> 1. 立即执行
> 2. 一直触发事件大于设置的时间，立即执行
> 3. 一直触发事件未大于设置的时间，再执行一次

#### 演示

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2797271594a4a8399fcea7d49180663~tplv-k3u1fbpfcp-watermark.image)

#### 代码实现

```js
function throttle_timeout_last(fn, delay = 1000) {
  let timerId = null,
    start,
    timerId2 = null;

  return function (...args) {
    let now = Date.now(),
      diff;

    if (!timerId) {
      fn.apply(null, args);
      start = now;
      if (timerId2) {
        clearTimeout(timerId2);
      }

      timerId = setTimeout(() => {
        timerId = null;
        start = Date.now();
      }, delay);
    }

    diff = now - start;
    if (diff > 0 && diff < delay) {
      if (timerId2) {
        clearTimeout(timerId2);
      }

	  // 剩余时间执行一次
      timerId2 = setTimeout(() => {
        fn.apply(null, args);
      }, delay - diff);
    }
  };
}
```

#### lodash 类似实现用法

```js
_.throttle(fn, wait, {
  leading: true,
  trailing: true,
  maxWait: wait,
})
```

## lodash 实现

[lodash debounce throttle 最终版](https://github.com/lodash/lodash/blob/e0029485ab4d97adea0cb34292afb6700309cf16/debounce.js)

### lodash 的参数

> 接收三个参数

- 执行函数 fn
- 执行等待时间 wait
- 配置 options

> 配置 options 属性

- leading 是否立即执行
- trailing 是否在设置的时间未执行时，最后在执行一次
- maxWait 执行继续等待时间，覆盖 wait 参数
  - 如果设置了 maxWait 参数，maxing 变量为 true（详见源码）
  
> 返回的函数带有三个属性方法

- flush 立即执行，不可逆
- cancel 取消执行，不可逆
- pending 返回定时器状态（没有其他作用）
  
### lodash debounce 默认调用

```js
_.debounce(fn, wait, {
  leading: false,
  trailing: false,
});
```

### lodash throttle 默认调用

```js
_.throttle(fn, wait, {
  leading: true,
  trailing: true,
  maxWait: wait,
})
```

### 源码实现

**删减改版**

```js
function _debounce(fn, wait, options) {
  // init
  let leading = true;
  let trailing = true;
  let maxing;
  let maxWait;

  // vars
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let lastArgs, lastThis;
  let result;

  // options handle
  wait = +wait || 0;
  if (Object.prototype.toString.call(options) === '[object Object]') {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : wait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    const args = lastArgs;
    const ctx = lastThis;

    lastArgs = lastThis = undefined;
    result = fn.apply(ctx, args);
    lastInvokeTime = time;

    return result;
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    console.log('should invoke time: ', timeSinceLastCall, timeSinceLastInvoke);
    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxing && timeSinceLastInvoke >= maxWait)
    );
  }

  function leadingEdge(time) {
    lastInvokeTime = time;
    console.log('----leading----');
    timerId = startTimer(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }

  function trailingEdge(time) {
    timerId = undefined;
    console.log('trailing', !!(trailing && lastArgs));
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function startTimer(func, time) {
    return setTimeout(func, time);
  }

  function timerExpired() {
    const time = Date.now();
    console.log('timer expired', !!shouldInvoke(time));
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    console.log('----remaining----');
    timerId = startTimer(timerExpired, remainingWait(time));
  }

  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWating = wait - timeSinceLastCall;
    return maxing ? Math.min(timeWating, maxWait - timeSinceLastInvoke) : timeWating;
  }

  function debounced(...args) {
    let time = Date.now();
    let isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        console.log('----maxing----');
        // Handle invocations in a tight loop.
        timerId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    // start timer
    if (timerId === undefined) {
      console.log('----wait----');
      timerId = startTimer(timerExpired, wait);
    }
  }

  function flush() {}
  function pending() {}
  function cancel() {}

  debounced.flush = flush;
  debounced.pending = pending;
  debounced.cancel = cancel;

  return debounced;
}
```
