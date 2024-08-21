Window = function Window() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");

}; vmcore.func_set_native(Window);

Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    },

    PERSISTENT: {
        configurable: false,
        enumerable: true,
        value: 1,
        writable: false
    },

    TEMPORARY: {
        configurable: false,
        enumerable: true,
        value: 0,
        writable: false
    }

});

//Window.prototype
//--------------------------------------------------------
//--------------------------------------------------------


//--------------------------------------------------------
vmcore.memory.getRandomInt = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//补window额外的属性或方法
if (window.env && window.env == "isolated-vm") {
    ilog("特别补充！");

    // window.setTimeout = function () { };
    // window.setInterval = function () { };

    // window.setTimeout = function setTimeout(func, delay) {
    //     Developer.log("[dev] window setTimeout 描述符 [value] [call] 被调用了", delay);
    //     Promise.resolve().then(function () {
    //         //其中func可能是一个方法 也可能是一段文本
    //         if (typeof func == "string") {
    //             eval(func)
    //         } else {
    //             func()
    //         }
    //     })
    //     return 1;
    // }; 

    // window.setInterval = function (func, delay) {
    //     Developer.log("[dev] window setInterval 描述符 [value] [call] 被调用了", delay);
    //     return setTimeout(func, delay);
    // }; 

    vmcore.memory._setTimeout = setTimeout;
    setTimeout = function (func, delay) {
        let result;

        let timeoutID = vmcore.memory.getRandomInt(1, 10000);
        Developer.log("[dev] window setTimeout 描述符 [value] [call] 被调用了", delay, "timeoutID: ", timeoutID);

        if (typeof func == "string") {
            let tmp = () => { return eval(func); }
            result = vmcore.memory._setTimeout.applyIgnored(undefined, [tmp, delay]);
        }
        else {
            result = vmcore.memory._setTimeout.applyIgnored(undefined, [func, delay]);
        }

        // let val =  vmcore.memory._setTimeout.apply(undefined, [...arguments]);
        // let val =  vmcore.memory._setTimeout.applyIgnored(undefined, [...arguments]);
        // let val = vmcore.memory._setTimeout.applySync(undefined, [func, delay]);
        return timeoutID;
    }


    setInterval = function (func, delay) {
        Developer.log("[dev] window setInterval 描述符 [value] [call] 被调用了", delay);
        return setTimeout(func, delay);
    }

    // vmcore.memory._clearTimeout = clearTimeout;
    // clearTimeout = function(timeoutID){
    //     Developer.log("[dev] window clearTimeout 描述符 [value] [call] 被调用了: ", timeoutID);
    //     return vmcore.memory._clearTimeout.applyIgnored(undefined, [timeoutID]);
    // }
} else {
    vmcore.memory._setTimeout = setTimeout;

    setTimeout = function (func, delay) {
        Developer.log("[dev] window setTimeout 描述符 [value] [call] 被调用了", delay);

        let result;
        if (typeof func == "string") {
            let tmp = () => { return eval(func); }
            result = vmcore.memory._setTimeout(tmp, delay);
        }
        else {
            result = vmcore.memory._setTimeout(func, delay);
        }

        // Developer.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", result);
        return result;
    }


    setInterval = function (func, delay) {
        Developer.log("[dev] window setInterval 描述符 [value] [call] 被调用了", delay);
        return setTimeout(func, delay);
    }

}

setTimeout && vmcore.func_set_native(window.setTimeout);
setInterval && vmcore.func_set_native(window.setInterval);

Object.defineProperty(window, "clearTimeout", {
    value: function clearTimeout(timeoutID) {
        Developer.log("[dev] window clearTimeout 描述符 [value] [call] 被调用了: ", timeoutID);
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.clearTimeout);

Object.defineProperty(window, "clearInterval", {
    value: function clearInterval(intervalID) {
        Developer.log("[dev] window clearInterval 描述符 [value] [call] 被调用了: ", intervalID);
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.clearInterval);



//--------------------------------------------------------
//补完window的属性或方法后，再构建起window->Window的原型链
window.__proto__ = Window.prototype;
// Window.prototype.__proto__ = WindowProperties.prototype;  //放到WindowProperties.js中去补

vmcore.propertymanager.window = {};
