//一个脱离了node的纯净v8环境 
var fs = require("fs");
var d = require('vm2'); //引入的js文件中 debugger无效！

const {VM} = d;
const vm = new VM();  //相当于一个v8环境


var data = fs.readFileSync('./src/code.js',  'utf-8');
debugger;


vm.run(data);
debugger;