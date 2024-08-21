Document = function Document() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(Document);

Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});

Document.__proto__ = Node;
Document.prototype.__proto__ = Node.prototype;

vmcore.propertymanager.Document = {};


// -------------------------------------------------------------
//创建元素(标签)，根据名称去创建
Object.defineProperty(Document.prototype, "documentElement", {
    get: function () {
        Developer.log("[dev] Document.prototype documentElement 描述符 get 被调用了");
        
        //lesson24特殊处理
        // if(location.href.indexOf("python-spider.com") >=0){
        //     Developer.log("documentElement >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        //     return undefined;
        // }

        if (this instanceof Document) {
            return vmcore.memory.elements.html;  //唯一
        } else {
            throw new TypeError("Illegal invocation");
        }


    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

//document.head
Object.defineProperty(Document.prototype, "head", {
    get: function () {
        Developer.log("[dev] Document.prototype head 描述符 get 被调用了");

        if (this instanceof Document) {
            return vmcore.memory.elements.head;  //唯一
        } else {
            throw new TypeError("Illegal invocation");
        }
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

//document.body
Object.defineProperty(Document.prototype, "body", {
    get: function () {
        Developer.log("[dev] Document.prototype body 描述符 get 被调用了");

        //lesson24特殊处理
        // if(location.href.indexOf("python-spider.com") >=0){
        //     Developer.log("Document.prototype.body >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        //     let obj = {};
        //     obj.__proto__ = HTMLBodyElement.prototype;
        //     return obj;
        // }
        return vmcore.memory.elements.body;
    },
    set: function body(val) {
        Developer.log("[dev] Document.prototype body 描述符 set 被调用了");
        vmcore.memory.elements.body = val;
    },
    enumerable: true,
    configurable: true,
})

//document.all
Object.defineProperty(Document.prototype, "all", {
    configurable: true,
    enumerable: true,
    set: undefined,
    get: function () {
        Developer.log("[dev] Document.prototype all 描述符 get 被调用了");

        var empty_list = [...vmcore.memory.elements];
        empty_list.__proto__ = HTMLAllCollection.prototype;
        return empty_list;
    }
})


/*document.cookie的获取和设置都比较特殊，所以特殊处理 
let vmcore ={};
vmcore.memory = {};
vmcore.memory.cookie_copy = {};
 */
Object.defineProperty(Document.prototype, "cookie", {
    enumerable: true,
    configurable: true,
    get: function () {
        Developer.log("[dev] Document.prototype cookie 描述符 get 被调用了");

        if (!(this instanceof Document)) {
            throw new TypeError("Illegal invocation");
        }

        // return this.totalProp.cookie;
        let list = [];
        for (let key in vmcore.memory.cookie_copy) {
            list.push(`${key}=${vmcore.memory.cookie_copy[key]}`);
        }

        var retval = list.join("; ");
        console.log("获取cookie成功!");
        return retval;
    },
    set: function (val) {
        Developer.log("[dev] Document.prototype cookie 描述符 set 被调用了", val);

        if (!(this instanceof Document)) {
            throw new TypeError("Illegal invocation");
        }
        if (val == '') {
            return;
        }
        console.log("设置cookie成功", val);

        let validstr = val.split(";")[0];
        let [key, value] = validstr.trim().split("=");
        vmcore.memory.cookie_copy[key] = value;

        // if (val.indexOf("domain=") > 0 || val.indexOf("expires=") > 0) {
        //     let validstr = val.split(";")[0];
        //     let [key, value] = validstr.trim().split("=");
        //     vmcore.memory.cookie_copy[key] = value;
        // }
        // let validstr_list = val.split(";");
        // for (let validstr of validstr_list) {
        //     let [key, value] = validstr.trim().split("=");
        //     vmcore.memory.cookie_copy[key] = value;
        // }
    }
});



vmcore.propertymanager.Document.implementation = null;
Object.defineProperty(Document.prototype, "implementation", {
    get: function implementation() {
        Developer.log("[dev] Document.prototype implementation 描述符 get 被调用了");
        return vmcore.propertymanager.Document.implementation;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.URL = "https://www.baidu.com/";
Object.defineProperty(Document.prototype, "URL", {
    get: function URL() {
        Developer.log("[dev] Document.prototype URL 描述符 get 被调用了");
        return vmcore.propertymanager.Document.URL;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.documentURI = "https://www.baidu.com/";
Object.defineProperty(Document.prototype, "documentURI", {
    get: function documentURI() {
        Developer.log("[dev] Document.prototype documentURI 描述符 get 被调用了");
        return vmcore.propertymanager.Document.documentURI;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.compatMode = "CSS1Compat";
Object.defineProperty(Document.prototype, "compatMode", {
    get: function compatMode() {
        Developer.log("[dev] Document.prototype compatMode 描述符 get 被调用了");
        return vmcore.propertymanager.Document.compatMode;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.characterSet = "UTF-8";
Object.defineProperty(Document.prototype, "characterSet", {
    get: function characterSet() {
        Developer.log("[dev] Document.prototype characterSet 描述符 get 被调用了");
        return vmcore.propertymanager.Document.characterSet;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.charset = "UTF-8";
Object.defineProperty(Document.prototype, "charset", {
    get: function charset() {
        Developer.log("[dev] Document.prototype charset 描述符 get 被调用了");
        return vmcore.propertymanager.Document.charset;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.inputEncoding = "UTF-8";
Object.defineProperty(Document.prototype, "inputEncoding", {
    get: function inputEncoding() {
        Developer.log("[dev] Document.prototype inputEncoding 描述符 get 被调用了");
        return vmcore.propertymanager.Document.inputEncoding;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.contentType = "text/html";
Object.defineProperty(Document.prototype, "contentType", {
    get: function contentType() {
        Developer.log("[dev] Document.prototype contentType 描述符 get 被调用了");
        return vmcore.propertymanager.Document.contentType;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.doctype = null;
Object.defineProperty(Document.prototype, "doctype", {
    get: function doctype() {
        Developer.log("[dev] Document.prototype doctype 描述符 get 被调用了");
        return vmcore.propertymanager.Document.doctype;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});


vmcore.propertymanager.Document.xmlEncoding = null;
Object.defineProperty(Document.prototype, "xmlEncoding", {
    get: function xmlEncoding() {
        Developer.log("[dev] Document.prototype xmlEncoding 描述符 get 被调用了");
        return vmcore.propertymanager.Document.xmlEncoding;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.xmlVersion = null;
Object.defineProperty(Document.prototype, "xmlVersion", {
    get: function xmlVersion() {
        Developer.log("[dev] Document.prototype xmlVersion 描述符 get 被调用了");
        return vmcore.propertymanager.Document.xmlVersion;
    },
    set: function xmlVersion(val) {
        Developer.log("[dev] Document.prototype xmlVersion 描述符 set 被调用了");
        vmcore.propertymanager.Document.xmlVersion = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.xmlStandalone = false;
Object.defineProperty(Document.prototype, "xmlStandalone", {
    get: function xmlStandalone() {
        Developer.log("[dev] Document.prototype xmlStandalone 描述符 get 被调用了");
        return vmcore.propertymanager.Document.xmlStandalone;
    },
    set: function xmlStandalone(val) {
        Developer.log("[dev] Document.prototype xmlStandalone 描述符 set 被调用了");
        vmcore.propertymanager.Document.xmlStandalone = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.domain = "www.baidu.com";
Object.defineProperty(Document.prototype, "domain", {
    get: function domain() {
        Developer.log("[dev] Document.prototype domain 描述符 get 被调用了");
        return vmcore.propertymanager.Document.domain;
    },
    set: function domain(val) {
        Developer.log("[dev] Document.prototype domain 描述符 set 被调用了");
        vmcore.propertymanager.Document.domain = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.referrer = "";
Object.defineProperty(Document.prototype, "referrer", {
    get: function referrer() {
        Developer.log("[dev] Document.prototype referrer 描述符 get 被调用了");
        return vmcore.propertymanager.Document.referrer;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});


vmcore.propertymanager.Document.lastModified = "08/15/2024 23:03:18";
Object.defineProperty(Document.prototype, "lastModified", {
    get: function lastModified() {
        Developer.log("[dev] Document.prototype lastModified 描述符 get 被调用了");
        return vmcore.propertymanager.Document.lastModified;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.readyState = "complete";
Object.defineProperty(Document.prototype, "readyState", {
    get: function readyState() {
        Developer.log("[dev] Document.prototype readyState 描述符 get 被调用了");
        return vmcore.propertymanager.Document.readyState;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.title = "百度一下，你就知道";
Object.defineProperty(Document.prototype, "title", {
    get: function title() {
        Developer.log("[dev] Document.prototype title 描述符 get 被调用了");
        return vmcore.propertymanager.Document.title;
    },
    set: function title(val) {
        Developer.log("[dev] Document.prototype title 描述符 set 被调用了");
        vmcore.propertymanager.Document.title = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.dir = "";
Object.defineProperty(Document.prototype, "dir", {
    get: function dir() {
        Developer.log("[dev] Document.prototype dir 描述符 get 被调用了");
        return vmcore.propertymanager.Document.dir;
    },
    set: function dir(val) {
        Developer.log("[dev] Document.prototype dir 描述符 set 被调用了");
        vmcore.propertymanager.Document.dir = val;
    },
    enumerable: true,
    configurable: true,
});


vmcore.propertymanager.Document.images = null;
Object.defineProperty(Document.prototype, "images", {
    get: function images() {
        Developer.log("[dev] Document.prototype images 描述符 get 被调用了");
        return vmcore.propertymanager.Document.images;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.embeds = null;
Object.defineProperty(Document.prototype, "embeds", {
    get: function embeds() {
        Developer.log("[dev] Document.prototype embeds 描述符 get 被调用了");
        return vmcore.propertymanager.Document.embeds;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.plugins = null;
Object.defineProperty(Document.prototype, "plugins", {
    get: function plugins() {
        Developer.log("[dev] Document.prototype plugins 描述符 get 被调用了");
        return vmcore.propertymanager.Document.plugins;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.links = null;
Object.defineProperty(Document.prototype, "links", {
    get: function links() {
        Developer.log("[dev] Document.prototype links 描述符 get 被调用了");
        return vmcore.propertymanager.Document.links;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.forms = null;
Object.defineProperty(Document.prototype, "forms", {
    get: function forms() {
        Developer.log("[dev] Document.prototype forms 描述符 get 被调用了");
        return vmcore.propertymanager.Document.forms;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.scripts = null;
Object.defineProperty(Document.prototype, "scripts", {
    get: function scripts() {
        Developer.log("[dev] Document.prototype scripts 描述符 get 被调用了");
        return vmcore.propertymanager.Document.scripts;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.currentScript = null;
Object.defineProperty(Document.prototype, "currentScript", {
    get: function currentScript() {
        Developer.log("[dev] Document.prototype currentScript 描述符 get 被调用了");
        return vmcore.propertymanager.Document.currentScript;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.defaultView = null;
Object.defineProperty(Document.prototype, "defaultView", {
    get: function defaultView() {
        Developer.log("[dev] Document.prototype defaultView 描述符 get 被调用了");
        return vmcore.propertymanager.Document.defaultView;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.designMode = "off";
Object.defineProperty(Document.prototype, "designMode", {
    get: function designMode() {
        Developer.log("[dev] Document.prototype designMode 描述符 get 被调用了");
        return vmcore.propertymanager.Document.designMode;
    },
    set: function designMode(val) {
        Developer.log("[dev] Document.prototype designMode 描述符 set 被调用了");
        vmcore.propertymanager.Document.designMode = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onreadystatechange = null;
Object.defineProperty(Document.prototype, "onreadystatechange", {
    get: function onreadystatechange() {
        Developer.log("[dev] Document.prototype onreadystatechange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onreadystatechange;
    },
    set: function onreadystatechange(val) {
        Developer.log("[dev] Document.prototype onreadystatechange 描述符 set 被调用了");
        vmcore.propertymanager.Document.onreadystatechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.anchors = null;
Object.defineProperty(Document.prototype, "anchors", {
    get: function anchors() {
        Developer.log("[dev] Document.prototype anchors 描述符 get 被调用了");
        return vmcore.propertymanager.Document.anchors;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.applets = null;
Object.defineProperty(Document.prototype, "applets", {
    get: function applets() {
        Developer.log("[dev] Document.prototype applets 描述符 get 被调用了");
        return vmcore.propertymanager.Document.applets;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.fgColor = "";
Object.defineProperty(Document.prototype, "fgColor", {
    get: function fgColor() {
        Developer.log("[dev] Document.prototype fgColor 描述符 get 被调用了");
        return vmcore.propertymanager.Document.fgColor;
    },
    set: function fgColor(val) {
        Developer.log("[dev] Document.prototype fgColor 描述符 set 被调用了");
        vmcore.propertymanager.Document.fgColor = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.linkColor = "";
Object.defineProperty(Document.prototype, "linkColor", {
    get: function linkColor() {
        Developer.log("[dev] Document.prototype linkColor 描述符 get 被调用了");
        return vmcore.propertymanager.Document.linkColor;
    },
    set: function linkColor(val) {
        Developer.log("[dev] Document.prototype linkColor 描述符 set 被调用了");
        vmcore.propertymanager.Document.linkColor = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.vlinkColor = "";
Object.defineProperty(Document.prototype, "vlinkColor", {
    get: function vlinkColor() {
        Developer.log("[dev] Document.prototype vlinkColor 描述符 get 被调用了");
        return vmcore.propertymanager.Document.vlinkColor;
    },
    set: function vlinkColor(val) {
        Developer.log("[dev] Document.prototype vlinkColor 描述符 set 被调用了");
        vmcore.propertymanager.Document.vlinkColor = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.alinkColor = "";
Object.defineProperty(Document.prototype, "alinkColor", {
    get: function alinkColor() {
        Developer.log("[dev] Document.prototype alinkColor 描述符 get 被调用了");
        return vmcore.propertymanager.Document.alinkColor;
    },
    set: function alinkColor(val) {
        Developer.log("[dev] Document.prototype alinkColor 描述符 set 被调用了");
        vmcore.propertymanager.Document.alinkColor = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.bgColor = "";
Object.defineProperty(Document.prototype, "bgColor", {
    get: function bgColor() {
        Developer.log("[dev] Document.prototype bgColor 描述符 get 被调用了");
        return vmcore.propertymanager.Document.bgColor;
    },
    set: function bgColor(val) {
        Developer.log("[dev] Document.prototype bgColor 描述符 set 被调用了");
        vmcore.propertymanager.Document.bgColor = val;
    },
    enumerable: true,
    configurable: true,
});



vmcore.propertymanager.Document.scrollingElement = null;
Object.defineProperty(Document.prototype, "scrollingElement", {
    get: function scrollingElement() {
        Developer.log("[dev] Document.prototype scrollingElement 描述符 get 被调用了");
        return vmcore.propertymanager.Document.scrollingElement;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpointerlockchange = null;
Object.defineProperty(Document.prototype, "onpointerlockchange", {
    get: function onpointerlockchange() {
        Developer.log("[dev] Document.prototype onpointerlockchange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpointerlockchange;
    },
    set: function onpointerlockchange(val) {
        Developer.log("[dev] Document.prototype onpointerlockchange 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpointerlockchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpointerlockerror = null;
Object.defineProperty(Document.prototype, "onpointerlockerror", {
    get: function onpointerlockerror() {
        Developer.log("[dev] Document.prototype onpointerlockerror 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpointerlockerror;
    },
    set: function onpointerlockerror(val) {
        Developer.log("[dev] Document.prototype onpointerlockerror 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpointerlockerror = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.hidden = false;
Object.defineProperty(Document.prototype, "hidden", {
    get: function hidden() {
        Developer.log("[dev] Document.prototype hidden 描述符 get 被调用了");
        return vmcore.propertymanager.Document.hidden;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.visibilityState = "visible";
Object.defineProperty(Document.prototype, "visibilityState", {
    get: function visibilityState() {
        Developer.log("[dev] Document.prototype visibilityState 描述符 get 被调用了");
        return vmcore.propertymanager.Document.visibilityState;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.wasDiscarded = false;
Object.defineProperty(Document.prototype, "wasDiscarded", {
    get: function wasDiscarded() {
        Developer.log("[dev] Document.prototype wasDiscarded 描述符 get 被调用了");
        return vmcore.propertymanager.Document.wasDiscarded;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.prerendering = false;
Object.defineProperty(Document.prototype, "prerendering", {
    get: function prerendering() {
        Developer.log("[dev] Document.prototype prerendering 描述符 get 被调用了");
        return vmcore.propertymanager.Document.prerendering;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.featurePolicy = null;
Object.defineProperty(Document.prototype, "featurePolicy", {
    get: function featurePolicy() {
        Developer.log("[dev] Document.prototype featurePolicy 描述符 get 被调用了");
        return vmcore.propertymanager.Document.featurePolicy;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.webkitVisibilityState = "visible";
Object.defineProperty(Document.prototype, "webkitVisibilityState", {
    get: function webkitVisibilityState() {
        Developer.log("[dev] Document.prototype webkitVisibilityState 描述符 get 被调用了");
        return vmcore.propertymanager.Document.webkitVisibilityState;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.webkitHidden = false;
Object.defineProperty(Document.prototype, "webkitHidden", {
    get: function webkitHidden() {
        Developer.log("[dev] Document.prototype webkitHidden 描述符 get 被调用了");
        return vmcore.propertymanager.Document.webkitHidden;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onbeforecopy = null;
Object.defineProperty(Document.prototype, "onbeforecopy", {
    get: function onbeforecopy() {
        Developer.log("[dev] Document.prototype onbeforecopy 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onbeforecopy;
    },
    set: function onbeforecopy(val) {
        Developer.log("[dev] Document.prototype onbeforecopy 描述符 set 被调用了");
        vmcore.propertymanager.Document.onbeforecopy = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onbeforecut = null;
Object.defineProperty(Document.prototype, "onbeforecut", {
    get: function onbeforecut() {
        Developer.log("[dev] Document.prototype onbeforecut 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onbeforecut;
    },
    set: function onbeforecut(val) {
        Developer.log("[dev] Document.prototype onbeforecut 描述符 set 被调用了");
        vmcore.propertymanager.Document.onbeforecut = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onbeforepaste = null;
Object.defineProperty(Document.prototype, "onbeforepaste", {
    get: function onbeforepaste() {
        Developer.log("[dev] Document.prototype onbeforepaste 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onbeforepaste;
    },
    set: function onbeforepaste(val) {
        Developer.log("[dev] Document.prototype onbeforepaste 描述符 set 被调用了");
        vmcore.propertymanager.Document.onbeforepaste = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onfreeze = null;
Object.defineProperty(Document.prototype, "onfreeze", {
    get: function onfreeze() {
        Developer.log("[dev] Document.prototype onfreeze 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onfreeze;
    },
    set: function onfreeze(val) {
        Developer.log("[dev] Document.prototype onfreeze 描述符 set 被调用了");
        vmcore.propertymanager.Document.onfreeze = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onprerenderingchange = null;
Object.defineProperty(Document.prototype, "onprerenderingchange", {
    get: function onprerenderingchange() {
        Developer.log("[dev] Document.prototype onprerenderingchange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onprerenderingchange;
    },
    set: function onprerenderingchange(val) {
        Developer.log("[dev] Document.prototype onprerenderingchange 描述符 set 被调用了");
        vmcore.propertymanager.Document.onprerenderingchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onresume = null;
Object.defineProperty(Document.prototype, "onresume", {
    get: function onresume() {
        Developer.log("[dev] Document.prototype onresume 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onresume;
    },
    set: function onresume(val) {
        Developer.log("[dev] Document.prototype onresume 描述符 set 被调用了");
        vmcore.propertymanager.Document.onresume = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onsearch = null;
Object.defineProperty(Document.prototype, "onsearch", {
    get: function onsearch() {
        Developer.log("[dev] Document.prototype onsearch 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onsearch;
    },
    set: function onsearch(val) {
        Developer.log("[dev] Document.prototype onsearch 描述符 set 被调用了");
        vmcore.propertymanager.Document.onsearch = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onvisibilitychange = null;
Object.defineProperty(Document.prototype, "onvisibilitychange", {
    get: function onvisibilitychange() {
        Developer.log("[dev] Document.prototype onvisibilitychange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onvisibilitychange;
    },
    set: function onvisibilitychange(val) {
        Developer.log("[dev] Document.prototype onvisibilitychange 描述符 set 被调用了");
        vmcore.propertymanager.Document.onvisibilitychange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.timeline = null;
Object.defineProperty(Document.prototype, "timeline", {
    get: function timeline() {
        Developer.log("[dev] Document.prototype timeline 描述符 get 被调用了");
        return vmcore.propertymanager.Document.timeline;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.fullscreenEnabled = true;
Object.defineProperty(Document.prototype, "fullscreenEnabled", {
    get: function fullscreenEnabled() {
        Developer.log("[dev] Document.prototype fullscreenEnabled 描述符 get 被调用了");
        return vmcore.propertymanager.Document.fullscreenEnabled;
    },
    set: function fullscreenEnabled(val) {
        Developer.log("[dev] Document.prototype fullscreenEnabled 描述符 set 被调用了");
        vmcore.propertymanager.Document.fullscreenEnabled = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.fullscreen = false;
Object.defineProperty(Document.prototype, "fullscreen", {
    get: function fullscreen() {
        Developer.log("[dev] Document.prototype fullscreen 描述符 get 被调用了");
        return vmcore.propertymanager.Document.fullscreen;
    },
    set: function fullscreen(val) {
        Developer.log("[dev] Document.prototype fullscreen 描述符 set 被调用了");
        vmcore.propertymanager.Document.fullscreen = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onfullscreenchange = null;
Object.defineProperty(Document.prototype, "onfullscreenchange", {
    get: function onfullscreenchange() {
        Developer.log("[dev] Document.prototype onfullscreenchange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onfullscreenchange;
    },
    set: function onfullscreenchange(val) {
        Developer.log("[dev] Document.prototype onfullscreenchange 描述符 set 被调用了");
        vmcore.propertymanager.Document.onfullscreenchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onfullscreenerror = null;
Object.defineProperty(Document.prototype, "onfullscreenerror", {
    get: function onfullscreenerror() {
        Developer.log("[dev] Document.prototype onfullscreenerror 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onfullscreenerror;
    },
    set: function onfullscreenerror(val) {
        Developer.log("[dev] Document.prototype onfullscreenerror 描述符 set 被调用了");
        vmcore.propertymanager.Document.onfullscreenerror = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.webkitIsFullScreen = false;
Object.defineProperty(Document.prototype, "webkitIsFullScreen", {
    get: function webkitIsFullScreen() {
        Developer.log("[dev] Document.prototype webkitIsFullScreen 描述符 get 被调用了");
        return vmcore.propertymanager.Document.webkitIsFullScreen;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.webkitCurrentFullScreenElement = null;
Object.defineProperty(Document.prototype, "webkitCurrentFullScreenElement", {
    get: function webkitCurrentFullScreenElement() {
        Developer.log("[dev] Document.prototype webkitCurrentFullScreenElement 描述符 get 被调用了");
        return vmcore.propertymanager.Document.webkitCurrentFullScreenElement;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.webkitFullscreenEnabled = true;
Object.defineProperty(Document.prototype, "webkitFullscreenEnabled", {
    get: function webkitFullscreenEnabled() {
        Developer.log("[dev] Document.prototype webkitFullscreenEnabled 描述符 get 被调用了");
        return vmcore.propertymanager.Document.webkitFullscreenEnabled;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.webkitFullscreenElement = null;
Object.defineProperty(Document.prototype, "webkitFullscreenElement", {
    get: function webkitFullscreenElement() {
        Developer.log("[dev] Document.prototype webkitFullscreenElement 描述符 get 被调用了");
        return vmcore.propertymanager.Document.webkitFullscreenElement;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onwebkitfullscreenchange = null;
Object.defineProperty(Document.prototype, "onwebkitfullscreenchange", {
    get: function onwebkitfullscreenchange() {
        Developer.log("[dev] Document.prototype onwebkitfullscreenchange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onwebkitfullscreenchange;
    },
    set: function onwebkitfullscreenchange(val) {
        Developer.log("[dev] Document.prototype onwebkitfullscreenchange 描述符 set 被调用了");
        vmcore.propertymanager.Document.onwebkitfullscreenchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onwebkitfullscreenerror = null;
Object.defineProperty(Document.prototype, "onwebkitfullscreenerror", {
    get: function onwebkitfullscreenerror() {
        Developer.log("[dev] Document.prototype onwebkitfullscreenerror 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onwebkitfullscreenerror;
    },
    set: function onwebkitfullscreenerror(val) {
        Developer.log("[dev] Document.prototype onwebkitfullscreenerror 描述符 set 被调用了");
        vmcore.propertymanager.Document.onwebkitfullscreenerror = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.rootElement = null;
Object.defineProperty(Document.prototype, "rootElement", {
    get: function rootElement() {
        Developer.log("[dev] Document.prototype rootElement 描述符 get 被调用了");
        return vmcore.propertymanager.Document.rootElement;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.pictureInPictureEnabled = true;
Object.defineProperty(Document.prototype, "pictureInPictureEnabled", {
    get: function pictureInPictureEnabled() {
        Developer.log("[dev] Document.prototype pictureInPictureEnabled 描述符 get 被调用了");
        return vmcore.propertymanager.Document.pictureInPictureEnabled;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onbeforexrselect = null;
Object.defineProperty(Document.prototype, "onbeforexrselect", {
    get: function onbeforexrselect() {
        Developer.log("[dev] Document.prototype onbeforexrselect 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onbeforexrselect;
    },
    set: function onbeforexrselect(val) {
        Developer.log("[dev] Document.prototype onbeforexrselect 描述符 set 被调用了");
        vmcore.propertymanager.Document.onbeforexrselect = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onabort = null;
Object.defineProperty(Document.prototype, "onabort", {
    get: function onabort() {
        Developer.log("[dev] Document.prototype onabort 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onabort;
    },
    set: function onabort(val) {
        Developer.log("[dev] Document.prototype onabort 描述符 set 被调用了");
        vmcore.propertymanager.Document.onabort = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onbeforeinput = null;
Object.defineProperty(Document.prototype, "onbeforeinput", {
    get: function onbeforeinput() {
        Developer.log("[dev] Document.prototype onbeforeinput 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onbeforeinput;
    },
    set: function onbeforeinput(val) {
        Developer.log("[dev] Document.prototype onbeforeinput 描述符 set 被调用了");
        vmcore.propertymanager.Document.onbeforeinput = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onbeforematch = null;
Object.defineProperty(Document.prototype, "onbeforematch", {
    get: function onbeforematch() {
        Developer.log("[dev] Document.prototype onbeforematch 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onbeforematch;
    },
    set: function onbeforematch(val) {
        Developer.log("[dev] Document.prototype onbeforematch 描述符 set 被调用了");
        vmcore.propertymanager.Document.onbeforematch = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onbeforetoggle = null;
Object.defineProperty(Document.prototype, "onbeforetoggle", {
    get: function onbeforetoggle() {
        Developer.log("[dev] Document.prototype onbeforetoggle 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onbeforetoggle;
    },
    set: function onbeforetoggle(val) {
        Developer.log("[dev] Document.prototype onbeforetoggle 描述符 set 被调用了");
        vmcore.propertymanager.Document.onbeforetoggle = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onblur = null;
Object.defineProperty(Document.prototype, "onblur", {
    get: function onblur() {
        Developer.log("[dev] Document.prototype onblur 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onblur;
    },
    set: function onblur(val) {
        Developer.log("[dev] Document.prototype onblur 描述符 set 被调用了");
        vmcore.propertymanager.Document.onblur = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oncancel = null;
Object.defineProperty(Document.prototype, "oncancel", {
    get: function oncancel() {
        Developer.log("[dev] Document.prototype oncancel 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oncancel;
    },
    set: function oncancel(val) {
        Developer.log("[dev] Document.prototype oncancel 描述符 set 被调用了");
        vmcore.propertymanager.Document.oncancel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oncanplay = null;
Object.defineProperty(Document.prototype, "oncanplay", {
    get: function oncanplay() {
        Developer.log("[dev] Document.prototype oncanplay 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oncanplay;
    },
    set: function oncanplay(val) {
        Developer.log("[dev] Document.prototype oncanplay 描述符 set 被调用了");
        vmcore.propertymanager.Document.oncanplay = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oncanplaythrough = null;
Object.defineProperty(Document.prototype, "oncanplaythrough", {
    get: function oncanplaythrough() {
        Developer.log("[dev] Document.prototype oncanplaythrough 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oncanplaythrough;
    },
    set: function oncanplaythrough(val) {
        Developer.log("[dev] Document.prototype oncanplaythrough 描述符 set 被调用了");
        vmcore.propertymanager.Document.oncanplaythrough = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onchange = null;
Object.defineProperty(Document.prototype, "onchange", {
    get: function onchange() {
        Developer.log("[dev] Document.prototype onchange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onchange;
    },
    set: function onchange(val) {
        Developer.log("[dev] Document.prototype onchange 描述符 set 被调用了");
        vmcore.propertymanager.Document.onchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onclick = null;
Object.defineProperty(Document.prototype, "onclick", {
    get: function onclick() {
        Developer.log("[dev] Document.prototype onclick 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onclick;
    },
    set: function onclick(val) {
        Developer.log("[dev] Document.prototype onclick 描述符 set 被调用了");
        vmcore.propertymanager.Document.onclick = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onclose = null;
Object.defineProperty(Document.prototype, "onclose", {
    get: function onclose() {
        Developer.log("[dev] Document.prototype onclose 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onclose;
    },
    set: function onclose(val) {
        Developer.log("[dev] Document.prototype onclose 描述符 set 被调用了");
        vmcore.propertymanager.Document.onclose = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oncontentvisibilityautostatechange = null;
Object.defineProperty(Document.prototype, "oncontentvisibilityautostatechange", {
    get: function oncontentvisibilityautostatechange() {
        Developer.log("[dev] Document.prototype oncontentvisibilityautostatechange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oncontentvisibilityautostatechange;
    },
    set: function oncontentvisibilityautostatechange(val) {
        Developer.log("[dev] Document.prototype oncontentvisibilityautostatechange 描述符 set 被调用了");
        vmcore.propertymanager.Document.oncontentvisibilityautostatechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oncontextlost = null;
Object.defineProperty(Document.prototype, "oncontextlost", {
    get: function oncontextlost() {
        Developer.log("[dev] Document.prototype oncontextlost 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oncontextlost;
    },
    set: function oncontextlost(val) {
        Developer.log("[dev] Document.prototype oncontextlost 描述符 set 被调用了");
        vmcore.propertymanager.Document.oncontextlost = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oncontextmenu = null;
Object.defineProperty(Document.prototype, "oncontextmenu", {
    get: function oncontextmenu() {
        Developer.log("[dev] Document.prototype oncontextmenu 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oncontextmenu;
    },
    set: function oncontextmenu(val) {
        Developer.log("[dev] Document.prototype oncontextmenu 描述符 set 被调用了");
        vmcore.propertymanager.Document.oncontextmenu = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oncontextrestored = null;
Object.defineProperty(Document.prototype, "oncontextrestored", {
    get: function oncontextrestored() {
        Developer.log("[dev] Document.prototype oncontextrestored 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oncontextrestored;
    },
    set: function oncontextrestored(val) {
        Developer.log("[dev] Document.prototype oncontextrestored 描述符 set 被调用了");
        vmcore.propertymanager.Document.oncontextrestored = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oncuechange = null;
Object.defineProperty(Document.prototype, "oncuechange", {
    get: function oncuechange() {
        Developer.log("[dev] Document.prototype oncuechange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oncuechange;
    },
    set: function oncuechange(val) {
        Developer.log("[dev] Document.prototype oncuechange 描述符 set 被调用了");
        vmcore.propertymanager.Document.oncuechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ondblclick = null;
Object.defineProperty(Document.prototype, "ondblclick", {
    get: function ondblclick() {
        Developer.log("[dev] Document.prototype ondblclick 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ondblclick;
    },
    set: function ondblclick(val) {
        Developer.log("[dev] Document.prototype ondblclick 描述符 set 被调用了");
        vmcore.propertymanager.Document.ondblclick = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ondrag = null;
Object.defineProperty(Document.prototype, "ondrag", {
    get: function ondrag() {
        Developer.log("[dev] Document.prototype ondrag 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ondrag;
    },
    set: function ondrag(val) {
        Developer.log("[dev] Document.prototype ondrag 描述符 set 被调用了");
        vmcore.propertymanager.Document.ondrag = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ondragend = null;
Object.defineProperty(Document.prototype, "ondragend", {
    get: function ondragend() {
        Developer.log("[dev] Document.prototype ondragend 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ondragend;
    },
    set: function ondragend(val) {
        Developer.log("[dev] Document.prototype ondragend 描述符 set 被调用了");
        vmcore.propertymanager.Document.ondragend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ondragenter = null;
Object.defineProperty(Document.prototype, "ondragenter", {
    get: function ondragenter() {
        Developer.log("[dev] Document.prototype ondragenter 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ondragenter;
    },
    set: function ondragenter(val) {
        Developer.log("[dev] Document.prototype ondragenter 描述符 set 被调用了");
        vmcore.propertymanager.Document.ondragenter = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ondragleave = null;
Object.defineProperty(Document.prototype, "ondragleave", {
    get: function ondragleave() {
        Developer.log("[dev] Document.prototype ondragleave 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ondragleave;
    },
    set: function ondragleave(val) {
        Developer.log("[dev] Document.prototype ondragleave 描述符 set 被调用了");
        vmcore.propertymanager.Document.ondragleave = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ondragover = null;
Object.defineProperty(Document.prototype, "ondragover", {
    get: function ondragover() {
        Developer.log("[dev] Document.prototype ondragover 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ondragover;
    },
    set: function ondragover(val) {
        Developer.log("[dev] Document.prototype ondragover 描述符 set 被调用了");
        vmcore.propertymanager.Document.ondragover = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ondragstart = null;
Object.defineProperty(Document.prototype, "ondragstart", {
    get: function ondragstart() {
        Developer.log("[dev] Document.prototype ondragstart 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ondragstart;
    },
    set: function ondragstart(val) {
        Developer.log("[dev] Document.prototype ondragstart 描述符 set 被调用了");
        vmcore.propertymanager.Document.ondragstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ondrop = null;
Object.defineProperty(Document.prototype, "ondrop", {
    get: function ondrop() {
        Developer.log("[dev] Document.prototype ondrop 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ondrop;
    },
    set: function ondrop(val) {
        Developer.log("[dev] Document.prototype ondrop 描述符 set 被调用了");
        vmcore.propertymanager.Document.ondrop = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ondurationchange = null;
Object.defineProperty(Document.prototype, "ondurationchange", {
    get: function ondurationchange() {
        Developer.log("[dev] Document.prototype ondurationchange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ondurationchange;
    },
    set: function ondurationchange(val) {
        Developer.log("[dev] Document.prototype ondurationchange 描述符 set 被调用了");
        vmcore.propertymanager.Document.ondurationchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onemptied = null;
Object.defineProperty(Document.prototype, "onemptied", {
    get: function onemptied() {
        Developer.log("[dev] Document.prototype onemptied 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onemptied;
    },
    set: function onemptied(val) {
        Developer.log("[dev] Document.prototype onemptied 描述符 set 被调用了");
        vmcore.propertymanager.Document.onemptied = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onended = null;
Object.defineProperty(Document.prototype, "onended", {
    get: function onended() {
        Developer.log("[dev] Document.prototype onended 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onended;
    },
    set: function onended(val) {
        Developer.log("[dev] Document.prototype onended 描述符 set 被调用了");
        vmcore.propertymanager.Document.onended = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onerror = null;
Object.defineProperty(Document.prototype, "onerror", {
    get: function onerror() {
        Developer.log("[dev] Document.prototype onerror 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onerror;
    },
    set: function onerror(val) {
        Developer.log("[dev] Document.prototype onerror 描述符 set 被调用了");
        vmcore.propertymanager.Document.onerror = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onfocus = null;
Object.defineProperty(Document.prototype, "onfocus", {
    get: function onfocus() {
        Developer.log("[dev] Document.prototype onfocus 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onfocus;
    },
    set: function onfocus(val) {
        Developer.log("[dev] Document.prototype onfocus 描述符 set 被调用了");
        vmcore.propertymanager.Document.onfocus = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onformdata = null;
Object.defineProperty(Document.prototype, "onformdata", {
    get: function onformdata() {
        Developer.log("[dev] Document.prototype onformdata 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onformdata;
    },
    set: function onformdata(val) {
        Developer.log("[dev] Document.prototype onformdata 描述符 set 被调用了");
        vmcore.propertymanager.Document.onformdata = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oninput = null;
Object.defineProperty(Document.prototype, "oninput", {
    get: function oninput() {
        Developer.log("[dev] Document.prototype oninput 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oninput;
    },
    set: function oninput(val) {
        Developer.log("[dev] Document.prototype oninput 描述符 set 被调用了");
        vmcore.propertymanager.Document.oninput = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oninvalid = null;
Object.defineProperty(Document.prototype, "oninvalid", {
    get: function oninvalid() {
        Developer.log("[dev] Document.prototype oninvalid 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oninvalid;
    },
    set: function oninvalid(val) {
        Developer.log("[dev] Document.prototype oninvalid 描述符 set 被调用了");
        vmcore.propertymanager.Document.oninvalid = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onkeydown = null;
Object.defineProperty(Document.prototype, "onkeydown", {
    get: function onkeydown() {
        Developer.log("[dev] Document.prototype onkeydown 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onkeydown;
    },
    set: function onkeydown(val) {
        Developer.log("[dev] Document.prototype onkeydown 描述符 set 被调用了");
        vmcore.propertymanager.Document.onkeydown = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onkeypress = null;
Object.defineProperty(Document.prototype, "onkeypress", {
    get: function onkeypress() {
        Developer.log("[dev] Document.prototype onkeypress 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onkeypress;
    },
    set: function onkeypress(val) {
        Developer.log("[dev] Document.prototype onkeypress 描述符 set 被调用了");
        vmcore.propertymanager.Document.onkeypress = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onkeyup = null;
Object.defineProperty(Document.prototype, "onkeyup", {
    get: function onkeyup() {
        Developer.log("[dev] Document.prototype onkeyup 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onkeyup;
    },
    set: function onkeyup(val) {
        Developer.log("[dev] Document.prototype onkeyup 描述符 set 被调用了");
        vmcore.propertymanager.Document.onkeyup = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onload = null;
Object.defineProperty(Document.prototype, "onload", {
    get: function onload() {
        Developer.log("[dev] Document.prototype onload 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onload;
    },
    set: function onload(val) {
        Developer.log("[dev] Document.prototype onload 描述符 set 被调用了");
        vmcore.propertymanager.Document.onload = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onloadeddata = null;
Object.defineProperty(Document.prototype, "onloadeddata", {
    get: function onloadeddata() {
        Developer.log("[dev] Document.prototype onloadeddata 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onloadeddata;
    },
    set: function onloadeddata(val) {
        Developer.log("[dev] Document.prototype onloadeddata 描述符 set 被调用了");
        vmcore.propertymanager.Document.onloadeddata = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onloadedmetadata = null;
Object.defineProperty(Document.prototype, "onloadedmetadata", {
    get: function onloadedmetadata() {
        Developer.log("[dev] Document.prototype onloadedmetadata 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onloadedmetadata;
    },
    set: function onloadedmetadata(val) {
        Developer.log("[dev] Document.prototype onloadedmetadata 描述符 set 被调用了");
        vmcore.propertymanager.Document.onloadedmetadata = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onloadstart = null;
Object.defineProperty(Document.prototype, "onloadstart", {
    get: function onloadstart() {
        Developer.log("[dev] Document.prototype onloadstart 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onloadstart;
    },
    set: function onloadstart(val) {
        Developer.log("[dev] Document.prototype onloadstart 描述符 set 被调用了");
        vmcore.propertymanager.Document.onloadstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onmousedown = null;
Object.defineProperty(Document.prototype, "onmousedown", {
    get: function onmousedown() {
        Developer.log("[dev] Document.prototype onmousedown 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onmousedown;
    },
    set: function onmousedown(val) {
        Developer.log("[dev] Document.prototype onmousedown 描述符 set 被调用了");
        vmcore.propertymanager.Document.onmousedown = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onmouseenter = null;
Object.defineProperty(Document.prototype, "onmouseenter", {
    get: function onmouseenter() {
        Developer.log("[dev] Document.prototype onmouseenter 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onmouseenter;
    },
    set: function onmouseenter(val) {
        Developer.log("[dev] Document.prototype onmouseenter 描述符 set 被调用了");
        vmcore.propertymanager.Document.onmouseenter = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onmouseleave = null;
Object.defineProperty(Document.prototype, "onmouseleave", {
    get: function onmouseleave() {
        Developer.log("[dev] Document.prototype onmouseleave 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onmouseleave;
    },
    set: function onmouseleave(val) {
        Developer.log("[dev] Document.prototype onmouseleave 描述符 set 被调用了");
        vmcore.propertymanager.Document.onmouseleave = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onmousemove = null;
Object.defineProperty(Document.prototype, "onmousemove", {
    get: function onmousemove() {
        Developer.log("[dev] Document.prototype onmousemove 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onmousemove;
    },
    set: function onmousemove(val) {
        Developer.log("[dev] Document.prototype onmousemove 描述符 set 被调用了");
        vmcore.propertymanager.Document.onmousemove = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onmouseout = null;
Object.defineProperty(Document.prototype, "onmouseout", {
    get: function onmouseout() {
        Developer.log("[dev] Document.prototype onmouseout 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onmouseout;
    },
    set: function onmouseout(val) {
        Developer.log("[dev] Document.prototype onmouseout 描述符 set 被调用了");
        vmcore.propertymanager.Document.onmouseout = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onmouseover = null;
Object.defineProperty(Document.prototype, "onmouseover", {
    get: function onmouseover() {
        Developer.log("[dev] Document.prototype onmouseover 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onmouseover;
    },
    set: function onmouseover(val) {
        Developer.log("[dev] Document.prototype onmouseover 描述符 set 被调用了");
        vmcore.propertymanager.Document.onmouseover = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onmouseup = null;
Object.defineProperty(Document.prototype, "onmouseup", {
    get: function onmouseup() {
        Developer.log("[dev] Document.prototype onmouseup 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onmouseup;
    },
    set: function onmouseup(val) {
        Developer.log("[dev] Document.prototype onmouseup 描述符 set 被调用了");
        vmcore.propertymanager.Document.onmouseup = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onmousewheel = null;
Object.defineProperty(Document.prototype, "onmousewheel", {
    get: function onmousewheel() {
        Developer.log("[dev] Document.prototype onmousewheel 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onmousewheel;
    },
    set: function onmousewheel(val) {
        Developer.log("[dev] Document.prototype onmousewheel 描述符 set 被调用了");
        vmcore.propertymanager.Document.onmousewheel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpause = null;
Object.defineProperty(Document.prototype, "onpause", {
    get: function onpause() {
        Developer.log("[dev] Document.prototype onpause 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpause;
    },
    set: function onpause(val) {
        Developer.log("[dev] Document.prototype onpause 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpause = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onplay = null;
Object.defineProperty(Document.prototype, "onplay", {
    get: function onplay() {
        Developer.log("[dev] Document.prototype onplay 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onplay;
    },
    set: function onplay(val) {
        Developer.log("[dev] Document.prototype onplay 描述符 set 被调用了");
        vmcore.propertymanager.Document.onplay = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onplaying = null;
Object.defineProperty(Document.prototype, "onplaying", {
    get: function onplaying() {
        Developer.log("[dev] Document.prototype onplaying 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onplaying;
    },
    set: function onplaying(val) {
        Developer.log("[dev] Document.prototype onplaying 描述符 set 被调用了");
        vmcore.propertymanager.Document.onplaying = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onprogress = null;
Object.defineProperty(Document.prototype, "onprogress", {
    get: function onprogress() {
        Developer.log("[dev] Document.prototype onprogress 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onprogress;
    },
    set: function onprogress(val) {
        Developer.log("[dev] Document.prototype onprogress 描述符 set 被调用了");
        vmcore.propertymanager.Document.onprogress = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onratechange = null;
Object.defineProperty(Document.prototype, "onratechange", {
    get: function onratechange() {
        Developer.log("[dev] Document.prototype onratechange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onratechange;
    },
    set: function onratechange(val) {
        Developer.log("[dev] Document.prototype onratechange 描述符 set 被调用了");
        vmcore.propertymanager.Document.onratechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onreset = null;
Object.defineProperty(Document.prototype, "onreset", {
    get: function onreset() {
        Developer.log("[dev] Document.prototype onreset 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onreset;
    },
    set: function onreset(val) {
        Developer.log("[dev] Document.prototype onreset 描述符 set 被调用了");
        vmcore.propertymanager.Document.onreset = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onresize = null;
Object.defineProperty(Document.prototype, "onresize", {
    get: function onresize() {
        Developer.log("[dev] Document.prototype onresize 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onresize;
    },
    set: function onresize(val) {
        Developer.log("[dev] Document.prototype onresize 描述符 set 被调用了");
        vmcore.propertymanager.Document.onresize = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onscroll = null;
Object.defineProperty(Document.prototype, "onscroll", {
    get: function onscroll() {
        Developer.log("[dev] Document.prototype onscroll 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onscroll;
    },
    set: function onscroll(val) {
        Developer.log("[dev] Document.prototype onscroll 描述符 set 被调用了");
        vmcore.propertymanager.Document.onscroll = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onsecuritypolicyviolation = null;
Object.defineProperty(Document.prototype, "onsecuritypolicyviolation", {
    get: function onsecuritypolicyviolation() {
        Developer.log("[dev] Document.prototype onsecuritypolicyviolation 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onsecuritypolicyviolation;
    },
    set: function onsecuritypolicyviolation(val) {
        Developer.log("[dev] Document.prototype onsecuritypolicyviolation 描述符 set 被调用了");
        vmcore.propertymanager.Document.onsecuritypolicyviolation = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onseeked = null;
Object.defineProperty(Document.prototype, "onseeked", {
    get: function onseeked() {
        Developer.log("[dev] Document.prototype onseeked 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onseeked;
    },
    set: function onseeked(val) {
        Developer.log("[dev] Document.prototype onseeked 描述符 set 被调用了");
        vmcore.propertymanager.Document.onseeked = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onseeking = null;
Object.defineProperty(Document.prototype, "onseeking", {
    get: function onseeking() {
        Developer.log("[dev] Document.prototype onseeking 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onseeking;
    },
    set: function onseeking(val) {
        Developer.log("[dev] Document.prototype onseeking 描述符 set 被调用了");
        vmcore.propertymanager.Document.onseeking = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onselect = null;
Object.defineProperty(Document.prototype, "onselect", {
    get: function onselect() {
        Developer.log("[dev] Document.prototype onselect 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onselect;
    },
    set: function onselect(val) {
        Developer.log("[dev] Document.prototype onselect 描述符 set 被调用了");
        vmcore.propertymanager.Document.onselect = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onslotchange = null;
Object.defineProperty(Document.prototype, "onslotchange", {
    get: function onslotchange() {
        Developer.log("[dev] Document.prototype onslotchange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onslotchange;
    },
    set: function onslotchange(val) {
        Developer.log("[dev] Document.prototype onslotchange 描述符 set 被调用了");
        vmcore.propertymanager.Document.onslotchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onstalled = null;
Object.defineProperty(Document.prototype, "onstalled", {
    get: function onstalled() {
        Developer.log("[dev] Document.prototype onstalled 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onstalled;
    },
    set: function onstalled(val) {
        Developer.log("[dev] Document.prototype onstalled 描述符 set 被调用了");
        vmcore.propertymanager.Document.onstalled = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onsubmit = null;
Object.defineProperty(Document.prototype, "onsubmit", {
    get: function onsubmit() {
        Developer.log("[dev] Document.prototype onsubmit 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onsubmit;
    },
    set: function onsubmit(val) {
        Developer.log("[dev] Document.prototype onsubmit 描述符 set 被调用了");
        vmcore.propertymanager.Document.onsubmit = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onsuspend = null;
Object.defineProperty(Document.prototype, "onsuspend", {
    get: function onsuspend() {
        Developer.log("[dev] Document.prototype onsuspend 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onsuspend;
    },
    set: function onsuspend(val) {
        Developer.log("[dev] Document.prototype onsuspend 描述符 set 被调用了");
        vmcore.propertymanager.Document.onsuspend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ontimeupdate = null;
Object.defineProperty(Document.prototype, "ontimeupdate", {
    get: function ontimeupdate() {
        Developer.log("[dev] Document.prototype ontimeupdate 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ontimeupdate;
    },
    set: function ontimeupdate(val) {
        Developer.log("[dev] Document.prototype ontimeupdate 描述符 set 被调用了");
        vmcore.propertymanager.Document.ontimeupdate = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ontoggle = null;
Object.defineProperty(Document.prototype, "ontoggle", {
    get: function ontoggle() {
        Developer.log("[dev] Document.prototype ontoggle 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ontoggle;
    },
    set: function ontoggle(val) {
        Developer.log("[dev] Document.prototype ontoggle 描述符 set 被调用了");
        vmcore.propertymanager.Document.ontoggle = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onvolumechange = null;
Object.defineProperty(Document.prototype, "onvolumechange", {
    get: function onvolumechange() {
        Developer.log("[dev] Document.prototype onvolumechange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onvolumechange;
    },
    set: function onvolumechange(val) {
        Developer.log("[dev] Document.prototype onvolumechange 描述符 set 被调用了");
        vmcore.propertymanager.Document.onvolumechange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onwaiting = null;
Object.defineProperty(Document.prototype, "onwaiting", {
    get: function onwaiting() {
        Developer.log("[dev] Document.prototype onwaiting 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onwaiting;
    },
    set: function onwaiting(val) {
        Developer.log("[dev] Document.prototype onwaiting 描述符 set 被调用了");
        vmcore.propertymanager.Document.onwaiting = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onwebkitanimationend = null;
Object.defineProperty(Document.prototype, "onwebkitanimationend", {
    get: function onwebkitanimationend() {
        Developer.log("[dev] Document.prototype onwebkitanimationend 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onwebkitanimationend;
    },
    set: function onwebkitanimationend(val) {
        Developer.log("[dev] Document.prototype onwebkitanimationend 描述符 set 被调用了");
        vmcore.propertymanager.Document.onwebkitanimationend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onwebkitanimationiteration = null;
Object.defineProperty(Document.prototype, "onwebkitanimationiteration", {
    get: function onwebkitanimationiteration() {
        Developer.log("[dev] Document.prototype onwebkitanimationiteration 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onwebkitanimationiteration;
    },
    set: function onwebkitanimationiteration(val) {
        Developer.log("[dev] Document.prototype onwebkitanimationiteration 描述符 set 被调用了");
        vmcore.propertymanager.Document.onwebkitanimationiteration = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onwebkitanimationstart = null;
Object.defineProperty(Document.prototype, "onwebkitanimationstart", {
    get: function onwebkitanimationstart() {
        Developer.log("[dev] Document.prototype onwebkitanimationstart 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onwebkitanimationstart;
    },
    set: function onwebkitanimationstart(val) {
        Developer.log("[dev] Document.prototype onwebkitanimationstart 描述符 set 被调用了");
        vmcore.propertymanager.Document.onwebkitanimationstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onwebkittransitionend = null;
Object.defineProperty(Document.prototype, "onwebkittransitionend", {
    get: function onwebkittransitionend() {
        Developer.log("[dev] Document.prototype onwebkittransitionend 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onwebkittransitionend;
    },
    set: function onwebkittransitionend(val) {
        Developer.log("[dev] Document.prototype onwebkittransitionend 描述符 set 被调用了");
        vmcore.propertymanager.Document.onwebkittransitionend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onwheel = null;
Object.defineProperty(Document.prototype, "onwheel", {
    get: function onwheel() {
        Developer.log("[dev] Document.prototype onwheel 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onwheel;
    },
    set: function onwheel(val) {
        Developer.log("[dev] Document.prototype onwheel 描述符 set 被调用了");
        vmcore.propertymanager.Document.onwheel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onauxclick = null;
Object.defineProperty(Document.prototype, "onauxclick", {
    get: function onauxclick() {
        Developer.log("[dev] Document.prototype onauxclick 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onauxclick;
    },
    set: function onauxclick(val) {
        Developer.log("[dev] Document.prototype onauxclick 描述符 set 被调用了");
        vmcore.propertymanager.Document.onauxclick = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ongotpointercapture = null;
Object.defineProperty(Document.prototype, "ongotpointercapture", {
    get: function ongotpointercapture() {
        Developer.log("[dev] Document.prototype ongotpointercapture 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ongotpointercapture;
    },
    set: function ongotpointercapture(val) {
        Developer.log("[dev] Document.prototype ongotpointercapture 描述符 set 被调用了");
        vmcore.propertymanager.Document.ongotpointercapture = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onlostpointercapture = null;
Object.defineProperty(Document.prototype, "onlostpointercapture", {
    get: function onlostpointercapture() {
        Developer.log("[dev] Document.prototype onlostpointercapture 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onlostpointercapture;
    },
    set: function onlostpointercapture(val) {
        Developer.log("[dev] Document.prototype onlostpointercapture 描述符 set 被调用了");
        vmcore.propertymanager.Document.onlostpointercapture = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpointerdown = null;
Object.defineProperty(Document.prototype, "onpointerdown", {
    get: function onpointerdown() {
        Developer.log("[dev] Document.prototype onpointerdown 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpointerdown;
    },
    set: function onpointerdown(val) {
        Developer.log("[dev] Document.prototype onpointerdown 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpointerdown = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpointermove = null;
Object.defineProperty(Document.prototype, "onpointermove", {
    get: function onpointermove() {
        Developer.log("[dev] Document.prototype onpointermove 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpointermove;
    },
    set: function onpointermove(val) {
        Developer.log("[dev] Document.prototype onpointermove 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpointermove = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpointerrawupdate = null;
Object.defineProperty(Document.prototype, "onpointerrawupdate", {
    get: function onpointerrawupdate() {
        Developer.log("[dev] Document.prototype onpointerrawupdate 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpointerrawupdate;
    },
    set: function onpointerrawupdate(val) {
        Developer.log("[dev] Document.prototype onpointerrawupdate 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpointerrawupdate = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpointerup = null;
Object.defineProperty(Document.prototype, "onpointerup", {
    get: function onpointerup() {
        Developer.log("[dev] Document.prototype onpointerup 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpointerup;
    },
    set: function onpointerup(val) {
        Developer.log("[dev] Document.prototype onpointerup 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpointerup = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpointercancel = null;
Object.defineProperty(Document.prototype, "onpointercancel", {
    get: function onpointercancel() {
        Developer.log("[dev] Document.prototype onpointercancel 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpointercancel;
    },
    set: function onpointercancel(val) {
        Developer.log("[dev] Document.prototype onpointercancel 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpointercancel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpointerover = null;
Object.defineProperty(Document.prototype, "onpointerover", {
    get: function onpointerover() {
        Developer.log("[dev] Document.prototype onpointerover 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpointerover;
    },
    set: function onpointerover(val) {
        Developer.log("[dev] Document.prototype onpointerover 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpointerover = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpointerout = null;
Object.defineProperty(Document.prototype, "onpointerout", {
    get: function onpointerout() {
        Developer.log("[dev] Document.prototype onpointerout 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpointerout;
    },
    set: function onpointerout(val) {
        Developer.log("[dev] Document.prototype onpointerout 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpointerout = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpointerenter = null;
Object.defineProperty(Document.prototype, "onpointerenter", {
    get: function onpointerenter() {
        Developer.log("[dev] Document.prototype onpointerenter 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpointerenter;
    },
    set: function onpointerenter(val) {
        Developer.log("[dev] Document.prototype onpointerenter 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpointerenter = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpointerleave = null;
Object.defineProperty(Document.prototype, "onpointerleave", {
    get: function onpointerleave() {
        Developer.log("[dev] Document.prototype onpointerleave 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpointerleave;
    },
    set: function onpointerleave(val) {
        Developer.log("[dev] Document.prototype onpointerleave 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpointerleave = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onselectstart = null;
Object.defineProperty(Document.prototype, "onselectstart", {
    get: function onselectstart() {
        Developer.log("[dev] Document.prototype onselectstart 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onselectstart;
    },
    set: function onselectstart(val) {
        Developer.log("[dev] Document.prototype onselectstart 描述符 set 被调用了");
        vmcore.propertymanager.Document.onselectstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onselectionchange = null;
Object.defineProperty(Document.prototype, "onselectionchange", {
    get: function onselectionchange() {
        Developer.log("[dev] Document.prototype onselectionchange 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onselectionchange;
    },
    set: function onselectionchange(val) {
        Developer.log("[dev] Document.prototype onselectionchange 描述符 set 被调用了");
        vmcore.propertymanager.Document.onselectionchange = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onanimationend = null;
Object.defineProperty(Document.prototype, "onanimationend", {
    get: function onanimationend() {
        Developer.log("[dev] Document.prototype onanimationend 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onanimationend;
    },
    set: function onanimationend(val) {
        Developer.log("[dev] Document.prototype onanimationend 描述符 set 被调用了");
        vmcore.propertymanager.Document.onanimationend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onanimationiteration = null;
Object.defineProperty(Document.prototype, "onanimationiteration", {
    get: function onanimationiteration() {
        Developer.log("[dev] Document.prototype onanimationiteration 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onanimationiteration;
    },
    set: function onanimationiteration(val) {
        Developer.log("[dev] Document.prototype onanimationiteration 描述符 set 被调用了");
        vmcore.propertymanager.Document.onanimationiteration = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onanimationstart = null;
Object.defineProperty(Document.prototype, "onanimationstart", {
    get: function onanimationstart() {
        Developer.log("[dev] Document.prototype onanimationstart 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onanimationstart;
    },
    set: function onanimationstart(val) {
        Developer.log("[dev] Document.prototype onanimationstart 描述符 set 被调用了");
        vmcore.propertymanager.Document.onanimationstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ontransitionrun = null;
Object.defineProperty(Document.prototype, "ontransitionrun", {
    get: function ontransitionrun() {
        Developer.log("[dev] Document.prototype ontransitionrun 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ontransitionrun;
    },
    set: function ontransitionrun(val) {
        Developer.log("[dev] Document.prototype ontransitionrun 描述符 set 被调用了");
        vmcore.propertymanager.Document.ontransitionrun = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ontransitionstart = null;
Object.defineProperty(Document.prototype, "ontransitionstart", {
    get: function ontransitionstart() {
        Developer.log("[dev] Document.prototype ontransitionstart 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ontransitionstart;
    },
    set: function ontransitionstart(val) {
        Developer.log("[dev] Document.prototype ontransitionstart 描述符 set 被调用了");
        vmcore.propertymanager.Document.ontransitionstart = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ontransitionend = null;
Object.defineProperty(Document.prototype, "ontransitionend", {
    get: function ontransitionend() {
        Developer.log("[dev] Document.prototype ontransitionend 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ontransitionend;
    },
    set: function ontransitionend(val) {
        Developer.log("[dev] Document.prototype ontransitionend 描述符 set 被调用了");
        vmcore.propertymanager.Document.ontransitionend = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.ontransitioncancel = null;
Object.defineProperty(Document.prototype, "ontransitioncancel", {
    get: function ontransitioncancel() {
        Developer.log("[dev] Document.prototype ontransitioncancel 描述符 get 被调用了");
        return vmcore.propertymanager.Document.ontransitioncancel;
    },
    set: function ontransitioncancel(val) {
        Developer.log("[dev] Document.prototype ontransitioncancel 描述符 set 被调用了");
        vmcore.propertymanager.Document.ontransitioncancel = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oncopy = null;
Object.defineProperty(Document.prototype, "oncopy", {
    get: function oncopy() {
        Developer.log("[dev] Document.prototype oncopy 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oncopy;
    },
    set: function oncopy(val) {
        Developer.log("[dev] Document.prototype oncopy 描述符 set 被调用了");
        vmcore.propertymanager.Document.oncopy = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.oncut = null;
Object.defineProperty(Document.prototype, "oncut", {
    get: function oncut() {
        Developer.log("[dev] Document.prototype oncut 描述符 get 被调用了");
        return vmcore.propertymanager.Document.oncut;
    },
    set: function oncut(val) {
        Developer.log("[dev] Document.prototype oncut 描述符 set 被调用了");
        vmcore.propertymanager.Document.oncut = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.onpaste = null;
Object.defineProperty(Document.prototype, "onpaste", {
    get: function onpaste() {
        Developer.log("[dev] Document.prototype onpaste 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onpaste;
    },
    set: function onpaste(val) {
        Developer.log("[dev] Document.prototype onpaste 描述符 set 被调用了");
        vmcore.propertymanager.Document.onpaste = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.children = null;
Object.defineProperty(Document.prototype, "children", {
    get: function children() {
        Developer.log("[dev] Document.prototype children 描述符 get 被调用了");
        return vmcore.propertymanager.Document.children;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.firstElementChild = null;
Object.defineProperty(Document.prototype, "firstElementChild", {
    get: function firstElementChild() {
        Developer.log("[dev] Document.prototype firstElementChild 描述符 get 被调用了");
        return vmcore.propertymanager.Document.firstElementChild;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.lastElementChild = null;
Object.defineProperty(Document.prototype, "lastElementChild", {
    get: function lastElementChild() {
        Developer.log("[dev] Document.prototype lastElementChild 描述符 get 被调用了");
        return vmcore.propertymanager.Document.lastElementChild;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.childElementCount = 1;
Object.defineProperty(Document.prototype, "childElementCount", {
    get: function childElementCount() {
        Developer.log("[dev] Document.prototype childElementCount 描述符 get 被调用了");
        return vmcore.propertymanager.Document.childElementCount;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.activeElement = null;
Object.defineProperty(Document.prototype, "activeElement", {
    get: function activeElement() {
        Developer.log("[dev] Document.prototype activeElement 描述符 get 被调用了");
        return vmcore.propertymanager.Document.activeElement;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.styleSheets = null;
Object.defineProperty(Document.prototype, "styleSheets", {
    get: function styleSheets() {
        Developer.log("[dev] Document.prototype styleSheets 描述符 get 被调用了");
        return vmcore.propertymanager.Document.styleSheets;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.pointerLockElement = null;
Object.defineProperty(Document.prototype, "pointerLockElement", {
    get: function pointerLockElement() {
        Developer.log("[dev] Document.prototype pointerLockElement 描述符 get 被调用了");
        return vmcore.propertymanager.Document.pointerLockElement;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.fullscreenElement = null;
Object.defineProperty(Document.prototype, "fullscreenElement", {
    get: function fullscreenElement() {
        Developer.log("[dev] Document.prototype fullscreenElement 描述符 get 被调用了");
        return vmcore.propertymanager.Document.fullscreenElement;
    },
    set: function fullscreenElement(val) {
        Developer.log("[dev] Document.prototype fullscreenElement 描述符 set 被调用了");
        vmcore.propertymanager.Document.fullscreenElement = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.adoptedStyleSheets = null;
Object.defineProperty(Document.prototype, "adoptedStyleSheets", {
    get: function adoptedStyleSheets() {
        Developer.log("[dev] Document.prototype adoptedStyleSheets 描述符 get 被调用了");
        return vmcore.propertymanager.Document.adoptedStyleSheets;
    },
    set: function adoptedStyleSheets(val) {
        Developer.log("[dev] Document.prototype adoptedStyleSheets 描述符 set 被调用了");
        vmcore.propertymanager.Document.adoptedStyleSheets = val;
    },
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.pictureInPictureElement = null;
Object.defineProperty(Document.prototype, "pictureInPictureElement", {
    get: function pictureInPictureElement() {
        Developer.log("[dev] Document.prototype pictureInPictureElement 描述符 get 被调用了");
        return vmcore.propertymanager.Document.pictureInPictureElement;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

vmcore.propertymanager.Document.fonts = null;
Object.defineProperty(Document.prototype, "fonts", {
    get: function fonts() {
        Developer.log("[dev] Document.prototype fonts 描述符 get 被调用了");
        return vmcore.propertymanager.Document.fonts;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(Document.prototype, "adoptNode", {
    value: function adoptNode() {
        Developer.log("[dev] Document.prototype adoptNode 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.adoptNode);

Object.defineProperty(Document.prototype, "append", {
    value: function append() {
        Developer.log("[dev] Document.prototype append 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.append);

Object.defineProperty(Document.prototype, "captureEvents", {
    value: function captureEvents() {
        Developer.log("[dev] Document.prototype captureEvents 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.captureEvents);

Object.defineProperty(Document.prototype, "caretRangeFromPoint", {
    value: function caretRangeFromPoint() {
        Developer.log("[dev] Document.prototype caretRangeFromPoint 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.caretRangeFromPoint);

Object.defineProperty(Document.prototype, "clear", {
    value: function clear() {
        Developer.log("[dev] Document.prototype clear 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.clear);

Object.defineProperty(Document.prototype, "close", {
    value: function close() {
        Developer.log("[dev] Document.prototype close 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.close);

Object.defineProperty(Document.prototype, "createAttribute", {
    value: function createAttribute() {
        Developer.log("[dev] Document.prototype createAttribute 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createAttribute);

Object.defineProperty(Document.prototype, "createAttributeNS", {
    value: function createAttributeNS() {
        Developer.log("[dev] Document.prototype createAttributeNS 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createAttributeNS);

Object.defineProperty(Document.prototype, "createCDATASection", {
    value: function createCDATASection() {
        Developer.log("[dev] Document.prototype createCDATASection 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createCDATASection);

Object.defineProperty(Document.prototype, "createComment", {
    value: function createComment() {
        Developer.log("[dev] Document.prototype createComment 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createComment);

Object.defineProperty(Document.prototype, "createDocumentFragment", {
    value: function createDocumentFragment() {
        Developer.log("[dev] Document.prototype createDocumentFragment 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createDocumentFragment);

Object.defineProperty(Document.prototype, "createElement", {
    value: function createElement(tagName) {
        Developer.log("[dev] Document.prototype createElement 描述符 value 被调用了", tagName);
        var tagName = ("" + tagName).toLowerCase();
        // 在这里调用对应的方法统一创建对应标签，而不是写很多个if...else if等，那样太麻烦也太有限了。
        if (!vmcore.memory.CreateElement[tagName]) {
            //还没有实现的，需要在如HTMLDivElement.js中实现
            return null;
        }
        //对创建的对象挂上代理
        // return vmcore.memory.CreateElement[tagName]();
        return vmcore.proxy(vmcore.memory.CreateElement[tagName]());
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createElement);

Object.defineProperty(Document.prototype, "createElementNS", {
    value: function createElementNS() {
        Developer.log("[dev] Document.prototype createElementNS 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createElementNS);

Object.defineProperty(Document.prototype, "createEvent", {
    value: function createEvent() {
        Developer.log("[dev] Document.prototype createEvent 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createEvent);

Object.defineProperty(Document.prototype, "createExpression", {
    value: function createExpression(xpathText, namespaceURLMapper) {
        Developer.log("[dev] Document.prototype createExpression 描述符 value 被调用了", xpathText, namespaceURLMapper);
        let obj = {};
        obj.__proto__ = XPathExpression;
        return obj;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createExpression);

Object.defineProperty(Document.prototype, "createNSResolver", {
    value: function createNSResolver() {
        Developer.log("[dev] Document.prototype createNSResolver 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createNSResolver);

Object.defineProperty(Document.prototype, "createNodeIterator", {
    value: function createNodeIterator() {
        Developer.log("[dev] Document.prototype createNodeIterator 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createNodeIterator);

Object.defineProperty(Document.prototype, "createProcessingInstruction", {
    value: function createProcessingInstruction() {
        Developer.log("[dev] Document.prototype createProcessingInstruction 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createProcessingInstruction);

Object.defineProperty(Document.prototype, "createRange", {
    value: function createRange() {
        Developer.log("[dev] Document.prototype createRange 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createRange);

Object.defineProperty(Document.prototype, "createTextNode", {
    value: function createTextNode() {
        Developer.log("[dev] Document.prototype createTextNode 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createTextNode);

Object.defineProperty(Document.prototype, "createTreeWalker", {
    value: function createTreeWalker() {
        Developer.log("[dev] Document.prototype createTreeWalker 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.createTreeWalker);

Object.defineProperty(Document.prototype, "elementFromPoint", {
    value: function elementFromPoint() {
        Developer.log("[dev] Document.prototype elementFromPoint 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.elementFromPoint);

Object.defineProperty(Document.prototype, "elementsFromPoint", {
    value: function elementsFromPoint() {
        Developer.log("[dev] Document.prototype elementsFromPoint 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.elementsFromPoint);

Object.defineProperty(Document.prototype, "evaluate", {
    value: function evaluate() {
        Developer.log("[dev] Document.prototype evaluate 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.evaluate);

Object.defineProperty(Document.prototype, "execCommand", {
    value: function execCommand() {
        Developer.log("[dev] Document.prototype execCommand 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.execCommand);

Object.defineProperty(Document.prototype, "exitFullscreen", {
    value: function exitFullscreen() {
        Developer.log("[dev] Document.prototype exitFullscreen 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.exitFullscreen);

Object.defineProperty(Document.prototype, "exitPictureInPicture", {
    value: function exitPictureInPicture() {
        Developer.log("[dev] Document.prototype exitPictureInPicture 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.exitPictureInPicture);

Object.defineProperty(Document.prototype, "exitPointerLock", {
    value: function exitPointerLock() {
        Developer.log("[dev] Document.prototype exitPointerLock 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.exitPointerLock);

Object.defineProperty(Document.prototype, "getAnimations", {
    value: function getAnimations() {
        Developer.log("[dev] Document.prototype getAnimations 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.getAnimations);

Object.defineProperty(Document.prototype, "getElementById", {
    value: function getElementById(tagId) {
        Developer.log("[dev] Document.prototype getElementById 描述符 value 被调用了", tagId);
        return null;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.getElementById);

Object.defineProperty(Document.prototype, "getElementsByClassName", {
    value: function getElementsByClassName() {
        Developer.log("[dev] Document.prototype getElementsByClassName 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.getElementsByClassName);

Object.defineProperty(Document.prototype, "getElementsByName", {
    value: function getElementsByName(name) {
        Developer.log("[dev] Document.prototype getElementsByName 描述符 value 被调用了", name);
        if (name == "head") {
            return [this.head];
        }
        return null;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.getElementsByName);

Object.defineProperty(Document.prototype, "getElementsByTagName", {
    value: function getElementsByTagName(tagName) {
        Developer.log("[dev] Document.prototype getElementsByTagName 描述符 value 被调用了", "tagName:", tagName);
        var element_list = [];

        if (tagName == "head") {
            element_list.push(this.head);
        }
        else if (tagName == "script") {
            let s1 = vmcore.memory.CreateElement["script"]();
            let s2 = vmcore.memory.CreateElement["script"]();
            s1.markname = "script1";
            s2.markname = "script2";
            element_list.push(s1);
            element_list.push(s2);
        }
        else if (tagName == "meta") {
            let m1 = vmcore.memory.CreateElement["meta"]();
            let m2 = vmcore.memory.CreateElement["meta"]();
            m1.markname = "meta1";
            m2.markname = "meta2";
            element_list.push(m1);
            element_list.push(m2);
        }
        element_list.__proto__ = HTMLCollection.prototype;
        return element_list;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.getElementsByTagName);

Object.defineProperty(Document.prototype, "getElementsByTagNameNS", {
    value: function getElementsByTagNameNS() {
        Developer.log("[dev] Document.prototype getElementsByTagNameNS 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.getElementsByTagNameNS);

Object.defineProperty(Document.prototype, "getSelection", {
    value: function getSelection() {
        Developer.log("[dev] Document.prototype getSelection 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.getSelection);

Object.defineProperty(Document.prototype, "hasFocus", {
    value: function hasFocus() {
        Developer.log("[dev] Document.prototype hasFocus 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.hasFocus);

Object.defineProperty(Document.prototype, "hasStorageAccess", {
    value: function hasStorageAccess() {
        Developer.log("[dev] Document.prototype hasStorageAccess 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.hasStorageAccess);

Object.defineProperty(Document.prototype, "hasUnpartitionedCookieAccess", {
    value: function hasUnpartitionedCookieAccess() {
        Developer.log("[dev] Document.prototype hasUnpartitionedCookieAccess 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.hasUnpartitionedCookieAccess);

Object.defineProperty(Document.prototype, "importNode", {
    value: function importNode() {
        Developer.log("[dev] Document.prototype importNode 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.importNode);

Object.defineProperty(Document.prototype, "open", {
    value: function open() {
        Developer.log("[dev] Document.prototype open 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.open);

Object.defineProperty(Document.prototype, "prepend", {
    value: function prepend() {
        Developer.log("[dev] Document.prototype prepend 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.prepend);

Object.defineProperty(Document.prototype, "queryCommandEnabled", {
    value: function queryCommandEnabled() {
        Developer.log("[dev] Document.prototype queryCommandEnabled 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.queryCommandEnabled);

Object.defineProperty(Document.prototype, "queryCommandIndeterm", {
    value: function queryCommandIndeterm() {
        Developer.log("[dev] Document.prototype queryCommandIndeterm 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.queryCommandIndeterm);

Object.defineProperty(Document.prototype, "queryCommandState", {
    value: function queryCommandState() {
        Developer.log("[dev] Document.prototype queryCommandState 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.queryCommandState);

Object.defineProperty(Document.prototype, "queryCommandSupported", {
    value: function queryCommandSupported() {
        Developer.log("[dev] Document.prototype queryCommandSupported 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.queryCommandSupported);

Object.defineProperty(Document.prototype, "queryCommandValue", {
    value: function queryCommandValue() {
        Developer.log("[dev] Document.prototype queryCommandValue 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.queryCommandValue);

Object.defineProperty(Document.prototype, "querySelector", {
    value: function querySelector() {
        Developer.log("[dev] Document.prototype querySelector 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.querySelector);

Object.defineProperty(Document.prototype, "querySelectorAll", {
    value: function querySelectorAll() {
        Developer.log("[dev] Document.prototype querySelectorAll 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.querySelectorAll);

Object.defineProperty(Document.prototype, "releaseEvents", {
    value: function releaseEvents() {
        Developer.log("[dev] Document.prototype releaseEvents 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.releaseEvents);

Object.defineProperty(Document.prototype, "replaceChildren", {
    value: function replaceChildren() {
        Developer.log("[dev] Document.prototype replaceChildren 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.replaceChildren);

Object.defineProperty(Document.prototype, "requestStorageAccess", {
    value: function requestStorageAccess() {
        Developer.log("[dev] Document.prototype requestStorageAccess 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.requestStorageAccess);

Object.defineProperty(Document.prototype, "requestStorageAccessFor", {
    value: function requestStorageAccessFor() {
        Developer.log("[dev] Document.prototype requestStorageAccessFor 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.requestStorageAccessFor);

Object.defineProperty(Document.prototype, "startViewTransition", {
    value: function startViewTransition() {
        Developer.log("[dev] Document.prototype startViewTransition 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.startViewTransition);

Object.defineProperty(Document.prototype, "webkitCancelFullScreen", {
    value: function webkitCancelFullScreen() {
        Developer.log("[dev] Document.prototype webkitCancelFullScreen 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.webkitCancelFullScreen);

Object.defineProperty(Document.prototype, "webkitExitFullscreen", {
    value: function webkitExitFullscreen() {
        Developer.log("[dev] Document.prototype webkitExitFullscreen 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.webkitExitFullscreen);

Object.defineProperty(Document.prototype, "write", {
    value: function write() {
        Developer.log("[dev] Document.prototype write 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.write);

Object.defineProperty(Document.prototype, "writeln", {
    value: function writeln() {
        Developer.log("[dev] Document.prototype writeln 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.writeln);

vmcore.propertymanager.Document.fragmentDirective = null;
Object.defineProperty(Document.prototype, "fragmentDirective", {
    get: function fragmentDirective() {
        Developer.log("[dev] Document.prototype fragmentDirective 描述符 get 被调用了");
        return vmcore.propertymanager.Document.fragmentDirective;
    },
    set: undefined,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(Document.prototype, "browsingTopics", {
    value: function browsingTopics() {
        Developer.log("[dev] Document.prototype browsingTopics 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.browsingTopics);

Object.defineProperty(Document.prototype, "hasPrivateToken", {
    value: function hasPrivateToken() {
        Developer.log("[dev] Document.prototype hasPrivateToken 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.hasPrivateToken);

Object.defineProperty(Document.prototype, "hasRedemptionRecord", {
    value: function hasRedemptionRecord() {
        Developer.log("[dev] Document.prototype hasRedemptionRecord 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
vmcore.func_set_native(Document.prototype.hasRedemptionRecord);

vmcore.propertymanager.Document.onscrollend = null;
Object.defineProperty(Document.prototype, "onscrollend", {
    get: function onscrollend() {
        Developer.log("[dev] Document.prototype onscrollend 描述符 get 被调用了");
        return vmcore.propertymanager.Document.onscrollend;
    },
    set: function onscrollend(val) {
        Developer.log("[dev] Document.prototype onscrollend 描述符 set 被调用了");
        vmcore.propertymanager.Document.onscrollend = val;
    },
    enumerable: true,
    configurable: true,
});
// -------------------------------------------------------------



