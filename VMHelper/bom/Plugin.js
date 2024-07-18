Plugin = function Plugin() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(Plugin);

Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {
        value: "Plugin",
        configurable: true
    },

    /* [Symbol.iterator]: {
        value: vmcore.memory.Plugin.iterator,
        enumerable: false,
        configurable: true
    } */
});

//--------------------------------------------
Plugin.prototype[Symbol.iterator] = function* values() {
    debugger;

    var that = this;
    return {
        next: function () {
            if (this.index == undefined) {
                this.index = 0;
            }

            var currentValue;
            var temp = that[this.index];
            if (temp == undefined) {
                currentValue = { value: temp, done: true };
            }
            else {
                currentValue = { value: temp, done: false };
            }
            this.index++;
            return currentValue;
        }
    }
}; vmcore.func_set_native(Plugin.prototype[Symbol.iterator]);


Plugin.prototype.description = "";
Plugin.prototype.filename = "";
Plugin.prototype.name = "";
Plugin.prototype.length = 0;

// 根据下标获取MimeType
Plugin.prototype.item = function item(index) {
    return this[index];
}; vmcore.func_set_native(Plugin.prototype.item);
// 根据名称获取MimeType
Plugin.prototype.namedItem = function namedItem(key) {
    return this[key];
}; vmcore.func_set_native(Plugin.prototype.namedItem);



//--------------------------------------------


//根据一个文本，创建一个Plugin实例，然后用户就可以手动创建并加入到navigator.plugins数组中了
vmcore.memory.Plugin.$new = function (data) {
    var plu = {};

    if (data) {
        plu.description = data.description;
        plu.filename = data.filename;
        plu.name = data.name;

        //Mimetype
        if (data.MimeTypes) {
            plu.length = data.MimeTypes.length;

            for (let index = 0; index < data.MimeTypes.length; index++) {
                // 获取文本中的MimeType文本，然后创建mimeType对象
                var mimeTypeData = data.MimeTypes[index];

                //指定下标！0,1,2,... ; 但是每次访问其实是new一个mimeType！
                /* 
                // var mimeType = vmcore.memory.MimeType.$new(mimeTypeData, plu);
                plu[index] = mimeType;

                //添加根据名称访问方式(不可枚举的情况就变成浅色)
                Object.defineProperty(plu, mimeType.type, {
                    value: mimeType,
                    writable: false,
                    enumerable: false,
                    configurable: true
                })

                */
                Object.defineProperty(plu, index, {
                    get: function () {
                        var mimeType = vmcore.memory.MimeType.$new(mimeTypeData, plu);
                        Object.defineProperty(plu, mimeType.type, {
                            value: mimeType,
                            writable: false,
                            enumerable: false,
                            configurable: true
                        })
                        return mimeType;
                    },
                    enumerable: true,
                    configurable: true
                });
            }
        }
    }
    //注意： 先给实例添加属性最后再关联，上面plu.length、plu[index]等才不会触发原型的getter和setter方法！
    plu.__proto__ = Plugin.prototype;
    return plu;
};



