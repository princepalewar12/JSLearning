class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate) {
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }

}
let axis_bank = new Bank("Axis bank", "pune", 123456789, 456987, "10%");
console.log(axis_bank);
let sbi_bank = new Bank("Sbi bank", "mumbai", 12457954, 325647, "11%");
console.log(sbi_bank);
let icici_bank = new Bank("icici bank", "banglore", 458958962, 788425, "9%");
console.log(icici_bank);
let kotak_bank = new Bank("kotak bank", "Hydrabad", 598215663, 487522, "10%");
console.log(kotak_bank);
let hdfc_bank = new Bank("hdfc bank", "pune", 556456789, 176987, "12%");
console.log(hdfc_bank);
let panjab_bank = new Bank("panjab bank", "Kolkata", 864795216, 497987, "8%");
console.log(panjab_bank);

const bankMap = new Map();
bankMap.set(123456789, axis_bank);
bankMap.set(22457954, sbi_bank);
bankMap.set(358958962, icici_bank);
bankMap.set(498215663, kotak_bank);
bankMap.set(56456789, hdfc_bank);
bankMap.set(64795216, panjab_bank);
console.log(bankMap);

let value = bankMap.get(123456789);
console.log(value);


let bankKeys = bankMap.keys();
console.table(bankKeys);

console.log(`=================== Traversed and log the Values ===================`);
for (const keys of bankKeys) {
    console.log(keys);
    let element = bankMap.get(keys);
    console.log(`Bank Name:- ${element.bankName}, Account Number:- ${element.accountNo}, Interset Rate:- ${element.interestRate}`);
}

// count :PRINCE PALEWAR;
// SHA KEY: e28df3f16ed82111ef2db7a1c53d852d7a961854