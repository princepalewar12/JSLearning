const setOfRollNums = new Set();
setOfRollNums.add(11);
setOfRollNums.add(22);
setOfRollNums.add(33);
setOfRollNums.add(22);
setOfRollNums.add(44);
setOfRollNums.add(88);
setOfRollNums.add(77);
setOfRollNums.add(87);
setOfRollNums.add(33);
console.log(setOfRollNums);
console.log([...setOfRollNums]);
console.log(setOfRollNums.size);
setOfRollNums.delete(22);
console.log(setOfRollNums);
let result = setOfRollNums.has(33)
console.log(result);

console.log(typeof setOfRollNums);

for (const element of setOfRollNums) {
    console.log(element);
}