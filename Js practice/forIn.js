// console.log(`===== All even positioned no. in the given array using forin loop =====`);
// const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
// let count = 0;
// for (const index in arrayNumbers) {
//     if (Object.hasOwnProperty.call(arrayNumbers, index)) {
//         const element = arrayNumbers[index];
//         // console.log(index,arrayNumbers[index]);
//         if (index % 2 == 1) {
//             console.log(element);
//             count = count + element;
//         }
//     }
// }
// console.log(`The addition of even positioned value in the given array is ${count}`);

// console.log(`===== All even no. in the given array using forin loop =====`);
// let countValue = 0;
// for (const key in arrayNumbers) {
//     if (Object.hasOwnProperty.call(arrayNumbers, key)) {
//         const element = arrayNumbers[key];
//         if (element % 2 === 0) {
//             console.log(arrayNumbers[key]);
//             countValue++
//         }
//     }
// }
// console.log(`The no. of even values in the given array are ${countValue}`);

// let addNum = 0;
// const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
// for (const element of array) {
//     addNum = addNum + element;
// }
// console.log(addNum);

// console.log(`===== find the number which are multiple of Five =====`);

// for (const element of array) {
//     if (element % 5 === 0) {
//         console.log(element);
//     }
// }

// console.log(`============ Find the value in the given array =========`);
// const arr = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
// let findNumInArray = (num, array) => {
//     let temp = false;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === num) {
//             // if (array.includes(num)) {
//            temp = true;
//            break
//         }
//     }
//     if(temp){
//         console.log(`${num} is available`);
//     }
//     else{
//         console.log(`${num} is not available`);
//     }
// }
// findNumInArray(3, arr)
// findNumInArray(20, arr)
// findNumInArray(31, arr)
// findNumInArray(25, arr)
// findNumInArray(5, arr)
// findNumInArray(60, arr)
// findNumInArray(1, arr)
// findNumInArray(9, arr)
// findNumInArray(0.9, arr)