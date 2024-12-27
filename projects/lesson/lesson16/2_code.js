/* debugger;
window = global;
let document = {};
let formTag = {
    tagName: "FORM"
};
document.createElement = function (tagName) { if (tagName === "form") { return formTag } };
document.body = {};
document.body.appendChild = function (tag) {
    if (tag.tagName === "FORM") {
        window.__proto__.__proto__[tag.id] = tag  // 对付
    }
};
 */


debugger;
// throw new Error("hello world bad");

form = document.createElement("form");
form.id = "__yrxform__";
form.action = "https://yuanrenxue.com";
document.body.appendChild(form);



/* 1.form检测
window.is_checked = [];
if (window["__yrxform__"] !== form) {
    debugger; console.log("你被检测了1");
    window.is_checked.push(1);
}

if (!("__yrxform__" in window) || window.hasOwnProperty("__yrxform__")) {
    debugger; console.log("你被检测了2");
    window.is_checked.push(2);
}
if (!(delete window["__yrxform__"])) {
    debugger; console.log("你被检测了3");
    window.is_checked.push(3);
}
if (window["__yrxform__"] !== form) {
    debugger; console.log("你被检测了4");
    window.is_checked.push(4);
}
if (Object.getOwnPropertyDescriptor(window, "__yrxform__")) {
    debugger; console.log("你被检测了5");
    window.is_checked.push(5);

}

window["__yrxform__"] = 1;
if (window["__yrxform__"] === form) {
    debugger; console.log("你被检测了6");
    window.is_checked.push(6);
}
if (!Object.getOwnPropertyDescriptor(window, "__yrxform__")) {
    debugger; console.log("你被检测了7");
    window.is_checked.push(7);
}

delete window["__yrxform__"];
if (window["__yrxform__"] !== form) {
    debugger; console.log("你被检测了8");
    window.is_checked.push(8);
}
window.is_checked.push(222);
console.log(111); 
//*/


/* 2.this检测
(function () {
    debugger;
    console.log(top == window);
    console.log(top == parent);
    console.log(window == this);
    console.log(top.self.window == parent.self.parent)
    console.log(top.self == window)
    console.log(top.self.window == window.top.self)
    console.log(self.window.top.frames == top.window.self);
    console.log(self.window.top.self.frames.parent.top == top.window.self);
    console.log(self.window.top.self.top == top.window.self.window);
}).call()
//*/




//* 3.检测navigator 
var dd=navigator.plugins[0]
console.log(dd[0]==dd[0])
console.log(navigator.plugins[0][0]==navigator.plugins[0][0])
console.log(dd[0].enabledPlugin[0]==dd[0])
console.log(navigator.plugins[0][0].enabledPlugin==dd)
// console.log(navigator.plugins[0][0].enabledPlugin==dd[1].enabledPlugin)
//*/