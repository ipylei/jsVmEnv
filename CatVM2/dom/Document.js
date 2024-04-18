function Document() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(Document);

Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});

// -------------------------------------------------------------
//创建元素(标签)，根据名称去创建
Document.prototype.createElement = function createElement(tagName) {
    var tagName = ("" + tagName).toLowerCase();
    // 在这里调用对应的方法统一创建对应标签，而不是写很多个if...else if等，那样太麻烦也太有限了。
    if (!catvm.memory.htmlElements[tagName]) {
        //还没有实现的，需要在如HTMLDivElement.js中实现
        debugger;
        return null;
    }
    debugger;
    //对创建的对象挂上代理
    // return catvm.memory.htmlElements[tagName]();
    return catvm.proxy(catvm.memory.htmlElements[tagName]());
}; catvm.func_set_native(Document.prototype.createElement);

//查找元素，用id匹配当前环境内存中已有的Element，然后返回
Document.prototype.getElementById = function getElementById(id) {
    // debugger;
    console.log("Document.prototype.getElementById()被调用！调用对象:", this);
    return null;
}; catvm.func_set_native(Document.prototype.getElementById);
// -------------------------------------------------------------

Document.__proto__ = Node;
Document.prototype.__proto__ = Node.prototype;
