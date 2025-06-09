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
    ilog("isolated-vm环境下的特别补充！");

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

    vmcore.func_set_native(setTimeout);
    vmcore.func_set_native(setInterval);


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



class TextEncoder {
    constructor() {
        this.encoding = 'utf-8';
    }
    encode(input) {
        const buffer = new Uint8Array(input.length * 4);
        const view = new DataView(buffer.buffer);
        let pos = 0;
        for (let i = 0; i < input.length; i++) {
            let code = input.charCodeAt(i);
            // UTF-8编码逻辑（与浏览器一致）
            if (code < 0x80) {
                view.setUint8(pos++, code);
            } else if (code < 0x800) {
                view.setUint8(pos++, (code >> 6) | 0xC0);
                view.setUint8(pos++, (code & 0x3F) | 0x80);
            } else if (code < 0x10000) {
                view.setUint8(pos++, (code >> 12) | 0xE0);
                view.setUint8(pos++, ((code >> 6) & 0x3F) | 0x80);
                view.setUint8(pos++, (code & 0x3F) | 0x80);
            } else {
                view.setUint8(pos++, (code >> 18) | 0xF0);
                view.setUint8(pos++, ((code >> 12) & 0x3F) | 0x80);
                view.setUint8(pos++, ((code >> 6) & 0x3F) | 0x80);
                view.setUint8(pos++, (code & 0x3F) | 0x80);
            }
        }
        return buffer.subarray(0, pos);
    }
}

class TextDecoder {
    constructor(encoding = 'utf-8') {
        this.encoding = encoding;
    }
    decode(buffer) {
        // UTF-8解码逻辑（与浏览器一致）
        let bytes = new Uint8Array(buffer);
        let str = '';
        let i = 0;
        while (i < bytes.length) {
            let byte1 = bytes[i++];
            if (byte1 < 0x80) {
                str += String.fromCharCode(byte1);
            } else if (byte1 >= 0xC0 && byte1 < 0xE0) {
                let byte2 = bytes[i++];
                str += String.fromCharCode(((byte1 & 0x1F) << 6) | (byte2 & 0x3F));
            } else if (byte1 >= 0xE0 && byte1 < 0xF0) {
                let byte2 = bytes[i++];
                let byte3 = bytes[i++];
                str += String.fromCharCode(((byte1 & 0x0F) << 12) | ((byte2 & 0x3F) << 6) | (byte3 & 0x3F));
            } else {
                let byte2 = bytes[i++];
                let byte3 = bytes[i++];
                let byte4 = bytes[i++];
                let code = ((byte1 & 0x07) << 18) | ((byte2 & 0x3F) << 12) | ((byte3 & 0x3F) << 6) | (byte4 & 0x3F);
                // 处理代理对（Surrogate Pair）
                str += String.fromCodePoint(code);
            }
        }
        return str;
    }
}

//--------------------------------------------------------
//补完window的属性或方法后，再构建起window->Window的原型链
window.__proto__ = Window.prototype;
// Window.prototype.__proto__ = WindowProperties.prototype;  //放到WindowProperties.js中去补

vmcore.propertymanager.window = {};
