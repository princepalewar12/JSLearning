console.log("=================== The number of vowels in the given string ========================");

var str = "I am very good IT Developer";
var vowels = 'AaEeIiOoUu';
var count =0;
for(let i = 0; i<=str.length-1; i++){
    var char = str.charAt(i);
    if(vowels.includes(char)){
        count++;
    }
}
console.log(`The number of Vowels in the Given String is :"${count}"`);
console.log("=================== Sum Of Cube ========================");
function sumOfCube(){
    var sum = 0;
    for(let i = 0; i<=5; i++){
        var cube = i*i*i;
        sum = sum + cube; 
    }
    console.log(`The sum of cube of 1 to 5 is:"${sum}".`);
}
sumOfCube();
console.log("=================== Odd positioned Char ========================");
function oddPositionedChar(param){
var splitStr = param.replaceAll(" ","");
// console.log(splitStr);
for(let i = 0;i<= splitStr.length-1; i++){
    if(i%2==0){
        console.log(`${splitStr.charAt(i)}`);
    }
}
}
console.log(`The odd positioned char in the string 1 is:`);
oddPositionedChar("Hard work always pays back")
console.log(`The odd positioned char in the string 2 is:`);
oddPositionedChar("Soon I will be Angular IT Champ")

