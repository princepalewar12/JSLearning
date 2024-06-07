// const array = [11, 3, 5, 6, 10, 43, 29, 50]; // count the prime number
// let countPrimeNum = (array) => {
//   // let count = 0;
//   for (let i = 0; i <= array.length - 1; i++) {
//     // console.log(array[i]);
//     if (array[i] == 1) {
//       console.log(`${array[i]} is not a prime number`);
//     } else if (array[i] > 1) {
//       for (let j = 2; j < array[i]; j++) {
//         if (array[i] % j == 0) {
//           console.log(`${array[i]} is not a prime number`);
//           // count++;
//           break;
//         } else {
//           console.log(`${array[i]} is a prime number`);
//           // count++;
//           break;
//         }
//       }
//     }
//   }
//   // console.log(`The number of prime number in the given array are ${count}`);
// };
// countPrimeNum(array);

// let primeNum = function(num){
//     let flag = 1;
//     if(num === 1){
//         console.log(`${num} is not a prime number`);
//     }else if(num>1) {
//         for(let i=2; i<num; i++){
//             if(num%i == 0){
//                 flag = 0
//             }
//         }
//         if(flag){
//             console.log(`The given num ${num} is  prime number`);
//         }else{
//             console.log(`${num} is not a prime number`);
//         }
//     }else{
//         console.log(`${num} is not a prime number`);
//     }
// }
// primeNum(6)
console.log(`-=-=-=-=--==-===-===-=-=-===-=-====--=-====--==--=---=`);
const arr = [11, 3, 5, 6, 10, 43, 29, 50];

const prime = (arr) => {
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 1) {
      console.log(`${arr[i]} is not Prime`);
    } else if (arr[i] > 1) {
      for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j == 0) {
          console.log(`${arr[i]} is not a prime Number`);
          break;
        } else {
          console.log(`${arr[i]} is prime`);
          count ++;
          break
        }
      }
    }
  }
  console.log(`The number of prime number is ${count}`);
};
prime(arr);
