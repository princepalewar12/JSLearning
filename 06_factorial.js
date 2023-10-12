function factorial(num) {
    let factNum = 1;
    for (let index = num; index >= 1; index--) {
        factNum = factNum * index;
    }
    console.log(`Factorial of ${num} is ${factNum}`);
}
factorial(5);
factorial(7);
factorial(10);


console.log(`================= Prime Number ================`);
function isPrime(num) {
    if(num<2){
        return `The number ${num} is not prime number.`
    }
    for (let i = 2; i <= num; i++) {
        if(num%i === 0){
            return `${num} is prime Number.`
        }else{
            return `${num} is not a prime Number.`
        }
    }

}
console.log(isPrime(0));
console.log(isPrime(10));
console.log(isPrime(5));
console.log(isPrime(117));
console.log(isPrime(6));
console.log(isPrime(15));

