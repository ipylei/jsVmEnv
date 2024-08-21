HTMLElement = function HTMLElement() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(HTMLElement);

Object.defineProperties(HTMLElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLElement",
        configurable: true
    }
});
HTMLElement.__proto__ = Element;
HTMLElement.prototype.__proto__ = Element.prototype;

vmcore.propertymanager.HTMLElement = {};

//------------------------------------------------------------
vmcore.propertymanager.HTMLElement.title = undefined;
Object.defineProperty(HTMLElement.prototype, "title", {
    get: function title() {
        Developer.log("[dev] HTMLElement.prototype title 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.title;
    },
    set: function title(val) {
        Developer.log("[dev] HTMLElement.prototype title 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.title = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.lang = undefined;
Object.defineProperty(HTMLElement.prototype, "lang", {
    get: function lang() {
        Developer.log("[dev] HTMLElement.prototype lang 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.lang;
    },
    set: function lang(val) {
        Developer.log("[dev] HTMLElement.prototype lang 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.lang = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.translate = undefined;
Object.defineProperty(HTMLElement.prototype, "translate", {
    get: function translate() {
        Developer.log("[dev] HTMLElement.prototype translate 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.translate;
    },
    set: function translate(val) {
        Developer.log("[dev] HTMLElement.prototype translate 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.translate = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.dir = undefined;
Object.defineProperty(HTMLElement.prototype, "dir", {
    get: function dir() {
        Developer.log("[dev] HTMLElement.prototype dir 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.dir;
    },
    set: function dir(val) {
        Developer.log("[dev] HTMLElement.prototype dir 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.dir = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.hidden = undefined;
Object.defineProperty(HTMLElement.prototype, "hidden", {
    get: function hidden() {
        Developer.log("[dev] HTMLElement.prototype hidden 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.hidden;
    },
    set: function hidden(val) {
        Developer.log("[dev] HTMLElement.prototype hidden 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.hidden = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.inert = undefined;
Object.defineProperty(HTMLElement.prototype, "inert", {
    get: function inert() {
        Developer.log("[dev] HTMLElement.prototype inert 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.inert;
    },
    set: function inert(val) {
        Developer.log("[dev] HTMLElement.prototype inert 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.inert = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.accessKey = undefined;
Object.defineProperty(HTMLElement.prototype, "accessKey", {
    get: function accessKey() {
        Developer.log("[dev] HTMLElement.prototype accessKey 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.accessKey;
    },
    set: function accessKey(val) {
        Developer.log("[dev] HTMLElement.prototype accessKey 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.accessKey = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.draggable = undefined;
Object.defineProperty(HTMLElement.prototype, "draggable", {
    get: function draggable() {
        Developer.log("[dev] HTMLElement.prototype draggable 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.draggable;
    },
    set: function draggable(val) {
        Developer.log("[dev] HTMLElement.prototype draggable 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.draggable = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.spellcheck = undefined;
Object.defineProperty(HTMLElement.prototype, "spellcheck", {
    get: function spellcheck() {
        Developer.log("[dev] HTMLElement.prototype spellcheck 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.spellcheck;
    },
    set: function spellcheck(val) {
        Developer.log("[dev] HTMLElement.prototype spellcheck 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.spellcheck = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.autocapitalize = undefined;
Object.defineProperty(HTMLElement.prototype, "autocapitalize", {
    get: function autocapitalize() {
        Developer.log("[dev] HTMLElement.prototype autocapitalize 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.autocapitalize;
    },
    set: function autocapitalize(val) {
        Developer.log("[dev] HTMLElement.prototype autocapitalize 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.autocapitalize = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.editContext = undefined;
Object.defineProperty(HTMLElement.prototype, "editContext", {
    get: function editContext() {
        Developer.log("[dev] HTMLElement.prototype editContext 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.editContext;
    },
    set: function editContext(val) {
        Developer.log("[dev] HTMLElement.prototype editContext 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.editContext = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.contentEditable = undefined;
Object.defineProperty(HTMLElement.prototype, "contentEditable", {
    get: function contentEditable() {
        Developer.log("[dev] HTMLElement.prototype contentEditable 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.contentEditable;
    },
    set: function contentEditable(val) {
        Developer.log("[dev] HTMLElement.prototype contentEditable 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.contentEditable = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.enterKeyHint = undefined;
Object.defineProperty(HTMLElement.prototype, "enterKeyHint", {
    get: function enterKeyHint() {
        Developer.log("[dev] HTMLElement.prototype enterKeyHint 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.enterKeyHint;
    },
    set: function enterKeyHint(val) {
        Developer.log("[dev] HTMLElement.prototype enterKeyHint 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.enterKeyHint = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.isContentEditable = undefined;
Object.defineProperty(HTMLElement.prototype, "isContentEditable", {
    get: function isContentEditable() {
        Developer.log("[dev] HTMLElement.prototype isContentEditable 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.isContentEditable;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.inputMode = undefined;
Object.defineProperty(HTMLElement.prototype, "inputMode", {
    get: function inputMode() {
        Developer.log("[dev] HTMLElement.prototype inputMode 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.inputMode;
    },
    set: function inputMode(val) {
        Developer.log("[dev] HTMLElement.prototype inputMode 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.inputMode = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.virtualKeyboardPolicy = undefined;
Object.defineProperty(HTMLElement.prototype, "virtualKeyboardPolicy", {
    get: function virtualKeyboardPolicy() {
        Developer.log("[dev] HTMLElement.prototype virtualKeyboardPolicy 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.virtualKeyboardPolicy;
    },
    set: function virtualKeyboardPolicy(val) {
        Developer.log("[dev] HTMLElement.prototype virtualKeyboardPolicy 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.virtualKeyboardPolicy = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.offsetParent = undefined;
Object.defineProperty(HTMLElement.prototype, "offsetParent", {
    get: function offsetParent() {
        Developer.log("[dev] HTMLElement.prototype offsetParent 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.offsetParent;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.offsetTop = undefined;
Object.defineProperty(HTMLElement.prototype, "offsetTop", {
    get: function offsetTop() {
        Developer.log("[dev] HTMLElement.prototype offsetTop 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.offsetTop;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.offsetLeft = undefined;
Object.defineProperty(HTMLElement.prototype, "offsetLeft", {
    get: function offsetLeft() {
        Developer.log("[dev] HTMLElement.prototype offsetLeft 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.offsetLeft;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.offsetWidth = undefined;
Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
    get: function offsetWidth() {
        Developer.log("[dev] HTMLElement.prototype offsetWidth 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.offsetWidth;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.offsetHeight = undefined;
Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
    get: function offsetHeight() {
        Developer.log("[dev] HTMLElement.prototype offsetHeight 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.offsetHeight;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.popover = undefined;
Object.defineProperty(HTMLElement.prototype, "popover", {
    get: function popover() {
        Developer.log("[dev] HTMLElement.prototype popover 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.popover;
    },
    set: function popover(val) {
        Developer.log("[dev] HTMLElement.prototype popover 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.popover = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.innerText = undefined;
Object.defineProperty(HTMLElement.prototype, "innerText", {
    get: function innerText() {
        Developer.log("[dev] HTMLElement.prototype innerText 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.innerText;
    },
    set: function innerText(val) {
        Developer.log("[dev] HTMLElement.prototype innerText 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.innerText = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.outerText = undefined;
Object.defineProperty(HTMLElement.prototype, "outerText", {
    get: function outerText() {
        Developer.log("[dev] HTMLElement.prototype outerText 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.outerText;
    },
    set: function outerText(val) {
        Developer.log("[dev] HTMLElement.prototype outerText 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.outerText = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onbeforexrselect = undefined;
Object.defineProperty(HTMLElement.prototype, "onbeforexrselect", {
    get: function onbeforexrselect() {
        Developer.log("[dev] HTMLElement.prototype onbeforexrselect 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onbeforexrselect;
    },
    set: function onbeforexrselect(val) {
        Developer.log("[dev] HTMLElement.prototype onbeforexrselect 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onbeforexrselect = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onabort = undefined;
Object.defineProperty(HTMLElement.prototype, "onabort", {
    get: function onabort() {
        Developer.log("[dev] HTMLElement.prototype onabort 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onabort;
    },
    set: function onabort(val) {
        Developer.log("[dev] HTMLElement.prototype onabort 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onabort = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onbeforeinput = undefined;
Object.defineProperty(HTMLElement.prototype, "onbeforeinput", {
    get: function onbeforeinput() {
        Developer.log("[dev] HTMLElement.prototype onbeforeinput 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onbeforeinput;
    },
    set: function onbeforeinput(val) {
        Developer.log("[dev] HTMLElement.prototype onbeforeinput 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onbeforeinput = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onbeforematch = undefined;
Object.defineProperty(HTMLElement.prototype, "onbeforematch", {
    get: function onbeforematch() {
        Developer.log("[dev] HTMLElement.prototype onbeforematch 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onbeforematch;
    },
    set: function onbeforematch(val) {
        Developer.log("[dev] HTMLElement.prototype onbeforematch 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onbeforematch = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onbeforetoggle = undefined;
Object.defineProperty(HTMLElement.prototype, "onbeforetoggle", {
    get: function onbeforetoggle() {
        Developer.log("[dev] HTMLElement.prototype onbeforetoggle 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onbeforetoggle;
    },
    set: function onbeforetoggle(val) {
        Developer.log("[dev] HTMLElement.prototype onbeforetoggle 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onbeforetoggle = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onblur = undefined;
Object.defineProperty(HTMLElement.prototype, "onblur", {
    get: function onblur() {
        Developer.log("[dev] HTMLElement.prototype onblur 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onblur;
    },
    set: function onblur(val) {
        Developer.log("[dev] HTMLElement.prototype onblur 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onblur = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oncancel = undefined;
Object.defineProperty(HTMLElement.prototype, "oncancel", {
    get: function oncancel() {
        Developer.log("[dev] HTMLElement.prototype oncancel 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oncancel;
    },
    set: function oncancel(val) {
        Developer.log("[dev] HTMLElement.prototype oncancel 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oncancel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oncanplay = undefined;
Object.defineProperty(HTMLElement.prototype, "oncanplay", {
    get: function oncanplay() {
        Developer.log("[dev] HTMLElement.prototype oncanplay 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oncanplay;
    },
    set: function oncanplay(val) {
        Developer.log("[dev] HTMLElement.prototype oncanplay 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oncanplay = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oncanplaythrough = undefined;
Object.defineProperty(HTMLElement.prototype, "oncanplaythrough", {
    get: function oncanplaythrough() {
        Developer.log("[dev] HTMLElement.prototype oncanplaythrough 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oncanplaythrough;
    },
    set: function oncanplaythrough(val) {
        Developer.log("[dev] HTMLElement.prototype oncanplaythrough 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oncanplaythrough = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onchange = undefined;
Object.defineProperty(HTMLElement.prototype, "onchange", {
    get: function onchange() {
        Developer.log("[dev] HTMLElement.prototype onchange 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onchange;
    },
    set: function onchange(val) {
        Developer.log("[dev] HTMLElement.prototype onchange 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onclick = undefined;
Object.defineProperty(HTMLElement.prototype, "onclick", {
    get: function onclick() {
        Developer.log("[dev] HTMLElement.prototype onclick 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onclick;
    },
    set: function onclick(val) {
        Developer.log("[dev] HTMLElement.prototype onclick 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onclick = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onclose = undefined;
Object.defineProperty(HTMLElement.prototype, "onclose", {
    get: function onclose() {
        Developer.log("[dev] HTMLElement.prototype onclose 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onclose;
    },
    set: function onclose(val) {
        Developer.log("[dev] HTMLElement.prototype onclose 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onclose = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oncontentvisibilityautostatechange = undefined;
Object.defineProperty(HTMLElement.prototype, "oncontentvisibilityautostatechange", {
    get: function oncontentvisibilityautostatechange() {
        Developer.log("[dev] HTMLElement.prototype oncontentvisibilityautostatechange 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oncontentvisibilityautostatechange;
    },
    set: function oncontentvisibilityautostatechange(val) {
        Developer.log("[dev] HTMLElement.prototype oncontentvisibilityautostatechange 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oncontentvisibilityautostatechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oncontextlost = undefined;
Object.defineProperty(HTMLElement.prototype, "oncontextlost", {
    get: function oncontextlost() {
        Developer.log("[dev] HTMLElement.prototype oncontextlost 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oncontextlost;
    },
    set: function oncontextlost(val) {
        Developer.log("[dev] HTMLElement.prototype oncontextlost 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oncontextlost = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oncontextmenu = undefined;
Object.defineProperty(HTMLElement.prototype, "oncontextmenu", {
    get: function oncontextmenu() {
        Developer.log("[dev] HTMLElement.prototype oncontextmenu 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oncontextmenu;
    },
    set: function oncontextmenu(val) {
        Developer.log("[dev] HTMLElement.prototype oncontextmenu 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oncontextmenu = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oncontextrestored = undefined;
Object.defineProperty(HTMLElement.prototype, "oncontextrestored", {
    get: function oncontextrestored() {
        Developer.log("[dev] HTMLElement.prototype oncontextrestored 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oncontextrestored;
    },
    set: function oncontextrestored(val) {
        Developer.log("[dev] HTMLElement.prototype oncontextrestored 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oncontextrestored = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oncuechange = undefined;
Object.defineProperty(HTMLElement.prototype, "oncuechange", {
    get: function oncuechange() {
        Developer.log("[dev] HTMLElement.prototype oncuechange 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oncuechange;
    },
    set: function oncuechange(val) {
        Developer.log("[dev] HTMLElement.prototype oncuechange 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oncuechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ondblclick = undefined;
Object.defineProperty(HTMLElement.prototype, "ondblclick", {
    get: function ondblclick() {
        Developer.log("[dev] HTMLElement.prototype ondblclick 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ondblclick;
    },
    set: function ondblclick(val) {
        Developer.log("[dev] HTMLElement.prototype ondblclick 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ondblclick = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ondrag = undefined;
Object.defineProperty(HTMLElement.prototype, "ondrag", {
    get: function ondrag() {
        Developer.log("[dev] HTMLElement.prototype ondrag 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ondrag;
    },
    set: function ondrag(val) {
        Developer.log("[dev] HTMLElement.prototype ondrag 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ondrag = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ondragend = undefined;
Object.defineProperty(HTMLElement.prototype, "ondragend", {
    get: function ondragend() {
        Developer.log("[dev] HTMLElement.prototype ondragend 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ondragend;
    },
    set: function ondragend(val) {
        Developer.log("[dev] HTMLElement.prototype ondragend 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ondragend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ondragenter = undefined;
Object.defineProperty(HTMLElement.prototype, "ondragenter", {
    get: function ondragenter() {
        Developer.log("[dev] HTMLElement.prototype ondragenter 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ondragenter;
    },
    set: function ondragenter(val) {
        Developer.log("[dev] HTMLElement.prototype ondragenter 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ondragenter = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ondragleave = undefined;
Object.defineProperty(HTMLElement.prototype, "ondragleave", {
    get: function ondragleave() {
        Developer.log("[dev] HTMLElement.prototype ondragleave 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ondragleave;
    },
    set: function ondragleave(val) {
        Developer.log("[dev] HTMLElement.prototype ondragleave 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ondragleave = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ondragover = undefined;
Object.defineProperty(HTMLElement.prototype, "ondragover", {
    get: function ondragover() {
        Developer.log("[dev] HTMLElement.prototype ondragover 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ondragover;
    },
    set: function ondragover(val) {
        Developer.log("[dev] HTMLElement.prototype ondragover 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ondragover = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ondragstart = undefined;
Object.defineProperty(HTMLElement.prototype, "ondragstart", {
    get: function ondragstart() {
        Developer.log("[dev] HTMLElement.prototype ondragstart 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ondragstart;
    },
    set: function ondragstart(val) {
        Developer.log("[dev] HTMLElement.prototype ondragstart 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ondragstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ondrop = undefined;
Object.defineProperty(HTMLElement.prototype, "ondrop", {
    get: function ondrop() {
        Developer.log("[dev] HTMLElement.prototype ondrop 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ondrop;
    },
    set: function ondrop(val) {
        Developer.log("[dev] HTMLElement.prototype ondrop 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ondrop = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ondurationchange = undefined;
Object.defineProperty(HTMLElement.prototype, "ondurationchange", {
    get: function ondurationchange() {
        Developer.log("[dev] HTMLElement.prototype ondurationchange 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ondurationchange;
    },
    set: function ondurationchange(val) {
        Developer.log("[dev] HTMLElement.prototype ondurationchange 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ondurationchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onemptied = undefined;
Object.defineProperty(HTMLElement.prototype, "onemptied", {
    get: function onemptied() {
        Developer.log("[dev] HTMLElement.prototype onemptied 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onemptied;
    },
    set: function onemptied(val) {
        Developer.log("[dev] HTMLElement.prototype onemptied 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onemptied = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onended = undefined;
Object.defineProperty(HTMLElement.prototype, "onended", {
    get: function onended() {
        Developer.log("[dev] HTMLElement.prototype onended 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onended;
    },
    set: function onended(val) {
        Developer.log("[dev] HTMLElement.prototype onended 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onended = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onerror = undefined;
Object.defineProperty(HTMLElement.prototype, "onerror", {
    get: function onerror() {
        Developer.log("[dev] HTMLElement.prototype onerror 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onerror;
    },
    set: function onerror(val) {
        Developer.log("[dev] HTMLElement.prototype onerror 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onerror = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onfocus = undefined;
Object.defineProperty(HTMLElement.prototype, "onfocus", {
    get: function onfocus() {
        Developer.log("[dev] HTMLElement.prototype onfocus 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onfocus;
    },
    set: function onfocus(val) {
        Developer.log("[dev] HTMLElement.prototype onfocus 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onfocus = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onformdata = undefined;
Object.defineProperty(HTMLElement.prototype, "onformdata", {
    get: function onformdata() {
        Developer.log("[dev] HTMLElement.prototype onformdata 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onformdata;
    },
    set: function onformdata(val) {
        Developer.log("[dev] HTMLElement.prototype onformdata 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onformdata = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oninput = undefined;
Object.defineProperty(HTMLElement.prototype, "oninput", {
    get: function oninput() {
        Developer.log("[dev] HTMLElement.prototype oninput 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oninput;
    },
    set: function oninput(val) {
        Developer.log("[dev] HTMLElement.prototype oninput 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oninput = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oninvalid = undefined;
Object.defineProperty(HTMLElement.prototype, "oninvalid", {
    get: function oninvalid() {
        Developer.log("[dev] HTMLElement.prototype oninvalid 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oninvalid;
    },
    set: function oninvalid(val) {
        Developer.log("[dev] HTMLElement.prototype oninvalid 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oninvalid = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onkeydown = undefined;
Object.defineProperty(HTMLElement.prototype, "onkeydown", {
    get: function onkeydown() {
        Developer.log("[dev] HTMLElement.prototype onkeydown 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onkeydown;
    },
    set: function onkeydown(val) {
        Developer.log("[dev] HTMLElement.prototype onkeydown 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onkeydown = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onkeypress = undefined;
Object.defineProperty(HTMLElement.prototype, "onkeypress", {
    get: function onkeypress() {
        Developer.log("[dev] HTMLElement.prototype onkeypress 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onkeypress;
    },
    set: function onkeypress(val) {
        Developer.log("[dev] HTMLElement.prototype onkeypress 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onkeypress = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onkeyup = undefined;
Object.defineProperty(HTMLElement.prototype, "onkeyup", {
    get: function onkeyup() {
        Developer.log("[dev] HTMLElement.prototype onkeyup 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onkeyup;
    },
    set: function onkeyup(val) {
        Developer.log("[dev] HTMLElement.prototype onkeyup 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onkeyup = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onload = undefined;
Object.defineProperty(HTMLElement.prototype, "onload", {
    get: function onload() {
        Developer.log("[dev] HTMLElement.prototype onload 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onload;
    },
    set: function onload(val) {
        Developer.log("[dev] HTMLElement.prototype onload 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onload = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onloadeddata = undefined;
Object.defineProperty(HTMLElement.prototype, "onloadeddata", {
    get: function onloadeddata() {
        Developer.log("[dev] HTMLElement.prototype onloadeddata 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onloadeddata;
    },
    set: function onloadeddata(val) {
        Developer.log("[dev] HTMLElement.prototype onloadeddata 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onloadeddata = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onloadedmetadata = undefined;
Object.defineProperty(HTMLElement.prototype, "onloadedmetadata", {
    get: function onloadedmetadata() {
        Developer.log("[dev] HTMLElement.prototype onloadedmetadata 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onloadedmetadata;
    },
    set: function onloadedmetadata(val) {
        Developer.log("[dev] HTMLElement.prototype onloadedmetadata 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onloadedmetadata = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onloadstart = undefined;
Object.defineProperty(HTMLElement.prototype, "onloadstart", {
    get: function onloadstart() {
        Developer.log("[dev] HTMLElement.prototype onloadstart 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onloadstart;
    },
    set: function onloadstart(val) {
        Developer.log("[dev] HTMLElement.prototype onloadstart 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onloadstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onmousedown = undefined;
Object.defineProperty(HTMLElement.prototype, "onmousedown", {
    get: function onmousedown() {
        Developer.log("[dev] HTMLElement.prototype onmousedown 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onmousedown;
    },
    set: function onmousedown(val) {
        Developer.log("[dev] HTMLElement.prototype onmousedown 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onmousedown = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onmouseenter = undefined;
Object.defineProperty(HTMLElement.prototype, "onmouseenter", {
    get: function onmouseenter() {
        Developer.log("[dev] HTMLElement.prototype onmouseenter 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onmouseenter;
    },
    set: function onmouseenter(val) {
        Developer.log("[dev] HTMLElement.prototype onmouseenter 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onmouseenter = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onmouseleave = undefined;
Object.defineProperty(HTMLElement.prototype, "onmouseleave", {
    get: function onmouseleave() {
        Developer.log("[dev] HTMLElement.prototype onmouseleave 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onmouseleave;
    },
    set: function onmouseleave(val) {
        Developer.log("[dev] HTMLElement.prototype onmouseleave 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onmouseleave = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onmousemove = undefined;
Object.defineProperty(HTMLElement.prototype, "onmousemove", {
    get: function onmousemove() {
        Developer.log("[dev] HTMLElement.prototype onmousemove 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onmousemove;
    },
    set: function onmousemove(val) {
        Developer.log("[dev] HTMLElement.prototype onmousemove 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onmousemove = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onmouseout = undefined;
Object.defineProperty(HTMLElement.prototype, "onmouseout", {
    get: function onmouseout() {
        Developer.log("[dev] HTMLElement.prototype onmouseout 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onmouseout;
    },
    set: function onmouseout(val) {
        Developer.log("[dev] HTMLElement.prototype onmouseout 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onmouseout = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onmouseover = undefined;
Object.defineProperty(HTMLElement.prototype, "onmouseover", {
    get: function onmouseover() {
        Developer.log("[dev] HTMLElement.prototype onmouseover 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onmouseover;
    },
    set: function onmouseover(val) {
        Developer.log("[dev] HTMLElement.prototype onmouseover 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onmouseover = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onmouseup = undefined;
Object.defineProperty(HTMLElement.prototype, "onmouseup", {
    get: function onmouseup() {
        Developer.log("[dev] HTMLElement.prototype onmouseup 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onmouseup;
    },
    set: function onmouseup(val) {
        Developer.log("[dev] HTMLElement.prototype onmouseup 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onmouseup = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onmousewheel = undefined;
Object.defineProperty(HTMLElement.prototype, "onmousewheel", {
    get: function onmousewheel() {
        Developer.log("[dev] HTMLElement.prototype onmousewheel 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onmousewheel;
    },
    set: function onmousewheel(val) {
        Developer.log("[dev] HTMLElement.prototype onmousewheel 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onmousewheel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onpause = undefined;
Object.defineProperty(HTMLElement.prototype, "onpause", {
    get: function onpause() {
        Developer.log("[dev] HTMLElement.prototype onpause 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onpause;
    },
    set: function onpause(val) {
        Developer.log("[dev] HTMLElement.prototype onpause 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onpause = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onplay = undefined;
Object.defineProperty(HTMLElement.prototype, "onplay", {
    get: function onplay() {
        Developer.log("[dev] HTMLElement.prototype onplay 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onplay;
    },
    set: function onplay(val) {
        Developer.log("[dev] HTMLElement.prototype onplay 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onplay = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onplaying = undefined;
Object.defineProperty(HTMLElement.prototype, "onplaying", {
    get: function onplaying() {
        Developer.log("[dev] HTMLElement.prototype onplaying 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onplaying;
    },
    set: function onplaying(val) {
        Developer.log("[dev] HTMLElement.prototype onplaying 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onplaying = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onprogress = undefined;
Object.defineProperty(HTMLElement.prototype, "onprogress", {
    get: function onprogress() {
        Developer.log("[dev] HTMLElement.prototype onprogress 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onprogress;
    },
    set: function onprogress(val) {
        Developer.log("[dev] HTMLElement.prototype onprogress 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onprogress = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onratechange = undefined;
Object.defineProperty(HTMLElement.prototype, "onratechange", {
    get: function onratechange() {
        Developer.log("[dev] HTMLElement.prototype onratechange 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onratechange;
    },
    set: function onratechange(val) {
        Developer.log("[dev] HTMLElement.prototype onratechange 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onratechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onreset = undefined;
Object.defineProperty(HTMLElement.prototype, "onreset", {
    get: function onreset() {
        Developer.log("[dev] HTMLElement.prototype onreset 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onreset;
    },
    set: function onreset(val) {
        Developer.log("[dev] HTMLElement.prototype onreset 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onreset = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onresize = undefined;
Object.defineProperty(HTMLElement.prototype, "onresize", {
    get: function onresize() {
        Developer.log("[dev] HTMLElement.prototype onresize 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onresize;
    },
    set: function onresize(val) {
        Developer.log("[dev] HTMLElement.prototype onresize 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onresize = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onscroll = undefined;
Object.defineProperty(HTMLElement.prototype, "onscroll", {
    get: function onscroll() {
        Developer.log("[dev] HTMLElement.prototype onscroll 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onscroll;
    },
    set: function onscroll(val) {
        Developer.log("[dev] HTMLElement.prototype onscroll 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onscroll = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onsecuritypolicyviolation = undefined;
Object.defineProperty(HTMLElement.prototype, "onsecuritypolicyviolation", {
    get: function onsecuritypolicyviolation() {
        Developer.log("[dev] HTMLElement.prototype onsecuritypolicyviolation 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onsecuritypolicyviolation;
    },
    set: function onsecuritypolicyviolation(val) {
        Developer.log("[dev] HTMLElement.prototype onsecuritypolicyviolation 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onsecuritypolicyviolation = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onseeked = undefined;
Object.defineProperty(HTMLElement.prototype, "onseeked", {
    get: function onseeked() {
        Developer.log("[dev] HTMLElement.prototype onseeked 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onseeked;
    },
    set: function onseeked(val) {
        Developer.log("[dev] HTMLElement.prototype onseeked 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onseeked = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onseeking = undefined;
Object.defineProperty(HTMLElement.prototype, "onseeking", {
    get: function onseeking() {
        Developer.log("[dev] HTMLElement.prototype onseeking 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onseeking;
    },
    set: function onseeking(val) {
        Developer.log("[dev] HTMLElement.prototype onseeking 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onseeking = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onselect = undefined;
Object.defineProperty(HTMLElement.prototype, "onselect", {
    get: function onselect() {
        Developer.log("[dev] HTMLElement.prototype onselect 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onselect;
    },
    set: function onselect(val) {
        Developer.log("[dev] HTMLElement.prototype onselect 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onselect = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onslotchange = undefined;
Object.defineProperty(HTMLElement.prototype, "onslotchange", {
    get: function onslotchange() {
        Developer.log("[dev] HTMLElement.prototype onslotchange 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onslotchange;
    },
    set: function onslotchange(val) {
        Developer.log("[dev] HTMLElement.prototype onslotchange 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onslotchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onstalled = undefined;
Object.defineProperty(HTMLElement.prototype, "onstalled", {
    get: function onstalled() {
        Developer.log("[dev] HTMLElement.prototype onstalled 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onstalled;
    },
    set: function onstalled(val) {
        Developer.log("[dev] HTMLElement.prototype onstalled 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onstalled = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onsubmit = undefined;
Object.defineProperty(HTMLElement.prototype, "onsubmit", {
    get: function onsubmit() {
        Developer.log("[dev] HTMLElement.prototype onsubmit 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onsubmit;
    },
    set: function onsubmit(val) {
        Developer.log("[dev] HTMLElement.prototype onsubmit 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onsubmit = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onsuspend = undefined;
Object.defineProperty(HTMLElement.prototype, "onsuspend", {
    get: function onsuspend() {
        Developer.log("[dev] HTMLElement.prototype onsuspend 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onsuspend;
    },
    set: function onsuspend(val) {
        Developer.log("[dev] HTMLElement.prototype onsuspend 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onsuspend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ontimeupdate = undefined;
Object.defineProperty(HTMLElement.prototype, "ontimeupdate", {
    get: function ontimeupdate() {
        Developer.log("[dev] HTMLElement.prototype ontimeupdate 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ontimeupdate;
    },
    set: function ontimeupdate(val) {
        Developer.log("[dev] HTMLElement.prototype ontimeupdate 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ontimeupdate = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ontoggle = undefined;
Object.defineProperty(HTMLElement.prototype, "ontoggle", {
    get: function ontoggle() {
        Developer.log("[dev] HTMLElement.prototype ontoggle 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ontoggle;
    },
    set: function ontoggle(val) {
        Developer.log("[dev] HTMLElement.prototype ontoggle 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ontoggle = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onvolumechange = undefined;
Object.defineProperty(HTMLElement.prototype, "onvolumechange", {
    get: function onvolumechange() {
        Developer.log("[dev] HTMLElement.prototype onvolumechange 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onvolumechange;
    },
    set: function onvolumechange(val) {
        Developer.log("[dev] HTMLElement.prototype onvolumechange 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onvolumechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onwaiting = undefined;
Object.defineProperty(HTMLElement.prototype, "onwaiting", {
    get: function onwaiting() {
        Developer.log("[dev] HTMLElement.prototype onwaiting 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onwaiting;
    },
    set: function onwaiting(val) {
        Developer.log("[dev] HTMLElement.prototype onwaiting 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onwaiting = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onwebkitanimationend = undefined;
Object.defineProperty(HTMLElement.prototype, "onwebkitanimationend", {
    get: function onwebkitanimationend() {
        Developer.log("[dev] HTMLElement.prototype onwebkitanimationend 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onwebkitanimationend;
    },
    set: function onwebkitanimationend(val) {
        Developer.log("[dev] HTMLElement.prototype onwebkitanimationend 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onwebkitanimationend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onwebkitanimationiteration = undefined;
Object.defineProperty(HTMLElement.prototype, "onwebkitanimationiteration", {
    get: function onwebkitanimationiteration() {
        Developer.log("[dev] HTMLElement.prototype onwebkitanimationiteration 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onwebkitanimationiteration;
    },
    set: function onwebkitanimationiteration(val) {
        Developer.log("[dev] HTMLElement.prototype onwebkitanimationiteration 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onwebkitanimationiteration = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onwebkitanimationstart = undefined;
Object.defineProperty(HTMLElement.prototype, "onwebkitanimationstart", {
    get: function onwebkitanimationstart() {
        Developer.log("[dev] HTMLElement.prototype onwebkitanimationstart 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onwebkitanimationstart;
    },
    set: function onwebkitanimationstart(val) {
        Developer.log("[dev] HTMLElement.prototype onwebkitanimationstart 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onwebkitanimationstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onwebkittransitionend = undefined;
Object.defineProperty(HTMLElement.prototype, "onwebkittransitionend", {
    get: function onwebkittransitionend() {
        Developer.log("[dev] HTMLElement.prototype onwebkittransitionend 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onwebkittransitionend;
    },
    set: function onwebkittransitionend(val) {
        Developer.log("[dev] HTMLElement.prototype onwebkittransitionend 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onwebkittransitionend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onwheel = undefined;
Object.defineProperty(HTMLElement.prototype, "onwheel", {
    get: function onwheel() {
        Developer.log("[dev] HTMLElement.prototype onwheel 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onwheel;
    },
    set: function onwheel(val) {
        Developer.log("[dev] HTMLElement.prototype onwheel 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onwheel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onauxclick = undefined;
Object.defineProperty(HTMLElement.prototype, "onauxclick", {
    get: function onauxclick() {
        Developer.log("[dev] HTMLElement.prototype onauxclick 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onauxclick;
    },
    set: function onauxclick(val) {
        Developer.log("[dev] HTMLElement.prototype onauxclick 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onauxclick = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ongotpointercapture = undefined;
Object.defineProperty(HTMLElement.prototype, "ongotpointercapture", {
    get: function ongotpointercapture() {
        Developer.log("[dev] HTMLElement.prototype ongotpointercapture 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ongotpointercapture;
    },
    set: function ongotpointercapture(val) {
        Developer.log("[dev] HTMLElement.prototype ongotpointercapture 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ongotpointercapture = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onlostpointercapture = undefined;
Object.defineProperty(HTMLElement.prototype, "onlostpointercapture", {
    get: function onlostpointercapture() {
        Developer.log("[dev] HTMLElement.prototype onlostpointercapture 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onlostpointercapture;
    },
    set: function onlostpointercapture(val) {
        Developer.log("[dev] HTMLElement.prototype onlostpointercapture 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onlostpointercapture = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onpointerdown = undefined;
Object.defineProperty(HTMLElement.prototype, "onpointerdown", {
    get: function onpointerdown() {
        Developer.log("[dev] HTMLElement.prototype onpointerdown 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onpointerdown;
    },
    set: function onpointerdown(val) {
        Developer.log("[dev] HTMLElement.prototype onpointerdown 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onpointerdown = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onpointermove = undefined;
Object.defineProperty(HTMLElement.prototype, "onpointermove", {
    get: function onpointermove() {
        Developer.log("[dev] HTMLElement.prototype onpointermove 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onpointermove;
    },
    set: function onpointermove(val) {
        Developer.log("[dev] HTMLElement.prototype onpointermove 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onpointermove = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onpointerrawupdate = undefined;
Object.defineProperty(HTMLElement.prototype, "onpointerrawupdate", {
    get: function onpointerrawupdate() {
        Developer.log("[dev] HTMLElement.prototype onpointerrawupdate 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onpointerrawupdate;
    },
    set: function onpointerrawupdate(val) {
        Developer.log("[dev] HTMLElement.prototype onpointerrawupdate 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onpointerrawupdate = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onpointerup = undefined;
Object.defineProperty(HTMLElement.prototype, "onpointerup", {
    get: function onpointerup() {
        Developer.log("[dev] HTMLElement.prototype onpointerup 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onpointerup;
    },
    set: function onpointerup(val) {
        Developer.log("[dev] HTMLElement.prototype onpointerup 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onpointerup = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onpointercancel = undefined;
Object.defineProperty(HTMLElement.prototype, "onpointercancel", {
    get: function onpointercancel() {
        Developer.log("[dev] HTMLElement.prototype onpointercancel 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onpointercancel;
    },
    set: function onpointercancel(val) {
        Developer.log("[dev] HTMLElement.prototype onpointercancel 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onpointercancel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onpointerover = undefined;
Object.defineProperty(HTMLElement.prototype, "onpointerover", {
    get: function onpointerover() {
        Developer.log("[dev] HTMLElement.prototype onpointerover 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onpointerover;
    },
    set: function onpointerover(val) {
        Developer.log("[dev] HTMLElement.prototype onpointerover 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onpointerover = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onpointerout = undefined;
Object.defineProperty(HTMLElement.prototype, "onpointerout", {
    get: function onpointerout() {
        Developer.log("[dev] HTMLElement.prototype onpointerout 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onpointerout;
    },
    set: function onpointerout(val) {
        Developer.log("[dev] HTMLElement.prototype onpointerout 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onpointerout = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onpointerenter = undefined;
Object.defineProperty(HTMLElement.prototype, "onpointerenter", {
    get: function onpointerenter() {
        Developer.log("[dev] HTMLElement.prototype onpointerenter 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onpointerenter;
    },
    set: function onpointerenter(val) {
        Developer.log("[dev] HTMLElement.prototype onpointerenter 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onpointerenter = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onpointerleave = undefined;
Object.defineProperty(HTMLElement.prototype, "onpointerleave", {
    get: function onpointerleave() {
        Developer.log("[dev] HTMLElement.prototype onpointerleave 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onpointerleave;
    },
    set: function onpointerleave(val) {
        Developer.log("[dev] HTMLElement.prototype onpointerleave 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onpointerleave = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onselectstart = undefined;
Object.defineProperty(HTMLElement.prototype, "onselectstart", {
    get: function onselectstart() {
        Developer.log("[dev] HTMLElement.prototype onselectstart 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onselectstart;
    },
    set: function onselectstart(val) {
        Developer.log("[dev] HTMLElement.prototype onselectstart 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onselectstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onselectionchange = undefined;
Object.defineProperty(HTMLElement.prototype, "onselectionchange", {
    get: function onselectionchange() {
        Developer.log("[dev] HTMLElement.prototype onselectionchange 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onselectionchange;
    },
    set: function onselectionchange(val) {
        Developer.log("[dev] HTMLElement.prototype onselectionchange 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onselectionchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onanimationend = undefined;
Object.defineProperty(HTMLElement.prototype, "onanimationend", {
    get: function onanimationend() {
        Developer.log("[dev] HTMLElement.prototype onanimationend 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onanimationend;
    },
    set: function onanimationend(val) {
        Developer.log("[dev] HTMLElement.prototype onanimationend 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onanimationend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onanimationiteration = undefined;
Object.defineProperty(HTMLElement.prototype, "onanimationiteration", {
    get: function onanimationiteration() {
        Developer.log("[dev] HTMLElement.prototype onanimationiteration 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onanimationiteration;
    },
    set: function onanimationiteration(val) {
        Developer.log("[dev] HTMLElement.prototype onanimationiteration 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onanimationiteration = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onanimationstart = undefined;
Object.defineProperty(HTMLElement.prototype, "onanimationstart", {
    get: function onanimationstart() {
        Developer.log("[dev] HTMLElement.prototype onanimationstart 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onanimationstart;
    },
    set: function onanimationstart(val) {
        Developer.log("[dev] HTMLElement.prototype onanimationstart 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onanimationstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ontransitionrun = undefined;
Object.defineProperty(HTMLElement.prototype, "ontransitionrun", {
    get: function ontransitionrun() {
        Developer.log("[dev] HTMLElement.prototype ontransitionrun 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ontransitionrun;
    },
    set: function ontransitionrun(val) {
        Developer.log("[dev] HTMLElement.prototype ontransitionrun 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ontransitionrun = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ontransitionstart = undefined;
Object.defineProperty(HTMLElement.prototype, "ontransitionstart", {
    get: function ontransitionstart() {
        Developer.log("[dev] HTMLElement.prototype ontransitionstart 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ontransitionstart;
    },
    set: function ontransitionstart(val) {
        Developer.log("[dev] HTMLElement.prototype ontransitionstart 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ontransitionstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ontransitionend = undefined;
Object.defineProperty(HTMLElement.prototype, "ontransitionend", {
    get: function ontransitionend() {
        Developer.log("[dev] HTMLElement.prototype ontransitionend 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ontransitionend;
    },
    set: function ontransitionend(val) {
        Developer.log("[dev] HTMLElement.prototype ontransitionend 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ontransitionend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.ontransitioncancel = undefined;
Object.defineProperty(HTMLElement.prototype, "ontransitioncancel", {
    get: function ontransitioncancel() {
        Developer.log("[dev] HTMLElement.prototype ontransitioncancel 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.ontransitioncancel;
    },
    set: function ontransitioncancel(val) {
        Developer.log("[dev] HTMLElement.prototype ontransitioncancel 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.ontransitioncancel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oncopy = undefined;
Object.defineProperty(HTMLElement.prototype, "oncopy", {
    get: function oncopy() {
        Developer.log("[dev] HTMLElement.prototype oncopy 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oncopy;
    },
    set: function oncopy(val) {
        Developer.log("[dev] HTMLElement.prototype oncopy 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oncopy = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.oncut = undefined;
Object.defineProperty(HTMLElement.prototype, "oncut", {
    get: function oncut() {
        Developer.log("[dev] HTMLElement.prototype oncut 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.oncut;
    },
    set: function oncut(val) {
        Developer.log("[dev] HTMLElement.prototype oncut 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.oncut = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onpaste = undefined;
Object.defineProperty(HTMLElement.prototype, "onpaste", {
    get: function onpaste() {
        Developer.log("[dev] HTMLElement.prototype onpaste 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onpaste;
    },
    set: function onpaste(val) {
        Developer.log("[dev] HTMLElement.prototype onpaste 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onpaste = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.dataset = undefined;
Object.defineProperty(HTMLElement.prototype, "dataset", {
    get: function dataset() {
        Developer.log("[dev] HTMLElement.prototype dataset 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.dataset;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.nonce = undefined;
Object.defineProperty(HTMLElement.prototype, "nonce", {
    get: function nonce() {
        Developer.log("[dev] HTMLElement.prototype nonce 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.nonce;
    },
    set: function nonce(val) {
        Developer.log("[dev] HTMLElement.prototype nonce 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.nonce = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.autofocus = undefined;
Object.defineProperty(HTMLElement.prototype, "autofocus", {
    get: function autofocus() {
        Developer.log("[dev] HTMLElement.prototype autofocus 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.autofocus;
    },
    set: function autofocus(val) {
        Developer.log("[dev] HTMLElement.prototype autofocus 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.autofocus = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.tabIndex = undefined;
Object.defineProperty(HTMLElement.prototype, "tabIndex", {
    get: function tabIndex() {
        Developer.log("[dev] HTMLElement.prototype tabIndex 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.tabIndex;
    },
    set: function tabIndex(val) {
        Developer.log("[dev] HTMLElement.prototype tabIndex 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.tabIndex = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.style = undefined;
Object.defineProperty(HTMLElement.prototype, "style", {
    get: function style() {
        Developer.log("[dev] HTMLElement.prototype style 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.style;
    },
    set: function style(val) {
        Developer.log("[dev] HTMLElement.prototype style 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.style = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.attributeStyleMap = undefined;
Object.defineProperty(HTMLElement.prototype, "attributeStyleMap", {
    get: function attributeStyleMap() {
        Developer.log("[dev] HTMLElement.prototype attributeStyleMap 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.attributeStyleMap;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(HTMLElement.prototype, "attachInternals", {
    value: function attachInternals() {
        Developer.log("[dev] HTMLElement.prototype attachInternals 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLElement.prototype.attachInternals);

Object.defineProperty(HTMLElement.prototype, "blur", {
    value: function blur() {
        Developer.log("[dev] HTMLElement.prototype blur 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLElement.prototype.blur);

Object.defineProperty(HTMLElement.prototype, "click", {
    value: function click() {
        Developer.log("[dev] HTMLElement.prototype click 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLElement.prototype.click);

Object.defineProperty(HTMLElement.prototype, "focus", {
    value: function focus() {
        Developer.log("[dev] HTMLElement.prototype focus 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLElement.prototype.focus);

Object.defineProperty(HTMLElement.prototype, "hidePopover", {
    value: function hidePopover() {
        Developer.log("[dev] HTMLElement.prototype hidePopover 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLElement.prototype.hidePopover);

Object.defineProperty(HTMLElement.prototype, "showPopover", {
    value: function showPopover() {
        Developer.log("[dev] HTMLElement.prototype showPopover 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLElement.prototype.showPopover);

Object.defineProperty(HTMLElement.prototype, "togglePopover", {
    value: function togglePopover() {
        Developer.log("[dev] HTMLElement.prototype togglePopover 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(HTMLElement.prototype.togglePopover);

vmcore.propertymanager.HTMLElement.writingSuggestions = undefined;
Object.defineProperty(HTMLElement.prototype, "writingSuggestions", {
    get: function writingSuggestions() {
        Developer.log("[dev] HTMLElement.prototype writingSuggestions 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.writingSuggestions;
    },
    set: function writingSuggestions(val) {
        Developer.log("[dev] HTMLElement.prototype writingSuggestions 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.writingSuggestions = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.HTMLElement.onscrollend = undefined;
Object.defineProperty(HTMLElement.prototype, "onscrollend", {
    get: function onscrollend() {
        Developer.log("[dev] HTMLElement.prototype onscrollend 描述符 get 被调用了");
        return vmcore.propertymanager.HTMLElement.onscrollend;
    },
    set: function onscrollend(val) {
        Developer.log("[dev] HTMLElement.prototype onscrollend 描述符 set 被调用了");
        vmcore.propertymanager.HTMLElement.onscrollend = val;
    },
    enumerable: true,
    configurable: true,
});


//--------------------------------------------------------
