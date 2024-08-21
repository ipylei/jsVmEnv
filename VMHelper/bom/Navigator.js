Navigator = function Navigator() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(Navigator);

Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true
    }
});

// 初始化含natigator对象
navigator = new class navigator { };
navigator.__proto__ = Navigator.prototype;


//----------------------------------------------------------------------------------
/*
只存放Navigator.prototype对象不能直接访问，但实例能直接访问的属性! 
因为有的属性不准原型直接访问，却准实例访问。方法可能亦如此，但可以直接在里面判断this，而且可能还需要保护函数。 
而属性不行，只能通过getter和setter即访问器属性的形式来判断this)
*/


vmcore.propertymanager.Navigator = {};

// 访问器属性
vmcore.propertymanager.Navigator.AccessorAttributes = {
    language: 'zh-CN',
    languages: ['zh-CN', 'zh'],
    platform: 'Win32',
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',

    //plugins赋值
    plugins: vmcore.memory.PluginArray._array,
    mimeTypes: vmcore.memory.MimeTypeArray._array,

    vendor: 'Google Inc.',
    vendorSub: "",
    productSub: "20030107",
    maxTouchPoints: 0,
    scheduling: {},
    userActivation: {},
    doNotTrack: null,
    geolocation: {},
    connection: {},
    webkitTemporaryStorage: {},
    webkitPersistentStorage: {},
    windowControlsOverlay: {},
    hardwareConcurrency: 16,
    cookieEnabled: true,
    product: 'Gecko',
    onLine: true,
    webdriver: false,
    protectedAudience: {},
    bluetooth: {},
    storageBuckets: {},
    clipboard: {},
    credentials: {},
    keyboard: {},
    managed: {},
    mediaDevices: {},
    storage: {},
    serviceWorker: {},
    virtualKeyboard: {},
    wakeLock: {},
    deviceMemory: 8,
    userAgentData: {},
    login: {},
    ink: {},
    mediaCapabilities: {},
    hid: {},
    locks: {},
    gpu: {},
    mediaSession: {},
    permissions: {},
    presentation: {},
    usb: {},
    xr: {},
    serial: {},
};
// 数据属性
vmcore.propertymanager.Navigator.DataAttributes = {
};
// 数据属性:方法
vmcore.propertymanager.Navigator.DataFuncAttributes = [
    "getGamepads",
    // "javaEnabled",
    "sendBeacon",
    "vibrate",
    "adAuctionComponents",
    "runAdAuction",
    "canLoadAdAuctionFencedFrame",
    "canShare",
    "share",
    "clearAppBadge",
    // "getBattery",
    "getUserMedia",
    "requestMIDIAccess",
    "requestMediaKeySystemAccess",
    "setAppBadge",
    "webkitGetUserMedia",
    "clearOriginJoinedAdInterestGroups",
    "createAuctionNonce",
    "deprecatedReplaceInURN",
    "deprecatedURNToURL",
    "getInstalledRelatedApps",
    "joinAdInterestGroup",
    "leaveAdInterestGroup",
    "updateAdInterestGroups",
    "registerProtocolHandler",
    "unregisterProtocolHandler",
]


//--------------------------------------------------------
/* 原型对象 =》属性   一个个定义getter属性太麻烦了，在这里遍历时统一定义吧*/
for (var prop in vmcore.propertymanager.Navigator.AccessorAttributes) {
    Object.defineProperty(Navigator.prototype, prop, (function (param) {
        return {
            get: function prop() {
                Developer.log(`[dev] Navigator.prototype ${param} 描述符 get 被调用了`);
                if (this instanceof Navigator) {
                    return vmcore.propertymanager.Navigator.AccessorAttributes[param];
                } else {
                    throw new TypeError("Illegal invocation");
                }
            },
            set: undefined,
            enumerable: true,
            configurable: true,
        }
    })(prop));
}

// 数据属性，value不是方法
for (var prop in vmcore.propertymanager.Navigator.DataAttributes) {
    Object.defineProperty(Navigator.prototype, prop, (function (param) {
        return {
            value: vmcore.propertymanager.Navigator.DataAttributes[param],
            writable: true,
            enumerable: true,
            configurable: true,
        }

    })(prop));
}

// 数据属性，value是方法
for (var prop of vmcore.propertymanager.Navigator.DataFuncAttributes) {
    Object.defineProperty(Navigator.prototype, prop, (function (param) {
        eval(`var ret =  {
            value: function ${param}(){
                Developer.log("[dev] Navigator.prototype ${param} 描述符 value 被调用了");
            },
            writable: true,
            enumerable: true,
            configurable: true,
        }`)
        vmcore.func_set_native(ret.value);
        return ret;
    })(prop));
}

// 数据属性，value是方法，单独具体实现
Object.defineProperty(Navigator.prototype, "javaEnabled", {
    value: function javaEnabled() {
        console.log("[dev] Navigator.prototype javaEnabled 描述符 value 被调用了");
        return false;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Navigator.prototype.javaEnabled);


Object.defineProperty(Navigator.prototype, "getBattery", {
    value: function getBattery() {
        Developer.log("[dev] Navigator.prototype getBattery 描述符 [value] [call] 被调用了");
        let obj = {};
        obj.__proto__ = BatteryManager.prototype;
        return obj;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Navigator.prototype.getBattery);
//----------------------------------------------------------------------------------


