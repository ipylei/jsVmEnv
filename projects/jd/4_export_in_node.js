//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const cryptoJS = require("crypto-js");
// var process = require("process");

var area = "22-1930-0-0";

function _getRandomString(e) {
    return Math.random().toString(36).slice(-e)
}

function ownKeys(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
            n.push.apply(n, o)
    }
    return n
}

//将参数2~n的是属性全部合并/覆盖到参数1上面
function _objectSpread2(j) {
    for (var x = 1; x < arguments.length; x++) {
        var C = null != arguments[x] ? arguments[x] : {};
        x % 2 ? ownKeys(Object(C), !0).forEach((function (x) {
            (0, _defineProperty)(j, x, C[x])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(C)) : ownKeys(Object(C)).forEach((function (x) {
            Object.defineProperty(j, x, Object.getOwnPropertyDescriptor(C, x))
        }
        ))
    }
    return j
}

function _defineProperty(j, x, C) {
    return (x = (0, toPropertyKey)(x)) in j ? Object.defineProperty(j, x, {
        "value": C,
        "enumerable": !0,
        "configurable": !0,
        "writable": !0
    }) : j[x] = C,
        j
}

function toPropertyKey(j) {
    var x = (0,
        toPrimitive)(j, "string");
    return "symbol" == (0, _typeof)(x) ? x : String(x)
}

function toPrimitive(j, x) {
    if ("object" != (0, _typeof)(j) || !j)
        return j;
    var C = j[Symbol.toPrimitive];
    if (void 0 !== C) {
        var z = C.call(j, x || "default");
        if ("object" != (0, _typeof)(z))
            return z;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === x ? String : Number)(j)
}

_typeof = function () {
    return typeof j;
}

function _encryptPkcs7ToJava(e, t, n) {
    var o = cryptoJS.enc.Utf8.parse(t)
        , i = cryptoJS.enc.Utf8.parse(n)
        , a = cryptoJS.enc.Utf8.parse(e);
    return cryptoJS.AES.encrypt(a, o, {
        "iv": i,
        "mode": cryptoJS.mode.CBC,
        "padding": cryptoJS.pad.Pkcs7
    }).ciphertext.toString()
}

//构造请求
function build_body(e) {
    var apiClientParams = {
        "appid": "shop_m_jd_com",
        "area": area,
        "client": "wh5",
        "clientVersion": "11.0.0",
        "screen": "1082*2402",
        // "uuid": "1723538382489 941148464"
        // "uuid": "1732673379181 1298614930"
        // "uuid": "1723538382489941148464"
        "uuid": arguments[3] || "1733452916543797991231"
    }

    var t,
        i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},    //arguments[1]
        a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},    //arguments[2]

        c = Object.assign({}, apiClientParams, a),
        u = (0, _objectSpread2)({
            "functionId": e,                                                       //arguments[0]
            "body": JSON.stringify(i),
            "t": Date.now(),
            // "t": 1733716145210,  //TODO
            "avifSupport": "1", //this.avifSupport,
            "webpSupport": "1",//this.webpSupport
        }, c);

    // m = 'https://api.m.jd.com/client.action';
    return u;
}


function encrypt_data(e) {
    var n = {
        "appid": e.appid,
        "client": e.client,
        "clientVersion": e.clientVersion,
        "functionId": e.functionId,
        "t": e.t,
        "sign": null == e ? void 0 : e.sign,
        "jsonp": null == e ? void 0 : e.jsonp
    }

    n.body = cryptoJS.SHA256(e.body).toString();
    return n;
}


