// // // remove duplicate element using for loop
// let arrayNum = [11, 1, 3, 4, 11, 4, 7, 3];

// function duplicateNum(arr) {
//     let temp = [];
// for(let i=0; i<arr.length-1; i++){
//     //console.log(arr[i]);
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]===arr[j]){
//             temp.push(arr[i])
//             // console.log(arr[i]);
//         }
//     }
// }
// console.log(temp);

// }
// duplicateNum(arrayNum)

// Take out duplicate
// let array = [11, 1, 3, 4, 11, 4, 7, 3];
// let temp = [];
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] === array[j]) {
//       temp.push(array[i]);
//     }
//   }
// }
// console.log(temp);

// remove duplicate value
// let newArr =[];
// for (let i = 0; i<array.length; i++) {
//     if(newArr.indexOf(array[i]) === -1){
//         newArr.push(array[i]);
//     }
// }
// console.log(newArr);

// let array = [3,2,5,34,5,666,45,5,3];
// let a =[];
// for(let i=0; i<array.length; i++){
//     if(a.indexOf(array[i])==-1){
//         a.push(array[i]);
//     }
// }
// console.log(a.sort((a,b)=>a-b));

let arr = [11, 1, 3, 4, 11, 4, 7, 3];
let temp = []
for(let i = 0; i<=arr.length-1; i++){
    if(temp.indexOf(arr[i])==-1){
        temp.push(arr[i])
    }
}

console.log(temp);