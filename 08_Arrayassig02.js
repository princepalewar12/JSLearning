console.log(`===== Length of a Given Array =====`);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let lengthOfArray = arrayNumbers.length;
console.log(`The length of a given array is ${lengthOfArray}\n`);

console.log(`===== First, last & last third  element in the array =====`)
console.log(`The first element in the given array is "${arrayNumbers[0]}"`);
console.log(`The last element in the given array is ${arrayNumbers[arrayNumbers.length - 1]}`);
console.log(`The last element in the given array is ${arrayNumbers[arrayNumbers.length - 3]}\n`);

console.log(`===== All even no. in the given array using forin loop =====`);
console.log(`All the even no. in the given array is:`);
for (const key in arrayNumbers) {

    if (Object.hasOwnProperty.call(arrayNumbers, key)) {
        const element = arrayNumbers[key];
        if (element % 2 == 0) {
            console.log(`${element}`);
        } 
    }
}

console.log(`===== All odd no. in the given array using forin loop =====`);
for (const key in arrayNumbers) {
    if (Object.hasOwnProperty.call(arrayNumbers, key)) {
        const element = arrayNumbers[key];
        console.log(`index:${key}, Value:${element} `);
    }
}

console.log(`===== All odd no. in the given array using forin loop =====`);
for (const element in arrayNumbers) {
    let value = arrayNumbers[element]
    if (value%2 == 1) {
        console.log(`The odd values in the given array is: ${value}`);
    }

}

console.log(`================ Even positioned values in the array & add it =================`);
let add = 0;
for (let i = 0; i <= arrayNumbers.length - 1; i++) {
    if (i % 2 == 1) {
        add = add + arrayNumbers[i];
    }
}
console.log(`The addition of even positioned element is "${add}"`);

console.log(`================ odd positioned values in the array & add it =================`);
let addnum = 0;
for (let i = 0; i <= arrayNumbers.length - 1; i++) {
    if (i % 2 == 0) {
        addnum = addnum + arrayNumbers[i];
    }
}
console.log(`The addition of even positioned element is "${addnum}"`);

console.log(`======== The sum of all the element of the given array =======`);
let addOfArrNum = 0;
for (let i = 0; i <= arrayNumbers.length - 1; i++) {
    addOfArrNum = addOfArrNum + arrayNumbers[i];
}
console.log(`The addition of all the element from the given array is "${addOfArrNum}"`);
console.log(`===== find the number which are multiple of Five =====`);
for (let i = 0; i <= arrayNumbers.length - 1; i++) {
    if (arrayNumbers[i] % 5 == 0) {
        console.log(`The value which are multiple of five is "${arrayNumbers[i]}"`);
    }
}

console.log(`======= The number 115 is available in the given array or not ======`);
let numAvailable = (findNum, givenArray) => {
    for (let i = 0; i <= givenArray.length - 1; i++) {
        if (givenArray[i] === findNum) {
            return `The ${givenArray[i]} is available`
        } 

    }
}
var result = numAvailable(115, arrayNumbers)
console.log(result);
// Above task is incomplete
console.log(`======= insert values at specific index and log array ======`);
const arrayNum = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

arrayNumbers.splice(2,0,55,66);
console.log(arrayNumbers);

console.log(`========= Delete 3 elements starting from index 4`);
arrayNumbers.splice(4,3)
console.log(arrayNumbers);


