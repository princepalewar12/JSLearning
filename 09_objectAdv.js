let person = {
    name: "Prince",
    age: 22,
    isMarried: false,
    city: "pune"
}
const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values);

const valueArray = ['name', 'age', 'isMarried', 'city']
let edit = valueArray.splice(2, 1, "graduation")
console.log(valueArray);

const entry = Object.entries(person);
var firstEntry = entry[0]
console.log(`=-=-=--=-=-=-=-=----==--           =-===-==-=-=-=------===-=-=--=-=`);
console.log(firstEntry);
console.log(firstEntry[1]);

//  console.log(person.name); 

for (const element of entry) {
    console.log(element[0], element[1]);
}
console.log(`=-=-=--=-=-=-=-=----==--=-===-==-=-=-=------===-=-=--=-=`);

console.log(`Traversing an object`);
for (const key in person) {
    console.log(key, person[key]);
}

const isAvailable = 'name' in person;
console.log(isAvailable);

const isPinAvailable = 'pin' in person;
console.log(isPinAvailable);

const personJenny = {
    name: "Princess",
    age: 22,
    isMarried: false,
    city: "pune"
}
console.log(personJenny);
personJenny.age = 25;
console.log(personJenny);

// personJenny = { }; Not Allowed

Object.freeze(personJenny);
// personJenny.city = 'Mumbai';
console.log(personJenny);
console.log(` ======= Object.assign to create a clone =========`);
let elon = {
    name: "elon",
    age: 54,
    isMarried: true,
    country: "USA"
}
console.log(elon);
const elonClone = Object.assign({},elon);
console.log(elonClone);


console.log(` ======= Merging an objects ======`);
let stew = {
    name: "stew ",
    age: 54,
    isMarried: true,
    country: "USA"
}
console.log(stew);
const address = {
    pin: 234567,
    city: "Austin Texas"
}
console.log(address);

Object.assign(stew, address);
console.log(stew);
console.table(stew);