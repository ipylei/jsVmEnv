Element = function Element() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(Element);

Object.defineProperties(Element.prototype, {
    [Symbol.toStringTag]: {
        value: "Element",
        configurable: true
    }
});

Element.__proto__ = Node;
Element.prototype.__proto__ = Node.prototype;

vmcore.propertymanager.Element = {};

//--------------------------------------------------------
vmcore.propertymanager.Element.namespaceURI = undefined;
Object.defineProperty(Element.prototype, "namespaceURI", {
    get: function namespaceURI() {
        Developer.log("[dev] Element.prototype namespaceURI 描述符 get 被调用了");
        return vmcore.propertymanager.Element.namespaceURI;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.prefix = undefined;
Object.defineProperty(Element.prototype, "prefix", {
    get: function prefix() {
        Developer.log("[dev] Element.prototype prefix 描述符 get 被调用了");
        return vmcore.propertymanager.Element.prefix;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.localName = undefined;
Object.defineProperty(Element.prototype, "localName", {
    get: function localName() {
        Developer.log("[dev] Element.prototype localName 描述符 get 被调用了");
        return vmcore.propertymanager.Element.localName;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.tagName = undefined;
Object.defineProperty(Element.prototype, "tagName", {
    get: function tagName() {
        Developer.log("[dev] Element.prototype tagName 描述符 get 被调用了");
        return vmcore.propertymanager.Element.tagName;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.id = undefined;
Object.defineProperty(Element.prototype, "id", {
    get: function id() {
        Developer.log("[dev] Element.prototype id 描述符 get 被调用了");
        return vmcore.propertymanager.Element.id;
    },
    set: function id(val) {
        Developer.log("[dev] Element.prototype id 描述符 set 被调用了");
        vmcore.propertymanager.Element.id = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.className = undefined;
Object.defineProperty(Element.prototype, "className", {
    get: function className() {
        Developer.log("[dev] Element.prototype className 描述符 get 被调用了");
        return vmcore.propertymanager.Element.className;
    },
    set: function className(val) {
        Developer.log("[dev] Element.prototype className 描述符 set 被调用了");
        vmcore.propertymanager.Element.className = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.classList = undefined;
Object.defineProperty(Element.prototype, "classList", {
    get: function classList() {
        Developer.log("[dev] Element.prototype classList 描述符 get 被调用了");
        return vmcore.propertymanager.Element.classList;
    },
    set: function classList(val) {
        Developer.log("[dev] Element.prototype classList 描述符 set 被调用了");
        vmcore.propertymanager.Element.classList = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.slot = undefined;
Object.defineProperty(Element.prototype, "slot", {
    get: function slot() {
        Developer.log("[dev] Element.prototype slot 描述符 get 被调用了");
        return vmcore.propertymanager.Element.slot;
    },
    set: function slot(val) {
        Developer.log("[dev] Element.prototype slot 描述符 set 被调用了");
        vmcore.propertymanager.Element.slot = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.attributes = undefined;
Object.defineProperty(Element.prototype, "attributes", {
    get: function attributes() {
        Developer.log("[dev] Element.prototype attributes 描述符 get 被调用了");
        return vmcore.propertymanager.Element.attributes;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.shadowRoot = undefined;
Object.defineProperty(Element.prototype, "shadowRoot", {
    get: function shadowRoot() {
        Developer.log("[dev] Element.prototype shadowRoot 描述符 get 被调用了");
        return vmcore.propertymanager.Element.shadowRoot;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.part = undefined;
Object.defineProperty(Element.prototype, "part", {
    get: function part() {
        Developer.log("[dev] Element.prototype part 描述符 get 被调用了");
        return vmcore.propertymanager.Element.part;
    },
    set: function part(val) {
        Developer.log("[dev] Element.prototype part 描述符 set 被调用了");
        vmcore.propertymanager.Element.part = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.assignedSlot = undefined;
Object.defineProperty(Element.prototype, "assignedSlot", {
    get: function assignedSlot() {
        Developer.log("[dev] Element.prototype assignedSlot 描述符 get 被调用了");
        return vmcore.propertymanager.Element.assignedSlot;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.innerHTML = undefined;
Object.defineProperty(Element.prototype, "innerHTML", {
    get: function innerHTML() {
        Developer.log("[dev] Element.prototype innerHTML 描述符 get 被调用了");
        return this._innerHTML ? this._innerHTML : "";
    },
    set: function innerHTML(val) {
        Developer.log("[dev] Element.prototype innerHTML 描述符 set 被调用了", val);

        this._innerHTML = val;
        if (val.indexOf('<a href') >= 0) {
            var tag = vmcore.memory.CreateElement["a"]();
            tag.href = "https://www.python-spider.com/challenge/11";
            this.firstChild = tag;
        } else {
            this.firstChild = val;
        }
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.outerHTML = undefined;
Object.defineProperty(Element.prototype, "outerHTML", {
    get: function outerHTML() {
        Developer.log("[dev] Element.prototype outerHTML 描述符 get 被调用了");
        return vmcore.propertymanager.Element.outerHTML;
    },
    set: function outerHTML(val) {
        Developer.log("[dev] Element.prototype outerHTML 描述符 set 被调用了");
        vmcore.propertymanager.Element.outerHTML = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.scrollTop = undefined;
Object.defineProperty(Element.prototype, "scrollTop", {
    get: function scrollTop() {
        Developer.log("[dev] Element.prototype scrollTop 描述符 get 被调用了");
        return vmcore.propertymanager.Element.scrollTop;
    },
    set: function scrollTop(val) {
        Developer.log("[dev] Element.prototype scrollTop 描述符 set 被调用了");
        vmcore.propertymanager.Element.scrollTop = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.scrollLeft = undefined;
Object.defineProperty(Element.prototype, "scrollLeft", {
    get: function scrollLeft() {
        Developer.log("[dev] Element.prototype scrollLeft 描述符 get 被调用了");
        return vmcore.propertymanager.Element.scrollLeft;
    },
    set: function scrollLeft(val) {
        Developer.log("[dev] Element.prototype scrollLeft 描述符 set 被调用了");
        vmcore.propertymanager.Element.scrollLeft = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.scrollWidth = undefined;
Object.defineProperty(Element.prototype, "scrollWidth", {
    get: function scrollWidth() {
        Developer.log("[dev] Element.prototype scrollWidth 描述符 get 被调用了");
        return vmcore.propertymanager.Element.scrollWidth;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.scrollHeight = undefined;
Object.defineProperty(Element.prototype, "scrollHeight", {
    get: function scrollHeight() {
        Developer.log("[dev] Element.prototype scrollHeight 描述符 get 被调用了");
        return vmcore.propertymanager.Element.scrollHeight;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.clientTop = undefined;
Object.defineProperty(Element.prototype, "clientTop", {
    get: function clientTop() {
        Developer.log("[dev] Element.prototype clientTop 描述符 get 被调用了");
        return vmcore.propertymanager.Element.clientTop;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.clientLeft = undefined;
Object.defineProperty(Element.prototype, "clientLeft", {
    get: function clientLeft() {
        Developer.log("[dev] Element.prototype clientLeft 描述符 get 被调用了");
        return vmcore.propertymanager.Element.clientLeft;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.clientWidth = undefined;
Object.defineProperty(Element.prototype, "clientWidth", {
    get: function clientWidth() {
        Developer.log("[dev] Element.prototype clientWidth 描述符 get 被调用了");
        return vmcore.propertymanager.Element.clientWidth;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.clientHeight = undefined;
Object.defineProperty(Element.prototype, "clientHeight", {
    get: function clientHeight() {
        Developer.log("[dev] Element.prototype clientHeight 描述符 get 被调用了");
        return vmcore.propertymanager.Element.clientHeight;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.onbeforecopy = undefined;
Object.defineProperty(Element.prototype, "onbeforecopy", {
    get: function onbeforecopy() {
        Developer.log("[dev] Element.prototype onbeforecopy 描述符 get 被调用了");
        return vmcore.propertymanager.Element.onbeforecopy;
    },
    set: function onbeforecopy(val) {
        Developer.log("[dev] Element.prototype onbeforecopy 描述符 set 被调用了");
        vmcore.propertymanager.Element.onbeforecopy = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.onbeforecut = undefined;
Object.defineProperty(Element.prototype, "onbeforecut", {
    get: function onbeforecut() {
        Developer.log("[dev] Element.prototype onbeforecut 描述符 get 被调用了");
        return vmcore.propertymanager.Element.onbeforecut;
    },
    set: function onbeforecut(val) {
        Developer.log("[dev] Element.prototype onbeforecut 描述符 set 被调用了");
        vmcore.propertymanager.Element.onbeforecut = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.onbeforepaste = undefined;
Object.defineProperty(Element.prototype, "onbeforepaste", {
    get: function onbeforepaste() {
        Developer.log("[dev] Element.prototype onbeforepaste 描述符 get 被调用了");
        return vmcore.propertymanager.Element.onbeforepaste;
    },
    set: function onbeforepaste(val) {
        Developer.log("[dev] Element.prototype onbeforepaste 描述符 set 被调用了");
        vmcore.propertymanager.Element.onbeforepaste = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.onsearch = undefined;
Object.defineProperty(Element.prototype, "onsearch", {
    get: function onsearch() {
        Developer.log("[dev] Element.prototype onsearch 描述符 get 被调用了");
        return vmcore.propertymanager.Element.onsearch;
    },
    set: function onsearch(val) {
        Developer.log("[dev] Element.prototype onsearch 描述符 set 被调用了");
        vmcore.propertymanager.Element.onsearch = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.elementTiming = undefined;
Object.defineProperty(Element.prototype, "elementTiming", {
    get: function elementTiming() {
        Developer.log("[dev] Element.prototype elementTiming 描述符 get 被调用了");
        return vmcore.propertymanager.Element.elementTiming;
    },
    set: function elementTiming(val) {
        Developer.log("[dev] Element.prototype elementTiming 描述符 set 被调用了");
        vmcore.propertymanager.Element.elementTiming = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.onfullscreenchange = undefined;
Object.defineProperty(Element.prototype, "onfullscreenchange", {
    get: function onfullscreenchange() {
        Developer.log("[dev] Element.prototype onfullscreenchange 描述符 get 被调用了");
        return vmcore.propertymanager.Element.onfullscreenchange;
    },
    set: function onfullscreenchange(val) {
        Developer.log("[dev] Element.prototype onfullscreenchange 描述符 set 被调用了");
        vmcore.propertymanager.Element.onfullscreenchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.onfullscreenerror = undefined;
Object.defineProperty(Element.prototype, "onfullscreenerror", {
    get: function onfullscreenerror() {
        Developer.log("[dev] Element.prototype onfullscreenerror 描述符 get 被调用了");
        return vmcore.propertymanager.Element.onfullscreenerror;
    },
    set: function onfullscreenerror(val) {
        Developer.log("[dev] Element.prototype onfullscreenerror 描述符 set 被调用了");
        vmcore.propertymanager.Element.onfullscreenerror = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.onwebkitfullscreenchange = undefined;
Object.defineProperty(Element.prototype, "onwebkitfullscreenchange", {
    get: function onwebkitfullscreenchange() {
        Developer.log("[dev] Element.prototype onwebkitfullscreenchange 描述符 get 被调用了");
        return vmcore.propertymanager.Element.onwebkitfullscreenchange;
    },
    set: function onwebkitfullscreenchange(val) {
        Developer.log("[dev] Element.prototype onwebkitfullscreenchange 描述符 set 被调用了");
        vmcore.propertymanager.Element.onwebkitfullscreenchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.onwebkitfullscreenerror = undefined;
Object.defineProperty(Element.prototype, "onwebkitfullscreenerror", {
    get: function onwebkitfullscreenerror() {
        Developer.log("[dev] Element.prototype onwebkitfullscreenerror 描述符 get 被调用了");
        return vmcore.propertymanager.Element.onwebkitfullscreenerror;
    },
    set: function onwebkitfullscreenerror(val) {
        Developer.log("[dev] Element.prototype onwebkitfullscreenerror 描述符 set 被调用了");
        vmcore.propertymanager.Element.onwebkitfullscreenerror = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.role = undefined;
Object.defineProperty(Element.prototype, "role", {
    get: function role() {
        Developer.log("[dev] Element.prototype role 描述符 get 被调用了");
        return vmcore.propertymanager.Element.role;
    },
    set: function role(val) {
        Developer.log("[dev] Element.prototype role 描述符 set 被调用了");
        vmcore.propertymanager.Element.role = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaAtomic = undefined;
Object.defineProperty(Element.prototype, "ariaAtomic", {
    get: function ariaAtomic() {
        Developer.log("[dev] Element.prototype ariaAtomic 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaAtomic;
    },
    set: function ariaAtomic(val) {
        Developer.log("[dev] Element.prototype ariaAtomic 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaAtomic = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaAutoComplete = undefined;
Object.defineProperty(Element.prototype, "ariaAutoComplete", {
    get: function ariaAutoComplete() {
        Developer.log("[dev] Element.prototype ariaAutoComplete 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaAutoComplete;
    },
    set: function ariaAutoComplete(val) {
        Developer.log("[dev] Element.prototype ariaAutoComplete 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaAutoComplete = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaBusy = undefined;
Object.defineProperty(Element.prototype, "ariaBusy", {
    get: function ariaBusy() {
        Developer.log("[dev] Element.prototype ariaBusy 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaBusy;
    },
    set: function ariaBusy(val) {
        Developer.log("[dev] Element.prototype ariaBusy 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaBusy = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaBrailleLabel = undefined;
Object.defineProperty(Element.prototype, "ariaBrailleLabel", {
    get: function ariaBrailleLabel() {
        Developer.log("[dev] Element.prototype ariaBrailleLabel 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaBrailleLabel;
    },
    set: function ariaBrailleLabel(val) {
        Developer.log("[dev] Element.prototype ariaBrailleLabel 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaBrailleLabel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaBrailleRoleDescription = undefined;
Object.defineProperty(Element.prototype, "ariaBrailleRoleDescription", {
    get: function ariaBrailleRoleDescription() {
        Developer.log("[dev] Element.prototype ariaBrailleRoleDescription 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaBrailleRoleDescription;
    },
    set: function ariaBrailleRoleDescription(val) {
        Developer.log("[dev] Element.prototype ariaBrailleRoleDescription 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaBrailleRoleDescription = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaChecked = undefined;
Object.defineProperty(Element.prototype, "ariaChecked", {
    get: function ariaChecked() {
        Developer.log("[dev] Element.prototype ariaChecked 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaChecked;
    },
    set: function ariaChecked(val) {
        Developer.log("[dev] Element.prototype ariaChecked 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaChecked = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaColCount = undefined;
Object.defineProperty(Element.prototype, "ariaColCount", {
    get: function ariaColCount() {
        Developer.log("[dev] Element.prototype ariaColCount 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaColCount;
    },
    set: function ariaColCount(val) {
        Developer.log("[dev] Element.prototype ariaColCount 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaColCount = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaColIndex = undefined;
Object.defineProperty(Element.prototype, "ariaColIndex", {
    get: function ariaColIndex() {
        Developer.log("[dev] Element.prototype ariaColIndex 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaColIndex;
    },
    set: function ariaColIndex(val) {
        Developer.log("[dev] Element.prototype ariaColIndex 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaColIndex = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaColSpan = undefined;
Object.defineProperty(Element.prototype, "ariaColSpan", {
    get: function ariaColSpan() {
        Developer.log("[dev] Element.prototype ariaColSpan 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaColSpan;
    },
    set: function ariaColSpan(val) {
        Developer.log("[dev] Element.prototype ariaColSpan 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaColSpan = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaCurrent = undefined;
Object.defineProperty(Element.prototype, "ariaCurrent", {
    get: function ariaCurrent() {
        Developer.log("[dev] Element.prototype ariaCurrent 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaCurrent;
    },
    set: function ariaCurrent(val) {
        Developer.log("[dev] Element.prototype ariaCurrent 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaCurrent = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaDescription = undefined;
Object.defineProperty(Element.prototype, "ariaDescription", {
    get: function ariaDescription() {
        Developer.log("[dev] Element.prototype ariaDescription 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaDescription;
    },
    set: function ariaDescription(val) {
        Developer.log("[dev] Element.prototype ariaDescription 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaDescription = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaDisabled = undefined;
Object.defineProperty(Element.prototype, "ariaDisabled", {
    get: function ariaDisabled() {
        Developer.log("[dev] Element.prototype ariaDisabled 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaDisabled;
    },
    set: function ariaDisabled(val) {
        Developer.log("[dev] Element.prototype ariaDisabled 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaDisabled = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaExpanded = undefined;
Object.defineProperty(Element.prototype, "ariaExpanded", {
    get: function ariaExpanded() {
        Developer.log("[dev] Element.prototype ariaExpanded 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaExpanded;
    },
    set: function ariaExpanded(val) {
        Developer.log("[dev] Element.prototype ariaExpanded 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaExpanded = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaHasPopup = undefined;
Object.defineProperty(Element.prototype, "ariaHasPopup", {
    get: function ariaHasPopup() {
        Developer.log("[dev] Element.prototype ariaHasPopup 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaHasPopup;
    },
    set: function ariaHasPopup(val) {
        Developer.log("[dev] Element.prototype ariaHasPopup 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaHasPopup = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaHidden = undefined;
Object.defineProperty(Element.prototype, "ariaHidden", {
    get: function ariaHidden() {
        Developer.log("[dev] Element.prototype ariaHidden 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaHidden;
    },
    set: function ariaHidden(val) {
        Developer.log("[dev] Element.prototype ariaHidden 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaHidden = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaInvalid = undefined;
Object.defineProperty(Element.prototype, "ariaInvalid", {
    get: function ariaInvalid() {
        Developer.log("[dev] Element.prototype ariaInvalid 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaInvalid;
    },
    set: function ariaInvalid(val) {
        Developer.log("[dev] Element.prototype ariaInvalid 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaInvalid = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaKeyShortcuts = undefined;
Object.defineProperty(Element.prototype, "ariaKeyShortcuts", {
    get: function ariaKeyShortcuts() {
        Developer.log("[dev] Element.prototype ariaKeyShortcuts 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaKeyShortcuts;
    },
    set: function ariaKeyShortcuts(val) {
        Developer.log("[dev] Element.prototype ariaKeyShortcuts 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaKeyShortcuts = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaLabel = undefined;
Object.defineProperty(Element.prototype, "ariaLabel", {
    get: function ariaLabel() {
        Developer.log("[dev] Element.prototype ariaLabel 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaLabel;
    },
    set: function ariaLabel(val) {
        Developer.log("[dev] Element.prototype ariaLabel 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaLabel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaLevel = undefined;
Object.defineProperty(Element.prototype, "ariaLevel", {
    get: function ariaLevel() {
        Developer.log("[dev] Element.prototype ariaLevel 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaLevel;
    },
    set: function ariaLevel(val) {
        Developer.log("[dev] Element.prototype ariaLevel 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaLevel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaLive = undefined;
Object.defineProperty(Element.prototype, "ariaLive", {
    get: function ariaLive() {
        Developer.log("[dev] Element.prototype ariaLive 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaLive;
    },
    set: function ariaLive(val) {
        Developer.log("[dev] Element.prototype ariaLive 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaLive = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaModal = undefined;
Object.defineProperty(Element.prototype, "ariaModal", {
    get: function ariaModal() {
        Developer.log("[dev] Element.prototype ariaModal 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaModal;
    },
    set: function ariaModal(val) {
        Developer.log("[dev] Element.prototype ariaModal 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaModal = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaMultiLine = undefined;
Object.defineProperty(Element.prototype, "ariaMultiLine", {
    get: function ariaMultiLine() {
        Developer.log("[dev] Element.prototype ariaMultiLine 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaMultiLine;
    },
    set: function ariaMultiLine(val) {
        Developer.log("[dev] Element.prototype ariaMultiLine 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaMultiLine = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaMultiSelectable = undefined;
Object.defineProperty(Element.prototype, "ariaMultiSelectable", {
    get: function ariaMultiSelectable() {
        Developer.log("[dev] Element.prototype ariaMultiSelectable 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaMultiSelectable;
    },
    set: function ariaMultiSelectable(val) {
        Developer.log("[dev] Element.prototype ariaMultiSelectable 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaMultiSelectable = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaOrientation = undefined;
Object.defineProperty(Element.prototype, "ariaOrientation", {
    get: function ariaOrientation() {
        Developer.log("[dev] Element.prototype ariaOrientation 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaOrientation;
    },
    set: function ariaOrientation(val) {
        Developer.log("[dev] Element.prototype ariaOrientation 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaOrientation = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaPlaceholder = undefined;
Object.defineProperty(Element.prototype, "ariaPlaceholder", {
    get: function ariaPlaceholder() {
        Developer.log("[dev] Element.prototype ariaPlaceholder 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaPlaceholder;
    },
    set: function ariaPlaceholder(val) {
        Developer.log("[dev] Element.prototype ariaPlaceholder 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaPlaceholder = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaPosInSet = undefined;
Object.defineProperty(Element.prototype, "ariaPosInSet", {
    get: function ariaPosInSet() {
        Developer.log("[dev] Element.prototype ariaPosInSet 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaPosInSet;
    },
    set: function ariaPosInSet(val) {
        Developer.log("[dev] Element.prototype ariaPosInSet 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaPosInSet = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaPressed = undefined;
Object.defineProperty(Element.prototype, "ariaPressed", {
    get: function ariaPressed() {
        Developer.log("[dev] Element.prototype ariaPressed 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaPressed;
    },
    set: function ariaPressed(val) {
        Developer.log("[dev] Element.prototype ariaPressed 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaPressed = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaReadOnly = undefined;
Object.defineProperty(Element.prototype, "ariaReadOnly", {
    get: function ariaReadOnly() {
        Developer.log("[dev] Element.prototype ariaReadOnly 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaReadOnly;
    },
    set: function ariaReadOnly(val) {
        Developer.log("[dev] Element.prototype ariaReadOnly 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaReadOnly = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaRelevant = undefined;
Object.defineProperty(Element.prototype, "ariaRelevant", {
    get: function ariaRelevant() {
        Developer.log("[dev] Element.prototype ariaRelevant 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaRelevant;
    },
    set: function ariaRelevant(val) {
        Developer.log("[dev] Element.prototype ariaRelevant 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaRelevant = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaRequired = undefined;
Object.defineProperty(Element.prototype, "ariaRequired", {
    get: function ariaRequired() {
        Developer.log("[dev] Element.prototype ariaRequired 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaRequired;
    },
    set: function ariaRequired(val) {
        Developer.log("[dev] Element.prototype ariaRequired 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaRequired = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaRoleDescription = undefined;
Object.defineProperty(Element.prototype, "ariaRoleDescription", {
    get: function ariaRoleDescription() {
        Developer.log("[dev] Element.prototype ariaRoleDescription 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaRoleDescription;
    },
    set: function ariaRoleDescription(val) {
        Developer.log("[dev] Element.prototype ariaRoleDescription 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaRoleDescription = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaRowCount = undefined;
Object.defineProperty(Element.prototype, "ariaRowCount", {
    get: function ariaRowCount() {
        Developer.log("[dev] Element.prototype ariaRowCount 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaRowCount;
    },
    set: function ariaRowCount(val) {
        Developer.log("[dev] Element.prototype ariaRowCount 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaRowCount = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaRowIndex = undefined;
Object.defineProperty(Element.prototype, "ariaRowIndex", {
    get: function ariaRowIndex() {
        Developer.log("[dev] Element.prototype ariaRowIndex 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaRowIndex;
    },
    set: function ariaRowIndex(val) {
        Developer.log("[dev] Element.prototype ariaRowIndex 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaRowIndex = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaRowSpan = undefined;
Object.defineProperty(Element.prototype, "ariaRowSpan", {
    get: function ariaRowSpan() {
        Developer.log("[dev] Element.prototype ariaRowSpan 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaRowSpan;
    },
    set: function ariaRowSpan(val) {
        Developer.log("[dev] Element.prototype ariaRowSpan 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaRowSpan = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaSelected = undefined;
Object.defineProperty(Element.prototype, "ariaSelected", {
    get: function ariaSelected() {
        Developer.log("[dev] Element.prototype ariaSelected 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaSelected;
    },
    set: function ariaSelected(val) {
        Developer.log("[dev] Element.prototype ariaSelected 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaSelected = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaSetSize = undefined;
Object.defineProperty(Element.prototype, "ariaSetSize", {
    get: function ariaSetSize() {
        Developer.log("[dev] Element.prototype ariaSetSize 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaSetSize;
    },
    set: function ariaSetSize(val) {
        Developer.log("[dev] Element.prototype ariaSetSize 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaSetSize = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaSort = undefined;
Object.defineProperty(Element.prototype, "ariaSort", {
    get: function ariaSort() {
        Developer.log("[dev] Element.prototype ariaSort 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaSort;
    },
    set: function ariaSort(val) {
        Developer.log("[dev] Element.prototype ariaSort 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaSort = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaValueMax = undefined;
Object.defineProperty(Element.prototype, "ariaValueMax", {
    get: function ariaValueMax() {
        Developer.log("[dev] Element.prototype ariaValueMax 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaValueMax;
    },
    set: function ariaValueMax(val) {
        Developer.log("[dev] Element.prototype ariaValueMax 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaValueMax = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaValueMin = undefined;
Object.defineProperty(Element.prototype, "ariaValueMin", {
    get: function ariaValueMin() {
        Developer.log("[dev] Element.prototype ariaValueMin 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaValueMin;
    },
    set: function ariaValueMin(val) {
        Developer.log("[dev] Element.prototype ariaValueMin 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaValueMin = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaValueNow = undefined;
Object.defineProperty(Element.prototype, "ariaValueNow", {
    get: function ariaValueNow() {
        Developer.log("[dev] Element.prototype ariaValueNow 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaValueNow;
    },
    set: function ariaValueNow(val) {
        Developer.log("[dev] Element.prototype ariaValueNow 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaValueNow = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.ariaValueText = undefined;
Object.defineProperty(Element.prototype, "ariaValueText", {
    get: function ariaValueText() {
        Developer.log("[dev] Element.prototype ariaValueText 描述符 get 被调用了");
        return vmcore.propertymanager.Element.ariaValueText;
    },
    set: function ariaValueText(val) {
        Developer.log("[dev] Element.prototype ariaValueText 描述符 set 被调用了");
        vmcore.propertymanager.Element.ariaValueText = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.children = undefined;
Object.defineProperty(Element.prototype, "children", {
    get: function children() {
        Developer.log("[dev] Element.prototype children 描述符 get 被调用了");
        return vmcore.propertymanager.Element.children;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.firstElementChild = undefined;
Object.defineProperty(Element.prototype, "firstElementChild", {
    get: function firstElementChild() {
        Developer.log("[dev] Element.prototype firstElementChild 描述符 get 被调用了");
        return vmcore.propertymanager.Element.firstElementChild;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.lastElementChild = undefined;
Object.defineProperty(Element.prototype, "lastElementChild", {
    get: function lastElementChild() {
        Developer.log("[dev] Element.prototype lastElementChild 描述符 get 被调用了");
        return vmcore.propertymanager.Element.lastElementChild;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.childElementCount = undefined;
Object.defineProperty(Element.prototype, "childElementCount", {
    get: function childElementCount() {
        Developer.log("[dev] Element.prototype childElementCount 描述符 get 被调用了");
        return vmcore.propertymanager.Element.childElementCount;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.previousElementSibling = undefined;
Object.defineProperty(Element.prototype, "previousElementSibling", {
    get: function previousElementSibling() {
        Developer.log("[dev] Element.prototype previousElementSibling 描述符 get 被调用了");
        return vmcore.propertymanager.Element.previousElementSibling;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Element.nextElementSibling = undefined;
Object.defineProperty(Element.prototype, "nextElementSibling", {
    get: function nextElementSibling() {
        Developer.log("[dev] Element.prototype nextElementSibling 描述符 get 被调用了");
        return vmcore.propertymanager.Element.nextElementSibling;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(Element.prototype, "after", {
    value: function after() {
        Developer.log("[dev] Element.prototype after 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.after);

Object.defineProperty(Element.prototype, "animate", {
    value: function animate() {
        Developer.log("[dev] Element.prototype animate 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.animate);

Object.defineProperty(Element.prototype, "append", {
    value: function append() {
        Developer.log("[dev] Element.prototype append 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.append);

Object.defineProperty(Element.prototype, "attachShadow", {
    value: function attachShadow() {
        Developer.log("[dev] Element.prototype attachShadow 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.attachShadow);

Object.defineProperty(Element.prototype, "before", {
    value: function before() {
        Developer.log("[dev] Element.prototype before 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.before);

Object.defineProperty(Element.prototype, "checkVisibility", {
    value: function checkVisibility() {
        Developer.log("[dev] Element.prototype checkVisibility 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.checkVisibility);

Object.defineProperty(Element.prototype, "closest", {
    value: function closest() {
        Developer.log("[dev] Element.prototype closest 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.closest);

Object.defineProperty(Element.prototype, "computedStyleMap", {
    value: function computedStyleMap() {
        Developer.log("[dev] Element.prototype computedStyleMap 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.computedStyleMap);

Object.defineProperty(Element.prototype, "getAnimations", {
    value: function getAnimations() {
        Developer.log("[dev] Element.prototype getAnimations 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getAnimations);

Object.defineProperty(Element.prototype, "getAttribute", {
    value: function getAttribute(name) {
        Developer.log("[dev] Element.prototype getAttribute 描述符 value 被调用了", "atrr: ", name, "this: ", this.constructor.name);

        if(this.constructor.name == "HTMLScriptElement" || this.localName == "script"){
            return "m";
        }
        else if (this.markname && this.markname.indexOf("meta") > -1){
            return "m";
        }

        return null;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getAttribute);

Object.defineProperty(Element.prototype, "getAttributeNS", {
    value: function getAttributeNS() {
        Developer.log("[dev] Element.prototype getAttributeNS 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getAttributeNS);

Object.defineProperty(Element.prototype, "getAttributeNames", {
    value: function getAttributeNames() {
        Developer.log("[dev] Element.prototype getAttributeNames 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getAttributeNames);

Object.defineProperty(Element.prototype, "getAttributeNode", {
    value: function getAttributeNode() {
        Developer.log("[dev] Element.prototype getAttributeNode 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getAttributeNode);

Object.defineProperty(Element.prototype, "getAttributeNodeNS", {
    value: function getAttributeNodeNS() {
        Developer.log("[dev] Element.prototype getAttributeNodeNS 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getAttributeNodeNS);

Object.defineProperty(Element.prototype, "getBoundingClientRect", {
    value: function getBoundingClientRect() {
        Developer.log("[dev] Element.prototype getBoundingClientRect 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getBoundingClientRect);

Object.defineProperty(Element.prototype, "getClientRects", {
    value: function getClientRects() {
        Developer.log("[dev] Element.prototype getClientRects 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getClientRects);

Object.defineProperty(Element.prototype, "getElementsByClassName", {
    value: function getElementsByClassName() {
        Developer.log("[dev] Element.prototype getElementsByClassName 描述符 value 被调用了");

        var empty_list = [];
        empty_list.__proto__ = HTMLCollection.prototype;
        return empty_list;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getElementsByClassName);

Object.defineProperty(Element.prototype, "getElementsByTagName", {
    value: function getElementsByTagName(tagName) {
        Developer.log("[dev] Element.prototype getElementsByTagName 描述符 value 被调用了", tagName, "this->", this.constructor.name);
        var element_list = [];
        element_list.__proto__ = HTMLCollection.prototype;
        return element_list;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getElementsByTagName);

Object.defineProperty(Element.prototype, "getElementsByTagNameNS", {
    value: function getElementsByTagNameNS() {
        Developer.log("[dev] Element.prototype getElementsByTagNameNS 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getElementsByTagNameNS);

Object.defineProperty(Element.prototype, "getHTML", {
    value: function getHTML() {
        Developer.log("[dev] Element.prototype getHTML 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getHTML);

Object.defineProperty(Element.prototype, "hasAttribute", {
    value: function hasAttribute() {
        Developer.log("[dev] Element.prototype hasAttribute 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.hasAttribute);

Object.defineProperty(Element.prototype, "hasAttributeNS", {
    value: function hasAttributeNS() {
        Developer.log("[dev] Element.prototype hasAttributeNS 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.hasAttributeNS);

Object.defineProperty(Element.prototype, "hasAttributes", {
    value: function hasAttributes() {
        Developer.log("[dev] Element.prototype hasAttributes 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.hasAttributes);

Object.defineProperty(Element.prototype, "hasPointerCapture", {
    value: function hasPointerCapture() {
        Developer.log("[dev] Element.prototype hasPointerCapture 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.hasPointerCapture);

Object.defineProperty(Element.prototype, "insertAdjacentElement", {
    value: function insertAdjacentElement() {
        Developer.log("[dev] Element.prototype insertAdjacentElement 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.insertAdjacentElement);

Object.defineProperty(Element.prototype, "insertAdjacentHTML", {
    value: function insertAdjacentHTML() {
        Developer.log("[dev] Element.prototype insertAdjacentHTML 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.insertAdjacentHTML);

Object.defineProperty(Element.prototype, "insertAdjacentText", {
    value: function insertAdjacentText() {
        Developer.log("[dev] Element.prototype insertAdjacentText 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.insertAdjacentText);

Object.defineProperty(Element.prototype, "matches", {
    value: function matches() {
        Developer.log("[dev] Element.prototype matches 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.matches);

Object.defineProperty(Element.prototype, "prepend", {
    value: function prepend() {
        Developer.log("[dev] Element.prototype prepend 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.prepend);

Object.defineProperty(Element.prototype, "querySelector", {
    value: function querySelector() {
        Developer.log("[dev] Element.prototype querySelector 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.querySelector);

Object.defineProperty(Element.prototype, "querySelectorAll", {
    value: function querySelectorAll() {
        Developer.log("[dev] Element.prototype querySelectorAll 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.querySelectorAll);

Object.defineProperty(Element.prototype, "releasePointerCapture", {
    value: function releasePointerCapture() {
        Developer.log("[dev] Element.prototype releasePointerCapture 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.releasePointerCapture);

Object.defineProperty(Element.prototype, "remove", {
    value: function remove() {
        Developer.log("[dev] Element.prototype remove 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.remove);

Object.defineProperty(Element.prototype, "removeAttribute", {
    value: function removeAttribute() {
        Developer.log("[dev] Element.prototype removeAttribute 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.removeAttribute);

Object.defineProperty(Element.prototype, "removeAttributeNS", {
    value: function removeAttributeNS() {
        Developer.log("[dev] Element.prototype removeAttributeNS 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.removeAttributeNS);

Object.defineProperty(Element.prototype, "removeAttributeNode", {
    value: function removeAttributeNode() {
        Developer.log("[dev] Element.prototype removeAttributeNode 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.removeAttributeNode);

Object.defineProperty(Element.prototype, "replaceChildren", {
    value: function replaceChildren() {
        Developer.log("[dev] Element.prototype replaceChildren 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.replaceChildren);

Object.defineProperty(Element.prototype, "replaceWith", {
    value: function replaceWith() {
        Developer.log("[dev] Element.prototype replaceWith 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.replaceWith);

Object.defineProperty(Element.prototype, "requestFullscreen", {
    value: function requestFullscreen() {
        Developer.log("[dev] Element.prototype requestFullscreen 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.requestFullscreen);

Object.defineProperty(Element.prototype, "requestPointerLock", {
    value: function requestPointerLock() {
        Developer.log("[dev] Element.prototype requestPointerLock 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.requestPointerLock);

Object.defineProperty(Element.prototype, "scroll", {
    value: function scroll() {
        Developer.log("[dev] Element.prototype scroll 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.scroll);

Object.defineProperty(Element.prototype, "scrollBy", {
    value: function scrollBy() {
        Developer.log("[dev] Element.prototype scrollBy 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.scrollBy);

Object.defineProperty(Element.prototype, "scrollIntoView", {
    value: function scrollIntoView() {
        Developer.log("[dev] Element.prototype scrollIntoView 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.scrollIntoView);

Object.defineProperty(Element.prototype, "scrollIntoViewIfNeeded", {
    value: function scrollIntoViewIfNeeded() {
        Developer.log("[dev] Element.prototype scrollIntoViewIfNeeded 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.scrollIntoViewIfNeeded);

Object.defineProperty(Element.prototype, "scrollTo", {
    value: function scrollTo() {
        Developer.log("[dev] Element.prototype scrollTo 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.scrollTo);

Object.defineProperty(Element.prototype, "setAttribute", {
    value: function setAttribute() {
        Developer.log("[dev] Element.prototype setAttribute 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.setAttribute);

Object.defineProperty(Element.prototype, "setAttributeNS", {
    value: function setAttributeNS() {
        Developer.log("[dev] Element.prototype setAttributeNS 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.setAttributeNS);

Object.defineProperty(Element.prototype, "setAttributeNode", {
    value: function setAttributeNode() {
        Developer.log("[dev] Element.prototype setAttributeNode 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.setAttributeNode);

Object.defineProperty(Element.prototype, "setAttributeNodeNS", {
    value: function setAttributeNodeNS() {
        Developer.log("[dev] Element.prototype setAttributeNodeNS 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.setAttributeNodeNS);

Object.defineProperty(Element.prototype, "setPointerCapture", {
    value: function setPointerCapture() {
        Developer.log("[dev] Element.prototype setPointerCapture 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.setPointerCapture);

Object.defineProperty(Element.prototype, "toggleAttribute", {
    value: function toggleAttribute() {
        Developer.log("[dev] Element.prototype toggleAttribute 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.toggleAttribute);

Object.defineProperty(Element.prototype, "webkitMatchesSelector", {
    value: function webkitMatchesSelector() {
        Developer.log("[dev] Element.prototype webkitMatchesSelector 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.webkitMatchesSelector);

Object.defineProperty(Element.prototype, "webkitRequestFullScreen", {
    value: function webkitRequestFullScreen() {
        Developer.log("[dev] Element.prototype webkitRequestFullScreen 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.webkitRequestFullScreen);

Object.defineProperty(Element.prototype, "webkitRequestFullscreen", {
    value: function webkitRequestFullscreen() {
        Developer.log("[dev] Element.prototype webkitRequestFullscreen 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.webkitRequestFullscreen);

Object.defineProperty(Element.prototype, "getInnerHTML", {
    value: function getInnerHTML() {
        Developer.log("[dev] Element.prototype getInnerHTML 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.getInnerHTML);

Object.defineProperty(Element.prototype, "setHTMLUnsafe", {
    value: function setHTMLUnsafe() {
        Developer.log("[dev] Element.prototype setHTMLUnsafe 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Element.prototype.setHTMLUnsafe);


//--------------------------------------------------------

