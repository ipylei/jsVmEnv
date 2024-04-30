//在框架加载完成之后，code.js加载之前。

//这里面放的是提供给用户自定义的配置
//用户也可以在这里执行一些代码！

必须等所有BOM、DOM、tools等初始化完成后，才能执行
    比如想添加一些插件，则必须先等tools中的catvm.memory加载完毕；然后再等bom中的PluginArray以及navigator加载完毕才可以