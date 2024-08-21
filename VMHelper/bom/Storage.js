Storage = function Storage() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(Storage);

Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {
        value: "Storage",
        configurable: true
    }
});

localStorage = new class localStorage { };
localStorage.__proto__ = Storage.prototype;

sessionStorage = new class sessionStorage { };
sessionStorage.__proto__ = Storage.prototype;


//-------------------------------------------------------------------
Object.defineProperty(Storage.prototype, "length", {
    set: undefined,
    get: function length() {
        Developer.log("[dev] Storage.prototype length 描述符 get 被调用了", this.constructor.name);
        return Object.keys(this).length;
    },
    configurable: true,
    enumerable: true
});


Storage.prototype.getItem = function getItem(key) {
    Developer.log("[dev] Storage.prototype getItem 描述符 value 被调用了", key, this.constructor.name);
    return this[key] || null;
}; vmcore.func_set_native(Storage.prototype.getItem);

Storage.prototype.setItem = function setItem(key, value) {
    Developer.log("[dev] Storage.prototype setItem 描述符 value 被调用了", key, value, this.constructor.name);
    this[key] = value;
}; vmcore.func_set_native(Storage.prototype.setItem);

Storage.prototype.removeItem = function removeItem(key) {
    Developer.log("[dev] Storage.prototype removeItem 描述符 value 被调用了", key, this.constructor.name);
    delete this[key];
}; vmcore.func_set_native(Storage.prototype.removeItem);

Storage.prototype.clear = function clear() {
    Developer.log("[dev] Storage.prototype clear 描述符 value 被调用了", this.constructor.name);
    var propArray = Object.keys(this);
    for (var prop of propArray) {
        delete this[prop];
    }
}; vmcore.func_set_native(Storage.prototype.clear);

Storage.prototype.key = function key(index) {
    Developer.log("[dev] Storage.prototype key 描述符 value 被调用了", index, this.constructor.name);
    // var propArray = Object.getOwnPropertyNames(this);
    var propArray = Object.keys(this);
    var prop = propArray[index];
    return prop ? this[prop] : null;

}; vmcore.func_set_native(Storage.prototype.key);
//-------------------------------------------------------------------

