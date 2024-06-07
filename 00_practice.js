let a = 20;
let b = 30;

console.log(`Before swap ${a} and ${b}`);

let temp = a;
a = b;
b = temp;

console.log(`After swap ${a} and ${b}`);

console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);

function swap(value1, value2){
a = value1;
b = value2;
console.log(`Before swap ${a} and ${b}`);
temp = a;
a = b;
b = temp;
console.log(`After swap ${a} and ${b}`);
}
swap(55, 50)
console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);
let swapValues = (num, num1)=>{
a = num;
b = num1;
console.log(`Before swap ${a} and ${b}`);

temp = a;
a = b;
b = temp;
console.log(`After swap ${a} and ${b}`);
}
swapValues(123, 321)
console.log(`++++++++++++ By destructuring and without using third variable +++++++++++++++++++`);

let number = 33;
let number1 = 44;

console.log(`Before swap ${number} and ${number1}`);

[number,number1] = [number1,number]

console.log(`After swap ${number} and ${number1}`);

console.log(`++++++++++++ by XOR and without using third variable +++++++++++++++++++`);

let aa = '111';
let bb = '222';
console.log(`Before swap ${aa} and ${bb}`);
aa = aa ^ bb;
console.log(aa);
bb = aa ^ bb;
console.log(bb);
aa = aa ^ bb;
console.log(`After swap ${aa} and ${bb}`);

console.log(`++++++++++++ by arithmetic operator and without using third variable +++++++++++++++++++`);

let aaa = 'pawan';
let bbb = 'prince';

console.log(`before swap ${aaa} and ${bbb}`);

aaa = aaa+bbb;
bbb = aaa-bbb;
aaa = aaa-bbb;
console.log(`After swap ${aaa} and ${bbb}`);



