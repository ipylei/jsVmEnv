HTMLMetaElement = function HTMLMetaElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLMetaElement);

Object.defineProperties(HTMLMetaElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLMetaElement",
        configurable: true
    }
});

HTMLMetaElement.__proto__ = HTMLElement;
HTMLMetaElement.prototype.__proto__ = HTMLElement.prototype;

// 标签创建方法(不需要new 直接调用就能创建了)
vmcore.memory.CreateElement["meta"] = function () {
    var element = new class meta { };
    element.__proto__ = HTMLMetaElement.prototype;
    return element;
}

vmcore.propertymanager.HTMLMetaElement = {};
//-------------------------------------------------------------------
vmcore.propertymanager.HTMLMetaElement.name = "";
Object.defineProperty(HTMLMetaElement.prototype, "name", {
    get: function name() {
        Developer.log("[dev] HTMLMetaElement.prototype name 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLMetaElement.name;
    },
    set: function name(val) {
        Developer.log("[dev] HTMLMetaElement.prototype name 描述符 set 被调用了");
        vmcore.propertymanager.HTMLMetaElement.name = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLMetaElement.httpEquiv = "";
Object.defineProperty(HTMLMetaElement.prototype, "httpEquiv", {
    get: function httpEquiv() {
        Developer.log("[dev] HTMLMetaElement.prototype httpEquiv 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLMetaElement.httpEquiv;
    },
    set: function httpEquiv(val) {
        Developer.log("[dev] HTMLMetaElement.prototype httpEquiv 描述符 set 被调用了");
        vmcore.propertymanager.HTMLMetaElement.httpEquiv = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLMetaElement.content = "";
Object.defineProperty(HTMLMetaElement.prototype, "content", {
    get: function content() {
        Developer.log("[dev] HTMLMetaElement.prototype content 描述符 get 被调用了", this.markname);
        if(this.markname && this.markname == "meta2"){
            return "sVaMpT7xyJ2Iio1UPyQHK9HVce2slXdp";
        }
        return vmcore.propertymanager.HTMLMetaElement.content;
    },
    set: function content(val) {
        Developer.log("[dev] HTMLMetaElement.prototype content 描述符 set 被调用了");
        vmcore.propertymanager.HTMLMetaElement.content = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLMetaElement.media = "";
Object.defineProperty(HTMLMetaElement.prototype, "media", {
    get: function media() {
        Developer.log("[dev] HTMLMetaElement.prototype media 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLMetaElement.media;
    },
    set: function media(val) {
        Developer.log("[dev] HTMLMetaElement.prototype media 描述符 set 被调用了");
        vmcore.propertymanager.HTMLMetaElement.media = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLMetaElement.scheme = "";
Object.defineProperty(HTMLMetaElement.prototype, "scheme", {
    get: function scheme() {
        Developer.log("[dev] HTMLMetaElement.prototype scheme 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLMetaElement.scheme;
    },
    set: function scheme(val) {
        Developer.log("[dev] HTMLMetaElement.prototype scheme 描述符 set 被调用了");
        vmcore.propertymanager.HTMLMetaElement.scheme = val;
    },
    enumerable: true,
    configurable: true,
});


// div标签创建方法(不需要new 直接调用就能创建了)
vmcore.memory.CreateElement["meta"] = function () {
    var element = new class meta { };
    element.__proto__ = HTMLMetaElement.prototype;
    return element;
}