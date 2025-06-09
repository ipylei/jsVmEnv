
debugger;
debugger;
debugger;
debugger;

ilog("hello world1");
ilog("hello world2");
ilog("hello world3");

var ret = new TextEncoder().encode("hello world").length;
ilog(ret);

ilog("hello world4");
ilog("hello world5");
ilog("hello world6");

let task3 = setTimeout(function () {
    ilog("task3 setTimeout 3000", window.env);
}, 3000);

let task4 = setTimeout(function () {
    ilog("task4 setTimeout 5000", window.env);
}, 5000);

ilog("hello world7");
ilog("hello world8");
ilog("hello world9");


ilog(document.cookie);