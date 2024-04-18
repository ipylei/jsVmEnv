function Node() {
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
Node.__proto__ = EventTarget;
Node.prototype.__proto__ = EventTarget.prototype;

Node.prototype.__defineGetter__("firstChild", function () {
    debugger;
    return this.firstChild_copy ? this.firstChild : { href: "" };

});
Node.prototype.__defineSetter__("firstChild", function (node) {
    debugger;
    this.firstChild = node;
});
// -------------------------------------------------------------
