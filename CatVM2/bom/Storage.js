function Storage() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(Storage);

Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {
        value: "Storage",
        configurable: true
    }
});



//-------------------------------------------------------------------
//Storage.prototype.length = 0;
Storage.prototype.__defineGetter__("length", function () {
    return Object.keys(this).length;
})

Storage.prototype.getItem = function getItem(key) {
    return this[key] || null;
}; catvm.func_set_native(Storage.prototype.getItem);

Storage.prototype.setItem = function setItem(key, value) {
    this[key] = value;
}; catvm.func_set_native(Storage.prototype.setItem);

Storage.prototype.removeItem = function removeItem(key) {
    delete this[key];
}; catvm.func_set_native(Storage.prototype.removeItem);

Storage.prototype.clear = function clear() {
    var propArray = Object.keys(this);
    for (var prop of propArray) {
        delete this[prop];
    }
}; catvm.func_set_native(Storage.prototype.clear);

Storage.prototype.key = function key(index) {
    // var propArray = Object.getOwnPropertyNames(this);
    var propArray = Object.keys(this);
    var prop = propArray[index];
    return prop ? this[prop] : null;

}; catvm.func_set_native(Storage.prototype.key);
//-------------------------------------------------------------------


localStorage = new class localStorage { };
localStorage.__proto__ = Storage.prototype;

sessionStorage = new class sessionStorage { };
sessionStorage.__proto__ = Storage.prototype;
