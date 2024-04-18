function Navigator() {
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

//--------------------------------------------
/*
只存放Navigator.prototype对象不能直接访问，但实例能直接访问的属性! 
因为有的属性不准原型直接访问，却准实例访问。方法可能亦如此，但可以直接在里面判断this，而且可能还需要保护函数。 
而属性不行，只能通过getter和setter即访问器属性的形式来判断this)

数据属性正常设置
*/
Navigator.totalProp = {
    languages: ['zh-CN', 'zh'],
    vendor: 'Google Inc.',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',

    //plugins赋值
    plugins: catvm.memory.PluginArray._array,
    mimeTypes: catvm.memory.MimeTypeArray._array
}


// Navigator.prototype. = [];
// Navigator.prototype.languages = ['zh-CN', 'zh'];
// Navigator.prototype.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36';
//--------------------------------------------


//挨个定义getter属性太麻烦了，在这里遍历时统一定义吧
for (var prop in Navigator.totalProp) {
    var tempValue = Navigator.totalProp[prop];

    //第二个参数是一个闭包，外层的自执行函数return返回的其实还是一个匿名函数
    Navigator.prototype.__defineGetter__(prop, (function (param) {
        return function () {
            if (this == Navigator.prototype) {
                throw new TypeError("Illegal invocation");
            } else {
                return param; //param就是传进来的tempValue
            }
        };
    })(tempValue)
    
    );

}

navigator = new class navigator { };
navigator.__proto__ = Navigator.prototype;


