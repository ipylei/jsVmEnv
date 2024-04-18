const fs = require('fs');
const { VM, VMScript } = require('vm2');

const vm = new VM();
// 从网站扣下来的js
const codefile = `${__dirname}/code.js`;
//执行
const script = new VMScript(fs.readFileSync(codefile), `${__dirname}/我正在调试的代.js码`);
var res = vm.run(script);

// const script2 = fs.readFileSync(codefile, "utf-8");
// var res = vm.run(script2);

console.log(res);


