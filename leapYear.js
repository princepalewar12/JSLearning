var leapYear = function(year){
    if(isNaN(year) == false){
        if (year%4==0) {
            console.log(`The Entered year "${year}" is a Leap Year.`);
        }else{
            console.log(`The Entered year "${year}" is Not a leap Year`);
        }
        // console.log(`True`);
    }else if(isNaN(year) ==  true){
        console.log(`please Enter a valid number.`);
    }else if(year == null){
        console.log(`Null is not a number.`)
    }
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);

// count 5: PRINCE PALEWAR;
// SHA KEY: 9b152aaee7ae38c5d56f7fd982d4aa07365613e7