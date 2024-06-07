console.log("====================charAt()===============================");
var greet = "Good Morning";
var res = greet.length;
console.log("Total number of character in greet is", res);
// var charAt = greet.charAt(0);
// console.log(charAt);
console.log("Character at index 0 in greet is", greet.charAt(0));
// var indexOfGreet = greet.length-1;
console.log("The last third character in the greet is", greet.charAt(greet.length - 3));
console.log("==================== concate() ===============================");
var firstName = "Prince ";
var lastName = "Palewar";
var fullName = firstName.concat(lastName);
console.log(fullName);

console.log("========== concatenation =============== ");

var result = firstName.concat(lastName);
console.log(result);

console.log("========== indexOf =============== ");

var indexOfM = greet.lastIndexOf('M');
console.log('Index of M is: ', indexOfM);
console.log(greet.indexOf('nin'));
console.log('Index of char z:', greet.indexOf('z'));
console.log('Index of char D:', greet.indexOf('D'));

console.log("========== replace =============== ");

var result =greet.replace('Morning', "Afternoon");
console.log(result);
var result = greet.replace(' ', "-");
console.log(result);

console.log("========== trim() =============== ");
var str = "   Good Afternoon  ";
var lengthBeforeTrim = str.length;
console.log("Length before trim : ", str.length);
var result = str.trim();
console.log("Length after trim: ", result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ', result);

console.log("========== includes() =============== ");
var result = greet.includes('Morning');
console.log("Is Morning word available: ", result);
var result = greet.includes('nin');
console.log("Is nin word available: ", result);
var result = greet.includes('good');
console.log("Is good word available: ", result);

console.log("========== search() =============== ");
var greet = "Good Morning";
var result = greet.search('orn');
console.log(result);
var result = greet.search('after');
console.log(result);

console.log("========== slice() =============== ");
var greet = 'Hello Good Morning!';
var result = greet.slice(6);
console.log(result);
var result = greet.slice(6, 10);//the string will slice from index 6 till index 9 (10 means till before 10).
console.log(result);

console.log("========== split() =============== ");
var result = greet .split(" ");
console.log(result);

//WAP to count the number of words

var str = "I am a UI developer";
var split = str.split(" ");
console.log(split);
console.log("The number of words in the str variable is ",split.length);
console.log(`Total words are ${split.length}`);
console.log("data type:",typeof split);

console.log(`========== replaceAll ==========`);
var replaceStr = str.replaceAll(" ",'');
console.log(replaceStr); //no. of letter in str
console.log(replaceStr.length);

// String template
console.log("I am a \"UI\" developer"); 
console.log(`I am a "UI" developer`);   