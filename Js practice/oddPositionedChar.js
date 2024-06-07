let oddPositionedChar = (string) => {
  let char = "";
  let count = 0;
  let replaceSpace = string.replaceAll(" ", "");
  // console.log(replaceSpace);
  for (let i = 0; i <= replaceSpace.length - 1; i++) {
    if (i % 2 == 0) {
      char = char + replaceSpace[i];
      count++;
    }
  }
  console.log(`${char}`);
  console.log(count);
};
oddPositionedChar("Hard work always pays back");

// let oddChar = (str) => {
//     let replaceSpace = str.replaceAll(' ', '')
//     let count = 0;
//     let result = "";
//     for (let i = 0; i <= replaceSpace.length - 1; i++) {
//         // console.log(str[i]);
//         if (i % 2 == 0) {
//             result = result + replaceSpace[i];
//             count++;
//         }
//     }
//     console.log(result);
//     console.log(count);
// }
// oddChar("Hard work always pays back")
