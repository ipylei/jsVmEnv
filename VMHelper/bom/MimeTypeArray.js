MimeTypeArray = function MimeTypeArray() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(MimeTypeArray);

Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeTypeArrayArray",
        configurable: true,
        enumerable: false
    },
});

//绑定到内存上，避免污染全局变量, 因为不是window的属性而是navigator的属性, 但是又不想在这里使用navigator
//(在Navigator.js中绑定 mimeTypes: vmcore.memory.MimeTypeArray._array)
vmcore.memory.MimeTypeArray._array = {};
//注意：指定原型后的属性和方法就不能变了！ 除非自己再实现一个自己的
vmcore.memory.MimeTypeArray._array.__proto__ = MimeTypeArray.prototype;


//-------------------------------------------------------------
MimeTypeArray.prototype[Symbol.iterator] = function* values() {
    debugger;
    for(let item in vmcore.memory.MimeTypeArray._array){
        yield item;
    }
}; vmcore.func_set_native(MimeTypeArray.prototype[Symbol.iterator]);


//---------------------------------------------------------
MimeTypeArray.prototype.__defineGetter__("length", function () {
    if (this instanceof MimeTypeArray) {
        return Object.keys(this).length;
    } else {
        throw new TypeError("Illegal invocation");
    }

})
MimeTypeArray.prototype.item = function item(index) {
    return this[index];
}; vmcore.func_set_native(MimeTypeArray.prototype.item);

MimeTypeArray.prototype.namedItem = function namedItem(key) {
    return this[key];
}; vmcore.func_set_native(MimeTypeArray.prototype.namedItem);
//---------------------------------------------------------



