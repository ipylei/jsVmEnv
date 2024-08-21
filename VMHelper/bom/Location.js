// (() => {
Location = function Location() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(Location);

Object.defineProperty(window, "location", {
    configurable: false,
    enumerable: true,
    get: function location() {
        return location;
    },
    set: function location() {
    }
})

location = new class location { };
location.__proto__ = Location.prototype;


/* Object.defineProperty(window, "Location", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: Location
})
*/

vmcore.propertymanager.Location = {};
vmcore.propertymanager.location = {};
// })()



Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Object.defineProperty(location, "valueOf", {
    value: function valueOf() {
        Developer.log("[dev] location valueOf 描述符 value 被调用了");
        return location;
    },
    writable: false,
    enumerable: false,
    configurable: false,
});
vmcore.func_set_native(location.valueOf);


vmcore.propertymanager.location.ancestorOrigins = { length: 0 };
Object.defineProperty(location, "ancestorOrigins", {
    get: function ancestorOrigins() {
        Developer.log("[dev] location ancestorOrigins 描述符 get 被调用了");
        return vmcore.propertymanager.location.ancestorOrigins;
    },
    set: undefined,
    enumerable: true,
    configurable: false,
});


vmcore.propertymanager.location.href = "";
Object.defineProperty(location, "href", {
    get: function href() {
        Developer.log("[dev] location href 描述符 get 被调用了 >>>", vmcore.propertymanager.location.href);
        return vmcore.propertymanager.location.href;
    },
    set: function href(val) {
        Developer.log("[dev] location href 描述符 set 被调用了 >>>: ", val);
        vmcore.propertymanager.location.href = val;
    },
    enumerable: true,
    configurable: false,
});

vmcore.propertymanager.location.origin = "";
Object.defineProperty(location, "origin", {
    get: function origin() {
        Developer.log("[dev] location origin 描述符 get 被调用了");
        return vmcore.propertymanager.location.origin;
    },
    set: undefined,
    enumerable: true,
    configurable: false,
});

vmcore.propertymanager.location.protocol = "https:";
Object.defineProperty(location, "protocol", {
    get: function protocol() {
        Developer.log("[dev] location protocol 描述符 get 被调用了");
        return vmcore.propertymanager.location.protocol;
    },
    set: function protocol(val) {
        Developer.log("[dev] location protocol 描述符 set 被调用了");
        vmcore.propertymanager.location.protocol = val;
    },
    enumerable: true,
    configurable: false,
});

vmcore.propertymanager.location.host = "";
Object.defineProperty(location, "host", {
    get: function host() {
        Developer.log("[dev] location host 描述符 get 被调用了");
        return vmcore.propertymanager.location.host;
    },
    set: function host(val) {
        Developer.log("[dev] location host 描述符 set 被调用了");
        vmcore.propertymanager.location.host = val;
    },
    enumerable: true,
    configurable: false,
});

vmcore.propertymanager.location.hostname = "python-spider.com";
Object.defineProperty(location, "hostname", {
    get: function hostname() {
        Developer.log("[dev] location hostname 描述符 get 被调用了");
        return vmcore.propertymanager.location.hostname;
    },
    set: function hostname(val) {
        Developer.log("[dev] location hostname 描述符 set 被调用了");
        vmcore.propertymanager.location.hostname = val;
    },
    enumerable: true,
    configurable: false,
});

vmcore.propertymanager.location.port = "";
Object.defineProperty(location, "port", {
    get: function port() {
        Developer.log("[dev] location port 描述符 get 被调用了");
        return vmcore.propertymanager.location.port;
    },
    set: function port(val) {
        Developer.log("[dev] location port 描述符 set 被调用了");
        vmcore.propertymanager.location.port = val;
    },
    enumerable: true,
    configurable: false,
});

vmcore.propertymanager.location.pathname = "/chanllenge/login";
Object.defineProperty(location, "pathname", {
    get: function pathname() {
        Developer.log("[dev] location pathname 描述符 get 被调用了");
        return vmcore.propertymanager.location.pathname;
    },
    set: function pathname(val) {
        Developer.log("[dev] location pathname 描述符 set 被调用了");
        vmcore.propertymanager.location.pathname = val;
    },
    enumerable: true,
    configurable: false,
});

vmcore.propertymanager.location.search = "?rt=https://python-spider.com/forum/content?uid=276";
Object.defineProperty(location, "search", {
    get: function search() {
        Developer.log("[dev] location search 描述符 get 被调用了");
        return vmcore.propertymanager.location.search;
    },
    set: function search(val) {
        Developer.log("[dev] location search 描述符 set 被调用了");
        vmcore.propertymanager.location.search = val;
    },
    enumerable: true,
    configurable: false,
});

vmcore.propertymanager.location.hash = "";
Object.defineProperty(location, "hash", {
    get: function hash() {
        Developer.log("[dev] location hash 描述符 get 被调用了");
        return vmcore.propertymanager.location.hash;
    },
    set: function hash(val) {
        Developer.log("[dev] location hash 描述符 set 被调用了");
        vmcore.propertymanager.location.hash = val;
    },
    enumerable: true,
    configurable: false,
});

Object.defineProperty(location, "assign", {
    value: function assign() {
        Developer.log("[dev] location assign 描述符 value 被调用了");
    },
    writable: false,
    enumerable: true,
    configurable: false,
});
vmcore.func_set_native(location.assign);

Object.defineProperty(location, "reload", {
    value: function reload() {
        Developer.log("[dev] location reload 描述符 value 被调用了");
    },
    writable: false,
    enumerable: true,
    configurable: false,
});
vmcore.func_set_native(location.reload);

Object.defineProperty(location, "replace", {
    value: function replace() {
        Developer.log("[dev] location replace 描述符 value 被调用了");
    },
    writable: false,
    enumerable: true,
    configurable: false,
});
vmcore.func_set_native(location.replace);

Object.defineProperty(location, "toString", {
    value: function toString() {
        Developer.log("[dev] location toString 描述符 value 被调用了");
        return location.href;
    },
    writable: false,
    enumerable: true,
    configurable: false,
});
vmcore.func_set_native(location.toString);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<