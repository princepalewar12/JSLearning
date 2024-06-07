console.log("=====Function type: function no argument and no return value=====");
function myDetail(myadd){
    console.log(myadd);
    console.log("Name: Prince",);
    console.log("city: Nagpur");
    console.log("Number: 31546415\n")
}
myDetail();

console.log("=====Function type: function with argument and no return value=====");
console.log("===== SWAP =====")
function swap(value1, value2) {
    console.log("Before swap ====>", value1, value2)
    var temp = value1;
    value1 = value2; 
    value2 = temp;
    console.log('After swap ===>', value1, value2);
}
swap(100,200);

console.log("=====Function type: function with argument and return type=====");
function jenny(rupees) {
    console.log(rupees);
    console.log("She went market and bought vegetables");
    var bag = "Vegetable required for a week\n";
    return bag;
}
var result = jenny(2200);
console.log(result);

function square(num){
    var result1 = num * num;
    return result1;
}
var squareNum = square(5);
console.log(squareNum);