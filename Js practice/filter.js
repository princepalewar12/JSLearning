// Filter
let array = [5,8,6,9,2,5,7,4];

function divBy3(element){
    // if (element % 3 === 0) {
    //     return element;
    // }
    return element % 3 === 0;
}

let output = array.filter(divBy3);
console.log(output);

function isOdd(element){
    return element % 2 === 1;
}

let output1 = array.filter(isOdd);
console.log(output1);

let even = array.filter((value)=>value%2==0)
console.log(even);