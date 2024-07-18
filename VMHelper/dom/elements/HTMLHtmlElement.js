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


//---------------------------------------------------------------------
HTMLHtmlElement.prototype.localName = "html"; 
HTMLHtmlElement.prototype.nodeName = "HTML";  
HTMLHtmlElement.prototype.tagName = "HTML";  
//---------------------------------------------------------------------

HTMLHtmlElement.__proto__ = HTMLElement;
HTMLHtmlElement.prototype.__proto__ = HTMLElement.prototype;


// 初始化head标签
vmcore.memory.elements.html = new class html { };
vmcore.memory.elements.html.__proto__ = HTMLHtmlElement.prototype;