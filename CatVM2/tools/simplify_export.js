/* 

    注意默认值为default的值!!!

*/


function export_prototype(func, instance, name="default") {
    /* 导出函数的原型对象
        func: 函数对象
        instance: func的一个实例或一个子类实例，因为有的属性函数原型对象无法获取，而实例却能获取

        示例：export_prototype(Storage, localStorage)
    */
    var code = "";
    _name = func.name || name;

    for (let prop in func.prototype) {
        var value = "default";
        try {
            value = instance ? instance[prop] : "default";
            value = func.prototype[prop];
        } catch (error) {
            console.log("原型获取属性报错", prop, error);
        }

        switch (typeof value) {
            //function时，value.toString();
            case "function":
                code += `${_name}.prototype.${prop} = function(){debugger}; catvm.func_set_native(${_name}.prototype.${prop});\n`;
                break
            //object时，value.toString();
            case "object":
                code += `${_name}.prototype.${prop} = ${value.toString()}\n`;
                break
            default:
                code += `${_name}.prototype.${prop} = ${value};\n`;
        }

    }
    console.log(code);
    return code;
}


function export_instance(instance, name) {
    /* 导出函数的实例对象
        instance: 实例对象
        name: 对象名

        示例：export_instance(localStorage, "localStorage")
    */
    var code = "";
    _name = name || "default";

    var propList = Object.getOwnPropertyNames(localStorage);
    for (let prop of  propList) {
        var value = "default";
        try {
            value = instance[prop] || "default";
        } catch (error) {
            console.log("对象获取属性报错", prop, error);
        }

        switch (typeof value) {
            //function时，value.toString();
            case "function":
                code += `${_name}.${prop} = function(){debugger}; catvm.func_set_native(${_name}.prototype.${prop});\n`;
                break
            //object时，value.toString();
            case "object":
                code += `${_name}.${prop} = ${value.toString()}\n`;
                break
            default:
                code += `${_name}.${prop} = ${value};\n`;
        }
    }
    console.log(code);
    return code;
}
