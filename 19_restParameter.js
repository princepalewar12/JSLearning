function show(n1, n2, ...arg){

    console.log(arg, n1,n2);

}

show(100, 200, 300, 400, 500);

let array = [100, 200, 300, 400, 500,[1,2,[100, 200,[45,78,87], 300, 400, 500],5,7,55],45,78,87]
console.log(array.flat(3));