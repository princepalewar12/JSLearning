var n1 = "20";
var n2 = 20;
console.log(n1==n2);
console.log(n1, typeof n1);
// n1=Number(n1);
n1 = +n1;
console.log(n1, typeof n1);

var result;

console.log('4'-true);
console.log(`Ans: '4' implicit converted 4 to number and true (boolean)`);

//String to number
//1. using + operator
//2. Number Constructor
var n1 = "20";
var n2 = Number(n1); //Number("30");
console.log(`==================== implicit type conversion(Coercion) :- =======================`);
console.log(`
Implicit type conversion is used when JavaScript needs to use a value in a different data type than the value's current data type. For example, if JavaScript needs to use a string value in a number operation, it will automatically convert the string value to a number.`);
let c = 100;
let e = '20';
let d = true;
console.log(`Substraction of c and e is :${c - e} `);


console.log(`==================== explicit type conversion(type casting) ===========`);
console.log(`Explicit type conversion is used when you want to change the data type of a value for a specific purpose. For example, you might explicitly convert a string value to a number so that you can use it in a number operation.`);
var a = '30';
var b = 20;
// var add = +a + b;
// var add = parseInt(a) + b;
var add = Number(a) + b;
console.log(`the addition of a and b is :${add}`);