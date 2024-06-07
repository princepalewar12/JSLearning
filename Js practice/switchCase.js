let months = function (key) {
    switch (key) {
        case 1:
            console.log('January');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('march');
            break;
        default:
            console.log('month Number is not Valid');
            break;
    }
}
months(1)
months(2)
months(3)
months(null)
months(undefined)
months('prince')