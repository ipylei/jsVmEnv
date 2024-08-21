
//在Document.js中有使用到
HTMLAllCollection = function HTMLAllCollection() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLAllCollection);

Object.defineProperties(HTMLAllCollection.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLAllCollection",
        configurable: true
    }
});

vmcore.propertymanager.HTMLAllCollection = {};

//----------------------------------------------------
vmcore.propertymanager.HTMLAllCollection.length = undefined;
Object.defineProperty(HTMLAllCollection.prototype, "length", {
    get: function length() {
        Developer.log("[dev] HTMLAllCollection.prototype length 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLAllCollection.length;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(HTMLAllCollection.prototype, "item", {
    value: function item() {
        Developer.log("[dev] HTMLAllCollection.prototype item 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLAllCollection.prototype.item);

Object.defineProperty(HTMLAllCollection.prototype, "namedItem", {
    value: function namedItem() {
        Developer.log("[dev] HTMLAllCollection.prototype namedItem 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLAllCollection.prototype.namedItem);
