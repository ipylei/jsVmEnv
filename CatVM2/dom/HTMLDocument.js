function HTMLDocument() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(HTMLDocument);

Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDocument",
        configurable: true
    }
});

//--------------------------------------------
HTMLDocument.prototype.referrer = location ? location.href : "";
//--------------------------------------------
HTMLDocument.__proto__ = Document;
HTMLDocument.prototype.__proto__ = Document.prototype;


// 初始化document对象
document = new class document { };
document.__proto__ = HTMLDocument.prototype;

document.referrer =  "";


/*
    document.cookie的获取和设置都比较特殊，所以特殊处理 

let catvm ={};
catvm.memory = {};
catvm.memory.cookie_copy = {};
 */
document.__defineGetter__("cookie", function () {
    let list = [];
    for (let key in catvm.memory.cookie_copy) {
        list.push(`${key}=${catvm.memory.cookie_copy[key]}`);
    }
    return list.join("; ");
});
document.__defineSetter__("cookie", function (val) {
    /* 传入的参数可能是多个cookie组成的字符串 */
    debugger;
    let validstr = val.split(";")[0];
    let [key, value] = validstr.trim().split("=");
    catvm.memory.cookie_copy[key] = value;

});

// TODO HTMLDocument -> Document -> Node -> EventTarget 
