; console.log("enter export.js");

let task5 = setTimeout(function () { ilog("task5 setTimeout 3000", window.env) }, 3000);





debugger;
debugger;
debugger;

clearTimeout(task1);
clearTimeout(task2);
clearTimeout(task3);
clearTimeout(task4);
clearTimeout(task5);

// clearTimeout(1);
// clearTimeout(2);
// clearTimeout(3);
// clearTimeout(4);
// clearTimeout(5);



function doSomething() {
    var rand = parseInt(Math.random() * 10);
    return "" + rand + ">>>>" + new Date();
}


// const fnReference = await context.evalClosure(`global.fn = function(arg) {
//     return 'Hello, ' + arg;
//   }`, [], { reference: true });

