const fs = require('fs');
const path = require("path");
const ivm = require('isolated-vm');
const inspector = require('isolated-vm-inspector');

const jsexport = require("./jsexport.js");


// let target_site = "web_codes";
let target_site = "projects/jd";
var total_code = jsexport.getCode(target_site);
// var total_code = fs.readFileSync(path.join(__dirname, "all.js"), 'utf-8');

//初始化
const isolate = new ivm.Isolate({ inspector: true }); 
const script = isolate.compileScriptSync(total_code, { filename: "<anonymous>" });

// 创建一个新的隔离实例
const context = isolate.createContextSync({ inspector: true });
// 获取全局对象，并且将其绑定到上下文环境
const jail = context.global;


jail.setSync('global', jail.derefInto());
jail.setSync('env', "isolated-vm");

jail.setSync('setTimeout', new ivm.Reference(setTimeout));
jail.setSync('clearTimeout', new ivm.Reference(clearTimeout));
// jail.setSync('setTimeout', setTimeout);
// jail.setSync('setInterval', setInterval);

jail.setSync('btoa', btoa);
jail.setSync('atob', atob);
jail.setSync('ilog', function (...args) {
    console.log(...args);
});
//*/


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
    const my_exports = script.runSync(context);
    // console.log("导出对象获取成功 ===>", my_exports);
    console.log("ended......");
}