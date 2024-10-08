/* cavnas标签 */

HTMLCanvasElement = function HTMLCanvasElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLCanvasElement);

Object.defineProperties(HTMLCanvasElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCanvasElement",
        configurable: true
    }
});


HTMLCanvasElement.__proto__ = HTMLElement;
HTMLCanvasElement.prototype.__proto__ = HTMLElement.prototype;

vmcore.propertymanager.HTMLCanvasElement = {};
//--------------------------------------------------------
HTMLCanvasElement.prototype.localName = "canvas"; 
HTMLCanvasElement.prototype.nodeName = "CANVAS";  
HTMLCanvasElement.prototype.tagName = "CANVAS";  

HTMLCanvasElement.prototype.getContext = function (mode) {
    Developer.log("[dev] HTMLCanvasElement.prototype getContext 描述符 [value] [call] 被调用了");
    debugger;
    if (mode == "2d") {
        let dconext = {};
        dconext.__proto__ = CanvasRenderingContext2D.prototype;

        dconext.direction = "ltr";
        dconext.fillStyle = "#000000";
        dconext.filter = "none";
        dconext.font = "10px sans-serif";
        dconext.fontKerning = "auto";
        return dconext;
    }

    if (mode == "webgl") {
        let gconext = {};
        gconext.__proto__ = WebGLRenderingContext.prototype;
        return gconext
    }

    if (mode == "webgl2") {
        let g2conext = {};
        g2conext.__proto__ = WebGL2RenderingContext.prototype;
        return g2conext
    }
    return null;
}

vmcore.propertymanager.HTMLCanvasElement.width = 300;
Object.defineProperty(HTMLCanvasElement.prototype, "width", {
    get: function width() {
        Developer.log("[dev] HTMLCanvasElement.prototype width 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLCanvasElement.width;
    },
    set: function width(val) {
        Developer.log("[dev] HTMLCanvasElement.prototype width 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLCanvasElement.width = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLCanvasElement.height = 150;
Object.defineProperty(HTMLCanvasElement.prototype, "height", {
    get: function height() {
        Developer.log("[dev] HTMLCanvasElement.prototype height 描述符 [get] 被调用了");
        return vmcore.propertymanager.HTMLCanvasElement.height;
    },
    set: function height(val) {
        Developer.log("[dev] HTMLCanvasElement.prototype height 描述符 [set] 被调用了");
        vmcore.propertymanager.HTMLCanvasElement.height = val;
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(HTMLCanvasElement.prototype, "captureStream", {
    value: function captureStream() {
        Developer.log("[dev] HTMLCanvasElement.prototype captureStream 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLCanvasElement.prototype.captureStream);

Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
    value: function toBlob() {
        Developer.log("[dev] HTMLCanvasElement.prototype toBlob 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLCanvasElement.prototype.toBlob);

Object.defineProperty(HTMLCanvasElement.prototype, "toDataURL", {
    value: function toDataURL() {
        Developer.log("[dev] HTMLCanvasElement.prototype toDataURL 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLCanvasElement.prototype.toDataURL);

Object.defineProperty(HTMLCanvasElement.prototype, "transferControlToOffscreen", {
    value: function transferControlToOffscreen() {
        Developer.log("[dev] HTMLCanvasElement.prototype transferControlToOffscreen 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLCanvasElement.prototype.transferControlToOffscreen);

//--------------------------------------------------------



/* 
    2d
*/
CanvasRenderingContext2D = function CanvasRenderingContext2D() {
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(CanvasRenderingContext2D);


/* 
    webgl
*/
WebGLDebugRendererInfo = function WebGLDebugRendererInfo() {
    this.UNMASKED_VENDOR_WEBGL = 33475;
    this.UNMASKED_RENDERER_WEBGL = 33476;
}
WebGLLoseContext = function WebGLLoseContext() {
    this.loseContext = function () { }
}

//webgl
WebGLRenderingContext = function WebGLRenderingContext() {
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(WebGLRenderingContext);

WebGLRenderingContext.prototype.getExtension = function (name) {
    if (name == "WEBGL_debug_renderer_info") {
        return new WebGLDebugRendererInfo();
    }
    else if (name == "WEBGL_lose_context") {
        return new WebGLLoseContext();
    }
}
WebGLRenderingContext.prototype.getParameter = function(pname){
    switch(pname){
        case 33475:
            return 'Google Inc. (NVIDIA)';
        case 37446:
            return 'ANGLE (NVIDIA, NVIDIA GeForce RTX 3070 Laptop GPU (0x000024DD) Direct3D11 vs_5_0 ps_5_0, D3D11)';
    }
}


/* 
    webgl2
*/
WebGL2RenderingContext = function WebGL2RenderingContext() {
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(WebGL2RenderingContext);

WebGL2RenderingContext.prototype.getExtension = function (name) {
}


// div标签创建方法(不需要new 直接调用就能创建了)
vmcore.memory.CreateElement["canvas"] = function () {
    var element = new class canvas { };
    element.__proto__ = HTMLCanvasElement.prototype;
    return element;
}
