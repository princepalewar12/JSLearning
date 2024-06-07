const users = [
  { firstName: "Prince", lastName: "Palewar", age: 26 },
  { firstName: "donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "musk", age: 50 },
  { firstName: "Deepika", lastName: "Padukone", age: 26 },
];

// // extract firstName and lastName
// const output = users.map((x) => x.firstName + " " + x.lastName);
// console.log(output);

// // filter the users who are 26 years old
// let userArray = [];
// const filterByAge = users.filter((user) => {
//   if (user.age === 26) {
//     userArray.push(user.firstName + " " + user.lastName);
//   }
// });
// console.log(userArray);

// how many people are of same age
// {26: 2, 75: 1, 50: 1}

let reduceByAge = users.reduce(function (acc, curr) {
  // console.log(acc);
  // console.log(curr);
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(reduceByAge);

// Take out the first name of all the user who's age is less than 30

let filterUser = users.filter((x) => x.age <= 30).map((x) => x.firstName);
console.log(filterUser);
console.log(`==-----=-=-=--=-=-=-===-====-=-=-=-=---=-=-=-----===`);
let reduceUser = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc = curr.firstName;
    // console.log(Array.from(acc));
    console.log(acc);
  }
}, {});
