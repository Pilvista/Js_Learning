var words = "I need a job badly";
var reverse = "";
for ( var i = 0; i < words.length; i++){
    var count = words[i];
    reverse = count + reverse;
} 
console.log(reverse);