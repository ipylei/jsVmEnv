EventTarget = function EventTarget() {

}; vmcore.func_set_native(EventTarget);

Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "EventTarget",
        configurable: true
    }
});


//给原型对象补属性或方法
//-----------------------------------------------------
// //绑定事件(事件名，事件处理函数)；其中事件名对应的事件还未使用document.createEvent('Event');创建
// EventTarget.prototype.addEventListener = function addEventListener(type, listener, options, useCapture) {
//     /* 
//         type: 表示监听事件类型的大小写敏感的字符串。
//         listener: 事件函数
//         options: 一个指定有关 listener 属性的可选参数对象。可用的选项如下：
//                 capture：可选。一个布尔值，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
//                 once：可选。一个布尔值，表示 listener 在添加之后最多只调用一次。如果为 true，listener 会在其被调用之后自动移除。
//     */
//     // this
//     debugger;
//     // this[type] = listener.bind(this); //可能有参数! 暂时先这样
//     if (!vmcore.memory.listeners[type]) {
//         vmcore.memory.listeners[type] = [];
//     }
//     vmcore.memory.listeners[type].push(listener.bind ? listener.bind(this) : listener); //可能有参数! 暂时先这样
// }; vmcore.func_set_native(EventTarget.prototype.addEventListener);

//绑定事件(事件名，事件处理函数)；其中事件名对应的事件还未使用document.createEvent('Event');创建
Object.defineProperty(EventTarget.prototype, "addEventListener", {
    value: function addEventListener(type, listener, options, useCapture) {
        /* 
        type: 表示监听事件类型的大小写敏感的字符串。
        listener: 事件函数
        options: 一个指定有关 listener 属性的可选参数对象。可用的选项如下：
            capture：可选。一个布尔值，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
            once：可选。一个布尔值，表示 listener 在添加之后最多只调用一次。如果为 true，listener 会在其被调用之后自动移除。
        */

        Developer.log("[dev] EventTarget.prototype addEventListener 描述符 value 被调用了", "type->", type);

        // // this[type] = listener.bind(this); //可能有参数! 暂时先这样
        // if (!vmcore.memory.listeners[type]) {
        //     vmcore.memory.listeners[type] = [];
        // }
        // //可能有参数! 暂时先这样
        // vmcore.memory.listeners[type].push(listener.bind ? listener.bind(this) : listener); 

        if(type == "onclick"){
            setTimeout(function(){
                return listener("arg1", "arg2");
            }, 1000);
        }
        

    },
    writable: true,
    enumerable: true,
    configurable: true,
}); vmcore.func_set_native(EventTarget.prototype.addEventListener);

//触发事件
Object.defineProperty(EventTarget.prototype, "dispatchEvent", {
    value: function dispatchEvent() {
        Developer.log("EventTarget.prototype dispatchEvent 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
}); vmcore.func_set_native(EventTarget.prototype.dispatchEvent);

//移除事件
Object.defineProperty(EventTarget.prototype, "removeEventListener", {
    value: function removeEventListener() {
        Developer.log("EventTarget.prototype removeEventListener 描述符 value 被调用了");
    },
    writable: true,
    enumerable: true,
    configurable: true,
}); vmcore.func_set_native(EventTarget.prototype.removeEventListener);
//-----------------------------------------------------

