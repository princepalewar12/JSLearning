var arrayNumber = [22, 11, 44, 55, 77,22,11,44];
const setNum = new Set(arrayNumber);
console.log(setNum);
arrayNumber = [... new Set(arrayNumber)];
console.log(arrayNumber);

// remove duplicate element using for loop