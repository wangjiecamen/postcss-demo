import { h } from "@stencil/core";
export class MyComponent {
    constructor() {
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    render() {
        return h("div", { key: '823bb90d22d599642789de7d4f92d6e9e8e9c614' }, "Hello, World");
    }
    static get is() { return "my-component"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get properties() {
        return {
            "first": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The first name"
                },
                "attribute": "first",
                "reflect": false
            },
            "middle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The middle name"
                },
                "attribute": "middle",
                "reflect": false
            },
            "last": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The last name"
                },
                "attribute": "last",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=my-component.js.map
