Window = function Window() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");

}; vmcore.func_set_native(Window);

Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    },

    PERSISTENT: {
        configurable: false,
        enumerable: true,
        value: 1,
        writable: false
    },

    TEMPORARY: {
        configurable: false,
        enumerable: true,
        value: 0,
        writable: false
    }

});

//--------------------------------------------------------
//补window额外的属性或方法
window["outerHeight"] = 824;
window["outerWidth"] = 1536;
// window["outerHeight"] = 1027;
// window["outerWidth"] = 1707;

window.open = function open() { debugger }; vmcore.func_set_native(window.open);
window.setTimeout = function setTimeout(func, delay) {
    console.log(">>>>>>>>> 注意: setTimeout被调用!", delay, func);

    //其中func可能是一个方法 也可能是一段文本
    if (typeof func == "string") {
        eval(func)
    } else {
        func()
    }
    //生成uuid, 并保存到内存
    return 1;
}; vmcore.func_set_native(window.setTimeout);

window.setInterval = function(func, delay){
    console.log(">>>>>>>>> 注意: setInterval被调用!", delay, func);
    setTimeout(func, delay);
    return 1;
}; vmcore.func_set_native(window.setInterval);

window.chrome = {
    app: {},
    csi: function () { },
    loadTimes: function () { },
    runtime: {}
};

window.DeviceOrientationEvent = function DeviceOrientationEvent() { debugger; }; vmcore.func_set_native(window.DeviceOrientationEvent);
window.DeviceMotionEvent = function DeviceMotionEvent() { debugger; }; vmcore.func_set_native(window.DeviceMotionEvent);
//--------------------------------------------------------


//补完window的属性或方法后，再构建起window->Window的原型链
window.__proto__ = Window.prototype;
// Window.prototype.__proto__ = WindowProperties.prototype;  //放到WindowProperties.js中去补