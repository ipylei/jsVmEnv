var fs = require('fs');
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);


var gen = function* () {
    var r1 = yield readFileThunk(`${__dirname}/copied.txt`);
    console.log(r1.toString());
    var r2 = yield readFileThunk(`${__dirname}/sample.txt`);
    console.log(r2.toString());
};
//===================================================================


/* 1.手动执行: 在callback中使用next()交出执行权
 */
/*
var g = gen();
//g.next()/返回的r1为{value:callback, done:true/false}，其中value对应的是一个特殊函数，接收回调函数作为参数!
var r1 = g.next();
r1.value(function (err, data) {
    if (err) {
        throw err;
    }

    var r2 = g.next(data);
    // console.log("data=", data);
    // console.log("r2.value=", r2.value.toString());

    r2.value(function (err, data) {
        if (err) {
            throw err;
        }
        g.next(data);
    });
});
console.log("==================测试1=====================");
//*/

/* 2.自动执行: 手动封装一个执行器函数，让其自动执行Generator函数!
 */
//*
function run(fn) {
    var g = fn();     //创建生成器对象
    //next就是callback，签名为function (err, data){...}
    function next(err, data) {

        var result = g.next(data);
        if (result.done) {
            return;
         }

        //result为{value:xxx, done:true/false}，其中value为一个特殊函数，接收回调函数作为参数!
        result.value(next);
    }
    //调用next()
    next();
}
run(gen);   //也可以使用co模块：co(gen);
console.log("====================测试2====================");
//*/



/* 3.使用co模块：也可以 */
/*
var co = require('co');
//上面代码中，Generator 函数只要传入co函数，就会自动执行。
//co函数返回一个Promise对象，因此可以用then方法添加回调函数。
co(gen).then(function (){
  console.log('Generator 函数执行完成');
});
console.log("====================测试3====================");
//*/