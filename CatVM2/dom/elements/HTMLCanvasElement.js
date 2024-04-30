/* cavnas标签 */

function HTMLCanvasElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(HTMLCanvasElement);

Object.defineProperties(HTMLCanvasElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCanvasElement",
        configurable: true
    }
});

//--------------------------------------------------------
HTMLCanvasElement.prototype.getContext = function (mode) {
    debugger;
    if (mode == "2D") {
        return {};
    }
    if (mode == "webgl2") {
        return {};
    }
    return null;
}
//--------------------------------------------------------

HTMLCanvasElement.__proto__ = HTMLElement;
HTMLCanvasElement.prototype.__proto__ = HTMLElement.prototype;




// div标签创建方法(不需要new 直接调用就能创建了)
catvm.memory.htmlElements["canvas"] = function () {
    var element = new class canvas { };
    element.__proto__ = HTMLCanvasElement.prototype;
    return element;
}
