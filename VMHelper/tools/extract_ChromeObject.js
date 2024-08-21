/* function extract_protype(obj, obj_text) {
    // let obj = Func.prototype;
    // let obj_text = `${name}.prototype`;
    // let name = Func.name || _name;

    let output_jscode = "";
    let tail_text = "";

    let all_PropertyDescriptors = Object.getOwnPropertyDescriptors(obj);

    //遍历属性
    for (let _obj_attribute in all_PropertyDescriptors) {
        if (_obj_attribute == "constructor") {
            continue;
        }

        let Descriptors_text = "{";

        //遍历描述符的4个属性: configurable、enumerable、 (writable、value | get、set)
        let is_method = false;
        for (let _descriptor in all_PropertyDescriptors[_obj_attribute]) {
            Descriptors_text += _descriptor;  // {set:
            Descriptors_text += ":";
            let Descriptors_detail = all_PropertyDescriptors[_obj_attribute][_descriptor];

            //get、set以及value为方法的情况
            if (typeof Descriptors_detail === "function") {
                Descriptors_text += `function ${_obj_attribute}(){\nDeveloper.log("[dev] ${obj_text} ${_obj_attribute} 描述符 ${_descriptor} 被调用了");\n}`;  // screen.__proto__ availWidth 描述符 get 被调用了
                // {set:function(){console.log()}
                Descriptors_text += ",\n";

                if (_descriptor == "value") {
                    is_method = true;
                }
            }
            else if (typeof Descriptors_detail === "object") {
                Descriptors_text += `{}`;
                Descriptors_text += ",\n";
            }
            else {
                Descriptors_text += Descriptors_detail;
                Descriptors_text += ",\n";
            }
        }

        Descriptors_text += "}";
        // 设置描述符
        output_jscode += `Object.defineProperty(${obj_text}, "${_obj_attribute}", ${Descriptors_text});`;

        if (is_method) {
            // tail_text += `vmcore.func_set_native(${obj_text}.${_obj_attribute});\n`;
            output_jscode += `\nvmcore.func_set_native(${obj_text}.${_obj_attribute});`;
        }
        output_jscode += "\n\n";
    }

    // 加在最后
    // if (tail_text) {
    //     output_jscode += tail_text;
    // }
    console.log(output_jscode);
} */


function extract_protype2(obj, obj_text, instance, special_attr) {
    let output_jscode = "";
    let tail_text = "";

    let all_PropertyDescriptors = Object.getOwnPropertyDescriptors(obj);

    //遍历属性
    for (let _obj_attribute in all_PropertyDescriptors) {
        if (_obj_attribute == "constructor") {
            continue;
        }

        if(special_attr && _obj_attribute != special_attr){
            continue;
        }

        let Descriptors_text = "{";

        //遍历描述符的4个属性: configurable、enumerable、 (writable、value | get、set)
        let isDataFuncAttributes = false;
        let isAccessorAttributes = false;
        for (let _descriptor in all_PropertyDescriptors[_obj_attribute]) {
            let Descriptors_detail = all_PropertyDescriptors[_obj_attribute][_descriptor];
            if (typeof Descriptors_detail == "function") {
                if (_descriptor == "value") {
                    isDataFuncAttributes = true;
                }
                else if (_descriptor == "get") {
                    isAccessorAttributes = true;
                }
            }

        }

        // 访问器属性专属前缀
        let prefix = "";
        if (isAccessorAttributes) {
            let val = "\"\"";
            if (instance) {
                let _val = instance[_obj_attribute];
                if (typeof _val == "object" || typeof _val == "function") {
                    val = null;
                }
                else if (typeof _val == "string") {
                    val = `"${_val}"`;
                }
                else {
                    val = _val;
                }
            }
            prefix = `vmcore.propertymanager.${obj_text.split(".")[0]}.${_obj_attribute} = ${val};\n`;
        }

        // 数据属性专属后缀
        let suffix = "";
        if (isDataFuncAttributes) {
            suffix = `\nvmcore.func_set_native(${obj_text}.${_obj_attribute});`
        }


        for (let _descriptor in all_PropertyDescriptors[_obj_attribute]) {
            Descriptors_text += _descriptor;  // {set:
            Descriptors_text += ":";
            let Descriptors_detail = all_PropertyDescriptors[_obj_attribute][_descriptor];

            //get、set以及value为方法的情况
            if (typeof Descriptors_detail === "function") {
                // Descriptors_text += `function ${_obj_attribute}(){\nDeveloper.log("[dev] ${obj_text} ${_obj_attribute} 描述符 ${_descriptor} 被调用了");\n}`;  // screen.__proto__ availWidth 描述符 get 被调用了
                // {set:function(){console.log()}


                if (_descriptor == "value") {
                    Descriptors_text += `function ${_obj_attribute}(){\nDeveloper.log("[dev] ${obj_text} ${_obj_attribute} 描述符 [${_descriptor}] [call] 被调用了");\n}`;
                }
                else if (_descriptor == "get") {
                    Descriptors_text += `function ${_obj_attribute}(){\nDeveloper.log("[dev] ${obj_text} ${_obj_attribute} 描述符 [${_descriptor}] 被调用了");
                    return vmcore.propertymanager.${obj_text.split(".")[0]}.${_obj_attribute};\n}`;
                }
                else if (_descriptor == "set") {
                    Descriptors_text += `function ${_obj_attribute}(val){\nDeveloper.log("[dev] ${obj_text} ${_obj_attribute} 描述符 [${_descriptor}] 被调用了");
                    vmcore.propertymanager.${obj_text.split(".")[0]}.${_obj_attribute} = val;\n}`;
                }
                Descriptors_text += ",\n";

            }
            else if (typeof Descriptors_detail == "object") {
                Descriptors_text += `{}`;
                Descriptors_text += ",\n";
            }
            else {
                Descriptors_text += Descriptors_detail;
                Descriptors_text += ",\n";
            }
        }

        Descriptors_text += "}";
        // 设置描述符
        output_jscode += prefix;
        output_jscode += `Object.defineProperty(${obj_text}, "${_obj_attribute}", ${Descriptors_text});`;
        output_jscode += suffix;
        output_jscode += "\n\n";
    }

    // 加在最后
    // if (tail_text) {
    //     output_jscode += tail_text;
    // }
    console.log(output_jscode);
}


var obj = EventTarget.prototype;
var obj_text = "EventTarget.prototype";
extract_protype(obj, obj_text);


var obj = Location.prototype;
var obj_text = "Location.prototype";
extract_protype(obj, obj_text);

var obj = Screen.prototype;
var obj_text = "Screen.prototype";
extract_protype(obj, obj_text);


var instance = {
    name: "York",
    sayHi: function () {
        console.log("Hi!");
    }
}
var obj = instance;
var obj_text = "instance";
extract_protype(obj, obj_text);