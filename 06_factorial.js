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


// console.log(`================= Prime Number ================`);
// function isPrime(num) {
//     if(num<2){
//         return `The number ${num} is not prime number.`
//     }
//     for (let i = 2; i <= num; i++) {
//         if(num%i === 0){
//             return `${num} is prime Number.`
//         }else{
//             return `${num} is not a prime Number.`
//         }
//     }

// }
// console.log(isPrime(0));
// console.log(isPrime(10));
// console.log(isPrime(5));
// console.log(isPrime(117));
// console.log(isPrime(6));
// console.log(isPrime(15));
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

const array = [11,3,6,10,43,29,50]; // count the prime number

for(let i = 0 ;i<= array.length-1; i++){
    var num = array[i]
    for( let j = 2; j<= numz){
        if(num%j == 1){
            console.log(`${num} is prime`);
        }else{
            console.log(`${num} is  not prime`);

        }
    }
}
