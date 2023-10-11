class Person{
    // Properties
    firstName
    lastName
    city
    graduation
    // Constructor
    constructor(firstName, lastName, city, graduation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.graduation = graduation;
    }
    // Methods
    details(){
        console.log(`Details: ${this.firstName},${this.lastName},${this.city},${this.graduation}`);
    }
}
console.log(`======== Created object for personElon from class person =======`);
const personElon = new Person("Elon", "Musk", "Austin", "MSC Physics");
personElon.details();
console.log(`Elon Details: ${personElon.firstName}, ${personElon.lastName}, ${personElon.city}, ${personElon.graduation}`);

console.log(`======== Created object for personStew from class person =======`);
const personStew = new Person("Stew", "Jobs","San Francisco", "DropOut")
console.log(personStew);

console.log(`======== Created object for ratanTata from class person =======`);
const ratanTata = new Person("Ratan", "Tata", "Mumbai", "Architecture")
console.log(ratanTata);
console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++++`);
const arrayPerson = [personElon,personStew,ratanTata]
for (const element of arrayPerson) {
    console.log(element);
}