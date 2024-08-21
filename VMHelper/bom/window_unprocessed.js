/* 这里存放的是：本应新建对应.js文件，但是其代码量太少或者其不太重要，所以都放这里了 */

XPathExpression = function XPathExpression() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(XPathExpression);

Object.defineProperties(XPathExpression.prototype, {
    [Symbol.toStringTag]: {
        value: "XPathExpression",
        configurable: true
    }
});
//-----------------
Object.defineProperty(XPathExpression.prototype, "evaluate", {
    value: function evaluate() {
        Developer.log("[dev] XPathExpression.prototype evaluate 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(XPathExpression.prototype.evaluate);


//>>>
webkitRequestFileSystem = function webkitRequestFileSystem() {
    Developer.log("[dev] window webkitRequestFileSystem 描述符 [value] [call] 被调用了", JSON.stringify(arguments));
}; vmcore.func_set_native(XPathExpression);

//>>>
Object.defineProperty(window, "MutationObserver", {
    value: function MutationObserver() {
        Developer.log("[dev] window MutationObserver 描述符 [value] [call] 被调用了", JSON.stringify(arguments));
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MutationObserver);

Object.defineProperties(MutationObserver.prototype, {
    [Symbol.toStringTag]: {
        value: "MutationObserver",
        configurable: true
    }
});

Object.defineProperty(MutationObserver.prototype, "disconnect", {
    value: function disconnect() {
        Developer.log("[dev] MutationObserver.prototype disconnect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(MutationObserver.prototype.disconnect);

Object.defineProperty(MutationObserver.prototype, "observe", {
    value: function observe() {
        Developer.log("[dev] MutationObserver.prototype observe 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(MutationObserver.prototype.observe);

Object.defineProperty(MutationObserver.prototype, "takeRecords", {
    value: function takeRecords() {
        Developer.log("[dev] MutationObserver.prototype takeRecords 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(MutationObserver.prototype.takeRecords);

//>>>
Object.defineProperty(window, "Image", {
    value: function Image() {
        Developer.log("[dev] window Image 描述符 [value] [call] 被调用了");
        return vmcore.memory.CreateElement["img"]();
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Image);

//>>>
Object.defineProperty(window, "chrome", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(window.chrome, "loadTimes", {
    value: function loadTimes() {
        Developer.log("[dev] window.chrome loadTimes 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.chrome.loadTimes);

Object.defineProperty(window.chrome, "csi", {
    value: function csi() {
        Developer.log("[dev] window.chrome csi 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.chrome.csi);

Object.defineProperty(window.chrome, "app", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});


//>>>
Object.defineProperty(window, "BatteryManager", {
    value: function BatteryManager() {
        Developer.log("[dev] window BatteryManager 描述符 [value] [call] 被调用了");
        throw new TypeError("Illegal constructor");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BatteryManager);

Object.defineProperties(BatteryManager.prototype, {
    [Symbol.toStringTag]: {
        value: "BatteryManager",
        configurable: true
    }
});
BatteryManager.prototype.__proto__ = EventTarget;

vmcore.propertymanager.BatteryManager = {};
vmcore.propertymanager.BatteryManager.charging = true;
Object.defineProperty(BatteryManager.prototype, "charging", {
    get: function charging() {
        Developer.log("[dev] BatteryManager.prototype charging 描述符 [get] 被调用了");
        return vmcore.propertymanager.BatteryManager.charging;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.BatteryManager.chargingTime = Infinity;
Object.defineProperty(BatteryManager.prototype, "chargingTime", {
    get: function chargingTime() {
        Developer.log("[dev] BatteryManager.prototype chargingTime 描述符 [get] 被调用了");
        return vmcore.propertymanager.BatteryManager.chargingTime;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.BatteryManager.dischargingTime = Infinity;
Object.defineProperty(BatteryManager.prototype, "dischargingTime", {
    get: function dischargingTime() {
        Developer.log("[dev] BatteryManager.prototype dischargingTime 描述符 [get] 被调用了");
        return vmcore.propertymanager.BatteryManager.dischargingTime;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.BatteryManager.level = 0.96;
Object.defineProperty(BatteryManager.prototype, "level", {
    get: function level() {
        Developer.log("[dev] BatteryManager.prototype level 描述符 [get] 被调用了");
        return vmcore.propertymanager.BatteryManager.level;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.BatteryManager.onchargingchange = null;
Object.defineProperty(BatteryManager.prototype, "onchargingchange", {
    get: function onchargingchange() {
        Developer.log("[dev] BatteryManager.prototype onchargingchange 描述符 [get] 被调用了");
        return vmcore.propertymanager.BatteryManager.onchargingchange;
    },
    set: function onchargingchange(val) {
        Developer.log("[dev] BatteryManager.prototype onchargingchange 描述符 [set] 被调用了");
        vmcore.propertymanager.BatteryManager.onchargingchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.BatteryManager.onchargingtimechange = null;
Object.defineProperty(BatteryManager.prototype, "onchargingtimechange", {
    get: function onchargingtimechange() {
        Developer.log("[dev] BatteryManager.prototype onchargingtimechange 描述符 [get] 被调用了");
        return vmcore.propertymanager.BatteryManager.onchargingtimechange;
    },
    set: function onchargingtimechange(val) {
        Developer.log("[dev] BatteryManager.prototype onchargingtimechange 描述符 [set] 被调用了");
        vmcore.propertymanager.BatteryManager.onchargingtimechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.BatteryManager.ondischargingtimechange = null;
Object.defineProperty(BatteryManager.prototype, "ondischargingtimechange", {
    get: function ondischargingtimechange() {
        Developer.log("[dev] BatteryManager.prototype ondischargingtimechange 描述符 [get] 被调用了");
        return vmcore.propertymanager.BatteryManager.ondischargingtimechange;
    },
    set: function ondischargingtimechange(val) {
        Developer.log("[dev] BatteryManager.prototype ondischargingtimechange 描述符 [set] 被调用了");
        vmcore.propertymanager.BatteryManager.ondischargingtimechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.BatteryManager.onlevelchange = null;
Object.defineProperty(BatteryManager.prototype, "onlevelchange", {
    get: function onlevelchange() {
        Developer.log("[dev] BatteryManager.prototype onlevelchange 描述符 [get] 被调用了");
        return vmcore.propertymanager.BatteryManager.onlevelchange;
    },
    set: function onlevelchange(val) {
        Developer.log("[dev] BatteryManager.prototype onlevelchange 描述符 [set] 被调用了");
        vmcore.propertymanager.BatteryManager.onlevelchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.name = "";
Object.defineProperty(window, "name", {
    enumerable: true,
    configurable: true,
    get: function () {
        Developer.log("[dev] window name 描述符 get 被调用了");
        return vmcore.propertymanager.window.name;
    },
    set: function (val) {
        Developer.log("[dev] window name 描述符 set 被调用了", val);
        vmcore.propertymanager.window.name = val;
    }
})


Object.defineProperty(window, "Option", {
    value: function Option() {
        Developer.log("[dev] window Option 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Option);


Object.defineProperty(window, "Audio", {
    value: function Audio() {
        Developer.log("[dev] window Audio 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Audio);

Object.defineProperty(window, "webkitURL", {
    value: function webkitURL() {
        Developer.log("[dev] window webkitURL 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.webkitURL);

Object.defineProperty(window, "webkitRTCPeerConnection", {
    value: function webkitRTCPeerConnection() {
        Developer.log("[dev] window webkitRTCPeerConnection 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.webkitRTCPeerConnection);

Object.defineProperty(window, "webkitMediaStream", {
    value: function webkitMediaStream() {
        Developer.log("[dev] window webkitMediaStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.webkitMediaStream);

Object.defineProperty(window, "WebKitMutationObserver", {
    value: function WebKitMutationObserver() {
        Developer.log("[dev] window WebKitMutationObserver 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebKitMutationObserver);

Object.defineProperty(window, "WebKitCSSMatrix", {
    value: function WebKitCSSMatrix() {
        Developer.log("[dev] window WebKitCSSMatrix 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebKitCSSMatrix);

Object.defineProperty(window, "XSLTProcessor", {
    value: function XSLTProcessor() {
        Developer.log("[dev] window XSLTProcessor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XSLTProcessor);

Object.defineProperty(window, "XPathResult", {
    value: function XPathResult() {
        Developer.log("[dev] window XPathResult 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XPathResult);

Object.defineProperty(window, "XPathExpression", {
    value: function XPathExpression() {
        Developer.log("[dev] window XPathExpression 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XPathExpression);

Object.defineProperty(window, "XPathEvaluator", {
    value: function XPathEvaluator() {
        Developer.log("[dev] window XPathEvaluator 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XPathEvaluator);

Object.defineProperty(window, "XMLSerializer", {
    value: function XMLSerializer() {
        Developer.log("[dev] window XMLSerializer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XMLSerializer);

Object.defineProperty(window, "XMLHttpRequestUpload", {
    value: function XMLHttpRequestUpload() {
        Developer.log("[dev] window XMLHttpRequestUpload 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XMLHttpRequestUpload);


Object.defineProperty(window, "XMLDocument", {
    value: function XMLDocument() {
        Developer.log("[dev] window XMLDocument 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XMLDocument);

Object.defineProperty(window, "WritableStreamDefaultWriter", {
    value: function WritableStreamDefaultWriter() {
        Developer.log("[dev] window WritableStreamDefaultWriter 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WritableStreamDefaultWriter);

Object.defineProperty(window, "WritableStreamDefaultController", {
    value: function WritableStreamDefaultController() {
        Developer.log("[dev] window WritableStreamDefaultController 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WritableStreamDefaultController);

Object.defineProperty(window, "WritableStream", {
    value: function WritableStream() {
        Developer.log("[dev] window WritableStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WritableStream);

Object.defineProperty(window, "Worker", {
    value: function Worker() {
        Developer.log("[dev] window Worker 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Worker);

Object.defineProperty(window, "WindowControlsOverlayGeometryChangeEvent", {
    value: function WindowControlsOverlayGeometryChangeEvent() {
        Developer.log("[dev] window WindowControlsOverlayGeometryChangeEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WindowControlsOverlayGeometryChangeEvent);

Object.defineProperty(window, "WindowControlsOverlay", {
    value: function WindowControlsOverlay() {
        Developer.log("[dev] window WindowControlsOverlay 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WindowControlsOverlay);


Object.defineProperty(window, "WheelEvent", {
    value: function WheelEvent() {
        Developer.log("[dev] window WheelEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WheelEvent);

Object.defineProperty(window, "WebSocket", {
    value: function WebSocket() {
        Developer.log("[dev] window WebSocket 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebSocket);

Object.defineProperty(window, "WebGLVertexArrayObject", {
    value: function WebGLVertexArrayObject() {
        Developer.log("[dev] window WebGLVertexArrayObject 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLVertexArrayObject);

Object.defineProperty(window, "WebGLUniformLocation", {
    value: function WebGLUniformLocation() {
        Developer.log("[dev] window WebGLUniformLocation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLUniformLocation);

Object.defineProperty(window, "WebGLTransformFeedback", {
    value: function WebGLTransformFeedback() {
        Developer.log("[dev] window WebGLTransformFeedback 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLTransformFeedback);

Object.defineProperty(window, "WebGLTexture", {
    value: function WebGLTexture() {
        Developer.log("[dev] window WebGLTexture 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLTexture);

Object.defineProperty(window, "WebGLSync", {
    value: function WebGLSync() {
        Developer.log("[dev] window WebGLSync 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLSync);

Object.defineProperty(window, "WebGLShaderPrecisionFormat", {
    value: function WebGLShaderPrecisionFormat() {
        Developer.log("[dev] window WebGLShaderPrecisionFormat 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLShaderPrecisionFormat);

Object.defineProperty(window, "WebGLShader", {
    value: function WebGLShader() {
        Developer.log("[dev] window WebGLShader 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLShader);

Object.defineProperty(window, "WebGLSampler", {
    value: function WebGLSampler() {
        Developer.log("[dev] window WebGLSampler 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLSampler);


Object.defineProperty(window, "WebGLRenderbuffer", {
    value: function WebGLRenderbuffer() {
        Developer.log("[dev] window WebGLRenderbuffer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLRenderbuffer);

Object.defineProperty(window, "WebGLQuery", {
    value: function WebGLQuery() {
        Developer.log("[dev] window WebGLQuery 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLQuery);

Object.defineProperty(window, "WebGLProgram", {
    value: function WebGLProgram() {
        Developer.log("[dev] window WebGLProgram 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLProgram);

Object.defineProperty(window, "WebGLObject", {
    value: function WebGLObject() {
        Developer.log("[dev] window WebGLObject 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLObject);

Object.defineProperty(window, "WebGLFramebuffer", {
    value: function WebGLFramebuffer() {
        Developer.log("[dev] window WebGLFramebuffer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLFramebuffer);

Object.defineProperty(window, "WebGLContextEvent", {
    value: function WebGLContextEvent() {
        Developer.log("[dev] window WebGLContextEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLContextEvent);

Object.defineProperty(window, "WebGLBuffer", {
    value: function WebGLBuffer() {
        Developer.log("[dev] window WebGLBuffer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLBuffer);

Object.defineProperty(window, "WebGLActiveInfo", {
    value: function WebGLActiveInfo() {
        Developer.log("[dev] window WebGLActiveInfo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebGLActiveInfo);

Object.defineProperty(window, "WaveShaperNode", {
    value: function WaveShaperNode() {
        Developer.log("[dev] window WaveShaperNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WaveShaperNode);

Object.defineProperty(window, "VisualViewport", {
    value: function VisualViewport() {
        Developer.log("[dev] window VisualViewport 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.VisualViewport);

Object.defineProperty(window, "VisibilityStateEntry", {
    value: function VisibilityStateEntry() {
        Developer.log("[dev] window VisibilityStateEntry 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.VisibilityStateEntry);

Object.defineProperty(window, "VirtualKeyboardGeometryChangeEvent", {
    value: function VirtualKeyboardGeometryChangeEvent() {
        Developer.log("[dev] window VirtualKeyboardGeometryChangeEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.VirtualKeyboardGeometryChangeEvent);

Object.defineProperty(window, "ViewTransition", {
    value: function ViewTransition() {
        Developer.log("[dev] window ViewTransition 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ViewTransition);

Object.defineProperty(window, "VideoPlaybackQuality", {
    value: function VideoPlaybackQuality() {
        Developer.log("[dev] window VideoPlaybackQuality 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.VideoPlaybackQuality);

Object.defineProperty(window, "VideoFrame", {
    value: function VideoFrame() {
        Developer.log("[dev] window VideoFrame 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.VideoFrame);

Object.defineProperty(window, "VideoColorSpace", {
    value: function VideoColorSpace() {
        Developer.log("[dev] window VideoColorSpace 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.VideoColorSpace);

Object.defineProperty(window, "ValidityState", {
    value: function ValidityState() {
        Developer.log("[dev] window ValidityState 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ValidityState);

Object.defineProperty(window, "VTTCue", {
    value: function VTTCue() {
        Developer.log("[dev] window VTTCue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.VTTCue);

Object.defineProperty(window, "UserActivation", {
    value: function UserActivation() {
        Developer.log("[dev] window UserActivation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.UserActivation);

Object.defineProperty(window, "URLSearchParams", {
    value: function URLSearchParams() {
        Developer.log("[dev] window URLSearchParams 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.URLSearchParams);

Object.defineProperty(window, "URLPattern", {
    value: function URLPattern() {
        Developer.log("[dev] window URLPattern 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.URLPattern);

Object.defineProperty(window, "URL", {
    value: function URL() {
        Developer.log("[dev] window URL 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.URL);

Object.defineProperty(window, "UIEvent", {
    value: function UIEvent() {
        Developer.log("[dev] window UIEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.UIEvent);

Object.defineProperty(window, "TrustedTypePolicyFactory", {
    value: function TrustedTypePolicyFactory() {
        Developer.log("[dev] window TrustedTypePolicyFactory 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TrustedTypePolicyFactory);

Object.defineProperty(window, "TrustedTypePolicy", {
    value: function TrustedTypePolicy() {
        Developer.log("[dev] window TrustedTypePolicy 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TrustedTypePolicy);

Object.defineProperty(window, "TrustedScriptURL", {
    value: function TrustedScriptURL() {
        Developer.log("[dev] window TrustedScriptURL 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TrustedScriptURL);

Object.defineProperty(window, "TrustedScript", {
    value: function TrustedScript() {
        Developer.log("[dev] window TrustedScript 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TrustedScript);

Object.defineProperty(window, "TrustedHTML", {
    value: function TrustedHTML() {
        Developer.log("[dev] window TrustedHTML 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TrustedHTML);

Object.defineProperty(window, "TreeWalker", {
    value: function TreeWalker() {
        Developer.log("[dev] window TreeWalker 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TreeWalker);

Object.defineProperty(window, "TransitionEvent", {
    value: function TransitionEvent() {
        Developer.log("[dev] window TransitionEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TransitionEvent);

Object.defineProperty(window, "TransformStreamDefaultController", {
    value: function TransformStreamDefaultController() {
        Developer.log("[dev] window TransformStreamDefaultController 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TransformStreamDefaultController);

Object.defineProperty(window, "TransformStream", {
    value: function TransformStream() {
        Developer.log("[dev] window TransformStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TransformStream);

Object.defineProperty(window, "TrackEvent", {
    value: function TrackEvent() {
        Developer.log("[dev] window TrackEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TrackEvent);

Object.defineProperty(window, "TouchList", {
    value: function TouchList() {
        Developer.log("[dev] window TouchList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TouchList);

Object.defineProperty(window, "TouchEvent", {
    value: function TouchEvent() {
        Developer.log("[dev] window TouchEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TouchEvent);

Object.defineProperty(window, "Touch", {
    value: function Touch() {
        Developer.log("[dev] window Touch 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Touch);

Object.defineProperty(window, "ToggleEvent", {
    value: function ToggleEvent() {
        Developer.log("[dev] window ToggleEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ToggleEvent);

Object.defineProperty(window, "TimeRanges", {
    value: function TimeRanges() {
        Developer.log("[dev] window TimeRanges 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TimeRanges);

Object.defineProperty(window, "TextUpdateEvent", {
    value: function TextUpdateEvent() {
        Developer.log("[dev] window TextUpdateEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextUpdateEvent);

Object.defineProperty(window, "TextTrackList", {
    value: function TextTrackList() {
        Developer.log("[dev] window TextTrackList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextTrackList);

Object.defineProperty(window, "TextTrackCueList", {
    value: function TextTrackCueList() {
        Developer.log("[dev] window TextTrackCueList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextTrackCueList);

Object.defineProperty(window, "TextTrackCue", {
    value: function TextTrackCue() {
        Developer.log("[dev] window TextTrackCue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextTrackCue);

Object.defineProperty(window, "TextTrack", {
    value: function TextTrack() {
        Developer.log("[dev] window TextTrack 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextTrack);

Object.defineProperty(window, "TextMetrics", {
    value: function TextMetrics() {
        Developer.log("[dev] window TextMetrics 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextMetrics);

Object.defineProperty(window, "TextFormatUpdateEvent", {
    value: function TextFormatUpdateEvent() {
        Developer.log("[dev] window TextFormatUpdateEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextFormatUpdateEvent);

Object.defineProperty(window, "TextFormat", {
    value: function TextFormat() {
        Developer.log("[dev] window TextFormat 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextFormat);

Object.defineProperty(window, "TextEvent", {
    value: function TextEvent() {
        Developer.log("[dev] window TextEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextEvent);

Object.defineProperty(window, "TextEncoderStream", {
    value: function TextEncoderStream() {
        Developer.log("[dev] window TextEncoderStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextEncoderStream);

Object.defineProperty(window, "TextEncoder", {
    value: function TextEncoder() {
        Developer.log("[dev] window TextEncoder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextEncoder);

Object.defineProperty(window, "TextDecoderStream", {
    value: function TextDecoderStream() {
        Developer.log("[dev] window TextDecoderStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextDecoderStream);

Object.defineProperty(window, "TextDecoder", {
    value: function TextDecoder() {
        Developer.log("[dev] window TextDecoder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TextDecoder);

Object.defineProperty(window, "Text", {
    value: function Text() {
        Developer.log("[dev] window Text 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Text);

Object.defineProperty(window, "TaskSignal", {
    value: function TaskSignal() {
        Developer.log("[dev] window TaskSignal 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TaskSignal);

Object.defineProperty(window, "TaskPriorityChangeEvent", {
    value: function TaskPriorityChangeEvent() {
        Developer.log("[dev] window TaskPriorityChangeEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TaskPriorityChangeEvent);

Object.defineProperty(window, "TaskController", {
    value: function TaskController() {
        Developer.log("[dev] window TaskController 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TaskController);

Object.defineProperty(window, "TaskAttributionTiming", {
    value: function TaskAttributionTiming() {
        Developer.log("[dev] window TaskAttributionTiming 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.TaskAttributionTiming);

Object.defineProperty(window, "SyncManager", {
    value: function SyncManager() {
        Developer.log("[dev] window SyncManager 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SyncManager);

Object.defineProperty(window, "SubmitEvent", {
    value: function SubmitEvent() {
        Developer.log("[dev] window SubmitEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SubmitEvent);

Object.defineProperty(window, "StyleSheetList", {
    value: function StyleSheetList() {
        Developer.log("[dev] window StyleSheetList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.StyleSheetList);

Object.defineProperty(window, "StyleSheet", {
    value: function StyleSheet() {
        Developer.log("[dev] window StyleSheet 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.StyleSheet);

Object.defineProperty(window, "StylePropertyMapReadOnly", {
    value: function StylePropertyMapReadOnly() {
        Developer.log("[dev] window StylePropertyMapReadOnly 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.StylePropertyMapReadOnly);

Object.defineProperty(window, "StylePropertyMap", {
    value: function StylePropertyMap() {
        Developer.log("[dev] window StylePropertyMap 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.StylePropertyMap);

Object.defineProperty(window, "StorageEvent", {
    value: function StorageEvent() {
        Developer.log("[dev] window StorageEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.StorageEvent);

Object.defineProperty(window, "StereoPannerNode", {
    value: function StereoPannerNode() {
        Developer.log("[dev] window StereoPannerNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.StereoPannerNode);

Object.defineProperty(window, "StaticRange", {
    value: function StaticRange() {
        Developer.log("[dev] window StaticRange 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.StaticRange);

Object.defineProperty(window, "SourceBufferList", {
    value: function SourceBufferList() {
        Developer.log("[dev] window SourceBufferList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SourceBufferList);

Object.defineProperty(window, "SourceBuffer", {
    value: function SourceBuffer() {
        Developer.log("[dev] window SourceBuffer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SourceBuffer);

Object.defineProperty(window, "ShadowRoot", {
    value: function ShadowRoot() {
        Developer.log("[dev] window ShadowRoot 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ShadowRoot);

Object.defineProperty(window, "Selection", {
    value: function Selection() {
        Developer.log("[dev] window Selection 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Selection);

Object.defineProperty(window, "SecurityPolicyViolationEvent", {
    value: function SecurityPolicyViolationEvent() {
        Developer.log("[dev] window SecurityPolicyViolationEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SecurityPolicyViolationEvent);

Object.defineProperty(window, "ScriptProcessorNode", {
    value: function ScriptProcessorNode() {
        Developer.log("[dev] window ScriptProcessorNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ScriptProcessorNode);

Object.defineProperty(window, "ScreenOrientation", {
    value: function ScreenOrientation() {
        Developer.log("[dev] window ScreenOrientation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ScreenOrientation);


Object.defineProperty(window, "Scheduling", {
    value: function Scheduling() {
        Developer.log("[dev] window Scheduling 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Scheduling);

Object.defineProperty(window, "Scheduler", {
    value: function Scheduler() {
        Developer.log("[dev] window Scheduler 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Scheduler);

Object.defineProperty(window, "SVGViewElement", {
    value: function SVGViewElement() {
        Developer.log("[dev] window SVGViewElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGViewElement);

Object.defineProperty(window, "SVGUseElement", {
    value: function SVGUseElement() {
        Developer.log("[dev] window SVGUseElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGUseElement);

Object.defineProperty(window, "SVGUnitTypes", {
    value: function SVGUnitTypes() {
        Developer.log("[dev] window SVGUnitTypes 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGUnitTypes);

Object.defineProperty(window, "SVGTransformList", {
    value: function SVGTransformList() {
        Developer.log("[dev] window SVGTransformList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGTransformList);

Object.defineProperty(window, "SVGTransform", {
    value: function SVGTransform() {
        Developer.log("[dev] window SVGTransform 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGTransform);

Object.defineProperty(window, "SVGTitleElement", {
    value: function SVGTitleElement() {
        Developer.log("[dev] window SVGTitleElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGTitleElement);

Object.defineProperty(window, "SVGTextPositioningElement", {
    value: function SVGTextPositioningElement() {
        Developer.log("[dev] window SVGTextPositioningElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGTextPositioningElement);

Object.defineProperty(window, "SVGTextPathElement", {
    value: function SVGTextPathElement() {
        Developer.log("[dev] window SVGTextPathElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGTextPathElement);

Object.defineProperty(window, "SVGTextElement", {
    value: function SVGTextElement() {
        Developer.log("[dev] window SVGTextElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGTextElement);

Object.defineProperty(window, "SVGTextContentElement", {
    value: function SVGTextContentElement() {
        Developer.log("[dev] window SVGTextContentElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGTextContentElement);

Object.defineProperty(window, "SVGTSpanElement", {
    value: function SVGTSpanElement() {
        Developer.log("[dev] window SVGTSpanElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGTSpanElement);

Object.defineProperty(window, "SVGSymbolElement", {
    value: function SVGSymbolElement() {
        Developer.log("[dev] window SVGSymbolElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGSymbolElement);

Object.defineProperty(window, "SVGSwitchElement", {
    value: function SVGSwitchElement() {
        Developer.log("[dev] window SVGSwitchElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGSwitchElement);

Object.defineProperty(window, "SVGStyleElement", {
    value: function SVGStyleElement() {
        Developer.log("[dev] window SVGStyleElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGStyleElement);

Object.defineProperty(window, "SVGStringList", {
    value: function SVGStringList() {
        Developer.log("[dev] window SVGStringList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGStringList);

Object.defineProperty(window, "SVGStopElement", {
    value: function SVGStopElement() {
        Developer.log("[dev] window SVGStopElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGStopElement);

Object.defineProperty(window, "SVGSetElement", {
    value: function SVGSetElement() {
        Developer.log("[dev] window SVGSetElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGSetElement);

Object.defineProperty(window, "SVGScriptElement", {
    value: function SVGScriptElement() {
        Developer.log("[dev] window SVGScriptElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGScriptElement);

Object.defineProperty(window, "SVGSVGElement", {
    value: function SVGSVGElement() {
        Developer.log("[dev] window SVGSVGElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGSVGElement);

Object.defineProperty(window, "SVGRectElement", {
    value: function SVGRectElement() {
        Developer.log("[dev] window SVGRectElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGRectElement);

Object.defineProperty(window, "SVGRect", {
    value: function SVGRect() {
        Developer.log("[dev] window SVGRect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGRect);

Object.defineProperty(window, "SVGRadialGradientElement", {
    value: function SVGRadialGradientElement() {
        Developer.log("[dev] window SVGRadialGradientElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGRadialGradientElement);

Object.defineProperty(window, "SVGPreserveAspectRatio", {
    value: function SVGPreserveAspectRatio() {
        Developer.log("[dev] window SVGPreserveAspectRatio 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGPreserveAspectRatio);

Object.defineProperty(window, "SVGPolylineElement", {
    value: function SVGPolylineElement() {
        Developer.log("[dev] window SVGPolylineElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGPolylineElement);

Object.defineProperty(window, "SVGPolygonElement", {
    value: function SVGPolygonElement() {
        Developer.log("[dev] window SVGPolygonElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGPolygonElement);

Object.defineProperty(window, "SVGPointList", {
    value: function SVGPointList() {
        Developer.log("[dev] window SVGPointList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGPointList);

Object.defineProperty(window, "SVGPoint", {
    value: function SVGPoint() {
        Developer.log("[dev] window SVGPoint 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGPoint);

Object.defineProperty(window, "SVGPatternElement", {
    value: function SVGPatternElement() {
        Developer.log("[dev] window SVGPatternElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGPatternElement);

Object.defineProperty(window, "SVGPathElement", {
    value: function SVGPathElement() {
        Developer.log("[dev] window SVGPathElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGPathElement);

Object.defineProperty(window, "SVGNumberList", {
    value: function SVGNumberList() {
        Developer.log("[dev] window SVGNumberList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGNumberList);

Object.defineProperty(window, "SVGNumber", {
    value: function SVGNumber() {
        Developer.log("[dev] window SVGNumber 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGNumber);

Object.defineProperty(window, "SVGMetadataElement", {
    value: function SVGMetadataElement() {
        Developer.log("[dev] window SVGMetadataElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGMetadataElement);

Object.defineProperty(window, "SVGMatrix", {
    value: function SVGMatrix() {
        Developer.log("[dev] window SVGMatrix 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGMatrix);

Object.defineProperty(window, "SVGMaskElement", {
    value: function SVGMaskElement() {
        Developer.log("[dev] window SVGMaskElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGMaskElement);

Object.defineProperty(window, "SVGMarkerElement", {
    value: function SVGMarkerElement() {
        Developer.log("[dev] window SVGMarkerElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGMarkerElement);

Object.defineProperty(window, "SVGMPathElement", {
    value: function SVGMPathElement() {
        Developer.log("[dev] window SVGMPathElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGMPathElement);

Object.defineProperty(window, "SVGLinearGradientElement", {
    value: function SVGLinearGradientElement() {
        Developer.log("[dev] window SVGLinearGradientElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGLinearGradientElement);

Object.defineProperty(window, "SVGLineElement", {
    value: function SVGLineElement() {
        Developer.log("[dev] window SVGLineElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGLineElement);

Object.defineProperty(window, "SVGLengthList", {
    value: function SVGLengthList() {
        Developer.log("[dev] window SVGLengthList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGLengthList);

Object.defineProperty(window, "SVGLength", {
    value: function SVGLength() {
        Developer.log("[dev] window SVGLength 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGLength);

Object.defineProperty(window, "SVGImageElement", {
    value: function SVGImageElement() {
        Developer.log("[dev] window SVGImageElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGImageElement);

Object.defineProperty(window, "SVGGraphicsElement", {
    value: function SVGGraphicsElement() {
        Developer.log("[dev] window SVGGraphicsElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGGraphicsElement);

Object.defineProperty(window, "SVGGradientElement", {
    value: function SVGGradientElement() {
        Developer.log("[dev] window SVGGradientElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGGradientElement);

Object.defineProperty(window, "SVGGeometryElement", {
    value: function SVGGeometryElement() {
        Developer.log("[dev] window SVGGeometryElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGGeometryElement);

Object.defineProperty(window, "SVGGElement", {
    value: function SVGGElement() {
        Developer.log("[dev] window SVGGElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGGElement);

Object.defineProperty(window, "SVGForeignObjectElement", {
    value: function SVGForeignObjectElement() {
        Developer.log("[dev] window SVGForeignObjectElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGForeignObjectElement);

Object.defineProperty(window, "SVGFilterElement", {
    value: function SVGFilterElement() {
        Developer.log("[dev] window SVGFilterElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFilterElement);

Object.defineProperty(window, "SVGFETurbulenceElement", {
    value: function SVGFETurbulenceElement() {
        Developer.log("[dev] window SVGFETurbulenceElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFETurbulenceElement);

Object.defineProperty(window, "SVGFETileElement", {
    value: function SVGFETileElement() {
        Developer.log("[dev] window SVGFETileElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFETileElement);

Object.defineProperty(window, "SVGFESpotLightElement", {
    value: function SVGFESpotLightElement() {
        Developer.log("[dev] window SVGFESpotLightElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFESpotLightElement);

Object.defineProperty(window, "SVGFESpecularLightingElement", {
    value: function SVGFESpecularLightingElement() {
        Developer.log("[dev] window SVGFESpecularLightingElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFESpecularLightingElement);

Object.defineProperty(window, "SVGFEPointLightElement", {
    value: function SVGFEPointLightElement() {
        Developer.log("[dev] window SVGFEPointLightElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEPointLightElement);

Object.defineProperty(window, "SVGFEOffsetElement", {
    value: function SVGFEOffsetElement() {
        Developer.log("[dev] window SVGFEOffsetElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEOffsetElement);

Object.defineProperty(window, "SVGFEMorphologyElement", {
    value: function SVGFEMorphologyElement() {
        Developer.log("[dev] window SVGFEMorphologyElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEMorphologyElement);

Object.defineProperty(window, "SVGFEMergeNodeElement", {
    value: function SVGFEMergeNodeElement() {
        Developer.log("[dev] window SVGFEMergeNodeElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEMergeNodeElement);

Object.defineProperty(window, "SVGFEMergeElement", {
    value: function SVGFEMergeElement() {
        Developer.log("[dev] window SVGFEMergeElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEMergeElement);

Object.defineProperty(window, "SVGFEImageElement", {
    value: function SVGFEImageElement() {
        Developer.log("[dev] window SVGFEImageElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEImageElement);

Object.defineProperty(window, "SVGFEGaussianBlurElement", {
    value: function SVGFEGaussianBlurElement() {
        Developer.log("[dev] window SVGFEGaussianBlurElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEGaussianBlurElement);

Object.defineProperty(window, "SVGFEFuncRElement", {
    value: function SVGFEFuncRElement() {
        Developer.log("[dev] window SVGFEFuncRElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEFuncRElement);

Object.defineProperty(window, "SVGFEFuncGElement", {
    value: function SVGFEFuncGElement() {
        Developer.log("[dev] window SVGFEFuncGElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEFuncGElement);

Object.defineProperty(window, "SVGFEFuncBElement", {
    value: function SVGFEFuncBElement() {
        Developer.log("[dev] window SVGFEFuncBElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEFuncBElement);

Object.defineProperty(window, "SVGFEFuncAElement", {
    value: function SVGFEFuncAElement() {
        Developer.log("[dev] window SVGFEFuncAElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEFuncAElement);

Object.defineProperty(window, "SVGFEFloodElement", {
    value: function SVGFEFloodElement() {
        Developer.log("[dev] window SVGFEFloodElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEFloodElement);

Object.defineProperty(window, "SVGFEDropShadowElement", {
    value: function SVGFEDropShadowElement() {
        Developer.log("[dev] window SVGFEDropShadowElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEDropShadowElement);

Object.defineProperty(window, "SVGFEDistantLightElement", {
    value: function SVGFEDistantLightElement() {
        Developer.log("[dev] window SVGFEDistantLightElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEDistantLightElement);

Object.defineProperty(window, "SVGFEDisplacementMapElement", {
    value: function SVGFEDisplacementMapElement() {
        Developer.log("[dev] window SVGFEDisplacementMapElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEDisplacementMapElement);

Object.defineProperty(window, "SVGFEDiffuseLightingElement", {
    value: function SVGFEDiffuseLightingElement() {
        Developer.log("[dev] window SVGFEDiffuseLightingElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEDiffuseLightingElement);

Object.defineProperty(window, "SVGFEConvolveMatrixElement", {
    value: function SVGFEConvolveMatrixElement() {
        Developer.log("[dev] window SVGFEConvolveMatrixElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEConvolveMatrixElement);

Object.defineProperty(window, "SVGFECompositeElement", {
    value: function SVGFECompositeElement() {
        Developer.log("[dev] window SVGFECompositeElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFECompositeElement);

Object.defineProperty(window, "SVGFEComponentTransferElement", {
    value: function SVGFEComponentTransferElement() {
        Developer.log("[dev] window SVGFEComponentTransferElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEComponentTransferElement);

Object.defineProperty(window, "SVGFEColorMatrixElement", {
    value: function SVGFEColorMatrixElement() {
        Developer.log("[dev] window SVGFEColorMatrixElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEColorMatrixElement);

Object.defineProperty(window, "SVGFEBlendElement", {
    value: function SVGFEBlendElement() {
        Developer.log("[dev] window SVGFEBlendElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGFEBlendElement);

Object.defineProperty(window, "SVGEllipseElement", {
    value: function SVGEllipseElement() {
        Developer.log("[dev] window SVGEllipseElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGEllipseElement);

Object.defineProperty(window, "SVGElement", {
    value: function SVGElement() {
        Developer.log("[dev] window SVGElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGElement);

Object.defineProperty(window, "SVGDescElement", {
    value: function SVGDescElement() {
        Developer.log("[dev] window SVGDescElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGDescElement);

Object.defineProperty(window, "SVGDefsElement", {
    value: function SVGDefsElement() {
        Developer.log("[dev] window SVGDefsElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGDefsElement);

Object.defineProperty(window, "SVGComponentTransferFunctionElement", {
    value: function SVGComponentTransferFunctionElement() {
        Developer.log("[dev] window SVGComponentTransferFunctionElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGComponentTransferFunctionElement);

Object.defineProperty(window, "SVGClipPathElement", {
    value: function SVGClipPathElement() {
        Developer.log("[dev] window SVGClipPathElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGClipPathElement);

Object.defineProperty(window, "SVGCircleElement", {
    value: function SVGCircleElement() {
        Developer.log("[dev] window SVGCircleElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGCircleElement);

Object.defineProperty(window, "SVGAnimationElement", {
    value: function SVGAnimationElement() {
        Developer.log("[dev] window SVGAnimationElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimationElement);

Object.defineProperty(window, "SVGAnimatedTransformList", {
    value: function SVGAnimatedTransformList() {
        Developer.log("[dev] window SVGAnimatedTransformList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedTransformList);

Object.defineProperty(window, "SVGAnimatedString", {
    value: function SVGAnimatedString() {
        Developer.log("[dev] window SVGAnimatedString 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedString);

Object.defineProperty(window, "SVGAnimatedRect", {
    value: function SVGAnimatedRect() {
        Developer.log("[dev] window SVGAnimatedRect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedRect);

Object.defineProperty(window, "SVGAnimatedPreserveAspectRatio", {
    value: function SVGAnimatedPreserveAspectRatio() {
        Developer.log("[dev] window SVGAnimatedPreserveAspectRatio 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedPreserveAspectRatio);

Object.defineProperty(window, "SVGAnimatedNumberList", {
    value: function SVGAnimatedNumberList() {
        Developer.log("[dev] window SVGAnimatedNumberList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedNumberList);

Object.defineProperty(window, "SVGAnimatedNumber", {
    value: function SVGAnimatedNumber() {
        Developer.log("[dev] window SVGAnimatedNumber 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedNumber);

Object.defineProperty(window, "SVGAnimatedLengthList", {
    value: function SVGAnimatedLengthList() {
        Developer.log("[dev] window SVGAnimatedLengthList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedLengthList);

Object.defineProperty(window, "SVGAnimatedLength", {
    value: function SVGAnimatedLength() {
        Developer.log("[dev] window SVGAnimatedLength 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedLength);

Object.defineProperty(window, "SVGAnimatedInteger", {
    value: function SVGAnimatedInteger() {
        Developer.log("[dev] window SVGAnimatedInteger 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedInteger);

Object.defineProperty(window, "SVGAnimatedEnumeration", {
    value: function SVGAnimatedEnumeration() {
        Developer.log("[dev] window SVGAnimatedEnumeration 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedEnumeration);

Object.defineProperty(window, "SVGAnimatedBoolean", {
    value: function SVGAnimatedBoolean() {
        Developer.log("[dev] window SVGAnimatedBoolean 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedBoolean);

Object.defineProperty(window, "SVGAnimatedAngle", {
    value: function SVGAnimatedAngle() {
        Developer.log("[dev] window SVGAnimatedAngle 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimatedAngle);

Object.defineProperty(window, "SVGAnimateTransformElement", {
    value: function SVGAnimateTransformElement() {
        Developer.log("[dev] window SVGAnimateTransformElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimateTransformElement);

Object.defineProperty(window, "SVGAnimateMotionElement", {
    value: function SVGAnimateMotionElement() {
        Developer.log("[dev] window SVGAnimateMotionElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimateMotionElement);

Object.defineProperty(window, "SVGAnimateElement", {
    value: function SVGAnimateElement() {
        Developer.log("[dev] window SVGAnimateElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAnimateElement);

Object.defineProperty(window, "SVGAngle", {
    value: function SVGAngle() {
        Developer.log("[dev] window SVGAngle 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAngle);

Object.defineProperty(window, "SVGAElement", {
    value: function SVGAElement() {
        Developer.log("[dev] window SVGAElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SVGAElement);

Object.defineProperty(window, "Response", {
    value: function Response() {
        Developer.log("[dev] window Response 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Response);

Object.defineProperty(window, "ResizeObserverSize", {
    value: function ResizeObserverSize() {
        Developer.log("[dev] window ResizeObserverSize 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ResizeObserverSize);

Object.defineProperty(window, "ResizeObserverEntry", {
    value: function ResizeObserverEntry() {
        Developer.log("[dev] window ResizeObserverEntry 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ResizeObserverEntry);

Object.defineProperty(window, "ResizeObserver", {
    value: function ResizeObserver() {
        Developer.log("[dev] window ResizeObserver 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ResizeObserver);

Object.defineProperty(window, "Request", {
    value: function Request() {
        Developer.log("[dev] window Request 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Request);

Object.defineProperty(window, "ReportingObserver", {
    value: function ReportingObserver() {
        Developer.log("[dev] window ReportingObserver 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ReportingObserver);

Object.defineProperty(window, "ReadableStreamDefaultReader", {
    value: function ReadableStreamDefaultReader() {
        Developer.log("[dev] window ReadableStreamDefaultReader 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ReadableStreamDefaultReader);

Object.defineProperty(window, "ReadableStreamDefaultController", {
    value: function ReadableStreamDefaultController() {
        Developer.log("[dev] window ReadableStreamDefaultController 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ReadableStreamDefaultController);

Object.defineProperty(window, "ReadableStreamBYOBRequest", {
    value: function ReadableStreamBYOBRequest() {
        Developer.log("[dev] window ReadableStreamBYOBRequest 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ReadableStreamBYOBRequest);

Object.defineProperty(window, "ReadableStreamBYOBReader", {
    value: function ReadableStreamBYOBReader() {
        Developer.log("[dev] window ReadableStreamBYOBReader 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ReadableStreamBYOBReader);

Object.defineProperty(window, "ReadableStream", {
    value: function ReadableStream() {
        Developer.log("[dev] window ReadableStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ReadableStream);

Object.defineProperty(window, "ReadableByteStreamController", {
    value: function ReadableByteStreamController() {
        Developer.log("[dev] window ReadableByteStreamController 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ReadableByteStreamController);

Object.defineProperty(window, "Range", {
    value: function Range() {
        Developer.log("[dev] window Range 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Range);

Object.defineProperty(window, "RadioNodeList", {
    value: function RadioNodeList() {
        Developer.log("[dev] window RadioNodeList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RadioNodeList);

Object.defineProperty(window, "RTCTrackEvent", {
    value: function RTCTrackEvent() {
        Developer.log("[dev] window RTCTrackEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCTrackEvent);

Object.defineProperty(window, "RTCStatsReport", {
    value: function RTCStatsReport() {
        Developer.log("[dev] window RTCStatsReport 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCStatsReport);

Object.defineProperty(window, "RTCSessionDescription", {
    value: function RTCSessionDescription() {
        Developer.log("[dev] window RTCSessionDescription 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCSessionDescription);

Object.defineProperty(window, "RTCSctpTransport", {
    value: function RTCSctpTransport() {
        Developer.log("[dev] window RTCSctpTransport 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCSctpTransport);

Object.defineProperty(window, "RTCRtpTransceiver", {
    value: function RTCRtpTransceiver() {
        Developer.log("[dev] window RTCRtpTransceiver 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCRtpTransceiver);

Object.defineProperty(window, "RTCRtpSender", {
    value: function RTCRtpSender() {
        Developer.log("[dev] window RTCRtpSender 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCRtpSender);

Object.defineProperty(window, "RTCRtpReceiver", {
    value: function RTCRtpReceiver() {
        Developer.log("[dev] window RTCRtpReceiver 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCRtpReceiver);

Object.defineProperty(window, "RTCPeerConnectionIceEvent", {
    value: function RTCPeerConnectionIceEvent() {
        Developer.log("[dev] window RTCPeerConnectionIceEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCPeerConnectionIceEvent);

Object.defineProperty(window, "RTCPeerConnectionIceErrorEvent", {
    value: function RTCPeerConnectionIceErrorEvent() {
        Developer.log("[dev] window RTCPeerConnectionIceErrorEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCPeerConnectionIceErrorEvent);

Object.defineProperty(window, "RTCPeerConnection", {
    value: function RTCPeerConnection() {
        Developer.log("[dev] window RTCPeerConnection 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCPeerConnection);

Object.defineProperty(window, "RTCIceTransport", {
    value: function RTCIceTransport() {
        Developer.log("[dev] window RTCIceTransport 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCIceTransport);

Object.defineProperty(window, "RTCIceCandidate", {
    value: function RTCIceCandidate() {
        Developer.log("[dev] window RTCIceCandidate 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCIceCandidate);

Object.defineProperty(window, "RTCErrorEvent", {
    value: function RTCErrorEvent() {
        Developer.log("[dev] window RTCErrorEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCErrorEvent);

Object.defineProperty(window, "RTCError", {
    value: function RTCError() {
        Developer.log("[dev] window RTCError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCError);

Object.defineProperty(window, "RTCEncodedVideoFrame", {
    value: function RTCEncodedVideoFrame() {
        Developer.log("[dev] window RTCEncodedVideoFrame 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCEncodedVideoFrame);

Object.defineProperty(window, "RTCEncodedAudioFrame", {
    value: function RTCEncodedAudioFrame() {
        Developer.log("[dev] window RTCEncodedAudioFrame 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCEncodedAudioFrame);

Object.defineProperty(window, "RTCDtlsTransport", {
    value: function RTCDtlsTransport() {
        Developer.log("[dev] window RTCDtlsTransport 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCDtlsTransport);

Object.defineProperty(window, "RTCDataChannelEvent", {
    value: function RTCDataChannelEvent() {
        Developer.log("[dev] window RTCDataChannelEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCDataChannelEvent);

Object.defineProperty(window, "RTCDataChannel", {
    value: function RTCDataChannel() {
        Developer.log("[dev] window RTCDataChannel 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCDataChannel);

Object.defineProperty(window, "RTCDTMFToneChangeEvent", {
    value: function RTCDTMFToneChangeEvent() {
        Developer.log("[dev] window RTCDTMFToneChangeEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCDTMFToneChangeEvent);

Object.defineProperty(window, "RTCDTMFSender", {
    value: function RTCDTMFSender() {
        Developer.log("[dev] window RTCDTMFSender 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCDTMFSender);

Object.defineProperty(window, "RTCCertificate", {
    value: function RTCCertificate() {
        Developer.log("[dev] window RTCCertificate 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RTCCertificate);

Object.defineProperty(window, "PromiseRejectionEvent", {
    value: function PromiseRejectionEvent() {
        Developer.log("[dev] window PromiseRejectionEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PromiseRejectionEvent);

Object.defineProperty(window, "ProgressEvent", {
    value: function ProgressEvent() {
        Developer.log("[dev] window ProgressEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ProgressEvent);

Object.defineProperty(window, "Profiler", {
    value: function Profiler() {
        Developer.log("[dev] window Profiler 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Profiler);

Object.defineProperty(window, "ProcessingInstruction", {
    value: function ProcessingInstruction() {
        Developer.log("[dev] window ProcessingInstruction 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ProcessingInstruction);

Object.defineProperty(window, "PopStateEvent", {
    value: function PopStateEvent() {
        Developer.log("[dev] window PopStateEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PopStateEvent);

Object.defineProperty(window, "PointerEvent", {
    value: function PointerEvent() {
        Developer.log("[dev] window PointerEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PointerEvent);


Object.defineProperty(window, "PictureInPictureWindow", {
    value: function PictureInPictureWindow() {
        Developer.log("[dev] window PictureInPictureWindow 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PictureInPictureWindow);

Object.defineProperty(window, "PictureInPictureEvent", {
    value: function PictureInPictureEvent() {
        Developer.log("[dev] window PictureInPictureEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PictureInPictureEvent);

Object.defineProperty(window, "PeriodicWave", {
    value: function PeriodicWave() {
        Developer.log("[dev] window PeriodicWave 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PeriodicWave);

Object.defineProperty(window, "PerformanceTiming", {
    value: function PerformanceTiming() {
        Developer.log("[dev] window PerformanceTiming 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceTiming);

Object.defineProperty(window, "PerformanceServerTiming", {
    value: function PerformanceServerTiming() {
        Developer.log("[dev] window PerformanceServerTiming 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceServerTiming);

Object.defineProperty(window, "PerformanceResourceTiming", {
    value: function PerformanceResourceTiming() {
        Developer.log("[dev] window PerformanceResourceTiming 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceResourceTiming);

Object.defineProperty(window, "PerformancePaintTiming", {
    value: function PerformancePaintTiming() {
        Developer.log("[dev] window PerformancePaintTiming 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformancePaintTiming);

Object.defineProperty(window, "PerformanceObserverEntryList", {
    value: function PerformanceObserverEntryList() {
        Developer.log("[dev] window PerformanceObserverEntryList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceObserverEntryList);

Object.defineProperty(window, "PerformanceObserver", {
    value: function PerformanceObserver() {
        Developer.log("[dev] window PerformanceObserver 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceObserver);

Object.defineProperty(window, "PerformanceNavigationTiming", {
    value: function PerformanceNavigationTiming() {
        Developer.log("[dev] window PerformanceNavigationTiming 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceNavigationTiming);

Object.defineProperty(window, "PerformanceNavigation", {
    value: function PerformanceNavigation() {
        Developer.log("[dev] window PerformanceNavigation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceNavigation);

Object.defineProperty(window, "PerformanceMeasure", {
    value: function PerformanceMeasure() {
        Developer.log("[dev] window PerformanceMeasure 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceMeasure);

Object.defineProperty(window, "PerformanceMark", {
    value: function PerformanceMark() {
        Developer.log("[dev] window PerformanceMark 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceMark);

Object.defineProperty(window, "PerformanceLongTaskTiming", {
    value: function PerformanceLongTaskTiming() {
        Developer.log("[dev] window PerformanceLongTaskTiming 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceLongTaskTiming);

Object.defineProperty(window, "PerformanceEventTiming", {
    value: function PerformanceEventTiming() {
        Developer.log("[dev] window PerformanceEventTiming 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceEventTiming);

Object.defineProperty(window, "PerformanceEntry", {
    value: function PerformanceEntry() {
        Developer.log("[dev] window PerformanceEntry 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceEntry);

Object.defineProperty(window, "PerformanceElementTiming", {
    value: function PerformanceElementTiming() {
        Developer.log("[dev] window PerformanceElementTiming 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceElementTiming);

Object.defineProperty(window, "Performance", {
    value: function Performance() {
        Developer.log("[dev] window Performance 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Performance);

Object.defineProperty(window, "Path2D", {
    value: function Path2D() {
        Developer.log("[dev] window Path2D 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Path2D);

Object.defineProperty(window, "PannerNode", {
    value: function PannerNode() {
        Developer.log("[dev] window PannerNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PannerNode);

Object.defineProperty(window, "PageTransitionEvent", {
    value: function PageTransitionEvent() {
        Developer.log("[dev] window PageTransitionEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PageTransitionEvent);

Object.defineProperty(window, "OverconstrainedError", {
    value: function OverconstrainedError() {
        Developer.log("[dev] window OverconstrainedError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.OverconstrainedError);

Object.defineProperty(window, "OscillatorNode", {
    value: function OscillatorNode() {
        Developer.log("[dev] window OscillatorNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.OscillatorNode);

Object.defineProperty(window, "OffscreenCanvasRenderingContext2D", {
    value: function OffscreenCanvasRenderingContext2D() {
        Developer.log("[dev] window OffscreenCanvasRenderingContext2D 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.OffscreenCanvasRenderingContext2D);

Object.defineProperty(window, "OffscreenCanvas", {
    value: function OffscreenCanvas() {
        Developer.log("[dev] window OffscreenCanvas 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.OffscreenCanvas);

Object.defineProperty(window, "OfflineAudioContext", {
    value: function OfflineAudioContext() {
        Developer.log("[dev] window OfflineAudioContext 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.OfflineAudioContext);

Object.defineProperty(window, "OfflineAudioCompletionEvent", {
    value: function OfflineAudioCompletionEvent() {
        Developer.log("[dev] window OfflineAudioCompletionEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.OfflineAudioCompletionEvent);

Object.defineProperty(window, "NodeList", {
    value: function NodeList() {
        Developer.log("[dev] window NodeList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NodeList);

Object.defineProperty(window, "NodeIterator", {
    value: function NodeIterator() {
        Developer.log("[dev] window NodeIterator 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NodeIterator);

Object.defineProperty(window, "NodeFilter", {
    value: function NodeFilter() {
        Developer.log("[dev] window NodeFilter 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NodeFilter);

Object.defineProperty(window, "NetworkInformation", {
    value: function NetworkInformation() {
        Developer.log("[dev] window NetworkInformation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NetworkInformation);

Object.defineProperty(window, "NavigatorUAData", {
    value: function NavigatorUAData() {
        Developer.log("[dev] window NavigatorUAData 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NavigatorUAData);


Object.defineProperty(window, "NavigationTransition", {
    value: function NavigationTransition() {
        Developer.log("[dev] window NavigationTransition 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NavigationTransition);

Object.defineProperty(window, "NavigationHistoryEntry", {
    value: function NavigationHistoryEntry() {
        Developer.log("[dev] window NavigationHistoryEntry 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NavigationHistoryEntry);

Object.defineProperty(window, "NavigationDestination", {
    value: function NavigationDestination() {
        Developer.log("[dev] window NavigationDestination 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NavigationDestination);

Object.defineProperty(window, "NavigationCurrentEntryChangeEvent", {
    value: function NavigationCurrentEntryChangeEvent() {
        Developer.log("[dev] window NavigationCurrentEntryChangeEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NavigationCurrentEntryChangeEvent);

Object.defineProperty(window, "Navigation", {
    value: function Navigation() {
        Developer.log("[dev] window Navigation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Navigation);

Object.defineProperty(window, "NavigateEvent", {
    value: function NavigateEvent() {
        Developer.log("[dev] window NavigateEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NavigateEvent);

Object.defineProperty(window, "NamedNodeMap", {
    value: function NamedNodeMap() {
        Developer.log("[dev] window NamedNodeMap 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NamedNodeMap);

Object.defineProperty(window, "MutationRecord", {
    value: function MutationRecord() {
        Developer.log("[dev] window MutationRecord 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MutationRecord);

Object.defineProperty(window, "MouseEvent", {
    value: function MouseEvent() {
        Developer.log("[dev] window MouseEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MouseEvent);


Object.defineProperty(window, "MessagePort", {
    value: function MessagePort() {
        Developer.log("[dev] window MessagePort 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MessagePort);

Object.defineProperty(window, "MessageEvent", {
    value: function MessageEvent() {
        Developer.log("[dev] window MessageEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MessageEvent);

Object.defineProperty(window, "MessageChannel", {
    value: function MessageChannel() {
        Developer.log("[dev] window MessageChannel 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MessageChannel);

Object.defineProperty(window, "MediaStreamTrackVideoStats", {
    value: function MediaStreamTrackVideoStats() {
        Developer.log("[dev] window MediaStreamTrackVideoStats 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaStreamTrackVideoStats);

Object.defineProperty(window, "MediaStreamTrackProcessor", {
    value: function MediaStreamTrackProcessor() {
        Developer.log("[dev] window MediaStreamTrackProcessor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaStreamTrackProcessor);

Object.defineProperty(window, "MediaStreamTrackGenerator", {
    value: function MediaStreamTrackGenerator() {
        Developer.log("[dev] window MediaStreamTrackGenerator 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaStreamTrackGenerator);

Object.defineProperty(window, "MediaStreamTrackEvent", {
    value: function MediaStreamTrackEvent() {
        Developer.log("[dev] window MediaStreamTrackEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaStreamTrackEvent);

Object.defineProperty(window, "MediaStreamTrackAudioStats", {
    value: function MediaStreamTrackAudioStats() {
        Developer.log("[dev] window MediaStreamTrackAudioStats 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaStreamTrackAudioStats);

Object.defineProperty(window, "MediaStreamTrack", {
    value: function MediaStreamTrack() {
        Developer.log("[dev] window MediaStreamTrack 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaStreamTrack);

Object.defineProperty(window, "MediaStreamEvent", {
    value: function MediaStreamEvent() {
        Developer.log("[dev] window MediaStreamEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaStreamEvent);

Object.defineProperty(window, "MediaStreamAudioSourceNode", {
    value: function MediaStreamAudioSourceNode() {
        Developer.log("[dev] window MediaStreamAudioSourceNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaStreamAudioSourceNode);

Object.defineProperty(window, "MediaStreamAudioDestinationNode", {
    value: function MediaStreamAudioDestinationNode() {
        Developer.log("[dev] window MediaStreamAudioDestinationNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaStreamAudioDestinationNode);

Object.defineProperty(window, "MediaStream", {
    value: function MediaStream() {
        Developer.log("[dev] window MediaStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaStream);

Object.defineProperty(window, "MediaSourceHandle", {
    value: function MediaSourceHandle() {
        Developer.log("[dev] window MediaSourceHandle 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaSourceHandle);

Object.defineProperty(window, "MediaSource", {
    value: function MediaSource() {
        Developer.log("[dev] window MediaSource 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaSource);

Object.defineProperty(window, "MediaRecorder", {
    value: function MediaRecorder() {
        Developer.log("[dev] window MediaRecorder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaRecorder);

Object.defineProperty(window, "MediaQueryListEvent", {
    value: function MediaQueryListEvent() {
        Developer.log("[dev] window MediaQueryListEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaQueryListEvent);

Object.defineProperty(window, "MediaQueryList", {
    value: function MediaQueryList() {
        Developer.log("[dev] window MediaQueryList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaQueryList);

Object.defineProperty(window, "MediaList", {
    value: function MediaList() {
        Developer.log("[dev] window MediaList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaList);

Object.defineProperty(window, "MediaError", {
    value: function MediaError() {
        Developer.log("[dev] window MediaError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaError);

Object.defineProperty(window, "MediaEncryptedEvent", {
    value: function MediaEncryptedEvent() {
        Developer.log("[dev] window MediaEncryptedEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaEncryptedEvent);

Object.defineProperty(window, "MediaElementAudioSourceNode", {
    value: function MediaElementAudioSourceNode() {
        Developer.log("[dev] window MediaElementAudioSourceNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaElementAudioSourceNode);

Object.defineProperty(window, "MediaCapabilities", {
    value: function MediaCapabilities() {
        Developer.log("[dev] window MediaCapabilities 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaCapabilities);

Object.defineProperty(window, "MathMLElement", {
    value: function MathMLElement() {
        Developer.log("[dev] window MathMLElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MathMLElement);


Object.defineProperty(window, "LayoutShiftAttribution", {
    value: function LayoutShiftAttribution() {
        Developer.log("[dev] window LayoutShiftAttribution 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.LayoutShiftAttribution);

Object.defineProperty(window, "LayoutShift", {
    value: function LayoutShift() {
        Developer.log("[dev] window LayoutShift 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.LayoutShift);

Object.defineProperty(window, "LargestContentfulPaint", {
    value: function LargestContentfulPaint() {
        Developer.log("[dev] window LargestContentfulPaint 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.LargestContentfulPaint);

Object.defineProperty(window, "KeyframeEffect", {
    value: function KeyframeEffect() {
        Developer.log("[dev] window KeyframeEffect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.KeyframeEffect);

Object.defineProperty(window, "KeyboardEvent", {
    value: function KeyboardEvent() {
        Developer.log("[dev] window KeyboardEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.KeyboardEvent);

Object.defineProperty(window, "IntersectionObserverEntry", {
    value: function IntersectionObserverEntry() {
        Developer.log("[dev] window IntersectionObserverEntry 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IntersectionObserverEntry);

Object.defineProperty(window, "IntersectionObserver", {
    value: function IntersectionObserver() {
        Developer.log("[dev] window IntersectionObserver 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IntersectionObserver);

Object.defineProperty(window, "InputEvent", {
    value: function InputEvent() {
        Developer.log("[dev] window InputEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.InputEvent);

Object.defineProperty(window, "InputDeviceInfo", {
    value: function InputDeviceInfo() {
        Developer.log("[dev] window InputDeviceInfo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.InputDeviceInfo);

Object.defineProperty(window, "InputDeviceCapabilities", {
    value: function InputDeviceCapabilities() {
        Developer.log("[dev] window InputDeviceCapabilities 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.InputDeviceCapabilities);

Object.defineProperty(window, "Ink", {
    value: function Ink() {
        Developer.log("[dev] window Ink 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Ink);

Object.defineProperty(window, "ImageData", {
    value: function ImageData() {
        Developer.log("[dev] window ImageData 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ImageData);

Object.defineProperty(window, "ImageCapture", {
    value: function ImageCapture() {
        Developer.log("[dev] window ImageCapture 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ImageCapture);

Object.defineProperty(window, "ImageBitmapRenderingContext", {
    value: function ImageBitmapRenderingContext() {
        Developer.log("[dev] window ImageBitmapRenderingContext 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ImageBitmapRenderingContext);

Object.defineProperty(window, "ImageBitmap", {
    value: function ImageBitmap() {
        Developer.log("[dev] window ImageBitmap 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ImageBitmap);

Object.defineProperty(window, "IdleDeadline", {
    value: function IdleDeadline() {
        Developer.log("[dev] window IdleDeadline 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IdleDeadline);

Object.defineProperty(window, "IIRFilterNode", {
    value: function IIRFilterNode() {
        Developer.log("[dev] window IIRFilterNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IIRFilterNode);

Object.defineProperty(window, "IDBVersionChangeEvent", {
    value: function IDBVersionChangeEvent() {
        Developer.log("[dev] window IDBVersionChangeEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IDBVersionChangeEvent);

Object.defineProperty(window, "IDBTransaction", {
    value: function IDBTransaction() {
        Developer.log("[dev] window IDBTransaction 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IDBTransaction);

Object.defineProperty(window, "IDBRequest", {
    value: function IDBRequest() {
        Developer.log("[dev] window IDBRequest 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IDBRequest);

Object.defineProperty(window, "IDBOpenDBRequest", {
    value: function IDBOpenDBRequest() {
        Developer.log("[dev] window IDBOpenDBRequest 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IDBOpenDBRequest);

Object.defineProperty(window, "IDBObjectStore", {
    value: function IDBObjectStore() {
        Developer.log("[dev] window IDBObjectStore 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IDBObjectStore);

Object.defineProperty(window, "IDBKeyRange", {
    value: function IDBKeyRange() {
        Developer.log("[dev] window IDBKeyRange 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IDBKeyRange);

Object.defineProperty(window, "IDBIndex", {
    value: function IDBIndex() {
        Developer.log("[dev] window IDBIndex 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IDBIndex);


Object.defineProperty(window, "IDBDatabase", {
    value: function IDBDatabase() {
        Developer.log("[dev] window IDBDatabase 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IDBDatabase);

Object.defineProperty(window, "IDBCursorWithValue", {
    value: function IDBCursorWithValue() {
        Developer.log("[dev] window IDBCursorWithValue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IDBCursorWithValue);

Object.defineProperty(window, "IDBCursor", {
    value: function IDBCursor() {
        Developer.log("[dev] window IDBCursor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IDBCursor);



Object.defineProperty(window, "HighlightRegistry", {
    value: function HighlightRegistry() {
        Developer.log("[dev] window HighlightRegistry 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HighlightRegistry);

Object.defineProperty(window, "Highlight", {
    value: function Highlight() {
        Developer.log("[dev] window Highlight 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Highlight);

Object.defineProperty(window, "Headers", {
    value: function Headers() {
        Developer.log("[dev] window Headers 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Headers);

Object.defineProperty(window, "HashChangeEvent", {
    value: function HashChangeEvent() {
        Developer.log("[dev] window HashChangeEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HashChangeEvent);

Object.defineProperty(window, "HTMLVideoElement", {
    value: function HTMLVideoElement() {
        Developer.log("[dev] window HTMLVideoElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLVideoElement);

Object.defineProperty(window, "HTMLUnknownElement", {
    value: function HTMLUnknownElement() {
        Developer.log("[dev] window HTMLUnknownElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLUnknownElement);

Object.defineProperty(window, "HTMLUListElement", {
    value: function HTMLUListElement() {
        Developer.log("[dev] window HTMLUListElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLUListElement);

Object.defineProperty(window, "HTMLTrackElement", {
    value: function HTMLTrackElement() {
        Developer.log("[dev] window HTMLTrackElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLTrackElement);

Object.defineProperty(window, "HTMLTitleElement", {
    value: function HTMLTitleElement() {
        Developer.log("[dev] window HTMLTitleElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLTitleElement);

Object.defineProperty(window, "HTMLTimeElement", {
    value: function HTMLTimeElement() {
        Developer.log("[dev] window HTMLTimeElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLTimeElement);

Object.defineProperty(window, "HTMLTextAreaElement", {
    value: function HTMLTextAreaElement() {
        Developer.log("[dev] window HTMLTextAreaElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLTextAreaElement);

Object.defineProperty(window, "HTMLTemplateElement", {
    value: function HTMLTemplateElement() {
        Developer.log("[dev] window HTMLTemplateElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLTemplateElement);

Object.defineProperty(window, "HTMLTableSectionElement", {
    value: function HTMLTableSectionElement() {
        Developer.log("[dev] window HTMLTableSectionElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLTableSectionElement);

Object.defineProperty(window, "HTMLTableRowElement", {
    value: function HTMLTableRowElement() {
        Developer.log("[dev] window HTMLTableRowElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLTableRowElement);

Object.defineProperty(window, "HTMLTableElement", {
    value: function HTMLTableElement() {
        Developer.log("[dev] window HTMLTableElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLTableElement);

Object.defineProperty(window, "HTMLTableColElement", {
    value: function HTMLTableColElement() {
        Developer.log("[dev] window HTMLTableColElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLTableColElement);

Object.defineProperty(window, "HTMLTableCellElement", {
    value: function HTMLTableCellElement() {
        Developer.log("[dev] window HTMLTableCellElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLTableCellElement);

Object.defineProperty(window, "HTMLTableCaptionElement", {
    value: function HTMLTableCaptionElement() {
        Developer.log("[dev] window HTMLTableCaptionElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLTableCaptionElement);

Object.defineProperty(window, "HTMLStyleElement", {
    value: function HTMLStyleElement() {
        Developer.log("[dev] window HTMLStyleElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLStyleElement);

Object.defineProperty(window, "HTMLSpanElement", {
    value: function HTMLSpanElement() {
        Developer.log("[dev] window HTMLSpanElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLSpanElement);

Object.defineProperty(window, "HTMLSourceElement", {
    value: function HTMLSourceElement() {
        Developer.log("[dev] window HTMLSourceElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLSourceElement);

Object.defineProperty(window, "HTMLSlotElement", {
    value: function HTMLSlotElement() {
        Developer.log("[dev] window HTMLSlotElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLSlotElement);

Object.defineProperty(window, "HTMLSelectElement", {
    value: function HTMLSelectElement() {
        Developer.log("[dev] window HTMLSelectElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLSelectElement);

Object.defineProperty(window, "HTMLQuoteElement", {
    value: function HTMLQuoteElement() {
        Developer.log("[dev] window HTMLQuoteElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLQuoteElement);

Object.defineProperty(window, "HTMLProgressElement", {
    value: function HTMLProgressElement() {
        Developer.log("[dev] window HTMLProgressElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLProgressElement);

Object.defineProperty(window, "HTMLPreElement", {
    value: function HTMLPreElement() {
        Developer.log("[dev] window HTMLPreElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLPreElement);

Object.defineProperty(window, "HTMLPictureElement", {
    value: function HTMLPictureElement() {
        Developer.log("[dev] window HTMLPictureElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLPictureElement);

Object.defineProperty(window, "HTMLParamElement", {
    value: function HTMLParamElement() {
        Developer.log("[dev] window HTMLParamElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLParamElement);

Object.defineProperty(window, "HTMLParagraphElement", {
    value: function HTMLParagraphElement() {
        Developer.log("[dev] window HTMLParagraphElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLParagraphElement);

Object.defineProperty(window, "HTMLOutputElement", {
    value: function HTMLOutputElement() {
        Developer.log("[dev] window HTMLOutputElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLOutputElement);

Object.defineProperty(window, "HTMLOptionsCollection", {
    value: function HTMLOptionsCollection() {
        Developer.log("[dev] window HTMLOptionsCollection 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLOptionsCollection);

Object.defineProperty(window, "HTMLOptionElement", {
    value: function HTMLOptionElement() {
        Developer.log("[dev] window HTMLOptionElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLOptionElement);

Object.defineProperty(window, "HTMLOptGroupElement", {
    value: function HTMLOptGroupElement() {
        Developer.log("[dev] window HTMLOptGroupElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLOptGroupElement);

Object.defineProperty(window, "HTMLObjectElement", {
    value: function HTMLObjectElement() {
        Developer.log("[dev] window HTMLObjectElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLObjectElement);

Object.defineProperty(window, "HTMLOListElement", {
    value: function HTMLOListElement() {
        Developer.log("[dev] window HTMLOListElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLOListElement);

Object.defineProperty(window, "HTMLModElement", {
    value: function HTMLModElement() {
        Developer.log("[dev] window HTMLModElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLModElement);

Object.defineProperty(window, "HTMLMeterElement", {
    value: function HTMLMeterElement() {
        Developer.log("[dev] window HTMLMeterElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLMeterElement);

Object.defineProperty(window, "HTMLMenuElement", {
    value: function HTMLMenuElement() {
        Developer.log("[dev] window HTMLMenuElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLMenuElement);

Object.defineProperty(window, "HTMLMediaElement", {
    value: function HTMLMediaElement() {
        Developer.log("[dev] window HTMLMediaElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLMediaElement);

Object.defineProperty(window, "HTMLMarqueeElement", {
    value: function HTMLMarqueeElement() {
        Developer.log("[dev] window HTMLMarqueeElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLMarqueeElement);

Object.defineProperty(window, "HTMLMapElement", {
    value: function HTMLMapElement() {
        Developer.log("[dev] window HTMLMapElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLMapElement);

Object.defineProperty(window, "HTMLLinkElement", {
    value: function HTMLLinkElement() {
        Developer.log("[dev] window HTMLLinkElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLLinkElement);

Object.defineProperty(window, "HTMLLegendElement", {
    value: function HTMLLegendElement() {
        Developer.log("[dev] window HTMLLegendElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLLegendElement);

Object.defineProperty(window, "HTMLLabelElement", {
    value: function HTMLLabelElement() {
        Developer.log("[dev] window HTMLLabelElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLLabelElement);

Object.defineProperty(window, "HTMLLIElement", {
    value: function HTMLLIElement() {
        Developer.log("[dev] window HTMLLIElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLLIElement);

Object.defineProperty(window, "HTMLInputElement", {
    value: function HTMLInputElement() {
        Developer.log("[dev] window HTMLInputElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLInputElement);

Object.defineProperty(window, "HTMLIFrameElement", {
    value: function HTMLIFrameElement() {
        Developer.log("[dev] window HTMLIFrameElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLIFrameElement);

Object.defineProperty(window, "HTMLHeadingElement", {
    value: function HTMLHeadingElement() {
        Developer.log("[dev] window HTMLHeadingElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLHeadingElement);

Object.defineProperty(window, "HTMLHRElement", {
    value: function HTMLHRElement() {
        Developer.log("[dev] window HTMLHRElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLHRElement);

Object.defineProperty(window, "HTMLFrameSetElement", {
    value: function HTMLFrameSetElement() {
        Developer.log("[dev] window HTMLFrameSetElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLFrameSetElement);

Object.defineProperty(window, "HTMLFrameElement", {
    value: function HTMLFrameElement() {
        Developer.log("[dev] window HTMLFrameElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLFrameElement);

Object.defineProperty(window, "HTMLFormControlsCollection", {
    value: function HTMLFormControlsCollection() {
        Developer.log("[dev] window HTMLFormControlsCollection 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLFormControlsCollection);

Object.defineProperty(window, "HTMLFontElement", {
    value: function HTMLFontElement() {
        Developer.log("[dev] window HTMLFontElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLFontElement);

Object.defineProperty(window, "HTMLFieldSetElement", {
    value: function HTMLFieldSetElement() {
        Developer.log("[dev] window HTMLFieldSetElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLFieldSetElement);

Object.defineProperty(window, "HTMLEmbedElement", {
    value: function HTMLEmbedElement() {
        Developer.log("[dev] window HTMLEmbedElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLEmbedElement);

Object.defineProperty(window, "HTMLDirectoryElement", {
    value: function HTMLDirectoryElement() {
        Developer.log("[dev] window HTMLDirectoryElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLDirectoryElement);

Object.defineProperty(window, "HTMLDialogElement", {
    value: function HTMLDialogElement() {
        Developer.log("[dev] window HTMLDialogElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLDialogElement);

Object.defineProperty(window, "HTMLDetailsElement", {
    value: function HTMLDetailsElement() {
        Developer.log("[dev] window HTMLDetailsElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLDetailsElement);

Object.defineProperty(window, "HTMLDataListElement", {
    value: function HTMLDataListElement() {
        Developer.log("[dev] window HTMLDataListElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLDataListElement);

Object.defineProperty(window, "HTMLDataElement", {
    value: function HTMLDataElement() {
        Developer.log("[dev] window HTMLDataElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLDataElement);

Object.defineProperty(window, "HTMLDListElement", {
    value: function HTMLDListElement() {
        Developer.log("[dev] window HTMLDListElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLDListElement);

Object.defineProperty(window, "HTMLButtonElement", {
    value: function HTMLButtonElement() {
        Developer.log("[dev] window HTMLButtonElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLButtonElement);

Object.defineProperty(window, "HTMLBaseElement", {
    value: function HTMLBaseElement() {
        Developer.log("[dev] window HTMLBaseElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLBaseElement);

Object.defineProperty(window, "HTMLBRElement", {
    value: function HTMLBRElement() {
        Developer.log("[dev] window HTMLBRElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLBRElement);

Object.defineProperty(window, "HTMLAudioElement", {
    value: function HTMLAudioElement() {
        Developer.log("[dev] window HTMLAudioElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLAudioElement);

Object.defineProperty(window, "HTMLAreaElement", {
    value: function HTMLAreaElement() {
        Developer.log("[dev] window HTMLAreaElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLAreaElement);

Object.defineProperty(window, "GeolocationPositionError", {
    value: function GeolocationPositionError() {
        Developer.log("[dev] window GeolocationPositionError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GeolocationPositionError);

Object.defineProperty(window, "GeolocationPosition", {
    value: function GeolocationPosition() {
        Developer.log("[dev] window GeolocationPosition 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GeolocationPosition);

Object.defineProperty(window, "GeolocationCoordinates", {
    value: function GeolocationCoordinates() {
        Developer.log("[dev] window GeolocationCoordinates 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GeolocationCoordinates);

Object.defineProperty(window, "Geolocation", {
    value: function Geolocation() {
        Developer.log("[dev] window Geolocation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Geolocation);

Object.defineProperty(window, "GamepadHapticActuator", {
    value: function GamepadHapticActuator() {
        Developer.log("[dev] window GamepadHapticActuator 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GamepadHapticActuator);

Object.defineProperty(window, "GamepadEvent", {
    value: function GamepadEvent() {
        Developer.log("[dev] window GamepadEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GamepadEvent);

Object.defineProperty(window, "GamepadButton", {
    value: function GamepadButton() {
        Developer.log("[dev] window GamepadButton 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GamepadButton);

Object.defineProperty(window, "Gamepad", {
    value: function Gamepad() {
        Developer.log("[dev] window Gamepad 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Gamepad);

Object.defineProperty(window, "GainNode", {
    value: function GainNode() {
        Developer.log("[dev] window GainNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GainNode);

Object.defineProperty(window, "FormDataEvent", {
    value: function FormDataEvent() {
        Developer.log("[dev] window FormDataEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FormDataEvent);

Object.defineProperty(window, "FontFaceSetLoadEvent", {
    value: function FontFaceSetLoadEvent() {
        Developer.log("[dev] window FontFaceSetLoadEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FontFaceSetLoadEvent);

Object.defineProperty(window, "FontFace", {
    value: function FontFace() {
        Developer.log("[dev] window FontFace 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FontFace);

Object.defineProperty(window, "FocusEvent", {
    value: function FocusEvent() {
        Developer.log("[dev] window FocusEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FocusEvent);

Object.defineProperty(window, "FileReader", {
    value: function FileReader() {
        Developer.log("[dev] window FileReader 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FileReader);

Object.defineProperty(window, "FileList", {
    value: function FileList() {
        Developer.log("[dev] window FileList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FileList);

Object.defineProperty(window, "File", {
    value: function File() {
        Developer.log("[dev] window File 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.File);

Object.defineProperty(window, "FeaturePolicy", {
    value: function FeaturePolicy() {
        Developer.log("[dev] window FeaturePolicy 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FeaturePolicy);

Object.defineProperty(window, "External", {
    value: function External() {
        Developer.log("[dev] window External 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.External);


Object.defineProperty(window, "EventSource", {
    value: function EventSource() {
        Developer.log("[dev] window EventSource 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.EventSource);

Object.defineProperty(window, "EventCounts", {
    value: function EventCounts() {
        Developer.log("[dev] window EventCounts 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.EventCounts);

Object.defineProperty(window, "Event", {
    value: function Event() {
        Developer.log("[dev] window Event 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Event);

Object.defineProperty(window, "ErrorEvent", {
    value: function ErrorEvent() {
        Developer.log("[dev] window ErrorEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ErrorEvent);

Object.defineProperty(window, "EncodedVideoChunk", {
    value: function EncodedVideoChunk() {
        Developer.log("[dev] window EncodedVideoChunk 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.EncodedVideoChunk);

Object.defineProperty(window, "EncodedAudioChunk", {
    value: function EncodedAudioChunk() {
        Developer.log("[dev] window EncodedAudioChunk 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.EncodedAudioChunk);

Object.defineProperty(window, "ElementInternals", {
    value: function ElementInternals() {
        Developer.log("[dev] window ElementInternals 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ElementInternals);


Object.defineProperty(window, "EditContext", {
    value: function EditContext() {
        Developer.log("[dev] window EditContext 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.EditContext);

Object.defineProperty(window, "DynamicsCompressorNode", {
    value: function DynamicsCompressorNode() {
        Developer.log("[dev] window DynamicsCompressorNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DynamicsCompressorNode);

Object.defineProperty(window, "DragEvent", {
    value: function DragEvent() {
        Developer.log("[dev] window DragEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DragEvent);

Object.defineProperty(window, "DocumentType", {
    value: function DocumentType() {
        Developer.log("[dev] window DocumentType 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DocumentType);

Object.defineProperty(window, "DocumentTimeline", {
    value: function DocumentTimeline() {
        Developer.log("[dev] window DocumentTimeline 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DocumentTimeline);

Object.defineProperty(window, "DocumentFragment", {
    value: function DocumentFragment() {
        Developer.log("[dev] window DocumentFragment 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DocumentFragment);


Object.defineProperty(window, "DelegatedInkTrailPresenter", {
    value: function DelegatedInkTrailPresenter() {
        Developer.log("[dev] window DelegatedInkTrailPresenter 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DelegatedInkTrailPresenter);

Object.defineProperty(window, "DelayNode", {
    value: function DelayNode() {
        Developer.log("[dev] window DelayNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DelayNode);

Object.defineProperty(window, "DecompressionStream", {
    value: function DecompressionStream() {
        Developer.log("[dev] window DecompressionStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DecompressionStream);

Object.defineProperty(window, "DataTransferItemList", {
    value: function DataTransferItemList() {
        Developer.log("[dev] window DataTransferItemList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DataTransferItemList);

Object.defineProperty(window, "DataTransferItem", {
    value: function DataTransferItem() {
        Developer.log("[dev] window DataTransferItem 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DataTransferItem);

Object.defineProperty(window, "DataTransfer", {
    value: function DataTransfer() {
        Developer.log("[dev] window DataTransfer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DataTransfer);

Object.defineProperty(window, "DOMTokenList", {
    value: function DOMTokenList() {
        Developer.log("[dev] window DOMTokenList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMTokenList);

Object.defineProperty(window, "DOMStringMap", {
    value: function DOMStringMap() {
        Developer.log("[dev] window DOMStringMap 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMStringMap);

Object.defineProperty(window, "DOMStringList", {
    value: function DOMStringList() {
        Developer.log("[dev] window DOMStringList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMStringList);

Object.defineProperty(window, "DOMRectReadOnly", {
    value: function DOMRectReadOnly() {
        Developer.log("[dev] window DOMRectReadOnly 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMRectReadOnly);

Object.defineProperty(window, "DOMRectList", {
    value: function DOMRectList() {
        Developer.log("[dev] window DOMRectList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMRectList);

Object.defineProperty(window, "DOMRect", {
    value: function DOMRect() {
        Developer.log("[dev] window DOMRect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMRect);

Object.defineProperty(window, "DOMQuad", {
    value: function DOMQuad() {
        Developer.log("[dev] window DOMQuad 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMQuad);

Object.defineProperty(window, "DOMPointReadOnly", {
    value: function DOMPointReadOnly() {
        Developer.log("[dev] window DOMPointReadOnly 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMPointReadOnly);

Object.defineProperty(window, "DOMPoint", {
    value: function DOMPoint() {
        Developer.log("[dev] window DOMPoint 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMPoint);

Object.defineProperty(window, "DOMParser", {
    value: function DOMParser() {
        Developer.log("[dev] window DOMParser 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMParser);

Object.defineProperty(window, "DOMMatrixReadOnly", {
    value: function DOMMatrixReadOnly() {
        Developer.log("[dev] window DOMMatrixReadOnly 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMMatrixReadOnly);

Object.defineProperty(window, "DOMMatrix", {
    value: function DOMMatrix() {
        Developer.log("[dev] window DOMMatrix 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMMatrix);

Object.defineProperty(window, "DOMImplementation", {
    value: function DOMImplementation() {
        Developer.log("[dev] window DOMImplementation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMImplementation);

Object.defineProperty(window, "DOMException", {
    value: function DOMException() {
        Developer.log("[dev] window DOMException 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMException);

Object.defineProperty(window, "DOMError", {
    value: function DOMError() {
        Developer.log("[dev] window DOMError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DOMError);

Object.defineProperty(window, "CustomStateSet", {
    value: function CustomStateSet() {
        Developer.log("[dev] window CustomStateSet 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CustomStateSet);

Object.defineProperty(window, "CustomEvent", {
    value: function CustomEvent() {
        Developer.log("[dev] window CustomEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CustomEvent);

Object.defineProperty(window, "CustomElementRegistry", {
    value: function CustomElementRegistry() {
        Developer.log("[dev] window CustomElementRegistry 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CustomElementRegistry);

Object.defineProperty(window, "Crypto", {
    value: function Crypto() {
        Developer.log("[dev] window Crypto 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Crypto);

Object.defineProperty(window, "CountQueuingStrategy", {
    value: function CountQueuingStrategy() {
        Developer.log("[dev] window CountQueuingStrategy 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CountQueuingStrategy);

Object.defineProperty(window, "ConvolverNode", {
    value: function ConvolverNode() {
        Developer.log("[dev] window ConvolverNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ConvolverNode);

Object.defineProperty(window, "ContentVisibilityAutoStateChangeEvent", {
    value: function ContentVisibilityAutoStateChangeEvent() {
        Developer.log("[dev] window ContentVisibilityAutoStateChangeEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ContentVisibilityAutoStateChangeEvent);

Object.defineProperty(window, "ConstantSourceNode", {
    value: function ConstantSourceNode() {
        Developer.log("[dev] window ConstantSourceNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ConstantSourceNode);

Object.defineProperty(window, "CompressionStream", {
    value: function CompressionStream() {
        Developer.log("[dev] window CompressionStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CompressionStream);

Object.defineProperty(window, "CompositionEvent", {
    value: function CompositionEvent() {
        Developer.log("[dev] window CompositionEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CompositionEvent);

Object.defineProperty(window, "Comment", {
    value: function Comment() {
        Developer.log("[dev] window Comment 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Comment);

Object.defineProperty(window, "CloseEvent", {
    value: function CloseEvent() {
        Developer.log("[dev] window CloseEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CloseEvent);

Object.defineProperty(window, "ClipboardEvent", {
    value: function ClipboardEvent() {
        Developer.log("[dev] window ClipboardEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ClipboardEvent);

Object.defineProperty(window, "CharacterData", {
    value: function CharacterData() {
        Developer.log("[dev] window CharacterData 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CharacterData);

Object.defineProperty(window, "CharacterBoundsUpdateEvent", {
    value: function CharacterBoundsUpdateEvent() {
        Developer.log("[dev] window CharacterBoundsUpdateEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CharacterBoundsUpdateEvent);

Object.defineProperty(window, "ChannelSplitterNode", {
    value: function ChannelSplitterNode() {
        Developer.log("[dev] window ChannelSplitterNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ChannelSplitterNode);

Object.defineProperty(window, "ChannelMergerNode", {
    value: function ChannelMergerNode() {
        Developer.log("[dev] window ChannelMergerNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ChannelMergerNode);


Object.defineProperty(window, "CanvasPattern", {
    value: function CanvasPattern() {
        Developer.log("[dev] window CanvasPattern 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CanvasPattern);

Object.defineProperty(window, "CanvasGradient", {
    value: function CanvasGradient() {
        Developer.log("[dev] window CanvasGradient 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CanvasGradient);

Object.defineProperty(window, "CanvasCaptureMediaStreamTrack", {
    value: function CanvasCaptureMediaStreamTrack() {
        Developer.log("[dev] window CanvasCaptureMediaStreamTrack 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CanvasCaptureMediaStreamTrack);

Object.defineProperty(window, "CSSVariableReferenceValue", {
    value: function CSSVariableReferenceValue() {
        Developer.log("[dev] window CSSVariableReferenceValue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSVariableReferenceValue);

Object.defineProperty(window, "CSSUnparsedValue", {
    value: function CSSUnparsedValue() {
        Developer.log("[dev] window CSSUnparsedValue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSUnparsedValue);

Object.defineProperty(window, "CSSUnitValue", {
    value: function CSSUnitValue() {
        Developer.log("[dev] window CSSUnitValue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSUnitValue);

Object.defineProperty(window, "CSSTranslate", {
    value: function CSSTranslate() {
        Developer.log("[dev] window CSSTranslate 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSTranslate);

Object.defineProperty(window, "CSSTransition", {
    value: function CSSTransition() {
        Developer.log("[dev] window CSSTransition 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSTransition);

Object.defineProperty(window, "CSSTransformValue", {
    value: function CSSTransformValue() {
        Developer.log("[dev] window CSSTransformValue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSTransformValue);

Object.defineProperty(window, "CSSTransformComponent", {
    value: function CSSTransformComponent() {
        Developer.log("[dev] window CSSTransformComponent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSTransformComponent);

Object.defineProperty(window, "CSSSupportsRule", {
    value: function CSSSupportsRule() {
        Developer.log("[dev] window CSSSupportsRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSSupportsRule);

Object.defineProperty(window, "CSSStyleValue", {
    value: function CSSStyleValue() {
        Developer.log("[dev] window CSSStyleValue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSStyleValue);

Object.defineProperty(window, "CSSStyleSheet", {
    value: function CSSStyleSheet() {
        Developer.log("[dev] window CSSStyleSheet 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSStyleSheet);

Object.defineProperty(window, "CSSStyleRule", {
    value: function CSSStyleRule() {
        Developer.log("[dev] window CSSStyleRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSStyleRule);

Object.defineProperty(window, "CSSStyleDeclaration", {
    value: function CSSStyleDeclaration() {
        Developer.log("[dev] window CSSStyleDeclaration 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSStyleDeclaration);

Object.defineProperty(window, "CSSStartingStyleRule", {
    value: function CSSStartingStyleRule() {
        Developer.log("[dev] window CSSStartingStyleRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSStartingStyleRule);

Object.defineProperty(window, "CSSSkewY", {
    value: function CSSSkewY() {
        Developer.log("[dev] window CSSSkewY 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSSkewY);

Object.defineProperty(window, "CSSSkewX", {
    value: function CSSSkewX() {
        Developer.log("[dev] window CSSSkewX 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSSkewX);

Object.defineProperty(window, "CSSSkew", {
    value: function CSSSkew() {
        Developer.log("[dev] window CSSSkew 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSSkew);

Object.defineProperty(window, "CSSScopeRule", {
    value: function CSSScopeRule() {
        Developer.log("[dev] window CSSScopeRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSScopeRule);

Object.defineProperty(window, "CSSScale", {
    value: function CSSScale() {
        Developer.log("[dev] window CSSScale 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSScale);

Object.defineProperty(window, "CSSRuleList", {
    value: function CSSRuleList() {
        Developer.log("[dev] window CSSRuleList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSRuleList);

Object.defineProperty(window, "CSSRule", {
    value: function CSSRule() {
        Developer.log("[dev] window CSSRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSRule);

Object.defineProperty(window, "CSSRotate", {
    value: function CSSRotate() {
        Developer.log("[dev] window CSSRotate 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSRotate);

Object.defineProperty(window, "CSSPropertyRule", {
    value: function CSSPropertyRule() {
        Developer.log("[dev] window CSSPropertyRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSPropertyRule);

Object.defineProperty(window, "CSSPositionValue", {
    value: function CSSPositionValue() {
        Developer.log("[dev] window CSSPositionValue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSPositionValue);

Object.defineProperty(window, "CSSPerspective", {
    value: function CSSPerspective() {
        Developer.log("[dev] window CSSPerspective 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSPerspective);

Object.defineProperty(window, "CSSPageRule", {
    value: function CSSPageRule() {
        Developer.log("[dev] window CSSPageRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSPageRule);

Object.defineProperty(window, "CSSNumericValue", {
    value: function CSSNumericValue() {
        Developer.log("[dev] window CSSNumericValue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSNumericValue);

Object.defineProperty(window, "CSSNumericArray", {
    value: function CSSNumericArray() {
        Developer.log("[dev] window CSSNumericArray 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSNumericArray);

Object.defineProperty(window, "CSSNamespaceRule", {
    value: function CSSNamespaceRule() {
        Developer.log("[dev] window CSSNamespaceRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSNamespaceRule);

Object.defineProperty(window, "CSSMediaRule", {
    value: function CSSMediaRule() {
        Developer.log("[dev] window CSSMediaRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSMediaRule);

Object.defineProperty(window, "CSSMatrixComponent", {
    value: function CSSMatrixComponent() {
        Developer.log("[dev] window CSSMatrixComponent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSMatrixComponent);

Object.defineProperty(window, "CSSMathValue", {
    value: function CSSMathValue() {
        Developer.log("[dev] window CSSMathValue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSMathValue);

Object.defineProperty(window, "CSSMathSum", {
    value: function CSSMathSum() {
        Developer.log("[dev] window CSSMathSum 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSMathSum);

Object.defineProperty(window, "CSSMathProduct", {
    value: function CSSMathProduct() {
        Developer.log("[dev] window CSSMathProduct 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSMathProduct);

Object.defineProperty(window, "CSSMathNegate", {
    value: function CSSMathNegate() {
        Developer.log("[dev] window CSSMathNegate 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSMathNegate);

Object.defineProperty(window, "CSSMathMin", {
    value: function CSSMathMin() {
        Developer.log("[dev] window CSSMathMin 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSMathMin);

Object.defineProperty(window, "CSSMathMax", {
    value: function CSSMathMax() {
        Developer.log("[dev] window CSSMathMax 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSMathMax);

Object.defineProperty(window, "CSSMathInvert", {
    value: function CSSMathInvert() {
        Developer.log("[dev] window CSSMathInvert 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSMathInvert);

Object.defineProperty(window, "CSSMathClamp", {
    value: function CSSMathClamp() {
        Developer.log("[dev] window CSSMathClamp 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSMathClamp);

Object.defineProperty(window, "CSSLayerStatementRule", {
    value: function CSSLayerStatementRule() {
        Developer.log("[dev] window CSSLayerStatementRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSLayerStatementRule);

Object.defineProperty(window, "CSSLayerBlockRule", {
    value: function CSSLayerBlockRule() {
        Developer.log("[dev] window CSSLayerBlockRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSLayerBlockRule);

Object.defineProperty(window, "CSSKeywordValue", {
    value: function CSSKeywordValue() {
        Developer.log("[dev] window CSSKeywordValue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSKeywordValue);

Object.defineProperty(window, "CSSKeyframesRule", {
    value: function CSSKeyframesRule() {
        Developer.log("[dev] window CSSKeyframesRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSKeyframesRule);

Object.defineProperty(window, "CSSKeyframeRule", {
    value: function CSSKeyframeRule() {
        Developer.log("[dev] window CSSKeyframeRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSKeyframeRule);

Object.defineProperty(window, "CSSImportRule", {
    value: function CSSImportRule() {
        Developer.log("[dev] window CSSImportRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSImportRule);

Object.defineProperty(window, "CSSImageValue", {
    value: function CSSImageValue() {
        Developer.log("[dev] window CSSImageValue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSImageValue);

Object.defineProperty(window, "CSSGroupingRule", {
    value: function CSSGroupingRule() {
        Developer.log("[dev] window CSSGroupingRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSGroupingRule);

Object.defineProperty(window, "CSSFontPaletteValuesRule", {
    value: function CSSFontPaletteValuesRule() {
        Developer.log("[dev] window CSSFontPaletteValuesRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSFontPaletteValuesRule);

Object.defineProperty(window, "CSSFontFaceRule", {
    value: function CSSFontFaceRule() {
        Developer.log("[dev] window CSSFontFaceRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSFontFaceRule);

Object.defineProperty(window, "CSSCounterStyleRule", {
    value: function CSSCounterStyleRule() {
        Developer.log("[dev] window CSSCounterStyleRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSCounterStyleRule);

Object.defineProperty(window, "CSSContainerRule", {
    value: function CSSContainerRule() {
        Developer.log("[dev] window CSSContainerRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSContainerRule);

Object.defineProperty(window, "CSSConditionRule", {
    value: function CSSConditionRule() {
        Developer.log("[dev] window CSSConditionRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSConditionRule);

Object.defineProperty(window, "CSSAnimation", {
    value: function CSSAnimation() {
        Developer.log("[dev] window CSSAnimation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSAnimation);

Object.defineProperty(window, "CSS", {
    value: {},
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "CDATASection", {
    value: function CDATASection() {
        Developer.log("[dev] window CDATASection 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CDATASection);

Object.defineProperty(window, "ByteLengthQueuingStrategy", {
    value: function ByteLengthQueuingStrategy() {
        Developer.log("[dev] window ByteLengthQueuingStrategy 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ByteLengthQueuingStrategy);

Object.defineProperty(window, "BrowserCaptureMediaStreamTrack", {
    value: function BrowserCaptureMediaStreamTrack() {
        Developer.log("[dev] window BrowserCaptureMediaStreamTrack 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BrowserCaptureMediaStreamTrack);

Object.defineProperty(window, "BroadcastChannel", {
    value: function BroadcastChannel() {
        Developer.log("[dev] window BroadcastChannel 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BroadcastChannel);

Object.defineProperty(window, "BlobEvent", {
    value: function BlobEvent() {
        Developer.log("[dev] window BlobEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BlobEvent);

Object.defineProperty(window, "Blob", {
    value: function Blob() {
        Developer.log("[dev] window Blob 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Blob);

Object.defineProperty(window, "BiquadFilterNode", {
    value: function BiquadFilterNode() {
        Developer.log("[dev] window BiquadFilterNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BiquadFilterNode);

Object.defineProperty(window, "BeforeUnloadEvent", {
    value: function BeforeUnloadEvent() {
        Developer.log("[dev] window BeforeUnloadEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BeforeUnloadEvent);

Object.defineProperty(window, "BeforeInstallPromptEvent", {
    value: function BeforeInstallPromptEvent() {
        Developer.log("[dev] window BeforeInstallPromptEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BeforeInstallPromptEvent);

Object.defineProperty(window, "BaseAudioContext", {
    value: function BaseAudioContext() {
        Developer.log("[dev] window BaseAudioContext 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BaseAudioContext);

Object.defineProperty(window, "BarProp", {
    value: function BarProp() {
        Developer.log("[dev] window BarProp 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BarProp);

Object.defineProperty(window, "AudioWorkletNode", {
    value: function AudioWorkletNode() {
        Developer.log("[dev] window AudioWorkletNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioWorkletNode);

Object.defineProperty(window, "AudioSinkInfo", {
    value: function AudioSinkInfo() {
        Developer.log("[dev] window AudioSinkInfo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioSinkInfo);

Object.defineProperty(window, "AudioScheduledSourceNode", {
    value: function AudioScheduledSourceNode() {
        Developer.log("[dev] window AudioScheduledSourceNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioScheduledSourceNode);

Object.defineProperty(window, "AudioProcessingEvent", {
    value: function AudioProcessingEvent() {
        Developer.log("[dev] window AudioProcessingEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioProcessingEvent);

Object.defineProperty(window, "AudioParamMap", {
    value: function AudioParamMap() {
        Developer.log("[dev] window AudioParamMap 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioParamMap);

Object.defineProperty(window, "AudioParam", {
    value: function AudioParam() {
        Developer.log("[dev] window AudioParam 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioParam);

Object.defineProperty(window, "AudioNode", {
    value: function AudioNode() {
        Developer.log("[dev] window AudioNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioNode);

Object.defineProperty(window, "AudioListener", {
    value: function AudioListener() {
        Developer.log("[dev] window AudioListener 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioListener);

Object.defineProperty(window, "AudioDestinationNode", {
    value: function AudioDestinationNode() {
        Developer.log("[dev] window AudioDestinationNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioDestinationNode);

Object.defineProperty(window, "AudioData", {
    value: function AudioData() {
        Developer.log("[dev] window AudioData 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioData);

Object.defineProperty(window, "AudioContext", {
    value: function AudioContext() {
        Developer.log("[dev] window AudioContext 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioContext);

Object.defineProperty(window, "AudioBufferSourceNode", {
    value: function AudioBufferSourceNode() {
        Developer.log("[dev] window AudioBufferSourceNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioBufferSourceNode);

Object.defineProperty(window, "AudioBuffer", {
    value: function AudioBuffer() {
        Developer.log("[dev] window AudioBuffer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioBuffer);

Object.defineProperty(window, "Attr", {
    value: function Attr() {
        Developer.log("[dev] window Attr 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Attr);

Object.defineProperty(window, "AnimationTimeline", {
    value: function AnimationTimeline() {
        Developer.log("[dev] window AnimationTimeline 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AnimationTimeline);

Object.defineProperty(window, "AnimationPlaybackEvent", {
    value: function AnimationPlaybackEvent() {
        Developer.log("[dev] window AnimationPlaybackEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AnimationPlaybackEvent);

Object.defineProperty(window, "AnimationEvent", {
    value: function AnimationEvent() {
        Developer.log("[dev] window AnimationEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AnimationEvent);

Object.defineProperty(window, "AnimationEffect", {
    value: function AnimationEffect() {
        Developer.log("[dev] window AnimationEffect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AnimationEffect);

Object.defineProperty(window, "Animation", {
    value: function Animation() {
        Developer.log("[dev] window Animation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Animation);

Object.defineProperty(window, "AnalyserNode", {
    value: function AnalyserNode() {
        Developer.log("[dev] window AnalyserNode 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AnalyserNode);

Object.defineProperty(window, "AbstractRange", {
    value: function AbstractRange() {
        Developer.log("[dev] window AbstractRange 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AbstractRange);

Object.defineProperty(window, "AbortSignal", {
    value: function AbortSignal() {
        Developer.log("[dev] window AbortSignal 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AbortSignal);

Object.defineProperty(window, "AbortController", {
    value: function AbortController() {
        Developer.log("[dev] window AbortController 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AbortController);



vmcore.propertymanager.window.customElements = null;
Object.defineProperty(window, "customElements", {
    get: function customElements() {
        Developer.log("[dev] window customElements 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.customElements;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});



vmcore.propertymanager.window.navigation = null;
Object.defineProperty(window, "navigation", {
    get: function navigation() {
        Developer.log("[dev] window navigation 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.navigation;
    },
    set: function navigation(val) {
        Developer.log("[dev] window navigation 描述符 [set] 被调用了");
        vmcore.propertymanager.window.navigation = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.locationbar = null;
Object.defineProperty(window, "locationbar", {
    get: function locationbar() {
        Developer.log("[dev] window locationbar 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.locationbar;
    },
    set: function locationbar(val) {
        Developer.log("[dev] window locationbar 描述符 [set] 被调用了");
        vmcore.propertymanager.window.locationbar = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.menubar = null;
Object.defineProperty(window, "menubar", {
    get: function menubar() {
        Developer.log("[dev] window menubar 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.menubar;
    },
    set: function menubar(val) {
        Developer.log("[dev] window menubar 描述符 [set] 被调用了");
        vmcore.propertymanager.window.menubar = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.personalbar = null;
Object.defineProperty(window, "personalbar", {
    get: function personalbar() {
        Developer.log("[dev] window personalbar 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.personalbar;
    },
    set: function personalbar(val) {
        Developer.log("[dev] window personalbar 描述符 [set] 被调用了");
        vmcore.propertymanager.window.personalbar = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.scrollbars = null;
Object.defineProperty(window, "scrollbars", {
    get: function scrollbars() {
        Developer.log("[dev] window scrollbars 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.scrollbars;
    },
    set: function scrollbars(val) {
        Developer.log("[dev] window scrollbars 描述符 [set] 被调用了");
        vmcore.propertymanager.window.scrollbars = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.statusbar = null;
Object.defineProperty(window, "statusbar", {
    get: function statusbar() {
        Developer.log("[dev] window statusbar 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.statusbar;
    },
    set: function statusbar(val) {
        Developer.log("[dev] window statusbar 描述符 [set] 被调用了");
        vmcore.propertymanager.window.statusbar = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.toolbar = null;
Object.defineProperty(window, "toolbar", {
    get: function toolbar() {
        Developer.log("[dev] window toolbar 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.toolbar;
    },
    set: function toolbar(val) {
        Developer.log("[dev] window toolbar 描述符 [set] 被调用了");
        vmcore.propertymanager.window.toolbar = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.status = "";
Object.defineProperty(window, "status", {
    get: function status() {
        Developer.log("[dev] window status 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.status;
    },
    set: function status(val) {
        Developer.log("[dev] window status 描述符 [set] 被调用了");
        vmcore.propertymanager.window.status = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.closed = false;
Object.defineProperty(window, "closed", {
    get: function closed() {
        Developer.log("[dev] window closed 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.closed;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.frames = null;
Object.defineProperty(window, "frames", {
    get: function frames() {
        Developer.log("[dev] window frames 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.frames;
    },
    set: function frames(val) {
        Developer.log("[dev] window frames 描述符 [set] 被调用了");
        vmcore.propertymanager.window.frames = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.length = 0;
Object.defineProperty(window, "length", {
    get: function length() {
        Developer.log("[dev] window length 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.length;
    },
    set: function length(val) {
        Developer.log("[dev] window length 描述符 [set] 被调用了");
        vmcore.propertymanager.window.length = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.opener = null;
Object.defineProperty(window, "opener", {
    get: function opener() {
        Developer.log("[dev] window opener 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.opener;
    },
    set: function opener(val) {
        Developer.log("[dev] window opener 描述符 [set] 被调用了");
        vmcore.propertymanager.window.opener = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.parent = null;
Object.defineProperty(window, "parent", {
    get: function parent() {
        Developer.log("[dev] window parent 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.parent;
    },
    set: function parent(val) {
        Developer.log("[dev] window parent 描述符 [set] 被调用了");
        vmcore.propertymanager.window.parent = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.frameElement = null;
Object.defineProperty(window, "frameElement", {
    get: function frameElement() {
        Developer.log("[dev] window frameElement 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.frameElement;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.origin = "https://zh.wikipedia.org";
Object.defineProperty(window, "origin", {
    get: function origin() {
        Developer.log("[dev] window origin 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.origin;
    },
    set: function origin(val) {
        Developer.log("[dev] window origin 描述符 [set] 被调用了");
        vmcore.propertymanager.window.origin = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.external = {};
Object.defineProperty(window, "external", {
    get: function external() {
        Developer.log("[dev] window external 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.external;
    },
    set: function external(val) {
        Developer.log("[dev] window external 描述符 [set] 被调用了");
        vmcore.propertymanager.window.external = val;
    },
    enumerable: true,
    configurable: true,
});


vmcore.propertymanager.window.innerWidth = 2560;
Object.defineProperty(window, "innerWidth", {
    get: function innerWidth() {
        Developer.log("[dev] window innerWidth 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.innerWidth;
    },
    set: function innerWidth(val) {
        Developer.log("[dev] window innerWidth 描述符 [set] 被调用了");
        vmcore.propertymanager.window.innerWidth = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.innerHeight = 150;
Object.defineProperty(window, "innerHeight", {
    get: function innerHeight() {
        Developer.log("[dev] window innerHeight 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.innerHeight;
    },
    set: function innerHeight(val) {
        Developer.log("[dev] window innerHeight 描述符 [set] 被调用了");
        vmcore.propertymanager.window.innerHeight = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.scrollX = 0;
Object.defineProperty(window, "scrollX", {
    get: function scrollX() {
        Developer.log("[dev] window scrollX 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.scrollX;
    },
    set: function scrollX(val) {
        Developer.log("[dev] window scrollX 描述符 [set] 被调用了");
        vmcore.propertymanager.window.scrollX = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.pageXOffset = 0;
Object.defineProperty(window, "pageXOffset", {
    get: function pageXOffset() {
        Developer.log("[dev] window pageXOffset 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.pageXOffset;
    },
    set: function pageXOffset(val) {
        Developer.log("[dev] window pageXOffset 描述符 [set] 被调用了");
        vmcore.propertymanager.window.pageXOffset = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.scrollY = 702;
Object.defineProperty(window, "scrollY", {
    get: function scrollY() {
        Developer.log("[dev] window scrollY 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.scrollY;
    },
    set: function scrollY(val) {
        Developer.log("[dev] window scrollY 描述符 [set] 被调用了");
        vmcore.propertymanager.window.scrollY = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.pageYOffset = 702;
Object.defineProperty(window, "pageYOffset", {
    get: function pageYOffset() {
        Developer.log("[dev] window pageYOffset 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.pageYOffset;
    },
    set: function pageYOffset(val) {
        Developer.log("[dev] window pageYOffset 描述符 [set] 被调用了");
        vmcore.propertymanager.window.pageYOffset = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.visualViewport = null;
Object.defineProperty(window, "visualViewport", {
    get: function visualViewport() {
        Developer.log("[dev] window visualViewport 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.visualViewport;
    },
    set: function visualViewport(val) {
        Developer.log("[dev] window visualViewport 描述符 [set] 被调用了");
        vmcore.propertymanager.window.visualViewport = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.screenX = -2560;
Object.defineProperty(window, "screenX", {
    get: function screenX() {
        Developer.log("[dev] window screenX 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.screenX;
    },
    set: function screenX(val) {
        Developer.log("[dev] window screenX 描述符 [set] 被调用了");
        vmcore.propertymanager.window.screenX = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.screenY = -367;
Object.defineProperty(window, "screenY", {
    get: function screenY() {
        Developer.log("[dev] window screenY 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.screenY;
    },
    set: function screenY(val) {
        Developer.log("[dev] window screenY 描述符 [set] 被调用了");
        vmcore.propertymanager.window.screenY = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.outerWidth = 2560;
Object.defineProperty(window, "outerWidth", {
    get: function outerWidth() {
        Developer.log("[dev] window outerWidth 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.outerWidth;
    },
    set: function outerWidth(val) {
        Developer.log("[dev] window outerWidth 描述符 [set] 被调用了");
        vmcore.propertymanager.window.outerWidth = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.outerHeight = 1401;
Object.defineProperty(window, "outerHeight", {
    get: function outerHeight() {
        Developer.log("[dev] window outerHeight 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.outerHeight;
    },
    set: function outerHeight(val) {
        Developer.log("[dev] window outerHeight 描述符 [set] 被调用了");
        vmcore.propertymanager.window.outerHeight = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.devicePixelRatio = 1.5;
Object.defineProperty(window, "devicePixelRatio", {
    get: function devicePixelRatio() {
        Developer.log("[dev] window devicePixelRatio 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.devicePixelRatio;
    },
    set: function devicePixelRatio(val) {
        Developer.log("[dev] window devicePixelRatio 描述符 [set] 被调用了");
        vmcore.propertymanager.window.devicePixelRatio = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.event = undefined;
Object.defineProperty(window, "event", {
    get: function event() {
        Developer.log("[dev] window event 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.event;
    },
    set: function event(val) {
        Developer.log("[dev] window event 描述符 [set] 被调用了");
        vmcore.propertymanager.window.event = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.clientInformation = null;
Object.defineProperty(window, "clientInformation", {
    get: function clientInformation() {
        Developer.log("[dev] window clientInformation 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.clientInformation;
    },
    set: function clientInformation(val) {
        Developer.log("[dev] window clientInformation 描述符 [set] 被调用了");
        vmcore.propertymanager.window.clientInformation = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.offscreenBuffering = true;
Object.defineProperty(window, "offscreenBuffering", {
    get: function offscreenBuffering() {
        Developer.log("[dev] window offscreenBuffering 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.offscreenBuffering;
    },
    set: function offscreenBuffering(val) {
        Developer.log("[dev] window offscreenBuffering 描述符 [set] 被调用了");
        vmcore.propertymanager.window.offscreenBuffering = val;
    },
    enumerable: false,
    configurable: true,
});

vmcore.propertymanager.window.screenLeft = -2560;
Object.defineProperty(window, "screenLeft", {
    get: function screenLeft() {
        Developer.log("[dev] window screenLeft 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.screenLeft;
    },
    set: function screenLeft(val) {
        Developer.log("[dev] window screenLeft 描述符 [set] 被调用了");
        vmcore.propertymanager.window.screenLeft = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.screenTop = -367;
Object.defineProperty(window, "screenTop", {
    get: function screenTop() {
        Developer.log("[dev] window screenTop 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.screenTop;
    },
    set: function screenTop(val) {
        Developer.log("[dev] window screenTop 描述符 [set] 被调用了");
        vmcore.propertymanager.window.screenTop = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.styleMedia = null;
Object.defineProperty(window, "styleMedia", {
    get: function styleMedia() {
        Developer.log("[dev] window styleMedia 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.styleMedia;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onsearch = null;
Object.defineProperty(window, "onsearch", {
    get: function onsearch() {
        Developer.log("[dev] window onsearch 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onsearch;
    },
    set: function onsearch(val) {
        Developer.log("[dev] window onsearch 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onsearch = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.isSecureContext = true;
Object.defineProperty(window, "isSecureContext", {
    get: function isSecureContext() {
        Developer.log("[dev] window isSecureContext 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.isSecureContext;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.trustedTypes = null;
Object.defineProperty(window, "trustedTypes", {
    get: function trustedTypes() {
        Developer.log("[dev] window trustedTypes 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.trustedTypes;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.performance = null;
Object.defineProperty(window, "performance", {
    get: function performance() {
        Developer.log("[dev] window performance 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.performance;
    },
    set: function performance(val) {
        Developer.log("[dev] window performance 描述符 [set] 被调用了");
        vmcore.propertymanager.window.performance = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onappinstalled = null;
Object.defineProperty(window, "onappinstalled", {
    get: function onappinstalled() {
        Developer.log("[dev] window onappinstalled 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onappinstalled;
    },
    set: function onappinstalled(val) {
        Developer.log("[dev] window onappinstalled 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onappinstalled = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onbeforeinstallprompt = null;
Object.defineProperty(window, "onbeforeinstallprompt", {
    get: function onbeforeinstallprompt() {
        Developer.log("[dev] window onbeforeinstallprompt 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onbeforeinstallprompt;
    },
    set: function onbeforeinstallprompt(val) {
        Developer.log("[dev] window onbeforeinstallprompt 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onbeforeinstallprompt = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.crypto = null;
Object.defineProperty(window, "crypto", {
    get: function crypto() {
        Developer.log("[dev] window crypto 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.crypto;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onbeforexrselect = null;
Object.defineProperty(window, "onbeforexrselect", {
    get: function onbeforexrselect() {
        Developer.log("[dev] window onbeforexrselect 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onbeforexrselect;
    },
    set: function onbeforexrselect(val) {
        Developer.log("[dev] window onbeforexrselect 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onbeforexrselect = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onabort = null;
Object.defineProperty(window, "onabort", {
    get: function onabort() {
        Developer.log("[dev] window onabort 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onabort;
    },
    set: function onabort(val) {
        Developer.log("[dev] window onabort 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onabort = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onbeforeinput = null;
Object.defineProperty(window, "onbeforeinput", {
    get: function onbeforeinput() {
        Developer.log("[dev] window onbeforeinput 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onbeforeinput;
    },
    set: function onbeforeinput(val) {
        Developer.log("[dev] window onbeforeinput 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onbeforeinput = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onbeforematch = null;
Object.defineProperty(window, "onbeforematch", {
    get: function onbeforematch() {
        Developer.log("[dev] window onbeforematch 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onbeforematch;
    },
    set: function onbeforematch(val) {
        Developer.log("[dev] window onbeforematch 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onbeforematch = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onbeforetoggle = null;
Object.defineProperty(window, "onbeforetoggle", {
    get: function onbeforetoggle() {
        Developer.log("[dev] window onbeforetoggle 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onbeforetoggle;
    },
    set: function onbeforetoggle(val) {
        Developer.log("[dev] window onbeforetoggle 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onbeforetoggle = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onblur = null;
Object.defineProperty(window, "onblur", {
    get: function onblur() {
        Developer.log("[dev] window onblur 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onblur;
    },
    set: function onblur(val) {
        Developer.log("[dev] window onblur 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onblur = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.oncancel = null;
Object.defineProperty(window, "oncancel", {
    get: function oncancel() {
        Developer.log("[dev] window oncancel 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.oncancel;
    },
    set: function oncancel(val) {
        Developer.log("[dev] window oncancel 描述符 [set] 被调用了");
        vmcore.propertymanager.window.oncancel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.oncanplay = null;
Object.defineProperty(window, "oncanplay", {
    get: function oncanplay() {
        Developer.log("[dev] window oncanplay 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.oncanplay;
    },
    set: function oncanplay(val) {
        Developer.log("[dev] window oncanplay 描述符 [set] 被调用了");
        vmcore.propertymanager.window.oncanplay = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.oncanplaythrough = null;
Object.defineProperty(window, "oncanplaythrough", {
    get: function oncanplaythrough() {
        Developer.log("[dev] window oncanplaythrough 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.oncanplaythrough;
    },
    set: function oncanplaythrough(val) {
        Developer.log("[dev] window oncanplaythrough 描述符 [set] 被调用了");
        vmcore.propertymanager.window.oncanplaythrough = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onchange = null;
Object.defineProperty(window, "onchange", {
    get: function onchange() {
        Developer.log("[dev] window onchange 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onchange;
    },
    set: function onchange(val) {
        Developer.log("[dev] window onchange 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onclick = null;
Object.defineProperty(window, "onclick", {
    get: function onclick() {
        Developer.log("[dev] window onclick 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onclick;
    },
    set: function onclick(val) {
        Developer.log("[dev] window onclick 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onclick = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onclose = null;
Object.defineProperty(window, "onclose", {
    get: function onclose() {
        Developer.log("[dev] window onclose 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onclose;
    },
    set: function onclose(val) {
        Developer.log("[dev] window onclose 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onclose = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.oncontentvisibilityautostatechange = null;
Object.defineProperty(window, "oncontentvisibilityautostatechange", {
    get: function oncontentvisibilityautostatechange() {
        Developer.log("[dev] window oncontentvisibilityautostatechange 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.oncontentvisibilityautostatechange;
    },
    set: function oncontentvisibilityautostatechange(val) {
        Developer.log("[dev] window oncontentvisibilityautostatechange 描述符 [set] 被调用了");
        vmcore.propertymanager.window.oncontentvisibilityautostatechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.oncontextlost = null;
Object.defineProperty(window, "oncontextlost", {
    get: function oncontextlost() {
        Developer.log("[dev] window oncontextlost 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.oncontextlost;
    },
    set: function oncontextlost(val) {
        Developer.log("[dev] window oncontextlost 描述符 [set] 被调用了");
        vmcore.propertymanager.window.oncontextlost = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.oncontextmenu = null;
Object.defineProperty(window, "oncontextmenu", {
    get: function oncontextmenu() {
        Developer.log("[dev] window oncontextmenu 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.oncontextmenu;
    },
    set: function oncontextmenu(val) {
        Developer.log("[dev] window oncontextmenu 描述符 [set] 被调用了");
        vmcore.propertymanager.window.oncontextmenu = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.oncontextrestored = null;
Object.defineProperty(window, "oncontextrestored", {
    get: function oncontextrestored() {
        Developer.log("[dev] window oncontextrestored 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.oncontextrestored;
    },
    set: function oncontextrestored(val) {
        Developer.log("[dev] window oncontextrestored 描述符 [set] 被调用了");
        vmcore.propertymanager.window.oncontextrestored = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.oncuechange = null;
Object.defineProperty(window, "oncuechange", {
    get: function oncuechange() {
        Developer.log("[dev] window oncuechange 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.oncuechange;
    },
    set: function oncuechange(val) {
        Developer.log("[dev] window oncuechange 描述符 [set] 被调用了");
        vmcore.propertymanager.window.oncuechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondblclick = null;
Object.defineProperty(window, "ondblclick", {
    get: function ondblclick() {
        Developer.log("[dev] window ondblclick 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondblclick;
    },
    set: function ondblclick(val) {
        Developer.log("[dev] window ondblclick 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondblclick = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondrag = null;
Object.defineProperty(window, "ondrag", {
    get: function ondrag() {
        Developer.log("[dev] window ondrag 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondrag;
    },
    set: function ondrag(val) {
        Developer.log("[dev] window ondrag 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondrag = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondragend = null;
Object.defineProperty(window, "ondragend", {
    get: function ondragend() {
        Developer.log("[dev] window ondragend 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondragend;
    },
    set: function ondragend(val) {
        Developer.log("[dev] window ondragend 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondragend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondragenter = null;
Object.defineProperty(window, "ondragenter", {
    get: function ondragenter() {
        Developer.log("[dev] window ondragenter 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondragenter;
    },
    set: function ondragenter(val) {
        Developer.log("[dev] window ondragenter 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondragenter = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondragleave = null;
Object.defineProperty(window, "ondragleave", {
    get: function ondragleave() {
        Developer.log("[dev] window ondragleave 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondragleave;
    },
    set: function ondragleave(val) {
        Developer.log("[dev] window ondragleave 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondragleave = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondragover = null;
Object.defineProperty(window, "ondragover", {
    get: function ondragover() {
        Developer.log("[dev] window ondragover 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondragover;
    },
    set: function ondragover(val) {
        Developer.log("[dev] window ondragover 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondragover = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondragstart = null;
Object.defineProperty(window, "ondragstart", {
    get: function ondragstart() {
        Developer.log("[dev] window ondragstart 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondragstart;
    },
    set: function ondragstart(val) {
        Developer.log("[dev] window ondragstart 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondragstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondrop = null;
Object.defineProperty(window, "ondrop", {
    get: function ondrop() {
        Developer.log("[dev] window ondrop 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondrop;
    },
    set: function ondrop(val) {
        Developer.log("[dev] window ondrop 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondrop = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondurationchange = null;
Object.defineProperty(window, "ondurationchange", {
    get: function ondurationchange() {
        Developer.log("[dev] window ondurationchange 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondurationchange;
    },
    set: function ondurationchange(val) {
        Developer.log("[dev] window ondurationchange 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondurationchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onemptied = null;
Object.defineProperty(window, "onemptied", {
    get: function onemptied() {
        Developer.log("[dev] window onemptied 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onemptied;
    },
    set: function onemptied(val) {
        Developer.log("[dev] window onemptied 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onemptied = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onended = null;
Object.defineProperty(window, "onended", {
    get: function onended() {
        Developer.log("[dev] window onended 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onended;
    },
    set: function onended(val) {
        Developer.log("[dev] window onended 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onended = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onerror = null;
Object.defineProperty(window, "onerror", {
    get: function onerror() {
        Developer.log("[dev] window onerror 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onerror;
    },
    set: function onerror(val) {
        Developer.log("[dev] window onerror 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onerror = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onfocus = null;
Object.defineProperty(window, "onfocus", {
    get: function onfocus() {
        Developer.log("[dev] window onfocus 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onfocus;
    },
    set: function onfocus(val) {
        Developer.log("[dev] window onfocus 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onfocus = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onformdata = null;
Object.defineProperty(window, "onformdata", {
    get: function onformdata() {
        Developer.log("[dev] window onformdata 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onformdata;
    },
    set: function onformdata(val) {
        Developer.log("[dev] window onformdata 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onformdata = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.oninput = null;
Object.defineProperty(window, "oninput", {
    get: function oninput() {
        Developer.log("[dev] window oninput 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.oninput;
    },
    set: function oninput(val) {
        Developer.log("[dev] window oninput 描述符 [set] 被调用了");
        vmcore.propertymanager.window.oninput = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.oninvalid = null;
Object.defineProperty(window, "oninvalid", {
    get: function oninvalid() {
        Developer.log("[dev] window oninvalid 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.oninvalid;
    },
    set: function oninvalid(val) {
        Developer.log("[dev] window oninvalid 描述符 [set] 被调用了");
        vmcore.propertymanager.window.oninvalid = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onkeydown = null;
Object.defineProperty(window, "onkeydown", {
    get: function onkeydown() {
        Developer.log("[dev] window onkeydown 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onkeydown;
    },
    set: function onkeydown(val) {
        Developer.log("[dev] window onkeydown 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onkeydown = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onkeypress = null;
Object.defineProperty(window, "onkeypress", {
    get: function onkeypress() {
        Developer.log("[dev] window onkeypress 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onkeypress;
    },
    set: function onkeypress(val) {
        Developer.log("[dev] window onkeypress 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onkeypress = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onkeyup = null;
Object.defineProperty(window, "onkeyup", {
    get: function onkeyup() {
        Developer.log("[dev] window onkeyup 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onkeyup;
    },
    set: function onkeyup(val) {
        Developer.log("[dev] window onkeyup 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onkeyup = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onload = null;
Object.defineProperty(window, "onload", {
    get: function onload() {
        Developer.log("[dev] window onload 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onload;
    },
    set: function onload(val) {
        Developer.log("[dev] window onload 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onload = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onloadeddata = null;
Object.defineProperty(window, "onloadeddata", {
    get: function onloadeddata() {
        Developer.log("[dev] window onloadeddata 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onloadeddata;
    },
    set: function onloadeddata(val) {
        Developer.log("[dev] window onloadeddata 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onloadeddata = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onloadedmetadata = null;
Object.defineProperty(window, "onloadedmetadata", {
    get: function onloadedmetadata() {
        Developer.log("[dev] window onloadedmetadata 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onloadedmetadata;
    },
    set: function onloadedmetadata(val) {
        Developer.log("[dev] window onloadedmetadata 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onloadedmetadata = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onloadstart = null;
Object.defineProperty(window, "onloadstart", {
    get: function onloadstart() {
        Developer.log("[dev] window onloadstart 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onloadstart;
    },
    set: function onloadstart(val) {
        Developer.log("[dev] window onloadstart 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onloadstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onmousedown = null;
Object.defineProperty(window, "onmousedown", {
    get: function onmousedown() {
        Developer.log("[dev] window onmousedown 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onmousedown;
    },
    set: function onmousedown(val) {
        Developer.log("[dev] window onmousedown 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onmousedown = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onmouseenter = null;
Object.defineProperty(window, "onmouseenter", {
    get: function onmouseenter() {
        Developer.log("[dev] window onmouseenter 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onmouseenter;
    },
    set: function onmouseenter(val) {
        Developer.log("[dev] window onmouseenter 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onmouseenter = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onmouseleave = null;
Object.defineProperty(window, "onmouseleave", {
    get: function onmouseleave() {
        Developer.log("[dev] window onmouseleave 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onmouseleave;
    },
    set: function onmouseleave(val) {
        Developer.log("[dev] window onmouseleave 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onmouseleave = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onmousemove = null;
Object.defineProperty(window, "onmousemove", {
    get: function onmousemove() {
        Developer.log("[dev] window onmousemove 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onmousemove;
    },
    set: function onmousemove(val) {
        Developer.log("[dev] window onmousemove 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onmousemove = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onmouseout = null;
Object.defineProperty(window, "onmouseout", {
    get: function onmouseout() {
        Developer.log("[dev] window onmouseout 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onmouseout;
    },
    set: function onmouseout(val) {
        Developer.log("[dev] window onmouseout 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onmouseout = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onmouseover = null;
Object.defineProperty(window, "onmouseover", {
    get: function onmouseover() {
        Developer.log("[dev] window onmouseover 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onmouseover;
    },
    set: function onmouseover(val) {
        Developer.log("[dev] window onmouseover 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onmouseover = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onmouseup = null;
Object.defineProperty(window, "onmouseup", {
    get: function onmouseup() {
        Developer.log("[dev] window onmouseup 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onmouseup;
    },
    set: function onmouseup(val) {
        Developer.log("[dev] window onmouseup 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onmouseup = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onmousewheel = null;
Object.defineProperty(window, "onmousewheel", {
    get: function onmousewheel() {
        Developer.log("[dev] window onmousewheel 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onmousewheel;
    },
    set: function onmousewheel(val) {
        Developer.log("[dev] window onmousewheel 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onmousewheel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpause = null;
Object.defineProperty(window, "onpause", {
    get: function onpause() {
        Developer.log("[dev] window onpause 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpause;
    },
    set: function onpause(val) {
        Developer.log("[dev] window onpause 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpause = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onplay = null;
Object.defineProperty(window, "onplay", {
    get: function onplay() {
        Developer.log("[dev] window onplay 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onplay;
    },
    set: function onplay(val) {
        Developer.log("[dev] window onplay 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onplay = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onplaying = null;
Object.defineProperty(window, "onplaying", {
    get: function onplaying() {
        Developer.log("[dev] window onplaying 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onplaying;
    },
    set: function onplaying(val) {
        Developer.log("[dev] window onplaying 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onplaying = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onprogress = null;
Object.defineProperty(window, "onprogress", {
    get: function onprogress() {
        Developer.log("[dev] window onprogress 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onprogress;
    },
    set: function onprogress(val) {
        Developer.log("[dev] window onprogress 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onprogress = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onratechange = null;
Object.defineProperty(window, "onratechange", {
    get: function onratechange() {
        Developer.log("[dev] window onratechange 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onratechange;
    },
    set: function onratechange(val) {
        Developer.log("[dev] window onratechange 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onratechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onreset = null;
Object.defineProperty(window, "onreset", {
    get: function onreset() {
        Developer.log("[dev] window onreset 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onreset;
    },
    set: function onreset(val) {
        Developer.log("[dev] window onreset 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onreset = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onresize = null;
Object.defineProperty(window, "onresize", {
    get: function onresize() {
        Developer.log("[dev] window onresize 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onresize;
    },
    set: function onresize(val) {
        Developer.log("[dev] window onresize 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onresize = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onscroll = null;
Object.defineProperty(window, "onscroll", {
    get: function onscroll() {
        Developer.log("[dev] window onscroll 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onscroll;
    },
    set: function onscroll(val) {
        Developer.log("[dev] window onscroll 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onscroll = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onsecuritypolicyviolation = null;
Object.defineProperty(window, "onsecuritypolicyviolation", {
    get: function onsecuritypolicyviolation() {
        Developer.log("[dev] window onsecuritypolicyviolation 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onsecuritypolicyviolation;
    },
    set: function onsecuritypolicyviolation(val) {
        Developer.log("[dev] window onsecuritypolicyviolation 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onsecuritypolicyviolation = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onseeked = null;
Object.defineProperty(window, "onseeked", {
    get: function onseeked() {
        Developer.log("[dev] window onseeked 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onseeked;
    },
    set: function onseeked(val) {
        Developer.log("[dev] window onseeked 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onseeked = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onseeking = null;
Object.defineProperty(window, "onseeking", {
    get: function onseeking() {
        Developer.log("[dev] window onseeking 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onseeking;
    },
    set: function onseeking(val) {
        Developer.log("[dev] window onseeking 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onseeking = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onselect = null;
Object.defineProperty(window, "onselect", {
    get: function onselect() {
        Developer.log("[dev] window onselect 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onselect;
    },
    set: function onselect(val) {
        Developer.log("[dev] window onselect 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onselect = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onslotchange = null;
Object.defineProperty(window, "onslotchange", {
    get: function onslotchange() {
        Developer.log("[dev] window onslotchange 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onslotchange;
    },
    set: function onslotchange(val) {
        Developer.log("[dev] window onslotchange 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onslotchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onstalled = null;
Object.defineProperty(window, "onstalled", {
    get: function onstalled() {
        Developer.log("[dev] window onstalled 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onstalled;
    },
    set: function onstalled(val) {
        Developer.log("[dev] window onstalled 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onstalled = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onsubmit = null;
Object.defineProperty(window, "onsubmit", {
    get: function onsubmit() {
        Developer.log("[dev] window onsubmit 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onsubmit;
    },
    set: function onsubmit(val) {
        Developer.log("[dev] window onsubmit 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onsubmit = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onsuspend = null;
Object.defineProperty(window, "onsuspend", {
    get: function onsuspend() {
        Developer.log("[dev] window onsuspend 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onsuspend;
    },
    set: function onsuspend(val) {
        Developer.log("[dev] window onsuspend 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onsuspend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ontimeupdate = null;
Object.defineProperty(window, "ontimeupdate", {
    get: function ontimeupdate() {
        Developer.log("[dev] window ontimeupdate 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ontimeupdate;
    },
    set: function ontimeupdate(val) {
        Developer.log("[dev] window ontimeupdate 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ontimeupdate = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ontoggle = null;
Object.defineProperty(window, "ontoggle", {
    get: function ontoggle() {
        Developer.log("[dev] window ontoggle 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ontoggle;
    },
    set: function ontoggle(val) {
        Developer.log("[dev] window ontoggle 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ontoggle = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onvolumechange = null;
Object.defineProperty(window, "onvolumechange", {
    get: function onvolumechange() {
        Developer.log("[dev] window onvolumechange 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onvolumechange;
    },
    set: function onvolumechange(val) {
        Developer.log("[dev] window onvolumechange 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onvolumechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onwaiting = null;
Object.defineProperty(window, "onwaiting", {
    get: function onwaiting() {
        Developer.log("[dev] window onwaiting 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onwaiting;
    },
    set: function onwaiting(val) {
        Developer.log("[dev] window onwaiting 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onwaiting = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onwebkitanimationend = null;
Object.defineProperty(window, "onwebkitanimationend", {
    get: function onwebkitanimationend() {
        Developer.log("[dev] window onwebkitanimationend 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onwebkitanimationend;
    },
    set: function onwebkitanimationend(val) {
        Developer.log("[dev] window onwebkitanimationend 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onwebkitanimationend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onwebkitanimationiteration = null;
Object.defineProperty(window, "onwebkitanimationiteration", {
    get: function onwebkitanimationiteration() {
        Developer.log("[dev] window onwebkitanimationiteration 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onwebkitanimationiteration;
    },
    set: function onwebkitanimationiteration(val) {
        Developer.log("[dev] window onwebkitanimationiteration 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onwebkitanimationiteration = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onwebkitanimationstart = null;
Object.defineProperty(window, "onwebkitanimationstart", {
    get: function onwebkitanimationstart() {
        Developer.log("[dev] window onwebkitanimationstart 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onwebkitanimationstart;
    },
    set: function onwebkitanimationstart(val) {
        Developer.log("[dev] window onwebkitanimationstart 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onwebkitanimationstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onwebkittransitionend = null;
Object.defineProperty(window, "onwebkittransitionend", {
    get: function onwebkittransitionend() {
        Developer.log("[dev] window onwebkittransitionend 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onwebkittransitionend;
    },
    set: function onwebkittransitionend(val) {
        Developer.log("[dev] window onwebkittransitionend 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onwebkittransitionend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onwheel = null;
Object.defineProperty(window, "onwheel", {
    get: function onwheel() {
        Developer.log("[dev] window onwheel 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onwheel;
    },
    set: function onwheel(val) {
        Developer.log("[dev] window onwheel 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onwheel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onauxclick = null;
Object.defineProperty(window, "onauxclick", {
    get: function onauxclick() {
        Developer.log("[dev] window onauxclick 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onauxclick;
    },
    set: function onauxclick(val) {
        Developer.log("[dev] window onauxclick 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onauxclick = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ongotpointercapture = null;
Object.defineProperty(window, "ongotpointercapture", {
    get: function ongotpointercapture() {
        Developer.log("[dev] window ongotpointercapture 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ongotpointercapture;
    },
    set: function ongotpointercapture(val) {
        Developer.log("[dev] window ongotpointercapture 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ongotpointercapture = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onlostpointercapture = null;
Object.defineProperty(window, "onlostpointercapture", {
    get: function onlostpointercapture() {
        Developer.log("[dev] window onlostpointercapture 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onlostpointercapture;
    },
    set: function onlostpointercapture(val) {
        Developer.log("[dev] window onlostpointercapture 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onlostpointercapture = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpointerdown = null;
Object.defineProperty(window, "onpointerdown", {
    get: function onpointerdown() {
        Developer.log("[dev] window onpointerdown 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpointerdown;
    },
    set: function onpointerdown(val) {
        Developer.log("[dev] window onpointerdown 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpointerdown = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpointermove = null;
Object.defineProperty(window, "onpointermove", {
    get: function onpointermove() {
        Developer.log("[dev] window onpointermove 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpointermove;
    },
    set: function onpointermove(val) {
        Developer.log("[dev] window onpointermove 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpointermove = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpointerrawupdate = null;
Object.defineProperty(window, "onpointerrawupdate", {
    get: function onpointerrawupdate() {
        Developer.log("[dev] window onpointerrawupdate 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpointerrawupdate;
    },
    set: function onpointerrawupdate(val) {
        Developer.log("[dev] window onpointerrawupdate 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpointerrawupdate = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpointerup = null;
Object.defineProperty(window, "onpointerup", {
    get: function onpointerup() {
        Developer.log("[dev] window onpointerup 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpointerup;
    },
    set: function onpointerup(val) {
        Developer.log("[dev] window onpointerup 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpointerup = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpointercancel = null;
Object.defineProperty(window, "onpointercancel", {
    get: function onpointercancel() {
        Developer.log("[dev] window onpointercancel 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpointercancel;
    },
    set: function onpointercancel(val) {
        Developer.log("[dev] window onpointercancel 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpointercancel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpointerover = null;
Object.defineProperty(window, "onpointerover", {
    get: function onpointerover() {
        Developer.log("[dev] window onpointerover 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpointerover;
    },
    set: function onpointerover(val) {
        Developer.log("[dev] window onpointerover 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpointerover = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpointerout = null;
Object.defineProperty(window, "onpointerout", {
    get: function onpointerout() {
        Developer.log("[dev] window onpointerout 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpointerout;
    },
    set: function onpointerout(val) {
        Developer.log("[dev] window onpointerout 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpointerout = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpointerenter = null;
Object.defineProperty(window, "onpointerenter", {
    get: function onpointerenter() {
        Developer.log("[dev] window onpointerenter 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpointerenter;
    },
    set: function onpointerenter(val) {
        Developer.log("[dev] window onpointerenter 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpointerenter = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpointerleave = null;
Object.defineProperty(window, "onpointerleave", {
    get: function onpointerleave() {
        Developer.log("[dev] window onpointerleave 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpointerleave;
    },
    set: function onpointerleave(val) {
        Developer.log("[dev] window onpointerleave 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpointerleave = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onselectstart = null;
Object.defineProperty(window, "onselectstart", {
    get: function onselectstart() {
        Developer.log("[dev] window onselectstart 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onselectstart;
    },
    set: function onselectstart(val) {
        Developer.log("[dev] window onselectstart 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onselectstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onselectionchange = null;
Object.defineProperty(window, "onselectionchange", {
    get: function onselectionchange() {
        Developer.log("[dev] window onselectionchange 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onselectionchange;
    },
    set: function onselectionchange(val) {
        Developer.log("[dev] window onselectionchange 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onselectionchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onanimationend = null;
Object.defineProperty(window, "onanimationend", {
    get: function onanimationend() {
        Developer.log("[dev] window onanimationend 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onanimationend;
    },
    set: function onanimationend(val) {
        Developer.log("[dev] window onanimationend 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onanimationend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onanimationiteration = null;
Object.defineProperty(window, "onanimationiteration", {
    get: function onanimationiteration() {
        Developer.log("[dev] window onanimationiteration 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onanimationiteration;
    },
    set: function onanimationiteration(val) {
        Developer.log("[dev] window onanimationiteration 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onanimationiteration = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onanimationstart = null;
Object.defineProperty(window, "onanimationstart", {
    get: function onanimationstart() {
        Developer.log("[dev] window onanimationstart 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onanimationstart;
    },
    set: function onanimationstart(val) {
        Developer.log("[dev] window onanimationstart 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onanimationstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ontransitionrun = null;
Object.defineProperty(window, "ontransitionrun", {
    get: function ontransitionrun() {
        Developer.log("[dev] window ontransitionrun 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ontransitionrun;
    },
    set: function ontransitionrun(val) {
        Developer.log("[dev] window ontransitionrun 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ontransitionrun = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ontransitionstart = null;
Object.defineProperty(window, "ontransitionstart", {
    get: function ontransitionstart() {
        Developer.log("[dev] window ontransitionstart 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ontransitionstart;
    },
    set: function ontransitionstart(val) {
        Developer.log("[dev] window ontransitionstart 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ontransitionstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ontransitionend = null;
Object.defineProperty(window, "ontransitionend", {
    get: function ontransitionend() {
        Developer.log("[dev] window ontransitionend 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ontransitionend;
    },
    set: function ontransitionend(val) {
        Developer.log("[dev] window ontransitionend 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ontransitionend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ontransitioncancel = null;
Object.defineProperty(window, "ontransitioncancel", {
    get: function ontransitioncancel() {
        Developer.log("[dev] window ontransitioncancel 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ontransitioncancel;
    },
    set: function ontransitioncancel(val) {
        Developer.log("[dev] window ontransitioncancel 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ontransitioncancel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onafterprint = null;
Object.defineProperty(window, "onafterprint", {
    get: function onafterprint() {
        Developer.log("[dev] window onafterprint 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onafterprint;
    },
    set: function onafterprint(val) {
        Developer.log("[dev] window onafterprint 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onafterprint = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onbeforeprint = null;
Object.defineProperty(window, "onbeforeprint", {
    get: function onbeforeprint() {
        Developer.log("[dev] window onbeforeprint 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onbeforeprint;
    },
    set: function onbeforeprint(val) {
        Developer.log("[dev] window onbeforeprint 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onbeforeprint = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onbeforeunload = null;
Object.defineProperty(window, "onbeforeunload", {
    get: function onbeforeunload() {
        Developer.log("[dev] window onbeforeunload 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onbeforeunload;
    },
    set: function onbeforeunload(val) {
        Developer.log("[dev] window onbeforeunload 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onbeforeunload = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onhashchange = null;
Object.defineProperty(window, "onhashchange", {
    get: function onhashchange() {
        Developer.log("[dev] window onhashchange 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onhashchange;
    },
    set: function onhashchange(val) {
        Developer.log("[dev] window onhashchange 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onhashchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onlanguagechange = null;
Object.defineProperty(window, "onlanguagechange", {
    get: function onlanguagechange() {
        Developer.log("[dev] window onlanguagechange 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onlanguagechange;
    },
    set: function onlanguagechange(val) {
        Developer.log("[dev] window onlanguagechange 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onlanguagechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onmessage = null;
Object.defineProperty(window, "onmessage", {
    get: function onmessage() {
        Developer.log("[dev] window onmessage 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onmessage;
    },
    set: function onmessage(val) {
        Developer.log("[dev] window onmessage 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onmessage = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onmessageerror = null;
Object.defineProperty(window, "onmessageerror", {
    get: function onmessageerror() {
        Developer.log("[dev] window onmessageerror 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onmessageerror;
    },
    set: function onmessageerror(val) {
        Developer.log("[dev] window onmessageerror 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onmessageerror = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onoffline = null;
Object.defineProperty(window, "onoffline", {
    get: function onoffline() {
        Developer.log("[dev] window onoffline 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onoffline;
    },
    set: function onoffline(val) {
        Developer.log("[dev] window onoffline 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onoffline = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ononline = null;
Object.defineProperty(window, "ononline", {
    get: function ononline() {
        Developer.log("[dev] window ononline 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ononline;
    },
    set: function ononline(val) {
        Developer.log("[dev] window ononline 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ononline = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpagehide = null;
Object.defineProperty(window, "onpagehide", {
    get: function onpagehide() {
        Developer.log("[dev] window onpagehide 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpagehide;
    },
    set: function onpagehide(val) {
        Developer.log("[dev] window onpagehide 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpagehide = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpageshow = null;
Object.defineProperty(window, "onpageshow", {
    get: function onpageshow() {
        Developer.log("[dev] window onpageshow 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpageshow;
    },
    set: function onpageshow(val) {
        Developer.log("[dev] window onpageshow 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpageshow = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpopstate = null;
Object.defineProperty(window, "onpopstate", {
    get: function onpopstate() {
        Developer.log("[dev] window onpopstate 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpopstate;
    },
    set: function onpopstate(val) {
        Developer.log("[dev] window onpopstate 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpopstate = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onrejectionhandled = null;
Object.defineProperty(window, "onrejectionhandled", {
    get: function onrejectionhandled() {
        Developer.log("[dev] window onrejectionhandled 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onrejectionhandled;
    },
    set: function onrejectionhandled(val) {
        Developer.log("[dev] window onrejectionhandled 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onrejectionhandled = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onstorage = null;
Object.defineProperty(window, "onstorage", {
    get: function onstorage() {
        Developer.log("[dev] window onstorage 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onstorage;
    },
    set: function onstorage(val) {
        Developer.log("[dev] window onstorage 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onstorage = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onunhandledrejection = null;
Object.defineProperty(window, "onunhandledrejection", {
    get: function onunhandledrejection() {
        Developer.log("[dev] window onunhandledrejection 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onunhandledrejection;
    },
    set: function onunhandledrejection(val) {
        Developer.log("[dev] window onunhandledrejection 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onunhandledrejection = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onunload = null;
Object.defineProperty(window, "onunload", {
    get: function onunload() {
        Developer.log("[dev] window onunload 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onunload;
    },
    set: function onunload(val) {
        Developer.log("[dev] window onunload 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onunload = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.crossOriginIsolated = false;
Object.defineProperty(window, "crossOriginIsolated", {
    get: function crossOriginIsolated() {
        Developer.log("[dev] window crossOriginIsolated 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.crossOriginIsolated;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.scheduler = null;
Object.defineProperty(window, "scheduler", {
    get: function scheduler() {
        Developer.log("[dev] window scheduler 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.scheduler;
    },
    set: function scheduler(val) {
        Developer.log("[dev] window scheduler 描述符 [set] 被调用了");
        vmcore.propertymanager.window.scheduler = val;
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "alert", {
    value: function alert() {
        Developer.log("[dev] window alert 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.alert);

Object.defineProperty(window, "blur", {
    value: function blur() {
        Developer.log("[dev] window blur 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.blur);

Object.defineProperty(window, "cancelAnimationFrame", {
    value: function cancelAnimationFrame() {
        Developer.log("[dev] window cancelAnimationFrame 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.cancelAnimationFrame);

Object.defineProperty(window, "cancelIdleCallback", {
    value: function cancelIdleCallback() {
        Developer.log("[dev] window cancelIdleCallback 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.cancelIdleCallback);

Object.defineProperty(window, "captureEvents", {
    value: function captureEvents() {
        Developer.log("[dev] window captureEvents 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.captureEvents);

Object.defineProperty(window, "close", {
    value: function close() {
        Developer.log("[dev] window close 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.close);

Object.defineProperty(window, "confirm", {
    value: function confirm() {
        Developer.log("[dev] window confirm 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.confirm);

Object.defineProperty(window, "createImageBitmap", {
    value: function createImageBitmap() {
        Developer.log("[dev] window createImageBitmap 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.createImageBitmap);

Object.defineProperty(window, "fetch", {
    value: function fetch() {
        Developer.log("[dev] window fetch 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.fetch);

Object.defineProperty(window, "find", {
    value: function find() {
        Developer.log("[dev] window find 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.find);

Object.defineProperty(window, "focus", {
    value: function focus() {
        Developer.log("[dev] window focus 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.focus);

Object.defineProperty(window, "getComputedStyle", {
    value: function getComputedStyle() {
        Developer.log("[dev] window getComputedStyle 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.getComputedStyle);

Object.defineProperty(window, "getSelection", {
    value: function getSelection() {
        Developer.log("[dev] window getSelection 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.getSelection);

Object.defineProperty(window, "matchMedia", {
    value: function matchMedia() {
        Developer.log("[dev] window matchMedia 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.matchMedia);

Object.defineProperty(window, "moveBy", {
    value: function moveBy() {
        Developer.log("[dev] window moveBy 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.moveBy);

Object.defineProperty(window, "moveTo", {
    value: function moveTo() {
        Developer.log("[dev] window moveTo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.moveTo);

Object.defineProperty(window, "open", {
    value: function open() {
        Developer.log("[dev] window open 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.open);

Object.defineProperty(window, "postMessage", {
    value: function postMessage() {
        Developer.log("[dev] window postMessage 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.postMessage);

Object.defineProperty(window, "print", {
    value: function print() {
        Developer.log("[dev] window print 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.print);

Object.defineProperty(window, "prompt", {
    value: function prompt() {
        Developer.log("[dev] window prompt 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.prompt);

Object.defineProperty(window, "queueMicrotask", {
    value: function queueMicrotask() {
        Developer.log("[dev] window queueMicrotask 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.queueMicrotask);

Object.defineProperty(window, "releaseEvents", {
    value: function releaseEvents() {
        Developer.log("[dev] window releaseEvents 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.releaseEvents);

Object.defineProperty(window, "reportError", {
    value: function reportError() {
        Developer.log("[dev] window reportError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.reportError);

Object.defineProperty(window, "requestAnimationFrame", {
    value: function requestAnimationFrame() {
        Developer.log("[dev] window requestAnimationFrame 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.requestAnimationFrame);

Object.defineProperty(window, "requestIdleCallback", {
    value: function requestIdleCallback() {
        Developer.log("[dev] window requestIdleCallback 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.requestIdleCallback);

Object.defineProperty(window, "resizeBy", {
    value: function resizeBy() {
        Developer.log("[dev] window resizeBy 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.resizeBy);

Object.defineProperty(window, "resizeTo", {
    value: function resizeTo() {
        Developer.log("[dev] window resizeTo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.resizeTo);

Object.defineProperty(window, "scroll", {
    value: function scroll() {
        Developer.log("[dev] window scroll 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.scroll);

Object.defineProperty(window, "scrollBy", {
    value: function scrollBy() {
        Developer.log("[dev] window scrollBy 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.scrollBy);

Object.defineProperty(window, "scrollTo", {
    value: function scrollTo() {
        Developer.log("[dev] window scrollTo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.scrollTo);

Object.defineProperty(window, "stop", {
    value: function stop() {
        Developer.log("[dev] window stop 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.stop);

Object.defineProperty(window, "structuredClone", {
    value: function structuredClone() {
        Developer.log("[dev] window structuredClone 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.structuredClone);

Object.defineProperty(window, "webkitCancelAnimationFrame", {
    value: function webkitCancelAnimationFrame() {
        Developer.log("[dev] window webkitCancelAnimationFrame 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.webkitCancelAnimationFrame);

Object.defineProperty(window, "webkitRequestAnimationFrame", {
    value: function webkitRequestAnimationFrame() {
        Developer.log("[dev] window webkitRequestAnimationFrame 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.webkitRequestAnimationFrame);

Object.defineProperty(window, "Iterator", {
    value: function Iterator() {
        Developer.log("[dev] window Iterator 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Iterator);

Object.defineProperty(window, "WebAssembly", {
    value: {},
    writable: true,
    enumerable: false,
    configurable: true,
});

vmcore.propertymanager.window.fence = null;
Object.defineProperty(window, "fence", {
    get: function fence() {
        Developer.log("[dev] window fence 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.fence;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.caches = null;
Object.defineProperty(window, "caches", {
    get: function caches() {
        Developer.log("[dev] window caches 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.caches;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.cookieStore = null;
Object.defineProperty(window, "cookieStore", {
    get: function cookieStore() {
        Developer.log("[dev] window cookieStore 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.cookieStore;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondevicemotion = null;
Object.defineProperty(window, "ondevicemotion", {
    get: function ondevicemotion() {
        Developer.log("[dev] window ondevicemotion 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondevicemotion;
    },
    set: function ondevicemotion(val) {
        Developer.log("[dev] window ondevicemotion 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondevicemotion = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondeviceorientation = null;
Object.defineProperty(window, "ondeviceorientation", {
    get: function ondeviceorientation() {
        Developer.log("[dev] window ondeviceorientation 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondeviceorientation;
    },
    set: function ondeviceorientation(val) {
        Developer.log("[dev] window ondeviceorientation 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondeviceorientation = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.ondeviceorientationabsolute = null;
Object.defineProperty(window, "ondeviceorientationabsolute", {
    get: function ondeviceorientationabsolute() {
        Developer.log("[dev] window ondeviceorientationabsolute 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.ondeviceorientationabsolute;
    },
    set: function ondeviceorientationabsolute(val) {
        Developer.log("[dev] window ondeviceorientationabsolute 描述符 [set] 被调用了");
        vmcore.propertymanager.window.ondeviceorientationabsolute = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.launchQueue = null;
Object.defineProperty(window, "launchQueue", {
    get: function launchQueue() {
        Developer.log("[dev] window launchQueue 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.launchQueue;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.sharedStorage = null;
Object.defineProperty(window, "sharedStorage", {
    get: function sharedStorage() {
        Developer.log("[dev] window sharedStorage 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.sharedStorage;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.documentPictureInPicture = null;
Object.defineProperty(window, "documentPictureInPicture", {
    get: function documentPictureInPicture() {
        Developer.log("[dev] window documentPictureInPicture 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.documentPictureInPicture;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "AbsoluteOrientationSensor", {
    value: function AbsoluteOrientationSensor() {
        Developer.log("[dev] window AbsoluteOrientationSensor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AbsoluteOrientationSensor);

Object.defineProperty(window, "Accelerometer", {
    value: function Accelerometer() {
        Developer.log("[dev] window Accelerometer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Accelerometer);

Object.defineProperty(window, "AudioDecoder", {
    value: function AudioDecoder() {
        Developer.log("[dev] window AudioDecoder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioDecoder);

Object.defineProperty(window, "AudioEncoder", {
    value: function AudioEncoder() {
        Developer.log("[dev] window AudioEncoder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioEncoder);

Object.defineProperty(window, "AudioWorklet", {
    value: function AudioWorklet() {
        Developer.log("[dev] window AudioWorklet 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AudioWorklet);

Object.defineProperty(window, "Cache", {
    value: function Cache() {
        Developer.log("[dev] window Cache 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Cache);

Object.defineProperty(window, "CacheStorage", {
    value: function CacheStorage() {
        Developer.log("[dev] window CacheStorage 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CacheStorage);

Object.defineProperty(window, "Clipboard", {
    value: function Clipboard() {
        Developer.log("[dev] window Clipboard 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Clipboard);

Object.defineProperty(window, "ClipboardItem", {
    value: function ClipboardItem() {
        Developer.log("[dev] window ClipboardItem 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ClipboardItem);

Object.defineProperty(window, "CookieChangeEvent", {
    value: function CookieChangeEvent() {
        Developer.log("[dev] window CookieChangeEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CookieChangeEvent);

Object.defineProperty(window, "CookieStore", {
    value: function CookieStore() {
        Developer.log("[dev] window CookieStore 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CookieStore);

Object.defineProperty(window, "CookieStoreManager", {
    value: function CookieStoreManager() {
        Developer.log("[dev] window CookieStoreManager 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CookieStoreManager);

Object.defineProperty(window, "Credential", {
    value: function Credential() {
        Developer.log("[dev] window Credential 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Credential);

Object.defineProperty(window, "CredentialsContainer", {
    value: function CredentialsContainer() {
        Developer.log("[dev] window CredentialsContainer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CredentialsContainer);

Object.defineProperty(window, "CryptoKey", {
    value: function CryptoKey() {
        Developer.log("[dev] window CryptoKey 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CryptoKey);

Object.defineProperty(window, "DeviceMotionEvent", {
    value: function DeviceMotionEvent() {
        Developer.log("[dev] window DeviceMotionEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DeviceMotionEvent);

Object.defineProperty(window, "DeviceMotionEventAcceleration", {
    value: function DeviceMotionEventAcceleration() {
        Developer.log("[dev] window DeviceMotionEventAcceleration 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DeviceMotionEventAcceleration);

Object.defineProperty(window, "DeviceMotionEventRotationRate", {
    value: function DeviceMotionEventRotationRate() {
        Developer.log("[dev] window DeviceMotionEventRotationRate 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DeviceMotionEventRotationRate);

Object.defineProperty(window, "DeviceOrientationEvent", {
    value: function DeviceOrientationEvent() {
        Developer.log("[dev] window DeviceOrientationEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DeviceOrientationEvent);

Object.defineProperty(window, "FederatedCredential", {
    value: function FederatedCredential() {
        Developer.log("[dev] window FederatedCredential 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FederatedCredential);

Object.defineProperty(window, "GPU", {
    value: function GPU() {
        Developer.log("[dev] window GPU 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPU);

Object.defineProperty(window, "GPUAdapter", {
    value: function GPUAdapter() {
        Developer.log("[dev] window GPUAdapter 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUAdapter);

Object.defineProperty(window, "GPUAdapterInfo", {
    value: function GPUAdapterInfo() {
        Developer.log("[dev] window GPUAdapterInfo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUAdapterInfo);

Object.defineProperty(window, "GPUBindGroup", {
    value: function GPUBindGroup() {
        Developer.log("[dev] window GPUBindGroup 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUBindGroup);

Object.defineProperty(window, "GPUBindGroupLayout", {
    value: function GPUBindGroupLayout() {
        Developer.log("[dev] window GPUBindGroupLayout 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUBindGroupLayout);

Object.defineProperty(window, "GPUBuffer", {
    value: function GPUBuffer() {
        Developer.log("[dev] window GPUBuffer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUBuffer);

Object.defineProperty(window, "GPUBufferUsage", {
    value: {},
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "GPUCanvasContext", {
    value: function GPUCanvasContext() {
        Developer.log("[dev] window GPUCanvasContext 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUCanvasContext);

Object.defineProperty(window, "GPUColorWrite", {
    value: {},
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "GPUCommandBuffer", {
    value: function GPUCommandBuffer() {
        Developer.log("[dev] window GPUCommandBuffer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUCommandBuffer);

Object.defineProperty(window, "GPUCommandEncoder", {
    value: function GPUCommandEncoder() {
        Developer.log("[dev] window GPUCommandEncoder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUCommandEncoder);

Object.defineProperty(window, "GPUCompilationInfo", {
    value: function GPUCompilationInfo() {
        Developer.log("[dev] window GPUCompilationInfo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUCompilationInfo);

Object.defineProperty(window, "GPUCompilationMessage", {
    value: function GPUCompilationMessage() {
        Developer.log("[dev] window GPUCompilationMessage 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUCompilationMessage);

Object.defineProperty(window, "GPUComputePassEncoder", {
    value: function GPUComputePassEncoder() {
        Developer.log("[dev] window GPUComputePassEncoder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUComputePassEncoder);

Object.defineProperty(window, "GPUComputePipeline", {
    value: function GPUComputePipeline() {
        Developer.log("[dev] window GPUComputePipeline 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUComputePipeline);

Object.defineProperty(window, "GPUDevice", {
    value: function GPUDevice() {
        Developer.log("[dev] window GPUDevice 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUDevice);

Object.defineProperty(window, "GPUDeviceLostInfo", {
    value: function GPUDeviceLostInfo() {
        Developer.log("[dev] window GPUDeviceLostInfo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUDeviceLostInfo);

Object.defineProperty(window, "GPUError", {
    value: function GPUError() {
        Developer.log("[dev] window GPUError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUError);

Object.defineProperty(window, "GPUExternalTexture", {
    value: function GPUExternalTexture() {
        Developer.log("[dev] window GPUExternalTexture 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUExternalTexture);

Object.defineProperty(window, "GPUInternalError", {
    value: function GPUInternalError() {
        Developer.log("[dev] window GPUInternalError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUInternalError);

Object.defineProperty(window, "GPUMapMode", {
    value: {},
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "GPUOutOfMemoryError", {
    value: function GPUOutOfMemoryError() {
        Developer.log("[dev] window GPUOutOfMemoryError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUOutOfMemoryError);

Object.defineProperty(window, "GPUPipelineError", {
    value: function GPUPipelineError() {
        Developer.log("[dev] window GPUPipelineError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUPipelineError);

Object.defineProperty(window, "GPUPipelineLayout", {
    value: function GPUPipelineLayout() {
        Developer.log("[dev] window GPUPipelineLayout 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUPipelineLayout);

Object.defineProperty(window, "GPUQuerySet", {
    value: function GPUQuerySet() {
        Developer.log("[dev] window GPUQuerySet 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUQuerySet);

Object.defineProperty(window, "GPUQueue", {
    value: function GPUQueue() {
        Developer.log("[dev] window GPUQueue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUQueue);

Object.defineProperty(window, "GPURenderBundle", {
    value: function GPURenderBundle() {
        Developer.log("[dev] window GPURenderBundle 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPURenderBundle);

Object.defineProperty(window, "GPURenderBundleEncoder", {
    value: function GPURenderBundleEncoder() {
        Developer.log("[dev] window GPURenderBundleEncoder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPURenderBundleEncoder);

Object.defineProperty(window, "GPURenderPassEncoder", {
    value: function GPURenderPassEncoder() {
        Developer.log("[dev] window GPURenderPassEncoder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPURenderPassEncoder);

Object.defineProperty(window, "GPURenderPipeline", {
    value: function GPURenderPipeline() {
        Developer.log("[dev] window GPURenderPipeline 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPURenderPipeline);

Object.defineProperty(window, "GPUSampler", {
    value: function GPUSampler() {
        Developer.log("[dev] window GPUSampler 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUSampler);

Object.defineProperty(window, "GPUShaderModule", {
    value: function GPUShaderModule() {
        Developer.log("[dev] window GPUShaderModule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUShaderModule);

Object.defineProperty(window, "GPUShaderStage", {
    value: {},
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "GPUSupportedFeatures", {
    value: function GPUSupportedFeatures() {
        Developer.log("[dev] window GPUSupportedFeatures 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUSupportedFeatures);

Object.defineProperty(window, "GPUSupportedLimits", {
    value: function GPUSupportedLimits() {
        Developer.log("[dev] window GPUSupportedLimits 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUSupportedLimits);

Object.defineProperty(window, "GPUTexture", {
    value: function GPUTexture() {
        Developer.log("[dev] window GPUTexture 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUTexture);

Object.defineProperty(window, "GPUTextureUsage", {
    value: {},
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "GPUTextureView", {
    value: function GPUTextureView() {
        Developer.log("[dev] window GPUTextureView 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUTextureView);

Object.defineProperty(window, "GPUUncapturedErrorEvent", {
    value: function GPUUncapturedErrorEvent() {
        Developer.log("[dev] window GPUUncapturedErrorEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUUncapturedErrorEvent);

Object.defineProperty(window, "GPUValidationError", {
    value: function GPUValidationError() {
        Developer.log("[dev] window GPUValidationError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GPUValidationError);

Object.defineProperty(window, "GravitySensor", {
    value: function GravitySensor() {
        Developer.log("[dev] window GravitySensor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.GravitySensor);

Object.defineProperty(window, "Gyroscope", {
    value: function Gyroscope() {
        Developer.log("[dev] window Gyroscope 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Gyroscope);

Object.defineProperty(window, "IdleDetector", {
    value: function IdleDetector() {
        Developer.log("[dev] window IdleDetector 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IdleDetector);

Object.defineProperty(window, "ImageDecoder", {
    value: function ImageDecoder() {
        Developer.log("[dev] window ImageDecoder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ImageDecoder);

Object.defineProperty(window, "ImageTrack", {
    value: function ImageTrack() {
        Developer.log("[dev] window ImageTrack 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ImageTrack);

Object.defineProperty(window, "ImageTrackList", {
    value: function ImageTrackList() {
        Developer.log("[dev] window ImageTrackList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ImageTrackList);

Object.defineProperty(window, "Keyboard", {
    value: function Keyboard() {
        Developer.log("[dev] window Keyboard 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Keyboard);

Object.defineProperty(window, "KeyboardLayoutMap", {
    value: function KeyboardLayoutMap() {
        Developer.log("[dev] window KeyboardLayoutMap 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.KeyboardLayoutMap);

Object.defineProperty(window, "LinearAccelerationSensor", {
    value: function LinearAccelerationSensor() {
        Developer.log("[dev] window LinearAccelerationSensor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.LinearAccelerationSensor);

Object.defineProperty(window, "Lock", {
    value: function Lock() {
        Developer.log("[dev] window Lock 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Lock);

Object.defineProperty(window, "LockManager", {
    value: function LockManager() {
        Developer.log("[dev] window LockManager 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.LockManager);

Object.defineProperty(window, "MIDIAccess", {
    value: function MIDIAccess() {
        Developer.log("[dev] window MIDIAccess 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MIDIAccess);

Object.defineProperty(window, "MIDIConnectionEvent", {
    value: function MIDIConnectionEvent() {
        Developer.log("[dev] window MIDIConnectionEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MIDIConnectionEvent);

Object.defineProperty(window, "MIDIInput", {
    value: function MIDIInput() {
        Developer.log("[dev] window MIDIInput 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MIDIInput);

Object.defineProperty(window, "MIDIInputMap", {
    value: function MIDIInputMap() {
        Developer.log("[dev] window MIDIInputMap 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MIDIInputMap);

Object.defineProperty(window, "MIDIMessageEvent", {
    value: function MIDIMessageEvent() {
        Developer.log("[dev] window MIDIMessageEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MIDIMessageEvent);

Object.defineProperty(window, "MIDIOutput", {
    value: function MIDIOutput() {
        Developer.log("[dev] window MIDIOutput 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MIDIOutput);

Object.defineProperty(window, "MIDIOutputMap", {
    value: function MIDIOutputMap() {
        Developer.log("[dev] window MIDIOutputMap 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MIDIOutputMap);

Object.defineProperty(window, "MIDIPort", {
    value: function MIDIPort() {
        Developer.log("[dev] window MIDIPort 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MIDIPort);

Object.defineProperty(window, "MediaDeviceInfo", {
    value: function MediaDeviceInfo() {
        Developer.log("[dev] window MediaDeviceInfo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaDeviceInfo);

Object.defineProperty(window, "MediaDevices", {
    value: function MediaDevices() {
        Developer.log("[dev] window MediaDevices 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaDevices);

Object.defineProperty(window, "MediaKeyMessageEvent", {
    value: function MediaKeyMessageEvent() {
        Developer.log("[dev] window MediaKeyMessageEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaKeyMessageEvent);

Object.defineProperty(window, "MediaKeySession", {
    value: function MediaKeySession() {
        Developer.log("[dev] window MediaKeySession 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaKeySession);

Object.defineProperty(window, "MediaKeyStatusMap", {
    value: function MediaKeyStatusMap() {
        Developer.log("[dev] window MediaKeyStatusMap 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaKeyStatusMap);

Object.defineProperty(window, "MediaKeySystemAccess", {
    value: function MediaKeySystemAccess() {
        Developer.log("[dev] window MediaKeySystemAccess 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaKeySystemAccess);

Object.defineProperty(window, "MediaKeys", {
    value: function MediaKeys() {
        Developer.log("[dev] window MediaKeys 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaKeys);

Object.defineProperty(window, "NavigationPreloadManager", {
    value: function NavigationPreloadManager() {
        Developer.log("[dev] window NavigationPreloadManager 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NavigationPreloadManager);

Object.defineProperty(window, "NavigatorManagedData", {
    value: function NavigatorManagedData() {
        Developer.log("[dev] window NavigatorManagedData 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NavigatorManagedData);

Object.defineProperty(window, "OrientationSensor", {
    value: function OrientationSensor() {
        Developer.log("[dev] window OrientationSensor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.OrientationSensor);

Object.defineProperty(window, "PasswordCredential", {
    value: function PasswordCredential() {
        Developer.log("[dev] window PasswordCredential 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PasswordCredential);

Object.defineProperty(window, "RelativeOrientationSensor", {
    value: function RelativeOrientationSensor() {
        Developer.log("[dev] window RelativeOrientationSensor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RelativeOrientationSensor);

Object.defineProperty(window, "ScreenDetailed", {
    value: function ScreenDetailed() {
        Developer.log("[dev] window ScreenDetailed 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ScreenDetailed);

Object.defineProperty(window, "ScreenDetails", {
    value: function ScreenDetails() {
        Developer.log("[dev] window ScreenDetails 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ScreenDetails);

Object.defineProperty(window, "Sensor", {
    value: function Sensor() {
        Developer.log("[dev] window Sensor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Sensor);

Object.defineProperty(window, "SensorErrorEvent", {
    value: function SensorErrorEvent() {
        Developer.log("[dev] window SensorErrorEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SensorErrorEvent);

Object.defineProperty(window, "ServiceWorker", {
    value: function ServiceWorker() {
        Developer.log("[dev] window ServiceWorker 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ServiceWorker);

Object.defineProperty(window, "ServiceWorkerContainer", {
    value: function ServiceWorkerContainer() {
        Developer.log("[dev] window ServiceWorkerContainer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ServiceWorkerContainer);

Object.defineProperty(window, "ServiceWorkerRegistration", {
    value: function ServiceWorkerRegistration() {
        Developer.log("[dev] window ServiceWorkerRegistration 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ServiceWorkerRegistration);

Object.defineProperty(window, "StorageManager", {
    value: function StorageManager() {
        Developer.log("[dev] window StorageManager 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.StorageManager);

Object.defineProperty(window, "SubtleCrypto", {
    value: function SubtleCrypto() {
        Developer.log("[dev] window SubtleCrypto 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SubtleCrypto);

Object.defineProperty(window, "VideoDecoder", {
    value: function VideoDecoder() {
        Developer.log("[dev] window VideoDecoder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.VideoDecoder);

Object.defineProperty(window, "VideoEncoder", {
    value: function VideoEncoder() {
        Developer.log("[dev] window VideoEncoder 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.VideoEncoder);

Object.defineProperty(window, "VirtualKeyboard", {
    value: function VirtualKeyboard() {
        Developer.log("[dev] window VirtualKeyboard 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.VirtualKeyboard);

Object.defineProperty(window, "WGSLLanguageFeatures", {
    value: function WGSLLanguageFeatures() {
        Developer.log("[dev] window WGSLLanguageFeatures 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WGSLLanguageFeatures);

Object.defineProperty(window, "WebTransport", {
    value: function WebTransport() {
        Developer.log("[dev] window WebTransport 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebTransport);

Object.defineProperty(window, "WebTransportBidirectionalStream", {
    value: function WebTransportBidirectionalStream() {
        Developer.log("[dev] window WebTransportBidirectionalStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebTransportBidirectionalStream);

Object.defineProperty(window, "WebTransportDatagramDuplexStream", {
    value: function WebTransportDatagramDuplexStream() {
        Developer.log("[dev] window WebTransportDatagramDuplexStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebTransportDatagramDuplexStream);

Object.defineProperty(window, "WebTransportError", {
    value: function WebTransportError() {
        Developer.log("[dev] window WebTransportError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebTransportError);

Object.defineProperty(window, "Worklet", {
    value: function Worklet() {
        Developer.log("[dev] window Worklet 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Worklet);

Object.defineProperty(window, "XRDOMOverlayState", {
    value: function XRDOMOverlayState() {
        Developer.log("[dev] window XRDOMOverlayState 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRDOMOverlayState);

Object.defineProperty(window, "XRLayer", {
    value: function XRLayer() {
        Developer.log("[dev] window XRLayer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRLayer);

Object.defineProperty(window, "XRWebGLBinding", {
    value: function XRWebGLBinding() {
        Developer.log("[dev] window XRWebGLBinding 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRWebGLBinding);

Object.defineProperty(window, "AuthenticatorAssertionResponse", {
    value: function AuthenticatorAssertionResponse() {
        Developer.log("[dev] window AuthenticatorAssertionResponse 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AuthenticatorAssertionResponse);

Object.defineProperty(window, "AuthenticatorAttestationResponse", {
    value: function AuthenticatorAttestationResponse() {
        Developer.log("[dev] window AuthenticatorAttestationResponse 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AuthenticatorAttestationResponse);

Object.defineProperty(window, "AuthenticatorResponse", {
    value: function AuthenticatorResponse() {
        Developer.log("[dev] window AuthenticatorResponse 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.AuthenticatorResponse);

Object.defineProperty(window, "PublicKeyCredential", {
    value: function PublicKeyCredential() {
        Developer.log("[dev] window PublicKeyCredential 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PublicKeyCredential);

Object.defineProperty(window, "Bluetooth", {
    value: function Bluetooth() {
        Developer.log("[dev] window Bluetooth 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Bluetooth);

Object.defineProperty(window, "BluetoothCharacteristicProperties", {
    value: function BluetoothCharacteristicProperties() {
        Developer.log("[dev] window BluetoothCharacteristicProperties 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BluetoothCharacteristicProperties);

Object.defineProperty(window, "BluetoothDevice", {
    value: function BluetoothDevice() {
        Developer.log("[dev] window BluetoothDevice 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BluetoothDevice);

Object.defineProperty(window, "BluetoothRemoteGATTCharacteristic", {
    value: function BluetoothRemoteGATTCharacteristic() {
        Developer.log("[dev] window BluetoothRemoteGATTCharacteristic 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BluetoothRemoteGATTCharacteristic);

Object.defineProperty(window, "BluetoothRemoteGATTDescriptor", {
    value: function BluetoothRemoteGATTDescriptor() {
        Developer.log("[dev] window BluetoothRemoteGATTDescriptor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BluetoothRemoteGATTDescriptor);

Object.defineProperty(window, "BluetoothRemoteGATTServer", {
    value: function BluetoothRemoteGATTServer() {
        Developer.log("[dev] window BluetoothRemoteGATTServer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BluetoothRemoteGATTServer);

Object.defineProperty(window, "BluetoothRemoteGATTService", {
    value: function BluetoothRemoteGATTService() {
        Developer.log("[dev] window BluetoothRemoteGATTService 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BluetoothRemoteGATTService);

Object.defineProperty(window, "CaptureController", {
    value: function CaptureController() {
        Developer.log("[dev] window CaptureController 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CaptureController);

Object.defineProperty(window, "DocumentPictureInPicture", {
    value: function DocumentPictureInPicture() {
        Developer.log("[dev] window DocumentPictureInPicture 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DocumentPictureInPicture);

Object.defineProperty(window, "EyeDropper", {
    value: function EyeDropper() {
        Developer.log("[dev] window EyeDropper 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.EyeDropper);

Object.defineProperty(window, "Fence", {
    value: function Fence() {
        Developer.log("[dev] window Fence 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Fence);

Object.defineProperty(window, "FencedFrameConfig", {
    value: function FencedFrameConfig() {
        Developer.log("[dev] window FencedFrameConfig 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FencedFrameConfig);

Object.defineProperty(window, "HTMLFencedFrameElement", {
    value: function HTMLFencedFrameElement() {
        Developer.log("[dev] window HTMLFencedFrameElement 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HTMLFencedFrameElement);

Object.defineProperty(window, "FileSystemDirectoryHandle", {
    value: function FileSystemDirectoryHandle() {
        Developer.log("[dev] window FileSystemDirectoryHandle 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FileSystemDirectoryHandle);

Object.defineProperty(window, "FileSystemFileHandle", {
    value: function FileSystemFileHandle() {
        Developer.log("[dev] window FileSystemFileHandle 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FileSystemFileHandle);

Object.defineProperty(window, "FileSystemHandle", {
    value: function FileSystemHandle() {
        Developer.log("[dev] window FileSystemHandle 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FileSystemHandle);

Object.defineProperty(window, "FileSystemWritableFileStream", {
    value: function FileSystemWritableFileStream() {
        Developer.log("[dev] window FileSystemWritableFileStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FileSystemWritableFileStream);

Object.defineProperty(window, "FontData", {
    value: function FontData() {
        Developer.log("[dev] window FontData 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FontData);

Object.defineProperty(window, "FragmentDirective", {
    value: function FragmentDirective() {
        Developer.log("[dev] window FragmentDirective 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.FragmentDirective);

Object.defineProperty(window, "HID", {
    value: function HID() {
        Developer.log("[dev] window HID 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HID);

Object.defineProperty(window, "HIDConnectionEvent", {
    value: function HIDConnectionEvent() {
        Developer.log("[dev] window HIDConnectionEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HIDConnectionEvent);

Object.defineProperty(window, "HIDDevice", {
    value: function HIDDevice() {
        Developer.log("[dev] window HIDDevice 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HIDDevice);

Object.defineProperty(window, "HIDInputReportEvent", {
    value: function HIDInputReportEvent() {
        Developer.log("[dev] window HIDInputReportEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.HIDInputReportEvent);

Object.defineProperty(window, "IdentityCredential", {
    value: function IdentityCredential() {
        Developer.log("[dev] window IdentityCredential 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IdentityCredential);

Object.defineProperty(window, "IdentityProvider", {
    value: function IdentityProvider() {
        Developer.log("[dev] window IdentityProvider 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IdentityProvider);

Object.defineProperty(window, "IdentityCredentialError", {
    value: function IdentityCredentialError() {
        Developer.log("[dev] window IdentityCredentialError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.IdentityCredentialError);

Object.defineProperty(window, "LaunchParams", {
    value: function LaunchParams() {
        Developer.log("[dev] window LaunchParams 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.LaunchParams);

Object.defineProperty(window, "LaunchQueue", {
    value: function LaunchQueue() {
        Developer.log("[dev] window LaunchQueue 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.LaunchQueue);

Object.defineProperty(window, "NavigatorLogin", {
    value: function NavigatorLogin() {
        Developer.log("[dev] window NavigatorLogin 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NavigatorLogin);

Object.defineProperty(window, "NotRestoredReasonDetails", {
    value: function NotRestoredReasonDetails() {
        Developer.log("[dev] window NotRestoredReasonDetails 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NotRestoredReasonDetails);

Object.defineProperty(window, "NotRestoredReasons", {
    value: function NotRestoredReasons() {
        Developer.log("[dev] window NotRestoredReasons 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NotRestoredReasons);

Object.defineProperty(window, "OTPCredential", {
    value: function OTPCredential() {
        Developer.log("[dev] window OTPCredential 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.OTPCredential);

Object.defineProperty(window, "PaymentAddress", {
    value: function PaymentAddress() {
        Developer.log("[dev] window PaymentAddress 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PaymentAddress);

Object.defineProperty(window, "PaymentRequest", {
    value: function PaymentRequest() {
        Developer.log("[dev] window PaymentRequest 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PaymentRequest);

Object.defineProperty(window, "PaymentRequestUpdateEvent", {
    value: function PaymentRequestUpdateEvent() {
        Developer.log("[dev] window PaymentRequestUpdateEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PaymentRequestUpdateEvent);

Object.defineProperty(window, "PaymentResponse", {
    value: function PaymentResponse() {
        Developer.log("[dev] window PaymentResponse 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PaymentResponse);

Object.defineProperty(window, "PaymentManager", {
    value: function PaymentManager() {
        Developer.log("[dev] window PaymentManager 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PaymentManager);

Object.defineProperty(window, "PaymentMethodChangeEvent", {
    value: function PaymentMethodChangeEvent() {
        Developer.log("[dev] window PaymentMethodChangeEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PaymentMethodChangeEvent);

Object.defineProperty(window, "Presentation", {
    value: function Presentation() {
        Developer.log("[dev] window Presentation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Presentation);

Object.defineProperty(window, "PresentationAvailability", {
    value: function PresentationAvailability() {
        Developer.log("[dev] window PresentationAvailability 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PresentationAvailability);

Object.defineProperty(window, "PresentationConnection", {
    value: function PresentationConnection() {
        Developer.log("[dev] window PresentationConnection 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PresentationConnection);

Object.defineProperty(window, "PresentationConnectionAvailableEvent", {
    value: function PresentationConnectionAvailableEvent() {
        Developer.log("[dev] window PresentationConnectionAvailableEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PresentationConnectionAvailableEvent);

Object.defineProperty(window, "PresentationConnectionCloseEvent", {
    value: function PresentationConnectionCloseEvent() {
        Developer.log("[dev] window PresentationConnectionCloseEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PresentationConnectionCloseEvent);

Object.defineProperty(window, "PresentationConnectionList", {
    value: function PresentationConnectionList() {
        Developer.log("[dev] window PresentationConnectionList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PresentationConnectionList);

Object.defineProperty(window, "PresentationReceiver", {
    value: function PresentationReceiver() {
        Developer.log("[dev] window PresentationReceiver 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PresentationReceiver);

Object.defineProperty(window, "PresentationRequest", {
    value: function PresentationRequest() {
        Developer.log("[dev] window PresentationRequest 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PresentationRequest);

Object.defineProperty(window, "PressureObserver", {
    value: function PressureObserver() {
        Developer.log("[dev] window PressureObserver 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PressureObserver);

Object.defineProperty(window, "PressureRecord", {
    value: function PressureRecord() {
        Developer.log("[dev] window PressureRecord 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PressureRecord);

Object.defineProperty(window, "ProtectedAudience", {
    value: function ProtectedAudience() {
        Developer.log("[dev] window ProtectedAudience 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ProtectedAudience);

Object.defineProperty(window, "Serial", {
    value: function Serial() {
        Developer.log("[dev] window Serial 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Serial);

Object.defineProperty(window, "SerialPort", {
    value: function SerialPort() {
        Developer.log("[dev] window SerialPort 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SerialPort);

Object.defineProperty(window, "SharedStorage", {
    value: function SharedStorage() {
        Developer.log("[dev] window SharedStorage 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SharedStorage);

Object.defineProperty(window, "SharedStorageWorklet", {
    value: function SharedStorageWorklet() {
        Developer.log("[dev] window SharedStorageWorklet 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SharedStorageWorklet);

Object.defineProperty(window, "StorageBucket", {
    value: function StorageBucket() {
        Developer.log("[dev] window StorageBucket 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.StorageBucket);

Object.defineProperty(window, "StorageBucketManager", {
    value: function StorageBucketManager() {
        Developer.log("[dev] window StorageBucketManager 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.StorageBucketManager);

Object.defineProperty(window, "USB", {
    value: function USB() {
        Developer.log("[dev] window USB 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USB);

Object.defineProperty(window, "USBAlternateInterface", {
    value: function USBAlternateInterface() {
        Developer.log("[dev] window USBAlternateInterface 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBAlternateInterface);

Object.defineProperty(window, "USBConfiguration", {
    value: function USBConfiguration() {
        Developer.log("[dev] window USBConfiguration 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBConfiguration);

Object.defineProperty(window, "USBConnectionEvent", {
    value: function USBConnectionEvent() {
        Developer.log("[dev] window USBConnectionEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBConnectionEvent);

Object.defineProperty(window, "USBDevice", {
    value: function USBDevice() {
        Developer.log("[dev] window USBDevice 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBDevice);

Object.defineProperty(window, "USBEndpoint", {
    value: function USBEndpoint() {
        Developer.log("[dev] window USBEndpoint 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBEndpoint);

Object.defineProperty(window, "USBInTransferResult", {
    value: function USBInTransferResult() {
        Developer.log("[dev] window USBInTransferResult 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBInTransferResult);

Object.defineProperty(window, "USBInterface", {
    value: function USBInterface() {
        Developer.log("[dev] window USBInterface 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBInterface);

Object.defineProperty(window, "USBIsochronousInTransferPacket", {
    value: function USBIsochronousInTransferPacket() {
        Developer.log("[dev] window USBIsochronousInTransferPacket 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBIsochronousInTransferPacket);

Object.defineProperty(window, "USBIsochronousInTransferResult", {
    value: function USBIsochronousInTransferResult() {
        Developer.log("[dev] window USBIsochronousInTransferResult 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBIsochronousInTransferResult);

Object.defineProperty(window, "USBIsochronousOutTransferPacket", {
    value: function USBIsochronousOutTransferPacket() {
        Developer.log("[dev] window USBIsochronousOutTransferPacket 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBIsochronousOutTransferPacket);

Object.defineProperty(window, "USBIsochronousOutTransferResult", {
    value: function USBIsochronousOutTransferResult() {
        Developer.log("[dev] window USBIsochronousOutTransferResult 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBIsochronousOutTransferResult);

Object.defineProperty(window, "USBOutTransferResult", {
    value: function USBOutTransferResult() {
        Developer.log("[dev] window USBOutTransferResult 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.USBOutTransferResult);

Object.defineProperty(window, "WakeLock", {
    value: function WakeLock() {
        Developer.log("[dev] window WakeLock 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WakeLock);

Object.defineProperty(window, "WakeLockSentinel", {
    value: function WakeLockSentinel() {
        Developer.log("[dev] window WakeLockSentinel 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WakeLockSentinel);

Object.defineProperty(window, "XRAnchor", {
    value: function XRAnchor() {
        Developer.log("[dev] window XRAnchor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRAnchor);

Object.defineProperty(window, "XRAnchorSet", {
    value: function XRAnchorSet() {
        Developer.log("[dev] window XRAnchorSet 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRAnchorSet);

Object.defineProperty(window, "XRBoundedReferenceSpace", {
    value: function XRBoundedReferenceSpace() {
        Developer.log("[dev] window XRBoundedReferenceSpace 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRBoundedReferenceSpace);

Object.defineProperty(window, "XRCPUDepthInformation", {
    value: function XRCPUDepthInformation() {
        Developer.log("[dev] window XRCPUDepthInformation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRCPUDepthInformation);

Object.defineProperty(window, "XRCamera", {
    value: function XRCamera() {
        Developer.log("[dev] window XRCamera 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRCamera);

Object.defineProperty(window, "XRDepthInformation", {
    value: function XRDepthInformation() {
        Developer.log("[dev] window XRDepthInformation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRDepthInformation);

Object.defineProperty(window, "XRFrame", {
    value: function XRFrame() {
        Developer.log("[dev] window XRFrame 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRFrame);

Object.defineProperty(window, "XRHitTestResult", {
    value: function XRHitTestResult() {
        Developer.log("[dev] window XRHitTestResult 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRHitTestResult);

Object.defineProperty(window, "XRHitTestSource", {
    value: function XRHitTestSource() {
        Developer.log("[dev] window XRHitTestSource 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRHitTestSource);

Object.defineProperty(window, "XRInputSource", {
    value: function XRInputSource() {
        Developer.log("[dev] window XRInputSource 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRInputSource);

Object.defineProperty(window, "XRInputSourceArray", {
    value: function XRInputSourceArray() {
        Developer.log("[dev] window XRInputSourceArray 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRInputSourceArray);

Object.defineProperty(window, "XRInputSourceEvent", {
    value: function XRInputSourceEvent() {
        Developer.log("[dev] window XRInputSourceEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRInputSourceEvent);

Object.defineProperty(window, "XRInputSourcesChangeEvent", {
    value: function XRInputSourcesChangeEvent() {
        Developer.log("[dev] window XRInputSourcesChangeEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRInputSourcesChangeEvent);

Object.defineProperty(window, "XRLightEstimate", {
    value: function XRLightEstimate() {
        Developer.log("[dev] window XRLightEstimate 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRLightEstimate);

Object.defineProperty(window, "XRLightProbe", {
    value: function XRLightProbe() {
        Developer.log("[dev] window XRLightProbe 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRLightProbe);

Object.defineProperty(window, "XRPose", {
    value: function XRPose() {
        Developer.log("[dev] window XRPose 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRPose);

Object.defineProperty(window, "XRRay", {
    value: function XRRay() {
        Developer.log("[dev] window XRRay 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRRay);

Object.defineProperty(window, "XRReferenceSpace", {
    value: function XRReferenceSpace() {
        Developer.log("[dev] window XRReferenceSpace 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRReferenceSpace);

Object.defineProperty(window, "XRReferenceSpaceEvent", {
    value: function XRReferenceSpaceEvent() {
        Developer.log("[dev] window XRReferenceSpaceEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRReferenceSpaceEvent);

Object.defineProperty(window, "XRRenderState", {
    value: function XRRenderState() {
        Developer.log("[dev] window XRRenderState 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRRenderState);

Object.defineProperty(window, "XRRigidTransform", {
    value: function XRRigidTransform() {
        Developer.log("[dev] window XRRigidTransform 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRRigidTransform);

Object.defineProperty(window, "XRSession", {
    value: function XRSession() {
        Developer.log("[dev] window XRSession 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRSession);

Object.defineProperty(window, "XRSessionEvent", {
    value: function XRSessionEvent() {
        Developer.log("[dev] window XRSessionEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRSessionEvent);

Object.defineProperty(window, "XRSpace", {
    value: function XRSpace() {
        Developer.log("[dev] window XRSpace 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRSpace);

Object.defineProperty(window, "XRSystem", {
    value: function XRSystem() {
        Developer.log("[dev] window XRSystem 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRSystem);

Object.defineProperty(window, "XRTransientInputHitTestResult", {
    value: function XRTransientInputHitTestResult() {
        Developer.log("[dev] window XRTransientInputHitTestResult 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRTransientInputHitTestResult);

Object.defineProperty(window, "XRTransientInputHitTestSource", {
    value: function XRTransientInputHitTestSource() {
        Developer.log("[dev] window XRTransientInputHitTestSource 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRTransientInputHitTestSource);

Object.defineProperty(window, "XRView", {
    value: function XRView() {
        Developer.log("[dev] window XRView 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRView);

Object.defineProperty(window, "XRViewerPose", {
    value: function XRViewerPose() {
        Developer.log("[dev] window XRViewerPose 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRViewerPose);

Object.defineProperty(window, "XRViewport", {
    value: function XRViewport() {
        Developer.log("[dev] window XRViewport 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRViewport);

Object.defineProperty(window, "XRWebGLDepthInformation", {
    value: function XRWebGLDepthInformation() {
        Developer.log("[dev] window XRWebGLDepthInformation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRWebGLDepthInformation);

Object.defineProperty(window, "XRWebGLLayer", {
    value: function XRWebGLLayer() {
        Developer.log("[dev] window XRWebGLLayer 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.XRWebGLLayer);

Object.defineProperty(window, "getScreenDetails", {
    value: function getScreenDetails() {
        Developer.log("[dev] window getScreenDetails 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.getScreenDetails);

Object.defineProperty(window, "queryLocalFonts", {
    value: function queryLocalFonts() {
        Developer.log("[dev] window queryLocalFonts 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.queryLocalFonts);

Object.defineProperty(window, "showDirectoryPicker", {
    value: function showDirectoryPicker() {
        Developer.log("[dev] window showDirectoryPicker 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.showDirectoryPicker);

Object.defineProperty(window, "showOpenFilePicker", {
    value: function showOpenFilePicker() {
        Developer.log("[dev] window showOpenFilePicker 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.showOpenFilePicker);

Object.defineProperty(window, "showSaveFilePicker", {
    value: function showSaveFilePicker() {
        Developer.log("[dev] window showSaveFilePicker 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.showSaveFilePicker);

vmcore.propertymanager.window.originAgentCluster = true;
Object.defineProperty(window, "originAgentCluster", {
    get: function originAgentCluster() {
        Developer.log("[dev] window originAgentCluster 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.originAgentCluster;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpageswap = null;
Object.defineProperty(window, "onpageswap", {
    get: function onpageswap() {
        Developer.log("[dev] window onpageswap 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpageswap;
    },
    set: function onpageswap(val) {
        Developer.log("[dev] window onpageswap 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpageswap = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onpagereveal = null;
Object.defineProperty(window, "onpagereveal", {
    get: function onpagereveal() {
        Developer.log("[dev] window onpagereveal 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onpagereveal;
    },
    set: function onpagereveal(val) {
        Developer.log("[dev] window onpagereveal 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onpagereveal = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.credentialless = false;
Object.defineProperty(window, "credentialless", {
    get: function credentialless() {
        Developer.log("[dev] window credentialless 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.credentialless;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.speechSynthesis = null;
Object.defineProperty(window, "speechSynthesis", {
    get: function speechSynthesis() {
        Developer.log("[dev] window speechSynthesis 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.speechSynthesis;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.onscrollend = null;
Object.defineProperty(window, "onscrollend", {
    get: function onscrollend() {
        Developer.log("[dev] window onscrollend 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.onscrollend;
    },
    set: function onscrollend(val) {
        Developer.log("[dev] window onscrollend 描述符 [set] 被调用了");
        vmcore.propertymanager.window.onscrollend = val;
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "BackgroundFetchManager", {
    value: function BackgroundFetchManager() {
        Developer.log("[dev] window BackgroundFetchManager 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BackgroundFetchManager);

Object.defineProperty(window, "BackgroundFetchRecord", {
    value: function BackgroundFetchRecord() {
        Developer.log("[dev] window BackgroundFetchRecord 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BackgroundFetchRecord);

Object.defineProperty(window, "BackgroundFetchRegistration", {
    value: function BackgroundFetchRegistration() {
        Developer.log("[dev] window BackgroundFetchRegistration 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BackgroundFetchRegistration);

Object.defineProperty(window, "BluetoothUUID", {
    value: function BluetoothUUID() {
        Developer.log("[dev] window BluetoothUUID 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.BluetoothUUID);

Object.defineProperty(window, "CSSPositionTryDescriptors", {
    value: function CSSPositionTryDescriptors() {
        Developer.log("[dev] window CSSPositionTryDescriptors 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSPositionTryDescriptors);

Object.defineProperty(window, "CSSPositionTryRule", {
    value: function CSSPositionTryRule() {
        Developer.log("[dev] window CSSPositionTryRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSPositionTryRule);

Object.defineProperty(window, "CSSViewTransitionRule", {
    value: function CSSViewTransitionRule() {
        Developer.log("[dev] window CSSViewTransitionRule 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CSSViewTransitionRule);

Object.defineProperty(window, "ChapterInformation", {
    value: function ChapterInformation() {
        Developer.log("[dev] window ChapterInformation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ChapterInformation);

Object.defineProperty(window, "CloseWatcher", {
    value: function CloseWatcher() {
        Developer.log("[dev] window CloseWatcher 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CloseWatcher);

Object.defineProperty(window, "CropTarget", {
    value: function CropTarget() {
        Developer.log("[dev] window CropTarget 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.CropTarget);

Object.defineProperty(window, "DocumentPictureInPictureEvent", {
    value: function DocumentPictureInPictureEvent() {
        Developer.log("[dev] window DocumentPictureInPictureEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.DocumentPictureInPictureEvent);

Object.defineProperty(window, "MediaMetadata", {
    value: function MediaMetadata() {
        Developer.log("[dev] window MediaMetadata 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaMetadata);

Object.defineProperty(window, "MediaSession", {
    value: function MediaSession() {
        Developer.log("[dev] window MediaSession 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.MediaSession);

Object.defineProperty(window, "NavigationActivation", {
    value: function NavigationActivation() {
        Developer.log("[dev] window NavigationActivation 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.NavigationActivation);

Object.defineProperty(window, "Notification", {
    value: function Notification() {
        Developer.log("[dev] window Notification 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Notification);

Object.defineProperty(window, "PageRevealEvent", {
    value: function PageRevealEvent() {
        Developer.log("[dev] window PageRevealEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PageRevealEvent);

Object.defineProperty(window, "PageSwapEvent", {
    value: function PageSwapEvent() {
        Developer.log("[dev] window PageSwapEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PageSwapEvent);

Object.defineProperty(window, "PerformanceLongAnimationFrameTiming", {
    value: function PerformanceLongAnimationFrameTiming() {
        Developer.log("[dev] window PerformanceLongAnimationFrameTiming 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceLongAnimationFrameTiming);

Object.defineProperty(window, "PerformanceScriptTiming", {
    value: function PerformanceScriptTiming() {
        Developer.log("[dev] window PerformanceScriptTiming 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PerformanceScriptTiming);

Object.defineProperty(window, "PeriodicSyncManager", {
    value: function PeriodicSyncManager() {
        Developer.log("[dev] window PeriodicSyncManager 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PeriodicSyncManager);

Object.defineProperty(window, "PermissionStatus", {
    value: function PermissionStatus() {
        Developer.log("[dev] window PermissionStatus 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PermissionStatus);

Object.defineProperty(window, "Permissions", {
    value: function Permissions() {
        Developer.log("[dev] window Permissions 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.Permissions);

Object.defineProperty(window, "PushManager", {
    value: function PushManager() {
        Developer.log("[dev] window PushManager 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PushManager);

Object.defineProperty(window, "PushSubscription", {
    value: function PushSubscription() {
        Developer.log("[dev] window PushSubscription 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PushSubscription);

Object.defineProperty(window, "PushSubscriptionOptions", {
    value: function PushSubscriptionOptions() {
        Developer.log("[dev] window PushSubscriptionOptions 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.PushSubscriptionOptions);

Object.defineProperty(window, "RemotePlayback", {
    value: function RemotePlayback() {
        Developer.log("[dev] window RemotePlayback 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.RemotePlayback);

Object.defineProperty(window, "ScrollTimeline", {
    value: function ScrollTimeline() {
        Developer.log("[dev] window ScrollTimeline 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ScrollTimeline);

Object.defineProperty(window, "ViewTimeline", {
    value: function ViewTimeline() {
        Developer.log("[dev] window ViewTimeline 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ViewTimeline);

Object.defineProperty(window, "SharedWorker", {
    value: function SharedWorker() {
        Developer.log("[dev] window SharedWorker 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SharedWorker);

Object.defineProperty(window, "SpeechSynthesis", {
    value: function SpeechSynthesis() {
        Developer.log("[dev] window SpeechSynthesis 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SpeechSynthesis);

Object.defineProperty(window, "SpeechSynthesisErrorEvent", {
    value: function SpeechSynthesisErrorEvent() {
        Developer.log("[dev] window SpeechSynthesisErrorEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SpeechSynthesisErrorEvent);

Object.defineProperty(window, "SpeechSynthesisEvent", {
    value: function SpeechSynthesisEvent() {
        Developer.log("[dev] window SpeechSynthesisEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SpeechSynthesisEvent);

Object.defineProperty(window, "SpeechSynthesisUtterance", {
    value: function SpeechSynthesisUtterance() {
        Developer.log("[dev] window SpeechSynthesisUtterance 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SpeechSynthesisUtterance);

Object.defineProperty(window, "SpeechSynthesisVoice", {
    value: function SpeechSynthesisVoice() {
        Developer.log("[dev] window SpeechSynthesisVoice 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.SpeechSynthesisVoice);

Object.defineProperty(window, "ViewTransitionTypeSet", {
    value: function ViewTransitionTypeSet() {
        Developer.log("[dev] window ViewTransitionTypeSet 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.ViewTransitionTypeSet);

Object.defineProperty(window, "WebSocketError", {
    value: function WebSocketError() {
        Developer.log("[dev] window WebSocketError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebSocketError);

Object.defineProperty(window, "WebSocketStream", {
    value: function WebSocketStream() {
        Developer.log("[dev] window WebSocketStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.WebSocketStream);

Object.defineProperty(window, "webkitSpeechGrammar", {
    value: function webkitSpeechGrammar() {
        Developer.log("[dev] window webkitSpeechGrammar 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.webkitSpeechGrammar);

Object.defineProperty(window, "webkitSpeechGrammarList", {
    value: function webkitSpeechGrammarList() {
        Developer.log("[dev] window webkitSpeechGrammarList 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.webkitSpeechGrammarList);

Object.defineProperty(window, "webkitSpeechRecognition", {
    value: function webkitSpeechRecognition() {
        Developer.log("[dev] window webkitSpeechRecognition 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.webkitSpeechRecognition);

Object.defineProperty(window, "webkitSpeechRecognitionError", {
    value: function webkitSpeechRecognitionError() {
        Developer.log("[dev] window webkitSpeechRecognitionError 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.webkitSpeechRecognitionError);

Object.defineProperty(window, "webkitSpeechRecognitionEvent", {
    value: function webkitSpeechRecognitionEvent() {
        Developer.log("[dev] window webkitSpeechRecognitionEvent 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.webkitSpeechRecognitionEvent);

Object.defineProperty(window, "webkitResolveLocalFileSystemURL", {
    value: function webkitResolveLocalFileSystemURL() {
        Developer.log("[dev] window webkitResolveLocalFileSystemURL 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.webkitResolveLocalFileSystemURL);

Object.defineProperty(window, "RLCONF", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "RLSTATE", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "RLPAGEMODULES", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "RLQ", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "isCompatible", {
    value: function isCompatible() {
        Developer.log("[dev] window isCompatible 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: false,
});
vmcore.func_set_native(window.isCompatible);

Object.defineProperty(window, "mediaWiki", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "mw", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "QUnit", {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "NORLQ", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "$", {
    value: function $() {
        Developer.log("[dev] window $ 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.$);

Object.defineProperty(window, "jQuery", {
    value: function jQuery() {
        Developer.log("[dev] window jQuery 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.jQuery);

Object.defineProperty(window, "addOnloadHook", {
    value: function addOnloadHook() {
        Developer.log("[dev] window addOnloadHook 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.addOnloadHook);

Object.defineProperty(window, "importScriptURI", {
    value: function importScriptURI() {
        Developer.log("[dev] window importScriptURI 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.importScriptURI);

Object.defineProperty(window, "importScript", {
    value: function importScript() {
        Developer.log("[dev] window importScript 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.importScript);

Object.defineProperty(window, "importStylesheet", {
    value: function importStylesheet() {
        Developer.log("[dev] window importStylesheet 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.importStylesheet);

Object.defineProperty(window, "importStylesheetURI", {
    value: function importStylesheetURI() {
        Developer.log("[dev] window importStylesheetURI 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.importStylesheetURI);

Object.defineProperty(window, "pluralRuleParser", {
    value: function pluralRuleParser() {
        Developer.log("[dev] window pluralRuleParser 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.pluralRuleParser);

Object.defineProperty(window, "OO", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "Geo", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "VisualEditorSupportCheck", {
    value: function VisualEditorSupportCheck() {
        Developer.log("[dev] window VisualEditorSupportCheck 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.VisualEditorSupportCheck);

Object.defineProperty(window, "ve", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "mwCollapsibleSetup", {
    value: function mwCollapsibleSetup() {
        Developer.log("[dev] window mwCollapsibleSetup 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: false,
});
vmcore.func_set_native(window.mwCollapsibleSetup);

vmcore.propertymanager.window.JSConfig = null;
Object.defineProperty(window, "JSConfig", {
    get: function JSConfig() {
        Developer.log("[dev] window JSConfig 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.JSConfig;
    },
    set: function JSConfig(val) {
        Developer.log("[dev] window JSConfig 描述符 [set] 被调用了");
        vmcore.propertymanager.window.JSConfig = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.wgULS = null;
Object.defineProperty(window, "wgULS", {
    get: function wgULS() {
        Developer.log("[dev] window wgULS 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.wgULS;
    },
    set: function wgULS(val) {
        Developer.log("[dev] window wgULS 描述符 [set] 被调用了");
        vmcore.propertymanager.window.wgULS = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.wgUVS = null;
Object.defineProperty(window, "wgUVS", {
    get: function wgUVS() {
        Developer.log("[dev] window wgUVS 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.wgUVS;
    },
    set: function wgUVS(val) {
        Developer.log("[dev] window wgUVS 描述符 [set] 被调用了");
        vmcore.propertymanager.window.wgUVS = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.wgUXS = null;
Object.defineProperty(window, "wgUXS", {
    get: function wgUXS() {
        Developer.log("[dev] window wgUXS 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.wgUXS;
    },
    set: function wgUXS(val) {
        Developer.log("[dev] window wgUXS 描述符 [set] 被调用了");
        vmcore.propertymanager.window.wgUXS = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.addPortletLink = null;
Object.defineProperty(window, "addPortletLink", {
    get: function addPortletLink() {
        Developer.log("[dev] window addPortletLink 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.addPortletLink;
    },
    set: function addPortletLink(val) {
        Developer.log("[dev] window addPortletLink 描述符 [set] 被调用了");
        vmcore.propertymanager.window.addPortletLink = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.getURLParamValue = null;
Object.defineProperty(window, "getURLParamValue", {
    get: function getURLParamValue() {
        Developer.log("[dev] window getURLParamValue 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.getURLParamValue;
    },
    set: function getURLParamValue(val) {
        Developer.log("[dev] window getURLParamValue 描述符 [set] 被调用了");
        vmcore.propertymanager.window.getURLParamValue = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.window.hasClass = null;
Object.defineProperty(window, "hasClass", {
    get: function hasClass() {
        Developer.log("[dev] window hasClass 描述符 [get] 被调用了");
        return vmcore.propertymanager.window.hasClass;
    },
    set: function hasClass(val) {
        Developer.log("[dev] window hasClass 描述符 [set] 被调用了");
        vmcore.propertymanager.window.hasClass = val;
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "importScriptCallback", {
    value: function importScriptCallback() {
        Developer.log("[dev] window importScriptCallback 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.importScriptCallback);

Object.defineProperty(window, "importScriptURICallback", {
    value: function importScriptURICallback() {
        Developer.log("[dev] window importScriptURICallback 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(window.importScriptURICallback);

Object.defineProperty(window, "jQuery3710179270498916811241", {
    value: {},
    writable: false,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "ge", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "customASNInterval", {
    value: 15,
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "Redux", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "ReduxThunk", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "Vue", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(window, "extract_protype2", {
    value: function extract_protype2() {
        Developer.log("[dev] window extract_protype2 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: false,
});
vmcore.func_set_native(window.extract_protype2);

Object.defineProperty(window, "a", {
    value: {},
    writable: true,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(window, "dir", {
    value: function dir() {
        Developer.log("[dev] window dir 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.dir);

Object.defineProperty(window, "dirxml", {
    value: function dirxml() {
        Developer.log("[dev] window dirxml 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.dirxml);

Object.defineProperty(window, "profile", {
    value: function profile() {
        Developer.log("[dev] window profile 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.profile);

Object.defineProperty(window, "profileEnd", {
    value: function profileEnd() {
        Developer.log("[dev] window profileEnd 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.profileEnd);

Object.defineProperty(window, "clear", {
    value: function clear() {
        Developer.log("[dev] window clear 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.clear);

Object.defineProperty(window, "table", {
    value: function table() {
        Developer.log("[dev] window table 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.table);

Object.defineProperty(window, "keys", {
    value: function keys() {
        Developer.log("[dev] window keys 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.keys);

Object.defineProperty(window, "values", {
    value: function values() {
        Developer.log("[dev] window values 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.values);

Object.defineProperty(window, "debug", {
    value: function debug() {
        Developer.log("[dev] window debug 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.debug);

Object.defineProperty(window, "undebug", {
    value: function undebug() {
        Developer.log("[dev] window undebug 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.undebug);

Object.defineProperty(window, "monitor", {
    value: function monitor() {
        Developer.log("[dev] window monitor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.monitor);

Object.defineProperty(window, "unmonitor", {
    value: function unmonitor() {
        Developer.log("[dev] window unmonitor 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.unmonitor);

Object.defineProperty(window, "inspect", {
    value: function inspect() {
        Developer.log("[dev] window inspect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.inspect);

Object.defineProperty(window, "copy", {
    value: function copy() {
        Developer.log("[dev] window copy 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.copy);

Object.defineProperty(window, "queryObjects", {
    value: function queryObjects() {
        Developer.log("[dev] window queryObjects 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.queryObjects);

Object.defineProperty(window, "$_", {
    value: undefined,
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "$0", {
    value: undefined,
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "$1", {
    value: undefined,
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "$2", {
    value: undefined,
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "$3", {
    value: undefined,
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "$4", {
    value: undefined,
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "getEventListeners", {
    value: function getEventListeners() {
        Developer.log("[dev] window getEventListeners 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.getEventListeners);

Object.defineProperty(window, "getAccessibleName", {
    value: function getAccessibleName() {
        Developer.log("[dev] window getAccessibleName 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.getAccessibleName);

Object.defineProperty(window, "getAccessibleRole", {
    value: function getAccessibleRole() {
        Developer.log("[dev] window getAccessibleRole 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.getAccessibleRole);

Object.defineProperty(window, "monitorEvents", {
    value: function monitorEvents() {
        Developer.log("[dev] window monitorEvents 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.monitorEvents);

Object.defineProperty(window, "unmonitorEvents", {
    value: function unmonitorEvents() {
        Developer.log("[dev] window unmonitorEvents 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.unmonitorEvents);

Object.defineProperty(window, "$$", {
    value: function $$() {
        Developer.log("[dev] window $$ 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.$$);

Object.defineProperty(window, "$x", {
    value: function $x() {
        Developer.log("[dev] window $x 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: false,
    configurable: true,
});
vmcore.func_set_native(window.$x);

