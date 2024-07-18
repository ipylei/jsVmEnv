Document = function Document() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(Document);

Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});




// -------------------------------------------------------------
//创建元素(标签)，根据名称去创建
Document.prototype.createElement = function createElement(tagName) {
    var tagName = ("" + tagName).toLowerCase();
    // 在这里调用对应的方法统一创建对应标签，而不是写很多个if...else if等，那样太麻烦也太有限了。
    if (!vmcore.memory.htmlElements[tagName]) {
        //还没有实现的，需要在如HTMLDivElement.js中实现
        debugger;
        return null;
    }
    debugger;
    //对创建的对象挂上代理
    // return vmcore.memory.htmlElements[tagName]();
    return vmcore.proxy(vmcore.memory.htmlElements[tagName]());
}; vmcore.func_set_native(Document.prototype.createElement);

//查找元素，用id匹配当前环境内存中已有的Element，然后返回单个Node
Document.prototype.getElementById = function getElementById(id) {
    // debugger;
    console.log("Document.prototype.getElementById()被调用！调用对象:", this, id);
    return null;
}; vmcore.func_set_native(Document.prototype.getElementById);

//根据标签名查找标签，返回NodeList
Document.prototype.getElementsByTagName = function getElementsByTagName(tagName) {
    console.log("Document.prototype.getElementsByTagName()被调用！调用对象:", this, tagName);
    if (tagName == "head") {
        return [this.head];
    }
    if (tagName == "base") {
        console.log("========================>");
        var empty_list = [];
        empty_list.__proto__ = HTMLCollection.prototype;
        return empty_list;
    }
    return null;
}; vmcore.func_set_native(Document.prototype.getElementsByTagName);

// 根据name查找
Document.prototype.getElementsByName = function getElementsByName(name) {
    console.log("Document.prototype.getElementsByName()被调用！调用对象:", this, name);
    if (name == "head") {
        return [this.head];
    }
    return null;
}; vmcore.func_set_native(Document.prototype.getElementsByName);


//html
Object.defineProperty(Document.prototype, "documentElement", {
    get: function () {
        if (this instanceof Document) {
            return vmcore.memory.elements.html;  //唯一
        } else {
            throw new TypeError("Illegal invocation");
        }
    }
});

//document.head
Object.defineProperty(Document.prototype, "head", {
    get: function () {
        if (this instanceof Document) {
            return vmcore.memory.elements.head;  //唯一
        } else {
            throw new TypeError("Illegal invocation");
        }
    }
});


//document.body
Object.defineProperty(Document.prototype, "body", {
    get: function () {
        if (this instanceof Document) {
            return vmcore.memory.elements.body;
        }else{
            throw new TypeError("Illegal invocation");
        }
    }
})

//document.all
Object.defineProperty(Document.prototype, "all", {
    get: function () {
        var empty_list = [...vmcore.memory.elements];
        empty_list.__proto__ = HTMLAllCollection.prototype;
        return empty_list;
    }
})


/*
    document.cookie的获取和设置都比较特殊，所以特殊处理 

let vmcore ={};
vmcore.memory = {};
vmcore.memory.cookie_copy = {};
 */
Object.defineProperty(Document.prototype, "cookie", {
    get: function () {
        if (!(this instanceof Document)) {
            throw new TypeError("Illegal invocation");
        }

        // return this.totalProp.cookie;
        let list = [];
        for (let key in vmcore.memory.cookie_copy) {
            list.push(`${key}=${vmcore.memory.cookie_copy[key]}`);
        }

        var retval = list.join("; ");
        console.log("获取cookie成功!");
        return retval;
    },
    set: function (val) {
        ilog("set cookie => ", val);

        if (!(this instanceof Document)) {
            throw new TypeError("Illegal invocation");
        }
        if(val == ''){
            return;
        }
        console.log("设置cookie成功", val);

        let validstr = val.split(";")[0];
        let [key, value] = validstr.trim().split("=");
        vmcore.memory.cookie_copy[key] = value;

        // if (val.indexOf("domain=") > 0 || val.indexOf("expires=") > 0) {
        //     let validstr = val.split(";")[0];
        //     let [key, value] = validstr.trim().split("=");
        //     vmcore.memory.cookie_copy[key] = value;
        // }
        // let validstr_list = val.split(";");
        // for (let validstr of validstr_list) {
        //     let [key, value] = validstr.trim().split("=");
        //     vmcore.memory.cookie_copy[key] = value;
        // }
    }
});
// -------------------------------------------------------------



Document.__proto__ = Node;
Document.prototype.__proto__ = Node.prototype;
