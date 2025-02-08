const cryptoJS = require("crypto-js");


function testAES() {
    var a = "123456";
    var o = "1122334455667788";
    var i = "1234567887654321";
    let result = cryptoJS.AES.encrypt(a, o, {
        "iv": i,
        "mode": cryptoJS.mode.CBC,
        "padding": cryptoJS.pad.Pkcs7
    }).ciphertext.toString();
    return result;
}



module.exports = {
    testAES: testAES
}