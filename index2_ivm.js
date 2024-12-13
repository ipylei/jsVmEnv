const fs = require('fs');
const path = require("path");
const ivm = require('isolated-vm');
let inspector = require('isolated-vm-inspector');


// 加载本地框架
var vmhelper = require('./VMHelper/vmhelper.exports.js');
// 利用框架加载已补的环境代码
var vmhelpercode = vmhelper.getCode({
    proxy: false,
    stack: false
});

// let target_site = "web_codes"

let target_site = "projects/jd";

const initfile = path.join(__dirname, `${target_site}`, "1_init.js");
// const codefile = path.join(__dirname, `${target_site}`, "2_code_ast.js");
const codefile = path.join(__dirname, `${target_site}`, "2_code.js");
const exportfile = path.join(__dirname, `${target_site}`, "3_export_in_vm.js");

const isolate = new ivm.Isolate({ inspector: true }); // 内存限制为 128MB
var total_code = vmhelpercode
    + fs.readFileSync(initfile)
    + fs.readFileSync(codefile)
    + fs.readFileSync(exportfile);

total_code = `try{
                ${total_code};
                debugger;
            }
            catch(e){
                console.log("error", e);
                debugger;
            }; 
            `;
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
    3.搭建服务，供外部调用
*/
var mode = 3;

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
// 启动服务
else if (mode == 3) {
    const exportfile2 = path.join(__dirname, `${target_site}`, "4_export_in_node.js");
    const serverfile = path.join(__dirname, `${target_site}`, "5_server.js");
    const exportcode = "" + fs.readFileSync(exportfile2) + fs.readFileSync(serverfile);
    eval(exportcode);
}