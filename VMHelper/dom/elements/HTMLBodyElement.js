/* body标签 */
// HTMLBodyElement
HTMLBodyElement = function HTMLBodyElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLBodyElement);

Object.defineProperties(HTMLBodyElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLBodyElement",
        configurable: true
    }
});

HTMLBodyElement.__proto__ = HTMLElement;
HTMLBodyElement.prototype.__proto__ = HTMLElement.prototype;

// 初始化body标签
vmcore.memory.elements.body = new class body { };
vmcore.memory.elements.body.__proto__ = HTMLBodyElement.prototype;

//---------------------------------------------------------------------
HTMLBodyElement.prototype.localName = "body";
HTMLBodyElement.prototype.nodeName = "BODY";
HTMLBodyElement.prototype.tagName = "BODY";
//----------------------------------------------------------------------

vmcore.propertymanager.HTMLBodyElement = {};

vmcore.propertymanager.HTMLBodyElement.text = "";
Object.defineProperty(HTMLBodyElement.prototype, "text", {
    get: function text() {
        Developer.log("[dev] HTMLBodyElement.prototype text 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.text;
    },
    set: function text(val) {
        Developer.log("[dev] HTMLBodyElement.prototype text 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.text = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.link = "";
Object.defineProperty(HTMLBodyElement.prototype, "link", {
    get: function link() {
        Developer.log("[dev] HTMLBodyElement.prototype link 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.link;
    },
    set: function link(val) {
        Developer.log("[dev] HTMLBodyElement.prototype link 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.link = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.vLink = "";
Object.defineProperty(HTMLBodyElement.prototype, "vLink", {
    get: function vLink() {
        Developer.log("[dev] HTMLBodyElement.prototype vLink 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.vLink;
    },
    set: function vLink(val) {
        Developer.log("[dev] HTMLBodyElement.prototype vLink 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.vLink = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.aLink = "";
Object.defineProperty(HTMLBodyElement.prototype, "aLink", {
    get: function aLink() {
        Developer.log("[dev] HTMLBodyElement.prototype aLink 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.aLink;
    },
    set: function aLink(val) {
        Developer.log("[dev] HTMLBodyElement.prototype aLink 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.aLink = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.bgColor = "";
Object.defineProperty(HTMLBodyElement.prototype, "bgColor", {
    get: function bgColor() {
        Developer.log("[dev] HTMLBodyElement.prototype bgColor 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.bgColor;
    },
    set: function bgColor(val) {
        Developer.log("[dev] HTMLBodyElement.prototype bgColor 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.bgColor = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.background = "";
Object.defineProperty(HTMLBodyElement.prototype, "background", {
    get: function background() {
        Developer.log("[dev] HTMLBodyElement.prototype background 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.background;
    },
    set: function background(val) {
        Developer.log("[dev] HTMLBodyElement.prototype background 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.background = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onblur = null;
Object.defineProperty(HTMLBodyElement.prototype, "onblur", {
    get: function onblur() {
        Developer.log("[dev] HTMLBodyElement.prototype onblur 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onblur;
    },
    set: function onblur(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onblur 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onblur = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onerror = null;
Object.defineProperty(HTMLBodyElement.prototype, "onerror", {
    get: function onerror() {
        Developer.log("[dev] HTMLBodyElement.prototype onerror 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onerror;
    },
    set: function onerror(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onerror 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onerror = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onfocus = null;
Object.defineProperty(HTMLBodyElement.prototype, "onfocus", {
    get: function onfocus() {
        Developer.log("[dev] HTMLBodyElement.prototype onfocus 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onfocus;
    },
    set: function onfocus(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onfocus 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onfocus = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onload = null;
Object.defineProperty(HTMLBodyElement.prototype, "onload", {
    get: function onload() {
        Developer.log("[dev] HTMLBodyElement.prototype onload 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onload;
    },
    set: function onload(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onload 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onload = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onresize = null;
Object.defineProperty(HTMLBodyElement.prototype, "onresize", {
    get: function onresize() {
        Developer.log("[dev] HTMLBodyElement.prototype onresize 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onresize;
    },
    set: function onresize(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onresize 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onresize = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onscroll = null;
Object.defineProperty(HTMLBodyElement.prototype, "onscroll", {
    get: function onscroll() {
        Developer.log("[dev] HTMLBodyElement.prototype onscroll 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onscroll;
    },
    set: function onscroll(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onscroll 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onscroll = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onafterprint = null;
Object.defineProperty(HTMLBodyElement.prototype, "onafterprint", {
    get: function onafterprint() {
        Developer.log("[dev] HTMLBodyElement.prototype onafterprint 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onafterprint;
    },
    set: function onafterprint(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onafterprint 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onafterprint = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onbeforeprint = null;
Object.defineProperty(HTMLBodyElement.prototype, "onbeforeprint", {
    get: function onbeforeprint() {
        Developer.log("[dev] HTMLBodyElement.prototype onbeforeprint 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onbeforeprint;
    },
    set: function onbeforeprint(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onbeforeprint 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onbeforeprint = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onbeforeunload = null;
Object.defineProperty(HTMLBodyElement.prototype, "onbeforeunload", {
    get: function onbeforeunload() {
        Developer.log("[dev] HTMLBodyElement.prototype onbeforeunload 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onbeforeunload;
    },
    set: function onbeforeunload(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onbeforeunload 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onbeforeunload = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onhashchange = null;
Object.defineProperty(HTMLBodyElement.prototype, "onhashchange", {
    get: function onhashchange() {
        Developer.log("[dev] HTMLBodyElement.prototype onhashchange 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onhashchange;
    },
    set: function onhashchange(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onhashchange 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onhashchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onlanguagechange = null;
Object.defineProperty(HTMLBodyElement.prototype, "onlanguagechange", {
    get: function onlanguagechange() {
        Developer.log("[dev] HTMLBodyElement.prototype onlanguagechange 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onlanguagechange;
    },
    set: function onlanguagechange(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onlanguagechange 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onlanguagechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onmessage = null;
Object.defineProperty(HTMLBodyElement.prototype, "onmessage", {
    get: function onmessage() {
        Developer.log("[dev] HTMLBodyElement.prototype onmessage 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onmessage;
    },
    set: function onmessage(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onmessage 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onmessage = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onmessageerror = null;
Object.defineProperty(HTMLBodyElement.prototype, "onmessageerror", {
    get: function onmessageerror() {
        Developer.log("[dev] HTMLBodyElement.prototype onmessageerror 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onmessageerror;
    },
    set: function onmessageerror(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onmessageerror 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onmessageerror = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onoffline = null;
Object.defineProperty(HTMLBodyElement.prototype, "onoffline", {
    get: function onoffline() {
        Developer.log("[dev] HTMLBodyElement.prototype onoffline 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onoffline;
    },
    set: function onoffline(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onoffline 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onoffline = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.ononline = null;
Object.defineProperty(HTMLBodyElement.prototype, "ononline", {
    get: function ononline() {
        Developer.log("[dev] HTMLBodyElement.prototype ononline 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.ononline;
    },
    set: function ononline(val) {
        Developer.log("[dev] HTMLBodyElement.prototype ononline 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.ononline = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onpagehide = null;
Object.defineProperty(HTMLBodyElement.prototype, "onpagehide", {
    get: function onpagehide() {
        Developer.log("[dev] HTMLBodyElement.prototype onpagehide 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onpagehide;
    },
    set: function onpagehide(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onpagehide 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onpagehide = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onpageshow = null;
Object.defineProperty(HTMLBodyElement.prototype, "onpageshow", {
    get: function onpageshow() {
        Developer.log("[dev] HTMLBodyElement.prototype onpageshow 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onpageshow;
    },
    set: function onpageshow(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onpageshow 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onpageshow = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onpopstate = null;
Object.defineProperty(HTMLBodyElement.prototype, "onpopstate", {
    get: function onpopstate() {
        Developer.log("[dev] HTMLBodyElement.prototype onpopstate 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onpopstate;
    },
    set: function onpopstate(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onpopstate 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onpopstate = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onrejectionhandled = null;
Object.defineProperty(HTMLBodyElement.prototype, "onrejectionhandled", {
    get: function onrejectionhandled() {
        Developer.log("[dev] HTMLBodyElement.prototype onrejectionhandled 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onrejectionhandled;
    },
    set: function onrejectionhandled(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onrejectionhandled 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onrejectionhandled = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onstorage = null;
Object.defineProperty(HTMLBodyElement.prototype, "onstorage", {
    get: function onstorage() {
        Developer.log("[dev] HTMLBodyElement.prototype onstorage 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onstorage;
    },
    set: function onstorage(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onstorage 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onstorage = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onunhandledrejection = null;
Object.defineProperty(HTMLBodyElement.prototype, "onunhandledrejection", {
    get: function onunhandledrejection() {
        Developer.log("[dev] HTMLBodyElement.prototype onunhandledrejection 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onunhandledrejection;
    },
    set: function onunhandledrejection(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onunhandledrejection 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onunhandledrejection = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLBodyElement.onunload = null;
Object.defineProperty(HTMLBodyElement.prototype, "onunload", {
    get: function onunload() {
        Developer.log("[dev] HTMLBodyElement.prototype onunload 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLBodyElement.onunload;
    },
    set: function onunload(val) {
        Developer.log("[dev] HTMLBodyElement.prototype onunload 描述符 set 被调用了");
        vmcore.propertymanager.HTMLBodyElement.onunload = val;
    },
    enumerable: true,
    configurable: true,
});

