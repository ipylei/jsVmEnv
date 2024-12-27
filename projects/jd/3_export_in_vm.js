;;;
function _initParamsSignInstance(e) {
    return new window.ParamsSign({
        "appId": e,
        "debug": !1,
        "preRequest": !1,
        "onSign": function onSign(e) {
            e.code
        },
        "onRequestTokenRemotely": function onRequestTokenRemotely(e) {
            e.code,
                e.message
        },
        "onRequestToken": function onRequestToken(e) {
            e.code,
                e.message
        }
    })
}

function get_h5st(params_str) {
    let params = JSON.parse(params_str);

    let signHandler = _initParamsSignInstance("ea491");
    let h5st_val = signHandler["sign"](params);
    return h5st_val;
}

function refresh_finger(canvasfinger, webglfinger, fp, token, alogo) {
    // ilog(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    // ilog("fp=", arguments[0]);
    // ilog("token=", arguments[1]);
    // ilog("canvasfinger=", arguments[2]);
    // ilog("webglfinger=", arguments[3]);
    debugger;

    canvasfinger = canvasfinger || "730392c4a690b89b3e6a18b4978ea90c";
    webglfinger = webglfinger || "8691a1b18a4bd0104bcad38904cf1090";
    fp = fp || "55qhfy0frle49u98";
    token = token || "dGswM3c4YzcyMWJhMzE4bjdWR29TTGpZdTdwMEdpOEJQZUQ3bHVwMVdCdFVNV0NPaVVpWmQ4R3QwRUpFdmU1MGxNWFZhU0JmOUthaFhfd2NVUzFjV1doXzZBeFA=";
    alogo = alogo || "ZnVuY3Rpb24gdGVzdCh0ayxmcCx0cyxhaSxhbGdvKXt2YXIgcmQ9J2NBUjh5bHAzN0xwRCc7dmFyIHN0cj0iIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uSG1hY01ENShzdHIsdGspO30=";



    let now_time = Date.now();

    //存canvas
    localStorage.setItem('WQ_gather_cv1', `{"v":"${canvasfinger}","t":${now_time},"e":31536000}`);
    //存webgl
    localStorage.setItem('WQ_gather_wgl1', `{"v":"${webglfinger}","t":${now_time},"e":31536000}`);

    //存fp
    localStorage.setItem('WQ_vk1_ea491_4.9', `{"v":"${fp}","t":${now_time},"e":31536000}`);
    //存token(base64编码后的)
    localStorage.setItem(`WQ_dy_tk_s_${fp}`, `{"v":"${token}","t":${now_time},"e":86400}`);
    //alogo(一个动态的hmacMD5)
    localStorage.setItem(`WQ_dy_algo_s_${fp}`, `{"v":"${alogo}","t":${now_time},"e":86400}`);

    ilog("更新localStorage");
}

function refresh_finger_new(canvasfinger, webglfinger, fp, token, alogo, tk_algo) {
    ilog(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    ilog("canvasfinger=", canvasfinger);
    ilog("webglfinger=", webglfinger);
    ilog("fp=", fp);
    ilog("tk_algo=", tk_algo);
    debugger;

    canvasfinger = canvasfinger || "730392c4a690b89b3e6a18b4978ea90c";
    webglfinger = webglfinger || "8691a1b18a4bd0104bcad38904cf1090";

    fp = fp || "55qhfy0frle49u98";
    token = token || "dGswM3c4YzcyMWJhMzE4bjdWR29TTGpZdTdwMEdpOEJQZUQ3bHVwMVdCdFVNV0NPaVVpWmQ4R3QwRUpFdmU1MGxNWFZhU0JmOUthaFhfd2NVUzFjV1doXzZBeFA=";
    alogo = alogo || "ZnVuY3Rpb24gdGVzdCh0ayxmcCx0cyxhaSxhbGdvKXt2YXIgcmQ9J2NBUjh5bHAzN0xwRCc7dmFyIHN0cj0iIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uSG1hY01ENShzdHIsdGspO30=";
    tk_algo = tk_algo || "eyJ0ayI6InRrMDN3YjNkMTFjOTkxOG5leEtuTjhJdUFNVzIxckV0YXdkZzBTTzM1YldXWnNxZ3NjY0dEX1VGRzJpVFBtQk11NXFkOGl4UUtab2g3X3lEWnRweHFWbjQxSGE4IiwiYWxnbyI6ImZ1bmN0aW9uIHRlc3QodGssZnAsdHMsYWksYWxnbyl7dmFyIHJkPScwNkMxUzMxQnE5UkonO3ZhciBzdHI9XCJcIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uTUQ1KHN0cik7fSJ9";


    let now_time = Date.now();

    //存canvas
    localStorage.setItem('WQ_gather_cv1', `{"v":"${canvasfinger}","t":${now_time},"e":31536000}`);
    //存webgl
    localStorage.setItem('WQ_gather_wgl1', `{"v":"${webglfinger}","t":${now_time},"e":31536000}`);

    // 兼容旧版本
    //存fp
    localStorage.setItem('WQ_vk1_ea491_4.9', `{"v":"${fp}","t":${now_time},"e":31536000}`);
    //存token(base64编码后的)
    localStorage.setItem(`WQ_dy_tk_s_${fp}`, `{"v":"${token}","t":${now_time},"e":86400}`);
    //alogo(一个动态的hmacMD5)
    localStorage.setItem(`WQ_dy_algo_s_${fp}`, `{"v":"${alogo}","t":${now_time},"e":86400}`);


    //存fp
    localStorage.setItem('WQ_dy1_vk', `{"5.0":{"ea491":{"e":31536000,"v":"${fp}","t":${now_time}}}}`);
    // 存token和alogo(base64编码后的)
    localStorage.setItem('WQ_dy1_tk_algo', `{"as99sar9pdwxcs71":{"ea491":{"v":"${tk_algo}","e":86400,"t":${now_time}}}}`);

    ilog("更新localStorage");
}


function doSomething(name) {
    var rand = parseInt(Math.random() * 10);
    return "" + name + ":" + rand + ">>>>" + new Date();
}


function test_export() {
    //*     
    // refresh_finger();
    refresh_finger_new();

    let params = {
        "appid": "shop_m_jd_com",
        "client": "wh5",
        "clientVersion": "11.0.0",
        "functionId": "whx_searchWare",
        "t": 1733714376954,
        "body": "6f1522c094b97873f8be9feb93506077ca2ba57152d1034405da767c20307ce2"
    }
    debugger;
    let signHandler = _initParamsSignInstance("ea491");
    let h5st_val = signHandler["sign"](params);
    ilog("p3>>>", h5st_val);
    /*/

    /*
    let fp = window.gen_fp();
    let localtk = window.gen_localTk(fp);
    ilog("===", fp);
    ilog("===", localtk);
    */

}

test_export();
