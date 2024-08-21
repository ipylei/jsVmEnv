class VMStack extends Error {
    constructor(message) {
        super(message);
        this.name = "VMStack";
        this.stack = this.stack.split("\n").slice(0, 5).join("\n");
    }
    printStack() {
        console.log("%c" + this.stack, "color:#0000ff");
    }
};
Object.defineProperties(VMStack.prototype, {
    [Symbol.toStringTag]: {
        value: "VMStack",
        configurable: true
    }
});



//框架代理功能(注意：全局对象this是不可代理的，所以诸如使用this.document也就在window对象上没有代理到，但是document获取属性依旧会被代理到)
vmcore.proxy = function (o) {
    if (!vmcore.memory.config.proxy) {
        return o
    }

    return new Proxy(o, {

        get(target, property, receiver) {
            console.table([{ "type": "get<--", "obj": target, "property": property, "value": target[property] }]);
            if (vmcore.memory.config.stack) {
                //打印调用栈
                // console.trace("get<--");
                // let stack = (new Error("get<--")).stack.split("\n").slice(0, 5).join("\n");
                // console.log("%c" + stack, "color:#0000ff");
                (new VMStack("get<--")).printStack();
            }
            return target[property];
            // return Reflect.get(...arguments);
        },

        set(target, property, value, receiver) {
            console.table([{ "type": "set-->", "obj": target, "property": property, "value": value }]);
            if (vmcore.memory.config.stack) {
                (new VMStack("set-->")).printStack();
            }
            return Reflect.set(...arguments);  // return target[property] = value;
            // return Reflect.set(target, property, value);
        },


        deleteProperty(target, key) {
            console.table([{ "type": "delete-->", "obj": target, "property": key }]);
            if (vmcore.memory.config.stack) {
                (new VMStack("delete-->")).printStack();
            }
            debugger;
            return Reflect.deleteProperty(target, key);
        }
    })

}

