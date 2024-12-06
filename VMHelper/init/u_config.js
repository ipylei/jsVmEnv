//* 
//---------------------------------------------------------------------------------
// window.chrome = vmcore.proxy(window.chrome);

window = vmcore.proxy(window);

// EventTarget = vmcore.proxy(EventTarget);
document = vmcore.proxy(document);
navigator = vmcore.proxy(navigator);
location = vmcore.proxy(location);
screen = vmcore.proxy(screen);
history = vmcore.proxy(history);
localStorage = vmcore.proxy(localStorage);
sessionStorage = vmcore.proxy(sessionStorage);


// 代理后需要重新设置self、top等
if(vmcore.memory.config.proxy){
    self = top = parent = frames = window;
}

debugger;
//-----------------------------------------------------------------------------------
//*/
