// 所有线程的缓存
var Workers = {}



//子线程(即线程里面的self对象)
var WorkSub = function () { }
//子线程给主线程发送消息
WorkSub.prototype.postMessage = function (msg) { 
    if(typeof this.mainThread.onmessage != "undefined"){
        var event = {"data": msg};
        this.mainThread.onmessage(event);
    }
}

/* 下面是当子线程中，不使用onmessage, 而使用addEventListener绑定事件时的情况 
    (还是用onmessage来触发！ 只不过addEventListener可以绑定多个，那么现在就触发多个！)
*/
WorkSub.prototype.onmessageEvents = [];
WorkSub.prototype.onmessage = function (event) {
    for (var i = 0; i < this.onmessageEvents.length; i++) {
        this.onmessageEvents[i](event);
    }
}
//绑定事件，将来触发(这里直接用一个[]接收，然后全部在onmessage中触发)
WorkSub.prototype.addEventListener = function (type_, func_, bool_) {
    if (type_ == "message") {
        this.onmessageEvents.push(func_);
    }
}




//主线程中的work对象
var Worker = function (jsName, jsCode) {
    //传进来的必须是js代码，而非文件名
    if (typeof Workers[jsName] == "undefined") {
        //这里只是开启线程，防止重复开启而已
        Workers[jsName] = new WorkSub();
        
        Workers[jsName].mainThread = this;
        this.subThread = Workers[jsName];
        

        jsCode = atob(jsCode);
        eval("self=Workers[" + "\"" + jsName + "\"" + "];\r\n" + jsCode);
    }


}

Worker.prototype.postMessage = function (msg) { 
    var event = {"data": msg}
    //这个方法真正是在子线程中定义了!  self.onmessage = function(event){...}
    this.subThread.onmessage(event);
}

/* 注意：下面是当主线程中，不使用onmessage, 而使用addEventListener绑定事件时的情况  */
// 待完善中...
//Worker.prototype.onmessage = function () { }










/* 
 *
 *
 *
 *
 *
 */
var count = 0;
var data = [23, 4, 7, 9, 2, 14, 6, 651, 87, 41, 7798, 24];
//on
//jsCode = "c2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCl7DQoJZGVidWdnZXI7DQoJDQogICAgdmFyIGRhdGEgPSBldmVudC5kYXRhOw0KICAgIGRhdGEuc29ydChmdW5jdGlvbihhLCBiKXsNCiAgICAgICAgcmV0dXJuIGEgLSBiOw0KICAgIH0pOw0KICAgIA0KICAgIHNlbGYucG9zdE1lc3NhZ2UoZGF0YSk7DQp9Ow=="
//jsCode = "c2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCl7DQoJZGVidWdnZXI7DQoJDQogICAgdmFyIGRhdGEgPSBldmVudC5kYXRhOw0KICAgIGRhdGEuc29ydChmdW5jdGlvbihhLCBiKXsNCiAgICAgICAgcmV0dXJuIGEgLSBiOw0KICAgIH0pOw0KICAgIA0KICAgIHNlbGYucG9zdE1lc3NhZ2UoZGF0YSk7DQp9Ow0KDQp2YXIgY291bnQgPSAwOw0Kc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXsNCgljb3VudCsrOw0KCXNlbGYucG9zdE1lc3NhZ2UoIi0tLS0iK2NvdW50KTsNCn0sIDMwMDAp"

//jsCode = "aGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7DQoJdmFyIGRhdGEgPSBldmVudC5kYXRhOw0KCWRhdGEuc29ydChmdW5jdGlvbihhLCBiKSB7DQoJCXJldHVybiBhIC0gYjsNCgl9KTsNCg0KCXNlbGYucG9zdE1lc3NhZ2UoZGF0YSk7DQp9Ow0Kc2VsZi5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgaGFuZGxlcik7DQo="
jsCode = "aGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7DQoJdmFyIGRhdGEgPSBldmVudC5kYXRhOw0KCWRhdGEuc29ydChmdW5jdGlvbihhLCBiKSB7DQoJCXJldHVybiBhIC0gYjsNCgl9KTsNCgkNCglzZWxmLnBvc3RNZXNzYWdlKCJoZWxsbyB3b3JsZCIpDQoJc2VsZi5wb3N0TWVzc2FnZShkYXRhKTsNCglzZWxmLnBvc3RNZXNzYWdlKCJoZWxsbyBweXRob24iKQ0KfTsNCnNlbGYuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGhhbmRsZXIpOw0K"

worker = new Worker("work_work.js", jsCode)
worker.onmessage = function (event) {
    //alert(event.data);
    count++;
    console.log(count + "---" + event.data);
}
// debugger;
worker.postMessage(data);
console.log("end!!!!")
