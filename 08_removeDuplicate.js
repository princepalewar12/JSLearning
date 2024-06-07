// var arrayNumber = [22, 11, 44, 55, 77,22,11,44];
// console.log(arrayNumber);
// const setNum = new Set(arrayNumber);
// console.log(setNum);
// arrayNumber = [...setNum];
// console.log(arrayNumber);


const arrayOfNum = [11,3,4,11,4,7,3];
const newSet = new Set(arrayOfNum)
console.log(newSet);
const newArray = Array.from(newSet);
console.log(newArray);

// remove duplicate element using for loop
const arrayNum = [11, 3, 4, 11, 4, 7, 3];
let newArr=[]
for(let i=0; i<=arrayNum.length-1; i++){
       if(newArr.indexOf(arrayNum[i])==-1){
        newArr.push(arrayNum[i])
       } 
}
console.log(newArr);
let newAr=[]
// Take out the duplicate from an array
for(let i=0; i<arrayNum.length; i++){
    for(let j=i+1; j<arrayNum.length; j++){
        if(arrayNum[i]===arrayNum[j]){
            // console.log(arrayNum[i]);
            newAr.push(arrayNum[i])
            
        }
    }
}
console.log(newAr);

const str = 'hello I am a prince a UI Developer';
let obj ={};

for (const char of str) {
    if(obj[char]){
        obj[char]+=1;
    }else{
        obj[char] =1;
    }
}
console.table(obj);