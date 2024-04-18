
var fs = require('fs');
//https://www.npmjs.com/package/vm2  npm install vm2
const { VM, VMScript } = require('vm2'); //引入的js文件中 debugger有效！

const windowfile = `${__dirname}/window.js`
const file = `${__dirname}/code.js`;



const vm = new VM();
const script = new VMScript(fs.readFileSync(windowfile) + fs.readFileSync(file), 'VM2');
//const script = new VMScript(fs.readFileSync(file), 'vm2'); //'vm2'是调试名，随便写

debugger;
vm.run(script);
debugger