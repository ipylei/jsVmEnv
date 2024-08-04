XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(XMLHttpRequestEventTarget);

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

}; vmcore.func_set_native(XMLHttpRequest);
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

    console.log("xhr open: ", url)

}; vmcore.func_set_native(XMLHttpRequest.prototype.open);

XMLHttpRequest.prototype.send = function (body) {
    this.body = body;
}; vmcore.func_set_native(XMLHttpRequest.prototype.send);

XMLHttpRequest.prototype.setRequestHeader = function (key, value) {
    console.log("xhr setRequestHeader: ", key, value);
    this.header[key] = value;
}; vmcore.func_set_native(XMLHttpRequest.prototype.setRequestHeader);


//----------------------------------------------------------------------
XMLHttpRequest.__proto__ = XMLHttpRequestEventTarget;
XMLHttpRequest.prototype.__proto__ = XMLHttpRequestEventTarget.prototype;
//----------------------------------------------------------------------


/* 请求体相关 */
FormData = function FormData() {

}; vmcore.func_set_native(FormData);
