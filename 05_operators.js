console.log(`====== Arithmetic operator ======= `);
var num1 = 10;
var num2 =20;
var result = num1*num2;
console.log(`Multiplication result is ${result}`);

var result = num1**3;
console.log(`Exponential result is ${result}`);

var result = num1/num2;
console.log(`Division result is ${result}`);

var result = num1%num2;
console.log(`Modulus result is: ${result}`);
console.log(`Modulus result is: ${10 % 3}`);
console.log(`Modulus result is: ${15 % 4}`);

console.log(`============ Unary operator ===========`);
var num1 = 8;
var result = ++num1;
console.log(`Result is : ${result}`);

console.log("====== Assignment Operator =========");
var num3 = 5;
// Compound Addition +=
num3+=3; // num3 = num3 + 3;
console.log(`Result of Compound Addition is: ${num3}`);

console.log(`============ comparison ============`);
var str1 = 'focus';
var str2 = 'locus';

var result = str1 == str2;
console.log(`result of comparison == is:${result}`);

var result = str1 === str2;
console.log(`result of comparison === is:${result}`);

var num1 = "100";
var num2 = "10";
var result = num1 == num2;
console.log(`result of comparison == is:${result}`);
var result = num1 === num2;
console.log(`result of comparison === is:${result}`);

var num3 = 20;
var result = num1!=num3;
console.log(`Result of comparison != is: ${result}`);

var result = num1 > num3;

console.log(`Result of Greater than > is: ${result}`);

console.log("===========");

var num4 = 20;

var result = num3 > num4;
console.log(`Result of Greater than > is: ${result}`);
var result = num3 >= num4;
console.log(`Result of Greater than equal > is: ${result}`);
var result = 10 < num4;
console.log(`Result of Less than < is: ${result}`);
var result = 20 <= num4;
console.log(`Result of Less than equal <= is: ${result}`);

