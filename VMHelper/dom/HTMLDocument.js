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

//--------------------------------------------
HTMLDocument.prototype.referrer = location ? location.href : "";
//--------------------------------------------
HTMLDocument.__proto__ = Document;
HTMLDocument.prototype.__proto__ = Document.prototype;
//--------------------------------------------

// 初始化document对象
document = new class document { };
document.__proto__ = HTMLDocument.prototype;

document.referrer = "";