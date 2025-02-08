//框架工具模块
const vmmonitor = require('./monitor/agent.monitor.exports.js');

//加载自己实现的BOM和DOM
const vmbom = require('./bom/agent.bom.exports.js');
const vmdom = require('./dom/agent.dom.exports.js');

const vminit = require('./init/agent.init.exports.js');

function getCode(config = {}) {
    var code = "";

    //引入框架核心代码
    code += vmmonitor.getInitCode() + "\r\n";

    //自定义配置
    for (var key in config) {
        code += `vmcore.memory.config.${key}=${config[key]};\r\n`;
    }

    //引入框架工具中的代码
    code += vmmonitor.getCode() + "\r\n";

    //加载BOMM环境
    code += vmbom.getCode() + "\r\n";
    //加载DOM环境
    code += vmdom.getCode() + "\r\n";

    //加载配置代码
    code += vminit.getCode() + "\r\n";


    //===============================
    // code += "debugger;\r\n";
    return code;
}


module.exports = {
    // run: run
    getCode: getCode
}