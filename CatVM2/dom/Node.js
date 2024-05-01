Node = function Node() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(Node);

Object.defineProperties(Node.prototype, {
    [Symbol.toStringTag]: {
        value: "Node",
        configurable: true
    }
});

// -------------------------------------------------------------
Node.prototype.__defineGetter__("firstChild", function () {
    debugger;
    return this.firstChild_copy ? this.firstChild : { href: "" };

});
Node.prototype.__defineSetter__("firstChild", function (node) {
    debugger;
    this.firstChild = node;
});

Node.prototype.insertBefore = function insertBefore(newNode, referenceNode) {
    /*
    语法：
        var insertedNode = parentNode.insertBefore(newNode, referenceNode);
        insertedNode 被插入节点 (newNode)
        parentNode 新插入节点的父节点
        newNode 用于插入的节点
        referenceNode newNode 将要插在这个节点之前 
     */
    debugger
    return newNode;
}; catvm.func_set_native(Node.prototype.insertBefore);

// -------------------------------------------------------------
Node.__proto__ = EventTarget;
Node.prototype.__proto__ = EventTarget.prototype;