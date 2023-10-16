class Bank {
    bank_name
    location
    account_no
    ifsc
    interest_rate
    
    constructor(bank_name,location,account_no,ifsc,interest_rate){
        this.bank_name = bank_name;
        this.location= location;
        this.account_no= account_no;
        this.ifsc= ifsc;
        this.interest_rate= interest_rate;
    }

}
let axis_bank = new Bank("Axis bank", "pune",123456789,456987,"10%");
console.log(axis_bank);
let sbi_bank = new Bank("Sbi bank", "mumbai",12457954,325647,"11%");
console.log(sbi_bank);
let icici_bank = new Bank("icici bank", "banglore",458958962,788425,"9%");
console.log(icici_bank);
let kotak_bank = new Bank("kotak bank", "Hydrabad",598215663,487522,"10%");
console.log(kotak_bank);
let hdfc_bank = new Bank("hdfc bank", "pune",556456789,176987,"12%");
console.log(hdfc_bank);
let panjab_bank = new Bank("panjab bank", "Kolkata",864795216,497987,"8%");
console.log(panjab_bank);

const bankSet = new Set();
bankSet.add(axis_bank);
bankSet.add(sbi_bank);
bankSet.add(icici_bank);
bankSet.add(kotak_bank);
bankSet.add(hdfc_bank);
bankSet.add(panjab_bank);

console.log(bankSet);
let bankKeys = bankSet.keys();
console.log(`++++++++++++++++++++++++++++++++++++`);

// console.log(bankKeys);
console.log(`++++++++++++++++ Traversed and log the bank name & location ++++++++++++++++++++`);
for (const keys of bankKeys) {
    console.log(`Bank Name:-${keys.bank_name}, Location:-${keys.location}`);
}


