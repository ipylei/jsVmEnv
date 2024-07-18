/* script标签 */

HTMLScriptElement = function HTMLScriptElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLScriptElement);

Object.defineProperties(HTMLScriptElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLScriptElement",
        configurable: true
    }
});

//--------------------------------------------------------
HTMLScriptElement.prototype.localName = "script"; 
HTMLScriptElement.prototype.nodeName = "SCRIPT";  
HTMLScriptElement.prototype.tagName = "SCRIPT";  

Object.defineProperty(HTMLScriptElement.prototype, 'href', {
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
HTMLScriptElement.__proto__ = HTMLElement;
HTMLScriptElement.prototype.__proto__ = HTMLElement.prototype;


// a标签创建方法(不需要new 直接调用就能创建了)
vmcore.memory.htmlElements["script"] = function () {
    var element = new class script { };
    element.__proto__ = HTMLScriptElement.prototype;
    return element;
}

