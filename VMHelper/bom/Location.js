Location = function Location() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; vmcore.func_set_native(Location);

Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});


//--------------------------------------------------------
Location.prototype.reload = function(){

}; vmcore.func_set_native(Location.prototype.reload);

//--------------------------------------------------------

location = new class location { };


//以下是访问器属性
// location.href = "";   
// location.hostname = "";
// location.host = "";
// location.port = "";
// location.protocol = "https:";
location.totalProp = {
    href: "",
    hostname: "",
    host: "",
    port: "",
    protocol: "https:",
    pathname: "",
    search: ""
}

for (var prop in location.totalProp) {
    location.__defineGetter__(prop, (function (param) {
        return function () {
            // if (this == Navigator.prototype) {
            if (this instanceof Location) {
                return location.totalProp[param];
            } else {
                throw new TypeError("Illegal invocation");
            }
        };
    })(prop)
    );

    location.__defineSetter__(prop, (function (param) {
        return function (newValue) {
            if(this === location){
                location.totalProp[param] = newValue;
            }else{
                throw new TypeError("Illegal invocation");
            }
        }
    })(prop));
}


location.__proto__ = Location.prototype;



