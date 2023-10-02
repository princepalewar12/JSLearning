var square = function (value) {
    var result = value * value;
    console.log(`Square of ${value} is ${result}`)

}
console.log(`++++++++++++++++++++ Square of a number +++++++++++++++++++`);
var result = square(5);
var result = square(6);
var result = square(25);
var result = square(100);
var result = square(67);
var result = square(89);
var result = square(59);
console.log("\n");

console.log(`++++++++++++++++++++ Function type +++++++++++++++++++`);
var funType = typeof square;
console.log(`The type of the above function is "${funType}"\n`);

console.log(`++++++++++++++++++++ Area of rectangle +++++++++++++++++++`);
var areaOfRectangle = function (length, width) {
    var result = length * width;
    console.log(`The Area of rectangle after calculating length="${length}" and width="${width}" is ${result}.\n`);
}
areaOfRectangle(499, 917)
console.log(`++++++++++++++++++++ Swapping +++++++++++++++++++`);
console.log(`        -------- Test Case 1 --------        `);

var swapValues = function (value1, value2) {
    console.log(`Before swap the values are "${value1}" and "${value2}".`);
    var temp = value1;
    var value1 = value2;
    var value2 = temp;
    console.log(`After swap the values are "${value1}" and "${value2}".`);
}
swapValues("mahi","Raina")
console.log(`        -------- Test Case 2 --------        `);
swapValues(55,77)
console.log(`++++++++++++++++++++ String Operations +++++++++++++++++++`);
var stringOperation = function(param){
    var totalChar = param.split(' ')
    var charJoin = totalChar.join('');
    console.log(`A. The given string is "JS the most popular language of internet".\n   The number of character in the given Sentence is: ${charJoin.length}. `);
    console.log(`B. Character at index(6) in the given string is: "${param.charAt(6)}".`);
    console.log(`C. Character at index(11) in the given string is: "${param.charAt(11)}".`);
    console.log(`D. The last character in the given string is "${param.charAt(param.length-1)}"`);
    console.log(`E. The very first character in the given string is: "${param.charAt(0)}".`);
    console.log(`F. The last character in the given string is "${param.charAt(param.length-3)}"`);
    console.log(`G. The total number of words in the given string is "${totalChar.length}" and its Square is "${totalChar.length*totalChar.length}".`);
}
stringOperation("JS the most popular language of internet")

// count 5 : PRINCE PALEWAR 
// SHA KEY: c0a9f35a1955cb351e15648f303a9ab1208a6de2
 