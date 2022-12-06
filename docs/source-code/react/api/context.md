# Context

- 15.3

```js
import PropTypes from 'prop-types';

/* parents component */
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this['color'] = 'orangered';
  }
  getChildContext() {
    return { color: this['color'] };
  }
  ...
}
Parent.childContextTypes = { color: PropTypes.string.isRequired };

/**
 * child component
 */
class Child extends React.Component {
  constructor(props, context) {
    super(props);
    // context has value
  }
}
Child.contextTypes = { color: PropTypes.string.isRequired };
```

- 16.0 ~ later

::: warning Multi Context(多个 Context)

```js
<Context1.Provider value="orangered">
  <Context2.Provider value="#1890ff">...</Context2.Provider>
</Context1.Provider>
```

- when Context.Provider is an object, please use state replace direct assign an object to Context.Provider value prop(当提供的值是一个对象时，不要直接赋值，通过 state 赋值会更好))
  :::

`React.createContext()`

```js
const Context = React.createContext();
// provider parent
<Context.Provider value="orangered" />
// consumer child
<Context.Consumer>
  {
    value => {
      // value handle here
    }
  }
</Context.Consumer>
//or
Child.ContextType = Context;
```
