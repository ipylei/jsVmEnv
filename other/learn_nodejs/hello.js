'use strict';

const path = require("path");

var s = 'hello';
function greet(name) {
    console.log(s + ',' + name +'!');
}
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));

// 可以！
module.exports = greet;

//可以！
// exports.greet = greet;


//可以
/* module.exports = {
    "func":greet,
    "name":"hello"
}; */


//可以
/* exports.func = greet;
exports.name = "hello"; */



//错误！
//exports = greet;

/*  //错误！
exports = {
    hello: "hello",
    greet: greet
}; */