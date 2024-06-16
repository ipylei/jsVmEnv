Element = function Element() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(Element);

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
Element.prototype.__defineSetter__("innerHTML", function (html) {
    debugger;
    this.innerHTML_copy = html;
    this.firstChild = {};
});
//--------------------------------------------------------

Element.__proto__ = Node;
Element.prototype.__proto__ = Node.prototype;
