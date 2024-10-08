debugger;
debugger;

if (this.global) {
    window = global; //window比较特殊
    delete global; //删除global对象
} else {
    window = this;
}
self = top = parent = frames = window;
debugger;
var vmcore = {};

//框架运行内存
vmcore.memory = {
    config: {
        print: false,
        proxy: false,  //是否给document, navagator等对象添加代理(注：添加代理后只是便于调试)
        stack: false //代理时是否打印调用栈
    }
}; //默认关闭打印



;;;
//加;防止前面没有分号导致匿名函数报错
(function () {
    "use strict";

    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + ''.toString(36))));

    //类型为function且有属性"Symbol()"时，就直接使用属性(为字符串)this["Symbol()"]，否则使用原来的toString()方法！
    const myToString = function () {
        // return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
        if (typeof this == 'function') {
            if (this[myFunction_toString_symbol]) {
                return this[myFunction_toString_symbol];
            }
        }
        return $toString.call(this);
    };

    //一个闭包函数
    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            "configurable": true,
            "writable": true,
            "value": value
        })
    };

    //删除原型链上的toString; 即Function.prototype的toString
    delete Function.prototype['toString'];

    //自己再重新给Function.prototype定义一个本地实现的toString
    //当某个方法(对象)的toString方法时，会调用【myToString】方法
    set_native(Function.prototype, "toString", myToString);

    //套个娃，保护我们上一步定义的toString，即给Function.prototype.toString再加一个属性
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }");

    //导出函数到globalThis
    vmcore.func_set_native = (func) => {
        //在func.toString()时，会调用Function.prototype.toString方法(即重写后的myToString方法)， 
        //里面会判断有无该属性[myFunction_toString_symbol]，有就返回该属性[myFunction_toString_symbol]，没有就调用最原始的toString()方法。
        // set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol, func.name || ''}() { [native code] }`);
        set_native(func, myFunction_toString_symbol, `function ${func.name || ''}() { [native code] }`);
    }

}).call(window);

var Developer = {
    // log: console.log
    log: ilog
};

/* hook console.log
old_console_log = console.log;
console.log = function () {
    const safeArgs = [...arguments].map(function (arg) {
        try {
            // 尝试将参数转换为字符串
            return JSON.stringify(arg);
        } catch (e) {
            // 如果转换失败，返回参数本身
            return String(arg);
        }
    });
    ilog(...safeArgs);

    return old_console_log.apply(this, arguments);
}; 
*/
// vmcore.func_set_native(console.log);

// Error日志监控
Error.prepareStackTrace = function (error, structuredStackTrace) {
    Developer.log("有报错, 错误已打印，可以考虑在此处拦截\n", error)
    // error.stack = error.stack.replace(/vm.js/g, "<anonymous>")
    // Developer.log("有报错,已拦截，替换为\n", error.stack)
    return error
};


vmcore.propertymanager = {};        //用来保存所有的访问器属性
vmcore.memory.cookie_copy = {};  //用来保存cookie值，以object格式展示，而不是String

//游离的标签
vmcore.memory.elements = {};
//生成器，在Document.js中document.all中使用到
vmcore.memory.elements[Symbol.iterator] = function* () {
    for (var element in this) {
        yield this[element];
    }
}
// vmcore.memory.elements.head  //head标签
// vmcore.memory.elements.html  //html标签

//标签名及其函数！ 如div: funciton(){}, 需要在bom和dom之前执行，才不得不选择添加在此处
//作用：绑定多类方法：vmcore.memory.CreateElement[tag]，然后再Document.js中Document.prototype.createElement中使用(其实是HTMLDocument.js中使用)
vmcore.memory.CreateElement = {};
// vmcore.memory.CreateElement.div = function(){}; //1.在这里实现；(优先)2:在div标签对应的构造函数文件中实现(HTMLDivElement)； 3.在users/u_init.js中实现
// vmcore.memory.CreateElement.a = function(){};   //1.在这里实现；(优先)2:在a标签对应的构造函数文件中实现(HTMLAnchorElement)；3.在users/u_init.js中实现


vmcore.memory.listeners = {}; //里面保存的是各个事件绑定的回调方法(addEventListener), 详情见EventTarget.js； 更好的构造可以参考MDN.
// listeners = {"type1":[], "type2":[]}
/* 参考：41->00:59:08
绑定到这里而非某个标签上，主要是将方法聚合到一起供以后调用。如鼠标点击、滑动，这里就可以主动模拟执行了。因为没办法做到鼠标点击、滑动，从而触发该事件。
    思考下改到某个标签上是否也可以呢? 应该是不行。
        因为添加事件的时刻不固定，是源js中添加的。
        事件触发时你不能控制某个标签元素触发，除非将标签元素也放到全局中来直接可以找到。
*/


/*
诸如location、screen、navigator等对象是作为window的属性存在，所以无所谓，
但其他临时对象，如用来存放如下对象
    navigator.plugins   => vmcore.memory.PluginArray._array      (类型:PluginArray)
    navigator.mimeTypes => vmcore.memory.MimeTypeArray._array    (类型:MimeTypeArray)

如果直接绑定到Navigator.prototype上的话，依赖关系比较复杂：
    navigator.plugins   依赖 PluginArray.js
    navigator.mimeTypes 依赖 MimeTypeArray.js

    PluginArray.prototype[Symbol.iterator]         依赖  Navigator.js
    MimeTypeArray.prototype[Symbol.iterator]       依赖  Navigator.js

所以用一个中间变量来保存： 
    vmcore.memory.PluginArray._array
    vmcore.memory.MimeTypeArray._array
*/
vmcore.memory.Plugin = {           // 游离的Plugin实例对象，主要是绑定方法vmcore.memory.Plugin.$new
    // "$new": function () { }    
};

vmcore.memory.PluginArray = {      // 游离的PluginArray实例对象，主要是绑定属性vmcore.memory.PluginArray._array
    // "_array": {}               
};

vmcore.memory.MimeType = {         // 游离的MimeType实例对象，主要是绑定方法vmcore.memory.MimeType.$new
    // "$new": function () { }    
};
vmcore.memory.MimeTypeArray = {    // 游离的MimeTypeArray实例对象，主要是绑定属性vmcore.memory.MimeTypeArray._array
    // "_array": {}               
};