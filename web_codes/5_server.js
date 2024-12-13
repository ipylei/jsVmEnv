const express = require('express');

// 在沙箱上下文中执行代码
script.runSync(context);

// 将 `doSomething` 函数设置为沙箱中的全局对象引用
const doSomethingRef = jail.getSync('doSomething', { reference: true });

// 在外部调用沙箱中的函数
// const result = doSomethingRef.applySync(undefined, [], { result: { copy: true } });
// console.log("ret===>", result);


// 【*】搭建服务，供外部调用
const app = express();
const PORT = 8992;

// http://localhost:8992/?name=test
app.get('/', (req, res) => {
    try {

        console.log(">>>>>>>>>>>>");
        console.log(req.query);
        let name = req.query["name"];
        console.log("<<<<<<<<<<<<");
        const ret = doSomethingRef.applySync(undefined, [name], { result: { copy: true } });
        const data = {
            "code": 1,
            "result": ret,
        }
        res.json(data);
    } catch (error) {
        const data = {
            "code": 0,
            "result": error.toString()
        }
        res.json(data);
    }
});

// http://localhost:8992/test/func?name=md5
app.get('/test/func', (req, res) => {
    try {
        console.log("================");
        console.log(req.query);
        let name = req.query["name"];
        console.log("================");
        const ret = doSomethingRef.applySync(undefined, [name], { result: { copy: true } });
        const data = {
            "code": 1,
            "result": ret,
        }
        res.json(data);
        res.send('Hello World! ' + ret);
    } catch (error) {
        const data = {
            "code": 0,
            "result": error.toString()
        }
        res.json(data);
    }
});

app.listen(PORT, () => {
    console.log(`Express服务器运行在 http://localhost:${PORT}/`);
});
