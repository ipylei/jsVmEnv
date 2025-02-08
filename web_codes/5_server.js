
const path = require("path");
const ivm = require('isolated-vm');
const express = require('express');

const jsexport = require("../jsexport.js");
const envinnode = require("./4_env_in_node.js");


let target_site = "web_codes";
// let target_site = "projects/jd";
var total_code = jsexport.getCode(target_site);
// var total_code = fs.readFileSync(path.join(__dirname, "all.js"), 'utf-8');

//初始化
const isolate = new ivm.Isolate({ inspector: true }); // 内存限制为 128MB
const script = isolate.compileScriptSync(total_code, { filename: "<anonymous>" });

// 创建一个新的隔离实例
const context = isolate.createContextSync({ inspector: true });
// 获取全局对象，并且将其绑定到上下文环境
const jail = context.global;


jail.setSync('global', jail.derefInto());
jail.setSync('env', "isolated-vm");

jail.setSync('setTimeout', new ivm.Reference(setTimeout));
jail.setSync('clearTimeout', new ivm.Reference(clearTimeout));
// jail.setSync('setTimeout', setTimeout);
// jail.setSync('setInterval', setInterval);

jail.setSync('btoa', btoa);
jail.setSync('atob', atob);
jail.setSync('ilog', function (...args) {
    console.log(...args);
});


// 在沙箱上下文中执行代码
script.runSync(context);




/* 

                                                  _____ __  __ ____    ___   ____   _____                                                  
 _____  _____  _____  _____  _____  _____  _____ | ____|\ \/ /|  _ \  / _ \ |  _ \ |_   _| _____  _____  _____  _____  _____  _____  _____ 
|_____||_____||_____||_____||_____||_____||_____||  _|   \  / | |_) || | | || |_) |  | |  |_____||_____||_____||_____||_____||_____||_____|
|_____||_____||_____||_____||_____||_____||_____|| |___  /  \ |  __/ | |_| ||  _ <   | |  |_____||_____||_____||_____||_____||_____||_____|
                                                 |_____|/_/\_\|_|     \___/ |_| \_\  |_|     

*/
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

// http://localhost:8992/func_from_vm
app.get('/func_from_vm', (req, res) => {
    try {
        console.log("================");
        console.log(req.query);
        let name = req.query["name"] || "dddd";
        console.log("================");
        const ret = doSomethingRef.applySync(undefined, [name], { result: { copy: true } });
        const data = {
            "code": 1,
            "result": ret
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


// http://localhost:8992/func_from_node
app.get('/func_from_node', (req, res) => {
    try {
        var retval = envinnode.testAES();
        const data = {
            "code": 1,
            "result": retval
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

app.listen(PORT, () => {
    console.log(`Express服务器运行在 http://localhost:${PORT}/`);
});
