// function currying by bind() method
let multiply = function (x, y) {
  console.log(x * y);
};

let multiply2 = multiply.bind(this, 2);
multiply2(4);
let multiply3 = multiply.bind(this, 2, 3);
multiply3(4);// The argument 4 will be ignored

// function currying by closure
let addition = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let addTwo = addition(3);
addTwo(7);
