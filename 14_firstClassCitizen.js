// In js we call function as a first class function

// 1. function expression
// 2. callback function
// 3. Function can return another function

function outer(){
    console.log(`Inside outer function`);
    return function inner(){
        console.log(`Inside inner function`);
    }
}
let res = outer();
res()