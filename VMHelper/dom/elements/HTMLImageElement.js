HTMLImageElement = function HTMLImageElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLImageElement);

Object.defineProperties(HTMLImageElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLImageElement",
        configurable: true
    }
});


HTMLImageElement.__proto__ = HTMLElement;
HTMLImageElement.prototype.__proto__ = HTMLElement.prototype;
//--------------------------------------------------------------

vmcore.propertymanager.HTMLImageElement = {};

vmcore.propertymanager.HTMLImageElement.alt = "";
Object.defineProperty(HTMLImageElement.prototype, "alt", {
    get: function alt() {
        Developer.log("[dev] HTMLImageElement.prototype alt 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.alt;
    },
    set: function alt(val) {
        Developer.log("[dev] HTMLImageElement.prototype alt 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.alt = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.src = "";
Object.defineProperty(HTMLImageElement.prototype, "src", {
    get: function src() {
        Developer.log("[dev] HTMLImageElement.prototype src 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.src;
    },
    set: function src(val) {
        Developer.log("[dev] HTMLImageElement.prototype src 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.src = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.srcset = "";
Object.defineProperty(HTMLImageElement.prototype, "srcset", {
    get: function srcset() {
        Developer.log("[dev] HTMLImageElement.prototype srcset 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.srcset;
    },
    set: function srcset(val) {
        Developer.log("[dev] HTMLImageElement.prototype srcset 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.srcset = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.sizes = "";
Object.defineProperty(HTMLImageElement.prototype, "sizes", {
    get: function sizes() {
        Developer.log("[dev] HTMLImageElement.prototype sizes 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.sizes;
    },
    set: function sizes(val) {
        Developer.log("[dev] HTMLImageElement.prototype sizes 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.sizes = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.crossOrigin = null;
Object.defineProperty(HTMLImageElement.prototype, "crossOrigin", {
    get: function crossOrigin() {
        Developer.log("[dev] HTMLImageElement.prototype crossOrigin 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.crossOrigin;
    },
    set: function crossOrigin(val) {
        Developer.log("[dev] HTMLImageElement.prototype crossOrigin 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.crossOrigin = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.useMap = "";
Object.defineProperty(HTMLImageElement.prototype, "useMap", {
    get: function useMap() {
        Developer.log("[dev] HTMLImageElement.prototype useMap 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.useMap;
    },
    set: function useMap(val) {
        Developer.log("[dev] HTMLImageElement.prototype useMap 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.useMap = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.isMap = false;
Object.defineProperty(HTMLImageElement.prototype, "isMap", {
    get: function isMap() {
        Developer.log("[dev] HTMLImageElement.prototype isMap 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.isMap;
    },
    set: function isMap(val) {
        Developer.log("[dev] HTMLImageElement.prototype isMap 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.isMap = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.width = 0;
Object.defineProperty(HTMLImageElement.prototype, "width", {
    get: function width() {
        Developer.log("[dev] HTMLImageElement.prototype width 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.width;
    },
    set: function width(val) {
        Developer.log("[dev] HTMLImageElement.prototype width 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.width = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.height = 0;
Object.defineProperty(HTMLImageElement.prototype, "height", {
    get: function height() {
        Developer.log("[dev] HTMLImageElement.prototype height 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.height;
    },
    set: function height(val) {
        Developer.log("[dev] HTMLImageElement.prototype height 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.height = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.naturalWidth = 0;
Object.defineProperty(HTMLImageElement.prototype, "naturalWidth", {
    get: function naturalWidth() {
        Developer.log("[dev] HTMLImageElement.prototype naturalWidth 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.naturalWidth;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.naturalHeight = 0;
Object.defineProperty(HTMLImageElement.prototype, "naturalHeight", {
    get: function naturalHeight() {
        Developer.log("[dev] HTMLImageElement.prototype naturalHeight 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.naturalHeight;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.complete = true;
Object.defineProperty(HTMLImageElement.prototype, "complete", {
    get: function complete() {
        Developer.log("[dev] HTMLImageElement.prototype complete 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.complete;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.currentSrc = "";
Object.defineProperty(HTMLImageElement.prototype, "currentSrc", {
    get: function currentSrc() {
        Developer.log("[dev] HTMLImageElement.prototype currentSrc 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.currentSrc;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.referrerPolicy = "";
Object.defineProperty(HTMLImageElement.prototype, "referrerPolicy", {
    get: function referrerPolicy() {
        Developer.log("[dev] HTMLImageElement.prototype referrerPolicy 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.referrerPolicy;
    },
    set: function referrerPolicy(val) {
        Developer.log("[dev] HTMLImageElement.prototype referrerPolicy 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.referrerPolicy = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.decoding = "auto";
Object.defineProperty(HTMLImageElement.prototype, "decoding", {
    get: function decoding() {
        Developer.log("[dev] HTMLImageElement.prototype decoding 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.decoding;
    },
    set: function decoding(val) {
        Developer.log("[dev] HTMLImageElement.prototype decoding 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.decoding = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.fetchPriority = "auto";
Object.defineProperty(HTMLImageElement.prototype, "fetchPriority", {
    get: function fetchPriority() {
        Developer.log("[dev] HTMLImageElement.prototype fetchPriority 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.fetchPriority;
    },
    set: function fetchPriority(val) {
        Developer.log("[dev] HTMLImageElement.prototype fetchPriority 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.fetchPriority = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.loading = "auto";
Object.defineProperty(HTMLImageElement.prototype, "loading", {
    get: function loading() {
        Developer.log("[dev] HTMLImageElement.prototype loading 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.loading;
    },
    set: function loading(val) {
        Developer.log("[dev] HTMLImageElement.prototype loading 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.loading = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.name = "";
Object.defineProperty(HTMLImageElement.prototype, "name", {
    get: function name() {
        Developer.log("[dev] HTMLImageElement.prototype name 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.name;
    },
    set: function name(val) {
        Developer.log("[dev] HTMLImageElement.prototype name 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.name = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.lowsrc = "";
Object.defineProperty(HTMLImageElement.prototype, "lowsrc", {
    get: function lowsrc() {
        Developer.log("[dev] HTMLImageElement.prototype lowsrc 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.lowsrc;
    },
    set: function lowsrc(val) {
        Developer.log("[dev] HTMLImageElement.prototype lowsrc 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.lowsrc = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.align = "";
Object.defineProperty(HTMLImageElement.prototype, "align", {
    get: function align() {
        Developer.log("[dev] HTMLImageElement.prototype align 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.align;
    },
    set: function align(val) {
        Developer.log("[dev] HTMLImageElement.prototype align 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.align = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.hspace = 0;
Object.defineProperty(HTMLImageElement.prototype, "hspace", {
    get: function hspace() {
        Developer.log("[dev] HTMLImageElement.prototype hspace 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.hspace;
    },
    set: function hspace(val) {
        Developer.log("[dev] HTMLImageElement.prototype hspace 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.hspace = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.vspace = 0;
Object.defineProperty(HTMLImageElement.prototype, "vspace", {
    get: function vspace() {
        Developer.log("[dev] HTMLImageElement.prototype vspace 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.vspace;
    },
    set: function vspace(val) {
        Developer.log("[dev] HTMLImageElement.prototype vspace 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.vspace = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.longDesc = "";
Object.defineProperty(HTMLImageElement.prototype, "longDesc", {
    get: function longDesc() {
        Developer.log("[dev] HTMLImageElement.prototype longDesc 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.longDesc;
    },
    set: function longDesc(val) {
        Developer.log("[dev] HTMLImageElement.prototype longDesc 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.longDesc = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.border = "";
Object.defineProperty(HTMLImageElement.prototype, "border", {
    get: function border() {
        Developer.log("[dev] HTMLImageElement.prototype border 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.border;
    },
    set: function border(val) {
        Developer.log("[dev] HTMLImageElement.prototype border 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.border = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.x = 0;
Object.defineProperty(HTMLImageElement.prototype, "x", {
    get: function x() {
        Developer.log("[dev] HTMLImageElement.prototype x 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.x;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.y = 0;
Object.defineProperty(HTMLImageElement.prototype, "y", {
    get: function y() {
        Developer.log("[dev] HTMLImageElement.prototype y 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.y;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(HTMLImageElement.prototype, "decode", {
    value: function decode() {
        Developer.log("[dev] HTMLImageElement.prototype decode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLImageElement.prototype.decode);

vmcore.propertymanager.HTMLImageElement.attributionSrc = "";
Object.defineProperty(HTMLImageElement.prototype, "attributionSrc", {
    get: function attributionSrc() {
        Developer.log("[dev] HTMLImageElement.prototype attributionSrc 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.attributionSrc;
    },
    set: function attributionSrc(val) {
        Developer.log("[dev] HTMLImageElement.prototype attributionSrc 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.attributionSrc = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLImageElement.sharedStorageWritable = false;
Object.defineProperty(HTMLImageElement.prototype, "sharedStorageWritable", {
    get: function sharedStorageWritable() {
        Developer.log("[dev] HTMLImageElement.prototype sharedStorageWritable 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLImageElement.sharedStorageWritable;
    },
    set: function sharedStorageWritable(val) {
        Developer.log("[dev] HTMLImageElement.prototype sharedStorageWritable 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLImageElement.sharedStorageWritable = val;
    },
    enumerable: true,
    configurable: true,
});


// 标签创建方法(不需要new 直接调用就能创建了)
vmcore.memory.CreateElement["img"] = function () {
    var element = new class img { };
    element.__proto__ = HTMLImageElement.prototype;
    return element;
}