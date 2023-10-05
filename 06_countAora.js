function countCharA(param) {
    var char = 'aA';
    var count = 0;
    for (let i = 0; i <= param.length - 1; i++) {
        var countA = param.charAt(i);
        if (char.includes(countA)) {

            count++;
        }
    }
    console.log(count);
}
console.log(`The number of 'A' and 'a' in the string1 is:`);
countCharA("I AM Learning JavaScript, The Language of internet")
console.log(`The number of 'A' and 'a' in the string2 is:`);
countCharA("My favourite movie is LAggAn");


// var str = "I AM Learning JavaScript, The Language of internet";
// var vowels = 'Aa';
// var count =0;
// for(let i = 0; i<=str.length-1; i++){
//     var char = str.charAt(i);
//     if(vowels.includes(char)){
//         count++;
//     }
// }
// console.log(count);

// count 4: PRINCE PALEWAR 
// sha key: 3d21582c23842a53213c9dc38fd543fe4fca326a

