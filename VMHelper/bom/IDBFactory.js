IDBFactory = function IDBFactory() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(IDBFactory);

Object.defineProperties(IDBFactory.prototype, {
    [Symbol.toStringTag]: {
        value: "IDBFactory",
        configurable: true
    }
});

indexedDB = new class indexedDB { };
indexedDB.__proto__ = IDBFactory.prototype;


//-----------------------------------------------------
Object.defineProperty(IDBFactory.prototype, "cmp", {
    value: function cmp() {
        Developer.log("[dev] IDBFactory.prototype cmp 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(IDBFactory.prototype.cmp);

Object.defineProperty(IDBFactory.prototype, "databases", {
    value: function databases() {
        Developer.log("[dev] IDBFactory.prototype databases 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(IDBFactory.prototype.databases);

Object.defineProperty(IDBFactory.prototype, "deleteDatabase", {
    value: function deleteDatabase() {
        Developer.log("[dev] IDBFactory.prototype deleteDatabase 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(IDBFactory.prototype.deleteDatabase);

Object.defineProperty(IDBFactory.prototype, "open", {
    value: function open() {
        Developer.log("[dev] IDBFactory.prototype open 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(IDBFactory.prototype.open);
