function count (string) {  
let obj = {};
let arr = string.split("").sort();
let set = string != undefined ? new Set(arr) : obj;
for (key of set) {
    obj[key] = 0;
    for (let i = 0; i < arr.length; i++) {
        if (key.charCodeAt() == arr[i].charCodeAt()){
            obj[key] += 1;
        } 
    }
}
console.log(obj);
}

count("aasa"); // { a: 2, s: 3 });   
count("abbbbdfg");   // { a: 2, b: 1 }); 
count("");      // {});    