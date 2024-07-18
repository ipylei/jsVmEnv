/* head标签 */
HTMLHeadElement = function HTMLHeadElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLHeadElement);

Object.defineProperties(HTMLHeadElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLHeadElement",
        configurable: true
    }
});


HTMLHeadElement.prototype.localName = "head"; 
HTMLHeadElement.prototype.nodeName = "HEAD";  
HTMLHeadElement.prototype.tagName = "HEAD";  


HTMLHeadElement.__proto__ = HTMLElement;
HTMLHeadElement.prototype.__proto__ = HTMLElement.prototype;


// 初始化head标签
vmcore.memory.elements.head = new class head { };
vmcore.memory.elements.head.__proto__ = HTMLHeadElement.prototype;