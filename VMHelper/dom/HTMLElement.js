HTMLElement = function HTMLElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLElement);

Object.defineProperties(HTMLElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLElement",
        configurable: true
    }
});


//------------------------------------------------------------
HTMLElement.prototype.onwheel_ = null;

Object.defineProperty(HTMLElement.prototype, "onwheel", {
    get: function () {
        if (this instanceof HTMLElement) {
            return HTMLElement.prototype.onwheel_;
        } else {
            throw new TypeError("Illegal invocation");
        }
    }
});


//--------------------------------------------------------
HTMLElement.__proto__ = Element;
HTMLElement.prototype.__proto__ = Element.prototype;
//--------------------------------------------------------
