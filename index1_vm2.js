const fs = require('fs');
const path = require("path");
const { VM, VMScript, NodeVM } = require('vm2');

const jsexport = require("./collections.js");

let target_site = "web_codes";
var total_code = jsexport.getCode(target_site);

/* 创建一个vm对象，使用默认配置 */
// const vm = new VM();

/* 创建一个vm对象，使用自定义配置*/
// 创建一个对象来存储沙箱导出的内容
const vm = new VM({
    sandbox: {
        _author: "ipylei",
        env: "vm2",
        ilog: console.log,

        setTimeout: setTimeout,
        setInterval: setTimeout,
        btoa: btoa,
        atob: atob,
    }
});
console.log("~~~~~~~~~~~~~~~~~~~~ success ~~~~~~~~~~~~~~~~~~~~");

//第1种执行方式
let script = new VMScript(total_code, `<anonymous>`);
const sandboxResult = vm.run(script);


//第2种执行方式
// const sandboxResult = vm.run(total_code);


console.log("执行结果= ", sandboxResult);
console.log("ended......");


