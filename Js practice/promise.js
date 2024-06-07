// https://www.programiz.com/javascript/promise
// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });
// console.log(countValue);

let api = new Promise((resolve, reject) => {
  console.log(`Promise is pending`);
  let fetched = false;
  if (fetched) {
    resolve(`The data is fetched successfully`);
  } else {
    reject(`The data has not been fetched successfully`);
  }
});
api
  .then(function successValue(success) {
    console.log(success);
  })    
  .then(function successValue2(success) {
    console.log(`we can call multiple function this way`);
  })
  .catch(function failureValue(failure) {
    console.log(failure);
  })
  .finally(function eitherResolveOrReject() {
    console.log(
      `This finally block will run either the promise get resolved or get rejected`
    );
  });
