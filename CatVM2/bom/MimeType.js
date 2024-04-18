function MimeType() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(MimeType);

Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeType",
        configurable: true
    }
});


//--------------------------------------------
MimeType.prototype.description = "";
MimeType.prototype.suffixes = "";
MimeType.prototype.type = "";
MimeType.prototype.enabledPlugin = null;
//--------------------------------------------



//在Plugin.js中catvm.memory.Plugin.$new中调用
catvm.memory.MimeType.$new = function (data, initPlugin) {
    /*
        data: 用来初始化MimeType实例的对象，
        initPlugin: Plugin实例
     */
    var mimetype = {};
    if (data) {
        mimetype.type = data.type;
        mimetype.suffixes = data.suffixes;
        mimetype.description = data.description;
        mimetype.enabledPlugin = initPlugin;
    }

    mimetype.__proto__ = MimeType.prototype;
    return mimetype;
};


