/* form标签 */

HTMLFormElement = function HTMLFormElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLFormElement);

Object.defineProperties(HTMLFormElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLFormElement",
        configurable: true
    }
});

//--------------------------------------------------------
HTMLFormElement.prototype.localName = "form"; 
HTMLFormElement.prototype.nodeName = "FORM";  
HTMLFormElement.prototype.tagName = "FORM";   
//--------------------------------------------------------
HTMLFormElement.__proto__ = HTMLElement;
HTMLFormElement.prototype.__proto__ = HTMLElement.prototype;


// div标签创建方法(不需要new 直接调用就能创建了)
vmcore.memory.htmlElements["form"] = function () {
    var element = new class form { };
    element.__proto__ = HTMLFormElement.prototype;
    return element;
    
    // var element_proxy = new Proxy(element, {
    //     set: function (obj, prop, value, receiver) {
    //         Reflect.set(obj, prop, value);
    //         window[prop] = value;
    //         return true;
    //     }
    // })
    // return element_proxy;
}

