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
XMLHttpRequest.__proto__ = XMLHttpRequestEventTarget;
XMLHttpRequest.prototype.__proto__ = XMLHttpRequestEventTarget.prototype;

//--------------------------------------------------
Object.defineProperties(XMLHttpRequest.prototype, {
    [Symbol.toStringTag]: {
        value: "XMLHttpRequest",
        configurable: true
    }
});

//----------------------------------------------------------------------
XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
    Developer.log("XMLHttpRequest.prototype.open called");

    this.method = method;
    this.url = url;
}; vmcore.func_set_native(XMLHttpRequest.prototype.open);

XMLHttpRequest.prototype.send = function (body) {
    Developer.log("XMLHttpRequest.prototype.send called");
    this.body = body;
}; vmcore.func_set_native(XMLHttpRequest.prototype.send);

XMLHttpRequest.prototype.setRequestHeader = function (key, value) {
    Developer.log("XMLHttpRequest.prototype.setRequestHeader called");
    this.header[key] = value;
}; vmcore.func_set_native(XMLHttpRequest.prototype.setRequestHeader);


/* 请求体相关 */
FormData = function FormData() {
    Developer.log("[dev] window FormData 描述符 [value] [call] 被调用了");
}; vmcore.func_set_native(FormData);
