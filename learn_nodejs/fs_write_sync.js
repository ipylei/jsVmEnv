'use strict';
var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFileSync(`${__dirname}/output2.txt`, data);

console.log("---------------end-------------------");