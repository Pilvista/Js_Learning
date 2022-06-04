isRaining = true;
isSunny = false;

if (isRaining == true) {
    console.log("Bring the umbrella"); 
}
else {
    console.log("Don't bring umbrella");
}

var myBudget = 100;
var applePrice = 80;
if (myBudget > applePrice) {
    console.log("Purchage some Apple");
}
else {
    console.log("Money is problem");
}
if (isSunny == true || applePrice < 100) {
    console.log("Time is Flying");
}
if (isSunny == true && applePrice < 100) {
    console.log("Time is Flying");
}
else {
    console.log("Today is not a sunny day");
}