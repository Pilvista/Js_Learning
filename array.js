var softDrinks = ["coke", "pepsi","fanta", "dew"];
var softDrinksPrice = [ 15, 18, 20, 16];
var vowels = ["a", "e", "i", "o", "u"];
console.log(softDrinksPrice);
console.log(vowels.length);
console.log(softDrinks);
var softDrinksCount = softDrinks.length;
console.log(softDrinksCount);
console.log(softDrinks.indexOf("fanta"));
console.log(softDrinks.indexOf("Rc Cola"));//if not in array then it will be -1
console.log(softDrinks[1]);
console.log(softDrinks[99]); //if not in array then it will be undefined
softDrinksPrice[1] = 25; // changing value of an item in array
console.log(softDrinksPrice);
softDrinks.push("Hunter"); //adding new element in array 
console.log(softDrinks);
softDrinks.pop(); //removing  last element from array 
console.log(softDrinks);
var lastSoftDrinks = softDrinks.pop();//to store removed item in an variable
console.log(lastSoftDrinks);
softDrinks.unshift("Red Bull"); // Adding element in first place or of bennning of an array
console.log(softDrinks);
softDrinks.shift();// Remove element from first place or from bennning of an array
console.log(softDrinks);





