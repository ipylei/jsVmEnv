function XMLHttpRequestEventTarget() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(XMLHttpRequestEventTarget);

Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "XMLHttpRequestEventTarget",
        configurable: true
    }
});
//---------------------------------------------------------------------
XMLHttpRequestEventTarget.__proto__ = EventTarget;
XMLHttpRequestEventTarget.prototype.__proto__ = EventTarget.prototype;
//---------------------------------------------------------------------



function XMLHttpRequest() {

}; catvm.func_set_native(XMLHttpRequest);
Object.defineProperties(XMLHttpRequest.prototype, {
    [Symbol.toStringTag]: {
        value: "XMLHttpRequest",
        configurable: true
    }
});

//----------------------------------------------------------------------
XMLHttpRequest.prototype.open = function (method, url, async, user, password) {

}; catvm.func_set_native(XMLHttpRequest.prototype.open);

XMLHttpRequest.prototype.send = function (body) {

}; catvm.func_set_native(XMLHttpRequest.prototype.send);
//----------------------------------------------------------------------
XMLHttpRequest.__proto__ = XMLHttpRequestEventTarget;
XMLHttpRequest.prototype.__proto__ = XMLHttpRequestEventTarget.prototype;
//----------------------------------------------------------------------

