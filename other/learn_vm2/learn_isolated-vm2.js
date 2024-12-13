const ivm = require('isolated-vm');


//创建一个新的隔离环境实例
const isolate = new ivm.Isolate();


/* 
在这个隔离中创建一个新的上下文。每个上下文都有自己的内建副本
对象。例如，如果一个上下文执行object.prototype.foo = 1，这不会影响任何其他上下文。
*/
const context = isolate.createContextSync();

//获取上下文中全局对象的引用{}
const jail = context.global;

//这使得全局对象在上下文中作为' global '可用。我们在这里使用' derefInto() '，因为否则' global '实际上将是新隔离中的Reference{}对象。
// jail.setSync('global', jail.derefInto());
jail.setSync('global', jail.derefInto());


// 我们将创建一个基本的“log”函数供新隔离使用。
jail.setSync('log', function (...args) {
	console.log(...args);
});

// And let's test it out:
// context.evalSync('log("hello world")');


const hostile = isolate.compileScriptSync(`
	log("~~~~~~~~~~~~~~~~~~~");
	const storage = [];
	const twoMegabytes = 1024 * 1024 * 2;
	while (true) {
		const array = new Uint8Array(twoMegabytes);
		for (let ii = 0; ii < twoMegabytes; ii += 4096) {
			array[ii] = 1; // we have to put something in the array to flush to real memory
		}
		storage.push(array);
		log('I\\'veeeeee wasted '+ (storage.length * 2)+ 'MB');
		break;
	}
`);

// Using the async version of `run` so that calls to `log` will get to the main node isolate
hostile.run(context).catch(err => console.error(err));
// I've wasted 2MB
// I've wasted 4MB
// ...
// I've wasted 130MB
// I've wasted 132MB
// RangeError: Array buffer allocation failed