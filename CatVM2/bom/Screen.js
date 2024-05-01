Screen = function Screen() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(Screen);

Object.defineProperties(Screen.prototype, {
    [Symbol.toStringTag]: {
        value: "Screen",
        configurable: true
    }
});

//-------------------------------------------- 
//待完善，原型访问会报错，实例访问正常
Screen.prototype.availHeight = 1027
Screen.prototype.availWidth = 1707
Screen.prototype.availLeft = 0
Screen.prototype.availTop = 0

Screen.prototype.colorDepth = 24
Screen.prototype.height = 1067
Screen.prototype.width = 1707

Screen.prototype.colorDepth = 24
//--------------------------------------------
screen = new class screen { };
screen.__proto__ = Screen.prototype;


