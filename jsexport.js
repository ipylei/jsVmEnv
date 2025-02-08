const fs = require('fs');
const path = require("path");

function getCode(target_site) {
    // 加载本地框架
    var vmhelper = require('./VMHelper/vmhelper.exports.js');
    // 利用框架加载已补的环境代码
    var vmhelpercode = vmhelper.getCode({
        proxy: true,
        devlog: true,
        stack: true
    });


    const initfile = path.join(__dirname, `${target_site}`, "1_init.js");
    // const codefile = path.join(__dirname, `${target_site}`, "2_code_ast.js");
    const codefile = path.join(__dirname, `${target_site}`, "2_code.js");
    const exportfile = path.join(__dirname, `${target_site}`, "3_env_in_vm.js");


    var comb_code = vmhelpercode
        + fs.readFileSync(initfile)
        + fs.readFileSync(codefile)
        + fs.readFileSync(exportfile);

    var total_code = `try{
            ${comb_code};
            debugger;
        }
        catch(e){
            console.log("error", e);
            debugger;
        }; 
        `;
    return total_code;
}


module.exports = {
    getCode: getCode
}