console.log("=============== sum of first 10 number=========");
var sum = 0;
for (let index = 0; index <= 10; index++) {
sum = sum + index;

}
console.log(sum);

console.log("================= Reverse the string ============");
var str = 'Developer';
var reverseStr = "";
for(let i = str.length-1; i>=0; i--){
    reverseStr = reverseStr + str.charAt(i);
}
console.log(`The reverse string is: ${reverseStr}`);
console.log(`====================== number of vowels ============`);

// var str = "i am ui developer."
// var count = 0;
// for(let i=0; i<=str.length-1; i++){
//     var char = str.charAt(i);
//     if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//         var count = count+ 1;
//     }
// }
// console.log(count);

var str = "I am UI developer";
var vowelsCaps = "AEIOU";
var count = 0;
for (let i = 0; i<= str.length-1; i++){
    var char = str.charAt(i).toUpperCase();
    if(vowelsCaps.includes(char))
    count ++;
}
console.log(count);