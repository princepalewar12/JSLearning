console.log(`====== Sorting in ascending order ==========`);
const frdNames = ['Jemmy','Bill','Stew','Elon'];
const sortedArray = frdNames.sort();
console.log(sortedArray);

console.log(`====== Sorting in descending order ==========`);
const reverseArray = sortedArray.reverse();
console.log(reverseArray);

console.log(`============= Sorting an array of number ======`);
const array = [29,15,31,111,27,6];
//Sorting an array in ascending order
let reverseArrayNum = array.sort((a,b) =>{
    return a>b ? 1 : -1;
})
console.log(reverseArrayNum);
console.log(reverseArrayNum[0]);