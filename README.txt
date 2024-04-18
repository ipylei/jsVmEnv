//------------------------
    u_init.js
//------------------------


1、扣JS，人为导出啥的
2、补环境，即扣下来的JS原封不动，因为js可能是动态的
       扣出来JS后，如果JS在变，不是单纯的变量在变，而是值在变而且变的地方还很多，
       但是整体逻辑或者说流程没变，则需要使用补头的方式。
       如果不变则扣js简单些。

(*)补的过程：
    1.hasOwnProperty： 检测是不是自己的属性
    2.Object.getOwnPropertyDescriptor、Object.getOwnPropertyDescriptors
      检测是数据属性还是访问器属性


(*)构造方法调用就报错(如Navigator、Location、HTMLDivElement)，但可以通过另外一个方法创建(如document.createElement，而HTMLDivElement就报错）
    解决：
        1)、自己写一个方法，创建的实例，其原型对象(__proto__)指向构造方法的原型对象(prototype)。
                1、参照bom系列的对象(如location, navigator)； 
                2、参照document.createElement()中创建一个新对象，该新对象的原型为HTMLDivElement.prototype, 这样该新对象 instanceof HTMLDivElement的结果就为true了。

        (x)//跟上面没区别document.createElement()，只是这个方法是游离的而已，尽量不要污染全局空间。
        2)、若确实需要一个方法来动态构建对象，则自己实现一个方法，方法里面先创建一个空对象，该对象的__proto__指向构造方法的prototype, 最后返回该对象
                参照catvm.memory.Plugin.$new, 因为构造方法{Plugin}不能调用，所以就自己创建一个方法绑定到catvm.memory.Plugin上面去，
                在方法里面创建一个对象，并将该对象的原型__proto__ = Plugin.prototype。


(*)属性在原型对象上，实例可以访问属性， 但其原型对象访问就报错；
    解决：方法一:参照Navigator.js
          方法二:判断其this
(*)方法在原型上，实例能调用，原型不能调用，但能访问
    解决：判断其this

(*)若属性是固定的，则应设置为一个固定值； //Storage.prototype.length = 0;
   若属性是动态的、或者根据其this有关的，则
    *)设置为一个function：Storage.prototype.__defineGetter__("length", function () {return Object.keys(this).length;}); 有点类似于传名调用和传值调用?
    *)设置为一个对象，这样其他地方修改这个对象时，也会跟着改变。 如：Navigator.totalProp.plugins，Navigator.totalProp.mimeTypes。


【*】
    *)全局对象window被代理了，但self、this等是不会被代理上的(其实相当与直接操作了target)。
    *)proxy代理的对象有控制开关。
    *)代码中的dbugger不用管，正常模式不会暂停住，就算是调试模式也可以鼠标右键让程序不会在此处暂停。
    *)vscode里用鼠标创建的断点也会在浏览器无环境联调生效，所以其实还是vscode在执行。
    
    *)Navigator.js中的navigator、Plugin.js、PluginArray.js、MimeType.js是沒有依赖关系(即先后顺序)的，
        :就算有依赖关系也应该裁掉保证其独立性，可以绑定到内存对象上如：catvm.memory.PluginArray = {};
        :其实例的关联关系是在u_plugins.js中实现的。





框架代码 
+ 针对目标网站的初始化代码(xxx_init.js) 
+ 目标网站代码(xxx_code.js) 
+ 针对目标网站的导出代码(xxx_export.js, 因为vm2框架只返回最后一个对象)
