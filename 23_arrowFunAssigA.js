let today = ()=>{
    console.log(`"Good Afternoon, Today is Thursday"`);
}
today()

console.log(`================ Multiplication =============================`);
let multiplication = (num1,num2,num3=1)=>{
let result = num1 * num2 * num3;
console.log(`The multiplication of ${num1}, ${num2} & ${num3} is "${result}"`); 
}
multiplication(5,5,2)
multiplication(10,4)

console.log(`================ Addition of five values =============================`);
let addition = (num1,num2,num3,num4,num5)=>  {
    let result = num1 + num2 + num3 + num4 + num5;
    return result;
}
let addOfFive = addition(100,100,200,349,756);
console.log(`The addition of given five number is "${addOfFive}"`);
let concatWords = addition("I am ","learning ","ES6 ","features ","in depth.");
console.log(concatWords);

