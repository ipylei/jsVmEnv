//引入isolated-vm
let ivm = require('isolated-vm'); 
//引入本库
let inspector = require('isolated-vm-inspector') 
//设置为inspector: true
let isolate = new ivm.Isolate({ inspector: true }); 
//设置为inspector: true
let context =  isolate.createContextSync({ inspector: true }); 
//创建两个script
let script =  isolate.compileScriptSync(`debugger;1`,{ filename: 'example1.js' });
let script1 =  isolate.compileScriptSync(`debugger;2`,{ filename: 'example2.js' });
//开启调试
//inspector(isolate:isolated-vm,options?:{port?:int,host?:string},func:async function)
inspector(isolate,{
    port: 9222,
    host: "127.0.0.1"
}, async ()=>{
    let r1 = await script.run(context);
    let r2 = await script1.run(context);
    debugger;
})