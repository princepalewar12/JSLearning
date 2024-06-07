console.log(
  `+++++++++++++++++++++++++ Male Marriage Eligibility +++++++++++++++++++++++++++++`
);

function maleMarriageEligibility(gender, age, boyName) {
  var stringGender = gender.toLowerCase();
  // console.log(`before:${typeof age}`);
  var numAge = Number(age);
  // console.log(`after ${typeof numAge}`);
  // console.log(stringGender);
  var result =
    stringGender == "male" && numAge >= 21
      ? console.log(`Hey "${boyName}" you are eligible for Marriage.`)
      : console.log(
          `Sorry "${boyName}" but you are not Eligible for Marriage.\n`
        );
  return result;
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("male", "17", "Steve Jobs");

console.log(
  `+++++++++++++++++++++++++ Female Marriage Eligibility +++++++++++++++++++++++++++++`
);

function femaleMarriageEligibility(gender, age, girlName) {
  var stringGender = gender.toLowerCase();
  // console.log(`before:${typeof age}`);
  var numAge = Number(age);
  // console.log(`after ${typeof numAge}`);
  // console.log(stringGender);
  var result =
    stringGender == "female" && numAge >= 18
      ? console.log(`Hey "${girlName}" you are eligible for Marriage.`)
      : console.log(
          `Sorry "${girlName}" but you are not Eligible for Marriage.`
        );
  return result;
}
femaleMarriageEligibility("Female", "16", "Jenifer");
femaleMarriageEligibility("female", 27, "Milinda Gates");

// count 2: PRINCE PALEWAR
// SHA KEY: adeb4d992f0f81e9f0ec409560d46b23b837082a
