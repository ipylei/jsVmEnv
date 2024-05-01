PluginArray = function PluginArray() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(PluginArray);

Object.defineProperties(PluginArray.prototype, {
    [Symbol.toStringTag]: {
        value: "PluginArray",
        configurable: true,
        enumerable: false
    },
});

PluginArray.prototype.__defineGetter__("length", function(){
/*     if(this == PluginArray.prototype){
        throw new TypeError("Illegal invocation");
    }else{
        debugger;
        return Object.keys(this).length;
    } */

    if(this instanceof PluginArray){
        return Object.keys(this).length;
    }else{
        throw new TypeError("Illegal invocation");
    }

})

PluginArray.prototype[Symbol.iterator] = function* values() {
    debugger;
    for (let item in catvm.memory.PluginArray._array){
        yield item;
    }
}; catvm.func_set_native(PluginArray.prototype[Symbol.iterator]);


//---------------------------------------------------------------
PluginArray.prototype.length = 0;

PluginArray.prototype.item = function item(index) {
    debugger;
    return this[index];
}; catvm.func_set_native(PluginArray.prototype.item);

PluginArray.prototype.namedItem = function namedItem(key) {
    debugger;
    return this[key];
}; catvm.func_set_native(PluginArray.prototype.namedItem);

PluginArray.prototype.refresh = function refresh() {
    debugger;
}; catvm.func_set_native(PluginArray.prototype.refresh);
//---------------------------------------------------------------




//绑定到内存上，避免污染全局变量, 因为_plugins不是window的属性而是navigator的属性，且又不想在这里使用navigator
//(在Navigator.js中绑定 mimeTypes: catvm.memory.PluginArray._array)
catvm.memory.PluginArray._array = {};

//注意：指定原型后的属性和方法就不能变了！ 除非自己再实现一个自己的
catvm.memory.PluginArray._array.__proto__ = PluginArray.prototype;
