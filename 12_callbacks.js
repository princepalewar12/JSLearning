

function jennyHomework(callback){
    console.log('jenny Started assignment');
    console.log(`Her assignment solving is in progress`);
    console.log(`Jenny's assignment is completed`);
    callback();
}
let elonCopyHomework = function(){
    console.log(`Thank you jenny for calling me back`);
    console.log(`Elon started copying assignments`);
    console.log(`Elon copied all assignments`);
}
jennyHomework(elonCopyHomework)
console.log(`=================================================`);
let intervalId = setTimeout(function(){
    console.log(`Inside callback`);
},5000);

console.log(`=================================================`);
// clearInterval(intervalId);// this function will not let the function get execute even after 5000ms.
