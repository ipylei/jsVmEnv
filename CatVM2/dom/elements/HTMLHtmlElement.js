/* html标签 */

function HTMLHtmlElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(HTMLHtmlElement);

Object.defineProperties(HTMLHtmlElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLHtmlElement",
        configurable: true
    }
});



HTMLHtmlElement.__proto__ = HTMLElement;
HTMLHtmlElement.prototype.__proto__ = HTMLElement.prototype;


// 初始化head标签
catvm.memory.elements.html = new class html { };
catvm.memory.elements.html.__proto__ = HTMLHtmlElement.prototype;