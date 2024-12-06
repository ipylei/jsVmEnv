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
        dconext.container = {};
        dconext.__proto__ = CanvasRenderingContext2D.prototype;
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
        let dataUrl = 'data:image/png;base64,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';
        return dataUrl;
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



/* ==================================================================================
    2d
*/
CanvasRenderingContext2D = function CanvasRenderingContext2D() {
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(CanvasRenderingContext2D);
vmcore.propertymanager.CanvasRenderingContext2D = {};
vmcore.propertymanager.CanvasRenderingContext2D.initContainer = function () {
    if (!this.container) {
        this.container = {};
    }
}

vmcore.propertymanager.CanvasRenderingContext2D.canvas = null;
Object.defineProperty(CanvasRenderingContext2D.prototype, "canvas", {
    get: function canvas() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype canvas 描述符 [get] 被调用了");
        return (this.container && this.container.canvas) || vmcore.propertymanager.CanvasRenderingContext2D.canvas;
    },
    set: function (val) {
        vmcore.propertymanager.CanvasRenderingContext2D.initContainer();
        this.container.canvas = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.globalAlpha = 1;
Object.defineProperty(CanvasRenderingContext2D.prototype, "globalAlpha", {
    get: function globalAlpha() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype globalAlpha 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.globalAlpha;
    },
    set: function globalAlpha(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype globalAlpha 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.globalAlpha = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.globalCompositeOperation = "source-over";
Object.defineProperty(CanvasRenderingContext2D.prototype, "globalCompositeOperation", {
    get: function globalCompositeOperation() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype globalCompositeOperation 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.globalCompositeOperation;
    },
    set: function globalCompositeOperation(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype globalCompositeOperation 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.globalCompositeOperation = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.filter = "none";
Object.defineProperty(CanvasRenderingContext2D.prototype, "filter", {
    get: function filter() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype filter 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.filter;
    },
    set: function filter(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype filter 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.filter = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.imageSmoothingEnabled = true;
Object.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingEnabled", {
    get: function imageSmoothingEnabled() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype imageSmoothingEnabled 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.imageSmoothingEnabled;
    },
    set: function imageSmoothingEnabled(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype imageSmoothingEnabled 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.imageSmoothingEnabled = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.imageSmoothingQuality = "low";
Object.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingQuality", {
    get: function imageSmoothingQuality() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype imageSmoothingQuality 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.imageSmoothingQuality;
    },
    set: function imageSmoothingQuality(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype imageSmoothingQuality 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.imageSmoothingQuality = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.strokeStyle = "#000000";
Object.defineProperty(CanvasRenderingContext2D.prototype, "strokeStyle", {
    get: function strokeStyle() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype strokeStyle 描述符 [get] 被调用了");
        return (this.container && this.container.strokeStyle) || vmcore.propertymanager.CanvasRenderingContext2D.strokeStyle;
    },
    set: function strokeStyle(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype strokeStyle 描述符 [set] 被调用了");
        // vmcore.propertymanager.CanvasRenderingContext2D.strokeStyle = val;
        vmcore.propertymanager.CanvasRenderingContext2D.initContainer();
        this.container.strokeStyle = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.fillStyle = "#000000";
Object.defineProperty(CanvasRenderingContext2D.prototype, "fillStyle", {
    get: function fillStyle() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype fillStyle 描述符 [get] 被调用了");
        return (this.container && this.container.fillStyle) || vmcore.propertymanager.CanvasRenderingContext2D.fillStyle;
    },
    set: function fillStyle(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype fillStyle 描述符 [set] 被调用了");
        // vmcore.propertymanager.CanvasRenderingContext2D.fillStyle = val;\
        vmcore.propertymanager.CanvasRenderingContext2D.initContainer();
        this.container.fillStyle = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.shadowOffsetX = 0;
Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetX", {
    get: function shadowOffsetX() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype shadowOffsetX 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.shadowOffsetX;
    },
    set: function shadowOffsetX(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype shadowOffsetX 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.shadowOffsetX = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.shadowOffsetY = 0;
Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetY", {
    get: function shadowOffsetY() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype shadowOffsetY 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.shadowOffsetY;
    },
    set: function shadowOffsetY(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype shadowOffsetY 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.shadowOffsetY = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.shadowBlur = 0;
Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowBlur", {
    get: function shadowBlur() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype shadowBlur 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.shadowBlur;
    },
    set: function shadowBlur(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype shadowBlur 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.shadowBlur = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.shadowColor = "rgba(0, 0, 0, 0)";
Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowColor", {
    get: function shadowColor() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype shadowColor 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.shadowColor;
    },
    set: function shadowColor(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype shadowColor 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.shadowColor = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.lineWidth = 1;
Object.defineProperty(CanvasRenderingContext2D.prototype, "lineWidth", {
    get: function lineWidth() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype lineWidth 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.lineWidth;
    },
    set: function lineWidth(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype lineWidth 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.lineWidth = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.lineCap = "butt";
Object.defineProperty(CanvasRenderingContext2D.prototype, "lineCap", {
    get: function lineCap() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype lineCap 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.lineCap;
    },
    set: function lineCap(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype lineCap 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.lineCap = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.lineJoin = "miter";
Object.defineProperty(CanvasRenderingContext2D.prototype, "lineJoin", {
    get: function lineJoin() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype lineJoin 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.lineJoin;
    },
    set: function lineJoin(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype lineJoin 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.lineJoin = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.miterLimit = 10;
Object.defineProperty(CanvasRenderingContext2D.prototype, "miterLimit", {
    get: function miterLimit() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype miterLimit 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.miterLimit;
    },
    set: function miterLimit(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype miterLimit 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.miterLimit = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.lineDashOffset = 0;
Object.defineProperty(CanvasRenderingContext2D.prototype, "lineDashOffset", {
    get: function lineDashOffset() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype lineDashOffset 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.lineDashOffset;
    },
    set: function lineDashOffset(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype lineDashOffset 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.lineDashOffset = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.font = "10px sans-serif";
Object.defineProperty(CanvasRenderingContext2D.prototype, "font", {
    get: function font() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype font 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.font;
    },
    set: function font(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype font 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.font = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.textAlign = "start";
Object.defineProperty(CanvasRenderingContext2D.prototype, "textAlign", {
    get: function textAlign() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype textAlign 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.textAlign;
    },
    set: function textAlign(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype textAlign 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.textAlign = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.textBaseline = "alphabetic";
Object.defineProperty(CanvasRenderingContext2D.prototype, "textBaseline", {
    get: function textBaseline() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype textBaseline 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.textBaseline;
    },
    set: function textBaseline(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype textBaseline 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.textBaseline = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.direction = "ltr";
Object.defineProperty(CanvasRenderingContext2D.prototype, "direction", {
    get: function direction() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype direction 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.direction;
    },
    set: function direction(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype direction 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.direction = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.fontKerning = "auto";
Object.defineProperty(CanvasRenderingContext2D.prototype, "fontKerning", {
    get: function fontKerning() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype fontKerning 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.fontKerning;
    },
    set: function fontKerning(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype fontKerning 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.fontKerning = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.fontStretch = "normal";
Object.defineProperty(CanvasRenderingContext2D.prototype, "fontStretch", {
    get: function fontStretch() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype fontStretch 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.fontStretch;
    },
    set: function fontStretch(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype fontStretch 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.fontStretch = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.fontVariantCaps = "normal";
Object.defineProperty(CanvasRenderingContext2D.prototype, "fontVariantCaps", {
    get: function fontVariantCaps() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype fontVariantCaps 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.fontVariantCaps;
    },
    set: function fontVariantCaps(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype fontVariantCaps 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.fontVariantCaps = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.letterSpacing = "0px";
Object.defineProperty(CanvasRenderingContext2D.prototype, "letterSpacing", {
    get: function letterSpacing() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype letterSpacing 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.letterSpacing;
    },
    set: function letterSpacing(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype letterSpacing 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.letterSpacing = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.textRendering = "auto";
Object.defineProperty(CanvasRenderingContext2D.prototype, "textRendering", {
    get: function textRendering() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype textRendering 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.textRendering;
    },
    set: function textRendering(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype textRendering 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.textRendering = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.CanvasRenderingContext2D.wordSpacing = "0px";
Object.defineProperty(CanvasRenderingContext2D.prototype, "wordSpacing", {
    get: function wordSpacing() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype wordSpacing 描述符 [get] 被调用了");
        return vmcore.propertymanager.CanvasRenderingContext2D.wordSpacing;
    },
    set: function wordSpacing(val) {
        Developer.log("[dev] CanvasRenderingContext2D.prototype wordSpacing 描述符 [set] 被调用了");
        vmcore.propertymanager.CanvasRenderingContext2D.wordSpacing = val;
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(CanvasRenderingContext2D.prototype, "clip", {
    value: function clip() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype clip 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.clip);

Object.defineProperty(CanvasRenderingContext2D.prototype, "createConicGradient", {
    value: function createConicGradient() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype createConicGradient 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.createConicGradient);

Object.defineProperty(CanvasRenderingContext2D.prototype, "createImageData", {
    value: function createImageData() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype createImageData 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.createImageData);

Object.defineProperty(CanvasRenderingContext2D.prototype, "createLinearGradient", {
    value: function createLinearGradient() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype createLinearGradient 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.createLinearGradient);

Object.defineProperty(CanvasRenderingContext2D.prototype, "createPattern", {
    value: function createPattern() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype createPattern 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.createPattern);

Object.defineProperty(CanvasRenderingContext2D.prototype, "createRadialGradient", {
    value: function createRadialGradient() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype createRadialGradient 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.createRadialGradient);

Object.defineProperty(CanvasRenderingContext2D.prototype, "drawFocusIfNeeded", {
    value: function drawFocusIfNeeded() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype drawFocusIfNeeded 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.drawFocusIfNeeded);

Object.defineProperty(CanvasRenderingContext2D.prototype, "drawImage", {
    value: function drawImage() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype drawImage 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.drawImage);

Object.defineProperty(CanvasRenderingContext2D.prototype, "fill", {
    value: function fill() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype fill 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.fill);

Object.defineProperty(CanvasRenderingContext2D.prototype, "fillText", {
    value: function fillText() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype fillText 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.fillText);

Object.defineProperty(CanvasRenderingContext2D.prototype, "getContextAttributes", {
    value: function getContextAttributes() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype getContextAttributes 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.getContextAttributes);

Object.defineProperty(CanvasRenderingContext2D.prototype, "getImageData", {
    value: function getImageData() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype getImageData 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.getImageData);

Object.defineProperty(CanvasRenderingContext2D.prototype, "getLineDash", {
    value: function getLineDash() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype getLineDash 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.getLineDash);

Object.defineProperty(CanvasRenderingContext2D.prototype, "getTransform", {
    value: function getTransform() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype getTransform 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.getTransform);

Object.defineProperty(CanvasRenderingContext2D.prototype, "isContextLost", {
    value: function isContextLost() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype isContextLost 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.isContextLost);

Object.defineProperty(CanvasRenderingContext2D.prototype, "isPointInPath", {
    value: function isPointInPath() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype isPointInPath 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.isPointInPath);

Object.defineProperty(CanvasRenderingContext2D.prototype, "isPointInStroke", {
    value: function isPointInStroke() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype isPointInStroke 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.isPointInStroke);

Object.defineProperty(CanvasRenderingContext2D.prototype, "measureText", {
    value: function measureText() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype measureText 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.measureText);

Object.defineProperty(CanvasRenderingContext2D.prototype, "putImageData", {
    value: function putImageData() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype putImageData 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.putImageData);

Object.defineProperty(CanvasRenderingContext2D.prototype, "reset", {
    value: function reset() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype reset 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.reset);

Object.defineProperty(CanvasRenderingContext2D.prototype, "roundRect", {
    value: function roundRect() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype roundRect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.roundRect);

Object.defineProperty(CanvasRenderingContext2D.prototype, "save", {
    value: function save() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype save 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.save);

Object.defineProperty(CanvasRenderingContext2D.prototype, "scale", {
    value: function scale() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype scale 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.scale);

Object.defineProperty(CanvasRenderingContext2D.prototype, "setLineDash", {
    value: function setLineDash() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype setLineDash 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.setLineDash);

Object.defineProperty(CanvasRenderingContext2D.prototype, "setTransform", {
    value: function setTransform() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype setTransform 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.setTransform);

Object.defineProperty(CanvasRenderingContext2D.prototype, "stroke", {
    value: function stroke() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype stroke 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.stroke);

Object.defineProperty(CanvasRenderingContext2D.prototype, "strokeText", {
    value: function strokeText() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype strokeText 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.strokeText);

Object.defineProperty(CanvasRenderingContext2D.prototype, "transform", {
    value: function transform() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype transform 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.transform);

Object.defineProperty(CanvasRenderingContext2D.prototype, "translate", {
    value: function translate() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype translate 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.translate);

Object.defineProperty(CanvasRenderingContext2D.prototype, "arc", {
    value: function arc() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype arc 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.arc);

Object.defineProperty(CanvasRenderingContext2D.prototype, "arcTo", {
    value: function arcTo() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype arcTo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.arcTo);

Object.defineProperty(CanvasRenderingContext2D.prototype, "beginPath", {
    value: function beginPath() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype beginPath 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.beginPath);

Object.defineProperty(CanvasRenderingContext2D.prototype, "bezierCurveTo", {
    value: function bezierCurveTo() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype bezierCurveTo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.bezierCurveTo);

Object.defineProperty(CanvasRenderingContext2D.prototype, "clearRect", {
    value: function clearRect() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype clearRect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.clearRect);

Object.defineProperty(CanvasRenderingContext2D.prototype, "closePath", {
    value: function closePath() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype closePath 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.closePath);

Object.defineProperty(CanvasRenderingContext2D.prototype, "ellipse", {
    value: function ellipse() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype ellipse 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.ellipse);

Object.defineProperty(CanvasRenderingContext2D.prototype, "fillRect", {
    value: function fillRect() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype fillRect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.fillRect);

Object.defineProperty(CanvasRenderingContext2D.prototype, "lineTo", {
    value: function lineTo() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype lineTo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.lineTo);

Object.defineProperty(CanvasRenderingContext2D.prototype, "moveTo", {
    value: function moveTo() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype moveTo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.moveTo);

Object.defineProperty(CanvasRenderingContext2D.prototype, "quadraticCurveTo", {
    value: function quadraticCurveTo() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype quadraticCurveTo 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.quadraticCurveTo);

Object.defineProperty(CanvasRenderingContext2D.prototype, "rect", {
    value: function rect() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype rect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.rect);

Object.defineProperty(CanvasRenderingContext2D.prototype, "resetTransform", {
    value: function resetTransform() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype resetTransform 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.resetTransform);

Object.defineProperty(CanvasRenderingContext2D.prototype, "restore", {
    value: function restore() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype restore 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.restore);

Object.defineProperty(CanvasRenderingContext2D.prototype, "rotate", {
    value: function rotate() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype rotate 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.rotate);

Object.defineProperty(CanvasRenderingContext2D.prototype, "strokeRect", {
    value: function strokeRect() {
        Developer.log("[dev] CanvasRenderingContext2D.prototype strokeRect 描述符 [value] [call] 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(CanvasRenderingContext2D.prototype.strokeRect);




/* ==================================================================================
    webgl
*/
WebGLDebugRendererInfo = function WebGLDebugRendererInfo() {
    this.UNMASKED_VENDOR_WEBGL = 33475;
    this.UNMASKED_RENDERER_WEBGL = 33476;
}
WebGLLoseContext = function WebGLLoseContext() {
    this.loseContext = function () { }
}

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
WebGLRenderingContext.prototype.getParameter = function (pname) {
    switch (pname) {
        case 33475:
            return 'Google Inc. (NVIDIA)';
        case 37446:
            return 'ANGLE (NVIDIA, NVIDIA GeForce RTX 3070 Laptop GPU (0x000024DD) Direct3D11 vs_5_0 ps_5_0, D3D11)';
    }
}


/* ==================================================================================
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
