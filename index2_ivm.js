const fs = require('fs');
const path = require("path");
const ivm = require('isolated-vm');
let inspector = require('isolated-vm-inspector');
const express = require('express');

// 加载本地框架
var vmhelper = require('./VMHelper/vmhelper.exports.js');
// 利用框架加载已补的环境代码
var vmhelpercode = vmhelper.getCode({
    proxy: true,
    stack: true
});

// let target_site = "projects/xhs";
// let target_site = "projects/tb";
// let target_site = "projects/pdd";
// let target_site = "projects/jd";


let target_site = "web_codes"
const initfile = path.join(__dirname, `${target_site}`, "1_init.js");
const codefile = path.join(__dirname, `${target_site}`, "2_code.js");
// const codefile = path.join(__dirname, `${target_site}`, "js_security_v3_0.1.5.js");
const exportfile = path.join(__dirname, `${target_site}`, "3_export.js");

const isolate = new ivm.Isolate({ inspector: true }); // 内存限制为 128MB
var total_code = vmhelpercode
    + fs.readFileSync(initfile)
    + fs.readFileSync(codefile)
    + fs.readFileSync(exportfile);

total_code = `try{
                    ${total_code};
                    debugger}
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
    console.log("导出对象获取成功 ===>", my_exports);
    console.log("ended......");
}


/*
// 在沙箱上下文中执行代码
script.runSync(context);


// 将 `doSomething` 函数设置为沙箱中的全局对象引用
const doSomethingRef = jail.getSync('doSomething', { reference: true });
// 在外部调用沙箱中的函数
// const result = doSomethingRef.applySync(undefined, [], { result: { copy: true } });
// console.log("ret===>", result);


// 搭建服务，供外部调用
const app = express();
const PORT = 8992;

// http://localhost:8992/?name=test
app.get('/', (req, res) => {
    console.log(">>>>>>>>>>>>");
    console.log(req.query);
    console.log(req.query["name"]);
    console.log("<<<<<<<<<<<<");
    const ret = doSomethingRef.applySync(undefined, [], { result: { copy: true } });
    res.send('Hello World! ' + ret);
});

// http://localhost:8992/test/func?name=md5
app.get('/test/func', (req, res) => {
    console.log("================");
    console.log(req.query);
    console.log(req.query["name"]);
    console.log("================");
    const ret = doSomethingRef.applySync(undefined, [], { result: { copy: true } });
    res.send('Hello World! ' + ret);
});

app.listen(PORT, () => {
    console.log(`Express服务器运行在 http://localhost:${PORT}/`);
});
//*/