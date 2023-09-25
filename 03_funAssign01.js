function hello(){
    console.log("Hello World");
}
hello();
function name() {
    console.log("My name is Prince");
}
name();

console.log("+++++++++++++++++++++++++++++++++++++++++++");

function personalDetail(firstName, lastName, collegeName){
console.log("First Name: ", firstName);
console.log("Last Name: ", lastName);
console.log("College Name: ",collegeName)
}
personalDetail("Prince","Palewar","s.b. jain")

console.log("+++++++++++++++++++++++++++++++++++++++++++");

function swapValues(value1,value2){
    var a = value1;
    var b = value2;
    console.log("Before swap:- ", "Value 1: ", a, "value 2: ", b);
    var temp = a;
    var a = b;
    var b = temp;
    console.log("After swap:- ", "value 1", a, "value 2: ", b);
}
swapValues("virat", "anushka");
console.log("---------------------------------------------");
swapValues(1000,2000);

console.log("+++++++++++++++++++++++++++++++++++++++++++");

function addThreeValues(num1, num2, num3){
    var add = num1+num2+num3;
    console.log(add);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello ","Good ","Morning!")
