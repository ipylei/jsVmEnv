/* a标签 */

function HTMLAnchorElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(HTMLAnchorElement);

Object.defineProperties(HTMLAnchorElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLAnchorElement",
        configurable: true
    }
});

//--------------------------------------------------------
HTMLAnchorElement.prototype.host = "";
HTMLAnchorElement.prototype.port = "";
HTMLAnchorElement.prototype._href = "";

Object.defineProperty(HTMLAnchorElement.prototype, 'href', {
    set: function (val) {
        //https://xxx.xxx/nnnn:port?token=???
        this.host = val.split('/').at(-1);   //这里还是有点BUG
        this._href = val;
    },
    get: function () {
        return this._href;
    },
})
//--------------------------------------------------------
HTMLAnchorElement.__proto__ = HTMLElement;
HTMLAnchorElement.prototype.__proto__ = HTMLElement.prototype;


// a标签创建方法(不需要new 直接调用就能创建了)
catvm.memory.htmlElements["a"] = function () {
    var element = new class a { };
    element.__proto__ = HTMLAnchorElement.prototype;
    return element;
}

