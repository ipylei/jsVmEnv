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
HTMLScriptElement.__proto__ = HTMLElement;
HTMLScriptElement.prototype.__proto__ = HTMLElement.prototype;

vmcore.propertymanager.HTMLScriptElement = {};
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


vmcore.propertymanager.HTMLScriptElement.src = "";
Object.defineProperty(HTMLScriptElement.prototype, "src", {
    get: function src() {
        Developer.log("[dev] HTMLScriptElement.prototype src 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.src;
    },
    set: function src(val) {
        Developer.log("[dev] HTMLScriptElement.prototype src 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.src = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.type = "";
Object.defineProperty(HTMLScriptElement.prototype, "type", {
    get: function type() {
        Developer.log("[dev] HTMLScriptElement.prototype type 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.type;
    },
    set: function type(val) {
        Developer.log("[dev] HTMLScriptElement.prototype type 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.type = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.noModule = false;
Object.defineProperty(HTMLScriptElement.prototype, "noModule", {
    get: function noModule() {
        Developer.log("[dev] HTMLScriptElement.prototype noModule 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.noModule;
    },
    set: function noModule(val) {
        Developer.log("[dev] HTMLScriptElement.prototype noModule 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.noModule = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.charset = "";
Object.defineProperty(HTMLScriptElement.prototype, "charset", {
    get: function charset() {
        Developer.log("[dev] HTMLScriptElement.prototype charset 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.charset;
    },
    set: function charset(val) {
        Developer.log("[dev] HTMLScriptElement.prototype charset 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.charset = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.async = true;
Object.defineProperty(HTMLScriptElement.prototype, "async", {
    get: function async() {
        Developer.log("[dev] HTMLScriptElement.prototype async 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.async;
    },
    set: function async(val) {
        Developer.log("[dev] HTMLScriptElement.prototype async 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.async = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.defer = false;
Object.defineProperty(HTMLScriptElement.prototype, "defer", {
    get: function defer() {
        Developer.log("[dev] HTMLScriptElement.prototype defer 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.defer;
    },
    set: function defer(val) {
        Developer.log("[dev] HTMLScriptElement.prototype defer 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.defer = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.crossOrigin = null;
Object.defineProperty(HTMLScriptElement.prototype, "crossOrigin", {
    get: function crossOrigin() {
        Developer.log("[dev] HTMLScriptElement.prototype crossOrigin 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.crossOrigin;
    },
    set: function crossOrigin(val) {
        Developer.log("[dev] HTMLScriptElement.prototype crossOrigin 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.crossOrigin = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.text = "";
Object.defineProperty(HTMLScriptElement.prototype, "text", {
    get: function text() {
        Developer.log("[dev] HTMLScriptElement.prototype text 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.text;
    },
    set: function text(val) {
        Developer.log("[dev] HTMLScriptElement.prototype text 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.text = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.referrerPolicy = "";
Object.defineProperty(HTMLScriptElement.prototype, "referrerPolicy", {
    get: function referrerPolicy() {
        Developer.log("[dev] HTMLScriptElement.prototype referrerPolicy 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.referrerPolicy;
    },
    set: function referrerPolicy(val) {
        Developer.log("[dev] HTMLScriptElement.prototype referrerPolicy 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.referrerPolicy = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.fetchPriority = "auto";
Object.defineProperty(HTMLScriptElement.prototype, "fetchPriority", {
    get: function fetchPriority() {
        Developer.log("[dev] HTMLScriptElement.prototype fetchPriority 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.fetchPriority;
    },
    set: function fetchPriority(val) {
        Developer.log("[dev] HTMLScriptElement.prototype fetchPriority 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.fetchPriority = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.event = "";
Object.defineProperty(HTMLScriptElement.prototype, "event", {
    get: function event() {
        Developer.log("[dev] HTMLScriptElement.prototype event 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.event;
    },
    set: function event(val) {
        Developer.log("[dev] HTMLScriptElement.prototype event 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.event = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.htmlFor = "";
Object.defineProperty(HTMLScriptElement.prototype, "htmlFor", {
    get: function htmlFor() {
        Developer.log("[dev] HTMLScriptElement.prototype htmlFor 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.htmlFor;
    },
    set: function htmlFor(val) {
        Developer.log("[dev] HTMLScriptElement.prototype htmlFor 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.htmlFor = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.integrity = "";
Object.defineProperty(HTMLScriptElement.prototype, "integrity", {
    get: function integrity() {
        Developer.log("[dev] HTMLScriptElement.prototype integrity 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.integrity;
    },
    set: function integrity(val) {
        Developer.log("[dev] HTMLScriptElement.prototype integrity 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.integrity = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.blocking = null;
Object.defineProperty(HTMLScriptElement.prototype, "blocking", {
    get: function blocking() {
        Developer.log("[dev] HTMLScriptElement.prototype blocking 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.blocking;
    },
    set: function blocking(val) {
        Developer.log("[dev] HTMLScriptElement.prototype blocking 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.blocking = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLScriptElement.attributionSrc = "";
Object.defineProperty(HTMLScriptElement.prototype, "attributionSrc", {
    get: function attributionSrc() {
        Developer.log("[dev] HTMLScriptElement.prototype attributionSrc 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLScriptElement.attributionSrc;
    },
    set: function attributionSrc(val) {
        Developer.log("[dev] HTMLScriptElement.prototype attributionSrc 描述符 set 被调用了");
        vmcore.propertymanager.HTMLScriptElement.attributionSrc = val;
    },
    enumerable: true,
    configurable: true,
});

//--------------------------------------------------------


// a标签创建方法(不需要new 直接调用就能创建了)
vmcore.memory.CreateElement["script"] = function () {
    var element = new class script { };
    element.__proto__ = HTMLScriptElement.prototype;
    return element;
}

