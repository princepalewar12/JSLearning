// var str = "I am a UI developer";
// var vowels = 'AaEeIiOoUu';
// let count=0;
// for(let i = 0; i<=str.length-1; i++){
//     // console.log(str[i])
//     if(vowels.includes(str[i])){
//         // console.log(`${str[i].length}`);
//         count ++
//     }
// }
// console.log(count);

var str = "I am very good IT Developer";
let vowels = "AaEeIiOoUu"
let vowLetter = "";
let count = 0;
for(let i = 0; i<= str.length-1; i++){
    if(vowels.includes(str[i])){
        vowLetter = vowLetter + str[i];
        count++
    }
}
console.log(count);
console.log(`The vowels are ${vowLetter}`);

// var str = "I am very good IT Developer";
// let count = 0;
// let vowLetter = ''
// for(let i= 0; i<=str.length-1; i++){
//     let vowels = str[i].toLowerCase();
//     if(vowels=='a' ||vowels=='e' || vowels=='i' || vowels=='o' || vowels=='u'){
//         vowLetter = vowLetter + vowels;
//         count ++
//     }
// }
// console.log(`${vowLetter}`);
// console.log(count);