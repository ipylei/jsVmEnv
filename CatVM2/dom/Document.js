function Document() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(Document);

Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});



function HTMLCollection() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(HTMLCollection);

Object.defineProperties(HTMLCollection.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCollection",
        configurable: true
    }
});


// -------------------------------------------------------------
Object.defineProperty(Document.prototype, "head", {
    get: function () {
        if (this instanceof Document) {
            return catvm.memory.elements.head;  //唯一
        } else {
            throw new TypeError("Illegal invocation");
        }
    }
});

Object.defineProperty(Document.prototype, "documentElement", {
    get: function () {
        if (this instanceof Document) {
            return catvm.memory.elements.html;  //唯一
        } else {
            throw new TypeError("Illegal invocation");
        }
    }
});

Object.defineProperty(Document.prototype, "cookie", {
    get: function () {
        if (this instanceof Document) {
            // return this.totalProp.cookie;
            let list = [];
            for (let key in catvm.memory.cookie_copy) {
                list.push(`${key}=${catvm.memory.cookie_copy[key]}`);
            }
            return list.join("; ");
        } else {
            throw new TypeError("Illegal invocation");
        }
    }
});



//创建元素(标签)，根据名称去创建
Document.prototype.createElement = function createElement(tagName) {
    var tagName = ("" + tagName).toLowerCase();
    // 在这里调用对应的方法统一创建对应标签，而不是写很多个if...else if等，那样太麻烦也太有限了。
    if (!catvm.memory.htmlElements[tagName]) {
        //还没有实现的，需要在如HTMLDivElement.js中实现
        debugger;
        return null;
    }
    debugger;
    //对创建的对象挂上代理
    // return catvm.memory.htmlElements[tagName]();
    return catvm.proxy(catvm.memory.htmlElements[tagName]());
}; catvm.func_set_native(Document.prototype.createElement);

//查找元素，用id匹配当前环境内存中已有的Element，然后返回单个Node
Document.prototype.getElementById = function getElementById(id) {
    // debugger;
    console.log("Document.prototype.getElementById()被调用！调用对象:", this, id);
    return null;
}; catvm.func_set_native(Document.prototype.getElementById);

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
}; catvm.func_set_native(Document.prototype.getElementsByTagName);

// 根据name查找
Document.prototype.getElementsByName = function getElementsByName(name) {
    console.log("Document.prototype.getElementsByName()被调用！调用对象:", this, name);
    if (name == "head") {
        return [this.head];
    }
    return null;
}; catvm.func_set_native(Document.prototype.getElementsByName);

// -------------------------------------------------------------



Document.__proto__ = Node;
Document.prototype.__proto__ = Node.prototype;
