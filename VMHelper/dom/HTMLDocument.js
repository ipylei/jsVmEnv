HTMLDocument = function HTMLDocument() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLDocument);

Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDocument",
        configurable: true
    }
});

HTMLDocument.__proto__ = Document;
HTMLDocument.prototype.__proto__ = Document.prototype;

// 初始化document对象
document = new class document { };
document.__proto__ = HTMLDocument.prototype;


Object.defineProperty(document, "location", {
    get: function location() {
        Developer.log("[dev] document location 描述符 [get] 被调用了");
        return location;
    },
    set: function location(val) {
        Developer.log("[dev] document location 描述符 [set] 被调用了");
        location = val;
    },
    enumerable: true,
    configurable: false,
});
//--------------------------------------------