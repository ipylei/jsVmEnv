History = function History() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(History);

Object.defineProperties(History.prototype, {
    [Symbol.toStringTag]: {
        value: "History",
        configurable: true
    }
});

history = new class history { };
history.__proto__ = History.prototype;


//--------------------------------------------------------
History.prototype.back = function back() { debugger; }; vmcore.func_set_native(History.prototype.back);
//--------------------------------------------------------



