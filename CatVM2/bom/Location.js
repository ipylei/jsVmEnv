function Location() {
    //容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; catvm.func_set_native(Location);

Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});


//--------------------------------------------------------


//--------------------------------------------------------

location = new class location { };
location.href = "";
location.hostname = "";
location.host = "";
location.port = "";
location.protocol = "https:";

location.__proto__ = Location.prototype;



