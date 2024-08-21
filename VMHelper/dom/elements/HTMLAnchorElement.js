/* a标签 */

HTMLAnchorElement = function HTMLAnchorElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLAnchorElement);

Object.defineProperties(HTMLAnchorElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLAnchorElement",
        configurable: true
    }
});

HTMLAnchorElement.__proto__ = HTMLElement;
HTMLAnchorElement.prototype.__proto__ = HTMLElement.prototype;
//--------------------------------------------------------
HTMLAnchorElement.prototype.localName = "a"; 
HTMLAnchorElement.prototype.nodeName = "A";  
HTMLAnchorElement.prototype.tagName = "A";  

HTMLAnchorElement.prototype.host = "";
HTMLAnchorElement.prototype.port = "";
HTMLAnchorElement.prototype._href = "";
//--------------------------------------------------------
vmcore.propertymanager.HTMLAnchorElement = {};

vmcore.propertymanager.HTMLAnchorElement.href = "";
Object.defineProperty(HTMLAnchorElement.prototype, "href", {
    get: function href() {
        Developer.log("[dev] HTMLAnchorElement.prototype href 描述符 [get] 被调用了");
        return this._href;
    },
    set: function href(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype href 描述符 [set] 被调用了");
        //https://xxx.xxx/nnnn:port?token=???
        this.host = val.split('/').at(-1);   //这里还是有点BUG
        this._href = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.target = "";
Object.defineProperty(HTMLAnchorElement.prototype, "target", {
    get: function target() {
        Developer.log("[dev] HTMLAnchorElement.prototype target 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.target;
    },
    set: function target(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype target 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.target = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.download = "";
Object.defineProperty(HTMLAnchorElement.prototype, "download", {
    get: function download() {
        Developer.log("[dev] HTMLAnchorElement.prototype download 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.download;
    },
    set: function download(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype download 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.download = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.ping = "";
Object.defineProperty(HTMLAnchorElement.prototype, "ping", {
    get: function ping() {
        Developer.log("[dev] HTMLAnchorElement.prototype ping 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.ping;
    },
    set: function ping(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype ping 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.ping = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.rel = "";
Object.defineProperty(HTMLAnchorElement.prototype, "rel", {
    get: function rel() {
        Developer.log("[dev] HTMLAnchorElement.prototype rel 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.rel;
    },
    set: function rel(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype rel 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.rel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.relList = null;
Object.defineProperty(HTMLAnchorElement.prototype, "relList", {
    get: function relList() {
        Developer.log("[dev] HTMLAnchorElement.prototype relList 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.relList;
    },
    set: function relList(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype relList 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.relList = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.hreflang = "";
Object.defineProperty(HTMLAnchorElement.prototype, "hreflang", {
    get: function hreflang() {
        Developer.log("[dev] HTMLAnchorElement.prototype hreflang 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.hreflang;
    },
    set: function hreflang(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype hreflang 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.hreflang = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.type = "";
Object.defineProperty(HTMLAnchorElement.prototype, "type", {
    get: function type() {
        Developer.log("[dev] HTMLAnchorElement.prototype type 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.type;
    },
    set: function type(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype type 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.type = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.referrerPolicy = "";
Object.defineProperty(HTMLAnchorElement.prototype, "referrerPolicy", {
    get: function referrerPolicy() {
        Developer.log("[dev] HTMLAnchorElement.prototype referrerPolicy 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.referrerPolicy;
    },
    set: function referrerPolicy(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype referrerPolicy 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.referrerPolicy = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.text = "";
Object.defineProperty(HTMLAnchorElement.prototype, "text", {
    get: function text() {
        Developer.log("[dev] HTMLAnchorElement.prototype text 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.text;
    },
    set: function text(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype text 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.text = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.coords = "";
Object.defineProperty(HTMLAnchorElement.prototype, "coords", {
    get: function coords() {
        Developer.log("[dev] HTMLAnchorElement.prototype coords 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.coords;
    },
    set: function coords(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype coords 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.coords = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.charset = "";
Object.defineProperty(HTMLAnchorElement.prototype, "charset", {
    get: function charset() {
        Developer.log("[dev] HTMLAnchorElement.prototype charset 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.charset;
    },
    set: function charset(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype charset 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.charset = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.name = "";
Object.defineProperty(HTMLAnchorElement.prototype, "name", {
    get: function name() {
        Developer.log("[dev] HTMLAnchorElement.prototype name 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.name;
    },
    set: function name(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype name 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.name = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.rev = "";
Object.defineProperty(HTMLAnchorElement.prototype, "rev", {
    get: function rev() {
        Developer.log("[dev] HTMLAnchorElement.prototype rev 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.rev;
    },
    set: function rev(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype rev 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.rev = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.shape = "";
Object.defineProperty(HTMLAnchorElement.prototype, "shape", {
    get: function shape() {
        Developer.log("[dev] HTMLAnchorElement.prototype shape 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.shape;
    },
    set: function shape(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype shape 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.shape = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.origin = "";
Object.defineProperty(HTMLAnchorElement.prototype, "origin", {
    get: function origin() {
        Developer.log("[dev] HTMLAnchorElement.prototype origin 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.origin;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.protocol = ":";
Object.defineProperty(HTMLAnchorElement.prototype, "protocol", {
    get: function protocol() {
        Developer.log("[dev] HTMLAnchorElement.prototype protocol 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.protocol;
    },
    set: function protocol(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype protocol 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.protocol = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.username = "";
Object.defineProperty(HTMLAnchorElement.prototype, "username", {
    get: function username() {
        Developer.log("[dev] HTMLAnchorElement.prototype username 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.username;
    },
    set: function username(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype username 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.username = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.password = "";
Object.defineProperty(HTMLAnchorElement.prototype, "password", {
    get: function password() {
        Developer.log("[dev] HTMLAnchorElement.prototype password 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.password;
    },
    set: function password(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype password 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.password = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.host = "";
Object.defineProperty(HTMLAnchorElement.prototype, "host", {
    get: function host() {
        Developer.log("[dev] HTMLAnchorElement.prototype host 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.host;
    },
    set: function host(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype host 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.host = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.hostname = "";
Object.defineProperty(HTMLAnchorElement.prototype, "hostname", {
    get: function hostname() {
        Developer.log("[dev] HTMLAnchorElement.prototype hostname 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.hostname;
    },
    set: function hostname(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype hostname 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.hostname = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.port = "";
Object.defineProperty(HTMLAnchorElement.prototype, "port", {
    get: function port() {
        Developer.log("[dev] HTMLAnchorElement.prototype port 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.port;
    },
    set: function port(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype port 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.port = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.pathname = "";
Object.defineProperty(HTMLAnchorElement.prototype, "pathname", {
    get: function pathname() {
        Developer.log("[dev] HTMLAnchorElement.prototype pathname 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.pathname;
    },
    set: function pathname(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype pathname 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.pathname = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.search = "";
Object.defineProperty(HTMLAnchorElement.prototype, "search", {
    get: function search() {
        Developer.log("[dev] HTMLAnchorElement.prototype search 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.search;
    },
    set: function search(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype search 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.search = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.hash = "";
Object.defineProperty(HTMLAnchorElement.prototype, "hash", {
    get: function hash() {
        Developer.log("[dev] HTMLAnchorElement.prototype hash 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.hash;
    },
    set: function hash(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype hash 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.hash = val;
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(HTMLAnchorElement.prototype, "toString", {
    value: function toString() {
        Developer.log("[dev] HTMLAnchorElement.prototype toString 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLAnchorElement.prototype.toString);

vmcore.propertymanager.HTMLAnchorElement.hrefTranslate = "";
Object.defineProperty(HTMLAnchorElement.prototype, "hrefTranslate", {
    get: function hrefTranslate() {
        Developer.log("[dev] HTMLAnchorElement.prototype hrefTranslate 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.hrefTranslate;
    },
    set: function hrefTranslate(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype hrefTranslate 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.hrefTranslate = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLAnchorElement.attributionSrc = "";
Object.defineProperty(HTMLAnchorElement.prototype, "attributionSrc", {
    get: function attributionSrc() {
        Developer.log("[dev] HTMLAnchorElement.prototype attributionSrc 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLAnchorElement.attributionSrc;
    },
    set: function attributionSrc(val) {
        Developer.log("[dev] HTMLAnchorElement.prototype attributionSrc 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLAnchorElement.attributionSrc = val;
    },
    enumerable: true,
    configurable: true,
});


// a标签创建方法(不需要new 直接调用就能创建了)
vmcore.memory.CreateElement["a"] = function () {
    var element = new class a { };
    element.__proto__ = HTMLAnchorElement.prototype;
    return element;
}

