function Bank(bankName,location,ifscCode,branchCode){
this.bankName = bankName;
this.location = location;
this.ifscCode = ifscCode;
this.branchCode = branchCode;
this.showDetails = function(){
console.log(`Bank Details: ${bankName}, ${location}, ${ifscCode}, ${branchCode}`);
}
}
console.log(`=================== Bank Details ==========================`);
const yesBank = new Bank('Yes Bank', 'nagpur', 124564, 765421);
yesBank.showDetails();
const sbiBank = new Bank('SBI Bank','Mumbai',731654,166544);
sbiBank.showDetails();
const mahBank = new Bank('MAH Bank','Maharashtra',316115,565655);
mahBank.showDetails();
const axisBank = new Bank('Axis Bank','pune',688665,659842)
axisBank.showDetails()
console.log(`\n`);
console.log(`======================== Added time in bank objects using prototype ===============================`);
Bank.prototype.openTime = '9 AM IST';
Bank.prototype.closeTime = '6 PM IST';

console.log(`The open time of SBI bank is "${axisBank.openTime}" and close time is "${axisBank.closeTime}".`);
console.log(`The bank name is ${axisBank.bankName} and close time is ${axisBank.cityloseTime}`);
console.log(`The bank name is ${yesBank.bankName}, ${yesBank.branchCode} and ${yesBank.openTime}`);

// count : PRINCE PALEWAR 
// sha key: dd83c5e9cf0083ea2f682917acb47acd8d421ae6