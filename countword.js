var string = "I need a job";
var count = 0;
for (var i = 0; i< string.length; i++){
    var char = string[i];
    if(char == " " && string[i-1] != " "){
        count++
    }
}
count++;
console.log(count);