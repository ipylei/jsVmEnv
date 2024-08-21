Screen = function Screen() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(Screen);

Object.defineProperties(Screen.prototype, {
    [Symbol.toStringTag]: {
        value: "Screen",
        configurable: true
    }
});
screen = new class screen { };
screen.__proto__ = Screen.prototype;

vmcore.propertymanager.Screen = {};

//-------------------------------------------- 
//待完善，原型访问会报错，实例访问正常
vmcore.propertymanager.Screen.availWidth = 1707;
Object.defineProperty(Screen.prototype, "availWidth", {
    get: function availWidth() {
        Developer.log("[dev] Screen.prototype availWidth 描述符 get 被调用了");
        return vmcore.propertymanager.Screen.availWidth;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Screen.availHeight = 1027;
Object.defineProperty(Screen.prototype, "availHeight", {
    get: function availHeight() {
        Developer.log("[dev] Screen.prototype availHeight 描述符 get 被调用了");
        return vmcore.propertymanager.Screen.availHeight;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Screen.width = 1707;
Object.defineProperty(Screen.prototype, "width", {
    get: function width() {
        Developer.log("[dev] Screen.prototype width 描述符 get 被调用了");
        return vmcore.propertymanager.Screen.width;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Screen.height = 1067;
Object.defineProperty(Screen.prototype, "height", {
    get: function height() {
        Developer.log("[dev] Screen.prototype height 描述符 get 被调用了");
        return vmcore.propertymanager.Screen.height;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Screen.colorDepth = 24;
Object.defineProperty(Screen.prototype, "colorDepth", {
    get: function colorDepth() {
        Developer.log("[dev] Screen.prototype colorDepth 描述符 get 被调用了");
        return vmcore.propertymanager.Screen.colorDepth;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Screen.pixelDepth = 24;
Object.defineProperty(Screen.prototype, "pixelDepth", {
    get: function pixelDepth() {
        Developer.log("[dev] Screen.prototype pixelDepth 描述符 get 被调用了");
        return vmcore.propertymanager.Screen.pixelDepth;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Screen.availLeft = 0;
Object.defineProperty(Screen.prototype, "availLeft", {
    get: function availLeft() {
        Developer.log("[dev] Screen.prototype availLeft 描述符 get 被调用了");
        return vmcore.propertymanager.Screen.availLeft;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Screen.availTop = 0;
Object.defineProperty(Screen.prototype, "availTop", {
    get: function availTop() {
        Developer.log("[dev] Screen.prototype availTop 描述符 get 被调用了");
        return vmcore.propertymanager.Screen.availTop;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Screen.orientation = null;
Object.defineProperty(Screen.prototype, "orientation", {
    get: function orientation() {
        Developer.log("[dev] Screen.prototype orientation 描述符 get 被调用了");
        return vmcore.propertymanager.Screen.orientation;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Screen.onchange = null;
Object.defineProperty(Screen.prototype, "onchange", {
    get: function onchange() {
        Developer.log("[dev] Screen.prototype onchange 描述符 get 被调用了");
        return vmcore.propertymanager.Screen.onchange;
    },
    set: function onchange(val) {
        Developer.log("[dev] Screen.prototype onchange 描述符 set 被调用了");
        vmcore.propertymanager.Screen.onchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Screen.isExtended = true;
Object.defineProperty(Screen.prototype, "isExtended", {
    get: function isExtended() {
        Developer.log("[dev] Screen.prototype isExtended 描述符 get 被调用了");
        return vmcore.propertymanager.Screen.isExtended;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});
//--------------------------------------------


