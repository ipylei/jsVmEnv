const fs = require('fs');
const path = require("path");
const { VM, VMScript } = require('vm2');
const ivm = require('isolated-vm');
let inspector = require('isolated-vm-inspector');

// 加载本地框架
var catvm2 = require('./CatVM2/catvm2.exports.js');
// 利用框架加载已补的环境代码
var catvm2code = catvm2.getCode({
    proxy: true,
    stack: false
});


/*
const codefile = `${__dirname}/code2.js`;
const script = fs.readFileSync(codefile, "utf-8");
const vm = new VM();
const my_exports = vm.run(script);
console.log(res);
//*/



// 从网站扣下来的js
// const codefile = `${__dirname}/code.js`
// const codefile = `${path.resolve('./')}\\code.js`;

//初始化
// const initfile = path.join(__dirname, "web_codes", "pdd_init.js");
// const codefile = path.join(__dirname, "web_codes", "pdd_code.js");


/* 简单补环境 */
// const initfile = path.join(__dirname, "web_codes", "lesson13_init.js");
// const codefile = path.join(__dirname, "web_codes", "lesson13_code.js");

/* jsvmp入门 */
// const initfile = path.join(__dirname, "web_codes", "lesson15_init.js");
// const codefile = path.join(__dirname, "web_codes", "lesson15_code.js");

/* 补环境入门 */
const initfile = path.join(__dirname, "web_codes", "pdd_init.js");
const codefile = path.join(__dirname, "web_codes", "lesson16_code.js");

// 导出
const exportfile = path.join(__dirname, "web_codes", "pdd_export.js")
// const codefile = path.join(__dirname, "web_codes", "xhs_code.js");


/* const script = new VMScript(
    catvm2code
    + fs.readFileSync(initfile)
    + fs.readFileSync(codefile)
    + fs.readFileSync(exportfile),

    `${__dirname}/我正在调试的代.js码`); 
*/

const isolate = new ivm.Isolate({ inspector: true }); // 内存限制为 128MB
const script = isolate.compileScriptSync(catvm2code
    + fs.readFileSync(initfile)
    + fs.readFileSync(codefile)
    + fs.readFileSync(exportfile), { filename: "正在调试的代码.js" });

/* 创建一个vm对象，使用默认配置 */
// const vm = new VM();
/* 创建一个vm对象，使用自定义配置*/
// gloabl_obj = { _author: "ipylei", setTimeout: setTimeout, setInterval: setInterval, btoa: btoa, atob: atob };
// const vm = new VM({ sandbox: gloabl_obj });
// const my_exports = vm.run(script);

// 创建一个新的隔离实例
const context = isolate.createContextSync({ inspector: true });
// 获取全局对象，并且将其绑定到上下文环境
const jail = context.global;
jail.setSync('setTimeout', setTimeout);
jail.setSync('setInterval', setInterval);
jail.setSync('btoa', btoa);
jail.setSync('atob', atob);



// const my_exports = script.runSync(context);
// console.log("导出对象获取成功!!!!");
// // debugger;
// console.log(my_exports);
// console.log("ended......");


inspector(isolate, {
    port: 9222,
    host: "127.0.0.1"
}, async () => {
    let ret = await script.run(context);
    console.log("=======>", ret);
    debugger;
})





/* 静态js、伪动态js想怎么处理就怎么处理，以下是动态js处理方案：

index.js：                                  ==> node环境，加载code.js、code_export.js
code.js： 网站源码                           ==> vm2环境
code_export.js：负责导出对象供node环境使用    ==> vm2环境 <==> node环境  

流程：
    nodejs加载(网站源码)  ==> vm2环境中执行 ==> nodejs导出方法

    index.js中一个函数把该文件的js全部包裹完，然后通过传参的方式传入网站源码进行执行，即代替fs.readFileSync(codefile)；




nodejs跟vm2框架环境有关联即能保持状态，
pyexecjs跟node环境没关联，每次运行都是独立的!
所以pyexecjs跟vm2框架环境也没法关联。
*/