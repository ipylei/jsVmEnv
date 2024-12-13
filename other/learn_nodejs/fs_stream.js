'use strict';

var fs = require('fs');

// 打开一个流:
// data事件表示流的数据已经可以读取了，
// end事件表示这个流已经到末尾了，没有数据可以读取了，
// error事件表示出错了。

/*
var rs = fs.createReadStream(`${__dirname}/sample.txt`, 'utf-8');

rs.on('data', function (chunk) {
    //要注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});
//*/


/*
var fs = require('fs');
var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();
//*/

var rs = fs.createReadStream(`${__dirname}/sample.txt`, 'utf-8');
var ws = fs.createWriteStream(`${__dirname}/copied.txt`);

rs.on('data', function (chunk) {
    //要注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});


//rs.pipe(ws);
rs.pipe(ws, {end: false});
// readable.pipe(writable, { end: false });
console.log("---------------end-------------------");