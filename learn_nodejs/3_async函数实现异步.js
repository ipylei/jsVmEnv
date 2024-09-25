const fs = require('fs');

//1.实现返回Promise对象的函数
const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error)
                return reject(error);
            resolve(data);
        });
    });
};

// //2.主程序yield Promise对象
// const gen = function  * () {
//     const f1 = yield readFile('/etc/fstab');
//     const f2 = yield readFile('/etc/shells');
//     console.log(f1.toString());
//     console.log(f2.toString());
// };
// //-------------------------------------------

// //3.自动执行器皿
// co(gen)


//现在第2-3步可以替换为下面
const asyncReadFile = async function () {
    var r1 = await readFile(`${__dirname}/copied.txt`);
    console.log(r1.toString());
    var r2 = await readFile(`${__dirname}/sample.txt`);
    console.log(r2.toString());
    
    return 99999;
};

var ret = asyncReadFile().then(function (data) {
    console.log("ended....", data);
})
//调用该函数时，会立即返回一个Promise对象。
console.log("===============", ret);