function stringHandsOn() {
    var givenstr = "   Hey you are doing good, keep it up    "
    console.log(`1. Given string is: ${givenstr}`);
    console.log(`2. The length of given string is :${givenstr.length}`);
    var leadingSpace = givenstr.trim();
    console.log(`3.1 The given string after removing extra spaces: ${leadingSpace}`);
    console.log(`3.2 The length of given string after removing extra spaces is: ${givenstr.trim().length}`);
    var countExtraSpace = givenstr.length-givenstr.trim().length;
    console.log(`4. The number of extra spaces has been removed from the given string is:${countExtraSpace}`);
    var firstAndLastChar = leadingSpace.charAt(0);
    console.log(`5. The first character after removing extra spaces is "${firstAndLastChar}" and the last character is "${leadingSpace.charAt(leadingSpace.length-1)}"`);
    var wordCount = leadingSpace.split(" ");
    console.log(`6. Total number of words in the string after removing extra spaces are ${wordCount.length}.`);
    console.log(`7. The index number of word "good" is ${leadingSpace.indexOf('good')}.`);
    console.log(`8.1 Substring starting from index 22 by slice() method is "${leadingSpace.slice(22)}".`);
    console.log(`8.2 Substring starting from index 22 by subsrting() method is "${leadingSpace.substring(22)}".`);
    console.log(`9. check the given string is ending with "up" or not: ${leadingSpace.endsWith('up')}.`);
    console.log(`9. check the given string is start with "Hey" or not: ${leadingSpace.startsWith('Hey')}.`);
}   
stringHandsOn()

// count : PRINCE PALEWAR 
// SHA KEY: 3fab52fe8051e40215d5e9e89bd2b60edd70656b