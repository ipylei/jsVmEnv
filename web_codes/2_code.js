
debugger;
debugger;
debugger;
debugger;

ilog("hello world1");
ilog("hello world2");
ilog("hello world3");


let task3 = setTimeout(function(){
    ilog("setTimeout -- 1", window.env);
}, 3000);

let task4 = setTimeout(function(){
    ilog("setTimeout -- 2", window.env);
}, 5000);




ilog("hello world4");
ilog("hello world4");
ilog("hello world6");