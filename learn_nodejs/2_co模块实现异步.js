//下面是一个 Generator 函数，用于依次读取两个文件。
var fs = require('fs');


var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        //在回调函数callback中仅使用resolve、reject修改Promise实例状态，目的是与下面注册then方法连接上
        fs.readFile(fileName, function (error, data) {
            if (error) {
                return reject(error);
            }
            resolve(data);
        });
    });
};


var gen = function* () {
    var r1 = yield readFile(`${__dirname}/copied.txt`);
    console.log(r1.toString());
    var r2 = yield readFile(`${__dirname}/sample.txt`);
    console.log(r2.toString());
};



/* 1.案例-手动执行 */
// var g = gen();
// var r1 = g.next(null);  //r1.value取得Promise实例，对这个实例注册then方法
// r1.value.then(function (data) {
//     //g.next(data).value => data为读取的内容， .value为再次取得第二个Promise实例
//     g.next(data).value.then(function (data) {
//         g.next(data);
//     });
// });
// console.log("====================测试1====================");



//2.自动执行器：自己实现
// function run(gen) {
//     var g = gen();
//     function next(data) {
//         var result = g.next(data);  //第一次g.next()，参数data为null
//         if (result.done) {
//             return result.value;
//         }
//         //取出yield的返回值，是一个Promise对象，调用then方法，接收函数作为参数
//         result.value.then(function (data) {
//             next(data);  //在回调函数执行后会跳转到这里，然后递归执行next()函数
//         });
//     }
//     next();    //第一次传入参数data为null
// }
// run(gen);
// console.log("====================测试2====================");



/* 3.使用co模块 */
var co = require('co');

//上面代码中，Generator 函数只要传入co函数，就会自动执行。
//co函数返回一个Promise对象，因此可以用then方法添加回调函数。
co(gen).then(function (){
  console.log('Generator 函数执行完成');
});
console.log("====================测试3====================");

