var fs = require('fs');

function getCode(){
    var code = "";
    code += fs.readFileSync(`${__dirname}/u_plugins.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/u_init.js`) +"\r\n";
    return code;
}

module.exports ={
    getCode: getCode
}