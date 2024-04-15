import { p as proxyCustomElement, H, h } from './p-528ba9a0.js';

const myComponentCss = ":host{display:block}div{width:100px}";
const MyComponentStyle0 = myComponentCss;

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    render() {
        return h("div", { key: '823bb90d22d599642789de7d4f92d6e9e8e9c614' }, "Hello, World");
    }
    static get style() { return MyComponentStyle0; }
}, [0, "my-component", {
        "first": [1],
        "middle": [1],
        "last": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyComponent$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };

//# sourceMappingURL=my-component.js.map