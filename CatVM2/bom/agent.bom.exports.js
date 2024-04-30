var fs = require('fs');

function getCode(){
    var code = "";
    code += fs.readFileSync(`${__dirname}/EventTarget.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/Window.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/WindowProperties.js`) +"\r\n"; //因为放在匿名函数里面，所有这里放在Window.js后面

    code += fs.readFileSync(`${__dirname}/Location.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/History.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/Screen.js`) +"\r\n";

    //plugins相关
    code += fs.readFileSync(`${__dirname}/MimeTypeArray.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/MimeType.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/PluginArray.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/Plugin.js`) +"\r\n";
    //Navigator得在plugin后面 
    code += fs.readFileSync(`${__dirname}/Navigator.js`) +"\r\n";
    

    code += fs.readFileSync(`${__dirname}/Storage.js`) +"\r\n";

    //xhr
    code += fs.readFileSync(`${__dirname}/XMLHttpRequest.js`) +"\r\n";
    return code;
}

module.exports ={
    getCode: getCode
}