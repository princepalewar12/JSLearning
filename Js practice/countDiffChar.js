const str = "Hare krishna hare krishna krishna krishna hare hare";
let obj = {};
for (const char of str) {
  if (obj[char]) {
    obj[char] += 1;
  } else {
    obj[char] = 1;
  }
}
console.table(obj);

const strr = "Siya Ram Jai Ram Jai Jai Ram Siya Ram Jai Jai siya ram";
let obj1 = {};
for (const char of strr) {
  if (obj1[char]) {
    obj1[char] = obj1[char] + 1;
  } else {
    obj1[char] = 1;
  }
}
console.table(obj1);

let person = {
    name: "Prince",
    Roll: "Software Developer",
}
