//添加插件, 就算浏览器相同, 但不同用户的插件也有可能不同
vmcore.addPlugin = function (data) {
    /*
        plugin: Plugin.js
        navigator.plugins: PluginArray.js、Navigator.js
        mimeType: MimeType.js
        navigator.mimeTypes: MimeTypeArray.js、Navigator.js
    */


    //创建plugin，创建后它有属于自己的MimeTypes
    var plugin = vmcore.memory.Plugin.$new(data);
    // debugger;

    //把plugin放进navigator.plugins
    navigator.plugins[navigator.plugins.length] = plugin;
    //添加用名称访问方式
    Object.defineProperty(navigator.plugins, plugin.name, {
        value: plugin,
        writable: false,
        enumerable: false,
        configurable: true
    })

    //把plugin中的MimeTypes列表放进navigator.mimeTypes
    for (var index = 0; index < plugin.length; index++) {
        var mimeType = plugin[index];
        navigator.mimeTypes[navigator.mimeTypes.length] = mimeType;
        //添加用名称访问方式
        Object.defineProperty(navigator.mimeTypes, mimeType.type, {
            value: mimeType,
            writable: false,
            enumerable: false,
            configurable: true
        })
    }
};


(function () {
    var sample1 = {
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        name: "Chrome PDF Plugin",
        MimeTypes: [
            {
                type: "application/x-google-chrome-pdf",
                suffixes: "pdf",
                description: "Portable Document Format"
            }
        ]

    }

    var sample2 = {
        description: "",
        filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai",
        name: "Chrome PDF Viewer",
        MimeTypes: [
            {
                type: "application/pdf",
                suffixes: "pdf",
                description: ""
            }
        ]

    }

    var sample3 = {
        description: "",
        filename: "internal-nacl-plugin",
        name: "Native Client",
        MimeTypes: [
            {
                type: "application/x-nacl",
                suffixes: "",
                description: "Native Client Executable"


            },
            {
                type: "application/x-nacl",
                suffixes: "",
                description: "Native Client Executable"


            },
            {
                type: "application/x-pnacl",
                suffixes: "",
                description: "Portable Native Client Executable"

            }
        ]

    }
    vmcore.addPlugin(sample1);
    vmcore.addPlugin(sample2);
    vmcore.addPlugin(sample3);

})()

