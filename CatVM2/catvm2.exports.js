var fs = require('fs');
//框架工具模块
var vmtools = require('./tools/agent.tools.exports.js');

//加载自己实现的BOM和DOM
var vmbom = require('./bom/agent.bom.exports.js');
var vmdom = require('./dom/agent.dom.exports.js');

var vmusers = require('./users/agent.users.exports.js');

function getCode(config={}) {
    var code = "";

    //引入框架工具中的代码
    code += vmtools.getCode() + "\r\n";

    //自定义配置
    for (var key in config) {
        code += `catvm.memory.config.${key}=${config[key]};\r\n`;
    }

    //加载BOMM环境
    code += vmbom.getCode() + "\r\n";
    //加载DOM环境
    code += vmdom.getCode() + "\r\n";

    //加载用户自定义的代码
    code += vmusers.getCode() + "\r\n";


    //===============================
    code += "debugger;\r\n";
    return code;
}


module.exports = {
    // run: run
    getCode: getCode
}