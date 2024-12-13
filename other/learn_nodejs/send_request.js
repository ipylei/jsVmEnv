/* 1.FormData */
let formData = new FormData();
formData.append("k1", "~data1~");
formData.append("k2", "~data2~");

var xhr = new XMLHttpRequest();
xhr.open("POST", "/sec2/lesson2_data_api", false);
xhr.send(formData);



/* 2.x-www-form-urlencoded */
let data2 = "k1" = +encodeURIComponent("~data1~") + "k2" + encodeURIComponent("~data2~");
xhr = new XMLHttpRequest();
xhr.open("POST", "/sec2/lesson2_data_api", false);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(data2);



/* 3.json */
let data3 = JSON.stringify({
    "k1": "~data1~",
    "k2": "~data2~",
})
xhr = new XMLHttpRequest();
xhr.open("POST", "/sec2/lesson2_data_api", false);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(data3);


/* 4.直接传文本 */
let data4 = "普通文本";
xhr = new XMLHttpRequest();
xhr.open("POST", "/sec2/lesson2_data_api", false);
xhr.setRequestHeader("Content-Type", "text/plain");
xhr.send(data4);



/* 5.字节流 */
// let data5 = new Uint8Array([72, 101, 108, 108, 111]);
let data5 = new Uint8Array([72, 101, 128, 138, 111]);
xhr = new XMLHttpRequest();
xhr.open("POST", "/sec2/lesson2_data_api", false);
xhr.setRequestHeader("Content-Type", "application/octet-stream");
xhr.send(data5);
