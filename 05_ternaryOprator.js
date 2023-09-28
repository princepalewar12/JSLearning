var marks = 63;
//If marks is greater than than 63;
//then allow for interview else don't allow for interview
var result = marks>=60 ? "Allow for interview" : "dont allow";
console.log(result);

//if number is even then return "EVEN" else "ODD"
var num = 13;

var result = num%2 == 0 ? "Even" : "ODD";
console.log(`Given number is ${result}`);

function maleMarriageEligibility(gender, age, boyName) {
    var result =  gender == 'male' && age>=21
    ? `Hey ${boyName} you are eligible for marriage, congrats`
    : `Sorry, ${boyName} you are not eligible, try next time`;
    return result;
}
var result = maleMarriageEligibility("Male", "25", "Billgates");
console.log(result);