console.log(`==================== Object =======================`);
let myObj = {
    3: "HTML",
    2: "css",
    1: "JavaScript"
}
console.log(myObj);
console.log(`============================== KEYS ============================`);
let keys = Object.keys(myObj)
console.log(keys);

console.log(`============================== VALUES ============================`);
let keyValues = Object.values(myObj);
console.log(keyValues);

console.log(`============================== forEach ============================`);
Object.entries(myObj).forEach(([key,value]) => {
    console.log(`keys: ${key}, Values: ${value}`);
});

console.log(`==================== MAP =======================`);
let nameMap = new Map([[3,"HTML"],[2,"Css"],[1,"javaScript"]]);
console.log(nameMap);

console.log(`==================== MAP KEYS =======================`);
let nameMapKeys = nameMap.keys();
console.log(nameMapKeys);

console.log(`==================== MAP entries =======================`);
let nameMapValue = nameMap.entries();
console.log(nameMapValue);

nameMap.forEach((value, key)=>{
    console.log(`keys: ${key}, values: ${value}`);
})