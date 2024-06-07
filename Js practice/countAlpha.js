let countA = (str) => {
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    let char = str[i].toLocaleUpperCase();
    if (char == "A") {
      count++;
    }
  }
  console.log(count);
};
countA("I AM Learning JavaScript, The Language of internetAAaaA");

function counta(string) {
  let char = "aA";
  let count = 0;
  for (let i = 0; i <= string.length - 1; i++) {
    if (char.includes(string[i])) {
      count++;
    }
  }
  console.log(count);
}
countA("I AM Learning JavaScript, The Language of internet");

