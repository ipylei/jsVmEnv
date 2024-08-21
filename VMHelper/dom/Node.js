Node = function Node() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(Node);

Object.defineProperties(Node.prototype, {
    [Symbol.toStringTag]: {
        value: "Node",
        configurable: true
    }
});

vmcore.propertymanager.Node = {};

// -------------------------------------------------------------
vmcore.propertymanager.Node.nodeType = undefined;
Object.defineProperty(Node.prototype, "nodeType", {
    get: function nodeType() {
        Developer.log("[dev] Node.prototype nodeType 描述符 get 被调用了");
        return vmcore.propertymanager.Node.nodeType;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.nodeName = undefined;
Object.defineProperty(Node.prototype, "nodeName", {
    get: function nodeName() {
        Developer.log("[dev] Node.prototype nodeName 描述符 get 被调用了");
        return vmcore.propertymanager.Node.nodeName;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.baseURI = undefined;
Object.defineProperty(Node.prototype, "baseURI", {
    get: function baseURI() {
        Developer.log("[dev] Node.prototype baseURI 描述符 get 被调用了");
        return vmcore.propertymanager.Node.baseURI;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.isConnected = undefined;
Object.defineProperty(Node.prototype, "isConnected", {
    get: function isConnected() {
        Developer.log("[dev] Node.prototype isConnected 描述符 get 被调用了");
        return vmcore.propertymanager.Node.isConnected;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.ownerDocument = undefined;
Object.defineProperty(Node.prototype, "ownerDocument", {
    get: function ownerDocument() {
        Developer.log("[dev] Node.prototype ownerDocument 描述符 get 被调用了");
        return vmcore.propertymanager.Node.ownerDocument;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.parentNode = undefined;
Object.defineProperty(Node.prototype, "parentNode", {
    get: function parentNode() {
        Developer.log("[dev] Node.prototype parentNode 描述符 get 被调用了");
        // return vmcore.propertymanager.Node.parentNode;
        return document.head;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.parentElement = undefined;
Object.defineProperty(Node.prototype, "parentElement", {
    get: function parentElement() {
        Developer.log("[dev] Node.prototype parentElement 描述符 get 被调用了", "this: ", this.constructor.name, this.markname);

        //暂时应对。。
        return document.body;
        // return vmcore.propertymanager.Node.parentElement;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.childNodes = undefined;
Object.defineProperty(Node.prototype, "childNodes", {
    get: function childNodes() {
        Developer.log("[dev] Node.prototype childNodes 描述符 get 被调用了");
        return vmcore.propertymanager.Node.childNodes;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.firstChild = undefined;
Object.defineProperty(Node.prototype, "firstChild", {
    get: function firstChild() {
        Developer.log("[dev] Node.prototype firstChild 描述符 get 被调用了");
        return this._firstChild ? this._firstChild : { href: "" };
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.lastChild = undefined;
Object.defineProperty(Node.prototype, "lastChild", {
    get: function lastChild() {
        Developer.log("[dev] Node.prototype lastChild 描述符 get 被调用了");
        return vmcore.propertymanager.Node.lastChild;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.previousSibling = undefined;
Object.defineProperty(Node.prototype, "previousSibling", {
    get: function previousSibling() {
        Developer.log("[dev] Node.prototype previousSibling 描述符 get 被调用了");
        return vmcore.propertymanager.Node.previousSibling;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.nextSibling = undefined;
Object.defineProperty(Node.prototype, "nextSibling", {
    get: function nextSibling() {
        Developer.log("[dev] Node.prototype nextSibling 描述符 get 被调用了");
        return vmcore.propertymanager.Node.nextSibling;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.nodeValue = undefined;
Object.defineProperty(Node.prototype, "nodeValue", {
    get: function nodeValue() {
        Developer.log("[dev] Node.prototype nodeValue 描述符 get 被调用了");
        return vmcore.propertymanager.Node.nodeValue;
    },
    set: function nodeValue(val) {
        Developer.log("[dev] Node.prototype nodeValue 描述符 set 被调用了");
        vmcore.propertymanager.Node.nodeValue = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Node.textContent = undefined;
Object.defineProperty(Node.prototype, "textContent", {
    get: function textContent() {
        Developer.log("[dev] Node.prototype textContent 描述符 get 被调用了");
        return vmcore.propertymanager.Node.textContent;
    },
    set: function textContent(val) {
        Developer.log("[dev] Node.prototype textContent 描述符 set 被调用了");
        vmcore.propertymanager.Node.textContent = val;
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(Node.prototype, "ELEMENT_NODE", {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "ATTRIBUTE_NODE", {
    value: 2,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "TEXT_NODE", {
    value: 3,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "CDATA_SECTION_NODE", {
    value: 4,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "ENTITY_REFERENCE_NODE", {
    value: 5,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "ENTITY_NODE", {
    value: 6,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "PROCESSING_INSTRUCTION_NODE", {
    value: 7,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "COMMENT_NODE", {
    value: 8,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "DOCUMENT_NODE", {
    value: 9,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "DOCUMENT_TYPE_NODE", {
    value: 10,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "DOCUMENT_FRAGMENT_NODE", {
    value: 11,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "NOTATION_NODE", {
    value: 12,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_DISCONNECTED", {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_PRECEDING", {
    value: 2,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_FOLLOWING", {
    value: 4,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINS", {
    value: 8,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINED_BY", {
    value: 16,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
    value: 32,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(Node.prototype, "appendChild", {
    value: function appendChild(element) {
        Developer.log("[dev] Node.prototype appendChild 描述符 value 被调用了");
        
        //form标签有点特殊
        if (element instanceof HTMLFormElement && element.id) {
            window.__proto__.__proto__[element.id] = element;
        }
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.appendChild);

Object.defineProperty(Node.prototype, "cloneNode", {
    value: function cloneNode() {
        Developer.log("[dev] Node.prototype cloneNode 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.cloneNode);

Object.defineProperty(Node.prototype, "compareDocumentPosition", {
    value: function compareDocumentPosition() {
        Developer.log("[dev] Node.prototype compareDocumentPosition 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.compareDocumentPosition);

Object.defineProperty(Node.prototype, "contains", {
    value: function contains() {
        Developer.log("[dev] Node.prototype contains 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.contains);

Object.defineProperty(Node.prototype, "getRootNode", {
    value: function getRootNode() {
        Developer.log("[dev] Node.prototype getRootNode 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.getRootNode);

Object.defineProperty(Node.prototype, "hasChildNodes", {
    value: function hasChildNodes() {
        Developer.log("[dev] Node.prototype hasChildNodes 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.hasChildNodes);

Object.defineProperty(Node.prototype, "insertBefore", {
    value: function insertBefore(newNode, referenceNode) {
        // 语法：
        //     var insertedNode = parentNode.insertBefore(newNode, referenceNode);
        //     insertedNode 被插入节点 (newNode)
        //     parentNode 新插入节点的父节点
        //     newNode 用于插入的节点
        //     referenceNode newNode 将要插在这个节点之前 

        Developer.log("[dev] Node.prototype insertBefore 描述符 value 被调用了");
        return newNode;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.insertBefore);

Object.defineProperty(Node.prototype, "isDefaultNamespace", {
    value: function isDefaultNamespace() {
        Developer.log("[dev] Node.prototype isDefaultNamespace 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.isDefaultNamespace);

Object.defineProperty(Node.prototype, "isEqualNode", {
    value: function isEqualNode() {
        Developer.log("[dev] Node.prototype isEqualNode 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.isEqualNode);

Object.defineProperty(Node.prototype, "isSameNode", {
    value: function isSameNode() {
        Developer.log("[dev] Node.prototype isSameNode 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.isSameNode);

Object.defineProperty(Node.prototype, "lookupNamespaceURI", {
    value: function lookupNamespaceURI() {
        Developer.log("[dev] Node.prototype lookupNamespaceURI 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.lookupNamespaceURI);

Object.defineProperty(Node.prototype, "lookupPrefix", {
    value: function lookupPrefix() {
        Developer.log("[dev] Node.prototype lookupPrefix 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.lookupPrefix);

Object.defineProperty(Node.prototype, "normalize", {
    value: function normalize() {
        Developer.log("[dev] Node.prototype normalize 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.normalize);

Object.defineProperty(Node.prototype, "removeChild", {
    value: function removeChild(element) {
        Developer.log("[dev] Node.prototype removeChild 描述符 value 被调用了", element.constructor.name, element.markname);
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.removeChild);

Object.defineProperty(Node.prototype, "replaceChild", {
    value: function replaceChild() {
        Developer.log("[dev] Node.prototype replaceChild 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Node.prototype.replaceChild);

// -------------------------------------------------------------
Node.__proto__ = EventTarget;
Node.prototype.__proto__ = EventTarget.prototype;