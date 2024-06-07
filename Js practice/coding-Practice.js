function Counter() {
  let count = 0;
  this.counterInc = function () {
    count++;
    console.log(count);
  };
  this.counterDec = function () {
    count--;
    console.log(count);
  };
}
let counter1 = new Counter();
counter1.counterInc()
counter1.counterDec()
counter1.counterDec()

