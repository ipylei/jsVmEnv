
;;;
// vm2.run()返回最后一个对象，所以最后的导出对象放在这里
for (var prop in vmcore.memory.listeners) {
    prop_listeners = vmcore.memory.listeners[prop];
    for (let listener of prop_listeners) {
        if (typeof listener == "function") {
            listener();
        }
    }
}


debugger;
debugger;
debugger;

my_exports = {
    sayHi: function () { console.log("hello world"); }
}

// var final_result = `window.enter=${window.enter};window.count0=${window.count0};window.count1=${window.count1};window.count2=${window.count2};window.count3=${window.count3};window.count4=${window.count4};`;
// var final_result = document.cookie + "\n";
// for (prop in window) {
//     if (prop.indexOf("count") >= 0) {
//         final_result += `${prop}=${window[prop]}; `
//     }
// }
// final_result +=  window.mmdd;

console.log("document.cookie => ", document.cookie);
document.cookie;
// window.is_checked.toString();