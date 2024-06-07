const arrNum = [2, 11, 29, 9, 60];

let minOfArr = (arr)=>{
    let res = Math.min(...arr);
    console.log(`Min value in the array is ${res}`);
}
minOfArr(arrNum)

let findMIn = (arr) => {
    let max = -Infinity;
    let min = Infinity;
    for (const element of arr) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log(`Min: ${min} and Max: ${max}`);
}
findMIn(arrNum)

const array = [2, 11, 29, 9, 60];
let findNum = function(num, arr){
    let flag = false;
    for(let i = 0; i<=arr.length; i++){
        if(num===arr[i]){
            flag = true;
        }
    }
    if(flag){
        console.log(`${num} is present`);
    }else{
        console.log(`${num} is not present`);
        
    }
}
findNum(1,array)