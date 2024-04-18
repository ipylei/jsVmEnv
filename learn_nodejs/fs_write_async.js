'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile(`${__dirname}/output1.txt`, data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

console.log("---------------end-------------------");