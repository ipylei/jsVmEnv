const fs = require('fs');
const path = require("path");
const { VM, VMScript } = require('vm2');

// 加载本地框架
var vmhelper = require('./VMHelper/vmhelper.exports.js');
// 利用框架加载已补的环境代码
var vmhelpercode = vmhelper.getCode({
    proxy: false,
    stack: false
});

const initfile = path.join(__dirname, "web_codes", "1_init.js");
const codefile = path.join(__dirname, "web_codes", "2_code.js");
const exportfile = path.join(__dirname, "web_codes", "3_export.js");

var total_code = vmhelpercode
    + fs.readFileSync(initfile)
    + fs.readFileSync(codefile)
    + fs.readFileSync(exportfile);

/* 创建一个vm对象，使用默认配置 */
// const vm = new VM();
/* 创建一个vm对象，使用自定义配置*/
const vm = new VM({
    sandbox: {
        _author: "ipylei",
        ilog: console.log,

        setTimeout: setTimeout,
        setInterval: setTimeout,
        // btoa: btoa,
        // atob: atob,
        
    }
});

// const script = new VMScript(total_code, `<anonymous>`);
// const my_exports = vm.run(script);
// const my_exports = vm.run(total_code);

total_code = `try{${total_code};debugger}catch(e){debugger;}; document.cookie`;
const my_exports = vm.run(total_code);
console.log("导出对象获取成功!!!!", my_exports);
console.log("ended......");


