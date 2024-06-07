function Bank(bankName, city, pin){
    this.bankName = bankName;
    this.city = city;
    this.pin = pin;
    this.show = function(){
        console.log(`Bank detail is: ${this.bankName},${this.city},${this.pin}`);
    }
}
const sbiBank = new Bank('SBI','Pune',112233);
console.log(sbiBank);
console.log(sbiBank.bankName,sbiBank.city,sbiBank.pin);

const axisBank = new Bank('Axis','Mumbai',445566);
console.log(axisBank);

const hdfcBank = new Bank('HDFC','banglore',445511);
console.log(hdfcBank);

Bank.prototype.country = "Bharat";
console.log(axisBank.country);
console.log(hdfcBank);
console.log(hdfcBank.country);
console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);
console.log(axisBank.bankName +" "+ axisBank.city +" "+ axisBank.pin +" "+ axisBank.country);
console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);
sbiBank.show();
axisBank.show();

console.log(axisBank instanceof Bank);

