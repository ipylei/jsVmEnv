//*
//WindowProperties存在但又不能直接访问
(() => {
    var WindowProperties = function WindowProperties() {

    }; catvm.func_set_native(WindowProperties);

    Object.defineProperties(WindowProperties.prototype, {
        [Symbol.toStringTag]: {
            value: "WindowProperties",
            configurable: true
        }
    });


    /*
        构建Window->WindowProperties的原型链，但现在WindowProperties在全局中是没有的!(所以在一个闭包中解决)
    */
    //WindowProperties->EventTarget的原型链
    WindowProperties.prototype.__proto__ = EventTarget.prototype;
    Window.prototype.__proto__ = WindowProperties.prototype;
}).call(this);
//*/
