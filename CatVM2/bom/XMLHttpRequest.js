XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget() {
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



XMLHttpRequest = function XMLHttpRequest() {
    this.method = "";
    this.url = "";
    this.body = "";
    this.header = {};

}; catvm.func_set_native(XMLHttpRequest);
Object.defineProperties(XMLHttpRequest.prototype, {
    [Symbol.toStringTag]: {
        value: "XMLHttpRequest",
        configurable: true
    }
});

//----------------------------------------------------------------------
XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
    this.method = method;
    this.url = url;
}; catvm.func_set_native(XMLHttpRequest.prototype.open);

XMLHttpRequest.prototype.send = function (body) {
    this.body = body;
}; catvm.func_set_native(XMLHttpRequest.prototype.send);

XMLHttpRequest.prototype.setRequestHeader = function (key, value) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>", key, value);
    this.header[key] = value;
}; catvm.func_set_native(XMLHttpRequest.prototype.setRequestHeader);


//----------------------------------------------------------------------
XMLHttpRequest.__proto__ = XMLHttpRequestEventTarget;
XMLHttpRequest.prototype.__proto__ = XMLHttpRequestEventTarget.prototype;
//----------------------------------------------------------------------


/* 请求体相关 */
FormData = function FormData() {

}; catvm.func_set_native(FormData);
