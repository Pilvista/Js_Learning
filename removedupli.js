var numbers = [2,5,7,2,8,3,2,6,3];
var uniqueNumber = [];
for (i=0; i< numbers.length; i++){
    var number = numbers[i];
    var index = uniqueNumber.indexOf(number)
    if (index == -1){
        uniqueNumber.push(number);
    }
    
}
console.log(uniqueNumber);