const ivm = require('isolated-vm');

// 创建一个新的隔离实例
const isolate = new ivm.Isolate({ memoryLimit: 128 });
const context = isolate.createContextSync();
const jail = context.global;
jail.setSync('global', jail.derefInto());

// 编译并运行隔离环境中的脚本，这个脚本定义了一个函数
const script = isolate.compileScriptSync(`
  global.exposedFunction = function exposedFunction(arg) {
    return 'Hello, ' + arg;
  }
`);




/* 调用方式1
const isolatedFunctionReference = script.runSync(context);
console.log(isolatedFunctionReference);

var ret = isolatedFunctionReference("word");
console.log(ret);
//*/


//* 调用方式2
script.runSync(context);
const isolatedFunctionReference = jail.getSync('exposedFunction', { reference: true });
// const isolatedFunctionReference = jail.getSync('exposedFunction');
console.log("===========", isolatedFunctionReference);

// 在Node环境中创建一个代理函数，这个函数将调用隔离环境中的函数
function callIsolatedFunctionSync(arg) {
    // 调用隔离环境中的函数，并传入参数
    const result = isolatedFunctionReference.applySync(undefined, [new ivm.ExternalCopy(arg).copyInto()], { arguments: { copy: true } });
    return result;
}

// 使用暴露的同步函数
try {
    const result = callIsolatedFunctionSync('world');
    console.log(result); // 应该输出 "Hello, world"
} catch (error) {
    console.error('Error calling the isolated function:', error);
}
//*/