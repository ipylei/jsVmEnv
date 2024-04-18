
window = globalThis;
location = {}
location.href = "========================="

console.log("----", this, this===globalThis);
console.log(location)


function func1(){
    console.log("=====", this, this===globalThis);
    console.log(location);
}

func1();
console.log("-------")