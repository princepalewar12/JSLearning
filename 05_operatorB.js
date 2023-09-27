
console.log(`+++++++++++++++++++++++++++++++++++ TASK 01 ++++++++++++++++++++++++`);
function greaterNumber(value1, value2){
    console.log(`1. In between ${value1} and ${value2}`);
    var result = value1>value2 ? console.log(`The greatest number is ${value1}`):""|| value2>value1 ? console.log(`The greatest number is ${value2}`):"";
}
greaterNumber(10,-10)
greaterNumber(800,899)

console.log(`+++++++++++++++++++++++++++++++++++ TASK 02 ++++++++++++++++++++++++`);
function isEvenOrOddNum(num) {
    var result = num%2==0 ? console.log(`2. The given number ${num} is even: True.`) : console.log(`2. The given number ${num} is odd: False`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log(`+++++++++++++++++++++++++++++++++++ TASK 03 ++++++++++++++++++++++++`);
function wordLength(word) {
    var result = word.length%2==0 ? console.log(`3. The length of given word "${word}" is EVEN.`) : console.log(`3. The length of given word "${word}" is ODD.`);;
}
wordLength("CodeMindTechnology");
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");

// count 1: PRINCE PALEWAR 
// SHA KEY: d43bc5278f40b5be3dd3498bd2dabd9088ecff8a