const ivm = require('isolated-vm');

// 创建一个新的隔离实例和上下文
const isolate = new ivm.Isolate({ memoryLimit: 128 });
const context = isolate.createContextSync();
const jail = context.global;
jail.setSync('global', jail.derefInto());

// 准备隔离环境中的脚本
const script = isolate.compileScriptSync(`
  global.exposedFunctions = {
    sayHello: function(name) {
      return 'Hello, ' + name;
    },
    addNumbers: function(a, b) {
      return a + b;
    }
  };
`);

// 在隔离环境中运行脚本
script.runSync(context);

// 从隔离环境获取exposedFunctions对象的引用
const exposedFunctionsReference = jail.getSync('exposedFunctions', { reference: true });
console.log(exposedFunctionsReference);

/* 调用方式1
var sayHello = exposedFunctionsReference.getSync("sayHello");
var addNumbers = exposedFunctionsReference.getSync("addNumbers");
sayHello();
console.log(addNumbers(3, 5)); 
*/

/* 调用方式2
function sayHello() {
  //准备参数
  const transferableArgs = [...arguments].map(arg => new ivm.ExternalCopy(arg).copyInto());
  //获取隔离环境中的函数引用
  const vm_sayHello = exposedFunctionsReference.getSync("sayHello", { reference: true });
  //调用函数
  return vm_sayHello.applySync(undefined, transferableArgs, { arguments: { copy: true } })

}

function addNumbers(a, b) {
  //准备参数
  const transferableArgs = [...arguments].map(arg => new ivm.ExternalCopy(arg).copyInto());
  // 获取隔离环境中的函数引用
  const vm_addNumbers = exposedFunctionsReference.getSync("addNumbers", { reference: true });
  //调用函数
  return vm_addNumbers.applySync(undefined, transferableArgs, { arguments: { copy: true } })

}

//调用函数
// sayHello();
var ret = addNumbers(4, 5);
console.log(ret);
 */

/* 调用方式3
// 函数调用代理
function callIsolatedFunctionSync(functionName, ...args) {
  // 获取隔离环境中的函数引用
  const functionReference = exposedFunctionsReference.getSync(functionName, { reference: true });
  
  // 将参数转换为隔离环境可以接受的形式
  const transferableArgs = args.map(arg => new ivm.ExternalCopy(arg).copyInto());
  
  // 同步调用隔离环境中的函数，并传入参数
  const result = functionReference.applySync(undefined, transferableArgs, { arguments: { copy: true } });
  return result;
}

// 使用暴露的函数
try {
  const greeting = callIsolatedFunctionSync('sayHello', 'world');
  console.log(greeting); // 应输出 "Hello, world"
  
  const sum = callIsolatedFunctionSync('addNumbers', 1, 2);
  console.log(sum); // 应输出 3
} catch (error) {
  console.error('Error calling the isolated function:', error);
}
 */