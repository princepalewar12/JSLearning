const personAleix = `{
    "name":"Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address":{
        "street": "32, Laham st.",
        "city" : "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`
console.log(typeof personAleix);
console.log(`================= Converted the JSON into Object using JSON.parse() ===================`);
let objectConvert = JSON.parse(personAleix)
console.log(typeof objectConvert);

let logDev = objectConvert.role[0];
console.log(`The role of the employee is "${logDev}"`);

let logOnlyLastName = objectConvert.name;
let splitName = logOnlyLastName.split(" ");
console.log(`The last name of the employee is "${splitName[1]}"`);

let logJoiningYear = objectConvert.doj;
let splitDoj = logJoiningYear.split("-");
console.log(`The joining year of employee is "${splitDoj[2]}"`);

// count 6: Prince Palewar
// sha key:c79eda270378a98e0504d157743f81323357d6a9 