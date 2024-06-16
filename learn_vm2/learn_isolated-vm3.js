const ivm = require('isolated-vm');
let inspector = require('isolated-vm-inspector');

// 创建一个新的隔离实例
const isolate = new ivm.Isolate({ memoryLimit: 128, inspector: true }); // 内存限制为 128MB

// 创建一个上下文环境
// 上下文是隔离区内的沙盒执行环境。每个上下文都包含自己的内置对象和全局空间。
const context = isolate.createContextSync({ inspector: true });

// 获取全局对象，并且将其绑定到上下文环境
// 引用此上下文的全局对象。请注意，如果您调用 context.release()，全局引用也将被释放。
const jail = context.global;

jail.setSync('global', jail.derefInto());
// 如果想要在隔离环境中暴露某些全局变量，可以这样做：
// 例如，我们在隔离环境中创建一个名为 `externalVar` 的全局变量
jail.setSync('externalVar', 100);
jail.setSync('setTimeout', setTimeout);
jail.setSync('btoa', btoa);

// context.evalSync('debugger; console.log("hello world"); 9999', {filename: "debugger.js"});

// 编译并运行一段简单的 JavaScript 代码
const script = isolate.compileScriptSync(`
	debugger;
	window = self = this; //window比较特殊
	delete global;
	let obj = {};
	let result = externalVar + 1;
    var a =5; 
	console.log("66666", a+=6);
	this.age = 66;
	this.btoa;
	this.obj;
	`, { filename: 'example1.js' });

// const result = script.runSync(context);
// console.log(result); // 输出 101


// script.release(); //释放对此脚本的引用，允许对脚本数据进行垃圾回收。
// context.release(); //释放对上下文的此引用。您可以调用此方法立即释放 v8 资源
// isolate.dispose(); //释放内存


//开启调试
// inspector(isolate:isolated-vm,options?:{port?:int,host?:string},func:async function)
inspector(isolate, {
	port: 9222,
	host: "127.0.0.1"
}, async () => {
	await script.run(context);
	debugger;
})