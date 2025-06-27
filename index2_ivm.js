const fs = require('fs');
const path = require("path");
const ivm = require('isolated-vm');
const inspector = require('isolated-vm-inspector');

const jsexport = require("./collections.js");


let target_site = "web_codes";
var total_code = jsexport.getCode(target_site);

//初始化
const isolate = new ivm.Isolate({ inspector: true });
const script = isolate.compileScriptSync(total_code, { filename: "<anonymous>" });

// 创建一个新的隔离实例
const context = isolate.createContextSync({ inspector: true });
// 获取全局对象，并且将其绑定到上下文环境
const jail = context.global;


jail.setSync('global', jail.derefInto());
jail.setSync('env', "isolated-vm");
jail.setSync('ilog', function (...args) {
  console.log(...args);
});

jail.setSync('setTimeout', new ivm.Reference(setTimeout));
jail.setSync('clearTimeout', new ivm.Reference(clearTimeout));
jail.setSync('btoa', btoa);
jail.setSync('atob', atob);

/* mode
    1.debug模式
    2.直接运行
*/
var mode = 2;

// debugger模式
if (mode == 1) {
  inspector(isolate, {
    port: 9222,
    host: "127.0.0.1"
  }, async () => {
    let ret = await script.run(context);
    console.log("=======>", ret);
    debugger;
  })
}
// 普通执行
else if (mode == 2) {
  const sandboxResult = script.runSync(context);
  console.log("执行结果= ", sandboxResult);

  //调用沙箱中的函数
  // const doSomethingRef = jail.getSync('doSomething', { reference: true });
  // const ret = doSomethingRef.applySync(undefined, ["xxxx"], { result: { copy: true } });
  // console.log("执行结果= ", ret);

  console.log("ended......");
}