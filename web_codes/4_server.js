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
    console.log(">>>>>>>>>>>>");
    console.log(req.query);
    console.log(req.query["name"]);
    console.log("<<<<<<<<<<<<");
    const ret = doSomethingRef.applySync(undefined, [], { result: { copy: true } });
    res.send('Hello World! ' + ret);
});

// http://localhost:8992/test/func?name=md5
app.get('/test/func', (req, res) => {
    console.log("================");
    console.log(req.query);
    console.log(req.query["name"]);
    console.log("================");
    const ret = doSomethingRef.applySync(undefined, [], { result: { copy: true } });
    res.send('Hello World! ' + ret);
});

app.listen(PORT, () => {
    console.log(`Express服务器运行在 http://localhost:${PORT}/`);
});