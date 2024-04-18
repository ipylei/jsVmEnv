function HTMLElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(HTMLElement);

Object.defineProperties(HTMLElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLElement",
        configurable: true
    }
});

//--------------------------------------------------------
HTMLElement.__proto__ = Element;
HTMLElement.prototype.__proto__ = Element.prototype;
//--------------------------------------------------------
