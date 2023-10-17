function jennyHomework(callback){
    console.log('jenny Started assignment');
    console.log(`Her assignment solving is in progress`);
    console.log(`Jenny's assignment is completed`);
    console.log(`=======================================`);
    callback();
    return function(){
        console.log(`Yahoo! we both completed assignments.`);
    }
}
let elonCopyHomework = function(){
    console.log(`Thank you jenny for calling me back`);
    console.log(`Elon started copying assignments`);
    console.log(`Elon copied all assignments`);
    console.log(`=======================================`);

}
jennyHomework(elonCopyHomework)();

// let result = jennyHomework(elonCopyHomework);
// result();