console.log(`+++++++++++++++++++++++++++ Even positioned element in the given array +++++++++++++++++++++++++++`);
let arrayNum = [22,11,44,55,77,33];
console.log(`The Even positioned Element in the given Array is:`);
for(let i = 0; i<=arrayNum.length-1; i++){
    if(i%2!=0){
        var evenChar = arrayNum[i];
        console.log(evenChar);
    }
}
console.log(`+++++++++++++++++++++++++++ Sum of Array Element +++++++++++++++++++++++++++`);
let sum = 0;
for(let i = 0; i<=arrayNum.length-1; i++){
    sum = sum + arrayNum[i];
}
console.log(`The sum of given Array element is: "${sum}".`);

// count 2: PRINCE PALEWAR; 
// SHA KEY: b1afa199fe29562024225fe313a27f05017d4a24; 