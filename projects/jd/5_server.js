// 在沙箱上下文中执行代码
script.runSync(context);

// 将 `doSomething` 函数设置为沙箱中的全局对象引用
const doSomethingRef = jail.getSync('doSomething', { reference: true });
const get_h5st_ref = jail.getSync('get_h5st', { reference: true });
const refresh_finger_ref = jail.getSync('refresh_finger', { reference: true });
const refresh_finger_new_ref = jail.getSync('refresh_finger_new', { reference: true });



// 【*】搭建服务，供外部调用
const PORT = 8992;
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    try {
        console.log("================");
        console.log(req.query);
        let name = req.query["name"];
        console.log("================");
        const ret = doSomethingRef.applySync(undefined, [name], { result: { copy: true } });
        const data = {
            "code": 1,
            "result": ret,
        }
        res.json(data);
        res.send('Hello World! ' + ret);
    } catch (error) {
        const data = {
            "code": 0,
            "result": error.toString()
        }
        res.json(data);
    }
});


//>>> ============================== 参数x-api-eid-token =========================================
// http://localhost:8992/api/build_data
app.post('/api/build_data', (req, res) => {
    try {
        console.log("[POST /api/build_data] ", (new Date()).toString());

        let shopId = req.body["shopId"];
        let venderId = req.body["venderId"] || shopId;
        let pageIdx = parseInt(req.body["pageIdx"]);
        let uuid = req.body["uuid"];
        if (!shopId || !venderId) {
            res.json({
                "code": 0,
                "result": "缺少参数信息"
            });
        }
        const ret = build_data(shopId, venderId, pageIdx, uuid);

        res.json({
            "code": 1,
            "result": ret,
        });
    } catch (error) {
        res.json({
            "code": -1,
            "result": error.toString()
        });
    }
});

// http://localhost:8992/api/encrypt_data
app.post('/api/encrypt_data', (req, res) => {
    try {
        console.log("[POST /api/encrypt_data] ", (new Date()).toString());

        let data = req.body["data"];
        if (!data) {
            res.json({
                "code": 0,
                "result": "缺少参数信息"
            });
        }
        const ret = encrypt_data(data);
        res.json({
            "code": 1,
            "result": ret,
        });
    } catch (error) {
        res.json({
            "code": -1,
            "result": error.toString()
        });
    }
});

// http://localhost:8992/api/cal_h5st
app.post('/api/cal_h5st', (req, res) => {
    try {
        console.log("[POST /api/cal_h5st ] ", (new Date()).toString());

        let data = req.body["data"];
        if (!data) {
            res.json({
                "code": 0,
                "result": "缺少参数信息"
            });
        }

        let canvasfinger = req.query["canvasfinger"] || "";
        let webglfinger = req.query["webglfinger"] || "";

        let fp = req.query["fp"] || "";
        let token = req.query["token"] || "";
        let alogo = req.query["alogo"] || ""
        let tk_alogo = req.query["tk_alogo"] || "";

        refresh_finger_ref.applySync(undefined, [canvasfinger, webglfinger, fp, token, alogo], { result: { copy: true } });
        // refresh_finger_new_ref.applySync(undefined, [canvasfinger, webglfinger, fp, token, alogo, tk_alogo], { result: { copy: true } });

        //1.加密data
        let enc_data = encrypt_data(data);
        // console.log("enc_data=", enc_data);

        //2.根据加密的data生成h5st
        const h5st = get_h5st_ref.applySync(undefined, [JSON.stringify(enc_data)], { result: { copy: true } });

        res.json({
            "code": 1,
            "result": h5st,
        });
    } catch (error) {
        res.json({
            "code": -1,
            "result": error.toString()
        });
    }
});


// http://localhost:8992/api/get_h5st_backup
app.get('/api/get_h5st_backup', (req, res) => {
    try {
        console.log("[GET /api/get_h5st_backup ] ", (new Date()).toString());

        let shopId = req.query["shopId"];
        let venderId = req.query["venderId"];
        let pageIdx = req.query["pageIdx"];
        let uuid = req.query["uuid"];

        let canvasfinger = req.query["canvasfinger"] || "";
        let webglfinger = req.query["webglfinger"] || "";

        let fp = req.query["fp"] || "";
        let token = req.query["token"] || "";
        let alogo = req.query["alogo"] || ""
        let tk_alogo = req.query["tk_alogo"] || "";

        console.log("[POST /api/get_h5st_backup ] ", (new Date()).toString());
        // refresh_finger_ref.applySync(undefined, [canvasfinger, webglfinger, fp, token, alogo], { result: { copy: true } });
        refresh_finger_new_ref.applySync(undefined, [canvasfinger, webglfinger, fp, token, alogo, tk_alogo], { result: { copy: true } });

        //1.构造data，并加密data
        let [data, enc_data] = get_enc_data(shopId, venderId, pageIdx, uuid);
        // console.log("enc_data_backup=", enc_data);


        //2.根据加密的data生成h5st
        const h5st = get_h5st_ref.applySync(undefined, [JSON.stringify(enc_data)], { result: { copy: true } });

        let dct = {
            "data": data,
            "h5st": h5st
        }
        res.json({
            "code": 1,
            "result": dct,
        });
    } catch (error) {
        res.json({
            "code": -1,
            "result": error.toString()
        });
    }
});



//>>> ============================== 访问jd页面时会初始化生成的cookie，发送请求获取x-api-eid-token时会使用到 ===
app.get("/init/genInitCookie", (req, res) => {
    try {
        console.log("[GET /init/genInitCookie ] ", (new Date()).toString());

        let data = genInitCookie();
        res.json({
            "code": 1,
            "result": data
        })
    } catch (error) {
        res.json({
            "code": -1,
            "result": error.toString()
        });
    }
});


//>>> ============================== 参数x-api-eid-token =========================================
app.post("/eid/eid_param", (req, res) => {
    try {
        console.log("[POST /eid/eid_param ] ", (new Date()).toString());

        let canvas2dataurl = req.body["canvas2dataurl"];
        let webgl2dataurl = req.body["webgl2dataurl"]
        let qs = req.body["qs"];
        let fc = req.body["fc"];
        let jsTk = req.body["jsTk"];

        let data = get_eid_token_param(canvas2dataurl, webgl2dataurl, qs, fc, jsTk);
        res.json({
            "code": 1,
            "result": data
        })
    } catch (error) {
        res.json({
            "code": -1,
            "result": error.toString()
        });
    }
});

app.post("/eid/eid_body", (req, res) => {
    try {
        console.log("[POST /eid/eid_body ] ", (new Date()).toString());

        let canvas_finger = req.body["canvas_finger"];
        let data = get_eid_token_body(canvas_finger);
        res.json({
            "code": 1,
            "result": data
        })
    } catch (error) {
        res.json({
            "code": -1,
            "result": error.toString()
        });
    }
});


app.listen(PORT, () => {
    console.log(`Express服务器运行在 http://localhost:${PORT}/`);
});
