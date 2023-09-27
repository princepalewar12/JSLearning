console.log("++++++++++++++++++++++++++++ TASK 01 ++++++++++++++++++++++++++++++++");
function squareOfWordLength(str) {
    var lengthOfStr = str.length
    var result = lengthOfStr * lengthOfStr;
    console.log(`The given string is: "${str}" and the square of its length is "${lengthOfStr * lengthOfStr}"`);
    return result;
}
squareOfWordLength("javascript")
squareOfWordLength("Google Chrome")
squareOfWordLength("Developer Smart")
console.log("\n");

console.log("++++++++++++++++++++++++++++ TASK 02 ++++++++++++++++++++++++++++++++");
function operatorOperation() {
    var position = "I am a Angular Developer";
    var stringLength = position.length;
    console.log(`The length of a given string is ${stringLength}`);
    var splitString = position.split(" ");
    var wordsLength = splitString.join("").length;
    console.log(`The number of words in the given string is:${wordsLength}`);
    console.log(`2.1 The result after dividing length of a given string by the number of words in the string is "${stringLength/wordsLength}"`);
    console.log(`2.2 The result after dividing length of a given string by the number of words in the string is "${stringLength*wordsLength}"`);

    // var result = stringLength/
}
operatorOperation();

// count1 : PRINCE PALEWAR 
// SHA Key: a14a65577a9a8c25b11b7bd100145e55707430b7