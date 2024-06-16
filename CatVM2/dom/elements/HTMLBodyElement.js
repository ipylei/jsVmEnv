/* body标签 */
// HTMLBodyElement
HTMLBodyElement = function HTMLBodyElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(HTMLBodyElement);

Object.defineProperties(HTMLBodyElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLBodyElement",
        configurable: true
    }
});


//---------------------------------------------------------------------
HTMLBodyElement.prototype.appendChild = function appendChild(element) {
    if (element instanceof HTMLFormElement && element.id) {
        window.__proto__.__proto__[element.id] = element;
    }
}; catvm.func_set_native(HTMLBodyElement.prototype.appendChild);


//----------------------------------------------------------------------
HTMLBodyElement.__proto__ = HTMLElement;
HTMLBodyElement.prototype.__proto__ = HTMLElement.prototype;

// 初始化body标签
catvm.memory.elements.body = new class body { };
catvm.memory.elements.body.__proto__ = HTMLBodyElement.prototype;