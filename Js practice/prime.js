// let prime = function (num) {
//     let flag = 1;
//     if (num === 1) {
//         console.log(`The given number ${num} is not prime number`);
//     } else if (num > 1) {
//         for (let i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 flag = 0;
//             }

//         }
//         if (flag == 1) {
//             console.log(`The given number ${num} is a prime number`);
//         } else {
//             console.log(`${num} is not a prime number`);
//         }
//     } else {
//         console.log(`The given number ${num} is not prime.`);
//     }

// }
// prime(11)
// prime(3)
// prime(6)
// prime(10)
// prime(43)
// prime(29)
// prime(50)

let num = 6;
let flag = 1;

if (num === 1) {
  console.log(`${num} is not a prime number`);
} else if (num > 1) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = 0;
    }
  }
  if (flag) {
    console.log(`${num} is prime`);
  } else {
    console.log(`${num} is not prime`);
  }
} else {
  console.log(`Enter positive value`);
}

