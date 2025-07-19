HTMLIFrameElement = function HTMLIFrameElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLIFrameElement);

Object.defineProperties(HTMLIFrameElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLIFrameElement",
        configurable: true
    }
});

HTMLIFrameElement.__proto__ = HTMLElement;
HTMLIFrameElement.prototype.__proto__ = HTMLElement.prototype;
//--------------------------------------------------------------
vmcore.memory.CreateElement["iframe"] = function () {
    var element = new class iframe { };
    element.__proto__ = HTMLIFrameElement.prototype;
    return element;
}
vmcore.propertymanager.HTMLIFrameElement = {};

vmcore.propertymanager.HTMLIFrameElement.src = "";
Object.defineProperty(HTMLIFrameElement.prototype, "src", {
    get: function src() {
        Developer.log("[dev] HTMLIFrameElement.prototype.src 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.src;
    },
    set: function src(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.src 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.src = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.srcdoc = "";
Object.defineProperty(HTMLIFrameElement.prototype, "srcdoc", {
    get: function srcdoc() {
        Developer.log("[dev] HTMLIFrameElement.prototype.srcdoc 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.srcdoc;
    },
    set: function srcdoc(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.srcdoc 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.srcdoc = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.name = "";
Object.defineProperty(HTMLIFrameElement.prototype, "name", {
    get: function name() {
        Developer.log("[dev] HTMLIFrameElement.prototype.name 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.name;
    },
    set: function name(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.name 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.name = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.sandbox = null;
Object.defineProperty(HTMLIFrameElement.prototype, "sandbox", {
    get: function sandbox() {
        Developer.log("[dev] HTMLIFrameElement.prototype.sandbox 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.sandbox;
    },
    set: function sandbox(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.sandbox 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.sandbox = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.allowFullscreen = false;
Object.defineProperty(HTMLIFrameElement.prototype, "allowFullscreen", {
    get: function allowFullscreen() {
        Developer.log("[dev] HTMLIFrameElement.prototype.allowFullscreen 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.allowFullscreen;
    },
    set: function allowFullscreen(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.allowFullscreen 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.allowFullscreen = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.width = "";
Object.defineProperty(HTMLIFrameElement.prototype, "width", {
    get: function width() {
        Developer.log("[dev] HTMLIFrameElement.prototype.width 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.width;
    },
    set: function width(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.width 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.width = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.height = "";
Object.defineProperty(HTMLIFrameElement.prototype, "height", {
    get: function height() {
        Developer.log("[dev] HTMLIFrameElement.prototype.height 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.height;
    },
    set: function height(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.height 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.height = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.contentDocument = null;
Object.defineProperty(HTMLIFrameElement.prototype, "contentDocument", {
    get: function contentDocument() {
        Developer.log("[dev] HTMLIFrameElement.prototype.contentDocument 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.contentDocument;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.contentWindow = null;
Object.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {
    get: function contentWindow() {
        Developer.log("[dev] HTMLIFrameElement.prototype.contentWindow 描述符 [get] 被调用了");
        if (this._contentWindow){
            return this._contentWindow;
        }
        return vmcore.propertymanager.HTMLIFrameElement.contentWindow;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.referrerPolicy = "";
Object.defineProperty(HTMLIFrameElement.prototype, "referrerPolicy", {
    get: function referrerPolicy() {
        Developer.log("[dev] HTMLIFrameElement.prototype.referrerPolicy 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.referrerPolicy;
    },
    set: function referrerPolicy(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.referrerPolicy 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.referrerPolicy = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.csp = "";
Object.defineProperty(HTMLIFrameElement.prototype, "csp", {
    get: function csp() {
        Developer.log("[dev] HTMLIFrameElement.prototype.csp 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.csp;
    },
    set: function csp(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.csp 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.csp = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.allow = "";
Object.defineProperty(HTMLIFrameElement.prototype, "allow", {
    get: function allow() {
        Developer.log("[dev] HTMLIFrameElement.prototype.allow 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.allow;
    },
    set: function allow(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.allow 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.allow = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.featurePolicy = null;
Object.defineProperty(HTMLIFrameElement.prototype, "featurePolicy", {
    get: function featurePolicy() {
        Developer.log("[dev] HTMLIFrameElement.prototype.featurePolicy 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.featurePolicy;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.loading = "auto";
Object.defineProperty(HTMLIFrameElement.prototype, "loading", {
    get: function loading() {
        Developer.log("[dev] HTMLIFrameElement.prototype.loading 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.loading;
    },
    set: function loading(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.loading 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.loading = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.align = "";
Object.defineProperty(HTMLIFrameElement.prototype, "align", {
    get: function align() {
        Developer.log("[dev] HTMLIFrameElement.prototype.align 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.align;
    },
    set: function align(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.align 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.align = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.scrolling = "";
Object.defineProperty(HTMLIFrameElement.prototype, "scrolling", {
    get: function scrolling() {
        Developer.log("[dev] HTMLIFrameElement.prototype.scrolling 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.scrolling;
    },
    set: function scrolling(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.scrolling 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.scrolling = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.frameBorder = "";
Object.defineProperty(HTMLIFrameElement.prototype, "frameBorder", {
    get: function frameBorder() {
        Developer.log("[dev] HTMLIFrameElement.prototype.frameBorder 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.frameBorder;
    },
    set: function frameBorder(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.frameBorder 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.frameBorder = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.longDesc = "";
Object.defineProperty(HTMLIFrameElement.prototype, "longDesc", {
    get: function longDesc() {
        Developer.log("[dev] HTMLIFrameElement.prototype.longDesc 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.longDesc;
    },
    set: function longDesc(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.longDesc 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.longDesc = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.marginHeight = "";
Object.defineProperty(HTMLIFrameElement.prototype, "marginHeight", {
    get: function marginHeight() {
        Developer.log("[dev] HTMLIFrameElement.prototype.marginHeight 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.marginHeight;
    },
    set: function marginHeight(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.marginHeight 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.marginHeight = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.marginWidth = "";
Object.defineProperty(HTMLIFrameElement.prototype, "marginWidth", {
    get: function marginWidth() {
        Developer.log("[dev] HTMLIFrameElement.prototype.marginWidth 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.marginWidth;
    },
    set: function marginWidth(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.marginWidth 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.marginWidth = val;
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(HTMLIFrameElement.prototype, "getSVGDocument", {
    value: function getSVGDocument() {
        Developer.log("[dev] HTMLIFrameElement.prototype.getSVGDocument 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLIFrameElement.prototype.getSVGDocument);

vmcore.propertymanager.HTMLIFrameElement.credentialless = false;
Object.defineProperty(HTMLIFrameElement.prototype, "credentialless", {
    get: function credentialless() {
        Developer.log("[dev] HTMLIFrameElement.prototype.credentialless 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.credentialless;
    },
    set: function credentialless(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.credentialless 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.credentialless = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.allowPaymentRequest = false;
Object.defineProperty(HTMLIFrameElement.prototype, "allowPaymentRequest", {
    get: function allowPaymentRequest() {
        Developer.log("[dev] HTMLIFrameElement.prototype.allowPaymentRequest 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.allowPaymentRequest;
    },
    set: function allowPaymentRequest(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.allowPaymentRequest 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.allowPaymentRequest = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.privateToken = "";
Object.defineProperty(HTMLIFrameElement.prototype, "privateToken", {
    get: function privateToken() {
        Developer.log("[dev] HTMLIFrameElement.prototype.privateToken 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.privateToken;
    },
    set: function privateToken(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.privateToken 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.privateToken = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.browsingTopics = false;
Object.defineProperty(HTMLIFrameElement.prototype, "browsingTopics", {
    get: function browsingTopics() {
        Developer.log("[dev] HTMLIFrameElement.prototype.browsingTopics 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.browsingTopics;
    },
    set: function browsingTopics(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.browsingTopics 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.browsingTopics = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.adAuctionHeaders = false;
Object.defineProperty(HTMLIFrameElement.prototype, "adAuctionHeaders", {
    get: function adAuctionHeaders() {
        Developer.log("[dev] HTMLIFrameElement.prototype.adAuctionHeaders 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.adAuctionHeaders;
    },
    set: function adAuctionHeaders(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.adAuctionHeaders 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.adAuctionHeaders = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLIFrameElement.sharedStorageWritable = false;
Object.defineProperty(HTMLIFrameElement.prototype, "sharedStorageWritable", {
    get: function sharedStorageWritable() {
        Developer.log("[dev] HTMLIFrameElement.prototype.sharedStorageWritable 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLIFrameElement.sharedStorageWritable;
    },
    set: function sharedStorageWritable(val) {
        Developer.log("[dev] HTMLIFrameElement.prototype.sharedStorageWritable 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLIFrameElement.sharedStorageWritable = val;
    },
    enumerable: true,
    configurable: true,
});

