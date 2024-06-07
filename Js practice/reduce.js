const array = [4, 5, 6, 8, 9, 7, 5, 2, 1, 2];

// sum of all element

function findSum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  return sum;
}
console.log(findSum(array));
console.log(`=======================================`);

const output = array.reduce(function (max, curr) {
  max = max + curr;
  return max;
}, 0);
console.log(output);

// max num in an array
console.log(`=======================================`);
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(`The maximum number in the given array is ${findMax(array)}`);

const maxInArray = array.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(maxInArray);

console.log(
  `============= Factorial of num using reduce method ===============`
);
let arr = [];
function factorial(num) {
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
}
console.log(factorial(5));
