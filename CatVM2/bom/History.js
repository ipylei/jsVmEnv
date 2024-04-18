function History() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(History);

Object.defineProperties(History.prototype, {
    [Symbol.toStringTag]: {
        value: "History",
        configurable: true
    }
});

//--------------------------------------------------------
History.prototype.back = function back() { debugger; }; catvm.func_set_native(History.prototype.back);
//--------------------------------------------------------

history = new class history { };
history.__proto__ = History.prototype;


