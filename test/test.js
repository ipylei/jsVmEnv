/*
打印行号
若Frida Hook太多时，不知道是哪触发的，可以执行这个。
*/
Object.defineProperty(global, '__stack', {
    get: function () {
        let orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function (_, stack) { return stack; };
        let err = new Error();
        Error.captureStackTrace(err, arguments.callee);
        let stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__line', {
    get: function () {
        return __stack[1].getLineNumber();
    }
});

console.log(__line)
