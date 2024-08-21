HTMLCollection = function HTMLCollection() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLCollection);

Object.defineProperties(HTMLCollection.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCollection",
        configurable: true
    }
});

vmcore.propertymanager.HTMLCollection = {};


//在Document.js中有使用到
vmcore.propertymanager.HTMLCollection.length = "";
Object.defineProperty(HTMLCollection.prototype, "length", {
    get: function length() {
        Developer.log("[dev] HTMLCollection.prototype length 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLCollection.length;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(HTMLCollection.prototype, "item", {
    value: function item() {
        Developer.log("[dev] HTMLCollection.prototype item 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLCollection.prototype.item);

Object.defineProperty(HTMLCollection.prototype, "namedItem", {
    value: function namedItem() {
        Developer.log("[dev] HTMLCollection.prototype namedItem 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLCollection.prototype.namedItem);
