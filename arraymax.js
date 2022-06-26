var  numbers = [20,5,30,2,8,9,40,22,33,69,23,22,33,7];
var max = numbers[0];
for (var i = 0; i< numbers.length; i++){
    var element = numbers[i];
    if (element > max){
        max = element;
    }
}
console.log("Highest value: ",max)