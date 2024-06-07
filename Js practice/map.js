// Map()
let array = [4, 1, 3, 5, 6, 7, 8, 9, 5, 3]

function square(element) {
 return element * element
}
// square(array)

let output1 = array.map(square);
console.log(output1);

let square1 = array.map((currentValue)=>{
    return currentValue * currentValue
})
// console.log(square1);

function binary(element){
 return element.toString(2)
}

let binaryOutput = array.map((element)=> element.toString(2));
console.log(binaryOutput);

