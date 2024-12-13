copy(document.cookie);



localStorage_string = "";
// 遍历 localStorage 中的所有条目
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);        // 获取当前键名
    const value = localStorage.getItem(key); // 获取对应的值
    console.log(key, value);
    localStorage_string += `localStorage.setItem('${key}', '${value}');\n`;
}
copy(localStorage_string);

console.log(localStorage_string);


// 将 localStorage 转换为数组并使用 forEach 遍历
Object.keys(localStorage).forEach(key => {
    const value = localStorage.getItem(key);
    console.log(key, value);
});


// 使用 Object.entries() 遍历 localStorage 中的键值对
Object.entries(localStorage).forEach(([key, value]) => {
    console.log(key, value);
});



sessionStorage_string = "";
// 遍历 sessionStorage 中的所有条目
for (let i = 0; i < sessionStorage.length; i++) {
    const key = localStorage.key(i);        // 获取当前键名
    const value = localStorage.getItem(key); // 获取对应的值
    console.log(key, value);
    sessionStorage_string += `sessionStorage.setItem('${key}', '${value}');\n`;
}
copy(sessionStorage_string);
console.log(sessionStorage_string);