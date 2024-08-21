/* html标签 */

HTMLHtmlElement = function HTMLHtmlElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLHtmlElement);

Object.defineProperties(HTMLHtmlElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLHtmlElement",
        configurable: true
    }
});

HTMLHtmlElement.__proto__ = HTMLElement;
HTMLHtmlElement.prototype.__proto__ = HTMLElement.prototype;

// 初始化head标签
vmcore.memory.elements.html = new class html { };
vmcore.memory.elements.html.__proto__ = HTMLHtmlElement.prototype;
//---------------------------------------------------------------------
HTMLHtmlElement.prototype.localName = "html";
HTMLHtmlElement.prototype.nodeName = "HTML";
HTMLHtmlElement.prototype.tagName = "HTML";
//---------------------------------------------------------------------

vmcore.propertymanager.HTMLHtmlElement = {};

vmcore.propertymanager.HTMLHtmlElement.version = "";
Object.defineProperty(HTMLHtmlElement.prototype, "version", {
    get: function version() {
        Developer.log("[dev] HTMLHtmlElement.prototype version 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLHtmlElement.version;
    },
    set: function version(val) {
        Developer.log("[dev] HTMLHtmlElement.prototype version 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLHtmlElement.version = val;
    },
    enumerable: true,
    configurable: true,
});

