console.log(`================= call() ===================`);
const person ={
    name: "Elon Musk",
    age: 54,
    totalCompany: 9
}
function show(greet, say){
    console.log(`Inside show function ....`);
    console.log(greet);
    console.log(say);
    console.log(this.name, this.age, this.totalCompany);

}
show.call(person, 'Good Morning',"Hi there!");
console.log(`================= apply()  ===================`);
// https://www.programiz.com/javascript/library/function/apply
function details(kidName,wifeName){
    console.log(this.name, this.age);
    console.log(`son name:${kidName}, Wife name:${wifeName}`);
}
details.apply(person,['Xender','Jenny'])
console.log(`================= bind() ===================`);
// https://www.programiz.com/javascript/library/function/bind
const stewPerson = {
    name: "Stew Jobs",
    age: 54,
    totalCompany: 'Apple'
}
function productDetails(iphone,laptop){
    console.log(this.name, this.age);
    console.log(`Iphone:${iphone}, Laptop :${laptop}`);
}
const newFunction = productDetails.bind(stewPerson,"iphone 15Pro", "Mac book m2")
// newFunction("iphone 15Pro", "Mac book m2")
newFunction()