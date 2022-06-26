function arraySum(numbers){
    var sum = 0;
    for (i=0; i< numbers.length; i++){
        var number = numbers[i];
        sum = sum + number; 
    }
    return sum;
}
var  numbers = [20,5,10,50,15];
var result = arraySum(numbers);
console.log(result);
