// function factorial(num) {
//     let factNum = 1;
//     for (let index = num; index >= 1; index--) {
//         factNum = factNum * index;
//     }
//     console.log(`Factorial of ${num} is ${factNum}`);
// }
// factorial(5);
// factorial(7);
// factorial(10);

// console.log(`++++++++++++++++++ PRIME Number +++++++++++++++++++++++`);

// const isNumPrime = (num) => {
//   let flag = true;
//   if (num == 1) {
//     return `The given number ${num} is not prime`;
//   } else if (num > 1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         flag = false;
//       }
//     }
//     if (flag) {
//       return `Number ${num} is Prime`;
//     } else {
//       return `Number ${num} is not prime`;
//     }
//   } else {
//     return `${num} Not a Prime Number`;
//   }
// };
// console.log(isNumPrime(0));
// console.log(isNumPrime(10));
// console.log(isNumPrime(5));
// console.log(isNumPrime(117));
// console.log(isNumPrime(6));
// console.log(isNumPrime(15));
// console.log(isNumPrime(3));

// console.log(`+++++++++++++++++++++++++++++++++++++++++`);
// const num = 7;

// function isPrimeNumber(num){
//     for (let index = 2; index < num; index++) {
//         if (num%index==0) {
//             return false;
//         }
//     }
//     return true;
// }
// const result = isPrimeNumber(9);
// console.log(`Is Number Prime: ${result}`);

// const array = [11,3,6,10,43,29,50]; // count the prime number

// for(let i = 0 ;i<= array.length-1; i++){
//     var num = array[i]
//     for( let j = 2; j<= num;i++){
//         if(num%j == 1){
//             console.log(`${num} is prime`);
//         }else{
//             console.log(`${num} is  not prime`);

//         }
//     }
// }


