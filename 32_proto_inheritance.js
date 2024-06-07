let obj = {
  name: "prince",
  city: "nagpur",
  getIntro: function () {
    console.log(`${obj.name} from ${obj.city}`);
  },
};

let obj1 = {
    name: "Developer"
}

obj1.__proto__ = obj

let res = obj1.city;
console.log(res);
