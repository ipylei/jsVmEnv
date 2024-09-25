ilog("enter init.js");
let task1 = setTimeout(function(){ilog("task1 setTimeout 3000 ", window.env)}, 3000);


var a = 1;
var b = 2;
debugger;

// ilog(">>>>>>>>>", window.flag);
// setTimeout("window.flag=99999;ilog('~~~~~~~~~~~~~~~xxxxxxx')", 5000);

let task2 =setTimeout(function(){ilog("task2 setTimeout 6000",  window.flag)}, 6000)