function build_data(shopId, venderId, pageIndex, uuid) {
    var queryInfo = {
        shopId: shopId,
        venderId: venderId
    }
    // var area = area;
    var n = area;
    var o = _getRandomString(8) + _getRandomString(8);
    // var o = "ara4vf02ooclzyl8";  //TODO
    var i = cryptoJS.MD5(o).toString().slice(2, 18);



    //先进行固定
    // o = "1mgnjgviw46s7oq9";

    var j = {
        "shopId": queryInfo.shopId,
        "mtest": "",
        "pvid": "",
        "pageIdx": 1,
        "pageSize": 20,
        "sourceRpc": "shop_app_allware_list",
        "queryKey": o,
        "queryMessage": ""
    }

    var e = {
        "searchType": "3",
        "keyWord": "",
        "pageIdx": parseInt(pageIndex),
        "pageId": "Shop_NavigationProductsList",
        "activityId": undefined,
        "activityType": undefined,
        "inStock": 0,
        "jdDeliver": 0,
        "sort": "1",
        "mtest": "app-shop-new-proxy",
        "sourceRpc": "shop_app_allware_list"
    }
    var c = _objectSpread2(j, e);

    var m = "".concat(Date.now(), "|").concat(o);
    // var m = '1733715221969|ara4vf02ooclzyl8';            //TODO
    m = c.shopId ? "".concat(c.shopId, "|").concat(m) : "".concat(c.venderId, "|").concat(m);
    c.queryMessage = _encryptPkcs7ToJava(m, o, i);
    var f = 1 === c.inStock ? {
        "area": n
    } : {};
    "" == c.sort && delete c.sort;

    var data = build_body("whx_searchWare", c, f, uuid);
    return data;
}



// function get_data(shopId, venderId, pageIdx, uuid) {
//     let data = build_data(shopId, venderId, pageIdx, uuid);
//     return data;
// }

