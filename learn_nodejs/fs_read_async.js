'use strict';

var fs = require('fs');

fs.readFile(`${__dirname}/sample.txt`, 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
        console.log(typeof err);
    } else {
        console.log(data);
        console.log(typeof data);
    }
});

console.log("---------------end-------------------")