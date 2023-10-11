class Vehicle {
    name
    color
    engineType
    fuel
    seater
    constructor(name, color, engineType, fuel, seater) {
        this.name = name;
        this.color = color;
        this.engineType = engineType;
        this.fuel = fuel;
        this.seater = seater;
    }
    vehicleDetails() {
        console.log(`Vehicle Details:- Vehicle Name:${this.name} ,color:${this.color}, EngineType: ${ this.engineType},Fuel:${this.fuel}, seater:${this.seater}`);

    }

}
console.log(` ========= Details of all the five Vehicles =============`);

const vehicle1 = new Vehicle("Bike", "Black", "Two Strock", "petrol", "Two");
console.log(vehicle1);
const vehicle2 = new Vehicle("Bike", "blue", "four Strock", "petrol", "Two");
console.log(vehicle2);
const vehicle3 = new Vehicle("car", "red", "500HP", "petrol", "Four");
console.log(vehicle3);
const vehicle4 = new Vehicle("car", "green", "250HP", "Electric", "Four");
console.log(vehicle4);
const vehicle5 = new Vehicle("Bike", "Grey", "four Strock", "electric", "Two");
console.log(vehicle5);
console.log(`================================================ Traversing an array ==========================`);
let arrayOfVehicles = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5]
for (const element of arrayOfVehicles) {
    // console.log(`Vehicle Details:${vehicle1.name},${vehicle1.color},${vehicle1.engineType},${vehicle1.fuel},${vehicle1.seater}\n
    // Vehicle Details:${vehicle2.name},${vehicle2.color},${vehicle2.engineType},${vehicle2.fuel},${vehicle2.seater}\n
    // Vehicle Details:${vehicle3.name},${vehicle3.color},${vehicle3.engineType},${vehicle3.fuel},${vehicle3.seater}\n
    // Vehicle Details:${vehicle4.name},${vehicle4.color},${vehicle4.engineType},${vehicle4.fuel},${vehicle4.seater}\n
    // Vehicle Details:${vehicle5.name},${vehicle5.color},${vehicle5.engineType},${vehicle5.fuel},${vehicle5.seater}\n`);
    element.vehicleDetails()
}

class College {
    clgName
    city
    university
    collegeType
    constructor(clgName, city, university, collegeType) {
        this.clgName = clgName;
        this.city = city;
        this.university = university;
        this.collegeType = collegeType;
    }
    display() {
        console.log(`College Details: ${this.clgName},${this.city},${this.university},${this.collegeType}.`);
    }
}
console.log(`============================== College details using display() method ==================`);
const college1 = new College('sb Jain', 'Nagpur','RTMNU','Private');
college1.display()
const college2 = new College('JD college', 'Nagpur','BATU','Private');
college2.display()
const college3 = new College('Ramdev baba college', 'Nagpur','RTMNU','Private');
college3.display()
const college4 = new College('VNIT college', 'Nagpur','RTMNU','Private');
college4.display()

console.log(`===================================================================`);

function traverseObject(object){
 for (const key in object) {
    var i = 0;
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(` ${key}:- ${element}`);
        
    }
 }
}
traverseObject(college1)
console.log(`===================================================================`);
traverseObject(college2)
console.log(`===================================================================`);
traverseObject(college3)
console.log(`===================================================================`);
traverseObject(college4)