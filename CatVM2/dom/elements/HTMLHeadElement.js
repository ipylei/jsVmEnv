/* head标签 */
function HTMLHeadElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(HTMLHeadElement);

Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLHeadElement",
        configurable: true
    }
});



HTMLHeadElement.__proto__ = HTMLElement;
HTMLHeadElement.prototype.__proto__ = HTMLElement.prototype;


// 初始化head标签
catvm.memory.elements.head = new class head { };
catvm.memory.elements.head.__proto__ = HTMLHeadElement.prototype;