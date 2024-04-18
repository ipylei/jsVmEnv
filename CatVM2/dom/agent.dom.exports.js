var fs = require('fs');

function getCode() {
    var code = "";

    //先把HTMLElement系列加载完毕，然后才有相关方法供Document.js (createElement)中调用
    //(x)好像放后面也可以，毕竟是独立的。
    code += fs.readFileSync(`${__dirname}/Node.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/Element.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/HTMLElement.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/HTMLDivElement.js`) + "\r\n";

    //再加载BOM系列
    code += fs.readFileSync(`${__dirname}/Node.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/Document.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/HTMLDocument.js`) + "\r\n"; //继承自Document，含有document对象
    return code;
}

module.exports = {
    getCode: getCode
}