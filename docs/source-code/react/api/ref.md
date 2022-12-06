# Ref

`react ref`

- 1. 使用 ref 在具体的 dom 元素上或者 class 组件上

```jsx
// 1. 直接创建
const ref = React.createRef();
// ref ==> { currnt: dom }
<div ref={ref}></div>

// 2. 使用回调函数（注意：直接在元素上使用回调函数，会两次渲染，一次 null，第二次 dom，没多大影响）
// this.ref ==> dom
<div ref={node => this.ref = node}></div>
// or ---------------------- or
constructor(props) {
  super(props);
  this.ref = null;
  this.refCb = node => this.ref = node;
}
<div ref={this.refCb}></div>
```

- 2. forwardRef

```jsx
/*
 * 在类组件中获取 ref 可以使用 React.forwardRef()
 * 高阶组件也是如此(具体元素转发一次，高阶组件中转发一次)
 */
React.forwareRef((props, ref) => {
  return <Component ref={ref} {...props}>;
})
```
