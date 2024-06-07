// let firstName = "Gajanan";
// let lastName = "Kharat";

 
// console.log(firstName);
// console.log(`=-=-=--==---=-=-=-==-`);
// let myName = firstName; // Deep Clone
// console.log(myName);

// firstName = 'GK';
// console.log(firstName);
// console.log(myName);
// myName = 'Ganesh';

 

// let person = {
//     name: 'Elon',
//     city: 'Pune',
//     isMarried : true
// }

// let elonPerson = {
//     country: "USA"
// }
// let cloneObject = Object.assign({},person,elonPerson);
// console.log(cloneObject);
// elonPerson = person; // Shallow clone
// console.log(`========================`);
// console.log(elonPerson);
// console.log(elonPerson.country);
 

// elonPerson.city= "Mumbai";

// console.log(elonPerson.city); // 
// console.log('--------------------------------');
// console.log(person.city);


let stdNagesh = {
    name: 'Nagesh',
    age: 22,
    graduation: "BE - Computer Science",
}
 console.log(`**************************************`);
let stdGanesh = { ...stdNagesh}; // Deep clone using spread operator
console.log(stdGanesh);
console.log(stdNagesh);
stdGanesh.name = "Ganesh";
console.log(stdGanesh);

console.log(stdGanesh.name);
console.log(stdNagesh.name);

let stdJenny = {
    name: 'Jenny',
    age: 22,
    gender: "Female",
    marks: {
        computer: 96,
        math: 78,
        english: 56
    }  
}

let stdBill = JSON.parse(JSON.stringify(stdJenny)) // Deep clone when we have nested object
stdBill.name= "Billgates";
console.log(stdJenny.name); 