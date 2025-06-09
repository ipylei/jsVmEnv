const fs = require('fs');
const path = require("path");
const { VM, VMScript } = require('vm2');

const jsexport = require("./allcode.js"); 

let target_site = "web_codes";
// let target_site = "projects/jd";
// let target_site = "projects/yrx_match1";
var total_code = jsexport.getCode(target_site);



/* 创建一个vm对象，使用默认配置 */
// const vm = new VM();
/* 创建一个vm对象，使用自定义配置*/
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
const my_exports = vm.run(script);


//第2种执行方式
// const my_exports = vm.run(total_code);


console.log("导出对象获取成功!!!!", my_exports);
console.log("ended......");


