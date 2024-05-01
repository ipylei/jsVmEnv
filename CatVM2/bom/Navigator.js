Navigator = function Navigator() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(Navigator);

Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true
    },

    webdriver: {
        configurable: true,
        enumerable: true,
        get: function () {
            return false;
        },
        set: undefined
    }
});

//----------------------------------------------------------------------------------
/*
只存放Navigator.prototype对象不能直接访问，但实例能直接访问的属性! 
因为有的属性不准原型直接访问，却准实例访问。方法可能亦如此，但可以直接在里面判断this，而且可能还需要保护函数。 
而属性不行，只能通过getter和setter即访问器属性的形式来判断this)
*/
Navigator.totalProp = {
    language: 'zh-CN',
    languages: ['zh-CN', 'zh'],
    platform: 'Win32',

    vendor: 'Google Inc.',
    doNotTrack: null,

    // userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',

    //plugins赋值
    plugins: catvm.memory.PluginArray._array,
    mimeTypes: catvm.memory.MimeTypeArray._array
}

/* 原型对象 =》属性 */
//一个个定义getter属性太麻烦了，在这里遍历时统一定义吧
for (var prop in Navigator.totalProp) {

    Navigator.prototype.__defineGetter__(prop, (function (param) {
        return function () {
            // if (this == Navigator.prototype) {
            if (this instanceof Navigator) {
                return Navigator.totalProp[param];
            } else {
                throw new TypeError("Illegal invocation");
            }
        };
    })(prop)
    );


    /*     
        Navigator.prototype.__defineSetter__(prop, function (newValue) {
            console.log("----->", prop, newValue);  //执行时是取不到对应的prop的，需要使用一个闭包实现
            Navigator.totalProp[prop] = newValue;
        }); 
    */


    Navigator.prototype.__defineSetter__(prop, (function (param) {
        return function (newValue) {
            Navigator.totalProp[param] = newValue;
        }
    })(prop));
}


/* 原型对象 =》方法 */
Navigator.prototype.javaEnabled = function javaEnabled() {
    return false;
}; catvm.func_set_native(Navigator.prototype.javaEnabled);
//----------------------------------------------------------------------------------


// 初始化含natigator对象
navigator = new class navigator { };
navigator.__proto__ = Navigator.prototype;
