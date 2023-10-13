console.log(`============== Created object for personal details ==================`);
const personalDetails = {
    name: "Prince",
    Education: "Engineer",
    contactNo: "9130***345",
    address: "Nagpur",
    areaOfInterest: "Front End Development"
}
console.log(`============== Created object for college details ==================`);

const collegeDetails = {
    clgName: "Sb Jain",
    address: "Nagpur",
    university: "RTMNU"
}

let mergeObjects = Object.assign({},personalDetails,collegeDetails);
console.log(`============ Object details After Merging them ==========`);
console.table(mergeObjects);

let friendName = ['sahil','kshitij','sakshi','kanaka','Prince']
Object.freeze(friendName);
console.log(friendName);
// var changeName = friendName.push("Dhoble");
// var changeName = friendName.push("Jethe");
// console.log(changeName);
// console.log(friendName);
console.log(`======================= Iterated through freezed array =========`);
for (const iterator of friendName) {
    console.log(iterator);

}
console.log(`=============== Reverse last word from the two words ===========`);

var words = "codemind Technology";
var reverse = '';
for(let i = words.length-1; i= words.length; i--){
    console.log(words.charAt(i));
}
