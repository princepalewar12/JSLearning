const bankSbi = {
    name: "sbi",
    accountNo: 64644654,
    branch: "lalganj",
    IFSCCode: 6646464,
    cifNo: 98946545
}

const bankLocation = {
    street: "Shantinagar street",
    city: "Nagpur",
    pin: 440023
}

const cloneBankSbi = Object.assign({}, bankSbi,bankLocation);
console.log(`The clone version of bankSbi and banklocation is`);
console.table(cloneBankSbi);

const rateOfInterest = {
    homeLoanInterest: "10%",
    personalLoanInterest: "15%",
    dueInterest: "8%"
}

const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(`After merging banksbi bank location and rateofinterest the object we have got is:`);
console.table(sbiDetails);

console.log(`========= Traversing the merge Object ======`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}:${element}`);
        
    }
}