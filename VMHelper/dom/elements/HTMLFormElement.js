/* form标签 */

HTMLFormElement = function HTMLFormElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLFormElement);

Object.defineProperties(HTMLFormElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLFormElement",
        configurable: true
    }
});

//--------------------------------------------------------
HTMLFormElement.prototype.localName = "form"; 
HTMLFormElement.prototype.nodeName = "FORM";  
HTMLFormElement.prototype.tagName = "FORM";   
//--------------------------------------------------------
HTMLFormElement.__proto__ = HTMLElement;
HTMLFormElement.prototype.__proto__ = HTMLElement.prototype;

vmcore.propertymanager.HTMLFormElement = {};

vmcore.propertymanager.HTMLFormElement.acceptCharset = "";
Object.defineProperty(HTMLFormElement.prototype, "acceptCharset", {
    get: function acceptCharset() {
        Developer.log("[dev] HTMLFormElement.prototype acceptCharset 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.acceptCharset;
    },
    set: function acceptCharset(val) {
        Developer.log("[dev] HTMLFormElement.prototype acceptCharset 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLFormElement.acceptCharset = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.action = "https://zh.wikipedia.org/wiki/SHA%E5%AE%B6%E6%97%8F";
Object.defineProperty(HTMLFormElement.prototype, "action", {
    get: function action() {
        Developer.log("[dev] HTMLFormElement.prototype action 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.action;
    },
    set: function action(val) {
        Developer.log("[dev] HTMLFormElement.prototype action 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLFormElement.action = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.autocomplete = "on";
Object.defineProperty(HTMLFormElement.prototype, "autocomplete", {
    get: function autocomplete() {
        Developer.log("[dev] HTMLFormElement.prototype autocomplete 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.autocomplete;
    },
    set: function autocomplete(val) {
        Developer.log("[dev] HTMLFormElement.prototype autocomplete 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLFormElement.autocomplete = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.enctype = "application/x-www-form-urlencoded";
Object.defineProperty(HTMLFormElement.prototype, "enctype", {
    get: function enctype() {
        Developer.log("[dev] HTMLFormElement.prototype enctype 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.enctype;
    },
    set: function enctype(val) {
        Developer.log("[dev] HTMLFormElement.prototype enctype 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLFormElement.enctype = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.encoding = "application/x-www-form-urlencoded";
Object.defineProperty(HTMLFormElement.prototype, "encoding", {
    get: function encoding() {
        Developer.log("[dev] HTMLFormElement.prototype encoding 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.encoding;
    },
    set: function encoding(val) {
        Developer.log("[dev] HTMLFormElement.prototype encoding 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLFormElement.encoding = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.method = "get";
Object.defineProperty(HTMLFormElement.prototype, "method", {
    get: function method() {
        Developer.log("[dev] HTMLFormElement.prototype method 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.method;
    },
    set: function method(val) {
        Developer.log("[dev] HTMLFormElement.prototype method 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLFormElement.method = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.name = "";
Object.defineProperty(HTMLFormElement.prototype, "name", {
    get: function name() {
        Developer.log("[dev] HTMLFormElement.prototype name 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.name;
    },
    set: function name(val) {
        Developer.log("[dev] HTMLFormElement.prototype name 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLFormElement.name = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.noValidate = false;
Object.defineProperty(HTMLFormElement.prototype, "noValidate", {
    get: function noValidate() {
        Developer.log("[dev] HTMLFormElement.prototype noValidate 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.noValidate;
    },
    set: function noValidate(val) {
        Developer.log("[dev] HTMLFormElement.prototype noValidate 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLFormElement.noValidate = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.target = "";
Object.defineProperty(HTMLFormElement.prototype, "target", {
    get: function target() {
        Developer.log("[dev] HTMLFormElement.prototype target 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.target;
    },
    set: function target(val) {
        Developer.log("[dev] HTMLFormElement.prototype target 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLFormElement.target = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.rel = "";
Object.defineProperty(HTMLFormElement.prototype, "rel", {
    get: function rel() {
        Developer.log("[dev] HTMLFormElement.prototype rel 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.rel;
    },
    set: function rel(val) {
        Developer.log("[dev] HTMLFormElement.prototype rel 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLFormElement.rel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.relList = null;
Object.defineProperty(HTMLFormElement.prototype, "relList", {
    get: function relList() {
        Developer.log("[dev] HTMLFormElement.prototype relList 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.relList;
    },
    set: function relList(val) {
        Developer.log("[dev] HTMLFormElement.prototype relList 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLFormElement.relList = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.elements = null;
Object.defineProperty(HTMLFormElement.prototype, "elements", {
    get: function elements() {
        Developer.log("[dev] HTMLFormElement.prototype elements 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.elements;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLFormElement.length = 0;
Object.defineProperty(HTMLFormElement.prototype, "length", {
    get: function length() {
        Developer.log("[dev] HTMLFormElement.prototype length 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLFormElement.length;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(HTMLFormElement.prototype, "checkValidity", {
    value: function checkValidity() {
        Developer.log("[dev] HTMLFormElement.prototype checkValidity 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLFormElement.prototype.checkValidity);

Object.defineProperty(HTMLFormElement.prototype, "reportValidity", {
    value: function reportValidity() {
        Developer.log("[dev] HTMLFormElement.prototype reportValidity 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLFormElement.prototype.reportValidity);

Object.defineProperty(HTMLFormElement.prototype, "requestSubmit", {
    value: function requestSubmit() {
        Developer.log("[dev] HTMLFormElement.prototype requestSubmit 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLFormElement.prototype.requestSubmit);

Object.defineProperty(HTMLFormElement.prototype, "reset", {
    value: function reset() {
        Developer.log("[dev] HTMLFormElement.prototype reset 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLFormElement.prototype.reset);

Object.defineProperty(HTMLFormElement.prototype, "submit", {
    value: function submit() {
        Developer.log("[dev] HTMLFormElement.prototype submit 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLFormElement.prototype.submit);

// div标签创建方法(不需要new 直接调用就能创建了)
vmcore.memory.CreateElement["form"] = function () {
    var element = new class form { };
    element.__proto__ = HTMLFormElement.prototype;
    return element;
    
    // var element_proxy = new Proxy(element, {
    //     set: function (obj, prop, value, receiver) {
    //         Reflect.set(obj, prop, value);
    //         window[prop] = value;
    //         return true;
    //     }
    // })
    // return element_proxy;
}

