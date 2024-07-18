/* div标签 */

HTMLDivElement = function HTMLDivElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLDivElement);

Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDivElement",
        configurable: true
    }
});

//--------------------------------------------------------
HTMLDivElement.prototype.localName = "div"; 
HTMLDivElement.prototype.nodeName = "DIV";  
HTMLDivElement.prototype.tagName = "DIV";  

HTMLDivElement.prototype.align = "";
//--------------------------------------------------------
HTMLDivElement.__proto__ = HTMLElement;
HTMLDivElement.prototype.__proto__ = HTMLElement.prototype;


// div标签创建方法(不需要new 直接调用就能创建了)
vmcore.memory.htmlElements["div"] = function () {
    var element = new class div { };
    element.__proto__ = HTMLDivElement.prototype;
    return element;
}

