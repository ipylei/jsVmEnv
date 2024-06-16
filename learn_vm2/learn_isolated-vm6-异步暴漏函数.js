const ivm = require('isolated-vm');

// 创建一个新的隔离实例
const isolate = new ivm.Isolate({ memoryLimit: 128 });
const context = isolate.createContextSync();
const jail = context.global;
jail.setSync('global', jail.derefInto());

// 在隔离环境中定义一个函数
const fnReference = await context.evalClosure(`global.fn = function(arg) {
  return 'Hello, ' + arg;
}`, [], { reference: true });

// 在主Node环境中创建一个函数，它实际上调用的是隔离环境中的函数
function callIsolatedFunction(arg) {
    return new Promise((resolve, reject) => {
        // 创建一个包含参数的数组
        const argTransferable = new ivm.ExternalCopy(arg).copyInto({ transferIn: true });

        // 调用隔离环境中的函数
        fnReference.apply(undefined, [argTransferable], { result: { promise: true, copy: true } })
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
}

// 使用暴露的函数
callIsolatedFunction('world').then(result => {
    console.log(result); // 应该输出 "Hello, world"
});
