let person = {
    name: "prince",
    age: 25,
    isMarried: false,
    // city: "Nagpur"
}

// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;
// const city = person.city;

let {name,age,isMarried,city="pune",country="Bharat"} = person;
console.log(name,age,isMarried,city,country);


console.log(`=================== Array destructuring ==================`);
const array = ['Mona','Sona','Tona','Bawa'];

let [element1, element2,element3,element4,element5='Khona'] = array;

console.log(element1, element2,element3,element4,element5);