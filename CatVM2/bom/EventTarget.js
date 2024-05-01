EventTarget = function EventTarget() {

}; catvm.func_set_native(EventTarget);

Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "EventTarget",
        configurable: true
    }
});


//给原型对象补属性或方法
//-----------------------------------------------------
//绑定事件(事件名，事件处理函数)；其中事件名对应的事件还未使用document.createEvent('Event');创建
EventTarget.prototype.addEventListener = function addEventListener(type, listener, options, useCapture) {
    /* 
        type: 表示监听事件类型的大小写敏感的字符串。
        listener: 事件函数
        options: true表示在捕获阶段触发; false表示在冒泡阶段触发
    */
    // this
    debugger;
    this[type] = listener; //可能有参数! 暂时先这样
}; catvm.func_set_native(EventTarget.prototype.addEventListener);

// 触发事件
EventTarget.prototype.dispatchEvent = function dispatchEvent() {
    //this
    debugger;
}; catvm.func_set_native(EventTarget.prototype.dispatchEvent);

//移除事件
EventTarget.prototype.removeEventListener = function removeEventListener() {
    //this
    debugger;
}; catvm.func_set_native(EventTarget.prototype.removeEventListener);
//-----------------------------------------------------

