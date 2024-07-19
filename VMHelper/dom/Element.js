Element = function Element() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(Element);

Object.defineProperties(Element.prototype, {
    [Symbol.toStringTag]: {
        value: "Element",
        configurable: true
    }
});


//--------------------------------------------------------
Element.prototype.localName = ""; //FORM
Element.prototype.nodeName = "";  //FORM
Element.prototype.tagName = "";   //FORM


Element.prototype.__defineGetter__("innerHTML", function () {
    debugger;
    return this.innerHTML_copy ? this.innerHTML_copy : "";

});
Element.prototype.__defineSetter__("innerHTML", function (val) {
    debugger;
    debugger;
    debugger;
    this.innerHTML_copy = val;

    if (val.indexOf('<a href') >= 0) {
        var tag = vmcore.memory.htmlElements["a"]();
        tag.href = "https://www.python-spider.com/challenge/11";
        this.firstChild = tag;
    } else {
        this.firstChild = null;
    }
});
//--------------------------------------------------------

Element.__proto__ = Node;
Element.prototype.__proto__ = Node.prototype;
