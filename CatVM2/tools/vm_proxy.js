class CatVMStack extends Error {
    constructor(message) {
        super(message);
        this.name = "CatVMStack";
        this.stack = this.stack.split("\n").slice(0, 5).join("\n");
    }
    printStack() {
        console.log("%c" + this.stack, "color:#0000ff");
    }
};
Object.defineProperties(CatVMStack.prototype, {
    [Symbol.toStringTag]: {
        value: "CatVMStack",
        configurable: true
    }
});



//框架代理功能(注意：全局对象this是不可代理的，所以诸如使用this.document也就在window对象上没有代理到，但是document获取属性依旧会被代理到)
catvm.proxy = function (o) {
    if (!catvm.memory.config.proxy) {
        return o
    }

    return new Proxy(o, {

        get(target, property, receiver) {
            console.table([{ "type": "get<--", "obj": target, "property": property, "value": target[property] }]);
            if (catvm.memory.config.stack) {
                //打印调用栈
                // console.trace("get<--");
                // let stack = (new Error("get<--")).stack.split("\n").slice(0, 5).join("\n");
                // console.log("%c" + stack, "color:#0000ff");
                (new CatVMStack("get<--")).printStack();
            }
            return target[property];
            // return Reflect.get(...arguments);
        },

        set(target, property, value, receiver) {
            console.table([{ "type": "set-->", "obj": target, "property": property, "value": value }]);
            if (catvm.memory.config.stack) {
                (new CatVMStack("set-->")).printStack();
            }
            return Reflect.set(...arguments);  // return target[property] = value;
            // return Reflect.set(target, property, value);
        },


        deleteProperty(target, key) {
            console.table([{ "type": "delete-->", "obj": target, "property": key }]);
            if (catvm.memory.config.stack) {
                (new CatVMStack("delete-->")).printStack();
            }
            debugger;
            return false;
        }
    })

}

