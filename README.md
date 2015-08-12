Block formatting context
------------------------

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context

Install
-------

```
npm install block-formatting-context
```

Usage
-----

```js
var bfc = require('block-formatting-context');

//Detect a element
bfc.isBFC(el)

//Get a element's BFC container, root is document
bfc.getBFCParent(el)
```

License
-------

MIT
