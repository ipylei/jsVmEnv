/* 
注意以下问题：
    (1)若为属性且绑定在原型上，实例去访问正确，而原型去访问抛出错误：
        (先绑定到一个中间属性上如：Navigator.totalProp，再使用getter和setter 或 __defineGetter__和__defineSetter__来判断this)
    (2)若为方法且绑定在原型上，实例去访问正确，而原型上若：
        (访问)抛出错误：需要像属性一样使用getter和setter
        (调用)抛出错误：在该方法里面加个判断this: 如if this instanceOf PluginArray

//示例如下：
属性:
    function Book() {}
    //Book.prototype.name = "皇室惊天-星辰极变";
    //Book.prototype.hobby = "football";

    Book.tmprototype = {};
    Book.tmprototype.name = "皇室惊天-星辰极变";
    Book.tmprototype.hobby = "football";
    ((def_)=>{
        for (var prop in def_.tmprototype) {

            var tempValue = def_.tmprototype[prop];

            //这一坨是一个闭包！
            def_.prototype.__defineGetter__(prop, (function(param) {
                return function() {
                    if (this instanceof def_) {
                        return param;
                    } else {
                        throw new TypeError("Illegal invocation");
                    }
                }
            }
            )(tempValue));
        }
    }
    )(Book)

    var book = {}
    book.__proto__ = Book.prototype;
    Book.prototype.type = "program";       


方法:
    var m = {
            name: "leizi",
            get name(){
                return "ipylei";
            },
            get sayHi(){
                return function sayHello(){
                    console.log("helllo");
                }
            }        
        }        
*/



//* 
//---------------------------------------------------------------------------------
// vmcore.proxy(vmcore.memory.htmlElements[tagName]());  //在Document.js中挂上代理
window.chrome = vmcore.proxy(window.chrome);
window = vmcore.proxy(window);
// self = this = window; //会报错，不能代理

// EventTarget = vmcore.proxy(EventTarget);
document = vmcore.proxy(document);
navigator = vmcore.proxy(navigator);
location = vmcore.proxy(location);
screen = vmcore.proxy(screen);
history = vmcore.proxy(history);
localStorage = vmcore.proxy(localStorage);
sessionStorage = vmcore.proxy(sessionStorage);


if(vmcore.memory.config.proxy){
    self = top = parent = frames = window;
}
//-----------------------------------------------------------------------------------
//*/
