var Developer = {
    // log: console.log
    log: vmcore.memory.config.devlog ? ilog : function () { }
};


/* hook console.log
old_console_log = console.log;
console.log = function () {
    const safeArgs = [...arguments].map(function (arg) {
        try {
            // 尝试将参数转换为字符串
            return JSON.stringify(arg);
        } catch (e) {
            // 如果转换失败，返回参数本身
            return String(arg);
        }
    });
    ilog(...safeArgs);

    return old_console_log.apply(this, arguments);
};
vmcore.func_set_native(console.log);
*/


// Error日志监控
// Error.prepareStackTrace = function (error, structuredStackTrace) {
//     Developer.log("有报错, 错误已打印，可以考虑在此处拦截\n", error)
//     // error.stack = error.stack.replace(/vm.js/g, "<anonymous>")
//     // Developer.log("有报错,已拦截，替换为\n", error.stack)
//     return error
// };
