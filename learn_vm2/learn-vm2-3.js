const { VM} = require('vm2');


/*
timeout: 以毫秒为单位的脚本超时。
sandbox: VM的全局对象(this)。
eval: 如果设置为 false，任何对 eval 或函数构造函数（Function、GeneratorFunction 等）的调用都将抛出 EvalError（默认值：true）。
wasm: 如果设置为 false，任何编译 WebAssembly 模块的尝试都会抛出 WebAssembly.CompileError（默认值：true）。
fixAsync: 如果设置为true任何使用异步运行代码的尝试将抛出VMError（默认值：false）。
*/

const vm = new VM({sandbox: {_name:"leizi"}});