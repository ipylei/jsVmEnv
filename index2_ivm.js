const fs = require('fs');
const path = require("path");
const ivm = require('isolated-vm');
let inspector = require('isolated-vm-inspector');

// 加载本地框架
var vmhelper = require('./VMHelper/vmhelper.exports.js');
// 利用框架加载已补的环境代码
var vmhelpercode = vmhelper.getCode({
    proxy: true,
    stack: false
});


// 从网站扣下来的js
const initfile = path.join(__dirname, "web_codes", "1_init.js");
const codefile = path.join(__dirname, "web_codes", "2_code.js");
const exportfile = path.join(__dirname, "web_codes", "3_export.js");

//pdd
// const initfile = path.join(__dirname, "web_codes", "pdd_init.js");
// const codefile = path.join(__dirname, "web_codes", "pdd_code.js");
// const exportfile = path.join(__dirname, "web_codes", "pdd_export.js");

/* 小红书 */
// const codefile = path.join(__dirname, "web_codes", "xhs_code.js");


const isolate = new ivm.Isolate({ inspector: true }); // 内存限制为 128MB
var total_code = vmhelpercode
    + fs.readFileSync(initfile)
    + fs.readFileSync(codefile)
    + fs.readFileSync(exportfile);

total_code = `try{${total_code};debugger}catch(e){debugger;}; document.cookie`;
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


var mode = 0;
// 普通执行
if (mode == 1) {
    const my_exports = script.runSync(context);
    console.log("导出对象获取成功 ===>", my_exports);
    console.log("ended......");
}
// debugger模式
else {
    inspector(isolate, {
        port: 9222,
        host: "127.0.0.1"
    }, async () => {
        let ret = await script.run(context);
        console.log("=======>", ret);
        debugger;
    })

}






