let person = {
    name: "Prince",
    age: 22,
    isMarried: true ,
    show:function(){

    }
}
console.log(typeof person);
console.log(person);
console.log(`===================================`);
console.log('age' in person);
console.log(`===================================`);



//Property access
//1. Dot Notation

let personaName = person.name;
console.log(`person Name is: ${personaName}`);
console.log(`person age is: ${person.age}`);

// 2. [] Notation
let nameOfPerson = person["name"]
console.log(`Person name is: ${nameOfPerson}`)

console.log(`Adding property in object`);
person.city = "pune";
console.log(person);
console.table(person)

console.log(`Update property in object`);
person.age =20;
console.log(person);

console.log(`Delete property from an object`);
delete person.age;
console.log(person);

console.log(` Adding method in an object`);
person.show();
person.display = function(){
    console.log(` I am inside display function`);
}
console.log(person);
person.display();

console.log(`========= Nested object ==========`);
const personElon = {
    name: "Elon Musk",
    age: 54,
    totalCompanies:9,
    companies:{
     
        tesla: "300B USD",
        twitter: "150 USD",
        spaceX: "200B USD"

    },
    kidsName: ["Deny","weny","Rony","Randy"]
}

console.log(personElon.companies.tesla);
console.log(personElon.kidsName.length);
console.log(personElon.kidsName.unshift("stew"));

for (const kid of personElon.kidsName) {
    console.log(kid);
}
// console.log(personElon.companies.tesla.location);