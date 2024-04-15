'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3c51d07f.js');

const myComponentCss = ":host{display:block}div{width:100px}";
const MyComponentStyle0 = myComponentCss;

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    render() {
        return index.h("div", { key: '823bb90d22d599642789de7d4f92d6e9e8e9c614' }, "Hello, World");
    }
};
MyComponent.style = MyComponentStyle0;

exports.my_component = MyComponent;

//# sourceMappingURL=my-component.cjs.entry.js.map