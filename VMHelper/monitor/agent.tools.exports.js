var fs = require('fs');

function getCode(){
    var code = "";
    // code += fs.readFileSync(`${__dirname}/vm_safefunction.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/vm_memory.js`) +"\r\n";
    
    code += fs.readFileSync(`${__dirname}/vm_print.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/vm_proxy.js`) +"\r\n";

    return code;
}

module.exports ={
    getCode: getCode
}