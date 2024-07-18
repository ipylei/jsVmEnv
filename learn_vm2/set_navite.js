(() => {
    "use strict";
    console.log("---",this);

    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol( '('.concat('',')_',(Math.random()+''.toString(36))) );
    const myToString = function(){
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };
    
    function set_native(func, key, value){
        Object.defineProperty(func, key, {
            "enumerable": false,
            "configurable": true,
            "writable": true,
            "value":value
        })
    };

    //删除原型链上的toString;
    delete Function.prototype['toString']; 

    //自己定义一个getter方法， 即访问器属性toString
    set_native(Function.prototype, "toString", myToString);
    //套个娃，保护我们上一步定义的toString
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }");

    
    //导出函数到globalThis
    this.func_set_native = (func) =>{
        set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol, func.name || ''}() { [native code] }`);
    }

}).call(this);



/*
function local_func1(){
    console.log("----------");
}
this.func_set_native(local_func1);

var local_func2 = function(){
    console.log("--------------");
}
this.func_set_native(local_func2);

var local_func3 = function local_func(){
    console.log("--------------");
}
this.func_set_native(local_func3);
*/