// 用于构造h5st, 即 _$b8.sign的入参
function get_enc_data(shopId, venderId, pageIdx, uuid) {
    let data = build_data(shopId, venderId, pageIdx, uuid);
    let enc_data = encrypt_data(data);
    return [data, enc_data];
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function genHash(e) {
    var t, r = 1, i = 0;
    if (e)
        for (r = 0,
            t = e.length - 1; 0 <= t; t--)
            r = 0 !== (i = 266338304 & (r = (r << 6 & 268435455) + (i = e.charCodeAt(t)) + (i << 14))) ? r ^ i >> 21 : r;
    return r
}

//生成uuid，即mba_muid
function genUuid() {
    return (new Date).getTime() + "" + parseInt(2147483647 * Math.random())
}


//打开浏览器时
function genInitCookie() {
    var e, t, r, i,
        n = [],
        a = [],
        o = [],
        s = "",
        d = parseInt((new Date).getTime() / 1e3),
        l = 0,
        c = 1,     //生成 c
        p = "direct",
        u = "-",
        g = "none",
        m = "-";

    i = genUuid();
    t = e = d;
    l = 1;
    r = genHash('jd.com');

    let ckJda = [r, i, e, t, d, c || 1].join(".");
    let ckJdb = [r, l, i + "|" + c, d].join(".");
    let ckJdc = r.toString();
    let I = [r, p || "direct", u || "-", g || "none", m || "-", (new Date).getTime()].join("|");
    let ckJdv = encodeURIComponent(I);

    let _mbaSidSeq = [(new Date).getTime() + "" + parseInt(1e16 * Math.random()), 0];
    let ckmba_sid = _mbaSidSeq.join(".");


    shshshfpa = shshshfpx = J();
    return {
        "language": "zh_CN",
        "__jd_ref_cls":"MDownLoadFloat_SdkLoadStart",

        "__jda": ckJda,
        "__jdb": ckJdb,
        "__jdc": ckJdc,
        "__jdv": ckJdv,

        "mba_muid": i,
        "mba_sid": ckmba_sid,

        "shshshfpa": shshshfpa,
        "shshshfpx": shshshfpx
    };
}

//console.log(genInitCookie());

//生成 shshshfpa 和 shshshfpx
function J() {
    for (var n = "", r = 1; r <= 32; r++) {
        //console.log("-------", r)
        n += Math.floor(Math.random() * 16)['toString'](16);
        8 != r && 12 != r && 16 != r && 20 != r || (n += "-");  //8,12,16,20
    }
    var e = Date.parse(new Date);
    n += "-" + (e = e / 1e3);
    return n;
}
//console.log(J());


//x-api-eid-token相关算法
jdtRiskEncryptUtil = function (g) {
    g.MD5 = function () {
        function l(a, b, e, c, m, n) {
            a = d(d(b, a), d(c, n));
            return d(a << m | a >>> 32 - m, e)
        }

        function k(a, b, e, c, m, n, r) {
            return l(b & e | ~b & c, a, b, m, n, r)
        }

        function f(a, b, e, c, m, n, r) {
            return l(b & c | e & ~c, a, b, m, n, r)
        }

        function h(a, b, e, c, m, n, r) {
            return l(e ^ (b | ~c), a, b, m, n, r)
        }

        function d(a, b) {
            var e = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (e >> 16) << 16 | e & 65535
        }

        return {
            hex_md5: function (a) {
                if (null == a || void 0 == a || "" == a)
                    return "";
                if (null == a || void 0 == a || "" == a)
                    var b = "";
                else {
                    b = [];
                    for (var e = 0; e < 8 * a.length; e += 8)
                        b[e >> 5] |= (a.charCodeAt(e / 8) & 255) << e % 32
                }
                a = 8 * a.length;
                b[a >> 5] |= 128 << a % 32;
                b[(a + 64 >>> 9 << 4) + 14] = a;
                a = 1732584193;
                e = -271733879;
                for (var c = -1732584194, m = 271733878, n = 0; n < b.length; n += 16) {
                    var r = a
                        , p = e
                        , u = c
                        , t = m;
                    a = k(a, e, c, m, b[n + 0], 7, -680876936);
                    m = k(m, a, e, c, b[n + 1], 12, -389564586);
                    c = k(c, m, a, e, b[n + 2], 17, 606105819);
                    e = k(e, c, m, a, b[n + 3], 22, -1044525330);
                    a = k(a, e, c, m, b[n + 4], 7, -176418897);
                    m = k(m, a, e, c, b[n + 5], 12, 1200080426);
                    c = k(c, m, a, e, b[n + 6], 17, -1473231341);
                    e = k(e, c, m, a, b[n + 7], 22, -45705983);
                    a = k(a, e, c, m, b[n + 8], 7, 1770035416);
                    m = k(m, a, e, c, b[n + 9], 12, -1958414417);
                    c = k(c, m, a, e, b[n + 10], 17, -42063);
                    e = k(e, c, m, a, b[n + 11], 22, -1990404162);
                    a = k(a, e, c, m, b[n + 12], 7, 1804603682);
                    m = k(m, a, e, c, b[n + 13], 12, -40341101);
                    c = k(c, m, a, e, b[n + 14], 17, -1502002290);
                    e = k(e, c, m, a, b[n + 15], 22, 1236535329);
                    a = f(a, e, c, m, b[n + 1], 5, -165796510);
                    m = f(m, a, e, c, b[n + 6], 9, -1069501632);
                    c = f(c, m, a, e, b[n + 11], 14, 643717713);
                    e = f(e, c, m, a, b[n + 0], 20, -373897302);
                    a = f(a, e, c, m, b[n + 5], 5, -701558691);
                    m = f(m, a, e, c, b[n + 10], 9, 38016083);
                    c = f(c, m, a, e, b[n + 15], 14, -660478335);
                    e = f(e, c, m, a, b[n + 4], 20, -405537848);
                    a = f(a, e, c, m, b[n + 9], 5, 568446438);
                    m = f(m, a, e, c, b[n + 14], 9, -1019803690);
                    c = f(c, m, a, e, b[n + 3], 14, -187363961);
                    e = f(e, c, m, a, b[n + 8], 20, 1163531501);
                    a = f(a, e, c, m, b[n + 13], 5, -1444681467);
                    m = f(m, a, e, c, b[n + 2], 9, -51403784);
                    c = f(c, m, a, e, b[n + 7], 14, 1735328473);
                    e = f(e, c, m, a, b[n + 12], 20, -1926607734);
                    a = l(e ^ c ^ m, a, e, b[n + 5], 4, -378558);
                    m = l(a ^ e ^ c, m, a, b[n + 8], 11, -2022574463);
                    c = l(m ^ a ^ e, c, m, b[n + 11], 16, 1839030562);
                    e = l(c ^ m ^ a, e, c, b[n + 14], 23, -35309556);
                    a = l(e ^ c ^ m, a, e, b[n + 1], 4, -1530992060);
                    m = l(a ^ e ^ c, m, a, b[n + 4], 11, 1272893353);
                    c = l(m ^ a ^ e, c, m, b[n + 7], 16, -155497632);
                    e = l(c ^ m ^ a, e, c, b[n + 10], 23, -1094730640);
                    a = l(e ^ c ^ m, a, e, b[n + 13], 4, 681279174);
                    m = l(a ^ e ^ c, m, a, b[n + 0], 11, -358537222);
                    c = l(m ^ a ^ e, c, m, b[n + 3], 16, -722521979);
                    e = l(c ^ m ^ a, e, c, b[n + 6], 23, 76029189);
                    a = l(e ^ c ^ m, a, e, b[n + 9], 4, -640364487);
                    m = l(a ^ e ^ c, m, a, b[n + 12], 11, -421815835);
                    c = l(m ^ a ^ e, c, m, b[n + 15], 16, 530742520);
                    e = l(c ^ m ^ a, e, c, b[n + 2], 23, -995338651);
                    a = h(a, e, c, m, b[n + 0], 6, -198630844);
                    m = h(m, a, e, c, b[n + 7], 10, 1126891415);
                    c = h(c, m, a, e, b[n + 14], 15, -1416354905);
                    e = h(e, c, m, a, b[n + 5], 21, -57434055);
                    a = h(a, e, c, m, b[n + 12], 6, 1700485571);
                    m = h(m, a, e, c, b[n + 3], 10, -1894986606);
                    c = h(c, m, a, e, b[n + 10], 15, -1051523);
                    e = h(e, c, m, a, b[n + 1], 21, -2054922799);
                    a = h(a, e, c, m, b[n + 8], 6, 1873313359);
                    m = h(m, a, e, c, b[n + 15], 10, -30611744);
                    c = h(c, m, a, e, b[n + 6], 15, -1560198380);
                    e = h(e, c, m, a, b[n + 13], 21, 1309151649);
                    a = h(a, e, c, m, b[n + 4], 6, -145523070);
                    m = h(m, a, e, c, b[n + 11], 10, -1120210379);
                    c = h(c, m, a, e, b[n + 2], 15, 718787259);
                    e = h(e, c, m, a, b[n + 9], 21, -343485551);
                    a = d(a, r);
                    e = d(e, p);
                    c = d(c, u);
                    m = d(m, t)
                }
                b = [a, e, c, m];
                a = "";
                for (e = 0; e < 4 * b.length; e++)
                    a += "0123456789abcdef".charAt(b[e >> 2] >> e % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(b[e >> 2] >> e % 4 * 8 & 15);
                return a
            }
        }
    }();
    g.HASH = function () {
        function l(b, e) {
            b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
            e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535];
            var c = [0, 0, 0, 0];
            c[3] += b[3] + e[3];
            c[2] += c[3] >>> 16;
            c[3] &= 65535;
            c[2] += b[2] + e[2];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[1] += b[1] + e[1];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[0] += b[0] + e[0];
            c[0] &= 65535;
            return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
        }

        function k(b, e) {
            b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
            e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535];
            var c = [0, 0, 0, 0];
            c[3] += b[3] * e[3];
            c[2] += c[3] >>> 16;
            c[3] &= 65535;
            c[2] += b[2] * e[3];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[2] += b[3] * e[2];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[1] += b[1] * e[3];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[1] += b[2] * e[2];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[1] += b[3] * e[1];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[0] += b[0] * e[3] + b[1] * e[2] + b[2] * e[1] + b[3] * e[0];
            c[0] &= 65535;
            return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
        }

        function f(b, e) {
            e %= 64;
            if (32 === e)
                return [b[1], b[0]];
            if (32 > e)
                return [b[0] << e | b[1] >>> 32 - e, b[1] << e | b[0] >>> 32 - e];
            e -= 32;
            return [b[1] << e | b[0] >>> 32 - e, b[0] << e | b[1] >>> 32 - e]
        }

        function h(b, e) {
            e %= 64;
            return 0 === e ? b : 32 > e ? [b[0] << e | b[1] >>> 32 - e, b[1] << e] : [b[1] << e - 32, 0]
        }

        function d(b, e) {
            return [b[0] ^ e[0], b[1] ^ e[1]]
        }

        function a(b) {
            b = d(b, [0, b[0] >>> 1]);
            b = k(b, [4283543511, 3981806797]);
            b = d(b, [0, b[0] >>> 1]);
            b = k(b, [3301882366, 444984403]);
            return b = d(b, [0, b[0] >>> 1])
        }

        return {
            hash128: function (b, e) {
                b = b || "";
                var c = e || 0;
                e = b.length % 16;
                var m = b.length - e
                    , n = [0, c];
                c = [0, c];
                for (var r, p, u = [2277735313, 289559509], t = [1291169091, 658871167], q = 0; q < m; q += 16)
                    r = [b.charCodeAt(q + 4) & 255 | (b.charCodeAt(q + 5) & 255) << 8 | (b.charCodeAt(q + 6) & 255) << 16 | (b.charCodeAt(q + 7) & 255) << 24, b.charCodeAt(q) & 255 | (b.charCodeAt(q + 1) & 255) << 8 | (b.charCodeAt(q + 2) & 255) << 16 | (b.charCodeAt(q + 3) & 255) << 24],
                        p = [b.charCodeAt(q + 12) & 255 | (b.charCodeAt(q + 13) & 255) << 8 | (b.charCodeAt(q + 14) & 255) << 16 | (b.charCodeAt(q + 15) & 255) << 24, b.charCodeAt(q + 8) & 255 | (b.charCodeAt(q + 9) & 255) << 8 | (b.charCodeAt(q + 10) & 255) << 16 | (b.charCodeAt(q + 11) & 255) << 24],
                        r = k(r, u),
                        r = f(r, 31),
                        r = k(r, t),
                        n = d(n, r),
                        n = f(n, 27),
                        n = l(n, c),
                        n = l(k(n, [0, 5]), [0, 1390208809]),
                        p = k(p, t),
                        p = f(p, 33),
                        p = k(p, u),
                        c = d(c, p),
                        c = f(c, 31),
                        c = l(c, n),
                        c = l(k(c, [0, 5]), [0, 944331445]);
                r = [0, 0];
                p = [0, 0];
                switch (e) {
                    case 15:
                        p = d(p, h([0, b.charCodeAt(q + 14)], 48));
                    case 14:
                        p = d(p, h([0, b.charCodeAt(q + 13)], 40));
                    case 13:
                        p = d(p, h([0, b.charCodeAt(q + 12)], 32));
                    case 12:
                        p = d(p, h([0, b.charCodeAt(q + 11)], 24));
                    case 11:
                        p = d(p, h([0, b.charCodeAt(q + 10)], 16));
                    case 10:
                        p = d(p, h([0, b.charCodeAt(q + 9)], 8));
                    case 9:
                        p = d(p, [0, b.charCodeAt(q + 8)]),
                            p = k(p, t),
                            p = f(p, 33),
                            p = k(p, u),
                            c = d(c, p);
                    case 8:
                        r = d(r, h([0, b.charCodeAt(q + 7)], 56));
                    case 7:
                        r = d(r, h([0, b.charCodeAt(q + 6)], 48));
                    case 6:
                        r = d(r, h([0, b.charCodeAt(q + 5)], 40));
                    case 5:
                        r = d(r, h([0, b.charCodeAt(q + 4)], 32));
                    case 4:
                        r = d(r, h([0, b.charCodeAt(q + 3)], 24));
                    case 3:
                        r = d(r, h([0, b.charCodeAt(q + 2)], 16));
                    case 2:
                        r = d(r, h([0, b.charCodeAt(q + 1)], 8));
                    case 1:
                        r = d(r, [0, b.charCodeAt(q)]),
                            r = k(r, u),
                            r = f(r, 31),
                            r = k(r, t),
                            n = d(n, r)
                }
                n = d(n, [0, b.length]);
                c = d(c, [0, b.length]);
                n = l(n, c);
                c = l(c, n);
                n = a(n);
                c = a(c);
                n = l(n, c);
                c = l(c, n);
                return ("00000000" + (n[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (n[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
            }
        }
    }();
    g.TDEncrypt = function () {
        return function (l) {
            l = JSON.stringify(l);
            l = encodeURIComponent(l);
            var k = ""
                , f = 0;
            do {
                var h = l.charCodeAt(f++);
                var d = l.charCodeAt(f++);
                var a = l.charCodeAt(f++);
                var b = h >> 2;
                h = (h & 3) << 4 | d >> 4;
                var e = (d & 15) << 2 | a >> 6;
                var c = a & 63;
                isNaN(d) ? e = c = 64 : isNaN(a) && (c = 64);
                k = k + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(b) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(h) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(e) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(c)
            } while (f < l.length);
            return k + "/"
        }
    }();
    return g
}({});

function get_eid_token_fp(canvas2dataurl, webgl2dataurl) {
    // console.log("canvas2dataurl=", canvas2dataurl);
    // console.log("webgl2dataurl=", webgl2dataurl);
    canvas2dataurl = canvas2dataurl || "data:image/png;base64,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";
    webgl2dataurl = webgl2dataurl || "data:image/png;base64,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§extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_texture_mirror_clamp_to_edge;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_blend_func_extended;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw;WEBGL_polygon_mode§extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_texture_mirror_clamp_to_edge;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_blend_func_extended;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw;WEBGL_polygon_mode§w1[1, 1]§w2[1, 1024]§w38§w4yes§w58§w624§w78§w816§w932§w1016384§w111024§w1216384§w1316§w1416384§w1530§w1616§w1716§w184095§w19[32767, 32767]§w208§w21WebKit WebGL§w22WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)§w230§w24WebKit§w25WebGL 1.0 (OpenGL ES 2.0 Chromium)§wuv:Google Inc. (NVIDIA)§wur:ANGLE (NVIDIA, NVIDIA GeForce RTX 3070 Laptop GPU (0x000024DD) Direct3D11 vs_5_0 ps_5_0, D3D11)";

    let plain_fp = [
        "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",  //navigator.userAgent
        "zh-CN",
        "applewebkit_chrome",
        "537.36",
        "linux",
        "NA",
        24,
        "915x412",
        -480,
        "sessionStorageKey",
        "localStorageKey",
        "indexedDbKey",
        "NA",
        "Win32",
        16,
        "NA",
        "",
        canvas2dataurl,
        webgl2dataurl
    ];
    return jdtRiskEncryptUtil.HASH.hash128(plain_fp.join("~~~"), 31);
}
//console.log(get_eid_token_fp());


function get_eid_token_param(canvas2dataurl, webgl2dataurl, qs, fc, jsTk) {
    console.log(">>>2", qs, fc, jsTk)

    let fp = get_eid_token_fp(canvas2dataurl, webgl2dataurl);
    let plain_params = {
        "pin": "",
        "oid": "",
        "bizId": "JDSC-M-SHOP",
        //"fc": undefined,

        "mode": "strict",
        "p": "s",
        // "fp": "0d583e9732941b42190e0f85a6dd6bae",  //localStorage["FFA9D23F7A4B3CSS"]
        "fp": fp,
        "ctype": 1,
        "v": "3.2.1.1",
        "f": "3",
        "o": "shop.m.jd.com/shop/home",
        "qs": qs || "shopId=1000306683",
        "qi": "",

        "fc": fc || undefined,
        "jsTk": jsTk || undefined
    }
    return jdtRiskEncryptUtil.TDEncrypt(plain_params);
}

//console.log(get_eid_token_param())


function get_eid_token_body(canvas_finger) {
    // console.log("canvas_finger=", canvas_finger);

    let s_time = (new Date).getTime();
    let plain_body = {
        "ts": {
            "deviceTime": 1733821991334,
            "deviceEndTime": 1733821991369
        },
        "ca": {
            // "tdHash": "730392c4a690b89b3e6a18b4978ea90c",  //canvas指纹
            "tdHash": canvas_finger || "730392c4a690b89b3e6a18b4978ea90c",  //canvas指纹
            "contextName": "webgl,experimental-webgl",
            "webglversion": "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
            "shadingLV": "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
            "vendor": "WebKit",
            "renderer": "WebKit WebGL",
            "extensions": [
                "ANGLE_instanced_arrays",
                "EXT_blend_minmax",
                "EXT_clip_control",
                "EXT_color_buffer_half_float",
                "EXT_depth_clamp",
                "EXT_disjoint_timer_query",
                "EXT_float_blend",
                "EXT_frag_depth",
                "EXT_polygon_offset_clamp",
                "EXT_shader_texture_lod",
                "EXT_texture_compression_bptc",
                "EXT_texture_compression_rgtc",
                "EXT_texture_filter_anisotropic",
                "EXT_texture_mirror_clamp_to_edge",
                "EXT_sRGB",
                "KHR_parallel_shader_compile",
                "OES_element_index_uint",
                "OES_fbo_render_mipmap",
                "OES_standard_derivatives",
                "OES_texture_float",
                "OES_texture_float_linear",
                "OES_texture_half_float",
                "OES_texture_half_float_linear",
                "OES_vertex_array_object",
                "WEBGL_blend_func_extended",
                "WEBGL_color_buffer_float",
                "WEBGL_compressed_texture_s3tc",
                "WEBGL_compressed_texture_s3tc_srgb",
                "WEBGL_debug_renderer_info",
                "WEBGL_debug_shaders",
                "WEBGL_depth_texture",
                "WEBGL_draw_buffers",
                "WEBGL_lose_context",
                "WEBGL_multi_draw",
                "WEBGL_polygon_mode"
            ],
            "wuv": "Google Inc. (NVIDIA)",
            "wur": "ANGLE (NVIDIA, NVIDIA GeForce RTX 3070 Laptop GPU (0x000024DD) Direct3D11 vs_5_0 ps_5_0, D3D11)"
        },
        "m": {
            "compatMode": "CSS1Compat"
        },
        "n": {
            "vendorSub": "",
            "productSub": "20030107",
            "vendor": "Google Inc.",
            "maxTouchPoints": 1,
            "pdfViewerEnabled": false,
            "hardwareConcurrency": 16,
            "cookieEnabled": true,
            "appCodeName": "Mozilla",
            "appName": "Netscape",
            "appVersion": "5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
            "platform": "Win32",
            "product": "Gecko",
            "userAgent": "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
            "language": "zh-CN",
            "onLine": true,
            "webdriver": false,
            "javaEnabled": false,
            "deprecatedRunAdAuctionEnforcesKAnonymity": false,
            "deviceMemory": 8,
            "enumerationOrder": [
                "vendorSub",
                "productSub",
                "vendor",
                "maxTouchPoints",
                "scheduling",
                "userActivation",
                "doNotTrack",
                "geolocation",
                "connection",
                "plugins",
                "mimeTypes",
                "pdfViewerEnabled",
                "webkitTemporaryStorage",
                "webkitPersistentStorage",
                "windowControlsOverlay",
                "hardwareConcurrency",
                "cookieEnabled",
                "appCodeName",
                "appName",
                "appVersion",
                "platform",
                "product",
                "userAgent",
                "language",
                "languages",
                "onLine",
                "webdriver",
                "getGamepads",
                "javaEnabled",
                "sendBeacon",
                "vibrate",
                "deprecatedRunAdAuctionEnforcesKAnonymity",
                "protectedAudience",
                "bluetooth",
                "storageBuckets",
                "clipboard",
                "credentials",
                "keyboard",
                "managed",
                "mediaDevices",
                "storage",
                "serviceWorker",
                "virtualKeyboard",
                "wakeLock",
                "deviceMemory",
                "userAgentData",
                "login",
                "ink",
                "mediaCapabilities",
                "hid",
                "locks",
                "gpu",
                "mediaSession",
                "permissions",
                "presentation",
                "usb",
                "xr",
                "serial",
                "adAuctionComponents",
                "runAdAuction",
                "canLoadAdAuctionFencedFrame",
                "canShare",
                "share",
                "clearAppBadge",
                "getBattery",
                "getUserMedia",
                "requestMIDIAccess",
                "requestMediaKeySystemAccess",
                "setAppBadge",
                "webkitGetUserMedia",
                "clearOriginJoinedAdInterestGroups",
                "createAuctionNonce",
                "deprecatedReplaceInURN",
                "deprecatedURNToURL",
                "getInstalledRelatedApps",
                "joinAdInterestGroup",
                "leaveAdInterestGroup",
                "updateAdInterestGroups",
                "registerProtocolHandler",
                "unregisterProtocolHandler"
            ]
        },
        "p": [],
        "w": {
            "devicePixelRatio": 2.625,
            "screenTop": 0,
            "screenLeft": 0
        },
        "s": {
            "availHeight": 915,
            "availWidth": 412,
            "colorDepth": 24,
            "height": 915,
            "width": 412,
            "pixelDepth": 24
        },
        "sc": {
            "ActiveBorder": "rgb(0, 0, 0)",
            "ActiveCaption": "rgb(0, 0, 0)",
            "AppWorkspace": "rgb(255, 255, 255)",
            "Background": "rgb(255, 255, 255)",
            "ButtonFace": "rgb(240, 240, 240)",
            "ButtonHighlight": "rgb(240, 240, 240)",
            "ButtonShadow": "rgb(240, 240, 240)",
            "ButtonText": "rgb(0, 0, 0)",
            "CaptionText": "rgb(0, 0, 0)",
            "GrayText": "rgb(109, 109, 109)",
            "Highlight": "rgba(0, 86, 205, 0.8)",
            "HighlightText": "rgb(255, 255, 255)",
            "InactiveBorder": "rgb(0, 0, 0)",
            "InactiveCaption": "rgb(255, 255, 255)",
            "InactiveCaptionText": "rgb(128, 128, 128)",
            "InfoBackground": "rgb(255, 255, 255)",
            "InfoText": "rgb(0, 0, 0)",
            "Menu": "rgb(255, 255, 255)",
            "MenuText": "rgb(0, 0, 0)",
            "Scrollbar": "rgb(255, 255, 255)",
            "ThreeDDarkShadow": "rgb(0, 0, 0)",
            "ThreeDFace": "rgb(240, 240, 240)",
            "ThreeDHighlight": "rgb(0, 0, 0)",
            "ThreeDLightShadow": "rgb(0, 0, 0)",
            "ThreeDShadow": "rgb(0, 0, 0)",
            "Window": "rgb(255, 255, 255)",
            "WindowFrame": "rgb(0, 0, 0)",
            "WindowText": "rgb(0, 0, 0)"
        },
        "ss": {
            "cookie": true,
            "localStorage": true,
            "sessionStorage": true,
            "globalStorage": false,
            "indexedDB": true
        },
        "tz": -480,
        "lil": "",
        "wil": ""
    }

    let e_time = (new Date).getTime();
    plain_body.ts.deviceTime = s_time;
    plain_body.ts.deviceEndTime = e_time;
    return jdtRiskEncryptUtil.TDEncrypt(plain_body);
}

//console.log(get_eid_token_body());